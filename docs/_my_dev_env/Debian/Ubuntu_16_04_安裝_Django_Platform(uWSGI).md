# Ubuntu 16.04 安裝 Django Platform(uWSGI)
**作業程序：**
（1）安裝 Python 執行環境
（2）安裝 DB Server: PostgreSQL
（3）安裝 App Server: uWSGI
（4）安裝 Web Server: Nginx
（5）設定 App Server 能於開機自動啟動（systemd）

在 Ubuntu 16.04 的伺服器，安裝以 Django + PostgreSQL 為平台所開發之「應用系統」。

應用系統為考量執行效能（Performance），故而將 Web Server 與 Application Server 分離，令 ： 


- Web Server ：專司服務靜態的 Web Client Request（如：.HTML 網頁、.CSS 樣式、.JPG / .PNG / …. 圖檔）；
- Application Server：專司服務動態的 Web Client Request 



----------


# 安裝 Python 執行環境

**（1）安裝 Python3**

    $ sudo apt-get update
    $ sudo apt-get install python3-pip
    $ sudo -H pip3 install --upgrade pip

**（2）安裝虛擬環境（VirtualEnv）管理工具**

 **1.  安裝「虛擬環境（VirtualEnv）管理工具」：VirtualEnvWrapper**

    $ sudo -H pip3 install virtualenv virtualenvwrapper

**2. 設定 VirtualEnvWrapper 所需之環境變數** 
在 ~/.bashrc 檔案中加入以下內容

    export WORKON_HOME=~/Envs
    export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
    source /usr/local/bin/virtualenvwrapper.sh

 **3. 啟用 VirtualEnvWrapper 工具：**

    $ source ~/.bashrc 

參考資料：

 1. 建立 VirtualEnv

    $ mkvirtualenv django2_helloworld

 2. 查詢 VirtualEnv

    $ workon 

 
 3. 啟用某 VirtualEnv

    $ workon <VirtualEnvName>

 
 4. 停用 VirtualEnv

    $ deactivate



----------
# 安裝 App Server: uWSGI

**（1）執行 App Server： uWSGI 安裝指令。**

    $ deactivate
    $ sudo apt-get install python3-dev
    $ sudo -H pip3 install uwsgi
    
    $ sudo mkdir -p /etc/uwsgi/sites

**（2）驗證安裝已完成。**

    $ sudo service uwsgi status

參考資料：
uwsgi  進階用法參考。


    [uwsgi]
    for-readline = yourfile
      env = %(_)
    endfor = 

使用「設定檔」：

    [uwsgi]
    env = DJANGO_SETTINGS_MODULE=$(project).settings.staging



----------
# 安裝 Web Server: Nginx

安裝及設定 Web Server（Nginx）。

**（1）執行 Web Server: Nginx 安裝指令。**

    $ sudo apt-get install nginx

**（2）驗證安裝已完成。**

    $ sudo service nginx status


----------
# 設定 App Server 能於開機自動啟動

create a system Unit File for uWSGI

**Create a service configuration file**

    $ sudo subl /etc/systemd/system/uwsgi.service

uwsgi.service:

    [Unit]
    Description=uWSGI Emperor service
    
    [Service]
    ExecStartPre=/bin/bash -c 'mkdir -p /run/uwsgi; chown alanjui:www-data /run/uwsgi'
    ExecStart=/usr/local/bin/uwsgi --emperor /etc/uwsgi/sites
    Restart=always
    KillSignal=SIGQUIT
    Type=notify
    NotifyAccess=all
    
    [Install]
    WantedBy=multi-user.target

**Restart Daemon-reload (uwsgi.service chaged)**

    $ sudo systemctl daemon-reload

or

    $ sudo service uwsgi restart
    $ sudo service uwsgi status

**設定開機需自動啟動的  Daemon (Service)**

    $ sudo systemctl enable nginx
    $ sudo systemctl enable uwsgi



----------


# Site 安裝及設定

**（1）安裝 Site ：**

    $ cd /app
    $ git clone <url>
    $ cd django2_helloworld
    $ mkvirtualenv django2_helloworldu
    $ (workon django2_helloworld)
    $ pip install -r requirements.txt


    $ cd /app
    $ git clone <url>
    $ cd django2_helloworld
    $ mkvirtualenv -r requirements.txt --python=python3.6 django2_helloworld

**（2）驗證已能正常執行：**

    $ ./manage.py makemigrations
    $ ./manage.py migrate
    $ ./manage.py createsuperuser
    $ ./manage.py collectstatic
    $ ./manage.py runserver 0.0.0.0:8080

**（3）建立 App Server 設定檔：**

    $ sudo subl /etc/uwsgi/sites/django2_helloworld.ini

django2_helloworld.ini 檔案內容：

    [uwsgi]
    
    uid             = alanjui
    base            = /app
    project         = django2_helloworld
    site            = helloworld_project
    
    # =======================
    # Django-related settings
    # =======================
    
    # the project base directory (full path) : /app/django2_helloworld
    chdir           = %(base)/%(project)
    # Django's wsgi file : helloworld_project.wsgi:application
    module          = %(site).wsgi:application
    # the virtualenv (full path) : /home/alanjui/anaconda3/envs/DJANGO2
    home            = /home/%(uid)/Envs/%(project)
    
    # ========================
    # process-related settings
    # ========================
    
    # master
    master          = true
    # maximum number of worker processes
    processes       = 4
    threads         = 2
    # the socket (use the full path to be safe)
    socket          = /run/uwsgi/%(project).sock
    # ... with appropriate permissions - may be needed
    chown-socket    = %(uid):www-data
    chmod-socket    = 660
    # clear environment on exit
    vacuum          = true

驗證 App Server 設定檔是否正確設定：

 1. 自終端機下指令：

    uwsgi --http :8001 --home /home/alanjui/Envs/django2_helloworld --chdir /app/django2_helloworld -w helloworld_project.wsgi

 2. 自瀏覽器確認可以看到內容：

    http://192.168.66.10:8001/

 3. 在終端機按 <Ctrl>+<C>  ，終結剛才已下的指令。

**（4）建立 Web Server 設定檔：**

    $ sudo subl /etc/nginx/sites-available/django2_helloworld.conf 

Web Server 設定檔內容 -- django2_helloworld.conf：

    # configuration of the server
    server {
        # the port your site will be served on
        listen          80;
        # the domain name it will serve for
        #server_name     .example.com; # substitute your machine's Ip address or FQDN
        server_name     192.168.66.10;
        charset         utf8-8;
    
        # max upload size
        client_max_body_size 75M;  # adjust to taste
    
        location = /favicon.ico {
            access_log      off;
            log_not_found   off;
        }
    
        # Django media
        location /media {
            root    /app/django2_helloworld;
            #alias   /app/django2_helloworld/media;  # your Django project's media files - amend as required
        }
    
        # settings.py: STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
        # ./manage.py collectstatic
        location /static {
            root    /app/django2_helloworld;
            #alias   /app/django2_helloworld/static; # your Django project's static files - amend as required
        }
    
        # Finally, send all non-media requests to the Django server
        location / {
            include         uwsgi_params; # should be located in /etc/nginx/
            uwsgi_pass      unix:///run/uwsgi/django2_helloworld.sock;
        }
    }

**（5）啟用 Web Server: Nginx 設定檔**

    $ sudo ln -s /etc/nginx/sites-available/django2_helloworld.conf /etc/nginx/sites-enable/

**（6）驗證 Nginx 設定檔的設定正確**

    $ sudo nginx -t

**（7）重新啟動 Web Server: Nginx**

    $ sudo service nginx restart
    $ sudo service nginx status

**（8）重新啟動 App Server: uWSGI**

    $ sudo service uwsgi restart
    $ sudo service uwsgi status


----------


# 其它Site 安裝及設定參考


## Wagtail

**環境設定檔:**

- base.py
- dev.py
- staging.py
- production.py
- wsgi.py

**使用「環境設定檔」啟動 ./manage.py 用法:**


- DJANGO_SETTINGS_MODULE=wagtail_mysite.settings.staging


    $ DJANGO_SETTINGS_MODULE=wagtail_mysite.settings.staging python manage.py migrate
    $ DJANGO_SETTINGS_MODULE=wagtail_mysite.settings.staging python manage.py createsuperuser
    $ DJANGO_SETTINGS_MODULE=wagtail_mysite.settings.staging python manage.py collectstatic
    $ DJANGO_SETTINGS_MODULE=wagtail_mysite.settings.staging python manage.py runserver 192.168.66.10:8888

App Server 設定檔：**/etc/uwsgi/sites/wagtail_mysite.ini**

    [uwsgi]
    project = wagtail_mysite
    uid = alanjui
    base = /home/%(uid)
    
    chdir = %(base)/sites/%(project)
    home = %(base)/Envs/%(project)
    env = NEW_RELIC_ENVIRONMENT=staging
    env = DJANGO_SETTINGS_MODULE=$(project).settings.staging
    module = %(project).wsgi:application
    
    master = true
    processes = 5
    
    socket = /run/uwsgi/%(project).sock
    chown-socket = %(uid):www-data
    chmod-socket = 660
    vacuum = true

Web Server 設定檔內容 — /etc/nginx/sites-avaiable/**wagtail_mysite:**

    server {
        listen 80;
        server_name 192.168.66.10;
    
        location = /favicon.ico {
                access_log off; 
                log_not_found off;
        }
    
        location /static/ {
            root /home/alanjui/sites/wagtail_mysite;
        }
    
        location / {
            include uwsgi_params;
            uwsgi_pass unix:/run/uwsgi/wagtail_mysite.sock;
        }
    }

**啟用 Web Server: Nginx 設定檔**

    $ sudo ln -s /etc/nginx/sites-available/wagtail_mysite /etc/nginx/sites-enabled




----------
## my_project

App Server 設定檔： **/etc/uwsgi/sites/my_project.ini**

    [uwsgi]
    project = my_project
    uid = alanjui
    base = /home/%(uid)
    
    chdir = %(base)/sites/%(project)
    home = %(base)/Envs/%(project)
    module = %(project).wsgi:application
    
    master = true
    processes = 5
    
    socket = /run/uwsgi/%(project).sock
    chown-socket = %(uid):www-data
    chmod-socket = 660
    vacuum = true

**Verify uWSGI**

    $ uwsgi --http :8080 --home /home/alanjui/Envs/my_project --chdir /home/alanjui/sites/my_project -w my_project.wsgi


Web Server 設定檔內容 —/etc/nginx/sites-avaiable/**my_project:**

    server {
        listen 8080;
        server_name 192.168.66.10;
    
        location = /favicon.ico {
                access_log off; 
                log_not_found off;
        }
    
        location /static/ {
            root /home/alanjui/sites/my_project;
        }
    
        location / {
            include uwsgi_params;
            uwsgi_pass unix:/run/uwsgi/my_project.sock;
        }
    }

**啟用 Web Server: Nginx 設定檔**

    $ sudo ln -s /etc/nginx/sites-available/my_project /etc/nginx/sites-enabled




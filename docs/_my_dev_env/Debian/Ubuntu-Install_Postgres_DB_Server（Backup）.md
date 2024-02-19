# vagrant + pyenv + pipenv + postgres

# Host 端開發機

開發機本身作業系統為： Mac OS X

    brew install pyenv


    brew upgrade pyenv



    brew upgrade pyenv
    ==> Upgrading 1 outdated package:
    pyenv 1.2.10 -> 1.2.11
    ==> Upgrading pyenv
    ==> Installing dependencies for pyenv: readline
    ==> Installing pyenv dependency: readline
    ==> Downloading https://homebrew.bintray.com/bottles/readline-8.0.0_1.mojave.bottle.tar.gz
    ######################################################################## 100.0%
    ==> Pouring readline-8.0.0_1.mojave.bottle.tar.gz
    ==> Caveats
    readline is keg-only, which means it was not symlinked into /usr/local,
    because macOS provides the BSD libedit library, which shadows libreadline.
    In order to prevent conflicts when programs look for libreadline we are
    defaulting this GNU Readline installation to keg-only.

    For compilers to find readline you may need to set:
      export LDFLAGS="-L/usr/local/opt/readline/lib"
      export CPPFLAGS="-I/usr/local/opt/readline/include"

    For pkg-config to find readline you may need to set:
      export PKG_CONFIG_PATH="/usr/local/opt/readline/lib/pkgconfig"

    ==> Summary
    🍺  /usr/local/Cellar/readline/8.0.0_1: 48 files, 1.5MB
    ==> Installing pyenv
    ==> Downloading https://homebrew.bintray.com/bottles/pyenv-1.2.11.mojave.bottle.tar.gz
    ######################################################################## 100.0%
    ==> Pouring pyenv-1.2.11.mojave.bottle.tar.gz
    🍺  /usr/local/Cellar/pyenv/1.2.11: 643 files, 2.4MB
    ==> Caveats
    ==> readline
    readline is keg-only, which means it was not symlinked into /usr/local,
    because macOS provides the BSD libedit library, which shadows libreadline.
    In order to prevent conflicts when programs look for libreadline we are
    defaulting this GNU Readline installation to keg-only.

    For compilers to find readline you may need to set:
      export LDFLAGS="-L/usr/local/opt/readline/lib"
      export CPPFLAGS="-I/usr/local/opt/readline/include"

    For pkg-config to find readline you may need to set:
      export PKG_CONFIG_PATH="/usr/local/opt/readline/lib/pkgconfig"

---

完成 pyenv 安裝後，會產生目錄 ~/.pyenv

    $ tree -L 1 ~/.pyenv
    /Users/alanjui/.pyenv
    ├── shims
    └── versions


    $ tree -L 2 ~/.pyenv
    /Users/alanjui/.pyenv
    ├── shims
    │   ├── 2to3
    │   ├── 2to3-3.6
    │   ├── 2to3-3.7
    │   ├── easy_install
    │   ├── easy_install-3.6
    │   ├── easy_install-3.7
    │   ├── idle
    │   ├── idle3
    │   ├── idle3.6
    │   ├── idle3.7
    │   ├── pip
    │   ├── pip3
    │   ├── pip3.6
    │   ├── pip3.7
    │   ├── pydoc
    │   ├── pydoc3
    │   ├── pydoc3.6
    │   ├── pydoc3.7
    │   ├── python
    │   ├── python-config
    │   ├── python3
    │   ├── python3-config
    │   ├── python3.6
    │   ├── python3.6-config
    │   ├── python3.6-gdb.py
    │   ├── python3.6m
    │   ├── python3.6m-config
    │   ├── python3.7
    │   ├── python3.7-config
    │   ├── python3.7-gdb.py
    │   ├── python3.7m
    │   ├── python3.7m-config
    │   ├── pyvenv
    │   ├── pyvenv-3.6
    │   └── pyvenv-3.7
    └── versions
        ├── 3.6.8
        └── 3.7.3

---

    pyenv install 3.8.5



    $ pyenv versions
    * system (set by /Users/alanjui/.pyenv/version)
      3.6.8
      3.7.3



    $ pyenv version
    system (set by /Users/alanjui/.pyenv/version)



    $ pyenv global 3.7.3

    $ pyenv version
    3.7.3 (set by /Users/alanjui/.pyenv/version)

    $ python --version
    Python 2.7.15

    $ python3 --version
    Python 3.7.3



    $ pyenv which python
    $ pip install pipenv

---

# Guest 端虛擬機

啟動虛擬機

（1）在開發機使用 Terminal App 執行以下指令：

    $ vagrant up
    $ vagrant ssh

（2）執行「安裝 pipenv 作業」。

（3）執行「安裝 Postgres 作業」。

（4）執行「驗證資料庫系統已備妥」。

（5）啟動虛擬機的伺服器。

    DJANGO_SETTINGS_MODULE="web_site.settings.prod" ./manage.py collectstatic
    DJANGO_SETTINGS_MODULE="web_site.settings.prod" ./manage.py createsuperuserv
    DJANGO_SETTINGS_MODULE="web_site.settings.prod" ./manage.py runserver 0:8000

## 安裝 Postgres 作業

安裝 Postgres DB 資料庫系統，及進行：使用者、資料庫設定。

    $ sudo apt install postgresql postgresql-contrib



    $ sudo -u postgres createuser django2_helloworld -P

-P 表 Password，當要求輸入 password 時，輸入： **Passw0rd** 。

    $ sudo -u postgres createdb django2_helloworld_db -O django2_helloworld

## 安裝 postcopg2 作業

安裝 python 套件，以便 Django Framework 可存取 Postgres DB 資料庫。

    $ sudo apt install python3-dev python3-psycopg2 libpq-dev



    $ pip3 install psycopg2

修訂 web_site/settings/prod.py 設定：

    DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql_psycopg2',
           'NAME': 'django2_helloworld_db',
           'USER': 'django2_helloworld',
           'PASSWORD': 'Passw0rd',
           'HOST': 'localhost',
           'PORT': '5432',
       }
    }

    DATABASE_URL = 'postgres://django2_helloworld:Passw0rd@localhost:5432/django2_hellowrold_db'

## 驗證資料庫系統已備妥

    $ DJANGO_SETTINGS_MODULE=web_site.settings.prod ./manage.py migrate
    $ sudo -u postgres psql django2_helloworld_db

## 安裝 pipenv 作業

    $ pip install --upgrade pip


    $ pyenv versions


    $ cd <ProjectRootDir>


    $ pyenv local 3.7.3


    $ python --version


    $ pip install -U pipenv


    $ pipenv --version

參考資訊：

    $ which pipenv
    /Users/alanjui/.pyenv/shims/pipenv

    ll ~/.pyenv/shims/pipenv*
    -rwxr-xr-x  1 alanjui  staff   417B  4 29 22:04 /Users/alanjui/.pyenv/shims/pipenv
    -rwxr-xr-x  1 alanjui  staff   417B  4 29 22:04 /Users/alanjui/.pyenv/shims/pipenv-resolver

## 啟動虛擬環境

~/.bashrc

    export PYENV_ROOT="$HOME/.pyenv"
    export PATH="$PYENV_ROOT/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"
    if command -v pyenv 1>/dev/null 2>&1; then
      eval "$(pyenv init -)"
    fi

    # Create VirtualEnvironment directory under Django Project Root
    export PIPENV_VENV_IN_PROJECT="enabled"


    $ source ~/.bashrc


    $ python --version

若版本不是 3.7.3 ，則需先執行指令： pyenv local 3.7.3

    $ pipenv install


    $ pipenv shell


    $ pipenv install django==2.2

## nginx

/etc/nginx/site-available/django_app

    server {
            listen 80 default_server;
            # listen [::]:80 default_server;

            server_name _;

            # root /var/www/html;
            root /home/vagrant/workspace/django_app;

            # Add index.php to the list if you are using PHP
            index index.html index.htm index.nginx-debian.html;

            location / {
                    # First attempt to serve request as file, then
                    # as directory, then fall back to displaying a 404.
                    try_files $uri $uri/ =404;

                    include uwsgi_params;
                    uwsgi_pass 127.0.0.1:3031;
            }
    }


    $ sudo ln -s /etc/nginx/site-available/django_app /etc/nginx/site-enabled/

## uwsgi

**製作 uwsgi 執行檔**

    sudo apt install build-essential python-dev


    $ cd ~/tmp
    $ wget http://projects.unbit.it/downloads/uwsgi-latest.tar.gz
    $ tar zxvf uwsgi-latest.tar.gz
    $ cd <dir>
    $ make
    $ sudo cp uwsgi /usr/bin
    $ sudo chown root:root /usr/bin/uwsgi
    $ sudo chmod 755 /usr/bin/uwsgi



    $ uwsgi --http :3031 --home /home/vagrant/workspace/django_app/.venv/ --chdir /home/vagrant/workspace/django_app/ -w web_site.wsgi

使用瀏覽器觀察網址： http://127.0.0.1:3031/ ，驗證 uwsgi 已能正常運作。

    $ sudo uwsgi --socket /run/uwsgi/django_app.sock --home /home/vagrant/workspace/django_app/.venv/ --chdir /home/vagrant/workspace/django_app/ --module web_site.wsgi --chmod-socket=664 --uid www-data --gid www-data

使用 **Ctrl + C** 結束 uwsgi 。

**建立 uwsgi 執行設定檔**

    vagrant@linux:~$ sudo mkdir -p /etc/uwsgi/sites-available
    vagrant@linux:~$ sudo mkdir -p /etc/uwsgi/sites-enabled
    vagrant@linux:~$ sudo chown -R vagrant:www-data /etc/uwsgi/
    vagrant@linux:~$ ll /etc/uwsgi/
    total 24
    drwxr-xr-x   4 vagrant www-data  4096 May  2 00:56 ./
    drwxr-xr-x 129 root    root     12288 May  2 00:56 ../
    drwxr-xr-x   2 vagrant www-data  4096 May  2 01:01 sites-available/
    drwxr-xr-x   2 vagrant www-data  4096 May  2 01:04 sites-enabled/


    $ sudo nano /etc/uwsgi/sites-available/django_app.ini

**django_app.ini**

    [uwsgi]

    uid = www-data
    gid = www-data

    project = django_app
    site = web_site
    base = /home/vagrant/workspace/%(project)

    #========================
    # Django-related settings
    #========================

    chdir = %(base)

    home = %(base)/.venv

    # Django's wsgi file
    module = web_site.wsgi

    #===============================
    # uwsgi process-related settings
    #===============================

    # master mode
    master = true

    # maximum number of worker processes
    processes = 4

    # the socket (use the full path to be safe)
    # socket = 127.0.0.1:3031
    # socket = %(base)/%(project).socket
    socket = /run/uwsgi/%(project).sock

    # ... with appropriate permissions - may be needed
    # chown-socket = %(uid):%(gid)
    chmod-socket = 664

    # clear environment on exit
    vacuum = true

    # others......
    stats = 127.0.0.1:9191







    vagrant@linux:~$ sudo ln -s /etc/uwsgi/sites-available/django_app.ini /etc/uwsgi/sites-enabled/
    vagrant@linux:~$ ll /etc/uwsgi/sites-enabled/
    total 8
    drwxr-xr-x 2 root root 4096 May  2 01:04 ./
    drwxr-xr-x 4 root root 4096 May  2 00:56 ../
    lrwxrwxrwx 1 root root   41 May  2 01:04 django_app.ini -> /etc/uwsgi/sites-available/django_app.ini

**設定 socket 目錄**

    $ sudo mkdir -p /run/uwsgi
    $ sudo chown -R vagrant:vagrant /run/uwsgi
    $ sudo chmod -R 660 /run/uwsgi

**驗證 uwsgi 設定檔**

    $ uwsgi --http :3031 --ini /etc/uwsgi/sites-enabled/django_app.ini

## 系統層級 uwsgi

    $ sudo ln -s /home/vagrant/workspace/django_app/django_app.ini /etc/uwsgi/sites-enabled/



    $ sudo uwsgi /etc/uwsgi/sites-enabled/django_app.ini --uid www-data --gid www-data
    [uWSGI] getting INI configuration from /etc/uwsgi/sites-enabled/django_app.ini
    *** Starting uWSGI 2.0.18 (64bit) on [Thu May  2 08:14:14 2019] ***
    compiled with version: 7.3.0 on 30 April 2019 14:10:59
    os: Linux-4.15.0-47-generic #50-Ubuntu SMP Wed Mar 13 10:44:52 UTC 2019
    nodename: linux
    machine: x86_64
    clock source: unix
    detected number of CPU cores: 3
    current working directory: /home/vagrant/workspace/django_app
    detected binary path: /usr/bin/uwsgi
    !!! no internal routing support, rebuild with pcre support !!!
    setgid() to 33
    setuid() to 33
    chdir() to /home/vagrant/workspace/django_app
    your processes number limit is 11835
    your memory page size is 4096 bytes
    detected max file descriptor number: 1024
    lock engine: pthread robust mutexes
    thunder lock: disabled (you can enable it with --thunder-lock)
    uwsgi socket 0 bound to UNIX address /home/vagrant/workspace/django_app/django_app.socket fd 3
    Python version: 3.7.3 (default, Apr 29 2019, 15:06:56)  [GCC 7.3.0]
    Set PythonHome to /home/vagrant/workspace/django_app/.venv
    *** Python threads support is disabled. You can enable it with --enable-threads ***
    Python main interpreter initialized at 0x56172a70efc0
    your server socket listen backlog is limited to 100 connections
    your mercy for graceful operations on workers is 60 seconds
    mapped 802120 bytes (783 KB) for 10 cores
    *** Operational MODE: preforking ***
    WSGI app 0 (mountpoint='') ready in 0 seconds on interpreter 0x56172a70efc0 pid: 11247 (default app)
    *** uWSGI is running in multiple interpreter mode ***
    spawned uWSGI master process (pid: 11247)
    spawned uWSGI worker 1 (pid: 11248, cores: 1)
    spawned uWSGI worker 2 (pid: 11249, cores: 1)
    spawned uWSGI worker 3 (pid: 11250, cores: 1)
    spawned uWSGI worker 4 (pid: 11251, cores: 1)
    spawned uWSGI worker 5 (pid: 11252, cores: 1)
    spawned uWSGI worker 6 (pid: 11253, cores: 1)
    spawned uWSGI worker 7 (pid: 11254, cores: 1)
    spawned uWSGI worker 8 (pid: 11255, cores: 1)
    spawned uWSGI worker 9 (pid: 11256, cores: 1)
    spawned uWSGI worker 10 (pid: 11257, cores: 1)
    *** Stats server enabled on 127.0.0.1:9191 fd: 27 ***

## 設定開機自動啟動 uwsgi 功能

    $ sudo usermod -a -G www-data vagrant



    $ sudo cp -R /home/vagrant/workspace/django_app /var/www/



    $ sudo nano /etc/uwsgi/sites-available/django_app.ini

**django_app.ini：**

    [uwsgi]

    uid = root
    gid = root

    project = django_app
    site = web_site
    base = /var/www/%(project)

    # chdir = /var/www/django_app
    chdir = %(base)

    # home = /var/www/django_app/.venv
    home = %(base)/.venv

    wsgi-file = web_site/wsgi.py


    master = true
    processes = 4
    threads = 2

    # socket = 127.0.0.1:3031
    socket = /run/uwsgi/%(project).socket
    chown-socket = %(uid):%(gid)
    chmod-socket = 660

    stats = 127.0.0.1:9191

    vacuum = true



    $ sudo nano /etc/nginx/sites-available/django_app

**django_app：**

    server {
            listen 80 default_server;
            # listen [::]:80 default_server;

            server_name localhost;

            # root /var/www/html;
            root /var/www/django_app;

            # Add index.php to the list if you are using PHP
            index index.html index.htm index.nginx-debian.html;


            location = /favicon.ico {
                access_log      off;
                log_not_found   off;
            }


            location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;

                include uwsgi_params;
                # uwsgi_pass 127.0.0.1:3031;
                uwsgi_pass unix:///run/uwsgi/django_app.socket;
            }


            location /static {
                root    /var/www/django_app/static;
            }
    }

透過 systemd ，令 uwsgi 成為開機後便會自動啟動的 service 。

    $ sudo nano /etc/systemd/system/uwsgi.service

**uwsgi.service：**

    [Unit]
    Description=uWSGI Emperor service

    [Service]
    ExecStartPre=/bin/bash -c 'mkdir -p /run/uwsgi; chown root:root /run/uwsgi'
    ExecStart=/usr/bin/uwsgi --emperor /etc/uwsgi/sites-enabled
    Restart=always
    KillSignal=SIGQUIT
    Type=notify
    NotifyAccess=all

    [Install]
    WantedBy=multi-user.target



    $ sudo systemctl enable uwsgi
    Created symlink /etc/systemd/system/multi-user.target.wants/uwsgi.service → /etc/systemd/system/uwsgi.service.



    $ sudo service uwsgi status
    ● uwsgi.service - uWSGI Emperor service
       Loaded: loaded (/etc/systemd/system/uwsgi.service; enabled; vendor preset: enabled)
       Active: inactive (dead)



    $ sudo service uwsgi start
    $ sudo service uwsgi status
    ● uwsgi.service - uWSGI Emperor service
       Loaded: loaded (/etc/systemd/system/uwsgi.service; enabled; vendor preset: enabled)
       Active: active (running) since Thu 2019-05-02 05:21:15 UTC; 1min 6s ago
      Process: 7972 ExecStartPre=/bin/bash -c mkdir -p /run/uwsgi; chown root:root /run/uwsgi (code=exited, status=0/SUCCESS)
     Main PID: 7975 (uwsgi)
       Status: "The Emperor is governing 1 vassals"
        Tasks: 10 (limit: 3550)
       CGroup: /system.slice/uwsgi.service
               ├─7975 /usr/bin/uwsgi --emperor /etc/uwsgi/sites-enabled
               ├─7976 /usr/bin/uwsgi --ini django_app.ini
               ├─7977 /usr/bin/uwsgi --ini django_app.ini
               ├─7978 /usr/bin/uwsgi --ini django_app.ini
               ├─7980 /usr/bin/uwsgi --ini django_app.ini
               └─7981 /usr/bin/uwsgi --ini django_app.ini

    May 02 05:21:16 linux uwsgi[7975]: *** WARNING: you are running uWSGI as root !!! (use the --uid flag) ***
    May 02 05:21:16 linux uwsgi[7975]: *** uWSGI is running in multiple interpreter mode ***
    May 02 05:21:16 linux uwsgi[7975]: spawned uWSGI master process (pid: 7976)
    May 02 05:21:16 linux uwsgi[7975]: Thu May  2 05:21:16 2019 - [emperor] vassal django_app.ini has been spawned
    May 02 05:21:16 linux uwsgi[7975]: spawned uWSGI worker 1 (pid: 7977, cores: 2)
    May 02 05:21:16 linux uwsgi[7975]: spawned uWSGI worker 2 (pid: 7978, cores: 2)
    May 02 05:21:16 linux uwsgi[7975]: Thu May  2 05:21:16 2019 - [emperor] vassal django_app.ini is ready to accept requests
    May 02 05:21:16 linux uwsgi[7975]: spawned uWSGI worker 3 (pid: 7980, cores: 2)
    May 02 05:21:16 linux uwsgi[7975]: spawned uWSGI worker 4 (pid: 7981, cores: 2)
    May 02 05:21:16 linux uwsgi[7975]: *** Stats server enabled on 127.0.0.1:9191 fd: 16 ***



    $ sudo systemctl daemon-reload

---

# Ref

https://hackernoon.com/reaching-python-development-nirvana-bb5692adf30c

https://github.com/pyenv/pyenv/wiki/common-build-problems

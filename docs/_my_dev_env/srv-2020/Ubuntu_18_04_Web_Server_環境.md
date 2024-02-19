# Ubuntu 18.04 Web Server 環境

- 使用者帳號與群組建立
- Python環境安裝與設定
- DB服務（Postgres）安裝與設定
- 網站安裝與設定
- uWSGI服務安裝與設定
- nginx服務安裝與設定


# 使用者帳號與群組建立

以下說明在作業系統環境，應建立之使用者帳號及群組。


## 設定使用者與群組

**加入使用者帳號**

    $ sudo adduser juzhengzhong
    $ usermod -aG sudo juzhengzhong

**先登出再使用 juzhengzhong 使用者帳號登入**

**將登入時使用的使用者帳號加入 www-data 群組**

    $ sudo usermod -aG www-data $USER

**驗證設定成功：**

先登出，再登入才能執行下列驗證指令。

    $ groups


    $ groups
    juzhengzhong root adm sudo www-data sambashare docker
    $ id
    uid=1003(juzhengzhong) gid=1004(juzhengzhong) 群組=1004(juzhengzhong),0(root),4(adm),27(sudo),33(www-data),126(sambashare),999(docker)




----------


# Python環境安裝與設定

**更新作業系統套件庫。**

    sudo apt-get update
    sudo apt-get upgrade

**檢查作業系統預先安裝之 python 3 是否存在，且能正常運作。**

    # check if installed
    python3.6 --version
    ==> Python 3.6.5

**在作業系統安裝 pip3 套件。**

    $ sudo apt install python3-pip
    # Check if installed successfully
    $ pip3 --version
    pip 9.0.1 from /usr/lib/python3/dist-packages (python 3.6)

**安裝  python 3 之 virtualenv 套件。**

    $ sudo -H pip3 install virtualenv


    $ sudo -H pip3 install virtualenv
    Requirement already satisfied: virtualenv in /usr/local/lib/python3.6/dist-packages

**安裝  python 3 之 pipenv 套件。**

    $ sudo -H pip3 install pipenv


    $ sudo -H pip3 install pipenv
    Collecting pipenv
      Downloading https://files.pythonhosted.org/packages/13/b4/3ffa55f77161cff9a5220f162670f7c5eb00df52e00939e203f601b0f579/pipenv-2018.11.26-py3-none-any.whl (5.2MB)
        100% |████████████████████████████████| 5.2MB 53kB/s
    Collecting virtualenv-clone>=0.2.5 (from pipenv)
      Downloading https://files.pythonhosted.org/packages/e3/d9/d9c56deb483c4d3289a00b12046e41428be64e8236fa210111a1f57cc42d/virtualenv_clone-0.5.1-py2.py3-none-any.whl
    Requirement already satisfied: setuptools>=36.2.1 in /usr/lib/python3/dist-packages (from pipenv)
    Requirement already satisfied: certifi in /usr/lib/python3/dist-packages (from pipenv)
    Requirement already satisfied: pip>=9.0.1 in /usr/lib/python3/dist-packages (from pipenv)
    Requirement already satisfied: virtualenv in /usr/local/lib/python3.6/dist-packages (from pipenv)
    Installing collected packages: virtualenv-clone, pipenv
    Successfully installed pipenv-2018.11.26 virtualenv-clone-0.5.1




----------


# DB服務（Postgres）安裝與設定 


## 安裝 Postgres 套件

**安裝指令：**

    $ sudo apt install postgresql postgresql-contrib

**摘要：**

程式： /var/lib/postgresql/11/main/

重新啟動 Postgres Database Server：  /usr/lib/postgresql/11/bin/pg_ctl -D /var/lib/postgresql/11/main -l logfile start

Ver Cluster Port Status Owner    Data directory              Log file
11  main    5432 down   postgres /var/lib/postgresql/11/main /var/log/postgresql/postgresql-11-main.log
update-alternatives: using /usr/share/postgresql/11/man/man1/postmaster.1.gz to provide /usr/share/man/man1/postmaster.1.gz (postmaster.1.gz) in auto mode

**驗證安裝**

    $ sudo -u postgres psql -c "SELECT version();"



## 操作 psql

**方法一：不切換使用者帳號操作法**


    juzhengzhong@SRV-01:~$ sudo -u postgres psql
    psql (11.2 (Ubuntu 11.2-1.pgdg18.04+1))
    Type "help" for help.
    
    postgres=# \q
    juzhengzhong@SRV-01:~$

**方法二：先切換成 postgres 帳號操作法**


    juzhengzhong@SRV-01:~$ sudo su - postgres
    postgres@SRV-01:~$ psql
    psql (11.2 (Ubuntu 11.2-1.pgdg18.04+1))
    Type "help" for help.
    
    postgres=# \q
    postgres@SRV-01:~$ exit
    登出
    juzhengzhong@SRV-01:~$1



## 建立 Role 與 Database 授權  

**建立資料庫系統之使用者帳號**

    $ sudo su - postgres -c "createuser django2_helloworld"

**建立資料庫**

    $ sudo su - postgres -c "createdb django2_helloworld_db"

**設定資料庫使用者與其操作權限**

    $ sudo -u postgres psql
    psql (11.2 (Ubuntu 11.2-1.pgdg18.04+1))
    Type "help" for help.
    
    postgres=# grant all privileges on database django2_helloworld_db to django2_helloworld;
    GRANT
    postgres=# alter role django2_helloworld with password 'Passw0rd';
    ALTER ROLE
    postgres=# \q
    $

**刪除資料庫使用者**

    $ sudo su - postgres -c "dropuser django2_helloworld"



----------


# 設定網站（Web Sites）


## 安裝及設定 Django 網站

**安裝網站所需檔案**

將 Django 網站所有檔案，放入如下路徑處：

    $ mkdir -p ~/workspace/django && cd $_
    $ git clone <RepoPath>

**設定檔案擁有者及其權限**


    $ sudo chown -R $USER:www-data django2_helloworld/
    $ sudo chmod -R 775 django2_helloworld/

**安裝 Python 套件**


    $ cd django2_helloworld
    $ python3 --version
    $ pipenv --python 3.7.2
    $ pipenv install -r requirements.txt
    $ pipenv shell

~~**設定 django 運作環境**~~
~~~~
~~~~
    $ export django2_helloworld="staging"

**設定 django 資料庫**


    $ ./manage.py migrate
    $ ./manage.py createsuperuser    # juzhengzhong: juzhengzhong@gmail.com

【註】： 建置開發環境使用的 SQLite 資料庫

     $ DJANGO_SETTINGS_MODULE=web_site.settings.dev ./manage.py migrate 
     $ DJANGO_SETTINGS_MODULE=web_site.settings.dev ./manage.py createsuperuser 

**設定 static 檔案**


    $ ./manage.py collectstatic




----------
# uwsgi 服務安裝與設定

為使 uwsgi service 能正常運作，Django 2 App 的「多環境設定」務必應有如下之配合：

**managy.py**

    #!/usr/bin/env python
    import os
    import sys
    
    if __name__ == "__main__":
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "web_site.settings.prod")
        try:
            from django.core.management import execute_from_command_line
        except ImportError as exc:
            raise ImportError(
                "Couldn't import Django. Are you sure it's installed and "
                "available on your PYTHONPATH environment variable? Did you "
                "forget to activate a virtual environment?"
            ) from exc
        execute_from_command_line(sys.argv)

**wsgi.py**

    """
    WSGI config for web_site project.
    
    It exposes the WSGI callable as a module-level variable named ``application``.
    
    For more information on this file, see
    https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/
    """
    
    import os
    
    from django.core.wsgi import get_wsgi_application
    
    # os.environ.setdefault("DJANGO_SETTINGS_MODULE", "web_site.settings")
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'web_site.settings.prod')
    
    application = get_wsgi_application()

**base.py**

    """
    Django settings for web_site project.
    
    Generated by 'django-admin startproject' using Django 2.0.
    
    For more information on this file, see
    https://docs.djangoproject.com/en/2.0/topics/settings/
    
    For the full list of settings and their values, see
    https://docs.djangoproject.com/en/2.0/ref/settings/
    """
    
    import os
    
    # Build paths inside the project like this: os.path.join(BASE_DIR, ...)
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    
    # Quick-start development settings - unsuitable for production
    # See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/
    
    # SECURITY WARNING: keep the secret key used in production secret!
    SECRET_KEY = '7g@&s!bkka+)w70=9=t2+%&r7um_!dg!7^5^yso%on@w&u&7g6'
    
    # SECURITY WARNING: don't run with debug turned on in production!
    # DEBUG= True
    
    ALLOWED_HOSTS = [
        '127.0.0.1',
        'localhost',
    ]
    
    # Application definition
    
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'whitenoise.runserver_nostatic',
        'django.contrib.staticfiles',
    
        # Libs
        'crispy_forms',
    
        # My Apps
        'pages.apps.PagesConfig',
        'posts.apps.PostsConfig',
        'books.apps.BooksConfig',
        'accounts.apps.AccountsConfig',
    ]
    
    MIDDLEWARE = [
        'django.middleware.security.SecurityMiddleware',
        'whitenoise.middleware.WhiteNoiseMiddleware',
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    
        # My MiddleWare
    ]
    
    ROOT_URLCONF = 'web_site.urls'
    
    TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [
                os.path.join(BASE_DIR, 'templates'),
            ],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                ],
            },
        },
    ]
    
    WSGI_APPLICATION = 'web_site.wsgi.application'
    
    # Database
    # https://docs.djangoproject.com/en/2.0/ref/settings/#databases
    
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }
    
    
    # Password validation
    # https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators
    
    AUTH_PASSWORD_VALIDATORS = [
        {
            'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
        },
    ]
    
    
    # Internationalization
    # https://docs.djangoproject.com/en/2.0/topics/i18n/
    
    LANGUAGE_CODE = 'en-us'
    
    TIME_ZONE = 'UTC'
    
    USE_I18N = True
    
    USE_L10N = True
    
    USE_TZ = True
    
    
    # Static files (CSS, JavaScript, Images)
    # https://docs.djangoproject.com/en/2.0/howto/static-files/
    
    STATIC_URL = '/static/'
    
    # location where you will store your static files
    STATICFILES_DIRS = [
        os.path.join(BASE_DIR, "../static"),
    ]
    
    # The absolute path to the directory where collectstatic will collect static files for deployment.
    STATIC_ROOT = os.path.join(BASE_DIR, '../staticfiles')
    
    # Simplified static file serving.
    # https://warehouse.python.org/project/whitenoise/
    # Document Ref: http://whitenoise.evans.io/en/stable/django.html
    STATICFILES_STORAGEGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
    
    # Media Files
    MEDIA_ROOT = os.path.join(BASE_DIR, '../media')
    MEDIA_URL = '/media/'
    
    # User Account Management
    LOGIN_REDIRECT_URL = 'pages:home'
    LOGOUT_REDIRECT_URL = 'pages:home'
    AUTH_USER_MODEL = 'accounts.CustomUser'
    
    # Form formatting
    CRISPY_TEMPLATE_PACK = 'bootstrap4'

**dev.py**

    from .base import *
    
    # SECURITY WARNING: don't run with debug turned on in production!
    DEBUG = True
    
    # Quick-start development settings - unsuitable for production
    # See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/
    
    ALLOWED_HOSTS = [
        '127.0.0.1',
        '0.0.0.0',
    ]
    
    # Database
    # https://docs.djangoproject.com/en/2.0/ref/settings/#databases
    
    if 'DATABASE_HOST' in os.environ:
        DATABASES\['default'\]['HOST'] = os.getenv('DATABASE_HOST')
        DATABASES\['default'\]['ENGINE'] = 'django.db.backends.postgresql_psycopg2'
        DATABASES\['default'\]['NAME'] = os.getenv('DATABASE_NAME')
        DATABASES\['default'\]['USER'] = os.getenv('DATABASE_USER')
        DATABASES\['default'\]['PASSWORD'] = os.getenv('DATABASE_PASSWORD')
    
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
    else:
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
            }
        }
    
    
    # Contact Us From
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
    
    # BASE_URL required for notification emails
    BASE_URL = 'http://localhost:8000'

**prod.py**

    # from web_site.settings.base import *
    from .base import *
    
    # SECURITY WARNING: don't run with debug turned on in production!
    DEBUG = False
    
    ALLOWED_HOSTS = [
        '127.0.0.1',
        '192.168.66.10',
        'localhost',
        'www.ccc99.tw',
    ]
    
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

**heroku.py**

    # from web_site.settings.base import *
    from .base import *
    import django_heroku
    import dj_database_url
    
    # Set environment variables (SECRET_KEY and others)
    EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
    EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')
    
    # SECURITY WARNING: keep the secret key used in production secret!
    # SECRET_KEY = 'CHANGE_ME!!!! (P.S. the SECRET_KEY environment variable will be used, if set, instead).'
    # SECRET_KEY = os.environ.get('SECRET_KEY')
    
    # SECURITY WARNING: don't run with debug turned on in production!
    # DEBGUG = True
    DEBUG = bool(os.environ.get('DJANGO_DEBUG', True))
    
    # # Quick-start development settings - unsuitable for production
    # # See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/
    
    ALLOWED_HOSTS = [
        '127.0.0.1',
        'localhost',
        '.herokuapp.com',
        'serene-crag-30137.herokuapp.com',
    ]
    
    # Database
    # https://docs.djangoproject.com/en/2.0/ref/settings/#databases
    
    # Heroku: Update database configuration from $DATABASE_URL
    db_from_env = dj_database_url.config(conn_max_age=500)
    DATABASES['default'].update(db_from_env)
    
    django_heroku.settings(locals())

**urls.py**

    """web_site URL Configuration
    
    The `urlpatterns` list routes URLs to views. For more information please see:
        https://docs.djangoproject.com/en/2.0/topics/http/urls/
    Examples:
    Function views
        1. Add an import:  from my_app import views
        2. Add a URL to urlpatterns:  path('', views.home, name='home')
    Class-based views
        1. Add an import:  from other_app.views import Home
        2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
    Including another URLconf
        1. Import the include() function: from django.urls import include, path
        2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
    """
    from django.contrib import admin
    from django.urls import path, include
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('accounts/', include('accounts.urls')),
        path('accounts/', include('django.contrib.auth.urls')),
        path('books/', include('books.urls')),
        path('posts/', include('posts.urls')),
        path('', include('pages.urls')),
    ]


## 安裝 uwsgi 套件


1. **以 Global 方式安裝 uwsgi**


    $ sudo -H pip3 install uwsgi


    $ sudo -H pip3 install uwsgi
    Collecting uwsgi
      Downloading https://files.pythonhosted.org/packages/e7/1e/3dcca007f974fe4eb369bf1b8629d5e342bb3055e2001b2e5340aaefae7a/uwsgi-2.0.18.tar.gz (801kB)
        100% |████████████████████████████████| 808kB 1.8MB/s
    Building wheels for collected packages: uwsgi
      Running setup.py bdist_wheel for uwsgi ... done
      Stored in directory: /root/.cache/pip/wheels/2d/0c/b0/f3ba1bbce35c3766c9dac8c3d15d5431cac57e7a8c4111c268
    Successfully built uwsgi
    Installing collected packages: uwsgi
    Successfully installed uwsgi-2.0.18
    $ uwsgi --version
    2.0.18


2. **驗證 uwsgi 已能正常運作**


    $ cd ~/workspace/django/django2_helloworld
    $ pipenv install -r requirements.txt  # 產生 .venv 
    $ uwsgi --http 0.0.0.0:8000 --home ~/workspace/django/django2_helloworld/.venv/ --chdir ~/workspace/django/django2_helloworld  --wsgi-file ~/workspace/django/django2_helloworld/web_site/wsgi.py


    $ uwsgi --http 0.0.0.0:8000 --home ~/workspace/django/django2_helloworld/.venv/ --chdir ~/workspace/django/django2_helloworld  --wsgi-file ~/workspace/django/django2_helloworld/web_site/wsgi.py
    *** Starting uWSGI 2.0.18 (64bit) on [Mon Apr  1 21:07:21 2019] ***
    compiled with version: 7.3.0 on 01 April 2019 12:42:54
    os: Linux-4.15.0-46-generic #49-Ubuntu SMP Wed Feb 6 09:33:07 UTC 2019
    nodename: SRV-01
    machine: x86_64
    clock source: unix
    pcre jit disabled
    detected number of CPU cores: 8
    current working directory: /home/juzhengzhong/workspace/django/django2_helloworld
    detected binary path: /usr/local/bin/uwsgi
    chdir() to /home/juzhengzhong/workspace/django/django2_helloworld
    *** WARNING: you are running uWSGI without its master process manager ***
    your processes number limit is 63633
    your memory page size is 4096 bytes
    detected max file descriptor number: 1024
    lock engine: pthread robust mutexes
    thunder lock: disabled (you can enable it with --thunder-lock)
    uWSGI http bound on 0.0.0.0:8000 fd 4
    spawned uWSGI http 1 (pid: 29795)
    uwsgi socket 0 bound to TCP address 127.0.0.1:34649 (port auto-assigned) fd 3
    Python version: 3.6.7 (default, Oct 22 2018, 11:32:17)  [GCC 8.2.0]
    Set PythonHome to /home/juzhengzhong/workspace/django/django2_helloworld/.venv/
    *** Python threads support is disabled. You can enable it with --enable-threads ***
    Python main interpreter initialized at 0x55987cc93030
    your server socket listen backlog is limited to 100 connections
    your mercy for graceful operations on workers is 60 seconds
    mapped 72920 bytes (71 KB) for 1 cores
    *** Operational MODE: single process ***
    /home/juzhengzhong/workspace/django/django2_helloworld/.venv/lib/python3.6/site-packages/psycopg2/__init__.py:144: UserWarning: The psycopg2 wheel package will be renamed from release 2.8; in order to keep installing from binary please use "pip install psycopg2-binary" instead. For details see: <http://initd.org/psycopg/docs/install.html#binary-install-from-pypi>.
      """)
    WSGI app 0 (mountpoint='') ready in 0 seconds on interpreter 0x55987cc93030 pid: 29794 (default app)
    *** uWSGI is running in multiple interpreter mode ***
    spawned uWSGI worker 1 (and the only) (pid: 29794, cores: 1)
    [pid: 29794|app: 0|req: 1/1] 192.168.66.10 () {38 vars in 797 bytes} [Mon Apr  1 13:07:50 2019] GET / => generated 3450 bytes in 76 msecs (HTTP/1.1 200) 4 headers in 124 bytes (1 switches on core 0)
    [pid: 29794|app: 0|req: 2/2] 192.168.66.10 () {38 vars in 780 bytes} [Mon Apr  1 13:07:50 2019] GET /static/fontawesome/fontawesome-all.css => generated 112 bytes in 2 msecs (HTTP/1.1 404) 3 headers in 101 bytes (1 switches on core 0)
    [pid: 29794|app: 0|req: 3/3] 192.168.66.10 () {38 vars in 742 bytes} [Mon Apr  1 13:07:50 2019] GET /static/css/base.css => generated 93 bytes in 1 msecs (HTTP/1.1 404) 3 headers in 100 bytes (1 switches on core 0)
    [pid: 29794|app: 0|req: 4/4] 192.168.66.10 () {40 vars in 851 bytes} [Mon Apr  1 13:07:53 2019] GET /posts/ => generated 3799 bytes in 15 msecs (HTTP/1.1 200) 4 headers in 124 bytes (1 switches on core 0)
    [pid: 29794|app: 0|req: 5/5] 192.168.66.10 () {38 vars in 786 bytes} [Mon Apr  1 13:07:53 2019] GET /static/fontawesome/fontawesome-all.css => generated 112 bytes in 2 msecs (HTTP/1.1 404) 3 headers in 101 bytes (1 switches on core 0)
    [pid: 29794|app: 0|req: 6/6] 192.168.66.10 () {38 vars in 748 bytes} [Mon Apr  1 13:07:53 2019] GET /static/css/base.css => generated 93 bytes in 1 msecs (HTTP/1.1 404) 3 headers in 100 bytes (1 switches on core 0)




## 設定 uwsgi 執行環境

注意：以下之作業之前，需先以 juzhengzhong 使用者帳號登入。


1. **建立 uwsgi 目錄**


    $ mkdir -p ~/uwsgi/sites


2. **建立 ini 執行設定檔**


    $ cd ~/uwsgi/sites
    $ nano django2_helloworld_uwsgi.ini

django2_helloworld_uwsgi.ini :

    [uwsgi]
    home = /home/juzhengzhong/workspace/django/django2_helloworld/.venv/
    chdir = /home/juzhengzhong/workspace/django/django2_helloworld
    wsgi-file = /home/juzhengzhong/workspace/django/django2_helloworld/web_site/wsgi.py
    http = 0.0.0.0:8000


3. **驗證 ini 檔已能正常執行**


    $ uwsgi --ini /home/juzhengzhong/uwsgi/sites/django2_helloworld_uwsgi.ini


## 建立 uwsgi service


1. **建立 uwsgi service**


    $ sudo nano /etc/systemd/system/uwsgi.service

uwsgi.service:

    [Unit]
    Description=uWSGI Emperor service
    [Service]
    ExecStartPre=/bin/bash -c 'mkdir -p /run/uwsgi; chown juzhengzhong:www-data /run/uwsgi'
    ExecStart=/usr/local/bin/uwsgi --emperor /home/juzhengzhong/uwsgi/sites
    Restart=always
    KillSignal=SIGQUIT
    Type=notify
    NotifyAccess=all
    [Install]
    WantedBy=multi-user.target

【註】： uwsgi 與 nginx 之溝通，將透過 unix socket 檔案，該檔案名稱為：**django_helloworld.sock** ，置於目錄路徑： **/home/juzhengzhong/uwsgi/** 處。


2. 啟用 uwsgi service
    $ sudo systemctl enable uwsgi


## **設定 nginx 網站與 uwsgi 溝通之設定檔**

建立設定檔

    $ sudo nano /home/juzhengzhong/uwsgi/sites/django2_helloworld_uwsgi.ini

django2_helloworld_uwsgi.ini

    [uwsgi]
    
    # Initial
    #home = /home/juzhengzhong/workspace/django/django2_helloworld/.venv/
    #chdir = /home/juzhengzhong/workspace/django/django2_helloworld
    #wsgi-file = /home/juzhengzhong/workspace/django/django2_helloworld/web_site/wsgi.py
    #http = 0.0.0.0:8000
    
    # defines directives here
    uid             = juzhengzhong
    gid             = www-data
    user            = juzhengzhong
    user_path       = /home/%(user)
    base            = %(user_path)/workspace/django
    project         = django2_helloworld
    site            = web_site
    
    # =======================
    # Django-related settings
    # =======================
    
    # the project base directory (full path) : /app/django2_helloworld
    chdir           = %(base)/%(project)
    
    # Django's wsgi file : web_site.wsgi:application
    wsgi-file       = %(chdir)/%(site)/wsgi.py
    
    # Python Home
    home            = %(chdir)/.venv
    
    # ========================
    # process-related settings
    # ========================
    
    # master
    #master          = true
    # maximum number of worker processes
    #processes       = 4
    #threads         = 2
    
    # the socket (use the full path to be safe)
    socket          = %(user_path)/uwsgi/%(project).sock
    
    # ... with appropriate permissions - may be needed
    chown-socket    = %(uid):%(gid)
    
    chmod-socket    = 660
    
    # clear environment on exit
    vacuum          = true
    
    #disable-loggine  = false
    #log             = file
    #logto           = /var/log/uwsgi/%(project)


**uwsgi service 正常啟動**


    $ sudo service uwsgi status
    ● uwsgi.service - uWSGI Emperor service
       Loaded: loaded (/etc/systemd/system/uwsgi.service; enabled; vendor preset: enabled)
       Active: active (running) since Fri 2019-04-05 11:40:34 CST; 2s ago
      Process: 24321 ExecStartPre=/bin/bash -c mkdir -p /run/uwsgi; chown juzhengzhong:www-data /run/uwsgi (code=exited, status=0/SUCCESS)
     Main PID: 24329 (uwsgi)
       Status: "The Emperor is governing 1 vassals"
        Tasks: 3 (limit: 4915)
       CGroup: /system.slice/uwsgi.service
               ├─24329 /usr/local/bin/uwsgi --emperor /home/juzhengzhong/uwsgi/sites
               ├─24336 /usr/local/bin/uwsgi --ini django2_helloworld_uwsgi.ini
               └─24344 /usr/local/bin/uwsgi --ini django2_helloworld_uwsgi.ini
    
     4月 05 11:40:34 SRV-01 uwsgi[24329]: your server socket listen backlog is limited to 100 connections
     4月 05 11:40:34 SRV-01 uwsgi[24329]: your mercy for graceful operations on workers is 60 seconds
     4月 05 11:40:34 SRV-01 uwsgi[24329]: mapped 145840 bytes (142 KB) for 1 cores
     4月 05 11:40:34 SRV-01 uwsgi[24329]: *** Operational MODE: single process ***
     4月 05 11:40:36 SRV-01 uwsgi[24329]: WSGI app 0 (mountpoint='') ready in 2 seconds on interpreter 0x5590c6bea9d0 pid: 24336 (default app)
     4月 05 11:40:36 SRV-01 uwsgi[24329]: *** uWSGI is running in multiple interpreter mode ***
     4月 05 11:40:36 SRV-01 uwsgi[24329]: spawned uWSGI master process (pid: 24336)
     4月 05 11:40:36 SRV-01 uwsgi[24329]: Fri Apr  5 11:40:36 2019 - [emperor] vassal django2_helloworld_uwsgi.ini has been spawned
     4月 05 11:40:36 SRV-01 uwsgi[24329]: spawned uWSGI worker 1 (pid: 24344, cores: 1)
     4月 05 11:40:36 SRV-01 uwsgi[24329]: Fri Apr  5 11:40:36 2019 - [emperor] vassal django2_helloworld_uwsgi.ini is ready to accept requests


**uwsgi service stop**


    $ sudo service uwsgi status
    ● uwsgi.service - uWSGI Emperor service
       Loaded: loaded (/etc/systemd/system/uwsgi.service; enabled; vendor preset: enabled)
       Active: inactive (dead) since Fri 2019-04-05 11:48:27 CST; 2s ago
      Process: 24642 ExecStart=/usr/local/bin/uwsgi --emperor /home/juzhengzhong/uwsgi/sites (code=exited, status=0/SUCCESS)
      Process: 24632 ExecStartPre=/bin/bash -c mkdir -p /run/uwsgi; chown juzhengzhong:www-data /run/uwsgi (code=exited, status=0/SUCCESS)
     Main PID: 24642 (code=exited, status=0/SUCCESS)
       Status: "The Emperor is buried."
    
     4月 05 11:48:24 SRV-01 uwsgi[24642]: Fri Apr  5 11:48:24 2019 - [emperor] stop the uwsgi instance django2_helloworld_uwsgi.ini
     4月 05 11:48:24 SRV-01 uwsgi[24642]: SIGINT/SIGQUIT received...killing workers...
     4月 05 11:48:24 SRV-01 uwsgi[24642]: Fri Apr  5 03:48:24 2019 - received message 0 from emperor
     4月 05 11:48:24 SRV-01 systemd[1]: Stopping uWSGI Emperor service...
     4月 05 11:48:25 SRV-01 uwsgi[24642]: worker 1 buried after 1 seconds
     4月 05 11:48:25 SRV-01 uwsgi[24642]: goodbye to uWSGI.
     4月 05 11:48:25 SRV-01 uwsgi[24642]: VACUUM: unix socket /home/juzhengzhong/uwsgi/django2_helloworld.sock removed.
     4月 05 11:48:26 SRV-01 uwsgi[24642]: Fri Apr  5 11:48:26 2019 - [emperor] removed uwsgi instance django2_helloworld_uwsgi.ini
     4月 05 11:48:27 SRV-01 uwsgi[24642]: Fri Apr  5 11:48:27 2019 - The Emperor is buried.
     4月 05 11:48:27 SRV-01 systemd[1]: Stopped uWSGI Emperor service.


# Nginx服務安裝與設定

參考文件： https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04


## **安裝 nginx 套件**

**執行 nginx 安裝指令**


    $ sudo apt update
    $ sudo apt install nginx


## **設定 nginx 環境**

**設定系統服務層級之 nginx 執行環境**


1. **變更設定檔。**
    $ sudo nano /etc/nginx/nginx.conf

nginx.conf 設定結果：

    user www-data;
    worker_processes auto;
    pid /run/nginx.pid;
    include /etc/nginx/modules-enabled/*.conf;
    
    events {
            worker_connections 768;
            # multi_accept on;
    }
    
    http {
    
            ##
            # Basic Settings
            ##
    
            sendfile on;
            tcp_nopush on;
            tcp_nodelay on;
            keepalive_timeout 65;
            types_hash_max_size 2048;
            # server_tokens off;
    
            server_names_hash_bucket_size 64;
            # server_name_in_redirect off;
    
            include /etc/nginx/mime.types;
            default_type application/octet-stream;
    
            ##
            # SSL Settings
            ##
    
            ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
            ssl_prefer_server_ciphers on;
    
            ##
            # Logging Settings
            ##
    
            access_log /var/log/nginx/access.log;
            error_log /var/log/nginx/error.log;
    
            ##
            # Gzip Settings
            ##
    
            gzip on;
            gzip_disable "msie6";
    
            # gzip_vary on;
            # gzip_proxied any;
            # gzip_comp_level 6;
            # gzip_buffers 16 8k;
            # gzip_http_version 1.1;
            # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
            ##
            # Virtual Host Configs
            ##
    
            include /etc/nginx/conf.d/*.conf;
            include /etc/nginx/sites-enabled/*;
    }
    
    
    #mail {
    #        # See sample authentication script at:
    #        # http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
    # 
    #        # auth_http localhost/auth.php;
    #        # pop3_capabilities "TOP" "USER";
    #        # imap_capabilities "IMAP4rev1" "UIDPLUS";
    # 
    #        server {
    #                listen     localhost:110;
    #                protocol   pop3;
    #                proxy      on;
    #        }
    # 
    #        server {
    #                listen     localhost:143;
    #                protocol   imap;
    #                proxy      on;
    #        }
    #}
    


2. **驗證設定檔內容無誤**


    sudo nginx -t


    $ sudo nginx -t
    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful


【參考】：**nginx Service 管理指令**

    sudo service nginx status
    sudo service nginx stop
    sudo service nginx start

**設定網站層級之 nginx 設定**


1. 變更**網站 nginx 設定檔**


    $ sudo nano /etc/nginx/sites-available/django2_helloworld.conf

django2_helloworld.conf:

    # configuration of the server
    server {
        # the port your site will be served on
        listen          80;
        # the domain name it will serve for
        #server_name     .example.com; # substitute your machine's Ip address or FQDN
        #server_name     127.0.0.1;
        #server_name     192.168.66.10;
        server_name     www.ccc99.tw;
        charset         utf8-8;
    
        # max upload size
        client_max_body_size 75M;  # adjust to taste
    
         location = /favicon.ico {
            access_log      off;
            log_not_found   off;
        }
    
        # Django media
        location /media {
            alias   /home/juzhengzhong/workspace/django/django2_helloworld/media;  
        }
    
        # Django static
        location /static {
            alias   /home/juzhengzhong/workspace/django/django2_helloworld/staticfiles;
        }
    
        # Finally, send all non-media requests to the Django s2.erver
        location / {
            include         uwsgi_params; # should be located in /etc/nginx/
            uwsgi_pass      unix:/home/juzhengzhong/uwsgi/django2_helloworld.sock;
        }
    }


2. **啟用網站所需之 nginx 設定檔**
    $ sudo ln -s /etc/nginx/sites-available/django2_helloworld.conf /etc/nginx/sites-enabled/
    $ sudo rm /etc/nginx/sites-enabled/default


3. **重新啟動 nginx service** 
    $ sudo service uwsgi restart
    $ sudo service uwsgi status
    $ sudo service nginx restart
    $ sudo service nginx status



----------


# HTTPS


    $ sudo add-apt-repository ppa:certbot/certbot
    $ sudo apt update
    $ sudo apt upgrade
    $ sudo apt install python-certbot-nginx
    s sudo cerbot --nginx -d ccc99.tw -d www.ccc99.tw



    $ sudo cerbot --nginx -d ccc99.tw -d www.ccc99.tw
    sudo: cerbot: command not found
    juzhengzhong@SRV-01:~$ sudo certbot --nginx -d ccc99.tw -d www.ccc99.tw
    Saving debug log to /var/log/letsencrypt/letsencrypt.log
    Plugins selected: Authenticator nginx, Installer nginx
    Enter email address (used for urgent renewal and security notices) (Enter 'c' to
    cancel): alanjui.1960@gmail.com
    
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Please read the Terms of Service at
    https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
    agree in order to register with the ACME server at
    https://acme-v02.api.letsencrypt.org/directory
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    (A)gree/(C)ancel: a
    
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Would you be willing to share your email address with the Electronic Frontier
    Foundation, a founding partner of the Let's Encrypt project and the non-profit
    organization that develops Certbot? We'd like to send you email about our work
    encrypting the web, EFF news, campaigns, and ways to support digital freedom.
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    (Y)es/(N)o: n
    Obtaining a new certificate
    Performing the following challenges:
    http-01 challenge for ccc99.tw
    http-01 challenge for www.ccc99.tw
    Waiting for verification...
    Cleaning up challenges
    Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/django2_helloworld.conf
    Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/django2_helloworld.conf
    
    Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    1: No redirect - Make no further changes to the webserver configuration.
    2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
    new sites, or if you're confident your site works on HTTPS. You can undo this
    change by editing your web server's configuration.
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
    Redirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/django2_helloworld.conf
    Redirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/django2_helloworld.conf
    
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Congratulations! You have successfully enabled https://ccc99.tw and
    https://www.ccc99.tw
    
    You should test your configuration at:
    https://www.ssllabs.com/ssltest/analyze.html?d=ccc99.tw
    https://www.ssllabs.com/ssltest/analyze.html?d=www.ccc99.tw
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    
    IMPORTANT NOTES:
     - Congratulations! Your certificate and chain have been saved at:
       /etc/letsencrypt/live/ccc99.tw/fullchain.pem
       Your key file has been saved at:
       /etc/letsencrypt/live/ccc99.tw/privkey.pem
       Your cert will expire on 2019-07-01. To obtain a new or tweaked
       version of this certificate in the future, simply run certbot again
       with the "certonly" option. To non-interactively renew *all* of
       your certificates, run "certbot renew"
     - Your account credentials have been saved in your Certbot
       configuration directory at /etc/letsencrypt. You should make a
       secure backup of this folder now. This configuration directory will
       also contain certificates and private keys obtained by Certbot so
       making regular backups of this folder is ideal.
     - If you like Certbot, please consider supporting our work by:
    
       Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
       Donating to EFF:                    https://eff.org/donate-le
    



    # configuration of the server
    server {
        # the port your site will be served on
        # the domain name it will serve for
        #server_name     .example.com; # substitute your machine's Ip address or FQDN
        #server_name     192.168.66.10;
        server_name     ccc99.tw www.ccc99.tw;
        charset         utf8-8;
    
        # max upload size
        client_max_body_size 75M;  # adjust to taste
    
        location = /favicon.ico {
            access_log      off;
            log_not_found   off;
        }
    
        # Django media
        location /media {
            #root    /home/juzhengzhong/workspace/django2_helloworld;
            alias   /home/juzhengzhong/workspace/django2_helloworld/media;  # your Django project's media files - amend as required
        }
    
        location /static {
            alias   /home/juzhengzhong/workspace/django2_helloworld/web_site/staticfiles;
        }
    
        # Finally, send all non-media requests to the Django server
        location / {
            include         uwsgi_params; # should be located in /etc/nginx/
            uwsgi_pass      unix:/home/juzhengzhong/uwsgi/django2_helloworld.sock;
        }
    
        listen 443 ssl; # managed by Certbot
        ssl_certificate /etc/letsencrypt/live/ccc99.tw/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/ccc99.tw/privkey.pem; # managed by Certbot
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
    }
    
    server {
        if ($host = www.ccc99.tw) {
            return 301 https://$host$request_uri;
        } # managed by Certbot
    
    
        if ($host = ccc99.tw) {
            return 301 https://$host$request_uri;
        } # managed by Certbot
    
    
        listen          80;
        server_name     ccc99.tw www.ccc99.tw;
        return 404; # managed by Certbot
    }

**SSL Server Setting**
https://www.ssllabs.com/ssltest/index.html


----------


# 疑難排解

**無法安裝 psycopg2 v2.8.x**


    sudo apt install python-psycopg2
    sudo apt install libpq-dev
    pipenv install psycopg2==2.8.1


----------
# 參考文件

**Django Settings**
https://docs.djangoproject.com/en/2.1/topics/settings/


https://medium.com/@panzelva/deploying-django-website-to-vps-with-uwsgi-and-nginx-on-ubuntu-18-04-db9b387ad19d


How To Install Python 3 and Set Up a Programming Environment on Ubuntu 18.04 [Quickstart]
https://www.digitalocean.com/community/tutorials/how-to-install-python-3-and-set-up-a-programming-environment-on-ubuntu-18-04-quickstart



**多重環境**

https://stackoverflow.com/questions/10664244/django-how-to-manage-development-and-production-settings



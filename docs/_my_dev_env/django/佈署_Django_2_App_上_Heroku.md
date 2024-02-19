# 佈署 Django 2 App 上 Heroku
專案：

- 專案根資料夾： /home/juzhengzhong/workspace/django2_helloworld/
- Django Project 資料夾：<ProjectRootDir>/web_site
- Django 設定檔： <ProjectRootDir>/web_site/settings/
    - init.py
    - base.py
    - dev.py
    - qa.py
    - staging.py
    - prod.py

專案資料夾架構


    .
    |-- Create_Project_Template.md
    |-- Dockerfile
    |-- Dockerfile_web
    |-- Pipfile
    |-- Pipfile.lock
    |-- Procfile
    |-- Procfile.local
    |-- README.md
    |-- README_Deploy.md
    |-- README_SIT.md
    |-- _tools
    |-- accounts
    |-- author_headshots
    |-- books
    |-- build_app.sh
    |-- build_web.sh
    |-- db.sqlite3
    |-- deploy_app.sh
    |-- django2_helloworld_uwsgi.ini
    |-- docker-compose-dev.yml
    |-- docker-compose-prod.yml
    |-- docker-compose.yml
    |-- docker-stack.yml
    |-- manage.py
    |-- nginx
    |-- pages
    |-- posts
    |-- requirements.txt
    |-- run_app.sh
    |-- run_docker_compose.sh
    |-- run_docker_swarm.sh
    |-- runtime.txt
    |-- templates
    `-- web_site



# 建置專案用 Python 虛擬環境

使用者：juzhengzhong ，在路徑： ～/workspace/django/django2_helloworld/


    $ $ cd ~/workspace/django
    $ git clone git@bitbucket.org:AlanJui/django2_helloworld.git
    $ cd django2_helloworld/ 

建立虛擬目錄 .venv

    $ export PIPENV_VENV_IN_PROJECT="enabled"
    $ pipenv install -r requirements.txt

啟用 Python 虛擬環境

    $ pipenv shell
    $ pipenv install django gunicorn whitenoise dj-database-url psycopg2

~~產生 Python 套件安裝清單檔~~

    $ pipenv lock --requirements > requirements.txt 

建立 Heroku App 設定檔：Procfile

    web: gunicorn web_site.wsgi --log-file -

.gitignore

    .idea/
    *.log
    *.pot
    *.pyc
    **/__pycache__/
    _tools/log/
    /django2_helloworld_nginx.conf
    /django2_helloworld_uwsgi.ini
    /app.sock
    /ENV/
    /VENV/
    /.venv/
    db.sqlite3



----------

login heroku

    $ heroku login

create heroku app

    $ heroku create


    $ heroku create
    Creating app... done, ⬢ serene-crag-30137
    https://serene-crag-30137.herokuapp.com/ | https://git.heroku.com/serene-crag-30137.git


**在 Django 的 settings.py 加入如下各種設定**

需自環境變數讀入值：

    EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
    EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')


設定 INSTALLED_APPS：

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


設定 MIDDLEWARE：

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


設定 ALLOWED_HOSTS：

    ALLOWED_HOSTS = [
        '127.0.0.1',
        '0.0.0.0',
        'localhost',
        '.herokuapp.com',
    ]


設定 STATIC 相關值：

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

參考： http://whitenoise.evans.io/en/stable/django.html

設定 MEDIA 相關值：

    MEDIA_ROOT = os.path.join(BASE_DIR, '../media')
    MEDIA_URL = '/media/'


manage.py:

    if __name__ == "__main__":
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'web_site.settings.prod')
        ......

wsgi.py:

    import os
    from django.core.wsgi import get_wsgi_application
    
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'web_site.settings.prod')
    
    application = get_wsgi_application()

Heroku Environment Variable:

    DJANGO_SETTINGS_MODULE = "web_site.settings.heroku"


----------
# Postgres Database

要求 Heroku 加入 Postgres 的 Add-Ons

    $ heroku addons:create heroku-postgresql:hobby-dev
    Creating heroku-postgresql:hobby-dev on ⬢ serene-crag-30137... free
    Database has been created and is available
     ! This database is empty. If upgrading, you can transfer
     ! data from another database with pg:copy
    Created postgresql-defined-16536 as DATABASE_URL
    Use heroku addons:docs heroku-postgresql to view documentation
    
    $ heroku pg:info
    === DATABASE_URL
    Plan:                  Hobby-dev
    Status:                Available
    Connections:           0/20
    PG Version:            11.2
    Created:               2019-04-02 13:27 UTC
    Data Size:             7.7 MB
    Tables:                0
    Rows:                  0/10000 (In compliance)
    Fork/Follow:           Unsupported
    Rollback:              Unsupported
    Continuous Protection: Off
    Add-on:                postgresql-defined-16536

設定 Heroku 平台 DB URL

    $ heroku config -s | grep DATABASE_URL


    $ heroku config -s | grep DATABASE_URL
    
    DATABASE_URL='postgres://bfmsqsgqqhibrl:b0e69f257d7dc611c29f2d437368874c11065a80aa31880f67e987210f5c2e25@ec2-54-225-242-183.compute-1.amazonaws.com:5432/d9mn8r7u66f8h1'

將 local 端的 Postgres 資料庫匯入 Heroku 平台

    $ heroku pg:push 《SOURCE》 《TAGRET》


    $ heroku pg:push postgres://django2_helloworld:Passw0rd@localhost/django2_helloworld_db postgresql-defined-16536



----------


# Heroku 環境變數設定

設定 DATABASE_URL：

    $ heroku config:set DATABASE_URL='postgres://bfmsqsgqqhibrl:b0e69f257d7dc611c29f2d437368874c11065a80aa31880f67e987210f5c2e25@ec2-54-225-242-183.compute-1.amazonaws.com:5432/d9mn8r7u66f8h1'

設定停用 Collectstatic

    $ heroku config:set DISABLE_COLLECTSTATIC=1

設定 DJANGO_ALLOWED_HOSTS

    $ heroku config:set DJANGO_ALLOWED_HOSTS='serene-crag-30137.herokuapp.com'

~~設定 DJANGO_STATIC_HOST~~

    $ heroku config:set DJANGO_STATIC_HOST='https://serene-crag-30137.herokuapp.com'

設定 DJANGO_SETTINGS_MODULE：

    $ heroku config:set DJANGO_SETTINGS_MODULE='web_site.settings.heroku'



----------

佈署

    $ ./manage.py collectstatic
    $ git add . && git commit -m "Deploy to Heroku Platform"
    $ git push heroku master


    $ git push heroku master
    Counting objects: 10354, done.
    Delta compression using up to 8 threads.
    Compressing objects: 100% (6512/6512), done.
    Writing objects: 100% (10354/10354), 23.43 MiB | 3.03 MiB/s, done.
    Total 10354 (delta 4062), reused 7172 (delta 2355)
    remote: Compressing source files... done.
    remote: Building source:
    remote: 
    remote: -----> Python app detected
    remote:  !     Python has released a security update! Please consider upgrading to python-3.6.8
    remote:        Learn More: https://devcenter.heroku.com/articles/python-runtimes
    remote: -----> Installing python-3.6.4
    remote: -----> Installing pip
    remote: -----> Installing dependencies with Pipenv 2018.5.18…
    remote:        Installing dependencies from Pipfile.lock (dd71a2)…
    remote: -----> Installing SQLite3
    remote: -----> Discovering process types
    remote:        Procfile declares types -> web
    remote: 
    remote: -----> Compressing...
    remote:        Done: 87.1M
    remote: -----> Launching...
    remote:        Released v7
    remote:        https://serene-crag-30137.herokuapp.com/ deployed to Heroku
    remote: 
    remote: Verifying deploy... done.
    To https://git.heroku.com/serene-crag-30137.git
     * [new branch]      master -> master

啟動 Heroku App

    $ heroku open

重新啟動 Heroku App

    $ heroku restart -a serene-crag-30137

查 Log 紀錄

    $ heroku logs -n 200


    $ heroku logs --tail


## 在 Local 端試行

**備妥下列三個檔案：**

- runtime.txt
- .env
- Procfile.local

**runtime.txt**

    python-3.6.8

**.env**

    DATABASE_URL=postgres://bfmsqsgqqhibrl:b0e69f257d7dc611c29f2d437368874c11065a80aa31880f67e987210f5c2e25@ec2-54-225-242-183.compute-1.amazonaws.com:5432/d9mn8r7u66f8h1
    DISABLE_COLLECTSTATIC=1
    DJANGO_ALLOWED_HOSTS=serene-crag-30137.herokuapp.com
    DJANGO_SETTINGS_MODULE=web_site.settings.heroku

【註】： 自 Heroku 平台抄錄環境變數到 .env 檔案


    $ heroku config:get 《變數名稱》 -s >> 《檔案名稱》  
    $ heroku config:get DJANGO_SETTINGS_MODULE -s >> .env  

**Procfile.local**

    web: gunicorn --env DJANGO_SETTINGS_MODULE="web_site.settings.heroku"  web_site.wsgi  --log-file 



----------
# 參考文章


https://medium.com/@hdsingh13/deploying-django-app-on-heroku-with-postgres-as-backend-b2f3194e8a43



https://devcenter.heroku.com/articles/heroku-local



(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{446:function(e,n,a){"use strict";a.r(n);var s=a(10),t=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"佈署-django-2-app-上-heroku"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#佈署-django-2-app-上-heroku"}},[e._v("#")]),e._v(" 佈署 Django 2 App 上 Heroku")]),e._v(" "),n("p",[e._v("專案：")]),e._v(" "),n("ul",[n("li",[e._v("專案根資料夾： /home/juzhengzhong/workspace/django2_helloworld/")]),e._v(" "),n("li",[e._v("Django Project 資料夾："),n("ProjectRootDir",[e._v("/web_site")])],1),e._v(" "),n("li",[e._v("Django 設定檔： "),n("ProjectRootDir",[e._v("/web_site/settings/\n"),n("ul",[n("li",[e._v("init.py")]),e._v(" "),n("li",[e._v("base.py")]),e._v(" "),n("li",[e._v("dev.py")]),e._v(" "),n("li",[e._v("qa.py")]),e._v(" "),n("li",[e._v("staging.py")]),e._v(" "),n("li",[e._v("prod.py")])])])],1)]),e._v(" "),n("p",[e._v("專案資料夾架構")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(".\n|-- Create_Project_Template.md\n|-- Dockerfile\n|-- Dockerfile_web\n|-- Pipfile\n|-- Pipfile.lock\n|-- Procfile\n|-- Procfile.local\n|-- README.md\n|-- README_Deploy.md\n|-- README_SIT.md\n|-- _tools\n|-- accounts\n|-- author_headshots\n|-- books\n|-- build_app.sh\n|-- build_web.sh\n|-- db.sqlite3\n|-- deploy_app.sh\n|-- django2_helloworld_uwsgi.ini\n|-- docker-compose-dev.yml\n|-- docker-compose-prod.yml\n|-- docker-compose.yml\n|-- docker-stack.yml\n|-- manage.py\n|-- nginx\n|-- pages\n|-- posts\n|-- requirements.txt\n|-- run_app.sh\n|-- run_docker_compose.sh\n|-- run_docker_swarm.sh\n|-- runtime.txt\n|-- templates\n`-- web_site\n")])])]),n("h1",{attrs:{id:"建置專案用-python-虛擬環境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建置專案用-python-虛擬環境"}},[e._v("#")]),e._v(" 建置專案用 Python 虛擬環境")]),e._v(" "),n("p",[e._v("使用者：juzhengzhong ，在路徑： ～/workspace/django/django2_helloworld/")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ $ cd ~/workspace/django\n$ git clone git@bitbucket.org:AlanJui/django2_helloworld.git\n$ cd django2_helloworld/ \n")])])]),n("p",[e._v("建立虛擬目錄 .venv")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ export PIPENV_VENV_IN_PROJECT="enabled"\n$ pipenv install -r requirements.txt\n')])])]),n("p",[e._v("啟用 Python 虛擬環境")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ pipenv shell\n$ pipenv install django gunicorn whitenoise dj-database-url psycopg2\n")])])]),n("p",[n("s",[e._v("產生 Python 套件安裝清單檔")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ pipenv lock --requirements > requirements.txt \n")])])]),n("p",[e._v("建立 Heroku App 設定檔：Procfile")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("web: gunicorn web_site.wsgi --log-file -\n")])])]),n("p",[e._v(".gitignore")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(".idea/\n*.log\n*.pot\n*.pyc\n**/__pycache__/\n_tools/log/\n/django2_helloworld_nginx.conf\n/django2_helloworld_uwsgi.ini\n/app.sock\n/ENV/\n/VENV/\n/.venv/\ndb.sqlite3\n")])])]),n("hr"),e._v(" "),n("p",[e._v("login heroku")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku login\n")])])]),n("p",[e._v("create heroku app")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku create\n\n\n$ heroku create\nCreating app... done, ⬢ serene-crag-30137\nhttps://serene-crag-30137.herokuapp.com/ | https://git.heroku.com/serene-crag-30137.git\n")])])]),n("p",[n("strong",[e._v("在 Django 的 settings.py 加入如下各種設定")])]),e._v(" "),n("p",[e._v("需自環境變數讀入值：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')\nEMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')\n")])])]),n("p",[e._v("設定 INSTALLED_APPS：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'whitenoise.runserver_nostatic',\n    'django.contrib.staticfiles',\n\n    # Libs\n    'crispy_forms',\n\n    # My Apps\n    'pages.apps.PagesConfig',\n    'posts.apps.PostsConfig',\n    'books.apps.BooksConfig',\n    'accounts.apps.AccountsConfig',\n]\n")])])]),n("p",[e._v("設定 MIDDLEWARE：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("MIDDLEWARE = [\n    'django.middleware.security.SecurityMiddleware',\n    'whitenoise.middleware.WhiteNoiseMiddleware',\n    'django.contrib.sessions.middleware.SessionMiddleware',\n    'django.middleware.common.CommonMiddleware',\n    'django.middleware.csrf.CsrfViewMiddleware',\n    'django.contrib.auth.middleware.AuthenticationMiddleware',\n    'django.contrib.messages.middleware.MessageMiddleware',\n    'django.middleware.clickjacking.XFrameOptionsMiddleware',\n\n    # My MiddleWare\n]\n")])])]),n("p",[e._v("設定 ALLOWED_HOSTS：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("ALLOWED_HOSTS = [\n    '127.0.0.1',\n    '0.0.0.0',\n    'localhost',\n    '.herokuapp.com',\n]\n")])])]),n("p",[e._v("設定 STATIC 相關值：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("# Static files (CSS, JavaScript, Images)\n# https://docs.djangoproject.com/en/2.0/howto/static-files/\n\nSTATIC_URL = '/static/'\n\n# location where you will store your static files\nSTATICFILES_DIRS = [\n    os.path.join(BASE_DIR, \"../static\"),\n]\n\n# The absolute path to the directory where collectstatic will collect static files for deployment.\nSTATIC_ROOT = os.path.join(BASE_DIR, '../staticfiles')\n\n# Simplified static file serving.\n# https://warehouse.python.org/project/whitenoise/\n# Document Ref: http://whitenoise.evans.io/en/stable/django.html\nSTATICFILES_STORAGEGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'\n")])])]),n("p",[e._v("參考： http://whitenoise.evans.io/en/stable/django.html")]),e._v(" "),n("p",[e._v("設定 MEDIA 相關值：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("MEDIA_ROOT = os.path.join(BASE_DIR, '../media')\nMEDIA_URL = '/media/'\n")])])]),n("p",[e._v("manage.py:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("if __name__ == \"__main__\":\n    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'web_site.settings.prod')\n    ......\n")])])]),n("p",[e._v("wsgi.py:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import os\nfrom django.core.wsgi import get_wsgi_application\n\nos.environ.setdefault('DJANGO_SETTINGS_MODULE', 'web_site.settings.prod')\n\napplication = get_wsgi_application()\n")])])]),n("p",[e._v("Heroku Environment Variable:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('DJANGO_SETTINGS_MODULE = "web_site.settings.heroku"\n')])])]),n("hr"),e._v(" "),n("h1",{attrs:{id:"postgres-database"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#postgres-database"}},[e._v("#")]),e._v(" Postgres Database")]),e._v(" "),n("p",[e._v("要求 Heroku 加入 Postgres 的 Add-Ons")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku addons:create heroku-postgresql:hobby-dev\nCreating heroku-postgresql:hobby-dev on ⬢ serene-crag-30137... free\nDatabase has been created and is available\n ! This database is empty. If upgrading, you can transfer\n ! data from another database with pg:copy\nCreated postgresql-defined-16536 as DATABASE_URL\nUse heroku addons:docs heroku-postgresql to view documentation\n\n$ heroku pg:info\n=== DATABASE_URL\nPlan:                  Hobby-dev\nStatus:                Available\nConnections:           0/20\nPG Version:            11.2\nCreated:               2019-04-02 13:27 UTC\nData Size:             7.7 MB\nTables:                0\nRows:                  0/10000 (In compliance)\nFork/Follow:           Unsupported\nRollback:              Unsupported\nContinuous Protection: Off\nAdd-on:                postgresql-defined-16536\n")])])]),n("p",[e._v("設定 Heroku 平台 DB URL")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku config -s | grep DATABASE_URL\n\n\n$ heroku config -s | grep DATABASE_URL\n\nDATABASE_URL='postgres://bfmsqsgqqhibrl:b0e69f257d7dc611c29f2d437368874c11065a80aa31880f67e987210f5c2e25@ec2-54-225-242-183.compute-1.amazonaws.com:5432/d9mn8r7u66f8h1'\n")])])]),n("p",[e._v("將 local 端的 Postgres 資料庫匯入 Heroku 平台")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku pg:push 《SOURCE》 《TAGRET》\n\n\n$ heroku pg:push postgres://django2_helloworld:Passw0rd@localhost/django2_helloworld_db postgresql-defined-16536\n")])])]),n("hr"),e._v(" "),n("h1",{attrs:{id:"heroku-環境變數設定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#heroku-環境變數設定"}},[e._v("#")]),e._v(" Heroku 環境變數設定")]),e._v(" "),n("p",[e._v("設定 DATABASE_URL：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku config:set DATABASE_URL='postgres://bfmsqsgqqhibrl:b0e69f257d7dc611c29f2d437368874c11065a80aa31880f67e987210f5c2e25@ec2-54-225-242-183.compute-1.amazonaws.com:5432/d9mn8r7u66f8h1'\n")])])]),n("p",[e._v("設定停用 Collectstatic")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku config:set DISABLE_COLLECTSTATIC=1\n")])])]),n("p",[e._v("設定 DJANGO_ALLOWED_HOSTS")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku config:set DJANGO_ALLOWED_HOSTS='serene-crag-30137.herokuapp.com'\n")])])]),n("p",[n("s",[e._v("設定 DJANGO_STATIC_HOST")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku config:set DJANGO_STATIC_HOST='https://serene-crag-30137.herokuapp.com'\n")])])]),n("p",[e._v("設定 DJANGO_SETTINGS_MODULE：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku config:set DJANGO_SETTINGS_MODULE='web_site.settings.heroku'\n")])])]),n("hr"),e._v(" "),n("p",[e._v("佈署")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ ./manage.py collectstatic\n$ git add . && git commit -m "Deploy to Heroku Platform"\n$ git push heroku master\n\n\n$ git push heroku master\nCounting objects: 10354, done.\nDelta compression using up to 8 threads.\nCompressing objects: 100% (6512/6512), done.\nWriting objects: 100% (10354/10354), 23.43 MiB | 3.03 MiB/s, done.\nTotal 10354 (delta 4062), reused 7172 (delta 2355)\nremote: Compressing source files... done.\nremote: Building source:\nremote: \nremote: -----\x3e Python app detected\nremote:  !     Python has released a security update! Please consider upgrading to python-3.6.8\nremote:        Learn More: https://devcenter.heroku.com/articles/python-runtimes\nremote: -----\x3e Installing python-3.6.4\nremote: -----\x3e Installing pip\nremote: -----\x3e Installing dependencies with Pipenv 2018.5.18…\nremote:        Installing dependencies from Pipfile.lock (dd71a2)…\nremote: -----\x3e Installing SQLite3\nremote: -----\x3e Discovering process types\nremote:        Procfile declares types -> web\nremote: \nremote: -----\x3e Compressing...\nremote:        Done: 87.1M\nremote: -----\x3e Launching...\nremote:        Released v7\nremote:        https://serene-crag-30137.herokuapp.com/ deployed to Heroku\nremote: \nremote: Verifying deploy... done.\nTo https://git.heroku.com/serene-crag-30137.git\n * [new branch]      master -> master\n')])])]),n("p",[e._v("啟動 Heroku App")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku open\n")])])]),n("p",[e._v("重新啟動 Heroku App")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku restart -a serene-crag-30137\n")])])]),n("p",[e._v("查 Log 紀錄")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku logs -n 200\n\n\n$ heroku logs --tail\n")])])]),n("h2",{attrs:{id:"在-local-端試行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-local-端試行"}},[e._v("#")]),e._v(" 在 Local 端試行")]),e._v(" "),n("p",[n("strong",[e._v("備妥下列三個檔案：")])]),e._v(" "),n("ul",[n("li",[e._v("runtime.txt")]),e._v(" "),n("li",[e._v(".env")]),e._v(" "),n("li",[e._v("Procfile.local")])]),e._v(" "),n("p",[n("strong",[e._v("runtime.txt")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("python-3.6.8\n")])])]),n("p",[n("strong",[e._v(".env")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("DATABASE_URL=postgres://bfmsqsgqqhibrl:b0e69f257d7dc611c29f2d437368874c11065a80aa31880f67e987210f5c2e25@ec2-54-225-242-183.compute-1.amazonaws.com:5432/d9mn8r7u66f8h1\nDISABLE_COLLECTSTATIC=1\nDJANGO_ALLOWED_HOSTS=serene-crag-30137.herokuapp.com\nDJANGO_SETTINGS_MODULE=web_site.settings.heroku\n")])])]),n("p",[e._v("【註】： 自 Heroku 平台抄錄環境變數到 .env 檔案")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ heroku config:get 《變數名稱》 -s >> 《檔案名稱》  \n$ heroku config:get DJANGO_SETTINGS_MODULE -s >> .env  \n")])])]),n("p",[n("strong",[e._v("Procfile.local")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('web: gunicorn --env DJANGO_SETTINGS_MODULE="web_site.settings.heroku"  web_site.wsgi  --log-file \n')])])]),n("hr"),e._v(" "),n("h1",{attrs:{id:"參考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#參考文章"}},[e._v("#")]),e._v(" 參考文章")]),e._v(" "),n("p",[e._v("https://medium.com/@hdsingh13/deploying-django-app-on-heroku-with-postgres-as-backend-b2f3194e8a43")]),e._v(" "),n("p",[e._v("https://devcenter.heroku.com/articles/heroku-local")])])}),[],!1,null,null,null);n.default=t.exports}}]);
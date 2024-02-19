# Python 與 Django 速查指令

# 一、虛擬環境（Virtual Environment）管理


## （A）虛擬環境管理作業：VirtualEnvWrapper

使用 VirtualEnvWrapper 。

虛擬環境所在目錄路徑
~/.virtualenvs/＜虛擬環境名稱＞

**建立虛擬環境**

    $ mkvirtualenv excel

**查詢可用之虛擬環境** 

    $ workon

**啟用虛擬環境**

    $ workon excel

停用**虛擬環境**

    $ deactivate

複製**虛擬環境**

    $ cpvirtualenv <ExitEnvName> <TagretEnvName>


----------
## （B）虛擬環境管理作業：Conda

使用 Conda 

虛擬環境所在目錄路徑（Mac）

- Mac: ~/_mySDK/Python_Virtual_Env/myEnv
- Windows 10: C:\Users\AlanJui\AppData\Local\conda\conda\envs\<VirtualEnvName>

**建立虛擬環境**

    $ conda create --name myDjangoEnv django

虛擬環境存放目錄路徑：

- C:\Users\AlanJui\AppData\Local\conda\conda\envs
- C:\ProgramData\Anaconda3\envs
- C:\Users\AlanJui\.conda\envs


    $ conda create --name myDjangoEnv django
    Fetching package metadata .............
    Solving package specifications: .
    
    Package plan for installation in environment C:\Users\AlanJui\AppData\Local\conda\conda\envs\myDjangoEnv:
    
    The following NEW packages will be INSTALLED:
    
        certifi:        2017.11.5-py35h456c6ae_0
        django:         1.11.8-py35hd476221_0
        pip:            9.0.1-py35h691316f_4
        python:         3.5.4-h1357f44_23
        pytz:           2017.3-py35hb294b1a_0
        setuptools:     36.5.0-py35h21a22e4_0
        vc:             14-h2379b0c_2
        vs2015_runtime: 14.0.25123-hd4c4e62_2
        wheel:          0.30.0-py35h38a90bc_1
        wincertstore:   0.2-py35hfebbdb8_0
    
    Proceed ([y]/n)? y
    
    python-3.5.4-h 100% |###############################| Time: 0:00:01  11.49 MB/s
    certifi-2017.1 100% |###############################| Time: 0:00:00   8.04 MB/s
    pytz-2017.3-py 100% |###############################| Time: 0:00:00   9.79 MB/s
    wincertstore-0 100% |###############################| Time: 0:00:00   1.25 MB/s
    django-1.11.8- 100% |###############################| Time: 0:00:01   2.55 MB/s
    setuptools-36. 100% |###############################| Time: 0:00:00   9.89 MB/s
    wheel-0.30.0-p 100% |###############################| Time: 0:00:00   3.63 MB/s
    pip-9.0.1-py35 100% |###############################| Time: 0:00:00  11.26 MB/s
    #
    # To activate this environment, use:
    # > activate myDjangoEnv
    #
    # To deactivate an active environment, use:
    # > deactivate
    #
    # * for power-users using bash, you must source
    #

**查詢可用之虛擬環境**  

    $ conda info --envs

**啟用虛擬環境**

    $ source activate myDjangoEnv

【註】：即便是 Windows 平台，若 CLI 用的不是 CMD ；而是 Git Bash ，一樣要加「source」。

**停用虛擬環境**

    $ source deactivate

**刪除虛擬環境**

    $ conda remove --name <VirtualEnvName> --all


----------


# 二、管理 Python 套件
## 使用 pip 管理

**安裝最新版本套件**
安裝最新之 django

    $ pip install django

**安裝某版本之套件**
安裝某特定版本之 django

    $ pip install django==1.11

**查詢套件之版本**
查詢目前使用之虛擬環境，其 django 版本為何

    $ python -c "import django; print(django.get_version())"

反安裝某套件

    $ pip uninstall django


**建立套件安裝清單**

    $ pip freeze > requirements.txt


**依據套件安裝清單安裝套件**

    $ pip install -r requirements.txt



----------
## 使用 Conda 管理
## 安裝最新版本套件

**《範例》：**想在 myDjangoEnv 虛擬環境下，安裝 Python 3.5 版本的編譯器。

    $ conda create --name myDjangoEnv python=3.5


## 安裝最新版本套件

**《範例》：**安裝最新之 django

    $ conda install django


## 常用套件
- django
- psycopg2
- sqlalchemy
- pandas


----------


# 三、Django 專案操作


## 建立 Django 專案
    $ cd ~/workspace/Python   # 進到專案的工作目錄路徑
    $ django-admin startproject django_01　　# 建立專案及其專案根目錄
    $ cd django_01  #　進入專案根目錄路徑

【註】：專案名稱，可使用「底線」，但卻不能使用「横線」。

## 啟動伺服器
    $ python manage.py runserver

以上之指令，可將 ‘python manage.py` 簡化成：

    $ ./manage.py runserver


## 建立 Django App
    $ ./manage.py startapp first_app


![](https://d2mxuefqeaa7sj.cloudfront.net/s_CC33AD5C4678F36DFDEB0AC8B06CE225EA3992F406D9FA058E5D3E3761298111_1507351519116_2017-10-07_12-44-17.png)




----------


# 四、資料庫操作

依據 Model 定義，製作／變更 DB Entity

## Project 層級的 Migrate 操作指令

【指令】：

    $ ./manage.py migrate

《範例》：

    $ python manage.py migrate
    Operations to perform:
      Apply all migrations: admin, auth, contenttypes, sessions
    Running migrations:
      Applying contenttypes.0001_initial... OK
      Applying auth.0001_initial... OK
      Applying admin.0001_initial... OK
      Applying admin.0002_logentry_remove_auto_add... OK
      Applying contenttypes.0002_remove_content_type_name... OK
      Applying auth.0002_alter_permission_name_max_length... OK
      Applying auth.0003_alter_user_email_max_length... OK
      Applying auth.0004_alter_user_username_opts... OK
      Applying auth.0005_alter_user_last_login_null... OK
      Applying auth.0006_require_contenttypes_0002... OK
      Applying auth.0007_alter_validators_add_error_messages... OK
      Applying auth.0008_alter_user_username_max_length... OK
      Applying sessions.0001_initial... OK
    


## App 層級的 Migrate 操作指令

（1）指令：

    $ ./manage.py makemigrations <App_Name>

【註】：記得在 Project 的 settings.py 檔案，於 INSTALLED_APPS = [ … ] 中，先加入 <App_Name>

《範例》：

    $ python manage.py makemigrations first_app
    Migrations for 'first_app':
      first_app\migrations\0001_initial.py
        - Create model AccessRecord
        - Create model Topic
        - Create model Webpage
        - Add field name to accessrecord


![](https://d2mxuefqeaa7sj.cloudfront.net/s_CC33AD5C4678F36DFDEB0AC8B06CE225EA3992F406D9FA058E5D3E3761298111_1507372725215_2017-10-07_18-38-05.png)


（2）指令：

    $ python manage.py migrate

《範例》：

    $ python manage.py migrate
    Operations to perform:
      Apply all migrations: admin, auth, contenttypes, first_app, sessions
    Running migrations:
      Applying first_app.0001_initial... OK



![](https://d2mxuefqeaa7sj.cloudfront.net/s_CC33AD5C4678F36DFDEB0AC8B06CE225EA3992F406D9FA058E5D3E3761298111_1507372901207_2017-10-07_18-40-28.png)



## 使用 Python Shell 進行資料操作

**（1） 啟用 Python Shell**

    $ python manage.py shell

**（2）擇用 Model 中的某類別**

    >>> from first_app.models import Topic

**（3）條列該類別的所有物件**

    >>> print(Topic.objects.all())
    <QuerySet []>

**（4）新增類別的一個物件**

    >>> t = Topic(topic_name="Social Network")
    >>> t.save()

**（5）驗證物件已建立**

    >>> print(Topic.objects.all())
    <QuerySet [<Topic: Social Network>]>

**（6）結束**

    >>> quit()
    (myDjangoEnv)
    AlanJui at MacBook-Pro.local in [~/workspace/Python/myProject_01]  on git:master ✗  0ccb775 "啟用 first_app 的首頁"
    18:55:16 $



## ＤＢ使用者管理

建立「管理員」使用者

    $ python manage.py createsuperuser

  


----------


# 狀況排除


## 1. 無法啟動 Server

**問題現象：**

    (myDjangoEnv)
    AlanJui@WIN-01 MINGW64 /d/Workspace/Python/django_01
    $ python manage.py runserver
    Segmentation fault

**解決方法：**

    $ python manage.py migrate



## 2. 無法依 App 中 models.py 的描述進行 migration 

**問題現象：**

    $ python manage.py makemigrations first_app
    App 'first_app' could not be found. Is it in INSTALLED_APPS?

**解決方法：**
在 Project 的 settings.py 檔案，於 INSTALLED_APPS = [ … ] 中，先加入 <App_Name>

    # Application definition
    
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'first_app',
      ]


## 3. 安裝路徑

**Pip、Django、**

    C:\Tools\Miniconda3\Lib\site-packages



----------


# Anaconda3

參考文件：　https://conda.io/docs/user-guide/tasks/manage-environments.html

## 安裝與設定

**Home Directory**

    C:\Users\AlanJui\

**安裝目錄路徑**

    C:\ProgramData\Anaconda3\

**虛擬環境目錄路徑**

    C:\ProgramData\Anaconda3\envs

**系統環境設定**

    PATH = C:\ProgramData\Anaconda3\Scripts;%PATH%

驗證：

    $ conda -V


## 建立 Environment

新建

    $ conda create --name myenv


    AlanJui@WIN-01 MINGW64 /d/Workspace/PythonExcel/PyXls-001 (master)
    $ conda create --name myDjango2
    Fetching package metadata .............
    Solving package specifications:
    Package plan for installation in environment C:\Users\AlanJui\AppData\Local\conda\conda\envs\myDjango2:
    
    Proceed ([y]/n)? n
    
    Exiting

**以舊環境複製出新環境**

    $ conda create --name my_root --clone="C:\ProgramData\Anaconda3"

**建立環境時，順便指定 Python 版本**

    $ conda create -n myenv python=3.4

**建立環境時，順便安裝Python套件**

    $ conda create -n myenv scipy=0.15.0

以上單行指令等同以下兩條指令：

    $ conda create -n myenv python
    $ conda install -n myenv scipy=0.15.0



## 查詢可用環境
    $ conda info --envs


    $ conda env list


    AlanJui@WIN-01 MINGW64 /d/Workspace/PythonExcel/PyXls-001 (master)
    $ conda info --envs
    # conda environments:
    #
    my_root                  C:\Users\AlanJui\AppData\Local\conda\conda\envs\my_root
    excel                    C:\ProgramData\Anaconda3\envs\excel
    root                  *  C:\ProgramData\Anaconda3


## 啟用環境

**使用Git Bash**

    $ source activate excel

**使用Anaconda Prompt**

    $ activate excel



## 停用環境

**使用Git Bash**

    $ source deactivate

**使用Anaconda Prompt**

    $ deactivate


## 安裝套件

**安裝套件**

    $ conda install <PKG>[==V.r]

**更新套件**

    $ conda update <PKG>

**更新所有套件**

    $ conda update --all

升級Aconda/Conda

    $ conda update conda
    $ conda update anaconda

**查詢已安裝之套件**

    $ conda list

**查詢某環境已安裝之套件**

    $ conda list -n root


## 與 PyCharm 整合

在 PyCharm 專案中，務必指定解釋器 python 所在位置，如：/c/ProgramData/Anaconda3/envs/excel/python.exe

如若遇到 PyCharm 抱怨：Anaconda installation is not found
這是因為 PyCharm 在「判斷作業系統是否已安裝 Anaconda 的規則，是尋找［%HOMEPATH%/anaconda/］目錄是否已存在？」。

所以，遇著以上狀況時，則製作 SymboalLink 以解決問題：

    C:\> mklink /D %HOMEPATH%\anaconda C:\ProgramData\Anaconda3

記得要重新啟動 PyCharm ，這樣才能令PyCharm通過「Anaconda是否已安裝的規則」。



----------


# 佈署到 Heroku


## (1) 建立 Heroku App


    $ git init
    $ ...
    $ heroku login
    $ heroku create --buildpack heroku/python


## (2) Setting up your project

In your project add the following to your `requirements.txt`:

    django-toolbelt

Create a file named `Procfile` in your project with the following content:

    web: gunicorn --log-file - mysite.wsgi

In your `settings.py` change:

    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": "dev.db",
        }
    }

to:

    import dj_database_url
    DATABASES = {
        "default": dj_database_url.config()
    }

In your `mysite/wsgi.py` change:

    application = get_wsgi_application()

to:

    from dj_static import Cling, MediaCling
    application = Cling(MediaCling(get_wsgi_application()))


## (3) Commit to git

Add everything to git and commit:

    git add .
    git commit -m "added Heroku support"


## (4) Deploy to Heroku

To deploy to Heroku you use `git`:

    git push heroku master

Run migrations:

    heroku run python manage.py migrate


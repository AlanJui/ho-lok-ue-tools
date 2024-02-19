---
sidebar: auto
---

# Ubuntu 建置 Django 整合測試伺服器安裝指引

## 摘要

本文件用於說明：在 Django App 的開發流程中，如何使用 VM 建置「整合及測試伺服器」。

- VM 建置工具： VitualBox；
- VM 作業系統：Ubuntu Desktop 20.04 。

【主要章節】：

- 建置 Ubuntu 虛擬電腦
- 建置 Django App 作業平台
- 安裝 Django App 原始碼
- 建置 Django App 用 HTTP 服務
- 建置 Django App 用 DB 服務
- 建置 Django App 用 uWSGI 服務
- 建置 Django App Server

## 建置 Ubuntu 虛擬電腦

【安裝需求】：

- 主機(Host)：MacBookPro 2012

  - CPU: 2.9 GHz 2 核心 Intel Core i7
  - RAM: 16 GB 1600 MHz DDR3
  - 顯卡：Intel HD Graphics 4000 1536 MB
  - 硬碟：1TB SSD
  - OS: macOS Catalina

- VirtualBox: V6.1.18 (Qt5.6.3)

【建置 VM 作業】：

[《Ubuntu 20.04 VM 建置作業》](./Ubuntu-Install_SIT_Server-Initial.md)

## 建置 Django App 作業平台

[《在 Ubuntu 建置 Django App 作業平台指引》](./Ubuntu-Install_SIT_Server-Build_DjangoApp_Platform.md)

## 建置 Django App 管理員帳號

1. 建置 Django App 帳號：web-admin。

2. Logout 後，再以 Django App 管理員帳號登入。

3. 設定「登入帳號」屬 www-data 群組。

```
sudo usermod -aG www-data $USER
```

4. 確認 www-data 群組已建立。

```
cat /etc/group | grep www-data
```

📺

```
alanjui@VB02-Ubuntu-2004:/var/www/mysite.ccc.tw.local$ cat /etc/group | grep www-data
www-data:x:33:alanjui
```

5. 檢查「使用者帳號」及其所歸屬「群組」。

```
id
groups
```

📺

```
alanjui@VB02-Ubuntu-2004:/var/www/mysite.ccc.tw.local$ id
使用者id=1000(alanjui) id群組=1000(alanjui) 組=1000(alanjui),4(adm),24(cdrom),27(sudo),30(dip),33(www-data),46(plugdev),120(lpadmin),131(lxd),132(sambashare)

alanjui@VB02-Ubuntu-2004:/var/www/mysite.ccc.tw.local$ groups
alanjui adm cdrom sudo dip www-data plugdev lpadmin lxd sambashare
```

## 安裝 Django App 原始碼

1. 建置 Django App 目錄。

```
sudo su
cd /var/www
```

2. 將 Django App 原始碼放入 Django App 目錄。

```
git clone [User]@[URL]:"~/Path/to/ProjectRepo" [domain-name]
```

📺

```
$ git clone alanjui@192.168.66.21:"~/workspace/django/test-100" app.ccc.tw.local
```

3. 設定「目錄」的擁有使用者及使用權限。

```
chown -R www-data:www-data /var/www/[domain-name]
chmod -R 775 /var/www/[domain-name]
```

📺

```
$ chown -R www-data:www-data /var/www/app.ccc.tw.local
$ chmod -R 775 /var/www/app.ccc.tw.local
```

## 建置 HTTP 服務

使用 nginx 服務，針對：網頁、圖片、CSS、JavaScript⋯⋯ 等檔案（Static Files），可利用
HTTP 通信協定，提供檔案下載功能。

[《以 Nginx 建置 HTTP Server 指引》](./Ubuntu-Install_Nginx_as_HTTP_Server.md)

1. 修改 settings.py 檔案內的設定：

- ALLOWED_HOSTS
- STATIC_ROOT
- MEDIA_ROOT

🔖

```
....
ALLOWED_HOSTS = [
    'mysite.ccc.tw.local',
    'localhost',
    '127.0.0.1',
]
....
STATIC_ROOT = BASE_DIR / 'static_collected'
....
MEDIA_ROOT = BASE_DIR / 'media'
MEDIA_URL = '/media/'
```

2. 設定 urls.py 檔。

- [Serving files uploaded by a user during development](https://docs.djangoproject.com/en/3.1/howto/static-files/#serving-files-uploaded-by-a-user-during-development)
- [Managing static files (e.g. images, JavaScript, CSS)](https://docs.djangoproject.com/en/3.1/howto/static-files/#serving-files-uploaded-by-a-user-during-development)

```
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # ... the rest of your URLconf goes here ...
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

🔖 Django > v1.7 and < v3.0

```
urlpatterns = patterns('',
    # ... the rest of your URLconf goes here ...
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

- 不在 DEBUG Mode 不啟用的寫法：

```
if settings.DEBUG:
    urlpatterns += patterns('django.views.static',
        (r'media/(?P<path>.*)', 'serve', {'document_root': settings.MEDIA_ROOT}),
    )

```

## 建置 DB 服務

建置「資料庫系統」，用以支援 Django App 在資料存取所需之功能。

[《Postgres DB Server 安裝指引》](./Ubuntu-Install_Postgres_DB_Server.md)

### 安裝 Postgres 支援套件

1. 啟用「虛擬環境」。

```
sudo su
cd /var/www/mysite.ccc.tw.local
source .venv/bin/activate
```

2. 安裝支援 psycopg2 安裝用套件

```
apt install libpq-dev
```

3. 安裝 psycopg2 套件

```
pip install psycopg2
```

### 變更 settings.py 設定檔

```
vim web_config/settings.py
```

🔖 settings.py

```
. . .
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': ‘<db_name>’,
        'USER': '<db_username>',
        'PASSWORD': '<password>',
        'HOST': '<db_hostname_or_ip>',
        'PORT': '<db_port>',
    }
}
. . .
```

### 建立資料庫用 DB 及 Tables

[How to use PostgreSQL with Django](https://www.enterprisedb.com/postgres-tutorials/how-use-postgresql-django)

1. 執行 django makemigrations 指令。

```
python manage.py makemigrations
```

2. 執行 django migrate 指令，建置資料庫系統用 DB Schema。

```
python manage.py migrate
```

3. 建立「後台使用者帳號及密碼」。

```
python manage.py createsuperuser
```

## 建置 uWSGI 服務

### 將已運作中之 uwsgi 服務暫停

```
sudo su
systemctl status uwsgi
systemctl stop uwsgi
```

### 設定 uwsgi 執行環境

```
cd /var/www/
ln -nfs /var/www/app.ccc.tw.local/config/app.ccc.tw.local.ini /etc/uwsgi/apps-enabled
```

### 驗證 uwsgi 服務設定檔能正常運行

```
/usr/local/bin/uwsgi --ini /etc/uwsgi/apps-enabled/app.ccc.tw.local.ini
```

### 啟動 uwsgi 服務

```
systemctl start uwsgi
```

## 啟動 Django App Server 作業

1. 進入目錄

```
sudo su
cd /var/www/app.ccc.tw.local
```

2. 啟動「虛擬環境」

```
source .venv/bin/activate
```

3. 安裝 Python 套件

```
pip install -r requirements.txt
```

4. 設定「作業情境」的「環境變數」：

設定 Django App 執行時（Run Time）應引用之「作業情境」環境變數。

```
$ export django_app_mode_for_app="prod"
```

5. 搜集所有 Static 檔案

安裝 HTTP Server 需使用之 static 檔案

```
python manage.py collectstatic
```

6. 建置 DB Schemas

- 方法一：已事先設定 djang_app_mode_for \_app="prod" 環境變數用法

```
python manage.py makemigrations
python manage.py migrate
```

- 方法二：未事先設定環境變數用圔

```
$ DJANGO_SETTINGS_MODULE=web_site.settings.prod python manage.py makemigrations
$ DJANGO_SETTINGS_MODULE=web_site.settings.prod python manage.py migrate
```

【註】： 建置開發環境使用的 SQLite 資料庫

```
$ DJANGO_SETTINGS_MODULE=web_site.settings.dev python manage.py migrate
$ DJANGO_SETTINGS_MODULE=web_site.settings.dev python manage.py createsuperuser
```

7. 建立後台管理員帳號與密碼

```
$ DJANGO_SETTINGS_MODULE=web_site.settings.prod python manage.py createsuperuser
```

## 問題診斷與狀況排解

N/A

## 參考文件

### Django Settings

https://docs.djangoproject.com/en/2.1/topics/settings/

https://medium.com/@panzelva/deploying-django-website-to-vps-with-uwsgi-and-nginx-on-ubuntu-18-04-db9b387ad19d

How To Install Python 3 and Set Up a Programming Environment on Ubuntu 18.04 [Quickstart]
https://www.digitalocean.com/community/tutorials/how-to-install-python-3-and-set-up-a-programming-environment-on-ubuntu-18-04-quickstart

### 多重環境

https://stackoverflow.com/questions/10664244/django-how-to-manage-development-and-production-settings

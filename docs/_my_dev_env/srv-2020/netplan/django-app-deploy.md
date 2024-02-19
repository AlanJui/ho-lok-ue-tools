<!-- markdownlint-disable MD024 MD029 MD040 MD041 MD043 MD045 MD033 -->

# 應用系統佈署作業指引

## 摘要

如何在已建置之應用系統平台，「佈署」Django 應用系統。

## 前提

- pyenv 已安裝並設定
- poetry 已安裝並設定
- nginx 已安裝並設定

## 自 Git Repo 下載

1. 進入專案目錄

   ```sh
   cd /apps
   ```

2. 下載 Repo

   ```sh
   git clone URL app3.ccc.tw.local
   ```

3. 確認已指定 Python 直譯器版本。

   ```sh
   cd app3.ccc.tw.local
   pyenv version
   ```

4. 建立應用系統使用之 VirtualEnv 環境。

   ```sh
   python -m venv .venv
   poetry shell
   ```

5. 安裝應用系統所需 Python 套件。

   ```sh
   poetry install
   ```

6. 驗證 Django Web Server 已能運作。

   ```sh
   python manage.py collectstatic --noinput
   python manage.py runserver
   ```

## 建置 Host Name

在 Host 清單（檔案：/etc/hosts），建置 Django 應用系統之
Host Name 及使 用之 IP 。

1. 編輯 Host 清單。

   ```sh
   sudoedit /etc/hosts
   ```

2. 添加一筆 Host 與 IP 對映紀錄。

   ```sh
   127.0.0.1       localhost
   127.0.0.1       SRV-2020
   192.168.66.10   app.ccc.tw.local
   192.168.66.10   app3.ccc.tw.local
   ```

## 建置 HTTP 虛擬網站

nginx 的「虛擬網站」功能，可令一台 HTTP 伺服器，建置及執行多
個網站。 每個 Django 應用系統，均會有： .css 樣式檔、 .html
網頁模版檔、.png/.jpg 圖檔... 等靜態檔案，考慮到應用系統之執
行效能，當 Web Client 傳來之 HTTP Request ，若處理的結果只需
回送「靜態檔案」，供 Web Client 下載，則此作業 之執行由專職
的 HTTP 服務來執行，會有較佳之效能表現，故而交由 nginx 擔綱
負責。

以下之操作，將說明：當 nginx 服務已於伺服器完成安裝後，該如
何作業，完成 Django 應用系統之 HTTP 網站。

1. 套用現成虛擬網站設定檔。

   ```sh
   sudo su
   cd /etc/nginx/sites-available
   cp app1.ccc.tw.local app3.ccc.tw.local
   vim  app3.ccc.tw.local
   ```

   🔖 app3.ccc.tw.local:

   ```sh
    upstream django {
        # server 127.0.0.1:8001;
        server unix:///apps/app3.ccc.tw.local/web_app.sock;
    }

    server {
        listen 80;

        server_name             app3.ccc.tw.local;
        charset                 utf-8;

        # max upload size
        client_max_body_size    75M;

        # Django media
        location /media {
            alias        /apps/app3.ccc.tw.local/media;
        }

        location /static {
            alias        /apps/app3.ccc.tw.local/static_collected;
        }

        location / {
            uwsgi_pass   django;
            include      /apps/app3.ccc.tw.local/uwsgi_params;
        }

        access_log      /var/log/nginx/app3-ccc-tw-local.log;
        error_log       /var/log/nginx/app3-ccc-tw-local-error.log;
    }
   ```

2. 啟用 HTTP 虛擬網站

   ```sh
   ln -nfs /etc/nginx/sites-available/app3.ccc.tw.local /etc/nginx/sites-enabled
   ```

3. 確認 Nginx 設定無誤。

   檢驗網站設定語法正確無誤，確保 Nginx Service 不會因設定錯
   誤，導致服務無法正常啟動。

   ```sh
   nginx -t
   ```

4. 重啟 nginx 服務，以便新進建置之 Django 應用系統網站，已能
   正常運作。

   ```sh
   service nginx restart
   service nginx status
   ```

   或

   ```sh
   systemctl restart nginx
   systemclt status nginx
   ```

5. 驗證應用系統 HTTP 虚擬網站已能為 static 檔案提供下載服務
   。

   使用瀏覽器，瀏覽網址：
   <http://app3.ccc.tw.local/static/css/site.css> 。

   若能於瀏覽器看到 site.css 的內容，即表示 HTTP 虚擬網站已
   能正常運作，同時可對 static 型態的檔案提供下載服務。

## 建置 uWSGI 設定檔

WSGI 本身就是一個介面，用於將 HTTP Server 無法處理 HTTP
Request 收下；轉予 Django Application 處理。

::: tip

```sh
web client <-> web server <-> unix socket <-> uWSGI <-> Python
                (Nginx)                      (uwsgi)   (Django)
```

:::

1. 建立 uWSGI 設定檔。

   ```sh
   cd /apps/app3.ccc.tw.local
   vim web_app_uwsgi.ini
   ```

   🔖 web_app_uwsgi.ini:

   ```sh
   [uwsgi]
   # Django-related settings
   # the base directory (full path)
   chdir           = /apps/app3.ccc.tw.local
   # Django's wsgi file
   module          = app3.ccc.tw.local.web_app.wsgi
   # the virtualenv (full path)
   home            = /apps/app3.ccc.tw.local/.venv

   # process-related settings
   # master
   master          = true
   # maximum number of worker processes
   processes       = 5
   # the socket (use the full path to be safe
   socket          = /apps/app3.ccc.tw.local/web_app.sock
   # ... with appropriate permissions - may be needed
   chmod-socket    = 666
   # clear environment on exit
   vacuum          = true
   ```

2. 安裝 uwsgi 套件。

   ```sh
   poetry add uwsgi
   ```

3. 驗證 Nginx <--> uWSGI <--> Django App 通訊已打通。

   ```sh
   .venv/bin/uwsgi --ini web_app_uwsgi.ini
   ```

   若無錯誤訊息，即表示 Nginx <--> uWSGI <--> Django App 通
   訊已打通。

## 建置自動開機服務

為使已佈署之 Django 應用系統，能於開機後自動啟動。故需建置及
啟用 Django 應用系統專用之服務。

1. 建置 app3 服務設定檔。

   ```sh
   sudoedit /etc/systemd/system/app3.service
   ```

   【檔案內容】：

   ```sh
   [Unit]
   Description=uWSGI instance to serve app3.ccc.tw.local

   [Service]
   ExecStartPre=-/usr/bin/bash -c 'mkdir -p /run/uwsgi; chown www-data:www-data /run/uwsgi'
   ExecStart=/usr/bin/bash -c 'cd /apps/app3-ccc-tw-local; \
   /apps/app3-ccc-tw-local/.venv/bin/uwsgi --ini web_app_uwsgi.ini'

   [Install]
   WantedBy=multi-user.target
   ```

2. 啟用 app3 服務。

   ```sh
   sudo systemctl enable app3
   sudo systemctl start app3
   ```

3. 檢視 app3 服務，確認該服務已能正常運作。

   ```sh
   sudo systemctl status app3
   ```

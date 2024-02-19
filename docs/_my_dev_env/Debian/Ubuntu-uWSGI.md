---
sidebar: auto
---

# 在 Ubuntu 建置 uWSGI 作業環境

## 摘要

如何在 Ubuntu 作業系統，建置 uWSGI 服務，用以整合 Nginx（HTTP Server）與 Django App （Application Server）。

- 安裝 uWSGI 服務
- 驗證 uwsgi 能用 port 串連 Django App
- 驗證 uwsgi 能用 unix socket 串連 Django App
- 驗證 uwsgi 能與 Django App 整合運作
- 驗證 uWSGI 能依設定檔運作

## 安裝 uWSGI 服務

安裝 uWSGI 服務作為 WSGI (Web Server Gateway Interface) 。

📚 [《Setting up Django and your web server with uWSGI and nginx》](https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html)

### 安裝作業

1. 安裝 uWSGI 套件。

先將已啟用之「虛擬環境」停掉。

```
sudo -H pip3 install uwsgi
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ sudo -H pip3 install uwsgi
Processing /root/.cache/pip/wheels/87/01/0f/2fc9c74a1ae010de7d8b17d90f6b39595cbb8ac5169345fcb8/uWSGI-2.0.19.1-cp38-cp38-linux_x86_64.whl
Installing collected packages: uwsgi
Successfully installed uwsgi-2.0.19.1
alanjui@VB02-Ubuntu-2004:~$ which uwsgi
/usr/local/bin/uwsgi
alanjui@VB02-Ubuntu-2004:~$ ll /usr/local/bin/uwsgi
-rwxr-xr-x 1 root root 1341888  3月 28 15:23 /usr/local/bin/uwsgi*
```

### 驗證作業

驗證 Web Client 傳來之 HTTP Request ，能被 uwsgi 服務接收，並轉傳至
Django App 。

通信路徑：
Web Client ⬅➡ uWSGI ⬅➡ Django App

1. 建置測試用 Django App

```
cd
mkdir www && cd $_
pyenv virtualenv 3.9.1 venv-3.9.1
pyenv local venv-3.9.1
~/.pyenv/versions/3.9.1/envs/venv-3.9.1/bin/python3.9 -m pip install --upgrade pip

pip install Django

django-admin
```

2. 安裝 python 套件：uwsgi。

```
pip install uwsgi
```

3. 新增 test.py 測試檔，以為「測試用 Django App」。

```
vim test.py
```

🔖

```
# test.py
def application(env, start_response):
    start_response('200 OK', [('Content-Type','text/html')])
    return [b"Hello World"]
```

4. 使用 uwsgi 啟動「測試用 Django App」。

```
uwsgi --http :8000 --wsgi-file test.py
```

📺

```
(venv-3.9.1) alanjui@VB02-Ubuntu-2004:~/www/mysite$ uwsgi --http :8000 --wsgi-file test.py
*** Starting uWSGI 2.0.19.1 (64bit) on [Fri Mar 26 21:00:15 2021] ***
compiled with version: 9.3.0 on 26 March 2021 12:58:00
os: Linux-5.8.0-48-generic #54~20.04.1-Ubuntu SMP Sat Mar 20 13:40:25 UTC 2021
nodename: VB02-Ubuntu-2004
machine: x86_64
clock source: unix
detected number of CPU cores: 2
current working directory: /home/alanjui/www/mysite
detected binary path: /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1/bin/uwsgi
!!! no internal routing support, rebuild with pcre support !!!
*** WARNING: you are running uWSGI without its master process manager ***
your processes number limit is 15511
your memory page size is 4096 bytes
detected max file descriptor number: 1024
lock engine: pthread robust mutexes
thunder lock: disabled (you can enable it with --thunder-lock)
uWSGI http bound on :8000 fd 4
spawned uWSGI http 1 (pid: 72818)
uwsgi socket 0 bound to TCP address 127.0.0.1:41827 (port auto-assigned) fd 3
Python version: 3.9.1 (default, Mar 26 2021, 13:50:53)  [GCC 9.3.0]
*** Python threads support is disabled. You can enable it with --enable-threads ***
Python main interpreter initialized at 0x556dc9fcb0c0
your server socket listen backlog is limited to 100 connections
your mercy for graceful operations on workers is 60 seconds
mapped 72920 bytes (71 KB) for 1 cores
*** Operational MODE: single process ***
WSGI app 0 (mountpoint='') ready in 0 seconds on interpreter 0x556dc9fcb0c0 pid: 72776 (default app)
*** uWSGI is running in multiple interpreter mode ***
spawned uWSGI worker 1 (and the only) (pid: 72776, cores: 1)
[pid: 72776|app: 0|req: 1/1] 192.168.66.21 () {38 vars in 720 bytes} [Fri Mar 26 21:00:24 2021] GET / => generated 11 bytes in 0 msecs (HTTP/1.1 200) 1 headers in 44 bytes (1 switches on core 0)
[pid: 72776|app: 0|req: 2/2] 192.168.66.21 () {38 vars in 679 bytes} [Fri Mar 26 21:00:24 2021] GET /favicon.ico => generated 11 bytes in 0 msecs (HTTP/1.1 200) 1 headers in 44 bytes (1 switches on core 0)
[pid: 72776|app: 0|req: 3/3] 192.168.66.21 () {38 vars in 722 bytes} [Fri Mar 26 21:00:37 2021] GET / => generated 11 bytes in 0 msecs (HTTP/1.1 200) 1 headers in 44 bytes (1 switches on core 0)
[pid: 72776|app: 0|req: 4/4] 192.168.66.21 () {38 vars in 683 bytes} [Fri Mar 26 21:00:37 2021] GET /favicon.ico => generated 11 bytes in 0 msecs (HTTP/1.1 200) 1 headers in 44 bytes (1 switches on core 0)
```

5. 驗證 Web 瀏覽器，能自「測試用 Django App」傳來文字： Hello World 。

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/ ，確認「網頁」能見到文字： Hello World 。

## 驗證 Port 能串連 Django App

驗證 Web Client 傳來之 HTTP Request ，Web Server（nginx 服務）能依
「Request」判別：該由 nginx 取出「靜態檔」，供 Web Client 下載；亦
或是透過 port 交由 uwsgi 將 HTTP Request 轉交 Django App 處理。

通信路徑：
Web Client ⬅➡ Web Server ⬅➡ Web Socket (Port) ⬅➡ uWSGI ⬅➡ Django App

【處理規則】：

(1) 若 HTTP Request 要「取用 static 靜態檔」，由 nginx 服務處理：
static: .html / .css / .js / .png / .jpg

(2) 若 HTTP Request 要「取用 media 靜態檔」，由 nginx 服務處理：
media: image 檔案

(3) 以上皆非之 HTTP Request，透過 Web Socket（Port）轉交 uWSGI ，傳遞予 Django App 處理。

### 設定作業

1. 建立 mysite.ccc.tw.local 虛擬網站設定檔。

```
cd /home/alanjui/www/mysite
vim mysite.ccc.tw.local.conf
```

🔖 mysite.ccc.tw.local.conf

```
# the upstream component nginx needs to connect to
upstream django {
    # server unix:///path/to/your/mysite/mysite.sock; # for a file socket
    server 127.0.0.1:8001;  # for a web port socket
}

server {
    # the port mysite will be served on
    # listen 8000;
    # the domain name it will serve for
    server_name mysite.ccc.tw.local; # substitute your machine's IP address or FQDN
    charset utf-8;

    # max upload size
    client_max_body_size 75M; # adjust to taste

    # Django media
    location /media {
        alias /home/alanjui/www/mysite/media;
    }

    location /static {
        alias /home/alanjui/www/mysite/static_collected;
    }

    # Finally, send all non-media requests to the Djang server.
    location / {
        uwsgi_pass  django;
        include     /etc/nginx/uwsgi_params;
    }
}
```

2. 啟用 mysite.ccc.tw.local 虛擬網站。

```
cd /etc/nginx/sites-enabled
sudo ln -nfs /home/alanjui/www/mysite/mysite.ccc.tw.local.conf
sudo nginx -t
```

3. 設定「登入帳號」屬 www-data 群組。

```
sudo usermod -aG www-data $USER
```

### 驗證作業

驗證 Web Client 傳來之 HTTP Request ，Web Server（nginx 服務）能依
「Request」判別：該由 nginx 取出「靜態檔」，供 Web Client 下載；亦
或是透過 port 交由 uwsgi 將 HTTP Request 轉交 Django App 處理。

通信路徑：
Web Client ⬅➡ Web Server ⬅➡ Web Socket (Port) ⬅➡ uWSGI ⬅➡ Django App

1. 設定 Django App 的「靜態檔佈署目錄」，用以彙總 Django App 所有的「靜態檔案」。

```
cd ~/www/mysite/
vim mysite/settngs.py
```

🔖 mysite/settngs.py

```
STATIC_ROOT = BASE_DIR / 'static_collected'
```

2. 佈署 Django App 的「靜態檔案（static files）」。

匯集所有靜態檔案至「靜態檔佈署目錄」：
/home/alanjui/www/mysite/static_collected/

```
./manage.py collectstatic

cp static_collected/admin/img/search.svg media/

uwsgi --socket :8001 --wsgi-file test.py
```

3. 驗證能存取 static 靜態檔案

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/static/admin/img/search.svg
，確認「網頁」能見到「放大鏡圖示」。

4. 驗證能存取 media 靜態檔案

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/media/search.svg
，確認「網頁」能見到「放大鏡圖示」。

5. 驗證非存取 static 與 media 的 HTTP Request 會被送往 Django App

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/ ，確認「網頁」能見到
文字： Hello World 。

📺

```
(venv-3.9.1) alanjui@VB02-Ubuntu-2004:~/www/mysite$ uwsgi --socket :8001 --wsgi-file test.py
*** Starting uWSGI 2.0.19.1 (64bit) on [Fri Mar 26 22:46:53 2021] ***
compiled with version: 9.3.0 on 26 March 2021 12:58:00
os: Linux-5.8.0-48-generic #54~20.04.1-Ubuntu SMP Sat Mar 20 13:40:25 UTC 2021
nodename: VB02-Ubuntu-2004
machine: x86_64
clock source: unix
detected number of CPU cores: 2
current working directory: /home/alanjui/www/mysite
detected binary path: /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1/bin/uwsgi
!!! no internal routing support, rebuild with pcre support !!!
*** WARNING: you are running uWSGI without its master process manager ***
your processes number limit is 15511
your memory page size is 4096 bytes
detected max file descriptor number: 1024
lock engine: pthread robust mutexes
thunder lock: disabled (you can enable it with --thunder-lock)
uwsgi socket 0 bound to TCP address :8001 fd 3
Python version: 3.9.1 (default, Mar 26 2021, 13:50:53)  [GCC 9.3.0]
*** Python threads support is disabled. You can enable it with --enable-threads ***
Python main interpreter initialized at 0x564b57e0bac0
your server socket listen backlog is limited to 100 connections
your mercy for graceful operations on workers is 60 seconds
mapped 72920 bytes (71 KB) for 1 cores
*** Operational MODE: single process ***
WSGI app 0 (mountpoint='') ready in 0 seconds on interpreter 0x564b57e0bac0 pid: 75124 (default app)
*** uWSGI is running in multiple interpreter mode ***
spawned uWSGI worker 1 (and the only) (pid: 75124, cores: 1)
[pid: 75124|app: 0|req: 1/1] 192.168.66.21 () {42 vars in 787 bytes} [Fri Mar 26 22:47:21 2021] GET / => generated 11 bytes in 0 msecs (HTTP/1.1 200) 1 headers in 44 bytes (1 switches on core 0)
[pid: 75124|app: 0|req: 2/2] 192.168.66.21 () {42 vars in 751 bytes} [Fri Mar 26 22:47:21 2021] GET /favicon.ico => generated 11 bytes in 0 msecs (HTTP/1.1 200) 1 headers in 44 bytes (1 switches on core 0)
```

## 驗證 Unix Socket 能串連 Django App

驗證 Web Client 傳來之 HTTP Request ，Web Server（nginx 服務）能依
「Request」判別：該由 nginx 取出「靜態檔」，供 Web Client 下載；亦
或是透過 Unix Socket (File Socket) 交由 uwsgi 將 HTTP Request 轉交 Django App 處理。

通信路徑：
Web Client ⬅➡ Web Server ⬅➡ Web Socket (Socket File) ⬅➡ uWSGI ⬅➡ Django App

### 設定作業

1. 變更 mysite 虛擬網站設定，將 socket 改用 unix socket (file socket)

```
upstream django {
    # server unix:///path/to/your/mysite/mysite.sock; # for a file socket
    # server 127.0.0.1:8001;  # for a web port socket
    server unix:///run/uwsgi/mysite.sock;
}
```

2. 設定 /run/uwsgi 目錄及權限。

```
sudo mkdir /run/uwsgi
sudo chown $USER:www-data /run/uwsgi
```

### 驗證作業

1. 重啟 nginx 服務。

```
sudo systemctl restart nginx
```

2. 重啟 uWSGI 服務。

```
uwsgi --socket mysite.sock --wsgi-file test.py --chmod-socket=666
```

3. 驗證 Web Client 能連線到 Django App ，取得「網頁」內容。

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/ ，確認「網頁」能見到
文字： Hello World 。

【註】： 以上測試若發生：502 Bad Gateway 錯誤，可查 Log 紀錄，是否同下所示範例。
若是的話，則問題很可能是因權限不足所導致：
connect() to unix:///path/to/your/mysite/mysite.sock failed (13: Permission
denied) 。

📺

```
(venv-3.9.1) alanjui@VB02-Ubuntu-2004:~/www/mysite$ uwsgi --socket mysite.sock --wsgi-file test.py
*** Starting uWSGI 2.0.19.1 (64bit) on [Fri Mar 26 23:32:56 2021] ***
compiled with version: 9.3.0 on 26 March 2021 12:58:00
os: Linux-5.8.0-48-generic #54~20.04.1-Ubuntu SMP Sat Mar 20 13:40:25 UTC 2021
nodename: VB02-Ubuntu-2004
machine: x86_64
clock source: unix
detected number of CPU cores: 2
current working directory: /home/alanjui/www/mysite
detected binary path: /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1/bin/uwsgi
!!! no internal routing support, rebuild with pcre support !!!
*** WARNING: you are running uWSGI without its master process manager ***
your processes number limit is 15511
your memory page size is 4096 bytes
detected max file descriptor number: 1024
lock engine: pthread robust mutexes
thunder lock: disabled (you can enable it with --thunder-lock)
uwsgi socket 0 bound to UNIX address mysite.sock fd 3
Python version: 3.9.1 (default, Mar 26 2021, 13:50:53)  [GCC 9.3.0]
*** Python threads support is disabled. You can enable it with --enable-threads ***
Python main interpreter initialized at 0x562a24fceac0
your server socket listen backlog is limited to 100 connections
your mercy for graceful operations on workers is 60 seconds
mapped 72920 bytes (71 KB) for 1 cores
*** Operational MODE: single process ***
WSGI app 0 (mountpoint='') ready in 0 seconds on interpreter 0x562a24fceac0 pid: 75507 (default app)
*** uWSGI is running in multiple interpreter mode ***
spawned uWSGI worker 1 (and the only) (pid: 75507, cores: 1)
```

## 驗證 uWSGI 能與 Django App 整合運作

將上述「測試用 Django App」改用實際之 Django App 復行測試。

通信路徑：
Web Client ⬅➡ Web Server ⬅➡ Web Socket (Socket File) ⬅➡ uWSGI ⬅➡ Django App

### 設定 Django App 原始碼作業

修訂原始碼使之與 uwsgi 整合

1. 修訂 Django App 原始碼，使之能與 uwsgi 及 nginx 整合運作。

- 編輯 Django App 的設定檔

```
cd /home/alanjui/www/mysite
vim mysite/settings.py
```

- 設定 ALLOWED_HOSTS ，接收來自 host: mysite.ccc.tw.local 的 HTTP Request

🔖 mysite/settings.py

```
ALLOWED_HOSTS = [
    'mysite.ccc.tw.local',
    'localhost',
    '127.0.0.1',
]
```

- 設定 STATIC_ROOT ，令「靜態檔」集中匯入：專案目錄下的子目錄：static_collected

🔖 mysite/settings.py

```
STATIC_ROOT = BASE_DIR / 'static_collected'
```

【註】：目錄全路徑 /home/alanjui/www/mysite/static_collected/ 。

2. 佈署 Django App 的「靜態檔案（static files）」。

匯集所有靜態檔案至「靜態檔佈署目錄」：
/home/alanjui/www/mysite/static_collected/

```
./manage.py collectstatic
```

3. 佈署 Django App 的 Media 檔案

```
cp static_collected/admin/img/search.svg media/
```

### 建置 uWSGI 服務設定檔

1. 建置 uWSGI 服務設定檔： mysite_uwsgi.ini 。

```
cd /home/alanjui/www/mysite
vim mysite_uwsgi.ini
```

🔖 mysite_uwsgi.ini

```
# mysite_uwsgi.ini file
[uwsgi]
project = mysite
uid = alanjui
base = /home/%(uid)

# Django-related settings
# the base directory (full path)
#chdir           = /home/alanjui/www/mysite
chdir           = %(base)/www/%(project)
# Django's wsgi file
module          = mysite.wsgi
# the virtualenv (full path)
#home            = /home/alanjui/.pyenv/versions/venv-3.9.1
#home            = /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1
home            = %(chdir)/.venv

# process-related settings
# master
master          = true
# maximum number of worker processes
processes       = 10
# the socket (use the full path to be safe
# socket          = /home/alanjui/www/mysite/mysite.sock
socket          = /run/uwsgi/%(project).sock
# ... with appropriate permissions - may be needed
#chmod-socket    = 664
chmod-socket    = 666
# clear environment on exit
vacuum          = true
```

### 驗證作業

1. 啟動 uwsgi 服務。

```
uwsgi --ini mysite_uwsgi.ini
```

2. 驗證能存取 static 靜態檔案

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/static/admin/img/search.svg
，確認「網頁」能見到「放大鏡圖示」。

3. 驗證能存取 media 靜態檔案

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/media/search.svg
，確認「網頁」能見到「放大鏡圖示」。

4. 驗證非存取 static 與 media 的 HTTP Request 會被送往 Django App

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/ ，確認「網頁」能見到
如下圖之內容。

![](/assets/img/django/django-app-default-home.png)

📺

```
(venv-3.9.1) alanjui@VB02-Ubuntu-2004:~/www/mysite$ uwsgi --ini mysite_uwsgi.ini
[uWSGI] getting INI configuration from mysite_uwsgi.ini
*** Starting uWSGI 2.0.19.1 (64bit) on [Sat Mar 27 21:29:54 2021] ***
compiled with version: 9.3.0 on 26 March 2021 12:58:00
os: Linux-5.8.0-48-generic #54~20.04.1-Ubuntu SMP Sat Mar 20 13:40:25 UTC 2021
nodename: VB02-Ubuntu-2004
machine: x86_64
clock source: unix
detected number of CPU cores: 2
current working directory: /home/alanjui/www/mysite
detected binary path: /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1/bin/uwsgi
!!! no internal routing support, rebuild with pcre support !!!
chdir() to /home/alanjui/www/mysite
your processes number limit is 15511
your memory page size is 4096 bytes
detected max file descriptor number: 1024
lock engine: pthread robust mutexes
thunder lock: disabled (you can enable it with --thunder-lock)
uwsgi socket 0 bound to UNIX address /home/alanjui/www/mysite/mysite.sock fd 3
Python version: 3.9.1 (default, Mar 26 2021, 13:50:53)  [GCC 9.3.0]
PEP 405 virtualenv detected: /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1
Set PythonHome to /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1
*** Python threads support is disabled. You can enable it with --enable-threads ***
Python main interpreter initialized at 0x55a335b993b0
your server socket listen backlog is limited to 100 connections
your mercy for graceful operations on workers is 60 seconds
mapped 802120 bytes (783 KB) for 10 cores
*** Operational MODE: preforking ***
WSGI app 0 (mountpoint='') ready in 0 seconds on interpreter 0x55a335b993b0 pid: 85887 (default app)
*** uWSGI is running in multiple interpreter mode ***
spawned uWSGI master process (pid: 85887)
spawned uWSGI worker 1 (pid: 85930, cores: 1)
spawned uWSGI worker 2 (pid: 85931, cores: 1)
spawned uWSGI worker 3 (pid: 85932, cores: 1)
spawned uWSGI worker 4 (pid: 85933, cores: 1)
spawned uWSGI worker 5 (pid: 85934, cores: 1)
spawned uWSGI worker 6 (pid: 85935, cores: 1)
spawned uWSGI worker 7 (pid: 85936, cores: 1)
spawned uWSGI worker 8 (pid: 85937, cores: 1)
spawned uWSGI worker 9 (pid: 85938, cores: 1)
spawned uWSGI worker 10 (pid: 85939, cores: 1)
[pid: 85932|app: 0|req: 1/1] 192.168.66.21 () {44 vars in 818 bytes} [Sat Mar 27 13:32:07 2021] GET / => generated 16351 bytes in 17 msecs (HTTP/1.1 200) 5 headers in 153 bytes (1 switches on core 0)
^CSIGINT/SIGQUIT received...killing workers...
worker 1 buried after 1 seconds
worker 2 buried after 1 seconds
worker 3 buried after 1 seconds
worker 4 buried after 1 seconds
worker 5 buried after 1 seconds
worker 6 buried after 1 seconds
worker 7 buried after 1 seconds
worker 8 buried after 1 seconds
worker 9 buried after 1 seconds
worker 10 buried after 1 seconds
goodbye to uWSGI.
VACUUM: unix socket /home/alanjui/www/mysite/mysite.sock removed.
(venv-3.9.1) alanjui@VB02-Ubuntu-2004:~/www/mysite$
```

## 驗證作業系統預設 uwsgi 能串連 Django App

1. 停用 Python 虛擬環境

2. 切換目錄至「家目錄」。

```
cd
```

3. 使用作業系統預設 uwsgi 與 Django App 整合作業。

此處 uwsgi 安裝路徑： /usr/local/bin/uwsgi

```
uwsgi --ini [/Path/to/uwsgi_config.ini]
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ uwsgi --ini /home/alanjui/www/mysite/mysite_uwsgi.ini
[uWSGI] getting INI configuration from /home/alanjui/www/mysite/mysite_uwsgi.ini
*** Starting uWSGI 2.0.19.1 (64bit) on [Sun Mar 28 15:28:27 2021] ***
compiled with version: 9.3.0 on 28 March 2021 03:49:51
os: Linux-5.8.0-48-generic #54~20.04.1-Ubuntu SMP Sat Mar 20 13:40:25 UTC 2021
nodename: VB02-Ubuntu-2004
machine: x86_64
clock source: unix
detected number of CPU cores: 2
current working directory: /home/alanjui
detected binary path: /usr/local/bin/uwsgi
!!! no internal routing support, rebuild with pcre support !!!
chdir() to /home/alanjui/www/mysite
your processes number limit is 15511
your memory page size is 4096 bytes
detected max file descriptor number: 1024
lok engine: pthread robust mutexes
thunder lock: disabled (you can enable it with --thunder-lock)
uwsgi socket 0 bound to UNIX address /home/alanjui/www/mysite/mysite.sock fd 3
Python version: 3.8.5 (default, Jan 27 2021, 15:41:15)  [GCC 9.3.0]
PEP 405 virtualenv detected: /home/alanjui/www/mysite/.venv
Set PythonHome to /home/alanjui/www/mysite/.venv
*** Python threads support is disabled. You can enable it with --enable-threads ***
Python main interpreter initialized at 0x561392070640
your server socket listen backlog is limited to 100 connections
your mercy for graceful operations on workers is 60 seconds
mapped 802120 bytes (783 KB) for 10 cores
*** Operational MODE: preforking ***
WSGI app 0 (mountpoint='') ready in 0 seconds on interpreter 0x561392070640 pid: 101202 (default app)
*** uWSGI is running in multiple interpreter mode ***
spawned uWSGI master process (pid: 101202)
spawned uWSGI worker 1 (pid: 101204, cores: 1)
spawned uWSGI worker 2 (pid: 101205, cores: 1)
spawned uWSGI worker 3 (pid: 101206, cores: 1)
spawned uWSGI worker 4 (pid: 101207, cores: 1)
spawned uWSGI worker 5 (pid: 101208, cores: 1)
spawned uWSGI worker 6 (pid: 101209, cores: 1)
spawned uWSGI worker 7 (pid: 101210, cores: 1)
spawned uWSGI worker 8 (pid: 101211, cores: 1)
spawned uWSGI worker 9 (pid: 101212, cores: 1)
spawned uWSGI worker 10 (pid: 101213, cores: 1)
[pid: 101204|app: 0|req: 1/1] 192.168.66.21 () {42 vars in 787 bytes} [Sun Mar 28 07:28:54 2021] GET / => generated 16351 bytes in 17 msecs (HTTP/1.1 200) 5 headers in 153 bytes (1 switches on core 0)
Not Found: /favicon.ico
[pid: 101205|app: 0|req: 1/2] 192.168.66.21 () {42 vars in 751 bytes} [Sun Mar 28 07:28:54 2021] GET /favicon.ico => generated 1982 bytes in 20 msecs (HTTP/1.1 404) 5 headers in 159 bytes (1 switches on core 0)
^CSIGINT/SIGQUIT received...killing workers...
worker 1 buried after 1 seconds
worker 2 buried after 1 seconds
worker 3 buried after 1 seconds
worker 4 buried after 1 seconds
worker 5 buried after 1 seconds
worker 6 buried after 1 seconds
worker 7 buried after 1 seconds
worker 8 buried after 1 seconds
worker 9 buried after 1 seconds
worker 10 buried after 1 seconds
goodbye to uWSGI.
VACUUM: unix socket /home/alanjui/www/mysite/mysite.sock removed.
alanjui@VB02-Ubuntu-2004:~$
```

## 驗證 Emperor Mode 能串連 Django App

以 Emperor Mode ，執行 uwsgi 。測試此運作模式，能與 Django App 整合運作。

### 建置作業

1. 建置 vassals 目錄

```
sudo mkdir -p /etc/uwsgi/vassals
```

2. 建立 uwsgi 設定檔的連結，放至目錄路徑中： /etc/uwsgi/vassals/

```
sudo ln -s /home/alanjui/www/mysite/mysite_uwsgi.ini /etc/uwsgi/vassals/
```

```
sudo mkdir -p /etc/uwsgi/u
```

3. 要求 uwsgi 服務以 emperor mode 作業

```
uwsgi --emperor /etc/uwsgi/vassals --uid www-data --gid www-data
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ uwsgi --emperor /etc/uwsgi/vassals --uid www-data --gid www-data
*** Starting uWSGI 2.0.19.1 (64bit) on [Sun Mar 28 20:44:21 2021] ***
compiled with version: 9.3.0 on 28 March 2021 03:49:51
os: Linux-5.8.0-48-generic #54~20.04.1-Ubuntu SMP Sat Mar 20 13:40:25 UTC 2021
nodename: VB02-Ubuntu-2004
machine: x86_64
clock source: unix
detected number of CPU cores: 2
current working directory: /home/alanjui
detected binary path: /usr/local/bin/uwsgi
!!! no internal routing support, rebuild with pcre support !!!
*** WARNING: you are running uWSGI without its master process manager ***
your processes number limit is 15511
your memory page size is 4096 bytes
detected max file descriptor number: 1024
*** starting uWSGI Emperor ***
*** has_emperor mode detected (fd: 6) ***
[uWSGI] getting INI configuration from mysite_uwsgi.ini
*** Starting uWSGI 2.0.19.1 (64bit) on [Sun Mar 28 20:44:21 2021] ***
compiled with version: 9.3.0 on 28 March 2021 03:49:51
os: Linux-5.8.0-48-generic #54~20.04.1-Ubuntu SMP Sat Mar 20 13:40:25 UTC 2021
nodename: VB02-Ubuntu-2004
machine: x86_64
clock source: unix
detected number of CPU cores: 2
current working directory: /etc/uwsgi/vassals
detected binary path: /usr/local/bin/uwsgi
!!! no internal routing support, rebuild with pcre support !!!
chdir() to /home/alanjui/www/mysite
your processes number limit is 15511
your memory page size is 4096 bytes
detected max file descriptor number: 1024
lock engine: pthread robust mutexes
thunder lock: disabled (you can enable it with --thunder-lock)
uwsgi socket 0 bound to UNIX address /home/alanjui/www/mysite/mysite.sock fd 3
Python version: 3.8.5 (default, Jan 27 2021, 15:41:15)  [GCC 9.3.0]
PEP 405 virtualenv detected: /home/alanjui/www/mysite/.venv
Set PythonHome to /home/alanjui/www/mysite/.venv
*** Python threads support is disabled. You can enable it with --enable-threads ***
Python main interpreter initialized at 0x55e54bc1a560
your server socket listen backlog is limited to 100 connections
your mercy for graceful operations on workers is 60 seconds
mapped 802120 bytes (783 KB) for 10 cores
*** Operational MODE: preforking ***
WSGI app 0 (mountpoint='') ready in 0 seconds on interpreter 0x55e54bc1a560 pid: 101572 (default app)
*** uWSGI is running in multiple interpreter mode ***
spawned uWSGI master process (pid: 101572)
Sun Mar 28 20:44:21 2021 - [emperor] vassal mysite_uwsgi.ini has been spawned
spawned uWSGI worker 1 (pid: 101575, cores: 1)
spawned uWSGI worker 2 (pid: 101576, cores: 1)
Sun Mar 28 20:44:21 2021 - [emperor] vassal mysite_uwsgi.ini is ready to accept requests
spawned uWSGI worker 3 (pid: 101577, cores: 1)
spawned uWSGI worker 4 (pid: 101578, cores: 1)
spawned uWSGI worker 5 (pid: 101579, cores: 1)
spawned uWSGI worker 6 (pid: 101580, cores: 1)
spawned uWSGI worker 7 (pid: 101581, cores: 1)
spawned uWSGI worker 8 (pid: 101582, cores: 1)
spawned uWSGI worker 9 (pid: 101583, cores: 1)
spawned uWSGI worker 10 (pid: 101584, cores: 1)
[pid: 101582|app: 0|req: 1/1] 192.168.66.21 () {44 vars in 818 bytes} [Sun Mar 28 12:44:55 2021] GET / => generated 16351 bytes in 16 msecs (HTTP/1.1 200) 5 headers in 153 bytes (1 switches on core 0)
announcing my loyalty to the Emperor...
Sun Mar 28 20:44:55 2021 - [emperor] vassal mysite_uwsgi.ini is now loyal

^C[emperor] *** RAGNAROK EVOKED ***
Sun Mar 28 20:45:48 2021 - [emperor] stop the uwsgi instance mysite_uwsgi.ini
SIGINT/SIGQUIT received...killing workers...
Sun Mar 28 12:45:48 2021 - received message 0 from emperor
worker 1 buried after 1 seconds
worker 2 buried after 1 seconds
worker 3 buried after 1 seconds
worker 4 buried after 1 seconds
worker 5 buried after 1 seconds
worker 6 buried after 1 seconds
worker 7 buried after 1 seconds
worker 8 buried after 1 seconds
worker 9 buried after 1 seconds
worker 10 buried after 1 seconds
goodbye to uWSGI.
VACUUM: unix socket /home/alanjui/www/mysite/mysite.sock removed.
Sun Mar 28 20:45:50 2021 - [emperor] removed uwsgi instance mysite_uwsgi.ini
Sun Mar 28 20:45:51 2021 - The Emperor is buried.
alanjui@VB02-Ubuntu-2004:~$
```

### 驗證作業

1. 驗證能存取 static 靜態檔案

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/static/admin/img/search.svg
，確認「網頁」能見到「對放大鏡圖示」。

2. 驗證能存取 media 靜態檔案

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/media/search.svg
，確認「網頁」能見到「放大鏡圖示」。

3. 驗證非存取 static 與 media 的 HTTP Request 會被送往 Django App

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local/ ，確認「網頁」能見到
如下圖之內容。

![](/assets/img/django/django-app-default-home.png)

## 啟用 uwsgi 服務

設定 uwsgi 以「systemd 服務」模式運作，能於開機後自動啟動，以 Empermor Mode
模式運作。

1. 建立 systemd 服務設定檔。

```
sudo su
vim /etc/systemd/system/uwsgi.service
```

🔖 uwsgi.service

```
[Unit]
Description=uWSGI Empermor Mode Service

[Service]
ExecStartPre=/bin/bash -c "mkdir -p /run/uwsgi; chown alanjui:www-data /run/uwsgi"
ExecStart=/usr/local/bin/uwsgi --emperor /etc/uwsgi/apps-enabled --uid alanjui --gid www-data
Restart=always
Killsignal=SIGQUIT
Type=notify
NotifyAccess=all

[Install]
WantedBy=multi-user.target
```

2. 檢查有無其它 uwsgi 服務啟用，若有，則先予停用。

```
sudo systemctl status uwsgi

sudo sytemctl stop uwsgi
```

3. 啟用服務

```
sudo systemctl enable uwsgi

sudo systemctl start uwsgi
```

📺

```
alanjui@VB02-Ubuntu-2004:/etc/uwsgi/apps-enabled$ sudo systemctl enable uwsgi
Synchronizing state of uwsgi.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable uwsgi
Created symlink /etc/systemd/system/multi-user.target.wants/uwsgi.service → /etc/systemd/system/uwsgi.service.

alanjui@VB02-Ubuntu-2004:~$ sudo systemctl start uwsgi

alanjui@VB02-Ubuntu-2004:~$ sudo systemctl status uwsgi
● uwsgi.service - uWSGI Empermor Mode Service
     Loaded: loaded (/etc/systemd/system/uwsgi.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2021-03-30 11:36:42 CST; 10s ago
    Process: 1674 ExecStartPre=/bin/bash -c mkdir -p /run/uwsgi; chown alanjui:www-data /run/uwsgi (code=exited, status=0/SUCCESS)
   Main PID: 1677 (uwsgi)
     Status: "The Emperor is governing 1 vassals"
      Tasks: 12 (limit: 4653)
     Memory: 47.3M
     CGroup: /system.slice/uwsgi.service
             ├─1677 /usr/local/bin/uwsgi --emperor /etc/uwsgi/apps-enabled --uid alanjui --gid www-data
             ├─1678 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini
             ├─1680 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini
             ├─1681 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini
             ├─1682 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini
             ├─1683 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini
             ├─1684 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini
             ├─1685 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini
             ├─1686 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini
             ├─1687 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini
             ├─1688 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini
             └─1689 /usr/local/bin/uwsgi --ini mysite_uwsgi.ini

 3月 30 11:36:42 VB02-Ubuntu-2004 uwsgi[1678]: spawned uWSGI worker 2 (pid: 1681, cores: 1)
 3月 30 11:36:42 VB02-Ubuntu-2004 uwsgi[1678]: spawned uWSGI worker 3 (pid: 1682, cores: 1)
 3月 30 11:36:42 VB02-Ubuntu-2004 uwsgi[1678]: spawned uWSGI worker 4 (pid: 1683, cores: 1)
 3月 30 11:36:42 VB02-Ubuntu-2004 uwsgi[1678]: spawned uWSGI worker 5 (pid: 1684, cores: 1)
 3月 30 11:36:42 VB02-Ubuntu-2004 uwsgi[1678]: spawned uWSGI worker 6 (pid: 1685, cores: 1)
 3月 30 11:36:42 VB02-Ubuntu-2004 uwsgi[1678]: spawned uWSGI worker 7 (pid: 1686, cores: 1)
 3月 30 11:36:42 VB02-Ubuntu-2004 uwsgi[1678]: spawned uWSGI worker 8 (pid: 1687, cores: 1)
 3月 30 11:36:42 VB02-Ubuntu-2004 uwsgi[1677]: Tue Mar 30 11:36:42 2021 - [emperor] vassal mysite_uwsgi.ini is ready to accept requests
 3月 30 11:36:42 VB02-Ubuntu-2004 uwsgi[1678]: spawned uWSGI worker 9 (pid: 1688, cores: 1)
 3月 30 11:36:42 VB02-Ubuntu-2004 uwsgi[1678]: spawned uWSGI worker 10 (pid: 1689, cores: 1)
```

## 問題診斷與狀況排除

### 瀏覽異常 Log

使用 systemctl 指令，欲啟動 uwsgi 服務。若結果失敗，可用以下指令瀏覽 Log ，診斷
問題可能導因。

```
journalctl -xe
```

📺

```
root@VB02-Ubuntu-2004:/home/alanjui# systemctl start emperor.uwsgi.service
Job for emperor.uwsgi.service failed because the control process exited with error code.
See "systemctl status emperor.uwsgi.service" and "journalctl -xe" for details.

root@VB02-Ubuntu-2004:/home/alanjui# journalctl -xe
--
-- An ExecStart= process belonging to unit emperor.uwsgi.service has exited.
--
-- The process' exit code is 'exited' and its exit status is 1.
 3月 29 22:12:27 VB02-Ubuntu-2004 systemd[1]: emperor.uwsgi.service: Failed with result 'exit-cod>
-- Subject: Unit failed
-- Defined-By: systemd
-- Support: http://www.ubuntu.com/support
--
-- The unit emperor.uwsgi.service has entered the 'failed' state with result 'exit-code'.
 3月 29 22:12:27 VB02-Ubuntu-2004 systemd[1]: Failed to start uWSGI Emperor.
-- Subject: 單位 emperor.uwsgi.service 已失敗
-- Defined-By: systemd
-- Support: http://www.ubuntu.com/support
--
-- 單位 emperor.uwsgi.service 已失敗。
--
-- 結果為 failed。
 3月 29 22:12:28 VB02-Ubuntu-2004 systemd[1]: emperor.uwsgi.service: Scheduled restart job, resta>
-- Subject: Automatic restarting of a unit has been scheduled
-- Defined-By: systemd
-- Support: http://www.ubuntu.com/support
--
-- Automatic restarting of the unit emperor.uwsgi.service has been scheduled, as the result for
-- the configured Restart= setting for the unit.
 3月 29 22:12:28 VB02-Ubuntu-2004 systemd[1]: Stopped uWSGI Emperor.
-- Subject: 單位 emperor.uwsgi.service 已關閉結束
-- Defined-By: systemd
-- Support: http://www.ubuntu.com/support
--
-- 單位 emperor.uwsgi.service 已關閉結束。
 3月 29 22:12:28 VB02-Ubuntu-2004 systemd[1]: emperor.uwsgi.service: Start request repeated too q>
 3月 29 22:12:28 VB02-Ubuntu-2004 systemd[1]: emperor.uwsgi.service: Failed with result 'exit-cod>
-- Subject: Unit failed
-- Defined-By: systemd
-- Support: http://www.ubuntu.com/support
--
-- The unit emperor.uwsgi.service has entered the 'failed' state with result 'exit-code'.
 3月 29 22:12:28 VB02-Ubuntu-2004 systemd[1]: Failed to start uWSGI Emperor.
-- Subject: 單位 emperor.uwsgi.service 已失敗
-- Defined-By: systemd
-- Support: http://www.ubuntu.com/support
--
-- 單位 emperor.uwsgi.service 已失敗。
--
-- 結果為 failed。
lines 2374-2419/2419 (END)
```

## 常用參考

### 重啟 systemd 服務

當 systemd 的「服務設定檔」完成變更後，欲重啟服務之前，需先執行 daemon-reload 指令。

```
sudo systemctl daemon-reload
sudo systemctl restart [Systemd_Service_Name]
```

## 參考資料

### 官網指引

- [Setting up Django and your web server with uWSGI and nginx](https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html)
- [systemd](https://uwsgi-docs.readthedocs.io/en/latest/Systemd.html)

### 建置 uwsgi 服務

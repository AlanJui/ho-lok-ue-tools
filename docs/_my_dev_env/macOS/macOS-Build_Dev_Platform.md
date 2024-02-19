---
sidebar: auto
---

# macOS 建置 Django 開發作業環境指引

## 摘要

在 macOS 作業系統，建置 Django App 之「開發作業平台」。

- 安裝開發作業基礎工具
- 安裝 Node.js 作業環境
- 安裝 Python 作業環境
- 安裝編輯器
- 安裝 nginx 服務
- 安裝 Django App 原始碼
- 安裝 uWSGI 服務

## 安裝開發作業基礎工具

1. 安裝 git 版本管理套件。

```
brew install git
```

2. 安裝檔案下載工具。

```
brew install curl
```

## 安裝 Node.js 作業環境

### 安裝 node 與 npm 套件

1. 安裝 n 套件管理器

```
cd
curl -L https://git.io/n-install | bash
```

或

```
brew install n
```

2. 在 Bash Shell 設定檔，設定 PATH 環境變數。

🔖 ~/.bashrc

```
#export N_PREFIX="$HOME/n"; [[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin"  # Added by n-install (see http://git.io/n-install-repo).
export N_PREFIX="$HOME/n";
export PATH="$N_PREFIX/bin:$PATH"
```

3. 重啟 Bash Shell 。

```
source ~/.bashrc
```

4. 透過 n 套件管理器，安裝 node 與 npm 套件。

- 最新版

```
n latest
```

- 最近 LTS 版

```
n lts
```

### 安裝套件管理器：yarn

npm 本身即是 Node 之「套件管理器」。何以要再安裝 yarn ，主要原因是有些套件的安裝
偏好使用 yarn 所致。

1. 安裝

```
sudo npm i -g yarn
```

2. 驗證

yarn 安裝位置： /usr/local/bin/yarn

```
which yarn
```

## 安裝 Python 作業環境

### 安裝版本管理器

安裝 Python 版本管理器：pyenv。

1. 執行安裝。

```
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
git clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv
```

2. 設定 Shell 環境，執行 pyenv 所需「環境變數」。

```
vim ~/.bashrc
```

🔖 ~/.bashrc:

```
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
  eval "$(pyenv virtualenv-init -)"
fi
```

3. 重啟 Shell ，啟用 pyenv 。

```
source ~/.bashrc
```

4. 查驗 pyenv 安裝路徑：

```
which pyenv
```

5. 驗證 pyenv 已能運作。

```
pyenv versions
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ which pyenv
/home/alanjui/.pyenv/bin/pyenv

alanjui@VB02-Ubuntu-2004:~$ pyenv versions
* system (set by /home/alanjui/.pyenv/version)
```

### 安裝特定版本直譯器

透過 pyenv 指令，安裝指定版本之 Python 直譯器。

```
pyenv install [Version_No]
```

### 設定預設 Python

將某版本 Python 直譯器，設定成作業系統的「預設 Python 直譯器」。

1. 使用 pyenv global 指令，指派作業系統層級之「預設 Python」。

```
pyenv global [Version_No]
```

📺

```
pyenv global 3.9.1
```

2. 使用 pyenv versions 指令，查詢「預設 Python」之版本編號。

```
pyenv versions
```

3. 執行下列二指令，用以驗證「Python 直譯器所月嵬之版本編號」與「預設 Python」
   所見「版本編號」一致。

```
pyenv versions
python
```

4. 執行下列指令，用以驗證 Python [Version_No] 之一致性

```
pyenv --version
~/.pyenv/shims/python --version
~/.pyenv/versions/[Version_No]/bin/python --version
```

## 安裝 Vim 編輯器

安裝 Vim 編輯器。

### 自原始碼安裝軟體

1. 下載原始碼。

```
cd ~/build
git clone https://github.com/vim/vim.git
```

2. 編輯原始碼與安裝執行檔。

```
cd vim
./configure
sudo apt install ncurses-dev
make
sudo make install
```

### 設定作業環境

1. 安裝 vim 作業設定檔

```
git clone https://github.com/AlanJui/vim8.git ~/.vim
```

2. 安裝 Vim Plugins。

啟動 vim ，以便 vim 自動安裝 vim plugins 。

3. 安裝 vim plugins 相依套件。

- 安裝作業系統層級套件

```
sudo apt install vifm
sudo apt install fzf
sudo apt install ripgrep
```

- 安裝 npm 套件

```
npm i -g bash-language-server
```

## 安裝 nginx 服務

安裝 nginx 作為 HTTP Server。

### 安裝 nginx 套件

1. 安裝 nginx 套件。

```
brew install nginx
```

2. 啟用 nginx 服務。

```
brew servies start nginx
```

3. 驗證 nginx 服務已啟動。

- 驗證服務已啟用，且能隨作業系統開機自動啟動

```
brew servies list
```

4. 驗證 nginx 的 HTTP Server 已能正常運作

使用 Web 瀏覽器，瀏覽如下網址，若能正常閱讀「網頁」內容，則表 HTTP Server 已能
正常運作。

```
http://[IP_Address]
```

![](/assets/img/nginx/nginx_browse_test.png)

### 建置 nginx 虛擬網站

1. 建置「網站目錄」。

```
sudo su
mkdir /var/www/app.ccc.tw.local && cd $_
echo "app.ccc.tw.local Web Site" > index.html
```

2. 套用 defaut 虛擬網站設定檔，建置 Django App 虛擬網站。

```
cd /var/www/sites-available
cp default app.ccc.tw.local
vim  app.ccc.tw.local
```

🔖 app.ccc.tw.local:

```
server {
    listen 80;

    server_name app.ccc.tw.local;

    root /var/www/app.ccc.tw.local;
    index index.html;

    location / {
    ¦   try_files $uri $uri/ =404;
    }
}
```

3. 停用 Default 虛擬網站

```
cd  ./sites-enabled
unlink default
```

4. 啟用 Django App 虛擬網站

```
ln -nfs ../sites-available/app.ccc.tw.local
```

5. 檢驗目前的設定正確無誤。

```
nginx -t
```

6. 重啟 nginx 服務。

```
systemctl restart nginx
systemclt status nginx
```

7. 驗證 Django App 虛擬網站的 HTTP 服務已能正常運作。

使用 Web 瀏覽器，瀏覽網址： http://app.ccc.tw.local/ 。若一切正常，應能於瀏覽器
看到如下「內容」之網頁。

```
app.ccc.tw.local Web Site
```

[《以 Nginx 建置 Django Web Server 指引》](./Ubuntu-Install_Nginx_as_Django_Web_Server.md)

## 安裝 uWSGI 服務

安裝 uWSGI 服務作為 WSGI (Web Server Gateway Interface) 。

📚 [《在 Ubuntu 建置 uWSGI 作業環境》](./Ubuntu-uWSGI.md)

### 安裝作業

1. 安裝 uWSGI 套件。

```
sudo -H pip3 install uwsgi
```

或

```
sudo pip3 install https://projects.unbit.it/downloads/uwsgi-lts.tar.gz
```

📺

```
alanjui@VB02-Ubuntu-2004:~/www/mysite$ pip3 list
Package                Version
---------------------- --------------------
apturl                 0.5.2
asgiref                3.3.1
blinker                1.4
Brlapi                 0.7.0
certifi                2019.11.28
chardet                3.0.4
Click                  7.0
colorama               0.4.3
command-not-found      0.3
cryptography           2.8
cupshelpers            1.0
dbus-python            1.2.16
defer                  1.0.6
distro                 1.4.0
distro-info            0.23ubuntu1
Django                 3.1.7
....
```

```
alanjui@VB02-Ubuntu-2004:~/www/mysite$ which uwsgi
/usr/bin/uwsgi
alanjui@VB02-Ubuntu-2004:~/www/mysite$ ll /usr/bin/uwsgi
lrwxrwxrwx 1 root root 23  3月 28 14:10 /usr/bin/uwsgi -> /etc/alternatives/uwsgi*
alanjui@VB02-Ubuntu-2004:~/www/mysite$ ll /etc/alternatives/uwsgi
lrwxrwxrwx 1 root root 19  3月 28 14:10 /etc/alternatives/uwsgi -> /usr/bin/uwsgi-core*
alanjui@VB02-Ubuntu-2004:~/www/mysite$ ll /usr/bin/uwsgi-core
-rwxr-xr-x 1 root root 935112  4月 11  2020 /usr/bin/uwsgi-core*
```

### 驗證作業

驗證 Web Client 傳來之 HTTP Request ，能被 uwsgi 服務接收，並轉傳至 Django App 。

通信路徑：
Web Client ⬅➡ uWSGI ⬅➡ Django App
Web Client ⬅➡ Web Server ⬅➡ Web Socket (Socket File) ⬅➡ uWSGI ⬅➡ Django App

1. 建置測試用 Django App

```
# 建置專案目錄
cd
mkdir -p www/mysite && cd $_

# 升級 pip3 套件管理器至最新版
python3 -m pip3 install --upgrade pip3

# 建置及啟用虛擬環境
python3 -m venv .venv
source .venv/bin/activate

# 安裝 Django App 所需套件
pip3 install django

django-admin
```

2. 修訂 Django App 原始碼，使之能與 uwsgi 及 nginx 整合運作。

- 下載 Django App 原始檔

```
cd /var/www
sudo git clone alanjui@192.168.66.21:"~/workspace/django/test-100" mysite.ccc.tw.local
sudo git config --global user.email "alanjui.1960@gmail.com"
sudo git config --global user.name "Alan Jui"
```

```
sudo chown -R www-data:www-data mysite.ccc.tw.local
```

- 編輯 Django App 的設定檔

```
cd /home/alanjui/www/mysite
vim mysite/settings.py
```

- 設定 ALLOWED_HOSTS ，接收來自 host: mysite.ccc.tw.local 的 HTTP Request

🔖 mysite/settings.py

```
allowed_hosts = [
    'mysite.ccc.tw.local',
    'localhost',
    '127.0.0.1',
]
```

- 設定 static_root ，令「靜態檔」集中匯入：專案目錄下的子目錄：static_collected

🔖 mysite/settings.py

```
static_root = base_dir / 'static_collected'
```

【註】：目錄全路徑 /home/alanjui/www/mysite/static_collected/ 。

3. 佈署 Django App 的「靜態檔案（static files）」。

匯集所有靜態檔案至「靜態檔佈署目錄」：
/home/alanjui/www/mysite/static_collected/

```
./manage.py collectstatic
```

4. 佈署 Django App 的 Media 檔案

```
mkdir media
cp static_collected/admin/img/search.svg media/
```

5. 建置 Nginx 虛擬網站。

- 建置虛擬網站設定檔

```
cd /var/www
sudo ln -nfs config/mysite.ccc.tw.local.conf /etc/nginx/sites-enabled
```

🔖 mysite.ccc.tw.local

```
server {
    listen 80;

    server_name mysite.ccc.tw.local;

    root /var/www/mysite.ccc.tw.local;
    index index.html;

    location / {
    ¦   try_files $uri $uri/ =404;
    }
}
```

- 停用 Default 虛擬網站

```
cd  ./sites-enabled
unlink default
```

- 啟用 Django App 虛擬網站

```
ln -nfs ../sites-available/mysite.ccc.tw.local
```

- 驗證設定語法正確土

```
nginx -t
```

- 重啟 Nginx 服務

```
systemctl restart nginx
systemctl status nginx
```

6. 建置 uWSGI 服務。

建置 uWSGI 服務設定檔： mysite_uwsgi.ini 。

```
cd /home/alanjui/www/mysite
vim mysite_uwsgi.ini
```

🔖 mysite_uwsgi.ini

```
# mysite_uwsgi.ini file
[uwsgi]

# Django-related settings
# the base directory (full path)
chdir           = /home/alanjui/www/mysite
# Django's wsgi file
module          = mysite.wsgi
# the virtualenv (full path)
home            = /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1

# process-related settings
# master
master          = true
# maximum number of worker processes
processes       = 10
# the socket (use the full path to be safe
socket          = /home/alanjui/www/mysite/mysite.sock
# ... with appropriate permissions - may be needed
chmod-socket    = 666
# clear environment on exit
vacuum          = true
```

7. 啟動 uwsgi 服務

以 Emperor Mode 啟用 uWSGI 服務。

- 建置 Emperor Mode 服務用 vassals 目錄

```
sudo mkdir -p /etc/uwsgi/vassals
```

- 啟用服務設定

建立 uwsgi 設定檔的連結，放至目錄路徑中： /etc/uwsgi/vassals/

```
sudo ln -s /home/alanjui/www/mysite/mysite_uwsgi.ini /etc/uwsgi/vassals/
```

- 以 Emper Mode 啟用 uwsgi 服務

```
uwsgi --emperor /etc/uwsgi/vassals --uid www-data --gid www-data
```

8. 驗證能存取 static 靜態檔案

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local:8000/static/admin/img/search.svg
，確認「網頁」能見到「放大鏡圖示」。

9. 驗證能存取 media 靜態檔案

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local:8000/media/search.svg
，確認「網頁」能見到「放大鏡圖示」。

10. 驗證非存取 static 與 media 的 HTTP Request 會被送往 Django App

在 Web 瀏覽器，瀏覽網址： http://mysite.ccc.tw.local:8000/ ，確認「網頁」能見到
如下圖之內容。

![](/assets/img/django/django-app-default-home.png)

📺

```
alanjui@VB02-Ubuntu-2004:~$ uwsgi --emperor /etc/uwsgi/vassals --uid www-data --gid www-data
*** Starting uWSGI 2.0.19.1 (64bit) on [Mon Mar 29 20:30:47 2021] ***
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
*** Starting uWSGI 2.0.19.1 (64bit) on [Mon Mar 29 20:30:47 2021] ***
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
Python main interpreter initialized at 0x55fd299c7560
your server socket listen backlog is limited to 100 connections
your mercy for graceful operations on workers is 60 seconds
mapped 802120 bytes (783 KB) for 10 cores
*** Operational MODE: preforking ***
WSGI app 0 (mountpoint='') ready in 0 seconds on interpreter 0x55fd299c7560 pid: 102642 (default app)
*** uWSGI is running in multiple interpreter mode ***
spawned uWSGI master process (pid: 102642)
Mon Mar 29 20:30:47 2021 - [emperor] vassal mysite_uwsgi.ini has been spawned
spawned uWSGI worker 1 (pid: 102644, cores: 1)
Mon Mar 29 20:30:47 2021 - [emperor] vassal mysite_uwsgi.ini is ready to accept requests
spawned uWSGI worker 2 (pid: 102645, cores: 1)
spawned uWSGI worker 3 (pid: 102646, cores: 1)
spawned uWSGI worker 4 (pid: 102647, cores: 1)
spawned uWSGI worker 5 (pid: 102648, cores: 1)
spawned uWSGI worker 6 (pid: 102649, cores: 1)
spawned uWSGI worker 7 (pid: 102650, cores: 1)
spawned uWSGI worker 8 (pid: 102651, cores: 1)
spawned uWSGI worker 9 (pid: 102652, cores: 1)
spawned uWSGI worker 10 (pid: 102653, cores: 1)
[pid: 102652|app: 0|req: 1/1] 192.168.66.21 () {44 vars in 811 bytes} [Mon Mar 29 12:31:21 2021] GET / => generated 16351 bytes in 16 msecs (HTTP/1.1 200) 5 headers in 153 bytes (1 switches on core 0)
announcing my loyalty to the Emperor...
Mon Mar 29 20:31:21 2021 - [emperor] vassal mysite_uwsgi.ini is now loyal
^C[emperor] *** RAGNAROK EVOKED ***
Mon Mar 29 20:31:57 2021 - [emperor] stop the uwsgi instance mysite_uwsgi.ini
SIGINT/SIGQUIT received...killing workers...
Mon Mar 29 12:31:57 2021 - received message 0 from emperor
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
Mon Mar 29 20:31:59 2021 - [emperor] removed uwsgi instance mysite_uwsgi.ini
Mon Mar 29 20:32:00 2021 - The Emperor is buried.
alanjui@VB02-Ubuntu-2004:~$
```

## 問題診斷與狀況排除

### 解除作業系統預設之 vim

如下方式安裝之 VIM 套件，無法安裝「最新版」。

```
sudo apt install vim
```

若欲安裝最新版之 VIM ，可使用 GitHub 之原始碼建置。已安裝之 VIM ，可依以下方法，
解除原先安裝及清除設定。

```
sudo apt remove vim --purge
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ sudo apt remove vim --purge
正在讀取套件清單... 完成
正在重建相依關係
正在讀取狀態資料... 完成
以下套件為自動安裝，並且已經無用：
  vim-runtime
使用 'sudo apt autoremove' 將之移除。
下列套件將會被【移除】：
  vim*
升級 0 個，新安裝 0 個，移除 1 個，有 0 個未被升級。
此操作完成之後，會空出 3,111 kB 的磁碟空間。
是否繼續進行 [Y/n]？ [Y/n] y
（讀取資料庫 ... 目前共安裝了 171827 個檔案和目錄。）
正在移除 vim (2:8.1.2269-1ubuntu5)……
update-alternatives: 在自動模式下以 /usr/bin/vim.tiny 來提供 /usr/bin/vi (vi)
update-alternatives: 在自動模式下以 /usr/bin/vim.tiny 來提供 /usr/bin/view (view)
update-alternatives: 在自動模式下以 /usr/bin/vim.tiny 來提供 /usr/bin/ex (ex)
update-alternatives: 在自動模式下以 /usr/bin/vim.tiny 來提供 /usr/bin/rview (rview)
（讀取資料庫 ... 目前共安裝了 171818 個檔案和目錄。）
正在清除 vim (2:8.1.2269-1ubuntu5) 的設定檔……
```

## 參考資料

### 多重 Python 版本建置虛擬環境

- [Creating virtual environments with Pyenv](https://akrabat.com/creating-virtual-environments-with-pyenv/)

- [Python Environment Setup](https://gist.github.com/wronk/a902185f5f8ed018263d828e1027009b)

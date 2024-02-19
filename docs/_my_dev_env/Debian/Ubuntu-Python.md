---
sidebar: auto
---

# 在 Ubuntu 建置 Python 作業環境

## 摘要

如何在 Ubuntu 作業系統，建置 Python 3 作業環境。

- 使用作業系統預設 Pyton3
- 建置 Python3 虛擬環境
- 安裝 Python 版本管理器
- 安裝特定版本 Python 直譯器
- 設定預設 Python 直譯器

## 使用作業系統預設 Python3

### 使用說明

Ubuntu 20.04 作業系統，預設 Python 為 3.8.5 。此預設 python3 之「安裝目錄」
路徑，如下所示：

```
alanjui@VB02-Ubuntu-2004:~$ which python3
/usr/bin/python3

alanjui@VB02-Ubuntu-2004:~$ python3 --version
Python 3.8.5
```

### 配合 pip3 安裝作業應有套件

```
sudo apt install -y build-essential libssl-dev libffi-dev python3-dev
```

### 安裝預設 Python 套件管理器 pip3

安裝作業系統預設 Python 套件管理器：pip3 。

```
sudo apt install -y python3-pip
sudo -H pip3 install --upgrade pip3
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ which pip3
/usr/bin/pip3

alanjui@VB02-Ubuntu-2004:~$ which pip
alanjui@VB02-Ubuntu-2004:~$
```

### 安裝 Python 套件

安裝 Python 套件，需使用 pip3 而非 pip 。

```
sudo pip3 install [package_name]
```

📚 使用 sudo pip3 安裝 Python 套件時，預設安裝路徑：

- 執行檔： /usr/local/bin/[package_name]

- Python 套件： /usr/local/lib/python3.8/dist-packages/{package_name}/

📺

```
alanjui@VB02-Ubuntu-2004:~/www/mysite$ sudo pip3 install uwsgi
Collecting uwsgi
  Downloading uWSGI-2.0.19.1.tar.gz (803 kB)
     |████████████████████████████████| 803 kB 1.7 MB/s
Building wheels for collected packages: uwsgi
  Building wheel for uwsgi (setup.py) ... done
  Created wheel for uwsgi: filename=uWSGI-2.0.19.1-cp38-cp38-linux_x86_64.whl size=554485 sha256=c7976dee143a9303b5d20131bc254ef117dca9c29fd1229d9a1806c90a377862
  Stored in directory: /root/.cache/pip/wheels/87/01/0f/2fc9c74a1ae010de7d8b17d90f6b39595cbb8ac5169345fcb8
Successfully built uwsgi
Installing collected packages: uwsgi
Successfully installed uwsgi-2.0.19.1
alanjui@VB02-Ubuntu-2004:~/www/mysite$ which uwsgi
/usr/local/bin/uwsgi

alanjui@VB02-Ubuntu-2004:~$ sudo pip3 uninstall uwsgi
Found existing installation: uWSGI 2.0.19.1
Uninstalling uWSGI-2.0.19.1:
  Would remove:
    /usr/local/bin/uwsgi
    /usr/local/lib/python3.8/dist-packages/uWSGI-2.0.19.1.dist-info/*
    /usr/local/lib/python3.8/dist-packages/uwsgidecorators.py
Proceed (y/n)? y
  Successfully uninstalled uWSGI-2.0.19.1
```

📚 使用 pip3 安裝 Python 套件時，預設安裝路徑：

```
pip3 install [package_name]
```

- 執行檔： ~/.local/bin/[package_name]

- Python 套件： ~/.local/lib/python3.8/dist-packages/{package_name}/

📺

```
alanjui@VB02-Ubuntu-2004:~$ pip3 install uwsgi
Requirement already satisfied: uwsgi in ./.local/lib/python3.8/site-packages (2.0.19.1)
```

### 安裝 uwsgi 套件

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

## 建置 Python3 虛擬環境

### 安裝作業

```
sudo apt install python-venv
```

### 建置虛擬環境

```
cd /path/to/project/
python3 -m venv .venv
```

📺

```
$ cd /home/alanjui/www/mysite

$ python3 -m venv .venv
$ ll
總用量 164
drwxrwxr-x 6 alanjui alanjui   4096  3月 28 14:54 ./
drwxrwxr-x 3 alanjui alanjui   4096  3月 26 20:51 ../
-rw-r--r-- 1 alanjui alanjui 131072  3月 28 14:05 db.sqlite3
-rwxrwxr-x 1 alanjui alanjui    662  3月 26 20:51 manage.py*
drwxrwxr-x 2 alanjui alanjui   4096  3月 26 22:43 media/
drwxrwxr-x 3 alanjui alanjui   4096  3月 28 14:40 mysite/
-rw-rw-r-- 1 alanjui alanjui    684  3月 28 14:28 mysite_uwsgi.ini
drwxrwxr-x 3 alanjui alanjui   4096  3月 26 22:18 static_collected/
-rw-rw-r-- 1 alanjui alanjui    138  3月 26 20:56 test.py
drwxrwxr-x 6 alanjui alanjui   4096  3月 28 14:54 .venv/

alanjui@VB02-Ubuntu-2004:~/www/mysite$ ll .venv
總用量 28
drwxrwxr-x 6 alanjui alanjui 4096  3月 28 14:54 ./
drwxrwxr-x 6 alanjui alanjui 4096  3月 28 14:54 ../
drwxrwxr-x 2 alanjui alanjui 4096  3月 28 14:54 bin/
drwxrwxr-x 2 alanjui alanjui 4096  3月 28 14:54 include/
drwxrwxr-x 3 alanjui alanjui 4096  3月 28 14:54 lib/
lrwxrwxrwx 1 alanjui alanjui    3  3月 28 14:54 lib64 -> lib/
-rw-rw-r-- 1 alanjui alanjui   69  3月 28 14:54 pyvenv.cfg
drwxrwxr-x 3 alanjui alanjui 4096  3月 28 14:54 share/

alanjui@VB02-Ubuntu-2004:~/www/mysite$ ll .venv/lib/python3.8/site-packages/
總用量 40
drwxrwxr-x 9 alanjui alanjui 4096  3月 28 14:54 ./
drwxrwxr-x 3 alanjui alanjui 4096  3月 28 14:54 ../
-rw-rw-r-- 1 alanjui alanjui  126  3月 28 14:54 easy_install.py
drwxrwxr-x 5 alanjui alanjui 4096  3月 28 14:54 pip/
drwxrwxr-x 2 alanjui alanjui 4096  3月 28 14:54 pip-20.0.2.dist-info/
drwxrwxr-x 5 alanjui alanjui 4096  3月 28 14:54 pkg_resources/
drwxrwxr-x 2 alanjui alanjui 4096  3月 28 14:54 pkg_resources-0.0.0.dist-info/
drwxrwxr-x 2 alanjui alanjui 4096  3月 28 14:54 __pycache__/
drwxrwxr-x 6 alanjui alanjui 4096  3月 28 14:54 setuptools/
drwxrwxr-x 2 alanjui alanjui 4096  3月 28 14:54 setuptools-44.0.0.dist-info/
```

### 安裝 Django App 套件

1. 啟用虛擬環境

```
source .venv/bin/activate
```

2. 安裝 Python 套件

```
pip3 install [package_name]
```

📺

```
alanjui@VB02-Ubuntu-2004:~/www/mysite$ source .venv/bin/activate

(.venv) alanjui@VB02-Ubuntu-2004:~/www/mysite$ pip3 install django
Collecting django
  Using cached Django-3.1.7-py3-none-any.whl (7.8 MB)
Collecting sqlparse>=0.2.2
  Using cached sqlparse-0.4.1-py3-none-any.whl (42 kB)
Collecting asgiref<4,>=3.2.10
  Using cached asgiref-3.3.1-py3-none-any.whl (19 kB)
Collecting pytz
  Using cached pytz-2021.1-py2.py3-none-any.whl (510 kB)
Installing collected packages: sqlparse, asgiref, pytz, django
Successfully installed asgiref-3.3.1 django-3.1.7 pytz-2021.1 sqlparse-0.4.1

(.venv) alanjui@VB02-Ubuntu-2004:~/www/mysite$ ll .venv/lib/python3.8/site-packages/
總用量 72
drwxrwxr-x 17 alanjui alanjui 4096  3月 28 14:57 ./
drwxrwxr-x  3 alanjui alanjui 4096  3月 28 14:54 ../
drwxrwxr-x  3 alanjui alanjui 4096  3月 28 14:57 asgiref/
drwxrwxr-x  2 alanjui alanjui 4096  3月 28 14:57 asgiref-3.3.1.dist-info/
drwxrwxr-x 19 alanjui alanjui 4096  3月 28 14:57 django/
drwxrwxr-x  2 alanjui alanjui 4096  3月 28 14:57 Django-3.1.7.dist-info/
-rw-rw-r--  1 alanjui alanjui  126  3月 28 14:54 easy_install.py
drwxrwxr-x  5 alanjui alanjui 4096  3月 28 14:54 pip/
drwxrwxr-x  2 alanjui alanjui 4096  3月 28 14:54 pip-20.0.2.dist-info/
drwxrwxr-x  5 alanjui alanjui 4096  3月 28 14:54 pkg_resources/
drwxrwxr-x  2 alanjui alanjui 4096  3月 28 14:54 pkg_resources-0.0.0.dist-info/
drwxrwxr-x  2 alanjui alanjui 4096  3月 28 14:54 __pycache__/
drwxrwxr-x  4 alanjui alanjui 4096  3月 28 14:57 pytz/
drwxrwxr-x  2 alanjui alanjui 4096  3月 28 14:57 pytz-2021.1.dist-info/
drwxrwxr-x  6 alanjui alanjui 4096  3月 28 14:54 setuptools/
drwxrwxr-x  2 alanjui alanjui 4096  3月 28 14:54 setuptools-44.0.0.dist-info/
drwxrwxr-x  5 alanjui alanjui 4096  3月 28 14:57 sqlparse/
drwxrwxr-x  2 alanjui alanjui 4096  3月 28 14:57 sqlparse-0.4.1.dist-info/
```

```
(.venv) alanjui@VB02-Ubuntu-2004:~/www/mysite$ pip3 list
Package       Version
------------- -------
asgiref       3.3.1
Django        3.1.7
pip           20.0.2
pkg-resources 0.0.0
pytz          2021.1
setuptools    44.0.0
sqlparse      0.4.1
(.venv) alanjui@VB02-Ubuntu-2004:~/www/mysite$
```

### 驗證 Python 套件已安裝

```
python3
import [package_name]
```

📺

```
(.venv) alanjui@VB02-Ubuntu-2004:~/www/mysite$ python
Python 3.8.5 (default, Jan 27 2021, 15:41:15)
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import django
>>> [Ctrl+D]
(.venv) alanjui@VB02-Ubuntu-2004:~/www/mysite$
```

### 停用虛擬環境

```
cd /path/to/project/
deactivate
```

📺

```
(mysite_venv) alanjui@VB02-Ubuntu-2004:~/www/mysite$ deactivate
alanjui@VB02-Ubuntu-2004:~/www/mysite$
```

## 安裝 Python 版本管理器

安裝 Python 版本管理器： pyenv。

### 安裝作業

1. 執行安裝。

```
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
git clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv
```

2. 設定 pyenv 執行所需之「環境變數」。

- 設定 Shell 環境

```
vim ~/.bashrc
```

.bashrc:

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

### 驗證作業

1. 查驗 pyenv 安裝路徑：

```
which pyenv
```

2. 驗證 pyenv 已能運作

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

## 安裝特定版本 Python 直譯器

透過 pyenv 安裝，某特定版本之 Python 直譯器。

[Suggested build environment for pyenv](https://github.com/pyenv/pyenv/wiki#suggested-build-environment)

1. 安裝編譯時所需使用的套件。

```
sudo apt install install --no-install-recommends make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
```

2. 使用 pyenv 指令進行安裝。

```
pyenv install [Version_No]
```

## 設定預設 Python 直譯器

將某版本 Python 直譯器，設定成作業系統的「預設 Python 直譯器」。

### 設定作業

設定「預設 Python」。

```
pyenv global 3.9.1
```

### 驗證作業

1. 透過 pyenv 查詢「預設 Python 版本」。

```
pyenv versions
```

2. 驗證下列二個指令所見之「Python 版本」與「預設 Python」的版本一致。

```
python
which python
```

3. 執行下列指令，用以驗證 Python [Version_No] 之一致性

```
pyenv --version
~/.pyenv/shims/python --version
~/.pyenv/versions/[Version_No]/bin/python --version
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ pyenv install 3.9.1
pyenv: /home/alanjui/.pyenv/versions/3.9.1 already exists
continue with installation? (y/N) y
Downloading Python-3.9.1.tar.xz...
-> https://www.python.org/ftp/python/3.9.1/Python-3.9.1.tar.xz
Installing Python-3.9.1...
Installed Python-3.9.1 to /home/alanjui/.pyenv/versions/3.9.1

alanjui@VB02-Ubuntu-2004:~$ pyenv versions
* system (set by /home/alanjui/.pyenv/version)
  3.9.1
alanjui@VB02-Ubuntu-2004:~$ pyenv global 3.9.1
alanjui@VB02-Ubuntu-2004:~$ pyenv versions
  system
* 3.9.1 (set by /home/alanjui/.pyenv/version)
alanjui@VB02-Ubuntu-2004:~$ python
Python 3.9.1 (default, Mar 26 2021, 13:50:53)
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>[Ctrl+D]

alanjui@VB02-Ubuntu-2004:~$ which python
/home/alanjui/.pyenv/shims/python

alanjui@VB02-Ubuntu-2004:~$ ll ~/.pyenv/versions/3.9.1/bin/
總用量 21712
drwxr-xr-x 2 alanjui alanjui     4096  3月 26 13:51 ./
drwxr-xr-x 6 alanjui alanjui     4096  3月 26 13:43 ../
lrwxrwxrwx 1 alanjui alanjui        8  3月 26 13:51 2to3 -> 2to3-3.9*
-rwxrwxr-x 1 alanjui alanjui      126  3月 26 13:51 2to3-3.9*
lrwxrwxrwx 1 alanjui alanjui       16  3月 26 13:43 easy_install -> easy_install-3.9*
-rwxrwxr-x 1 alanjui alanjui      263  3月 26 13:43 easy_install-3.9*
lrwxrwxrwx 1 alanjui alanjui        7  3月 26 13:43 idle -> idle3.9*
lrwxrwxrwx 1 alanjui alanjui        7  3月 26 13:51 idle3 -> idle3.9*
-rwxrwxr-x 1 alanjui alanjui      124  3月 26 13:51 idle3.9*
lrwxrwxrwx 1 alanjui alanjui        6  3月 26 13:43 pip -> pip3.9*
-rwxrwxr-x 1 alanjui alanjui      254  3月 26 13:43 pip3*
-rwxrwxr-x 1 alanjui alanjui      254  3月 26 13:43 pip3.9*
lrwxrwxrwx 1 alanjui alanjui        8  3月 26 13:43 pydoc -> pydoc3.9*
lrwxrwxrwx 1 alanjui alanjui        8  3月 26 13:51 pydoc3 -> pydoc3.9*
-rwxrwxr-x 1 alanjui alanjui      109  3月 26 13:51 pydoc3.9*
lrwxrwxrwx 1 alanjui alanjui        9  3月 26 13:43 python -> python3.9*
lrwxrwxrwx 1 alanjui alanjui        9  3月 26 13:51 python3 -> python3.9*
-rwxr-xr-x 1 alanjui alanjui 22127496  3月 26 13:51 python3.9*
-rwxr-xr-x 1 alanjui alanjui     3133  3月 26 13:51 python3.9-config*
-rwxr-xr-x 1 alanjui alanjui    65396  3月 26 13:52 python3.9-gdb.py*
lrwxrwxrwx 1 alanjui alanjui       16  3月 26 13:51 python3-config -> python3.9-config*
lrwxrwxrwx 1 alanjui alanjui       16  3月 26 13:43 python-config -> python3.9-config*
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ python --version
Python 3.9.1

alanjui@VB02-Ubuntu-2004:~$ ~/.pyenv/shims/python --version
Python 3.9.1

alanjui@VB02-Ubuntu-2004:~$ ~/.pyenv/versions/3.9.1/bin/python --version
Python 3.9.1
```

## 問題診斷與狀況排除

### Django 專案無法安裝 psycopg2

```
sudo apt install -y python3-psycopg2
pip install psycopg2
```

📚 上述作業，若仍無法安裝 psycop2 ，則可改用下列作法：

```
sudo apt install build-essential python3-dev libpq-dev
pip install psycopg2
```

📺 自原始碼安裝 psycopg2

```
$ pip install psycopg2
Collecting psycopg2
  Using cached psycopg2-2.8.6.tar.gz (383 kB)
Building wheels for collected packages: psycopg2
  Building wheel for psycopg2 (setup.py) ... done
  Created wheel for psycopg2: filename=psycopg2-2.8.6-cp38-cp38-linux_x86_64.whl size=523543 sha256=3f691ff1c8a0a35e99ae0f6cd0403db6ff920b76593dbd467a2978f5126da27d
  Stored in directory: /home/alanjui/.cache/pip/wheels/70/5e/69/8a020d78c09043156a7df0b64529e460fbd922ca065c4b795c
Successfully built psycopg2
Installing collected packages: psycopg2
Successfully installed psycopg2-2.8.6
```

## 參考資料

### Python 3 作業環境參考

- [Managing Multiple Python Versions With pyenv](https://realpython.com/intro-to-pyenv/)

- [How To Install Python 3 and Set Up a Programming Environment on an Ubuntu 20.04 Server](https://www.digitalocean.com/community/tutorials/how-to-install-python-3-and-set-up-a-programming-environment-on-an-ubuntu-20-04-server)

### 建置虛擬環境

[How to Create Python 3 Virtual Environment on Ubuntu 20.04](https://linoxide.com/how-to-create-python-virtual-environment-on-ubuntu-20-04/)

### 建置 pyenv 所需作業環境

[Suggested build environment for pyenv](https://github.com/pyenv/pyenv/wiki#suggested-build-environment)

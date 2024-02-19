# PIPENV筆記本


# 安裝 PIPEVN


## 在 Mac 安裝 PIPENV

採用 brew 安裝 python3, pipenv 

以下作業，執行前需先完成工作：

- 已安裝 ZSH Shell & Oh-my-zsh
- 已安裝 brew


**安裝作業程序**：
 1. Install python3
 2. Install pipenv
 3. Install pyenv
 

1. **Install python3**
    brew install python3
    python3 --version


2. **Install pipenv**
    brew install pipenv
    pipenv --version


    brew install pipenv                                          1 ↵  23:57:12 
    Updating Homebrew...
    ==> Auto-updated Homebrew!
    Updated 1 tap (homebrew/cask).
    No changes to formulae.
    
    ==> Installing dependencies for pipenv: sqlite and python
    ==> Installing pipenv dependency: sqlite
    ==> Downloading https://homebrew.bintray.com/bottles/sqlite-3.27.2.mojave.bottle.tar.gz
    ######################################################################## 100.0%
    ==> Pouring sqlite-3.27.2.mojave.bottle.tar.gz
    ==> Caveats
    sqlite is keg-only, which means it was not symlinked into /usr/local,
    because macOS provides an older sqlite3.
    
    If you need to have sqlite first in your PATH run:
      echo 'export PATH="/usr/local/opt/sqlite/bin:$PATH"' >> ~/.zshrc
    
    For compilers to find sqlite you may need to set:
      export LDFLAGS="-L/usr/local/opt/sqlite/lib"
      export CPPFLAGS="-I/usr/local/opt/sqlite/include"
    
    For pkg-config to find sqlite you may need to set:
      export PKG_CONFIG_PATH="/usr/local/opt/sqlite/lib/pkgconfig"
    
    ==> Summary
    🍺  /usr/local/Cellar/sqlite/3.27.2: 11 files, 3.7MB
    ==> Installing pipenv dependency: python
    ==> Downloading https://homebrew.bintray.com/bottles/python-3.7.3.mojave.bottle.tar.gz
    ######################################################################## 100.0%
    ==> Pouring python-3.7.3.mojave.bottle.tar.gz
    ==> /usr/local/Cellar/python/3.7.3/bin/python3 -s setup.py --no-user-cfg install --force --verbose --install-scripts=/usr/local/Cellar/python/3.7.3/bi
    ==> /usr/local/Cellar/python/3.7.3/bin/python3 -s setup.py --no-user-cfg install --force --verbose --install-scripts=/usr/local/Cellar/python/3.7.3/bi
    ==> /usr/local/Cellar/python/3.7.3/bin/python3 -s setup.py --no-user-cfg install --force --verbose --install-scripts=/usr/local/Cellar/python/3.7.3/bi
    ==> Caveats
    Python has been installed as
      /usr/local/bin/python3
    
    Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
    `python3`, `python3-config`, `pip3` etc., respectively, have been installed into
      /usr/local/opt/python/libexec/bin
    
    If you need Homebrew's Python 2.7 run
      brew install python@2
    
    You can install Python packages with
      pip3 install <package>
    They will install into the site-package directory
      /usr/local/lib/python3.7/site-packages
    
    See: https://docs.brew.sh/Homebrew-and-Python
    ==> Summary
    🍺  /usr/local/Cellar/python/3.7.3: 3,863 files, 59.8MB
    ==> Installing pipenv
    ==> Downloading https://homebrew.bintray.com/bottles/pipenv-2018.11.26_2.mojave.bottle.tar.gz
    Already downloaded: /Users/alanjui/Library/Caches/Homebrew/downloads/df370082517abffe34a629c4d22d7d102edc1c7dd88dff9d6d092fa4657c5284--pipenv-2018.11.26_2.mojave.bottle.tar.gz
    ==> Pouring pipenv-2018.11.26_2.mojave.bottle.tar.gz
    ==> Caveats
    Bash completion has been installed to:
      /usr/local/etc/bash_completion.d
    
    zsh completions have been installed to:
      /usr/local/share/zsh/site-functions
    ==> Summary
    🍺  /usr/local/Cellar/pipenv/2018.11.26_2: 1,455 files, 19.7MB
    ==> Caveats
    ==> sqlite
    sqlite is keg-only, which means it was not symlinked into /usr/local,
    because macOS provides an older sqlite3.
    
    If you need to have sqlite first in your PATH run:
      echo 'export PATH="/usr/local/opt/sqlite/bin:$PATH"' >> ~/.zshrc
    
    For compilers to find sqlite you may need to set:
      export LDFLAGS="-L/usr/local/opt/sqlite/lib"
      export CPPFLAGS="-I/usr/local/opt/sqlite/include"
    
    For pkg-config to find sqlite you may need to set:
      export PKG_CONFIG_PATH="/usr/local/opt/sqlite/lib/pkgconfig"
    
    ==> python
    Python has been installed as
      /usr/local/bin/python3
    
    Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
    `python3`, `python3-config`, `pip3` etc., respectively, have been installed into
      /usr/local/opt/python/libexec/bin
    
    If you need Homebrew's Python 2.7 run
      brew install python@2
    
    You can install Python packages with
      pip3 install <package>
    They will install into the site-package directory
      /usr/local/lib/python3.7/site-packages
    
    See: https://docs.brew.sh/Homebrew-and-Python
    ==> pipenv
    Bash completion has been installed to:
      /usr/local/etc/bash_completion.d
    
    zsh completions have been installed to:
      /usr/local/share/zsh/site-functions


    pip install --user pipenv                                      ✔  23:27:49 
    Collecting pipenv
      Using cached https://files.pythonhosted.org/packages/13/b4/3ffa55f77161cff9a5220f162670f7c5eb00df52e00939e203f601b0f579/pipenv-2018.11.26-py3-none-any.whl
    Collecting virtualenv-clone>=0.2.5 (from pipenv)
      Downloading https://files.pythonhosted.org/packages/37/2b/e34e411da0b960b2245f86ea83cdc20be62150a0966004f54fd2e00e5909/virtualenv_clone-0.5.2-py2.py3-none-any.whl
    Requirement already satisfied: setuptools>=36.2.1 in /Users/alanjui/.pyenv/versions/3.6.8/lib/python3.6/site-packages (from pipenv) (40.6.2)
    Collecting certifi (from pipenv)
      Downloading https://files.pythonhosted.org/packages/60/75/f692a584e85b7eaba0e03827b3d51f45f571c2e793dd731e598828d380aa/certifi-2019.3.9-py2.py3-none-any.whl (158kB)
        100% |████████████████████████████████| 163kB 1.9MB/s
    Requirement already satisfied: pip>=9.0.1 in /Users/alanjui/.pyenv/versions/3.6.8/lib/python3.6/site-packages (from pipenv) (18.1)
    Collecting virtualenv (from pipenv)
      Using cached https://files.pythonhosted.org/packages/33/5d/314c760d4204f64e4a968275182b7751bd5c3249094757b39ba987dcfb5a/virtualenv-16.4.3-py2.py3-none-any.whl
    Installing collected packages: virtualenv-clone, certifi, virtualenv, pipenv
      The script virtualenv-clone is installed in '/Users/alanjui/.local/bin' which is not on PATH.
      Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
      The script virtualenv is installed in '/Users/alanjui/.local/bin' which is not on PATH.
      Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
      The scripts pipenv and pipenv-resolver are installed in '/Users/alanjui/.local/bin' which is not on PATH.
      Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
    Successfully installed certifi-2019.3.9 pipenv-2018.11.26 virtualenv-16.4.3 virtualenv-clone-0.5.2
    You are using pip version 18.1, however version 19.0.3 is available.
    You should consider upgrading via the 'pip install --upgrade pip' command.


3. Install pyenv
    brew install pyenv
    echo 'eval "$(pyenv init -)"' >> ~/.bash_profile
    source ~/.bash_profile
    pyenv install -l | grep 3.6
    pyenv install 3.6.8


    pyenv versions
    pyenv local 3.6.8
    python --version
    pipenv --python ~/.pyenv/versions/3.6.8/bin/python          
    Creating a virtualenv for this project…
    Pipfile: /Users/alanjui/workspace/django/django2_helloworld/Pipfile
    Using /Users/alanjui/.pyenv/versions/3.6.8/bin/python (3.6.8) to create virtualenv…
    ⠼ Creating virtual environment...Using base prefix '/Users/alanjui/.pyenv/versions/3.6.8'
    New python executable in /Users/alanjui/workspace/django/django2_helloworld/.venv/bin/python
    Installing setuptools, pip, wheel...
    done.
    Running virtualenv with interpreter /Users/alanjui/.pyenv/versions/3.6.8/bin/python
    
    ✔ Successfully created virtual environment!
    Virtualenv location: /Users/alanjui/workspace/django/django2_helloworld/.venv


    pipenv shell
    pipenv install
    pipenv graph


    $ pipenv shell                                                 
    Launching subshell in virtual environment…
     . /Users/alanjui/workspace/django/django2_helloworld/.venv/bin/activate
    $ . /Users/alanjui/workspace/django/django2_helloworld/.venv/bin/activate
    $ pipenv install                                       .venv   ✔  23:42:23 
    Installing dependencies from Pipfile.lock (dd71a2)…
      🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 13/13 — 00:00:25
    $ pipenv graph                                         .venv   ✔  23:42:57 
    django-crispy-forms==1.7.2
    django-heroku==0.3.1
      - dj-database-url [required: >=0.5.0, installed: 0.5.0]
      - django [required: Any, installed: 2.2]
        - pytz [required: Any, installed: 2018.9]
        - sqlparse [required: Any, installed: 0.3.0]
      - psycopg2 [required: Any, installed: 2.7.7]
      - whitenoise [required: Any, installed: 4.1.2]
    djangorestframework==3.9.2
    gunicorn==19.9.0
    Pillow==6.0.0
    psycopg2-binary==2.7.7
    uWSGI==2.0.18


    $ which pipenv                                         .venv   ✔  23:43:50 
    /usr/local/bin/pipenv


【註】： 參考 https://www.chrisjmendez.com/2017/08/03/installing-multiple-versions-of-python-on-your-mac-using-homebrew/


----------
## 在 Linux 作業系統安裝 PIPENV

以下之安裝作業，在 Linux 作業系統須已先完成下列軟體之安裝：

    - 使用 ZSH Shell
    - 須先完成 conda 安裝


## （1）Install PIP3


    $ sudo apt update
    $ sudo apt install python3-pip

Confirm the installation:

    $ pip3 --version
    pip 9.0.1 from /usr/lib/python3/dist-packages (python 3.6)

在Ubuntu 18.04遇有問題

Retain your original system pip (in /usr/bin/ and dist-packages/) and remove the manually-installed pip (in ~.local/) to resolve the conflict:

    $ python3 -m pip uninstall pip


## （2）Install PIPENV

https://matthewbrown.io/2018/05/05/setting-up-my-python-workspace-2018/


    # Install pip and pipenv
    sudo apt install python3-pip python3-dev
    pip3 install --user pipenv
    
    # Add pipenv (and other python scripts) to PATH
    echo "PATH=$HOME/.local/bin:$PATH" >> ~/.bashrc
    source ~/.bashrc

以下指令，完成安裝後，會導致 pip3 --version  指令都無法正常執行

    $ pip3 install pipenv

須用以下指令解除狀況：

    $ python3 -m pip uninstall pip

再以下列指令，驗證 pip3 已能正常執行：

    $ pip3 --version

重新下安裝指令：

    $ pip3 install --user pipenv

安裝完後，若直接執行以下指令，是無法正常運作：

    $ pipenv

因為 pip3 所安裝的 python 套件軟體，存放於 ~/.local/bin/ 路徑之中。所以得先透過 .bashrc ，指定環境變數 PATH 的設定：

    export PATH=$HOME/.local/bin/:$PATH

重啟 bash 環境設定：

    $ source ~/.bashrc


    $ pipenv --help




----------
# PIPENV操作應用


- **虛擬環境存放路徑**
- **安裝 Django**
- **在專案中安裝套件**
- **透過 Pipfile 安裝專案使用的套件**
- **建置 Flask 開發環境**
- **建置 Flask-RESTful API 開發環境**
- **與 autoenv 整合，能自動設定環境變數**




## **虛擬環境存放路徑**


    ~/.local/share/virtualenvs/

【範例】：

    $ll ~/.local/share/virtualenvs                                                    ✔  1400  10:09:57  
    total 0
    drwxr-xr-x  7 alanjui  staff   224B  1 25 17:19 DjangoWebApp_101-c4x1cDJG
    drwxr-xr-x  6 alanjui  staff   192B  1 25 17:08 MyDjango-101-djTZu23X
    drwxr-xr-x  7 alanjui  staff   224B  1 13 15:50 angular2-afX3Zzz3
    drwxr-xr-x  8 alanjui  staff   256B  1 11 23:48 app_001-7K8hnODN
    drwxr-xr-x  8 alanjui  staff   256B 12 26 07:50 app_001-m84IwZE1
    drwxr-xr-x  8 alanjui  staff   256B  1 13 14:44 backend-O5Pbf8cR
    drwxr-xr-x  7 alanjui  staff   224B  1 13 17:30 bin-F6Pw5mzD
    drwxr-xr-x  7 alanjui  staff   224B  1 17 19:44 bin-WEhQ9it0
    drwxr-xr-x  6 alanjui  staff   192B  1 25 17:17 django-101-VbBI7vTh
    drwxr-xr-x  8 alanjui  staff   256B 11 17 15:16 django-o75j7B4g
    drwxr-xr-x  8 alanjui  staff   256B  1 28 09:22 django_101-AFcN4355
    drwxr-xr-x  7 alanjui  staff   224B  1 21 11:17 excel-001-yPRCZGR3
    drwxr-xr-x  7 alanjui  staff   224B  1 13 17:31 frontend-PNqSI0W7
    drwxr-xr-x  8 alanjui  staff   256B  1 28 09:27 helloworld-Pmg0PGkG
    drwxr-xr-x  7 alanjui  staff   224B  1 13 17:30 heroes-vkdsnTjH
    drwxr-xr-x  7 alanjui  staff   224B  1 28 09:40 myApp_001-FqhkQf0h
    drwxr-xr-x  8 alanjui  staff   256B  1 11 23:26 myApp_001-c8ZvNN4-
    drwxr-xr-x  7 alanjui  staff   224B  1 28 17:13 myApp_102_Blog-pufZDWyi
    drwxr-xr-x  6 alanjui  staff   192B  1 29 10:12 myApp_103_News-F1eiUBIu
    drwxr-xr-x  8 alanjui  staff   256B  1 11 23:31 psql_app_001-7fynklTg
    drwxr-xr-x  6 alanjui  staff   192B  1 21 22:09 py-001-RK1Dxfn2
    drwxr-xr-x  8 alanjui  staff   256B 12 30 21:44 restful_api_01-SeNAOlWW
    drwxr-xr-x  8 alanjui  staff   256B  1  5 11:16 restful_api_02-R051RXPB
    drwxr-xr-x  8 alanjui  staff   256B  1 19 18:12 restful_api_03-6SORrA0h
    drwxr-xr-x  6 alanjui  staff   192B  1 21 11:10 untitled-56FYPc5o
    drwxr-xr-x  8 alanjui  staff   256B  1  8 15:14 webapp-9XAtsxLH



## **將虛擬環境路徑改在專案資料夾下**

**設定指令：**

    export PIPENV_VENV_IN_PROJECT="enabled"

**範例：**

使用者：juzhengzhong ，在路徑： ～/workspace/django/ 下，建置 django 專案： myapp_01


    $ cd ~/workspace/django
    $ mkdir myapp_01 && cd $_
    juzhengzhong@SRV-01:~/workspace/django/myapp_01$ pipenv install django==2.1.7
    Creating a virtualenv for this project…
    Pipfile: /home/juzhengzhong/workspace/django/myapp_01/Pipfile
    Using /usr/bin/python3 (3.6.7) to create virtualenv…
    ⠼ Creating virtual environment...Already using interpreter /usr/bin/python3
    Using base prefix '/usr'
    New python executable in /home/juzhengzhong/workspace/django/myapp_01/.venv/bin/python3
    Also creating executable in /home/juzhengzhong/workspace/django/myapp_01/.venv/bin/python
    Installing setuptools, pip, wheel...
    done.
    
    ✔ Successfully created virtual environment!
    Virtualenv location: /home/juzhengzhong/workspace/django/myapp_01/.venv
    Creating a Pipfile for this project…
    Installing django==2.1.7…
    Adding django to Pipfile's [packages]…
    ✔ Installation Succeeded
    Pipfile.lock not found, creating…
    Locking [dev-packages] dependencies…
    Locking [packages] dependencies…
    ✔ Success!
    Updated Pipfile.lock (699753)!
    Installing dependencies from Pipfile.lock (699753)…
      🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 2/2 — 00:00:00
    To activate this project's virtualenv, run pipenv shell.
    Alternatively, run a command inside the virtualenv with pipenv run.
    $ ll
    總計 20
    drwxrwxr-x 3 juzhengzhong juzhengzhong 4096  4月  1 12:14 ./
    drwxr-xr-x 4 juzhengzhong juzhengzhong 4096  4月  1 12:14 ../
    -rw-rw-r-- 1 juzhengzhong juzhengzhong  157  4月  1 12:14 Pipfile
    -rw-r--r-- 1 juzhengzhong juzhengzhong 1053  4月  1 12:14 Pipfile.lock
    drwxrwxr-x 6 juzhengzhong juzhengzhong 4096  4月  1 12:14 .venv/


**解除設定指令：**

    unset PIPENV_VENV_IN_PROJECT

**解除 Pipfile 的 Lock 狀態**

    pipenv clean

**產生 requirements.txt 安裝檔**

    pipenv lock --requirements > requirements.txt


## **移除已建立之虛擬環境**
    pipenv --rm


## **建立特定Python版本之虛擬環境**
    pipenv --python 3.7.2

or


    pyenv versions
    ll ~/.pyenv/versions
    pipenv --python ~/.pyenv/versions/3.6.8/bin/python
    pipenv shell


## **條列虛擬環境已安裝之 Python 套件**
    pipenv shell
    pipenv graph



## **安裝 Django**

**(1) Create Project Folder**

    cd ~/workspace/django
    mkdir myapp_001 && cd $_

**(2) Install Django**

    pipenv install django==2.1.7

**(3) 啟動VirtualEnv**

    pipenv shell

**(4) 建立 Django Project**

    django-admin startproject app_site .

**(5) 試行 Django Project**

    ./manage.py runserver

**(6) 瀏覽器**
http://127.0.0.1:8000/

(7) 建立 Django App

    ./manage.py startapp pages



## 自動設定環境變數


可與 [autoenv](https://sanyuesha.com/2017/10/10/pipenv/) 整合，自動設定環境變數。

（1）安裝 autoenv

    $ brew install autoenv
    $ echo "source $(brew --prefix autoenv)/activate.sh" >> ~/.bash_profile

(2) 參考 ~/.bash_profile 的內容，複製到 .zshrc 檔案中

    source /usr/local/opt/autoenv/activate.sh


    SHELL=/usr/bin/zsh pipenv shell
    source /usr/local/opt/autoenv/activate.sh

(3) 更新 ZSH Shell 的設定

    source ~/.zshrc

(4) 在 Python 專案目錄中，建立 .env 檔案，及寫入環境設定，如：


    APP_SETTINGS="config.DevelopmentConfig"
    DATABASE_URL="postgresql://localhost/wordcount_dev"



## 在專案中安裝套件

使用 pipenv 安裝套件

    pipenv install <Package_name>



## 透過 Pipfile 安裝專案使用的套件

在已有 Pipfile 的專案，透過 Pipfile 內容的描述，為專案安裝所有使用到的套件。

    cd ~/workspace/django/django_gunicorn/
    cd ./app
    pipenv install



## 產生 requirements.txt


    pipenv lock --requirements > requirements.txt

Ref: https://medium.com/@chihsuan/pipenv-%E6%9B%B4%E7%B0%A1%E5%96%AE-%E6%9B%B4%E5%BF%AB%E9%80%9F%E7%9A%84-python-%E5%A5%97%E4%BB%B6%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7-135a47e504f4




## 依據 requirements.txt 安裝專案所需 Python 套件


    $ pipenv install requirements.txt


    $ pipenv install requirements.txt
    Creating a virtualenv for this project…
    Pipfile: /home/juzhengzhong/workspace/django/django2_helloworld/Pipfile
    Using /usr/bin/python3 (3.6.7) to create virtualenv…
    ⠸ Creating virtual environment...Already using interpreter /usr/bin/python3
    Using base prefix '/usr'
    New python executable in /home/juzhengzhong/workspace/django/django2_helloworld/.venv/bin/python3
    Also creating executable in /home/juzhengzhong/workspace/django/django2_helloworld/.venv/bin/python
    Installing setuptools, pip, wheel...
    done.
    
    ✔ Successfully created virtual environment!
    Virtualenv location: /home/juzhengzhong/workspace/django/django2_helloworld/.venv
    Installing requirements.txt…
    Adding requirements.txt to Pipfile's [packages]…
    ✔ Installation Succeeded
    Pipfile.lock (0e49e8) out of date, updating to (42d654)…
    Locking [dev-packages] dependencies…
    Locking [packages] dependencies…
    ✘ Locking Failed!
    [pipenv.exceptions.ResolutionFailure]:   File "/home/juzhengzhong/.local/lib/python3.6/site-packages/pipenv/resolver.py", line 69, in resolve
    [pipenv.exceptions.ResolutionFailure]:       req_dir=requirements_dir
    [pipenv.exceptions.ResolutionFailure]:   File "/home/juzhengzhong/.local/lib/python3.6/site-packages/pipenv/utils.py", line 726, in resolve_deps
    [pipenv.exceptions.ResolutionFailure]:       req_dir=req_dir,
    [pipenv.exceptions.ResolutionFailure]:   File "/home/juzhengzhong/.local/lib/python3.6/site-packages/pipenv/utils.py", line 480, in actually_resolve_deps
    [pipenv.exceptions.ResolutionFailure]:       resolved_tree = resolver.resolve()
    [pipenv.exceptions.ResolutionFailure]:   File "/home/juzhengzhong/.local/lib/python3.6/site-packages/pipenv/utils.py", line 395, in resolve
    [pipenv.exceptions.ResolutionFailure]:       raise ResolutionFailure(message=str(e))
    [pipenv.exceptions.ResolutionFailure]:       pipenv.exceptions.ResolutionFailure: ERROR: ERROR: Could not find a version that matches requirements-txt
    [pipenv.exceptions.ResolutionFailure]:       No versions found
    [pipenv.exceptions.ResolutionFailure]: Warning: Your dependencies could not be resolved. You likely have a mismatch in your sub-dependencies.
      First try clearing your dependency cache with $ pipenv lock --clear, then try the original command again.
     Alternatively, you can use $ pipenv install --skip-lock to bypass this mechanism, then run $ pipenv graph to inspect the situation.
      Hint: try $ pipenv lock --pre if it is a pre-release dependency.
    ERROR: ERROR: Could not find a version that matches requirements-txt
    No versions found
    Was https://pypi.org/simple reachable?
    [pipenv.exceptions.ResolutionFailure]:       req_dir=requirements_dir
    [pipenv.exceptions.ResolutionFailure]:   File "/home/juzhengzhong/.local/lib/python3.6/site-packages/pipenv/utils.py", line 726, in resolve_deps
    [pipenv.exceptions.ResolutionFailure]:       req_dir=req_dir,
    [pipenv.exceptions.ResolutionFailure]:   File "/home/juzhengzhong/.local/lib/python3.6/site-packages/pipenv/utils.py", line 480, in actually_resolve_deps
    [pipenv.exceptions.ResolutionFailure]:       resolved_tree = resolver.resolve()
    [pipenv.exceptions.ResolutionFailure]:   File "/home/juzhengzhong/.local/lib/python3.6/site-packages/pipenv/utils.py", line 395, in resolve
    [pipenv.exceptions.ResolutionFailure]:       raise ResolutionFailure(message=str(e))
    [pipenv.exceptions.ResolutionFailure]:       pipenv.exceptions.ResolutionFailure: ERROR: ERROR: Could not find a version that matches requirements-txt
    [pipenv.exceptions.ResolutionFailure]:       No versions found
    [pipenv.exceptions.ResolutionFailure]: Warning: Your dependencies could not be resolved. You likely have a mismatch in your sub-dependencies.
      First try clearing your dependency cache with $ pipenv lock --clear, then try the original command again.
     Alternatively, you can use $ pipenv install --skip-lock to bypass this mechanism, then run $ pipenv graph to inspect the situation.
      Hint: try $ pipenv lock --pre if it is a pre-release dependency.
    ERROR: ERROR: Could not find a version that matches requirements-txt
    No versions found
    Was https://pypi.org/simple reachable?
    $ pipenv graph
    django-crispy-forms==1.7.2
    django-heroku==0.3.1
      - dj-database-url [required: >=0.5.0, installed: 0.5.0]
      - django [required: Any, installed: 2.0.3]
        - pytz [required: Any, installed: 2018.3]
      - psycopg2 [required: Any, installed: 2.7.7]
      - whitenoise [required: Any, installed: 3.3.1]
    djangorestframework==3.7.7
    gunicorn==19.7.1
    Pillow==5.0.0
    psycopg2-binary==2.7.4
    uWSGI==2.0.18



    $ pipenv install --skip-lock django==2.1.7
    Installing django==2.1.7…
    Adding django to Pipfile's [packages]…
    ✔ Installation Succeeded
    Installing dependencies from Pipfile…
    An error occurred while installing django-heroku==0.3.1! Will try again.
    An error occurred while installing requirements-txt! Will try again.
      🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 11/11 — 00:00:02
    Installing initially failed dependencies…
      ☤  ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 2/2 — 00:00:01




## 建置 Flask RESTful API 開發環境

**作業程序：**
 1. 建立「專案根目錄」
 2. 進入「專案根目錄」
 3. 透過 pipenv 安裝 Flask-RESTful 套件 
 4. 執行 pipenv shell
 
**參考文件：**
https://pipenv.readthedocs.io/en/latest/basics/#example-pipenv-workflow
 
**範例程式碼**
 https://github.com/schoolofcode-me/rest-api-sections/tree/master/section4
 
**安裝指令實例：**

    alanjui@MacBookPro-2018   ~/workspace/Flask/restful_api_02  pipenv install Flask-RESTful                                    ✔  666  11:13:38 
    Creating a virtualenv for this project…
    Pipfile: /Users/alanjui/workspace/Flask/restful_api_02/Pipfile
    Using /usr/local/opt/python/bin/python3.7 (3.7.1) to create virtualenv…
    ✔ Complete
    Already using interpreter /usr/local/opt/python/bin/python3.7
    Using base prefix '/usr/local/Cellar/python/3.7.1/Frameworks/Python.framework/Versions/3.7'
    New python executable in /Users/alanjui/.local/share/virtualenvs/restful_api_02-R051RXPB/bin/python3.7
    Also creating executable in /Users/alanjui/.local/share/virtualenvs/restful_api_02-R051RXPB/bin/python
    Installing setuptools, pip, wheel...
    done.
    Virtualenv location: /Users/alanjui/.local/share/virtualenvs/restful_api_02-R051RXPB
    Creating a Pipfile for this project…
    Installing Flask-RESTful…
    Adding Flask-RESTful to Pipfile's [packages]…
    ✔ Installation Succeeded
    Pipfile.lock not found, creating…
    Locking [dev-packages] dependencies…
    Locking [packages] dependencies…
    ✔ Success!
    Updated Pipfile.lock (66653b)!
    Installing dependencies from Pipfile.lock (66653b)…
      🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 10/10 — 00:00:01
    To activate this project's virtualenv, run pipenv shell.
    Alternatively, run a command inside the virtualenv with pipenv run.



----------
# PyCharm開發環境設定

配合 PyCharm IDE操作使用，在 Preference 應有之設定：

- Project
- Build, Execution, Deployment
- Configurations


**Project Setup/Project Intepreter**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546671914704_image.png)


**Project Setup/Project Structure**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546671948525_image.png)


**Build, Execution, Deployment/Console**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546672376342_image.png)


**Build, Execution, Deployment/Flask**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546672520036_image.png)


**Build, Execution, Deployment/Console/Python Console**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546672403575_image.png)


**Configuration/Run & Debug**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546671771423_image.png)




----------
# 建置 Flask 開發環境

**使用套件：**

- flask
- Flask-RESTful


**操作程序：**

    cd ~/workspace/Flask
    mkdir <myproject> && cd $_
    pipenv install flask
    pipenv shell

**實例參考：**

    pipenv install Flask                                        ✔  650  21:43:33  
    Warning: the environment variable LANG is not set!
    We recommend setting this in ~/.profile (or equivalent) for proper expected behavior.
    Creating a virtualenv for this project…
    Pipfile: /Users/alanjui/workspace/Flask/restful_api_01/Pipfile
    Using /usr/local/opt/python/bin/python3.7 (3.7.1) to create virtualenv…
    ✔ Complete 
    Already using interpreter /usr/local/opt/python/bin/python3.7
    Using base prefix '/usr/local/Cellar/python/3.7.1/Frameworks/Python.framework/Versions/3.7'
    New python executable in /Users/alanjui/.local/share/virtualenvs/restful_api_01-SeNAOlWW/bin/python3.7
    Also creating executable in /Users/alanjui/.local/share/virtualenvs/restful_api_01-SeNAOlWW/bin/python
    Installing setuptools, pip, wheel...
    done.
    Virtualenv location: /Users/alanjui/.local/share/virtualenvs/restful_api_01-SeNAOlWW
    Creating a Pipfile for this project…
    Installing Flask…
    ✔ Installation Succeeded 
    Pipfile.lock not found, creating…
    Locking [dev-packages] dependencies…
    Locking [packages] dependencies…
    ✔ Success! 
    Updated Pipfile.lock (662286)!
    Installing dependencies from Pipfile.lock (662286)…
      🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 6/6 — 00:00:01
    To activate this project's virtualenv, run pipenv shell.
    Alternatively, run a command inside the virtualenv with pipenv run.
    
     alanjui@MacBookPro-2018   ~/workspace/Flask/restful_api_01  pipenv shell                                                ✔  652  21:46:50  
    Launching subshell in virtual environment…
     . /Users/alanjui/.local/share/virtualenvs/restful_api_01-SeNAOlWW/bin/activate                                                                    
    MacBookPro-2018%  . /Users/alanjui/.local/share/virtualenvs/restful_api_01-SeNAOlWW/bin/activate
    (restful_api_01) MacBookPro-2018% 
    


----------



# PyCharm整合開發環境


## 設定 PyCharm 環境

**Build, Execution, Deployment**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546225145418_image.png)


**Docker**


![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546225288608_image.png)


**Docker / Registry**


![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546225351944_image.png)


**Docker / Tools**


![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546225409089_image.png)



## 設定 Terminal 環境


- ZSH 設定：/usr/local/bin/zsh

**令 Shell 可利用 Command History**

【執行重點】：在 PyCharm 植入設定 SHELL=/usr/local/bin/zsh pipenv shell ****

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546224373140_image.png)



![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546224411698_image.png)




## 設定「專案」環境

**Project Interpreter**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546224924986_image.png)


**Project Structure**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546224972104_image.png)




## 設定執行環境

**設定 Flask 啟動**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F96C97CDFFC66A2F1B3D19770A595CE5C56A37135AAB483D83819CF5E8BE347_1546224495138_image.png)




# 參考資料
# [Basic Usage of Pipenv¶](https://pipenv.readthedocs.io/en/latest/basics/#example-pipenv-workflow)


https://medium.com/@chihsuan/pipenv-%E6%9B%B4%E7%B0%A1%E5%96%AE-%E6%9B%B4%E5%BF%AB%E9%80%9F%E7%9A%84-python-%E5%A5%97%E4%BB%B6%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7-135a47e504f4




https://www.chrisjmendez.com/2017/08/03/installing-multiple-versions-of-python-on-your-mac-using-homebrew/


PyEnv 與 Pipenv
https://blog.aweimeow.tw/use-pyenv-pipenv-to-archieve-clean-environment/



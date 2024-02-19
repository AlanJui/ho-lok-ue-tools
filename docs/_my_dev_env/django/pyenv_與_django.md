# pyenv 與 django


- 使用 pyenv 管理 python 各版本
- 使用 pyenv-virtualenv 管理 python 之「虛擬環境」


# 安裝與設定
- pyenv: https://github.com/pyenv/pyenv
- pyenv-virtualenv: https://github.com/pyenv/pyenv-virtualenv



# 建立專案可共用之虛擬環境


## 建立各用型虛擬環境



    $ pyenv virtualenv 3.7.3 my-venv-3.7.3


    $ pyenv versions
      system
      2.7.11
      2.7.11/envs/neovim2
      3.4.3
      3.7.3
      3.7.3/envs/neovim3
      3.7.3/envs/venv37
      neovim2
    * neovim3 (set by /Users/alanjui/.pyenv/version)
      venv37
    
    $ pyenv virtualenv 3.7.3 my-venv-3.7.3
    Looking in links: /var/folders/gs/vqlstcf17cd17k6c4722bxyr0000gn/T/tmpq8d3s52r
    Requirement already satisfied: setuptools in /Users/alanjui/.pyenv/versions/3.7.3/envs/my-venv-3.7.3/lib/python3.7/site-packages (40.8.0)
    Requirement already satisfied: pip in /Users/alanjui/.pyenv/versions/3.7.3/envs/my-venv-3.7.3/lib/python3.7/site-packages (19.0.3)
    
    $ pyenv versions
      system
      2.7.11
      2.7.11/envs/neovim2
      3.4.3
      3.7.3
      3.7.3/envs/my-venv-3.7.3
      3.7.3/envs/neovim3
      3.7.3/envs/venv37
      my-venv-3.7.3
      neovim2
    * neovim3 (set by /Users/alanjui/.pyenv/version)
      venv37
    
    $ ll /Users/alanjui/.pyenv/versions/3.7.3/envs/my-venv-3.7.3
    total 8
    drwxr-xr-x  14 alanjui  staff   448B  6 22 17:56 bin
    drwxr-xr-x   2 alanjui  staff    64B  6 22 17:56 include
    drwxr-xr-x   3 alanjui  staff    96B  6 22 17:56 lib
    -rw-r--r--   1 alanjui  staff   101B  6 22 17:56 pyvenv.cfg
    
    ll /Users/alanjui/.pyenv/versions/3.7.3/envs/my-venv-3.7.3/bin
    total 72
    -rw-r--r--  1 alanjui  staff   2.2K  6 22 17:56 activate
    -rw-r--r--  1 alanjui  staff   1.3K  6 22 17:56 activate.csh
    -rw-r--r--  1 alanjui  staff   2.4K  6 22 17:56 activate.fish
    -rwxr-xr-x  1 alanjui  staff   286B  6 22 17:56 easy_install
    -rwxr-xr-x  1 alanjui  staff   286B  6 22 17:56 easy_install-3.7
    -rwxr-xr-x  1 alanjui  staff   268B  6 22 17:56 pip
    -rwxr-xr-x  1 alanjui  staff   268B  6 22 17:56 pip3
    -rwxr-xr-x  1 alanjui  staff   268B  6 22 17:56 pip3.7
    -rwxr-xr-x  1 alanjui  staff   127B  6 22 17:56 pydoc
    lrwxr-xr-x  1 alanjui  staff     9B  6 22 17:56 python -> python3.7
    lrwxr-xr-x  1 alanjui  staff     9B  6 22 17:56 python3 -> python3.7
    lrwxr-xr-x  1 alanjui  staff    50B  6 22 17:56 python3.7 -> /Users/alanjui/.pyenv/versions/3.7.3/bin/python3.7
    
    $ ll /Users/alanjui/.pyenv/versions/3.7.3/envs/my-venv-3.7.3/lib/python3.7/site-packages
    total 8
    drwxr-xr-x   3 alanjui  staff    96B  6 22 17:56 __pycache__
    -rw-r--r--   1 alanjui  staff   126B  6 22 17:56 easy_install.py
    drwxr-xr-x   7 alanjui  staff   224B  6 22 17:56 pip
    drwxr-xr-x   9 alanjui  staff   288B  6 22 17:56 pip-19.0.3.dist-info
    drwxr-xr-x   7 alanjui  staff   224B  6 22 17:56 pkg_resources
    drwxr-xr-x  42 alanjui  staff   1.3K  6 22 17:56 setuptools
    drwxr-xr-x  11 alanjui  staff   352B  6 22 17:56 setuptools-40.8.0.dist-info



## 查看作業系統中已建之虛擬環境



    $ pyenv shell my-venv-3.7.3
    
    $ (my-venv-3.7.3)$ pyenv virtualenvs
      2.7.11/envs/neovim2 (created from /Users/alanjui/.pyenv/versions/2.7.11)
      3.7.3/envs/my-venv-3.7.3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      3.7.3/envs/neovim3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      3.7.3/envs/venv37 (created from /Users/alanjui/.pyenv/versions/3.7.3)
    * my-venv-3.7.3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      neovim2 (created from /Users/alanjui/.pyenv/versions/2.7.11)
      neovim3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      venv37 (created from /Users/alanjui/.pyenv/versions/3.7.3)



## 啟用與停用虛擬環境



    $ pyenv activate <name>
    $ pyenv deactivate



## 安裝 pipenv


    $ pyenv activate my-venv-3.7.3
    
    $ pip install pipenv
    Collecting pipenv
      Using cached https://files.pythonhosted.org/packages/13/b4/3ffa55f77161cff9a5220f162670f7c5eb00df52e00939e203f601b0f579/pipenv-2018.11.26-py3-none-any.whl
    Requirement already satisfied: setuptools>=36.2.1 in /Users/alanjui/.pyenv/versions/3.7.3/envs/my-venv-3.7.3/lib/python3.7/site-packages (from pipenv) (40.8.0)
    Collecting certifi (from pipenv)
      Using cached https://files.pythonhosted.org/packages/69/1b/b853c7a9d4f6a6d00749e94eb6f3a041e342a885b87340b79c1ef73e3a78/certifi-2019.6.16-py2.py3-none-any.whl
    Collecting virtualenv (from pipenv)
      Using cached https://files.pythonhosted.org/packages/c4/9a/a3f62ac5122a65dec34ad4b5ed8d802633dae4bc06a0fc62e55fe3e96fe1/virtualenv-16.6.1-py2.py3-none-any.whl
    Requirement already satisfied: pip>=9.0.1 in /Users/alanjui/.pyenv/versions/3.7.3/envs/my-venv-3.7.3/lib/python3.7/site-packages (from pipenv) (19.0.3)
    Collecting virtualenv-clone>=0.2.5 (from pipenv)
      Using cached https://files.pythonhosted.org/packages/ba/f8/50c2b7dbc99e05fce5e5b9d9a31f37c988c99acd4e8dedd720b7b8d4011d/virtualenv_clone-0.5.3-py2.py3-none-any.whl
    Installing collected packages: certifi, virtualenv, virtualenv-clone, pipenv
    Successfully installed certifi-2019.6.16 pipenv-2018.11.26 virtualenv-16.6.1 virtualenv-clone-0.5.3
    You are using pip version 19.0.3, however version 19.1.1 is available.
    You should consider upgrading via the 'pip install --upgrade pip' command.
    
    $ ll ~/.pyenv/versions/3.7.3/envs/my-venv-3.7.3/lib/python3.7/site-packages
    total 240
    drwxr-xr-x   5 alanjui  staff   160B  6 22 18:18 __pycache__
    drwxr-xr-x   7 alanjui  staff   224B  6 22 18:18 certifi
    drwxr-xr-x  10 alanjui  staff   320B  6 22 18:18 certifi-2019.6.16.dist-info
    -rw-r--r--   1 alanjui  staff    10K  6 22 18:18 clonevirtualenv.py
    -rw-r--r--   1 alanjui  staff   126B  6 22 17:56 easy_install.py
    drwxr-xr-x   7 alanjui  staff   224B  6 22 17:56 pip
    drwxr-xr-x   9 alanjui  staff   288B  6 22 17:56 pip-19.0.3.dist-info
    drwxr-xr-x  24 alanjui  staff   768B  6 22 18:19 pipenv
    drwxr-xr-x   9 alanjui  staff   288B  6 22 18:19 pipenv-2018.11.26.dist-info
    drwxr-xr-x   7 alanjui  staff   224B  6 22 17:56 pkg_resources
    drwxr-xr-x  42 alanjui  staff   1.3K  6 22 17:56 setuptools
    drwxr-xr-x  11 alanjui  staff   352B  6 22 17:56 setuptools-40.8.0.dist-info
    drwxr-xr-x  10 alanjui  staff   320B  6 22 18:18 virtualenv-16.6.1.dist-info
    -rw-r--r--   1 alanjui  staff   103K  6 22 18:18 virtualenv.py
    drwxr-xr-x   9 alanjui  staff   288B  6 22 18:18 virtualenv_clone-0.5.3.dist-info
    drwxr-xr-x   7 alanjui  staff   224B  6 22 18:18 virtualenv_support
    
    $ pip install --upgrade pip
    Collecting pip
      Using cached https://files.pythonhosted.org/packages/5c/e0/be401c003291b56efc55aeba6a80ab790d3d4cece2778288d65323009420/pip-19.1.1-py2.py3-none-any.whl
    Installing collected packages: pip
      Found existing installation: pip 19.0.3
        Uninstalling pip-19.0.3:
          Successfully uninstalled pip-19.0.3
    Successfully installed pip-19.1.1
    
    $ pyenv deactivate




## 建立專案目錄


**進入 workspace 根目錄：**


    $ pwd
    /Users/alanjui/workspace/Python


**建立專案目錄：**


    $ pyenv virtualenvs
      2.7.11/envs/neovim2 (created from /Users/alanjui/.pyenv/versions/2.7.11)
      3.7.3/envs/my-venv-3.7.3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      3.7.3/envs/neovim3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      3.7.3/envs/venv37 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      my-venv-3.7.3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      neovim2 (created from /Users/alanjui/.pyenv/versions/2.7.11)
    * neovim3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      venv37 (created from /Users/alanjui/.pyenv/versions/3.7.3)
    
    $ pyenv activate my-venv-3.7.3
    
    (my-venv-3.7.3)$ ls -al
    total 0
    drwxr-xr-x  2 alanjui  staff   64  6 22 20:51 .
    drwxr-xr-x  7 alanjui  staff  224  6 22 20:51 ..


## 建立專案用虛擬環境


    $ unset PIPENV_VENV_IN_PROJECT


    (my-venv-3.7.3)$ pipenv --python 3.7
    Courtesy Notice: Pipenv found itself running within a virtual environment, so it will automatically use that environment, instead of creating its own for any project. You can set PIPENV_IGNORE_VIRTUALENVS=1 to force pipenv to ignore that environment and create its own instead. You can set PIPENV_VERBOSITY=-1 to suppress this warning.
    Creating a Pipfile for this project…
    
    (my-venv-3.7.3)$ ls -al
    total 8
    drwxr-xr-x  3 alanjui  staff   96  6 22 20:54 .
    drwxr-xr-x  7 alanjui  staff  224  6 22 20:51 ..
    -rw-r--r--  1 alanjui  staff  138  6 22 20:54 Pipfile



    $ cat Pipfile
    [[source]]
    name = "pypi"
    url = "https://pypi.org/simple"
    verify_ssl = true
    
    [dev-packages]
    
    [packages]
    
    [requires]
    python_version = "3.7"



## 安裝 django


    $ pipenv install django
    Courtesy Notice: Pipenv found itself running within a virtual environment, so it will automatically use that environment, instead of creating its own for any project. You can set PIPENV_IGNORE_VIRTUALENVS=1 to force pipenv to ignore that environment and create its own instead. You can set PIPENV_VERBOSITY=-1 to suppress this warning.
    Installing django…
    Adding django to Pipfile's [packages]…
    ✔ Installation Succeeded
    Pipfile.lock not found, creating…
    Locking [dev-packages] dependencies…
    Locking [packages] dependencies…
    ✔ Success!
    Updated Pipfile.lock (4f9dd2)!
    Installing dependencies from Pipfile.lock (4f9dd2)…
      🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 3/3 — 00:00:00



## 啟用專案的虛擬環境


    (my-venv-3.7.3)$ pipenv shell
    Shell for /Users/alanjui/.pyenv/versions/3.7.3/envs/my-venv-3.7.3 already activated.
    No action taken to avoid nested environments.


【註】：下例為：「專案自有虛擬環境目錄」時的結果⋯⋯


    ~/workspace/Python/django_app$ pipenv shell
    Launching subshell in virtual environment…
     . /Users/alanjui/workspace/Python/django_app/.venv/bin/activate
    
    ~/workspace/Python/django_app$  . /Users/alanjui/workspace/Python/django_app/.venv/bin/activate
    
    (.venv) ~/workspace/Python/django_app$



## 建立 Django 專案目錄

建立專案目錄，命名為 web_site


    $ django-admin startproject web_site .

驗證專案目錄已建立


    $ ll
    total 24
    -rw-r--r--  1 alanjui  staff   151B  6 21 09:08 Pipfile
    -rw-r--r--  1 alanjui  staff   1.3K  6 21 09:08 Pipfile.lock
    -rwxr-xr-x  1 alanjui  staff   628B  6 21 09:25 manage.py
    drwxr-xr-x  6 alanjui  staff   192B  6 21 09:25 web_site


    $ tree web_site
    web_site
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
    
    0 directories, 4 files



## 建立 App 目錄


    $ ./mange.py startapp blog



    $ ll
    total 24
    -rw-r--r--  1 alanjui  staff   11B  6 21 09:08 Pipfile
    -rw-r--r--  1 alanjui  staff   1.3K  6 21 09:08 Pipfile.lock
    drwxr-xr-x  9 alanjui  staff   288B  6 21 09:31 blog
    -rwxr-xr-x  1 alanjui  staff   628B  6 21 09:25 manage.py
    drwxr-xr-x  6 alanjui  staff   192B  6 21 09:25 web_site
    
    $ tree blog
    blog
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── migrations
    │   └── __init__.py
    ├── models.py
    ├── tests.py
    └── views.py
    
    1 directory, 7 files


# 參考


## 參考文件
https://docs.python-guide.org/dev/virtualenvs/



## 使用 python 建立虛擬環境

**建立專案虛擬環境**


    $ python -m venv .venv


    alanjui@SRV-01:~/workspace/python/django_001$ python -m venv .venv
    alanjui@SRV-01:~/workspace/python/django_001$ ll
    總計 24
    drwxrwxr-x 3 alanjui alanjui 4096  6月 21 08:25 ./
    drwxrwxr-x 5 alanjui alanjui 4096  6月 21 08:09 ../
    -rw-rw-r-- 1 alanjui alanjui  151  6月 21 08:15 Pipfile
    -rw-r--r-- 1 alanjui alanjui 1339  6月 21 08:15 Pipfile.lock
    -rw-rw-r-- 1 alanjui alanjui    6  6月 21 08:12 .python-version
    drwxrwxr-x 5 alanjui alanjui 4096  6月 21 08:25 .venv/
    alanjui@SRV-01:~/workspace/python/django_001$ ll .venv/
    總計 24
    drwxrwxr-x 5 alanjui alanjui 4096  6月 21 08:25 ./
    drwxrwxr-x 3 alanjui alanjui 4096  6月 21 08:25 ../
    drwxrwxr-x 2 alanjui alanjui 4096  6月 21 08:25 bin/
    drwxrwxr-x 2 alanjui alanjui 4096  6月 21 08:25 include/
    drwxrwxr-x 3 alanjui alanjui 4096  6月 21 08:25 lib/
    lrwxrwxrwx 1 alanjui alanjui    3  6月 21 08:25 lib64 -> lib/
    -rw-rw-r-- 1 alanjui alanjui  101  6月 21 08:25 pyvenv.cfg
    alanjui@SRV-01:~/workspace/python/django_001$ ll .venv/bin/
    總計 40
    drwxrwxr-x 2 alanjui alanjui 4096  6月 21 08:25 ./
    drwxrwxr-x 5 alanjui alanjui 4096  6月 21 08:25 ../
    -rw-r--r-- 1 alanjui alanjui 2225  6月 21 08:25 activate
    -rw-r--r-- 1 alanjui alanjui 1281  6月 21 08:25 activate.csh
    -rw-r--r-- 1 alanjui alanjui 2433  6月 21 08:25 activate.fish
    -rwxrwxr-x 1 alanjui alanjui  275  6月 21 08:25 easy_install*
    -rwxrwxr-x 1 alanjui alanjui  275  6月 21 08:25 easy_install-3.7*
    -rwxrwxr-x 1 alanjui alanjui  257  6月 21 08:25 pip*
    -rwxrwxr-x 1 alanjui alanjui  257  6月 21 08:25 pip3*
    -rwxrwxr-x 1 alanjui alanjui  257  6月 21 08:25 pip3.7*
    lrwxrwxrwx 1 alanjui alanjui   47  6月 21 08:25 python -> /home/alanjui/.pyenv/versions/venv37/bin/python*
    lrwxrwxrwx 1 alanjui alanjui    6  6月 21 08:25 python3 -> python*




## 建立系統層級虛擬環境

**瀏覽已建立之虛擬環境**


    $ pyenv virtualenvs
      2.7.11/envs/neovim2 (created from /Users/alanjui/.pyenv/versions/2.7.11)
      3.7.3/envs/neovim3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      3.7.3/envs/venv37 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      neovim2 (created from /Users/alanjui/.pyenv/versions/2.7.11)
    * neovim3 (created from /Users/alanjui/.pyenv/versions/3.7.3)


**建立 Python 3.7.3 專用的虛擬環境，命名為： venv37**


    $ pyenv virtualenv venv37


**確認 venv37 虛擬環境已建立**


    $ pyenv virtualenvs
      2.7.11/envs/neovim2 (created from /Users/alanjui/.pyenv/versions/2.7.11)
      3.7.3/envs/neovim3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      3.7.3/envs/venv37 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      neovim2 (created from /Users/alanjui/.pyenv/versions/2.7.11)
    * neovim3 (created from /Users/alanjui/.pyenv/versions/3.7.3)
      venv37 (created from /Users/alanjui/.pyenv/versions/3.7.3)





---
sidebar: auto
---

# Python 開發環境建置作業

## 摘要

如何在 macOS 建置 Python 開發環境。

## 安裝作業程序

### (1) 安裝 Python 版本管理工具：pyenv

1. 透過 macOS 的軟軟體套件管理工具 brew ，安裝 pyenv 及 pyenv-virtualenv 。

```
brew update
brew install pyenv
brew install pyenv-virtualenv
```

2. 設定 Shell 作業環境。

```
nvim ~/.profile
```

【檔案內容】：

```
...
#-------------------------------------------
# Python
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
export PYENV_VIRTUALENV_DISABLE_PROMPT=1
export PIPENV_VERBOSITY=-1
```


3. 重啟 Shell

```
exec $SHELL
```

### (2) 安裝特定版本之 Python 直譯器

```
pyenv install <Version_no>
```

1. 透過 pyenv 執行安裝指令。

```
pyenv install 3.10.0
```

2. 驗證安裝作業無誤。

```
pyenv versions
```

【範例】：

```
❯ pyenv versions
  system
  2.7.16
* 3.10.0 (set by /Users/alanjui/.pyenv/version)
  3.10.0/envs/django-4.0
  3.10.0/envs/venv-3.10.0
  3.10.0/envs/venv-nvim
  3.8.5
  3.8.5/envs/venv-3.8.5
  3.9.1
  3.9.1/envs/venv-3.9.1
  3.9.7
  3.9.7/envs/venv-397
  django-4.0
  venv-3.10.0
  venv-3.8.5
  venv-3.9.1
  venv-397
  venv-nvim
```

### (3) 指定作業系統預設用 Python 

1. 透過 pyenv 指定預設。

```
pyenv global 3.10.0
```

2. 更新 Python 預設之「套件管理工具」：pip 。

```
~/.pyenv/versions/3.10.0/bin/python -m pip install --upgrade pip
```

3. 安裝支援 Neovim 的 Python 套件：pynvim。

```
~/.pyenv/versions/3.10.0/bin/python -m pip install pynvim
```

## 建立作業系統層級虛擬環境

【指令格式】：
```
$ pyenv virtualenv <Python版本> <venv_name>
```

### (1) 建立虛擬環境

1. 以 Python 3.10.0 版，建立名為：venv-3.10.0 之虛擬環境。
```
$ pyenv virtualenv 3.10.0 venv-3.10.0
```

2. 確認虛擬環境已建立。

```
pyenv virtualenvs
```

【範例】：

```
❯ pyenv virtualenvs
  3.10.0/envs/django-4.0 (created from /Users/alanjui/.pyenv/versions/3.10.0)
  3.10.0/envs/venv-3.10.0 (created from /Users/alanjui/.pyenv/versions/3.10.0)
  3.10.0/envs/venv-nvim (created from /Users/alanjui/.pyenv/versions/3.10.0)
  3.8.5/envs/venv-3.8.5 (created from /Users/alanjui/.pyenv/versions/3.8.5)
  3.9.1/envs/venv-3.9.1 (created from /Users/alanjui/.pyenv/versions/3.9.1)
  3.9.7/envs/venv-397 (created from /Users/alanjui/.pyenv/versions/3.9.7)
  django-4.0 (created from /Users/alanjui/.pyenv/versions/3.10.0)
  venv-3.10.0 (created from /Users/alanjui/.pyenv/versions/3.10.0)
  venv-3.8.5 (created from /Users/alanjui/.pyenv/versions/3.8.5)
  venv-3.9.1 (created from /Users/alanjui/.pyenv/versions/3.9.1)
  venv-397 (created from /Users/alanjui/.pyenv/versions/3.9.7)
  venv-nvim (created from /Users/alanjui/.pyenv/versions/3.10.0)
```

### (2) 啟用虛擬環境

1. 查詢作業系統已建置之虛擬環境。

```
pyenv virtualenvs
```

2. 啟用虛擬環境。

```
$ pyenv activate <venv_name>
```

啟用 venv-3.10.0 虛擬環境：

```
pyenv activate venv-3.10.0
```

3. 安裝 Python 套件管理工具：pipenv 。

```
pip install pipenv
```

### (3) 停用虛擬環境

```
pyenv deactivate
```

## 建立專案虛擬環境

### (1) 建置專案用虛擬環境

1. 進入專案目錄。

```
cd ~/workspace/django
mkdir app-001 && cd $_
```

2. 查詢已建置之虛擬環境。

```
pyenv virtualenvs
```

3. 指定專案使用的虛擬環境。

```
pyenv local venv-3.10.0
```

4. 確認專案使用的虛擬環境

```
pyenv version
```

【範例】：

```
❯ pyenv virtualenvs
  3.10.0/envs/django-4.0 (created from /Users/alanjui/.pyenv/versions/3.10.0)
  3.10.0/envs/venv-3.10.0 (created from /Users/alanjui/.pyenv/versions/3.10.0)
  3.10.0/envs/venv-nvim (created from /Users/alanjui/.pyenv/versions/3.10.0)
  3.8.5/envs/venv-3.8.5 (created from /Users/alanjui/.pyenv/versions/3.8.5)
  3.9.1/envs/venv-3.9.1 (created from /Users/alanjui/.pyenv/versions/3.9.1)
  3.9.7/envs/venv-397 (created from /Users/alanjui/.pyenv/versions/3.9.7)
  django-4.0 (created from /Users/alanjui/.pyenv/versions/3.10.0)
  venv-3.10.0 (created from /Users/alanjui/.pyenv/versions/3.10.0)
  venv-3.8.5 (created from /Users/alanjui/.pyenv/versions/3.8.5)
  venv-3.9.1 (created from /Users/alanjui/.pyenv/versions/3.9.1)
  venv-397 (created from /Users/alanjui/.pyenv/versions/3.9.7)
  venv-nvim (created from /Users/alanjui/.pyenv/versions/3.10.0)

❯ pyenv version
django-4.0 (set by /Users/alanjui/workspace/django/django-v4/.python-version)
```

【註】：亦可使用以下指令：

```
pyenv versions
```

### (2) 啟用專案用虛擬環境

1. 啟用虛擬環境。

```
$ pipenv shell
```

【範例】：

```
❯ pipenv shell
Creating a Pipfile for this project...
Launching subshell in virtual environment...
 . /Users/alanjui/.pyenv/versions/3.10.0/envs/venv-3.10.0/bin/activate
❯  . /Users/alanjui/.pyenv/versions/3.10.0/envs/venv-3.10.0/bin/activate

❯ la
total 16
-rw-r--r--  1 alanjui  staff    12B Jul  7 10:22 .python-version
-rw-r--r--  1 alanjui  staff   139B Jul  7 10:28 Pipfile
```

2. 安裝專案所需使用之 Python 套件。

```
pipenv install django
```

【範例】：

```
❯ pipenv install django
Warning: the environment variable LANG is not set!
We recommend setting this in ~/.profile (or equivalent) for proper expected behavior.
Creating a virtualenv for this project...
Pipfile: /Users/alanjui/workspace/django/ex-2022-02/Pipfile
Using /Users/alanjui/.pyenv/versions/3.10.0/envs/venv-3.10.0/bin/python3 (3.10.0) to create virtualenv...
⠸ Creating virtual environment...created virtual environment CPython3.10.0.final.0-64 in 861ms
  creator CPython3Posix(dest=/Users/alanjui/.local/share/virtualenvs/ex-2022-02-8OGEdpZA, clear=False, no_vcs_ignore=False, global=False)
  seeder FromAppData(download=False, pip=bundle, setuptools=bundle, wheel=bundle, via=copy, app_data_dir=/Users/alanjui/Library/Application Support/virtualenv)
    added seed packages: pip==22.1.2, setuptools==62.3.2, wheel==0.37.1
  activators BashActivator,CShellActivator,FishActivator,NushellActivator,PowerShellActivator,PythonActivator

✔ Successfully created virtual environment!
Virtualenv location: /Users/alanjui/.local/share/virtualenvs/ex-2022-02-8OGEdpZA
Installing django...
Adding django to Pipfile's [packages]...
✔ Installation Succeeded
Pipfile.lock not found, creating...
Locking [dev-packages] dependencies...
Locking [packages] dependencies...
Building requirements...
Resolving dependencies...
✔ Success!
Updated Pipfile.lock (79baf8)!
Installing dependencies from Pipfile.lock (79baf8)...
  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 0/0 — 00:00:00

❯ la
total 24
-rw-r--r--  1 alanjui  staff    12B Jul  7 10:22 .python-version
-rw-r--r--  1 alanjui  staff   152B Jul  7 10:31 Pipfile
-rw-r--r--  1 alanjui  staff   1.4K Jul  7 10:31 Pipfile.lock
```

3. 使用專案用之 Python 套件。

```
<Python_Package_Name>
```

【範例】：

```
❯ django-admin startproject mysite .

❯ la
total 32
-rw-r--r--  1 alanjui  staff    12B Jul  7 10:22 .python-version
-rw-r--r--  1 alanjui  staff   152B Jul  7 10:31 Pipfile
-rw-r--r--  1 alanjui  staff   1.4K Jul  7 10:31 Pipfile.lock
-rwxr-xr-x  1 alanjui  staff   662B Jul  7 10:42 manage.py
drwxr-xr-x  7 alanjui  staff   224B Jul  7 10:42 mysite
```

### (3) 終止專案用虛擬環境

```
$ exit
```

## 參考資料

### [Pipenv: Python Dev Workflow for Humans](https://pipenv.pypa.io/en/latest/)

pipenv 操作指引。

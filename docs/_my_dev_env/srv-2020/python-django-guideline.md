---
sidebar: auto
---

<!-- markdownlint-disable MD024 MD029 MD040 MD041 MD043 MD045 MD033 -->

# 建置 Pyton 作業環境

## 摘要

建置 Python 語言開發應用系統時，所需之作業環境。

主要作業：

- 使用 pyenv 管理 Python 版本
- 使用 Poetry 管理 Python 套件

## 安裝 pyenv 作業

1. 自 GitHub 安裝 pyenv

   自 GitHub 下載 pyenv 及 pyenv-virtualenv

   ```
   cd
   git clone https://github.com/pyenv/pyenv.git ~/.pyenv
   git clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv
   ```

2. 設定 Shell 作業環境

   ```sh
   vim ~/.profile
   ```

   ~/.profile:

   ```sh
   ......
   #-----------------------------------------------------------
   # pyenv
   #-----------------------------------------------------------
   export PYENV_ROOT="$HOME/.pyenv"
   export PATH="$PYENV_ROOT/bin:$PATH"

   if command -v pyenv 1>/dev/null 2>&1; then
     eval "$(pyenv init -)"
     eval "$(pyenv virtualenv-init -)"
   fi

   # export PYENV_VIRTUALENV_DISABLE_PROMPT=1
   export PIPENV_VERBOSITY=-1
   ......
   ```

3. 重啟 SHELL 服務

   ```sh
   exec $SHELL
   ```

## pyenv 作業指引

### 安裝某一 Python 版本

設定作業使用之 Python 直譯器版本。

1. 透過 pyenv 安裝 python 直譯器

   透過 pyenv 這套 python 版本管理工具，安裝 python v3.8.5
   版本之直譯器。

   (a) 執行安裝指令：

   ```sh
   pyenv install 3.8.5
   ```

   (b) 驗證安裝完成

   ```sh
   $ pyenv versions
   * system (set by /Users/alanjui/.pyenv/version)

   $ pyenv install 3.8.5
   python-build: use openssl@1.1 from homebrew
   python-build: use readline from homebrew
   Downloading Python-3.8.5.tar.xz...
   -> https://www.python.org/ftp/python/3.8.5/Python-3.8.5.tar.xz
   Installing Python-3.8.5...
   python-build: use readline from homebrew
   python-build: use zlib from xcode sdk
   Installed Python-3.8.5 to /Users/alanjui/.pyenv/versions/3.8.5
   ```

2. 檢視作業系統中已安裝之 Python 直譯器。

   ```sh
   $ pyenv versions
   * system (set by /Users/alanjui/.pyenv/version)
     3.8.5
   ```

### 設定「預設之 Python 直譯器」

設定作業系統層級的「預設 Python 直譯器」。

```sh
pyenv global <VerNo>
```

Ex: Without Python 2 specified

```sh
$ pyenv global 3.8.5

$ pyenv versions
  system
* 3.8.5 (set by /Users/alanjui/.pyenv/version)
```

Ex: With Python 2 and Python 3 specified

```sh
$  pyenv versions
  system
  2.7.16
* 3.8.5 (set by /Users/alanjui/.pyenv/version)
  3.9.1

$ pyenv global 2.7.16 3.9.1

$ pyenv versions
  system
* 2.7.16 (set by /Users/alanjui/.pyenv/version)
  3.8.5
* 3.9.1 (set by /Users/alanjui/.pyenv/version)
```

```sh
$ which python
/usr/bin/python
$ la /usr/bin/python
lrwxr-xr-x  1 root  wheel    75B  1  1  2020 /usr/bin/python -> ../../System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7
$ /usr/bin/python

WARNING: Python 2.7 is not recommended.
This version is included in macOS for compatibility with legacy software.
Future versions of macOS will not include Python 2.7.
Instead, it is recommended that you transition to using 'python3' from within Terminal.

Python 2.7.16 (default, Dec 21 2020, 23:00:36)
[GCC Apple LLVM 12.0.0 (clang-1200.0.30.4) [+internal-os, ptrauth-isa=sign+stri on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> ^D

$ which python2
/usr/bin/python2
$ la /usr/bin/python2
lrwxr-xr-x  1 root  wheel    75B  1  1  2020 /usr/bin/python2 -> ../../System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7

$ which python3
/usr/local/bin/python3
$ la /usr/local/bin/python3
lrwxr-xr-x  1 alanjui  admin    40B  2 13 12:23 /usr/local/bin/python3 -> ../Cellar/python@3.9/3.9.1_8/bin/python3
$ /usr/local/bin/python3
Python 3.9.1 (default, Feb  3 2021, 07:38:02)
[Clang 12.0.0 (clang-1200.0.32.29)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> ^D
```

## poetry 作業指引

### 安裝 poetry

1. 安裝軟體。

   ```sh
   curl -sSL https://install.python-poetry.org | python3 -
   ```

2. 設定 Shell 執行路徑。

   (a) 編輯 Shell 設定檔： ~/.bashrc

   ```sh
   nvim ~/.bashrc
   ```

   (b) 加入設定

   ```sh
   . . .
   export PATH="/home/sammy/.local/bin:$PATH"
   ```

   (c) 重啟 Shell

   ```sh
   source ~/.bashrc
   ```

3. 驗證已安裝成功

   ```sh
   poetry --version
   ```

## 管理 python 虛擬環境

### 建置 python 虛擬環境

建置專案使用之 Python 虛擬環境。

```sh
cd ~/workspace/django/<ProjectRoot>/
pyenv local <VerNo>
python -m venv .venv
```

### 啟用專案虛擬環境

1. 透過 poetry 啟動專案虛擬環境。

   ```sh
   poetry shell
   ```

2. 安裝 python 套件管理工具： pipenv 。

   ```
   poetry add <PackageName>
   poetry add <PackageName> --group dev
   ```

### 安裝 Python 套件

```
poetry install
```

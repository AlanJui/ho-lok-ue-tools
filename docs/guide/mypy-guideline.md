# 如何在 Django 專案引用 mypy

在 Django 專案中啟用 mypy 作為 type linter ，有以下事項需注
意：

## 與 Neovim 編輯器整合

1.  Neovim 編輯器需透過 null-ls 啟用 mypy ；但不要透過 Mason
    插件，安裝 mypy linter 執行檔；

1.  mypy 執行檔應安裝於 Django 專案的虛擬環境中；

    ```sh
    ❯ la .venv/lib/python3.10/site-packages/mypy
    total 13728
    -rwxr-xr-x   1 alanjui  staff    32K Sep 15 14:12 __init__.cpython-310-darwin.so
    -rw-r--r--   1 alanjui  staff    37B Sep 15 14:12 __init__.py
    -rw-r--r--   1 alanjui  staff   1.0K Sep 15 14:12 __main__.py
    drwxr-xr-x   7 alanjui  staff   224B Sep 15 14:57 __pycache__
    -rwxr-xr-x   1 alanjui  staff    32K Sep 15 14:12 api.cpython-310-darwin.so
    -rw-r--r--   1 alanjui  staff   2.9K Sep 15 14:12 api.py
    -rwxr-xr-x   1 alanjui  staff    32K Sep 15 14:12 applytype.cpython-310-darwin.so
    ...
    ```

1.  目前的 mypy v1.5.1 已支援使用 **pyproject.toml** 檔案，
    作為 mypy 設定檔；pyproject.toml 設定參考：

    ```sh
    [tool.poetry.group.dev.dependencies]
    ...
    mypy = "^1.5.1"
    django-stubs = "^4.2.4"

    [tool.mypy]
    exclude = ['.venv', 'venv']
    # ignore_missing_imports = true
    plugins = [
      "mypy_django_plugin.main",
    ]

    [tool.django-stubs]
    django_settings_module = "web_app.settings"

    [tool.django-summernote]
    ignore_missing_imports = true

    ```

## 建立 Django 專案 SOP

1. 建立專案根目錄
2. 透過 pyenv 指定專案使用之 Python 版本
3. 透過 poetry 建立專案使用之 pyproject.toml 設定檔
4. 透過 poetry 建立專案使用之 Python 虛擬環境
5. 啟動專案使用之 Python 虛擬環境
6. 透過 poetry 安裝 django 模組
7. 驗證 Django 專案已能正常運作
8. 透過 poetry 安裝 Django 專案需套用之 Python 模組，及開發
   用模組
9. 建立 Django 專案之子 App

10.

```sh
pyenv local 3.10.6
```

.zshrc

```sh
export PATH=$HOME/.local/bin:$PATH

#--------------------------------------------------------------------
# pyenv
#--------------------------------------------------------------------

# export PYENV_ROOT=$(pyenv root)
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"

if command -v pyenv 1>/dev/null 2>&1; then
	eval "$(pyenv init --path)"
	eval "$(pyenv init -)"
	eval "$(pyenv virtualenv-init -)" # pyenv-virtualenv: pyenv plugin
fi
export PYENV_VIRTUALENV_DISABLE_PROMPT=1

#--------------------------------------------------------------------
# Poetry
#--------------------------------------------------------------------
export PATH="$HOME/.poetry/bin:$PATH"

# Configure poetry to create virtual environments inside the project's
# root directory
poetry config virtualenvs.in-project true

```

檢查虛擬環境的組態設定

```sh
poetry config --list
cache-dir = "/Users/alanjui/Library/Caches/pypoetry"
experimental.system-git-client = false
installer.max-workers = null
installer.modern-installation = true
installer.no-binary = null
installer.parallel = true
virtualenvs.create = true
virtualenvs.in-project = true
virtualenvs.options.always-copy = false
virtualenvs.options.no-pip = false
virtualenvs.options.no-setuptools = false
virtualenvs.options.system-site-packages = false
virtualenvs.path = "{cache-dir}/virtualenvs"  # /Users/alanjui/Library/Caches/pypoetry/virtualenvs
virtualenvs.prefer-active-python = false
virtualenvs.prompt = "{project_name}-py{python_version}"
```

建置專案使用的 pyproject.toml 設定檔

```sh
poetry init
```

pyproject.toml

```sh
[tool.poetry]
name = "poetry001"
version = "0.1.0"
description = "Exercise for learnning poetry"
authors = ["居正中 <AlanJui.1960@gmail.com>"]
readme = "README.md"

[tool.poetry.dependencies]
python = "^3.10"
django = "^4.2.5"
django-summernote = "^0.8.20.0"
```

建立虛擬環境

```sh
poetry env use python
```

專案虛擬環境所使用的目錄，能建立於專案根目錄之下的執行要點：

```sh
poetry config virtualenvs.in-project true
```

啟用專案之虛擬環境

```sh
poetry shell
```

安裝 Django 專案所需之 django 模組

```sh
poetry add django
```

安裝 Django 專案所需之開發工具模組

```sh
poetry add mypy django-stubs --group dev
```

建立 Django 專案

```sh
cd ~/workspace/python/poetry001
poetry shell
django-admin startproject mysite .
```

建立 Django 專案的子 App

```sh
python manage.py startapp <AppName>
```

##

[mypy1.5.1 documentation](https://mypy.readthedocs.io/en/stable/running_mypy.html#missing-imports)

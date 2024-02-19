---
sidebar: auto
---

# ArchLinux: Django 專案作業指引

## 摘要

設定 Django 專案所需之執行環境，其作業程序如下：

1.  安裝 Python 執行環境
2.  建置 Django Project
3.  設定 Django Project 執行環境

## 建置及初始 Django Project

### **（1）建置專案目錄**

    cd ~/workspace/django
    mkdir <ProjectName> && cd $_

### **（2）設定專案使用 Python 版本**

《建置新的虛擬環境》

    pyenv versions
    pyenv virtualenv 3.9.1 venv-3.9.1

《指定專案所使用的虛擬環境》

    pyenv local venv-3.9.1
    pyenv version

### **（3）安裝 Python 套件：Django**

    pip install django

### **（4）安裝 Python 格式編排器**

    pip install autopep8

### **（5）安裝 Python 語法檢視器**

- **安裝 pylint**
  pip install pylint
  cp ~/.config/nvim/my-nvim/utils/.pylintrc

【註】：自行產生 .pylintrc 設定檔

    pylint --generate-rcfile > .pylintrc

- **設定可略過之「規則」：**
  - `C0114` (`missing-module-docstring`)
  - `C0115` (`missing-class-docstring`)
  - `C0116` (`missing-function-docstring`)


    [MASTER]
    ....
    disable=print-statement,
            ....,
            C0114,
            C0115,
            C0116,
            compresension-escape

### **（6）建置 pyright 設定：pyrightconfig.json**

    cp ~/.config/nvim/my-nvim/utils/pyrightconfig.json .


    nvim pyrightconfig.json


    {
      "venvPath": "/Users/alanjui/.pyenv/versions/3.9.1/envs",
      "venv": "venv-3.9.1",
      "reportMissingImports": true,
      "pythonVersion": "3.9",
      "exclude": [
        "**/node_modules",
        "**/__pycache__"
      ]
    }

【註】： **venvPath** 的設定，不可使用 Home Dir 的簡寫：

    - $**HOME**/.pyenv/versions/3.9.1/envs
    - **~**/.pyenv/versions/3.9.1/envs

### **（7）建置 git 版本管理器**

    cp ~/.config/nvim/my-nvim/utils/.gitignore .
    git init
    git add .
    git commit -m "Initial project"


    $ cat .gitignore
    $HOME/.config/coc/extensions/
    ###################
    .DS_Store
    .hg
    .svn
    .idea
    .vscode
    *.vscode
    node_modules
    ###################
    # Python files
    .venv/
    env/
    __pycache__/
    .pyc
    static_collected/
    # Temporary files
    *.kate-swp
    *.swp
    *.swo
    *~

### **（8）建立 Django Project**

    django-admin startproject web_config .

### **（9）驗證建置結果**

    $ ./manage.py runserver
    Watching for file changes with StatReloader
    Performing system checks...

    System check identified no issues (0 silenced).

    You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
    Run 'python manage.py migrate' to apply them.
    January 26, 2021 - 04:12:53
    Django version 3.1.5, using settings 'web_config.settings'
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.

### \*\*（10）執行 Django App

    $ ./manage.py startapp <AppName>

## VS Code 操作設定

### 設定 Django 專案 Python 虛擬環境

使用 VS Code 作為原始碼編輯器時，應有之設定如下：

1. 執行 Command Palette 指令：按 [Ctrl] + [Shift] + [P] 鍵

2. Python: Select Interpreter ==> venv-3.9.1

### 設定 Django 起動與除錯之設定檔

設定「執行與除錯啟動設定檔」： launch.json。

《專案目錄》/.vscode/launch.json

    {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Python: Django",
                "type": "python",
                "request": "launch",
                "program": "${workspaceFolder}/manage.py",
                "args": [
                    "runserver",
                    "0.0.0.0:9000"
                ],
                "django": true
            }
        ]
    }

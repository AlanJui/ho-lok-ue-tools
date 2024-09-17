(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{329:function(n,t,a){"use strict";a.r(t);var s=a(10),e=Object(s.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"archlinux-django-專案作業指引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#archlinux-django-專案作業指引"}},[n._v("#")]),n._v(" ArchLinux: Django 專案作業指引")]),n._v(" "),t("h2",{attrs:{id:"摘要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[n._v("#")]),n._v(" 摘要")]),n._v(" "),t("p",[n._v("設定 Django 專案所需之執行環境，其作業程序如下：")]),n._v(" "),t("ol",[t("li",[n._v("安裝 Python 執行環境")]),n._v(" "),t("li",[n._v("建置 Django Project")]),n._v(" "),t("li",[n._v("設定 Django Project 執行環境")])]),n._v(" "),t("h2",{attrs:{id:"建置及初始-django-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建置及初始-django-project"}},[n._v("#")]),n._v(" 建置及初始 Django Project")]),n._v(" "),t("h3",{attrs:{id:"_1-建置專案目錄"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-建置專案目錄"}},[n._v("#")]),n._v(" "),t("strong",[n._v("（1）建置專案目錄")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("cd ~/workspace/django\nmkdir <ProjectName> && cd $_\n")])])]),t("h3",{attrs:{id:"_2-設定專案使用-python-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-設定專案使用-python-版本"}},[n._v("#")]),n._v(" "),t("strong",[n._v("（2）設定專案使用 Python 版本")])]),n._v(" "),t("p",[n._v("《建置新的虛擬環境》")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("pyenv versions\npyenv virtualenv 3.9.1 venv-3.9.1\n")])])]),t("p",[n._v("《指定專案所使用的虛擬環境》")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("pyenv local venv-3.9.1\npyenv version\n")])])]),t("h3",{attrs:{id:"_3-安裝-python-套件-django"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安裝-python-套件-django"}},[n._v("#")]),n._v(" "),t("strong",[n._v("（3）安裝 Python 套件：Django")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("pip install django\n")])])]),t("h3",{attrs:{id:"_4-安裝-python-格式編排器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-安裝-python-格式編排器"}},[n._v("#")]),n._v(" "),t("strong",[n._v("（4）安裝 Python 格式編排器")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("pip install autopep8\n")])])]),t("h3",{attrs:{id:"_5-安裝-python-語法檢視器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-安裝-python-語法檢視器"}},[n._v("#")]),n._v(" "),t("strong",[n._v("（5）安裝 Python 語法檢視器")])]),n._v(" "),t("ul",[t("li",[t("strong",[n._v("安裝 pylint")]),n._v("\npip install pylint\ncp ~/.config/nvim/my-nvim/utils/.pylintrc")])]),n._v(" "),t("p",[n._v("【註】：自行產生 .pylintrc 設定檔")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("pylint --generate-rcfile > .pylintrc\n")])])]),t("ul",[t("li",[t("strong",[n._v("設定可略過之「規則」：")]),n._v(" "),t("ul",[t("li",[t("p",[t("code",[n._v("C0114")]),n._v(" ("),t("code",[n._v("missing-module-docstring")]),n._v(")")])]),n._v(" "),t("li",[t("p",[t("code",[n._v("C0115")]),n._v(" ("),t("code",[n._v("missing-class-docstring")]),n._v(")")])]),n._v(" "),t("li",[t("p",[t("code",[n._v("C0116")]),n._v(" ("),t("code",[n._v("missing-function-docstring")]),n._v(")")]),n._v(" "),t("p",[n._v("[MASTER]\n....\ndisable=print-statement,\n....,\nC0114,\nC0115,\nC0116,\ncompresension-escape")])])])])]),n._v(" "),t("h3",{attrs:{id:"_6-建置-pyright-設定-pyrightconfig-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-建置-pyright-設定-pyrightconfig-json"}},[n._v("#")]),n._v(" "),t("strong",[n._v("（6）建置 pyright 設定：pyrightconfig.json")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('cp ~/.config/nvim/my-nvim/utils/pyrightconfig.json .\n\n\nnvim pyrightconfig.json\n\n\n{\n  "venvPath": "/Users/alanjui/.pyenv/versions/3.9.1/envs",\n  "venv": "venv-3.9.1",\n  "reportMissingImports": true,\n  "pythonVersion": "3.9",\n  "exclude": [\n    "**/node_modules",\n    "**/__pycache__"\n  ]\n}\n')])])]),t("p",[n._v("【註】： "),t("strong",[n._v("venvPath")]),n._v(" 的設定，不可使用 Home Dir 的簡寫：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("- $**HOME**/.pyenv/versions/3.9.1/envs\n- **~**/.pyenv/versions/3.9.1/envs\n")])])]),t("h3",{attrs:{id:"_7-建置-git-版本管理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-建置-git-版本管理器"}},[n._v("#")]),n._v(" "),t("strong",[n._v("（7）建置 git 版本管理器")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('cp ~/.config/nvim/my-nvim/utils/.gitignore .\ngit init\ngit add .\ngit commit -m "Initial project"\n\n\n$ cat .gitignore\n$HOME/.config/coc/extensions/\n###################\n.DS_Store\n.hg\n.svn\n.idea\n.vscode\n*.vscode\nnode_modules\n###################\n# Python files\n.venv/\nenv/\n__pycache__/\n.pyc\nstatic_collected/\n# Temporary files\n*.kate-swp\n*.swp\n*.swo\n*~\n')])])]),t("h3",{attrs:{id:"_8-建立-django-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-建立-django-project"}},[n._v("#")]),n._v(" "),t("strong",[n._v("（8）建立 Django Project")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("django-admin startproject web_config .\n")])])]),t("h3",{attrs:{id:"_9-驗證建置結果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-驗證建置結果"}},[n._v("#")]),n._v(" "),t("strong",[n._v("（9）驗證建置結果")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("$ ./manage.py runserver\nWatching for file changes with StatReloader\nPerforming system checks...\n\nSystem check identified no issues (0 silenced).\n\nYou have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.\nRun 'python manage.py migrate' to apply them.\nJanuary 26, 2021 - 04:12:53\nDjango version 3.1.5, using settings 'web_config.settings'\nStarting development server at http://127.0.0.1:8000/\nQuit the server with CONTROL-C.\n")])])]),t("h3",{attrs:{id:"_10-執行-django-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-執行-django-app"}},[n._v("#")]),n._v(" **（10）執行 Django App")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("$ ./manage.py startapp <AppName>\n")])])]),t("h2",{attrs:{id:"vs-code-操作設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-操作設定"}},[n._v("#")]),n._v(" VS Code 操作設定")]),n._v(" "),t("h3",{attrs:{id:"設定-django-專案-python-虛擬環境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#設定-django-專案-python-虛擬環境"}},[n._v("#")]),n._v(" 設定 Django 專案 Python 虛擬環境")]),n._v(" "),t("p",[n._v("使用 VS Code 作為原始碼編輯器時，應有之設定如下：")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("執行 Command Palette 指令：按 [Ctrl] + [Shift] + [P] 鍵")])]),n._v(" "),t("li",[t("p",[n._v("Python: Select Interpreter ==> venv-3.9.1")])])]),n._v(" "),t("h3",{attrs:{id:"設定-django-起動與除錯之設定檔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#設定-django-起動與除錯之設定檔"}},[n._v("#")]),n._v(" 設定 Django 起動與除錯之設定檔")]),n._v(" "),t("p",[n._v("設定「執行與除錯啟動設定檔」： launch.json。")]),n._v(" "),t("p",[n._v("《專案目錄》/.vscode/launch.json")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('{\n    // Use IntelliSense to learn about possible attributes.\n    // Hover to view descriptions of existing attributes.\n    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "Python: Django",\n            "type": "python",\n            "request": "launch",\n            "program": "${workspaceFolder}/manage.py",\n            "args": [\n                "runserver",\n                "0.0.0.0:9000"\n            ],\n            "django": true\n        }\n    ]\n}\n')])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
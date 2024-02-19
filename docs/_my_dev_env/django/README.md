---
sidebar:auto
---

# Django 開發工具作業指引

## 安裝與操作

- [在 Debian 10 安裝 Django 開發環境](./Debian_10_設定)
- [Django 常用指令備忘錄](./Python_與_Django_速查指令)

## 作業指引

- [pyenv 在 Django 專案應用指引](./pyenv_與_django)
- [與 vagrant 工具整合開發作業指引](./vagrant_+_pyenv_+_pipenv_+_postgres)
- [將 Django App 佈署至 Heroku 雲端平台](./佈署_Django_2_App_上_Heroku)

## 專案模版

- [Djano 結合 VuePress 專案模版](https://github.com/AlanJui/python-with-vuepress)
- [《跟老齊學 Python Django 實戰》習作](https://gitlab.com/alanjui.1960/django_001)
- [與 Docker 及 Docker Compose 結合專案模版](https://gitlab.com/alanjui.1960/django-app-template)

## Python 套件引用

- [Django Exceptions](https://docs.djangoproject.com/zh-hans/3.1/ref/exceptions/)

  Django raises some of its own exceptions as well as standard Python exceptions.

## 常見異常問題診斷與狀況排除

### 處理執行時期錯誤或意外

- [使用 os.environ[ [ENVIRONMENT_VAR] ] 欲取得環境變數，卻發生意外](https://stackoverflow.com/questions/60435406/which-exception-should-be-raised-when-a-required-environment-variable-is-missing)

### [終止 uwsgi 服務](https://stackoverflow.com/questions/31970908/how-to-kill-all-instance-of-uwsgi/48098251)

當 uwsgi ，以「背景」方式執行時。欲終止其執行：

1.  方法一：使用 Kill Process 的方式

```
sudo pkill -f uwsgi -9
```

2.  方法二：使用刪除 PID 方式

```
kill `pidof uwsgi`
```

## 參考資料

### 控管 seetings.py 設定

- [Configuring Django Settings: Best Practices](https://djangostars.com/blog/configuring-django-settings-best-practices/)

### 佈署 Django App 上線

- [Django Tutorial Part 11: Deploying Django to production](https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Django/Deployment)

- [Django: How to manage development and production settings?](https://stackoverflow.com/questions/10664244/django-how-to-manage-development-and-production-settings)

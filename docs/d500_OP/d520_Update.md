---
sidebar: auto
---

<!-- markdownlint-disable MD013 MD024 MD043 -->

# 系統更新作業程序

## 文件摘要

當應用系統需要：新增功能、修正軟體錯誤時，機房管理人員當循本
作業程序所述步驟，執行新版軟體更新作業。

## 作業程序

1. 透過 SSH ，以遠端登入方式，連上伺服器。

```sh
❯ ssh alanjui@192.168.66.20
Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.19.0-50-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

Expanded Security Maintenance for Applications is not enabled.

2 updates can be applied immediately.
要檢查這些額外的更新，請執行 apt list --upgradable

7 additional security updates can be applied with ESM Apps.
Learn more about enabling ESM Apps service at https://ubuntu.com/esm

Last login: Tue Jul 25 11:23:00 2023 from 192.168.66.100
```

2. 進入「佈署目錄」。

```sh
❯ cd /apps/hangi.ccc.tw.local
```

3. 自 GitHub 簽出「更新」版本。

```sh
❯ git pull
remote: Enumerating objects: 17, done.
remote: Counting objects: 100% (17/17), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 11 (delta 7), reused 11 (delta 7), pack-reused 0
展開物件中: 100% (11/11), 2.99 KiB | 766.00 KiB/s, 完成.
來自 https://github.com/AlanJui/Django4-Project-Template
   5489cd6..6fbaa20  main       -> origin/main
更新 5489cd6..6fbaa20
Fast-forward
 article_pronunciation/lib_huan_tshiat_huat.py |  11 +++++++-
 article_pronunciation/views.py                |   5 ++--
 docs/_debug/parse_huan_tshiat.md              | 149 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 pyproject.toml                                |   2 +-
 4 files changed, 163 insertions(+), 4 deletions(-)
 create mode 100644 docs/_debug/parse_huan_tshiat.md
```

4. 更新相依套件。

```sh
poetry install
```

5. 更新資料庫結構：如有資料庫結構變動，須執行以下指令，以便
   更新資料庫結構。

```sh
poetry run python manage.py migrate
```

6. 重新啟動應用系統：重啟 Nginx 和 uWSGI 服務。

   Nginx 服務重啟：

   ```sh
   sudo service nginx restart
   ```

   uWSGI 服務重啟（執行時間較長）：

   ```sh
   sudo systemctl restart hangi.service

   ❯ sudo systemctl status hangi
   ● hangi.service - uWSGI instance to serve hangi.ccc.tw.local
     Loaded: loaded (/etc/systemd/system/hangi.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2023-07-30 12:53:03 CST; 54s ago
    Process: 9926 ExecStartPre=/usr/bin/bash -c mkdir -p /run/uwsgi; chown www-data:www-data /run/uwsgi (code=exited, status=0/SUCCESS)
   Main PID: 9928 (uwsgi)
      Tasks: 11 (limit: 18976)
     Memory: 35.7M
        CPU: 328ms
     CGroup: /system.slice/hangi.service
             ├─9928 .venv/bin/uwsgi --ini web_app_uwsgi.ini
             ├─9931 .venv/bin/uwsgi --ini web_app_uwsgi.ini
             ├─9932 .venv/bin/uwsgi --ini web_app_uwsgi.ini
             ├─9933 .venv/bin/uwsgi --ini web_app_uwsgi.ini
             ├─9934 .venv/bin/uwsgi --ini web_app_uwsgi.ini
             ├─9935 .venv/bin/uwsgi --ini web_app_uwsgi.ini
             ├─9936 .venv/bin/uwsgi --ini web_app_uwsgi.ini
             ├─9937 .venv/bin/uwsgi --ini web_app_uwsgi.ini
             ├─9938 .venv/bin/uwsgi --ini web_app_uwsgi.ini
             ├─9939 .venv/bin/uwsgi --ini web_app_uwsgi.ini
             └─9940 .venv/bin/uwsgi --ini web_app_uwsgi.ini
   ```

7 月 30 12:53:03 mbp-2012 bash[9928]: spawned uWSGI worker 1
(pid: 9931, cores: 1) 7 月 30 12:53:03 mbp-2012 bash[9928]:
spawned uWSGI worker 2 (pid: 9932, cores: 1) 7 月 30
12:53:03 mbp-2012 bash[9928]: spawned uWSGI worker 3 (pid:
9933, cores: 1) 7 月 30 12:53:03 mbp-2012 bash[9928]:
spawned uWSGI worker 4 (pid: 9934, cores: 1) 7 月 30
12:53:03 mbp-2012 bash[9928]: spawned uWSGI worker 5 (pid:
9935, cores: 1) 7 月 30 12:53:03 mbp-2012 bash[9928]:
spawned uWSGI worker 6 (pid: 9936, cores: 1) 7 月 30
12:53:03 mbp-2012 bash[9928]: spawned uWSGI worker 7 (pid:
9937, cores: 1) 7 月 30 12:53:03 mbp-2012 bash[9928]:
spawned uWSGI worker 8 (pid: 9938, cores: 1) 7 月 30
12:53:03 mbp-2012 bash[9928]: spawned uWSGI worker 9 (pid:
9939, cores: 1) 7 月 30 12:53:03 mbp-2012 bash[9928]:
spawned uWSGI worker 10 (pid: 9940, cores: 1)

```

```

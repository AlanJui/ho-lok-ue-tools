(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{535:function(s,a,e){"use strict";e.r(a);var n=e(10),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"postgresql-指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-指引"}},[s._v("#")]),s._v(" PostgreSQL 指引")]),s._v(" "),a("h2",{attrs:{id:"作業程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作業程序"}},[s._v("#")]),s._v(" 作業程序")]),s._v(" "),a("h3",{attrs:{id:"在-ubuntu-安裝-postgres"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-ubuntu-安裝-postgres"}},[s._v("#")]),s._v(" 在 Ubuntu 安裝 Postgres")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo apt install -y postgresql postgresql-contrib\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"操作-psql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作-psql"}},[s._v("#")]),s._v(" 操作 psql")]),s._v(" "),a("p",[s._v("【方法一】：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo -i -u postgres\npsql\n[psql_command];\n[Ctrl + D]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo -i -u postgres\n[sudo] alanjui 的密碼：\npostgres@SRV-2020:~$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('postgres@SRV-2020:~$ psql\npsql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))\nType "help" for help.\n\npostgres=# \\q\npostgres@SRV-2020:~$\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("【方法二】：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('sudo -u postgres psql "[psql_command];"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"設定資料庫系統管理員密碼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#設定資料庫系統管理員密碼"}},[s._v("#")]),s._v(" 設定資料庫系統管理員密碼")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo -u postgres psql -c \"ALTER ROLE postgres WITH password '[password]'\"\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"建立使用者帳號及密碼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立使用者帳號及密碼"}},[s._v("#")]),s._v(" 建立使用者帳號及密碼")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("create role [user_name] with login password '[password]';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("📺 建立使用者帳號：app1_user；並設定密碼為：Passw0rd。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("postgres=# \\du\n     Role name      |                         Attributes                         | Member of\n--------------------+------------------------------------------------------------+-----------\n django2_helloworld |                                                            | {}\n postgres           | Superuser, Create role, Create DB, Replication, Bypass RLS | {}\n\npostgres=# create role app1_user with login password 'Passw0rd';\n\npostgres=# \\du\n                                        List of roles\n     Role name      |                         Attributes                         | Member of\n--------------------+------------------------------------------------------------+-----------\n app1_user          |                                                            | {}\n django2_helloworld |                                                            | {}\n postgres           | Superuser, Create role, Create DB, Replication, Bypass RLS | {}\n\npostgres=# alter role app1_user createdb;\nALTER ROLE\npostgres=# \\du\n                                        List of roles\n     Role name      |                         Attributes                         | Member of\n--------------------+------------------------------------------------------------+-----------\n app1_user          | Create DB                                                  | {}\n django2_helloworld |                                                            | {}\n postgres           | Superuser, Create role, Create DB, Replication, Bypass RLS | {}\n\npostgres=# \\q\n\n$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"賦予使用者權限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#賦予使用者權限"}},[s._v("#")]),s._v(" 賦予使用者權限")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("alter role [user_name] createdb;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"建立資料庫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立資料庫"}},[s._v("#")]),s._v(" 建立資料庫")]),s._v(" "),a("ol",[a("li",[s._v("以 root 帳號，登入 PostgreSQL 資料庫系統。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("psql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("建立資料庫。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("create database [db_name];\n\\l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("postgres=# create database app1_db;\nCREATE DATABASE\n\npostgres=# \\l\n                                             List of databases\n         Name          |  Owner   | Encoding |   Collate   |    Ctype    |        Access privileges\n-----------------------+----------+----------+-------------+-------------+---------------------------------\n app1_db               | postgres | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 |\n django2_helloworld_db | postgres | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 | =Tc/postgres                   +\n                       |          |          |             |             | postgres=CTc/postgres          +\n                       |          |          |             |             | django2_helloworld=CTc/postgres\n local_db              | pstgres  | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 |\n postgres              | postgres | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 |\n template0             | postgres | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 | =c/postgres                    +\n                       |          |          |             |             | postgres=CTc/postgres\n template1             | postgres | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 | =c/postgres                    +\n                       |          |          |             |             | postgres=CTc/postgres\n(6 rows)\n\npostgres=#\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"將資料庫擁有權賦予使用者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#將資料庫擁有權賦予使用者"}},[s._v("#")]),s._v(" 將資料庫擁有權賦予使用者")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("grant all privileges on database [db_name] to [db_user];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("postgres=# grant all privileges on database app1_db to app1_user;\nGRANT\npostgres=#\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"以資料庫擁有者登入資料庫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以資料庫擁有者登入資料庫"}},[s._v("#")]),s._v(" 以資料庫擁有者登入資料庫")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("psql -h [host] -U [db_user] -d [db_name]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("📺 以 app1_user 帳號，登入 app_db 資料庫。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('postgres@SRV-2020:~$ psql -h localhost -U app1_user -d app1_db\nPassword for user app1_user:\npsql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))\nSSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)\nType "help" for help.\n\napp1_db=>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('app1_db=> \\connect app1_db;\nSSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)\nYou are now connected to database "app1_db" as user "app1_user".\napp1_db=>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ sudo -i -u postgres\n[sudo] alanjui 的密碼：\n\npostgres@SRV-2020:~$ psql -h localhost -U app1_user -d app1_db\nPassword for user app1_user:\n\npsql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))\nSSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)\nType "help" for help.\n\napp1_db=> \\dt\n                    List of relations\n Schema |            Name            | Type  |   Owner\n--------+----------------------------+-------+-----------\n public | auth_group                 | table | app1_user\n public | auth_group_permissions     | table | app1_user\n public | auth_permission            | table | app1_user\n public | auth_user                  | table | app1_user\n public | auth_user_groups           | table | app1_user\n public | auth_user_user_permissions | table | app1_user\n public | django_admin_log           | table | app1_user\n public | django_content_type        | table | app1_user\n public | django_migrations          | table | app1_user\n public | django_session             | table | app1_user\n(10 rows)\n\napp1_db=>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"安裝-python-套件-psycopg2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-python-套件-psycopg2"}},[s._v("#")]),s._v(" 安裝 Python 套件：psycopg2")]),s._v(" "),a("p",[s._v("在 Django App 安裝 psycopg2 套件。")]),s._v(" "),a("ol",[a("li",[s._v("啟用「虛擬環境」。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo su\ncd /var/www/mysite.ccc.tw.local\nsource .venv/bin/activate\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("安裝支援 psycopg2 套件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apt install libpq-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("安裝 psycopg2 套件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pip install psycopg2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"變更-settings-py-設定檔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#變更-settings-py-設定檔"}},[s._v("#")]),s._v(" 變更 settings.py 設定檔")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim web_config/settings.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("🔖 settings.py")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(". . .\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.postgresql_psycopg2',\n        'NAME': ‘<db_name>’,\n        'USER': '<db_username>',\n        'PASSWORD': '<password>',\n        'HOST': '<db_hostname_or_ip>',\n        'PORT': '<db_port>',\n    }\n}\n. . .\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"建立資料庫用-db-及-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立資料庫用-db-及-tables"}},[s._v("#")]),s._v(" 建立資料庫用 DB 及 Tables")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.enterprisedb.com/postgres-tutorials/how-use-postgresql-django",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to use PostgreSQL with Django"),a("OutboundLink")],1)]),s._v(" "),a("ol",[a("li",[s._v("執行 django makemigrations 指令。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("python manage.py makemigrations\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("執行 django migrate 指令，建置資料庫系統用 DB Schema。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("python manage.py migrate\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("建立「後台使用者帳號及密碼」。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("python manage.py createsuperuser\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"問題診斷與狀況排除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#問題診斷與狀況排除"}},[s._v("#")]),s._v(" 問題診斷與狀況排除")]),s._v(" "),a("p",[s._v("N/A")]),s._v(" "),a("h2",{attrs:{id:"參考資料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[s._v("#")]),s._v(" 參考資料")]),s._v(" "),a("p",[s._v("N/A")])])}),[],!1,null,null,null);a.default=t.exports}}]);
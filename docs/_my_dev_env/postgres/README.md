---
sidebar: auto
---

# PostgreSQL 指引

## 作業程序

### 在 Ubuntu 安裝 Postgres

```
sudo apt install -y postgresql postgresql-contrib
```

### 操作 psql

【方法一】：

```
sudo -i -u postgres
psql
[psql_command];
[Ctrl + D]
```

📺

```
$ sudo -i -u postgres
[sudo] alanjui 的密碼：
postgres@SRV-2020:~$
```

```
postgres@SRV-2020:~$ psql
psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))
Type "help" for help.

postgres=# \q
postgres@SRV-2020:~$
```

【方法二】：

```
sudo -u postgres psql "[psql_command];"
```

### 設定資料庫系統管理員密碼

```
sudo -u postgres psql -c "ALTER ROLE postgres WITH password '[password]'"
```

### 建立使用者帳號及密碼

```
create role [user_name] with login password '[password]';
```

📺 建立使用者帳號：app1_user；並設定密碼為：Passw0rd。

```
postgres=# \du
     Role name      |                         Attributes                         | Member of
--------------------+------------------------------------------------------------+-----------
 django2_helloworld |                                                            | {}
 postgres           | Superuser, Create role, Create DB, Replication, Bypass RLS | {}

postgres=# create role app1_user with login password 'Passw0rd';

postgres=# \du
                                        List of roles
     Role name      |                         Attributes                         | Member of
--------------------+------------------------------------------------------------+-----------
 app1_user          |                                                            | {}
 django2_helloworld |                                                            | {}
 postgres           | Superuser, Create role, Create DB, Replication, Bypass RLS | {}

postgres=# alter role app1_user createdb;
ALTER ROLE
postgres=# \du
                                        List of roles
     Role name      |                         Attributes                         | Member of
--------------------+------------------------------------------------------------+-----------
 app1_user          | Create DB                                                  | {}
 django2_helloworld |                                                            | {}
 postgres           | Superuser, Create role, Create DB, Replication, Bypass RLS | {}

postgres=# \q

$
```

### 賦予使用者權限

```
alter role [user_name] createdb;
```

### 建立資料庫

1. 以 root 帳號，登入 PostgreSQL 資料庫系統。

```
psql
```

2. 建立資料庫。

```
create database [db_name];
\l
```

📺

```
postgres=# create database app1_db;
CREATE DATABASE

postgres=# \l
                                             List of databases
         Name          |  Owner   | Encoding |   Collate   |    Ctype    |        Access privileges
-----------------------+----------+----------+-------------+-------------+---------------------------------
 app1_db               | postgres | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 |
 django2_helloworld_db | postgres | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 | =Tc/postgres                   +
                       |          |          |             |             | postgres=CTc/postgres          +
                       |          |          |             |             | django2_helloworld=CTc/postgres
 local_db              | pstgres  | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 |
 postgres              | postgres | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 |
 template0             | postgres | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 | =c/postgres                    +
                       |          |          |             |             | postgres=CTc/postgres
 template1             | postgres | UTF8     | zh_TW.UTF-8 | zh_TW.UTF-8 | =c/postgres                    +
                       |          |          |             |             | postgres=CTc/postgres
(6 rows)

postgres=#
```

### 將資料庫擁有權賦予使用者

```
grant all privileges on database [db_name] to [db_user];
```

📺

```
postgres=# grant all privileges on database app1_db to app1_user;
GRANT
postgres=#
```

### 以資料庫擁有者登入資料庫

```
psql -h [host] -U [db_user] -d [db_name]
```

📺 以 app1_user 帳號，登入 app_db 資料庫。

```
postgres@SRV-2020:~$ psql -h localhost -U app1_user -d app1_db
Password for user app1_user:
psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)
Type "help" for help.

app1_db=>
```

```
app1_db=> \connect app1_db;
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)
You are now connected to database "app1_db" as user "app1_user".
app1_db=>
```

```
$ sudo -i -u postgres
[sudo] alanjui 的密碼：

postgres@SRV-2020:~$ psql -h localhost -U app1_user -d app1_db
Password for user app1_user:

psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)
Type "help" for help.

app1_db=> \dt
                    List of relations
 Schema |            Name            | Type  |   Owner
--------+----------------------------+-------+-----------
 public | auth_group                 | table | app1_user
 public | auth_group_permissions     | table | app1_user
 public | auth_permission            | table | app1_user
 public | auth_user                  | table | app1_user
 public | auth_user_groups           | table | app1_user
 public | auth_user_user_permissions | table | app1_user
 public | django_admin_log           | table | app1_user
 public | django_content_type        | table | app1_user
 public | django_migrations          | table | app1_user
 public | django_session             | table | app1_user
(10 rows)

app1_db=>
```

### 安裝 Python 套件：psycopg2

在 Django App 安裝 psycopg2 套件。

1. 啟用「虛擬環境」。

```
sudo su
cd /var/www/mysite.ccc.tw.local
source .venv/bin/activate
```

2. 安裝支援 psycopg2 套件

```
apt install libpq-dev
```

3. 安裝 psycopg2 套件

```
pip install psycopg2
```

### 變更 settings.py 設定檔

```
vim web_config/settings.py
```

🔖 settings.py

```
. . .
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': ‘<db_name>’,
        'USER': '<db_username>',
        'PASSWORD': '<password>',
        'HOST': '<db_hostname_or_ip>',
        'PORT': '<db_port>',
    }
}
. . .
```

### 建立資料庫用 DB 及 Tables

[How to use PostgreSQL with Django](https://www.enterprisedb.com/postgres-tutorials/how-use-postgresql-django)

1. 執行 django makemigrations 指令。

```
python manage.py makemigrations
```

2. 執行 django migrate 指令，建置資料庫系統用 DB Schema。

```
python manage.py migrate
```

3. 建立「後台使用者帳號及密碼」。

```
python manage.py createsuperuser
```

## 問題診斷與狀況排除

N/A

## 參考資料

N/A

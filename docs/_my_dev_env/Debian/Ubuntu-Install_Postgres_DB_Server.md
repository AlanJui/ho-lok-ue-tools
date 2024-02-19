---
sidebar: auto
---

# Ubuntu： Postgres DB Server 安裝指引

## 安裝作業

### 安裝 Postgres Server

1. 執行 Postgres 套件安裝指令：

```
$ sudo apt install postgresql postgresql-contrib
```

【Postgres 操作摘要】：

- 程式： /var/lib/postgresql/11/main/
- 重新啟動 Postgres Server： /usr/lib/postgresql/11/bin/pg_ctl -D /var/lib/postgresql/11/main -l logfile start

📺

```
$ /usr/lib/postgresql/11/bin/pg_ctl -D /var/lib/postgresql/11/main -l logfile start

Ver Cluster Port Status Owner Data directory Log file
11 main 5432 down postgres /var/lib/postgresql/11/main /var/log/postgresql/postgresql-11-main.log
update-alternatives: using /usr/share/postgresql/11/man/man1/postmaster.1.gz to provide /usr/share/man/man1/postmaster.1.gz (postmaster.1.gz) in auto mode
```

3. 驗證安裝結果

```
$ sudo -u postgres psql -c "SELECT version();"
```

## 資料庫管理工具操作法

使用 psql 作為「Postgres 資料庫資料」管理工具。

### 方法一：以 postgres 帳號操作 psql

```
sudo su - postgres

psql
# [Command]
```

📺

```
alanjui@SRV-2020:~$ sudo su - postgres
postgres@SRV-2020:~$
```

```
postgres@SRV-2020:~$ pwd
/var/lib/postgresql
```

```
postgres@SRV-2020:~$ psql
psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))
Type "help" for help.

postgres=# \q
postgres@SRV-2020:~$
```

```
postgres@SRV-2020:~$ exit
登出
alanjui@SRV-2020:~$
```

### 方法二：以一般使用者帳號操作 psql

```
sudo -u postgres psql

postgres# [Postgres_Commands]
```

📺

```
alanjui@SRV-2020:~$ sudo -u postgres psql
psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))
Type "help" for help.

postgres=# \q
alanjui@SRV-2020:~$
```

### 方法三：以一般使用者帳號操作指令

```
sudo su - postgres -c "[Command]"
```

📺

```
$ sudo su - postgres -c "createuser django2_helloworld"
```

## 建立資料庫容器及設定管理者

透過 Postgres 資料庫管理系統，建立「資料庫容器」及「管理者」。並透過 Role 操作，
設定管理者帳號之「密碼」。

### 切換成資料庫服務管理者帳號

對於「資料庫」之管理作業，應於操作之前，先將使用者帳號，切換成：
「Postgres Service 管理者帳號」：postgres。

```
sudo su - postgres
```

### 建立資料庫使用者

執行下列指令，建立「資料庫系統」之「使用者帳號」。

```
createuser [DB_User_Name]
```

📺

```
postgres@SRV-2020:~$ createuser django2_helloworld
postgres@SRV-2020:~$
```

或

```
$ sudo su - postgres -c "createuser django2_helloworld"
```

### 建立資料庫

```
createdb [DB_Repo_Name]
```

📺

```
postgres@SRV-2020:~$ createdb django2_helloworld_db
postgres@SRV-2020:~$
```

或

```
$ sudo su - postgres -c "createdb django2_helloworld_db"
```

### 指派資料庫管理者

透過「角色指派」指令，指派某「資料庫使用者」，為某「資料庫容器」之「擁有者」。
以此方式，將「資料庫使用者」設定成「資料庫容器管理者」。

1. 啟用 psql 資料庫管理工具。

```
psql
```

2. 執行指令，指派「資料庫使用者」，對「資料庫容器」擁有全部的「操作使用權限」；
   令此「資料庫使用者」成為「資料庫容器管理者」。

```
grant all privileges on database [DB_Repo_Name] to [DB_User_Name];
```

3. 對「資料庫容器管理者」設定「密碼」。

```
alter role [DB_User_Name] with password '[Password]';
```

📺

```
postgres@SRV-2020:~$ psql
psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))
Type "help" for help.

postgres=# grant all privileges on database django2_helloworld_db to django2_helloworld;
GRANT
postgres=# alter role django2_helloworld with password 'Passw0rd';
ALTER ROLE
postgres=# \q
postgres@SRV-2020:~$
```

或

```
$ sudo -u postgres psql
psql (11.2 (Ubuntu 11.2-1.pgdg18.04+1))
Type "help" for help.

postgres=# grant all privileges on database django2_helloworld_db to django2_helloworld;
GRANT
postgres=# alter role django2_helloworld with password 'Passw0rd';
ALTER ROLE
postgres=# \q
$
```

## 常用管理作業

### 刪除資料庫使用者

```
$ sudo su - postgres -c "dropuser django2_helloworld"
```

# PostgreSQL Server 自救手冊


----------


# 完成安裝後


## 變更預設管理員帳號 postgres 的密碼
    psql postgres
    \du
    \password postgres


## 建立App用資料庫

查詢使用者帳號：查詢 Postgres Server 所擁有的使用者帳號

    \du

建立使用者帳號（db_user)

    create role db_user with login password 'Passw0rd';

允許 db_user 帳號，具建立DB權限

    alter role db_user createdb;

透過「查詢使用者帳號指令」，確認使用者帳號已建立。

    \du
    \q

以 db_user 帳號，進入 psql

    psql postgres -U db_user\

建立資料庫

    create database my_test_db;

確認資料庫已建立

    \l

設定 db_user 在 my_test_db 資料庫擁有所有權限

    grant all privileges on database my_test_db to db_user;

確認 db_user 已能連上 my_test_db 資料庫

    \connect my_test_db;

查詢資料已建立之 Tables 

    \dt

離開 psql 

    \q


----------


# 在 Docker Container 環境運作

https://hub.docker.com/_/postgres/


# 下載PostgreSQL
    docker pull postgres


# 啟動 PostgreSQL Instance


## start a postgres instance
    docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres



    docker run --name psql-db -e POSTGRES_PASSWORD=Passw0rd -d postgres


    docker run --name psql-db -e POSTGRES_PASSWORD=Passw0rd -p 5432:5432 postgres:10


## connect to it from an application
    $ docker run --name some-app --link some-postgres:postgres -d application-that-uses-postgres


    docker run --name psql-db --link db:postgres -d psql -h postgres -U postgres


    docker run --link db:postgres -d --name psql-db -e POSTGRES_PASSWORD=Passw0rd -p 5432:5432 postgres:10

驗證 Container 已能正常運作

    docker ps


    AlanJui at MacBook-Pro.local in [~/workspace/django]
    21:59:30 $ docker ps
    CONTAINER ID        IMAGE               COMMAND                  CREATED                  STATUS              PORTS                    NAMES
    5c5bf208b44a        postgres:10         "docker-entrypoint.s…"   Less than a second ago   Up 3 seconds        0.0.0.0:5432->5432/tcp   psql-db


執行 PSQL

    docker run -it --rm --link some-postgres:postgres postgres psql -h postgres -U postgres


    AlanJui at MacBook-Pro.local in [~/workspace/django]
    22:04:42 $ docker exec -it psql-db bash
    root@5c5bf208b44a:/# psql -h localhost -U postgres
    psql (10.4 (Debian 10.4-2.pgdg90+1))
    Type "help" for help.
    
    postgres=# \q
    root@5c5bf208b44a:/# exit
    exit
    
    AlanJui at MacBook-Pro.local in [~/workspace/django]
    22:16:04 $



----------


    docker stack deploy -c stack.yml postgres


    docker-compose -f stack.yml up


    http://<swarm-ip>:8080


    http://localhost:8080


    http://<host-ip>:8080


stack.yml

    # Use postgres/example user/password credentials
    version: '3.1'
    
    services:
    
      db:
        image: postgres
        restart: always
        environment:
          POSTGRES_PASSWORD: Passw0rd
    
      adminer:
        image: adminer
        restart: always
        ports:
          - 8080:8080


----------
# 在 Ubuntu 16.04 環境運作

安裝指令。

    sudo apt-get update
    sudo apt-get install postgresql postgresql-contrib


    Creating new cluster 9.5/main ...
      config /etc/postgresql/9.5/main
      data   /var/lib/postgresql/9.5/main
      locale en_US.UTF-8
      socket /var/run/postgresql
      port   5432
    

系統安裝路徑：

    /usr/share/postgresql/9.5/
    /usr/share/postgresql-common/

設定檔存放路徑：

    /etc/postgresql/9.5/main/postgresql.conf

資料庫存放路徑：

    /var/lib/postgresql/9.5/main

Service 管理常用指令：

    sudo service postgresql status (systemctl status postgresql)
    sudo service postgresql stop (sudo systemctl stop postgresql)
    sudo service postgresql start (sudo systemctl start postgresql) 
    sudo service postgresql restart (sudo systemctl restart postgresql) 



----------
## 變更 Port 號作業

設定檔： /etc/postgresql/<Ver>/main/postgresql.conf

    ...
    port = 5433


----------
## 變更預設管理員帳號密碼作業

將 PostgreSQL 資料庫系統，預設的管理員帳號：postgres，設定密碼。

**驗證作業系統已有 postgres 使用者帳號被建立。**

    $ id postgres
    uid=124(postgres) gid=131(postgres) \u7fa4\u7d44=131(postgres),112(ssl-cert)

變更「使用作業系統使用者」的密碼

    $ sudo passwd postgres

變更「PostgreSQL資料庫系統使用者（postgres）」的密碼

    $ sudo -u postgres psql -d template1 -c "ALTER USER postgres WITH PASSWORD 'ChingHai99@';"



----------
## 設定可遠端存取作業

**(1)　設定 PostgreSQL 相關「設定檔」：**

設定檔目錄路徑：/etc/postgresql/9.5/main/

在檔案： **pg_hba.conf ，加入下列設定：**

    host all all 192.168.66.0/24 md5

在檔案： **postgresql.conf，加入下列設定：**

    listen_addresses='*'

**(2) 開通防火牆**

要求「防火牆」開放 PORT: 5432
檢查防火牆的 Port：5432 是否已開通： [http://www.yougetsignal.com/tools/open-ports/](http://www.yougetsignal.com/tools/open-ports/)

執行下列指令，要求防火牆將 Port: 5432 開通（意即在 `iptables` 新增 rule）

    iptables -A INPUT -s 0/0 -p tcp --dport 5432 -j ACCEPT

**(3) 從新啟動 PostgreSQL Service**

在Server端，將 PostgreSQL Service 重新啟動：

    sudo service postgresql restart
    sudo service postgresql status

**(4) 驗證可自遠端連入**

在 Client 端，連入 PostgreSQL Server：

     psql -U postgres postgres -h 192.168.66.10
     ...
     \q


----------

**以 postgres 使用者身份啟動 postgres 管理工具：psql**

直接使用目前使用者：

    $ sudo -u postgres psql

先切換到 postgres 使用者：

    $ sudo -i -u postgres
    $ psql

退出 psql 

    postgres=# \q


----------

**建立資料庫使用者（Create a New Role）**

使用指令： createuser 。對於指令用法，需要說明時，可用以下方式查明：

    $ man createuser


【方法一】：使用登入系統的使用者身份


    $ sudo -u postgres createuser --interactive
    Enter name of role to add: app_user
    Shall the new role be a superuser? (y/n) y
    

【方法二】：切換成 postgres 使用者身份


    $ sudo -i -u postgres
    postgres@srv-01:~$ createuser --interactive

【方法三】：切換成作業系統使用者 postgres 身份

    $ su - postgres
    密碼： 
    postgres@srv-01:~$
    
    postgres@srv-01:~$ createdb mytestdb
    postgres@srv-01:~$ psql mytestdb
    psql (9.5.12)
    Type "help" for help.
    
    mytestdb=# \q
    postgres@srv-01:~$ 
    
    postgres@srv-01:~$ su alanjui
    Password: 
    alanjui@srv-01:/var/lib/postgresql$ 


----------

刪除 PostgreSQL 資料庫庫管理系統中的使用者： dropuser


    $ su - postgres
    密碼： 
    postgres@srv-01:~$ dropuser app_user
    postgres@srv-01:~$ 


----------

建立資料庫（Create a New Database）


    sudo -u postgres createdb my_project



    $ sudo adduser app_db
    
    $ sudo -u postgres createuser --interactive
    Enter name of role to add: app_db
    Shall the new role be a superuser? (y/n) y
    
    $ sudo -u app_db createdb app_db



----------

應用案例：建立一個資料庫： app_db ，其資料管理員帳號為： app_user (密碼：changeme)


    $ su - postgres
    密碼： 
    postgres@srv-01:~$
    
    postgres@srv-01:~$ createuser app_user --pwprompt
    Enter password for new role: 
    Enter it again: 
    postgres@srv-01:~$ 
    
    postgres@srv-01:~$ createdb app_db
    postgres@srv-01:~$ 
    
    postgres@srv-01:~$ psql app_db
    psql (9.5.12)
    Type "help" for help.
    
    app_db=# GRANT ALL ON DATABASE app_db TO app_user;
    GRANT
    app_db=# \q
    postgres@srv-01:~$ 




----------
# 在 OS X 環境運作
## (1) 安裝作業
- 下載：使用 **EnterpriseDB 套件安裝，下載處：** https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#linux


- 安裝處： ~/Applications/PostgreSQL/9.6


- 設定檔存放路徑： ~~/Applications/PostgreSQL/9.6/data


- 執行檔存放路徑： ~/Applications/PostgreSQL/9.6/bin


- Service 檔存放路徑：/lib/systemd/system/postgresql-9.6.service


## (2) 檢驗及確認 PostgreSQL Server 是否已啟動

透過目錄 **PATH 檢查及確認己安裝**

    $ which pg_ctl
    /home/alanjui/Applications/PostgreSQL/9.6/bin/pg_ctl

**檢查 Service ，確認是否已啟動**

    $ service postgresql-9.6 status

**檢查 psql shell (PostgreSQL Client) 可連上 PostgreSQL Server**

    $ pgsql -h 127.0.0.1 -U postgres
    
    $ pgsql -h localhost -U postgres
    
    $ pgsql -h 192.168.66.10 -U postgres

**檢查 Port: 5432 是否已在使用中**

    $ netstat -tulnp | grep 5432



----------


# pgAdmin4


## 安裝方法一
    $ sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
    
    $ cat /etc/apt/sources.list.d/pgdg.list                                 
    deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main

下載 Repository Key ：  https://www.postgresql.org/media/keys/ACCC4CF8.asc

    $ sudo apt-get install wget ca-certificates
    $ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
    $ sudo apt-get update
    $ sudo apt-get upgrade
    $ sudo apt-get install pgadmin4



----------
## 安裝方法二
    $ sudo apt-get install virtualenv python-pip libpq-dev python-dev
    
    $ cd
    $ virtualenv pgadmin4
    $ cd pgadmin4
    $ source bin/activate
    
    $ wget https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v1.6/pip/pgadmin4-1.6-py2.py3-none-any.whl
    
    $ pip install pgadmin4-1.6-py2.py3-none-any.whl


## 設定作業

**設定 SERVER_MODE**

於設定檔： `~/pgadmin4/lib/python2.7/site-packages/pgadmin4/config_local.py` 加入「`SERVER_MODE = False`」設定（run in single-user mode）：


    $ echo "SERVER_MODE = False" >> lib/python2.7/site-packages/pgadmin4/config_local.py

**在 Shell 設定「別名(alias)」**

修改下列設定檔：

- ~/.zshrc
- ~/.bashrc
- 
    # pgAdmin4
    alias pgadmin='source ~/pgadmin4/bin/activate  && python ~/pgadmin4/lib/python2.7/site-packages/pgadmin4/pgAdmin4.py'


啟動 pgAdmin4

（１）在終端機執行指令(alias: pgadmin)

    $ pgadmin

（２）在 Web Browser 瀏覽網址： http://127.0.0.1:5050/


----------


# 資料庫管理


## 建置專案用資料庫

**建立使用者帳戶**


    $ sudo -u postgres createuser django2_helloworld -P

-P 表 Password，當要求輸入 password 時，輸入： **Passw0rd** 。

**建立資料庫並設定使用者帳戶**


    $ sudo -u postgres createdb django2_helloworld_db -O django2_helloworld

-O: Owner

DB URL:  post



## 建置 Mail Server


    sudo -u postgres createuser mail_server -P
    sudo -u postgres createdb mail_server_db -O mail_server


    postgresql://\[user[:password]@\][netloc]\[:port\][/dbname][?param1=value1&...]



    Here are examples from same document
    postgresql://
    postgresql://localhost
    postgresql://localhost:5432
    postgresql://localhost/mydb
    postgresql://user@localhost
    postgresql://user:secret@localhost
    postgresql://other@localhost/otherdb?connect_timeout=10&application_name=myapp
    postgresql://localhost/mydb?user=other&password=secret


    postgresql://mail_server:Passw0rd@192.168.66.10:5432/mail_server_db



    # vim /opt/postfixadmin/config.local.php
    
    <?php
    $CONF['database_type'] = 'mysqli';
    $CONF['database_user'] = 'postfix';
    $CONF['database_password'] = 'postfix-db-password';
    $CONF['database_name'] = 'postfix';
    
    $CONF['configured'] = true;
    ?>


    # vim /opt/postfixadmin/config.local.php
    
    <?php
    $CONF['database_type'] = 'pgsql';
    $CONF['database_user'] = 'mail_server';
    $CONF['database_password'] = 'Passw0rd';
    $CONF['database_name'] = 'mail_server_db';
    
    $CONF['configured'] = true;
    ?>




# 安裝 LEPP 伺服器


    $ sudo -u postgres psql postgres
    psql (11.2 (Ubuntu 11.2-1.pgdg18.04+1))
    Type "help" for help.
    postgres=# create user "www-data" with password 'Passw0rd';
    CREATE ROLE
    postgres=# create database lepp_db with owner "www-data";
    CREATE DATABASE
    postgres=# grant all privileges on database lepp_db to "www-data";
    GRANT
    postgres=# \q
    alanjui@SRV-01:~$


    $ sudo apt install postfix-pgsql sasl2-bin


# PSQL Shell 操作


## 登入
    psql -h <IP/Host> -d <Database> -U <UserAccount>

登入 localhost 

    alanjui at Srv-01 in [~]   
    10:55:31 $ psql -h localhost -d postgres -U postgres
    psql.bin (9.6.3)
    Type "help" for help.
    
    Cannot read termcap database;
    using dumb terminal settings.
    postgres=# quit()
    postgres-# \q

登入 192.168.66.10:

    alanjui at Srv-01 in [~]   
    11:03:56 $ psql -h 192.168.66.10 -d postgres -U postgres
    Password for user postgres: 
    psql.bin (9.6.3)
    Type "help" for help.
    
    Cannot read termcap database;
    using dumb terminal settings.
    postgres=# 


----------
## 常用指令

**條列所有 Database**

    \list (\l)

**切換「使用中的 Database」**

    \connect <database>  (\c)

**條列 Database 所有的 Table**

    \dt


----------
## 退出PSQL

使用 \q 指令。

    alanjui at Srv-01 in [~]   
    9:30:56 $ psql
    psql.bin (9.6.3)
    Type "help" for help.
    
    Cannot read termcap database;
    using dumb terminal settings.
    alanjui=# \q
    
    alanjui at Srv-01 in [~]   
    10:53:43 $ 


----------
## 在正式資料庫伺服器建立資料庫及管理員

在正式環境的 PostgreSQL ，建立資料庫，並指派資料庫之管理員帳號。

**(1) Change the user to postgres :**

    su - postgres

**(2) Create User for Postgres**

    $ createuser testuser

**(3) Create Database**

    $ createdb testdb

**(4) Access the postgres Shell**

    psql ( enter the password for postgressql)

**(5) Provide the privileges to the postgres user**

    $ alter user testuser with encrypted password 'qwerty';
    $ grant all privileges on database testdb to testuser;


----------
## 在開發資料庫伺服器建立資料庫及管理員

在開發環境用 PostgreSQL 伺服器，建立資料庫及使用者帳號。開發環境的 PostgreSQL ，系以 Docker Image 架設而成。

進入  **psql  shell**

    docker ps
    docker run -it --rm --link psql-db:postgres postgres psql -h postgres -U postgres

**建立資料庫**

    CREATE DATABASE [Database]

**建立使用者帳號**

    CREATE USER [User] WITH PASSWORD [Password];

**指派資料庫的管理員**

    GRANT ALL PRIVILEGES ON DATABASE [Database] to [User];

**Revoke privileges from a user**

    REVOKE ALL PRIVILEGES ON [Database] FROM [User|readonly];

**刪除使用者帳號**

    DROP USER [User|readonly];



    GRANT ALL ON SEQUENCE public.pups_id_seq TO webapp WITH GRANT OPTION;
    GRANT ALL ON TABLE public.pups TO webapp WITH GRANT OPTION;

操作範例：

    $ docker run -it --rm --link psql-db:postgres postgres psql -h postgres -U postgres
    Password for user postgres: 
    psql (10.4 (Debian 10.4-2.pgdg90+1))
    Type "help" for help.
    
    postgres=#
    ...
    postgres=# create database django2_helloworld_qa;
    CREATE DATABASE
    postgres=# create user webapp with password 'Passw0rd';
    CREATE ROLE
    postgres=# grant all privileges on database django2_helloworld_qa to webapp;
    GRANT
    postgres=# \q



----------


## Import CSV 檔案

以下之操作，透過 pgAdmin 4 V2 的 Query Tool 執行

（1）**先建立 Table**

    CREATE TABLE persons
    (
      id serial NOT NULL,
      first_name character varying(50),
      last_name character varying(50),
      dob date,
      email character varying(255),
      CONSTRAINT persons_pkey PRIMARY KEY (id)
    )


**（2）匯入 CSV 資料檔**

    COPY persons(first_name, last_name, dob, email) 
    FROM '/Users/AlanJui/data/csv/persons.csv' DELIMITER ',' CSV HEADER;

【註】：  在 Query Tool 的認定： “~/data” 不等同 “/Users/AlanJui/data” ，所以檔案的路徑不能簡寫成 “~/data/csv/persons.csv” 。

參考： http://www.postgresqltutorial.com/import-csv-file-into-posgresql-table/



## 自 Table 匯出成 csv 檔案
    copy public.persons (first_name, last_name, dob, email) 
    TO '/Users/AlanJui/data/csv/persons_out.csv' CSV HEADER;

參考： http://www.postgresqltutorial.com/export-postgresql-table-to-csv-file/

在「終端機」使用下列指令：

    AlanJui at MacBook-Pro.local in [/usr/local]
    19:17:18 $ psql --command "copy public.persons (first_name, last_name, dob, email) TO '/Users/AlanJui/data/csv/persons_out.csv' CSV HEADER;"
    COPY 3
    
    AlanJui at MacBook-Pro.local in [/usr/local]
    19:18:11 $ cat ~/data/csv/persons_out.csv
    first_name,last_name,dob,email
    Alan, Jui,1960-09-25, alanjui.1960@gmail.com
    Stacy, Wu,1967-08-18, stacywu88@gmail.com
    Amos, Jui,2004-06-04, juchuling@gmail.com



----------
## Create Database


    CREATE DATABASE learning
        WITH 
        OWNER = alanjui
        ENCODING = 'UTF8'
        CONNECTION LIMIT = -1;




----------


# FAQ
## 無法連上 PostgreSQL Server
![](https://d2mxuefqeaa7sj.cloudfront.net/s_B5D84C4CD091B402741E9B2DC97DB9F649A1F2200CF14975E381CC7C9BCE25F5_1500778899268_image.png)


Unable to connect to server:

FATAL: no pg_hba.conf entry for host "192.168.66.110", user "postgres", database "postgres", SSL off


----------

上述問題係 PostgreSQL 尚未設定成允許 Remote 連線及條件。

（1）檢查設定檔 `postgresql.conf` ，確定任何一個 IP ，都可發出連線要求：

    listen_addresses = '*'

（2）檢查設定檔 `pg_hba.conf` ，確定已設定可供連線的 Host 、資料庫、使用者、IP、身份驗證法

    # TYPE  DATABASE        USER            ADDRESS                 METHOD
    
    # "local" is for Unix domain socket connections only
    local   all             all                                     trust
    # IPv4 local connections:
    host    all             all             127.0.0.1/32            trust
    # IPv6 local connections:
    host    all             all             ::1/128                 trust
    
    host    all             all             192.168.66.0/24         md5
    host    all             all             192.168.66.110/32       trust
    #host    all             all             0.0.0.0/0               md5 

（3）重新啟動 PostgreSQL Service


    $ service postgresql-9.6 restart
----------


## 無法進行 DB Query

得到錯誤訊息：

    Error: permission denied for relation pups at Connection.parseE ….

使用 pgAdmin 4 (V2) 在 psql shell (非在 Query Tools） 進行如下設定：

    CREATE USER readonly  WITH ENCRYPTED PASSWORD 'readonly';
    GRANT USAGE ON SCHEMA public to readonly;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO readonly;
    
    -- repeat code below for each database:
    
    GRANT CONNECT ON DATABASE puppies to readonly;
    \c puppies
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO readonly; --- this grants privileges on new tables generated in new database "puppies"
    GRANT USAGE ON SCHEMA public to readonly; 
    GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO readonly;
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;


----------


## Docker Compose and Django

有時候，在 docker compose 中的 db 被玩壞了， ./manage.py migrate 再也無法正常運作之時，可以透過以下的方式重建 Database: postgres 。

**(1) 清除所有 migrations**
執行以下指令之前，先將「目錄」選在 <Project Rooot> 目錄。

    $ find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
    $ find . -path "*/migrations/*.pyc"  -delete

**(2) 進入 docker-compose 中的 db container**

    $ docker-copose up
    $ docker-compose exec db bash

**(3) 刪除 Database: postgres**

    $ dropdb -h localhost -p 5432 -U postgres postgres

**(4) 重建 Database: postgres**

    $ createdb -h localhost -p 5432 -U postgres postgres

**(5) 驗證**

    $ psql -h localhost -p 5432 -U postgres
    postgres=# \l
                                     List of databases
       Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges
    -----------+----------+----------+------------+------------+-----------------------
     postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
     template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
               |          |          |            |            | postgres=CTc/postgres
     template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
               |          |          |            |            | postgres=CTc/postgres
    (3 rows)
    
    postgres=#\q
    


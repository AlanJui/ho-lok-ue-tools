# PgSQL + PgAdmin4

# 使用 Homebrew 安裝
    $ brew install postgresql


    $ brew uninstall postgresql



## 使用 Docker Image
    $ docker pull postgres:latest



    $ docker run -d -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password123 --name my-pg-sql -p 5432:5432 --rm postgres



## Change Password for postgres user
    su - postgres
    psql
    passwd
    
    \password
    exit



    su - "-c psql" postgres


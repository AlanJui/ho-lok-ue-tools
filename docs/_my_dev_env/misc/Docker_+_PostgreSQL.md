# Docker + PostgreSQL


# 啟動Web Server
    $ docker container run -p 9999:80 --name web-server --rm nginx:latest

有Volume

    $ docker container run -p 9999:80 --name web-server --rm -v ~/workspace/docker/WatchUsBuild-NodeAppWithDocker/nginx/html:/usr/share/nginx/html nginx:latest


# 停止Web Server
    $ docker stop web-server



# 在Web Server中使用Shell工作
    $ docker exec -it web-server /bin/bash



# NGIX目錄
    /usr/share/nginx/html/



----------


# 自Dockerfile建置自己需要的Docker Image
    $ docker build -t web-server .


# 執行自建的Docker Image
    $ docker container run --name web-server --rm -p 9999:80 web-server:latest



----------


# 查詢Docker所使用的網路環境
    $ docker network inspect bridge



----------


# PostgreSQL
    $ docker container run --name node-db --rm -p 9000:5432 -v ~/workspace/docker/WatchUsBuild-NodeAppWithDocker/postgres/data:/var/lib/postgresql/data node-db:latest


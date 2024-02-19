# postgres for docker



# docker 指令集



## docker run



    docker run --help
    
    Usage:        docker run \[OPTIONS] IMAGE [COMMAND\] [ARG...]
    Options:
      -d, --detach                         Run container in background and print container ID
      -e, --env list                       Set environment variables
          --name string                    Assign a name to the container



    docker run --name some-postgres -e POSTGRES_PASSWORD=Passw0rd -d postgres



    docker ps
    CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS               NAMES
    aa20cd13cc2a        postgres            "docker-entrypoint.s…"   About a minute ago   Up About a minute   5432/tcp            some-postgres



## docker exec



    docker exec --help
    
    Usage:        docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
    
    Run a command in a running container
    
    Options:
      -d, --detach               Detached mode: run command in the background
          --detach-keys string   Override the key sequence for detaching a container
      -e, --env list             Set environment variables
      -i, --interactive          Keep STDIN open even if not attached
          --privileged           Give extended privileges to the command
      -t, --tty                  Allocate a pseudo-TTY
      -u, --user string          Username or UID (format: <name|uid>[:<group|gid>])
      -w, --workdir string       Working directory inside the container


以下指令示範，將 Host 自 db 改成 localhost 亦行


    # docker exec -it aa2 /bin/bash
    docker exec -it some-postgres /bin/bashp
    root@aa20cd13cc2a:/# su - postgres
    postgres@aa20cd13cc2a:~$ psql -h db -U postgres -W
    Password:
    psql (12.2 (Debian 12.2-2.pgdg100+1))
    Type "help" for help.
    
    postgres=# postgres=# \l
     postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
     template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
               |          |          |            |            | postgres=CTc/postgres
     template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
               |          |          |            |            | postgres=CTc/postgres
    
    postgres=# \c postgres
    Password for user postgres:
    You are now connected to database "postgres" as user "postgres".
    postgres=# \dt
    Did not find any relations.
    postgres=# \dt
    Did not find any relations.
    postgres=# CREATE TABLE leads (id INTEGER PRIMARY KEY, name VARCHAR);
    CREATE TABLE
    postgres=# \dt
     public | leads | table | postgres
    
    postgres=# INSERT INTO leads(id, name) VALUES (1, 'AlanJui');
    INSERT 0 1
    
    postgres=# select * from leads;
      1 | AlanJui
    
    postgres=# \dt
             List of relations
     Schema | Name  | Type  |  Owner
    --------+-------+-------+----------
     public | leads | table | postgres
    (1 row)
    
    postgres=# \q
    postgres@aa20cd13cc2a:~$ exit
    logout
    root@aa20cd13cc2a:/# exit
    exit
    ～/workspace/docker/postgres$ 




## docker start


    $ docker start aa2
    aa2
    
    $ docker ps
    CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
    aa20cd13cc2a        postgres            "docker-entrypoint.s…"   24 minutes ago      Up 14 seconds       5432/tcp            some-postgres




# Nginx



## Nginx Log

https://docs.splunk.com/Documentation/AddOns/released/NGINX/Setupv2
Nginx Access Log 與 Error Log 其設定，定義於 nginx.conf 設定檔中。


/etc/nginx/nginx.conf

    user  nginx;
    worker_processes  1;
    
    error_log  /var/log/nginx/error.log warn;
    pid        /var/run/nginx.pid;
    
    
    events {
        worker_connections  1024;
    }
    
    
    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;
    
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
    
        access_log  /var/log/nginx/access.log  main;
    
        sendfile        on;
        #tcp_nopush     on;
    
        keepalive_timeout  65;
    
        #gzip  on;
    
        include /etc/nginx/conf.d/*.conf;
    }
    



## Web Site 設定（default.conf）

/etc/nginx/conf.d/default.conf

    server {
        listen       80;
        server_name  localhost;
    
        #charset koi8-r;
        #access_log  /var/log/nginx/host.access.log  main;
    
        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }
    
        #error_page  404              /404.html;
    
        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
        }
    
        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}
    
        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}
    
        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }




/etc/nginx/nginx.conf


    user  nginx;
    worker_processes  1;
    
    error_log  /var/log/nginx/error.log warn;
    pid        /var/run/nginx.pid;
    
    
    events {
        worker_connections  1024;
    }
    
    
    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;
    
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
    
        access_log  /var/log/nginx/access.log  main;
    
        sendfile        on;
        #tcp_nopush     on;
    
        keepalive_timeout  65;
    
        #gzip  on;
    
        #include /etc/nginx/conf.d/*.conf;
        server {
            listen       80;
            server_name  localhost;
        
            #charset koi8-r;
            #access_log  /var/log/nginx/host.access.log  main;
        
            location / {
                root   /usr/share/nginx/html;
                index  index.html index.htm;
            }
        
            #error_page  404              /404.html;
        
            # redirect server error pages to the static page /50x.html
            #
            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   /usr/share/nginx/html;
            }
        }
    }



config/nginx/Dockerfile

    FROM      nginx
    
    RUN       rm -f /etc/nginx/conf.d/default.conf
    COPY      conf.d/web_app.conf /etc/nginx/conf.d/web_app.conf
    
    COPY      static_collected /usr/share/nginx/html/static
    
    RUN       ls -l /etc/nginx/nginx.conf
    RUN       ls -l /etc/nginx/conf.d
    RUN       ls -l /usr/share/nginx/html/static



    docker build --tag my-nginx config/nginx/Dockerfile



    docker run --rm --name my-proxy -d my-nginx
    
    docker ps
    CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS              PORTS                    NAMES
    229a8be99d61        my-nginx                "nginx -g 'daemon of…"   4 seconds ago       Up 3 seconds        80/tcp                   my-proxy



    docker exec -it my-proxy /bin/bash
    
    root@229a8be99d61:/# ls -al /usr/share/nginx/html
    total 16
    drwxr-xr-x 2 root root 4096 Apr 23 13:02 .
    drwxr-xr-x 3 root root 4096 Apr 23 13:02 ..
    -rw-r--r-- 1 root root  494 Apr 14 14:19 50x.html
    -rw-r--r-- 1 root root  612 Apr 14 14:19 index.html
    
    root@229a8be99d61:/# cat /etc/nginx/nginx.conf | more



![](http://127.0.0.1/static/admin/img/search.svg)


[http://127.0.0.1/static/admin/img/search.svg](http://127.0.0.1/static/admin/img/search.svg)
http://127.0.0.1/static/log_msg/test.png




    docker logs --tail="all" my-proxy



    docker-compose logs web
    Attaching to docker-compose-02_web_1
    web_1      | \[2020-05-05 02:40:48 +0000\] [1] [INFO] Starting gunicorn 20.0.4
    web_1      | \[2020-05-05 02:40:48 +0000\] [1] [INFO] Listening at: http://0.0.0.0:8000 (1)
    web_1      | \[2020-05-05 02:40:48 +0000\] [1] [INFO] Using worker: sync
    web_1      | \[2020-05-05 02:40:48 +0000\] [7] [INFO] Booting worker with pid: 7


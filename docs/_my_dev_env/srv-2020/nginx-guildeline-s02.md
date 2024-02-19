---
sidebar: auto
---

# 在 Nginx 啟用 HTTPS 通信協定

## 摘要

說明如何在 Nginx ，啟用 HTTPS 通信協定。

## 作業程序

### （1）安裝「憑證用套件」

```
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install python-certbot-nginx
s sudo cerbot --nginx -d ccc99.tw -d www.ccc99.tw
```

📺

```
$ sudo cerbot --nginx -d ccc99.tw -d www.ccc99.tw
sudo: cerbot: command not found
juzhengzhong@SRV-01:~$ sudo certbot --nginx -d ccc99.tw -d www.ccc99.tw
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel): alanjui.1960@gmail.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(A)gree/(C)ancel: a

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about our work
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: n
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for ccc99.tw
http-01 challenge for www.ccc99.tw
Waiting for verification...
Cleaning up challenges
Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/django2_helloworld.conf
Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/django2_helloworld.conf

Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
Redirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/django2_helloworld.conf
Redirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/django2_helloworld.conf

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Congratulations! You have successfully enabled https://ccc99.tw and
https://www.ccc99.tw

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=ccc99.tw
https://www.ssllabs.com/ssltest/analyze.html?d=www.ccc99.tw
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/ccc99.tw/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/ccc99.tw/privkey.pem
   Your cert will expire on 2019-07-01. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

### （2）虛擬網站啟用 HTTPS 通信協定

設定 nginx 虛擬網站，使之與「憑證」結合，以便啟用 HTTPS 通信協定。

```
{
    # configuration of the server
    server {
        # the port your site will be served on
        # the domain name it will serve for
        #server_name     .example.com; # substitute your machine's Ip address or FQDN
        #server_name     192.168.66.10;
        server_name     ccc99.tw www.ccc99.tw;
        charset         utf8-8;

        # max upload size
        client_max_body_size 75M;  # adjust to taste

        location = /favicon.ico {
            access_log      off;
            log_not_found   off;
        }

        # Django media
        location /media {
            # your Django project's media files - amend as required
            #root   /home/juzhengzhong/workspace/django2_helloworld;
            alias   /home/juzhengzhong/workspace/django2_helloworld/media;
        }

        location /static {
            alias   /home/juzhengzhong/workspace/django2_helloworld/web_site/staticfiles;
        }

        # Finally, send all non-media requests to the Django server
        location / {
            include     uwsgi_params; # should be located in /etc/nginx/
            uwsgi_pass  unix:/home/juzhengzhong/uwsgi/django2_helloworld.sock;
        }

        listen 443 ssl; # managed by Certbot
        ssl_certificate /etc/letsencrypt/live/ccc99.tw/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/ccc99.tw/privkey.pem; # managed by Certbot
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
    }

    server {
        if ($host = www.ccc99.tw) {
            return 301 https://$host$request_uri;
        } # managed by Certbot


        if ($host = ccc99.tw) {
            return 301 https://$host$request_uri;
        } # managed by Certbot


        listen          80;
        server_name     ccc99.tw www.ccc99.tw;
        return 404; # managed by Certbot
    }
}
```

### （3）測試 HTTPS 已能正常運作

透過 SSL Server Test (opens new window)網站，測試 設定結果正確無誤，Web Server 已啟用了 HTTPS 通信協定。

## 常見作業

### 常用服務管理指令

```
sudo service nginx status
sudo service nginx stop
sudo service nginx start
```

### 驗證設定檔語法正確

建立或變更 nginx.conf 、虛擬網站設定檔後，可使用如下指令驗證有無「設定語法」的 錯誤。

```
sudo nginx -t
```

📺

```
$ sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```


## 問題診斷與狀況排除

N/A

## 參考資料

如何運用 Nginx 、uWSGI 服務，搭建 Django 應用系統之參考資料。

- [Setting up Django and your web server with uWSGI and nginx](https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html?fbclid=IwAR2NF6La2CNVljdTPr79dg4zy9S91e0pkyHqp8zTkj0DihpLrGoL04-lyzc)

- [How To Set Up uWSGI and Nginx to Serve Python Apps on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-set-up-uwsgi-and-nginx-to-serve-python-apps-on-centos-7)

如何運用作業系統所提供之功能，令 Django 應用系統可於「開機作業」完成後，便能
自動啟動，開始提供服務。

- [How to use /etc/rc.local at boot](https://linuxhint.com/use-etc-rc-local-boot/)

如何在區域網路，快速建置 DNS 服務，令 Web Client 可透過 FQDN （非 IP 之 Host
Name），使用 Django 應用系統所提供之服務。

- [Install and Configure Dnsmasq on Ubuntu 22.04|20.04|18.04](https://computingforgeeks.com/install-and-configure-dnsmasq-on-ubuntu/)

### 設定 Nginx 作業環境

設定 Nginx 在作業系統的執行環境。

編輯設定檔。

```
$ sudo nano /etc/nginx/nginx.conf
```

nginx.conf 設定：


```
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 768;
    # multi_accept on;
}

http {
    ##
    # Basic Settings
    ##

    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    # server_tokens off;

    server_names_hash_bucket_size 64;
    # server_name_in_redirect off;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    ##
    # SSL Settings
    ##

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
    ssl_prefer_server_ciphers on;

    ##
    # Logging Settings
    ##

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    ##
    # Gzip Settings
    ##

    gzip on;
    gzip_disable "msie6";

    # gzip_vary on;
    # gzip_proxied any;
    # gzip_comp_level 6;
    # gzip_buffers 16 8k;
    # gzip_http_version 1.1;
    # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    ##
    # Virtual Host Configs
    ##

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
```

驗證設定檔內容無誤

```
sudo nginx -t
```

#app1.ccc.tw.local 之 nginx 設定檔
/etc/nginx/sites-available/app1.ccc.tw.local

#在 Ubuntu 18.04 安裝 Nginx
How to Install Nginx on Ubuntu 18.04(opens new window)



/etc/nginx/sites-available/app1.ccc.tw.local
```
upstream django {
	# server 127.0.0.1:8001;
    server unix:///home/alanjui/workspace/apps/django-v4/mysite.sock;
}

server {
	listen 8000;

	server_name 	app1.ccc.tw.local;
	charset		utf-8;

	# max upload size
	client_max_body_size	75M;

	# Django media
	location /media {
		alias	/home/alanjui/workspace/apps/django-v4/media;
	}

	location /static {
		alias	/home/alanjui/workspace/apps/django-v4/static_collected;
	}

	location / {
		uwsgi_pass	django;
		include		/home/alanjui/workspace/apps/django-v4/uwsgi_params;
	}

	# root 		/var/www/app1.ccc.tw.local;
	# index 		index.html;
	# access_log  	/var/log/nginx/app1-ccc-tw-local.log;
	# error_log   	/var/log/nginx/app1-ccc-tw-local-error.log;

	# location / {
	# 	try_files $uri $uri/ =404;
	# }
}
```


/home/alanjui/workspace/apps/django-v4/mysite_uwsgi.ini

```
[uwsgi]

# Django-related settings
# the base directory
chdir               = /home/alanjui/workspace/apps/django-v4
# Django's wsgi file
module              = mysite.wsgi
# the virtualenv
home                = /home/alanjui/.pyenv/versions/3.10.0/envs/django-4.0/

# process-related settings
# master
master              = true
# maximum number of worker processes
processes           = 10
# the socket
socket              = /home/alanjui/workspace/apps/django-v4/mysite.sock
# ... with appropriate permissions
chmod-socket        = 666
# clear environment on exit
vacuum              = true
```

/etc/systemd/system/app1.service

```
[Unit]
Description=uWSGI instance to serve app1.ccc.tw.local

[Service]
ExecStartPre=-/usr/bin/bash -c 'mkdir -p /run/uwsgi; chown www-data:www-data /run/uwsgi'
ExecStart=/usr/bin/bash -c 'cd /home/alanjui/workspace/apps/django-v4; \
/home/alanjui/.pyenv/bin/pyenv activate django-v4; \
/home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini'

[Install]
WantedBy=multi-user.target
```

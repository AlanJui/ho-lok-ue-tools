(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{557:function(s,n,a){"use strict";a.r(n);var e=a(10),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"在-nginx-啟用-https-通信協定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-nginx-啟用-https-通信協定"}},[s._v("#")]),s._v(" 在 Nginx 啟用 HTTPS 通信協定")]),s._v(" "),n("h2",{attrs:{id:"摘要"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[s._v("#")]),s._v(" 摘要")]),s._v(" "),n("p",[s._v("說明如何在 Nginx ，啟用 HTTPS 通信協定。")]),s._v(" "),n("h2",{attrs:{id:"作業程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作業程序"}},[s._v("#")]),s._v(" 作業程序")]),s._v(" "),n("h3",{attrs:{id:"_1-安裝「憑證用套件」"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安裝「憑證用套件」"}},[s._v("#")]),s._v(" （1）安裝「憑證用套件」")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sudo add-apt-repository ppa:certbot/certbot\n$ sudo apt update\n$ sudo apt upgrade\n$ sudo apt install python-certbot-nginx\ns sudo cerbot --nginx -d ccc99.tw -d www.ccc99.tw\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("📺")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sudo cerbot --nginx -d ccc99.tw -d www.ccc99.tw\nsudo: cerbot: command not found\njuzhengzhong@SRV-01:~$ sudo certbot --nginx -d ccc99.tw -d www.ccc99.tw\nSaving debug log to /var/log/letsencrypt/letsencrypt.log\nPlugins selected: Authenticator nginx, Installer nginx\nEnter email address (used for urgent renewal and security notices) (Enter 'c' to\ncancel): alanjui.1960@gmail.com\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nPlease read the Terms of Service at\nhttps://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must\nagree in order to register with the ACME server at\nhttps://acme-v02.api.letsencrypt.org/directory\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n(A)gree/(C)ancel: a\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nWould you be willing to share your email address with the Electronic Frontier\nFoundation, a founding partner of the Let's Encrypt project and the non-profit\norganization that develops Certbot? We'd like to send you email about our work\nencrypting the web, EFF news, campaigns, and ways to support digital freedom.\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n(Y)es/(N)o: n\nObtaining a new certificate\nPerforming the following challenges:\nhttp-01 challenge for ccc99.tw\nhttp-01 challenge for www.ccc99.tw\nWaiting for verification...\nCleaning up challenges\nDeploying Certificate to VirtualHost /etc/nginx/sites-enabled/django2_helloworld.conf\nDeploying Certificate to VirtualHost /etc/nginx/sites-enabled/django2_helloworld.conf\n\nPlease choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n1: No redirect - Make no further changes to the webserver configuration.\n2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for\nnew sites, or if you're confident your site works on HTTPS. You can undo this\nchange by editing your web server's configuration.\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nSelect the appropriate number [1-2] then [enter] (press 'c' to cancel): 2\nRedirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/django2_helloworld.conf\nRedirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/django2_helloworld.conf\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nCongratulations! You have successfully enabled https://ccc99.tw and\nhttps://www.ccc99.tw\n\nYou should test your configuration at:\nhttps://www.ssllabs.com/ssltest/analyze.html?d=ccc99.tw\nhttps://www.ssllabs.com/ssltest/analyze.html?d=www.ccc99.tw\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n\nIMPORTANT NOTES:\n - Congratulations! Your certificate and chain have been saved at:\n   /etc/letsencrypt/live/ccc99.tw/fullchain.pem\n   Your key file has been saved at:\n   /etc/letsencrypt/live/ccc99.tw/privkey.pem\n   Your cert will expire on 2019-07-01. To obtain a new or tweaked\n   version of this certificate in the future, simply run certbot again\n   with the \"certonly\" option. To non-interactively renew *all* of\n   your certificates, run \"certbot renew\"\n - Your account credentials have been saved in your Certbot\n   configuration directory at /etc/letsencrypt. You should make a\n   secure backup of this folder now. This configuration directory will\n   also contain certificates and private keys obtained by Certbot so\n   making regular backups of this folder is ideal.\n - If you like Certbot, please consider supporting our work by:\n\n   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate\n   Donating to EFF:                    https://eff.org/donate-le\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br")])]),n("h3",{attrs:{id:"_2-虛擬網站啟用-https-通信協定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-虛擬網站啟用-https-通信協定"}},[s._v("#")]),s._v(" （2）虛擬網站啟用 HTTPS 通信協定")]),s._v(" "),n("p",[s._v("設定 nginx 虛擬網站，使之與「憑證」結合，以便啟用 HTTPS 通信協定。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\n    # configuration of the server\n    server {\n        # the port your site will be served on\n        # the domain name it will serve for\n        #server_name     .example.com; # substitute your machine's Ip address or FQDN\n        #server_name     192.168.66.10;\n        server_name     ccc99.tw www.ccc99.tw;\n        charset         utf8-8;\n\n        # max upload size\n        client_max_body_size 75M;  # adjust to taste\n\n        location = /favicon.ico {\n            access_log      off;\n            log_not_found   off;\n        }\n\n        # Django media\n        location /media {\n            # your Django project's media files - amend as required\n            #root   /home/juzhengzhong/workspace/django2_helloworld;\n            alias   /home/juzhengzhong/workspace/django2_helloworld/media;\n        }\n\n        location /static {\n            alias   /home/juzhengzhong/workspace/django2_helloworld/web_site/staticfiles;\n        }\n\n        # Finally, send all non-media requests to the Django server\n        location / {\n            include     uwsgi_params; # should be located in /etc/nginx/\n            uwsgi_pass  unix:/home/juzhengzhong/uwsgi/django2_helloworld.sock;\n        }\n\n        listen 443 ssl; # managed by Certbot\n        ssl_certificate /etc/letsencrypt/live/ccc99.tw/fullchain.pem; # managed by Certbot\n        ssl_certificate_key /etc/letsencrypt/live/ccc99.tw/privkey.pem; # managed by Certbot\n        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot\n        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot\n    }\n\n    server {\n        if ($host = www.ccc99.tw) {\n            return 301 https://$host$request_uri;\n        } # managed by Certbot\n\n\n        if ($host = ccc99.tw) {\n            return 301 https://$host$request_uri;\n        } # managed by Certbot\n\n\n        listen          80;\n        server_name     ccc99.tw www.ccc99.tw;\n        return 404; # managed by Certbot\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br")])]),n("h3",{attrs:{id:"_3-測試-https-已能正常運作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-測試-https-已能正常運作"}},[s._v("#")]),s._v(" （3）測試 HTTPS 已能正常運作")]),s._v(" "),n("p",[s._v("透過 SSL Server Test (opens new window)網站，測試 設定結果正確無誤，Web Server 已啟用了 HTTPS 通信協定。")]),s._v(" "),n("h2",{attrs:{id:"常見作業"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常見作業"}},[s._v("#")]),s._v(" 常見作業")]),s._v(" "),n("h3",{attrs:{id:"常用服務管理指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用服務管理指令"}},[s._v("#")]),s._v(" 常用服務管理指令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo service nginx status\nsudo service nginx stop\nsudo service nginx start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"驗證設定檔語法正確"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#驗證設定檔語法正確"}},[s._v("#")]),s._v(" 驗證設定檔語法正確")]),s._v(" "),n("p",[s._v("建立或變更 nginx.conf 、虛擬網站設定檔後，可使用如下指令驗證有無「設定語法」的 錯誤。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo nginx -t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("📺")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sudo nginx -t\nnginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"問題診斷與狀況排除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#問題診斷與狀況排除"}},[s._v("#")]),s._v(" 問題診斷與狀況排除")]),s._v(" "),n("p",[s._v("N/A")]),s._v(" "),n("h2",{attrs:{id:"參考資料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[s._v("#")]),s._v(" 參考資料")]),s._v(" "),n("p",[s._v("如何運用 Nginx 、uWSGI 服務，搭建 Django 應用系統之參考資料。")]),s._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html?fbclid=IwAR2NF6La2CNVljdTPr79dg4zy9S91e0pkyHqp8zTkj0DihpLrGoL04-lyzc",target:"_blank",rel:"noopener noreferrer"}},[s._v("Setting up Django and your web server with uWSGI and nginx"),n("OutboundLink")],1)])]),s._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-uwsgi-and-nginx-to-serve-python-apps-on-centos-7",target:"_blank",rel:"noopener noreferrer"}},[s._v("How To Set Up uWSGI and Nginx to Serve Python Apps on CentOS 7"),n("OutboundLink")],1)])])]),s._v(" "),n("p",[s._v("如何運用作業系統所提供之功能，令 Django 應用系統可於「開機作業」完成後，便能\n自動啟動，開始提供服務。")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://linuxhint.com/use-etc-rc-local-boot/",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to use /etc/rc.local at boot"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("如何在區域網路，快速建置 DNS 服務，令 Web Client 可透過 FQDN （非 IP 之 Host\nName），使用 Django 應用系統所提供之服務。")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://computingforgeeks.com/install-and-configure-dnsmasq-on-ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install and Configure Dnsmasq on Ubuntu 22.04|20.04|18.04"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"設定-nginx-作業環境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#設定-nginx-作業環境"}},[s._v("#")]),s._v(" 設定 Nginx 作業環境")]),s._v(" "),n("p",[s._v("設定 Nginx 在作業系統的執行環境。")]),s._v(" "),n("p",[s._v("編輯設定檔。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sudo nano /etc/nginx/nginx.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("nginx.conf 設定：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('user www-data;\nworker_processes auto;\npid /run/nginx.pid;\ninclude /etc/nginx/modules-enabled/*.conf;\n\nevents {\n    worker_connections 768;\n    # multi_accept on;\n}\n\nhttp {\n    ##\n    # Basic Settings\n    ##\n\n    sendfile on;\n    tcp_nopush on;\n    tcp_nodelay on;\n    keepalive_timeout 65;\n    types_hash_max_size 2048;\n    # server_tokens off;\n\n    server_names_hash_bucket_size 64;\n    # server_name_in_redirect off;\n\n    include /etc/nginx/mime.types;\n    default_type application/octet-stream;\n\n    ##\n    # SSL Settings\n    ##\n\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE\n    ssl_prefer_server_ciphers on;\n\n    ##\n    # Logging Settings\n    ##\n\n    access_log /var/log/nginx/access.log;\n    error_log /var/log/nginx/error.log;\n\n    ##\n    # Gzip Settings\n    ##\n\n    gzip on;\n    gzip_disable "msie6";\n\n    # gzip_vary on;\n    # gzip_proxied any;\n    # gzip_comp_level 6;\n    # gzip_buffers 16 8k;\n    # gzip_http_version 1.1;\n    # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n\n    ##\n    # Virtual Host Configs\n    ##\n\n    include /etc/nginx/conf.d/*.conf;\n    include /etc/nginx/sites-enabled/*;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br")])]),n("p",[s._v("驗證設定檔內容無誤")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo nginx -t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("#app1.ccc.tw.local 之 nginx 設定檔\n/etc/nginx/sites-available/app1.ccc.tw.local")]),s._v(" "),n("p",[s._v("#在 Ubuntu 18.04 安裝 Nginx\nHow to Install Nginx on Ubuntu 18.04(opens new window)")]),s._v(" "),n("p",[s._v("/etc/nginx/sites-available/app1.ccc.tw.local")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("upstream django {\n\t# server 127.0.0.1:8001;\n    server unix:///home/alanjui/workspace/apps/django-v4/mysite.sock;\n}\n\nserver {\n\tlisten 8000;\n\n\tserver_name \tapp1.ccc.tw.local;\n\tcharset\t\tutf-8;\n\n\t# max upload size\n\tclient_max_body_size\t75M;\n\n\t# Django media\n\tlocation /media {\n\t\talias\t/home/alanjui/workspace/apps/django-v4/media;\n\t}\n\n\tlocation /static {\n\t\talias\t/home/alanjui/workspace/apps/django-v4/static_collected;\n\t}\n\n\tlocation / {\n\t\tuwsgi_pass\tdjango;\n\t\tinclude\t\t/home/alanjui/workspace/apps/django-v4/uwsgi_params;\n\t}\n\n\t# root \t\t/var/www/app1.ccc.tw.local;\n\t# index \t\tindex.html;\n\t# access_log  \t/var/log/nginx/app1-ccc-tw-local.log;\n\t# error_log   \t/var/log/nginx/app1-ccc-tw-local-error.log;\n\n\t# location / {\n\t# \ttry_files $uri $uri/ =404;\n\t# }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])]),n("p",[s._v("/home/alanjui/workspace/apps/django-v4/mysite_uwsgi.ini")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[uwsgi]\n\n# Django-related settings\n# the base directory\nchdir               = /home/alanjui/workspace/apps/django-v4\n# Django's wsgi file\nmodule              = mysite.wsgi\n# the virtualenv\nhome                = /home/alanjui/.pyenv/versions/3.10.0/envs/django-4.0/\n\n# process-related settings\n# master\nmaster              = true\n# maximum number of worker processes\nprocesses           = 10\n# the socket\nsocket              = /home/alanjui/workspace/apps/django-v4/mysite.sock\n# ... with appropriate permissions\nchmod-socket        = 666\n# clear environment on exit\nvacuum              = true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("/etc/systemd/system/app1.service")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[Unit]\nDescription=uWSGI instance to serve app1.ccc.tw.local\n\n[Service]\nExecStartPre=-/usr/bin/bash -c 'mkdir -p /run/uwsgi; chown www-data:www-data /run/uwsgi'\nExecStart=/usr/bin/bash -c 'cd /home/alanjui/workspace/apps/django-v4; \\\n/home/alanjui/.pyenv/bin/pyenv activate django-v4; \\\n/home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini'\n\n[Install]\nWantedBy=multi-user.target\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);
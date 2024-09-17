(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{389:function(s,n,a){"use strict";a.r(n);var e=a(10),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"在-ubuntu-建置-nginx-服務指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-ubuntu-建置-nginx-服務指引"}},[s._v("#")]),s._v(" 在 Ubuntu 建置 Nginx 服務指引")]),s._v(" "),n("h2",{attrs:{id:"摘要"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[s._v("#")]),s._v(" 摘要")]),s._v(" "),n("p",[s._v("如何在 Ubuntu 作業系統，建置 Nginx 服務，用以作為 HTTP Server\n，能針對 HTTP Request ，提供「靜態檔」下載服服務；或是 WSGI 介面，。\n將 HTTP Request 轉交 Application Server （如：Django App）處理。")]),s._v(" "),n("h2",{attrs:{id:"安裝作業"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝作業"}},[s._v("#")]),s._v(" 安裝作業")]),s._v(" "),n("p",[s._v("安裝 nginx 作為 HTTP Server。")]),s._v(" "),n("ol",[n("li",[s._v("安裝 nginx 套件。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo apt install nginx -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("驗證 nginx 服務已啟動。")])]),s._v(" "),n("ul",[n("li",[s._v("驗證服務已啟用，且能隨作業系統開機自動啟動")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("systemctl status nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("📺")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("alanjui@VB02-Ubuntu-2004:~$ systemctl status nginx\n● nginx.service - A high performance web server and a reverse proxy server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2021-03-26 14:30:00 CST; 1min 10s ago\n       Docs: man:nginx(8)\n   Main PID: 67493 (nginx)\n      Tasks: 3 (limit: 4653)\n     Memory: 4.8M\n     CGroup: /system.slice/nginx.service\n             ├─67493 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;\n             ├─67494 nginx: worker process\n             └─67495 nginx: worker process\n\n 3月 26 14:30:00 VB02-Ubuntu-2004 systemd[1]: Starting A high performance web server and a reverse proxy ser>\n 3月 26 14:30:00 VB02-Ubuntu-2004 systemd[1]: Started A high performance web server and a reverse proxy serv>\nlines 1-14/14 (END)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v("驗證 nginx 的 HTTP Server 已能正常運作")])]),s._v(" "),n("p",[s._v("使用 Web 瀏覽器，瀏覽如下網址，若能正常閱讀「網頁」內容，則表 HTTP Server 已能\n正常運作。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://[IP_Address]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"/assets/img/nginx/nginx_browse_test.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"建置虛擬網站"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建置虛擬網站"}},[s._v("#")]),s._v(" 建置虛擬網站")]),s._v(" "),n("p",[s._v("建置 nginx 虛擬網站。")]),s._v(" "),n("ol",[n("li",[s._v("建置「網站目錄」。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('sudo su\nmkdir /var/www/app.ccc.tw.local && cd $_\necho "app.ccc.tw.local Web Site" > index.html\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("套用 defaut 虛擬網站設定檔，建置 Django App 虛擬網站。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd /var/www/sites-available\ncp default app.ccc.tw.local\nvim  app.ccc.tw.local\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("🔖 app.ccc.tw.local:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n    listen 80;\n\n    server_name app.ccc.tw.local;\n\n    root /var/www/app.ccc.tw.local;\n    index index.html;\n\n    location / {\n    ¦   try_files $uri $uri/ =404;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("停用 Default 虛擬網站")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd  ./sites-enabled\nunlink default\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("啟用 Django App 虛擬網站")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ln -nfs ../sites-available/app.ccc.tw.local\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[s._v("檢驗目前的設定正確無誤。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("nginx -t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"6"}},[n("li",[s._v("重啟 nginx 服務。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("systemctl restart nginx\nsystemclt status nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"7"}},[n("li",[s._v("驗證 Django App 虛擬網站的 HTTP 服務已能正常運作。")])]),s._v(" "),n("p",[s._v("使用 Web 瀏覽器，瀏覽網址： http://app.ccc.tw.local/ 。若一切正常，應能於瀏覽器\n看到如下「內容」之網頁。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("app.ccc.tw.local Web Site\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"設定管理者帳號"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#設定管理者帳號"}},[s._v("#")]),s._v(" 設定管理者帳號")]),s._v(" "),n("p",[s._v("以下說明在作業系統環境，應建立之使用者帳號及群組。")]),s._v(" "),n("ol",[n("li",[s._v("新增管理者用使用者帳號，並設為 sudo 群組。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sudo adduser web-admin\n$ usermod -aG sudo web-admin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("將管理者帳號加入 www-data 群組")])]),s._v(" "),n("p",[s._v("先登出，再以「管理者帳號」登入。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sudo usermod -aG www-data $USER\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("驗證設定成功：")])]),s._v(" "),n("p",[s._v("先登出，再登入。然後執行以下指令，驗證管理者帳號屬：sudo、www-data 群組。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("groups\nid\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("📺")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("web-admin@VB02-Ubuntu-2004:~$ cat /etc/group | grep www-data\nwww-data:x:33:\n\nweb-admin@VB02-Ubuntu-2004:~$ groups\nweb-admin adm cdrom sudo dip www-data plugdev lpadmin lxd sambashare\n\nweb-admin@VB02-Ubuntu-2004:~$ id\n使用者id=1000(web-admin) id群組=1000(web-admin) 組=1000(web-admin),4(adm),24(cdrom),27(sudo),30(dip),33(www-data),46(plugdev),120(lpadmin),131(lxd),132(sambashare)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"啟用-https-通信協定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#啟用-https-通信協定"}},[s._v("#")]),s._v(" 啟用 HTTPS 通信協定")]),s._v(" "),n("h3",{attrs:{id:"安裝「憑證用套件」"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝「憑證用套件」"}},[s._v("#")]),s._v(" 安裝「憑證用套件」")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sudo add-apt-repository ppa:certbot/certbot\n$ sudo apt update\n$ sudo apt upgrade\n$ sudo apt install python-certbot-nginx\ns sudo cerbot --nginx -d ccc99.tw -d www.ccc99.tw\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("📺")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sudo cerbot --nginx -d ccc99.tw -d www.ccc99.tw\nsudo: cerbot: command not found\njuzhengzhong@SRV-01:~$ sudo certbot --nginx -d ccc99.tw -d www.ccc99.tw\nSaving debug log to /var/log/letsencrypt/letsencrypt.log\nPlugins selected: Authenticator nginx, Installer nginx\nEnter email address (used for urgent renewal and security notices) (Enter 'c' to\ncancel): alanjui.1960@gmail.com\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nPlease read the Terms of Service at\nhttps://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must\nagree in order to register with the ACME server at\nhttps://acme-v02.api.letsencrypt.org/directory\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n(A)gree/(C)ancel: a\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nWould you be willing to share your email address with the Electronic Frontier\nFoundation, a founding partner of the Let's Encrypt project and the non-profit\norganization that develops Certbot? We'd like to send you email about our work\nencrypting the web, EFF news, campaigns, and ways to support digital freedom.\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n(Y)es/(N)o: n\nObtaining a new certificate\nPerforming the following challenges:\nhttp-01 challenge for ccc99.tw\nhttp-01 challenge for www.ccc99.tw\nWaiting for verification...\nCleaning up challenges\nDeploying Certificate to VirtualHost /etc/nginx/sites-enabled/django2_helloworld.conf\nDeploying Certificate to VirtualHost /etc/nginx/sites-enabled/django2_helloworld.conf\n\nPlease choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n1: No redirect - Make no further changes to the webserver configuration.\n2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for\nnew sites, or if you're confident your site works on HTTPS. You can undo this\nchange by editing your web server's configuration.\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nSelect the appropriate number [1-2] then [enter] (press 'c' to cancel): 2\nRedirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/django2_helloworld.conf\nRedirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/django2_helloworld.conf\n\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nCongratulations! You have successfully enabled https://ccc99.tw and\nhttps://www.ccc99.tw\n\nYou should test your configuration at:\nhttps://www.ssllabs.com/ssltest/analyze.html?d=ccc99.tw\nhttps://www.ssllabs.com/ssltest/analyze.html?d=www.ccc99.tw\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n\nIMPORTANT NOTES:\n - Congratulations! Your certificate and chain have been saved at:\n   /etc/letsencrypt/live/ccc99.tw/fullchain.pem\n   Your key file has been saved at:\n   /etc/letsencrypt/live/ccc99.tw/privkey.pem\n   Your cert will expire on 2019-07-01. To obtain a new or tweaked\n   version of this certificate in the future, simply run certbot again\n   with the \"certonly\" option. To non-interactively renew *all* of\n   your certificates, run \"certbot renew\"\n - Your account credentials have been saved in your Certbot\n   configuration directory at /etc/letsencrypt. You should make a\n   secure backup of this folder now. This configuration directory will\n   also contain certificates and private keys obtained by Certbot so\n   making regular backups of this folder is ideal.\n - If you like Certbot, please consider supporting our work by:\n\n   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate\n   Donating to EFF:                    https://eff.org/donate-le\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br")])]),n("h3",{attrs:{id:"設定虛擬網站啟用-https-通信協定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#設定虛擬網站啟用-https-通信協定"}},[s._v("#")]),s._v(" 設定虛擬網站啟用 HTTPS 通信協定")]),s._v(" "),n("p",[s._v("設定 nginx 虛擬網站，使之與「憑證」結合，以便啟用 HTTPS 通信協定。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\n    # configuration of the server\n    server {\n        # the port your site will be served on\n        # the domain name it will serve for\n        #server_name     .example.com; # substitute your machine's Ip address or FQDN\n        #server_name     192.168.66.10;\n        server_name     ccc99.tw www.ccc99.tw;\n        charset         utf8-8;\n\n        # max upload size\n        client_max_body_size 75M;  # adjust to taste\n\n        location = /favicon.ico {\n            access_log      off;\n            log_not_found   off;\n        }\n\n        # Django media\n        location /media {\n            # your Django project's media files - amend as required\n            #root   /home/juzhengzhong/workspace/django2_helloworld;\n            alias   /home/juzhengzhong/workspace/django2_helloworld/media;\n        }\n\n        location /static {\n            alias   /home/juzhengzhong/workspace/django2_helloworld/web_site/staticfiles;\n        }\n\n        # Finally, send all non-media requests to the Django server\n        location / {\n            include     uwsgi_params; # should be located in /etc/nginx/\n            uwsgi_pass  unix:/home/juzhengzhong/uwsgi/django2_helloworld.sock;\n        }\n\n        listen 443 ssl; # managed by Certbot\n        ssl_certificate /etc/letsencrypt/live/ccc99.tw/fullchain.pem; # managed by Certbot\n        ssl_certificate_key /etc/letsencrypt/live/ccc99.tw/privkey.pem; # managed by Certbot\n        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot\n        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot\n    }\n\n    server {\n        if ($host = www.ccc99.tw) {\n            return 301 https://$host$request_uri;\n        } # managed by Certbot\n\n\n        if ($host = ccc99.tw) {\n            return 301 https://$host$request_uri;\n        } # managed by Certbot\n\n\n        listen          80;\n        server_name     ccc99.tw www.ccc99.tw;\n        return 404; # managed by Certbot\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br")])]),n("h3",{attrs:{id:"測試-https-已能正常運作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#測試-https-已能正常運作"}},[s._v("#")]),s._v(" 測試 HTTPS 已能正常運作")]),s._v(" "),n("p",[s._v("透過 "),n("a",{attrs:{href:"https://www.ssllabs.com/ssltest/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSL Server Test"),n("OutboundLink")],1),s._v(" 網站，測試\n設定結果正確無誤，Web Server 已啟用了 HTTPS 通信協定。")]),s._v(" "),n("h2",{attrs:{id:"常見作業"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常見作業"}},[s._v("#")]),s._v(" 常見作業")]),s._v(" "),n("h3",{attrs:{id:"常用服務管理指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用服務管理指令"}},[s._v("#")]),s._v(" 常用服務管理指令")]),s._v(" "),n("ul",[n("li",[s._v("sudo service nginx status")]),s._v(" "),n("li",[s._v("sudo service nginx stop")]),s._v(" "),n("li",[s._v("sudo service nginx start")])]),s._v(" "),n("h3",{attrs:{id:"驗證設定檔語法正確"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#驗證設定檔語法正確"}},[s._v("#")]),s._v(" 驗證設定檔語法正確")]),s._v(" "),n("p",[s._v("建立或變更 nginx.conf 、虛擬網站設定檔後，可使用如下指令驗證有無「設定語法」的\n錯誤。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo nginx -t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("📺")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sudo nginx -t\nnginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"問題診斷與狀況排除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#問題診斷與狀況排除"}},[s._v("#")]),s._v(" 問題診斷與狀況排除")]),s._v(" "),n("p",[s._v("N/A")]),s._v(" "),n("h2",{attrs:{id:"參考資料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[s._v("#")]),s._v(" 參考資料")]),s._v(" "),n("h3",{attrs:{id:"設定-nginx-作業環境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#設定-nginx-作業環境"}},[s._v("#")]),s._v(" 設定 Nginx 作業環境")]),s._v(" "),n("p",[s._v("設定 Nginx 在作業系統的執行環境。")]),s._v(" "),n("ol",[n("li",[s._v("編輯設定檔。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sudo nano /etc/nginx/nginx.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("nginx.conf 設定：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('user www-data;\nworker_processes auto;\npid /run/nginx.pid;\ninclude /etc/nginx/modules-enabled/*.conf;\n\nevents {\n    worker_connections 768;\n    # multi_accept on;\n}\n\nhttp {\n    ##\n    # Basic Settings\n    ##\n\n    sendfile on;\n    tcp_nopush on;\n    tcp_nodelay on;\n    keepalive_timeout 65;\n    types_hash_max_size 2048;\n    # server_tokens off;\n\n    server_names_hash_bucket_size 64;\n    # server_name_in_redirect off;\n\n    include /etc/nginx/mime.types;\n    default_type application/octet-stream;\n\n    ##\n    # SSL Settings\n    ##\n\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE\n    ssl_prefer_server_ciphers on;\n\n    ##\n    # Logging Settings\n    ##\n\n    access_log /var/log/nginx/access.log;\n    error_log /var/log/nginx/error.log;\n\n    ##\n    # Gzip Settings\n    ##\n\n    gzip on;\n    gzip_disable "msie6";\n\n    # gzip_vary on;\n    # gzip_proxied any;\n    # gzip_comp_level 6;\n    # gzip_buffers 16 8k;\n    # gzip_http_version 1.1;\n    # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n\n    ##\n    # Virtual Host Configs\n    ##\n\n    include /etc/nginx/conf.d/*.conf;\n    include /etc/nginx/sites-enabled/*;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("驗證設定檔內容無誤")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo nginx -t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"在-ubuntu-18-04-安裝-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-ubuntu-18-04-安裝-nginx"}},[s._v("#")]),s._v(" 在 Ubuntu 18.04 安裝 Nginx")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to Install Nginx on Ubuntu 18.04"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);
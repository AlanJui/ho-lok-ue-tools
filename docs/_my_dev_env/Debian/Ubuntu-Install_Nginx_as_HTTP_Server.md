---
sidebar: auto
---

# Ubuntu：以 Nginx 建置 HTTP Server 指引

## 安裝作業

### (1) 安裝套件

1. 更新套件庫。

```
sudo apt update
sudo apt upgrade
```

2. 執行安裝指令。

```
sudo apt install nginx
```

### (2) 設定開機時自動啟動 serive

設定 nginx serive 於開機時自動啟動。

1. 啟用 nginx service 。

```
sudo systemctl -is-enabled nginx.service
```

📺

```
$ sudo systemctl is-enabled nginx.service
enabled
```

2. 檢驗 nginx service 已啟動。

在 Web 瀏覽器的「網址」，輸入： http://192.168.66.10 。

```
systemctl status nginx
```

📺

```
$ systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2021-03-20 20:54:11 CST; 5min ago
       Docs: man:nginx(8)
   Main PID: 53032 (nginx)
      Tasks: 9 (limit: 19083)
     Memory: 9.4M
     CGroup: /system.slice/nginx.service
             ├─53032 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
             ├─53033 nginx: worker process
             ├─53034 nginx: worker process
             ├─53035 nginx: worker process
             ├─53036 nginx: worker process
             ├─53037 nginx: worker process
             ├─53038 nginx: worker process
             ├─53039 nginx: worker process
             └─53040 nginx: worker process

 3月 20 20:54:11 SRV-2020 systemd[1]: Starting A high performance web server and a reverse proxy server...
 3月 20 20:54:11 SRV-2020 systemd[1]: Started A high performance web server and a reverse proxy server.
```

3. 若 nginx servic 尚未啟動，可再試著使用以下方法，使之啟動。

```
sudo systemctl enabled nginx.service
```

### (3) 開通防火牆

開通防火牆埠：80(HTTP) 與 443(HTTPS)。

若作業系統未啟用 ufw 防火牆，以下工作可略去。

1. 執行設定指令。

```
sudo ufw allow 80/tcp comment 'accept HTTP Nginx'
sudo ufw allow 443/tcp comment 'accept HTTPS/TLS Nginx connections'
```

2. 驗證設定結果。

```
sudo ufw status
```

### (4) 取得 IP 位址

使用指令查詢，並取得安裝 nginx service 電腦之靜態 IP 位址

```
hostname -I
ip a
ip a s [eno1/eth0]
```

📺

```
$ hostname -I
192.168.66.10 192.168.66.202 192.168.122.1 192.168.2.1 172.16.0.106 fd00:30b7:d45e:4bf2:2e0:4cff:fe36:1a3c

$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    inet 192.168.66.10/16 brd 192.168.255.255 scope global dynamic noprefixroute eno1
       valid_lft 562912sec preferred_lft 562912sec
3: br0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 00:e0:4c:36:1a:3c brd ff:ff:ff:ff:ff:ff
    inet 192.168.66.202/16 brd 192.168.255.255 scope global dynamic br0
       valid_lft 603304sec preferred_lft 603304sec
    inet6 fd00:30b7:d45e:4bf2:2e0:4cff:fe36:1a3c/64 scope global dynamic mngtmpaddr noprefixroute
       valid_lft 535426sec preferred_lft 401569sec
    inet6 fe80::dc2e:23ff:fe6e:2c47/64 scope link
       valid_lft forever preferred_lft forever
4: enx00e04c361a3c: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master br0 state UP group default qlen 1000
    link/ether 00:e0:4c:36:1a:3c brd ff:ff:ff:ff:ff:ff
5: vibr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 52:54:00:01:cd:21 brd ff:ff:ff:ff:ff:ff
    inet 192.168.122.1/24 brd 192.168.122.255 scope global vibr0
       valid_lft forever preferred_lft forever
6: vibr0-nic: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master vibr0 state DOWN group default qlen 1000
    link/ether 52:54:00:01:cd:21 brd ff:ff:ff:ff:ff:ff
7: virbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 52:54:00:af:7c:2c brd ff:ff:ff:ff:ff:ff
    inet 192.168.2.1/24 brd 192.168.2.255 scope global virbr0
       valid_lft forever preferred_lft forever
8: virbr0-nic: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master virbr0 state DOWN group default qlen 1000
    link/ether 52:54:00:af:7c:2c brd ff:ff:ff:ff:ff:ff
9: wlxd0c0bf50e619: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
    inet 172.16.0.106/24 brd 172.16.0.255 scope global dynamic noprefixroute wlxd0c0bf50e619
       valid_lft 44515sec preferred_lft 44515sec

$ ip a s eno1
2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    inet 192.168.66.10/16 brd 192.168.255.255 scope global dynamic noprefixroute eno1
       valid_lft 562800sec preferred_lft 562800sec
```

### (5) 驗證 HTTP Server 已能運作

檢測 Nginx server 已能正常運作。

1. 使用 curl 檢測 HTTP 通信協定已能正常運作

```
curl -I http://[IP_Address]
```

📺

```
$ curl -I http://192.168.66.10
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Sat, 20 Mar 2021 13:21:04 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Sat, 20 Mar 2021 12:54:10 GMT
Connection: keep-alive
ETag: "6055f072-264"
Accept-Ranges: bytes
```

2. 使用 Web 瀏覽器檢測，HTTP Client 已能自 HTTP Server 取得「網頁」資料。

![](/assets/img/nginx/nginx_browse_test.png)

## 建置網站作業

### (1) 停用 Default 虛擬網站

當 nginx 套件完成安裝之時，「預設」均會賦予一名為： default 之「虛擬網站」，並
啟用。若覺有必要，則可依以下步驟，將其「暫時停用」。（注意！不是「刪除」。）

1. 切換操作者之「使用者帳號」，變更為：root 。

```
sudo su
```

📺

```
alanjui@SRV-2020:~$ sudo su
[sudo] alanjui 的密碼：
root@SRV-2020:/home/alanjui# cd
root@SRV-2020:~# pwd
/root
root@SRV-2020:~#
```

2. 進入 nginx 的「啟用網站目錄」，進行「取消設定」作業。

```
cd /etc/nginx/sites-available
ls -l
unlink [Virtual_Host_Conf]
```

📺

```
root@SRV-2020:~# cd /etc/nginx/sites-available

root@SRV-2020:/etc/nginx/sites-enabled# ls -l
總用量 0
lrwxrwxrwx 1 root root 44  3月 20 22:39 ccc.tw.local.conf -> /etc/nginx/sites-available/ccc.tw.local.conf
lrwxrwxrwx 1 root root 34  3月 20 20:54 default -> /etc/nginx/sites-available/default

root@SRV-2020:/etc/nginx/sites-enabled# unlink default

root@SRV-2020:/etc/nginx/sites-enabled# ls -l
總用量 0
lrwxrwxrwx 1 root root 44  3月 20 22:39 ccc.tw.local.conf -> /etc/nginx/sites-available/ccc.tw.local.conf
root@SRV-2020:/etc/nginx/sites-enabled#
```

3. 切換回原先使用者帳號。

```
exit
```

📺

```
root@SRV-2020:/etc/nginx/sites-enabled# exit
exit
alanjui@SRV2020:~$
```

### (2) 建置「虛擬網站」

使用「虛擬網站（Virtual Hosts）」設置網站。

【註】：由於目前規劃的「網站佈署作業」為：自 LAN 的某電腦，透過 Samba Server
將網頁檔案傳送至「虛擬網站目錄路徑」： /var/www 。

故需變更目錄的擁有者及操作使用權限。

- 目錄的擁有者屬 Samba Server 使用者：

```
chown -R root:sambashare /var/www
```

- 目錄的操作使用權限為「群組」亦有寫入使用權：

```
chmod -R 775 /var/www
```

1. 建立「虛擬網站目錄」。

```
mkdir -p /var/www/[domain_name]
```

📺

```
$ mkdir /var/www/ccc.tw.local
```

2. 建立虛擬網站的「網站設定檔」。

```
cd /etc/nginx/sites-available
cp default [domain_name].conf
```

📺

```
$ cd /etc/nginx/sites-available
$ cp default ccc.tw.local.conf
$ vim ccc.tw.local.conf
```

ccc.tw.local.conf:

```
server {
    listen 80;
    listen [::]:80;

    server_name ccc.tw.local;

    root /var/www/ccc.tw.local;
    index index.html;
    ¦   access_log  /var/log/nginx/ccc_tw_local_access.log;
    ¦   error_log   /var/log/nginx/ccc_tw_local_error.log;

    location / {
    ¦   try_files $uri $uri/ =404;
    }
}
```

### (3) 建立網站管理者帳號

1. 建立「網站管理者帳號」。

```
useradd -d /home/[domain-name] -m -k /dev/null -s /usr/sbin/nologin [usernamehere]
```

📺
設定 Domain Name 為：ccc.tw.local 之虛擬網站的「網站管理者帳號」：

- Domain Name: ccc.tw.local
- Web site operator: ccc-tw-local

```
useradd -d /home/ccc.tw.local -m -k /dev/null -s /usr/sbin/nologin ccc-tw-local
```

2. 設定網站管理者帳號「無法變更密碼」。

```
sudo passwd -l [user_name]
```

📺

```
$ sudo passwd -l ccc-tw-local
passwd：已變更密碼過期資訊。
```

3. 設定「網站管理者帳號」，為「網站目錄」之擁有者，並有讀／寫使用權限。

```
chown -R root:sambashare /var/www/[domain_name]
```

📺

```
$ chown -R ccc-tw-local:root /var/www/ccc.tw.local

$ ls -al /var/www
總用量 16
drwxr-xr-x  4 root         root 4096  3月 21 10:14 .
drwxr-xr-x 15 root         root 4096  3月 20 20:54 ..
drwxr-xr-x 17 ccc-tw-local root 4096  3月 21 10:20 ccc.tw.local
drwxr-xr-x  2 root         root 4096  3月 20 20:54 html
```

4. 設定

### (4) 建立虛擬網站首頁

建立測試用「虛擬網站」的「首頁（Home Page）」。

```
cd /var/www/[domain_name]
vim index.html
```

📺

```
cd /var/www/ccc.tw.local
vim index.html
```

🔖 index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>
<body>
    <h2>ccc.tw.local (Virtual Host)</h2>
    <p>his is a test web page running on:</p>
    <ul>
    ¦   <li>Ubuntu 20.04 LTS</li>
    ¦   <li>Nginx Static HTTP Server</li>
    </ul>
</body>
</html>
```

### (5) 啟用「虛擬網站」

```
cd /etc/nginx/sites-enabled
ln -v -s ../sites-available/[domain_name].conf .
```

📺

```
root@SRV-2020:/var/www/ccc.tw.local# cd /etc/nginx/sites-enabled

root@SRV-2020:/etc/nginx/sites-enabled# ln -v -s ../sites-available/ccc.tw.local.conf .
'./ccc.tw.local.conf' -> '../sites-available/ccc.tw.local.conf'
root@SRV-2020:/etc/nginx/sites-enabled# ls -l
總用量 0
lrwxrwxrwx 1 root root 36  3月 21 11:04 ccc.tw.local.conf -> ../sites-available/ccc.tw.local.conf
```

### (6) 重啟 nginx service

重啟 nginx service ，以便「虛擬網站」能正常運作。

1. 使用 nginx 指令，檢驗所有的「設定」正確無誤。

```
nginx -t
```

📺

```
root@SRV-2020:/etc/nginx/sites-enabled# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

📺 測試未通過案例

```
root@SRV-2020:/etc/nginx# nginx -t
nginx: [emerg] open() "/etc/nginx/sites-enabled/ccc.tw.local.conf" failed (2: No such file or directory) in /etc/nginx/nginx.conf:62
nginx: configuration file /etc/nginx/nginx.conf test failed
```

2. 當前一測試結果為： syntax is ok ，才可依「設定檔」變更 nginx service 。

```
systemctl reload nginx
```

📺

```
$ systemctl reload nginx

$ systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2021-03-20 20:54:11 CST; 1h 52min ago
       Docs: man:nginx(8)
    Process: 63112 ExecReload=/usr/sbin/nginx -g daemon on; master_process on; -s reload (code=exited, status=0/SUCCESS)
   Main PID: 53032 (nginx)
      Tasks: 9 (limit: 19083)
     Memory: 10.8M
     CGroup: /system.slice/nginx.service
             ├─53032 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
             ├─63113 nginx: worker process
             ├─63115 nginx: worker process
             ├─63116 nginx: worker process
             ├─63118 nginx: worker process
             ├─63119 nginx: worker process
             ├─63120 nginx: worker process
             ├─63121 nginx: worker process
             └─63122 nginx: worker process

 3月 20 20:54:11 SRV-2020 systemd[1]: Starting A high performance web server and a reverse proxy server...
 3月 20 20:54:11 SRV-2020 systemd[1]: Started A high performance web server and a reverse proxy server.
 3月 20 22:46:51 SRV-2020 systemd[1]: Reloading A high performance web server and a reverse proxy server.
 3月 20 22:46:51 SRV-2020 systemd[1]: Reloaded A high performance web server and a reverse proxy server.
```

### (7) 驗證網站建置作業已完成

驗證虛擬網站已能正常運作。

1. 啟用 Web 瀏覽器，輸入「網址」： http://[domain_name]/ 。

2. 目視檢驗 Web 瀏覽器能正確顯示如下 Home Page 網頁內容：

![](/assets/img/nginx/nginx-vhost_home_page.png)

## 佈署網頁作業

### (1) 產出網頁

1. 在 MBP-2018 電腦，執行「待佈署網頁打包作業」。

- 執行打包指令。

```
cd ~/workspace/docs/my-dev-env
yarn build
```

- 複驗打包好的輸出，已置入目錄之中。

```
ls -al docs/.vuepress/dist
```

### (2) 置入網頁

1. 透過 SSH 通信，簽入 SRV-2020 伺服器。

```
ssh 192.168.66.10
```

2. 進入「虛擬網站」的「網站目錄」。

```
cd /var/www/ccc.tw.local
```

3. 將待佈署綱頁檔案，置入「虛擬網站目錄」。

```
scp -r alanjui@192.168.66.21:"~/workspace/docs/my-dev-env/docs/.vuepress/dist/**" .
```

## 常用作業

### 管理 nginx service

- 啟動 service

```
sudo systemctl start nginx
```

- 終止 service

```
sudo systemctl stop nginx
```

- 重啟 service

```
sudo systemctl restart nginx
```

- 依據設定檔變更 service 的選項

```
sudo systemctl reload nginx
```

- 取得 service 當前執行狀態

```
sudo systemctl status nginx
```

### Nginx Service 預設

- Default HTTP port – 80
- Default HTTPS port – 443
- User and group for Nginx server – www-data
- Nginx DocumentRoot – /var/www/html/
- Nginx config directory – /etc/nginx/
- Global config file – /etc/nginx/nginx.conf
- Virtual domain/host config directory – /etc/nginx/sites-available/
- Currently enabled domain/host config directory – /etc/nginx/sites-enabled/
- Various config options – /etc/nginx/snippets/
- Server log file – /var/log/nginx/access.log
- Server error log file – /var/log/nginx/error.log

## 問題排除作業

## 參考資料

### 💿 [How to install Nginx on Ubuntu 20.04 LTS](https://www.cyberciti.biz/faq/how-to-install-nginx-on-ubuntu-20-04-lts/)


### 使用 VS Code 管理 Postgres DB Server

在 VS Code 安裝 PostgreSQL extension (ms-ossdata.vscode-postgresql) ，使之成為 GUI 介面 psql ，令 VS Code 成為 PostgreSQL DB Server 管理工具。

---
sidebar: auto
---

# 以 Nginx 建置 HTTP 伺服器作業指引

## 摘要

說明如何在 Ubuntu 作業系統，透過 Nginx 建置 HTTP 伺服器。

## 作業程序

### （1）安裝 nginx 作為 HTTP Server。

1. 安裝 nginx 套件。

```
sudo apt install nginx -y
```

2. 驗證 nginx 服務已完成安裝，且被正常啟動。

檢驗服務已被啟動，且能隨作業系統開機，自行啟動；

```
systemctl status nginx
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2021-03-26 14:30:00 CST; 1min 10s ago
       Docs: man:nginx(8)
   Main PID: 67493 (nginx)
      Tasks: 3 (limit: 4653)
     Memory: 4.8M
     CGroup: /system.slice/nginx.service
             ├─67493 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
             ├─67494 nginx: worker process
             └─67495 nginx: worker process

 3月 26 14:30:00 VB02-Ubuntu-2004 systemd[1]: Starting A high performance web server and a reverse proxy ser>
 3月 26 14:30:00 VB02-Ubuntu-2004 systemd[1]: Started A high performance web server and a reverse proxy serv>
lines 1-14/14 (END)
```

3. 檢驗 Web Client 端，已能連上由 nginx 服務建構而成之 HTTP Server 。

使用 Web 瀏覽器，瀏覽如下網址，若能正常閱讀「網頁」內容，則表 HTTP Server 已能 正常運作。

```
http://[IP_Address]
```

![]()


### （2）建置使用之 Host Name 與 IP

在 Host 清單（檔案：/etc/hosts），建置 Django 應用系統之 Host Name 及使 用之 IP 。

1. 編輯 Host 清單。

```
sudoedit /etc/hosts
```

2. 添加一筆 Host 與 IP 對映紀錄。

```
127.0.0.1       localhost
127.0.0.1       SRV-2020
192.168.66.10   app.ccc.tw.local
```

### （3）建置應用系統網站

nginx 提供的「虛擬網站」功能，可令一台 HTTP 伺服器，建置及執行多個網站。 每個 Django 應用系統，均會有： .css 樣式檔、 .html 網頁模版檔、.png/.jpg 圖檔... 等靜態檔案，考慮到應用系統之執行效能，當 Web Client 傳來之 HTTP Request ，若處理的結果只需回送「靜態檔案」，供 Web Client 下載，則此作業 之執行由專職的 HTTP 服務來執行，會有較佳之效能表現，故而交由 nginx 擔綱 負責。

以下之操作，將說明：當 nginx 服務已於伺服器完成安裝後，該如何作業，完成 Django 應用系統之 HTTP 網站。

1. 建置「網站目錄」。

```
sudo su
mkdir /var/www/app.ccc.tw.local && cd $_
echo "app.ccc.tw.local Web Site" > index.html
```

2. 套用 defaut 虛擬網站設定檔，建置 Django 應用系統網站。

```
cd /etc/nginx/sites-available
cp default app.ccc.tw.local
vim  app.ccc.tw.local
```

🔖 app.ccc.tw.local:

```
server {
    listen 80;

    server_name app.ccc.tw.local;

    root /var/www/app.ccc.tw.local;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

3. 停用 Default 虛擬網站

```
cd  ../sites-enabled
unlink default
```

4. 啟用 Django 應用系統網站

```
ln -s /etc/nginx/sites-available/app.ccc.tw.local /etc/nginx/sites-enabled
```

5. 檢驗 Django 應用系統網站之設定無誤，確保網站不會因設定有錯，以致無法啟動。

```
nginx -t
```

6. 重啟 nginx 服務，以便新進建置之 Django 應用系統網站，已能正常運作。

```
systemctl restart nginx
systemclt status nginx
```

7. 驗證 Django 應用系統網站已能正常運作。

使用 Web 瀏覽器，瀏覽網址： http://app.ccc.tw.local/ 。透過「檢視」，觀察網頁 顯示內容的結果，以此方式驗證 Django 應用系統網站，已完成設定，可正常運作。

【網頁應顯示之內容】：

```
app.ccc.tw.local Web Site
```

### （4）設定管理者帳號

在作業系統，建立 Django 應用系統管理員，其「使用者帳號」及歸屬之「群組」。

1. 新增管理者用使用者帳號，並設為 sudo 群組。

```
$ sudo adduser web-admin
$ usermod -aG sudo web-admin
```

將管理者帳號加入 www-data 群組
先登出，再以「管理者帳號」登入。

```
$ sudo usermod -aG www-data $USER
```

3. 驗證設定成功：

先登出，再登入。然後執行以下指令，驗證管理者帳號屬：sudo、www-data 群組。

```
groups
id
```

📺

```
web-admin@VB02-Ubuntu-2004:~$ cat /etc/group | grep www-data
www-data:x:33:

web-admin@VB02-Ubuntu-2004:~$ groups
web-admin adm cdrom sudo dip www-data plugdev lpadmin lxd sambashare

web-admin@VB02-Ubuntu-2004:~$ id
使用者id=1000(web-admin) id群組=1000(web-admin) 組=1000(web-admin),4(adm),24(cdrom),27(sudo),30(dip),33(www-data),46(plugdev),120(lpadmin),131(lxd),132(sambashare)
```

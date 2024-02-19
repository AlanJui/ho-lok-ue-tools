---
sidebar: auto
---

# 以 Nginx 建置 VuePress 文件伺服器

## 摘要

使用 VuePress 所建置之「文檔瀏覽系統」，其作業平台之底層
需要使用 HTTP 伺服器，以便用戶端可透過 Web 瀏覽器，使用
VuePress 文件伺服器。

本指引文件將說明，如何透過 Nginx 及其所具備的「虛擬網站」
功能，用以建置 VuePress 文件伺服器。

## 前置作業

- 完成 Node.js 及 yarn 安裝作業；
- 依據[以 Nginx 建置 HTTP 伺服器作業指引](./nginx-guildeline-s01.md)，
完成 Nginx 的安裝及設定。

## 自 VuePress 組建靜態網頁

### (1) 自 GitHub 下載 VuePress 原始碼

```
cd ~/workspace/docs
git clone git@github.com:AlanJui/alanjui.github.io.git
```

### (2) 自 VuePress 組建 HTML 網頁檔

```
cd alanjui.github.io
yarn install
yarn build
```

### (3) 建置虛擬網站使用目錄

```
sudo ln -nfs /home/alanjui/workspace/docs/alanjui.github.io/docs/.vuepress/dist
/var/www/blog.ccc.tw.local
```

## 建置 VuePress 專用之虛擬網站

### (1) 建立 Host 名稱

```
sudoedit /etc/hosts
```

/etc/hosts:

```
192.168.66.10   blog.ccc.tw.local
```

### (2) 建立 nginx 虛擬網站設定檔

1. 編輯 nginx 虛擬網站設定檔。

```sh
cd /etc/nginx/site-available
sudo cp default blog.ccc.tw.local
sudoedit blog.ccc.tw.local
```

/etc/nginx/sites-available/blog.ccc.tw.local:


```sh
server {
    listen 80;

    server_name blog.ccc.tw.local;

    root /var/www/blog.ccc.tw.local;
    index index.html;
        access_log  /var/log/nginx/blog_ccc_tw_local_access.log;
        error_log   /var/log/nginx/blog_ccc_tw_local_error.log;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

2. 檢測設定檔，確認內容無誤。

```
sudo nginx -t
```

### (3) 啟用 nginx 虛擬網站

```
sudo ln -fns /etc/nginx/sites-available/blog.ccc.tw.local
/etc/nginx/sites-enable
```

### (4) 重啟 nginx 服務

1. 重新啟動 nginx 服務，令新建置之「虛擬網站」開始運作。

```
sudo systemctl restart nginx
```

2. 檢視重啟後，nginx 已能正常作業。

```
sudo systemctl status nginx
```

### (5) 檢視網頁內容，驗證 VuePress 伺服器已能正常運作

在 Web 瀏覽器，輸入以下網址。然後檢視網頁內容，借此方式
用以驗證 VuePress 伺服器已能正常運作：

```
http://blog.ccc.tw.local/
```

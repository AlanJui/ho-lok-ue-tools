---
sidebar: auto
---

# 為 VuePress 文件伺服器建立子網站

## 摘要

本指引文件所稱之：「VuePress 文件伺服器」，其實就是一個
使用 nginx 虛擬網站功能，所建置的「Web 網站」。

經由 VuePress 所生成的網頁文檔，不僅可置於 Web 網站的「根
目錄」；亦可置於「子網站」使用之目錄。

本指引文件將說明：如何在 Web 網站之下，建置 VuePress 子網站。以下案例情境：
- 已有之 VuePress 文件伺服器，其 FQDN 網址為：
http://blog.ccc.tw.local ；
- 欲建置之「子網站」，其名稱為：my-dev-env ；
- 子網站之 FQDN 網址為： http://blog.ccc.tw.local/my-dev-env/ 。


## 自 VuePress 組建靜態網頁

### (1) 自 GitHub 下載 VuePress 原始碼

```
cd ~/workspace/docs
git clone git@github.com:AlanJui/my-dev-env.git 
```

### (2) 自 VuePress 組建 HTML 網頁檔

```
cd my-dev-env
yarn install
yarn build
```

### (3) 建置子網站使用目錄

```
sudo ln -nfs /home/alanjui/workspace/docs/my-dev-env/docs/.vuepress/dist
/var/www/blog.ccc.tw.local/my-dev-env
```

## 建置 VuePress 子網站

### (1) 重啟 nginx 服務

1. 重新啟動 nginx 服務，令新建置之「虛擬網站」開始運作。

```
sudo systemctl reload nginx
```

2. 檢視重啟後，nginx 已能正常作業。

```
sudo systemctl status nginx
```

### (2) 檢視網頁內容，驗證 VuePress 子網站已能正常運作

在 Web 瀏覽器，輸入以下網址。然後檢視網頁內容，借此方式
用以驗證 VuePress 子網站已能正常運作。

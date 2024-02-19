---
sidebar: auto
---

# 建置 Django App 用 DB 服務

## 摘要

安裝 Postgres 以為「資枓庫系統」，為 Django App 提供 DB 服務，儲存 Django App
存／取使用之資料。

## 安裝作業

1.

## 驗證作業

1.

## 問題診斷與狀況排解

### 無法安裝 psycopg2 v2.8.x

```
sudo apt install python-psycopg2
sudo apt install libpq-dev
pipenv install psycopg2==2.8.1
```

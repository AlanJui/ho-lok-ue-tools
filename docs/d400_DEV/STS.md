# 《系統測試規格書》

測試範圍：

- 軟體單元測試（Software Unint Test）
- 軟體整合測試（Software Integration Test）
- 系統功能測試（System Functional Test）

## 測試工具規範

- 軟體單元測試：使用 Django 內建之 Unit Test
- 軟體整合測試：使用 Django 內建之 Unit Test 或 Selenium
- 系統功能測試：使用 Selenium 與 Chrome 瀏覽器

## 軟體單元測試（Software Unint Test）

執行以下命令：

1.建置系統資料庫。

執行 python manage.py migrate 以應用資料庫遷移。

```sh
python manage.py makemigrations
python manage.py migrate
```

2.建置測試用「後台管理使用者帳號」。

執行 python manage.py createsuperuser 以創建一個超級用戶，
然後登錄 Django Admin 界面進行漢字字典的編輯。

```sh
python manage.py createsuperuser
```

3.啟動應用系統。

執行 python manage.py runserver 以啟動開發伺服器。

```sh
python manage.py runserver
```

4.使用瀏覽器操作應用系統。

中訪問 <http://127.0.0.1:8000/article_pronunciation/> 以
使用「文章標讀音」管理功能。對於輸入的文章，程式將從
「漢字字典」中查找每個漢字的讀音，並使用 HTML ruby 標籤
在螢幕上顯示讀音。

### 漢字字典編輯應用（Han_Ji_Dict Application）

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil.
Error nesciunt, harum maxime commodi voluptatem quam enim repellat.
Nihil id enim magni? Ratione alias odio soluta beatae.

### 文章標讀音應用（Article_Prounciation Application）

文章標讀音應用（Article_Prounciation Application）

Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui.
Accusamus commodi voluptates eius rem accusantium modi culpa pariatur?
Dolor esse voluptas voluptates blanditiis iusto magni reprehenderit debitis!

## 軟體整合測試

軟體整合測試（Software Integration Test）

這裡我們使用 Django Unit Test Tool，因為它也可以測試不同模組和應用之間的互動。

### 漢字字典編輯應用

漢字字典編輯應用（Han_Ji_Dict Application）

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, aliquam.
Suscipit in dicta quisquam debitis itaque magnam deleniti eum dolorum!
Eaque deleniti culpa repudiandae maiores asperiores sequi quidem aliquam aut!

### 文章標讀音應用

文章標讀音應用（Article_Prounciation Application）

Lorem ipsum dolor sit amet consectetur adipisicing elit.
Culpa libero similique dolorum, praesentium ex blanditiis fuga.
Modi at delectus ea dolorum recusandae mollitia nam!

## 系統功能測試（System Functional Test）

系統功能測試（System Functional Test）

### 漢字字典編輯應用

漢字字典編輯應用（Han_Ji_Dict Application）

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, aliquam.
Suscipit in dicta quisquam debitis itaque magnam deleniti eum dolorum!
Eaque deleniti culpa repudiandae maiores asperiores sequi quidem aliquam aut!

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas.
A non voluptas vel dolor adipisci error laudantium ad.
Minus atque aliquid ad! Ab amet nemo iure hic!

### 文章標讀音應用

文章標讀音應用（Article_Prounciation Application）

Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati!
Veritatis, sit? Temporibus autem aperiam, saepe itaque sit placeat!
Officia sit dolorum rerum architecto, quidem consequuntur magni nisi?

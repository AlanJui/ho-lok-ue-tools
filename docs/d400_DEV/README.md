---
sidebar: auto
---

<!-- markdownlint-disable MD024 MD043 -->

# 《系統開發作業》

- 420 測試環境建置作業
- 軟體單元測試作業
- 模組整合測試作業
- 系統功能測試作業
- 使用者驗證測試作業

## 410 軟體開發作業

- [411 開發環境建置作業](./d411_開發環境建置作業.md)
- [412 漢字字典資料庫建置作業](./d412_漢字字典資料庫建置作業.md)

## 420 軟體測試作業

- [421 軟體單元測試作業](./d421_軟體單元測試作業.md)
- [422 軟體整合測試作業](./d422_軟體整合測試作業.md)

## 430 系統功能測試作業

- [431 系統測試規格](./d431_系統測試規格.md)
- [432 系統功能測試作業](./d432_系統測試作業.md)

## 440 使用者驗收作業

- [441 使用者驗收測試環境建置作業](./d410_系統測試規格.md)
- [442 使用者驗證測試作業](./d410_系統測試規格.md)

## 441 使用者驗證測試規格

- [測試個案-001：輸入漢字取得漢語讀音](./d443-001-TestCase.md)

## 異常排除

### 讀不到 static 檔案

不需要執行 python manage.py collectstatic。collectstatic 命令主要用於生產環境，
將所有靜態文件收集到 STATIC_ROOT 目錄中。

在開發環境中，staticfiles_urlpatterns() 應該會自動處理靜態文件。

1. 確保 Django Project 目錄結構如下：

   ```python
   Project
   │
   ├── web_app
   │   ├── settings.py
   │   ├── urls.py
   │   └── ...
   │
   ├── han_ji_dict
   │   ├── templates
   │   │   └── han_ji_dict
   │   │       └── base.html
   │   ├── static
   │   │   └── han_ji_dict
   │   │       └── css
   │   │           └── han_ji_dict.css
   │   └── ...
   │
   ├── static
   │   ├── css
   │   │   └── site.css
   │   └── ...
   │
   └── ...
   ```

2. web_app/settings.py 有如下設定：

   ```python
   ...
   # Static files (CSS, JavaScript, Images)
   # https://docs.djangoproject.com/en/4.1/howto/static-files/

   STATIC_URL = '/static/'
   STATICFILES_DIRS = [BASE_DIR / 'static']
   STATIC_ROOT = BASE_DIR / 'static_collected'
   ...
   ```

3. 如果目錄結構正確，但仍然無法加載 CSS 文件，請嘗試將
   urlpatterns += staticfiles_urlpatterns() 放在 urlpatterns 之前，如下所示：

   ```python
   Copy code
   from django.contrib import admin
   from django.contrib.auth.views import LogoutView
   from django.contrib.staticfiles.urls import staticfiles_urlpatterns
   from django.urls import include, path

   urlpatterns = [
       path('admin/', admin.site.urls),
       path(
           '',
           include(
               ('article_pronunciation.urls', 'article_pronunciation'),
               namespace='article_pronunciation',
           ),
       ),
       path(
           'han_ji_dict/',
           include(('han_ji_dict.urls', 'han_ji_dict'), namespace='han_ji_dict'),
       ),
       path('logout/', LogoutView.as_view(), name='logout'),
   ]

   urlpatterns = staticfiles_urlpatterns() + urlpatterns
   ```

### App 中可有獨立的 base.html 與 CSS Sytle

如 han_ji_dict app 欲有獨自專用的 base.html

1. 變更 Web App 層級的 base.html

   **/templates/base.html**

   ```htmldjango
   <!-- ... -->
   <head>
     <!-- ... -->
     <!-- CSS -->
     <link
       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
       rel="stylesheet"
       integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
       crossorigin="anonymous"
     />
     <link rel="stylesheet" href="{% static 'css/site.css' %}" />
     {% block css %}{% endblock %}
     <!-- ... -->
   </head>
   <!-- ... -->
   ```

2. CSS

   在 **/han_ji_dict/static/han_ji_dict/css/** 目錄下，建檔案：
   `han_ji_dict.css`

3. 建立 App 層級的 base.html

   **/han_ji_dict/templates/han_ji_dict/base.html**

   ```python
   {% extends "base.html" %}

   {% load static %}

   {% block css %}
       <link rel="stylesheet" href="{% static 'han_ji_dict/css/han_ji_dict.css' %}">
   {% endblock %}

   {% block content %}
       {% block han_ji_dict_content %}
       {% endblock %}
   {% endblock %}
   ```

4. 修改 App 中各 View 所使用的 Django Template ：

   以 **/han_ji_dict/templates/han_ji_dict/index.html** 為例。

   ```htmldjango
   {% extends "han_ji_dict/base.html" %}

   {% block han_ji_dict_content %}
       <!-- 這裡放置您的模板內容 -->
   {% endblock %}
   ```

(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{243:function(s,a,n){s.exports=n.p+"assets/img/nginx-uwsgi-django-2.5015ce36.jpeg"},244:function(s,a,n){s.exports=n.p+"assets/img/django-app-dirs.db92d636.png"},550:function(s,a,n){"use strict";n.r(a);var t=n(10),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"應用系統佈署作業"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#應用系統佈署作業"}},[s._v("#")]),s._v(" 應用系統佈署作業")]),s._v(" "),a("h2",{attrs:{id:"摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[s._v("#")]),s._v(" 摘要")]),s._v(" "),a("p",[s._v("如何在 Django Application 作業平台，佈署應用系統。")]),s._v(" "),a("h3",{attrs:{id:"django-應用系統作業平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-應用系統作業平台"}},[s._v("#")]),s._v(" Django 應用系統作業平台")]),s._v(" "),a("ul",[a("li",[s._v("HTTP 伺服器： Nginx")]),s._v(" "),a("li",[s._v("uWSGI 介面： 將 Nginx 收到之 HTTP Request 轉成 unix socket\n，並傳送予 Django 應用系統")]),s._v(" "),a("li",[s._v("Django App： Django 應用系統")])]),s._v(" "),a("p",[a("img",{attrs:{src:n(243),alt:""}})]),s._v(" "),a("h3",{attrs:{id:"django-應用系統目錄結構"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-應用系統目錄結構"}},[s._v("#")]),s._v(" Django 應用系統目錄結構")]),s._v(" "),a("p",[a("img",{attrs:{src:n(244),alt:""}})]),s._v(" "),a("h2",{attrs:{id:"作業程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作業程序"}},[s._v("#")]),s._v(" 作業程序")]),s._v(" "),a("h3",{attrs:{id:"自-git-repo-下載原始碼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自-git-repo-下載原始碼"}},[s._v("#")]),s._v(" 自 Git Repo 下載原始碼")]),s._v(" "),a("p",[s._v("自 GitHub 下載及安裝 Django 應用系統。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("自 GitHub 下載原始碼。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /apps\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:AlanJui/Django4-Project-Template.git app1.ccc.tw.local\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Django4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("建置 Python 虛擬環境")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pyenv version\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" venv .venv\npoetry shell\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("安裝 Python 套件。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("poetry "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("組建 Django 應用系統。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("python manage.py migrate\npython manage.py collectstatic\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("建立 Django 應用系統之「後台管理員」。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("python manage.py createsuperuser\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"驗證-django-server-已能運作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#驗證-django-server-已能運作"}},[s._v("#")]),s._v(" 驗證 Django Server 已能運作")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("啟動 Django Web Server。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("python manage.py runserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("在瀏覽器輸入以下網址，以此方式驗 證 Django 應用系統在\nDebug 模式，已能正常運作。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://127.0.0.1:8000/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"建置-http-虛擬網站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建置-http-虛擬網站"}},[s._v("#")]),s._v(" 建置 HTTP 虛擬網站")]),s._v(" "),a("p",[s._v("建置 HTTP 虛擬網站，供 Django 應用系統，處理 static 型態檔案\n。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("建置 Django 應用系統之 Host 名稱")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sudoedit /etc/hosts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("/etc/hosts")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("192.168.66.10   app1.ccc.tw.local\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("建置 Nginx 虛擬網站設定檔。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/nginx/site-available\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" default app1.ccc.tw.local\nsudoedit app1.ccc.tw.local\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("/etc/nginx/sites-available/app1.ccc.tw.local:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("upstream app1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server 127.0.0.1:8001;")]),s._v("\n    server unix:///apps/app1.ccc.tw.local/app1.sock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    server_name             app1.ccc.tw.local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    charset                 utf-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# max upload size")]),s._v("\n    client_max_body_size    75M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Django media")]),s._v("\n    location /media "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v("        /apps/app1.ccc.tw.local/media"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    location /static "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v("        /apps/app1.ccc.tw.local/static_collected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        uwsgi_pass   django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        include      /apps/app1.ccc.tw.local/uwsgi_params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    access_log      /var/log/nginx/app1-ccc-tw-local.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    error_log       /var/log/nginx/app1-ccc-tw-local-error.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("檢測設定檔，確認內容無誤。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"啟用-http-虛擬網站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#啟用-http-虛擬網站"}},[s._v("#")]),s._v(" 啟用 HTTP 虛擬網站")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("建立啟用 nginx 虛擬網站之 symlink 。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fns")]),s._v(" /etc/nginx/sites-available/app1.ccc.tw.local\n/etc/nginx/sites-enable\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("重啟 nginx 服務。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"驗證-http-虛擬網站已能運作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#驗證-http-虛擬網站已能運作"}},[s._v("#")]),s._v(" 驗證 HTTP 虛擬網站已能運作")]),s._v(" "),a("p",[s._v("在 Web 用戶端，透過「瀏覽器」發送 HTTP Request，要求瀏覽某靜\n態檔案（如：.html / .css / .jpg / .png / ...），若瀏覽器能顯\n示該靜態檔案的內容，即代表 Nginx 所建置的「虛擬網站」，已能\n正常作業，對於 HTTP Request 要求，能提供相對映，應有之 HTTP\nResponse 。")]),s._v(" "),a("p",[s._v("在瀏覽器輸入以下網址，要求瀏覽 style.css 靜態檔。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("http://app1.ccc.tw.local/static/css/site.css\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"建置-uwsgi-介面設定檔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建置-uwsgi-介面設定檔"}},[s._v("#")]),s._v(" 建置 uWSGI 介面設定檔")]),s._v(" "),a("p",[s._v("WSGI 是 Python Web 應用系統介面，當 HTTP 虛擬網站對於無法處\n理的 HTTP Request ，將之轉換為 web sock 轉予 Django\nApplication 處理。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("upstream app1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server 127.0.0.1:8001;")]),s._v("\n    server unix:///apps/app1.ccc.tw.local/app1.sock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("此步驟的主要目的，用於建立下列所示之 HTTP Request 傳送通道：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("web client "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" web server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unix socket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" uWSGI "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Python\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uwsgi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",[a("li",[a("p",[s._v("透過 poetry 套件管理工具，安裝 python 套件：uwsgi 。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("poetry "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" uwsgi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("建置 uwsgi 用設定檔：web_app_uwsgi.ini 。")]),s._v(" "),a("p",[a("code",[s._v("/apps/app1.ccc.tw.local/web_app_uwsgi.ini")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("uwsgi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Django-related settings")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the base direc")]),s._v("\nchdir               "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /apps/app1.ccc.tw.local\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Django's wsgi file")]),s._v("\nmodule              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" web_app.wsgi\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the virtualenv")]),s._v("\nhome                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /apps/app1.ccc.tw.local\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# process-related settings")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# master")]),s._v("\nmaster              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# maximum number of worker processes")]),s._v("\nprocesses           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the socket")]),s._v("\nsocket              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /apps/app1.ccc.tw.local/app1.sock\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ... with appropriate permissions")]),s._v("\nchmod-socket        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("666")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clear environment on exit")]),s._v("\nvacuum              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("複製 nginx 所提供的 uwsgi 設定檔：uwsi_params")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/nginx/uwsgi_params "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" www-data:www-data uwsgi_params\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"驗證應用系統已整合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#驗證應用系統已整合"}},[s._v("#")]),s._v(" 驗證應用系統已整合")]),s._v(" "),a("p",[s._v("驗證 Nginx + uWSGI + Django App 已完成整合。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("執行 uwsgi 。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".venv/bin/uwsgi "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--ini")]),s._v(" web_app_uwsgi.ini\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("透過瀏覽器，驗證 HTTP Request 已能循下列路徑運作： nginx\n<--\x3e uwsgi <--\x3e Django App 。")]),s._v(" "),a("p",[s._v("在瀏覽器輸入以下網址：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("http://app1.ccc.tw.local/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"建置自動開機服務"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建置自動開機服務"}},[s._v("#")]),s._v(" 建置自動開機服務")]),s._v(" "),a("p",[s._v("為使已佈署之 Django 應用系統，能於開機後自動啟動。故需建置及\n啟用 Django 應用系統專用之服務。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("建置 app1 服務設定檔。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sudoedit /etc/systemd/system/app1.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("【檔案內容】：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("uWSGI instance to serve app1.ccc.tw.local\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-/usr/bin/bash "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mkdir -p /run/uwsgi; chown www-data:www-data /run/uwsgi'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/bash "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd /apps/app1.ccc.tw.local; \\\n.venv/bin/uwsgi --ini web_app_uwsgi.ini'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("啟用 app1 服務。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" app1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start app1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("檢視 app1 服務，確認該服務已能正常運作。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status app1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("【app1 服務狀態】：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("● app1.service - uWSGI instance to serve app1.ccc.tw.local\n    Loaded: loaded (/etc/systemd/system/app1.service; enabled; vendor preset: enabled)\n    Active: active (running) since Tue 2022-07-05 08:21:43 CST; 1h 54min ago\n    Process: 3839 ExecStartPre=/usr/bin/bash -c mkdir -p /run/uwsgi; chown www-data:www-data /run/uwsgi (code=exited, status=0/SUCCESS)\n  Main PID: 5067 (bash)\n      Tasks: 12 (limit: 19083)\n    Memory: 90.0M\n    CGroup: /system.slice/app1.service\n            ├─5067 /usr/bin/bash -c cd /home/alanjui/workspace/apps/django-v4;  /home/alanjui/.pyenv/bin/pyenv activate django-v4;  /home/alanju>\n            ├─5103 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n            ├─6654 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n            ├─6655 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n            ├─6657 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n            ├─6658 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n            ├─6659 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n            ├─6663 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n            ├─6664 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n            ├─6665 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n            ├─6666 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n            └─6667 /home/alanjui/.pyenv/versions/django-4.0/bin/uwsgi --ini mysite_uwsgi.ini\n\n7月 05 08:21:44 SRV-2020 bash[5103]: spawned uWSGI worker 5 (pid: 6659, cores: 1)\n7月 05 08:21:44 SRV-2020 bash[5103]: spawned uWSGI worker 6 (pid: 6663, cores: 1)\n7月 05 08:21:44 SRV-2020 bash[5103]: spawned uWSGI worker 7 (pid: 6664, cores: 1)\n7月 05 08:21:44 SRV-2020 bash[5103]: spawned uWSGI worker 8 (pid: 6665, cores: 1)\n7月 05 08:21:44 SRV-2020 bash[5103]: spawned uWSGI worker 9 (pid: 6666, cores: 1)\n7月 05 08:21:44 SRV-2020 bash[5103]: spawned uWSGI worker 10 (pid: 6667, cores: 1)\n7月 05 09:08:11 SRV-2020 bash[6667]: Not Found: /favicon.ico\n7月 05 09:08:11 SRV-2020 bash[6667]: [pid: 6667|app: 0|req: 1/1] 192.168.66.21 () {44 vars in 842 bytes} [Tue Jul  5 01:08:11 2022] GET /favicon>\n7月 05 09:39:34 SRV-2020 bash[6667]: Not Found: /favicon.ico\n7月 05 09:39:34 SRV-2020 bash[6667]: [pid: 6667|app: 0|req: 2/2] 192.168.66.10 () {44 vars in 820 bytes} [Tue Jul  5 01:39:34 2022] GET /favicon>\n~\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"參考資料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[s._v("#")]),s._v(" 參考資料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Setting up Django and your web server with uWSGI and nginx"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);
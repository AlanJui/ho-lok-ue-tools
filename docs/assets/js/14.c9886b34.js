(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{286:function(t,e,n){t.exports=n.p+"assets/img/client-nginx-uwsgi-django.f0854045.png"},540:function(t,e,n){"use strict";n.r(e);var s=n(10),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"應用系統佈署作業指引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#應用系統佈署作業指引"}},[t._v("#")]),t._v(" 應用系統佈署作業指引")]),t._v(" "),e("h2",{attrs:{id:"摘要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[t._v("#")]),t._v(" 摘要")]),t._v(" "),e("p",[t._v("說明如何在 Ubuntu 作業系統，佈署 Django 應用系統。")]),t._v(" "),e("p",[t._v("本指引文件共分兩篇：")]),t._v(" "),e("ul",[e("li",[t._v("建置 Django 應用系統運作平台")]),t._v(" "),e("li",[t._v("佈署 Django 應用系統作業指引")])]),t._v(" "),e("h3",{attrs:{id:"應用系統服務架構"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#應用系統服務架構"}},[t._v("#")]),t._v(" 應用系統服務架構")]),t._v(" "),e("p",[e("img",{attrs:{src:n(286),alt:""}})]),t._v(" "),e("p",[t._v("應用系統之運作，由下列三項服務(Services)協同作業：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("HTTP Service: 由 Ngnix 擔綱，作為 HTTP Server ；")])]),t._v(" "),e("li",[e("p",[t._v("WSGI Service: WSGI（Web Server Gateway Interface）由 uWSGI\n擔鋼，作為 HTTP Serive 與 Application Service 的溝通中介；")])]),t._v(" "),e("li",[e("p",[t._v("Application Service: 此即所欲佈署之 Django Application。")])])]),t._v(" "),e("h3",{attrs:{id:"應用系統通訊流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#應用系統通訊流程"}},[t._v("#")]),t._v(" 應用系統通訊流程")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Web Client 發送 HTTP Request；")])]),t._v(" "),e("li",[e("p",[t._v("HTTP Service (Nginx) 於收到 HTTP Request 後，將提供「靜態\n檔案」 (Static Files) 予 Web Client ；或是將 HTTP Request\n打包成：「檔案類型」 之 Unix Socket ，然後轉交\nApplication Service (uWSGI) 處理；")])]),t._v(" "),e("li",[e("p",[t._v("Application Service 自檔案讀取 Unix Socket 內容，並轉發予\nDjango Application 處理此發自 Web Client 端之 HTTP\nRequest。")])])]),t._v(" "),e("mermaid"),t._v(" "),e("div",{staticClass:"mermaid"},[t._v("sequenceDiagram\n    participant User\n    participant Browser\n    participant System\n\n    User->>Browser: 輸入URI 網址："),e("br"),t._v("/article_pronunciation/input/\n    Browser->>System: 發送系統功能指令 (HTTP GET Request)\n    System->>Browser: 回傳表單網頁 (HTTP Response)\n    Browser->>User: 依據 HTTP Response 顯示網頁\n    User->>Browser: 在網頁中的表單輸入漢字並按提交鈕\n    Browser->>System: 發送 HTTP POST Request（表單中輸入的漢字）\n    System->>System: 處理輸入的漢字，將之標註讀音\n    Note over System: 為文章中的每個漢字標註福建話音標。\n    System->>Browser: 重導 URI 網址："),e("br"),t._v("/article_pronunciation/pronunciation/\n    Browser->>User: 顯示標註讀音的漢字\n    Note over User,Browser: 文章中的每個漢字都標註有它的讀音。")]),e("h2",{attrs:{id:"作業指引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作業指引"}},[t._v("#")]),t._v(" 作業指引")]),t._v(" "),e("h3",{attrs:{id:"平台建置作業指引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平台建置作業指引"}},[t._v("#")]),t._v(" "),e("RouterLink",{attrs:{to:"/_my_dev_env/srv-2020/deploy-django-app-s01.html"}},[t._v("平台建置作業指引")])],1),t._v(" "),e("p",[t._v("說明如何在 Ubuntu 作業系統，建置 Django 應用系統於執行時期，\n所需使用之運作平台。")]),t._v(" "),e("h3",{attrs:{id:"應用系統佈署作業指引-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#應用系統佈署作業指引-2"}},[t._v("#")]),t._v(" "),e("RouterLink",{attrs:{to:"/_my_dev_env/srv-2020/deploy-django-app-s02.html"}},[t._v("應用系統佈署作業指引")])],1),t._v(" "),e("p",[t._v("說明 Django 應用系統，如何佈署之作業程序。")]),t._v(" "),e("h2",{attrs:{id:"問題診斷與狀況排除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#問題診斷與狀況排除"}},[t._v("#")]),t._v(" 問題診斷與狀況排除")]),t._v(" "),e("h3",{attrs:{id:"常用服務管理指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用服務管理指令"}},[t._v("#")]),t._v(" 常用服務管理指令")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo service nginx status\nsudo service nginx stop\nsudo service nginx start\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"驗證設定檔語法正確"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#驗證設定檔語法正確"}},[t._v("#")]),t._v(" 驗證設定檔語法正確")]),t._v(" "),e("p",[t._v("建立或變更 nginx.conf 、虛擬網站設定檔後，可使用如下指令驗證\n有無「設定語法」的 錯誤。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo nginx -t\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("📺")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ sudo nginx -t\nnginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"參考資料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[t._v("#")]),t._v(" 參考資料")]),t._v(" "),e("h3",{attrs:{id:"setting-up-django-and-your-web-server-with-uwsgi-and-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-django-and-your-web-server-with-uwsgi-and-nginx"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html?fbclid=IwAR2NF6La2CNVljdTPr79dg4zy9S91e0pkyHqp8zTkj0DihpLrGoL04-lyzc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Setting up Django and your web server with uWSGI and nginx"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("如何使用 Nginx + uWSGI 佈署 Django 應用系統。")]),t._v(" "),e("h3",{attrs:{id:"how-to-set-up-uwsgi-and-nginx-to-serve-python-apps-on-centos-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-up-uwsgi-and-nginx-to-serve-python-apps-on-centos-7"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-uwsgi-and-nginx-to-serve-python-apps-on-centos-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("How To Set Up uWSGI and Nginx to Serve Python Apps on CentOS 7"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("如何運用作業系統所提供之功能，令 Django 應用系統於「開機」後\n自動啟動，開始提供服務。")])],1)}),[],!1,null,null,null);e.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{307:function(s,t,n){"use strict";n.r(t);var a=n(10),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"chatgpt-諮詢問答錄"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chatgpt-諮詢問答錄"}},[s._v("#")]),s._v(" ChatGPT 諮詢問答錄")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("請將這個會談（Session）的「問答」輸出到一個文字檔案。文檔格式需為 markdown 標準。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"問題-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#問題-1"}},[s._v("#")]),s._v(" 問題 1")]),s._v(" "),t("p",[t("strong",[s._v("用戶")]),s._v("：我需要打造一個應用系統，讓我記錄漢字的「讀音」。我的需求條列如下，請代為撰寫程式碼：\n[需求列表]")]),s._v(" "),t("p",[t("strong",[s._v("AI")]),s._v("：回答了用戶的問題，提供了專案設置和應用程序的實現。")]),s._v(" "),t("h2",{attrs:{id:"問題-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#問題-2"}},[s._v("#")]),s._v(" 問題 2")]),s._v(" "),t("p",[t("strong",[s._v("用戶")]),s._v("：在執行「系統整合測試（System Integration Test）」及\n「系統功能測試（System Functional Test）」 前，我想先做「單元測試（Unit Test）」，請提供可在\nDjango Project 執行 「單元測試（Unit Test）」的 Python 程式碼。")]),s._v(" "),t("p",[t("strong",[s._v("AI")]),s._v("：回答了用戶的問題，提供了單元測試的程式碼範例。")]),s._v(" "),t("h2",{attrs:{id:"問題-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#問題-3"}},[s._v("#")]),s._v(" 問題 3")]),s._v(" "),t("p",[t("strong",[s._v("用戶")]),s._v("：- System Functional Test: 使用 Seleiumn 及 Google Chrome 瀏覽模擬器")]),s._v(" "),t("p",[t("strong",[s._v("AI")]),s._v("：回答了用戶的問題，提供了如何在系統功能測試中使用 Selenium 和 Google Chrome 的方法。")]),s._v(" "),t("h2",{attrs:{id:"問題-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#問題-4"}},[s._v("#")]),s._v(" 問題 4")]),s._v(" "),t("p",[t("strong",[s._v("用戶")]),s._v("：以上程式碼改寫成「可於 Python JupyterBook 執行」之程式碼。")]),s._v(" "),t("p",[t("strong",[s._v("AI")]),s._v("：回答了用戶的問題，提供了在 Jupyter Notebook 中運行功能測試的方法。")]),s._v(" "),t("h2",{attrs:{id:"q5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q5"}},[s._v("#")]),s._v(" Q5")]),s._v(" "),t("p",[s._v("請提供「安裝及設定的程序步驟」，說明如何建置一個「軟體功能測試環境」。")]),s._v(" "),t("p",[s._v("需求如下：")]),s._v(" "),t("ul",[t("li",[s._v("Python 程式碼編輯器：使用 Python JupyterBook")]),s._v(" "),t("li",[s._v("功能測試工具：\n"),t("ul",[t("li",[s._v("測試軟體：Selenium")]),s._v(" "),t("li",[s._v("WebDrive: ChromeDriver")]),s._v(" "),t("li",[s._v("瀏覽器：Chrome")])])]),s._v(" "),t("li",[s._v("Python 工具：\n"),t("ul",[t("li",[s._v("Python 版本管理工具：pyenv")]),s._v(" "),t("li",[s._v("Python Packages 安裝管理工具：poetry")])])]),s._v(" "),t("li",[s._v("輸出：Markdown 文字檔格式")])]),s._v(" "),t("h2",{attrs:{id:"q6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q6"}},[s._v("#")]),s._v(" Q6")]),s._v(" "),t("p",[s._v("請彙總以上所有的問答（只要答覆即可），以 Markdown 文檔格式輸出。")]),s._v(" "),t("h2",{attrs:{id:"files-directories-structure-of-django-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#files-directories-structure-of-django-project"}},[s._v("#")]),s._v(" Files/Directories structure of Django Project")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("❯ tree "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── README.md\n├── _archived\n│   └── db.sqlite3\n├── article_pronunciation\n│   ├── __init__.py\n│   ├── __pycache__\n│   ├── admin.py\n│   ├── apps.py\n│   ├── migrations\n│   ├── models.py\n│   ├── templates\n│   ├── tests.py\n│   ├── urls.py\n│   └── views.py\n├── db.sqlite3\n├── docs\n│   ├── ChatGPT_Consult.md\n│   ├── Markdownlint_Std.md\n│   ├── OP.md\n│   ├── SDD.md\n│   ├── SRS.md\n│   ├── STS-01_功能測試環境建置作業指引.md\n│   ├── STS.md\n│   └── URS.md\n├── han_ji_dict\n│   ├── __init__.py\n│   ├── __pycache__\n│   ├── add_data_to_hanji_dict.py\n│   ├── admin.py\n│   ├── apps.py\n│   ├── migrations\n│   ├── models.py\n│   ├── tests.py\n│   └── views.py\n├── manage.py\n├── poetry.lock\n├── pyproject.toml\n├── setup.cfg\n├── tests\n│   ├── __init__.py\n│   ├── __pycache__\n│   ├── fn\n│   ├── it\n│   └── st\n├── tools\n│   ├── han_ji.csv\n│   ├── import_csv.py\n│   ├── import_csv_drop_old_table.py\n│   ├── import_csv_to_han_ji_dict.py\n│   └── setenv.py\n└── web_app\n    ├── __init__.py\n    ├── __pycache__\n    ├── asgi.py\n    ├── settings.py\n    ├── urls.py\n    └── wsgi.py\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br")])]),t("div",{staticClass:"mermaid"},[s._v("graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;")]),t("div",{staticClass:"mermaid"},[s._v("sequenceDiagram\n    participant User\n    participant Browser\n    participant System\n\n    User->>Browser: Input URL:"),t("br"),s._v("http://localhost:8000/article_pronunciation/input/\n    Browser->>System: Send GET request for web page\n    System->>Browser: Respond with a webpage in HTML format\n    Browser->>User: Display web page\n    User->>Browser: Input article and press submit\n    Browser->>System: Send POST request with article data\n    System->>System: Process the input of article and generate content with pronunciation\n    Note over System: Generate content with pronunciation for each Chinese character\n    System->>Browser: Redirect to URL:"),t("br"),s._v("http://localhost:8000/article_pronunciation/pronunciation/\n    Browser->>User: Display the article with annotated pronunciation\n    Note over User,Browser: Each Chinese character in the article is annotated with its pronunciation.")]),t("div",{staticClass:"mermaid"},[s._v("sequenceDiagram\n    participant User\n    participant Browser\n    participant System\n\n    User->>Browser: 輸入網址："),t("br"),s._v("http://localhost:8000/article_pronunciation/input/\n    Browser->>System: 發送獲取網頁的 GET 請求\n    System->>Browser: 以 HTML 格式回應網頁\n    Browser->>User: 顯示網頁\n    User->>Browser: 輸入文章並按提交\n    Browser->>System: 發送帶有文章數據的 POST 請求\n    System->>System: 處理文章輸入並生成帶有讀音的內容\n    Note over System: 為文章中的每個漢字生成帶有讀音的內容\n    System->>Browser: 重定向到網址："),t("br"),s._v("http://localhost:8000/article_pronunciation/pronunciation/\n    Browser->>User: 顯示帶有標註讀音的文章\n    Note over User,Browser: 文章中的每個漢字都標註有它的讀音。")]),t("h2",{attrs:{id:"q11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q11"}},[s._v("#")]),s._v(" Q11")]),s._v(" "),t("p",[s._v("請改寫 han_ji_dict application，需求如下：")]),s._v(" "),t("p",[s._v("這個 Application 的用途：提供前端的 UI ，供使用者可自行編輯漢字字典。")]),s._v(" "),t("p",[s._v("han_ji_dict.views:")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HanJi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 漢字")]),s._v("\n    han_ji "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 漢字讀音編碼")]),s._v("\n    chu_im "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 讀音常用頻率")]),s._v("\n    freq "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FloatField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 聲母碼")]),s._v("\n    siann "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 韻母碼")]),s._v("\n    un "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 調號")]),s._v("\n    tiau "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IntegerField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 原編者使用的 BP 標音")]),s._v("\n    old_chu_im "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" null"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 十五音聲母")]),s._v("\n    sni_siann "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 十五音韻母")]),s._v("\n    sni_un "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__str__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("han_ji\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("han_ji_dict application，需求規格：")]),s._v(" "),t("ol",[t("li",[s._v("進入 han_ji_dict 的 Home View 時，請以 HTML TABLE 顯示 20 個漢字字典資料\n，並提供「上一頁」、「下一頁」的按鈕；")]),s._v(" "),t("li",[s._v("Home View 請用 Django View 的 ListView 來實作；")]),s._v(" "),t("li",[s._v("每個漢字均有 Hyper-link ，點擊後將進 Detail View 顯示該漢字的詳細資料；")]),s._v(" "),t("li",[s._v("Detail View 中需要按鈕，可回到 han_ji_dict Home View；")]),s._v(" "),t("li",[s._v("仿 CRUD 觀點，提供：加漢字資料（C）、改漢字資料（U）、刪漢字資料（D）。\n所有功能均以 Django View Class 完成。在 Application 的 Home View 均有按鈕；")]),s._v(" "),t("li",[s._v("提供查詢（Query）功能，以便使用者可快速查找某一漢字的讀音資料；")]),s._v(" "),t("li",[s._v("提供篩選功能，以便使用者可依讀音的音標，查找相同發音的漢字。")])]),s._v(" "),t("div",{staticClass:"language-htmldjango line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<main>\n  <div class="container">\n\n  <h1>漢字字典編輯</h1>\n  <table>\n      <thead>\n          <tr>\n              <th>漢字</th>\n              <th>讀音編碼</th>\n              \x3c!-- 添加其他列标题，如所需 --\x3e\n          </tr>\n      </thead>\n      <tbody>\n\n      </tbody>\n  </table>\n\n  </div>\n</main>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
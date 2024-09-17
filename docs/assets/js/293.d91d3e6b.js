(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{583:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"系統設計規格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系統設計規格"}},[s._v("#")]),s._v(" 系統設計規格")]),s._v(" "),t("p",[s._v("使用 Django 開發 Web App 系統，該 Web App 系統含有兩個子應用\n（Application）：")]),s._v(" "),t("ul",[t("li",[s._v("han_ji_dict : 漢字字典，可為漢字輸入音標；")]),s._v(" "),t("li",[s._v("article_prounciation : 可輸入漢字，由系統在漢字字典查找漢\n字的音標，然後再於畫面顯示已標註音標的漢字。")])]),s._v(" "),t("h2",{attrs:{id:"系統設計規範"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系統設計規範"}},[s._v("#")]),s._v(" 系統設計規範")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("專案名稱：han_ji")])]),s._v(" "),t("li",[t("p",[s._v("專案執行平台： Python Django 4.1.3")])]),s._v(" "),t("li",[t("p",[s._v("Python Intepreter 版本管理工具：pyenv")])]),s._v(" "),t("li",[t("p",[s._v("Python Version： 3.10.6")])]),s._v(" "),t("li",[t("p",[s._v("Python Package Manager 工具： Poetry")])]),s._v(" "),t("li",[t("p",[s._v("Python Virtual Environment")]),s._v(" "),t("ul",[t("li",[s._v("目錄：位於 Project 根目錄下，名為： .venv；")]),s._v(" "),t("li",[s._v("工具：使用 python 內附套件 venv")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("poetry run python venv .venv\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"專案目錄結構"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#專案目錄結構"}},[s._v("#")]),s._v(" 專案目錄結構")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("❯ tree "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── README.md\n├── article_pronunciation\n│   ├── __init__.py\n│   ├── __pycache__\n│   ├── admin.py\n│   ├── apps.py\n│   ├── migrations\n│   ├── models.py\n│   ├── templates\n│   ├── tests.py\n│   ├── urls.py\n│   └── views.py\n├── db.sqlite3\n├── docs\n│   ├── OP.md\n│   ├── SDD.md\n│   ├── SRS.md\n│   ├── STS.md\n│   └── URS.md\n├── han_ji_dict\n│   ├── __init__.py\n│   ├── __pycache__\n│   ├── admin.py\n│   ├── apps.py\n│   ├── migrations\n│   ├── models.py\n│   ├── tests.py\n│   └── views.py\n├── manage.py\n├── poetry.lock\n├── pyproject.toml\n├── setup.cfg\n├── tests\n│   ├── __init__.py\n│   ├── __pycache__\n│   ├── fn\n│   ├── it\n│   └── st\n├── tools\n│   ├── han_ji.csv\n│   ├── import_csv.py\n│   ├── import_csv_drop_old_table.py\n│   ├── import_csv_to_han_ji_dict.py\n│   └── setenv.py\n└── web_app\n    ├── __init__.py\n    ├── __pycache__\n    ├── asgi.py\n    ├── settings.py\n    ├── urls.py\n    └── wsgi.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br")])]),t("h2",{attrs:{id:"建置應用指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建置應用指令"}},[s._v("#")]),s._v(" 建置應用指令")]),s._v(" "),t("p",[s._v("建置 Django Appliction ，請在終端機執行以下 Django 指令。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("django-admin startapp han_ji_dict\ndjango-admin startapp article_pronunciation\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"網頁架構"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#網頁架構"}},[s._v("#")]),s._v(" 網頁架構")]),s._v(" "),t("ol",[t("li",[s._v("使用者進入此 Web App 時，以 article_prounciation\nApplication 的根路徑為網站的首頁；")]),s._v(" "),t("li",[s._v("article_prounciation Application 的首頁上有「表單」，可輸\n入漢字，並按「送出」按鈕；系統將依輸入的漢字標註音標，然\n後顯示於畫面下方；")]),s._v(" "),t("li",[s._v("進入 article_prounciation Application 的首頁時，上方「表\n單」的表單已輸入預設的漢字：「我可以為您標註漢字讀音」，\n下方則顯示已標註讀音的漢字。")]),s._v(" "),t("li",[s._v("使用 Django Template 設計 Base View。Base View 中需使用\nHTML nav tag 來設計導覽列，以便使用者可依此導覽列執行系統\n能提供之功能。")])]),s._v(" "),t("pre",[s._v("Parse error on line 1:\nstateDiagram-v2   \n^\nExpecting 'NEWLINE', 'SPACE', 'GRAPH', got 'ALPHA'")]),t("h2",{attrs:{id:"han-ji-dict-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#han-ji-dict-application"}},[s._v("#")]),s._v(" han_ji_dict application")]),s._v(" "),t("p",[s._v("提供前端的 UI ，供使用者可自行編輯漢字字典。")]),s._v(" "),t("h3",{attrs:{id:"application-作業流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-作業流程"}},[s._v("#")]),s._v(" Application 作業流程")]),s._v(" "),t("ol",[t("li",[s._v("進入 han_ji_dict 的 Home View 時，請以 HTML TABLE 顯示 20\n個漢字字典資料，並提供「上一頁」、「下一頁」的按鈕；")]),s._v(" "),t("li",[s._v("Home View 請用 Django View 的 ListView 來實作；")]),s._v(" "),t("li",[s._v("每個漢字均有 Hyper-link ，點擊後將進 Detail View 顯示該漢\n字的詳細資料；")]),s._v(" "),t("li",[s._v("Detail View 中需要按鈕，可回到 han_ji_dict Home View；")]),s._v(" "),t("li",[s._v("仿 CRUD 觀點，提供：加漢字資料（C）、改漢字資料（U）、刪\n漢字資料（D）。所有功能均以 Django View Class 完成。在\nApplication 的 Home View 均有按鈕；")]),s._v(" "),t("li",[s._v("提供查詢（Query）功能，以便使用者可快速查找某一漢字的讀音\n資料；")]),s._v(" "),t("li",[s._v("提供篩選功能，以便使用者可依讀音的音標，查找相同發音的漢\n字。")])]),s._v(" "),t("h4",{attrs:{id:"models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[s._v("#")]),s._v(" Models")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HanJi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 漢字")]),s._v("\n    han_ji "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 漢字讀音編碼")]),s._v("\n    chu_im "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 讀音常用頻率")]),s._v("\n    freq "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FloatField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 聲母碼")]),s._v("\n    siann "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 韻母碼")]),s._v("\n    un "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 調號")]),s._v("\n    tiau "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IntegerField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 原編者使用的 BP 標音")]),s._v("\n    old_chu_im "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" null"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 十五音聲母")]),s._v("\n    sni_siann "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 十五音韻母")]),s._v("\n    sni_un "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__str__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("han_ji\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h3",{attrs:{id:"views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[s._v("#")]),s._v(" Views")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HanJi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 漢字")]),s._v("\n    han_ji "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 漢字讀音編碼")]),s._v("\n    chu_im "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 讀音常用頻率")]),s._v("\n    freq "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FloatField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 聲母碼")]),s._v("\n    siann "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 韻母碼")]),s._v("\n    un "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 調號")]),s._v("\n    tiau "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IntegerField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 原編者使用的 BP 標音")]),s._v("\n    old_chu_im "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" null"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 十五音聲母")]),s._v("\n    sni_siann "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 十五音韻母")]),s._v("\n    sni_un "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__str__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("han_ji\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h2",{attrs:{id:"article-prounciation-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#article-prounciation-application"}},[s._v("#")]),s._v(" article_prounciation application")]),s._v(" "),t("h3",{attrs:{id:"application-作業流程-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-作業流程-2"}},[s._v("#")]),s._v(" Application 作業流程")]),s._v(" "),t("ol",[t("li",[s._v("使用者進入此 Web App 時，以 article_prounciation\nApplication 的根路徑為網站的首頁；")]),s._v(" "),t("li",[s._v("article_prounciation Application 的首頁上有「表單」，可輸\n入漢字，並按「送出」按鈕；系統將依輸入的漢字標註音標，然\n後顯示於畫面下方；")]),s._v(" "),t("li",[s._v("進入 article_prounciation Application 的首頁時，上方「表\n單」的表單已輸入預設的漢字：「我可以為您標註漢字讀音」，\n下方則顯示已標註讀音的漢字。")]),s._v(" "),t("li",[s._v("使用 Django Template 設計 Base View。Base View 中需使用\nHTML 的 nav tag 來設計導覽列，以便使用者可依此導覽列執行\n系統能提供之功能。")])]),s._v(" "),t("h2",{attrs:{id:"資料庫建置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#資料庫建置"}},[s._v("#")]),s._v(" 資料庫建置")]),s._v(" "),t("h3",{attrs:{id:"匯入-csv-資料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匯入-csv-資料"}},[s._v("#")]),s._v(" 匯入 CSV 資料")]),s._v(" "),t("p",[s._v("資料庫之建置，本可透過 Python 程式碼，以此建立資料庫所需使用\n的資料表。但字典庫所需建置之資料，已有現成可用之 CSV 檔可供\n使用，故專案將以下述之 Python 程式 碼，將 CSV 檔之資料匯入，\n用以建置系統所需使用之 han_li_dict_hanji 資料表。")]),s._v(" "),t("p",[s._v("這個程式碼示例與之前的範例很相似，但是不需要建立新的資料表，\n而是假設資料庫中已經存在了名為 han_li_dict_hanji 的資料表。\n在這種情況下，你只需使用 INSERT INTO 語句將 CSV 資料插入到現\n有的資料表中即可。")]),s._v(" "),t("p",[s._v("請注意，這個程式碼示例假設資料庫檔案 db.sqlite3 已經存在，並\n且匯入的 CSV 檔案名稱為 data.csv。如果您的 CSV 檔案有不同的\n欄位名稱或資料型別，請根據需要修改程式碼。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" csv\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sqlite3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立連線")]),s._v("\nconn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqlite3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'db.sqlite3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 讀取 CSV 檔案")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data.csv'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'r'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    reader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" csv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DictReader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 將 CSV 資料匯入到資料庫表格中")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" row "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        values "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'han_ji'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chu_im'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'freq'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'siann'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'un'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tiau'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'old_chu_im'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sni_siann'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" row"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sni_un'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        conn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execute"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'INSERT INTO han_li_dict_hanji VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" values"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交變更")]),s._v("\n    conn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 關閉連線")]),s._v("\nconn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
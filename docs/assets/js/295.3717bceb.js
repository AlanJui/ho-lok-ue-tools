(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{588:function(a,t,i){"use strict";i.r(t);var e=i(10),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"《系統測試規格書》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《系統測試規格書》"}},[a._v("#")]),a._v(" 《系統測試規格書》")]),a._v(" "),t("p",[a._v("測試範圍：")]),a._v(" "),t("ul",[t("li",[a._v("軟體單元測試（Software Unint Test）")]),a._v(" "),t("li",[a._v("軟體整合測試（Software Integration Test）")]),a._v(" "),t("li",[a._v("系統功能測試（System Functional Test）")])]),a._v(" "),t("h2",{attrs:{id:"測試工具規範"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#測試工具規範"}},[a._v("#")]),a._v(" 測試工具規範")]),a._v(" "),t("ul",[t("li",[a._v("軟體單元測試：使用 Django 內建之 Unit Test")]),a._v(" "),t("li",[a._v("軟體整合測試：使用 Django 內建之 Unit Test 或 Selenium")]),a._v(" "),t("li",[a._v("系統功能測試：使用 Selenium 與 Chrome 瀏覽器")])]),a._v(" "),t("h2",{attrs:{id:"軟體單元測試-software-unint-test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#軟體單元測試-software-unint-test"}},[a._v("#")]),a._v(" 軟體單元測試（Software Unint Test）")]),a._v(" "),t("p",[a._v("執行以下命令：")]),a._v(" "),t("p",[a._v("1.建置系統資料庫。")]),a._v(" "),t("p",[a._v("執行 python manage.py migrate 以應用資料庫遷移。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("python manage.py makemigrations\npython manage.py migrate\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("2.建置測試用「後台管理使用者帳號」。")]),a._v(" "),t("p",[a._v("執行 python manage.py createsuperuser 以創建一個超級用戶，\n然後登錄 Django Admin 界面進行漢字字典的編輯。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("python manage.py createsuperuser\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("3.啟動應用系統。")]),a._v(" "),t("p",[a._v("執行 python manage.py runserver 以啟動開發伺服器。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("python manage.py runserver\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("4.使用瀏覽器操作應用系統。")]),a._v(" "),t("p",[a._v("中訪問 "),t("a",{attrs:{href:"http://127.0.0.1:8000/article_pronunciation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://127.0.0.1:8000/article_pronunciation/"),t("OutboundLink")],1),a._v(" 以\n使用「文章標讀音」管理功能。對於輸入的文章，程式將從\n「漢字字典」中查找每個漢字的讀音，並使用 HTML ruby 標籤\n在螢幕上顯示讀音。")]),a._v(" "),t("h3",{attrs:{id:"漢字字典編輯應用-han-ji-dict-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漢字字典編輯應用-han-ji-dict-application"}},[a._v("#")]),a._v(" 漢字字典編輯應用（Han_Ji_Dict Application）")]),a._v(" "),t("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil.\nError nesciunt, harum maxime commodi voluptatem quam enim repellat.\nNihil id enim magni? Ratione alias odio soluta beatae.")]),a._v(" "),t("h3",{attrs:{id:"文章標讀音應用-article-prounciation-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章標讀音應用-article-prounciation-application"}},[a._v("#")]),a._v(" 文章標讀音應用（Article_Prounciation Application）")]),a._v(" "),t("p",[a._v("文章標讀音應用（Article_Prounciation Application）")]),a._v(" "),t("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui.\nAccusamus commodi voluptates eius rem accusantium modi culpa pariatur?\nDolor esse voluptas voluptates blanditiis iusto magni reprehenderit debitis!")]),a._v(" "),t("h2",{attrs:{id:"軟體整合測試"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#軟體整合測試"}},[a._v("#")]),a._v(" 軟體整合測試")]),a._v(" "),t("p",[a._v("軟體整合測試（Software Integration Test）")]),a._v(" "),t("p",[a._v("這裡我們使用 Django Unit Test Tool，因為它也可以測試不同模組和應用之間的互動。")]),a._v(" "),t("h3",{attrs:{id:"漢字字典編輯應用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漢字字典編輯應用"}},[a._v("#")]),a._v(" 漢字字典編輯應用")]),a._v(" "),t("p",[a._v("漢字字典編輯應用（Han_Ji_Dict Application）")]),a._v(" "),t("p",[a._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, aliquam.\nSuscipit in dicta quisquam debitis itaque magnam deleniti eum dolorum!\nEaque deleniti culpa repudiandae maiores asperiores sequi quidem aliquam aut!")]),a._v(" "),t("h3",{attrs:{id:"文章標讀音應用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章標讀音應用"}},[a._v("#")]),a._v(" 文章標讀音應用")]),a._v(" "),t("p",[a._v("文章標讀音應用（Article_Prounciation Application）")]),a._v(" "),t("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.\nCulpa libero similique dolorum, praesentium ex blanditiis fuga.\nModi at delectus ea dolorum recusandae mollitia nam!")]),a._v(" "),t("h2",{attrs:{id:"系統功能測試-system-functional-test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系統功能測試-system-functional-test"}},[a._v("#")]),a._v(" 系統功能測試（System Functional Test）")]),a._v(" "),t("p",[a._v("系統功能測試（System Functional Test）")]),a._v(" "),t("h3",{attrs:{id:"漢字字典編輯應用-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漢字字典編輯應用-2"}},[a._v("#")]),a._v(" 漢字字典編輯應用")]),a._v(" "),t("p",[a._v("漢字字典編輯應用（Han_Ji_Dict Application）")]),a._v(" "),t("p",[a._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, aliquam.\nSuscipit in dicta quisquam debitis itaque magnam deleniti eum dolorum!\nEaque deleniti culpa repudiandae maiores asperiores sequi quidem aliquam aut!")]),a._v(" "),t("p",[a._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas.\nA non voluptas vel dolor adipisci error laudantium ad.\nMinus atque aliquid ad! Ab amet nemo iure hic!")]),a._v(" "),t("h3",{attrs:{id:"文章標讀音應用-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章標讀音應用-2"}},[a._v("#")]),a._v(" 文章標讀音應用")]),a._v(" "),t("p",[a._v("文章標讀音應用（Article_Prounciation Application）")]),a._v(" "),t("p",[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati!\nVeritatis, sit? Temporibus autem aperiam, saepe itaque sit placeat!\nOfficia sit dolorum rerum architecto, quidem consequuntur magni nisi?")])])}),[],!1,null,null,null);t.default=s.exports}}]);
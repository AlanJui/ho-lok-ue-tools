(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{588:function(t,a,i){"use strict";i.r(a);var e=i(10),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《系統測試規格》"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《系統測試規格》"}},[t._v("#")]),t._v(" 《系統測試規格》")]),t._v(" "),a("h2",{attrs:{id:"系統品質測試"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系統品質測試"}},[t._v("#")]),t._v(" 系統品質測試")]),t._v(" "),a("p",[t._v("使用 Python 程式碼進行測試，使用之工具如下：")]),t._v(" "),a("ul",[a("li",[t._v("Software Unit Test: 使用 Django 內建之 Unit Test")]),t._v(" "),a("li",[t._v("Software Integration Test: 使用 Django Unit Test 或\nSeleiumn")]),t._v(" "),a("li",[t._v("System Functional Test: 使用 Seleiumn 及 Google Chrome 瀏\n覽模擬器")])]),t._v(" "),a("h3",{attrs:{id:"測試方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#測試方法"}},[t._v("#")]),t._v(" 測試方法")]),t._v(" "),a("ul",[a("li",[t._v("軟體單元測試（Software Unint Test）")]),t._v(" "),a("li",[t._v("軟體整合測試（Software Integration Test）")]),t._v(" "),a("li",[t._v("系統功能測試（System Functional Test）")])]),t._v(" "),a("h3",{attrs:{id:"測試目標"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#測試目標"}},[t._v("#")]),t._v(" 測試目標")]),t._v(" "),a("ul",[a("li",[t._v("漢字字典應用（Han_Ji_Dict Application）")]),t._v(" "),a("li",[t._v("文章標讀音應用（Article_Prounciation Application）")])]),t._v(" "),a("p",[t._v("請彙總以上所有的問答（只要答覆即可），以 Markdown 文檔格式輸\n出。")]),t._v(" "),a("h2",{attrs:{id:"測試範圍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#測試範圍"}},[t._v("#")]),t._v(" 測試範圍")]),t._v(" "),a("ul",[a("li",[t._v("軟體單元測試（Software Unint Test）")]),t._v(" "),a("li",[t._v("軟體整合測試（Software Integration Test）")]),t._v(" "),a("li",[t._v("系統功能測試（System Functional Test）")])]),t._v(" "),a("h2",{attrs:{id:"測試工具規範"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#測試工具規範"}},[t._v("#")]),t._v(" 測試工具規範")]),t._v(" "),a("ul",[a("li",[t._v("軟體單元測試：使用 Django 內建之 Unit Test")]),t._v(" "),a("li",[t._v("軟體整合測試：使用 Django 內建之 Unit Test 或 Selenium")]),t._v(" "),a("li",[t._v("系統功能測試：使用 Selenium 與 Chrome 瀏覽器")])]),t._v(" "),a("h2",{attrs:{id:"軟體單元測試-software-unint-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#軟體單元測試-software-unint-test"}},[t._v("#")]),t._v(" 軟體單元測試（Software Unint Test）")]),t._v(" "),a("p",[t._v("執行以下命令：")]),t._v(" "),a("p",[t._v("1.建置系統資料庫。")]),t._v(" "),a("p",[t._v("執行 python manage.py migrate 以應用資料庫遷移。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("python manage.py makemigrations\npython manage.py migrate\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("2.建置測試用「後台管理使用者帳號」。")]),t._v(" "),a("p",[t._v("執行 python manage.py createsuperuser 以創建一個超級用戶，然\n後登錄 Django Admin 界面進行漢字字典的編輯。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("python manage.py createsuperuser\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("3.啟動應用系統。")]),t._v(" "),a("p",[t._v("執行 python manage.py runserver 以啟動開發伺服器。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("python manage.py runserver\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("4.使用瀏覽器操作應用系統。")]),t._v(" "),a("p",[t._v("中訪問 "),a("a",{attrs:{href:"http://127.0.0.1:8000/article_pronunciation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8000/article_pronunciation/"),a("OutboundLink")],1),t._v(" 以使用\n「文章標讀音」管理功能。對於輸入的文章，程式將從「漢字字典」\n中查找每個漢字的讀音，並使用 HTML ruby 標籤在螢幕上顯示讀音\n。")]),t._v(" "),a("h3",{attrs:{id:"漢字字典編輯應用-han-ji-dict-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漢字字典編輯應用-han-ji-dict-application"}},[t._v("#")]),t._v(" 漢字字典編輯應用（Han_Ji_Dict Application）")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.\nNihil. Error nesciunt, harum maxime commodi voluptatem quam\nenim repellat. Nihil id enim magni? Ratione alias odio\nsoluta beatae.")]),t._v(" "),a("h3",{attrs:{id:"文章標讀音應用-article-prounciation-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文章標讀音應用-article-prounciation-application"}},[t._v("#")]),t._v(" 文章標讀音應用（Article_Prounciation Application）")]),t._v(" "),a("p",[t._v("文章標讀音應用（Article_Prounciation Application）")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.\nQui. Accusamus commodi voluptates eius rem accusantium modi\nculpa pariatur? Dolor esse voluptas voluptates blanditiis\niusto magni reprehenderit debitis!")]),t._v(" "),a("h2",{attrs:{id:"軟體整合測試"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#軟體整合測試"}},[t._v("#")]),t._v(" 軟體整合測試")]),t._v(" "),a("p",[t._v("軟體整合測試（Software Integration Test）")]),t._v(" "),a("p",[t._v("這裡我們使用 Django Unit Test Tool，因為它也可以測試不同模組\n和應用之間的互動。")]),t._v(" "),a("h3",{attrs:{id:"漢字字典編輯應用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漢字字典編輯應用"}},[t._v("#")]),t._v(" 漢字字典編輯應用")]),t._v(" "),a("p",[t._v("漢字字典編輯應用（Han_Ji_Dict Application）")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit.\nEligendi, aliquam. Suscipit in dicta quisquam debitis itaque\nmagnam deleniti eum dolorum! Eaque deleniti culpa\nrepudiandae maiores asperiores sequi quidem aliquam aut!")]),t._v(" "),a("h3",{attrs:{id:"文章標讀音應用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文章標讀音應用"}},[t._v("#")]),t._v(" 文章標讀音應用")]),t._v(" "),a("p",[t._v("文章標讀音應用（Article_Prounciation Application）")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.\nCulpa libero similique dolorum, praesentium ex blanditiis\nfuga. Modi at delectus ea dolorum recusandae mollitia nam!")]),t._v(" "),a("h2",{attrs:{id:"系統功能測試-system-functional-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系統功能測試-system-functional-test"}},[t._v("#")]),t._v(" 系統功能測試（System Functional Test）")]),t._v(" "),a("p",[t._v("系統功能測試（System Functional Test）")]),t._v(" "),a("h3",{attrs:{id:"漢字字典編輯應用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漢字字典編輯應用-2"}},[t._v("#")]),t._v(" 漢字字典編輯應用")]),t._v(" "),a("p",[t._v("漢字字典編輯應用（Han_Ji_Dict Application）")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit.\nEligendi, aliquam. Suscipit in dicta quisquam debitis itaque\nmagnam deleniti eum dolorum! Eaque deleniti culpa\nrepudiandae maiores asperiores sequi quidem aliquam aut!")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit.\nQuas. A non voluptas vel dolor adipisci error laudantium ad.\nMinus atque aliquid ad! Ab amet nemo iure hic!")]),t._v(" "),a("h3",{attrs:{id:"文章標讀音應用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文章標讀音應用-2"}},[t._v("#")]),t._v(" 文章標讀音應用")]),t._v(" "),a("p",[t._v("文章標讀音應用（Article_Prounciation Application）")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.\nObcaecati! Veritatis, sit? Temporibus autem aperiam, saepe\nitaque sit placeat! Officia sit dolorum rerum architecto,\nquidem consequuntur magni nisi?")])])}),[],!1,null,null,null);a.default=s.exports}}]);
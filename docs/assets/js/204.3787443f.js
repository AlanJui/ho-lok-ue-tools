(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{492:function(n,t,a){"use strict";a.r(t);var s=a(10),r=Object(s.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"plantuml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plantuml"}},[n._v("#")]),n._v(" PlantUML")]),n._v(" "),t("h1",{attrs:{id:"preview-in-vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preview-in-vim"}},[n._v("#")]),n._v(" Preview in Vim")]),n._v(" "),t("h2",{attrs:{id:"作業系統層套件需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作業系統層套件需求"}},[n._v("#")]),n._v(" 作業系統層套件需求")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("macOS\nbrew install --cask adoptopenjdk\nbrew install graphviz")])]),n._v(" "),t("li",[t("p",[n._v("Debian / Ubuntu\nsudo apt install graphviz")])])]),n._v(" "),t("h2",{attrs:{id:"在-vim-neovim-應用層安裝需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-vim-neovim-應用層安裝需求"}},[n._v("#")]),n._v(" 在 Vim / Neovim 應用層安裝需求")]),n._v(" "),t("p",[n._v("https://github.com/weirongxu/plantuml-previewer.vim")]),n._v(" "),t("p",[t("strong",[n._v("Vim / Neovim Plugins 安裝設定（使用 vim-plug 套件管理器）")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("Plug 'huos3203/plantuml-syntax'   \"plantuml語法高亮Plug 'aklt/plantuml-syntax' \nPlug 'tyru/open-browser.vim' \nPlug 'weirongxu/plantuml-previewer.vim' \"在線工具：http://sujoyu .github.io/plantuml-previewer/\n")])])]),t("h2",{attrs:{id:"常用操作指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用操作指令"}},[n._v("#")]),n._v(" 常用操作指令")]),n._v(" "),t("p",[n._v("https://www.dazhuanlan.com/2020/03/26/5e7c40feaf791/")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v(":PlantumlOpen\n")])])]),t("hr"),n._v(" "),t("h1",{attrs:{id:"教學影片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#教學影片"}},[n._v("#")]),n._v(" 教學影片")]),n._v(" "),t("p",[n._v("https://www.youtube.com/watch?v=MkmczZpaWUM&")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://youtu.be/MkmczZpaWUM",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://youtu.be/MkmczZpaWUM"),t("OutboundLink")],1)]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("@startuml\n\nclass PaymentDetail {\n  PMId: number\n  CardOwnerName: string\n  CardNumber: string\n  ExpirationDate: string\n  CVV: string\n}\n\n@enduml\n\n\n!\\[UML圖名稱\\](URL)\n\n\n!\\[PaymentDetail\\](https://www.plantuml.com/plantuml/img/SoWkIImgAStDuU9ApaaiBbO8IApCJSqhSKajISpCKQZcKb08yFLCiLB8AyrDIYq2SfqJYrByo_DIY_mISrEj58fBYZBpqg7YVc15I8Ak5GMPHOabcVbvBeabAAh3mk2yMYukBeVKl1IWAm00)\n")])])]),t("hr"),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('# 類別圖\n\n### Angular 2 原始程碼\n\n```angular2\nexport class PaymentDetail {\n  PMId: number;\n  CardOwnerName: string;\n  CardNumber: string;\n  ExpirationDate: string;\n  CVV: string;\n}\n```\n\n### PlantUML 語法\n\n```\n@startuml\n\nclass PaymentDetail <<Model>> {\n  PMId: number\n  CardOwnerName: string\n  CardNumber: string\n  ExpirationDate: string\n  CVV: string\n}\n\n@enduml\n```\n\n### UML 圖形\n\n!\\[PaymentDetail\\](https://www.plantuml.com/plantuml/img/LOv12eD0303lUKNU8I92zU11wybxsWsoi1ib6x6bzE-L8gB76UOmPJ9IMs80U0PA2NjwHnQhsCW7pFDsSXoA0Z-0sBUDor2M-63Ty4RgxgkmTXGvmsJgPTnzzuzEidxDNidy91NPfHw6Wxu0KBAuxUS7)\n\n\n---\n\n# 系統功能操作介面\n\n簡介： http://plantuml.com/salt\n\n## 對話方塊\n\n### PlantUML 語法\n\n```\n@startsalt\nscale 2\n{\n  Login    | "MyName   "\n  Password | "****     "\n  [Cancel] | [  OK   ]\n}\n@endsalt\n\n```\n\n### UI 圖形\n\n!\\[登入畫面\\](https://www.plantuml.com/plantuml/img/SoWkIImgAKxCAU4gJaxCILKmughcKb3moK_Fp5C0WXe59TzAlyJSL21R2IWHa5XSN9vVb0AIq082a1gmHBHpObvoQauiK29QGS7V6oWSorNBvP2Qbm8s7G00)\n\n\n## 條列清單\n\n### PlantUML 語法\n\n```\n@startsalt\n{#\n. | 專案名稱 | 開始日期 | 結束日期\n1 | 專案管理系統建置案 | 2018-04-01 | 2018-10-31\n2 | WebERP開發專案 | 2018-02-01 | 2018-11-30\n}\n@endsalt\n```\n\n### UI 圖形\n\n!\\[專案清單畫面\\](https://www.plantuml.com/plantuml/img/SoWkIImgAKxCAU6gLkRIKwXHUBgXuzd2ZgSJUf-ls0ZalfpM_NHvzxFfIv_DcG_aFjywuTdS-H0kbo5S-VDr2vzFQ7k-UVVphHkVxjxrVEywe21GriZ0q4BNm4JNm136CJJGDJRaCW9omrEJN8C2WEO_dxa7OWfSWn6o1aDTOmEkMYw7rBmKa3i1)\n')])])]),t("p",[t("img",{attrs:{src:"https://d2mxuefqeaa7sj.cloudfront.net/s_74885640AC03492F1C724FE4A7FE819D8D92862FF10D648E4E471345ABD8B3C2_1548576041794_2019-01-27_14-00-13.png",alt:""}})]),n._v(" "),t("hr"),n._v(" "),t("h1",{attrs:{id:"參考文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#參考文件"}},[n._v("#")]),n._v(" 參考文件")]),n._v(" "),t("p",[t("strong",[n._v("入門教學")])]),n._v(" "),t("p",[n._v("https://jonny-huang.github.io/projects/01_plantuml/")]),n._v(" "),t("p",[t("strong",[n._v("官網")])]),n._v(" "),t("p",[n._v("http://plantuml.com/")]),n._v(" "),t("p",[t("strong",[n._v("與 VS Code 整合應用")])]),n._v(" "),t("p",[n._v("https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml")]),n._v(" "),t("h2",{attrs:{id:"vs-code-extensions-supporting-plantuml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-extensions-supporting-plantuml"}},[n._v("#")]),n._v(" VS Code Extensions Supporting PlantUML")]),n._v(" "),t("hr"),n._v(" "),t("p",[t("strong",[n._v("PlantUML 2.14.3")]),n._v("\njebbs")]),n._v(" "),t("p",[n._v("Rich PlantUML support for Visual Studio Code.")]),n._v(" "),t("p",[n._v("【註】： 支援 Preview 功能")]),n._v(" "),t("hr"),n._v(" "),t("p",[t("strong",[n._v("PlantUML Syntax v0.0.3")]),n._v("\nQuido Hoekman")]),n._v(" "),t("p",[n._v("Language support for PlantUML.")]),n._v(" "),t("hr"),n._v(" "),t("p",[t("strong",[n._v("Yog PlantUML Highlight v0.0.5")]),n._v("\nYog")]),n._v(" "),t("p",[n._v("PlantUML Syntax higlight for Visual Studio Code.")]),n._v(" "),t("hr"),n._v(" "),t("p",[t("strong",[n._v("macOS 繪圖支援軟件")]),n._v("\nhttp://www.graphviz.org/download/")]),n._v(" "),t("p",[t("strong",[n._v("範例參考")]),n._v("\nhttps://plantuml.com/zh/")]),n._v(" "),t("p",[t("strong",[n._v("參考文章：在 VS Code 編輯器中整合 PlantUML 的應用")])]),n._v(" "),t("p",[n._v("https://blog.anoff.io/2018-07-31-diagrams-with-plantuml/")])])}),[],!1,null,null,null);t.default=r.exports}}]);
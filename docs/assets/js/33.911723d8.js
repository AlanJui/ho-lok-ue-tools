(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{318:function(s,n,a){"use strict";a.r(n);var e=a(10),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"node-js-環境建置指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-js-環境建置指引"}},[s._v("#")]),s._v(" Node.JS 環境建置指引")]),s._v(" "),n("h2",{attrs:{id:"安裝與設定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝與設定"}},[s._v("#")]),s._v(" 安裝與設定")]),s._v(" "),n("p",[s._v("（1）安裝 Node.JS 版本管理套件：n (Node.js Versions Manager)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd\ncurl -L https://git.io/n-install | bash\n. ~/.bashrc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("（2）以 Node.JS 版本管理套件，安裝 LTS 版本")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("n lts\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[alanjui@VB03-ArchLinux-KDE ~]$ n lts\ninstalled : v14.15.4 (with npm 6.14.10)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"驗證安裝結果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#驗證安裝結果"}},[s._v("#")]),s._v(" 驗證安裝結果")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("node -v\nnpm -v\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[alanjui@VB03-ArchLinux-KDE ~]$ node -v\nv14.15.4\n\n[alanjui@VB03-ArchLinux-KDE ~]$ npm -v\n6.14.10\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h1",{attrs:{id:"安裝-yarn-套件管理工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝-yarn-套件管理工具"}},[s._v("#")]),s._v(" 安裝 yarn 套件管理工具")]),s._v(" "),n("p",[s._v("Node.JS 的套件管理工具除了官方提供的 npm ，還有另一套廣為群眾喜歡的 yarn 。")]),s._v(" "),n("p",[s._v("（1）安裝軟體套件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("pacman -S yarn\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("（2）驗證")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[alanjui@VB03-ArchLinux-KDE ~]$ sudo pacman -S yarn\n正在解決依賴關係…\n正在檢查衝突的軟體包…\n    \n軟體包 (3) libuv-1.40.0-1  nodejs-15.5.1-1  yarn-1.22.10-1\n    \n總計下載大小：   9.61 MiB\n總計安裝大小：  35.08 MiB\n    \n:: 進行安裝嗎？ [Y/n] y\n:: 正在接收軟體包…\nlibuv-1.40.0-1-x86_64                               224.8 KiB  1561 KiB/s 00:00 [##############################################] 100%\nnodejs-15.5.1-1-x86_64                                8.5 MiB  10.8 MiB/s 00:01 [##############################################] 100%\nyarn-1.22.10-1-any                                  953.5 KiB  10.3 MiB/s 00:00 [##############################################] 100%\n(3/3) 正在檢查鑰匙圈中的鑰匙                                                     [##############################################] 100%\n(3/3) 正在檢查軟體包完整性                                                       [##############################################] 100%\n(3/3) 正在載入軟體包檔案                                                         [##############################################] 100%\n(3/3) 正在檢查檔案衝突                                                           [##############################################] 100%\n(3/3) 正在檢查可用磁碟空間                                                       [##############################################] 100%\n:: 正在處理軟體包變更…\n(1/3) 正在安裝 libuv                                                             [##############################################] 100%\n(2/3) 正在安裝 nodejs                                                            [##############################################] 100%\nnodejs 的可選依賴\nnpm: nodejs package manager\n(3/3) 正在安裝 yarn                                                              [##############################################] 100%\n:: 正在執行後置作業掛鉤…\n(1/1) Arming ConditionNeedsUpdate...\n    \n[alanjui@VB03-ArchLinux-KDE ~]$ which yarn\n/usr/bin/yarn\n\n[alanjui@VB03-ArchLinux-KDE ~]$ yarn --version\n1.22.10\n\n[alanjui@VB03-ArchLinux-KDE ~]$ node -v\nv14.15.4\n\n[alanjui@VB03-ArchLinux-KDE ~]$ npm -v\n6.14.10\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("h2",{attrs:{id:"參考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#參考"}},[s._v("#")]),s._v(" 參考")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/tj/n#n--interactively-manage-your-nodejs-versions",target:"_blank",rel:"noopener noreferrer"}},[s._v("n – Interactively Manage Your Node.js Versions"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=r.exports}}]);
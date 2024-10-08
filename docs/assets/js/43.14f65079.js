(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{331:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"arch-linux-gnome-桌面環境安裝指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-gnome-桌面環境安裝指引"}},[s._v("#")]),s._v(" Arch Linux: Gnome 桌面環境安裝指引")]),s._v(" "),a("h2",{attrs:{id:"文件摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件摘要"}},[s._v("#")]),s._v(" 文件摘要")]),s._v(" "),a("p",[s._v("提供「作業程序」，說明如何在 Arch Linux 作業系統，安裝 Gnome 桌面環境。")]),s._v(" "),a("h2",{attrs:{id:"安裝作業程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝作業程序"}},[s._v("#")]),s._v(" 安裝作業程序")]),s._v(" "),a("h3",{attrs:{id:"安裝桌面環境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝桌面環境"}},[s._v("#")]),s._v(" 安裝桌面環境")]),s._v(" "),a("ol",[a("li",[s._v("確認電腦能連上 Internet")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ip a s\nping -c 5 www.gmail.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("桌面環境安裝準備（Video Display）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo pacman -S xorg xorg-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("安裝 Gnome 桌面")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo pacman -S gnome gnome-extra\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("【註】： 安裝 Xfce 桌面")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo pacman -S xfce4 xfce4-goodies\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("變更作業系統「預設使用語系」，改為：中文")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim /etc/locale.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("locale.conf:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("LANG=zh_TW.UTF-8\nLC_COLLATE=C\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("啟用 Display Manger （Login）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo systemctl enable gdm.service\nsudo systemctl start gdm.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("刪除 Gnome 桌面")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo pacman -Runs gnome gnome-extra\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"安裝-gnome-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-gnome-extensions"}},[s._v("#")]),s._v(" 安裝 Gnome extensions")]),s._v(" "),a("p",[s._v("安裝「桌面環境」軟件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo pacman -S chrome-gnome-shell\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("→ https://extensions.gnome.org/local/")]),s._v(" "),a("h2",{attrs:{id:"參考資料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[s._v("#")]),s._v(" 參考資料")]),s._v(" "),a("h3",{attrs:{id:"安裝桌面環境-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝桌面環境-2"}},[s._v("#")]),s._v(" 安裝桌面環境")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://hackmd.io/@PIFOPlfSS3W_CehLxS3hBQ/r1xrYth9V",target:"_blank",rel:"noopener noreferrer"}},[s._v("Arch linux 安裝"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);
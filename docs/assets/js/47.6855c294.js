(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{333:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"arch-linux-tmux-安裝指引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-tmux-安裝指引"}},[s._v("#")]),s._v(" Arch Linux: Tmux 安裝指引")]),s._v(" "),t("h2",{attrs:{id:"文件摘要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件摘要"}},[s._v("#")]),s._v(" 文件摘要")]),s._v(" "),t("p",[s._v("提供「作業程序」，說明如何在 Arch Linux 作業系統，安裝 Tmux 軟體。")]),s._v(" "),t("h2",{attrs:{id:"安裝作業程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝作業程序"}},[s._v("#")]),s._v(" 安裝作業程序")]),s._v(" "),t("ol",[t("li",[s._v("安裝 tmux 套件。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yay -S tmux\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("啟動 tmux 。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tmux\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("安裝 Tmux Extension: Oh My Tmux。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ cd\n$ git clone https://github.com/gpakosz/.tmux.git\n$ ln -s -f .tmux/.tmux.conf\n$ cp .tmux/.tmux.conf.local .\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("設定作業環境。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vim ~/.tmux.conf.local\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v(".tmux.conf.local:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# clipboard\ntmux_conf_copy_to_os_clipboard=true\n\nset -g mouse on\n:\n# replace C-b by C-a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("依設定檔重啟 tmux 。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tmux source-file ~/.tmux.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610682752351_image.png",alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);
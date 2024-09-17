(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{571:function(a,s,e){"use strict";e.r(s);var t=e(10),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"vim-安裝與操作指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim-安裝與操作指引"}},[a._v("#")]),a._v(" Vim 安裝與操作指引")]),a._v(" "),s("h2",{attrs:{id:"安裝作業"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝作業"}},[a._v("#")]),a._v(" 安裝作業")]),a._v(" "),s("p",[a._v("安裝 Vim 編輯器。")]),a._v(" "),s("h2",{attrs:{id:"ubuntu-debian"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-debian"}},[a._v("#")]),a._v(" Ubuntu / Debian")]),a._v(" "),s("h3",{attrs:{id:"使用原始碼安裝作業"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用原始碼安裝作業"}},[a._v("#")]),a._v(" 使用原始碼安裝作業")]),a._v(" "),s("ol",[s("li",[a._v("下載原始碼。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd ~/build\ngit clone https://github.com/vim/vim.git\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("編輯原始碼與安裝執行檔。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd vim\n./configure\nsudo apt install ncurses-dev\nmake\nsudo make install\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"設定作業環境與安裝-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#設定作業環境與安裝-plugins"}},[a._v("#")]),a._v(" 設定作業環境與安裝 Plugins")]),a._v(" "),s("p",[a._v("複製 Vim 作業環境的設定檔；完成 Vim Plugins 安裝，與相依套件之安裝。")]),a._v(" "),s("ol",[s("li",[a._v("自 GitHub 複製 Vim 作業環境設定檔。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git clone https://github.com/AlanJui/vim8.git ~/.vim\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[a._v("啟動 vim ，讓 vim 自動執行 vim plugins 安裝工作。")])]),a._v(" "),s("li",[s("p",[a._v("安裝 vim plugins 所需使用之相依套件。")])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt install vifm\nsudo apt install fzf\nsudo apt install ripgrep\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm i -g bash-language-server\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("📺")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alanjui@VB02-Ubuntu-2004:~$ npm i -g bash-language-server\nnpm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142\nnpm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142\nnpm WARN deprecated har-validator@5.1.5: this library is no longer supported\nnpm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()\n/home/alanjui/n/bin/bash-language-server -> /home/alanjui/n/lib/node_modules/bash-language-server/bin/main.js\n+ bash-language-server@1.17.0\nadded 115 packages from 220 contributors in 9.368s\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h2",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" macOS")]),a._v(" "),s("p",[a._v("N/A")]),a._v(" "),s("h2",{attrs:{id:"archlinux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#archlinux"}},[a._v("#")]),a._v(" ArchLinux")]),a._v(" "),s("p",[a._v("N/A")]),a._v(" "),s("h2",{attrs:{id:"常用操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用操作"}},[a._v("#")]),a._v(" 常用操作")]),a._v(" "),s("h3",{attrs:{id:"依游標所在位置開啟檔案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依游標所在位置開啟檔案"}},[a._v("#")]),a._v(" 依游標所在位置開啟檔案")]),a._v(" "),s("p",[a._v("Goto File")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[g], [f]\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"切割視窗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切割視窗"}},[a._v("#")]),a._v(" 切割視窗")]),a._v(" "),s("ul",[s("li",[a._v("Split：[Ctrl+W], [S]")]),a._v(" "),s("li",[a._v("VSplit: [Ctrl+W], [V]")])]),a._v(" "),s("h3",{attrs:{id:"調整視窗的寬或高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#調整視窗的寬或高"}},[a._v("#")]),a._v(" 調整視窗的寬或高")]),a._v(" "),s("p",[a._v("【使用鍵盤】：")]),a._v(" "),s("ul",[s("li",[a._v("增寬／減寬： [量值], [Ctrl+W], [>]/[<] ▶ 20, [Ctrl+W], [>]")]),a._v(" "),s("li",[a._v("增高／減高： [量值], [Ctrl+W], [+]/[-] ▶ 10, [Ctrl+W], [+]")]),a._v(" "),s("li",[a._v("指定寬度： [量值], [Ctrl+W], [|] ▶ 30, [Ctrl+W], [|]")]),a._v(" "),s("li",[a._v("指定高度： [量值], [Ctrl+W], [_] ▶ 40, [Ctrl+W], [_]")]),a._v(" "),s("li",[a._v("指定等寬／高：[Ctrl+W], [=]")])]),a._v(" "),s("p",[a._v("【使用指令】：")]),a._v(" "),s("ul",[s("li",[a._v("調寬度： "),s("code",[a._v(":resite [+/-]N")])]),a._v(" "),s("li",[a._v("調高度： "),s("code",[a._v(":vertical resite [+/-]N")])])]),a._v(" "),s("h2",{attrs:{id:"問題診斷與狀況排除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#問題診斷與狀況排除"}},[a._v("#")]),a._v(" 問題診斷與狀況排除")]),a._v(" "),s("h3",{attrs:{id:"自-shell-再回到-vim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自-shell-再回到-vim"}},[a._v("#")]),a._v(" 自 Shell 再回到 Vim")]),a._v(" "),s("p",[a._v("按鍵 [Ctrl+Z] ，會觸動 Vim 指令，將 Vim 暫停，衍生 Backgroud 作業，進入 Shell 環境。\n使用者欲結束 Shell ，再度回到 Foreground 作業（即 Vim），可輸入以下指令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("fg[Enter]\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"參考資料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[a._v("#")]),a._v(" 參考資料")]),a._v(" "),s("h3",{attrs:{id:"vim-作業環境設定檔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim-作業環境設定檔"}},[a._v("#")]),a._v(" Vim 作業環境設定檔")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/AlanJui/vim8",target:"_blank",rel:"noopener noreferrer"}},[a._v("Vim 8.2 設定檔"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"markdown-應用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-應用"}},[a._v("#")]),a._v(" Markdown 應用")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/plasticboy/vim-markdown",target:"_blank",rel:"noopener noreferrer"}},[a._v("plasticboy vim plugin: Vim Markdown"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://vi.stackexchange.com/questions/7258/how-do-i-prevent-vim-from-hiding-symbols-in-markdown-and-json",target:"_blank",rel:"noopener noreferrer"}},[a._v("How do I prevent vim from hiding symbols in markdown and json"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{524:function(s,a,e){"use strict";e.r(a);var t=e(10),h=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安裝-oh-my-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-oh-my-zsh"}},[s._v("#")]),s._v(" 安裝 Oh-my-zsh")]),s._v(" "),a("ol",[a("li",[s._v("安裝 Oh My Zsh")])]),s._v(" "),a("p",[s._v("安裝前準備：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo apt install git-core\n$ sudo apt install powerline fonts-powerline -y\n\n\n\n$ sudo apt install zsh\n")])])]),a("p",[s._v("下載及執行 Oh-My-Zsh 安裝指令")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh\n")])])]),a("p",[s._v("變更系統的預設 Shell (Bash Shell → Zsh)")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo chsh -s `which zsh`\n$ sudo chsh -s /bin/zsh\n\n$ whereis zsh \n$ sudo usermod -s /usr/bin/zsh $(whoami)\n")])])]),a("p",[s._v("重開機")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo shutdown -r 0\n")])])]),a("h1",{attrs:{id:"_2-設定自己想要的theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-設定自己想要的theme"}},[s._v("#")]),s._v(" 2. 設定自己想要的Theme")]),s._v(" "),a("h2",{attrs:{id:"_2-1-編輯-oh-my-zsh-設定檔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-編輯-oh-my-zsh-設定檔"}},[s._v("#")]),s._v(" 2.1 編輯 Oh-my-zsh  設定檔")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo code ~/.zshrc\n")])])]),a("p",[s._v("設定內容：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('export PATH=$HOME/bin:/usr/local/bin:$PATH\n\nZSH_THEME="xxf"\n\n. ~/myEnv.sh\n')])])]),a("h2",{attrs:{id:"_2-2-複製-theme-檔案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-複製-theme-檔案"}},[s._v("#")]),s._v(" 2.2 複製 Theme 檔案")]),s._v(" "),a("p",[s._v("在另外一台含有 xxf theme 檔案的電腦，透過 SSH Copy 檔案：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ scp ~/.oh-my-zsh/themes/xxf.zsh-theme alanjui@192.168.66.10:/home/alanjui/.oh-my-zsh/themes/xxf.zsh-theme\n")])])]),a("h2",{attrs:{id:"_2-3-複製「環境設定」檔案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-複製「環境設定」檔案"}},[s._v("#")]),s._v(" 2.3 複製「環境設定」檔案")]),s._v(" "),a("p",[s._v("在另外一台含有 myEnv.sh 檔案的電腦，透過 SSH Copy 檔案：\n自 MacBookPro.local → Srv-01 (Remote)")]),s._v(" "),a("p",[s._v("| $ scp foobar.txt your_username@remotehost.edu:/some/remote/directory |")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ scp ~/myEnv.sh alanjui@192.168.66.10:/home/alanjui\n")])])]),a("p",[s._v("記得修改 myEnv.sh 的設定，使其適用於 Ubuntu。")]),s._v(" "),a("p",[s._v("回到設定電腦，設定 myEnv.sh 檔案，使用擁有「執行」權限")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ ls ~/myEnv.sh\n\n$ chmod +x ~/myEnv.sh\n\n$ ls ~/myEnv.sh\n")])])]),a("p",[s._v("在另外一台含有 myEnv.sh 檔案的電腦，透過 SSH Copy 檔案：\n自 MacBookPro.local → Srv-01 (Remote)")]),s._v(" "),a("p",[s._v("| $ scp foobar.txt your_username@remotehost.edu:/some/remote/directory |")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ scp ~/myEnv.sh alanjui@192.168.66.10:/home/alanjui\n")])])])])}),[],!1,null,null,null);a.default=h.exports}}]);
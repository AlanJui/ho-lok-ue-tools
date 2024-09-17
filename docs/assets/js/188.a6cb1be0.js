(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{473:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"add-ssh-key-to-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-ssh-key-to-github"}},[t._v("#")]),t._v(" Add SSH Key to GitHub")]),t._v(" "),s("h1",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" macOS")]),t._v(" "),s("h2",{attrs:{id:"_1-generating-a-new-ssh-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-generating-a-new-ssh-key"}},[t._v("#")]),t._v(" 1. Generating a new SSH key")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('$ ssh-keygen -t ed25519 -C "alanjui.1960@gmail.com"\n')])])]),s("h2",{attrs:{id:"_2-adding-ssh-key-to-the-ssh-agent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-adding-ssh-key-to-the-ssh-agent"}},[t._v("#")]),t._v(" 2. Adding SSH key to the ssh-agent")]),t._v(" "),s("p",[s("strong",[t._v("(1) Start the ssh-agent in the background.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('$ eval "$(ssh-agent -s)"\n')])])]),s("p",[s("strong",[t._v("(2) If you're using macOS Sierra 10.12.2 or later, you will need to modify your")]),t._v(" "),s("code",[t._v("**~/.ssh/config**")]),t._v(" "),s("strong",[t._v("file to automatically load keys into the ssh-agent and store passphrases in your keychain.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("vim ~/.ssh/config\n\n\nHost *\n  AddKeysToAgent yes\n  UseKeychain yes\n  IdentityFile ~/.ssh/id_ed25519\n")])])]),s("p",[s("strong",[t._v("(3) Add your SSH private key to the ssh-agent and store your passphrase in the keychain.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("$ ssh-add -K ~/.ssh/id_ed25519\n")])])]),s("h2",{attrs:{id:"_3-add-the-ssh-key-to-github-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-the-ssh-key-to-github-account"}},[t._v("#")]),t._v(" 3. Add the SSH key to GitHub account")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("$ pbcopy < ~/.ssh/id_ed25519.pub\n")])])]),s("hr"),t._v(" "),s("h1",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),s("h2",{attrs:{id:"_1-generating-a-new-ssh-key-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-generating-a-new-ssh-key-2"}},[t._v("#")]),t._v(" 1. Generating a new SSH key")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('$ ssh-keygen -t ed25519 -C "alanjui.1960@gmail.com"\n')])])]),s("h2",{attrs:{id:"_2-adding-ssh-key-to-the-ssh-agent-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-adding-ssh-key-to-the-ssh-agent-2"}},[t._v("#")]),t._v(" 2. Adding SSH key to the ssh-agent")]),t._v(" "),s("p",[s("strong",[t._v("Start the ssh-agent in the background.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("$ eval $(ssh-agent -s)\n")])])]),s("h2",{attrs:{id:"_3-add-the-ssh-key-to-github-account-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-the-ssh-key-to-github-account-2"}},[t._v("#")]),t._v(" 3. Add the SSH key to GitHub account")]),t._v(" "),s("ul",[s("li",[t._v("ArchLinux\n$ sudo pacman -S xclip\n$ xclip -selection clipboard < ~/.ssh/id_ed25519.pub")])]),t._v(" "),s("ul",[s("li",[t._v("Debian / Ubuntu\n$ sudo apt install xclip\n$ xclip -selection clipboard < ~/.ssh/id_ed25519.pub")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"clone-vim8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-vim8"}},[t._v("#")]),t._v(" Clone Vim8")]),t._v(" "),s("p",[s("strong",[t._v("下載 Vim 8 設定檔")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("git clone git@github.com:AlanJui/vim8.git ~/.vim\n")])])]),s("p",[s("strong",[t._v("下載 Terminal 用 Nerd Font")])]),t._v(" "),s("p",[t._v("Ref:")]),t._v(" "),s("ul",[s("li",[t._v("https://webinstall.dev/nerdfont/")]),t._v(" "),s("li",[t._v("https://ostechnix.com/install-nerd-fonts-to-add-glyphs-in-your-code-on-linux/")])]),t._v(" "),s("p",[t._v("Easy way:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("curl -sS https://webinstall.dev/nerdfont | bash\n")])])]),s("p",[t._v("Manually")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('$ su -\n$ cd /usr/share/fonts/truetype/\n\n$ wget https://github.com/source-foundry/Hack/releases/download/v3.003/Hack-v3.003-ttf.zip\n$ unzip Hack-v3.003-ttf.zip\n\n\n\n$ fc-cache -f -v\n$ fc-list | grep "Hack"\n')])])]),s("p",[s("strong",[t._v("Install Terminal Color Scheme")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('bash -c  "$(wget -qO- https://git.io/vQgMr)"\n')])])]),s("p",[t._v("Ref: https://mayccoll.github.io/Gogh/")]),t._v(" "),s("p",[s("strong",[t._v("安裝 Plugin 相依之作業系統軟件")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("$ sudo apt install ripgrep\n\n\n$ sudo apt install fzf\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
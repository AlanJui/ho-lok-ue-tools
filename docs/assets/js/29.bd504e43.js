(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{314:function(s,a,e){"use strict";e.r(a);var t=e(10),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"virtualbox-guest-安裝與設定指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox-guest-安裝與設定指引"}},[s._v("#")]),s._v(" VirtualBox Guest 安裝與設定指引")]),s._v(" "),a("h2",{attrs:{id:"安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝"}},[s._v("#")]),s._v(" 安裝")]),s._v(" "),a("ol",[a("li",[s._v("Install ArchLinux kernel headers")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo pacman -S linux-headers\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Check version of Linux Kernel")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("uname -r\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("Install VirtualBox Guest utilities with X support")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo pacman -S virtualbox-guest-utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#設定"}},[s._v("#")]),s._v(" 設定")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("Enable VirtualBox Service")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo systemctl enable vboxservice\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("Start VirtualBox Service started")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo systemctl start vboxservice\nsysemctl status vboxservice\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("Add user account to vboxsf group")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo usermod -aG vboxsf alanjui\ngrep vboxsf /etc/group\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("Reboot system.")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo reboot\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"驗證"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#驗證"}},[s._v("#")]),s._v(" 驗證")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Verify VirtualBox Service has been started.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl status vboxservice\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Share clipboard enabled.")]),s._v(" "),a("p",[s._v("(1) Configure shared clipboard:\nSelect command: VirtualBox VM / Devices / Share Clipboard / Bidirectional")]),s._v(" "),a("p",[s._v("(2) Verify copy from host: copy command and paste to guest terminal.")]),s._v(" "),a("ul",[a("li",[s._v("copy command text on macOS.")]),s._v(" "),a("li",[s._v("open terminal on Manjaro-KDE and press [Ctrl] + [Shift] + [V] keys\nto paste command from Host Clipboard to Guest Terminal.")])]),s._v(" "),a("p",[s._v("(3) Verfify paste to host: copy text from guest and paste to host.")]),s._v(" "),a("ul",[a("li",[s._v("copy text on guest(Manjaro-KDE).")]),s._v(" "),a("li",[s._v("paste text to terminal on host(macOS).")])])]),s._v(" "),a("li",[a("p",[s._v("Share folder enabled.")]),s._v(" "),a("p",[s._v("(1) Create folder to be mount to host")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd\nmkdir -p ~/host\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("(2) Configure shared folders:")]),s._v(" "),a("p",[s._v("Select command: VirtualBox VM / Devices / Shared Folders Settings:")]),s._v(" "),a("ul",[a("li",[s._v("Folder Path: /Users/alanjui")]),s._v(" "),a("li",[s._v("Folder Name: vboxsf [v] Auto-mount")]),s._v(" "),a("li",[s._v("Mount point: /home/alanjui/host [v] Make Permanent")])]),s._v(" "),a("p",[s._v("(3) Verify")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ls -la ~/host\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"參考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考"}},[s._v("#")]),s._v(" 參考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/VirtualBox/Install_Arch_Linux_as_a_guest",target:"_blank",rel:"noopener noreferrer"}},[s._v("VirtualBox/Install Arch Linux as a guest"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);
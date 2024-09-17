(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{333:function(s,n,a){"use strict";a.r(n);var e=a(10),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"arch-linux-作業系統-xrdp-安裝指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-作業系統-xrdp-安裝指引"}},[s._v("#")]),s._v(" Arch Linux 作業系統 xRDP 安裝指引")]),s._v(" "),n("p",[s._v("https://wiki.archlinux.org/index.php/xrdp")]),s._v(" "),n("p",[n("strong",[s._v("Install binary file")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("N$ yay -S xrdp\n:: There are 3 providers available for xrdp:\n:: Repository AUR\n1) xrdp 2) xrdp-devel-git 3) xrdp-git\n\nEnter a number (default=1): 3\n:: Checking for conflicts...\n:: Checking for inner conflicts...\n[Repo Make:1]  nasm-2.15.05-1\n[Aur:1]  xrdp-git-1:0.9.14.r24.g62befaa8-1\n\n==> Remove make dependencies after install? [y/N] y\n:: Downloaded PKGBUILD (1/1): xrdp-git\n1 xrdp-git                                 (Build Files Exist)\n==> Diffs to show?\n==> [N]one [A]ll [Ab]ort [I]nstalled [No]tInstalled or (1 2 3, 1-3, ^4)\n==> N\n:: (1/1) Parsing SRCINFO: xrdp-git\nresolving dependencies...\nlooking for conflicting packages...\n\nPackages (1) nasm-2.15.05-1\n\nTotal Installed Size:  3.15 MiB\n\n:: Proceed with installation? [Y/n] Y\n...\n...\n\n\n\nsudo systemctl enable xrdp\nsudo systemctl enable xrdp-sesman\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("p",[s._v("https://www.tweaking4all.com/software/linux-software/use-xrdp-remote-access-ubuntu-14-04/")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo pacman -S xfce4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("Configuration")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("/etc/X11/Xwrapper.config")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("allowed_users=anybody\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("/lib/systemd/system/xrdp.service")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[Unit]\nDescription=xrdp daemon\nDocumentation=man:xrdp(8) man:xrdp.ini(5)\nRequires=xrdp-sesman.service\nAfter=network.target xrdp-sesman.service\n\n[Service]\nType=forking\nPIDFile=/run/xrdp.pid\nExecStart=/usr/bin/xrdp\nExecStop=/usr/bin/xrdp --kill\nUser=root\nGroup=root\n\n[Install]\nWantedBy=multi-user.target:q\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v("/lib/systemd/system/xrdp-sesman.service")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[Unit]\nDescription=xrdp session manager\nDocumentation=man:xrdp-sesman(8) man:sesman.ini(5)\nAfter=network.target\nStopWhenUnneeded=true\nBindsTo=xrdp.service\n\n[Service]\nType=forking\nPIDFile=/run/xrdp-sesman.pid\nExecStart=/usr/bin/xrdp-sesman\nExecStop=/usr/bin/xrdp-sesman --kill\nUser=root\nGroup=root\n\n[Install]\nWantedBy=multi-user.target\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("ul",[n("li",[s._v("/etc/xrdp/xrdp.ini")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[xrdp8]\nname=Vino-Session\nlib=libvnc.so\nusername=ask\npassword=ask\nip=127.0.0.1\nport=5900\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("/etc/xrdp/sesman.ini")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("...\n[Xorg]\n;param=Xorg\nparam=/usr/lib/xorg-server/Xorg:q\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("/etc/X11/xinit/xinitrc")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://wiki.archlinux.org/index.php/GNOME_(%E6%AD%A3%E9%AB%94%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"}},[s._v("~/.xinitrc"),n("OutboundLink")],1)])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  exec gnome-session\n* ~/.xsession\n* /etc/xrdp/startwm.sh: Toq start a User Window Manager (similar to .xinitrc)\n  export PATH=$PATH\n    export LANG=$LANG\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("登入 Gnome 桌面，使用「終端機」輸入下列指令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("gsettings set org.gnome.Vino require-encryption false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("Start Service")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo systemctl enable xrdp\nsudo systemctl starp xrdp\nsudo systemctl status xrdp\n\nsudo systemctl enable xrdp-sesman\nsudo systemctl starp xrdp-sesman\nsudo systemctl status xrdp-sesman\n\nsudo systemctl daemon-reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"build-from-source-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#build-from-source-code"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Arch_User_Repository_(%E6%AD%A3%E9%AB%94%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"}},[s._v("Build from source code"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("strong",[s._v("Download source code from Git Repo")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd ~/builds\ngit clone https://aur.archlinux.org/xrdp-git.git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Check out specific version by tag")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd ~/builds/xrdp-git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("Build")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("makepkg -s\n\n[alanjui@VB3-ArchLinux-UEFI xrdp-git]$ ll\ntotal 604\ndrwxr-xr-x 6 alanjui alanjui   4096 Dec 26 20:41 .\ndrwxr-xr-x 3 alanjui alanjui   4096 Dec 26 20:24 ..\n-rw-r--r-- 1 alanjui alanjui   1883 Dec 26 20:24 arch-config.diff\n-rw-r--r-- 1 alanjui alanjui  78174 Dec 26 20:24 archlinux.bmp\ndrwxr-xr-x 8 alanjui alanjui   4096 Dec 26 20:24 .git\ndrwxr-xr-x 3 alanjui alanjui   4096 Dec 26 20:41 pkg\n-rw-r--r-- 1 alanjui alanjui   1852 Dec 26 20:41 PKGBUILD\ndrwxr-xr-x 3 alanjui alanjui   4096 Dec 26 20:40 src\n-rw-r--r-- 1 alanjui alanjui    699 Dec 26 20:24 .SRCINFO\ndrwxr-xr-x 7 alanjui alanjui   4096 Dec 26 20:40 xrdp-git\n-rw-r--r-- 1 alanjui alanjui 495229 Dec 26 20:41 xrdp-git-1:0.9.14.r77.ga033cf0e-1-x86_64.pkg.tar.zst\n-rw-r--r-- 1 alanjui alanjui    236 Dec 26 20:24 xrdp-git.install\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("Install")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo pacman -U xrdp-git-1\\:0.9.14.r77.ga033cf0e-1-x86_64.pkg.tar.zst\n[sudo] password for alanjui:\nloading packages...\nwarning: xrdp-git-1:0.9.14.r77.ga033cf0e-1 is up to date -- reinstalling\nresolving dependencies...\nlooking for conflicting packages...\n\nPackages (1) xrdp-git-1:0.9.14.r77.ga033cf0e-1\n\nTotal Installed Size:  2.23 MiB\nNet Upgrade Size:      0.00 MiB\n\n:: Proceed with installation? [Y/n] y\n(1/1) checking keys in keyring                                        [######################################] 100%\n(1/1) checking package integrity                                      [######################################] 100%\n(1/1) loading package files                                           [######################################] 100%\n(1/1) checking for file conflicts                                     [######################################] 100%\n(1/1) checking available disk space                                   [######################################] 100%\n:: Processing package changes...\n(1/1) reinstalling xrdp-git                                           [######################################] 100%\n:: Running post-transaction hooks...\n(1/2) Reloading system manager configuration...\n(2/2) Arming ConditionNeedsUpdate...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("Xrdp Service Status")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[alanjui@VB3-ArchLinux-UEFI ~]$ sudo systemctl status xrdp\n[sudo] password for alanjui:\nSorry, try again.\n[sudo] password for alanjui:\n● xrdp.service - xrdp daemon\n     Loaded: loaded (/usr/lib/systemd/system/xrdp.service; enabled; vendor preset: disabled)\n     Active: active (running) since Sat 2020-12-26 20:54:16 CST; 31s ago\n       Docs: man:xrdp(8)\n             man:xrdp.ini(5)\n    Process: 355 ExecStart=/usr/bin/xrdp (code=exited, status=0/SUCCESS)\n   Main PID: 359 (xrdp)\n      Tasks: 1 (limit: 2348)\n     Memory: 2.2M\n     CGroup: /system.slice/xrdp.service\n             └─359 /usr/bin/xrdp\n\nDec 26 20:54:15 VB3-ArchLinux-UEFI xrdp[355]:         LogLevel:      [INFO ]\nDec 26 20:54:15 VB3-ArchLinux-UEFI xrdp[355]:         ConsoleLevel:  <disabled>\nDec 26 20:54:15 VB3-ArchLinux-UEFI xrdp[355]:         SyslogLevel:   [INFO ]\nDec 26 20:54:15 VB3-ArchLinux-UEFI xrdp[355]: daemon process 359 started ok\nDec 26 20:54:15 VB3-ArchLinux-UEFI systemd[1]: xrdp.service: Can't open PID file /run/xrdp.pid (yet?) after start:>\nDec 26 20:54:16 VB3-ArchLinux-UEFI systemd[1]: Started xrdp daemon.\nDec 26 20:54:17 VB3-ArchLinux-UEFI xrdp[359]: [INFO ] starting xrdp with pid 359\nDec 26 20:54:17 VB3-ArchLinux-UEFI xrdp[359]: [INFO ] address [0.0.0.0] port [3389] mode 1\nDec 26 20:54:17 VB3-ArchLinux-UEFI xrdp[359]: [INFO ] listening to port 3389 on 0.0.0.0\nDec 26 20:54:17 VB3-ArchLinux-UEFI xrdp[359]: [INFO ] xrdp_listen_pp done\nlines 1-22/22 (END)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("Xrdp Session Manager")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[alanjui@VB3-ArchLinux-UEFI ~]$ sudo systemctl status xrdp-sesman\n● xrdp-sesman.service - xrdp session manager\nLoaded: loaded (/usr/lib/systemd/system/xrdp-sesman.service; enabled; vendor preset: disabled)\nActive: active (running) since Sat 2020-12-26 20:54:15 CST; 2min 24s ago\nDocs: man:xrdp-sesman(8)\n     man:sesman.ini(5)\nProcess: 348 ExecStart=/usr/bin/xrdp-sesman (code=exited, status=0/SUCCESS)\nMain PID: 354 (xrdp-sesman)\nTasks: 1 (limit: 2348)\nMemory: 1.2M\nCGroup: /system.slice/xrdp-sesman.service\n     └─354 /usr/bin/xrdp-sesman\n\nDec 26 20:54:15 VB3-ArchLinux-UEFI systemd[1]: Starting xrdp session manager...\nDec 26 20:54:15 VB3-ArchLinux-UEFI xrdp-sesman[354]: [INFO ] starting xrdp-sesman with pid 354\nDec 26 20:54:15 VB3-ArchLinux-UEFI systemd[1]: Started xrdp session manager.\nDec 26 20:54:15 VB3-ArchLinux-UEFI xrdp-sesman[354]: [INFO ] listening to port 3350 on 127.0.0.1\n[alanjui@VB3-ArchLinux-UEFI ~]$\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("/etc/X11/Xwrapper.config")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("allowed_users=anybody\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"使用-xrdp-git-安裝作業"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-xrdp-git-安裝作業"}},[s._v("#")]),s._v(" 使用 xrdp-git 安裝作業")]),s._v(" "),n("p",[n("strong",[s._v("安裝軟體套件")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("# Open source remote desktop protocol (RDP) server\n")])])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yay -Ss xrdp\nyay -S xrdp  # xrdp-git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("# Xorg drivers for xrdp\n")])])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yay -Ss xorgxrdp-git\nyay -S xorgxrdp-git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("運作流程：")]),s._v(" "),n("ul",[n("li",[s._v("需要的 Service\n"),n("ul",[n("li",[s._v("xrdp")]),s._v(" "),n("li",[s._v("xrdp-sesesman")])])]),s._v(" "),n("li",[s._v("Running as Terminal Server (Xorg)")])]),s._v(" "),n("p",[n("strong",[s._v("設定 xrdp 相關服務能於開機時自動啟用")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo systemctl enable xrdp\nsudo systemctl enable xrdp-sesman\nsudo systemctl start xrdp\nsudo systemctl status xrdp\nsudo systemctl status xrdp-sesman\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("設定任一使用者均可自行啟用 X Display Server")])]),s._v(" "),n("p",[s._v("/etc/X11/Xwrapper.config")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("allowed_users=anybody\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("設定「啟用 DE（桌面環境）」")])]),s._v(" "),n("p",[s._v("~/.xinitrc")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("exec gnome-session\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("設定使用者登入使用 VNC Session")]),s._v("\nRunning with Vino (Gnome VNC-Server for root session)")]),s._v(" "),n("p",[s._v("/etc/xrdp/xrdp.ini")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("....\n[xrdp8]\nname=Vino-Session\nlib=libvnc.so\nusername=ask\npassword=ask\nip=127.0.0.1\nport=5900\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("變更 vino-server 預設：只接受 TLS 連線之設定，改成： standard VNC authentication")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("gsettings set org.gnome.Vino require-encryption false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("重新啟動 xrdp server")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo systemctl restart xrdp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("使用 xfreerdp 驗證")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("/etc/default/locale\nN/A")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("設定 ~/.xinitrc")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("設定 /etc/X11/xinit/xinitrc")])])])])])}),[],!1,null,null,null);n.default=r.exports}}]);
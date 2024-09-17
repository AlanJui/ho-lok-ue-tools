(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{392:function(r,e,s){"use strict";s.r(e);var a=s(10),t=Object(a.a)({},(function(){var r=this,e=r._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"ubuntu-18-04-xrdp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-xrdp"}},[r._v("#")]),r._v(" Ubuntu 18.04 + xRDP")]),r._v(" "),e("p",[r._v("目前的經驗：xRDP 的運作，似乎都與 VNC 有著某種程度的關聯。")]),r._v(" "),e("p",[r._v("以下之安裝與設定，主要說明：在 Ubuntu 18.04 作業系統，如何與 RealVNC 的 VNC Server 相互搭配，構建 xRDP 環境，以便令執行  Microsoft Remote Desktop 之工具程式，可連上 Ubuntu Desktop 18.04 之電腦。")]),r._v(" "),e("h2",{attrs:{id:"_1-安裝-xrdp-軟體套件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安裝-xrdp-軟體套件"}},[r._v("#")]),r._v(" 1. 安裝 xRDP 軟體套件")]),r._v(" "),e("p",[r._v("在Ubuntu 18.04安裝xRDP 0.9.1")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("sudo add-apt-repository ppa:hermlnx/xrdp\nsudo apt-get update\nsudo apt-get install xrdp\n")])])]),e("p",[r._v("參考資訊：")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v('$ sudo add-apt-repository ppa:hermlnx/xrdp\n This PPA offers a backport of the Bionic xrdp package to Xenial LTS\n\nxrdp offers a graphical login to a remote client using RDP (the Remote Desktop Protocol). xrdp can connect to a locally created X.org session with the xorgxrdp drivers, to a VNC X11 server, and forward to another RDP server.\n\nIn the xorgxrdp (which replaces X11RDP) and VNC modes, it provides a fully functional Linux terminal server, offering an X-Window desktop to the user. In the RDP or VNC forwarding mode, any sort of desktop can be used.\n\nIf the Xorg server does not start through a RDP session after installation of this PPA packages, you may need to install the xserver-xorg-legacy package and/or set "allowed_users=anybody" in /etc/X11/Xwrapper.config to allow users, once they are logged in through xrdp, to start their own X server.\n 更多資訊：https://launchpad.net/~hermlnx/+archive/ubuntu/xrdp\n請輸入 [ENTER] 繼續，或 Ctrl-C 來取消加入動作\n')])])]),e("h2",{attrs:{id:"_2-安裝與設定-xserver-相閞軟體套件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安裝與設定-xserver-相閞軟體套件"}},[r._v("#")]),r._v(" 2. 安裝與設定 xserver 相閞軟體套件")]),r._v(" "),e("p",[e("strong",[r._v("安裝 xserver-xorg-legacyt 軟體套件")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("sudo apt-get install xserver-xorg-legacy\n")])])]),e("p",[e("strong",[r._v("執行 xserver-xorg-legacy 設定")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("sudo dpkg-reconfigure xserver-xorg-legacy\n# 可以啟動 X Server 的使用者： 選〔無限制〕\n")])])]),e("p",[r._v("完成上述設定後，將令 Xwrapper.config 設定檔案內容，變更如下：\n"),e("strong",[r._v("/etc/X11/Xwrapper.config")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("allowed_users=anybody\n")])])]),e("h2",{attrs:{id:"_3-重新啟動-xrdp-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-重新啟動-xrdp-service"}},[r._v("#")]),r._v(" 3. 重新啟動 xrdp Service")]),r._v(" "),e("p",[e("strong",[r._v("重新啟動 xrdp service，並檢查其執行狀態")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("sudo systemctl restart xrdp\nsudo systemctl status xrdp\n")])])]),e("p",[r._v("或⋯⋯")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("sudo service xrdp restart\nsudo service xrdp status\n\n\n$ sudo service xrdp status\n● xrdp.service - xrdp daemon\n   Loaded: loaded (/lib/systemd/system/xrdp.service; enabled; vendor preset: enabled)\n   Active: active (running) since Fri 2019-03-29 13:53:56 CST; 2h 28min ago\n     Docs: man:xrdp(8)\n           man:xrdp.ini(5)\n  Process: 1983 ExecStart=/usr/local/sbin/xrdp $XRDP_OPTIONS (code=exited, status=0/SUCCESS)\n Main PID: 2036 (xrdp)\n    Tasks: 1 (limit: 4915)\n   CGroup: /system.slice/xrdp.service\n           └─2036 /usr/local/sbin/xrdp\n\n 3月 29 16:12:41 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] Closed socket 18 (AF_INET 127.0.0.1:35650)\n 3月 29 16:12:41 SRV-01 xrdp[4631]: (4631)(139720457262912)[INFO ] The following channel is allowed: rdpdr (0)\n 3月 29 16:12:42 SRV-01 xrdp[4631]: (4631)(139720457262912)[INFO ] The following channel is allowed: rdpsnd (1)\n 3月 29 16:12:42 SRV-01 xrdp[4631]: (4631)(139720457262912)[INFO ] The following channel is allowed: cliprdr (2)\n 3月 29 16:12:42 SRV-01 xrdp[4631]: (4631)(139720457262912)[INFO ] The following channel is allowed: drdynvc (3)\n 3月 29 16:12:42 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] The allow channel list now initialized for this session\n 3月 29 16:16:07 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] Closed socket 12 (AF_INET 192.168.66.10:3389)\n 3月 29 16:16:08 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] xrdp_mm_module_cleanup\n 3月 29 16:16:08 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] Closed socket 19 (AF_UNIX)\n 3月 29 16:16:08 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] Closed socket 20 (AF_UNIX)\n")])])]),e("hr"),r._v(" "),e("h1",{attrs:{id:"與-xrdp-service-運作相關設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#與-xrdp-service-運作相關設定"}},[r._v("#")]),r._v(" 與 xRDP Service 運作相關設定")]),r._v(" "),e("h2",{attrs:{id:"vnc-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vnc-server"}},[r._v("#")]),r._v(" VNC Server")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://www.hep.phy.cam.ac.uk/vnc_docs/Xvnc.gif",alt:"Xvnc.gif (3567 bytes)"}})]),r._v(" "),e("p",[r._v("xvnc 指：X-Based VNC Server。（參考： https://www.hep.phy.cam.ac.uk/vnc_docs/xvnc.html ）")]),r._v(" "),e("p",[r._v("VNC Connect 6.2.0 安裝於 Ubuntu 作業系統，尚需透過 xvnc 才能正運作。所以，當使用 VNC Viewer 連上： Ubuntu Desktop 18.04 之電腦，若是發生 Grey Screen 狀況，無法正常運作時，則就需要進行  "),e("a",{attrs:{href:"https://help.realvnc.com/hc/en-us/articles/360003474792",target:"_blank",rel:"noopener noreferrer"}},[r._v("switch desktop environment"),e("OutboundLink")],1),r._v(" 作業，以解決此問題。")]),r._v(" "),e("h2",{attrs:{id:"xrdp-service-設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xrdp-service-設定"}},[r._v("#")]),r._v(" xRDP Service 設定")]),r._v(" "),e("p",[r._v("xrdp.service 檔案的設定內容如下。此設定雖未指定User與Group，但代表使用預設，指定為 root:root 。")]),r._v(" "),e("p",[e("strong",[r._v("/lib/systemd/system/xrdp.service")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("[Unit]\nDescription=xrdp daemon\nDocumentation=man:xrdp(8) man:xrdp.ini(5)\nRequires=xrdp-sesman.service\nAfter=network.target xrdp-sesman.service\n\n[Service]\nType=forking\nPIDFile=/var/run/xrdp.pid\nEnvironmentFile=-/etc/sysconfig/xrdp\nEnvironmentFile=-/etc/default/xrdp\nExecStart=/usr/local/sbin/xrdp $XRDP_OPTIONS\nExecStop=/usr/local/sbin/xrdp $XRDP_OPTIONS --kill\n\n[Install]\nWantedBy=multi-user.target\n")])])]),e("p",[e("strong",[r._v("配合上述 xrdp.service 之設定。故檔案 xrdp.pid ，其預設之檔案擁有者，無論「使用者」與「群組」，皆為： root 。")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("$ ls -al /run/xrdp.pid\n")])])]),e("p",[r._v("若是設定不對，可依以下指令，"),e("strong",[r._v("變更檔案 xrdp.pid 的擁有者為 root。")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("$ sudo chown -R root:root /run/xrdp.pid\n$ ls -al /run/xrdp.pid\n-rw------- 1 root root 4  3月 29 13:53 /run/xrdp.pid\n")])])]),e("h2",{attrs:{id:"xrdp-sesman-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xrdp-sesman-service"}},[r._v("#")]),r._v(" xRDP sesman Service")]),r._v(" "),e("p",[r._v("檢視 xrdp-sesman.service 設定檔，確認沒有與 User / Group 相關的設定：")]),r._v(" "),e("p",[e("strong",[r._v("/lib/systemd/system/xrdp-sesman.service")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("[Unit]\nDescription=xrdp session manager\nDocumentation=man:xrdp-sesman(8) man:sesman.ini(5)\nAfter=network.target\nStopWhenUnneeded=true\nBindsTo=xrdp.service\n\n[Service]\nType=forking\nPIDFile=/var/run/xrdp-sesman.pid\nEnvironmentFile=-/etc/sysconfig/xrdp\nEnvironmentFile=-/etc/default/xrdp\nExecStart=/usr/local/sbin/xrdp-sesman $SESMAN_OPTIONS\nExecStop=/usr/local/sbin/xrdp-sesman $SESMAN_OPTIONS --kill\n\n[Install]\nWantedBy=multi-user.target\n")])])]),e("p",[r._v("設定檔中之內容，若有變更 User、Group ，將之變更成 root 。")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("...\nUser=root\nGroup=root\n...\n")])])]),e("hr"),r._v(" "),e("h1",{attrs:{id:"異常問題排解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#異常問題排解"}},[r._v("#")]),r._v(" 異常問題排解")]),r._v(" "),e("h2",{attrs:{id:"無法啟動-xrdp-service-pid-file-權限不足"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#無法啟動-xrdp-service-pid-file-權限不足"}},[r._v("#")]),r._v(" 無法啟動 xrdp service — PID file 權限不足")]),r._v(" "),e("p",[r._v("啟動 xrdp service  ，卻發生如下之錯誤….")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("...\nxrdp.service: PID file /var/run/xrdp/xrdp.pid not readable (yet?) after start: No such file or directory\n...\n")])])]),e("p",[r._v("重")]),r._v(" "),e("hr"),r._v(" "),e("h1",{attrs:{id:"在-debian-9-安裝-xrdp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-debian-9-安裝-xrdp"}},[r._v("#")]),r._v(" 在 Debian 9 安裝 xRDP")]),r._v(" "),e("p",[e("strong",[r._v("（1）安裝軟體套件及設定")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("sudo apt install xrdp guacamole\n")])])]),e("p",[r._v("【註】：")]),r._v(" "),e("ol",[e("li",[r._v("不用安裝 xserver-xorg-legacy 套件")]),r._v(" "),e("li",[r._v("/etc/X11/Xwrapper.config 設定檔的內容，使用預設不要改：\nallowed_users=console")])]),r._v(" "),e("p",[e("strong",[r._v("（2）啟動 Service")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("sudo reboot\n")])])]),e("p",[r._v("不用執行：")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("sudo systemctl daemon-reload\nsudo systemctl enable xrdp\nsudo systemctl restart xrdp\n")])])]),e("p",[e("strong",[r._v("（3）XRDP Client 連線")]),r._v("\n連線時的「使用者帳號」，使用有「login」權限者尸。")]),r._v(" "),e("ul",[e("li",[r._v("protocol: xvnc")]),r._v(" "),e("li",[r._v("user:")]),r._v(" "),e("li",[r._v("password:")])]),r._v(" "),e("hr"),r._v(" "),e("h2",{attrs:{id:"使用-xrdp-帳號"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-xrdp-帳號"}},[r._v("#")]),r._v(" 使用 xrdp 帳號")]),r._v(" "),e("p",[r._v("確認作業系統已建立「群組： xrdp」、「使用者：xrdp」：")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("#cat /etc/groups | grep xrdp\n$ groups xrdp\nxrdp : xrdp\n\n#cat /etc/passwd | grep xrdp\n$ id xrdp\nuid=123(xrdp) gid=130(xrdp) 群組=130(xrdp)\n")])])]),e("p",[r._v("將 user: root 加入 group: xrdp")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("$ sudo usermod -a -G xrdp root\n\n$ id root\nuid=0(root) gid=0(root) 群組=0(root),130(xrdp)\n\n\n\n$ ll /var/run/xrdp/xrdp.pid\n-rw------- 1 xrdp xrdp 4 May 13 13:57 /var/run/xrdp/xrdp.pid\n\n$ sudo chmod 660 /var/run/xrdp/xrdp.pid\n\n$ ll /var/run/xrdp/xrdp.pid\n-rw-rw---- 1 xrdp xrdp 4 May 13 13:57 /var/run/xrdp/xrdp.pid\n")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{397:function(s,a,t){"use strict";t.r(a);var e=t(10),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu-18-04-安裝筆記"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-安裝筆記"}},[s._v("#")]),s._v(" Ubuntu 18.04 安裝筆記")]),s._v(" "),a("h1",{attrs:{id:"作業系統基礎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作業系統基礎"}},[s._v("#")]),s._v(" 作業系統基礎")]),s._v(" "),a("h2",{attrs:{id:"硬碟規劃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬碟規劃"}},[s._v("#")]),s._v(" 硬碟規劃")]),s._v(" "),a("ul",[a("li",[s._v("/dev/sda1\n"),a("ul",[a("li",[s._v("分割區類型：Linux 置換區（SWAP）")]),s._v(" "),a("li",[s._v("格式： Ext 4")]),s._v(" "),a("li",[s._v("掛載點： （N/A）")]),s._v(" "),a("li",[s._v("容量： 16 GB (16382 KB)")])])]),s._v(" "),a("li",[s._v("/dev/sda2\n"),a("ul",[a("li",[s._v("分割區類型：Linux 檔案系統")]),s._v(" "),a("li",[s._v("格式： Ext 4")]),s._v(" "),a("li",[s._v("掛載點： /")]),s._v(" "),a("li",[s._v("容量： 222 GB")])])]),s._v(" "),a("li",[s._v("/deb/sda3\n"),a("ul",[a("li",[s._v("分割區類型：Linux 檔案系統")]),s._v(" "),a("li",[s._v("格式： Ext 4")]),s._v(" "),a("li",[s._v("掛載點： /home")]),s._v(" "),a("li",[s._v("容量： 262 GB")])])])]),s._v(" "),a("h2",{attrs:{id:"網路設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#網路設定"}},[s._v("#")]),s._v(" 網路設定")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("IP: 192.168.66.10/24")])]),s._v(" "),a("li",[a("p",[s._v("Gateway: 192.168.66.1")])]),s._v(" "),a("li",[a("p",[s._v("DNS： 192.168.66.1")]),s._v(" "),a("p",[s._v("sudo apt install net-tools nmap curl")])])]),s._v(" "),a("h2",{attrs:{id:"裝置設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#裝置設定"}},[s._v("#")]),s._v(" 裝置設定")]),s._v(" "),a("ul",[a("li",[s._v("音效卡")]),s._v(" "),a("li",[s._v("USB Web Cam / 麥克風")]),s._v(" "),a("li",[s._v("電源/節省電源/螢幕轉黑：永不")])]),s._v(" "),a("h2",{attrs:{id:"中文輸入法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中文輸入法"}},[s._v("#")]),s._v(" 中文輸入法")]),s._v(" "),a("p",[a("strong",[s._v("（1）設定/地區和語言/語言支援/安裝")]),s._v(" "),a("strong",[s._v("（2）設定/地區和語言/鍵盤輸入法系統：IBus")]),s._v(" "),a("strong",[s._v("（3）重新開機（登出/登入不再生效）")]),s._v(" "),a("strong",[s._v("（4）設定/地區和語言/安裝或移除語言/中文（簡體字）")]),s._v(" "),a("strong",[s._v("（5）登出/登入")]),s._v(" "),a("strong",[s._v("（6）設定/地區和語言/加入輸入來源/漢語（中國）/漢語（Intelligent Pinyin）")]),s._v(" "),a("strong",[s._v("（6）設定/地區和語言/漢語（Intelligent Pinyin）/偏好設定")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("- 常規/初始狀態/中文/繁體\n- 常規/外觀/每頁顯示候選詞條目數量/10\n- 模糊音/啟用模糊音（一般）\n\n\n$ sudo apt install fcitx fcitx-googlepinyin fcitx-chewing fcitx-table-cangjie5\n")])])]),a("h2",{attrs:{id:"其它工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它工具"}},[s._v("#")]),s._v(" 其它工具")]),s._v(" "),a("p",[s._v("使用「軟體」安裝以下套件：")]),s._v(" "),a("ul",[a("li",[s._v("Dconf 編輯器")]),s._v(" "),a("li",[s._v("Synaptic Package Manager")]),s._v(" "),a("li",[s._v("Sublime Text Editor")])]),s._v(" "),a("p",[s._v("Sublime Text 3\n透過 Bash Script 安裝（此法會順帶解決 Ubuntu 版的 Sublime Text 3 無法輸入中文的問題）")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ cd ~/Applications\n$ git clone https://github.com/lyfeyaj/sublime-text-imfix.git\n$ cd sublime-text-imfix\n$ ./sublime-imfix\n")])])]),a("p",[s._v("標準安裝法")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('$ wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -\n$ echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list\n$ sudo apt update\n$ sudo apt install sublime-text\n')])])]),a("p",[s._v("VS Code")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg\n$ sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg\n$ sudo sh -c 'echo \"deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main\" > /etc/apt/sources.list.d/vscode.list'\n$ sudo apt update\n$ sudo apt install code\n")])])]),a("hr"),s._v(" "),a("h1",{attrs:{id:"ssh安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh安裝"}},[s._v("#")]),s._v(" SSH安裝")]),s._v(" "),a("p",[s._v("https://www.linuxbabe.com/linux-server/setup-passwordless-ssh-login")]),s._v(" "),a("h2",{attrs:{id:"安裝套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝套件"}},[s._v("#")]),s._v(" 安裝套件")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo apt install ssh\n")])])]),a("h2",{attrs:{id:"產生-rsa-公-私鑰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#產生-rsa-公-私鑰"}},[s._v("#")]),s._v(" 產生 RSA 公／私鑰")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("ssh-keygen -t rsa\n")])])]),a("h2",{attrs:{id:"將-rsa-公鑰複製到遠端機器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#將-rsa-公鑰複製到遠端機器"}},[s._v("#")]),s._v(" 將  RSA 公鑰複製到遠端機器")]),s._v(" "),a("p",[s._v("執行以下指令，可將 RSA 公鑰複製到遠端的機器。往後再透過 ssh "),a("UserName",[s._v("@"),a("ServerIP",[s._v(" 連接遠端機器時，可省略「使用者密碼」之輸入。")])],1)],1),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("# ssh-copy-id remote-user@server-ip\n$ ssh-copy-id alanjui@192.168.66.10\n")])])]),a("h2",{attrs:{id:"重新安裝-ssh-後-無法再連上先前已可連上線之-ssh-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新安裝-ssh-後-無法再連上先前已可連上線之-ssh-server"}},[s._v("#")]),s._v(" 重新安裝 ssh 後，無法再連上先前已可連上線之 ssh server")]),s._v(" "),a("p",[s._v("曾透過 ssh 登入過這台伺服器的 Client 端，會有無法連線的問題發生：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ ssh alanjui@192.168.66.10\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\nThe fingerprint for the ECDSA key sent by the remote host is\nSHA256:DOktDVrmw7MJgAlqhWOZExCIrqOT1j+usEYUeSxK6N4.\nPlease contact your system administrator.\nAdd correct host key in /Users/AlanJui/.ssh/known_hosts to get rid of this message.\nOffending ECDSA key in /Users/AlanJui/.ssh/known_hosts:153\nECDSA host key for 192.168.66.10 has changed and you have requested strict checking.\nHost key verification failed.\n")])])]),a("p",[s._v("以上的問題，主要係源自於曾連線過的 client 端，其「家目錄」所存放的「公開憑證」（或說： Public Key），因伺服器重安裝，以致原用之「公開憑證」已不復存在，故而當 client 要求連線時，會收到由伺服器傳來的新公開憑證時，當 client 端與已存檔的憑證比對時，會發生不符的問題，故而 client 端拒絕與伺服器連線。")]),s._v(" "),a("p",[s._v("使用 Editor 剛掉檔案： ~/.ssh/known_hosts 中的  153 行")]),s._v(" "),a("p",[s._v("或：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('ssh-keygen -f "~/.ssh/known_hosts" -R 192.168.66.10\n')])])]),a("hr"),s._v(" "),a("h1",{attrs:{id:"xrdp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xrdp"}},[s._v("#")]),s._v(" xrdp")]),s._v(" "),a("p",[s._v("安裝")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo -s\nsudo apt install xrdp xrdp-pulseaudio-installer\n")])])]),a("p",[s._v("驗證服務已被啟動")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("systemctl status xrdp\n")])])]),a("p",[s._v("要求作業系統重開機")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo reboot\n")])])]),a("p",[s._v("驗證 Port: 3389 已被監聽")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("netstat -tpnl\n")])])]),a("p",[s._v("自 Client 端驗證 XRDP Server 已能監聽 3389")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("nmap -p 3389 192.168.66.10\n")])])]),a("p",[s._v("自 Client 端驗證 XRDP Server 已能透過 Port: 3389 進行連線")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ telnet 192.168.66.10 3389\nTrying 192.168.66.10...\nConnected to SRV-01.\nEscape character is '^]'.\n")])])]),a("p",[s._v("自 client 端，透過 Windows 的「遠端桌面」連線到伺服器")]),s._v(" "),a("ul",[a("li",[s._v("通信協定：xorg")]),s._v(" "),a("li",[s._v("使用者：  alanjui")]),s._v(" "),a("li",[s._v("密碼：")])]),s._v(" "),a("p",[s._v("異常狀況：")]),s._v(" "),a("p",[s._v("要求核對：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("Authentication is required to create a color profile\n...... to create a color managed device\n\n\nsudo apt install gnome-tweak-tool\n")])])]),a("p",[a("strong",[s._v("/etc/polkit-1/localauthority.conf.d")]),s._v("/"),a("strong",[s._v("02-allow-colord.conf")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('polkit.addRule(function(action, subject) {\n    if ((action.id == "org.freedesktop.color-manager.create-device" ||\n         action.id == "org.freedesktop.color-manager.modify-profile" ||\n         action.id == "org.freedesktop.color-manager.delete-device" ||\n         action.id == "org.freedesktop.color-manager.create-profile" ||\n         action.id == "org.freedesktop.color-manager.modify-profile" ||\n         action.id == "org.freedesktop.color-manager.delete-profile") &&\n        subject.isInGroup("{group}"))\n    {\n        return polkit.Result.YES;\n    }\n});\n')])])]),a("p",[s._v("/etc/polkit-1/localauthority/50-local.d/45-allow.colord.pkla")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[Allow Colord all Users]\nIdentity=unix-user:*\nAction=org.freedesktop.color-manager.create-device;org.freedesktop.color-manager.create-profile;org.freedesktop.color-manager.delete-device;org.freedesktop.color-manager.delete-profile;org.freedesktop.color-manager.modify-device;org.freedesktop.color-manager.modify-profile\nResultAny=no\nResultInactive=no\nResultActive=yes\n")])])]),a("p",[s._v("確認沒使用 Xwarapper.config 這個設定檔： "),a("s",[s._v("/etc/X11/Xwrapper.config")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("allowed_users=anybody\n")])])]),a("p",[s._v("更改 xrdp 服務設定（ /etc/xrdp/xrdp.ini）")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[console]\n...\nip=0.0.0.0\n...\n")])])]),a("p",[a("strong",[s._v("重新啟動 xrdp")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo systemctl restart xrdp\n")])])]),a("p",[s._v("自 Client 端以「Windows 遠端桌面」連線到 XRDP Server (192.168.66.10)")]),s._v(" "),a("ul",[a("li",[s._v("Session： console")]),s._v(" "),a("li",[s._v("password: "),a("VNC",{attrs:{Server:"",connect:"",password:""}})],1)]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"vnc-server-安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vnc-server-安裝"}},[s._v("#")]),s._v(" VNC Server 安裝")]),s._v(" "),a("p",[a("strong",[s._v("（1）先在 Ubuntu Desktop 電腦，透過，完成「螢幕分享」的設定工作。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://d2mxuefqeaa7sj.cloudfront.net/s_658302B4FACACF076DDCB0704829364CC3EE5F7037E5F4737FCB9B1DBABBDAE1_1524743791656_image.png",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("（2）打開「終端機」，輸入以下指令，確認 vnc server （vino server）的服務已啟動。")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("netstat -tpnl\n")])])]),a("p",[s._v("在終端機的輸出畫面，於 Local Address 欄位，找尋 0.0.0.0:5900 ，若有看到，表示 vnc server 已正式啟動；若否，最好就「重開機」，令作業系統自動去啟動 vnc server 。")]),s._v(" "),a("p",[a("strong",[s._v("（3）打開「終端機」，輸入以下指令，要求 vnc server 對於畫面資料，無需進行加密處理。")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ gsettings set org.gnome.Vino require-encryption false\n")])])]),a("p",[a("strong",[s._v("（4）在另一台電腦，以 vnc client軟體（如：realvnc viewer）連上 VNC Server。")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"在-client-端用-vnc-viewer-連上另一台-ubuntu-desktop-電腦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-client-端用-vnc-viewer-連上另一台-ubuntu-desktop-電腦"}},[s._v("#")]),s._v(" 在 Client 端用 VNC Viewer 連上另一台 Ubuntu Desktop 電腦")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ vncviewer 192.168.66.10:0\n")])])]),a("p",[a("img",{attrs:{src:"https://d2mxuefqeaa7sj.cloudfront.net/s_B24A85039E505F12422DD7B29F6A13606C1039D1D30F815B98507EA8ACB3DEF4_1526523381209_2018-05-17+10-14-18+.png",alt:""}})]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"x11vnc-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x11vnc-service"}},[s._v("#")]),s._v(" X11VNC Service")]),s._v(" "),a("p",[s._v("安裝軟體套件。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo apt install x11vnc\n")])])]),a("p",[s._v("建立 VNC Server 的密碼檔。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo x11vnc -storepasswd /etc/x11vnc.passwd\n")])])]),a("p",[s._v("查詢 Xauthority 檔案的存放路徑。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("ps wwwaux | grep auth\n")])])]),a("p",[s._v("建立 x11vnc 的服務設定檔： /lib/systemd/system/x11vnc.service")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[Unit]\nDescription=Start x11vnc at startup.\nAfter=multi-user.target\n\n[Service]\nType=simple\nExecStart=/usr/bin/x11vnc -auth /run/user/1001/gdm/Xauthority -forever -loop -noxdamage -repeat -rfbauth /etc/x11vnc.pass -rfbport 5900 -shared\n\n[Install]\nWantedBy=multi-user.target\n")])])]),a("p",[s._v("啟用及啟動 x11vnc 服務。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo systemctl enable x11vnc\nsudo systemctl daemon-reload\nsudo systemctl start x11vnc\n")])])]),a("p",[s._v("驗證 x11vnc 服務已正常啟動。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("systemctl status x11vnc\n")])])]),a("p",[s._v("使用 VNC Client 軟體連線，驗證已能正常運作。")]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"安裝-chrome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-chrome"}},[s._v("#")]),s._v(" 安裝 Chrome")]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"安裝-smba-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-smba-server"}},[s._v("#")]),s._v(" 安裝 Smba Server")]),s._v(" "),a("p",[a("strong",[s._v("(1)")]),s._v(" "),a("a",{attrs:{href:"https://paper.dropbox.com/doc/1mdbnlQwSCTnP92XpO1vv",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[s._v("掛載第二顆硬碟")]),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("(2)")]),s._v(" "),a("a",{attrs:{href:"https://paper.dropbox.com/doc/Samba-Z1HipynH9jnqa5S697mwG",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[s._v("安裝與設定 Samba Server")]),a("OutboundLink")],1)]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"調整-python-設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#調整-python-設定"}},[s._v("#")]),s._v(" 調整 Python 設定")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1\nsudo update-alternatives --install /usr/bin/python python /usr/bin/python3.6 2\n\nsudo update-alternatives --config python\n# 選（2）\n\n\nalanjui@SRV-01:~$ ls -larth `which python`*\n-rwxr-xr-x 1 root root  152 Nov 11  2017 /usr/bin/python3-pbr\n-rwxr-xr-x 1 root root 4.4M Apr  1 13:46 /usr/bin/python3.6m\n-rwxr-xr-x 1 root root 4.4M Apr  1 13:46 /usr/bin/python3.6\n-rwxr-xr-x 1 root root 3.5M Apr 16 05:51 /usr/bin/python2.7\nlrwxrwxrwx 1 root root    9 Apr 16 22:31 /usr/bin/python2 -> python2.7\nlrwxrwxrwx 1 root root   10 May 15 07:26 /usr/bin/python3m -> python3.6m\nlrwxrwxrwx 1 root root   24 May 17 20:49 /usr/bin/python -> /etc/alternatives/python\nlrwxrwxrwx 1 root root   25 May 17 20:52 /usr/bin/python3 -> /etc/alternatives/python3\nalanjui@SRV-01:~$ sudo update-alternatives --config python\n[sudo] password for alanjui: \n替代項目 python（提供 /usr/bin/python）有 2 個選擇。\n\n  選項       路徑              優先權  狀態\n------------------------------------------------------------\n* 0            /usr/bin/python3.6   2         自動模式\n  1            /usr/bin/python2.7   1         手動模式\n  2            /usr/bin/python3.6   2         手動模式\n\nPress <enter> to keep the current choice[*], or type selection number: 0\nalanjui@SRV-01:~$ \n")])])]),a("hr"),s._v(" "),a("h1",{attrs:{id:"影音工具軟體安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影音工具軟體安裝"}},[s._v("#")]),s._v(" 影音工具軟體安裝")]),s._v(" "),a("p",[s._v("使用 Synaptic 套件管理員，以批次方式安裝下列軟體：")]),s._v(" "),a("ul",[a("li",[s._v("桌面錄影： vokoscreen")]),s._v(" "),a("li",[s._v("錄音： audacity")]),s._v(" "),a("li",[s._v("影片剪輯：openshot, pitivi")]),s._v(" "),a("li",[s._v("影音播放：vlc")]),s._v(" "),a("li",[s._v("影像處理：gimp gimp-dcraw, darktable")])]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"開發工具安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#開發工具安裝"}},[s._v("#")]),s._v(" 開發工具安裝")]),s._v(" "),a("ul",[a("li",[s._v("git")]),s._v(" "),a("li",[s._v("docker")]),s._v(" "),a("li",[s._v("guake")])]),s._v(" "),a("h2",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[s._v("#")]),s._v(" Python")]),s._v(" "),a("ul",[a("li",[s._v("aconda")]),s._v(" "),a("li",[s._v("PyCharm")])]),s._v(" "),a("h2",{attrs:{id:"nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[s._v("#")]),s._v(" NodeJS")]),s._v(" "),a("ul",[a("li",[s._v("n")]),s._v(" "),a("li",[s._v("node & npm")]),s._v(" "),a("li",[s._v("WebStorm")])]),s._v(" "),a("h2",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[s._v("#")]),s._v(" 其它")]),s._v(" "),a("ul",[a("li",[s._v("VS Code")]),s._v(" "),a("li",[s._v("VirtualBox")]),s._v(" "),a("li",[s._v("Heroku CLI")]),s._v(" "),a("li",[s._v("PostgreSQL")]),s._v(" "),a("li",[s._v("pgAdmin")])]),s._v(" "),a("h2",{attrs:{id:"使用「ubuntu-軟體」安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用「ubuntu-軟體」安裝"}},[s._v("#")]),s._v(" 使用「Ubuntu 軟體」安裝")]),s._v(" "),a("ul",[a("li",[s._v("PyCharm: PyCharm Pro")]),s._v(" "),a("li",[s._v("WebStorm: WebStorm")]),s._v(" "),a("li",[s._v("VS Code: vscode")]),s._v(" "),a("li",[s._v("GUI Git: GitKraken")]),s._v(" "),a("li",[s._v("Heroku CLI: heroku")])]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"virtualbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox"}},[s._v("#")]),s._v(" VirtualBox")]),s._v(" "),a("p",[s._v("使用 Oracle VirtualBox PPA to Ubuntu system 套件庫安裝。")]),s._v(" "),a("p",[s._v("取得官方套件庫的 Public Key")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -\n$ wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -\n")])])]),a("p",[s._v("建立套件庫來源設定檔（ /etc/apt/source.list.d/virtualbox.list ）")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic edge\n")])])]),a("p",[s._v("簡略法：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('$ sudo add-apt-repository "deb http://download.virtualbox.org/virtualbox/debian `lsb_release -cs` contrib"\n')])])]),a("p",[s._v("安裝軟體")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo apt update\nsudo apt install virtualbox-5.2\n")])])]),a("p",[s._v("驗證作業")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("virtualbox\n")])])]),a("p",[s._v("下載 VirtualBox Extension Pack")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("https://www.virtualbox.org/kiki/Downloads\n")])])]),a("p",[s._v("點擊以下之連結，以便下載檔案。\nVirtualBox 5.2.12 Oracle VM VritualBox Extension Pack / All supported platforms")]),s._v(" "),a("p",[s._v("自檔案總管雙擊已下載檔案，以便啟動安裝作業。")]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"nodejs-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-2"}},[s._v("#")]),s._v(" NodeJS")]),s._v(" "),a("p",[s._v("安裝 NodeJS 套件管理工具：n")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("curl -L https://git.io/n-install | bash\n")])])]),a("p",[s._v("驗證")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ n\nnode/10.2.0\n\n$ node -v\nv10.2.0\n\n$ npm -v\n5.6.0\n")])])]),a("hr"),s._v(" "),a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),a("h2",{attrs:{id:"産生ssh用公-私鑰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#産生ssh用公-私鑰"}},[s._v("#")]),s._v(" 産生ssh用公／私鑰")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("ssh-keygen\n\n\n$ ssh-keygen\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/home/alanjui/.ssh/id_rsa): \nEnter passphrase (empty for no passphrase): \nEnter same passphrase again: \nYour identification has been saved in /home/alanjui/.ssh/id_rsa.\nYour public key has been saved in /home/alanjui/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:U4TPrvgzuO/uG0ljRDdwxVR/yGqnx90tqQwQj8fa0UU alanjui@SRV-01\nThe key's randomart image is:\n+---[RSA 2048]----+\n|        oo=+o.E  |\n|       ..+ ..o o |\n|        oo.   + o|\n|       . *o. o  .|\n|        S.= + .  |\n|       o O.o + oo|\n|       o+.o . = +|\n|      o +. o o . |\n|      .BB+  o    |\n+----[SHA256]-----+\nalanjui@SRV-01:~$ ll ~/.ssh\n總計 20\ndrwx------  2 alanjui alanjui 4096  5月 24 21:15 ./\ndrwxr-xr-x 27 alanjui alanjui 4096  5月 24 21:07 ../\n-rw-------  1 alanjui alanjui 1675  5月 24 21:15 id_rsa\n-rw-r--r--  1 alanjui alanjui  396  5月 24 21:15 id_rsa.pub\n-rw-r--r--  1 alanjui alanjui  884  5月 24 21:07 known_hosts\n")])])]),a("h2",{attrs:{id:"將-ssh-公鑰匯出並儲到各git-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#將-ssh-公鑰匯出並儲到各git-repo"}},[s._v("#")]),s._v(" 將 ssh 公鑰匯出並儲到各Git Repo")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("cat ~/.ssh/id_rsa.pub\n")])])]),a("h2",{attrs:{id:"git-軟體安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-軟體安裝"}},[s._v("#")]),s._v(" Git 軟體安裝")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo apt update\n$ sudo apt install git \n")])])]),a("h2",{attrs:{id:"git軟體設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git軟體設定"}},[s._v("#")]),s._v(" Git軟體設定")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('$ git config --global user.email "alanjui.1960@gmail.com"\n$ git config --global user.name "Alan Jui"\n')])])]),a("h2",{attrs:{id:"安裝git-prompt提示工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝git-prompt提示工具"}},[s._v("#")]),s._v(" 安裝Git Prompt提示工具")]),s._v(" "),a("p",[a("strong",[s._v("(1) 安裝軟體")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("cd ~\ngit clone https://github.com/magicmonty/bash-git-prompt.git .bash-git-prompt --depth=1\n")])])]),a("p",[a("strong",[s._v("(2) 設定軟體：在檔案")]),s._v(" "),a("code",[s._v("~/.bashrc")]),s._v(" 內加入如下設定")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("......\nGIT_PROMPT_ONLY_IN_REPO=1\nsource ~/.bash-git-prompt/gitprompt.sh\n")])])]),a("hr"),s._v(" "),a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),a("p",[s._v("使用 Docker 官網提供的 Repo 進行軟體套件安裝作業。")]),s._v(" "),a("h2",{attrs:{id:"基本安裝作業"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本安裝作業"}},[s._v("#")]),s._v(" 基本安裝作業")]),s._v(" "),a("p",[s._v("刪除舊版軟體。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo apt-get remove docker docker-engine docker.io\n")])])]),a("p",[s._v("更新作業系統套件庫。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo apt update\n")])])]),a("p",[s._v("備妥安裝前置需求軟體。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo apt install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    software-properties-common\n")])])]),a("p",[s._v("在作業系統加入 Docker 官方套件庫的 GPG Key。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n")])])]),a("p",[s._v("建立套件庫來源設定檔： /etc/apt/source.list.d/docker.list")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable\n")])])]),a("p",[s._v("在 5/18 日，stable 版尚無法使用，需先改成 edge ；待 stable 版正式啟用後，再將 edge 改成 stable 。")]),s._v(" "),a("p",[s._v("【註】：Ubuntu 18.04 作業系統的「版本代號」，可用以下指令查詢。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ lsb_release -cs\n")])])]),a("p",[s._v("安裝軟體。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo apt update\n$ sudo apt install docker-ce\n")])])]),a("p",[s._v("設定檔：")]),s._v(" "),a("ul",[a("li",[s._v("/etc/init.d/docker")]),s._v(" "),a("li",[s._v("/etc/init/docker.conf")])]),s._v(" "),a("p",[s._v("SymLink /etc/systemd/system/multiuser.garget.wants/docker.service ==> /lib/systemd/system/docker.service")]),s._v(" "),a("p",[s._v("驗證作業。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("systemctl status docker\nsudo docker run hello-world\nsudo docker ps -a\n")])])]),a("h2",{attrs:{id:"可以非-root-帳號操作-docker-設定作業"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可以非-root-帳號操作-docker-設定作業"}},[s._v("#")]),s._v(" 可以非 root 帳號操作 docker 設定作業")]),s._v(" "),a("p",[a("s",[s._v("建立 docker 群組。")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo groupadd docker\n")])])]),a("p",[s._v("將目前已登入使用者帳號，加入 docker 群組中。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo usermod -aG docker $USER\n")])])]),a("p",[s._v("驗證使用者帳號已加入 docker 群組：\n註：可能是 Ubuntu 有ｂｕｇ，執行以下指令前，最好先重開機（只做到登出/登入層級，仍不夠）。")]),s._v(" "),a("p",[s._v("驗證已有 docker 群組：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ groups\nalanjui adm cdrom sudo dip plugdev lpadmin sambashare docker\n\n\n$ cat /etc/group | grep docker\n")])])]),a("p",[s._v("驗證目前已登入的使用者帳號，被加入到 docker 群組中：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ id -Gn\nalanjui adm cdrom sudo dip plugdev lpadmin sambashare docker\n")])])]),a("p",[s._v("驗證作業")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("docker run hello-world\n")])])]),a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" Docker-compose")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo apt install docker-compose\n")])])]),a("hr"),s._v(" "),a("h1",{attrs:{id:"python-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-2"}},[s._v("#")]),s._v(" Python")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo update\nsudo apt install python-minimal\npython -V\npip -V\n\n\n\nsudo -H pip install virtualenv virtualenvwrapper\nsudo -H pip install --upgrade pip\n\n\n$ sudo apt install python2.7 python-pip\n正在讀取套件清單... 完成\n正在重建相依關係          \n正在讀取狀態資料... 完成\n以下套件為自動安裝，並且已經無用：\n  attr gimp-data ibverbs-providers libamd2 libbabl-0.1-0 libcamd2 libccolamd2 libcephfs2 libcholmod3 libgegl-0.3-0 libgimp2.0 libgsl23 libgslcblas0 libgtkspell0\n  libibverbs1 libimage-magick-perl libimage-magick-q16-perl libmetis5 libmng2 libnl-route-3-200 libpotrace0 librados2 libumfpack5 python3-scour samba-dsdb-modules\n  samba-vfs-modules scour tdb-tools\n以 sudo apt autoremove 將之移除。\n下列的額外套件將被安裝：\n  python python-all python-all-dev python-asn1crypto python-cffi-backend python-crypto python-cryptography python-dbus python-dev python-enum34 python-gi python-idna\n  python-ipaddress python-keyring python-keyrings.alt python-pkg-resources python-secretstorage python-setuptools python-six python-wheel python-xdg python2.7-dev\n建議套件：\n  python-doc python-tk python-crypto-doc python-cryptography-doc python-cryptography-vectors python-dbus-dbg python-dbus-doc python-enum34-doc python-gi-cairo\n  libkf5wallet-bin gir1.2-gnomekeyring-1.0 python-fs python-gdata python-keyczar python-secretstorage-doc python2.7-doc\n下列【新】套件將會被安裝：\n  python python-all python-all-dev python-asn1crypto python-cffi-backend python-crypto python-cryptography python-dbus python-dev python-enum34 python-gi python-idna\n  python-ipaddress python-keyring python-keyrings.alt python-pip python-pkg-resources python-secretstorage python-setuptools python-six python-wheel python-xdg python2.7\n  python2.7-dev\n升級 0 個，新安裝 24 個，移除 0 個，有 0 個未被升級。\n需要下載 2,248 kB/2,387 kB 的套件檔。\n此操作完成之後，會多佔用 9,986 kB 的磁碟空間。\n是否繼續進行 [Y/n]？ [Y/n] \n\n\n\n$ sudo apt install python3-pip python-setuptools-doc\n$ python3 -V\n")])])]),a("p",[a("strong",[s._v("Basic Usage")]),s._v("\nThe following lines will illustrate a basic usage and syntax of PIP command. To search packages index execute:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("pip search KEYWORD\n")])])]),a("p",[s._v("to search for packages. Once you obtain the package name use "),a("code",[s._v("pip")]),s._v(" to install it:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ pip install PACKAGE_NAME\n")])])]),a("p",[s._v("Lastly, to remove package enter:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ pip uninstall PACKAGE_NAME\n")])])]),a("hr"),s._v(" "),a("h1",{attrs:{id:"apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apps"}},[s._v("#")]),s._v(" Apps")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo groupadd apps\nsudo usermod -aG apps root\nsudo usermod -aG apps alanjui\n\n\nsudo mkidr /apps\nsudo chown -R root:apps /apps\nsudo chmod -R 775 /apps\n")])])]),a("hr"),s._v(" "),a("h1",{attrs:{id:"套件管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#套件管理"}},[s._v("#")]),s._v(" 套件管理")]),s._v(" "),a("h2",{attrs:{id:"系統通知有套件可供升級時"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系統通知有套件可供升級時"}},[s._v("#")]),s._v(" 系統通知有套件可供升級時")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("apt list --upgradable\n")])])]),a("p",[a("img",{attrs:{src:"https://d2mxuefqeaa7sj.cloudfront.net/s_B24A85039E505F12422DD7B29F6A13606C1039D1D30F815B98507EA8ACB3DEF4_1526522752877_2018-05-17+10-02-46+.png",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("安裝套件時特別指明版本")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo apt install <package>=<version>\n")])])]),a("p",[a("strong",[s._v("已安裝的套件要求重新安裝")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo apt install --reinstall <package>\n")])])]),a("p",[a("strong",[s._v("自套件原始程式碼編譯及組建")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo apt install python-pip python-dev build-essential\n")])])]),a("hr"),s._v(" "),a("h1",{attrs:{id:"安裝postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝postgresql"}},[s._v("#")]),s._v(" 安裝PostgreSQL")]),s._v(" "),a("h2",{attrs:{id:"安裝軟體"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝軟體"}},[s._v("#")]),s._v(" 安裝軟體")]),s._v(" "),a("p",[s._v("建立套件庫來源檔案： /etc/apt/sources.list.d/pgdg.list ，設定內容如下：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ deb http://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main\n")])])]),a("p",[s._v("取得套件庫的 Public Key")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -\n")])])]),a("p",[s._v("安裝套件")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo apt update\n$ sudo apt install postgresql-10 locales-all postgresql-doc-10 libjson-perl isag gnuplot-doc rcs\n$ sudo apt install pgadmin4\n")])])]),a("p",[s._v("驗證服務已啟動")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ systemctl status postgresql\n● postgresql.service - PostgreSQL RDBMS\n   Loaded: loaded (/lib/systemd/system/postgresql.service; enabled; vendor preset: enabled)\n   Active: active (exited) since Thu 2018-05-24 10:10:33 CST; 9min ago\n Main PID: 21259 (code=exited, status=0/SUCCESS)\n    Tasks: 0 (limit: 4915)\n   CGroup: /system.slice/postgresql.service\n\n 5月 24 10:10:33 SRV-01 systemd[1]: Starting PostgreSQL RDBMS...\n 5月 24 10:10:33 SRV-01 systemd[1]: Started PostgreSQL RDBMS.\n")])])]),a("p",[s._v("【參考來源】： https://www.postgresql.org/download/linux/ubuntu/")]),s._v(" "),a("h1",{attrs:{id:"設定服務管理員帳號的密碼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#設定服務管理員帳號的密碼"}},[s._v("#")]),s._v(" 設定服務管理員帳號的密碼")]),s._v(" "),a("p",[s._v("變更 PostgreSQL 預設之管理員（postgres）的密碼")]),s._v(" "),a("p",[a("strong",[s._v("（1）驗證作業系統已有 postgres 使用者帳號被建立。")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ id postgres\nuid=124(postgres) gid=131(postgres) \\u7fa4\\u7d44=131(postgres),112(ssl-cert)\n")])])]),a("p",[a("strong",[s._v("(2) 變更「使用作業系統使用者」的密碼")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo passwd postgres\n")])])]),a("p",[a("strong",[s._v("(3) 變更「PostgreSQL資料庫系統使用者（postgres）」的密碼")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ sudo -u postgres psql -d template1 -c \"ALTER USER postgres WITH PASSWORD 'ChingHai99@';\"\n")])])]),a("h2",{attrs:{id:"設定可遙端存取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#設定可遙端存取"}},[s._v("#")]),s._v(" 設定可遙端存取")]),s._v(" "),a("p",[a("strong",[s._v("(1) 設定 PostgreSQL 相關「設定檔」：")])]),s._v(" "),a("p",[s._v("設定檔目錄路徑：/etc/postgresql/10/main/")]),s._v(" "),a("p",[s._v("在檔案： "),a("strong",[s._v("pg_hba.conf ，加入下列設定：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("host all all 192.168.66.0/24 md5\n")])])]),a("p",[s._v("在檔案： "),a("strong",[s._v("postgresql.conf，加入下列設定：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("listen_addresses='*'\n")])])]),a("p",[a("strong",[s._v("(2) 從新啟動 PostgreSQL Service")])]),s._v(" "),a("p",[s._v("在Server端，將 PostgreSQL Service 重新啟動：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo systemctl restart postgresql\nsystemctl status postgresql\n")])])]),a("p",[a("strong",[s._v("(3) 驗證可自遠端連入")])]),s._v(" "),a("p",[s._v("在 Client 端，連入 PostgreSQL Server：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ psql -U postgres postgres -h 192.168.66.10\n ...\n \\q \n")])])]),a("hr"),s._v(" "),a("h1",{attrs:{id:"系統管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系統管理"}},[s._v("#")]),s._v(" 系統管理")]),s._v(" "),a("h2",{attrs:{id:"套件管理-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#套件管理-2"}},[s._v("#")]),s._v(" 套件管理")]),s._v(" "),a("p",[s._v("描述套件來源：")]),s._v(" "),a("ul",[a("li",[s._v("/etc/apt/sources.list")]),s._v(" "),a("li",[s._v("/etc/apt/sources.list.d/"),a("SourceName",[s._v(".list")])],1)]),s._v(" "),a("h2",{attrs:{id:"display-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-manager"}},[s._v("#")]),s._v(" Display Manager")]),s._v(" "),a("p",[s._v("在 17.10 的 Default Display Manager: Wayland ；但在 18.04 又改回： Xorg")]),s._v(" "),a("p",[a("strong",[s._v("查看作業系統預設的 Display Manger 為何者：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("ps wwwaux | grep auth\n")])])]),a("p",[a("strong",[s._v("變更「系統預設的 Display Manager」")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo dpkg-reconfigure lightdm\n")])])]),a("h2",{attrs:{id:"systemd-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemd-service"}},[s._v("#")]),s._v(" Systemd Service")]),s._v(" "),a("p",[a("strong",[s._v("啟用")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo systemctl enable <ServiceName>.service  # .service 可略去\nsudo systemctl daemon-reload\nsudo systemctl start <ServiceName>\n")])])]),a("p",[s._v("【註】： 原本位於 /lib/systemd/system/"),a("ServiceName",[s._v(".service 的檔案，將會被建立 ln 連結，置於路徑： /etc/systemd/system/multi-user.target.wants/"),a("ServiceName",[s._v(".service 之中。")])],1)],1),s._v(" "),a("p",[a("strong",[s._v("變更設定")]),s._v("\n每當某 Service 的設定有變更之時（ /lib/systemd/system/"),a("ServiceName",[s._v(".service ），須以下列操作重新啟動 Service ，以令變更生效：")])],1),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo systemctl daemon-reload\nsudo systemctl restart <ServiceName>\n")])])]),a("h1",{attrs:{id:"使用者帳號管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用者帳號管理"}},[s._v("#")]),s._v(" 使用者帳號管理")]),s._v(" "),a("h2",{attrs:{id:"增添使用者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增添使用者"}},[s._v("#")]),s._v(" 增添使用者")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo useradd -m amos\npasswd amos\n\nsudo usermod -aG sudo amos\n")])])]),a("h2",{attrs:{id:"刪除使用者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刪除使用者"}},[s._v("#")]),s._v(" 刪除使用者")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo userdel amos\nsudo rm -r /home/amos\n")])])]),a("h2",{attrs:{id:"切換到-root-帳號"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切換到-root-帳號"}},[s._v("#")]),s._v(" 切換到 root 帳號")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("sudo -s\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
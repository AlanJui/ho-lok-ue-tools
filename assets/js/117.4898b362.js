(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{404:function(s,e,n){"use strict";n.r(e);var a=n(10),o=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ubuntu-疑難雜症處置法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-疑難雜症處置法"}},[s._v("#")]),s._v(" Ubuntu 疑難雜症處置法")]),s._v(" "),e("h1",{attrs:{id:"flatpak-解除安裝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flatpak-解除安裝"}},[s._v("#")]),s._v(" Flatpak 解除安裝")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("$ sudo apt install flatpak\n$ flatpak uninstall --all\n$ sudo apt purge --autoremove flatpak\n")])])]),e("p",[s._v("https://askubuntu.com/questions/1174596/how-to-completely-remove-flatpak")]),s._v(" "),e("h1",{attrs:{id:"下載-libreoffice-的安裝作業"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下載-libreoffice-的安裝作業"}},[s._v("#")]),s._v(" 下載 LibreOffice 的安裝作業")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("sudo dpkg -i *.deb\n")])])]),e("h1",{attrs:{id:"分享共用資料夾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分享共用資料夾"}},[s._v("#")]),s._v(" 分享共用資料夾")]),s._v(" "),e("p",[s._v("即便僅只是透過 UI 介面，使用「Ubuntu 檔案總管」，將「資料夾」共享出來，Ubuntu 還是會自動安裝 SMB Server 。所以，首次的分享作業執行過後，記得須加入 Samba Server 專有的「使用者」帳號與密碼。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("sudo smbpasswd -a <Username>\n")])])]),e("p",[s._v("驗證 Samba Server 是否已被啟動的方法：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v('systemctl status smbd\n\n\nalanjui@Aspire-5745G:~$ systemctl status smbd\n● smbd.service - Samba SMB Daemon\n     Loaded: loaded (/lib/systemd/system/smbd.service; enabled; vendor preset: enabled)\n     Active: active (running) since Sun 2021-02-28 10:22:51 CST; 8h ago\n       Docs: man:smbd(8)\n             man:samba(7)\n             man:smb.conf(5)\n   Main PID: 1585 (smbd)\n     Status: "smbd: ready to serve connections..."\n      Tasks: 6 (limit: 9050)\n     Memory: 21.6M\n     CGroup: /system.slice/smbd.service\n             ├─ 1585 /usr/sbin/smbd --foreground --no-process-group\n             ├─ 1598 /usr/sbin/smbd --foreground --no-process-group\n             ├─ 1599 /usr/sbin/smbd --foreground --no-process-group\n             ├─ 1602 /usr/sbin/smbd --foreground --no-process-group\n             ├─11559 /usr/sbin/smbd --foreground --no-process-group\n             └─11589 /usr/sbin/smbd --foreground --no-process-group\n\n 2月 28 11:16:50 Aspire-5745G smbd[11237]: pam_unix(samba:session): session closed for user nobody\n 2月 28 11:22:28 Aspire-5745G smbd[11565]: pam_unix(samba:session): session closed for user nobody\n 2月 28 11:22:46 Aspire-5745G smbd[11569]: pam_unix(samba:session): session closed for user nobody\n 2月 28 11:23:18 Aspire-5745G smbd[11594]: pam_unix(samba:session): session closed for user nobody\n 2月 28 11:23:26 Aspire-5745G smbd[11596]: pam_unix(samba:session): session closed for user nobody\n 2月 28 19:09:25 Aspire-5745G smbd[13511]: pam_unix(samba:session): session closed for user nobody\n 2月 28 19:09:46 Aspire-5745G smbd[13525]: pam_unix(samba:session): session closed for user nobody\n 2月 28 19:10:18 Aspire-5745G smbd[13556]: pam_unix(samba:session): session closed for user nobody\n 2月 28 19:16:00 Aspire-5745G smbd[14943]: pam_unix(samba:session): session closed for user nobody\n 2月 28 19:16:25 Aspire-5745G smbd[14944]: pam_unix(samba:session): session closed for user nobody\n')])])]),e("p",[s._v("Ref: https://www.debugpoint.com/2020/01/guide-how-share-folder-between-ubuntu-linux-windows/")]),s._v(" "),e("h1",{attrs:{id:"不必經過-login-的-ssh-連線"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不必經過-login-的-ssh-連線"}},[s._v("#")]),s._v(" 不必經過 login 的 SSH 連線")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("ssh-copy-id <RemoteUserID>@<RemoteMachineIP>\n\n\nssh-copy-id alanjui@192.168.66.40\n/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed\n/usr/bin/ssh-copy-id: INFO: 3 key(s) remain to be installed -- if you are prompted now it is to install the new keys\nalanjui@192.168.66.40's password: \n\nNumber of key(s) added: 3\n\nNow try logging into the machine, with:   \"ssh 'alanjui@192.168.66.40'\"\nand check to make sure that only the key(s) you wanted were added.\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);
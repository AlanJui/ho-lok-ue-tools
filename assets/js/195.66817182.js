(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{483:function(a,n,t){"use strict";t.r(n);var o=t(10),s=Object(o.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"flatpak-on-ubut-18-04"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flatpak-on-ubut-18-04"}},[a._v("#")]),a._v(" Flatpak on Ubut 18.04")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("   echo $XDG_DATA_DIRS\n/usr/share/ubuntu:/usr/local/share:/usr/share:/var/lib/snapd/desktop\n\n  ~  11:02:42 \n   flatpak --version\nFlatpak 1.0.9\n\n  ~  11:03:00 \n   flatpak update\nLooking for updates...\n\n  ~  11:03:05 \n   ll /var/lib/flatpak \n總計 12\ndrwxr-xr-x  3 root root 4096  3月 16 10:59 ./\ndrwxr-xr-x 87 root root 4096  3月 16 10:59 ../\n-rw-r--r--  1 root root    0  3月 16 10:59 .changed\ndrwxr-xr-x  7 root root 4096  3月 16 10:59 repo/\n\n  ~  11:04:52 \n   sudo add-apt-repository ppa:alexlarsson/flatpak\n[sudo] password for alanjui: \n  Linux application sandboxing and distribution framework\n 更多資訊：https://launchpad.net/~alexlarsson/+archive/ubuntu/flatpak\n請按下 [ENTER] 繼續或 Ctrl-C 取消加入。\n\n略過:1 http://dl.google.com/linux/chrome/deb stable InRelease\n已有:2 http://dl.google.com/linux/chrome/deb stable Release                      \n已有:3 https://deb.nodesource.com/node_10.x bionic InRelease                           ......\n已有:21 http://ppa.launchpad.net/yannubuntu/boot-repair/ubuntu bionic InRelease\n取得 88.7 kB 用了 3秒 (29.0 kB/s)                  \n正在讀取套件清單... 完成\n正在重建相依關係       \n正在讀取狀態資料... 完成\n可升級 1 個套件。執行 apt list --upgradable 檢視\n\n  ~  11:06:01 \n   sudo apt list --upgradable\n正在列出... 完成\nflatpak/bionic 1.6.2-flatpak1~bionic amd64 [可升級自：1.0.9-0ubuntu0.1]\nN: 有 3 個額外版本。請以 -a 檢視\n\n  ~  11:06:09 \n   sudo apt upgrade\n正在讀取套件清單... 完成\n正在重建相依關係          \n正在讀取狀態資料... 完成\n籌備升級中... 完成\n以下套件為自動安裝，並且已經無用：\n  libflatpak0\n使用 'sudo apt autoremove' 將之移除。\n下列套件將會被升級：\n  flatpak\n升級 1 個，新安裝 0 個，移除 0 個，有 0 個未被升級。\n需要下載 1,101 kB 的套件檔。\n此操作完成之後，會多佔用 2,141 kB 的磁碟空間。\n是否繼續進行 [Y/n]？ [Y/n] y\n下載:1 http://ppa.launchpad.net/alexlarsson/flatpak/ubuntu bionic/main amd64 flatpak amd64 1.6.2-flatpak1~bionic [1,101 kB]\n取得 1,101 kB 用了 3秒 (401 kB/s)                  \n（讀取資料庫 ... 目前共安裝了 377672 個檔案和目錄。）\n準備解開 .../flatpak_1.6.2-flatpak1~bionic_amd64.deb ...\nUnpacking flatpak (1.6.2-flatpak1~bionic) over (1.0.9-0ubuntu0.1) ...\n設定 flatpak (1.6.2-flatpak1~bionic) ...\n安裝新版的設定檔 /etc/X11/Xsession.d/20flatpak ...\n安裝新版的設定檔 /etc/profile.d/flatpak.sh ...\nflatpak-system-helper.service is a disabled or a static unit not running, not starting it.\nRemoving obsolete conffile /etc/dbus-1/system.d/org.freedesktop.Flatpak.SystemHelper.conf ...\nProcessing triggers for dbus (1.12.2-1ubuntu1.1) ...\nProcessing triggers for man-db (2.8.3-2ubuntu0.1) ...\n")])])]),n("hr"),a._v(" "),n("p",[a._v("https://github.com/flatpak/flatpak/issues/1286")]),a._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/flatpak/flatpak/issues/1286",target:"_blank",rel:"noopener noreferrer"}},[a._v("flatpak/flatpak#1286"),n("OutboundLink")],1)]),a._v(" "),n("p",[a._v("https://askubuntu.com/questions/910821/programs-installed-via-snap-not-showing-up-in-launcher")]),a._v(" "),n("p",[a._v("https://github.com/flatpak/flatpak/issues/1308")]),a._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/flatpak/flatpak/issues/1308",target:"_blank",rel:"noopener noreferrer"}},[a._v("flatpak/flatpak#1308"),n("OutboundLink")],1)]),a._v(" "),n("p",[a._v("https://www.reddit.com/r/linuxquestions/comments/8g81sd/adding_a_flatpak_shortcut_to_my_ubuntu_1803/")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v('alias gimp="flatpak run org.gimp.GIMP"\n')])])]),n("p",[a._v("https://askubuntu.com/questions/1138155/ubuntu-on-wayland")]),a._v(" "),n("p",[a._v("https://askubuntu.com/questions/112186/how-do-you-create-a-custom-application-launcher-in-gnome-shell")])])}),[],!1,null,null,null);n.default=s.exports}}]);
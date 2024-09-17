(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{440:function(n,e,a){"use strict";a.r(e);var s=a(10),t=Object(s.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"debian-10-設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debian-10-設定"}},[n._v("#")]),n._v(" Debian 10 設定")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://www.debian.org/mirror/list.zh-tw.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Ubuntu / Debian 台灣最佳鏡像網站"),e("OutboundLink")],1),n._v("\n國網中心 opensource.nchc.org.tw ==>\nhttp://ftp.tw.debian.org/pmwiki/index.php?n=FSLab.MirrorLists")]),n._v(" "),e("p",[e("strong",[n._v("/etc/apt/sources.list")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("deb http://opensource.nchc.org.tw/debian/ jessie maindeb-src http://opensource.nchc.org.tw/debian/ jessie main\ndeb http://security.debian.org/ jessie/updates main contribdeb-src http://security.debian.org/ jessie/updates main contrib\n# jessie-updates, previously known as 'volatile'deb http://opensource.nchc.org.tw/debian/ jessie-updates main contribdeb-src http://opensource.nchc.org.tw/debian/ jessie-updates main contrib\n\n\n\nsudo apt update\n")])])]),e("hr"),n._v(" "),e("h2",{attrs:{id:"使用者設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用者設定"}},[n._v("#")]),n._v(" 使用者設定")]),n._v(" "),e("p",[n._v("設定使用者 alanjui 可使用 sudo 指令")]),n._v(" "),e("p",[n._v("Configuration")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("su -\nusermod -a -G sudo alanjui\n")])])]),e("p",[n._v("Validation")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("su - alanjui\ngroups\n")])])]),e("hr"),n._v(" "),e("h2",{attrs:{id:"安裝「系統安裝-設定用工具」"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安裝「系統安裝-設定用工具」"}},[n._v("#")]),n._v(" 安裝「系統安裝／設定用工具」")]),n._v(" "),e("p",[e("strong",[n._v("安裝基礎工具")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo apt update\nsudo apt install git \n")])])]),e("p",[n._v("【註】：不要在此時安裝 vim 。")]),n._v(" "),e("p",[e("strong",[n._v("安裝 Nerd Fonts")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("mkdir tmp && cd $_\nwget https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Hermit.zip\n\nmkdir -p ~/.local/share/fonts\n\nunzip Hermit.zip\ncp Hurmit*.otf ~/.local/share/fonts/\n\nfc-cache -fv\n\n\n\nls ~/.local/share/fonts/ | grep Hurmit\n\nfc-list\n")])])]),e("p",[n._v("【參考文件】： https://ostechnix.com/install-nerd-fonts-to-add-glyphs-in-your-code-on-linux/")]),n._v(" "),e("p",[n._v("https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/FiraMono/Regular/complete/Fira%20Mono%20Regular%20Nerd%20Font%20Complete.otf?raw=true")]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"virtualbox-guest-additions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox-guest-additions"}},[n._v("#")]),n._v(" VirtualBox Guest Additions")]),n._v(" "),e("p",[n._v("https://kifarunix.com/install-virtualbox-guest-additions-on-debian-10-buster/")]),n._v(" "),e("p",[n._v("https://linuxize.com/post/how-to-install-virtualbox-guest-additions-on-debian-10/")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo apt update -y && apt upgrade\nsudo apt install build-essential dkms linux-headers-$(uname -r)\n")])])]),e("p",[n._v("掛載 CD-ROM 方法")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://linuxize.com/post/how-to-install-virtualbox-guest-additions-on-debian-10/insert-guest-additions-cd-image_hu6613c524b7b09bc1b2462026613a9c75_59766_480x0_resize_q75_lanczos.jpg?ezimgfmt=rs:695x474/rscb65/ng:webp/ngcb65",alt:"Insert Guest Additions CD Image"}})]),n._v(" "),e("p",[n._v("〔作法一〕：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo sh /media/cdrom0/VBoxLinuxAdditions.run\n\n\nalanjui@VB01-Debian-10:~$ sudo sh /media/cdrom0/VBoxLinuxAdditions.run\nVerifying archive integrity... All good.\nUncompressing VirtualBox 6.1.16 Guest Additions for Linux........\nVirtualBox Guest Additions installer\nRemoving installed version 6.1.16 of VirtualBox Guest Additions...\nupdate-initramfs: Generating /boot/initrd.img-4.19.0-13-amd64\nCopying additional installer modules ...\nInstalling additional modules ...\nVirtualBox Guest Additions: Starting.\nVirtualBox Guest Additions: Building the VirtualBox Guest Additions kernel \nmodules.  This may take a while.\nVirtualBox Guest Additions: To build modules for other installed kernels, run\nVirtualBox Guest Additions:   /sbin/rcvboxadd quicksetup <version>\nVirtualBox Guest Additions: or\nVirtualBox Guest Additions:   /sbin/rcvboxadd quicksetup all\nVirtualBox Guest Additions: Building the modules for kernel 4.19.0-13-amd64.\nupdate-initramfs: Generating /boot/initrd.img-4.19.0-13-amd64\nVirtualBox Guest Additions: Running kernel modules will not be replaced until \nthe system is restarted\n")])])]),e("p",[n._v("〔作法二〕：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("alanjui@VB05-Debian10-KDE:/media/cdrom$ sudo mkdir -p /mnt/cdrom\n\nalanjui@VB05-Debian10-KDE:/media/cdrom$ ll /dev/cdrom\nlrwxrwxrwx 1 root root 3  1月 11 22:50 /dev/cdrom -> sr0\n\nalanjui@VB05-Debian10-KDE:/media/cdrom$ sudo mount /dev/cdrom /mnt/cdrom\nmount: /mnt/cdrom: WARNING: device write-protected, mounted read-only.\n\n\n\nalanjui@VB01-Debian-10:~$ lsblk -l\nNAME MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda    8:0    0   20G  0 disk \nsda1   8:1    0    7G  0 part /\nsda2   8:2    0    1K  0 part \nsda5   8:5    0  976M  0 part [SWAP]\nsda6   8:6    0 12.1G  0 part /home\nsr0   11:0    1 58.2M  0 rom  /media/cdrom0\n\nsudo mount /dev/sr0 /mnt/cdrom \n\n\n\ncd /mnt/cdrom\n\nsudo sh ./VBoxLinuxAdditions.run --nox11\nVerifying archive integrity... All good.\nUncompressing VirtualBox 6.1.16 Guest Additions for Linux........\nVirtualBox Guest Additions installer\nCopying additional installer modules ...\nInstalling additional modules ...\nVirtualBox Guest Additions: Starting.\nVirtualBox Guest Additions: Building the VirtualBox Guest Additions kernel\nmodules.  This may take a while.\nVirtualBox Guest Additions: To build modules for other installed kernels, run\nVirtualBox Guest Additions:   /sbin/rcvboxadd quicksetup <version>\nVirtualBox Guest Additions: or\nVirtualBox Guest Additions:   /sbin/rcvboxadd quicksetup all\nVirtualBox Guest Additions: Building the modules for kernel 4.19.0-13-amd64.\nupdate-initramfs: Generating /boot/initrd.img-4.19.0-13-amd64\nVirtualBox Guest Additions: Running kernel modules will not be replaced until\nthe system is restarted\n\nsudo reboot\n")])])]),e("p",[e("strong",[n._v("設定與 Host 的 Shared Folder（共享資料夾）")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610803874954_image.png",alt:""}})]),n._v(" "),e("p",[n._v("（0）確認「共享資料夾」的「擁有權」，屬於 root:vboxsf")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("alanjui@VB01-Debian-10:~$ ls -l\n總計 40\ndrwxr-xr-x  7 alanjui alanjui 4096 12月 26 11:59 n\ndrwxr-xr-t  2 alanjui alanjui 4096 12月 26 10:37 thinclient_drives\ndrwxr-xr-x 11 alanjui alanjui 4096 12月 26 12:19 vim\ndrwxrwx---  1 root    vboxsf   512  1月 16 21:03 下載\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 公共\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 圖片\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 影片\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 文件\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 桌面\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 模板\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 音樂\n")])])]),e("p",[n._v("（1）確認「作業系統」中，已建立名稱為：「vboxsf」之「群組」：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("vim /etc/group\n")])])]),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610802904940_image.png",alt:""}})]),n._v(" "),e("p",[n._v("（2）將可使用「共享資料夾」之使用者帳號，加入 vboxsf 群祖中：")]),n._v(" "),e("p",[n._v("〔方法一〕：變更已建立帳號使用者所屬的群組")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo usermod -aG vboxsf alanjui\n")])])]),e("p",[n._v("〔方法二〕：將使用者帳號加入 vboxsf 群組")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo adduser $USER vboxsf\n")])])]),e("p",[n._v("【註】：usermod -aG 選項的「全名」")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo usermod --append --groups vboxsf $USER\n")])])]),e("p",[n._v("（3）驗證設定正確。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("    - 先登出，再登入；\n    - 輸入如下指令：\nalanjui@VB01-Debian-10:~$ groups alanjui\nalanjui : alanjui cdrom floppy sudo audio dip video plugdev netdev bluetooth scanner vboxsf\n\n\nalanjui@VB01-Debian-10:~$ grep 'vboxsf' /etc/group\nvboxsf:x:998:alanjui\n\n\n\nalanjui@VB01-Debian-10:~$ ll /media\n總計 11\ndrwxr-xr-x  3 root root 4096  1月 16 21:04 .\ndrwxr-xr-x 19 root root 4096  1月 10 20:09 ..\nlrwxrwxrwx  1 root root    6 12月 20 20:12 cdrom -> cdrom0\ndr-xr-xr-x  5 root root 2408 10月 15 22:48 cdrom0\n\n\n\nalanjui@VB01-Debian-10:~$ sudo chown -R `whoami`:users /media\n\nalanjui@VB01-Debian-10:~$ ll /media\n總計 11\ndrwxr-xr-x  3 alanjui users 4096  1月 16 21:04 .\ndrwxr-xr-x 19 root    root  4096  1月 10 20:09 ..\nlrwxrwxrwx  1 alanjui users    6 12月 20 20:12 cdrom -> cdrom0\ndr-xr-xr-x  5 root    root  2408 10月 15 22:48 cdrom0\n")])])]),e("hr"),n._v(" "),e("h2",{attrs:{id:"virtualbox-shared-folders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox-shared-folders"}},[n._v("#")]),n._v(" VirtualBox Shared Folders")]),n._v(" "),e("p",[n._v("（1）在 VirtualBox 設定「Shared Folders」")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610808407979_image.png",alt:""}})]),n._v(" "),e("p",[n._v("（2）在使用者登入 Debian 後，設定欲掛載之資料夾：host")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("alanjui@VB01-Debian-10:~$ mkdir host\n\nalanjui@VB01-Debian-10:~$ sudo mount -t vboxsf vbox /home/alanjui/host\n")])])]),e("p",[n._v("【Shared名稱未正確設定時，將發生如下之錯誤】：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("alanjui@VB01-Debian-10:~$ sudo mount -t vboxsf vbox /home/alanjui/host\n/sbin/mount.vboxsf: shared folder 'vbox' was not found (check VM settings / spelling)\n")])])]),e("p",[n._v("（3）設定「作業系統自動掛載設定」： /etc/fstab")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo vim /etc/fstab\n\n\n....\nvbox    /home/alanjuihost    vboxsf  comment=systemd.automount     0       0\n")])])]),e("p",[n._v("（4）先登出，再登入。打開「終端機」，輸入如下指令，確認「共享資料夾」，被掛載在「/media」目錄之下：sf_"),e("SharedFolder")],1),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("alanjui@VB01-Debian-10:~$ ls -l /media\n總計 3\nlrwxrwxrwx 1 root root      6 12月 20 20:12 cdrom -> cdrom0\ndr-xr-xr-x 5 root root   2408 10月 15 22:48 cdrom0\ndrwxrwx--- 1 root vboxsf  384 10月  9 20:39 sf_vbox\n\nalanjui@VB01-Debian-10:~$ ll /media/sf_vbox\n總計 45908\n-rwxrwx--- 1 root vboxsf  3675917 11月 18  2007 '04_LOVE SONG.mp3'\n-rwxrwx--- 1 root vboxsf  4222189 11月 18  2007 \"04.SANS RE'PONSE.mp3\"\n-rwxrwx--- 1 root vboxsf  2950602 11月 18  2007 '04_The Skye Boat Song.mp3'\n-rwxrwx--- 1 root vboxsf  4520039 11月 18  2007  04_迎風而立.mp3\n-rwxrwx--- 1 root vboxsf  5564139  9月 19 11:41 'Asummer place Paul Mauriat.mp3'\ndrwxrwx--- 1 root vboxsf      160  9月 13 22:27  Music\n-rwxrwx--- 1 root vboxsf 15514657  9月 26 22:07 'The wanderer - Karunesh.mp3'\n-rwxrwx--- 1 root vboxsf  9696790 10月  9 20:38 '但願人長久 - 蘇軾  詞、鄧麗君  唱.mp3'\n\nalanjui@VB01-Debian-10:~$ touch /media/sf_vbox/test\n\nalanjui@VB01-Debian-10:~$ ll /media/sf_vbox\n總計 45908\n-rwxrwx--- 1 root vboxsf  3675917 11月 18  2007 '04_LOVE SONG.mp3'\n-rwxrwx--- 1 root vboxsf  4222189 11月 18  2007 \"04.SANS RE'PONSE.mp3\"\n-rwxrwx--- 1 root vboxsf  2950602 11月 18  2007 '04_The Skye Boat Song.mp3'\n-rwxrwx--- 1 root vboxsf  4520039 11月 18  2007  04_迎風而立.mp3\n-rwxrwx--- 1 root vboxsf  5564139  9月 19 11:41 'Asummer place Paul Mauriat.mp3'\ndrwxrwx--- 1 root vboxsf      160  9月 13 22:27  Music\n-rwxrwx--- 1 root vboxsf        0  1月 16 22:57  test\n-rwxrwx--- 1 root vboxsf 15514657  9月 26 22:07 'The wanderer - Karunesh.mp3'\n-rwxrwx--- 1 root vboxsf  9696790 10月  9 20:38 '但願人長久 - 蘇軾  詞、鄧麗君  唱.mp3'\n")])])]),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610808723954_image.png",alt:""}})]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("lanjui@VB01-Debian-10:~$ ll\nls: 無法存取 'host': 協定錯誤\n總計 40\nd?????????  ? ?       ?          ?             ? host\ndrwxr-xr-x  7 alanjui alanjui 4096 12月 26 11:59 n\ndrwxr-xr-t  2 alanjui alanjui 4096 12月 26 10:37 thinclient_drives\ndrwxr-xr-x 11 alanjui alanjui 4096 12月 26 12:19 vim\ndrwxrwx---  1 root    vboxsf   512  1月 16 22:46 下載\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 公共\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 圖片\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 影片\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 文件\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 桌面\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 模板\ndrwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 音樂\n")])])]),e("hr"),n._v(" "),e("h2",{attrs:{id:"ibus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ibus"}},[n._v("#")]),n._v(" iBus")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo apt install -y ibus-rime\n\n\nim-config\n\n\nalanjui@VB01-Debian-10:~$ cat .xinputrc \n# im-config(8) generated on Sat, 16 Jan 2021 22:08:39 +0800\nrun_im ibus\n# im-config signature: 46bf2a71200109f2112af9cff14bb3fd  -\n")])])]),e("hr"),n._v(" "),e("h2",{attrs:{id:"fcitx-4-中文輸入法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fcitx-4-中文輸入法"}},[n._v("#")]),n._v(" Fcitx 4 中文輸入法")]),n._v(" "),e("p",[n._v("下列官網文件載明：Fcitx5 基本上要到 Bullseye (V11) 版本後，才有完整的軟件包；在 Buster（V10）及之前版本之用戶，請繼續使用 Fcitx 4。\nhttps://wiki.debian.org/zh_CN/I18n/Fcitx5#A.2BfkFPU04tZYd1KGI3-")]),n._v(" "),e("p",[e("strong",[n._v("安裝谷歌拚音輸入法")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo apt install fcitx-googlepinyin\n")])])]),e("p",[e("strong",[n._v("安裝倉頡五代輸入法")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo apt install fcitx-table-cangjie5\n")])])]),e("p",[e("strong",[n._v("安裝中文輸入法：中州韻（漢語拚音/倉頡）")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo apt install fcitx-rime\n")])])]),e("p",[e("strong",[n._v("設定 Fcitx 中文輸入法於開機時自動啟動")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("系統設定 》啟動與關閉 》自動啟動 》新增程式 》Fcitx\n")])])]),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610421780369_image.png",alt:""}})]),n._v(" "),e("p",[e("strong",[n._v("登出後再登入")])]),n._v(" "),e("p",[e("strong",[n._v("設定中文輸入法採用「Fcitx」（使用者設定值）")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("im-config\n")])])]),e("p",[n._v("選擇「啟動小企鵝輸入法（fcitx）！」")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("設定使用者設定值 /home/alanjui/.xinputrc 為 fcitx。\n手動設定選擇: fcitx\nFlexible Input Method Framework (fcitx)\n * Required for all: fcitx\n * Language specific input conversion support:\n   * Simplified Chinese: fcitx-libpinyin or fcitx-sunpinyin or fcitx-googlepinyin\n   * Traditional Chinese / generic Chinese: fcitx-rime\n   * Generic keyboard translation table: fcitx-table* packages\n * Application platform support:\n   Installing fcitx-frontend-all will cover all GUI platforms.\n   * GNOME/GTK+: fcitx-frontend-gtk2 and fcitx-frontend-gtk3 (both)\n   * Qt4: fcitx-frontend-qt4\n   * KDE/Qt5: fcitx-frontend-qt5\n\n使用者設定值已經被 im-config 修改。\n\n請重新啟動 X 工作階段 (session) 來使用新的使用者設定值。\n如果先前設定的背景程式被 X 工作階段管理程式 (session manager) 重新啟動，您可能需要使用 kill(1) 來結束程式。\n請參考 im-config(8) 與 /usr/share/doc/im-config/README.Debian.gz。\n")])])]),e("p",[e("strong",[n._v("加入中文輸入法")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("Fcitx 中文輸入法圖示 》設定目前輸入法\n")])])]),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610422290751_VirtualBox_VB05-Debian10.7-KDE_12_01_2021_11_30_38.png",alt:""}})]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"安裝-python-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安裝-python-3"}},[n._v("#")]),n._v(" 安裝 Python 3")]),n._v(" "),e("p",[e("strong",[n._v("安裝「Build 作業」相關軟件")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo apt -y install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev curl libbz2-dev\n")])])]),e("p",[e("strong",[n._v("安裝 pyenv 與 pyenv-virtualenv 軟體套件")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("cd\ngit clone https://github.com/pyenv/pyenv.git ~/.pyenv\ngit clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv\n")])])]),e("p",[e("strong",[n._v("設定作業環境（~/.bashrc）")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('....\nexport PYENV_ROOT=$(~/.pyenv/bin/pyenv root)\nexport PATH="$PYENV_ROOT/bin:$PATH"\n\nif command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\n  eval "$(pyenv virtualenv-init -)"\nfi\nexport PYENV_VIRTUALENV_DISABLE_PROMPT=1\n')])])]),e("p",[e("strong",[n._v("啟動 Python 作業環境")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('exec "$SHELL"\n')])])]),e("p",[e("strong",[n._v("驗證作業")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("pyenv versions\n")])])]),e("p",[e("strong",[n._v("安裝")]),n._v(" Python 2")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("pyenv install 2.7.8\n")])])]),e("p",[e("strong",[n._v("安裝 Python 3.8")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("pyenv install -l\npyenv install 3.8.6\npyenv versions\n")])])]),e("p",[e("strong",[n._v("安裝 Python 3.9")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("pyenv install 3.9.1\npyenv versions\n")])])]),e("p",[e("strong",[n._v("設定作業系統預設使用 Python 3.9.1")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("pyenv global 3.9.1\n")])])]),e("p",[n._v("【驗證】：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("pyenv version\npython --version\n")])])]),e("hr"),n._v(" "),e("h2",{attrs:{id:"安裝-node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安裝-node-js"}},[n._v("#")]),n._v(" 安裝 Node.JS")]),n._v(" "),e("p",[e("strong",[n._v("解除作業系統預設安裝的 Node.JS")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo mv /bin/node /bin/node.bak\n")])])]),e("p",[e("strong",[n._v("自 Git 原始碼儲存倉下載及執行安裝")]),n._v(" (Node.js Versions Manager)")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("curl -L https://git.io/n-install | bash\n. ~/.bashrc\n")])])]),e("hr"),n._v(" "),e("h2",{attrs:{id:"安裝-vim-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安裝-vim-8"}},[n._v("#")]),n._v(" 安裝 Vim 8")]),n._v(" "),e("p",[e("strong",[n._v("解除系統已安裝之 vim")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo apt remove vim\n")])])]),e("p",[n._v("【註】： 作業系統「預設」安裝： /bin/vim")]),n._v(" "),e("p",[e("strong",[n._v("自 Git 版本儲存倉下載 Vim 8.2 原始程式碼，完成組建（Build）與安裝")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("git clone https://github.com/vim/vim.git\ncd vim/src\nmake\nsudo make install\n")])])]),e("p",[n._v("【註】：新建置之 Vim 儲存路徑：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("which vim\n/usr/local/bin/vim\n")])])]),e("p",[e("strong",[n._v("自 Vim PPA Repo 安裝 V8.2 版本")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo add-apt-repository ppa:jonathonf/vim\nsudo apt update\nsudo apt install vim\n")])])]),e("p",[e("strong",[n._v("【註】：Uninstall vim from PPA")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo purge vim\nsudo add-apt-repository --remove ppa:jonathonf/vim\n")])])]),e("p",[e("strong",[n._v("自 Git 下載設定檔")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("cd \ngit clone https://github.com/AlanJui/vim8.git .vim\n")])])]),e("p",[e("strong",[n._v("安裝 Vim 8 適用之 Vim Plugins")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("vim\n:PlugInstall\n:PlugUpdate\n:q\n")])])]),e("hr"),n._v(" "),e("h2",{attrs:{id:"tmux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux"}},[n._v("#")]),n._v(" Tmux")]),n._v(" "),e("p",[n._v("Install")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo apt -y install tmux\n")])])]),e("p",[n._v("Extension: Oh My Tmux")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("$ cd\n$ git clone https://github.com/gpakosz/.tmux.git\n$ ln -s -f .tmux/.tmux.conf\n$ cp .tmux/.tmux.conf.local .\n")])])]),e("p",[n._v("Configuration: ~/.tmux.conf.local")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("# clipboard\ntmux_conf_copy_to_os_clipboard=true\n\nset -g mouse on\n:\n# replace C-b by C-a\n")])])]),e("p",[n._v("Reload configuration")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("tmux source-file ~/.tmux.conf\n")])])]),e("hr"),n._v(" "),e("h2",{attrs:{id:"xrdp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xrdp"}},[n._v("#")]),n._v(" XRDP")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("alanjui@VB05-Debian10-KDE:~$ sudo apt install xrdp\n[sudo] password for alanjui:\n正在讀取套件清單... 完成\n正在重建相依關係\n正在讀取狀態資料... 完成\n下列的額外套件將被安裝：\n  xorgxrdp\n建議套件：\n  guacamole xrdp-pulseaudio-installer\n下列【新】套件將會被安裝：\n  xorgxrdp xrdp\n升級 0 個，新安裝 2 個，移除 0 個，有 0 個未被升級。\n需要下載 607 kB 的套件檔。\n此操作完成之後，會多佔用 3,941 kB 的磁碟空間。\n是否繼續進行 [Y/n]？ [Y/n] y\n下載:1 http://ftp.tw.debian.org/debian buster/main amd64 xorgxrdp amd64 1:0.2.9-1 [172 kB]\n下載:2 http://ftp.tw.debian.org/debian buster/main amd64 xrdp amd64 0.9.9-1+deb10u1 [435 kB]\n取得 607 kB 用了 0s (2,819 kB/s)\n選取了原先未選的套件 xorgxrdp。\n（讀取資料庫 ... 目前共安裝了 197448 個檔案和目錄。）\n正在準備解包 .../xorgxrdp_1%3a0.2.9-1_amd64.deb……\nUnpacking xorgxrdp (1:0.2.9-1) ...\n選取了原先未選的套件 xrdp。\n正在準備解包 .../xrdp_0.9.9-1+deb10u1_amd64.deb……\nUnpacking xrdp (0.9.9-1+deb10u1) ...\n設定 xrdp (0.9.9-1+deb10u1) ...\n\nGenerating 2048 bit rsa key...\n\nssl_gen_key_xrdp1 ok\n\nsaving to /etc/xrdp/rsakeys.ini\n\nCreated symlink /etc/systemd/system/multi-user.target.wants/xrdp-sesman.service → /lib/systemd/system/xrdp-sesman.service.\nCreated symlink /etc/systemd/system/multi-user.target.wants/xrdp.service → /lib/systemd/system/xrdp.service.\n設定 xorgxrdp (1:0.2.9-1) ...\n執行 systemd (241-7~deb10u5) 的觸發程式……\n執行 man-db (2.8.5-2) 的觸發程式……\n執行 libc-bin (2.28-10) 的觸發程式……\nalanjui@VB05-Debian10-KDE:~$\n")])])]),e("p",[e("strong",[n._v("安裝")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("su\napt -y install xrdp\nsystemctl enable xrdp\nsystemctl start xrdp\n\n\nalanjui@VB05-Debian10-KDE:~$ systemctl status xrdp\n● xrdp.service - xrdp daemon\n   Loaded: loaded (/lib/systemd/system/xrdp.service; enabled; vendor preset: enabled)\n   Active: active (running) since Wed 2021-01-13 13:05:10 CST; 5min ago\n     Docs: man:xrdp(8)\n           man:xrdp.ini(5)\n Main PID: 6223 (xrdp)\n    Tasks: 1 (limit: 2346)\n   Memory: 1.3M\n   CGroup: /system.slice/xrdp.service\n           └─6223 /usr/sbin/xrdp\nalanjui@VB05-Debian10-KDE:~$ systemctl status xrdp-sesman\n● xrdp-sesman.service - xrdp session manager\n   Loaded: loaded (/lib/systemd/system/xrdp-sesman.service; enabled; vendor preset: enabled)\n   Active: active (running) since Wed 2021-01-13 13:05:09 CST; 5min ago\n     Docs: man:xrdp-sesman(8)\n           man:sesman.ini(5)\n Main PID: 6213 (xrdp-sesman)\n    Tasks: 1 (limit: 2346)\n   Memory: 944.0K\n   CGroup: /system.slice/xrdp-sesman.service\n           └─6213 /usr/sbin/xrdp-sesman\n")])])]),e("p",[e("strong",[n._v("環境")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("$ id xrdp\nuid=118(xrdp) gid=125(xrdp) groups=125(xrdp)\n\n$ groups xrdp\nxrdp : xrdp\n\n$ id\nuid=1000(alanjui) gid=1000(alanjui) groups=1000(alanjui),24(cdrom),25(floppy),27(sudo),29(audio),30(dip),44(video),46(plugdev),109(netdev),112(bluetooth),116(scanner)\n\n\nalanjui@VB05-Debian10-KDE:~$ id xrdp\nuid=119(xrdp) gid=126(xrdp) groups=126(xrdp)\n\nalanjui@VB05-Debian10-KDE:~$ groups xrdp\nxrdp : xrdp\n\nalanjui@VB05-Debian10-KDE:~$ id\nuid=1000(alanjui) gid=1000(alanjui) groups=1000(alanjui),0(root),24(cdrom),25(floppy),27(sudo),29(audio),30(dip),44(video),46(plugdev),109(netdev),112(bluetooth),117(lpadmin),118(scanner),998(vboxsf)\n\n\n\n$ ll /run/xrdp/\n總計 8\ndrwxrwsrwt 2 xrdp xrdp 140 12月 26 10:48 sockdir\n-rw------- 1 xrdp xrdp   4 12月 26 10:30 xrdp.pid\n-rw------- 1 xrdp xrdp   4 12月 26 10:30 xrdp-sesman.pid\n\n\nalanjui@VB05-Debian10-KDE:~$ ll /run/xrdp/\n總計 8\ndrwxr-xr-x  3 xrdp xrdp 100  1月 13 13:05 .\ndrwxr-xr-x 25 root root 720  1月 13 13:05 ..\ndrwxrwsrwt  2 xrdp xrdp  40  1月 13 13:05 sockdir\n-rw-------  1 xrdp xrdp   4  1月 13 13:05 xrdp.pid\n-rw-------  1 xrdp xrdp   4  1月 13 13:05 xrdp-sesman.pid\n")])])]),e("ul",[e("li",[e("p",[n._v("/usr/lib/systemd/system/xrdp.service\n1   [Unit]\n1 Description=xrdp daemon\n2 Documentation=man:xrdp(8) man:xrdp.ini(5)\n3 Requires=xrdp-sesman.service\n4 After=network.target xrdp-sesman.service\n5\n6 [Service]\n7 Type=forking\n8 PIDFile=/var/run/xrdp/xrdp.pid\n9 RuntimeDirectory=xrdp\n10 EnvironmentFile=-/etc/sysconfig/xrdp\n11 EnvironmentFile=-/etc/default/xrdp\n12 User=xrdp\n13 Group=xrdp\n14 PermissionsStartOnly=true\n15 ExecStartPre=/bin/sh /usr/share/xrdp/socksetup\n16 ExecStart=/usr/sbin/xrdp $XRDP_OPTIONS\n17 ExecStop=/usr/sbin/xrdp $XRDP_OPTIONS --kill\n18\n19 [Install]\n20 WantedBy=multi-user.target:q")])]),n._v(" "),e("li",[e("p",[n._v("/usr/lib/systemd/system/xrdp-sesman.service\n[Unit]\nDescription=xrdp session manager\nDocumentation=man:xrdp-sesman(8) man:sesman.ini(5)\nAfter=network.target\nStopWhenUnneeded=true\nBindsTo=xrdp.service")]),n._v(" "),e("p",[n._v("[Service]\nType=forking\nPIDFile=/var/run/xrdp/xrdp-sesman.pid\nRuntimeDirectory=xrdp\nEnvironmentFile=-/etc/sysconfig/xrdp\nEnvironmentFile=-/etc/default/xrdp\nExecStart=/usr/sbin/xrdp-sesman $SESMAN_OPTIONS\nExecStop=/usr/sbin/xrdp-sesman $SESMAN_OPTIONS --kill")]),n._v(" "),e("p",[n._v("[Install]\nWantedBy=multi-user.target")])]),n._v(" "),e("li",[e("p",[n._v("/etc/xrdp/xrdp.ini")])]),n._v(" "),e("li",[e("p",[n._v("/etc/xrdp/sesman.ini")])]),n._v(" "),e("li",[e("p",[n._v("/etc/xrdp/startvm.sh")])]),n._v(" "),e("li",[e("p",[n._v("/etc/X11/xinit/xinitrc\n. /etc/X11/Xsession")])]),n._v(" "),e("li",[e("p",[n._v("/etc/X11/Xwrapper.config\nallowed_users=console")]),n._v(" "),e("p",[n._v("alanjui@VB01-Debian-10:~$ sudo systemctl status xrdp\n[sudo] password for alanjui:\n● xrdp.service - xrdp daemon\nLoaded: loaded (/lib/systemd/system/xrdp.service; enabled; vendor preset: enabled)\nActive: active (running) since Sat 2020-12-26 13:27:57 CST; 8min ago\nDocs: man:xrdp(8)\nman:xrdp.ini(5)\nProcess: 529 ExecStartPre=/bin/sh /usr/share/xrdp/socksetup (code=exited, status=0/SUCCESS)\nProcess: 542 ExecStart=/usr/sbin/xrdp $XRDP_OPTIONS (code=exited, status=0/SUCCESS)\nMain PID: 544 (xrdp)\nTasks: 2 (limit: 2346)\nMemory: 21.9M\nCGroup: /system.slice/xrdp.service\n├─ 544 /usr/sbin/xrdp\n└─2366 /usr/sbin/xrdp")]),n._v(" "),e("p",[n._v("12月 26 13:35:48 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] xrdp_wm_log_msg: connecting to sesman ip\n12月 26 13:35:49 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[INFO ] xrdp_wm_log_msg: sesman connect ok\n12月 26 13:35:49 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] xrdp_wm_log_msg: sending login info to s\n12月 26 13:35:49 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] return value from xrdp_mm_connect 0\n12月 26 13:35:49 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[INFO ] xrdp_wm_log_msg: login successful for di\n12月 26 13:35:49 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] xrdp_wm_log_msg: started connecting\n12月 26 13:35:50 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[INFO ] lib_mod_log_peer: xrdp_pid=2366 connecte\n12月 26 13:35:50 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] xrdp_wm_log_msg: connected ok\n12月 26 13:35:50 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] xrdp_mm_connect_chansrv: chansrv connect\n12月 26 13:35:50 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] Closed socket 16 (AF_INET6 ::1 port 4130\nlines 1-24/24 (END)")]),n._v(" "),e("p",[n._v("alanjui@VB01-Debian-10:~$ sudo systemctl status xrdp-sesman\n● xrdp-sesman.service - xrdp session manager\nLoaded: loaded (/lib/systemd/system/xrdp-sesman.service; enabled; vendor preset: enabled)\nActive: active (running) since Sat 2020-12-26 13:27:56 CST; 9min ago\nDocs: man:xrdp-sesman(8)\nman:sesman.ini(5)\nProcess: 517 ExecStart=/usr/sbin/xrdp-sesman $SESMAN_OPTIONS (code=exited, status=0/SUCCESS)\nMain PID: 528 (xrdp-sesman)\nTasks: 1 (limit: 2346)\nMemory: 2.1M\nCGroup: /system.slice/xrdp-sesman.service\n└─528 /usr/sbin/xrdp-sesman")]),n._v(" "),e("p",[n._v("12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[528]: (528)(140155329705408)[INFO ] starting Xorg session...\n12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[528]: (528)(140155329705408)[DEBUG] Closed socket 9 (AF_INET6 :: port 5\n12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[528]: (528)(140155329705408)[DEBUG] Closed socket 9 (AF_INET6 :: port 6\n12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[528]: (528)(140155329705408)[DEBUG] Closed socket 9 (AF_INET6 :: port 6\n12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[528]: (528)(140155329705408)[DEBUG] Closed socket 8 (AF_INET6 ::1 port\n12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[2367]: (2367)(140155329705408)[INFO ] calling auth_start_session from p\n12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[2367]: pam_unix(xrdp-sesman:session): session opened for user alanjui b\n12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[2367]: (2367)(140155329705408)[DEBUG] Closed socket 7 (AF_INET6 ::1 por\n12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[2367]: (2367)(140155329705408)[DEBUG] Closed socket 8 (AF_INET6 ::1 por\n12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[2367]: (2367)(140155329705408)[CORE ] waiting for window manager (pid 2\nlines 1-22/22 (END)")])])]),n._v(" "),e("p",[e("strong",[n._v("問題排除")])]),n._v(" "),e("ul",[e("li",[e("p",[n._v("無法登入（xrdp session manager (xrdp-sesman) 發出錯誤說明： login failed for display 0)\n"),e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1608950578200_image.png",alt:""}})]),n._v(" "),e("p",[n._v("登入之")])]),n._v(" "),e("li",[e("p",[n._v("登入後，畫面一片黑。\n無法支援多人同時登入，已登入之人需先登出。")])]),n._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://c-nergy.be/blog/?p=12073",target:"_blank",rel:"noopener noreferrer"}},[n._v("登入後需輸入「管理員」密碼"),e("OutboundLink")],1),n._v("。")]),n._v(" "),e("ul",[e("li",[n._v("Authentication is required to create a color managed device")]),n._v(" "),e("li",[n._v("Authentication is required to refresh the system repositories")])])])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1608951204701_image.png",alt:""}})]),n._v(" "),e("p",[n._v("因為 Remote Login 需要核對「使用者」之權限。依據的準則取自「Polkit Policy file」，故而發生以上兩起要求「Authentication」事件。")]),n._v(" "),e("p",[n._v("【首等方案】：增加自動設定 Script ： /etc/polkit-1/localauthority.conf.d/02-allow-colord.conf")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('polkit.addRule(function(action, subject) {\n    if ((action.id == "org.freedesktop.color-manager.create-device" ||\n        action.id == "org.freedesktop.color-manager.create-profile" ||\n        action.id == "org.freedesktop.color-manager.delete-device" ||\n        action.id == "org.freedesktop.color-manager.delete-profile" ||\n        action.id == "org.freedesktop.color-manager.modify-device" ||\n        action.id == "org.freedesktop.color-manager.modify-profile") &&\n        subject.isInGroup("{users}")) {\n            return polkit.Result.YES;\n        }\n});\n')])])]),e("p",[n._v("【次等方案】：修改「設定檔」：/usr/share/polkit-1/actions/"),e("strong",[n._v("org.freedesktop.color.policy")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("....  \n<defaults> \n      <allow_any>auth_adminyes</allow_any>\n      <allow_inactive>noyes</allow_inactive>\n      <allow_active>yes</allow_active>\n</defaults>\n....\n")])])]),e("p",[n._v("【需要認證 - PolicyKit 1 KDE 代理程式】\nAuthentication is required to set the network proxy used for downloading software\n有一個應用程式試圖執行需要權限的動作。要執行此動作需要認證。")]),n._v(" "),e("p",[n._v("【詳細資料】：")]),n._v(" "),e("ul",[e("li",[n._v("應用程式：不適用的")]),n._v(" "),e("li",[n._v("動作： Set network proxy")]),n._v(" "),e("li",[n._v("動作編號：org.freedesktop.packagekit.system-network-proxy-configure")]),n._v(" "),e("li",[n._v("廠商：The Packagekit Project")])]),n._v(" "),e("p",[n._v("polkit.subject-pid: 15243\npolkit.caller-pid: 15749")]),n._v(" "),e("p",[n._v("【xmessage】")]),n._v(" "),e("ul",[e("li",[n._v("VBoxClient: Failed to request display change events, rc=VERR_INVALID_FUNCTION")]),n._v(" "),e("li",[n._v("VBoxClient: Failed to register resizing support, rc=VERR_INVALID_FUNCTION")]),n._v(" "),e("li",[n._v("VBoxClient: Failure waiting for event, rc=VERR_INVALID_FUNCTION")])])])}),[],!1,null,null,null);e.default=t.exports}}]);
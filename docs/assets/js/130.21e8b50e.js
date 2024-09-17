(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{414:function(e,n,i){"use strict";i.r(n);var t=i(10),s=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"搶救硬碟無法正常啟動-ubuntu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搶救硬碟無法正常啟動-ubuntu"}},[e._v("#")]),e._v(" 搶救硬碟無法正常啟動 Ubuntu")]),e._v(" "),n("p",[e._v("安裝 Ubuntu 作業系統的「硬碟」，若無法正常啟動，可能的因素之一就是：「grub 毀了」！")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485920614883_IMG_2664.JPG",alt:""}})]),e._v(" "),n("h1",{attrs:{id:"如何確定無法開機的問題出在-grub-身上"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何確定無法開機的問題出在-grub-身上"}},[e._v("#")]),e._v(" 如何確定無法開機的問題出在 grub 身上")]),e._v(" "),n("p",[e._v("當 grub 出狀況，導致硬碟無法正常啟動時，會在開機之後，出現如下的畫面，並顯現如下的提示：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("Entering rescue mode...\ngrub rescue>\n")])])]),n("h1",{attrs:{id:"grub-安裝在那顆硬碟的那個分區"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grub-安裝在那顆硬碟的那個分區"}},[e._v("#")]),e._v(" grub 安裝在那顆硬碟的那個分區")]),e._v(" "),n("p",[e._v("電腦裡裝了好顆硬碟；硬碟裡也切了好幾個分區，到底 grub 安裝在那顆硬碟？那個分區？當初没留備忘筆記，現在要怎麼確認呢？！")]),e._v(" "),n("h2",{attrs:{id:"電腦裡裝有幾顆硬碟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#電腦裡裝有幾顆硬碟"}},[e._v("#")]),e._v(" 電腦裡裝有幾顆硬碟？")]),e._v(" "),n("p",[e._v("想知道這時的電腦有幾顆硬碟？可用以下的 ls  指令查詢：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("grub rescue> ls\n")])])]),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485921225276_file.png",alt:""}})]),e._v(" "),n("h2",{attrs:{id:"硬碟裡的那個磁區有安裝-grub"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#硬碟裡的那個磁區有安裝-grub"}},[e._v("#")]),e._v(" 硬碟裡的那個磁區有安裝 grub")]),e._v(" "),n("p",[e._v("想查詢安裝 grub 開機功能是在那顆硬碟的那個「磁區」，可用以下的 "),n("code",[e._v("ls (hd*,msods*)/grub")]),e._v("  指令查詢：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("grub rescue> ls (hd1,msdos1)/grub\n")])])]),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485921310583_file.png",alt:""}})]),e._v(" "),n("p",[e._v("因為找到了 "),n("strong",[e._v("grub.cfg")]),e._v(" 這檔案，故可以確認：「在 hd1 磁碟機，其中的 msdos1 磁區」，便是安裝 grub 開機功能的地方。")]),e._v(" "),n("p",[e._v("以上的指令可以簡化，將 msdos1 改用 1 代替，如：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("grub rescue> ls (hd1,1)/grub\n")])])]),n("p",[e._v("［注意］：　我的硬碟，在安裝 Ubuntu 作業系統時，係以獨立磁區，掛載 /boot 目錄。所以，以下的操作，不敢保證一定適用您的狀況。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485964395554_2017-02-01+21-15-59+.png",alt:""}})]),e._v(" "),n("h1",{attrs:{id:"開始修復-grub"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#開始修復-grub"}},[e._v("#")]),e._v(" 開始修復 grub")]),e._v(" "),n("p",[e._v("因為前述的「查證」，已確定待修復的 grub 落在 (hd1,msdos1) 這裡。接著，待完成以下的兩道程序，完成 grub 的修復工作：")]),e._v(" "),n("ol",[n("li",[e._v("啟動 Ubuntu 作業系統")]),e._v(" "),n("li",[e._v("修復 grub")])]),e._v(" "),n("h2",{attrs:{id:"_1-啟動-ubuntu-作業系統"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-啟動-ubuntu-作業系統"}},[e._v("#")]),e._v(" 1. 啟動 Ubuntu 作業系統")]),e._v(" "),n("p",[e._v("所以，輸入下列指令，開始進行 grub 的修復工作。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("grub rescue> set root=(hd1,msdos1)\ngrub rescue> set prefix=(hd1,msdos1)/grub\ngrub rescue> insmod normal\ngrub rescue> normal\n")])])]),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485941743143_file.png",alt:""}})]),e._v(" "),n("p",[e._v("【註】：執行完「normal」指令之後，Ubuntu 的作業系統就能正常啟動，進入 GUI 模式的「登入」畫面。")]),e._v(" "),n("h2",{attrs:{id:"_2-修復-grub"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-修復-grub"}},[e._v("#")]),e._v(" 2. 修復 grub")]),e._v(" "),n("p",[e._v("網路上的文章說：「完成上述的步驟之後，雖然已能啟動作業系統，同時也能進行『登入』，但若執行『重新啟動』指令，則原先的問題，還會再度發生，其導因則是因為 grub 還沒完成修復工作，所以問題依然還會再發生。若是想要一勞永逸，則還需在『終端機』執行以下的指令，完成 grub 的修復工作才行」。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo update-grub\n$ sudo grub-install /dev/sdX\n")])])]),n("p",[e._v("［注意］：　上述　sdX 的 X 須改成 a / b / …..，以我的情況，需改成 sda 。")]),e._v(" "),n("p",[e._v("不過 ⋯⋯")]),e._v(" "),n("p",[e._v("不知是否因我的 Ubuntu 環境，有安裝「Back in Time」這種 Backup 軟體，所以導致上述的指令不起作用。")]),e._v(" "),n("p",[e._v("後來，在網路找到另一篇文章，作者建議：「在 Ubuntu 作業系統安裝 Boot Repair 套件，並以此具 GUI 介面的軟體來進行 grub 的修復工作」。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485942863633_boot-repair.png",alt:""}})]),e._v(" "),n("p",[e._v("結果，我就是透過這個 Boot Repair 套件，才完成了 grub 的修復工作。")]),e._v(" "),n("h2",{attrs:{id:"_2-1-使用-boot-repair-修復-grup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-使用-boot-repair-修復-grup"}},[e._v("#")]),e._v(" 2.1 使用 Boot Repair 修復 grup")]),e._v(" "),n("p",[e._v("【步驟 1】：啟動「終端機」。")]),e._v(" "),n("p",[e._v("【步驟 2】：在「終端機」，執行 Boot Repair 安裝指令。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo add-apt-repository ppa:yannubuntu/boot-repair\n$ sudo apt-get update\n$ sudo apt-get install -y boot-repair \n")])])]),n("p",[e._v("【步驟 3】：執行 Boot Repair 套件。")]),e._v(" "),n("p",[e._v("透過 Dash，執行 Boot Repair 套件。")]),e._v(" "),n("p",[e._v("或者……")]),e._v(" "),n("p",[e._v("透過「終端機」執行啟動  Boot Repair 的指令。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ boot-repair\n")])])]),n("ol",[n("li",[n("p",[e._v("出現以下的［開機修復］視𥦬時，點擊［建議的修復方式］按鈕。\n"),n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485962873685_2017-02-01+19-54-27+.png",alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("出現以下晝面時，先啟動一個［終端機］，再將以下三條的指令，利用［複製／貼上］指令，在［終端機］中輸入。（注意：第三條指令，可能會需要您自已按＜Enter＞鍵，才能開始執行指令。）")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485963084444_2017-02-01+20-56-39+.png",alt:""}})]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("終端機會先執行一些程式，然後出現以下的畫面。")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485963472700_2017-02-01+20-58-47+.png",alt:""}})]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[e._v("先用＜Tab＞鍵選擇＜是＞選項，再按＜Enter＞鍵。")])]),e._v(" "),n("li",[n("p",[e._v("回到以下原先已顯示的畫面，以滑鼠指標點擊［前進］按鈕。")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485963084444_2017-02-01+20-56-39+.png",alt:""}})]),e._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[e._v("出現以下畫面的時候，將以下的 "),n("strong",[e._v("sudo apt-get install -y ….")]),e._v("  指令，透過［複製／貼上］指令，在［終端機］中輸入。")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485963739007_2017-02-01+21-04-07+.png",alt:""}})]),e._v(" "),n("p",[e._v("7. 終端機會先執行一些程式，然後出現以下的畫面。這時先按〈Tab〉鍵，選擇〈確定〉按鈕，最後按〈Enter〉鍵，開始進行設定 grub-pc 的工作。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485964271433_2017-02-01+21-05-26+.png",alt:""}})]),e._v(" "),n("ol",{attrs:{start:"8"}},[n("li",[e._v("出現以下畫面時，請按〈Tab〉鍵及〈空白〉鍵，選擇［/dev/sda］選項。然後再按〈Tab〉鍵，選擇〈確定〉按鈕，最後按〈Enter〉鍵，開始執行 GRUB 的安裝工作。")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485943578278_IMG_2669.JPG",alt:""}})]),e._v(" "),n("p",[e._v("［注意］：　我選 /dev/sda 選項，係因為我的硬碟，將作業系統安裝在 sda 這顆硬碟．")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485964625659_2017-02-01+19-55-58+.png",alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485964395554_2017-02-01+21-15-59+.png",alt:""}})]),e._v(" "),n("p",[e._v("9. 後續的步驟依［預設］執行即可，故而略去……")]),e._v(" "),n("hr"),e._v(" "),n("h1",{attrs:{id:"參考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#參考文章"}},[e._v("#")]),e._v(" 參考文章")]),e._v(" "),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"https://www.howtoforge.com/tutorial/repair-linux-boot-with-grub-rescue/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repair Linux boot failures in GRUB 2 rescue mode"),n("OutboundLink")],1)])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"http://fanli7.net/a/bianchengyuyan/C__/20160608/563779.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ubuntu 16.04 grub rescue 模式下修復 grub"),n("OutboundLink")],1)])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://help.ubuntu.com/community/Boot-Repair#Getting_Boot-Repair",target:"_blank",rel:"noopener noreferrer"}},[e._v("Boot-Repair"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("alanjui@Srv-01:~$ sudo dpkg --configure -a\n[sudo] password for alanjui:\nalanjui@Srv-01:~$ sudo apt-get install -fy\n正在讀取套件清單... 完成\n正在重建相依關係"),n("br"),e._v("\n正在讀取狀態資料... 完成\n以下套件為自動安裝，並且已經無用：\nlinux-headers-4.4.0-51 linux-headers-4.4.0-51-generic\nlinux-image-4.4.0-51-generic linux-image-extra-4.4.0-51-generic\nUse 'sudo apt autoremove' to remove them.\n升級 0 個，新安裝 0 個，移除 0 個，有 2 個未被升級。\nalanjui@Srv-01:~$ sudo apt-get purge -y --force-yes grub*-common grub-common:i386 shim-signed linux-signed*\n正在讀取套件清單... 完成\n正在重建相依關係"),n("br"),e._v("\n正在讀取狀態資料... 完成\nNote, selecting 'grub-common' for glob 'grub*-common'\nNote, selecting 'grub2-common' for glob 'grub*-common'\nNote, selecting 'linux-signed-image-4.8.0-30-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-57-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-generic-lts-wily' for glob 'linux-signed*'\nNote, selecting 'linux-signed-generic-lts-wily' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.8.0-34-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-generic-lts-utopic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-57-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-lowlatency-lts-xenial' for glob 'linux-signed*'\nNote, selecting 'linux-signed-generic-hwe-16.04-edge' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-31-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.8.0-32-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-21-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.8.0-30-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-22-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-59-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.8.0-28-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.8.0-32-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.8.0-34-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-lowlatency-lts-wily' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-22-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-43-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-59-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-42-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-lowlatency-lts-xenial' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-lowlatency-lts-wily' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-24-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-24-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-45-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-28-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-43-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-generic-lts-xenial' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-47-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-lowlatency-hwe-16.04-edge' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-21-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-28-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-31-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-generic-lts-xenial' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-34-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-51-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-45-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-36-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.8.0-28-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-47-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-51-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-53-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-36-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-generic-lts-utopic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-generic-lts-vivid' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-generic-hwe-16.04-edge' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-34-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-generic-lts-vivid' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-38-generic' for glob 'linux-signed*'\nNote, selecting 'linux-signed-lowlatency-hwe-16.04-edge' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-38-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-42-lowlatency' for glob 'linux-signed*'\nNote, selecting 'linux-signed-image-4.4.0-53-lowlatency' for glob 'linux-signed*'\nPackage 'linux-signed-image-4.4.0-21-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-21-lowlatency' is not installed, so not removed\nPackage 'linux-signed-generic' is not installed, so not removed\nPackage 'linux-signed-generic-hwe-16.04-edge' is not installed, so not removed\nPackage 'linux-signed-generic-lts-utopic' is not installed, so not removed\nPackage 'linux-signed-generic-lts-vivid' is not installed, so not removed\nPackage 'linux-signed-generic-lts-wily' is not installed, so not removed\nPackage 'linux-signed-generic-lts-xenial' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-22-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-22-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-24-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-24-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-28-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-28-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-31-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-31-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-34-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-34-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-36-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-36-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-38-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-38-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-42-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-42-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-43-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-43-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-45-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-45-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-47-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-47-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-51-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-51-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-53-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-53-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-57-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-57-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-59-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.4.0-59-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.8.0-28-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.8.0-28-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.8.0-30-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.8.0-30-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.8.0-32-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.8.0-32-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-4.8.0-34-generic' is not installed, so not removed\nPackage 'linux-signed-image-4.8.0-34-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-generic' is not installed, so not removed\nPackage 'linux-signed-image-generic-hwe-16.04-edge' is not installed, so not removed\nPackage 'linux-signed-image-generic-lts-utopic' is not installed, so not removed\nPackage 'linux-signed-image-generic-lts-vivid' is not installed, so not removed\nPackage 'linux-signed-image-generic-lts-wily' is not installed, so not removed\nPackage 'linux-signed-image-generic-lts-xenial' is not installed, so not removed\nPackage 'linux-signed-image-lowlatency' is not installed, so not removed\nPackage 'linux-signed-image-lowlatency-hwe-16.04-edge' is not installed, so not removed\nPackage 'linux-signed-image-lowlatency-lts-wily' is not installed, so not removed\nPackage 'linux-signed-image-lowlatency-lts-xenial' is not installed, so not removed\nPackage 'linux-signed-lowlatency' is not installed, so not removed\nPackage 'linux-signed-lowlatency-hwe-16.04-edge' is not installed, so not removed\nPackage 'linux-signed-lowlatency-lts-wily' is not installed, so not removed\nPackage 'linux-signed-lowlatency-lts-xenial' is not installed, so not removed\nPackage 'shim-signed' is not installed, so not removed\nPackage 'grub-common:i386' is not installed, so not removed. Did you mean 'grub-common'?\n以下套件為自動安裝，並且已經無用：\nlinux-headers-4.4.0-51 linux-headers-4.4.0-51-generic\nlinux-image-4.4.0-51-generic linux-image-extra-4.4.0-51-generic\nUse 'sudo apt autoremove' to remove them.\n下列套件將會被【移除】：\ngrub-common* grub-gfxpayload-lists* grub-pc* grub-pc-bin* grub2-common*\n升級 0 個，新安裝 0 個，移除 5 個，有 2 個未被升級。\n此操作完成之後，會空出 16.6 MB 的磁碟空間。\n（讀取資料庫 ... 目前共安裝了 400936 個檔案和目錄。）\n移除 grub-pc (2.02~beta2-36ubuntu3.7) 中...\nPurging configuration files for grub-pc (2.02~beta2-36ubuntu3.7) ...\n移除 grub-gfxpayload-lists (0.7) 中...\n移除 grub2-common (2.02~beta2-36ubuntu3.7) 中...\n移除 grub-pc-bin (2.02~beta2-36ubuntu3.7) 中...\n移除 grub-common (2.02~beta2-36ubuntu3.7) 中...\nPurging configuration files for grub-common (2.02~beta2-36ubuntu3.7) ...\nProcessing triggers for man-db (2.7.5-1) ...\nProcessing triggers for install-info (6.1.0.dfsg.1-5) ...\nW: --force-yes is deprecated, use one of the options starting with --allow instead.")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);
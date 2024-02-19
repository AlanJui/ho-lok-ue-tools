# 搶救硬碟無法正常啟動 Ubuntu
安裝 Ubuntu 作業系統的「硬碟」，若無法正常啟動，可能的因素之一就是：「grub 毀了」！


![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485920614883_IMG_2664.JPG)



# 如何確定無法開機的問題出在 grub 身上

當 grub 出狀況，導致硬碟無法正常啟動時，會在開機之後，出現如下的畫面，並顯現如下的提示：


    Entering rescue mode...
    grub rescue>


# grub 安裝在那顆硬碟的那個分區

電腦裡裝了好顆硬碟；硬碟裡也切了好幾個分區，到底 grub 安裝在那顆硬碟？那個分區？當初没留備忘筆記，現在要怎麼確認呢？！



## 電腦裡裝有幾顆硬碟？

想知道這時的電腦有幾顆硬碟？可用以下的 ls  指令查詢：

    grub rescue> ls


![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485921225276_file.png)




## 硬碟裡的那個磁區有安裝 grub 

想查詢安裝 grub 開機功能是在那顆硬碟的那個「磁區」，可用以下的 `ls (hd*,msods*)/grub`  指令查詢：


    grub rescue> ls (hd1,msdos1)/grub


![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485921310583_file.png)


因為找到了 **grub.cfg** 這檔案，故可以確認：「在 hd1 磁碟機，其中的 msdos1 磁區」，便是安裝 grub 開機功能的地方。

以上的指令可以簡化，將 msdos1 改用 1 代替，如：


    grub rescue> ls (hd1,1)/grub

［注意］：　我的硬碟，在安裝 Ubuntu 作業系統時，係以獨立磁區，掛載 /boot 目錄。所以，以下的操作，不敢保證一定適用您的狀況。


![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485964395554_2017-02-01+21-15-59+.png)



# 開始修復 grub

因為前述的「查證」，已確定待修復的 grub 落在 (hd1,msdos1) 這裡。接著，待完成以下的兩道程序，完成 grub 的修復工作：

 1. 啟動 Ubuntu 作業系統
 2. 修復 grub


## 1. 啟動 Ubuntu 作業系統

所以，輸入下列指令，開始進行 grub 的修復工作。

    grub rescue> set root=(hd1,msdos1)
    grub rescue> set prefix=(hd1,msdos1)/grub
    grub rescue> insmod normal
    grub rescue> normal


![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485941743143_file.png)


【註】：執行完「normal」指令之後，Ubuntu 的作業系統就能正常啟動，進入 GUI 模式的「登入」畫面。


## 2. 修復 grub

網路上的文章說：「完成上述的步驟之後，雖然已能啟動作業系統，同時也能進行『登入』，但若執行『重新啟動』指令，則原先的問題，還會再度發生，其導因則是因為 grub 還沒完成修復工作，所以問題依然還會再發生。若是想要一勞永逸，則還需在『終端機』執行以下的指令，完成 grub 的修復工作才行」。


    $ sudo update-grub
    $ sudo grub-install /dev/sdX

［注意］：　上述　sdX 的 X 須改成 a / b / …..，以我的情況，需改成 sda 。

不過 ⋯⋯

不知是否因我的 Ubuntu 環境，有安裝「Back in Time」這種 Backup 軟體，所以導致上述的指令不起作用。

後來，在網路找到另一篇文章，作者建議：「在 Ubuntu 作業系統安裝 Boot Repair 套件，並以此具 GUI 介面的軟體來進行 grub 的修復工作」。

![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485942863633_boot-repair.png)



結果，我就是透過這個 Boot Repair 套件，才完成了 grub 的修復工作。


## 2.1 使用 Boot Repair 修復 grup

 【步驟 1】：啟動「終端機」。
 

【步驟 2】：在「終端機」，執行 Boot Repair 安裝指令。
 

    $ sudo add-apt-repository ppa:yannubuntu/boot-repair
    $ sudo apt-get update
    $ sudo apt-get install -y boot-repair 

 【步驟 3】：執行 Boot Repair 套件。
 
 透過 Dash，執行 Boot Repair 套件。
 
 或者……
 
 透過「終端機」執行啟動  Boot Repair 的指令。

    $ boot-repair


1. 出現以下的［開機修復］視𥦬時，點擊［建議的修復方式］按鈕。
![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485962873685_2017-02-01+19-54-27+.png)



 2. 出現以下晝面時，先啟動一個［終端機］，再將以下三條的指令，利用［複製／貼上］指令，在［終端機］中輸入。（注意：第三條指令，可能會需要您自已按＜Enter＞鍵，才能開始執行指令。）

![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485963084444_2017-02-01+20-56-39+.png)



3. 終端機會先執行一些程式，然後出現以下的畫面。


![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485963472700_2017-02-01+20-58-47+.png)


 4. 先用＜Tab＞鍵選擇＜是＞選項，再按＜Enter＞鍵。

 5.  回到以下原先已顯示的畫面，以滑鼠指標點擊［前進］按鈕。


![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485963084444_2017-02-01+20-56-39+.png)


 6. 出現以下畫面的時候，將以下的 **sudo apt-get install -y ….**  指令，透過［複製／貼上］指令，在［終端機］中輸入。
 

![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485963739007_2017-02-01+21-04-07+.png)


　7. 終端機會先執行一些程式，然後出現以下的畫面。這時先按〈Tab〉鍵，選擇〈確定〉按鈕，最後按〈Enter〉鍵，開始進行設定 grub-pc 的工作。


![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485964271433_2017-02-01+21-05-26+.png)


 8. 出現以下畫面時，請按〈Tab〉鍵及〈空白〉鍵，選擇［/dev/sda］選項。然後再按〈Tab〉鍵，選擇〈確定〉按鈕，最後按〈Enter〉鍵，開始執行 GRUB 的安裝工作。


![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485943578278_IMG_2669.JPG)


［注意］：　我選 /dev/sda 選項，係因為我的硬碟，將作業系統安裝在 sda 這顆硬碟．


![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485964625659_2017-02-01+19-55-58+.png)



![](https://paper-attachments.dropbox.com/s_29017789C8759EEC97A6E0AEEA340116401796D6475AF1A9621444098A7D25ED_1485964395554_2017-02-01+21-15-59+.png)



　9. 後續的步驟依［預設］執行即可，故而略去……



----------
# 參考文章


1. [Repair Linux boot failures in GRUB 2 rescue mode](https://www.howtoforge.com/tutorial/repair-linux-boot-with-grub-rescue/)
2. [Ubuntu 16.04 grub rescue 模式下修復 grub](http://fanli7.net/a/bianchengyuyan/C__/20160608/563779.html)
3. [Boot-Repair](https://help.ubuntu.com/community/Boot-Repair#Getting_Boot-Repair)


    alanjui@Srv-01:~$ sudo dpkg --configure -a
    [sudo] password for alanjui: 
    alanjui@Srv-01:~$ sudo apt-get install -fy
    正在讀取套件清單... 完成
    正在重建相依關係          
    正在讀取狀態資料... 完成
    以下套件為自動安裝，並且已經無用：
      linux-headers-4.4.0-51 linux-headers-4.4.0-51-generic
      linux-image-4.4.0-51-generic linux-image-extra-4.4.0-51-generic
    Use 'sudo apt autoremove' to remove them.
    升級 0 個，新安裝 0 個，移除 0 個，有 2 個未被升級。
    alanjui@Srv-01:~$ sudo apt-get purge -y --force-yes grub*-common grub-common:i386 shim-signed linux-signed*
    正在讀取套件清單... 完成
    正在重建相依關係          
    正在讀取狀態資料... 完成
    Note, selecting 'grub-common' for glob 'grub*-common'
    Note, selecting 'grub2-common' for glob 'grub*-common'
    Note, selecting 'linux-signed-image-4.8.0-30-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-57-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-generic-lts-wily' for glob 'linux-signed*'
    Note, selecting 'linux-signed-generic-lts-wily' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.8.0-34-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-generic-lts-utopic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-57-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-lowlatency-lts-xenial' for glob 'linux-signed*'
    Note, selecting 'linux-signed-generic-hwe-16.04-edge' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-31-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.8.0-32-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-21-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.8.0-30-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-22-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-59-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.8.0-28-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.8.0-32-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.8.0-34-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-lowlatency-lts-wily' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-22-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-43-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-59-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-42-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-lowlatency-lts-xenial' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-lowlatency-lts-wily' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-24-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-24-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-45-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-28-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-43-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-generic-lts-xenial' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-47-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-lowlatency-hwe-16.04-edge' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-21-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-28-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-31-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-generic-lts-xenial' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-34-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-51-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-45-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-36-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.8.0-28-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-47-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-51-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-53-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-36-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-generic-lts-utopic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-generic-lts-vivid' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-generic-hwe-16.04-edge' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-34-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-generic-lts-vivid' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-38-generic' for glob 'linux-signed*'
    Note, selecting 'linux-signed-lowlatency-hwe-16.04-edge' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-38-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-42-lowlatency' for glob 'linux-signed*'
    Note, selecting 'linux-signed-image-4.4.0-53-lowlatency' for glob 'linux-signed*'
    Package 'linux-signed-image-4.4.0-21-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-21-lowlatency' is not installed, so not removed
    Package 'linux-signed-generic' is not installed, so not removed
    Package 'linux-signed-generic-hwe-16.04-edge' is not installed, so not removed
    Package 'linux-signed-generic-lts-utopic' is not installed, so not removed
    Package 'linux-signed-generic-lts-vivid' is not installed, so not removed
    Package 'linux-signed-generic-lts-wily' is not installed, so not removed
    Package 'linux-signed-generic-lts-xenial' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-22-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-22-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-24-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-24-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-28-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-28-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-31-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-31-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-34-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-34-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-36-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-36-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-38-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-38-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-42-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-42-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-43-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-43-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-45-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-45-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-47-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-47-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-51-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-51-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-53-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-53-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-57-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-57-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-59-generic' is not installed, so not removed
    Package 'linux-signed-image-4.4.0-59-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.8.0-28-generic' is not installed, so not removed
    Package 'linux-signed-image-4.8.0-28-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.8.0-30-generic' is not installed, so not removed
    Package 'linux-signed-image-4.8.0-30-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.8.0-32-generic' is not installed, so not removed
    Package 'linux-signed-image-4.8.0-32-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-4.8.0-34-generic' is not installed, so not removed
    Package 'linux-signed-image-4.8.0-34-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-generic' is not installed, so not removed
    Package 'linux-signed-image-generic-hwe-16.04-edge' is not installed, so not removed
    Package 'linux-signed-image-generic-lts-utopic' is not installed, so not removed
    Package 'linux-signed-image-generic-lts-vivid' is not installed, so not removed
    Package 'linux-signed-image-generic-lts-wily' is not installed, so not removed
    Package 'linux-signed-image-generic-lts-xenial' is not installed, so not removed
    Package 'linux-signed-image-lowlatency' is not installed, so not removed
    Package 'linux-signed-image-lowlatency-hwe-16.04-edge' is not installed, so not removed
    Package 'linux-signed-image-lowlatency-lts-wily' is not installed, so not removed
    Package 'linux-signed-image-lowlatency-lts-xenial' is not installed, so not removed
    Package 'linux-signed-lowlatency' is not installed, so not removed
    Package 'linux-signed-lowlatency-hwe-16.04-edge' is not installed, so not removed
    Package 'linux-signed-lowlatency-lts-wily' is not installed, so not removed
    Package 'linux-signed-lowlatency-lts-xenial' is not installed, so not removed
    Package 'shim-signed' is not installed, so not removed
    Package 'grub-common:i386' is not installed, so not removed. Did you mean 'grub-common'?
    以下套件為自動安裝，並且已經無用：
      linux-headers-4.4.0-51 linux-headers-4.4.0-51-generic
      linux-image-4.4.0-51-generic linux-image-extra-4.4.0-51-generic
    Use 'sudo apt autoremove' to remove them.
    下列套件將會被【移除】：
      grub-common* grub-gfxpayload-lists* grub-pc* grub-pc-bin* grub2-common*
    升級 0 個，新安裝 0 個，移除 5 個，有 2 個未被升級。
    此操作完成之後，會空出 16.6 MB 的磁碟空間。
    （讀取資料庫 ... 目前共安裝了 400936 個檔案和目錄。）
    移除 grub-pc (2.02~beta2-36ubuntu3.7) 中...
    Purging configuration files for grub-pc (2.02~beta2-36ubuntu3.7) ...
    移除 grub-gfxpayload-lists (0.7) 中...
    移除 grub2-common (2.02~beta2-36ubuntu3.7) 中...
    移除 grub-pc-bin (2.02~beta2-36ubuntu3.7) 中...
    移除 grub-common (2.02~beta2-36ubuntu3.7) 中...
    Purging configuration files for grub-common (2.02~beta2-36ubuntu3.7) ...
    Processing triggers for man-db (2.7.5-1) ...
    Processing triggers for install-info (6.1.0.dfsg.1-5) ...
    W: --force-yes is deprecated, use one of the options starting with --allow instead.
    


# SRV-01 伺服器

浩鑫電腦 Shuttle SH67H3

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568296683162_image.png)

# 硬碟

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568291099860_2019-09-12+20-21-32+.png)

## 基本資訊

**HD1：美光 MX500 500G 2.5 吋 SATA III SSD (R:560M/W:510M/3D TLC)**

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568288952661_image.png)

**【規格】：**

- 讀 560M/寫 510M/3D TLC/五年保
- 連續讀取 560MB/s /連讀寫入 510MB/s
- 動態寫入加速
- 獨立 NAND 容錯陣列(RAIN)
- 四層特定資料防護
- AES 256 位元加密
- 資料路徑保護
- 整合性斷電保護

**HD2：**Seagate【BarraCuda】新梭魚 (ST2000DM008) 2TB/7200 轉/256MB/3.5 吋/3Y

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568288712480_image.png)

**【規格】：**

- 容量：3TB
- SATA 6Gb/s
- 7200 轉 高效能
- 256MB 緩衝記憶體
- 工作負載 55TB/年
- 低功耗省電
- 三年保固

## 硬碟切割

**HD1: /dev/sdb**

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568291174769_2019-09-12+20-25-35+.png)

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568292536306_2019-09-12+20-46-50+.png)

    sdb1: __________________________________________________________________________

        File system:       swap
        Boot sector type:  -
        Boot sector info:

    sdb2: __________________________________________________________________________

        File system:       ext4
        Boot sector type:  -
        Boot sector info:
        Operating System:  Ubuntu 18.04.3 LTS
        Boot files:        /boot/grub/grub.cfg /etc/fstab
                           /boot/grub/i386-pc/core.img

    sdb3: __________________________________________________________________________

        File system:       ext4
        Boot sector type:  -
        Boot sector info:
        Operating System:
        Boot files:

    sdb4: __________________________________________________________________________

        File system:       BIOS Boot partition
        Boot sector type:  Grub2's core.img
        Boot sector info:

**HD2: /dev/sda**

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568291337508_2019-09-12+20-28-34+.png)

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568292594163_2019-09-12+20-47-51+.png)

    sda1: __________________________________________________________________________

        File system:       ext4
        Boot sector type:  -
        Boot sector info:
        Operating System:
        Boot files:

## 系統掛載

**Mount points:**

    Device           Mount_Point              Type       Options
    /dev/sda1        /mnt/new_hdd             ext4       (rw,relatime,data=ordered)
    /dev/sdb2        /                        ext4       (rw,relatime,errors=remount-ro,data=ordered)
    /dev/sdb3        /home                    ext4       (rw,relatime,data=ordered)
    /dev/sdc1        /media/web_admin/NAS     ext4       (ro,nosuid,nodev,relatime,data=ordered,uhelper=udisks2)

**/etc/fstab 設定檔**

    # /etc/fstab: static file system information.
    #
    # Use 'blkid' to print the universally unique identifier for a
    # device; this may be used with UUID= as a more robust way to name devices
    # that works even if disks are added and removed. See fstab(5).
    #
    # <file system>                                     <mount point>  <type>   <options>         <dump>  <pass>
    # / was on /dev/sda2 during installation
    UUID=272b0fdf-9d56-414c-a181-9667a916eb70           /               ext4    errors=remount-ro    0       1
    # /home was on /dev/sda3 during installation
    UUID=45f291bd-a4a9-4d23-bc2f-0429619072cf           /home           ext4    defaults             0       2
    # swap was on /dev/sda1 during installation
    UUID=bf9345d8-a424-4b24-a2f1-b7bf11e0d68f           none            swap    sw                   0       0
    #UUID=9279ede9-49f6-44fe-b481-261500f67675           /NAS            ext4    defaults             0       2
    #UUID=03436d25-4a36-40b9-b8d2-7c40dee82f4a /BAK ext4 users 0 0
    #UUID=03436d25-4a36-40b9-b8d2-7c40dee82f4a           /BAK            ext4    noauto,users         0       0

**查看 UUID**

    ls -al /dev/disk/by-uuid


    SRV-01# ls -al /dev/disk/by-uuid
    總計 0
    drwxr-xr-x 2 root root 140  9月 12 22:32 .
    drwxr-xr-x 8 root root 160  9月 12 22:32 ..
    lrwxrwxrwx 1 root root  10  9月 12 22:32 272b0fdf-9d56-414c-a181-9667a916eb70 -> ../../sdb2
    lrwxrwxrwx 1 root root  10  9月 12 22:32 45f291bd-a4a9-4d23-bc2f-0429619072cf -> ../../sdb3
    lrwxrwxrwx 1 root root  10  9月 12 22:32 6dda4534-aaa3-4c2c-8725-1fb778ad5cfd -> ../../sda1
    lrwxrwxrwx 1 root root  10  9月 12 22:32 9279ede9-49f6-44fe-b481-261500f67675 -> ../../sdc1
    lrwxrwxrwx 1 root root  10  9月 12 22:32 bf9345d8-a424-4b24-a2f1-b7bf11e0d68f -> ../../sdb1

## 硬碟工具

**Ubuntu 18.04 LiveUSB**

- GParted : 切割硬碟工具
- Boot-Repair： 修復 GRUB

**CloneZilla LiveUSB**

- 硬碟複製

**Boot Repair 與 Boot Info**

自動修復 GRUB 問題，與提供硬碟相關資訊。

    $ sudo apt-add-repository ppa:yannubuntu/boot-repair
    $ sudo apt install boot-repair
    $ boot-repair

**Rysnc**

類似 cp, scp 之指令，不僅可對目錄／檔案進行「複製作業」；更具有「同步作業」之功能，是個特別適用於：「伺服器資料備份／伺服器間資料同步的指令」。

# 作業程序

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568297351704_image.png)

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568296257836_image.png)

## 硬碟複製

（1）使用 Ubuntu LiveUSB ，針對**新硬碟**進行「分割區」切割，並格式化為 ext4 。

        - 〖2〗SATA4：全新硬碟（SATA4） ==> /dev/sda
        - 〖5〗ESATA：Ubuntu 18.04 Live USB

（2）開機與登入系統。

        - 〖2〗SATA4：HD1 ==> /dev/sda  Ubuntu 18.04 作業系統
        - 〖1〗SATA3：HD2 ==> /dev/sdb  新 NAS 硬碟
        - 〖3〗USB3：HD3 ==> /dev/sdc  舊 NAS 硬碟
        - 使用 web_admin 帳戶登入作業系統。

（3）在作業系統掛載硬碟，並進行目錄及檔案複製作業。

以下 /dev/sdb 為安裝 Ubuntu 18.04 作業系統之硬碟。

- /dev/sdb2 掛載於 /
- /dev/sdb3 掛載於 /home

**掛載新、舊硬碟**：

    $ sudo su –   # sudo -i
    $ mkdir -p /mnt/{new_hdd,old_hdd}
    $ mount /dev/sda1 /mnt/new_hdd
    $ mount /dev/sdc1 /mnt/old_hdd

**將舊硬碟（Source）的檔案複製到新硬碟（Target）**：

    $ rsync -ax /mnt/old/ /mnt/new_hdd/

**觀察新硬碟已完成複製進度**：

    $ cd /mnt/new_hdd
    $ df -h
    檔案系統        容量  已用  可用 已用% 掛載點
    udev            7.8G     0  7.8G    0% /dev
    tmpfs           1.6G  4.8M  1.6G    1% /run
    /dev/sdb2       188G   97G   81G   55% /
    tmpfs           7.8G   66M  7.8G    1% /dev/shm
    tmpfs           5.0M  4.0K  5.0M    1% /run/lock
    tmpfs           7.8G     0  7.8G    0% /sys/fs/cgroup
    /dev/loop0       15M   15M     0  100% /snap/gnome-characters/296
    ⋯⋯
    ⋯⋯
    ⋯⋯
    /dev/sda1       1.8T  523G  1.2T   31% /mnt/new_hdd
    /dev/sdc1       1.8T  859G  882G   50% /mnt/old_hdd

    $ df -h
    檔案系統        容量  已用  可用 已用% 掛載點
    udev            7.8G     0  7.8G    0% /dev
    tmpfs           1.6G  4.8M  1.6G    1% /run
    /dev/sdb2       188G   97G   81G   55% /
    tmpfs           7.8G   66M  7.8G    1% /dev/shm
    tmpfs           5.0M  4.0K  5.0M    1% /run/lock
    tmpfs           7.8G     0  7.8G    0% /sys/fs/cgroup
    /dev/loop0       15M   15M     0  100% /snap/gnome-characters/296
    ⋯⋯
    ⋯⋯
    ⋯⋯

（4）設定新硬碟可於作業系統開機後，自動掛載。

執行指令，查得新硬碟（/dev/sda1）之 UUID 編號。

    ls -al /dev/disk/by-uuid


    $ ls -al /dev/disk/by-uuid
    總計 0
    drwxr-xr-x 2 root root 140  9月 12 22:32 .
    drwxr-xr-x 8 root root 160  9月 12 22:32 ..
    lrwxrwxrwx 1 root root  10  9月 12 22:32 272b0fdf-9d56-414c-a181-9667a916eb70 -> ../../sdb2
    lrwxrwxrwx 1 root root  10  9月 12 22:32 45f291bd-a4a9-4d23-bc2f-0429619072cf -> ../../sdb3
    lrwxrwxrwx 1 root root  10  9月 12 22:32 6dda4534-aaa3-4c2c-8725-1fb778ad5cfd -> ../../sda1
    lrwxrwxrwx 1 root root  10  9月 12 22:32 9279ede9-49f6-44fe-b481-261500f67675 -> ../../sdc1
    lrwxrwxrwx 1 root root  10  9月 12 22:32 bf9345d8-a424-4b24-a2f1-b7bf11e0d68f -> ../../sdb1

編輯作業系統硬碟掛載設定檔（/etc/fstab）

    UUID=xxxxxxxx-xxxxx-xxxxxxxxxxx-xxxxx-xxxxxx /NAS ext4 defaults 0 0



    # /etc/fstab: static file system information.
    #
    # Use 'blkid' to print the universally unique identifier for a
    # device; this may be used with UUID= as a more robust way to name devices
    # that works even if disks are added and removed. See fstab(5).
    #
    # <file system>                                     <mount point>  <type>   <options>         <dump>  <pass>
    # / was on /dev/sda2 during installation
    UUID=272b0fdf-9d56-414c-a181-9667a916eb70           /               ext4    errors=remount-ro    0       1
    # /home was on /dev/sda3 during installation
    UUID=45f291bd-a4a9-4d23-bc2f-0429619072cf           /home           ext4    defaults             0       2
    # swap was on /dev/sda1 during installation
    UUID=bf9345d8-a424-4b24-a2f1-b7bf11e0d68f           none            swap    sw                   0       0
    #UUID=9279ede9-49f6-44fe-b481-261500f67675           /NAS            ext4    defaults             0       2
    UUID=6dda4534-aaa3-4c2c-8725-1fb778ad5cfd           /NAS            ext4    defaults             0       0
    #UUID=03436d25-4a36-40b9-b8d2-7c40dee82f4a /BAK ext4 users 0 0
    #UUID=03436d25-4a36-40b9-b8d2-7c40dee82f4a           /BAK            ext4    noauto,users         0       0

【[參數指引](<https://wiki.archlinux.org/index.php/Fstab_(%E6%AD%A3%E9%AB%94%E4%B8%AD%E6%96%87)>)】：

- file system：硬碟分隔區的位置（或稱：裝置的路徑）

- mount point：硬碟分割區所對映目錄之掛載點

- type：硬碟分割區在檔案系統使用之格式

- options：掛載選項參數……

  - auto/noauto：作業系統開機時，該裝置是否需進行自動掛載作業；
  - async/sync：檔案系統對記憶體的讀寫作業，使用非同步方式進行 I/O 存取；
  - exec/noexec：檔案系統中的二進位檔案（執行檔），是否可執行；
  - default：採用預設值，表同時具有：rw、suid、exec、auto、nouser、async 選項；
  - user/nouser：nouser 表一般使用者無權使用 mount 指令，進行裝置掛載作業；
  - rw：裝置可執行讀／寫作業；
  - ro：裝置為唯讀，只能進行讀取作業；
  - suid/nosuid：檔案系統是否允許 SUID 的存在。

- dump：是否可被 dump 指令進行備份，參數值為 0：不需備份；參數值為 1：需要備份；參數值為 2：需要備份，但其備份的重要性，比設為 1 者小；

- pass：當作業系統開機時，fsck 是否需針對檔案系統進行檢查作業。參數值 0：無需檢查；參數值為 1：需檢查，優先權最高；參數值為 2：需檢查，優先權次之。（掛載點為「根目錄」時，此參數值設為 1；其他非目錄掛載點，設為 2。）

【舉例】：

一般使用者也可用光碟機：
/dev/cdrom /mnt/cdrom iso9660 noauto, user, ro 0 0

    # <file system>        <dir>         <type>    <options>             <dump> <pass>
    none                   /dev/pts      devpts    defaults                0      0
    none                   /dev/shm      tmpfs     defaults                0      0

    /dev/cdrom             /media/cd     iso9660   ro,user,noauto,unhide   0      0
    /dev/dvd               /media/dvd    udf       ro,user,noauto,unhide   0      0
    /dev/fd0               /media/fl     auto      user,noauto             0      0

    /dev/sda2              /             ext4      defaults,noatime        0      1
    /dev/sda6              /home         ext4      defaults,noatime        0      2
    /dev/sda7              none          swap      defaults                0      0

## 使用 rsync 複製（備份）目錄與檔案

    $ rsync -av /media/web_admin/NAS/{GitRepo,Music} /mnt/new_hdd/

## 使用 blkid 指令查詢硬碟的相關資訊

- 作業系統中掛載了幾個硬碟
- 每個硬碟分割幾區
- 每個硬碟分割區其： 裝置 UUID（UUID）、檔案格式（TYPE）、分割區 UUID（PARTUUID）、分割區標籤（PARTLABEL）


    $ blkid
    /dev/sda1: UUID="6dda4534-aaa3-4c2c-8725-1fb778ad5cfd" TYPE="ext4" PARTUUID="3c9b9d09-01"
    /dev/sdb1: UUID="bf9345d8-a424-4b24-a2f1-b7bf11e0d68f" TYPE="swap" PARTLABEL="SWAP" PARTUUID="1df0c81f-4757-43de-8b2e-8066488a9d2c"
    /dev/sdb2: UUID="272b0fdf-9d56-414c-a181-9667a916eb70" TYPE="ext4" PARTLABEL="/" PARTUUID="97babc23-9f72-4cb7-ad38-0100b2d3f83b"
    /dev/sdb3: UUID="45f291bd-a4a9-4d23-bc2f-0429619072cf" TYPE="ext4" PARTLABEL="/home" PARTUUID="c7f42354-6a36-4529-85f1-6659c0f2246e"
    /dev/sdc1: LABEL="NAS" UUID="9279ede9-49f6-44fe-b481-261500f67675" TYPE="ext4" PARTUUID="3c9b9d09-01"

# 參考文件

## 在 Ubuntu 作業系統將 HDD 硬碟升級成 SSD 硬碟

http://blog.lyhdev.com/2011/04/ubuntu-linux.html

## 查詢開機相關資訊

https://help.ubuntu.com/community/Boot-Info

## GRUB2 安裝與修復

https://help.ubuntu.com/community/Grub2/Installing

## 在 Mac 安裝 Ubuntu LiveUSB

https://www.youtube.com/watch?v=ughBRtJwqQI&

[https://youtu.be/ughBRtJwqQI](https://youtu.be/ughBRtJwqQI)

## 系統開機時 Grub2 無法正常作業之急救

https://www.pcsuggest.com/grub-error-no-such-device/

## 使用 rsync 進行檔案複製／備份作業

https://blog.gtwang.org/linux/rsync-local-remote-file-synchronization-commands/

## 使用 rsync 在伺服器間進行檔案同步作業

http://blogs.yyes.chc.edu.tw/post/2/592

## 在 Linux 平台將 HDD 硬碟升級成 SSD 硬碟

https://www.pcsuggest.com/hdd-to-ssd-cloning-linux/

## 在 Linux 作業系統新增第二個硬碟

https://blog.gtwang.org/linux/linux-add-format-mount-harddisk/

https://blog.gtwang.org/linux/linux-add-format-mount-4tb-harddisk/

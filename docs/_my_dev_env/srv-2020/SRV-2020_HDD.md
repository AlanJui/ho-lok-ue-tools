---
sidebar: auto
---

# SRV-2020 伺服器硬碟安裝指引

## 硬碟摘要

- HDD1(sda): 內接 SATA SSD 500GB (CT500MX500SSD)
- HDD2(sdb): 內接 SATA HDD 2TB (ST2000DM008-2FR102)
- HDD3(sdg): 外接 SATA HDD 4TB

## 硬碟切割

### 作業系統認可已安裝硬碟

```
$ lsblk | grep disk
sda    8:0    0 465.8G  0 disk
sdb    8:16   0   1.8T  0 disk
sdg    8:96   0   3.7T  0 disk
```

### 各硬碟切割狀態與掛載目錄路徑

```
$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0 465.8G  0 disk
├─sda1   8:1    0   512M  0 part /boot/efi
├─sda2   8:2    0     1K  0 part
└─sda5   8:5    0 465.3G  0 part /
sdb      8:16   0   1.8T  0 disk
└─sdb1   8:17   0   1.8T  0 part /NAS
sdg      8:96   0   3.7T  0 disk
├─sdg1   8:97   0   200M  0 part /media/alanjui/EFI
└─sdg2   8:98   0   3.7T  0 part /run/timeshift/backup
sr0     11:0    1  1024M  0 rom
```

### 硬碟各切割區之檔案格式與 UUID

```
$ lsblk -f -m
NAME FSTYPE LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINT   SIZE OWNER GROUP MODE
sda                                                                              465.8G root  disk  brw-rw----
├─sda1
│    vfat         E5EE-16F7                               511M     0% /boot/efi    512M root  disk  brw-rw----
├─sda2
│                                                                                    1K root  disk  brw-rw----
└─sda5
     ext4         26dab473-9118-46da-a89e-adb615083e2f  204.9G    50% /          465.3G root  disk  brw-rw----
sdb                                                                                1.8T root  disk  brw-rw----
└─sdb1
     ext4   NAS   6dda4534-aaa3-4c2c-8725-1fb778ad5cfd    1.3T    25% /NAS         1.8T root  disk  brw-rw----
sdg                                                                                3.7T root  disk  brw-rw----
├─sdg1
│    vfat   EFI   67E3-17ED                             196.9M     0% /media/ala   200M root  disk  brw-rw----
└─sdg2
     ext4   SRV-2020_BAK
                  49949c44-a267-450a-a825-606e06692c94    2.7T    20% /run/times   3.7T root  disk  brw-rw----
sr0                                                                               1024M root  cdrom brw-rw----
```

### HDD1: /dev/sda

- sda1
  ![](/assets/img/server-2020/sda1.png)

- sda2
  ![](/assets/img/server-2020/sda2.png)

- sda5
  ![](/assets/img/server-2020/sda5.png)

### HDD2: /dev/sdb

- sdb1
  ![](/assets/img/server-2020/sdb1.png)

### HDD3: /dev/sdg

- sdg1
  ![](/assets/img/server-2020/sdg1.png)

- sdg2
  ![](/assets/img/server-2020/sdg2.png)

## 硬碟掛載

### 各硬碟分割區掛載點（Mount Point）

```
$ lsblk -o NAME,FSTYPE,SIZE,MOUNTPOINT
NAME   FSTYPE   SIZE MOUNTPOINT
sda           465.8G
├─sda1 vfat     512M /boot/efi
├─sda2            1K
└─sda5 ext4   465.3G /
sdb             1.8T
└─sdb1 ext4     1.8T /NAS
sdg             3.7T
├─sdg1 vfat     200M /media/alanjui/EFI
└─sdg2 ext4     3.7T /run/timeshift/backup
sr0            1024M
```

### 各硬碟分割區 UUID

```
$ blkid
/dev/sda1: UUID="E5EE-16F7" TYPE="vfat" PARTUUID="5ce49673-01"
/dev/sda5: UUID="26dab473-9118-46da-a89e-adb615083e2f" TYPE="ext4" PARTUUID="5ce49673-05"
/dev/sdb1: LABEL="NAS" UUID="6dda4534-aaa3-4c2c-8725-1fb778ad5cfd" TYPE="ext4" PARTUUID="3c9b9d09-01"
/dev/sdg1: LABEL_FATBOOT="EFI" LABEL="EFI" UUID="67E3-17ED" TYPE="vfat" PARTLABEL="EFI System Partition" PARTUUID="394fb177-f61d-4934-a618-6ffc837c55c9"
/dev/sdg2: LABEL="SRV-2020_BAK" UUID="49949c44-a267-450a-a825-606e06692c94" TYPE="ext4" PARTLABEL="Backup data" PARTUUID="7cd2eb4c-bff5-4c31-aa80-35bceee79e84"
```

### fstab 設定

/etc/fstab 設定檔

```
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system>                             <mount point>   <type>  <options>                       <dump>  <pass>
# / was on /dev/sda5 during installation
UUID=26dab473-9118-46da-a89e-adb615083e2f   /               ext4    errors=remount-ro 		            0       1
# /boot/efi was on /dev/sda1 during installation
UUID=E5EE-16F7  			                /boot/efi	    vfat    umask=0077      		            0       1
/swapfile                                   none            swap    sw              		            0       0

LABEL=NAS 				                    /mnt/NAS 	    auto 	nosuid,nodev,nofail,x-gvfs-show     0 	    0

# External Disk : NAS
UUID=6dda4534-aaa3-4c2c-8725-1fb778ad5cfd   /NAS		    ext4	defaults			                0	    2
```

【註】：舊設定參考

```
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
UUIDbf9345d8-a424-4b24-a2f1-b7bf11e0d68f            none            swap    sw                   0       0
#UUID=9279ede9-49f6-44fe-b481-261500f67675          /NAS            ext4    defaults             0       2
#UUID=03436d25-4a36-40b9-b8d2-7c40dee82f4a          /BAK            ext4    users                0       0
#UUID=03436d25-4a36-40b9-b8d2-7c40dee82f4a          /BAK            ext4    noauto,users         0       0
```

## 掛載硬碟

作業系統安裝時，因第二顆硬碟尚未備妥；或第二顆硬碟容量升級更換；亦或者是第二顆硬碟
因固障替換新硬碟，對於新硬碟，依以下《作業指引》進行安裝設定。

- [掛載第二顆硬碟作業指引](./掛載第二顆硬碟)

## 常用硬碟管理／維護工具

- blkid
- by-uuid
- Ubuntu 20.04 Live USB
- CloneZilla Live USB
- Boot Repair
- Rysnc

### blkid

blkid 指令可查詢硬碟的相關資訊：

- 作業系統中掛載了幾個硬碟
- 每個硬碟分割幾區
- 每個硬碟分割區其： 裝置 UUID（UUID）、檔案格式（TYPE）、分割區 UUID（PARTUUID）、分割區標籤（PARTLABEL）

```
$ blkid
/dev/sda1: UUID="6dda4534-aaa3-4c2c-8725-1fb778ad5cfd" TYPE="ext4" PARTUUID="3c9b9d09-01"
/dev/sdb1: UUID="bf9345d8-a424-4b24-a2f1-b7bf11e0d68f" TYPE="swap" PARTLABEL="SWAP" PARTUUID="1df0c81f-4757-43de-8b2e-8066488a9d2c"
/dev/sdb2: UUID="272b0fdf-9d56-414c-a181-9667a916eb70" TYPE="ext4" PARTLABEL="/" PARTUUID="97babc23-9f72-4cb7-ad38-0100b2d3f83b"
/dev/sdb3: UUID="45f291bd-a4a9-4d23-bc2f-0429619072cf" TYPE="ext4" PARTLABEL="/home" PARTUUID="c7f42354-6a36-4529-85f1-6659c0f2246e"
/dev/sdc1: LABEL="NAS" UUID="9279ede9-49f6-44fe-b481-261500f67675" TYPE="ext4" PARTUUID="3c9b9d09-01"
```

### by-uuid

硬碟的每個「切割區」，均都擁有各自專屬的 UUID 。使用 by-uuid 指令，可查詢各硬碟之 UUID 編號。

```
ls -al /dev/disk/by-uuid
```

```
SRV-01# ls -al /dev/disk/by-uuid
總計 0
drwxr-xr-x 2 root root 140  9月 12 22:32 .
drwxr-xr-x 8 root root 160  9月 12 22:32 ..
lrwxrwxrwx 1 root root  10  9月 12 22:32 272b0fdf-9d56-414c-a181-9667a916eb70 -> ../../sdb2
lrwxrwxrwx 1 root root  10  9月 12 22:32 45f291bd-a4a9-4d23-bc2f-0429619072cf -> ../../sdb3
lrwxrwxrwx 1 root root  10  9月 12 22:32 6dda4534-aaa3-4c2c-8725-1fb778ad5cfd -> ../../sda1
lrwxrwxrwx 1 root root  10  9月 12 22:32 9279ede9-49f6-44fe-b481-261500f67675 -> ../../sdc1
lrwxrwxrwx 1 root root  10  9月 12 22:32 bf9345d8-a424-4b24-a2f1-b7bf11e0d68f -> ../../sdb1

```

### Ubuntu 20.04 Live USB

- GParted : 切割硬碟工具
- Boot-Repair： 修復 GRUB

### CloneZilla Live USB

硬碟複製

【硬碟複製作業程序】：

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568297351704_image.png)

![](https://paper-attachments.dropbox.com/s_CBE4779E574948CB209B4421A62DD46C027D3F70CB754FE2BD58F3EBB91A123F_1568296257836_image.png)

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

(3-1) 掛載新、舊硬碟：

```
$ sudo su –   # sudo -i
$ mkdir -p /mnt/{new_hdd,old_hdd}
$ mount /dev/sda1 /mnt/new_hdd
$ mount /dev/sdc1 /mnt/old_hdd
```

(3-2) **將舊硬碟（Source）的檔案複製到新硬碟（Target）**：

```
    $ rsync -ax /mnt/old/ /mnt/new_hdd/
```

(3-3) 觀察新硬碟已完成複製進度：

```
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
```

（4）設定新硬碟可於作業系統開機後，自動掛載。

(4-1) 執行指令，查得新硬碟（/dev/sda1）之 UUID 編號。

```
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
```

(4-2) 編輯作業系統硬碟掛載設定檔（/etc/fstab）

```
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
```

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

### Rysnc

類似 cp, scp 之指令，不僅可對目錄／檔案進行「複製作業」；更具有「同步作業」之功能，是個特別適用於：「伺服器資料備份／伺服器間資料同步的指令」。

使用 rsync 複製（備份）目錄與檔案：

    $ rsync -av /media/web_admin/NAS/{GitRepo,Music} /mnt/new_hdd/

### **Boot Repair 與 Boot Info**

自動修復 GRUB 問題，與提供硬碟相關資訊。

```
$ sudo apt-add-repository ppa:yannubuntu/boot-repair
$ sudo apt install boot-repair
$ boot-repair
```

## 參考文件

- [How To - Linux List Disk Partitions Command](https://www.cyberciti.biz/faq/linux-list-disk-partitions-command/)

### 在 Ubuntu 作業系統將 HDD 硬碟升級成 SSD 硬碟

http://blog.lyhdev.com/2011/04/ubuntu-linux.html

### 查詢開機相關資訊

https://help.ubuntu.com/community/Boot-Info

### GRUB2 安裝與修復

https://help.ubuntu.com/community/Grub2/Installing

### 在 Mac 安裝 Ubuntu LiveUSB

https://www.youtube.com/watch?v=ughBRtJwqQI&

[https://youtu.be/ughBRtJwqQI](https://youtu.be/ughBRtJwqQI)

### 系統開機時 Grub2 無法正常作業之急救

https://www.pcsuggest.com/grub-error-no-such-device/

### 使用 rsync 進行檔案複製／備份作業

https://blog.gtwang.org/linux/rsync-local-remote-file-synchronization-commands/

### 使用 rsync 在伺服器間進行檔案同步作業

http://blogs.yyes.chc.edu.tw/post/2/592

### 在 Linux 平台將 HDD 硬碟升級成 SSD 硬碟

https://www.pcsuggest.com/hdd-to-ssd-cloning-linux/

### 在 Linux 作業系統新增第二個硬碟

https://blog.gtwang.org/linux/linux-add-format-mount-harddisk/

https://blog.gtwang.org/linux/linux-add-format-mount-4tb-harddisk/

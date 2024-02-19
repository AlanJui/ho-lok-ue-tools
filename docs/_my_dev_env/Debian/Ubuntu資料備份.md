# Ubuntu資料備份

# 安裝及設定作業
1. 建立可抽換式碟碟機將掛載的目錄
    $ sudo mkdir /BAK


2. 在設定檔進行設定（ /etc/fstab ）
    UUID=03436d25-4a36-40b9-b8d2-7c40dee82f4a                /BAK                ext4        noauto,users                0                0

/etc/fstab 範例：

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
    UUID=9279ede9-49f6-44fe-b481-261500f67675           /NAS            ext4    defaults             0       2
    #UUID=03436d25-4a36-40b9-b8d2-7c40dee82f4a /BAK ext4 users 0 0
    UUID=03436d25-4a36-40b9-b8d2-7c40dee82f4a           /BAK            ext4    noauto,users         0       0



# 備份作業
1. 打開備份用外接磁碟機的電源。

 2. 在終端機輸入指令，用以確認作業系統能偵測到備份用的外接磁碟機。

    admin@SRV-01:~$ sudo blkid
    /dev/loop0: TYPE="squashfs"
    /dev/loop1: TYPE="squashfs"
    /dev/loop2: TYPE="squashfs"
    /dev/loop3: TYPE="squashfs"
    /dev/loop4: TYPE="squashfs"
    /dev/loop5: TYPE="squashfs"
    /dev/loop6: TYPE="squashfs"
    /dev/loop7: TYPE="squashfs"
    /dev/sda1: UUID="bf9345d8-a424-4b24-a2f1-b7bf11e0d68f" TYPE="swap" PARTUUID="1df0c81f-4757-43de-8b2e-8066488a9d2c"
    /dev/sda2: UUID="272b0fdf-9d56-414c-a181-9667a916eb70" TYPE="ext4" PARTUUID="97babc23-9f72-4cb7-ad38-0100b2d3f83b"
    /dev/sda3: UUID="45f291bd-a4a9-4d23-bc2f-0429619072cf" TYPE="ext4" PARTUUID="c7f42354-6a36-4529-85f1-6659c0f2246e"
    /dev/sdb1: LABEL="NAS" UUID="9279ede9-49f6-44fe-b481-261500f67675" TYPE="ext4" PARTUUID="3c9b9d09-01"
    /dev/loop8: TYPE="squashfs"
    /dev/loop9: TYPE="squashfs"
    /dev/loop10: TYPE="squashfs"
    /dev/loop11: TYPE="squashfs"
    /dev/loop12: TYPE="squashfs"
    /dev/loop13: TYPE="squashfs"
    /dev/loop14: TYPE="squashfs"
    /dev/loop15: TYPE="squashfs"
    /dev/loop16: TYPE="squashfs"
    /dev/loop17: TYPE="squashfs"
    /dev/loop18: TYPE="squashfs"
    /dev/loop19: TYPE="squashfs"
    /dev/loop20: TYPE="squashfs"
    /dev/loop21: TYPE="squashfs"
    /dev/loop22: TYPE="squashfs"
    /dev/loop23: TYPE="squashfs"
    /dev/loop24: TYPE="squashfs"
    /dev/loop25: TYPE="squashfs"
    /dev/loop26: TYPE="squashfs"
    /dev/loop27: TYPE="squashfs"
    /dev/loop28: TYPE="squashfs"
    /dev/sdc1: UUID="03436d25-4a36-40b9-b8d2-7c40dee82f4a" TYPE="ext4" PARTUUID="ff19aa2b-01"


3. 使用指令將備份用外接磁碟機，掛載於［/BAK］目錄。
    admin@SRV-01:~$ sudo mount /BAK
    [sudo] password for alanjui: 


4. 使用指令確認，掛載成功。
    admin@SRV-01:~$ df -h
    檔案系統        容量  已用  可用 已用% 掛載點
    udev            7.8G     0  7.8G    0% /dev
    tmpfs           1.6G  4.4M  1.6G    1% /run
    /dev/sda2       188G   19G  160G   11% /
    tmpfs           7.8G   68M  7.8G    1% /dev/shm
    tmpfs           5.0M  4.0K  5.0M    1% /run/lock
    tmpfs           7.8G     0  7.8G    0% /sys/fs/cgroup
    /dev/loop1      3.4M  3.4M     0  100% /snap/gnome-system-monitor/36
    /dev/loop2      3.8M  3.8M     0  100% /snap/gnome-system-monitor/39
    /dev/loop3       24M   24M     0  100% /snap/heroku/2899
    /dev/loop4      158M  158M     0  100% /snap/gitkraken/58
    /dev/loop5      140M  140M     0  100% /snap/gnome-3-26-1604/64
    /dev/loop6      5.0M  5.0M     0  100% /snap/canonical-livepatch/39
    /dev/loop0      200M  200M     0  100% /snap/gimp/40
    /dev/loop26     158M  158M     0  100% /snap/gitkraken/62
    /dev/loop9       24M   24M     0  100% /snap/heroku/2926
    /dev/loop11     2.4M  2.4M     0  100% /snap/gnome-calculator/167
    /dev/loop7      5.0M  5.0M     0  100% /snap/canonical-livepatch/41
    /dev/loop8      141M  141M     0  100% /snap/gnome-3-26-1604/59
    /dev/loop10     207M  207M     0  100% /snap/webstorm/28
    /dev/loop13      13M   13M     0  100% /snap/gnome-characters/69
    /dev/loop12      13M   13M     0  100% /snap/gnome-characters/86
    /dev/loop14      22M   22M     0  100% /snap/gnome-logs/31
    /dev/loop15     2.4M  2.4M     0  100% /snap/gnome-calculator/170
    /dev/loop18     3.8M  3.8M     0  100% /snap/gnome-system-monitor/41
    /dev/loop17      87M   87M     0  100% /snap/core/4486
    /dev/loop16      99M   99M     0  100% /snap/wonderwall/3
    /dev/loop19     1.7M  1.7M     0  100% /snap/gnome-calculator/154
    /dev/loop20      87M   87M     0  100% /snap/core/4650
    /dev/loop21      13M   13M     0  100% /snap/gnome-characters/96
    /dev/loop22      24M   24M     0  100% /snap/heroku/2936
    /dev/loop24     300M  300M     0  100% /snap/pycharm-professional/68
    /dev/loop23      87M   87M     0  100% /snap/core/4571
    /dev/loop25      21M   21M     0  100% /snap/gnome-logs/25
    /dev/loop27     296M  296M     0  100% /snap/pycharm-professional/66
    /dev/loop28      15M   15M     0  100% /snap/gnome-logs/34
    /dev/sdb1       1.8T  807G  934G   47% /NAS
    /dev/sda3       241G  115G  114G   51% /home
    tmpfs           1.6G   16K  1.6G    1% /run/user/120
    tmpfs           1.6G   56K  1.6G    1% /run/user/1000
    tmpfs           1.6G   60K  1.6G    1% /run/user/1001
    /dev/sdc1       917G  140G  731G   17% /BAK

 5. 啟動［Back In Time］App ．

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2783AA4EE4F7828C577357A607719ABECF4516B737467F7C6022E82BA7C266C0_1476851535020_file.png)


 
 6. 透過ＵＩ操作介面，執行［進行快照］指令，開始進行磁碟備份工作．

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2783AA4EE4F7828C577357A607719ABECF4516B737467F7C6022E82BA7C266C0_1476851606233_file.png)





 7. 備份工作完成後，以指令御載備份用的外接磁碟機．

    admin@SRV-01:~$ sudo umount /BAK
    [sudo] password for alanjui: 

 8. 驗證御載成功．

    admin@SRV-01:~$ df -h
    檔案系統        容量  已用  可用 已用% 掛載點
    udev            7.8G     0  7.8G    0% /dev
    tmpfs           1.6G  4.4M  1.6G    1% /run
    /dev/sda2       188G   19G  160G   11% /
    tmpfs           7.8G   68M  7.8G    1% /dev/shm
    tmpfs           5.0M  4.0K  5.0M    1% /run/lock
    tmpfs           7.8G     0  7.8G    0% /sys/fs/cgroup
    /dev/loop1      3.4M  3.4M     0  100% /snap/gnome-system-monitor/36
    /dev/loop2      3.8M  3.8M     0  100% /snap/gnome-system-monitor/39
    /dev/loop3       24M   24M     0  100% /snap/heroku/2899
    /dev/loop4      158M  158M     0  100% /snap/gitkraken/58
    /dev/loop5      140M  140M     0  100% /snap/gnome-3-26-1604/64
    /dev/loop6      5.0M  5.0M     0  100% /snap/canonical-livepatch/39
    /dev/loop0      200M  200M     0  100% /snap/gimp/40
    /dev/loop26     158M  158M     0  100% /snap/gitkraken/62
    /dev/loop9       24M   24M     0  100% /snap/heroku/2926
    /dev/loop11     2.4M  2.4M     0  100% /snap/gnome-calculator/167
    /dev/loop7      5.0M  5.0M     0  100% /snap/canonical-livepatch/41
    /dev/loop8      141M  141M     0  100% /snap/gnome-3-26-1604/59
    /dev/loop10     207M  207M     0  100% /snap/webstorm/28
    /dev/loop13      13M   13M     0  100% /snap/gnome-characters/69
    /dev/loop12      13M   13M     0  100% /snap/gnome-characters/86
    /dev/loop14      22M   22M     0  100% /snap/gnome-logs/31
    /dev/loop15     2.4M  2.4M     0  100% /snap/gnome-calculator/170
    /dev/loop18     3.8M  3.8M     0  100% /snap/gnome-system-monitor/41
    /dev/loop17      87M   87M     0  100% /snap/core/4486
    /dev/loop16      99M   99M     0  100% /snap/wonderwall/3
    /dev/loop19     1.7M  1.7M     0  100% /snap/gnome-calculator/154
    /dev/loop20      87M   87M     0  100% /snap/core/4650
    /dev/loop21      13M   13M     0  100% /snap/gnome-characters/96
    /dev/loop22      24M   24M     0  100% /snap/heroku/2936
    /dev/loop24     300M  300M     0  100% /snap/pycharm-professional/68
    /dev/loop23      87M   87M     0  100% /snap/core/4571
    /dev/loop25      21M   21M     0  100% /snap/gnome-logs/25
    /dev/loop27     296M  296M     0  100% /snap/pycharm-professional/66
    /dev/loop28      15M   15M     0  100% /snap/gnome-logs/34
    /dev/sdb1       1.8T  807G  934G   47% /NAS
    /dev/sda3       241G  115G  114G   51% /home
    tmpfs           1.6G   16K  1.6G    1% /run/user/120
    tmpfs           1.6G   56K  1.6G    1% /run/user/1000
    tmpfs           1.6G   60K  1.6G    1% /run/user/1001


［備註］：

上述步驟 2 的其它替代作法．

 2–1 外接磁碟機未開啟電源前，使用 ls 指令查詢 /dev 目錄下的磁碟機有那些；此時，看不到 sdc 磁碟機．

    admin@SRV-01:~$ls /dev/sd*
    /dev/sda  /dev/sda1  /dev/sda2  /dev/sda3  /dev/sda4  /dev/sda5  /dev/sdb  /dev/sdb1


2–2 外接磁碟機開啟電源後，使用 ls 指令查詢 /dev 目錄下的磁碟機，已可看到 sdc 磁碟機．

    admin@SRV-01:~$ls /dev/sd*
    /dev/sda  /dev/sda1  /dev/sda2  /dev/sda3  /dev/sda4  /dev/sda5  /dev/sdb  /dev/sdb1  /dev/sdc  /dev/sdc1


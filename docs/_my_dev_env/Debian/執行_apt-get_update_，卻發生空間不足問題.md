
# # 執行 apt-get update ，卻發生空間不足問題

執行 apt-get update ，因系統發出「空間不足」的錯誤訊息，以致無法執行。

# 問題描述
    $ sudo apt-get update

執行上述 apt-get 指令，欲進行更新，卻出現空間不足的錯誤訊息。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E1625B603B3A300EF65D6F3991F85293934011F227CCD5322C8669175E368CCC_1474937411145_2016-09-27+08-30-13+.png)

## 解決方法

 1. 使用「文字編輯器」，將路徑處之檔案內容清空： /var/lib/dpkg/status 
 
 2. 再次執行指令。

    $ sudo apt-get update


----------
![](https://d2mxuefqeaa7sj.cloudfront.net/s_E1625B603B3A300EF65D6F3991F85293934011F227CCD5322C8669175E368CCC_1474937499235_file.png)



----------
# /var/cache/apt/archives/ 沒有足夠的的未使用空間
![](https://d2mxuefqeaa7sj.cloudfront.net/s_E1625B603B3A300EF65D6F3991F85293934011F227CCD5322C8669175E368CCC_1474942284265_file.png)



----------

急救 /var

    $ sudo umount /dev/sda6
    
    $ sudo e2fsck -f /dev/sda6
    
    $ sudo resize2fs /dev/sda6 10G




    alanjui at srv-01 in [~]   
    22:52:57 $ sudo dd if=/dev/zero of=/srv/loopdev bs=1M count=4096
    [sudo] password for alanjui: 
    輸入 4096+0 個紀錄
    輸出 4096+0 個紀錄
    4294967296 bytes (4.3 GB, 4.0 GiB) copied, 13.9595 s, 308 MB/s
    
    alanjui at srv-01 in [~]   
    22:53:25 $ ll /srv
    總計 4.1G
    -rw-r--r-- 1 root root 4.0G  9月 27 22:53 loopdev
    
    alanjui at srv-01 in [~]   
    22:53:33 $ ll -h /srv/loopdev
    -rw-r--r-- 1 root root 4.0G  9月 27 22:53 /srv/loopdev
    
    alanjui at srv-01 in [~]   
    22:57:11 $ sudo mkfs -t ext4 /srv/loopdev 
    mke2fs 1.43.1 (08-Jun-2016)
    Discarding device blocks: done                            
    Creating filesystem with 1048576 4k blocks and 262144 inodes
    Filesystem UUID: 8e40f1f5-8695-4a35-ae1b-7ad5cdda9fef
    Superblock backups stored on blocks: 
            32768, 98304, 163840, 229376, 294912, 819200, 884736
    
    Allocating group tables: done                            
    Writing inode tables: done                            
    Creating journal (32768 blocks): done
    Writing superblocks and filesystem accounting information: done 
    
    
    alanjui at srv-01 in [~]   
    23:00:02 $ sudo mkfs.ext4 /srv/loopdev 
    mke2fs 1.43.1 (08-Jun-2016)
    /srv/loopdev contains a ext4 file system
            created on Tue Sep 27 23:00:02 2016
    Proceed anyway? (y,n) y
    Discarding device blocks: done                            
    Creating filesystem with 1048576 4k blocks and 262144 inodes
    Filesystem UUID: 429682c9-9334-49a9-9726-c3447ca28614
    Superblock backups stored on blocks: 
            32768, 98304, 163840, 229376, 294912, 819200, 884736
    
    Allocating group tables: done                            
    Writing inode tables: done                            
    Creating journal (32768 blocks): done
    Writing superblocks and filesystem accounting information: done 
    
    
    alanjui at srv-01 in [~]   
    23:01:38 $ blkid /srv/loopdev 
    /srv/loopdev: UUID="429682c9-9334-49a9-9726-c3447ca28614" TYPE="ext4"
    
    alanjui at srv-01 in [~]   
    23:03:00 $ 
    



# Parted


    alanjui at srv-01 in [~]   
    10:46:53 $ sudo parted /dev/sda print
    型號：ATA Hitachi HDS72105 (scsi)
    磁碟 /dev/sda：500GB
    磁區大小 (邏輯/物理)：512B/512B
    分割區：msdos
    磁碟旗標：
    
    編號  起始點  結束點  大小    類型      檔案系統        旗標
     1    1049kB  32.8GB  32.8GB  primary   linux-swap(v1)
     2    32.8GB  52.8GB  20.0GB  primary   ext4
     3    52.8GB  53.2GB  400MB   primary   ext4            啟動
     4    53.2GB  500GB   447GB   extended
     5    53.2GB  58.2GB  4999MB  logical   ext4
     6    58.2GB  63.2GB  4999MB  logical   ext4
     7    63.2GB  500GB   437GB   logical   ext4
    



    alanjui at srv-01 in [~]   
    10:50:55 $ sudo parted /dev/sda7 print
    型號：未知 (unknown)
    磁碟 /dev/sda7：437GB
    磁區大小 (邏輯/物理)：512B/512B
    分割區：loop
    磁碟旗標：
    
    編號  起始點  結束點  大小   檔案系統  旗標
     1    0.00B   437GB   437GB  ext4
    

複製 /var ==> /mnt/myVar

    alanjui at srv-01 in [/mnt/myVar]   
    11:27:24 $ sudo cp -R /var/* /mnt/myVar
    
    alanjui at srv-01 in [/mnt/myVar]   
    11:30:52 $ ll
    總計 64K
    drwxr-xr-x  2 root root 4.0K  9月 28 11:27 backups
    drwxr-xr-x 11 root root 4.0K  9月 28 11:27 cache
    drwxr-xr-t  2 root root 4.0K  9月 28 11:27 crash
    drwxr-xr-x 78 root root 4.0K  9月 28 11:30 lib
    drwxr-xr-x  2 root root 4.0K  9月 28 11:30 local
    lrwxrwxrwx  1 root root    9  9月 28 11:30 lock -> /run/lock
    drwxr-xr-x 14 root root 4.0K  9月 28 11:30 log
    drwx------  2 root root  16K  9月 27 23:46 lost+found
    drwxr-xr-x  2 root root 4.0K  9月 28 11:30 mail
    drwxr-xr-t  2 root root 4.0K  9月 28 11:30 metrics
    drwxr-xr-x  2 root root 4.0K  9月 28 11:30 opt
    lrwxrwxrwx  1 root root    4  9月 28 11:30 run -> /run
    drwxr-xr-x  4 root root 4.0K  9月 28 11:30 snap
    drwxr-xr-x  4 root root 4.0K  9月 28 11:30 spool
    drwxr-xr-t  8 root root 4.0K  9月 28 11:30 tmp
    


將 /var 䘖載 (/dev/sda6)

    alanjui at srv-01 in [/mnt/myVar]   
    11:38:34 $ sudo blkid
    /dev/loop0: TYPE="squashfs"
    /dev/loop1: TYPE="squashfs"
    /dev/loop2: TYPE="squashfs"
    /dev/loop3: TYPE="squashfs"
    /dev/sda1: UUID="c9e4dd97-a0ef-45ad-b41d-b2e01e3aeb59" TYPE="swap" PARTUUID="7b5d65b9-01"
    /dev/sda2: UUID="f778e737-e06c-4e6f-a3e9-ae70e9116684" TYPE="ext4" PARTUUID="7b5d65b9-02"
    /dev/sda3: UUID="5424d353-e27e-4f82-a23a-0ce928241f41" TYPE="ext4" PARTUUID="7b5d65b9-03"
    /dev/sda5: UUID="5e7bb7f0-0700-43e3-b14c-3096f53ed85b" TYPE="ext4" PARTUUID="7b5d65b9-05"
    /dev/sda6: UUID="c4b25dd8-4e05-4afc-bfa8-4cb0b244768d" TYPE="ext4" PARTUUID="7b5d65b9-06"
    /dev/sda7: UUID="a432ba96-eb78-4b20-b65d-1f03d3be61ef" TYPE="ext4" PARTUUID="7b5d65b9-07"
    /dev/sdb1: LABEL="NAS" UUID="9279ede9-49f6-44fe-b481-261500f67675" TYPE="ext4" PARTUUID="3c9b9d09-01"
    /dev/loop4: UUID="bc6914c0-a7e7-468c-9c44-07abc4982637" TYPE="ext4"
    
    alanjui at srv-01 in [/mnt/myVar]   
    11:38:51 $ sudo umount /dev/sda6
    


修改 /etc/fstab

    # /var was on /dev/sda6 during installation
    # UUID=c4b25dd8-4e05-4afc-bfa8-4cb0b244768d        /var                ext4        defaults                0        2
    UUID=bc6914c0-a7e7-468c-9c44-07abc4982637         /var                ext4        defaults                  0          2



# Mount

sudo mount UUID=bc6914c0-a7e7-468c-9c44-07abc4982637 /var


    alanjui at srv-01 in [/mnt/myVar]   
    11:39:55 $ mount --help
    
    Usage:
     mount [-lhV]
     mount -a [options]
     mount \[options\] [--source] <source> | [--target] <directory>
     mount [options] <source> <directory>
     mount <operation> <mountpoint> [<target>]
    
    Mount a filesystem.
    
    選項：
     -a, --all               mount all filesystems mentioned in fstab
     -c, --no-canonicalize   don't canonicalize paths
     -f, --fake              dry run; skip the mount(2) syscall
     -F, --fork              fork off for each device (use with -a)
     -T, --fstab <path>      alternative file to /etc/fstab
     -i, --internal-only     don't call the mount.<type> helpers
     -l, --show-labels       show also filesystem labels
     -n, --no-mtab           don't write to /etc/mtab
     -o, --options <list>    comma-separated list of mount options
     -O, --test-opts <list>  limit the set of filesystems (use with -a)
     -r, --read-only         mount the filesystem read-only (same as -o ro)
     -t, --types <list>      limit the set of filesystem types
         --source <src>      explicitly specifies source (path, label, uuid)
         --target <target>   explicitly specifies mountpoint
     -v, --verbose           say what is being done
     -w, --rw, --read-write  mount the filesystem read-write (default)
    
     -h, --help     display this help and exit
     -V, --version  output version information and exit
    
    Source:
     -L, --label <label>     synonym for LABEL=<label>
     -U, --uuid <uuid>       synonym for UUID=<uuid>
     LABEL=<label>           specifies device by filesystem label
     UUID=<uuid>             specifies device by filesystem UUID
     PARTLABEL=<label>       specifies device by partition label
     PARTUUID=<uuid>         specifies device by partition UUID
     <device>                specifies device by path
     <directory>             mountpoint for bind mounts (see --bind/rbind)
     <file>                  regular file for loopdev setup
    
    Operations:
     -B, --bind              mount a subtree somewhere else (same as -o bind)
     -M, --move              move a subtree to some other place
     -R, --rbind             mount a subtree and all submounts somewhere else
     --make-shared           mark a subtree as shared
     --make-slave            mark a subtree as slave
     --make-private          mark a subtree as private
     --make-unbindable       mark a subtree as unbindable
     --make-rshared          recursively mark a whole subtree as shared
     --make-rslave           recursively mark a whole subtree as slave
     --make-rprivate         recursively mark a whole subtree as private
     --make-runbindable      recursively mark a whole subtree as unbindable
    
    For more details see mount(8).
    


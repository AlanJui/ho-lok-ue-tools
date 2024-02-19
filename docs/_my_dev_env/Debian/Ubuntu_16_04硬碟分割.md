# Ubuntu 16.04硬碟分割

磁碟容量：500GB

磁碟分割需求規劃：

- SWAP： 可使用「暫停」功能。 RAM 16GB ==> 空間需求 = 16GB x 1.5
- /boot  ： 存放開機啟動檔 1GB
- /          ： 50 GB
- /home： 其餘硬碟空間

/dev/sda1

- 分割區類型：主要分割區
- 分割區空間： 1 GB = 1024 MB
- 分割區位置：開始位置
- 檔案系統： ext4
- 掛載點： /boot
![](https://d2mxuefqeaa7sj.cloudfront.net/s_74DE45D44FE1C9690E1C6E7F771DCDBC3F5C80E537F294322A68EA3802E97B11_1475115912655_file.png)



## /dev/sda5
- 分割區類型：延伸分割區
- 分割區空間： 24 GB = 24576 MB
- 分割區位置：開始位置
- 檔案系統： 置換空間（SWAP）
- 掛載點： none


![](https://d2mxuefqeaa7sj.cloudfront.net/s_74DE45D44FE1C9690E1C6E7F771DCDBC3F5C80E537F294322A68EA3802E97B11_1475116427654_file.png)



## /dev/sda3
- 分割區類型：主要分割區
- 分割區空間： 50 GB = 51200 MB 
- 分割區位置：開始位置
- 檔案系統： ext4
- 掛載點： /


![](https://d2mxuefqeaa7sj.cloudfront.net/s_74DE45D44FE1C9690E1C6E7F771DCDBC3F5C80E537F294322A68EA3802E97B11_1475116456228_file.png)



## /dev/sda4
- 分割區類型：主要分割區
- 分割區空間： 剩餘空間
- 檔案系統： ext4
- 掛載點： /home


![](https://d2mxuefqeaa7sj.cloudfront.net/s_74DE45D44FE1C9690E1C6E7F771DCDBC3F5C80E537F294322A68EA3802E97B11_1475116501808_file.png)


完成分割設定的結果：

![](https://d2mxuefqeaa7sj.cloudfront.net/s_74DE45D44FE1C9690E1C6E7F771DCDBC3F5C80E537F294322A68EA3802E97B11_1475117715791_file.png)

----------


# 無法開機搶救（修復開機磁區）


1. 使用 Live CD 開機，然後用「Try Ubuntu」進入作業系統。
2. 使用 Ubuntu 內建之 Terminal，輸入以下指令，瀏覽磁碟分割狀態：
    $ sudo fdisk -l


3. Mount 磁碟分割區
    $ sudo mount /dev/sda3 /mnt
    $ sudo mount /dev/sda1 /boot
    $ sudo mount /dev/sda4 /home


4. 重新製作開機 Boot Loader
    $ sudo grub-install --root-directory=/mnt/ /dev/sda


5. 先移除 Live CD 後，再重新開機。



----------


## LiveCD 安裝完成後，硬碟無法正常開機


    error: no such device: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    GRUB rescue>


    ls [to identify your drive and partition options]
    ls (hdx,p)/ [to identify which partition has the /boot folder]



    set prefix="(hdx,p)/boot/grub"
    set root="(hdx,p)"
    insmod normal
    normal



    $ ls
    ...
    $ ls (hd1,msdos1)/grub/
    ...
    $ set prefix=(hd1,msdos1)/grub
    $ ### set root=(hd1,msdos3)
    $ insmod normal
    $ normal


啟動起來，進入ubuntu之後，在終端執行：

代碼:

    $ sudo update-grub
    $ sudo fdisk -l
    .... # 確認可開機（boot）的磁碟機代號
    $ sudo grub-install /dev/sda
    $ sudo systemctl reboot

（sda是你的硬碟號碼，千萬不要指定分區號碼，例如sda1，sda5等都不對）

重啟測試是否已經恢復了grub的啟動菜單？ 恭喜你恢復成功！

原文網址：[https://read01.com/4GDzz.html](https://read01.com/4GDzz.html)



----------


## Boot Repair


    sudo add-apt-repository ppa:yannubuntu/boot-repair && sudo apt-get update
    sudo apt-get install -y boot-repair && boot-repair



----------


## add-apt-repository command found


    $ sudo apt-get install python-software-properties
    $ sudo apt-get install software-properties-common


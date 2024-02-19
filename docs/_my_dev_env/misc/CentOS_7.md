# CentOS 7

## 在 Hyper-V 安裝 CentOS 7

https://linuxhint.com/install_centos_hyperv/


## Screen Resolution

https://www.netometer.com/blog/?p=1663



    sudo grubby --update-kernel=ALL --args="video=hyperv_fb:1920x1080"



## 桌面安裝
https://www.itzgeek.com/how-tos/linux/centos-how-tos/install-gnome-gui-on-centos-7-rhel-7.html

https://www.rootusers.com/how-to-install-cinnamon-gui-in-centos-7-linux/



https://www.rootusers.com/how-to-start-gui-in-centos-7-linux/

## 中文輸入法

**倉頡輸入法**

http://oldgrayduck.blogspot.com/2016/12/centos7.html


**小狼毫（漢語拚音）**

http://shiunxun.blogspot.com/2018/04/ubuntu-1804.html



## RDP

**CentOS 7 安裝遠端桌面**
https://xyz.cinc.biz/2016/03/linux-gui-xrdp.html


https://www.itzgeek.com/how-tos/linux/centos-how-tos/install-xrdp-on-centos-7-rhel-7.html




## VNC



## FireWall
## 防火牆

允許 RDP Port 3389，並重新載入設定：

| 1<br>2 | [root@host ~]# firewall-cmd --permanent --zone=public --add-port=3389/tcp<br>[root@host ~]# firewall-cmd –reload |




    firewall-cmd --permanent --zone=public --add-port=5900/tcp
    firewall-cmd --reload


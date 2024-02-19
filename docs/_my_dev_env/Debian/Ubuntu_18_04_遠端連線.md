# Ubuntu 18.04 遠端連線



# VNC 


## Ubuntu 預設 VNC Server 的設定

開機自動啟動 Gnome 3 的 Screen Sharing （VNC Server）。

https://askubuntu.com/questions/1062727/how-to-get-vino-vnc-server-to-start-on-startup-in-ubuntu-18-04-1



## 變更 Ubuntu 預設 VNC Server 的 Port


https://askubuntu.com/questions/69965/how-to-change-port-number-in-vino




----------
# XRDP


## 快速安裝 Script 

http://www.c-nergy.be/products.html



## Ubuntu 18.04.4 xorg 與 xrdp 問題

[xRDP – Ubuntu 18.04.x and new xorgxrdp package available to fix issues….](http://c-nergy.be/blog/?p=13972)




# 在 Hyper-v 中的 VM 能提供 1920 x 1080 解析度

**（1）sudo vim /etc/default/grub**

**（2）變更設定**

    GRUB_CDMLINE_LINUX_DEFAULT="quiet splash video＝hyperv_fb:1920x1080"

**（3）變更 GRUB 設定檔**

    sudo update-grub

**（4）Reboot**

    sudo reboot


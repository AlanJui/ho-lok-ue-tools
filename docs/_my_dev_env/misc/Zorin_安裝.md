# Zorin 安裝



# 在 VBox 安裝

令 Zorin OS 可在 VirtualBox 的 VM 中運作。


# 安裝「VBox整合工具」- Guest-in CD

令 VM 的畫面可以是「全螢幕」。



# 安裝中文輸入法

啟用下列中文輸入法：

- 倉頡五代
- 漢語拚音


# 設定系統

關閉「螢幕節能」功能。

/主功能表/設定值/電源/節省電源/螢幕轉黑：5分鐘 —》永不。



# 安裝文字編輯器

能使用 vim 。


    sudo apt install neovim -y


# 安裝網路工具

安裝 net-tools ，啟用 ifconfig 指令，以便查詢 IP 位址。

若只需要查詢 IP 位址，不想安裝 net-tools，可用以下指令代：

    ip a


# 安裝 SSH Server 

啟用 Remote Control 功能，以便能在 VM 外的另一台電腦（SSH Client），進行安裝及設定⋯⋯等的各種管理工作。


https://linuxize.com/post/how-to-enable-ssh-on-ubuntu-18-04/



    sudo service ssh status

Zorin OS 預設同 Ubuntu Desktop ，防火牆未啟動。故以下指令可省略。


    sudo ufw allow ssh


# 安裝 RDP 

啟用 RDP 功能，以便能在 VM 外的另一台電腦，使用如 Remote Desktop 的軟體，透過 GUI 介面，操控這台 VM 。


https://www.hiroom2.com/2018/04/29/ubuntu-1804-xrdp-gnome-en/


$HOME/.xsessionrc

    export GNOME_SHELL_SESSION_MODE=zorin
    export XDG_CURRENT_DESKTOP=zorin:GNOME
    # export XDG_DATA_DIRS=/usr/share/ubuntu:/usr/local/share:/usr/share:/var/lib/snap
    export XDG_DATA_DIRS=/usr/share/gnome:$HOME/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/usr/local/share:/usr/share:/var/lib/snapd/desktop
    export XDG_CONFIG_DIRS=/etc/xdg/xdg-ubuntu:/etc/xdg


    export GNOME_SHELL_SESSION_MODE=zorin
    export XDG_CURRENT_DESKTOP=GNOME
    export XDG_DATA_DIRS=/usr/share/gnome:$HOME/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/usr/local/share:/usr/share:/var/lib/sna
    pd/desktop
    export XDG_CONFIG_DIRS=/etc/xdg


    echo $XDG_DATA_DIRS
    /usr/share/gnome:/home/alanjui/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/usr/local/share:/usr/share:/var/lib/snapd/desktop



https://linoxide.com/linux-how-to/xrdp-connect-ubuntu-linux-remote-desktop-via-rdp-from-windows/



# xRDP – Ubuntu 18.04.x and new xorgxrdp package available to fix issues….

http://c-nergy.be/blog/?p=13972



# 無法使用「軟體」安裝 APP
https://askubuntu.com/questions/1029382/i-do-not-have-permission-to-install-new-software


Install policykit-1-gnome

sudo apt install policykit-1-gnome
Open Terminal and launch gnome-software with sudo

sudo gnome-software
If this works for you, you can grant ownership of gnome-software run it without having to sudo it.(replace with your own username)

sudo chown <user>:<user> /usr/bin/gnome-software
Now you can use it without any issue.

This works for me in 18.04


    Install policykit-1-gnome
    
    sudo apt install policykit-1-gnome
    Open Terminal and launch gnome-software with sudo
    
    sudo gnome-software
    If this works for you, you can grant ownership of gnome-software run it without having to sudo it.(replace with your own username)
    
    sudo chown <user>:<user> /usr/bin/gnome-software
    Now you can use it without any issue.
    
    This works for me in 18.04



# 安裝 WINE

為執行 Windows 應用程式。

https://tecadmin.net/install-wine-on-ubuntu/



# Debian FAQ


# Initial OS
    su
    apt install sudo
    adduser alanjui sudo
    su - alanjui
    
    sudo apt-get install git



----------


# Virtual Machine Integration: VirtualBox


## VirtualBox Guest Additions 

**(1) Install package for VirtualBox Guest Additions build up**

    sudo apt update
    sudo apt upgrade
    sudo apt install build-essential module-assistant dkms
    sudo m-a prepare

**(2) Host: /VritualBox/Devices/Insert Guest Additions CD image**

**(3) Install VirtualBox Additions** 

    su -
    cd /media/cdrom
    sudo sh VBoxLinuxAdditions.run
    sudo reboot

Full Screen 功能在 VBox Linux Additions 完成安裝後，便能自動起作用。



----------


# Virtual Machine Integration: Hyper-V Linux Integration Services

How to Install Hyper-V Linux Integration Services on Debian
http://kb.rkidder.com/index.php?action=artikel&cat=2&id=49&artlang=en

First, install the package

| apt-get install hyperv-daemons |

 
Next, make sure the modules are configured to be included in the inirial RAM filesystem

| echo "" >> /etc/initramfs-tools/modules<br>echo "# Hyper-V Modules" >> /etc/initramfs-tools/modules<br>echo "hv_vmbus" >> /etc/initramfs-tools/modules<br>echo "hv_storvsc" >> /etc/initramfs-tools/modules<br>echo "hv_blkvsc" >> /etc/initramfs-tools/modules<br>echo "hv_netvsc" >> /etc/initramfs-tools/modules<br>echo "hv_balloon" >> /etc/initramfs-tools/modules<br>echo "hv_utils" >> /etc/initramfs-tools/modules |

 
Finally, update the initramfs and reboot

| update-initramfs -u && reboot |



## Full Screen

**（1）sudo nano /etc/default/grub**

**（2）變更設定**

    GRUB_CDMLINE_LINUX_DEFAULT="quiet splash video＝hyperv_fb:1920x1080"

**（3）變更 GRUB 設定檔**

    sudo update-grub

**（4）Reboot**

    sudo reboot


----------


# Install Tools


## Fcitx中文輸入法

**（1）安裝倉頡五TABLE**

    sudo apt-get install fcitx-table-cangjie5

**（2）安裝Google拚音輸入法**

    sudo apt-get install fcitx-googlepinyin

**（3）登出**

**（4）啟動 Fcitx 設定，完成下列事項：**

- 刪輸入法：新酷音、倉頡全字集
- 調整輸入法順序：倉頡五、Google拚音

**（5）啟動「Google拚音」中文輸入法，變更下列設定：**

- 中文輸出：繁體

**（6）設定使用 fcitx 輸入**


    sudo im-config

**（7）登出與登入**

**（8）新增中文輸入法：**

- 倉頡五代
- Google拚音輸入法

**（9）登出與登入**

**（10）調整中文輸入法**：中文輸出為「繁體字」


----------


# FireFox

登入 FireFox

登入 Gmail

登入 DropBox Paper



----------
## Install Sbulime Text

**Install the GPG key:**

    wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -

**Ensure apt is set up to work with https sources:**

    sudo apt-get install apt-transport-https

**Select the channel to use:**

Stable

    echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list

Dev

    echo "deb https://download.sublimetext.com/ apt/dev/" | sudo tee /etc/apt/sources.list.d/sublime-text.list

**Update apt sources and install Sublime Text**

    sudo apt-get update
    sudo apt-get install sublime-text



----------


# Install xRDP


## IP Address
    ip addr show



    sudo apt-get purge xserver-xorg-legacy
    sudo apt-get install xrdp
    sudo systemctl start xrdp 
    sudo systemctl enable xrdp 


    sudo sed -i 's/allowed_users=console/allowed_users=anybody/' /etc/X11/Xwrapper.config


 **/etc/polkit-1/localauthority.conf.d**/**02-allow-colord.conf**

    polkit.addRule(function(action, subject) {
            if ((action.id == "org.freedesktop.color-manager.create-device" ||
                    action.id == "org.freedesktop.color-manager.create-profile" ||
                    action.id == "org.freedesktop.color-manager.delete-device" ||
                    action.id == "org.freedesktop.color-manager.delete-profile" ||
                    action.id == "org.freedesktop.color-manager.modify-device" ||
                    action.id == "org.freedesktop.color-manager.modify-profile") &&
                    subject.isInGroup("{group}")) {
                            return polkit.Result.YES;
                    }
    });


    sudo reboot
## 
----------
## 


----------


# Switch Display Manager from gdm to lightdm

enter the following commands to set `lightdm` as the default display manager:

    sudo dpkg-reconfigure lightdm

Ref: Install lightdm

    sudo apt-get install lightdm



----------


# USB Smart Card Reader


## 基本操作

**啟動讀卡機驅動程式**

    sudo service pcscd start

**檢查讀卡機是否已備妥**

    service pcscd status

**檢查讀卡機是否已能正常運作**

    pcsc_scan

**檢查作業系統已偵測到的USB裝置有那些**

    lsusb



## 開機自動啟動設定

**(1) 增添設定檔： pcscd.service, pcscd.socket**

**/lib/systemd/system/pcscd.service**

    [Unit]
    Description=PC/SC Smart Card Daemon
    Requires=pcscd.socket
    
    [Service]
    ExecStart=/usr/sbin/pcscd --foreground --auto-exit
    ExecReload=/usr/sbin/pcscd --hotplug
    StandardOutput=syslog
    
    [Install]
    Also=pcscd.socket

**/lib/systemd/system/pcscd.socket**

    [Unit]
    Description=PC/SC Smart Card Daemon Activation Socket
    
    [Socket]
    ListenStream=/var/run/pcscd/pcscd.comm
    
    [Install]
    WantedBy=sockets.target

**(2) 設定自動啟動**

    sudo systemctl enable pcscd.service

This will create a symbolic link from the system's copy of the service file (usually in `/lib/systemd/system` or `/etc/systemd/system`) into the location on disk where `systemd` looks for autostart files (usually `/etc/systemd/system/``some_target``.target.wants`.



    sudo systemctl disable pcscd.service



    systemctl list-units


----------
# VirtualBox


## Commands overview
    Usage:
    
      VBoxManage [<general option>] <command>
     
     
    General Options:
     
      [-v|--version]            print version number and exit
      [-q|--nologo]             suppress the logo
      [--settingspw <pw>]       provide the settings password
      [--settingspwfile <file>] provide a file containing the settings password
      [@<response-file>]        load arguments from the given response file (bourne style)
     
     
    Commands:
      showvminfo                <uuid|vmname> [--details]
                                [--machinereadable]
      showvminfo                <uuid|vmname> --log <idx>
      modifyvm                  <uuid|vmname>
                                [--name <name>]
                                [--usbcardreader on|off]
                                [--autostart-enabled on|off]                            



    VBoxManage modifyvm vm3 --usbcardreader on



## Enable USB Filters
    sudo adduser $USER vboxusers

After that you must logout and login.

## Auto starting VMs during host system boot

These settings configure the VM autostart feature, which automatically starts the VM at host system boot-up. Note that there are pre-requisites that need to be addressed before using this feature. See [Section 9.24, “Starting virtual machines during system boot”](https://www.virtualbox.org/manual/ch09.html#autostart) for more details.

    --autostart on|off: Enables/disables VM autostart at host system boot-up, using specified user name.
    --autostart-delay <seconds>: Specifies a delay (seconds) following host system boot-up, before VM autostarts.



## USB card reader settings

The following setting defines access to a USB Card Reader by the guest environment. USB card readers are typically used for accessing data on memory cards such as CompactFlash (CF), Secure Digital (SD) or MultiMediaCard (MMC).

    --usbcardreader on|off: Enables/disables the USB card reader interface.


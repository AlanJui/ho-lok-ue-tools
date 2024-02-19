# Arch Linux 安裝作業
Arch Linux + KDE 安裝作業。

硬碟切切割採傳統作法；不使用 EUFI 。

https://linux.cn/article-9170-1.html


https://itsfoss.com/install-arch-linux/



----------


## 作業系統安裝


**硬碟切割**


    fdisk /dev/sda


SATA HDD： 128 GB
【BIOS/MBR Layout】：

- sda1 ==> SWAP ==> 2G  ==> SWAP
- sda2 ==> / ==> 126G ==> ext4



    fdisk -l
![](https://paper-attachments.dropbox.com/s_5D0885B103CB98FA7395CEBC2776BF94C8764CD1B439706D8E8D8BB731133B0A_1610087453344_VirtualBox_VB03-ArchLinux-KDE_07_01_2021_14_11_19.png)



**格式化**

    mkfs.ext4 /dev/sda2
    
    mkswap /dev/sda1
    swapon /dev/sda1
![](https://paper-attachments.dropbox.com/s_5D0885B103CB98FA7395CEBC2776BF94C8764CD1B439706D8E8D8BB731133B0A_1610087564903_VirtualBox_VB03-ArchLinux-KDE_07_01_2021_14_13_21.png)



**掛載**

    mount /dev/sda2 /mnt
    
    blkid
    df -h
![](https://paper-attachments.dropbox.com/s_5D0885B103CB98FA7395CEBC2776BF94C8764CD1B439706D8E8D8BB731133B0A_1610087707246_VirtualBox_VB03-ArchLinux-KDE_07_01_2021_14_21_07.png)



**安裝**

    pacstrap /mnt base base-devel linux linux-firmware vim


**產生作業系統開機掛載設定檔**

    genfstab -U /mnt >> /mnt/etc/fstab
    cat /mnt/etc/fstab
![](https://paper-attachments.dropbox.com/s_5D0885B103CB98FA7395CEBC2776BF94C8764CD1B439706D8E8D8BB731133B0A_1610087749604_VirtualBox_VB03-ArchLinux-KDE_07_01_2021_14_25_39.png)



**切換到根目錄**

    arch-chroot /mnt


**設定「時區」及時間自動同步**

    ln -sf /usr/share/zoneinfo/Asia/Taipei /etc/localtime
    hwclock --systohc 


**設定「使用語文地區」**
編輯 `/etc/locale.gen`，取消註釋 `en_US.UTF-8 UTF-8` 和其它需要的 [**locale**](https://wiki.archlinux.org/index.php/Locale)，然後執行以下指令來生成它們：


    locale-gen
    echo LANG=zh_TW.UTF-8 > /etc/locale.conf
    export LANG=en_US.UTF-8


**設定「主機名稱」**

    echo VB03-ArchLinux-KDE > /etc/hostname


**設定 Host IP 對映表：/etc/hosts**

    127.0.0.1        localhost
    ::1              localhost
    127.0.1.1        VB03-ArchLinux-KDE.ccc99.tw        VB03-ArchLinux-KDE


**建立 root 帳號使用密碼**

    passwd
![](https://paper-attachments.dropbox.com/s_5D0885B103CB98FA7395CEBC2776BF94C8764CD1B439706D8E8D8BB731133B0A_1609943915865_VirtualBox_VB03-ArchLinux-KDE_06_01_2021_22_38_11.png)


**安裝硬碟開機磁區**

    pacman -S grub os-prober
    grub-install /dev/sda
    grub-mkconfig -o /boot/grub/grub.cfg
![](https://paper-attachments.dropbox.com/s_5D0885B103CB98FA7395CEBC2776BF94C8764CD1B439706D8E8D8BB731133B0A_1610087857370_VirtualBox_VB03-ArchLinux-KDE_07_01_2021_14_43_02.png)

![](https://paper-attachments.dropbox.com/s_5D0885B103CB98FA7395CEBC2776BF94C8764CD1B439706D8E8D8BB731133B0A_1610087875445_VirtualBox_VB03-ArchLinux-KDE_07_01_2021_14_44_57.png)


**結束初步安裝**

    exit
    umount -R /mnt
    poweroff



----------
## 建置基礎操作環境


以 root 帳號登入系統。


**暫時變更「使用語言」**

    export LANG=en_US.UTF-8


**啟動網路卡**

    ip link
![](https://paper-attachments.dropbox.com/s_5D0885B103CB98FA7395CEBC2776BF94C8764CD1B439706D8E8D8BB731133B0A_1610087970725_VirtualBox_VB03-ArchLinux-KDE_07_01_2021_15_02_50.png)




    vim /etc/systemd/network/enp0s3.network


    [Match]
    Name=en*
    [Network]
    DHCP=yes
![](https://paper-attachments.dropbox.com/s_5D0885B103CB98FA7395CEBC2776BF94C8764CD1B439706D8E8D8BB731133B0A_1610088003753_VirtualBox_VB03-ArchLinux-KDE_07_01_2021_15_03_52.png)



    systemctl restart systemd-networkd


**啟用 DNS 伺服器**

    vim /etc/resolv.conf


    nameserver 8.8.8.8
    nameserver 8.8.4.4
![](https://paper-attachments.dropbox.com/s_5D0885B103CB98FA7395CEBC2776BF94C8764CD1B439706D8E8D8BB731133B0A_1610088021937_VirtualBox_VB03-ArchLinux-KDE_07_01_2021_15_08_35.png)



**驗證 DNS 伺服器已能正確運作**

    ping archlinux-org -c 3


**更新系統（若確定安裝時，下載為最新 ISO 檔，則可略此步驟）**

    pacman -Syu


**安裝欲使用之網路管理工具**

    pacman -S networkmanager wpa_supplicant wireless_tools net-tools netctl
    pacman -S dialog
    systemctl enable NetworkManager
    systemctl start NetworkManager


**啟用 SSH 遠端連線功能**

    pacman -S openssh 
    systemctl enable sshd


**啟用 sudo** 

    pacman -S sudo
    EDITOR=vim visudo

或直接使用 vim 編輯器，編輯 sudo 設定檔。

    vim /etc/sudoers


設定sudo 群組 打開sudoer file並將%wheel ALL=(ALL)前面註解拿掉

    # Uncomment to allow members
    %wheel ALL=(ALL) NOPASSWD: ALL

【註】：使用「強制寫入」： **:w!**


**建立使用者帳號**

    useradd -m -G wheel alanjui
    passwd alanjui

【註】：將「使用者帳號」加入「群組」用法：

    usermod -aG wheel alanjui


**安裝中文字型**

    pacman -Sy noto-fonts noto-fonts-cjk noto-fonts-emoji
    pacman -S adobe-source-han-sans-otc-fonts
    pacman -S adobe-source-han-serif-otc-fonts 


**安裝第三方軟體套件庫工具（yay）**

    sudo pacman -S git


    cd
    mkdir build && cd $_
    git clone https://aur.archlinux.org/yay.git 
    cd yay
    makepkg -si
    cd


**驗證 yay 已能運作（安裝 Google Chrome）**

    yay -Ss google-chrome
    yay -S google-chrome


**重新開機**

    reboot



----------
## KDE 桌面

https://linux.cn/article-12258-1.html

要運行KDE 桌面，你需要以下軟件包。

- [Xorg](https://wiki.archlinux.org/index.php/Xorg)組
- [KDE Plasma](https://kde.org/plasma-desktop)桌面環境
- [Wayland](https://wiki.archlinux.org/index.php/Wayland) KDE Plasma的會話
- [KDE應用程序](https://www.archlinux.org/groups/x86_64/kde-applications/)組（包括KDE特有的應用程序：Dolphin管理器和其他有用的應用程序）。


**安裝 KDE 桌面環境所需套件**

    sudo pacman -S xorg plasma plasma-wayland-session kde-applications


**啟用 Display Manager**

    sudo systemctl enable sddm


**重新開機**

    sudo reboot



----------
## 安裝 VirtualBox VBoxGuestAdditions 

https://wiki.archlinux.org/index.php/VirtualBox/Install_Arch_Linux_as_a_guest

https://blog.csdn.net/lpwmm/article/details/80304637

http://www.michaelghens.com/posts/2019/setting-up-arch-linux-in-virtural-box/#install-virtualbox-guest-additions

**Install Linux Kernel Headers**

    sudo pacman -S linux-headers virtualbox-guest-dkms

確認目前 Linux Kernel 版本

    echo $(uname -r)   # 顯示 Kernel 版本
    
    yay -Ss linux-headers


【安裝特定版本】：

    sudo pacman -S linux-armv7-headers-3.16.1-1


    sudo pacman -S linux-headers-$(uname -r)


Install for VirtualBox Guest utilities with X support

    sudo pacman -S virtualbox-guest-utils



    sudo VBoxClient-all
    sudo modprobe -a vboxguest vboxsf vboxvideo
    sudo systemctl enable vboxservice



    lsmod | grep vboxguest


    alanjui@VB01-Debian-10:~$ lsblk -l
    NAME MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
    sda    8:0    0   20G  0 disk 
    sda1   8:1    0    7G  0 part /
    sda2   8:2    0    1K  0 part 
    sda5   8:5    0  976M  0 part [SWAP]
    sda6   8:6    0 12.1G  0 part /home
    sr0   11:0    1 58.2M  0 rom  /media/cdrom0


Install VirtualBox Guest Additions

    cd /run/media/alanjui/VBox_GAs_6.1.16
    sudo reboot 
    sudo sh VBoxLinuxAdditions.run
    sudo reboot



## Manjaro 20.2版

**安裝 Linux Kernel Headers**

    uname -r
    yay -Ss linux-headers
    sudo pacman -S linux59-headers


    [alanjui@VB2101-Manjaro-KDE-202 ~]$ uname -r 
    5.9.16-1-MANJARO
    
    [alanjui@VB2101-Manjaro-KDE-202 ~]$ yay -Ss linux-headers 
    aur/linux-vanilla-selinux-headers 5.10.1-1 (+0 0.00)  
       Header files and scripts for building modules for Linux-vanilla-selinux kernel 
    aur/linux-vanilla-next-selinux-headers 20201218-1 (+0 0.00)  
       Header files and scripts for building modules for Linux-vanilla-next-selinux kernel 
    aur/cloudabi-linux-headers 4.7.0rc1cloudabi0.2-6 (+0 0.00)  
       Header files and scripts for building modules for cloudabi-Linux kernel 
    aur/zfs-archiso-linux-headers 0.7.12_4.19.4.arch1.1-1 (+0 0.00) (Out-of-date: 2019-05-24)  
       Kernel headers for the Zettabyte File System. 
    aur/peak-linux-headers 8.10.2-1 (+2 0.00)  
       Linux headers for PEAK CAN adapter 
    aur/zfs-linux-headers 2.0.1_5.10.6.arch1.1-1 (+237 2.31)  
       Kernel headers for the Zettabyte File System. 
    community/linux59-rt-headers 5.9.1_rt19-1 (12.8 MiB 48.3 MiB)  
       Header files and scripts for building modules for Linux59-rt kernel 
    community/linux54-rt-headers 5.4.82_rt45-1 (12.4 MiB 46.7 MiB)  
       Header files and scripts for building modules for Linux54-rt kernel 
    core/linux59-headers 5.9.16-1 (9.7 MiB 48.3 MiB) (Installed) 
       Header files and scripts for building modules for Linux59 kernel 
    core/linux54-headers 5.4.85-1 (9.4 MiB 47.0 MiB)  
       Header files and scripts for building modules for Linux54 kernel 
    core/linux510-headers 5.10.2-2 (9.5 MiB 47.7 MiB)  
       Header files and scripts for building modules for Linux510 kernel 
    core/linux49-headers 4.9.248-1 (7.4 MiB 37.0 MiB)  
       Header files and scripts for building modules for Linux49 kernel 
    core/linux44-headers 4.4.248-1 (6.8 MiB 33.8 MiB)  
       Header files and scripts for building modules for Linux44 kernel 
    core/linux419-headers 4.19.163-1 (8.8 MiB 44.3 MiB)  
       Header files and scripts for building modules for Linux419 kernel 
    core/linux414-headers 4.14.212-1 (8.1 MiB 41.0 MiB)  
       Header files and scripts for building modules for Linux414 kernel 
    [alanjui@VB2101-Manjaro-KDE-202 ~]$ 


**在 CD-ROM 安裝 VirtualBox Guest Additions**

    sudo sh ./VBoxLinuxAdditions.run
    sudo reboot


    systemctl status vboxservice
    
    lsmod | grep vboxguest



----------
## 安裝中文環境



[**安裝 fcitx5 輸入法套件**](https://wiki.archlinux.org/index.php/Fcitx5_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

    sudo pacman -S fcitx5-im

fcitx5-im 套件組合：

- fcitx5
- fcitx5-configtool
- fcitx5-gtk 
- fcitx5-qt

安裝 KDE 桌面環境用 Fcitx 設定管理套件

    yay -Ss kcm-fcitx5
    sudo pacman -S fcitx5-configtool

【註】：通常，在 KDE 桌面環境，Fcitx 使用的「設定管理」介面，其套件的檔案名稱為： kcm-fcitx 或 kde-config-fcitx。

【註】： 

Fcitx5 啟動檔存放路徑： 

    ll /usr/share/applications/fcitx5-configtool.desktop  

Fcitx5 設定檔（Configuration Tool）檔存放路徑：

    $ which fcitx5 
    /usr/bin/fcitx5

**建立輸入法設定檔**

    vim ~/.pam_environment


    GTK_IM_MODULE DEFAULT=fcitx
    QT_IM_MODULE  DEFAULT=fcitx
    XMODIFIERS    DEFAULT=\@im=fcitx
    SDL_IM_MODULE DEFAULT=fcitx


**安裝中文輸入法：倉頡**

    sudo pacman -S fcitx5-table-extra


**安裝中文輸入法：中州韻（漢語拚音）**

    sudo pacman -S fcitx5-rime


**登出再登入，以便啟用中文輸入功能**

    fcitx5-configtool

透過 GUI 介面，將下列中文輸入法加入 Fcitx 5

- 倉頡五代
- 快速倉頡第六代
- PinYin （漢語拚音輸入法）--》設定「繁體中文」
- 中州韻（漢語拚音輸入法）


**設定 Fcitx 中文輸入法自動啟動**


**查驗設定正確性（中文輸入法啟動鍵： <Ctrl>+<Space> ，無法正常啟動中文輸入法時，特別適用）**

    fcitx5-diagnose

【註】：Fcitx5 輸入法設定檔的「檔案名稱」或「設定內容」： ~/.pam_environment ，若發生「打字錯誤」，亦會造成「中文輸入法啟動鍵」的失能，無法正常啟動。



----------
## 開發環境基本工具安裝與設定


**Python 3**

install pyenv

    git clone https://github.com/pyenv/pyenv.git ~/.pyenv

define environment variable PYENV_ROOT

    echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
    echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc

add pyenv init to shell

    echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bashrc

restart shell

    exec "$SHELL"

validation

    pyenv versions

install Python 2.7.8

    pyenv install 2.7.8

install Python 3.8

    pyenv install 3.8.6
    pyenv install 3.9
    pyenv versions

設定預設使用版本

    pyenv global 3.9.1
    pyenv version
    python --version



----------

安裝 pyenv-virtualenv

 （1） 安裝軟體

    git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv

 （2）設定執行環境

    vim ~/.bashrc 

 
 加入「綠底色」標示行：

    export PYENV_ROOT="$HOME/.pyenv"
    export PATH="$PYENV_ROOT/bin:$PATH"
    if command -v pyenv 1>/dev/null 2>&1; then
      eval "$(pyenv init -)"
      eval "$(pyenv virtualenv-init -)"
    fi

 （3）啓用設定

    exec "$SHELL"

 （4）驗證設定

    pyenv virtualenv 3.9.1 venv-3.9.1
    
    ls -al ~/.pyenv/versions
    [alanjui@VB03-ArchLinux-KDE ~]$ ll ~/.pyenv/versions
    總用量 16
    drwxr-xr-x  4 alanjui alanjui 4096  1月  8 21:09 .
    drwxr-xr-x 14 alanjui alanjui 4096  1月  8 21:09 ..
    drwxr-xr-x  6 alanjui alanjui 4096  1月  8 20:52 3.8.6
    drwxr-xr-x  7 alanjui alanjui 4096  1月  8 21:09 3.9.1
    lrwxrwxrwx  1 alanjui alanjui   51  1月  8 21:09 venv-3.9.1 -> /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1
    
    [alanjui@VB03-ArchLinux-KDE ~]$ pyenv virtualenvs
      3.9.1/envs/venv-3.9.1 (created from /home/alanjui/.pyenv/versions/3.9.1)
      venv-3.9.1 (created from /home/alanjui/.pyenv/versions/3.9.1)

【參考】： 

Python 虛擬環境的啟用／關閉

    pyenv activate <name>
    pyenv deactivate

Python 虛擬環境移除

    pyenv uninstall <my-virtual-env>


- ~/.pyenv/versions/<my-virtual-env>
- ~/.pyenv/versions/{Python_version}/envs/<my-virtual-env>


----------

**NodeJS**

（1）安裝 Node.JS 版本管理套件：n (Node.js Versions Manager)

    cd
    curl -L https://git.io/n-install | bash
    . ~/.bashrc

（2）以 Node.JS 版本管理套件，安裝 LTS 版本

    n lts


    [alanjui@VB03-ArchLinux-KDE ~]$ n lts
       installed : v14.15.4 (with npm 6.14.10)

（3）驗證

    node -v
    npm -v


    [alanjui@VB03-ArchLinux-KDE ~]$ node -v
    v14.15.4
    [alanjui@VB03-ArchLinux-KDE ~]$ npm -v
    6.14.10


----------

安裝 yarn

 （1）安裝軟體套件

    pacman -S yarn

 （2）驗證

    [alanjui@VB03-ArchLinux-KDE ~]$ sudo pacman -S yarn
    正在解決依賴關係…
    正在檢查衝突的軟體包…
    
    軟體包 (3) libuv-1.40.0-1  nodejs-15.5.1-1  yarn-1.22.10-1
    
    總計下載大小：   9.61 MiB
    總計安裝大小：  35.08 MiB
    
    :: 進行安裝嗎？ [Y/n] y
    :: 正在接收軟體包…
     libuv-1.40.0-1-x86_64                               224.8 KiB  1561 KiB/s 00:00 [##############################################] 100%
     nodejs-15.5.1-1-x86_64                                8.5 MiB  10.8 MiB/s 00:01 [##############################################] 100%
     yarn-1.22.10-1-any                                  953.5 KiB  10.3 MiB/s 00:00 [##############################################] 100%
    (3/3) 正在檢查鑰匙圈中的鑰匙                                                     [##############################################] 100%
    (3/3) 正在檢查軟體包完整性                                                       [##############################################] 100%
    (3/3) 正在載入軟體包檔案                                                         [##############################################] 100%
    (3/3) 正在檢查檔案衝突                                                           [##############################################] 100%
    (3/3) 正在檢查可用磁碟空間                                                       [##############################################] 100%
    :: 正在處理軟體包變更…
    (1/3) 正在安裝 libuv                                                             [##############################################] 100%
    (2/3) 正在安裝 nodejs                                                            [##############################################] 100%
    nodejs 的可選依賴
        npm: nodejs package manager
    (3/3) 正在安裝 yarn                                                              [##############################################] 100%
    :: 正在執行後置作業掛鉤…
    (1/1) Arming ConditionNeedsUpdate...
    
    [alanjui@VB03-ArchLinux-KDE ~]$ which yarn
    /usr/bin/yarn
    [alanjui@VB03-ArchLinux-KDE ~]$ yarn --version
    1.22.10
    [alanjui@VB03-ArchLinux-KDE ~]$ node -v
    v14.15.4
    [alanjui@VB03-ArchLinux-KDE ~]$ npm -v
    6.14.10



----------

**Vim 8.2**

Install Vim 8.2 from PPA Repo

    yay -Ss vim
    yay -S vim


download configuration from GitHub Repo

    cd 
    git clone https://github.com/AlanJui/vim8.git .vim


Install all plugins for vim 8

    vim
    :PlugInstall
    :PlugUpdate
    :q



    vim



----------

**Tmux**

**Install** 

    sudo pacman -S tmux


Extension: Oh My Tmux

    $ cd
    $ git clone https://github.com/gpakosz/.tmux.git
    $ ln -s -f .tmux/.tmux.conf
    $ cp .tmux/.tmux.conf.local .


Configuration: ~/.tmux.conf.local

    # clipboard
    tmux_conf_copy_to_os_clipboard=true
    
    set -g mouse on
    :
    # replace C-b by C-a

Reload configuration

    tmux source-file ~/.tmux.conf





----------
## 遠端遙控


**xrdp**





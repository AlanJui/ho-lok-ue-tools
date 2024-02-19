# Debian 10 設定

[Ubuntu / Debian 台灣最佳鏡像網站](https://www.debian.org/mirror/list.zh-tw.html)
國網中心 opensource.nchc.org.tw ==> 
http://ftp.tw.debian.org/pmwiki/index.php?n=FSLab.MirrorLists



**/etc/apt/sources.list**

    deb http://opensource.nchc.org.tw/debian/ jessie maindeb-src http://opensource.nchc.org.tw/debian/ jessie main
    deb http://security.debian.org/ jessie/updates main contribdeb-src http://security.debian.org/ jessie/updates main contrib
    # jessie-updates, previously known as 'volatile'deb http://opensource.nchc.org.tw/debian/ jessie-updates main contribdeb-src http://opensource.nchc.org.tw/debian/ jessie-updates main contrib



    sudo apt update



----------
## 使用者設定

設定使用者 alanjui 可使用 sudo 指令

Configuration

    su -
    usermod -a -G sudo alanjui


Validation

    su - alanjui
    groups



----------
## 安裝「系統安裝／設定用工具」

**安裝基礎工具**

    sudo apt update
    sudo apt install git 

【註】：不要在此時安裝 vim 。


**安裝 Nerd Fonts**

    mkdir tmp && cd $_
    wget https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Hermit.zip
    
    mkdir -p ~/.local/share/fonts
    
    unzip Hermit.zip
    cp Hurmit*.otf ~/.local/share/fonts/
    
    fc-cache -fv



    ls ~/.local/share/fonts/ | grep Hurmit
    
    fc-list

【參考文件】： https://ostechnix.com/install-nerd-fonts-to-add-glyphs-in-your-code-on-linux/

https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/FiraMono/Regular/complete/Fira%20Mono%20Regular%20Nerd%20Font%20Complete.otf?raw=true


----------
## VirtualBox Guest Additions


https://kifarunix.com/install-virtualbox-guest-additions-on-debian-10-buster/

https://linuxize.com/post/how-to-install-virtualbox-guest-additions-on-debian-10/



    sudo apt update -y && apt upgrade
    sudo apt install build-essential dkms linux-headers-$(uname -r)


掛載 CD-ROM 方法

![Insert Guest Additions CD Image](https://linuxize.com/post/how-to-install-virtualbox-guest-additions-on-debian-10/insert-guest-additions-cd-image_hu6613c524b7b09bc1b2462026613a9c75_59766_480x0_resize_q75_lanczos.jpg?ezimgfmt=rs:695x474/rscb65/ng:webp/ngcb65)


〔作法一〕：

    sudo sh /media/cdrom0/VBoxLinuxAdditions.run


    alanjui@VB01-Debian-10:~$ sudo sh /media/cdrom0/VBoxLinuxAdditions.run
    Verifying archive integrity... All good.
    Uncompressing VirtualBox 6.1.16 Guest Additions for Linux........
    VirtualBox Guest Additions installer
    Removing installed version 6.1.16 of VirtualBox Guest Additions...
    update-initramfs: Generating /boot/initrd.img-4.19.0-13-amd64
    Copying additional installer modules ...
    Installing additional modules ...
    VirtualBox Guest Additions: Starting.
    VirtualBox Guest Additions: Building the VirtualBox Guest Additions kernel 
    modules.  This may take a while.
    VirtualBox Guest Additions: To build modules for other installed kernels, run
    VirtualBox Guest Additions:   /sbin/rcvboxadd quicksetup <version>
    VirtualBox Guest Additions: or
    VirtualBox Guest Additions:   /sbin/rcvboxadd quicksetup all
    VirtualBox Guest Additions: Building the modules for kernel 4.19.0-13-amd64.
    update-initramfs: Generating /boot/initrd.img-4.19.0-13-amd64
    VirtualBox Guest Additions: Running kernel modules will not be replaced until 
    the system is restarted

〔作法二〕：

    alanjui@VB05-Debian10-KDE:/media/cdrom$ sudo mkdir -p /mnt/cdrom
    
    alanjui@VB05-Debian10-KDE:/media/cdrom$ ll /dev/cdrom
    lrwxrwxrwx 1 root root 3  1月 11 22:50 /dev/cdrom -> sr0
    
    alanjui@VB05-Debian10-KDE:/media/cdrom$ sudo mount /dev/cdrom /mnt/cdrom
    mount: /mnt/cdrom: WARNING: device write-protected, mounted read-only.



    alanjui@VB01-Debian-10:~$ lsblk -l
    NAME MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
    sda    8:0    0   20G  0 disk 
    sda1   8:1    0    7G  0 part /
    sda2   8:2    0    1K  0 part 
    sda5   8:5    0  976M  0 part [SWAP]
    sda6   8:6    0 12.1G  0 part /home
    sr0   11:0    1 58.2M  0 rom  /media/cdrom0
    
    sudo mount /dev/sr0 /mnt/cdrom 



    cd /mnt/cdrom
    
    sudo sh ./VBoxLinuxAdditions.run --nox11
    Verifying archive integrity... All good.
    Uncompressing VirtualBox 6.1.16 Guest Additions for Linux........
    VirtualBox Guest Additions installer
    Copying additional installer modules ...
    Installing additional modules ...
    VirtualBox Guest Additions: Starting.
    VirtualBox Guest Additions: Building the VirtualBox Guest Additions kernel
    modules.  This may take a while.
    VirtualBox Guest Additions: To build modules for other installed kernels, run
    VirtualBox Guest Additions:   /sbin/rcvboxadd quicksetup <version>
    VirtualBox Guest Additions: or
    VirtualBox Guest Additions:   /sbin/rcvboxadd quicksetup all
    VirtualBox Guest Additions: Building the modules for kernel 4.19.0-13-amd64.
    update-initramfs: Generating /boot/initrd.img-4.19.0-13-amd64
    VirtualBox Guest Additions: Running kernel modules will not be replaced until
    the system is restarted
    
    sudo reboot


**設定與 Host 的 Shared Folder（共享資料夾）** 

![](https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610803874954_image.png)


（0）確認「共享資料夾」的「擁有權」，屬於 root:vboxsf

    alanjui@VB01-Debian-10:~$ ls -l
    總計 40
    drwxr-xr-x  7 alanjui alanjui 4096 12月 26 11:59 n
    drwxr-xr-t  2 alanjui alanjui 4096 12月 26 10:37 thinclient_drives
    drwxr-xr-x 11 alanjui alanjui 4096 12月 26 12:19 vim
    drwxrwx---  1 root    vboxsf   512  1月 16 21:03 下載
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 公共
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 圖片
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 影片
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 文件
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 桌面
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 模板
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 音樂

（1）確認「作業系統」中，已建立名稱為：「vboxsf」之「群組」：

    vim /etc/group


![](https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610802904940_image.png)


（2）將可使用「共享資料夾」之使用者帳號，加入 vboxsf 群祖中：

〔方法一〕：變更已建立帳號使用者所屬的群組

    sudo usermod -aG vboxsf alanjui

〔方法二〕：將使用者帳號加入 vboxsf 群組

    sudo adduser $USER vboxsf

【註】：usermod -aG 選項的「全名」 

    sudo usermod --append --groups vboxsf $USER


（3）驗證設定正確。

        - 先登出，再登入；
        - 輸入如下指令：
    alanjui@VB01-Debian-10:~$ groups alanjui
    alanjui : alanjui cdrom floppy sudo audio dip video plugdev netdev bluetooth scanner vboxsf


    alanjui@VB01-Debian-10:~$ grep 'vboxsf' /etc/group
    vboxsf:x:998:alanjui



    alanjui@VB01-Debian-10:~$ ll /media
    總計 11
    drwxr-xr-x  3 root root 4096  1月 16 21:04 .
    drwxr-xr-x 19 root root 4096  1月 10 20:09 ..
    lrwxrwxrwx  1 root root    6 12月 20 20:12 cdrom -> cdrom0
    dr-xr-xr-x  5 root root 2408 10月 15 22:48 cdrom0



    alanjui@VB01-Debian-10:~$ sudo chown -R `whoami`:users /media
    
    alanjui@VB01-Debian-10:~$ ll /media
    總計 11
    drwxr-xr-x  3 alanjui users 4096  1月 16 21:04 .
    drwxr-xr-x 19 root    root  4096  1月 10 20:09 ..
    lrwxrwxrwx  1 alanjui users    6 12月 20 20:12 cdrom -> cdrom0
    dr-xr-xr-x  5 root    root  2408 10月 15 22:48 cdrom0




----------
##  VirtualBox Shared Folders


（1）在 VirtualBox 設定「Shared Folders」

![](https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610808407979_image.png)


（2）在使用者登入 Debian 後，設定欲掛載之資料夾：host

    alanjui@VB01-Debian-10:~$ mkdir host
    
    alanjui@VB01-Debian-10:~$ sudo mount -t vboxsf vbox /home/alanjui/host

【Shared名稱未正確設定時，將發生如下之錯誤】：

    alanjui@VB01-Debian-10:~$ sudo mount -t vboxsf vbox /home/alanjui/host
    /sbin/mount.vboxsf: shared folder 'vbox' was not found (check VM settings / spelling)


（3）設定「作業系統自動掛載設定」： /etc/fstab

    sudo vim /etc/fstab


    ....
    vbox    /home/alanjuihost    vboxsf  comment=systemd.automount     0       0


（4）先登出，再登入。打開「終端機」，輸入如下指令，確認「共享資料夾」，被掛載在「/media」目錄之下：sf_<SharedFolder>

    alanjui@VB01-Debian-10:~$ ls -l /media
    總計 3
    lrwxrwxrwx 1 root root      6 12月 20 20:12 cdrom -> cdrom0
    dr-xr-xr-x 5 root root   2408 10月 15 22:48 cdrom0
    drwxrwx--- 1 root vboxsf  384 10月  9 20:39 sf_vbox
    
    alanjui@VB01-Debian-10:~$ ll /media/sf_vbox
    總計 45908
    -rwxrwx--- 1 root vboxsf  3675917 11月 18  2007 '04_LOVE SONG.mp3'
    -rwxrwx--- 1 root vboxsf  4222189 11月 18  2007 "04.SANS RE'PONSE.mp3"
    -rwxrwx--- 1 root vboxsf  2950602 11月 18  2007 '04_The Skye Boat Song.mp3'
    -rwxrwx--- 1 root vboxsf  4520039 11月 18  2007  04_迎風而立.mp3
    -rwxrwx--- 1 root vboxsf  5564139  9月 19 11:41 'Asummer place Paul Mauriat.mp3'
    drwxrwx--- 1 root vboxsf      160  9月 13 22:27  Music
    -rwxrwx--- 1 root vboxsf 15514657  9月 26 22:07 'The wanderer - Karunesh.mp3'
    -rwxrwx--- 1 root vboxsf  9696790 10月  9 20:38 '但願人長久 - 蘇軾  詞、鄧麗君  唱.mp3'
    
    alanjui@VB01-Debian-10:~$ touch /media/sf_vbox/test
    
    alanjui@VB01-Debian-10:~$ ll /media/sf_vbox
    總計 45908
    -rwxrwx--- 1 root vboxsf  3675917 11月 18  2007 '04_LOVE SONG.mp3'
    -rwxrwx--- 1 root vboxsf  4222189 11月 18  2007 "04.SANS RE'PONSE.mp3"
    -rwxrwx--- 1 root vboxsf  2950602 11月 18  2007 '04_The Skye Boat Song.mp3'
    -rwxrwx--- 1 root vboxsf  4520039 11月 18  2007  04_迎風而立.mp3
    -rwxrwx--- 1 root vboxsf  5564139  9月 19 11:41 'Asummer place Paul Mauriat.mp3'
    drwxrwx--- 1 root vboxsf      160  9月 13 22:27  Music
    -rwxrwx--- 1 root vboxsf        0  1月 16 22:57  test
    -rwxrwx--- 1 root vboxsf 15514657  9月 26 22:07 'The wanderer - Karunesh.mp3'
    -rwxrwx--- 1 root vboxsf  9696790 10月  9 20:38 '但願人長久 - 蘇軾  詞、鄧麗君  唱.mp3'


    



![](https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610808723954_image.png)



    



    lanjui@VB01-Debian-10:~$ ll
    ls: 無法存取 'host': 協定錯誤
    總計 40
    d?????????  ? ?       ?          ?             ? host
    drwxr-xr-x  7 alanjui alanjui 4096 12月 26 11:59 n
    drwxr-xr-t  2 alanjui alanjui 4096 12月 26 10:37 thinclient_drives
    drwxr-xr-x 11 alanjui alanjui 4096 12月 26 12:19 vim
    drwxrwx---  1 root    vboxsf   512  1月 16 22:46 下載
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 公共
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 圖片
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 影片
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 文件
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 桌面
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 模板
    drwxr-xr-x  2 alanjui alanjui 4096 12月 20 20:21 音樂




----------
## iBus


    sudo apt install -y ibus-rime


    im-config


    alanjui@VB01-Debian-10:~$ cat .xinputrc 
    # im-config(8) generated on Sat, 16 Jan 2021 22:08:39 +0800
    run_im ibus
    # im-config signature: 46bf2a71200109f2112af9cff14bb3fd  -



----------
## Fcitx 4 中文輸入法

下列官網文件載明：Fcitx5 基本上要到 Bullseye (V11) 版本後，才有完整的軟件包；在 Buster（V10）及之前版本之用戶，請繼續使用 Fcitx 4。
https://wiki.debian.org/zh_CN/I18n/Fcitx5#A.2BfkFPU04tZYd1KGI3-


**安裝谷歌拚音輸入法**

    sudo apt install fcitx-googlepinyin


**安裝倉頡五代輸入法**

    sudo apt install fcitx-table-cangjie5


**安裝中文輸入法：中州韻（漢語拚音/倉頡）**

    sudo apt install fcitx-rime


**設定 Fcitx 中文輸入法於開機時自動啟動**

    系統設定 》啟動與關閉 》自動啟動 》新增程式 》Fcitx


![](https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610421780369_image.png)


**登出後再登入**

**設定中文輸入法採用「Fcitx」（使用者設定值）**

    im-config

選擇「啟動小企鵝輸入法（fcitx）！」

    設定使用者設定值 /home/alanjui/.xinputrc 為 fcitx。
    手動設定選擇: fcitx
    Flexible Input Method Framework (fcitx)
     * Required for all: fcitx
     * Language specific input conversion support:
       * Simplified Chinese: fcitx-libpinyin or fcitx-sunpinyin or fcitx-googlepinyin
       * Traditional Chinese / generic Chinese: fcitx-rime
       * Generic keyboard translation table: fcitx-table* packages
     * Application platform support:
       Installing fcitx-frontend-all will cover all GUI platforms.
       * GNOME/GTK+: fcitx-frontend-gtk2 and fcitx-frontend-gtk3 (both)
       * Qt4: fcitx-frontend-qt4
       * KDE/Qt5: fcitx-frontend-qt5
    
    使用者設定值已經被 im-config 修改。
    
    請重新啟動 X 工作階段 (session) 來使用新的使用者設定值。
    如果先前設定的背景程式被 X 工作階段管理程式 (session manager) 重新啟動，您可能需要使用 kill(1) 來結束程式。
    請參考 im-config(8) 與 /usr/share/doc/im-config/README.Debian.gz。


**加入中文輸入法**

    Fcitx 中文輸入法圖示 》設定目前輸入法
![](https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1610422290751_VirtualBox_VB05-Debian10.7-KDE_12_01_2021_11_30_38.png)




----------
## 安裝 Python 3


**安裝「Build 作業」相關軟件**

    sudo apt -y install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev curl libbz2-dev


**安裝 pyenv 與 pyenv-virtualenv 軟體套件**

    cd
    git clone https://github.com/pyenv/pyenv.git ~/.pyenv
    git clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv


**設定作業環境（~/.bashrc）**

    ....
    export PYENV_ROOT=$(~/.pyenv/bin/pyenv root)
    export PATH="$PYENV_ROOT/bin:$PATH"
    
    if command -v pyenv 1>/dev/null 2>&1; then
      eval "$(pyenv init -)"
      eval "$(pyenv virtualenv-init -)"
    fi
    export PYENV_VIRTUALENV_DISABLE_PROMPT=1


**啟動 Python 作業環境**

    exec "$SHELL"


**驗證作業**

    pyenv versions


**安裝** Python 2

    pyenv install 2.7.8


**安裝 Python 3.8**

    pyenv install -l
    pyenv install 3.8.6
    pyenv versions


**安裝 Python 3.9**

    pyenv install 3.9.1
    pyenv versions


**設定作業系統預設使用 Python 3.9.1**

    pyenv global 3.9.1

【驗證】：

    pyenv version
    python --version



----------
## 安裝 Node.JS 


**解除作業系統預設安裝的 Node.JS**

    sudo mv /bin/node /bin/node.bak


**自 Git 原始碼儲存倉下載及執行安裝** (Node.js Versions Manager)

    curl -L https://git.io/n-install | bash
    . ~/.bashrc



----------
## 安裝 Vim 8


**解除系統已安裝之 vim**

    sudo apt remove vim

【註】： 作業系統「預設」安裝： /bin/vim


**自 Git 版本儲存倉下載 Vim 8.2 原始程式碼，完成組建（Build）與安裝**

    git clone https://github.com/vim/vim.git
    cd vim/src
    make
    sudo make install


【註】：新建置之 Vim 儲存路徑：

    which vim
    /usr/local/bin/vim



**自 Vim PPA Repo 安裝 V8.2 版本**

    sudo add-apt-repository ppa:jonathonf/vim
    sudo apt update
    sudo apt install vim

**【註】：Uninstall vim from PPA**

    sudo purge vim
    sudo add-apt-repository --remove ppa:jonathonf/vim


**自 Git 下載設定檔**

    cd 
    git clone https://github.com/AlanJui/vim8.git .vim


**安裝 Vim 8 適用之 Vim Plugins**

    vim
    :PlugInstall
    :PlugUpdate
    :q



----------
## Tmux

Install

    sudo apt -y install tmux


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
## XRDP


    alanjui@VB05-Debian10-KDE:~$ sudo apt install xrdp
    [sudo] password for alanjui:
    正在讀取套件清單... 完成
    正在重建相依關係
    正在讀取狀態資料... 完成
    下列的額外套件將被安裝：
      xorgxrdp
    建議套件：
      guacamole xrdp-pulseaudio-installer
    下列【新】套件將會被安裝：
      xorgxrdp xrdp
    升級 0 個，新安裝 2 個，移除 0 個，有 0 個未被升級。
    需要下載 607 kB 的套件檔。
    此操作完成之後，會多佔用 3,941 kB 的磁碟空間。
    是否繼續進行 [Y/n]？ [Y/n] y
    下載:1 http://ftp.tw.debian.org/debian buster/main amd64 xorgxrdp amd64 1:0.2.9-1 [172 kB]
    下載:2 http://ftp.tw.debian.org/debian buster/main amd64 xrdp amd64 0.9.9-1+deb10u1 [435 kB]
    取得 607 kB 用了 0s (2,819 kB/s)
    選取了原先未選的套件 xorgxrdp。
    （讀取資料庫 ... 目前共安裝了 197448 個檔案和目錄。）
    正在準備解包 .../xorgxrdp_1%3a0.2.9-1_amd64.deb……
    Unpacking xorgxrdp (1:0.2.9-1) ...
    選取了原先未選的套件 xrdp。
    正在準備解包 .../xrdp_0.9.9-1+deb10u1_amd64.deb……
    Unpacking xrdp (0.9.9-1+deb10u1) ...
    設定 xrdp (0.9.9-1+deb10u1) ...
    
    Generating 2048 bit rsa key...
    
    ssl_gen_key_xrdp1 ok
    
    saving to /etc/xrdp/rsakeys.ini
    
    Created symlink /etc/systemd/system/multi-user.target.wants/xrdp-sesman.service → /lib/systemd/system/xrdp-sesman.service.
    Created symlink /etc/systemd/system/multi-user.target.wants/xrdp.service → /lib/systemd/system/xrdp.service.
    設定 xorgxrdp (1:0.2.9-1) ...
    執行 systemd (241-7~deb10u5) 的觸發程式……
    執行 man-db (2.8.5-2) 的觸發程式……
    執行 libc-bin (2.28-10) 的觸發程式……
    alanjui@VB05-Debian10-KDE:~$


**安裝**

    su
    apt -y install xrdp
    systemctl enable xrdp
    systemctl start xrdp


    alanjui@VB05-Debian10-KDE:~$ systemctl status xrdp
    ● xrdp.service - xrdp daemon
       Loaded: loaded (/lib/systemd/system/xrdp.service; enabled; vendor preset: enabled)
       Active: active (running) since Wed 2021-01-13 13:05:10 CST; 5min ago
         Docs: man:xrdp(8)
               man:xrdp.ini(5)
     Main PID: 6223 (xrdp)
        Tasks: 1 (limit: 2346)
       Memory: 1.3M
       CGroup: /system.slice/xrdp.service
               └─6223 /usr/sbin/xrdp
    alanjui@VB05-Debian10-KDE:~$ systemctl status xrdp-sesman
    ● xrdp-sesman.service - xrdp session manager
       Loaded: loaded (/lib/systemd/system/xrdp-sesman.service; enabled; vendor preset: enabled)
       Active: active (running) since Wed 2021-01-13 13:05:09 CST; 5min ago
         Docs: man:xrdp-sesman(8)
               man:sesman.ini(5)
     Main PID: 6213 (xrdp-sesman)
        Tasks: 1 (limit: 2346)
       Memory: 944.0K
       CGroup: /system.slice/xrdp-sesman.service
               └─6213 /usr/sbin/xrdp-sesman


**環境**


    $ id xrdp
    uid=118(xrdp) gid=125(xrdp) groups=125(xrdp)
    
    $ groups xrdp
    xrdp : xrdp
    
    $ id
    uid=1000(alanjui) gid=1000(alanjui) groups=1000(alanjui),24(cdrom),25(floppy),27(sudo),29(audio),30(dip),44(video),46(plugdev),109(netdev),112(bluetooth),116(scanner)


    alanjui@VB05-Debian10-KDE:~$ id xrdp
    uid=119(xrdp) gid=126(xrdp) groups=126(xrdp)
    
    alanjui@VB05-Debian10-KDE:~$ groups xrdp
    xrdp : xrdp
    
    alanjui@VB05-Debian10-KDE:~$ id
    uid=1000(alanjui) gid=1000(alanjui) groups=1000(alanjui),0(root),24(cdrom),25(floppy),27(sudo),29(audio),30(dip),44(video),46(plugdev),109(netdev),112(bluetooth),117(lpadmin),118(scanner),998(vboxsf)



    $ ll /run/xrdp/
    總計 8
    drwxrwsrwt 2 xrdp xrdp 140 12月 26 10:48 sockdir
    -rw------- 1 xrdp xrdp   4 12月 26 10:30 xrdp.pid
    -rw------- 1 xrdp xrdp   4 12月 26 10:30 xrdp-sesman.pid


    alanjui@VB05-Debian10-KDE:~$ ll /run/xrdp/
    總計 8
    drwxr-xr-x  3 xrdp xrdp 100  1月 13 13:05 .
    drwxr-xr-x 25 root root 720  1月 13 13:05 ..
    drwxrwsrwt  2 xrdp xrdp  40  1月 13 13:05 sockdir
    -rw-------  1 xrdp xrdp   4  1月 13 13:05 xrdp.pid
    -rw-------  1 xrdp xrdp   4  1月 13 13:05 xrdp-sesman.pid


- /usr/lib/systemd/system/xrdp.service
      1   [Unit]
        1 Description=xrdp daemon
        2 Documentation=man:xrdp(8) man:xrdp.ini(5)
        3 Requires=xrdp-sesman.service
        4 After=network.target xrdp-sesman.service
        5
        6 [Service]
        7 Type=forking
        8 PIDFile=/var/run/xrdp/xrdp.pid
        9 RuntimeDirectory=xrdp
       10 EnvironmentFile=-/etc/sysconfig/xrdp
       11 EnvironmentFile=-/etc/default/xrdp
       12 User=xrdp
       13 Group=xrdp
       14 PermissionsStartOnly=true
       15 ExecStartPre=/bin/sh /usr/share/xrdp/socksetup
       16 ExecStart=/usr/sbin/xrdp $XRDP_OPTIONS
       17 ExecStop=/usr/sbin/xrdp $XRDP_OPTIONS --kill
       18
       19 [Install]
       20 WantedBy=multi-user.target:q
- /usr/lib/systemd/system/xrdp-sesman.service
    [Unit]
    Description=xrdp session manager
    Documentation=man:xrdp-sesman(8) man:sesman.ini(5)
    After=network.target
    StopWhenUnneeded=true
    BindsTo=xrdp.service
    
    [Service]
    Type=forking
    PIDFile=/var/run/xrdp/xrdp-sesman.pid
    RuntimeDirectory=xrdp
    EnvironmentFile=-/etc/sysconfig/xrdp
    EnvironmentFile=-/etc/default/xrdp
    ExecStart=/usr/sbin/xrdp-sesman $SESMAN_OPTIONS
    ExecStop=/usr/sbin/xrdp-sesman $SESMAN_OPTIONS --kill
    
    [Install]
    WantedBy=multi-user.target
- /etc/xrdp/xrdp.ini
- /etc/xrdp/sesman.ini
- /etc/xrdp/startvm.sh
- /etc/X11/xinit/xinitrc
    . /etc/X11/Xsession
- /etc/X11/Xwrapper.config
    allowed_users=console



    alanjui@VB01-Debian-10:~$ sudo systemctl status xrdp
    [sudo] password for alanjui:
    ● xrdp.service - xrdp daemon
       Loaded: loaded (/lib/systemd/system/xrdp.service; enabled; vendor preset: enabled)
       Active: active (running) since Sat 2020-12-26 13:27:57 CST; 8min ago
         Docs: man:xrdp(8)
               man:xrdp.ini(5)
      Process: 529 ExecStartPre=/bin/sh /usr/share/xrdp/socksetup (code=exited, status=0/SUCCESS)
      Process: 542 ExecStart=/usr/sbin/xrdp $XRDP_OPTIONS (code=exited, status=0/SUCCESS)
     Main PID: 544 (xrdp)
        Tasks: 2 (limit: 2346)
       Memory: 21.9M
       CGroup: /system.slice/xrdp.service
               ├─ 544 /usr/sbin/xrdp
               └─2366 /usr/sbin/xrdp
    
    12月 26 13:35:48 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] xrdp_wm_log_msg: connecting to sesman ip
    12月 26 13:35:49 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[INFO ] xrdp_wm_log_msg: sesman connect ok
    12月 26 13:35:49 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] xrdp_wm_log_msg: sending login info to s
    12月 26 13:35:49 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] return value from xrdp_mm_connect 0
    12月 26 13:35:49 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[INFO ] xrdp_wm_log_msg: login successful for di
    12月 26 13:35:49 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] xrdp_wm_log_msg: started connecting
    12月 26 13:35:50 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[INFO ] lib_mod_log_peer: xrdp_pid=2366 connecte
    12月 26 13:35:50 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] xrdp_wm_log_msg: connected ok
    12月 26 13:35:50 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] xrdp_mm_connect_chansrv: chansrv connect
    12月 26 13:35:50 VB01-Debian-10 xrdp[2366]: (2366)(139863268157248)[DEBUG] Closed socket 16 (AF_INET6 ::1 port 4130
    lines 1-24/24 (END)



    alanjui@VB01-Debian-10:~$ sudo systemctl status xrdp-sesman
    ● xrdp-sesman.service - xrdp session manager
       Loaded: loaded (/lib/systemd/system/xrdp-sesman.service; enabled; vendor preset: enabled)
       Active: active (running) since Sat 2020-12-26 13:27:56 CST; 9min ago
         Docs: man:xrdp-sesman(8)
               man:sesman.ini(5)
      Process: 517 ExecStart=/usr/sbin/xrdp-sesman $SESMAN_OPTIONS (code=exited, status=0/SUCCESS)
     Main PID: 528 (xrdp-sesman)
        Tasks: 1 (limit: 2346)
       Memory: 2.1M
       CGroup: /system.slice/xrdp-sesman.service
               └─528 /usr/sbin/xrdp-sesman
    
    12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[528]: (528)(140155329705408)[INFO ] starting Xorg session...
    12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[528]: (528)(140155329705408)[DEBUG] Closed socket 9 (AF_INET6 :: port 5
    12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[528]: (528)(140155329705408)[DEBUG] Closed socket 9 (AF_INET6 :: port 6
    12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[528]: (528)(140155329705408)[DEBUG] Closed socket 9 (AF_INET6 :: port 6
    12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[528]: (528)(140155329705408)[DEBUG] Closed socket 8 (AF_INET6 ::1 port
    12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[2367]: (2367)(140155329705408)[INFO ] calling auth_start_session from p
    12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[2367]: pam_unix(xrdp-sesman:session): session opened for user alanjui b
    12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[2367]: (2367)(140155329705408)[DEBUG] Closed socket 7 (AF_INET6 ::1 por
    12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[2367]: (2367)(140155329705408)[DEBUG] Closed socket 8 (AF_INET6 ::1 por
    12月 26 13:35:49 VB01-Debian-10 xrdp-sesman[2367]: (2367)(140155329705408)[CORE ] waiting for window manager (pid 2
    lines 1-22/22 (END)




**問題排除**


- 無法登入（xrdp session manager (xrdp-sesman) 發出錯誤說明： login failed for display 0)
![](https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1608950578200_image.png)

    登入之
    


- 登入後，畫面一片黑。
    無法支援多人同時登入，已登入之人需先登出。


- [登入後需輸入「管理員」密碼](https://c-nergy.be/blog/?p=12073)。
    - Authentication is required to create a color managed device
    - Authentication is required to refresh the system repositories


![](https://paper-attachments.dropbox.com/s_49DCA08AF1AEDB4FED368883EFBFB0E412F24B870AADC46582585515FC33A142_1608951204701_image.png)


因為 Remote Login 需要核對「使用者」之權限。依據的準則取自「Polkit Policy file」，故而發生以上兩起要求「Authentication」事件。

【首等方案】：增加自動設定 Script ： /etc/polkit-1/localauthority.conf.d/02-allow-colord.conf

    polkit.addRule(function(action, subject) {
        if ((action.id == "org.freedesktop.color-manager.create-device" ||
            action.id == "org.freedesktop.color-manager.create-profile" ||
            action.id == "org.freedesktop.color-manager.delete-device" ||
            action.id == "org.freedesktop.color-manager.delete-profile" ||
            action.id == "org.freedesktop.color-manager.modify-device" ||
            action.id == "org.freedesktop.color-manager.modify-profile") &&
            subject.isInGroup("{users}")) {
                return polkit.Result.YES;
            }
    });


【次等方案】：修改「設定檔」：/usr/share/polkit-1/actions/**org.freedesktop.color.policy**

    ....  
    <defaults> 
          <allow_any>auth_adminyes</allow_any>
          <allow_inactive>noyes</allow_inactive>
          <allow_active>yes</allow_active>
    </defaults>
    ....


【需要認證 - PolicyKit 1 KDE 代理程式】
Authentication is required to set the network proxy used for downloading software
有一個應用程式試圖執行需要權限的動作。要執行此動作需要認證。

【詳細資料】：

- 應用程式：不適用的
- 動作： Set network proxy
- 動作編號：org.freedesktop.packagekit.system-network-proxy-configure
- 廠商：The Packagekit Project

 polkit.subject-pid: 15243
 polkit.caller-pid: 15749


【xmessage】


- VBoxClient: Failed to request display change events, rc=VERR_INVALID_FUNCTION
- VBoxClient: Failed to register resizing support, rc=VERR_INVALID_FUNCTION
- VBoxClient: Failure waiting for event, rc=VERR_INVALID_FUNCTION


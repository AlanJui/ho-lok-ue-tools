# Ubuntu 18.04 安裝筆記


# 作業系統基礎
## 硬碟規劃


- /dev/sda1
    - 分割區類型：Linux 置換區（SWAP）
    - 格式： Ext 4
    - 掛載點： （N/A）
    - 容量： 16 GB (16382 KB)
- /dev/sda2
    - 分割區類型：Linux 檔案系統
    - 格式： Ext 4
    - 掛載點： /
    - 容量： 222 GB
- /deb/sda3
    - 分割區類型：Linux 檔案系統
    - 格式： Ext 4
    - 掛載點： /home
    - 容量： 262 GB


## 網路設定
- IP: 192.168.66.10/24
- Gateway: 192.168.66.1
- DNS： 192.168.66.1


    sudo apt install net-tools nmap curl
## 裝置設定
- 音效卡
- USB Web Cam / 麥克風
- 電源/節省電源/螢幕轉黑：永不


## 中文輸入法

**（1）設定/地區和語言/語言支援/安裝**
**（2）設定/地區和語言/鍵盤輸入法系統：IBus**
**（3）重新開機（登出/登入不再生效）**
**（4）設定/地區和語言/安裝或移除語言/中文（簡體字）**
**（5）登出/登入**
**（6）設定/地區和語言/加入輸入來源/漢語（中國）/漢語（Intelligent Pinyin）**
**（6）設定/地區和語言/漢語（Intelligent Pinyin）/偏好設定**

    - 常規/初始狀態/中文/繁體
    - 常規/外觀/每頁顯示候選詞條目數量/10
    - 模糊音/啟用模糊音（一般）


    $ sudo apt install fcitx fcitx-googlepinyin fcitx-chewing fcitx-table-cangjie5


## 其它工具

使用「軟體」安裝以下套件：

- Dconf 編輯器
- Synaptic Package Manager
- Sublime Text Editor

Sublime Text 3
透過 Bash Script 安裝（此法會順帶解決 Ubuntu 版的 Sublime Text 3 無法輸入中文的問題）

    $ cd ~/Applications
    $ git clone https://github.com/lyfeyaj/sublime-text-imfix.git
    $ cd sublime-text-imfix
    $ ./sublime-imfix

標準安裝法

    $ wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
    $ echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
    $ sudo apt update
    $ sudo apt install sublime-text

VS Code

    $ curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
    $ sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
    $ sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
    $ sudo apt update
    $ sudo apt install code


----------


# SSH安裝


https://www.linuxbabe.com/linux-server/setup-passwordless-ssh-login



## 安裝套件


    sudo apt install ssh



## 產生 RSA 公／私鑰


    ssh-keygen -t rsa



## 將  RSA 公鑰複製到遠端機器

執行以下指令，可將 RSA 公鑰複製到遠端的機器。往後再透過 ssh <UserName>@<ServerIP> 連接遠端機器時，可省略「使用者密碼」之輸入。

    # ssh-copy-id remote-user@server-ip
    $ ssh-copy-id alanjui@192.168.66.10



## 重新安裝 ssh 後，無法再連上先前已可連上線之 ssh server

曾透過 ssh 登入過這台伺服器的 Client 端，會有無法連線的問題發生：

    $ ssh alanjui@192.168.66.10
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
    Someone could be eavesdropping on you right now (man-in-the-middle attack)!
    It is also possible that a host key has just been changed.
    The fingerprint for the ECDSA key sent by the remote host is
    SHA256:DOktDVrmw7MJgAlqhWOZExCIrqOT1j+usEYUeSxK6N4.
    Please contact your system administrator.
    Add correct host key in /Users/AlanJui/.ssh/known_hosts to get rid of this message.
    Offending ECDSA key in /Users/AlanJui/.ssh/known_hosts:153
    ECDSA host key for 192.168.66.10 has changed and you have requested strict checking.
    Host key verification failed.


以上的問題，主要係源自於曾連線過的 client 端，其「家目錄」所存放的「公開憑證」（或說： Public Key），因伺服器重安裝，以致原用之「公開憑證」已不復存在，故而當 client 要求連線時，會收到由伺服器傳來的新公開憑證時，當 client 端與已存檔的憑證比對時，會發生不符的問題，故而 client 端拒絕與伺服器連線。

使用 Editor 剛掉檔案： ~/.ssh/known_hosts 中的  153 行

或：

    ssh-keygen -f "~/.ssh/known_hosts" -R 192.168.66.10




----------
# xrdp

安裝

    sudo -s
    sudo apt install xrdp xrdp-pulseaudio-installer

驗證服務已被啟動

    systemctl status xrdp

要求作業系統重開機

    sudo reboot

驗證 Port: 3389 已被監聽

    netstat -tpnl

自 Client 端驗證 XRDP Server 已能監聽 3389

    nmap -p 3389 192.168.66.10

自 Client 端驗證 XRDP Server 已能透過 Port: 3389 進行連線

    $ telnet 192.168.66.10 3389
    Trying 192.168.66.10...
    Connected to SRV-01.
    Escape character is '^]'.

自 client 端，透過 Windows 的「遠端桌面」連線到伺服器

- 通信協定：xorg
- 使用者：  alanjui
- 密碼： 

異常狀況：

要求核對：

    Authentication is required to create a color profile
    ...... to create a color managed device


    sudo apt install gnome-tweak-tool

**/etc/polkit-1/localauthority.conf.d**/**02-allow-colord.conf**

    polkit.addRule(function(action, subject) {
        if ((action.id == "org.freedesktop.color-manager.create-device" ||
             action.id == "org.freedesktop.color-manager.modify-profile" ||
             action.id == "org.freedesktop.color-manager.delete-device" ||
             action.id == "org.freedesktop.color-manager.create-profile" ||
             action.id == "org.freedesktop.color-manager.modify-profile" ||
             action.id == "org.freedesktop.color-manager.delete-profile") &&
            subject.isInGroup("{group}"))
        {
            return polkit.Result.YES;
        }
    });

/etc/polkit-1/localauthority/50-local.d/45-allow.colord.pkla

    [Allow Colord all Users]
    Identity=unix-user:*
    Action=org.freedesktop.color-manager.create-device;org.freedesktop.color-manager.create-profile;org.freedesktop.color-manager.delete-device;org.freedesktop.color-manager.delete-profile;org.freedesktop.color-manager.modify-device;org.freedesktop.color-manager.modify-profile
    ResultAny=no
    ResultInactive=no
    ResultActive=yes



確認沒使用 Xwarapper.config 這個設定檔： ~~/etc/X11/Xwrapper.config~~

    allowed_users=anybody

更改 xrdp 服務設定（ /etc/xrdp/xrdp.ini）

    [console]
    ...
    ip=0.0.0.0
    ...

**重新啟動 xrdp**

    sudo systemctl restart xrdp

自 Client 端以「Windows 遠端桌面」連線到 XRDP Server (192.168.66.10)

- Session： console
- password: <VNC Server connect password>
----------
# VNC Server 安裝

**（1）先在 Ubuntu Desktop 電腦，透過，完成「螢幕分享」的設定工作。**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_658302B4FACACF076DDCB0704829364CC3EE5F7037E5F4737FCB9B1DBABBDAE1_1524743791656_image.png)


**（2）打開「終端機」，輸入以下指令，確認 vnc server （vino server）的服務已啟動。**

    netstat -tpnl

在終端機的輸出畫面，於 Local Address 欄位，找尋 0.0.0.0:5900 ，若有看到，表示 vnc server 已正式啟動；若否，最好就「重開機」，令作業系統自動去啟動 vnc server 。

**（3）打開「終端機」，輸入以下指令，要求 vnc server 對於畫面資料，無需進行加密處理。**

    $ gsettings set org.gnome.Vino require-encryption false


**（4）在另一台電腦，以 vnc client軟體（如：realvnc viewer）連上 VNC Server。**



----------


## 在 Client 端用 VNC Viewer 連上另一台 Ubuntu Desktop 電腦
    $ vncviewer 192.168.66.10:0


![](https://d2mxuefqeaa7sj.cloudfront.net/s_B24A85039E505F12422DD7B29F6A13606C1039D1D30F815B98507EA8ACB3DEF4_1526523381209_2018-05-17+10-14-18+.png)



----------


# X11VNC Service

安裝軟體套件。

    sudo apt install x11vnc

建立 VNC Server 的密碼檔。

    sudo x11vnc -storepasswd /etc/x11vnc.passwd

查詢 Xauthority 檔案的存放路徑。

    ps wwwaux | grep auth

建立 x11vnc 的服務設定檔： /lib/systemd/system/x11vnc.service

    [Unit]
    Description=Start x11vnc at startup.
    After=multi-user.target
    
    [Service]
    Type=simple
    ExecStart=/usr/bin/x11vnc -auth /run/user/1001/gdm/Xauthority -forever -loop -noxdamage -repeat -rfbauth /etc/x11vnc.pass -rfbport 5900 -shared
    
    [Install]
    WantedBy=multi-user.target

啟用及啟動 x11vnc 服務。

    sudo systemctl enable x11vnc
    sudo systemctl daemon-reload
    sudo systemctl start x11vnc

驗證 x11vnc 服務已正常啟動。

    systemctl status x11vnc

使用 VNC Client 軟體連線，驗證已能正常運作。


----------
# 安裝 Chrome 


----------
# 安裝 Smba Server

**(1)** [**掛載第二顆硬碟**](https://paper.dropbox.com/doc/1mdbnlQwSCTnP92XpO1vv)

**(2)** [**安裝與設定 Samba Server**](https://paper.dropbox.com/doc/Samba-Z1HipynH9jnqa5S697mwG)


----------
# 調整 Python 設定
    sudo update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1
    sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.6 2
    
    sudo update-alternatives --config python
    # 選（2）


    alanjui@SRV-01:~$ ls -larth `which python`*
    -rwxr-xr-x 1 root root  152 Nov 11  2017 /usr/bin/python3-pbr
    -rwxr-xr-x 1 root root 4.4M Apr  1 13:46 /usr/bin/python3.6m
    -rwxr-xr-x 1 root root 4.4M Apr  1 13:46 /usr/bin/python3.6
    -rwxr-xr-x 1 root root 3.5M Apr 16 05:51 /usr/bin/python2.7
    lrwxrwxrwx 1 root root    9 Apr 16 22:31 /usr/bin/python2 -> python2.7
    lrwxrwxrwx 1 root root   10 May 15 07:26 /usr/bin/python3m -> python3.6m
    lrwxrwxrwx 1 root root   24 May 17 20:49 /usr/bin/python -> /etc/alternatives/python
    lrwxrwxrwx 1 root root   25 May 17 20:52 /usr/bin/python3 -> /etc/alternatives/python3
    alanjui@SRV-01:~$ sudo update-alternatives --config python
    [sudo] password for alanjui: 
    替代項目 python（提供 /usr/bin/python）有 2 個選擇。
    
      選項       路徑              優先權  狀態
    ------------------------------------------------------------
    * 0            /usr/bin/python3.6   2         自動模式
      1            /usr/bin/python2.7   1         手動模式
      2            /usr/bin/python3.6   2         手動模式
    
    Press <enter> to keep the current choice[*], or type selection number: 0
    alanjui@SRV-01:~$ 



----------
# 影音工具軟體安裝

使用 Synaptic 套件管理員，以批次方式安裝下列軟體：

- 桌面錄影： vokoscreen
- 錄音： audacity
- 影片剪輯：openshot, pitivi 
- 影音播放：vlc
- 影像處理：gimp gimp-dcraw, darktable


----------


# 開發工具安裝


- git
- docker
- guake


## Python
- aconda
- PyCharm


## NodeJS
- n
- node & npm
- WebStorm


## 其它
- VS Code
- VirtualBox
- Heroku CLI
- PostgreSQL
- pgAdmin


## 使用「Ubuntu 軟體」安裝
- PyCharm: PyCharm Pro
- WebStorm: WebStorm
- VS Code: vscode
- GUI Git: GitKraken
- Heroku CLI: heroku



----------


# VirtualBox

使用 Oracle VirtualBox PPA to Ubuntu system 套件庫安裝。

取得官方套件庫的 Public Key

    $ wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
    $ wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -

建立套件庫來源設定檔（ /etc/apt/source.list.d/virtualbox.list ）

    deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic edge

簡略法：

    $ sudo add-apt-repository "deb http://download.virtualbox.org/virtualbox/debian `lsb_release -cs` contrib"

安裝軟體

    sudo apt update
    sudo apt install virtualbox-5.2

驗證作業

    virtualbox


下載 VirtualBox Extension Pack

    https://www.virtualbox.org/kiki/Downloads

點擊以下之連結，以便下載檔案。
VirtualBox 5.2.12 Oracle VM VritualBox Extension Pack / All supported platforms

自檔案總管雙擊已下載檔案，以便啟動安裝作業。


----------


# NodeJS

安裝 NodeJS 套件管理工具：n

    curl -L https://git.io/n-install | bash

驗證

    $ n
    node/10.2.0
    
    $ node -v
    v10.2.0
    
    $ npm -v
    5.6.0
    


----------


# Git
## 産生ssh用公／私鑰
    ssh-keygen


    $ ssh-keygen
    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/alanjui/.ssh/id_rsa): 
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in /home/alanjui/.ssh/id_rsa.
    Your public key has been saved in /home/alanjui/.ssh/id_rsa.pub.
    The key fingerprint is:
    SHA256:U4TPrvgzuO/uG0ljRDdwxVR/yGqnx90tqQwQj8fa0UU alanjui@SRV-01
    The key's randomart image is:
    +---[RSA 2048]----+
    |        oo=+o.E  |
    |       ..+ ..o o |
    |        oo.   + o|
    |       . *o. o  .|
    |        S.= + .  |
    |       o O.o + oo|
    |       o+.o . = +|
    |      o +. o o . |
    |      .BB+  o    |
    +----[SHA256]-----+
    alanjui@SRV-01:~$ ll ~/.ssh
    總計 20
    drwx------  2 alanjui alanjui 4096  5月 24 21:15 ./
    drwxr-xr-x 27 alanjui alanjui 4096  5月 24 21:07 ../
    -rw-------  1 alanjui alanjui 1675  5月 24 21:15 id_rsa
    -rw-r--r--  1 alanjui alanjui  396  5月 24 21:15 id_rsa.pub
    -rw-r--r--  1 alanjui alanjui  884  5月 24 21:07 known_hosts


## 將 ssh 公鑰匯出並儲到各Git Repo
    cat ~/.ssh/id_rsa.pub


## Git 軟體安裝
    $ sudo apt update
    $ sudo apt install git 


## Git軟體設定
    $ git config --global user.email "alanjui.1960@gmail.com"
    $ git config --global user.name "Alan Jui"


## 安裝Git Prompt提示工具

**(1) 安裝軟體**

    cd ~
    git clone https://github.com/magicmonty/bash-git-prompt.git .bash-git-prompt --depth=1

**(2) 設定軟體：在檔案** `~/.bashrc` 內加入如下設定

    ......
    GIT_PROMPT_ONLY_IN_REPO=1
    source ~/.bash-git-prompt/gitprompt.sh



----------


# Docker

使用 Docker 官網提供的 Repo 進行軟體套件安裝作業。


## 基本安裝作業

刪除舊版軟體。

    $ sudo apt-get remove docker docker-engine docker.io

更新作業系統套件庫。

    sudo apt update

備妥安裝前置需求軟體。

    $ sudo apt install \
        apt-transport-https \
        ca-certificates \
        curl \
        software-properties-common

在作業系統加入 Docker 官方套件庫的 GPG Key。

    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

建立套件庫來源設定檔： /etc/apt/source.list.d/docker.list

    deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable

在 5/18 日，stable 版尚無法使用，需先改成 edge ；待 stable 版正式啟用後，再將 edge 改成 stable 。

【註】：Ubuntu 18.04 作業系統的「版本代號」，可用以下指令查詢。

    $ lsb_release -cs

安裝軟體。

    $ sudo apt update
    $ sudo apt install docker-ce

設定檔： 

- /etc/init.d/docker
- /etc/init/docker.conf

SymLink /etc/systemd/system/multiuser.garget.wants/docker.service ==> /lib/systemd/system/docker.service

驗證作業。

    systemctl status docker
    sudo docker run hello-world
    sudo docker ps -a



## 可以非 root 帳號操作 docker 設定作業

~~建立 docker 群組。~~

    sudo groupadd docker

將目前已登入使用者帳號，加入 docker 群組中。

    sudo usermod -aG docker $USER

驗證使用者帳號已加入 docker 群組：
註：可能是 Ubuntu 有ｂｕｇ，執行以下指令前，最好先重開機（只做到登出/登入層級，仍不夠）。

驗證已有 docker 群組：

    $ groups
    alanjui adm cdrom sudo dip plugdev lpadmin sambashare docker


    $ cat /etc/group | grep docker

驗證目前已登入的使用者帳號，被加入到 docker 群組中：

    $ id -Gn
    alanjui adm cdrom sudo dip plugdev lpadmin sambashare docker

驗證作業

    docker run hello-world



## Docker-compose
    sudo apt install docker-compose


----------


# Python


    sudo update
    sudo apt install python-minimal
    python -V
    pip -V



    sudo -H pip install virtualenv virtualenvwrapper
    sudo -H pip install --upgrade pip


    $ sudo apt install python2.7 python-pip
    正在讀取套件清單... 完成
    正在重建相依關係          
    正在讀取狀態資料... 完成
    以下套件為自動安裝，並且已經無用：
      attr gimp-data ibverbs-providers libamd2 libbabl-0.1-0 libcamd2 libccolamd2 libcephfs2 libcholmod3 libgegl-0.3-0 libgimp2.0 libgsl23 libgslcblas0 libgtkspell0
      libibverbs1 libimage-magick-perl libimage-magick-q16-perl libmetis5 libmng2 libnl-route-3-200 libpotrace0 librados2 libumfpack5 python3-scour samba-dsdb-modules
      samba-vfs-modules scour tdb-tools
    以 sudo apt autoremove 將之移除。
    下列的額外套件將被安裝：
      python python-all python-all-dev python-asn1crypto python-cffi-backend python-crypto python-cryptography python-dbus python-dev python-enum34 python-gi python-idna
      python-ipaddress python-keyring python-keyrings.alt python-pkg-resources python-secretstorage python-setuptools python-six python-wheel python-xdg python2.7-dev
    建議套件：
      python-doc python-tk python-crypto-doc python-cryptography-doc python-cryptography-vectors python-dbus-dbg python-dbus-doc python-enum34-doc python-gi-cairo
      libkf5wallet-bin gir1.2-gnomekeyring-1.0 python-fs python-gdata python-keyczar python-secretstorage-doc python2.7-doc
    下列【新】套件將會被安裝：
      python python-all python-all-dev python-asn1crypto python-cffi-backend python-crypto python-cryptography python-dbus python-dev python-enum34 python-gi python-idna
      python-ipaddress python-keyring python-keyrings.alt python-pip python-pkg-resources python-secretstorage python-setuptools python-six python-wheel python-xdg python2.7
      python2.7-dev
    升級 0 個，新安裝 24 個，移除 0 個，有 0 個未被升級。
    需要下載 2,248 kB/2,387 kB 的套件檔。
    此操作完成之後，會多佔用 9,986 kB 的磁碟空間。
    是否繼續進行 [Y/n]？ [Y/n] 



    $ sudo apt install python3-pip python-setuptools-doc
    $ python3 -V

**Basic Usage**
The following lines will illustrate a basic usage and syntax of PIP command. To search packages index execute:

    pip search KEYWORD

to search for packages. Once you obtain the package name use `pip` to install it:

    $ pip install PACKAGE_NAME

Lastly, to remove package enter:

    $ pip uninstall PACKAGE_NAME


----------
# Apps


    sudo groupadd apps
    sudo usermod -aG apps root
    sudo usermod -aG apps alanjui


    sudo mkidr /apps
    sudo chown -R root:apps /apps
    sudo chmod -R 775 /apps




----------
# 套件管理
## 系統通知有套件可供升級時
    apt list --upgradable


![](https://d2mxuefqeaa7sj.cloudfront.net/s_B24A85039E505F12422DD7B29F6A13606C1039D1D30F815B98507EA8ACB3DEF4_1526522752877_2018-05-17+10-02-46+.png)


**安裝套件時特別指明版本**

    sudo apt install <package>=<version>

**已安裝的套件要求重新安裝**

    sudo apt install --reinstall <package>

**自套件原始程式碼編譯及組建**

    sudo apt install python-pip python-dev build-essential


----------


# 安裝PostgreSQL


## 安裝軟體

建立套件庫來源檔案： /etc/apt/sources.list.d/pgdg.list ，設定內容如下：

    $ deb http://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main

取得套件庫的 Public Key

    $ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

安裝套件

    $ sudo apt update
    $ sudo apt install postgresql-10 locales-all postgresql-doc-10 libjson-perl isag gnuplot-doc rcs
    $ sudo apt install pgadmin4

驗證服務已啟動

    $ systemctl status postgresql
    ● postgresql.service - PostgreSQL RDBMS
       Loaded: loaded (/lib/systemd/system/postgresql.service; enabled; vendor preset: enabled)
       Active: active (exited) since Thu 2018-05-24 10:10:33 CST; 9min ago
     Main PID: 21259 (code=exited, status=0/SUCCESS)
        Tasks: 0 (limit: 4915)
       CGroup: /system.slice/postgresql.service
    
     5月 24 10:10:33 SRV-01 systemd[1]: Starting PostgreSQL RDBMS...
     5月 24 10:10:33 SRV-01 systemd[1]: Started PostgreSQL RDBMS.

【參考來源】： https://www.postgresql.org/download/linux/ubuntu/


# 設定服務管理員帳號的密碼

變更 PostgreSQL 預設之管理員（postgres）的密碼

**（1）驗證作業系統已有 postgres 使用者帳號被建立。**

    $ id postgres
    uid=124(postgres) gid=131(postgres) \u7fa4\u7d44=131(postgres),112(ssl-cert)

**(2) 變更「使用作業系統使用者」的密碼**

    $ sudo passwd postgres

**(3) 變更「PostgreSQL資料庫系統使用者（postgres）」的密碼**

    $ sudo -u postgres psql -d template1 -c "ALTER USER postgres WITH PASSWORD 'ChingHai99@';"


## 設定可遙端存取

**(1) 設定 PostgreSQL 相關「設定檔」：**

設定檔目錄路徑：/etc/postgresql/10/main/

在檔案： **pg_hba.conf ，加入下列設定：**

    host all all 192.168.66.0/24 md5

在檔案： **postgresql.conf，加入下列設定：**

    listen_addresses='*'

**(2) 從新啟動 PostgreSQL Service**

在Server端，將 PostgreSQL Service 重新啟動：

    sudo systemctl restart postgresql
    systemctl status postgresql

**(3) 驗證可自遠端連入**

在 Client 端，連入 PostgreSQL Server：

    $ psql -U postgres postgres -h 192.168.66.10
     ...
     \q 



----------
# 系統管理


## 套件管理

描述套件來源：

- /etc/apt/sources.list
- /etc/apt/sources.list.d/<SourceName>.list


## Display Manager

在 17.10 的 Default Display Manager: Wayland ；但在 18.04 又改回： Xorg

**查看作業系統預設的 Display Manger 為何者：**

    ps wwwaux | grep auth

**變更「系統預設的 Display Manager」**

    sudo dpkg-reconfigure lightdm


## Systemd Service 

**啟用**

    sudo systemctl enable <ServiceName>.service  # .service 可略去
    sudo systemctl daemon-reload
    sudo systemctl start <ServiceName>

【註】： 原本位於 /lib/systemd/system/<ServiceName>.service 的檔案，將會被建立 ln 連結，置於路徑： /etc/systemd/system/multi-user.target.wants/<ServiceName>.service 之中。

**變更設定**
每當某 Service 的設定有變更之時（ /lib/systemd/system/<ServiceName>.service ），須以下列操作重新啟動 Service ，以令變更生效：

    sudo systemctl daemon-reload
    sudo systemctl restart <ServiceName>



# 使用者帳號管理


## 增添使用者
    sudo useradd -m amos
    passwd amos
    
    sudo usermod -aG sudo amos



## 刪除使用者
    sudo userdel amos
    sudo rm -r /home/amos



## 切換到 root 帳號
    sudo -s


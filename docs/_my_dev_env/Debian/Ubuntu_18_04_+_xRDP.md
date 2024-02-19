# Ubuntu 18.04 + xRDP
目前的經驗：xRDP 的運作，似乎都與 VNC 有著某種程度的關聯。

以下之安裝與設定，主要說明：在 Ubuntu 18.04 作業系統，如何與 RealVNC 的 VNC Server 相互搭配，構建 xRDP 環境，以便令執行  Microsoft Remote Desktop 之工具程式，可連上 Ubuntu Desktop 18.04 之電腦。


## 1. 安裝 xRDP 軟體套件

在Ubuntu 18.04安裝xRDP 0.9.1

    sudo add-apt-repository ppa:hermlnx/xrdp
    sudo apt-get update
    sudo apt-get install xrdp


參考資訊：

    $ sudo add-apt-repository ppa:hermlnx/xrdp
     This PPA offers a backport of the Bionic xrdp package to Xenial LTS
    
    xrdp offers a graphical login to a remote client using RDP (the Remote Desktop Protocol). xrdp can connect to a locally created X.org session with the xorgxrdp drivers, to a VNC X11 server, and forward to another RDP server.
    
    In the xorgxrdp (which replaces X11RDP) and VNC modes, it provides a fully functional Linux terminal server, offering an X-Window desktop to the user. In the RDP or VNC forwarding mode, any sort of desktop can be used.
    
    If the Xorg server does not start through a RDP session after installation of this PPA packages, you may need to install the xserver-xorg-legacy package and/or set "allowed_users=anybody" in /etc/X11/Xwrapper.config to allow users, once they are logged in through xrdp, to start their own X server.
     更多資訊：https://launchpad.net/~hermlnx/+archive/ubuntu/xrdp
    請輸入 [ENTER] 繼續，或 Ctrl-C 來取消加入動作



## 2. 安裝與設定 xserver 相閞軟體套件

**安裝 xserver-xorg-legacyt 軟體套件**

    sudo apt-get install xserver-xorg-legacy

**執行 xserver-xorg-legacy 設定**

    sudo dpkg-reconfigure xserver-xorg-legacy
    # 可以啟動 X Server 的使用者： 選〔無限制〕

完成上述設定後，將令 Xwrapper.config 設定檔案內容，變更如下：
**/etc/X11/Xwrapper.config**

    allowed_users=anybody


## 3. 重新啟動 xrdp Service

**重新啟動 xrdp service，並檢查其執行狀態**

    sudo systemctl restart xrdp
    sudo systemctl status xrdp

或⋯⋯

    sudo service xrdp restart
    sudo service xrdp status


    $ sudo service xrdp status
    ● xrdp.service - xrdp daemon
       Loaded: loaded (/lib/systemd/system/xrdp.service; enabled; vendor preset: enabled)
       Active: active (running) since Fri 2019-03-29 13:53:56 CST; 2h 28min ago
         Docs: man:xrdp(8)
               man:xrdp.ini(5)
      Process: 1983 ExecStart=/usr/local/sbin/xrdp $XRDP_OPTIONS (code=exited, status=0/SUCCESS)
     Main PID: 2036 (xrdp)
        Tasks: 1 (limit: 4915)
       CGroup: /system.slice/xrdp.service
               └─2036 /usr/local/sbin/xrdp
    
     3月 29 16:12:41 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] Closed socket 18 (AF_INET 127.0.0.1:35650)
     3月 29 16:12:41 SRV-01 xrdp[4631]: (4631)(139720457262912)[INFO ] The following channel is allowed: rdpdr (0)
     3月 29 16:12:42 SRV-01 xrdp[4631]: (4631)(139720457262912)[INFO ] The following channel is allowed: rdpsnd (1)
     3月 29 16:12:42 SRV-01 xrdp[4631]: (4631)(139720457262912)[INFO ] The following channel is allowed: cliprdr (2)
     3月 29 16:12:42 SRV-01 xrdp[4631]: (4631)(139720457262912)[INFO ] The following channel is allowed: drdynvc (3)
     3月 29 16:12:42 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] The allow channel list now initialized for this session
     3月 29 16:16:07 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] Closed socket 12 (AF_INET 192.168.66.10:3389)
     3月 29 16:16:08 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] xrdp_mm_module_cleanup
     3月 29 16:16:08 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] Closed socket 19 (AF_UNIX)
     3月 29 16:16:08 SRV-01 xrdp[4631]: (4631)(139720457262912)[DEBUG] Closed socket 20 (AF_UNIX)


----------


# 與 xRDP Service 運作相關設定


## VNC Server
![Xvnc.gif (3567 bytes)](https://www.hep.phy.cam.ac.uk/vnc_docs/Xvnc.gif)


xvnc 指：X-Based VNC Server。（參考： https://www.hep.phy.cam.ac.uk/vnc_docs/xvnc.html ）

VNC Connect 6.2.0 安裝於 Ubuntu 作業系統，尚需透過 xvnc 才能正運作。所以，當使用 VNC Viewer 連上： Ubuntu Desktop 18.04 之電腦，若是發生 Grey Screen 狀況，無法正常運作時，則就需要進行  [switch desktop environment](https://help.realvnc.com/hc/en-us/articles/360003474792) 作業，以解決此問題。



## xRDP Service 設定

 
xrdp.service 檔案的設定內容如下。此設定雖未指定User與Group，但代表使用預設，指定為 root:root 。

**/lib/systemd/system/xrdp.service**

    [Unit]
    Description=xrdp daemon
    Documentation=man:xrdp(8) man:xrdp.ini(5)
    Requires=xrdp-sesman.service
    After=network.target xrdp-sesman.service
    
    [Service]
    Type=forking
    PIDFile=/var/run/xrdp.pid
    EnvironmentFile=-/etc/sysconfig/xrdp
    EnvironmentFile=-/etc/default/xrdp
    ExecStart=/usr/local/sbin/xrdp $XRDP_OPTIONS
    ExecStop=/usr/local/sbin/xrdp $XRDP_OPTIONS --kill
    
    [Install]
    WantedBy=multi-user.target


**配合上述 xrdp.service 之設定。故檔案 xrdp.pid ，其預設之檔案擁有者，無論「使用者」與「群組」，皆為： root 。**

    $ ls -al /run/xrdp.pid

若是設定不對，可依以下指令，**變更檔案 xrdp.pid 的擁有者為 root。**

    $ sudo chown -R root:root /run/xrdp.pid
    $ ls -al /run/xrdp.pid
    -rw------- 1 root root 4  3月 29 13:53 /run/xrdp.pid



## xRDP sesman Service

檢視 xrdp-sesman.service 設定檔，確認沒有與 User / Group 相關的設定：

**/lib/systemd/system/xrdp-sesman.service**

    [Unit]
    Description=xrdp session manager
    Documentation=man:xrdp-sesman(8) man:sesman.ini(5)
    After=network.target
    StopWhenUnneeded=true
    BindsTo=xrdp.service
    
    [Service]
    Type=forking
    PIDFile=/var/run/xrdp-sesman.pid
    EnvironmentFile=-/etc/sysconfig/xrdp
    EnvironmentFile=-/etc/default/xrdp
    ExecStart=/usr/local/sbin/xrdp-sesman $SESMAN_OPTIONS
    ExecStop=/usr/local/sbin/xrdp-sesman $SESMAN_OPTIONS --kill
    
    [Install]
    WantedBy=multi-user.target

設定檔中之內容，若有變更 User、Group ，將之變更成 root 。


    ...
    User=root
    Group=root
    ...





----------


# 異常問題排解


## 無法啟動 xrdp service — PID file 權限不足

啟動 xrdp service  ，卻發生如下之錯誤….

    ...
    xrdp.service: PID file /var/run/xrdp/xrdp.pid not readable (yet?) after start: No such file or directory
    ...


重

----------


# 在 Debian 9 安裝 xRDP

**（1）安裝軟體套件及設定**


    sudo apt install xrdp guacamole

【註】：


1. 不用安裝 xserver-xorg-legacy 套件
2. /etc/X11/Xwrapper.config 設定檔的內容，使用預設不要改：
    allowed_users=console


**（2）啟動 Service**

    sudo reboot

不用執行：

    sudo systemctl daemon-reload
    sudo systemctl enable xrdp
    sudo systemctl restart xrdp

**（3）XRDP Client 連線**
連線時的「使用者帳號」，使用有「login」權限者尸。


- protocol: xvnc
- user: 
- password: 


----------


## 使用 xrdp 帳號

確認作業系統已建立「群組： xrdp」、「使用者：xrdp」：

    #cat /etc/groups | grep xrdp
    $ groups xrdp
    xrdp : xrdp
    
    #cat /etc/passwd | grep xrdp
    $ id xrdp
    uid=123(xrdp) gid=130(xrdp) 群組=130(xrdp)

將 user: root 加入 group: xrdp

    $ sudo usermod -a -G xrdp root
    
    $ id root
    uid=0(root) gid=0(root) 群組=0(root),130(xrdp)



    $ ll /var/run/xrdp/xrdp.pid
    -rw------- 1 xrdp xrdp 4 May 13 13:57 /var/run/xrdp/xrdp.pid
    
    $ sudo chmod 660 /var/run/xrdp/xrdp.pid
    
    $ ll /var/run/xrdp/xrdp.pid
    -rw-rw---- 1 xrdp xrdp 4 May 13 13:57 /var/run/xrdp/xrdp.pid



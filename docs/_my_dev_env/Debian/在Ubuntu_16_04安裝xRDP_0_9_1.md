# 在Ubuntu 16.04安裝xRDP 0.9.1

    sudo add-apt-repository ppa:hermlnx/xrdp
    sudo apt-get update
    sudo apt-get install xrdp

/etc/X11/Xwrapper.config

    allowed_users=anybody


    sudo apt-get install xserver-xorg-legacy


    sudo dpkg-reconfigure xserver-xorg-legacy
    # 可以啟動 X Server 的使用者： 選〔無限制〕
    

**重新啟動 xrdp service**

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



參考資訊：

    $ sudo add-apt-repository ppa:hermlnx/xrdp
     This PPA offers a backport of the Bionic xrdp package to Xenial LTS
    
    xrdp offers a graphical login to a remote client using RDP (the Remote Desktop Protocol). xrdp can connect to a locally created X.org session with the xorgxrdp drivers, to a VNC X11 server, and forward to another RDP server.
    
    In the xorgxrdp (which replaces X11RDP) and VNC modes, it provides a fully functional Linux terminal server, offering an X-Window desktop to the user. In the RDP or VNC forwarding mode, any sort of desktop can be used.
    
    If the Xorg server does not start through a RDP session after installation of this PPA packages, you may need to install the xserver-xorg-legacy package and/or set "allowed_users=anybody" in /etc/X11/Xwrapper.config to allow users, once they are logged in through xrdp, to start their own X server.
     更多資訊：https://launchpad.net/~hermlnx/+archive/ubuntu/xrdp
    請輸入 [ENTER] 繼續，或 Ctrl-C 來取消加入動作
    


【參考文件】： 
Installing xrdp 0.9.1 on Ubuntu 16.04 Xenial： https://netdevops.me/2017/installing-xrdp-0.9.1-on-ubuntu-16.04-xenial/


----------


# 異常問題排解


## 無法啟動 xrdp service — PID file 權限不足

啟動 xrdp service  ，卻發生如下之錯誤….

    ...
    xrdp.service: PID file /var/run/xrdp/xrdp.pid not readable (yet?) after start: No such file or directory
    ...

【詳細資訊】：

    $ sudo systemctl status xrdp
    ● xrdp.service - xrdp daemon
       Loaded: loaded (/lib/systemd/system/xrdp.service; enabled; vendor preset: enabled)
       Active: active (running) since Sun 2018-05-13 12:04:35 CST; 13s ago
         Docs: man:xrdp(8)
               man:xrdp.ini(5)
      Process: 26007 ExecStop=/usr/sbin/xrdp $XRDP_OPTIONS --kill (code=exited, status=0/SUCCESS)
      Process: 26074 ExecStart=/usr/sbin/xrdp $XRDP_OPTIONS (code=exited, status=0/SUCCESS)
      Process: 26056 ExecStartPre=/bin/sh /usr/share/xrdp/socksetup (code=exited, status=0/SUCCESS)
     Main PID: 26077 (xrdp)
        Tasks: 1
       Memory: 1.7M
          CPU: 13ms
       CGroup: /system.slice/xrdp.service
               └─26077 /usr/sbin/xrdp
    
    May 13 12:04:34 srv-01 systemd[1]: Starting xrdp daemon...
    May 13 12:04:34 srv-01 xrdp[26074]: (26074)(139744632137472)[DEBUG] Testing if xrdp can listen on 0.0.0.0 port 3389.
    May 13 12:04:34 srv-01 xrdp[26074]: (26074)(139744632137472)[DEBUG] Closed socket 7 (AF_INET6 :: port 3389)
    May 13 12:04:34 srv-01 systemd[1]: xrdp.service: PID file /var/run/xrdp/xrdp.pid not readable (yet?) after start: No such file or directory
    May 13 12:04:35 srv-01 systemd[1]: Started xrdp daemon.
    May 13 12:04:36 srv-01 xrdp[26077]: (26077)(139744632137472)[INFO ] starting xrdp with pid 26077
    May 13 12:04:36 srv-01 xrdp[26077]: (26077)(139744632137472)[INFO ] listening to port 3389 on 0.0.0.0
    $ 
    

檢查 xrdp.pip 檔案之權限，為 User: xrdp / Group: xrdp 所使用：

    $ ll /var/run/xrdp/
    總計 8
    drwxr-xr-x  3 xrdp xrdp  100 May 13 13:02 ./
    drwxr-xr-x 33 root root 1060 May 13 13:02 ../
    drwxrwsrwt  2 root xrdp   40 May 13 13:02 sockdir/
    -rw-------  1 xrdp xrdp    4 May 13 13:02 xrdp.pid
    -rw-------  1 root root    4 May 13 13:02 xrdp-sesman.pid
    
    $ sudo chown -R root:root /var/run/xrdp

或⋯⋯

**變更檔案 xrdp.pid 的擁有者為 root**


    $ ls -al /run/xrdp.pid
    $ sudo chown -R root:root /run/xrdp.pid
    $ ls -al /run/xrdp.pid
    -rw------- 1 root root 4  3月 29 13:53 /run/xrdp.pid

**確認 xrdp.service 中使用者與群組之設定**

檢查 xrdp.service 檔案的設定，User與Group的設定皆指定為 root：

/lib/systemd/system/xrdp.service

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
    #User=root
    #Group=root
    #PermissionsStartOnly=true
    ExecStartPre=/bin/sh /usr/share/xrdp/socksetup
    ExecStart=/usr/sbin/xrdp $XRDP_OPTIONS
    ExecStop=/usr/sbin/xrdp $XRDP_OPTIONS --kill
    
    [Install]
    WantedBy=multi-user.target


檢視 xrdp-sesman.service 設定檔，確認沒有與 User / Group 相關的設定：

/lib/systemd/system/xrdp-sesman.service

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



變更設定如下：

    ...
    User=root
    Group=root
    ...

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


重新啟動 xrdp.service


    sudo systemctl daemon-reload
    sudo systemctl enable xrdp.service
    sudo systemctl restart xrdp
    sudo systemctl status xrdp


【安裝時參考資訊】：

    $ sudo systemctl enable xrdp.service
    Synchronizing state of xrdp.service with SysV init with /lib/systemd/systemd-sysv-install...
    Executing /lib/systemd/systemd-sysv-install enable xrdp
    insserv: warning: script 'S02mLNHIICC' missing LSB tags and overrides
    insserv: warning: script 'mLNHIICC' missing LSB tags and overrides
    insserv: warning: script 'S02mLNHIICC' missing LSB tags and overrides
    insserv: warning: script 'mLNHIICC' missing LSB tags and overrides




----------



    dpkg -l xrdp x11rdp



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


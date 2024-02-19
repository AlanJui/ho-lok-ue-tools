# VNC Server 安裝筆記

# Ubuntu Desktop 螢幕分享

已驗證可在 16.04, 18.04 正常執行。

**（1）先在 Ubuntu Desktop 電腦，透過，完成「螢幕分享」的設定工作。**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_658302B4FACACF076DDCB0704829364CC3EE5F7037E5F4737FCB9B1DBABBDAE1_1524743791656_image.png)


**（2）打開「終端機」，輸入以下指令，要求 vnc server 對於畫面資料，無需進行加密處理。**

    $ gsettings set org.gnome.Vino require-encryption false


**（3）在另一台電腦，執行 vnc client軟體，如：realvnc viewer**


----------


# 使用 VNC Server: vnc4server

已驗證可在 DeepIn 運作。

## 安裝及設定作業

**（1）安裝 VNC Server**
在 Server 安裝 VNC Server 軟體。

    sudo apt-get update
    sudo apt install vnc4server

**（2）在系統新增 vnc 使用者帳號**

新增使用者帳號：vnc。

    $ sudo adduser vnc

將使用者帳號 vnc ，加入 sudo 群組。

    $ sudo gpasswd -a vnc sudo

**（3）啟動 vnc server** 

切換使用者，改為：vnc

    sudo su - vnc

啟動 vnc server

    vncserver -localhost no

【註】：上述的 vncserver 指令，若是首次執行，會被要求輸入 vnc client 連線時的「密碼」。密碼長度需為： 6 - 8 個字元。

若欲終止 vnc server 的執行，請用以下指令：

    vncserver -kill :1


**（4）使用 vnc client 連線 vnc server**

Safarill

    vnc://192.168.66.72:5901



## Step 4 — Creating a VNC Service File

Next, we'll set up the VNC server as a systemd service. This will make it possible to start, stop, and restart it as needed, like any other systemd service.

First, create a new unit file called `/etc/systemd/system/vncserver@.service` using your favorite text editor:

    sudo nano /etc/systemd/system/vncserver@.service

Copy and paste the following into it. Be sure to change the value of **User** and the username in the value of **PIDFILE** to match your username.

    [Unit]
    Description=Start TightVNC server at startup
    After=syslog.target network.target
    
    [Service]
    Type=forking
    User=vnc
    PAMName=login
    PIDFile=/home/vnc/.vnc/%H:%i.pid
    ExecStartPre=-/usr/bin/vncserver -kill :%i > /dev/null 2>&1
    ExecStart=/usr/bin/vncserver -depth 24 -geometry 1280x800 :%i
    ExecStop=/usr/bin/vncserver -kill :%i
    
    [Install]
    WantedBy=multi-user.target

Save and close the file.
Next, make the system aware of the new unit file.

    sudo systemctl daemon-reload

Enable the unit file.

    sudo systemctl enable vncserver@1.service

The `1` following the `@` sign signifies which display number the service should appear over, in this case the default `:1` as was discussed above. 
Stop the current instance of the VNC server if it's still running.

    vncserver -kill :1

Then start it as you would start any other systemd service.

    sudo systemctl start vncserver@1

You can verify that it started with this command:

    sudo systemctl status vncserver@1

If it started correctly, the output should look like this:
Output

    vncserver@1.service - TightVNC server on Ubuntu 16.04
       Loaded: loaded (/etc/systemd/system/vncserver@.service; enabled; vendor preset: enabled)
       Active: active (running) since Mon 2016-04-25 03:21:34 EDT; 6s ago
      Process: 2924 ExecStop=/usr/bin/vncserver -kill :%i (code=exited, status=0/SUCCESS)
    
    ...
    
     systemd[1]: Starting TightVNC server on Ubuntu 16.04...
     systemd[2938]: pam_unix(login:session): session opened for user finid by (uid=0)
     systemd[2949]: pam_unix(login:session): session opened for user finid by (uid=0)
     systemd[1]: Started TightVNC server on Ubuntu 16.04.



----------



    $ apt-get install gnome-panel gnome-settings-daemon metacity nautilus gnome-terminal

/etc/vnc/xstartup

    #!/bin/sh
    
    export XKL_XMODMAP_DISABLE=1
    unset SESSION_MANAGER
    unset DBUS_SESSION_BUS_ADDRESS
    
    [ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
    [ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
    xsetroot -solid grey
    vncconfig -iconic &
    
    gnome-panel &
    gnome-settings-daemon &
    metacity &
    nautilus &
    gnome-terminal &


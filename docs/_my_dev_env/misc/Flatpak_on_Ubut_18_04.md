# Flatpak on Ubut 18.04


       echo $XDG_DATA_DIRS
    /usr/share/ubuntu:/usr/local/share:/usr/share:/var/lib/snapd/desktop
    
      ~  11:02:42 
       flatpak --version
    Flatpak 1.0.9
    
      ~  11:03:00 
       flatpak update
    Looking for updates...
    
      ~  11:03:05 
       ll /var/lib/flatpak 
    總計 12
    drwxr-xr-x  3 root root 4096  3月 16 10:59 ./
    drwxr-xr-x 87 root root 4096  3月 16 10:59 ../
    -rw-r--r--  1 root root    0  3月 16 10:59 .changed
    drwxr-xr-x  7 root root 4096  3月 16 10:59 repo/
    
      ~  11:04:52 
       sudo add-apt-repository ppa:alexlarsson/flatpak
    [sudo] password for alanjui: 
      Linux application sandboxing and distribution framework
     更多資訊：https://launchpad.net/~alexlarsson/+archive/ubuntu/flatpak
    請按下 [ENTER] 繼續或 Ctrl-C 取消加入。
    
    略過:1 http://dl.google.com/linux/chrome/deb stable InRelease
    已有:2 http://dl.google.com/linux/chrome/deb stable Release                      
    已有:3 https://deb.nodesource.com/node_10.x bionic InRelease                           ......
    已有:21 http://ppa.launchpad.net/yannubuntu/boot-repair/ubuntu bionic InRelease
    取得 88.7 kB 用了 3秒 (29.0 kB/s)                  
    正在讀取套件清單... 完成
    正在重建相依關係       
    正在讀取狀態資料... 完成
    可升級 1 個套件。執行 apt list --upgradable 檢視
    
      ~  11:06:01 
       sudo apt list --upgradable
    正在列出... 完成
    flatpak/bionic 1.6.2-flatpak1~bionic amd64 [可升級自：1.0.9-0ubuntu0.1]
    N: 有 3 個額外版本。請以 -a 檢視
    
      ~  11:06:09 
       sudo apt upgrade
    正在讀取套件清單... 完成
    正在重建相依關係          
    正在讀取狀態資料... 完成
    籌備升級中... 完成
    以下套件為自動安裝，並且已經無用：
      libflatpak0
    使用 'sudo apt autoremove' 將之移除。
    下列套件將會被升級：
      flatpak
    升級 1 個，新安裝 0 個，移除 0 個，有 0 個未被升級。
    需要下載 1,101 kB 的套件檔。
    此操作完成之後，會多佔用 2,141 kB 的磁碟空間。
    是否繼續進行 [Y/n]？ [Y/n] y
    下載:1 http://ppa.launchpad.net/alexlarsson/flatpak/ubuntu bionic/main amd64 flatpak amd64 1.6.2-flatpak1~bionic [1,101 kB]
    取得 1,101 kB 用了 3秒 (401 kB/s)                  
    （讀取資料庫 ... 目前共安裝了 377672 個檔案和目錄。）
    準備解開 .../flatpak_1.6.2-flatpak1~bionic_amd64.deb ...
    Unpacking flatpak (1.6.2-flatpak1~bionic) over (1.0.9-0ubuntu0.1) ...
    設定 flatpak (1.6.2-flatpak1~bionic) ...
    安裝新版的設定檔 /etc/X11/Xsession.d/20flatpak ...
    安裝新版的設定檔 /etc/profile.d/flatpak.sh ...
    flatpak-system-helper.service is a disabled or a static unit not running, not starting it.
    Removing obsolete conffile /etc/dbus-1/system.d/org.freedesktop.Flatpak.SystemHelper.conf ...
    Processing triggers for dbus (1.12.2-1ubuntu1.1) ...
    Processing triggers for man-db (2.8.3-2ubuntu0.1) ...




----------


https://github.com/flatpak/flatpak/issues/1286


[flatpak/flatpak#1286](https://github.com/flatpak/flatpak/issues/1286)




https://askubuntu.com/questions/910821/programs-installed-via-snap-not-showing-up-in-launcher



https://github.com/flatpak/flatpak/issues/1308


[flatpak/flatpak#1308](https://github.com/flatpak/flatpak/issues/1308)


https://www.reddit.com/r/linuxquestions/comments/8g81sd/adding_a_flatpak_shortcut_to_my_ubuntu_1803/



    alias gimp="flatpak run org.gimp.GIMP"


https://askubuntu.com/questions/1138155/ubuntu-on-wayland



https://askubuntu.com/questions/112186/how-do-you-create-a-custom-application-launcher-in-gnome-shell



---
sidebar: auto
---

# Ubuntu 伺服器常見問題與狀況排除指引

## 更新套件指令無效

執行完 apt upgrade 指令後，卻有套件未進行更新，仍延用原先版
本。

### 狀況一

    $ sudo apt update
    [sudo] alanjui 的密碼：
    已有:1 http://tw.archive.ubuntu.com/ubuntu jammy InRelease
    已有:2 http://tw.archive.ubuntu.com/ubuntu jammy-updates InRelease
    已有:3 http://tw.archive.ubuntu.com/ubuntu jammy-backports InRelease
    已有:4 https://brave-browser-apt-release.s3.brave.com stable InRelease
    已有:5 https://dl.google.com/linux/chrome/deb stable InRelease
    已有:6 https://packages.microsoft.com/ubuntu/20.04/mssql-server-preview focal InRelease
    已有:7 https://cli.github.com/packages stable InRelease
    下載:8 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
    下載:9 https://esm.ubuntu.com/apps/ubuntu jammy-apps-security InRelease [7,535 B]
    已有:10 https://ppa.launchpadcontent.net/neovim-ppa/stable/ubuntu jammy InRelease
    下載:11 https://esm.ubuntu.com/apps/ubuntu jammy-apps-updates InRelease [7,459 B]
    下載:12 https://esm.ubuntu.com/infra/ubuntu jammy-infra-security InRelease [7,453 B]
    下載:13 https://esm.ubuntu.com/infra/ubuntu jammy-infra-updates InRelease [7,452 B]
    已有:14 https://ppa.launchpadcontent.net/obsproject/obs-studio/ubuntu jammy InRelease
    已有:15 https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/jammy pgadmin4 InRelease
    取得 140 kB 用了 2s (57.4 kB/s)
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    可升級 8 個套件。執行 apt list --upgradable 檢視
    W: https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/jammy/dists/pgadmin4/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.

    $ sudo apt list --upgradable
    正在列出... 完成
    imagemagick-6-common/jammy-apps-security,jammy-apps-security 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 all [可升級自：8:6.9.11.60+dfsg-1.3build2]
    imagemagick-6.q16/jammy-apps-security 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 amd64 [可升級自：8:6.9.11.60+dfsg-1.3build2]
    imagemagick/jammy-apps-security 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 amd64 [可升級自：8:6.9.11.60+dfsg-1.3build2]
    libmagick++-6.q16-8/jammy-apps-security 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 amd64 [可升級自：8:6.9.11.60+dfsg-1.3build2]
    libmagickcore-6.q16-6-extra/jammy-apps-security 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 amd64 [可升級自：8:6.9.11.60+dfsg-1.3build2]
    libmagickcore-6.q16-6/jammy-apps-security 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 amd64 [可升級自：8:6.9.11.60+dfsg-1.3build2]
    libmagickwand-6.q16-6/jammy-apps-security 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 amd64 [可升級自：8:6.9.11.60+dfsg-1.3build2]
    libopenexr25/jammy-apps-security 2.5.7-1ubuntu0.1~esm1 amd64 [可升級自：2.5.7-1]

    $ sudo apt-get --with-new-pkgs upgrade
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    籌備升級中... 完成
    下列套件將會被升級：
      imagemagick imagemagick-6-common imagemagick-6.q16 libmagick++-6.q16-8 libmagickcore-6.q16-6 libmagickcore-6.q16-6-extra
      libmagickwand-6.q16-6 libopenexr25
    升級 8 個，新安裝 0 個，移除 0 個，有 0 個未被升級。
    需要下載 3,426 kB 的套件檔。
    此操作完成之後，會空出 16.4 kB 的磁碟空間。
    是否繼續進行 [Y/n]？ [Y/n] y
    下載:1 https://esm.ubuntu.com/apps/ubuntu jammy-apps-security/main amd64 imagemagick-6-common all 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 [65.0 kB]
    下載:2 https://esm.ubuntu.com/apps/ubuntu jammy-apps-security/main amd64 libmagickcore-6.q16-6 amd64 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 [1,790 kB]
    下載:3 https://esm.ubuntu.com/apps/ubuntu jammy-apps-security/main amd64 libmagickwand-6.q16-6 amd64 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 [327 kB]
    下載:4 https://esm.ubuntu.com/apps/ubuntu jammy-apps-security/main amd64 imagemagick-6.q16 amd64 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 [224 kB]
    下載:5 https://esm.ubuntu.com/apps/ubuntu jammy-apps-security/main amd64 imagemagick amd64 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 [14.6 kB]
    下載:6 https://esm.ubuntu.com/apps/ubuntu jammy-apps-security/main amd64 libmagick++-6.q16-8 amd64 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 [157 kB]
    下載:7 https://esm.ubuntu.com/apps/ubuntu jammy-apps-security/main amd64 libopenexr25 amd64 2.5.7-1ubuntu0.1~esm1 [779 kB]
    下載:8 https://esm.ubuntu.com/apps/ubuntu jammy-apps-security/main amd64 libmagickcore-6.q16-6-extra amd64 8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1 [70.1 kB]
    取得 3,426 kB 用了 4s (964 kB/s)
    （讀取資料庫 ... 目前共安裝了 551647 個檔案和目錄。）
    正在準備解包 .../0-imagemagick-6-common_8%3a6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1_all.deb……
    Unpacking imagemagick-6-common (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) over (8:6.9.11.60+dfsg-1.3build2) ...
    正在準備解包 .../1-libmagickcore-6.q16-6_8%3a6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1_amd64.deb……
    Unpacking libmagickcore-6.q16-6:amd64 (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) over (8:6.9.11.60+dfsg-1.3build2) ...
    正在準備解包 .../2-libmagickwand-6.q16-6_8%3a6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1_amd64.deb……
    Unpacking libmagickwand-6.q16-6:amd64 (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) over (8:6.9.11.60+dfsg-1.3build2) ...
    正在準備解包 .../3-imagemagick-6.q16_8%3a6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1_amd64.deb……
    Unpacking imagemagick-6.q16 (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) over (8:6.9.11.60+dfsg-1.3build2) ...
    正在準備解包 .../4-imagemagick_8%3a6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1_amd64.deb……
    Unpacking imagemagick (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) over (8:6.9.11.60+dfsg-1.3build2) ...
    正在準備解包 .../5-libmagick++-6.q16-8_8%3a6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1_amd64.deb……
    Unpacking libmagick++-6.q16-8:amd64 (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) over (8:6.9.11.60+dfsg-1.3build2) ...
    正在準備解包 .../6-libopenexr25_2.5.7-1ubuntu0.1~esm1_amd64.deb……
    Unpacking libopenexr25:amd64 (2.5.7-1ubuntu0.1~esm1) over (2.5.7-1) ...
    正在準備解包 .../7-libmagickcore-6.q16-6-extra_8%3a6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1_amd64.deb……
    Unpacking libmagickcore-6.q16-6-extra:amd64 (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) over (8:6.9.11.60+dfsg-1.3build2) ...
    設定 imagemagick-6-common (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) ...
    設定 libopenexr25:amd64 (2.5.7-1ubuntu0.1~esm1) ...
    設定 libmagickcore-6.q16-6:amd64 (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) ...
    設定 libmagickwand-6.q16-6:amd64 (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) ...
    設定 libmagick++-6.q16-8:amd64 (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) ...
    設定 libmagickcore-6.q16-6-extra:amd64 (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) ...
    設定 imagemagick-6.q16 (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) ...
    設定 imagemagick (8:6.9.11.60+dfsg-1.3ubuntu0.22.04.1+esm1) ...
    執行 bamfdaemon (0.5.6+22.04.20220217-0ubuntu1) 的觸發程式……
    Rebuilding /usr/share/applications/bamf-2.index...
    執行 desktop-file-utils (0.26-1ubuntu3) 的觸發程式……
    執行 hicolor-icon-theme (0.17-2) 的觸發程式……
    執行 gnome-menus (3.36.0-1ubuntu3) 的觸發程式……
    執行 libc-bin (2.35-0ubuntu3.1) 的觸發程式……
    執行 man-db (2.10.2-1) 的觸發程式……
    執行 mailcap (3.70+nmu1ubuntu1) 的觸發程式……

    $ sudo apt update
    已有:1 http://tw.archive.ubuntu.com/ubuntu jammy InRelease
    已有:2 http://tw.archive.ubuntu.com/ubuntu jammy-updates InRelease
    已有:3 http://tw.archive.ubuntu.com/ubuntu jammy-backports InRelease
    已有:4 https://dl.google.com/linux/chrome/deb stable InRelease
    已有:5 https://brave-browser-apt-release.s3.brave.com stable InRelease
    已有:6 https://packages.microsoft.com/ubuntu/20.04/mssql-server-preview focal InRelease
    已有:7 https://cli.github.com/packages stable InRelease
    下載:8 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
    已有:9 https://esm.ubuntu.com/apps/ubuntu jammy-apps-security InRelease
    已有:10 https://ppa.launchpadcontent.net/neovim-ppa/stable/ubuntu jammy InRelease
    已有:11 https://esm.ubuntu.com/apps/ubuntu jammy-apps-updates InRelease
    已有:12 https://esm.ubuntu.com/infra/ubuntu jammy-infra-security InRelease
    已有:13 https://esm.ubuntu.com/infra/ubuntu jammy-infra-updates InRelease
    已有:14 https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/jammy pgadmin4 InRelease
    已有:15 https://ppa.launchpadcontent.net/obsproject/obs-studio/ubuntu jammy InRelease
    取得 110 kB 用了 2s (45.0 kB/s)
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    所有套件都是最新。
    W: https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/jammy/dists/pgadmin4/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.

### 狀況二

    $ sudo apt update
    已有:1 http://tw.archive.ubuntu.com/ubuntu jammy InRelease
    已有:2 http://tw.archive.ubuntu.com/ubuntu jammy-updates InRelease
    已有:3 http://tw.archive.ubuntu.com/ubuntu jammy-backports InRelease
    已有:4 https://brave-browser-apt-release.s3.brave.com stable InRelease
    已有:5 https://dl.google.com/linux/chrome/deb stable InRelease
    已有:6 https://cli.github.com/packages stable InRelease
    下載:7 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
    已有:8 https://ppa.launchpadcontent.net/neovim-ppa/stable/ubuntu jammy InRelease
    已有:9 https://packages.microsoft.com/ubuntu/20.04/mssql-server-preview focal InRelease
    已有:10 https://ppa.launchpadcontent.net/obsproject/obs-studio/ubuntu jammy InRelease
    已有:11 https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/jammy pgadmin4 InRelease
    取得 110 kB 用了 3s (41.9 kB/s)
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    可升級 11 個套件。執行 apt list --upgradable 檢視
    W: https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/jammy/dists/pgadmin4/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.

    $ apt list --upgradable
    正在列出... 完成
    gnome-initial-setup/jammy-updates 42.0.1-1ubuntu2.1 amd64 [可升級自：42.0.1-1ubuntu2]
    gnome-remote-desktop/jammy-updates 42.7-0ubuntu1 amd64 [可升級自：42.4-0ubuntu1]
    python3-software-properties/jammy-updates,jammy-updates 0.99.22.5 all [可升級自：0.99.22.4]
    software-properties-common/jammy-updates,jammy-updates 0.99.22.5 all [可升級自：0.99.22.4]
    software-properties-gtk/jammy-updates,jammy-updates 0.99.22.5 all [可升級自：0.99.22.4]
    update-notifier-common/jammy-updates,jammy-updates 3.192.54.5 all [可升級自：3.192.54]
    update-notifier/jammy-updates 3.192.54.5 amd64 [可升級自：3.192.54]
    xserver-common/jammy-updates,jammy-updates 2:21.1.3-2ubuntu2.6 all [可升級自：2:21.1.3-2ubuntu2.5]
    xserver-xephyr/jammy-updates 2:21.1.3-2ubuntu2.6 amd64 [可升級自：2:21.1.3-2ubuntu2.5]
    xserver-xorg-core/jammy-updates 2:21.1.3-2ubuntu2.6 amd64 [可升級自：2:21.1.3-2ubuntu2.5]
    xserver-xorg-legacy/jammy-updates 2:21.1.3-2ubuntu2.6 amd64 [可升級自：2:21.1.3-2ubuntu2.5]

    $ sudo apt upgrade
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    籌備升級中... 完成
    The following security updates require Ubuntu Pro with 'esm-apps' enabled:
      imagemagick libopenexr25 libmagick++-6.q16-8 libmagickcore-6.q16-6-extra
      libmagickwand-6.q16-6 imagemagick-6.q16 libmagickcore-6.q16-6
      imagemagick-6-common
    Learn more about Ubuntu Pro at https://ubuntu.com/pro
    下列套件將會維持其原有版本：
      gnome-initial-setup gnome-remote-desktop python3-software-properties software-properties-common software-properties-gtk
      update-notifier update-notifier-common xserver-common xserver-xephyr xserver-xorg-core xserver-xorg-legacy
    升級 0 個，新安裝 0 個，移除 0 個，有 11 個未被升級。

    $ sudo apt-get dist-upgrade
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    籌備升級中... 完成
    下列套件將會維持其原有版本：
      gnome-initial-setup gnome-remote-desktop python3-software-properties software-properties-common software-properties-gtk
      update-notifier update-notifier-common xserver-common xserver-xephyr xserver-xorg-core xserver-xorg-legacy
    升級 0 個，新安裝 0 個，移除 0 個，有 11 個未被升級。



    $ sudo su

    root@SRV-2020:/home/alanjui# apt update
    已有:1 http://tw.archive.ubuntu.com/ubuntu jammy InRelease
    已有:2 http://tw.archive.ubuntu.com/ubuntu jammy-updates InRelease
    已有:3 http://tw.archive.ubuntu.com/ubuntu jammy-backports InRelease
    已有:4 https://brave-browser-apt-release.s3.brave.com stable InRelease
    已有:5 https://dl.google.com/linux/chrome/deb stable InRelease
    已有:6 https://cli.github.com/packages stable InRelease
    下載:7 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
    已有:8 https://ppa.launchpadcontent.net/neovim-ppa/stable/ubuntu jammy InRelease
    已有:9 https://packages.microsoft.com/ubuntu/20.04/mssql-server-preview focal InRelease
    已有:10 https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/jammy pgadmin4 InRelease
    已有:11 https://ppa.launchpadcontent.net/obsproject/obs-studio/ubuntu jammy InRelease
    取得 110 kB 用了 2s (44.9 kB/s)
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    可升級 11 個套件。執行 apt list --upgradable 檢視
    W: https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/jammy/dists/pgadmin4/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.

    root@SRV-2020:/home/alanjui# apt list --upgradable
    正在列出... 完成
    gnome-initial-setup/jammy-updates 42.0.1-1ubuntu2.1 amd64 [可升級自：42.0.1-1ubuntu2]
    gnome-remote-desktop/jammy-updates 42.7-0ubuntu1 amd64 [可升級自：42.4-0ubuntu1]
    python3-software-properties/jammy-updates,jammy-updates 0.99.22.5 all [可升級自：0.99.22.4]
    software-properties-common/jammy-updates,jammy-updates 0.99.22.5 all [可升級自：0.99.22.4]
    software-properties-gtk/jammy-updates,jammy-updates 0.99.22.5 all [可升級自：0.99.22.4]
    update-notifier-common/jammy-updates,jammy-updates 3.192.54.5 all [可升級自：3.192.54]
    update-notifier/jammy-updates 3.192.54.5 amd64 [可升級自：3.192.54]
    xserver-common/jammy-updates,jammy-updates 2:21.1.3-2ubuntu2.6 all [可升級自：2:21.1.3-2ubuntu2.5]
    xserver-xephyr/jammy-updates 2:21.1.3-2ubuntu2.6 amd64 [可升級自：2:21.1.3-2ubuntu2.5]
    xserver-xorg-core/jammy-updates 2:21.1.3-2ubuntu2.6 amd64 [可升級自：2:21.1.3-2ubuntu2.5]
    xserver-xorg-legacy/jammy-updates 2:21.1.3-2ubuntu2.6 amd64 [可升級自：2:21.1.3-2ubuntu2.5]
    root@SRV-2020:/home/alanjui# apt upgrade
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    籌備升級中... 完成
    The following security updates require Ubuntu Pro with 'esm-apps' enabled:
      imagemagick libopenexr25 libmagick++-6.q16-8 libmagickcore-6.q16-6-extra
      libmagickwand-6.q16-6 imagemagick-6.q16 libmagickcore-6.q16-6
      imagemagick-6-common
    Learn more about Ubuntu Pro at https://ubuntu.com/pro
    下列套件將會維持其原有版本：
      gnome-initial-setup gnome-remote-desktop python3-software-properties software-properties-common software-properties-gtk
      update-notifier update-notifier-common xserver-common xserver-xephyr xserver-xorg-core xserver-xorg-legacy
    升級 0 個，新安裝 0 個，移除 0 個，有 11 個未被升級。
    root@SRV-2020:/home/alanjui# apt install gnome-initial-setup
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    下列套件將會被升級：
      gnome-initial-setup
    升級 1 個，新安裝 0 個，移除 0 個，有 10 個未被升級。
    需要下載 993 kB 的套件檔。
    此操作完成之後，會多佔用 12.3 kB 的磁碟空間。
    下載:1 http://tw.archive.ubuntu.com/ubuntu jammy-updates/main amd64 gnome-initial-setup amd64 42.0.1-1ubuntu2.1 [993 kB]
    取得 993 kB 用了 0s (6,857 kB/s)
    （讀取資料庫 ... 目前共安裝了 551623 個檔案和目錄。）
    正在準備解包 .../gnome-initial-setup_42.0.1-1ubuntu2.1_amd64.deb……
    Unpacking gnome-initial-setup (42.0.1-1ubuntu2.1) over (42.0.1-1ubuntu2) ...
    設定 gnome-initial-setup (42.0.1-1ubuntu2.1) ...
    執行 bamfdaemon (0.5.6+22.04.20220217-0ubuntu1) 的觸發程式……
    Rebuilding /usr/share/applications/bamf-2.index...
    執行 desktop-file-utils (0.26-1ubuntu3) 的觸發程式……
    執行 gnome-menus (3.36.0-1ubuntu3) 的觸發程式……
    執行 mailcap (3.70+nmu1ubuntu1) 的觸發程式……
    root@SRV-2020:/home/alanjui# apt list --upgradable
    正在列出... 完成
    gnome-remote-desktop/jammy-updates 42.7-0ubuntu1 amd64 [可升級自：42.4-0ubuntu1]
    python3-software-properties/jammy-updates,jammy-updates 0.99.22.5 all [可升級自：0.99.22.4]
    software-properties-common/jammy-updates,jammy-updates 0.99.22.5 all [可升級自：0.99.22.4]
    software-properties-gtk/jammy-updates,jammy-updates 0.99.22.5 all [可升級自：0.99.22.4]
    update-notifier-common/jammy-updates,jammy-updates 3.192.54.5 all [可升級自：3.192.54]
    update-notifier/jammy-updates 3.192.54.5 amd64 [可升級自：3.192.54]
    xserver-common/jammy-updates,jammy-updates 2:21.1.3-2ubuntu2.6 all [可升級自：2:21.1.3-2ubuntu2.5]
    xserver-xephyr/jammy-updates 2:21.1.3-2ubuntu2.6 amd64 [可升級自：2:21.1.3-2ubuntu2.5]
    xserver-xorg-core/jammy-updates 2:21.1.3-2ubuntu2.6 amd64 [可升級自：2:21.1.3-2ubuntu2.5]
    xserver-xorg-legacy/jammy-updates 2:21.1.3-2ubuntu2.6 amd64 [可升級自：2:21.1.3-2ubuntu2.5]
    ...
    ...
    ...
    $ apt install xserver-common xserver-xephyr xserver-xorg-core xserver-xorg-legacy
    ...
    $ apt list --upgradable
    正在列出... 完成
    root@SRV-2020:/home/alanjui# apt update
    已有:1 http://tw.archive.ubuntu.com/ubuntu jammy InRelease
    已有:2 http://tw.archive.ubuntu.com/ubuntu jammy-updates InRelease
    已有:3 http://tw.archive.ubuntu.com/ubuntu jammy-backports InRelease
    已有:4 https://dl.google.com/linux/chrome/deb stable InRelease
    已有:5 https://brave-browser-apt-release.s3.brave.com stable InRelease
    已有:6 https://cli.github.com/packages stable InRelease
    下載:7 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
    已有:8 https://ppa.launchpadcontent.net/neovim-ppa/stable/ubuntu jammy InRelease
    已有:9 https://packages.microsoft.com/ubuntu/20.04/mssql-server-preview focal InRelease
    已有:10 https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/jammy pgadmin4 InRelease
    已有:11 https://ppa.launchpadcontent.net/obsproject/obs-studio/ubuntu jammy InRelease
    取得 110 kB 用了 2s (44.7 kB/s)
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    所有套件都是最新。
    W: https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/jammy/dists/pgadmin4/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.

    # sudo apt-get --with-new-pkgs upgrade
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    籌備升級中... 完成
    升級 0 個，新安裝 0 個，移除 0 個，有 0 個未被升級。

    # apt upgrade
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    籌備升級中... 完成
    The following security updates require Ubuntu Pro with 'esm-apps' enabled:
      imagemagick libopenexr25 libmagick++-6.q16-8 libmagickcore-6.q16-6-extra
      libmagickwand-6.q16-6 imagemagick-6.q16 libmagickcore-6.q16-6
      imagemagick-6-common
    Learn more about Ubuntu Pro at https://ubuntu.com/pro
    升級 0 個，新安裝 0 個，移除 0 個，有 0 個未被升級。

## 更新套件件後，被要求「需啟動 esm-apps」

    root@SRV-2020:/home/alanjui# apt upgrade
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    籌備升級中... 完成
    The following security updates require Ubuntu Pro with 'esm-apps' enabled:
      imagemagick libopenexr25 libmagick++-6.q16-8 libmagickcore-6.q16-6-extra
      libmagickwand-6.q16-6 imagemagick-6.q16 libmagickcore-6.q16-6
      imagemagick-6-common
    Learn more about Ubuntu Pro at https://ubuntu.com/pro
    升級 0 個，新安裝 0 個，移除 0 個，有 0 個未被升級。
    root@SRV-2020:/home/alanjui# apt policy imagematick
    N: 找不到套件 imagematick

    root@SRV-2020:/home/alanjui# apt policy imagemagick
    imagemagick:
      已安裝：8:6.9.11.60+dfsg-1.3build2
      候選： 8:6.9.11.60+dfsg-1.3build2
      版本列表：
     *** 8:6.9.11.60+dfsg-1.3build2 500
            500 http://tw.archive.ubuntu.com/ubuntu jammy/universe amd64 Packages
            100 /var/lib/dpkg/status

    root@SRV-2020:/home/alanjui# sudo pro enable esm-apps
    To use 'esm-apps' you need an Ubuntu Pro subscription
    Personal and community subscriptions are available at no charge
    See https://ubuntu.com/pro

    root@SRV-2020:/home/alanjui# sudo pro enable esm-apps
    To use 'esm-apps' you need an Ubuntu Pro subscription
    Personal and community subscriptions are available at no charge
    See https://ubuntu.com/pro

    root@SRV-2020:/home/alanjui# sudo pro attach C1A4KKvmVVA3hLaWM2QQy6MiJJA8F
    Enabling default service esm-apps
    Updating package lists
    Ubuntu Pro: ESM Apps enabled
    Enabling default service esm-infra
    Updating package lists
    Ubuntu Pro: ESM Infra enabled
    Enabling default service livepatch
    Installing canonical-livepatch snap
    Canonical livepatch enabled.
    Unable to determine current instance-id
    This machine is now attached to 'Ubuntu Pro - free personal subscription'

    SERVICE          ENTITLED  STATUS    DESCRIPTION
    esm-apps         yes       enabled   Expanded Security Maintenance for Applications
    esm-infra        yes       enabled   Expanded Security Maintenance for Infrastructure
    livepatch        yes       enabled   Canonical Livepatch service
    realtime-kernel  yes       disabled  Ubuntu kernel with PREEMPT_RT patches integrated

    NOTICES
    Operation in progress: pro attach

    Enable services with: pro enable <service>

         Account: alanjui1960@gmail.com
    Subscription: Ubuntu Pro - free personal subscription

## os-prober will not be executed … after `apt upgrade -y` or `apt update-grub`

<https://askubuntu.com/questions/1414245/why-do-i-get-warning-os-prober-will-not-be-executed-to-detect-other-bootable-p>

    $ sudo apt update && sudo apt upgrade -y
    ...
    Sourcing file `/etc/default/grub'
    Sourcing file `/etc/default/grub.d/init-select.cfg'
    Generating grub configuration file ...
    Found linux image: /boot/vmlinuz-5.15.0-39-generic
    Found initrd image: /boot/initrd.img-5.15.0-39-generic
    Found linux image: /boot/vmlinuz-5.15.0-37-generic
    Found initrd image: /boot/initrd.img-5.15.0-37-generic
    Memtest86+ needs a 16-bit boot, that is not available on EFI, exiting
    Warning: os-prober will not be executed to detect other bootable partitions.
    Systems on them will not be added to the GRUB boot configuration.
    Check GRUB_DISABLE_OS_PROBER documentation entry.
    Adding boot menu entry for UEFI Firmware Settings ...
    done


    [mak@jmak-pc ~]$ sudo update-grub
    [sudo] password for mak:
    Generating grub configuration file …
    Found theme: /usr/share/grub/themes/manjaro/theme.txt
    Found linux image: /boot/vmlinuz-5.4-x86_64
    Found initrd image: /boot/intel-ucode.img /boot/initramfs-5.4-x86_64.img
    Found initrd fallback image: /boot/initramfs-5.4-x86_64-fallback.img
    Warning: os-prober will not be executed to detect other bootable partitions.
    Systems on them will not be added to the GRUB boot configuration.
    Check GRUB_DISABLE_OS_PROBER documentation entry.
    Adding boot menu entry for UEFI Firmware Settings …
    Found memtest86+ image: /boot/memtest86+/memtest.bin
    done
    [mak@jmak-pc ~]$

You have several options:

- Ignore the warning, it's only a warning, not an error.
- Set the variable `GRUB_DISABLE_OS_PROBER=false` in
  `/etc/default/grub`. The warning will change to
  `os-prober will be executed to detect...`, as we can see
  in the snippet of the script.
- Remove the executable bit from `/etc/grub.d/30_os-prober`.
  This will prevent the execution of the script, so you
  can't get any of this warnings. You can do that with: sudo
  chmod -x /etc/grub.d/30_os-prober
- Edit the script `/etc/grub.d/30_os-prober`. If you comment
  out the lines with `grub_warn`, the script will run
  without issuing these warnings.

  $ sudo apt install grub-efi-amd64-bin
  grub-efi-amd64-signed 正在讀取套件清單... 完成 正在重建相
  依關係... 完成  
   正在讀取狀態資料... 完成  
   下列套件將會被升級： grub-efi-amd64-bin
  grub-efi-amd64-signed 升級 2 個，新安裝 0 個，移除 0 個，
  有 0 個未被升級。 需要下載 2,970 kB 的套件檔。 此操作完成
  之後，會多佔用 4,862 kB 的磁碟空間。 下載:1
  <http://tw.archive.ubuntu.com/ubuntu> jammy-updates/main
  amd64 grub-efi-amd64-signed amd64 1.187.2+2.06-2ubuntu14
  [1,380 kB] 下載:2 <http://tw.archive.ubuntu.com/ubuntu>
  jammy-updates/main amd64 grub-efi-amd64-bin amd64
  2.06-2ubuntu14 [1,591 kB] 取得 2,970 kB 用了 0s (13.4
  MB/s) （讀取資料庫 ... 目前共安裝了 213198 個檔案和目錄。
  ） 正在準備解包
  .../grub-efi-amd64-signed_1.187.2+2.06-2ubuntu14_amd64.deb……
  Unpacking grub-efi-amd64-signed (1.187.2+2.06-2ubuntu14)
  over (1.182~22.04.1+2.06-2ubuntu10) ... 正在準備解包
  .../grub-efi-amd64-bin_2.06-2ubuntu14_amd64.deb……
  Unpacking grub-efi-amd64-bin (2.06-2ubuntu14) over
  (2.06-2ubuntu10) ... 設定 grub-efi-amd64-bin
  (2.06-2ubuntu14) ... 設定 grub-efi-amd64-signed
  (1.187.2+2.06-2ubuntu14) ... Installing grub to /boot/efi.
  Installing for x86_64-efi platform. grub-install: warning:
  EFI variables cannot be set on this system. grub-install:
  warning: You will have to complete the GRUB setup
  manually. Installation finished. No error reported.

## Terminal

    1.) Download a Nerd Font
    2.) Unzip and copy to ~/.fonts
    3.) Run the command fc-cache -fv to manually rebuild the font cache

Meslo Font

    https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/Meslo/M/Regular/complete/Meslo%20LG%20M%20Regular%20Nerd%20Font%20Complete.ttf


    sudo apt install -y tmux

**Install Oh-my-zsh**

    sudo apt install zsh
    cd
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

**Install PowerLevel10K**

    https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k


    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
    echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc

**Install Oh-My-Tmux**

    cd
    git clone https://github.com/gpakosz/.tmux.git
    ln -s -f .tmux/.tmux.conf
    cp .tmux/.tmux.conf.local .

# Neovim

<https://github.com/neovim/neovim>

    sudo apt install -y grep

# Node.js Support

## Install node.js & npm

    curl -L https://bit.ly/n-install | bash


    sudo apt install nodejs
    sudo aInstall Neovim support
    npm install -g neovim
    npm install -g yarn
    npm install -g tree-sitter-cli
    npm i -g eslint markdownlint

## Install python support

    curl https://pyenv.run | bash
    git clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv


    export PYENV_ROOT="$HOME/.pyenv"
    command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init -)"
    eval "$(pyenv virtualenv-init -)"


    sudo apt install -y  \
        build-essential \
        curl \
        libbz2-dev \
        libffi-dev \
        liblzma-dev \
        libncursesw5-dev \
        libreadline-dev \
        libsqlite3-dev \
        libssl-dev \
        libxml2-dev \
        libxmlsec1-dev \
        llvm \
        make \
        tk-dev \
        wget \
        xz-utils \
        zlib1g-dev


    pyenv install 3.10
    pyenv virtualenv 3.10 venv-3.10
    pyenv virtualenvs
    pyenv global venv-3.10
    python -m pip install --upgrade pip
    pip install pynvim


    pip install pylint isort autopep8 djhtml djlint mypy pydocstyle flake8 djlint


    cd ~/.local/share/nvim/site/pack/packer/start/
    git clone https://github.com/iamcco/markdown-preview.nvim.git
    cd markdown-preview.nvim
    yarn install
    yarn build

## Lua support

    sudo apt install wget apt-transport-https gnupg2 cmake -y
    sudo apt install build-essential checkinstall zlib1g-dev libssl-dev -y
    sudo apt install lua5.3


    cd ~/tmp
    mkdir lua_build
    cd lua_build
    curl -R -O http://www.lua.org/ftp/lua-5.4.4.tar.gz

    tar zxf lua-5.4.4.tar.gz
    cd lua-5.4.4

    make linux test
    sudo make install

    .......
    ranlib liblua.a
    gcc -std=gnu99 -O2 -Wall -Wextra -DLUA_COMPAT_5_3 -DLUA_USE_LINUX    -c -o lua.o lua.c
    gcc -std=gnu99 -o lua   lua.o liblua.a -lm -Wl,-E -ldl
    gcc -std=gnu99 -O2 -Wall -Wextra -DLUA_COMPAT_5_3 -DLUA_USE_LINUX    -c -o luac.o luac.c
    gcc -std=gnu99 -o luac   luac.o liblua.a -lm -Wl,-E -ldl
    make[2]: 離開目錄「/home/alanjui/tmp/lua_build/lua-5.4.4/src」
    make[1]: 離開目錄「/home/alanjui/tmp/lua_build/lua-5.4.4/src」
    make[1]: 進入目錄「/home/alanjui/tmp/lua_build/lua-5.4.4/src」
    ./lua -v
    Lua 5.4.4  Copyright (C) 1994-2022 Lua.org, PUC-Rio
    make[1]: 離開目錄「/home/alanjui/tmp/lua_build/lua-5.4.4/src」
    cd src && mkdir -p /usr/local/bin /usr/local/include /usr/local/lib /usr/local/man/man1 /usr/local/share/lua/5.4 /usr/local/lib/lua/5.4
    cd src && install -p -m 0755 lua luac /usr/local/bin
    cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/local/include
    cd src && install -p -m 0644 liblua.a /usr/local/lib
    cd doc && install -p -m 0644 lua.1 luac.1 /usr/local/man/man1



    sudo apt install -y luarocks

```
    $ sudo apt install build-essential libreadline-dev unzip

    -$ curl -R -O http://www.lua.org/ftp/lua-5.3.5.tar.gz
    -$ tar -zxf lua-5.3.5.tar.gz
    -$ cd lua-5.3.5
    -$ make linux test
    -$ sudo make install

    cd src && mkdir -p /usr/local/bin /usr/local/include /usr/local/lib /usr/local/man/man1 /usr/local/share/lua/5.3 /usr/local/lib/lua/5.3
    cd src && install -p -m 0755 lua luac /usr/local/bin
    cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/local/include
    cd src && install -p -m 0644 liblua.a /usr/local/lib
    cd doc && install -p -m 0644 lua.1 luac.1 /usr/local/man/man1

```

    $ wget https://luarocks.org/releases/luarocks-3.8.0.tar.gz
    $ tar zxpf luarocks-3.8.0.tar.gz
    $ cd luarocks-3.8.0
    $ ./configure --with-lua-include=/usr/local/include
    $ make && sudo make install


    sudo luarocks install --server=https://luarocks.org/dev luaformatter
    ......
    ......
    [100%] Built target lua-format-test
    Install the project...
    -- Install configuration: "Release"
    -- Installing: /usr/local/lib/luarocks/rocks-5.1/luaformatter/scm-1/bin/lua-format
    No existing manifest. Attempting to rebuild...
    luaformatter scm-1 is now installed in /usr/local (license: Apache 2.0)

## Install package with luarocks

    $ sudo luarocks install luasocket
    $ lua
    Lua 5.3.5 Copyright (C) 1994-2018 Lua.org, PUC-Rio
    > require "socket"



    sudo apt install -y lua-check

# Refs

<https://askubuntu.com/questions/1181852/why-are-upgradable-packages-not-upgraded>

<https://askubuntu.com/questions/1452299/im-getting-the-error-the-following-security-updates-require-ubuntu-pro-with-e>

<https://ubuntu.com/pro/dashboard>

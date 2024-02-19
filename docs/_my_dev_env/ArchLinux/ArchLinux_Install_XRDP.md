---
sidebar: auto
---

# Arch Linux 作業系統 xRDP 安裝指引

https://wiki.archlinux.org/index.php/xrdp

**Install binary file**

```
N$ yay -S xrdp
:: There are 3 providers available for xrdp:
:: Repository AUR
1) xrdp 2) xrdp-devel-git 3) xrdp-git

Enter a number (default=1): 3
:: Checking for conflicts...
:: Checking for inner conflicts...
[Repo Make:1]  nasm-2.15.05-1
[Aur:1]  xrdp-git-1:0.9.14.r24.g62befaa8-1

==> Remove make dependencies after install? [y/N] y
:: Downloaded PKGBUILD (1/1): xrdp-git
1 xrdp-git                                 (Build Files Exist)
==> Diffs to show?
==> [N]one [A]ll [Ab]ort [I]nstalled [No]tInstalled or (1 2 3, 1-3, ^4)
==> N
:: (1/1) Parsing SRCINFO: xrdp-git
resolving dependencies...
looking for conflicting packages...

Packages (1) nasm-2.15.05-1

Total Installed Size:  3.15 MiB

:: Proceed with installation? [Y/n] Y
...
...



sudo systemctl enable xrdp
sudo systemctl enable xrdp-sesman
```

https://www.tweaking4all.com/software/linux-software/use-xrdp-remote-access-ubuntu-14-04/

```
sudo pacman -S xfce4
```

**Configuration**

- **/etc/X11/Xwrapper.config**

```
allowed_users=anybody
```

- /lib/systemd/system/xrdp.service

```
[Unit]
Description=xrdp daemon
Documentation=man:xrdp(8) man:xrdp.ini(5)
Requires=xrdp-sesman.service
After=network.target xrdp-sesman.service

[Service]
Type=forking
PIDFile=/run/xrdp.pid
ExecStart=/usr/bin/xrdp
ExecStop=/usr/bin/xrdp --kill
User=root
Group=root

[Install]
WantedBy=multi-user.target:q
```

- /lib/systemd/system/xrdp-sesman.service

```
[Unit]
Description=xrdp session manager
Documentation=man:xrdp-sesman(8) man:sesman.ini(5)
After=network.target
StopWhenUnneeded=true
BindsTo=xrdp.service

[Service]
Type=forking
PIDFile=/run/xrdp-sesman.pid
ExecStart=/usr/bin/xrdp-sesman
ExecStop=/usr/bin/xrdp-sesman --kill
User=root
Group=root

[Install]
WantedBy=multi-user.target
```

- /etc/xrdp/xrdp.ini

```
[xrdp8]
name=Vino-Session
lib=libvnc.so
username=ask
password=ask
ip=127.0.0.1
port=5900
```

- /etc/xrdp/sesman.ini

```
...
[Xorg]
;param=Xorg
param=/usr/lib/xorg-server/Xorg:q
...
```

- /etc/X11/xinit/xinitrc
- [~/.xinitrc](<https://wiki.archlinux.org/index.php/GNOME_(%E6%AD%A3%E9%AB%94%E4%B8%AD%E6%96%87)>)

```
  exec gnome-session
* ~/.xsession
* /etc/xrdp/startwm.sh: Toq start a User Window Manager (similar to .xinitrc)
  export PATH=$PATH
    export LANG=$LANG
```

登入 Gnome 桌面，使用「終端機」輸入下列指令：

```
gsettings set org.gnome.Vino require-encryption false
```

**Start Service**

```
sudo systemctl enable xrdp
sudo systemctl starp xrdp
sudo systemctl status xrdp

sudo systemctl enable xrdp-sesman
sudo systemctl starp xrdp-sesman
sudo systemctl status xrdp-sesman

sudo systemctl daemon-reload
```

## [Build from source code](<https://wiki.archlinux.org/index.php/Arch_User_Repository_(%E6%AD%A3%E9%AB%94%E4%B8%AD%E6%96%87)>)

**Download source code from Git Repo**

```
cd ~/builds
git clone https://aur.archlinux.org/xrdp-git.git
```

Check out specific version by tag

```
cd ~/builds/xrdp-git
```

Build

```
makepkg -s

[alanjui@VB3-ArchLinux-UEFI xrdp-git]$ ll
total 604
drwxr-xr-x 6 alanjui alanjui   4096 Dec 26 20:41 .
drwxr-xr-x 3 alanjui alanjui   4096 Dec 26 20:24 ..
-rw-r--r-- 1 alanjui alanjui   1883 Dec 26 20:24 arch-config.diff
-rw-r--r-- 1 alanjui alanjui  78174 Dec 26 20:24 archlinux.bmp
drwxr-xr-x 8 alanjui alanjui   4096 Dec 26 20:24 .git
drwxr-xr-x 3 alanjui alanjui   4096 Dec 26 20:41 pkg
-rw-r--r-- 1 alanjui alanjui   1852 Dec 26 20:41 PKGBUILD
drwxr-xr-x 3 alanjui alanjui   4096 Dec 26 20:40 src
-rw-r--r-- 1 alanjui alanjui    699 Dec 26 20:24 .SRCINFO
drwxr-xr-x 7 alanjui alanjui   4096 Dec 26 20:40 xrdp-git
-rw-r--r-- 1 alanjui alanjui 495229 Dec 26 20:41 xrdp-git-1:0.9.14.r77.ga033cf0e-1-x86_64.pkg.tar.zst
-rw-r--r-- 1 alanjui alanjui    236 Dec 26 20:24 xrdp-git.install
```

Install

```
sudo pacman -U xrdp-git-1\:0.9.14.r77.ga033cf0e-1-x86_64.pkg.tar.zst
[sudo] password for alanjui:
loading packages...
warning: xrdp-git-1:0.9.14.r77.ga033cf0e-1 is up to date -- reinstalling
resolving dependencies...
looking for conflicting packages...

Packages (1) xrdp-git-1:0.9.14.r77.ga033cf0e-1

Total Installed Size:  2.23 MiB
Net Upgrade Size:      0.00 MiB

:: Proceed with installation? [Y/n] y
(1/1) checking keys in keyring                                        [######################################] 100%
(1/1) checking package integrity                                      [######################################] 100%
(1/1) loading package files                                           [######################################] 100%
(1/1) checking for file conflicts                                     [######################################] 100%
(1/1) checking available disk space                                   [######################################] 100%
:: Processing package changes...
(1/1) reinstalling xrdp-git                                           [######################################] 100%
:: Running post-transaction hooks...
(1/2) Reloading system manager configuration...
(2/2) Arming ConditionNeedsUpdate...
```

Xrdp Service Status

```
[alanjui@VB3-ArchLinux-UEFI ~]$ sudo systemctl status xrdp
[sudo] password for alanjui:
Sorry, try again.
[sudo] password for alanjui:
● xrdp.service - xrdp daemon
     Loaded: loaded (/usr/lib/systemd/system/xrdp.service; enabled; vendor preset: disabled)
     Active: active (running) since Sat 2020-12-26 20:54:16 CST; 31s ago
       Docs: man:xrdp(8)
             man:xrdp.ini(5)
    Process: 355 ExecStart=/usr/bin/xrdp (code=exited, status=0/SUCCESS)
   Main PID: 359 (xrdp)
      Tasks: 1 (limit: 2348)
     Memory: 2.2M
     CGroup: /system.slice/xrdp.service
             └─359 /usr/bin/xrdp

Dec 26 20:54:15 VB3-ArchLinux-UEFI xrdp[355]:         LogLevel:      [INFO ]
Dec 26 20:54:15 VB3-ArchLinux-UEFI xrdp[355]:         ConsoleLevel:  <disabled>
Dec 26 20:54:15 VB3-ArchLinux-UEFI xrdp[355]:         SyslogLevel:   [INFO ]
Dec 26 20:54:15 VB3-ArchLinux-UEFI xrdp[355]: daemon process 359 started ok
Dec 26 20:54:15 VB3-ArchLinux-UEFI systemd[1]: xrdp.service: Can't open PID file /run/xrdp.pid (yet?) after start:>
Dec 26 20:54:16 VB3-ArchLinux-UEFI systemd[1]: Started xrdp daemon.
Dec 26 20:54:17 VB3-ArchLinux-UEFI xrdp[359]: [INFO ] starting xrdp with pid 359
Dec 26 20:54:17 VB3-ArchLinux-UEFI xrdp[359]: [INFO ] address [0.0.0.0] port [3389] mode 1
Dec 26 20:54:17 VB3-ArchLinux-UEFI xrdp[359]: [INFO ] listening to port 3389 on 0.0.0.0
Dec 26 20:54:17 VB3-ArchLinux-UEFI xrdp[359]: [INFO ] xrdp_listen_pp done
lines 1-22/22 (END)
```

Xrdp Session Manager

```
[alanjui@VB3-ArchLinux-UEFI ~]$ sudo systemctl status xrdp-sesman
● xrdp-sesman.service - xrdp session manager
Loaded: loaded (/usr/lib/systemd/system/xrdp-sesman.service; enabled; vendor preset: disabled)
Active: active (running) since Sat 2020-12-26 20:54:15 CST; 2min 24s ago
Docs: man:xrdp-sesman(8)
     man:sesman.ini(5)
Process: 348 ExecStart=/usr/bin/xrdp-sesman (code=exited, status=0/SUCCESS)
Main PID: 354 (xrdp-sesman)
Tasks: 1 (limit: 2348)
Memory: 1.2M
CGroup: /system.slice/xrdp-sesman.service
     └─354 /usr/bin/xrdp-sesman

Dec 26 20:54:15 VB3-ArchLinux-UEFI systemd[1]: Starting xrdp session manager...
Dec 26 20:54:15 VB3-ArchLinux-UEFI xrdp-sesman[354]: [INFO ] starting xrdp-sesman with pid 354
Dec 26 20:54:15 VB3-ArchLinux-UEFI systemd[1]: Started xrdp session manager.
Dec 26 20:54:15 VB3-ArchLinux-UEFI xrdp-sesman[354]: [INFO ] listening to port 3350 on 127.0.0.1
[alanjui@VB3-ArchLinux-UEFI ~]$
```

/etc/X11/Xwrapper.config

```
allowed_users=anybody
```

## 使用 xrdp-git 安裝作業

**安裝軟體套件**

    # Open source remote desktop protocol (RDP) server

```
yay -Ss xrdp
yay -S xrdp  # xrdp-git
```

    # Xorg drivers for xrdp

```
yay -Ss xorgxrdp-git
yay -S xorgxrdp-git
```

運作流程：

- 需要的 Service
  - xrdp
  - xrdp-sesesman
- Running as Terminal Server (Xorg)

**設定 xrdp 相關服務能於開機時自動啟用**

```
sudo systemctl enable xrdp
sudo systemctl enable xrdp-sesman
sudo systemctl start xrdp
sudo systemctl status xrdp
sudo systemctl status xrdp-sesman
```

**設定任一使用者均可自行啟用 X Display Server**

/etc/X11/Xwrapper.config

```
allowed_users=anybody
```

**設定「啟用 DE（桌面環境）」**

~/.xinitrc

```
exec gnome-session
```

**設定使用者登入使用 VNC Session**
Running with Vino (Gnome VNC-Server for root session)

/etc/xrdp/xrdp.ini

```
....
[xrdp8]
name=Vino-Session
lib=libvnc.so
username=ask
password=ask
ip=127.0.0.1
port=5900
```

**變更 vino-server 預設：只接受 TLS 連線之設定，改成： standard VNC authentication**

```
gsettings set org.gnome.Vino require-encryption false
```

**重新啟動 xrdp server**

```
sudo systemctl restart xrdp
```

**使用 xfreerdp 驗證**

- /etc/default/locale
  N/A

- **設定 ~/.xinitrc**

- **設定 /etc/X11/xinit/xinitrc**

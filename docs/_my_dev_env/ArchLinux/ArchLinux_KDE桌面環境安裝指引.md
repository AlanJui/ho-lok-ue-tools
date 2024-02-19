---
sidebar: auto
---

# Arch Linux: KDE 桌面環境安裝指引

## 自定快速鍵

```
gnome-terminal &
```

![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610591591583_image.png)

## Fcitx 5 中文輸入介面

N/A

## 安裝字型

https://wiki.archlinux.org/index.php/Fonts

- System-wide: /usr/share/fonts/
- Single User: ~/.local/share/fonts/

```
sudo cp -r 'Fira Mono Regular nerd Font Complete.otf' /usr/share/fonts/
```

![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610849901330_image.png)

```
cp -r BigBlueTerminal ~/.local/share/fonts/
```

![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610849629094_image.png)

```
alanjui@VB4-Manjaro Linux 5.9.11-3-MANJARO x86_64 20.2 Nibia
~ >>> ll
總用量 52
drwxr-xr-x 5 alanjui alanjui 4096 12月 27 11:45 aurman
drwxr-xr-x 2 alanjui alanjui 4096  1月 17 10:38 build
drwxrwx--- 1 root    vboxsf  2912  1月 17 08:15 host
drwxr-xr-x 7 alanjui alanjui 4096 12月 27 11:24 n
drwxr-xr-t 2 alanjui alanjui 4096 12月 27 12:16 thinclient_drives
drwxr-xr-x 5 alanjui alanjui 4096 12月 27 11:47 yay
drwxr-xr-x 2 alanjui alanjui 4096 12月 27 10:55 下載
drwxr-xr-x 2 alanjui alanjui 4096 12月 27 10:55 公共
drwxr-xr-x 2 alanjui alanjui 4096 12月 27 10:55 圖片
drwxr-xr-x 2 alanjui alanjui 4096 12月 27 10:55 影片
drwxr-xr-x 2 alanjui alanjui 4096 12月 27 10:55 文件
drwxr-xr-x 2 alanjui alanjui 4096 12月 27 10:55 桌面
drwxr-xr-x 2 alanjui alanjui 4096 12月 27 10:55 模板
drwxr-xr-x 2 alanjui alanjui 4096 12月 27 10:55 音樂
~ >>>



[alanjui@VB2101-Manjaro-KDE-202 ~]$ systemctl status vboxservice
● vboxservice.service - VirtualBox Guest Service
    Loaded: loaded (/usr/lib/systemd/system/vboxservice.service; enabled; vendor preset: disabled)
    Active: active (running) since Sun 2021-01-17 11:10:26 CST; 2min 27s ago
   Process: 343 ExecStartPre=/usr/bin/modprobe vboxguest (code=exited, status=0/SUCCESS)
   Process: 345 ExecStartPre=/usr/bin/modprobe vboxvideo (code=exited, status=0/SUCCESS)
   Process: 349 ExecStartPre=/usr/bin/modprobe vboxsf (code=exited, status=0/SUCCESS)
  Main PID: 355 (VBoxService)
     Tasks: 9 (limit: 2347)
    Memory: 2.2M
    CGroup: /system.slice/vboxservice.service
            └─355 /usr/bin/VBoxService -f
```

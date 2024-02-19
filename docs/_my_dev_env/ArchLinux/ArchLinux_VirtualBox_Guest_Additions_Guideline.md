---
sidebar: auto
---

# Arch Linux: VirtualBox Guest Additions 安裝指引

## 文件摘要

提供「作業程序」，說明如何在 Arch Linux 作業系統，安裝 VirtualBox Guest Additions 軟體。

不能只是「挿入 VirtualBox Guest Addition 光碟」，直接執行安裝；須先完成 Kernel headers 的安裝，否則「安裝程式」會發出如下之錯誤警示：

![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610593540886_VirtualBox_VB02-ArchLinux_14_01_2021_11_04_05.png)

## 安裝作業指引

1. **更新套件到最新版**

```
sudo pacman -Suy
```

2. **安裝 Linux Kernel Headers**

- 查詢 Linux Kernel Version

```
[alanjui@VB02-ArchLinux ~]$ uname -r
5.10.4-arch2-1
```

- 安裝 Linux Headers 檔案

```
sudo pacman -S linux-headers
```

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610674524541_image.png)

3. **安裝 VirtualBox Guest 套件**

```
sudo pacman -S virtualbox-guest-utils
```

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610674624639_image.png)

含軟件：

- xf86-video-vmware-13.3.0-2
- virtualbox-guest-utils-6.1.16-4

完成安裝後，產生之執行檔：

- /etc/xdg/autostart/vboxclient.desktop
- /usr/bin/VBoxClient
- /usr/bin/VBoxClient-all
- /usr/bin/VBoxControl
- /usr/bin/VBoxDRMClient
- /usr/bin/VBoxService

4.

```
sudo /sbin/rcvboxadd setup
```

【註】：

- 無需安裝 VirtualBox Guest Addition 光碟
  對於 Ubuntu / Debian 這些版本的 Linux ，需要安裝 VirtualBox Guest Additions 光碟的公共軟體，但在 Arch Linux 版本，則無此必要。

![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610598211382_image.png)

- 安裝錯誤紀錄：

```
less /var/log/vboxadd-setup.log
```

5. **啟用 VirtualBox Service (VirtualBox Keernel Modules)**

```
sudo systemctl enable vboxservice
```

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610674836750_image.png)

6. 將「使用者帳號」加入「vboxsf」群組；並驗證設定無誤。

```
 [alanjui@VB02-ArchLinux ~]$ sudo usermod -aG vboxsf alanjui

 [alanjui@VB02-ArchLinux ~]$ grep vboxsf /etc/group
 vboxsf:x:109:alanjui
```

【註】： virtualbox-guest-utils 軟件在安裝過程，會建立作業系統的「群組」：vboxsf

7. **啟動 VirtualBox Service**

```
sudo systemctl start vboxservice
sudo systemctl status vboxservice
```

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610675084205_image.png)

8. 重新開機與確認作業系統於開機後，自動啟用 VirtualBox Service

```
sudo reboot
systemctl status vboxservice
```

![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610845755065_image.png)

## 設定共享資料夾

與 Host 共享資料夾。

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610676102169_image.png)

1. 在 Guest 建立共享資料夾

```
cd
mkdir host
```

2. 在 Host 建立 VirtualBox Shared Folders：

![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610845369426_image.png)

3. 進入 Guest 後，使用「終端機」查詢「擁有者及操作權限」：

```
cd
ls -l
```

![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610846211171_image.png)

4. 檢驗使用者是否屬於 vboxsf 群組：\*\*

```
id
```

![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610847103546_image.png)

5. 檢驗作業系統的確已將 VirtualBox Shared Folders 掛載於 /media 目錄之下：\*\*
   上述 Host 與 Guest 共享的資料夾經設定後，其掛載路徑為： /media/sf\_<Shared_Folder>/

```
ls -al /media
```

![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610847448792_image.png)

6. 使用「檔案管理員」，觀察「VirtualBox Shared Folders」：\*\*

- ~/host (/home/alanjui/host)
  ![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610847568017_image.png)

- /media/sf_vbox-host-alanjui
  ![](https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610847607382_image.png)

## 驗證作業指引

### 驗證 VM Guest 可與 Host 共用「剪貼簿」

1. 打開「終端機」。

2. 在 Mac Host 用 [Cmd] + [C] 複製「指令」

3. 在 Arch Linux Guest 用 [Ctrl] + [Shift] + [V] 貼上己複製之指令

## 參考資料

- [VirtualBox/Install Arch Linux as a guest](https://wiki.archlinux.org/index.php/VirtualBox/Install_Arch_Linux_as_a_guest)

- [How to enable a Virtualbox shared folder for linux guest systems](https://averagelinuxuser.com/virtualbox-shared-folder/)

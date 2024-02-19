---
sidebar: auto
---

# Arch Linux 作業系統安裝指引（EUFI 開機）

## 文件摘要

本文件適用於 macOS + VirtualBox 的 VM 作業。

電腦摘要：

- 電腦： VirtualBox VM
- 記憶體：4 GB
- 硬碟： 80 GB
- 網路卡：
  - en0: WiFi
  - en7: USB 100/1000 Ethernet NIC

## 安裝作業程序

### 設定安裝作業套件提供來源

1. 確認電腦的網路卡能連上網路

確認電腦的網路卡（NIC）能連上 Internet 網路。

```
$ ip addr show  # ip a s

$ ping -c google.com
```

2. 設定作業系統安裝作業，提供軟體套件之來源處。

```
vim /etc/pacman.d/mirrorlist
```

mirrorlist:

```
## Taiwan
Server = http://archlinux.ccns.ncku.edu.tw/archlinux/$repo/os/$arch
Server = http://archlinux.cs.nctu.edu.tw/$repo/os/$arch
#Server = http://shadow.ind.ntou.edu.tw/archlinux/$repo/os/$arch
#Server = https://shadow.ind.ntou.edu.tw/archlinux/$repo/os/$arch
#Server = http://ftp.tku.edu.tw/Linux/ArchLinux/$repo/os/$arch
#Server = http://ftp.yzu.edu.tw/Linux/archlinux/$repo/os/$arch
Server = https://ftp.yzu.edu.tw/Linux/archlinux/$repo/os/$arch
```

### 設置硬碟切割區

硬碟切割規劃：

- sda1 (type: 4／1): 0.5GB ==> BIOS boot
- sda2 (type: 19): 1.0GB ==> [SWAP]
- sda3 (type: 23): 70.0GB ==> / (root)
- sda4 (type: 28): 11.5GB ==> /home

【註】：Partition Type

- 4: BIOS boot
- 19: Linux Swap
- 23: Linux root (x86-64)
- 28: Linux home4

1. 執行硬碟切割作業

略

2. 確認硬碟是否依原規劃完成切割

```
lsblk
fdisk -l /dev/sda
```

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1608788703126_Screenshot_archlinux-2_2020-12-24_134422.png)

```
fdisk /dev/sda
...
fdisk -l /dev/sda
```

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1608788790536_Screenshot_archlinux-2_2020-12-24_134616.png)

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1608788919739_Screenshot_archlinux-2_2020-12-24_134821.png)

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1608789477288_Screenshot_archlinux-2_2020-12-24_135735.png)

3. 硬碟格式化

- sda1(作業系統啟動區)

```terminal
mkfs.vfat -F32 /dev/sda1
set 1 boot on
```

```
mkfs.vfat /dev/vda1
```

- sda3(root 區)

```
mkfs.ext4 /dev/sda3
```

- sda4(home 區)

```
mkfs.ext4 /dev/sda4
```

- sda2(SWAP 區)

```
mkswap /dev/sda2
swapon /dev/sda2
```

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1608789696942_Screenshot_archlinux-2_2020-12-24_140118.png)

### 將硬碟分割區掛載至待安裝目錄

1. 執行掛載指令，將硬碟分割區 sda3 掛載至目錄路徑：/ ；分割區 sda4 掛載至： /home 。

```
mount /dev/sda3 /mnt
mkdir /mnt/home
mount /dev/sda4 /mnt/home

blkid
df -h
```

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1608789916457_Screenshot_archlinux-2_2020-12-24_140431.png)

2. 執行掛載指令，將硬碟分割區掛載至目錄路徑： /boot/efi/ 。

```
mkdir -p /mnt/boot/efi
mount /dev/sda1 /mnt/boot/efi

blkid
df -h
```

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1608790012991_Screenshot_archlinux-2_2020-12-24_140633.png)

### 安裝作業系統

1. 設定作業系統供應來源

```
vim /etc/pacman.conf
```

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1608790324590_Screenshot_archlinux-2_2020-12-24_140956.png)

2. 安裝基礎作業系統

```
pacstrap /mnt base base-devel linux linux-firmware intel-ucode grub efibootmgr vim
pacman -Syy
pacman -Su

genfstab -U /mnt >> /mnt/etc/fstab
cat /mnt/etc/fstab
```

3. 進入作業系統根目錄區（/）

```
arch-chroot /mnt
```

4. 設定時區位置（硬體時間設定成 UTC 時間）

```
ln -s /usr/share/zoneinfo/Asia/Taipei /etc/localtime
hwclock --systohc
ls -l /etc/adjtime
```

5. 設定作業系統應安裝之語系

```
vim /etc/locale.gen
```

locale.gen:

```
en_US.UTF-8 UTF-8
zh_TW.UTF-8 UTF-8
```

```
locale-gen
```

6. 設定作業系統預設使用語系

```
vim /etc/locale.conf
```

locale.conf:

```
LANG=en_US.UTF-8
```

7. 設定電腦名稱

- 編輯「hostname」設定檔。

```
vim /etc/hostname
```

/etc/hostname:

```
vm-arch-001
```

- 編輯 hosts 設定檔

```
vim /etc/hosts
```

hosts:

```
127.0.0.1        localhost
::1              localhost
127.0.1.1        vm-arch-001.ccc99.tw        vm-arch-001
```

### 安裝常用管理工具

安裝網路管理工具。

```
pacman -S openssh
systemctl enable sshd

pacman -S networkmanager wpa_supplicant wireless_tools net-tools netctl
pacman -S dialog
systemctl enable NetworkManager
```

Initramfs （可略）

```
mkinitcpio -P
mkinitcpio -p linux-lts
```

### 設定系統管理員

1. 設置 root 帳號密碼

```
passwd
```

2. 啟用 sudo 使用者群，不必輸入密碼功能。

- 編輯 sudoers 設定檔

```
pacman -S sudo
vim /etc/sudoers
```

- 設定 sudo 群組 打開 sudoer file 並將%wheel ALL=(ALL)前面註解拿掉

```
# Uncomment to allow members
%wheel ALL=(ALL) NOPASSWD: ALL
```

### 設定一般使用者

- 新增「一般使用者」帳號。

```
useradd -m -G wheel alanjui
passwd alanjui
```

- 將使用者加入「群組」。

```
usermod -aG wheel alanjui
```

### 設定硬碟開機磁區

在硬碟啟動區，安裝作業系統的開機程式

```
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=arch_grub --recheck --debug
grub-mkconfig -o /boot/grub/grub.cfg
```

```
grub-install /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg

exit
umount -R /mnt
poweroff
```

### 安裝套件管理器

安裝 yay 套件管理器。

```
mkdir ~/build && cd $_
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

【註】： 更多的操作細節，請參考[Arch Linux yay 套件管理器操作指引](./ArchLinux_yay套件管理器操作指引)

### 安裝常用軟體

安裝 LibreOffice 辦公應用軟體

```
sudo pacman -S libreoffice-fresh-zh-tw
```

安裝 google-chrome 瀏覽器

```
yay -Ss google-chrome
yay -S google-chrome
```

### 安裝桌面環境

[Gnome 桌面安裝指引](./ArchLinux_桌面環境安裝指引)

### 安裝中文作業環境

[中文作業環境安裝指引](./ArchLinux_中文作業環境安裝指引)

## 常見問題診斷與狀況排除

### 自設「快捷鍵」

設定「終端機」快速按鍵：《Ctrl》＋《Alt》＋《T》。

1. 執行指令：設定值 》鍵盤快捷鍵 》加入自訂快捷鍵：

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1610673724324_image.png)

2. 輸入設定值：

- 名稱：Terminal
- 指令： gnome-terminal &
- 快捷鍵：《Ctrl》＋《Alt》＋《T》

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1610673798704_image.png)

3. 按《加入》鍵。

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1610673916893_image.png)

### 切換操作介面

切換 GUI 操作介面至終端機指令操作介面。

- GUI → Console: [Ctrl] + [Alt] + [F3]
- Console → GUI: [Alt] + [F1]

### pacman 常用操作

作業系統預設套件管理器 pacman 常用操作

- 解除某套件的安裝，並順帶清除所有設定檔

```
Remove Options
-c, --cascade
Remove all target packages, as well as all packages that depend on one or more target packages. This operation is recursive, and must be used with care since it can remove many potentially needed packages.

-k, --keep
Removes the database entry only. Leaves all files in place.

-n, --nosave
Instructs pacman to ignore file backup designations. Normally, when a file is removed from the system the database is checked to see if the file should be renamed with a ".pacsave" extension.

-s, --recursive
Remove each target specified including all of their dependencies, provided that (A) they are not required by other packages; and (B) they were not explicitly installed by the user. This operation is recursive and analogous to a backwards --sync operation, and helps keep a clean system without orphans.
```

- 查詢某套件軟體其組成軟體有那些

```
$ pacman -Qi xrdp                                                                                                                                                    [1]
名稱                   : xrdp
版本                   : 0.9.13.1-1
描述                   : An open source remote desktop protocol (RDP) server
硬體架構               : x86_64
URL                    : https://github.com/neutrinolabs/xrdp
軟體授權               : Apache
群組                   : 無
它提供                 : 無
它依賴                 : tigervnc  libxrandr  lame  opus  fuse
可選依賴               : 無
需要它                 : 無
為這些軟體包的可選依賴 : 無
與它衝突               : 無
它會取代               : 無
安裝後大小             : 2.20 MiB
打包者                 : Unknown Packager
建置日期               : 西元2020年12月27日 (週日) 12時01分59秒
安裝日期               : 西元2020年12月27日 (週日) 12時02分28秒
安裝原因               : 單獨指定安裝
安裝指令稿             : 是
驗證者                 : 無
```

*- *查詢非使用 pacman 安裝之套件

查詢作業系統中已安裝之套件，有那些是透過 yay ，使用 PKGBUILD 安裝的。

```
$ pacman -Qm
google-chrome 87.0.4280.88-1
xrdp-git 1:0.9.14.r77.ga033cf0e-1
yay 10.1.2-1
```

## 參考資料

### 教學影片

- [Arch Linux full Installation Walkthrough](https://youtu.be/a00wbjy2vns?t=530s)

- [Arch Linux Installation Guiode 2020](https://youtu.be/PQgyW10xD8s)

### 安裝指引

- [Arch Linux 官網安裝指引](<https://wiki.archlinux.org/index.php/Installation_guide_(%E6%AD%A3%E9%AB%94%E4%B8%AD%E6%96%87)>)

- [ArchLinux 安裝指引（UEFI）](https://hackmd.io/@PIFOPlfSS3W_CehLxS3hBQ/r1xrYth9V)

- [成大資工 ArchLinux 安裝指引](http://wiki.csie.ncku.edu.tw/archlinux)

- [ArchLinux 安裝指引（UEFI）](https://averagelinuxuser.com/a-step-by-step-arch-linux-installation-guide/#partition)

### 切割硬碟

- [建置 Linux Server 的硬碟切割用法](https://www.crucial.com.au/blog/2009/11/18/how-to-create-a-new-partition-on-a-linux-server/)

- [如何使用 fdsik 指令切割硬碟](https://linuxize.com/post/fdisk-command-in-linux/)

- [不用 EFI 的安裝法](https://www.itread01.com/content/1545839131.html)

### 快捷鍵設定

[How to run the terminal using keyboard shortcuts in Gnome 2?](https://unix.stackexchange.com/questions/41283/how-to-run-the-terminal-using-keyboard-shortcuts-in-gnome-2)

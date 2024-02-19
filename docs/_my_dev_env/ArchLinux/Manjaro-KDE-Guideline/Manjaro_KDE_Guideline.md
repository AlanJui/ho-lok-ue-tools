---
sidebar: auto
---

# Manjaro KDE 作業系統安裝與設定指引

## 摘要

本文件用於指引使用者，如何透過 VirtualBox 在 MBP-2018 電腦，安裝 Manjaro KDE 桌面
環境之 Arch Linux 作業系統。

作業程序：

- 建立 VM （虛擬電腦）
- 安裝 Manjaro KDE 作業系統
- 更新套件庫

![](https://linuxhint.com/wp-content/uploads/2018/08/4.png)

## VM 需求規格

- 電腦名稱：VBnn-Manjaro-KDE
- 作業系統：Manjaro KDE Linux (manjaro-kde-20.2.1-210103-linux59.iso)
- 處 理 器：6 核心
- 記憶體容量：4096 MB
- 硬碟：
  - 格式：VDI (VirtualBox Disk Image)
  - 容量：128 GB
  - 配置方式：動態配給（Dynamically allocated）

## 建立 VM 作業

### (1) Name and operating system

- Name: VB23-Manjaro-KDE
- Machine Folder: /Users/alanjui/VirtualBox VMs
- Type: Linux
- Version: Arch Linux (64-bit)

![](/assets/img/vbox/2021-03-20_11-49-07.png)

### (2) Memory size

RAM: 4096 MB

![](/assets/img/vbox/2021-03-20_11-49-23.png)

### (3) Hard Disk

- Create a virtual hard disk now

![](/assets/img/vbox/2021-03-20_11-49-44.png)

### (4) Hard disk file type

- VDI (VirtualBox Disk Image)

![](/assets/img/vbox/2021-03-20_11-50-06.png)

### (5) Storage on physical hard disk

- Dynamically allocated

![](/assets/img/vbox/2021-03-20_11-50-20.png)

### (6) File location and size

New virtual hard disk file...

- location: /Users/alanjui/VirtualBox VMs/VB23-Manjaro-KDE.vdi
- size: 128.00 GB

![](/assets/img/vbox/2021-03-20_11-50-47.png)

## 微調 VM 設定

### General

Advanced:

- Shared Clipboard: Bidirectional
- Drag'n'Drop: Bidirectional

![](/assets/img/vbox/2021-03-20_11-59-40.png)

【備忘參考】：

![](/assets/img/vbox/2021-03-20_11-52-09.png)

### System

Processor:

- Processor(s): 6 CPUs

![](/assets/img/vbox/2021-03-20_11-52-30.png)

### Display

Screen:

- Video Memory: 128 MB

![](/assets/img/vbox/2021-03-20_11-53-10.png)

### Storage

Storage Devices / Controller: IDE ==> manjaro-kde-20.2.1-210103-linux59.iso

![](/assets/img/vbox/2021-03-20_11-54-32.png)

### Network

Adapter 1:

- Enable Nework Adapter
- Attached to: Bridged Adapter
- Name: en11: USB 10/100/1000 LAN

![](/assets/img/vbox/2021-03-20_11-55-18.png)

### Share Folders

- Name: vboxsf
- Path: /Users/alanjui
- Access: Full
- Auto Mount: Yes
- At: /home/alanjui/host

![](/assets/img/vbox/2021-03-20_11-58-38.png)

![](/assets/img/vbox/2021-03-20_11-58-23.png)

## 安裝作業系統

### 摘要

- 地域（Location）：

  - 時區（Time zone）：Asia/Taipei
  - 語言（System language）：漢語（繁體中文）
  - 數值與日期格式（Numbers and dates locale）：漢語（繁體中文）

- 鍵盤（Keyboard）：

  - 鍵盤型態（Keyboard Model）：Generic 105-key PC - Default Keyboard Model
  - 按鍵排列方式（Keyboard Layout）：English (US)/Default

- 硬碟切割（Partitions）：

  - Create new MSDOS partition table on /dev/sda
  - Create new 61135MB partition on /dev/sda with file system ext4
  - Create new 4394MB partition on /dev/sda with file system linuxswap
  - Install Manjaro on new ext4 system partition
  - install boot loader on /dev/sda

![](/assets/img/vbox/Start-VM.png)

### (1) VM 開機

開機選項：Boot with open source drivers

![](/assets/img/manjaro-kde/2021-03-20_13-37-26.png)

### (2) 啟動安裝功能

按 [Launch installer] 鈕。

![](/assets/img/manjaro-kde/2021-03-20_13-39-53.png)

### (3) 選擇安裝時顯示語言

繁體中文（台灣）

![](/assets/img/manjaro-kde/2021-03-20_13-40-31.png)

### (4) 選擇電腦所在區域

- 地區：Asia
- 時區：Taipei
- 系統使用語言：繁體中文（台灣）
- 數字與日期格式：繁體中文（台灣）

![](/assets/img/manjaro-kde/2021-03-20_13-40-59.png)

### (5) 選擇鍵盤類型

- 鍵盤型號：Generic 105-key PC
- 語言：Taiwanese
- 類型：Default

![](/assets/img/manjaro-kde/2021-03-20_13-41-27.png)

### (6) 設定磁碟及磁區分割方式

- 安裝磁碟機：VBOX HARDDISK - 128.0 GiB (/dev/sda)
- 安裝方式：抺除磁碟（Swap 選項：Swap 到檔案）
- 開機載入器位置：使用 MBR 安裝到 /dev/sda

![](/assets/img/manjaro-kde/2021-03-20_13-42-59.png)

### (7) 設定使用者

- 一使用者：
  - 稱呼：Alan Jui
  - 登入名稱（帳戶名稱）：alanjui
  - 電腦名稱：vb23-manjaro-kde
- 系統管理員帳號：
  - 設定密碼

![](/assets/img/manjaro-kde/2021-03-20_13-44-41.png)

### (8) 選擇是否需安裝 Office 軟體

選項：LibreOffice

![](/assets/img/manjaro-kde/2021-03-20_13-45-15.png)

### (9) 透過「總覽清單」確認安裝設定

若確認無誤，按 [安裝] 鈕。

![](/assets/img/manjaro-kde/2021-03-20_13-45-45.png)

### (10) 完成安裝及關機

1. 不直接重開機。
2. 使用 Shutdown 方式，將 VM 先關機。

![](/assets/img/manjaro-kde/2021-03-20_13-49-29.png)
![](/assets/img/manjaro-kde/VBox-Manjaro_KDE_Shutdown.png)

### (11) 卸載 CD 後重開機

作業系統安裝結束後，再次重開前，記得需先完成 CD-ROM 卸載工作，以便電腦「開機」動作，可
從「硬碟」正常啟動作業系統。

![](/assets/img/manjaro-kde/VBox-Remove_Disk_from_CD-ROM-0.png)

![](/assets/img/manjaro-kde/VBox-Remove_Disk_from_CD-ROM-1.png)

## 參考資料

### 🔑 [LinuxHint: Install Manjaro Linux on VirtualBox](https://linuxhint.com/install_manjaro_linux_virtualbox/)

### 🔑 [Install Manjaro in VirtualBox](https://linuxconfig.org/install-manjaro-in-virtualbox)

### 🔑 安裝示範影片

  <div style="position: relative;
              padding-bottom: 56.25%; /* 16:9 */
              height: 0;">
    <iframe style="position: absolute;
                   top: 0;
                   left: 0;
                   width: 100%;
                   height: 100%;"
      width="560" height="315" src="https://www.youtube.com/embed/23ZiPOPfSMQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

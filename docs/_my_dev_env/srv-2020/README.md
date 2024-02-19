---
sidebar:auto
---

# SRV-2020 伺服器安裝指引

## 用途

此電腦為 PC 等級之 DIY 組裝電腦。主要功用為：

- 檔案伺服器（Samba）;
- 虛擬電腦執行平台（QEMU/KVM）；
- 文件伺服器（VuePress）；
- Django 應用系統伺服器（Nginx/uWSGI）。

## 硬體環境

### 電腦主要配備

- CPU： Intel i7-3770
- RAM： 16 GB (@4 GB DDRe-1333 x 4)
- MBD： GA-Q77M-D2H REV1.0 主機板
- 顯卡：MSI GeForce GT 1030 AERO 2G OC 顯示卡（不用外接電源
  ）
- 機殻：Asus
- 電源：80+ Plus 450W (七盟 Seventeam ST-450P-CG)
- 硬碟:
  - 內接 1: SATA SSD 500GB (CT500MX500SSD)
  - 內接 2: SATA HDD 2TB (ST2000DM008-2FR102)
  - 外接 3: SATA HDD 4TB

## 週邊規格

- [SRV-2020 伺服器硬體規格明細](./SRV-2020_Hardware)
- [SRV-2020 伺服器硬碟安裝指引](./SRV-2020_HDD)

## 作業指引

### 作業系統安裝指引

- [Ubuntu 22.04 作業系統安裝指引](./Ubuntu-2204)
- [SRV-2020 伺服器硬碟安裝指引](./SRV-2020_HDD)
- [掛載第二顆硬碟作業指引](./掛載第二顆硬碟)
- [fstab 設定檔](./fstab): 硬碟切割區及掛載設定

### 網路設定指引

- [使用 netplan 設定網路介面](./netplan.md)
- [使用 netplan 設定虛擬橋接器](./qemu-vbr.md)
- [設定 Virtual Machines Bridge](./VM_Bridge.md)
- [區域網路版 DNS 伺服器](./local-network-dns.md)
- [SSH Server 安裝指引](https://linuxize.com/post/how-to-enable-ssh-on-ubuntu-20-04/)
- [Ubuntu 18.04 xRDP 設定與設定](./Ubuntu_18_04_+_xRDP.md)
- [Gnome Vino VNC Server 安裝與設定](./Gnome_Vino_VNC_Server.md)

### 服務安裝與設定

- [建置 Node.js 作業環境](./nodejs-guideline.md)
- [建置 Pyton 作業環境](./python-django-guideline.md)
- [使用 Nginx 建置 HTTP 伺服器](./nginx-guideline.md)
- [佈署 Django 應用系統](./Deploy-Django-App.md)
- [Samba Server 安裝作業指引](./Samba安裝與設定)
- [Samba Server 設定檔 (smb.conf)](./smb-conf)

### 應用軟體安裝與設定

- [Ubuntu 設定檔（dotfiles）](https://github.com/AlanJui/ubuntu-dotfiles)
- [在 Ubuntu 20.04 安裝 Davinci Resolve 16 影片編輯軟體](./How_to_install_Davinci_Resolve_16_on_Ubuntu_20_04.md)

### 虛擬電腦建置

- [《Ubuntu 20.04 VM 建置作業指引》](/Debian/Ubuntu-Install_SIT_Server-Initial.md)
- [《Ubuntu QEMU + KVM + Libvirt 虛擬電腦建置及管理工具》](./Ubuntu_QEMU_KVM_Libvirt.md)

## 異常診斷與問題排除

- [Ubuntu 伺服器常見問題與狀況排除指引](/_my_dev_env/srv-2020/Ubuntu_FAQ)

## 參考文件

### [舊伺服器安裝與設定指引](./SRV-01_Shuttle_SH67H3)

本電腦之主機板，原為 Shuttle XPC SH67H3，因故障無法維修，故
而更換。

### [Install and Configure Dnsmasq on Ubuntu 22.04|20.04|18.04](https://computingforgeeks.com/install-and-configure-dnsmasq-on-ubuntu/)

說明如何在「區域網路」，建置簡易型之 DNS 伺服器。

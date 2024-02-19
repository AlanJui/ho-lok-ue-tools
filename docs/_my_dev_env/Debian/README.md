---
sidebar:auto
---

# Debian 作業系統指引

## 作業環境建置指引

### Django App 開發

- [《Ubuntu 建置 Django 整合測試伺服器安裝指引》](./Ubuntu-Install_SIT_Server.md)
- [《Ubuntu 建置 Django 開發作業環境指引》](./Ubuntu-Build_Dev_Platform.md)
- [《macOS 建置 Django 開發作業環境指引》](/macOS/macOS-Build_Dev_Platform.md)

### 虛擬電腦建置

- [《Ubuntu 20.04 VM 建置作業指引》](/Debian/Ubuntu-Install_SIT_Server-Initial.md)
- [《Ubuntu QEMU + KVM + Libvirt 虛擬電腦建置及管理工具》](./Ubuntu_QEMU_KVM_Libvirt.md)

## 常用軟體安裝與設定

### Ubuntu

- [SSH Server 安裝指引](https://linuxize.com/post/how-to-enable-ssh-on-ubuntu-20-04/)
- [Samba Server 安裝指引](./Ubuntu_Samba_Server_安裝指引.md)
- [使用 Nginx 建置 HTTP Server 指引](./Ubuntu-2004_Install_Nginx_as_HTTP_Server.md)
- [Django App Server 安裝指引](./Ubuntu_Install_Django_App_Server.md)
- [Ubuntu 設定檔（dotfiles）](https://github.com/AlanJui/ubuntu-dotfiles)
- [Ubuntu 18.04 xRDP 設定與設定](./Ubuntu_18_04_+_xRDP.md)
- [Gnome Vino VNC Server 安裝與設定](./Gnome_Vino_VNC_Server.md)
- [在 Ubuntu 20.04 安裝 Davinci Resolve 16 影片編輯軟體](./How_to_install_Davinci_Resolve_16_on_Ubuntu_20_04.md)

### Debian

N/A

## 異常問題診斷與狀況排除

### FAQ

- [Debian FAQ](./Debian_FAQ.md)
- [Ubuntu FAQ](./Ubuntu_疑難雜症處置法.md)

### 快速刪除大容量目錄

使用 rm -rf 指令，欲刪除之目錄，若含有：許多「子目錄」及大量「檔案」時，
經常會發生「執行速度」太慢的惱人問題；因執行時間太長，甚至會令人懷疑是否
系統當機。

🔨 處置方法

將「刪除」指令，改用 rsync -a --delete [empty_dir][dir_to_be_removed] 。

1. 建立一個 [empty_dir] 。

例如：

```
sudo su
mkdir /home/blank
```

2. 執行目錄刪除指令。

```
rsync -a --delete  /home/blank /var/www/blog.ccc.tw.local
```

## 參考資料

- [Ubuntu 18.04 虛擬電腦安裝與設定](./Ubuntu_18_04_4_VM_Setup_for_DEV.md)

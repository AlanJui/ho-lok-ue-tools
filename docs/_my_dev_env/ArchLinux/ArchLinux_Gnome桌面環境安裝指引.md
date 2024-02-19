---
sidebar: auto
---

# Arch Linux: Gnome 桌面環境安裝指引

## 文件摘要

提供「作業程序」，說明如何在 Arch Linux 作業系統，安裝 Gnome 桌面環境。

## 安裝作業程序

### 安裝桌面環境

1. 確認電腦能連上 Internet

```
ip a s
ping -c 5 www.gmail.com
```

2. 桌面環境安裝準備（Video Display）

```
sudo pacman -S xorg xorg-server
```

3. 安裝 Gnome 桌面

```
sudo pacman -S gnome gnome-extra
```

【註】： 安裝 Xfce 桌面

```
sudo pacman -S xfce4 xfce4-goodies
```

4. 變更作業系統「預設使用語系」，改為：中文

```
vim /etc/locale.conf
```

locale.conf:

```
LANG=zh_TW.UTF-8
LC_COLLATE=C
```

5. 啟用 Display Manger （Login）

```
sudo systemctl enable gdm.service
sudo systemctl start gdm.service
```

6. 刪除 Gnome 桌面

```
sudo pacman -Runs gnome gnome-extra
```

## 安裝 Gnome extensions

安裝「桌面環境」軟件

```
sudo pacman -S chrome-gnome-shell
```

→ https://extensions.gnome.org/local/

## 參考資料

### 安裝桌面環境

[Arch linux 安裝](https://hackmd.io/@PIFOPlfSS3W_CehLxS3hBQ/r1xrYth9V)

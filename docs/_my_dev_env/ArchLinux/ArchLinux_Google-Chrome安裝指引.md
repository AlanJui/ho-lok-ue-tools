---
sidebar: auto
---

# Google Chrome 安裝指引

## 文件摘要

提供「作業程序」，說明如何在 Arch Linux 作業系統，安裝 Google Chrome 軟體。

## 安裝作業程序

### 自 AUR 套件倉安裝 Google Chrome

(1) 使用「關鍵字」搜尋： google chrome aur

(2) 抄錄「Git Clone URL」: https://aur.archlinux.org/google-chrome.git

(3) 更新 Package Databases

```
sudo pacman -Sy
```

(4) 使用 git 自「Git Clone URL」網址，下載原始程式碼

```
cd ~/build
git clone https://aur.archlinux.org/google-chrome.git
```

(5) 編釋原始程式碼及組建安裝用套件（製作軟體包）

```
cd google-chrome
makepkg -si

ls *.pkg.tar.zst
```

### 使用作業系統提供的套件包進行安裝

```
sudo pacman -U  google-chrome-87.0.4280.88-1-x86_64.pkg.tar.zst

sudo pacman -Syu
```

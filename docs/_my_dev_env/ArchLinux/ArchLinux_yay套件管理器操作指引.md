---
sidebar: auto
---

# yay 套件管理器操作指引

## 文件摘要

提供「操作指引」，說明如何在 Arch Linux 作業系統，依需求情境，使用 yay 套件管理器的各種指令進行操作。

## 安裝作業指引

### 安裝程序

1. Prepare build environment.

```
sudo pacman -Sy base-devel
```

2. Prepare workspace to build.

```
cd
mkdir build && cd $_
```

3. Install yay package.

```
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### 驗證程序

Install Chrome from Terminal.

1. Install from source.

```
yay -S google-chrome
```

2. Verify.

```
which google-chrome-stable

google-chrome-stable
```

3. Configure shortcut.

```
ln -sfn $(which google-chrome-stable) ~/.local/bin/google-chrome
```

## 常用操作指引

- 搜尋欲安裝之套件，是否存在於 AUR 容器中

```
yay -Ss <package-name>
```

- 安裝套件

```
yay -S <package-name>
```

- 更新作業系統中已安裝之套件到最新版本

```
yay -Sua
```

- 解除已安裝之套件

```
yay -Rns <pkg_name>
```

- 清除作業系統中已解除安裝，但仍殘留之所有「相依套件」
  To clean up all unwanted dependencies on system

```
yay -Yc
```

- 顯示所有系統已安裝之套件
  Print system statics

```
yay -Ps
```

## 參考文件

### yay 安裝及操作

[安裝及使用 Arch Linux/Manjaro 系統中的 AUR 助手 yay](https://zh-hant.hotbak.net/key/yay%E4%BD%BF%E7%94%A8.html)

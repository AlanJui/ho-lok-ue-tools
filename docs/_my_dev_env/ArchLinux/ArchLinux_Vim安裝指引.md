---
sidebar: auto
---

# Vim 8.2 安裝指引

## 文件摘要

提供「作業程序」，說明如何在 Arch Linux 作業系統，安裝 Vim 8 編輯器軟體。

## 安裝作業程序

1. 自 AUR 安裝套件

```
yay -Ss vim
yay -S vim
```

```
$ sudo pacman -S vim
正在解決依賴關係…
正在檢查衝突的軟體包…

軟體包 (2) vim-runtime-8.2.2380-1  vim-8.2.2380-1

總計下載大小：   8.18 MiB
總計安裝大小：  34.01 MiB
淨升級大小：   0.01 MiB

:: 進行安裝嗎？ [Y/n]
....
```

2. 自 GitHub 下載設定檔。

```
git clone https://github.com/AlanJui/vim8.git ~/.vim
```

3. 安裝 Vim Plugins 。

```
vim
:PlugInstall
:PlugUpdate
:q
```

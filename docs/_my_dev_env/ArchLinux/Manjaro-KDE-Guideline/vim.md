---
sidebar: auto
---

# Vim 安裝與設定指引

前置作業：

- [設定終端機作業環境](./terminal.md)
- [建置及設定 SSH Key](./ssh.md)

作業程序：

1.  Install Vim
2.  Clone configurations from GitHub Repo
3.  Setup for Vim plugins

## Install Vim

安裝 Vim 8.2 套件。

```
yay -Ss vim
yay -S vim
```

or...

```
sudo pacman -S vim
```

## Clone configurations from GitHub Repo

**下載 Vim 8 設定檔**。

```
git clone git@github.com:AlanJui/vim8.git ~/.vim
```

## Setup for Vim plugins

- 安裝 Vim Plugins

先啟動 Vim ，然後再於 Commnad Line 執行以下指令：

```
:PlugInstall
:PlugUpdate
:UpdateRemotePlugins
:q
```

- 安裝 Vim Plugin 相依之套件

```
$ sudo pacman -S ripgrep

$ sudo pacman -S fzf
```

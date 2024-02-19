---
sidebar: auto
---

# Arch Linux: Tmux 安裝指引

## 文件摘要

提供「作業程序」，說明如何在 Arch Linux 作業系統，安裝 Tmux 軟體。

## 安裝作業程序

1. 安裝 tmux 套件。

```
yay -S tmux
```

2. 啟動 tmux 。

```
tmux
```

3. 安裝 Tmux Extension: Oh My Tmux。

```
$ cd
$ git clone https://github.com/gpakosz/.tmux.git
$ ln -s -f .tmux/.tmux.conf
$ cp .tmux/.tmux.conf.local .
```

4. 設定作業環境。

```
vim ~/.tmux.conf.local
```

.tmux.conf.local:

```
# clipboard
tmux_conf_copy_to_os_clipboard=true

set -g mouse on
:
# replace C-b by C-a
```

5. 依設定檔重啟 tmux 。

```
tmux source-file ~/.tmux.conf
```

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610682752351_image.png)

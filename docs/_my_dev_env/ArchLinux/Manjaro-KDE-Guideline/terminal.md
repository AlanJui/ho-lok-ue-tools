---
sidebar: auto
---

# 終端機設定指引

作業程序：

- 安裝 Nerd Font 字型
- 設定終端機使用 Nerd Font 字型

## 安裝 Nerd Font 字型

1. Download Nerd Font to Host.

```
cd build
wget https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/FiraMono/Regular/complete/Fira%20Mono%20Regular%20Nerd%20Font%20Complete.otf
```

2. Copy font to system-wide font:

```
sudo cp 'Fira Mono Regular nerd Font Complete.otf' /usr/share/fonts/
```

```
$ fc-cache -f -v
$ fc-list | grep "Fira"
```

```
$ su -
$ cd /usr/share/fonts/truetype/

$ wget https://github.com/source-foundry/Hack/releases/download/v3.003/Hack-v3.003-ttf.zip
$ unzip Hack-v3.003-ttf.zip

$ fc-cache -f -v
$ fc-list | grep "Hack"
```

## 設定終端機使用 Nerd Font 字型

1. 下載字型

```
mkdir -p ~/.local/share/fonts && cd $_

curl -fLo "Fira Code Regular Nerd Font Complete.otf" https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/FiraMono/Regular/complete/Fira%20Mono%20Regular%20Nerd%20Font%20Complete.otf?raw=true
```

https://www.chrisatmachine.com/Linux/05-nerd-fonts/

2. 設定 Terminal 選用 “FiraMono Nerd Font” 字型

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610682123506_image.png)

## 驗證

3. 執行 vim 驗證

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610682234961_image.png)

## 參考

---
sidebar: auto
---

# Arch Linux 中文作業環境安裝指引

## 文件摘要

提供「操作指引」，說明如何在 Arch Linux 作業系統，安裝「中文作業環境」，如：中文輸入法、中文字型。

## 安裝作業程序

https://jun-iwu.gitbooks.io/archlinux/content/jian-li-zhong-wen-huan-jing.html

### 安裝 Fcitx 5 中文輸入法

N/A

### 安裝 iBus 中文輸入法

https://chakra-zh.blogspot.com/2015/10/fcitx.html

1. 安裝中文輸入法套件

```
sudo pacman -S ibus ibus-rime ibus-pinyin
```

2. 設定 rime 中文輸入法，預設使用「倉頡輸入法」：

```
mkdir -p ~/.config/ibus/rime
vim ~/.config/ibus/rime/default.custom.yaml
```

default.custom.yaml:

```
patch:
  schema_list:
    - schema: cangjie5
    - schema: luna_pinyin
```

【註】：先「登出」再「登入」，以便 iBus 中文輸入介面啟動。

3. 重新啟動 ibus 中文輸入法服務

```
ibus-daemon &
```

**4. 啟用中文輸入法**

設定值 》地區和語言 》＋ 》中文 》中文（Rime）》加入

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610679011728_image.png)

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610679066141_image.png)

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610679170420_image.png)

### 安裝中文字型

1. 安裝字型檔案

```
sudo pacman -S noto-fonts noto-fonts-cjk noto-fonts-emoji
sudo pacman -S adobe-source-han-sans-otc-fonts
sudo pacman -S adobe-source-han-serif-otc-fonts
```

https://medium.com/@archerindigo/manjaro%E5%AD%97%E5%9E%8B%E8%A8%AD%E5%AE%9A%E6%8A%98%E9%A8%B0%E8%A8%98-%E4%B8%8A-b0483784b03e

```
pacman -Su noto-fonts-cjk
```

2. 設定桌面環境使用字型

https://linuxhint.com/arch_linux_gnome_tweak_tool/

```
sudo pacman -Sy
sudo pacmn -S gnome-tweaks
```

![](https://paper-attachments.dropbox.com/s_16D737C3B84B5950DDA27DE37109A396E8115EADB5C48E5438CCBB1F3056046E_1608862160528_image.png)

## 參考資料

- [安裝 iBus 中文輸入法](<https://wiki.archlinux.org/index.php/IBus_(%E6%AD%A3%E9%AB%94%E4%B8%AD%E6%96%87)>)

- [IBus](https://wiki.ubuntu.org.cn/IBus#.E5.90.AF.E7.94.A8IBus.E6.A1.86.E6.9E.B6.EF.BC.9A)

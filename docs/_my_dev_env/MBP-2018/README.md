---
sidebar:auto
---

# MBP-2018 開發機安裝指引

## 摘要

### 電腦用途

MacBook Pro 15" (2018) 筆電，屬於用戶端電腦；主要功能用於軟
體開發及文書處理。

### 硬體環境

- 處理器： Intel Core i7 (2.6GHz 6 核心)
- 記憶體： 16 GB 2400MHz DDR4 (可擴充：32 GB)
- 顯示器： 15.4 吋 IPS Retina LED, 220 DPI，解析度 2880 x
  1800 (1920 x 1200)
- 顯示卡： Radeon Pro 560X 4 GB GDDR5
- 硬碟: 512 GB SSD
- 擴充埠： 4 x Thunderbolt 3 (USB-C) 埠，可支援：
  - 充電
  - DisplayPort
  - Thunderbolt （最高可達 40 Gbps）
  - USB 3.1 Gen 2（最高可達 10 Gbps）
- Wi-Fi： 802.11ac Wi-Fi 無線網路；IEEE 802.11a/b/g/n 相容
- 藍牙： 藍牙 5.0

### 軟體環境

- 作業系統: macOS 11.2.3

## 作業指引

### 硬體配備指引

- [MacBook Pro (15 英寸，2018) - 技術規格](https://support.apple.com/kb/SP776?locale=zh_TW)

### 作業系統安裝指引

需要在 MacBookPro 筆電，重新安裝 macOS 作業系統時，只要筆電
可連上 Internet，便可透過筆電內建之「macOS 復原」功能，便能
進行作業系統之安裝作業。

啟動「macOS 復原」功能的方法有三種。該擇何種為之，可依下列之
「安裝需求」擇其一：

- 使用原廠在「硬碟」內預裝的「安裝軟體」：[Command] + [R] ；

- 透過網路安裝筆電出廠預裝的作業系統：[Shift] + [Optiion] +
  [Command] + [R]；

- 透過網路安裝與筆電相容，最新版的 macOS 作業系統：
  [Option] + [Command] + [R]。

至於操作細節，請詳參考文
件[重新安裝 macOS](https://support.apple.com/zh-tw/HT204904)之
說明。

## 常用軟體安裝與設定

- [Yabai 安裝與設定指引](/_my_dev_env/yabai/)：mmacOS 版 i3
  Windows Manager 工具
- [在 macOS 啟用 QEMS](./Start_QEMU_on_macOS.md)：macOS 版
  QEMU VM 建置工具 s
- [使用 QEMU 建置虛擬電腦](./VM_on_macOS_with_Libvirt_+_QEMU)

## 開發環境建置作業

- [Python 開發環境建置作業](./MacBookPro_Python_guideline.md)
- [Django 應用系統開發環境建置作業](./MacBookPro_Django_guideline.md)
- [Node.js 開發環境建置作業](./MacBookPro_nodejs_guideline.md)
- [Lua 開發環境建置作業](./MacBookPro_lua_guideline.md)

## 軟體佈署／文件發行作業

- [將 VuePress 文件佈署至 GitHub](./Deploy_Vuepress_to_GitHub.md)

## 異常問題診斷與狀況排除

- [macOS 開發機常見問題與狀況排除指引](/macOS/macOS_FAQ)

## 參考文件

- [重新安裝 macOS](https://support.apple.com/zh-tw/guide/mac-help/mchlp1599/mac)

# Ubuntu 22.04

# Network Configuration

<https://blog.devcloud.com.tw/ubuntu-22-04-wang-lu-she-ding-jing-tai-ip/>

    network:
      version: 2
      ethernets:
        eno1:
          dhcp4: no
          dhcp6: no
          addresses: [192.168.66.10/24]
          gateway4: 192.168.66.1
          nameservers:
            addresses: [8.8.8.8]

## Network Configuration

<https://linuxconfig.org/ubuntu-22-04-network-configuration>

## How to add static route with NetPlan

<https://linuxconfig.org/how-to-add-static-route-with-netplan-on-ubuntu-22-04-jammy-jellyfish-linux>

# KVM/QEMU

<https://www.linuxtechi.com/how-to-install-kvm-on-ubuntu-22-04/>

/etc/netplan/01-netcfg.yaml

    network:
      version: 2
      ethernets:
        eno1:
          dhcp4: false
          dhcp6: false
      # add configuration for bridge interface
      bridges:
        br0:
          interfaces: [eno1]
          dhcp4: false
          addresses: [192.168.66.10/24]
          routes:
            - to: default
              via: 192.168.66.1
              metric: 100
          nameservers:
            addresses: [8.8.8.8, 4.2.2.2]
          parameters:
            stp: false
          dhcp6: false

# Install Basic

    sudo apt install git curl


    sudo apt install build-essential manpages-dev

# Neovim

## 安裝作業

    sudo apt-get install software-properties-common


    sudo add-apt-repository ppa:neovim-ppa/stable
    sudo apt update
    sudo apt install neovim


    sudo apt-get install python-dev python-pip python3-dev python3-pip

## 異常排除作業

使用 sudo 操作 nvim ，致「使用者帳戶」自動切換成 root ，因而
「登入」時，原設定檔： %HOME/.config/nvim/init.lua 無法再被
讀取及使用。

【解法一】：

    sudo -E -s nvim /<DirPath>/<FileName>

【解法二】：使用 sudoedit 指令亦可。但 SHELL 設定檔，需有「
環境變數」：EDITOR 的設定 ，如： ~/.zshrc

    ...
    export EDITOR="nvim"
    ...

# VNC

VNC Clinet 欲連接 Ubuntu Desktop 內建的 VNC Server，結果卻出
現如下之錯誤訊息： "The connection was refused by the host
computer” ⋯⋯

【Ref】:
<https://help.realvnc.com/hc/en-us/articles/360002254738-VNC-Connect-Error-Messages#connectivity-error-messages-0-0>

| The connection was refused by the host computer | VNC
Server is either not running, or not running on the
specified port. | Ensure VNC Server is running. If you are
establishing a direct connection and have specified a port
other than the default for VNC (5900), ensure VNC Server is
configured to use that port. |

## VNC Host

1. 安裝 Ubuntu 預設的 VNC Server

   sudo apt install vino

2. 要求 Vino（VNC Server），可接受 Client 端，以「不加密」方
   式連線。

   gsettings set org.gnome.Vino require-encryption false

3. 驗證設定。

   gsettings get org.gnome.Vino require-encryption false

【註】：查詢/變更 Gnome 的設定（即：Current user’s GSettings
database），可使用工具： dconf-editor 。

# 參考

---

## Upgrade from Ubuntu 20.04 to 22.04

<https://websetnet.net/zh-TW/how-to-upgrade-from-ubuntu-20-04-to-ubuntu-22-04-lts-step-by-step-guide/>

## Networking on Ubuntu 22.04

<https://www.itzgeek.com/how-tos/linux/ubuntu-how-tos/set-a-static-ip-address-on-ubuntu-22-04.html>

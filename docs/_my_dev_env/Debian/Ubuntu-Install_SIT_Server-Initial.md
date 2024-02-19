---
sidebar: auto
---

# Ubuntu 20.04 VM 建置作業指引

## 摘要

如何在 macOS 平台，使用 VirtualBox 建置 VM ，使之成為 Django App 在「開發段段」
所需使用之「整合測試伺服器」。VM 使用之作業系統為：Ubuntu Desktop 20.04 。

【Host 需求摘要】：

- 主機(Host)：MacBookPro 2012

  - CPU: 2.9 GHz 2 核心 Intel Core i7
  - RAM: 16 GB 1600 MHz DDR3
  - 顯卡：Intel HD Graphics 4000 1536 MB
  - 硬碟：1TB SSD
  - OS: macOS Catalina

- VirtualBox: V6.1.18 (Qt5.6.3)

## VM 建置作業

### 在 VirtualBox 建置 VM

於 Host 機（如：MBP-2012），執行作業。

1. 使用：「VirtualBox 管理員」，建置 VM：VB-Ubuntu-2004。

2. 啟用 Remote Display 功能。

### 在 VM 安裝作業系統

1. 啟動 VM ，執行 Ubuntu 20.04 安裝作業。

2. 重啟 VM ，更新已安裝套件。

```
sudo apt upgrade -y
```

3. 安裝 VirtualBox Guest Additions

- 安裝套件

```
sudo apt install build-essential
```

- 自光磁的執行檔，安裝 VirtualBox Guest Additions
  插入 VirtualBox Guest Additions CD （在 Host 掛載 ISO 檔案），並執行 RUN 。

- 重新開機，以便啟動 VirtualBox Guest Additions 功能，令 VM（即 VirtualBox Guest）
  能與 Host 的整合功能啟用（如：畫面、滑鼠、鍵盤等），便利 VM 之操作。

4. 關閉「電源」設定中：「螢幕轉黑」之節省電源。

設定》電源》節省電源》螢幕轉黒》永不

## 設定遠端作業環境

### 啟用 Remote Display 功能

啟用 VirtualBox Guest 的 Remote Display 功能，以便可自 Host 或自 LAN 網路其它電腦，
使用 RDP （Port: 3839）通信協定連上 VM 。

### 啟用 SSH Service

1. 安裝套件

```
sudo apt install openssh-server ssh
```

2. 檢查 SSH Service 已執行；且能於開機後自動啟動。

- 查看 Service Status

```
systemctl status ssh
```

- 檢查 Active：顯示「active (running)」
- 檢查 Loaded：顯示「enabled」

3. 取得 VM 的 IP 位址。

```
ip a
```

4. 使用 LAN 中的某電腦，驗證能透過 ssh 登入 VM 。

```
ssh [UserName]@[IP]
```

📺

```
alanjui@MBP-2018:~$ ssh alanjui@192.168.66.220
The authenticity of host '192.168.66.220 (192.168.66.220)' can't be established.
ECDSA key fingerprint is SHA256:heZ/pyX8MSwujeXDr6H3OMEljccdOAHd/tDPWvI9Df0.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '192.168.66.220' (ECDSA) to the list of known hosts.
alanjui@192.168.66.220's password:
Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.8.0-48-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

現在可以安裝 0 項更新。
其中有 0 項更新為安全性更新。

Your Hardware Enablement Stack (HWE) is supported until April 2025.

The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

alanjui@VB02-Ubuntu-2004:~$
```

### 啟用免密碼 SSH 登入功能

使用 SSH 指令登入 Remote Server ，在過程中，原本需要輸入「密碼」：

```
ssh [UserName]@[Remote_Server_IP]
```

待完成此處之設定作業後，往後的「登入作業」過程，則可略去「輸入密碼」之操作。

1. 執行 ssh key 建置指令。

```
ssh-keygen
```

📺

```

```

2. 將 SSH Public Key 存放一副本至 Remote SSH Server 。

```
ssh-copy-id [UserName]@[Remote_IP]
```

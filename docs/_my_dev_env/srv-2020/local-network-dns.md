---
sidebar: auto
---

# 區域網路用 DNS 伺服器

## 摘要

使用 dnsmasq ，建置區域網路適用之簡易型 DNS 伺服器。

## 作業程序

### 1. 安裝前置作業。

停用作業系統的「主機名稱解析服務(resolved service)」。

```shell
sudo systemctl disable systemd-resolved
sudo systemctl stop systemd-resolved
```

解除 symlink 設定。
```sh
ls -lh /etc/resolv.conf

sudo unlink /etc/resolv.conf
```

建立新的「主機名稱解析服務設定檔」。

```bash
echo nameserver 8.8.8.8 | sudo tee /etc/resolv.conf
```

### 2. 安裝軟體套件。

執行安裝指令。

```bash
sudo apt install dnsmasq
```

設定「設定檔」。

```bash
sudoedit /etc/dnsmasq.conf
```

【檔案內容】：

```bash
# Listen on this specific port instead of the standard DNS port
# (53). Setting this to zero completely disables DNS function,
# leaving only DHCP and/or TFTP.
port=53
# Never forward plain names (without a dot or domain part)
domain-needed
# Never forward addresses in the non-routed address spaces.
bogus-priv
# By  default,  dnsmasq  will  send queries to any of the upstream
# servers it knows about and tries to favour servers to are  known
# to  be  up.  Uncommenting this forces dnsmasq to try each query
# with  each  server  strictly  in  the  order  they   appear   in
# /etc/resolv.conf
strict-order
# Set this (and domain: see below) if you want to have a domain
# automatically added to simple names in a hosts-file.
expand-hosts
# Set the domain for dnsmasq. this is optional, but if it is set, it
# does the following things.
# 1) Allows DHCP hosts to have fully qualified domain names, as long
#     as the domain part matches this setting.
# 2) Sets the "domain" DHCP option thereby potentially setting the
#    domain of all systems configured by DHCP
# 3) Provides the domain part for "expand-hosts"
# domain=thekelleys.org.uk
domain=ccc.tw.local

# Set Listen address
# listen-address=127.0.0.1 # Set to Server IP for network responses
listen-address=192.168.66.10 # Set to Server IP for network responses
```

### 3. 啟動 dnsmasq 服務。

```bash
sudo systemctl restart dnsmasq
```

### 4. 設定 dnsmasq 所需之 DNS 紀錄

編輯 hosts 檔案。

```bash
sudoedit /etc/hosts
```

【檔案內容】：

```bash
192.168.66.10   blog.ccc.tw.local
192.168.66.10   app1.ccc.tw.local
192.168.66.10   app2.ccc.tw.local
```

重啟 dnsmasq 服務。

```bash
sudo systemctl restart dnsmasq
```

### 5. 驗證 dnsmasq 服務已能正常作業。

執行 dig 指令，查詢 DNS 記錄。

```bash
dig blog.ccc.tw.local
```

```bash
dig blog.ccc.tw.local A +noall +answer
```



## 參考資料

- [Install and Configure Dnsmasq on Ubuntu 22.04|20.04|18.04](https://computingforgeeks.com/install-and-configure-dnsmasq-on-ubuntu/)

- 停用 NetworkManager 服務

```
sudo systemctl stop NetworkManager
```

---
sidebar: auto
---

# netplan 設定指引

## 摘要

透過指令模式，在 Ubuntu 20.04 設定網路介面，其方式約有兩種：
 - netplan
 - Network Manager

據聞自 Ubuntu 22.04 開始，使用 netplan 方式來設定將成主流。

以下之操作，需在伺服器本機上執行；不能透過 ssh 連線，在 ssh client
端，進行遠端操作。

## 作業程序

### 1. 查詢作業系統已能辨識到的網路介面

```shell
ip a
```

### 2. 查詢 netplan 使用的預設目錄中，已有那些設定

```
ls -al /etc/netplan
```

### 3. 預覽已有之設定檔內容

```
cat /etc/netplan/*.yaml
```

### 4. 建立自己使用的「設定檔」

```
sudoedit /etc/netplan/01-network-manager-all.yaml
```

【檔案內容】：

```
network:
  version: 2
  renderer: NetworkManager
  ethernets:
    eno1:
      dhcp6: no
      dhcp4: no
      addresses: [192.168.66.10/24]
      gateway4: 192.168.66.1
      nameservers:
        addresses: [8.8.8.8]
```

【Virtual Bridge Configuration】:

00-virtual-bridge.yaml
```
network:
  version: 2
  renderer: NetworkManager
  ethernets:
    eno1:
      dhcp4: no
      dhcp6: no
  bridges:
    br0:
      interfaces: [eno1]
      addresses:
        - 192.168.66.10/24
      nameservers:
        addresses: [192.168.66.1, 8.8.8.8]
      routes:
        - to: default
          via: 192.168.66.1
```

### 5. 測試「設定檔」內容無誤

```
sudo netplan try
```

### 6. 啟用「設定檔」，用以設定網路介面

```
sudo netplan apply
```

### 7. 重啟作業系統的網路服務

```
sudo systemctl restart network-manager
```

### 8. 驗證 IP 位址是否如設定檔所指定

```
ip a
```


## 參考資料

- [How to configure networking with Netplan on Ubuntu](https://vitux.com/how-to-configure-networking-with-netplan-on-ubuntu/)

---
sidebar: auto
---

<!-- markdownlint-disable MD024 MD043 -->

# 執行環境建置指引

## 摘要

本專案之應用系統，其執行環境需符合以下規格：

- Ubuntu LTS 版作業系統
- 使用 Python 直譯器

## 作業流程

- 安裝 Ubuntu LTS 版作業系統
- 安裝及設定 SSH
- 建立需要之使用者與群組
- 設定 Python 執行環境

## Python 執行環境

## 異常檢驗與問題排除

### 檢查用戶帳號是否已建立

```sh
❯ getent passwd www-data
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
```

### 檢查群組是否已建

```sh
❯ getent group www-data
www-data:x:33:
```

### 檢查用戶是否已加入某群組

```sh
❯ groups www-data
www-data : www-data

❯ groups alanjui
alanjui : alanjui adm cdrom sudo dip plugdev kvm lpadmin lxd sambashare libvirt

```

### 查詢用戶已被加入之各群組

```sh
❯ id www-data
uid=33(www-data) gid=33(www-data) groups=33(www-data)

❯ id alanjui
uid=1000(alanjui) gid=1000(alanjui) groups=1000(alanjui),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),109(kvm),122(lpadmin),134(lxd),135(sambashare),138(libvirt)
```

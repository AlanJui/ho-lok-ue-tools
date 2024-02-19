---
sidebar: auto
---

<!-- markdownlint-disable MD024 MD043 -->

# SSH 操作指引

## SSH Key 建置作業

### 製作 SSH Key Pair

    $ ssh-keygen -o -t rsa -C "your@email.com"

    ssh-keygen -o -t rsa -C "alanjui@Amos-Aspire-5745G"
    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/alanjui/.ssh/id_rsa):
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in /home/alanjui/.ssh/id_rsa.
    Your public key has been saved in /home/alanjui/.ssh/id_rsa.pub.
    The key fingerprint is:
    SHA256:qapI8s9pQ+vyfxW1jq5FKCpzJ0n6uYGEUSBglrjEUrA alanjui@Amos-Aspire-5745G
    The key's randomart image is:
    +---[RSA 2048]----+
    |O*+              |
    |**          .    |
    |E.         . .   |
    |.o       o. .    |
    |. . . . S .+     |
    | . +.o o .o .    |
    |..=.*.o  o.      |
    |oo.*+B  ...      |
    |. oB@+....       |
    +----[SHA256]-----+

### 抄錄 Public Key

    $ cat ~/.ssh/id_rsa.pub

    cat ~/.ssh/id_rsa.pub
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDTuGuvjrgi2zJWhnJEmMjIyQrcRlH9dDcpxGGtM7IOsiNcmUMOQVRLAqzExcbaI0ri9kMyR3vl1yF9EULswx3CdbVfRSauH3MDHmTtJSzoo5yRNTrYOHEe60fAajhjGXU+zOtXXxmX/extGticI8XpfSYS2r0/Fq8SxamUOpB6zLJykAzCnopDLpQdSP3Oz+lHMUqrQZPeKh5V2ZEftuY155+4Z2/6cB5fMxLsMsLlI8bKwqwzpCa5LP4uVZkil5weCO0UYM57mC21+hPNkvPTK9NxTOmuaaGGBzPRCfm1X2z8mVQ2DEO+awyUs0OWnu9OnN5l7PpdoTM3FnXEbkfT alanjui@Amos-Aspire-5745G

---

## SSH 遠端自動登入

為簡化 SSH 遠端登入的操作步驟，省略每次連線均需輸入：使用者
帳號、密碼的動作，可透過將 SSH Client 端的公鑰置入 SSH
Server 端的作法，滿足以上之操作需求。

### 設定作業

假設如下：

- SSH Server IP: 192.168.66.101
- SSH Client IP: 192.168.66.31

1. 在 Client 機，啟動 Client 端的終端機 APP 。

2. 使用 ssh-copy-id 指令，將 Client 端的公鑰置入 SSH Server
   端。

   ssh-copy-id <Host_IP>

   $ ssh-copy-id 192.168.66.101 /usr/bin/ssh-copy-id: INFO:
   Source of key(s) to be installed:
   "/Users/alanjui/.ssh/id_rsa.pub" /usr/bin/ssh-copy-id:
   INFO: attempting to log in with the new key(s), to filter
   out any that are already installed /usr/bin/ssh-copy-id:
   INFO: 1 key(s) remain to be installed -- if you are
   prompted now it is to install the new keys Password:

   Number of key(s) added: 1

   Now try logging into the machine, with: "ssh
   '192.168.66.101'" and check to make sure that only the
   key(s) you wanted were added.

### 驗證作業

驗證以上的設定無誤。

1. 在 SSH Client 機，啟動終端機 APP。

2. 執行 SSH 連線。

   ```sh
   ssh alanjui@192.168.66.101
   ```

3. 查檢下列事項，若結果均為：「是」，則表設定正確。

   - 不需再輸入：使用者帳號、密碼；
   - 可以直接連上 SSH Server 。

---

## 參考文件

- [SSH 免密碼登入](https://dywang.csie.cyut.edu.tw/dywang/security/node85.html)

- [GitHub SSH Keys 設定](https://github.com/settings/keys)

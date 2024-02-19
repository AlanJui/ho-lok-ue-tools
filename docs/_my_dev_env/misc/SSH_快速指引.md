# SSH 快速指引


## SSH Key 基本管理

**製作  SSH Key Pair**

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


**抄錄 Public Key**


    $ cat ~/.ssh/id_rsa.pub


    cat ~/.ssh/id_rsa.pub
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDTuGuvjrgi2zJWhnJEmMjIyQrcRlH9dDcpxGGtM7IOsiNcmUMOQVRLAqzExcbaI0ri9kMyR3vl1yF9EULswx3CdbVfRSauH3MDHmTtJSzoo5yRNTrYOHEe60fAajhjGXU+zOtXXxmX/extGticI8XpfSYS2r0/Fq8SxamUOpB6zLJykAzCnopDLpQdSP3Oz+lHMUqrQZPeKh5V2ZEftuY155+4Z2/6cB5fMxLsMsLlI8bKwqwzpCa5LP4uVZkil5weCO0UYM57mC21+hPNkvPTK9NxTOmuaaGGBzPRCfm1X2z8mVQ2DEO+awyUs0OWnu9OnN5l7PpdoTM3FnXEbkfT alanjui@Amos-Aspire-5745G



----------


## SSH 遠端自動登入


    ssh-copy-id <Host_IP>

SSH Client IP: 192.168.66.31

    $ ssh-copy-id 192.168.66.101
    /usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/Users/alanjui/.ssh/id_rsa.pub"
    /usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
    /usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
    Password:
    
    Number of key(s) added:        1
    
    Now try logging into the machine, with:   "ssh '192.168.66.101'"
    and check to make sure that only the key(s) you wanted were added.


https://dywang.csie.cyut.edu.tw/dywang/security/node85.html



----------
## 參考文件


https://github.com/settings/keys



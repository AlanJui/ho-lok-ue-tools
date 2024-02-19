# Ubuntu 疑難雜症處置法


# Flatpak 解除安裝
    $ sudo apt install flatpak
    $ flatpak uninstall --all
    $ sudo apt purge --autoremove flatpak


https://askubuntu.com/questions/1174596/how-to-completely-remove-flatpak



# 下載 LibreOffice 的安裝作業
    sudo dpkg -i *.deb



# 分享共用資料夾

即便僅只是透過 UI 介面，使用「Ubuntu 檔案總管」，將「資料夾」共享出來，Ubuntu 還是會自動安裝 SMB Server 。所以，首次的分享作業執行過後，記得須加入 Samba Server 專有的「使用者」帳號與密碼。


    sudo smbpasswd -a <Username>

驗證 Samba Server 是否已被啟動的方法：

    systemctl status smbd


    alanjui@Aspire-5745G:~$ systemctl status smbd
    ● smbd.service - Samba SMB Daemon
         Loaded: loaded (/lib/systemd/system/smbd.service; enabled; vendor preset: enabled)
         Active: active (running) since Sun 2021-02-28 10:22:51 CST; 8h ago
           Docs: man:smbd(8)
                 man:samba(7)
                 man:smb.conf(5)
       Main PID: 1585 (smbd)
         Status: "smbd: ready to serve connections..."
          Tasks: 6 (limit: 9050)
         Memory: 21.6M
         CGroup: /system.slice/smbd.service
                 ├─ 1585 /usr/sbin/smbd --foreground --no-process-group
                 ├─ 1598 /usr/sbin/smbd --foreground --no-process-group
                 ├─ 1599 /usr/sbin/smbd --foreground --no-process-group
                 ├─ 1602 /usr/sbin/smbd --foreground --no-process-group
                 ├─11559 /usr/sbin/smbd --foreground --no-process-group
                 └─11589 /usr/sbin/smbd --foreground --no-process-group
    
     2月 28 11:16:50 Aspire-5745G smbd[11237]: pam_unix(samba:session): session closed for user nobody
     2月 28 11:22:28 Aspire-5745G smbd[11565]: pam_unix(samba:session): session closed for user nobody
     2月 28 11:22:46 Aspire-5745G smbd[11569]: pam_unix(samba:session): session closed for user nobody
     2月 28 11:23:18 Aspire-5745G smbd[11594]: pam_unix(samba:session): session closed for user nobody
     2月 28 11:23:26 Aspire-5745G smbd[11596]: pam_unix(samba:session): session closed for user nobody
     2月 28 19:09:25 Aspire-5745G smbd[13511]: pam_unix(samba:session): session closed for user nobody
     2月 28 19:09:46 Aspire-5745G smbd[13525]: pam_unix(samba:session): session closed for user nobody
     2月 28 19:10:18 Aspire-5745G smbd[13556]: pam_unix(samba:session): session closed for user nobody
     2月 28 19:16:00 Aspire-5745G smbd[14943]: pam_unix(samba:session): session closed for user nobody
     2月 28 19:16:25 Aspire-5745G smbd[14944]: pam_unix(samba:session): session closed for user nobody

Ref: https://www.debugpoint.com/2020/01/guide-how-share-folder-between-ubuntu-linux-windows/



# 不必經過 login 的 SSH 連線
    ssh-copy-id <RemoteUserID>@<RemoteMachineIP>


    ssh-copy-id alanjui@192.168.66.40
    /usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
    /usr/bin/ssh-copy-id: INFO: 3 key(s) remain to be installed -- if you are prompted now it is to install the new keys
    alanjui@192.168.66.40's password: 
    
    Number of key(s) added: 3
    
    Now try logging into the machine, with:   "ssh 'alanjui@192.168.66.40'"
    and check to make sure that only the key(s) you wanted were added.
    


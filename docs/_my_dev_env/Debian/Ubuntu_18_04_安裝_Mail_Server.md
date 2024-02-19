# Ubuntu 18.04 安裝 Mail Server



# 事前準備



## 
## DNS Records 設定

在 DNS Server 應有的 DNS Records 。


![](https://paper-attachments.dropbox.com/s_29964F2DD0AAE3B4769BBC77CD42FD4AF112406072B19CA9F422FF7DFE219E92_1557541679034_image.png)




    ; Domain: ccc99.tw
    ; Exported (y-m-d hh:mm:ss): 2019-03-27 21:47:30
    ;
    ; This file is intended for use for informational and archival
    ; purposes ONLY and MUST be edited before use on a production
    ; DNS server.
    ;
    ; In particular, you must update the SOA record with the correct
    ; authoritative name server and contact e-mail address information,
    ; and add the correct NS records for the name servers which will
    ; be authoritative for this domain.
    ;
    ; For further information, please consult the BIND documentation
    ; located on the following website:
    ;
    ; http://www.isc.org/
    ;
    ; And RFC 1035:
    ;
    ; http://www.ietf.org/rfc/rfc1035.txt
    ;
    ; Please note that we do NOT offer technical support for any use
    ; of this zone data, the BIND name server, or any other third-
    ; party DNS software.
    ;
    ; Use at your own risk.
    
    
    ; SOA Record
    ccc99.tw.        3600         IN         SOA        ns69.domaincontrol.com.        dns.jomax.net. (
                                            2019032704
                                            28800
                                            7200
                                            604800
                                            3600
                                            ) 
    
    ; A Records
    @        600         IN         A        180.218.139.80
    
    ; CNAME Records
    mail       3600         IN         CNAME        @
    www        3600         IN         CNAME        @
    _domainconnect        3600         IN         CNAME        _domainconnect.gd.domaincontrol.com.
    
    ; MX Records
    @        3600         IN         MX        10        @
    
    ; TXT Records
    
    ; SRV Records
    
    ; AAAA Records
    
    ; CAA Records
    
    ; NS Records
    @        3600         IN         NS        ns69.domaincontrol.com.
    @        3600         IN         NS        ns70.domaincontrol.com.



## Host 名稱

檔案：/etc/hosts ，無需設定。


    127.0.0.1       localhost
    192.168.66.10   SRV-01
    
    192.168.66.100  myapp.ccc99.tw
    
    # The following lines are desirable for IPv6 capable hosts
    ::1     ip6-localhost ip6-loopback
    fe00::0 ip6-localnet
    ff00::0 ip6-mcastprefix
    ff02::1 ip6-allnodes
    ff02::2 ip6-allrouters




# 安裝 Postfix

於 IP： 192.168.66.10 伺服器安裝 Postfix



## 伺服器安裝作業


**安裝前置工作**


    sudo apt update
    sudo apt upgrade


**安裝 Postfix 軟體套件** 


    sudo DEBIAN_PRIORITY=low apt install postfix


![](https://d2mxuefqeaa7sj.cloudfront.net/s_29964F2DD0AAE3B4769BBC77CD42FD4AF112406072B19CA9F422FF7DFE219E92_1553244457566_image.png)


Postfix 安裝過程的「套件設定」:

- **General type of mail configuration?**: **Internet Site**
- **System mail name**: example.com (not mail.example.com): **ccc99.tw**
- **Root and postmaster mail recipient**: **alanjui**
- **Other destinations to accept mail for**: **$myhostname, ccc99.tw, mail.ccc99.tw, SRV-01, localhost.localdomain, localhost**
- **Force synchronous updates on mail queue?**: **No**
- **Local networks**: **127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128 192.168.66.0/24**
- **Mailbox size limit**: **0**
- **Local address extension character**: **+**
- **Internet protocols to use**: **all**


**/etc/postfix/main.cf ：**

    # See /usr/share/postfix/main.cf.dist for a commented, more complete version
    
    # Debian specific:  Specifying a file name will cause the first
    # line of that file to be used as the name.  The Debian default
    # is /etc/mailname.
    myorigin = /etc/mailname
    
    smtpd_banner = $myhostname ESMTP $mail_name (Ubuntu)
    biff = no
    
    # appending .domain is the MUA's job.
    append_dot_mydomain = no
    
    # Uncomment the next line to generate "delayed mail" warnings
    #delay_warning_time = 4h
    
    readme_directory = no
    
    # See http://www.postfix.org/COMPATIBILITY_README.html -- default to 2 on
    # fresh installs.
    compatibility_level = 2
    
    # TLS parameters
    #smtpd_tls_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem
    #smtpd_tls_key_file=/etc/ssl/private/ssl-cert-snakeoil.key
    smtpd_use_tls = yes
    smtpd_tls_cert_file = /etc/letsencrypt/live/mail.ccc99.tw/fullchain.pem
    smtpd_tls_key_file = /etc/letsencrypt/live/mail.ccc99.tw/privkey.pem
    smtpd_tls_security_level = may
    smtpd_tls_protocols = !SSLv2, !SSLv3 !TLSv1
    #smtpd_tls_protocols = SSLv2, SSLv3 TLSv1
    smtpd_tls_loglevel = 1
    # to debug SASL Login authentication failed: UGFzc3dvcmQ6
    smtpd_tls_auth_only = yes
    smtpd_tls_session_cache_database = btree:${data_directory}/smtpd_scache
    
    smtp_use_tls = yes
    smtp_tls_security_level = may
    smtp_tls_loglevel = 1
    smtp_tls_session_cache_database = btree:${data_directory}/smtp_scache
    
    # See /usr/share/doc/postfix/TLS_README.gz in the postfix-doc package for
    # information on enabling SSL in the smtp client.
    
    smtpd_relay_restrictions = permit_mynetworks permit_sasl_authenticated defer_unauth_destination
    
    # ------------------------------------------------------------------------------------
    
    smtpd_sasl_auth_enable = yes
    smtpd_sasl_type = dovecot
    smtpd_sasl_path = private/auth
    
    # ====================================================================================
    
    myhostname = mail.ccc99.tw
    mydestination = $myhostname, ccc99.tw, mail.ccc99.tw, SRV-01, localhost.localdomain, localhost
    relayhost =
    mynetworks = 127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128 192.168.66.0/24
    mailbox_size_limit = 0
    recipient_delimiter = +
    inet_interfaces = all
    inet_protocols = all
    
    home_mailbox = Maildir/
    mailbox_command =
    queue_directory = /var/spool/postfix
    
    alias_maps = hash:/etc/aliases
    alias_database = hash:/etc/aliases
    
    virtual_alias_maps = hash:/etc/postfix/virtual
    
    # Dovecot LMTP: https://blog.pighead.cc/whsyu/2011/05/23/dovecot-lmtp/
    mailbox_transport = lmtp:unix:private/dovecot-lmtp
    #mailbox_transport = lmtp:unix:/var/spool/postfix/private/dovecot-lmtp


**產生 Virtual Map 檔案**

Map mail address to Linux accounts.


1. 設定 **/etc/postfix/virtual :**


    root@ccc99.tw           admin
    contact@ccc99.tw        admin
    admin@ccc99.tw          admin
    service@ccc99.tw        admin


2. 產生 Map 檔


    sudo postmap /etc/postfix/virtual


**產生 Aliases Map 檔案**


1. 設定 **/etc/aliases ：**


    postmaster : root
    root : admin


2. 產生 Map 檔案


    sudo postalias /etc/aliases


**重新啟動 Postfix**


    sudo service postfix restart



## 用戶端佈署設定

進行 Shell 環境（如：bash） 設定，指明 Mail Server 所使用的 Mail Box 類別。


1.

    $ echo 'export MAIL=~/Maildir' | sudo tee -a /etc/bash.bashrc | sudo tee -a /etc/profile.d/mail.sh


2.

    $ source /etc/profile.d/mail.sh



## 驗證 SMTP

使用 mail 工具程式測試寄郵件功能是否已能正常運作



## 使用 mutt 工具測試

**（1）安裝測試用工具軟體**


    sudo apt install mutt


**（2）設定組態**


    $ cd
    $ nano ~/.muttrc

~/.muttrc

     1 # About Me
     2 set from = "alanjui@ccc99.tw"
     3 set realname = "Alan Jui"
     4
     5 # My credentials
     6 set copy = yes
     7 set smtp_url = "smtp://alanjui@mail.ccc99.tw:587/"
     8 set smtp_pass = "Alan5550@"
     9 set imap_user = "alanjui@mail.ccc99.tw"
    10 set imap_pass = "Alan5550@"
    11
    12 # My mailboxes
    13 set folder = "imaps://mail.ccc99.tw:993"
    14 set spoolfile = "+INBOX"
    15 set record = +sent
    16 set postponed = +drafts
    17 #set spoolfile = "imaps://mail.ccc99.tw/INBOX"
    18 #set record = "imaps://mail.ccc99.tw/Sent"
    19 #set postponed="imaps://mail.ccc99.tw/Drafts"
    20
    21 # Where to put the stuff
    22 set header_cache = "~/.mutt/cache/headers"
    23 set message_cachedir = "~/.mutt/cache/bodies"
    24 set certificate_file = "~/.mutt/certificates"
    25
    26 # Etc
    27 set mail_check = 30
    28 set move = no


**執行測試指令**


    $ mutt



## 使用 mail 工具測試

**安裝 mail 測試用工具**


    sudo apt install mailutils


**執行測試指令**


    alanjui@SRV-01:~$ echo "This email confirms that Postfix is working" | mail -s "Testing Postfix" alanjui.1960@gmail.com


    echo "This email confirms that Postfix is working" | mail -s "Testing Postfix" juzhengzhong@gmail.com



----------



# Dovecot 


https://www.linuxbabe.com/mail-server/secure-email-server-ubuntu-16-04-postfix-dovecot



## 保障通信安全

**安裝套件軟體**

【參考文件】： https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx

使用 TLS 通信協定，用以確保「郵件用戶端」與「郵件伺服器」，兩著間的通信資料，以加密方式傳送。


    $ sudo apt update
    $ sudo apt install software-properties-common
    $ sudo add-apt-repository universe
    $ sudo add-apt-repository ppa:certbot/certbot
    $ sudo apt update
    $ sudo apt install certbot  



    sudo apt install python-certbot-nginx


**建置 Virtual Host 用以取得 TLS 憑證**


    sudo nano /etc/nginx/conf.d/mail.ccc99.tw.conf


    # mail.ccc99.tw.conf
    server {
        server_name mail.ccc99.tw;
    
        root /var/www/mail.ccc99.tw/;
    
        location ~ /.well-known/acme-challenge {
            allow all;
        }
    
        listen 443 ssl; # managed by Certbot
        ssl_certificate /etc/letsencrypt/live/mail.ccc99.tw/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/mail.ccc99.tw/privkey.pem; # managed by Certbot
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
    
    
        add_header Strict-Transport-Security "max-age=31536000" always; # managed by Certbot
    }
    server {
        if ($host = mail.ccc99.tw) {
            return 301 https://$host$request_uri;
        } # managed by Certbot
    
    
        listen 80;
        server_name mail.ccc99.tw;
    
        root /var/www/mail.ccc99.tw/;
    
        location ~ /.well-known/acme-challenge {
            allow all;
        }
    }




    sudo mkdir /var/www/mail.ccc99.tw
    sudo chown -R www-data:www-data /var/www/mail.ccc99.tw
    
    sudo service nginx reload


**啟用 certbot 的 nginx plugin**


    $ sudo certbot --nginx



    $ sudo certbot --nginx --agree-tos --redirect --hsts --email alanjui.1960@gmail.com -d mail.ccc99.tw
    Saving debug log to /var/log/letsencrypt/letsencrypt.log
    Plugins selected: Authenticator nginx, Installer nginx
    Attempting to parse the version 0.33.1 renewal configuration file found at /etc/letsencrypt/renewal/mail.ccc99.tw.conf with version 0.31.0 of Certbot. This might not work.
    Cert not yet due for renewal
    
    You have an existing certificate that has exactly the same domains or certificate name you requested and isn't close to expiry.
    (ref: /etc/letsencrypt/renewal/mail.ccc99.tw.conf)
    
    What would you like to do?
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    1: Attempt to reinstall this existing certificate
    2: Renew & replace the cert (limit ~5 per 7 days)
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
    Renewing an existing certificate
    Performing the following challenges:
    http-01 challenge for mail.ccc99.tw
    Waiting for verification...
    Cleaning up challenges
    Deploying Certificate to VirtualHost /etc/nginx/conf.d/mail.ccc99.tw.conf
    Enhancement Strict-Transport-Security was already set.
    Traffic on port 80 already redirecting to ssl in /etc/nginx/conf.d/mail.ccc99.tw.conf
    
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Your existing certificate has been successfully renewed, and the new certificate
    has been installed.
    
    The new certificate covers the following domains: https://mail.ccc99.tw
    
    You should test your configuration at:
    https://www.ssllabs.com/ssltest/analyze.html?d=mail.ccc99.tw
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    
    IMPORTANT NOTES:
     - Congratulations! Your certificate and chain have been saved at:
       /etc/letsencrypt/live/mail.ccc99.tw/fullchain.pem
       Your key file has been saved at:
       /etc/letsencrypt/live/mail.ccc99.tw/privkey.pem
       Your cert will expire on 2019-08-12. To obtain a new or tweaked
       version of this certificate in the future, simply run certbot again
       with the "certonly" option. To non-interactively renew *all* of
       your certificates, run "certbot renew"
     - If you like Certbot, please consider supporting our work by:
    
       Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
       Donating to EFF:                    https://eff.org/donate-le

**驗證憑證可用**


    https://www.ssllabs.com/ssltest/analyze.html?d=mail.ccc99.tw


**更新憑證**


    $ sudo certbot renew --dry-run
    Saving debug log to /var/log/letsencrypt/letsencrypt.log
    
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Processing /etc/letsencrypt/renewal/ccc99.tw.conf
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Cert not yet due for renewal
    
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Processing /etc/letsencrypt/renewal/mail.ccc99.tw.conf
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Cert not yet due for renewal
    
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    
    The following certs are not due for renewal yet:
      /etc/letsencrypt/live/ccc99.tw/fullchain.pem expires on 2019-07-01 (skipped)
      /etc/letsencrypt/live/mail.ccc99.tw/fullchain.pem expires on 2019-08-12 (skipped)
    No renewals were attempted.
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



## 設定 postfix 在 submission daemon 使用 TLS


    sudo nano /etc/postfix/master.cf



    submission     inet     n    -    y    -    -    smtpd
      -o syslog_name=postfix/submission
      -o smtpd_tls_security_level=encrypt
      -o smtpd_tls_wrappermode=no
      -o smtpd_sasl_auth_enable=yes
      -o smtpd_relay_restrictions=permit_sasl_authenticated,reject
      -o smtpd_recipient_restrictions=permit_mynetworks,permit_sasl_authenticated,reject
      -o smtpd_sasl_type=dovecot
      -o smtpd_sasl_path=private/auth

The above configuration enables the submission daemon of Postfix and requires TLS encryption. So later on our desktop email client can connect to the submission daemon in TLS. The submission daemon listens on TCP port 587. STARTTLS is used to encrypt communications between email client and the submission daemon.



## 設定 postfix TLS 憑證與私鑰存放處


    sudo nano /etc/postfix/main.cf




## 安裝 Dovecot


**安裝軟體套件**


    sudo apt install dovecot-core dovecot-imapd


**驗證 Dovecot 已能正常運作**


    $ sudo dovecot --version
    2.2.33.2 (d6601f4ec)


## 設定 Dovecot

**啟用 IMAP**


    sudo nano /etc/dovecot/dovecot.conf


    # Enable installed protocols
    !include_try /usr/share/dovecot/protocols.d/*.protocol
    #protocols = pop3 imap


**設定 Mailbox Location**


    $ sudo nano /etc/dovecot/conf.d/10-mail.conf


    mail_location = maildir:~/Maildir
    ...
    mail_privileged_group = mail


**令 dovecot 可讀每個 INBOX**


    sudo gpasswd -a dovecot mail


**設定 Authentication 機制**


    sudo nano /etc/dovecot/conf.d/10-auth.conf


    disable_plaintext_auth = yes
    auth_username_format = %Ln
    auth_mechanisms = plain login


**設定 SSL/TLS 加密機制**


    sudo nano /etc/dovecot/conf.d/10-ssl.conf


    ssl = required
    
    # PEM encoded X.509 SSL/TLS certificate and private key. They're opened before
    # dropping root privileges, so keep the key file unreadable by anyone but
    # root. Included doc/mkcert.sh can be used to easily generate self-signed
    # certificate, just make sure to update the domains in dovecot-openssl.cnf
    #ssl_cert = </etc/dovecot/private/dovecot.pem
    #ssl_key = </etc/dovecot/private/dovecot.key
    ssl_cert = </etc/letsencrypt/live/mail.ccc99.tw/fullchain.pem
    ssl_key = </etc/letsencrypt/live/mail.ccc99.tw/privkey.pem


**設定 SASL 身份驗證**


    sudo nano /etc/dovecot/conf.d/10-master.conf


    service auth {
      # auth_socket_path points to this userdb socket by default. It's typically
      # used by dovecot-lda, doveadm, possibly imap process, etc. Users that have
      # full permissions to this socket are able to get a list of all usernames and
      # get the results of everyone's userdb lookups.
      #
      # The default 0666 mode allows anyone to connect to the socket, but the
      # userdb lookups will succeed only if the userdb returns an "uid" field that
      # matches the caller process's UID. Also if caller's uid or gid matches the
      # socket's uid or gid the lookup succeeds. Anything else causes a failure.
      #
      # To give the caller full permissions to lookup all users, set the mode to
      # something else than 0666 and Dovecot lets the kernel enforce the
      # permissions (e.g. 0777 allows everyone full permissions).
      unix_listener auth-userdb {
        #mode = 0666
        #user =
        #group =
      }
    
      # Postfix smtp-auth
      unix_listener /var/spool/postfix/private/auth {
        mode = 0666
        user = postfix
        group = postfix
      }
    
      # Auth process is run as this user.
      #user = $default_internal_user
    }


**設定能自動建立 Send/Trash 資料夾**


    sudo nano /etc/dovecot/conf.d/15-mailboxes.conf


    namespace inbox {
      # These mailboxes are widely used and could perhaps be created automatically:
      mailbox Drafts {
        auto = create
        special_use = \Drafts
      }
      mailbox Junk {
        auto = create
        special_use = \Junk
      }
      mailbox Trash {
        auto = create
        special_use = \Trash
      }
    
      # For \Sent mailboxes there are two widely used names. We'll mark both of
      # them as \Sent. User typically deletes one of them if duplicates are created.
      mailbox Sent {
        auto = create
        special_use = \Sent
      }
      mailbox "Sent Messages" {
        special_use = \Sent
      }
    
      # If you have a virtual "All messages" mailbox:
      #mailbox virtual/All {
      #  special_use = \All
      #  comment = All my messages
      #}
    
      # If you have a virtual "Flagged" mailbox:
      #mailbox virtual/Flagged {
      #  special_use = \Flagged
      #  comment = All my flagged messages
      #}
    }


**重新啟動郵件伺服器**


    sudo systemctl restart dovecot

Dovecot will be listening on port 143 (IMAP) and 993 (IMAPS). If there’s a configuration error, dovecot will fail to restart. We also need to restart Postfix to allow the LOGIN authentication mechanism.


    sudo systemctl restart postfix


在 Thunderbird 的設定

![postfix dovecot letsencrypt](https://www.linuxbabe.com/wp-content/uploads/2016/10/postfix-dovecot-letsencrypt.png)




## 安裝與設定 lmtp

**確定 lmtp Service 已安裝**


    $ ll /usr/share/dovecot/protocols.d/
    總計 20
    drwxr-xr-x 2 root root 4096  5月  8 16:57 ./
    drwxr-xr-x 5 root root 4096  5月  8 12:38 ../
    -rw-r--r-- 1 root root   28  5月  8 12:39 imapd.protocol
    -rw-r--r-- 1 root root   28  5月  8 16:57 lmtpd.protocol
    -rw-r--r-- 1 root root   28  5月  8 13:01 pop3d.protocol


**設定 lmtp service**


    sudo nano /etc/dovecot/conf.d/10-master.conf


    service lmtp {
      unix_listener /var/spool/postfix/private/dovecot-lmtp {
        mode = 0666
        group = postfix
        user = postfix
      }
    
      # Create inet listener only if you can't use the above UNIX socket
      #inet_listener lmtp {
        # Avoid making LMTP visible for the entire internet
        #address =
        #port =
      #}
    }


**設定 postfix 應配合組態**


    sudo nano /etc/postfix/main.cf


    mailbox_transport = lmtp:unix:private/dovecot-lmtp
    smtputf8_enable = no



----------


# 異常排解



## 重新啟動 Postfix 設定工具


    sudo dpkg-reconfigure -plow postfix 


    alanjui@SRV-01:~$ sudo dpkg-reconfigure -plow postfix
    [sudo] password for alanjui: 
    postconf: warning: /etc/postfix/main.cf, line 53: overriding earlier entry: myorigin=$mydomain
    postconf: warning: /etc/postfix/main.cf, line 53: overriding earlier entry: myorigin=$mydomain
    postconf: warning: /etc/postfix/main.cf, line 53: overriding earlier entry: myorigin=$mydomain
    setting synchronous mail queue updates: false
    setting myorigin
    postconf: warning: /etc/postfix/main.cf: multiple entries for "myorigin"
    setting destinations: mail.ccc99.tw ccc99.tw localhost.ccc99.tw localhost
    setting relayhost: 
    setting mynetworks: 192.168.66.0/24 127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128
    setting mailbox_size_limit: 0
    setting recipient_delimiter: +
    setting inet_interfaces: all
    setting inet_protocols: all
    
    Postfix (main.cf) is now set up with the changes above.  If you need to make 
    changes, edit /etc/postfix/main.cf (and others) as needed.  To view Postfix 
    configuration values, see postconf(1).
    
    After modifying main.cf, be sure to run 'service postfix reload'.
    
    Running newaliases
    Processing triggers for libc-bin (2.27-3ubuntu1) ...
    alanjui@SRV-01:~$ 



## 觀察 Service Log

觀察由 Service 所產生的  Log 檔，其中所回報的異常、錯誤紀錄。


    sudo less /var/log/mail.log


    journalctl



## 檢查郵件服務

**了解 Postfix Service 執行狀態**


    sudo service postfix status


    alanjui@SRV-01:~$ sudo systemctl status postfix
    ● postfix.service - Postfix Mail Transport Agent
       Loaded: loaded (/lib/systemd/system/postfix.service; enabled; vendor preset: enabled)
       Active: active (exited) since Fri 2019-03-22 16:50:48 CST; 26s ago
     Main PID: 12270 (code=exited, status=0/SUCCESS)
        Tasks: 0 (limit: 4915)
       CGroup: /system.slice/postfix.service
    
     3月 22 16:50:48 SRV-01 systemd[1]: Starting Postfix Mail Transport Agent...
     3月 22 16:50:48 SRV-01 systemd[1]: Started Postfix Mail Transport Agent.

**同 service 指令之另種用法 systemctl：**

    sudo systemctl status postfix

**重新啟動郵件服務**

    $ sudo service postfix restart

**在 Remote 端使用 telnet 測試郵件服務是否已能正常運作**


    $ telnet 192.168.66.10 25
    Trying 192.168.66.10...
    Connected to 192.168.66.10.
    Escape character is '^]'.
    220 mail.ccc99.tw ESMTP Postfix (Ubuntu)
    ehlo service@ccc99.tw
    250-mail.ccc99.tw
    250-PIPELINING
    250-SIZE 10240000
    250-VRFY
    250-ETRN
    250-STARTTLS
    250-ENHANCEDSTATUSCODES
    250-8BITMIME
    250-DSN
    250 SMTPUTF8
    mail from: <service@ccc99.tw>
    250 2.1.0 Ok
    rcpt to: <alanjui.1960@gmail.com>
    250 2.1.5 Ok
    data
    354 End data with <CR><LF>.<CR><LF>
    From: "Service" <service@ccc99.tw>
    To: "Alan Jui" <alanjui.1960@gmail.com>
    Subject: Test message sent from manual telnet session
    
    Hi Alan,
    
    I send this mail from a localhost mail server.
    
    Best grads,
    Ju Zheng-Zhong
    .
    250 2.0.0 Ok: queued as 7B1FC400860
    quit
    221 2.0.0 Bye
    Connection closed by foreign host.



## 觀察 Service Logs 用法

**Log 檔案位置：**

    /var/log/mail.log

**瀏覽最新的 Log**

    sudo tail -f /var/log/mail.log | grep postfix


psostmap  :  **warning: database /etc/aliases.db is older than source file /etc/aliases**

    sudo postmap /etc/aliases


    sudo postalias /etc/aliases

**查看信箱是否有收到信**

    sudo tail -f /var/mail/juzhengzhong

**是否郵件仍在  Mail Queue 中**

    mailq



## Certbot renew 總是失敗

**況狀：**


    Date: Fri, 17 May 2019 12:00:32 +0800 (CST)
    From: Cron Daemon <root@ccc99.tw>
    To: root@ccc99.tw
    Subject: Cron <root@SRV-01> /opt/certbot-auto renew --quiet --no-self-upgrade --force-renewal
    
    Attempting to renew cert (mail.ccc99.tw) from /etc/letsencrypt/renewal/mail.ccc99.tw.conf produced an unexpected error: The nginx plugin is not
    +working; there may be problems with your existing configuration.
    The error was: NoInstallationError("Could not find a usable 'nginx' binary. Ensure nginx exists, the binary is executable, and your PATH is set
    +correctly.",). Skipping.
    All renewal attempts failed. The following certs could not be renewed:
      /etc/letsencrypt/live/mail.ccc99.tw/fullchain.pem (failure)
    1 renew failure(s), 0 parse failure(s)

**分析**

如「錯誤訊息：NoInstallationError」之解釋，問題出在 certbot 無法得知 nginx 執行檔之所在路徑。

**解法**

 1. 使用 root 帳號
 

    $ sudo su -

 2. 查看 cron 設定
 

    $ sudo -i
    $ sudo crontab -e

 

    $ sudo nano /etc/cron.d/certbot 
    # /etc/cron.d/certbot: crontab entries for the certbot package
    #
    # Upstream recommends attempting renewal twice a day
    #
    # Eventually, this will be an opportunity to validate certificates
    # haven't been revoked, etc.  Renewal will only occur if expiration
    # is within 30 days.
    #
    # Important Note!  This cronjob will NOT be executed if you are
    # running systemd as your init system.  If you are running systemd,
    # the cronjob.timer function takes precedence over this cronjob.  For
    # more details, see the systemd.timer manpage, or use systemctl show
    # certbot.timer.
    #SHELL=/bin/sh
    PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
    
    0 */12 * * * root test -x /usr/bin/certbot -a \! -d /run/systemd/system && perl -e 'sleep int(rand(43200))' && certbot -q renew --nginx-ctl /usr/sbin/nginx --nginx-server-root /etc/nginx

 

    sudo systemctl list-timers

 
 【參考】： https://community.letsencrypt.org/t/certbot-cron-job-nginx-plugin-noinstallationerror/67572/2
 
 


----------
# 參考文件

https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-postfix-on-ubuntu-18-04#step-1-%E2%80%94-install-postfix



https://www.linuxbabe.com/mail-server/secure-email-server-ubuntu-16-04-postfix-dovecot




https://linoxide.com/mail/install-configure-postfix-ubuntu/



[**How to Setup pOSTFIX S SEND-ONLY MAIL SERVER ON AN UBUNTU 18.04 DEDICATED SERVER OR VPS**](https://hostadvice.com/how-to/how-to-setup-postfix-as-send-only-mail-server-on-an-ubuntu-18-04-dedicated-server-or-vps/)

**How to use command line tool: mail to send email:**
https://www.binarytides.com/linux-mail-command-examples/

**Postfix Standard Configuration Examples**
http://www.postfix.org/STANDARD_CONFIGURATION_README.html#null_client

**“You have mail” - How to read mail in Ubuntu**
https://devanswers.co/you-have-mail-how-to-read-mail-in-ubuntu/

**Web Mail**

https://modoboa.org/en/



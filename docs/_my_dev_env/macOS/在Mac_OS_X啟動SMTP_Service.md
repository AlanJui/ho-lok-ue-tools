# 在Mac OS X啟動SMTP Service
【參考文章】： 
http://www.developerfiles.com/how-to-send-emails-from-localhost-mac-os-x-el-capitan/


1. 編輯設定檔。


    $ sudo gedit /etc/postfix/main.cf

 a. 加入 mydomain_fallback = localhost
 
 b. 確定以下兩個設定都存在：

    mail_owner = _postfix
    setgid_group = _postdrop

 c. 在「設定檔底端」加入下列設定：
 

    #Gmail SMTP
    relayhost=smtp.gmail.com:587
    # Enable SASL authentication in the Postfix SMTP client.
    smtp_sasl_auth_enable=yes
    smtp_sasl_password_maps=hash:/etc/postfix/sasl_passwd
    smtp_sasl_security_options=noanonymous
    smtp_sasl_mechanism_filter=plain
    # Enable Transport Layer Security (TLS), i.e. SSL.
    smtp_use_tls=yes
    smtp_tls_security_level=encrypt
    tls_random_source=dev:/dev/urandom


2. 新增「帳號及密碼」設定檔。


    $ sudo gedit /etc/postfix/sasl_passwd


3. 透過 Postfix ，設定「 Postfix lookup table」所需參考的「帳號及密碼設定檔」。


     sudo postmap /etc/postfix/sasl_passwd

設定的「格式」：


    smtp.gmail.com:587 [your_email]@gmail.com:[your_password]


4. 重新啟動 Postfix Service。


    $ sudo postfix reload

【備註】： 

Gmail 的帳號，若是已啟用「兩步驟認證」設定者，務必先關閉。同時亦需開啟「安全性較低的應用程式存取權（Less secure apps）」的設定。

![](https://paper-attachments.dropbox.com/s_8EC1E5D46A9F942A1213BE176ECA392281B361E350FE41B8E126C5B53355E6B9_1477820575338_file.png)



![](https://paper-attachments.dropbox.com/s_8EC1E5D46A9F942A1213BE176ECA392281B361E350FE41B8E126C5B53355E6B9_1477820415559_file.png)




----------
# Postfix 常用操作指令

**啟動 Postfix ：**


    $ sudo postfix start

**變更設定檔案後重啟：**


    $ sudo postfix reload



----------
# 在 OS X 作業系統啟動時，自動啟動 Postfix Service


1. 在「設定檔」加入設定。


    設定檔：  
    /System/Library/LaunchDaemons/org.postfix.master.plist


2. 在 *</dict> tag* 之前放入下面設定文字。


      .......
      <key>RunAtLoad</key><true/>
      <key>KeepAlive</key><true/>
    </dict>


3. 啟動 SMTP Service 自動設定功能。


    $ sudo launchctl start org.postfix.master


4. 驗證 SMTP Service 已能正常運作。


    $ telnet localhost 25


----------


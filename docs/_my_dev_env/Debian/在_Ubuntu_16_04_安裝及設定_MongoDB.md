# 在 Ubuntu 16.04 安裝及設定 MongoDB


# 安裝作業程序

 1. 下載

      $ cd ~/_tmp
      $ curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.2.8.tgz
        
2. 解壓縮
      $ tar -zxvf mongodb-linux-x86_64-3.2.8.tgz
        
3. 複製檔案到欲安裝之路徑
      $ mkdir -p ~/Applications/MongoDB
      $ cp -R -n mongodb-linux-x86_64-3.2.8/* ~/Applications/MongoDB


4. 設定執行路徑

 4.1 使用編輯器，設定 .zshrc 檔案

      $ code ~/.zshrc

4.2 在 .zshrc 檔案置入「設定」，如下：

      export PATH=~/Applications/MongoDB/bin:$PATH

4.3 使 $PATH 立即生效

      $ . ~/.zshrc


5. 設定資料庫儲存路徑

 5.1 建立目錄

      $ mkdir -p /data/db

5.2 設定目錄存取權限


    alanjui at srv-01 in [~/_tmp]   
    11:06:07 $ ll -d /data/db/        
    drwxr-xr-x 2 root root 4.0K  8月 21 10:08 /data/db/
    


    $ tail /etc/group
    
    alanjui at srv-01 in [~/_tmp]   
    10:42:22 $ tail /etc/group
    sambashare:x:128:alanjui
    nobody:x:1001:
    sambamachines:x:1002:
    mongodb:x:129:mongodb
    vboxusers:x:130:
    xrdp:x:131:
    ccc:x:1003:
    docker:x:132:
    renai:x:1004:
    jzz:x:1005:



    $ groups alanjui
    alanjui : alanjui adm cdrom sudo dip plugdev lpadmin sambashare


    $ sudo usermod -aG mongodb alanjui
    [sudo] password for alanjui: 


    alanjui at srv-01 in [~/_tmp]   
    11:36:32 › sudo mkdir -p /data/db
    
    alanjui at srv-01 in [~/_tmp]   
    11:36:49 › ll -d /data           
    drwxr-xr-x 3 root root 4.0K  8月 21 11:36 /data
    
    alanjui at srv-01 in [~/_tmp]   
    11:37:04 › ll -d /data/db
    drwxr-xr-x 2 root root 4.0K  8月 21 11:36 /data/db
    
    alanjui at srv-01 in [~/_tmp]   
    11:37:09 › sudo chown -R alanjui:mongodb /data/db
    


【參考文件】


- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/


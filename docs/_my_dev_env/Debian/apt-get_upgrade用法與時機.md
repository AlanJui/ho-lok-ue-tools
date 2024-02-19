# apt-get upgrade用法與時機


1. 執行 apt-get 相關指令，如：update,  purge，在指令結束後，看到系統有指示：


    alanjui@Srv-01:~/workspace/RESTful/rest-002$ sudo apt-get update
    [sudo] password for alanjui: 
    已有:1 http://tw.archive.ubuntu.com/ubuntu xenial InRelease
    略過:2 http://dl.google.com/linux/chrome/deb stable InRelease                                                                      
    已有:3 http://tw.archive.ubuntu.com/ubuntu xenial-updates InRelease                                                                
    已有:4 http://dl.google.com/linux/chrome/deb stable Release                                                                        
    已有:5 http://tw.archive.ubuntu.com/ubuntu xenial-backports InRelease                                                              
    已有:6 https://apt.dockerproject.org/repo ubuntu-xenial InRelease                                                                  
    略過:8 http://linux.dropbox.com/ubuntu wily InRelease                                                                              
    已有:9 http://linux.dropbox.com/ubuntu wily Release                                                                                
    下載:11 http://security.ubuntu.com/ubuntu xenial-security InRelease [94.5 kB]        
    已有:12 https://deb.nodesource.com/node_6.x xenial InRelease      
    略過:14 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 InRelease                                           
    略過:13 http://toolbelt.heroku.com/ubuntu ./ InRelease                                                                
    已有:15 http://toolbelt.heroku.com/ubuntu ./ Release        
    已有:17 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 Release
    取得 94.5 kB 用了 2秒 (45.9 kB/s)
    正在讀取套件清單... 完成
    
    alanjui@Srv-01:~/workspace/RESTful/rest-002$ sudo apt-get purge lxc-docker
    正在讀取套件清單... 完成
    正在重建相依關係          
    正在讀取狀態資料... 完成
    Package 'lxc-docker' is not installed, so not removed
    升級 0 個，新安裝 0 個，移除 0 個，有 5 個未被升級。
    
    alanjui@Srv-01:~/workspace/RESTful/rest-002$ apt-cache policy docker-engine
    docker-engine:
      已安裝：1.12.1-0~xenial
      候選： 1.12.1-0~xenial
      版本列表：
     *** 1.12.1-0~xenial 500
            500 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages
            100 /var/lib/dpkg/status
         1.12.0-0~xenial 500
            500 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages
         1.11.2-0~xenial 500
            500 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages
         1.11.1-0~xenial 500
            500 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages
         1.11.0-0~xenial 500
            500 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages
    

  **** 2. 執行 upgrade 指令，以便讓**軟體套件**升級．    
   

    alanjui@Srv-01:~/workspace/RESTful/rest-002$ sudo apt-get upgrade
    正在讀取套件清單... 完成
    正在重建相依關係          
    正在讀取狀態資料... 完成
    籌備升級中... 完成
    下列套件將會被升級：
      mongodb-org mongodb-org-mongos mongodb-org-server mongodb-org-shell mongodb-org-tools
    升級 5 個，新安裝 0 個，移除 0 個，有 0 個未被升級。
    需要下載 51.5 MB 的套件檔。
    此操作完成之後，會空出 21.8 MB 的磁碟空間。
    Do you want to continue? [Y/n] Y
    下載:1 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 mongodb-org-shell amd64 3.2.10 [5,251 kB]
    下載:2 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 mongodb-org-server amd64 3.2.10 [9,916 kB]
    下載:3 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 mongodb-org-mongos amd64 3.2.10 [4,640 kB]
    下載:4 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 mongodb-org-tools amd64 3.2.10 [31.7 MB]         
    下載:5 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 mongodb-org amd64 3.2.10 [3,556 B]               
    取得 51.5 MB 用了 16秒 (3,049 kB/s)                                                                                                
    （讀取資料庫 ... 目前共安裝了 262398 個檔案和目錄。）
    準備解開 .../mongodb-org-shell_3.2.10_amd64.deb ...
    Unpacking mongodb-org-shell (3.2.10) over (3.2.9) ...
    準備解開 .../mongodb-org-server_3.2.10_amd64.deb ...
    Unpacking mongodb-org-server (3.2.10) over (3.2.9) ...
    準備解開 .../mongodb-org-mongos_3.2.10_amd64.deb ...
    Unpacking mongodb-org-mongos (3.2.10) over (3.2.9) ...
    準備解開 .../mongodb-org-tools_3.2.10_amd64.deb ...
    Unpacking mongodb-org-tools (3.2.10) over (3.2.9) ...
    準備解開 .../mongodb-org_3.2.10_amd64.deb ...
    Unpacking mongodb-org (3.2.10) over (3.2.9) ...
    Processing triggers for man-db (2.7.5-1) ...
    設定 mongodb-org-shell (3.2.10) ...
    設定 mongodb-org-server (3.2.10) ...
    設定 mongodb-org-mongos (3.2.10) ...
    設定 mongodb-org-tools (3.2.10) ...
    設定 mongodb-org (3.2.10) ...
    alanjui@Srv-01:~/workspace/RESTful/rest-002$ 
    


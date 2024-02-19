# 安裝Heroku工具
輸入安裝指令（官方文件說要先安裝Ruby，但在Ubuntu 16.04沒做過安裝動作）：

    wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh

驗證完成安裝：

    heroku --version


終端機參考：

    alanjui at Srv-01 in [~/workspace/RESTful/rest-001/dist]  on git:master ✗  
    17:04:06 $ wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
    --2016-10-01 17:11:15--  https://toolbelt.heroku.com/install-ubuntu.sh
    正在查找主機 toolbelt.heroku.com (toolbelt.heroku.com)... 54.235.127.240, 23.23.162.52, 54.243.121.189
    正在連接 toolbelt.heroku.com (toolbelt.heroku.com)|54.235.127.240|:443... 連上了。
    已送出 HTTP 要求，正在等候回應... 200 OK
    長度: 719 [text/plain]
    Saving to: ‘STDOUT’
    
    -                                          100%[========================================================================================>]     719  --.-KB/s    in 0s      
    
    2016-10-01 17:11:16 (230 MB/s) - written to stdout [719/719]
    
    This script requires superuser access to install apt packages.
    You will be prompted for your password by sudo.
    [sudo] password for alanjui: 
    --2016-10-01 17:11:29--  https://toolbelt.heroku.com/apt/release.key
    正在查找主機 toolbelt.heroku.com (toolbelt.heroku.com)... 54.243.121.189, 23.23.162.52, 54.235.127.240
    正在連接 toolbelt.heroku.com (toolbelt.heroku.com)|54.243.121.189|:443... 連上了。
    已送出 HTTP 要求，正在等候回應... 200 OK
    長度: 1737 (1.7K) [application/octet-stream]
    Saving to: ‘STDOUT’
    
    -                                          100%[========================================================================================>]   1.70K  --.-KB/s    in 0s      
    
    2016-10-01 17:11:30 (382 MB/s) - written to stdout [1737/1737]
    
    OK
    已有:1 http://tw.archive.ubuntu.com/ubuntu xenial InRelease
    略過:2 http://dl.google.com/linux/chrome/deb stable InRelease                                                                                                              
    下載:3 http://tw.archive.ubuntu.com/ubuntu xenial-updates InRelease [95.7 kB]                                                                                              
    已有:4 http://dl.google.com/linux/chrome/deb stable Release                                                                                                                
    略過:5 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 InRelease                                                                                                 
    已有:6 http://tw.archive.ubuntu.com/ubuntu xenial-backports InRelease                                                                                                      
    下載:8 http://tw.archive.ubuntu.com/ubuntu xenial-updates/main amd64 Packages [394 kB]                                                                                     
    略過:9 http://linux.dropbox.com/ubuntu wily InRelease                                                                                                               
    已有:10 https://apt.dockerproject.org/repo ubuntu-xenial InRelease                                                                 
    下載:11 http://tw.archive.ubuntu.com/ubuntu xenial-updates/main i386 Packages [389 kB]                                          
    已有:13 http://linux.dropbox.com/ubuntu wily Release                                                                                             
    下載:14 http://tw.archive.ubuntu.com/ubuntu xenial-updates/universe amd64 Packages [332 kB]                                                               
    下載:16 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 Release [3,462 B]                                                                                        
    下載:17 http://tw.archive.ubuntu.com/ubuntu xenial-updates/universe i386 Packages [328 kB]                                                                                
    下載:18 http://tw.archive.ubuntu.com/ubuntu xenial-updates/universe Translation-en [115 kB]                                                            
    下載:19 http://security.ubuntu.com/ubuntu xenial-security InRelease [94.5 kB]                                                                                
    下載:20 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 Release.gpg [801 B]                                                                                      
    略過:12 http://toolbelt.heroku.com/ubuntu ./ InRelease                                
    已有:21 https://deb.nodesource.com/node_6.x xenial InRelease
    下載:22 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 Packages [4,069 B]
    下載:23 http://toolbelt.heroku.com/ubuntu ./ Release [1,609 B]                        
    下載:24 http://security.ubuntu.com/ubuntu xenial-security/universe amd64 Packages [44.4 kB]
    下載:25 http://toolbelt.heroku.com/ubuntu ./ Release.gpg [473 B]
    下載:26 http://security.ubuntu.com/ubuntu xenial-security/universe i386 Packages [44.3 kB]
    下載:27 http://security.ubuntu.com/ubuntu xenial-security/universe Translation-en [26.7 kB]
    下載:28 http://security.ubuntu.com/ubuntu xenial-security/universe amd64 DEP-11 Metadata [2,266 B]
    下載:29 http://toolbelt.heroku.com/ubuntu ./ Packages [724 B]    
    取得 1,878 kB 用了 2秒 (731 kB/s)
    正在讀取套件清單... 完成
    正在讀取套件清單... 完成
    正在重建相依關係          
    正在讀取狀態資料... 完成
    The following additional packages will be installed:
      fonts-lato heroku libruby2.3 rake ruby ruby-did-you-mean ruby-minitest ruby-net-telnet ruby-power-assert ruby-test-unit ruby2.3 rubygems-integration
    建議套件：
      ri ruby-dev bundler
    下列【新】套件將會被安裝：
      fonts-lato heroku heroku-toolbelt libruby2.3 rake ruby ruby-did-you-mean ruby-minitest ruby-net-telnet ruby-power-assert ruby-test-unit ruby2.3 rubygems-integration
    升級 0 個，新安裝 13 個，移除 0 個，有 5 個未被升級。
    需要下載 7,710 kB 的套件檔。
    此操作完成之後，會多佔用 26.8 MB 的磁碟空間。
    下載:1 http://tw.archive.ubuntu.com/ubuntu xenial/main amd64 fonts-lato all 2.0-1 [2,693 kB]
    下載:4 http://tw.archive.ubuntu.com/ubuntu xenial/main amd64 rubygems-integration all 1.10 [4,966 B]     
    下載:5 http://tw.archive.ubuntu.com/ubuntu xenial/main amd64 ruby all 1:2.3.0+1 [5,530 B]                       
    下載:6 http://tw.archive.ubuntu.com/ubuntu xenial/main amd64 rake all 10.5.0-2 [48.2 kB]        
    下載:7 http://tw.archive.ubuntu.com/ubuntu xenial/main amd64 ruby-did-you-mean all 1.0.0-2 [8,390 B]
    下載:8 http://tw.archive.ubuntu.com/ubuntu xenial/main amd64 ruby-minitest all 5.8.4-2 [36.6 kB]             
    下載:9 http://tw.archive.ubuntu.com/ubuntu xenial/main amd64 ruby-net-telnet all 0.1.1-2 [12.6 kB]      
    下載:10 http://tw.archive.ubuntu.com/ubuntu xenial/main amd64 ruby-power-assert all 0.2.7-1 [7,668 B]      
    下載:11 http://tw.archive.ubuntu.com/ubuntu xenial/main amd64 ruby-test-unit all 3.1.7-2 [60.3 kB]            
    下載:12 http://tw.archive.ubuntu.com/ubuntu xenial-updates/main amd64 libruby2.3 amd64 2.3.1-2~16.04 [2,957 kB]
    下載:2 http://toolbelt.heroku.com/ubuntu ./ heroku 3.43.12 [1,834 kB]                                  
    下載:13 http://tw.archive.ubuntu.com/ubuntu xenial-updates/main amd64 ruby2.3 amd64 2.3.1-2~16.04 [40.9 kB]
    下載:3 http://toolbelt.heroku.com/ubuntu ./ heroku-toolbelt 3.43.12 [666 B]                                                                                                
    取得 7,710 kB 用了 9秒 (799 kB/s)                                                                                                                                          
    選取了原先未選的套件 fonts-lato。
    （讀取資料庫 ... 目前共安裝了 259366 個檔案和目錄。）
    準備解開 .../fonts-lato_2.0-1_all.deb ...
    解開 fonts-lato (2.0-1) 中...
    選取了原先未選的套件 rubygems-integration。
    準備解開 .../rubygems-integration_1.10_all.deb ...
    解開 rubygems-integration (1.10) 中...
    選取了原先未選的套件 ruby。
    準備解開 .../ruby_1%3a2.3.0+1_all.deb ...
    解開 ruby (1:2.3.0+1) 中...
    選取了原先未選的套件 rake。
    準備解開 .../archives/rake_10.5.0-2_all.deb ...
    解開 rake (10.5.0-2) 中...
    選取了原先未選的套件 ruby-did-you-mean。
    準備解開 .../ruby-did-you-mean_1.0.0-2_all.deb ...
    解開 ruby-did-you-mean (1.0.0-2) 中...
    選取了原先未選的套件 ruby-minitest。
    準備解開 .../ruby-minitest_5.8.4-2_all.deb ...
    解開 ruby-minitest (5.8.4-2) 中...
    選取了原先未選的套件 ruby-net-telnet。
    準備解開 .../ruby-net-telnet_0.1.1-2_all.deb ...
    解開 ruby-net-telnet (0.1.1-2) 中...
    選取了原先未選的套件 ruby-power-assert。
    準備解開 .../ruby-power-assert_0.2.7-1_all.deb ...
    解開 ruby-power-assert (0.2.7-1) 中...
    選取了原先未選的套件 ruby-test-unit。
    準備解開 .../ruby-test-unit_3.1.7-2_all.deb ...
    解開 ruby-test-unit (3.1.7-2) 中...
    選取了原先未選的套件 libruby2.3:amd64。
    準備解開 .../libruby2.3_2.3.1-2~16.04_amd64.deb ...
    解開 libruby2.3:amd64 (2.3.1-2~16.04) 中...
    選取了原先未選的套件 ruby2.3。
    準備解開 .../ruby2.3_2.3.1-2~16.04_amd64.deb ...
    解開 ruby2.3 (2.3.1-2~16.04) 中...
    選取了原先未選的套件 heroku。
    準備解開 .../heroku_3.43.12_all.deb ...
    解開 heroku (3.43.12) 中...
    選取了原先未選的套件 heroku-toolbelt。
    準備解開 .../heroku-toolbelt_3.43.12_all.deb ...
    解開 heroku-toolbelt (3.43.12) 中...
    Processing triggers for fontconfig (2.11.94-0ubuntu1.1) ...
    Processing triggers for man-db (2.7.5-1) ...
    Processing triggers for libc-bin (2.23-0ubuntu3) ...
    設定 fonts-lato (2.0-1) ...
    設定 rubygems-integration (1.10) ...
    設定 ruby-did-you-mean (1.0.0-2) ...
    設定 ruby-minitest (5.8.4-2) ...
    設定 ruby-net-telnet (0.1.1-2) ...
    設定 ruby-power-assert (0.2.7-1) ...
    設定 ruby-test-unit (3.1.7-2) ...
    設定 rake (10.5.0-2) ...
    設定 libruby2.3:amd64 (2.3.1-2~16.04) ...
    設定 ruby2.3 (2.3.1-2~16.04) ...
    設定 ruby (1:2.3.0+1) ...
    設定 heroku (3.43.12) ...
    設定 heroku-toolbelt (3.43.12) ...
    Processing triggers for libc-bin (2.23-0ubuntu3) ...
    
    alanjui at Srv-01 in [~/workspace/RESTful/rest-001/dist]  on git:master ✗  
    17:12:02 $ heroku --version
    heroku-cli: Installing CLI... 22.44MB/22.44MB
    /usr/local/heroku/lib/heroku/jsplugin.rb:119: warning: Insecure world writable dir /home/alanjui in PATH, mode 040777
    heroku-toolbelt/3.43.12 (x86_64-linux-gnu) ruby/2.3.1
    heroku-cli/5.4.2-a9a5017 (linux-amd64) go1.7.1
    You have no installed plugins.
    
    


# 安裝 Oh-my-zsh
1. 安裝 Oh My Zsh

安裝前準備：

    $ sudo apt install git-core
    $ sudo apt install powerline fonts-powerline -y



    $ sudo apt install zsh
    

下載及執行 Oh-My-Zsh 安裝指令

    $ sudo wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh

變更系統的預設 Shell (Bash Shell → Zsh)

    $ sudo chsh -s `which zsh`
    $ sudo chsh -s /bin/zsh
    
    $ whereis zsh 
    $ sudo usermod -s /usr/bin/zsh $(whoami)

重開機

    $ sudo shutdown -r 0


# 2. 設定自己想要的Theme


## 2.1 編輯 Oh-my-zsh  設定檔
    $ sudo code ~/.zshrc

設定內容：

    export PATH=$HOME/bin:/usr/local/bin:$PATH
    
    ZSH_THEME="xxf"
    
    . ~/myEnv.sh


## 2.2 複製 Theme 檔案

在另外一台含有 xxf theme 檔案的電腦，透過 SSH Copy 檔案：

    $ scp ~/.oh-my-zsh/themes/xxf.zsh-theme alanjui@192.168.66.10:/home/alanjui/.oh-my-zsh/themes/xxf.zsh-theme


## 2.3 複製「環境設定」檔案

在另外一台含有 myEnv.sh 檔案的電腦，透過 SSH Copy 檔案：
自 MacBookPro.local → Srv-01 (Remote)

| $ scp foobar.txt your_username@remotehost.edu:/some/remote/directory |

    $ scp ~/myEnv.sh alanjui@192.168.66.10:/home/alanjui

記得修改 myEnv.sh 的設定，使其適用於 Ubuntu。

回到設定電腦，設定 myEnv.sh 檔案，使用擁有「執行」權限

    $ ls ~/myEnv.sh
    
    $ chmod +x ~/myEnv.sh
    
    $ ls ~/myEnv.sh


在另外一台含有 myEnv.sh 檔案的電腦，透過 SSH Copy 檔案：
自 MacBookPro.local → Srv-01 (Remote)

| $ scp foobar.txt your_username@remotehost.edu:/some/remote/directory |

    $ scp ~/myEnv.sh alanjui@192.168.66.10:/home/alanjui



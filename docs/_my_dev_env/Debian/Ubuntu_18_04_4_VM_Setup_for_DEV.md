# Ubuntu 18.04.4 VM Setup for DEV

# 基礎設定


- 中文輸入法：倉頡五代、漢語拚音
- 螢幕自動關閉：永不



    sudo apt update && sudo apt -y upgrade
    sudo apt -y install curl wget git neovim



# ssh


    sudo apt install -y openssh-server
    ip a

https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server

**Server Site 産生 SSH Key**


    ssh-keygen
    ll ~/.ssh


將 **Client Site 的 SSH 公鑰設定到 Server Site**


    cat ~/.ssh/id_rsa.pub | ssh username@remote_host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"


    $ ssh-copy-id alanjui@192.168.66.203
    /usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
    /usr/bin/ssh-copy-id: INFO: 2 key(s) remain to be installed -- if you are prompted now it is to install the new keys
    alanjui@192.168.66.203's password: 
    
    Number of key(s) added: 2
    
    Now try logging into the machine, with:   "ssh 'alanjui@192.168.66.203'"
    and check to make sure that only the key(s) you wanted were added.
    
    $ cat ~/.ssh/id_rsa.pub | ssh alanjui@192.168.66.203 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
    
    $ ssh alanjui@192.168.66.203


# xrdp

http://c-nergy.be/blog/?p=14396



    $ apt list xrdp
    正在列出... 完成
    xrdp/bionic,now 0.9.5-2 amd64 [已安裝]
    
    $ apt list xorgxrdp
    正在列出... 完成
    xorgxrdp/bionic 0.9.5-2 amd64



    $ curl -LJO https://gist.github.com/anupash/ce3ede30e7fbc0ce38ab8cddfa92c7a1/archive/ed7185ad4a6d327964724c1c2ceddf206603f825.zip
    $ unzip ce3ede30e7fbc0ce38ab8cddfa92c7a1-ed7185ad4a6d327964724c1c2ceddf206603f825.zip
    $ mv ce3ede30e7fbc0ce38ab8cddfa92c7a1-ed7185ad4a6d327964724c1c2ceddf206603f825/xrdp-installer-1.1.sh .
    $ chmod +x xrdp-installer-1.1.sh
    
    $ ./xrdp-installer-1.1.sh
    $ sudo service xrdp restart
    $ sudo service xrdp status
    ● xrdp.service - xrdp daemon
       Loaded: loaded (/lib/systemd/system/xrdp.service; enabled; vendor preset: enabled)
       Active: active (running) since Wed 2020-04-22 10:48:29 CST; 4s ago
         Docs: man:xrdp(8)
               man:xrdp.ini(5)
      Process: 17799 ExecStop=/usr/sbin/xrdp $XRDP_OPTIONS --kill (code=exited, status=0/SUCCESS)
      Process: 17815 ExecStart=/usr/sbin/xrdp $XRDP_OPTIONS (code=exited, status=0/SUCCESS)
      Process: 17807 ExecStartPre=/bin/sh /usr/share/xrdp/socksetup (code=exited, status=0/SUCCESS)
     Main PID: 17816 (xrdp)
        Tasks: 1 (limit: 4662)
       CGroup: /system.slice/xrdp.service
               └─17816 /usr/sbin/xrdp
    
     4月 22 10:48:28 VM01 systemd[1]: Starting xrdp daemon...
     4月 22 10:48:28 VM01 xrdp[17815]: (17815)(140222565099328)[DEBUG] Testing if xrdp can listen on 0.0.0.0 port 3389.
     4月 22 10:48:28 VM01 xrdp[17815]: (17815)(140222565099328)[DEBUG] Closed socket 7 (AF_INET6 :: port 3389)
     4月 22 10:48:28 VM01 systemd[1]: xrdp.service: Can't open PID file /var/run/xrdp/xrdp.pid (yet?) after start: No such file or directory
     4月 22 10:48:29 VM01 systemd[1]: Started xrdp daemon.
     4月 22 10:48:30 VM01 xrdp[17816]: (17816)(140222565099328)[INFO ] starting xrdp with pid 17816
     4月 22 10:48:30 VM01 xrdp[17816]: (17816)(140222565099328)[INFO ] listening to port 3389 on 0.0.0.0





# pyenv



    sudo apt install -y build-essential git libexpat1-dev libssl-dev zlib1g-dev \
      libncurses5-dev libbz2-dev liblzma-dev \
      libsqlite3-dev libffi-dev tcl-dev linux-headers-generic libgdbm-dev \
      libreadline-dev tk tk-dev



    curl https://pyenv.run | bash



    nvim ~/.bashrc

~/.bashrc

    export PATH="$HOME/.pyenv/bin:$PATH"
    eval "$(pyenv init -)"
    eval "$(pyenv virtualenv-init -)"


    source ~/.bashrc


    $ pyenv install 3.8.2
    
    $ pyenv versions
    * system (set by /home/alanjui/.pyenv/version)
      3.8.2
    
    $ pyenv global 3.8.2
    
    $ pyenv version
    3.8.2 (set by /home/alanjui/.pyenv/version)
    
    $ python --version
    Python 2.7.17
    
    $ python3 --version
    Python 3.6.9




# pipenv
https://pypi.org/project/pipenv/



    $ pip install --upgrade pip
    $ pip install pipenv


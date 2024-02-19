# 建置 Django 開發環境： Vagrant
開發環境需求：

- Web Framework： Django
- DB： Postgres
- 執行平台： Vagrant
- Python 管理工具： Pyenv + Pipenv


快速建置 Vagrant Box 


    mkdir ubuntu-18.04-desktop-amd64
    cd ubuntu-18.04-desktop-amd64
    vagrant init peru/ubuntu-18.04-desktop-amd64
    VAGRANT_DEFAULT_PROVIDER=libvirt vagrant up
    # or
    VAGRANT_DEFAULT_PROVIDER=virtualbox vagrant up
    vagrant ssh


建立專案目錄

    cd ~/workspace/django
    mkdir my_app && cd $_


建立 Vagrant 檔案

    touch Vagrantfile

Vagrantfile


**V 0.2.1**

    # vi: set ft=ruby :
    # -*- mode: ruby -*-
    
    # All Vagrant configuration is done below. The "2" in Vagrant.configure
    # configures the configuration version (we support older styles for
    # backwards compatibility). Please don't change it unless you know what
    # you're doing.
    Vagrant.configure("2") do |config|
      # The most common configuration options are documented and commented below.
      # For a complete reference, please see the online documentation at
      # https://docs.vagrantup.com.
    
      # Every Vagrant development environment requires a box. You can search for
      # boxes at https://vagrantcloud.com/search.
      config.vm.box = "peru/ubuntu-18.04-desktop-amd64"
      config.vm.box_version = "20200424.01"
    
      # Disable automatic box update checking. If you disable this, then
      # boxes will only be checked for updates when the user runs
      # `vagrant box outdated`. This is not recommended.
      # config.vm.box_check_update = false
    
      # Create a forwarded port mapping which allows access to a specific port
      # within the machine from a port on the host machine. In the example below,
      # accessing "localhost:8080" will access port 80 on the guest machine.
      # NOTE: This will enable public access to the opened port
      # config.vm.network "forwarded_port", guest: 80, host: 8080
      config.vm.network "forwarded_port", guest: 8000, host: 5000
    
      # Create a forwarded port mapping which allows access to a specific port
      # within the machine from a port on the host machine and only allow access
      # via 127.0.0.1 to disable public access
      # config.vm.network "forwarded_port", guest: 8000, host: 1234, host_ip: "127.0.0.1"
      config.vm.network "forwarded_port", guest: 8000, host: 1234, host_ip: "192.168.66.100"
    
      # Create a private network, which allows host-only access to the machine
      # using a specific IP.
      # config.vm.network "private_network", type: "dhcp"
      # config.vm.network "private_network", :type => 'dhcp', :name => 'vboxnet0', :adapter => 3
      config.vm.network "private_network", ip: "192.168.33.10"
    
      # Create a public network, which generally matched to bridged network.
      # Bridged networks make the machine appear as another physical device on
      # your network.
      # config.vm.network "public_network", bridge: "en7: USB 10/100/1000 LAN"
    
      # Share an additional folder to the guest VM. The first argument is
      # the path on the host to the actual folder. The second argument is
      # the path on the guest to mount the folder. And the optional third
      # argument is a set of non-required options.
      config.vm.synced_folder "./code", "/vagrant"
      config.vm.synced_folder "./data", "/vagrant_data"
    
      # Provider-specific configuration so you can fine-tune various
      # backing providers for Vagrant. These expose provider-specific options.
      # Example for VirtualBox:
      #
      # config.vm.provider "virtualbox" do |vb|
      #   # Display the VirtualBox GUI when booting the machine
      #   vb.gui = true
      #
      #   # Customize the amount of memory on the VM:
      #   vb.memory = "1024"
      # end
      #
      # View the documentation for the provider you are using for more
      # information on available options.
    
      # Enable provisioning with a shell script. Additional provisioners such as
      # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
      # documentation for more information about their specific syntax and use.
      config.vm.provision "shell", inline: <<-SHELL
      # apt-get update
      # apt-get install -y apache2
        apt update && apt upgrade -y
        apt install -y git wget curl tree neovim nginx
        apt install -y build-essential checkinstall libffi-dev python-dev
        apt install -y libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev
      SHELL
    end


V 0.2.0 (Ubuntu 18.04.4: https://app.vagrantup.com/cjjackson/boxes/ubuntu-18.04.4 )


    # vi: set ft=ruby :
    # -*- mode: ruby -*-
    
    # All Vagrant configuration is done below. The "2" in Vagrant.configure
    # configures the configuration version (we support older styles for
    # backwards compatibility). Please don't change it unless you know what
    # you're doing.
    Vagrant.configure("2") do |config|
      # The most common configuration options are documented and commented below.
      # For a complete reference, please see the online documentation at
      # https://docs.vagrantup.com.
    
      # Every Vagrant development environment requires a box. You can search for
      # boxes at https://vagrantcloud.com/search.
      config.vm.box = "peru/ubuntu-18.04-desktop-amd64"
      config.vm.box_version = "20200424.01"
    
      # Disable automatic box update checking. If you disable this, then
      # boxes will only be checked for updates when the user runs
      # `vagrant box outdated`. This is not recommended.
      # config.vm.box_check_update = false
    
      # Create a forwarded port mapping which allows access to a specific port
      # within the machine from a port on the host machine. In the example below,
      # accessing "localhost:8080" will access port 80 on the guest machine.
      # NOTE: This will enable public access to the opened port
      # config.vm.network "forwarded_port", guest: 80, host: 8080
      config.vm.network "forwarded_port", guest: 8000, host: 5000
    
      # Create a forwarded port mapping which allows access to a specific port
      # within the machine from a port on the host machine and only allow access
      # via 127.0.0.1 to disable public access
      # config.vm.network "forwarded_port", guest: 8000, host: 1234, host_ip: "127.0.0.1"
      config.vm.network "forwarded_port", guest: 8000, host: 1234, host_ip: "192.168.66.100"
    
      # Create a private network, which allows host-only access to the machine
      # using a specific IP.
      # config.vm.network "private_network", ip: "192.168.33.10"
    
      # Create a public network, which generally matched to bridged network.
      # Bridged networks make the machine appear as another physical device on
      # your network.
      config.vm.network "public_network", bridge: "en7: USB 10/100/1000 LAN"
    
      # Share an additional folder to the guest VM. The first argument is
      # the path on the host to the actual folder. The second argument is
      # the path on the guest to mount the folder. And the optional third
      # argument is a set of non-required options.
      config.vm.synced_folder "./data", "/vagrant_data"
    
      # Provider-specific configuration so you can fine-tune various
      # backing providers for Vagrant. These expose provider-specific options.
      # Example for VirtualBox:
      #
      # config.vm.provider "virtualbox" do |vb|
      #   # Display the VirtualBox GUI when booting the machine
      #   vb.gui = true
      #
      #   # Customize the amount of memory on the VM:
      #   vb.memory = "1024"
      # end
      #
      # View the documentation for the provider you are using for more
      # information on available options.
    
      # Enable provisioning with a shell script. Additional provisioners such as
      # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
      # documentation for more information about their specific syntax and use.
      # config.vm.provision "shell", inline: <<-SHELL
      #   apt-get update
      #   apt-get install -y apache2
      # SHELL
    end


V 0.1.0

    Vagrant.configure("2") do |config|
    
      config.vm.box = "peru/ubuntu-18.04-desktop-amd64"
      config.vm.box_version = "20190401.01"
    
      config.vm.network "public_network", bridge: "en7: USB 10/100/1000 LAN"
    
      config.vm.network "forwarded_port", guest: 8000, host: 8088
    
      # config.vm.synced_folder "my_app", "/home/my_app/my_app", owner: "my_app", group: "my_app", mount_options: ["dmode=775, fmode=664"]
      config.vm.synced_folder ".", "/vagrant", type: "virtualbox"
    
      config.vm.provider "virtualbox" do |vb|
        # Display the VirtualBox GUI when booting the machine
        vb.gui = true
    
        # Customize the amount of memory on the VM:
        vb.memory = "3072"
        vb.cpus = 3
    
        vb.name = "vm_ubuntu_1804"
      end
    
    
      config.vm.provision "shell", inline: <<-SHELL
        apt-get update
        # apt-get install -y apache2
        apt-get install -y net-tools
      SHELL
    
    end


啟用 **Vagrant 自動更新 VirtualBox Guest Additions 的功能**

    vagrant plugin install vagrant-vbguest

啟動 VM

    vagrant up

啟用 VM Console

    vagrant ssh




----------


## 安裝 pyenv

**Ref:** https://github.com/pyenv/pyenv-installer

(1)


    curl https://pyenv.run | bash

(2)


    azureuser@myDockerVM:~$ vim ~/.bashrc

~/.bashrc

    ...
    export PATH="/home/azureuser/.pyenv/bin:$PATH"
    eval "$(pyenv init -)"
    eval "$(pyenv virtualenv-init -)"

(3)

    azureuser@myDockerVM:~$ exec $SHELL
    azureuser@myDockerVM:~$ pyenv versions
    * system (set by /home/azureuser/.pyenv/version)


確認 Python 3 已安裝

    python3 --version


~~更新 VM 的套件庫~~

    sudo apt update
    sudo apt -y upgrade

~~~~
~~~~~~安裝與 Python 相關用套件~~

    sudo apt install -y build-essential checkinstall libffi-dev python-dev
    sudo apt install -y libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev

~~~~~~開發相關常用套件~~

    sudo apt install -y git wget curl neovim


1. 執行安裝指令
    export PYENV_ROOT="$HOME/.pyenv"
    git clone https://github.com/yyuu/pyenv.git $PYENV_ROOT
    git clone https://github.com/pyenv/pyenv-virtualenv.git $PYENV_ROOT/plugins/pyenv-virtualenv



2. 設定 Shell Script: ~/.bashrc
    ...
    export PYENV_ROOT="$HOME/.pyenv"
    export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init -)"
    eval "$(pyenv virtualenv-init -)"
    export PIPENV_VENV_IN_PROJECT="enabled"


    export PYENV_ROOT="$HOME/.pyenv"
    if [ -d "${PYENV_ROOT}" ]; then
      export PATH="${PYENV_ROOT}/bin:${PATH}"
      eval "$(pyenv init -)"
      eval "$(pyenv virtualenv-init -)"
      export PIPENV_VENV_IN_PROJECT="enabled"
    fi


3. 重新啟動 SHELL
    source ~/.bashrc


4. 安裝 Python 3.8.2
    pyenv install 3.8.2
    pyenv versions

 5. 安裝 pipenv

    pyenv global 3.8.2
    pyenv version
    python --version
    python3 --version
    pip install --upgrade pip
    pip install pipenv
    pip install gunicorn
## 安裝專案用虛擬環境
    $ cd /vagrant
    $ mkdir my_app && cd $_
    $ pyenv local 3.8.2
    $ pipenv --python 3.8

~/.bashrc

    export PIPENV_VENV_IN_PROJECT="enabled"


## 安裝 Django


    pipenv shell
    pipenv install django
    pipenv install -d pylint autopep8


    django-admin.py startproject web_site .
    (my_app) vagrant@linux:/vagrant/my_app$ ./manage.py runserver 0:8000

192.168.33.10:8000/



# 安裝 Postgres



## 基礎安裝與設定

**安裝軟體**

    sudo apt install -y postgresql postgresql-contrib

**驗證安裝結果（軟體存放路徑）**

    sudo su - postgres
    ~$ ls -al /var/lib/postgresql/10/main/
    total 92
    drwx------ 19 postgres postgres 4096 Apr 26 14:48 .
    drwxr-xr-x  3 postgres postgres 4096 Apr 26 12:11 ..
    drwx------  6 postgres postgres 4096 Apr 26 12:13 base
    drwx------  2 postgres postgres 4096 Apr 26 15:11 global
    drwx------  2 postgres postgres 4096 Apr 26 12:11 pg_commit_ts
    drwx------  2 postgres postgres 4096 Apr 26 12:11 pg_dynshmem
    drwx------  4 postgres postgres 4096 Apr 26 15:13 pg_logical
    drwx------  4 postgres postgres 4096 Apr 26 12:11 pg_multixact
    drwx------  2 postgres postgres 4096 Apr 26 14:48 pg_notify
    drwx------  2 postgres postgres 4096 Apr 26 12:11 pg_replslot
    drwx------  2 postgres postgres 4096 Apr 26 12:11 pg_serial
    drwx------  2 postgres postgres 4096 Apr 26 12:11 pg_snapshots
    drwx------  2 postgres postgres 4096 Apr 26 14:48 pg_stat
    drwx------  2 postgres postgres 4096 Apr 26 12:11 pg_stat_tmp
    drwx------  2 postgres postgres 4096 Apr 26 12:11 pg_subtrans
    drwx------  2 postgres postgres 4096 Apr 26 12:11 pg_tblspc
    drwx------  2 postgres postgres 4096 Apr 26 12:11 pg_twophase
    -rw-------  1 postgres postgres    3 Apr 26 12:11 PG_VERSION
    drwx------  3 postgres postgres 4096 Apr 26 12:11 pg_wal
    drwx------  2 postgres postgres 4096 Apr 26 12:11 pg_xact
    -rw-------  1 postgres postgres   88 Apr 26 12:11 postgresql.auto.conf
    -rw-------  1 postgres postgres  130 Apr 26 14:48 postmaster.opts
    -rw-------  1 postgres postgres  107 Apr 26 14:48 postmaster.pid
    
    


**設定 Postgres 資料庫系統管理員**

對 Postgres 資料庫系統的預設管理者帳號（postgres），設定密碼。

    sudo su - postgres
    psql
    \password
    ...
    \q
    exit



    psql -U <username> -h <localhost> -p 5432 <dbname>


    psql -U postgres -h 127.0.0.1 -p 5432 postgres


----------
## 設定可遠端存取作業


    sudo su - postgres

**(1)　設定 PostgreSQL 相關「設定檔」：**

設定檔目錄路徑：/etc/postgresql/10/main/

在檔案： **pg_hba.conf ，加入下列設定：**

    host    all             all             192.168.33.0/24         md5
    host    all             all             192.168.66.0/24         md5

在檔案： **postgresql.conf，加入下列設定：**

    listen_addresses='*'

**(2) 開通防火牆**

要求「防火牆」開放 PORT: 5432
檢查防火牆的 Port：5432 是否已開通： [http://www.yougetsignal.com/tools/open-ports/](http://www.yougetsignal.com/tools/open-ports/)

執行下列指令，要求防火牆將 Port: 5432 開通（意即在 `iptables` 新增 rule）

    iptables -A INPUT -s 0/0 -p tcp --dport 5432 -j ACCEPT

**(3) 從新啟動 PostgreSQL Service**

在Server端，將 PostgreSQL Service 重新啟動：

    sudo service postgresql restart
    sudo service postgresql status

**(4) 驗證可自遠端連入**

在 Host 端 (IP: 192.168.66.100)，連入 PostgreSQL Server (192.168.33.10)：

     psql -U postgres -h 192.168.33.10 -p 5432 postgres
     ...
     \q



----------
## 新增 Django App 用資料庫


新增 my_app 帳號與其密碼，並設定可管理 my_app 資料庫

    sudo su - postgres
    createuser my_app -P   # Passw0rd
    createdb my_app -O my_app
    exit



    sudo -u postgres createuser my_app -P   # Passw0rd
    sudo -u postgres createdb my_app -O my_app


驗證 my_app 帳號可使用 my_app 資料庫

    sudo su - postgres
    psql -U my_app -W my_app
    exit


若遇有設定錯誤，可使用下列指令，先刪資料庫、再刪資料庫使用者帳號

    sudo su - postgres
    # 刪除資料庫
    dropdb my_app
    # 刪除資料庫使用者帳號
    dropuser my_app

【參考】：https://www.postgresql.org/docs/9.2/reference-client.html



----------
## 設定 Django App 可連上 Postgres 資料庫系統


安裝可與 Django 協同運作之 Python 套件

    pipenv install psycopg2-binary

設定 Django App 使用 my_app 資料庫

my_app/web_site/settings.py

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'my_app',
            'USER': 'my_app',
            'PASSWORD': 'Passw0rd',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }

刪除原用之 SQLite 資料庫

    rm db.sqlite3

建置及啟用 my_app 資料庫

    python manage.py migrate

驗證 my_app 資料庫已完成建置

    sudo -u postgres psql my_app
    \d
    ...
    \q



    (my_app) vagrant@linux:/vagrant/my_app$ sudo -u postgres psql my_app
    psql (10.12 (Ubuntu 10.12-0ubuntu0.18.04.1))
    Type "help" for help.
    
    my_app=# \d
                           List of relations
     Schema |               Name                |   Type   | Owner
    --------+-----------------------------------+----------+--------
     public | auth_group                        | table    | my_app
     public | auth_group_id_seq                 | sequence | my_app
     public | auth_group_permissions            | table    | my_app
     public | auth_group_permissions_id_seq     | sequence | my_app
     public | auth_permission                   | table    | my_app
     public | auth_permission_id_seq            | sequence | my_app
     public | auth_user                         | table    | my_app
     public | auth_user_groups                  | table    | my_app
     public | auth_user_groups_id_seq           | sequence | my_app
     public | auth_user_id_seq                  | sequence | my_app
     public | auth_user_user_permissions        | table    | my_app
     public | auth_user_user_permissions_id_seq | sequence | my_app
     public | django_admin_log                  | table    | my_app
     public | django_admin_log_id_seq           | sequence | my_app
     public | django_content_type               | table    | my_app
     public | django_content_type_id_seq        | sequence | my_app
     public | django_migrations                 | table    | my_app
     public | django_migrations_id_seq          | sequence | my_app
     public | django_session                    | table    | my_app
    (19 rows)
    
    my_app=# \q
    (my_app) vagrant@linux:/vagrant/my_app$


建立 Django App 的後台管理員帳號

    python manage.py createsuperuser

啟動已與 Postgres 資料庫系統結合運作的 Django App 

    vagrant@linux:~$ ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
        inet6 ::1/128 scope host
           valid_lft forever preferred_lft forever
    2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
        link/ether 08:00:27:12:0d:10 brd ff:ff:ff:ff:ff:ff
        inet 10.0.2.15/24 brd 10.0.2.255 scope global dynamic noprefixroute eth0
           valid_lft 86312sec preferred_lft 86312sec
        inet6 fe80::a00:27ff:fe12:d10/64 scope link noprefixroute
           valid_lft forever preferred_lft forever
    3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
        link/ether 08:00:27:c7:c6:c8 brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.207/24 brd 192.168.66.255 scope global dynamic noprefixroute eth1
           valid_lft 604716sec preferred_lft 604716sec
        inet6 fe80::a00:27ff:fec7:c6c8/64 scope link
           valid_lft forever preferred_lft forever
    
    vagrant@linux:~$ ./manage.py runserver 0:8000

瀏覽網址： 

- http://127.0.0.1:5000/admin/
- http://192.168.66.100:5000/admin/
- http://192.168.66.207:8000/admin/



# 結合 Nginx 與 Gunicorn
https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/117886/

## Nginx 

**設定 default http server**


    sudo nvim /etc/nginx/sites-available/default


    server {
            charset utf-8;
    
            listen 80;
            server_name vm100.ccc99.tw;
    
            root /vagrant/code;
            index index.html;
    
            location = /favicon.ico { access_log off; log_not_found off; }
    
            location / {
                    #proxy_set_header Host $host;
                    include proxy_params;
                    proxy_pass http://unix:/run/gunicorn.sock;
            }
    
            location /static {
                    alias /vagrant/code/static_collected;
            }
    }


確定檔案存在 **/etc/nginx/sites-enabled/default**

    vagrant@linux:~$ ls -al /etc/nginx/sites-enabled/default
    lrwxrwxrwx 1 root root 34 Apr 28 02:23 /etc/nginx/sites-enabled/default -> /etc/nginx/sites-available/default

使用瀏覽器確認 HTTP 伺服器的 /static 目錄已能正常運作。
http://192.168.33.10/static/admin/img/search.svg 
http://192.168.66.216/static/admin/img/search.svg 


## Gunicorn 安裝與設定


    pipevn shell
    pipenv install gunicorn


1. 設定 Gunicorn Service 需要使用的 Unix Socket （gunicorn socket）
    (code) vagrant@vagrant:/vagrant/code$ sudo nvim /etc/systemd/system/gunicorn.socket

/etc/systemd/system/gunicorn.socket

    [Unit]
    Description=gunicorn socket
    
    [Socket]
    ListenStream=/run/gunicorn.sock
    
    [Install]
    WantedBy=sockets.target



2. 設定 Gunicorn Service 
    (code) vagrant@vagrant:/vagrant/code$ sudo nvim /etc/systemd/system/gunicorn.service

/etc/systemd/system/gunicorn.service

    [Unit]
    Description=gunicorn daemon
    Requires=gunicorn.socket
    After=network.target
    
    [Service]
    User=vagrant
    Group=www-data
    WorkingDirectory=/vagrant/code
    ExecStart=/home/vagrant/.local/share/virtualenvs/code-5KxOl6hQ/bin/gunicorn \
              --access-logfile - \
              --workers 3 \
              --bind unix:/run/gunicorn.sock \
              web_project.wsgi:application
    
    [Install]
    WantedBy=multi-user.target



    (code) vagrant@vagrant:/vagrant/code$ sudo systemctl start gunicorn.socket
    (code) vagrant@vagrant:/vagrant/code$ sudo systemctl enable gunicorn.socket
    Created symlink /etc/systemd/system/sockets.target.wants/gunicorn.socket → /etc/systemd/system/gunicorn.socket.



## Checking for the Gunicorn Socket File


    (code) vagrant@vagrant:/vagrant/code$ sudo systemctl status gunicorn.socket
    Failed to dump process list, ignoring: No such file or directory
    ● gunicorn.socket - gunicorn socket
       Loaded: loaded (/etc/systemd/system/gunicorn.socket; enabled; vendor preset: enabled)
       Active: active (listening) since Wed 2020-04-29 04:21:17 UTC; 3min 14s ago
       Listen: /run/gunicorn.sock (Stream)
       CGroup: /system.slice/gunicorn.socket
    
    Apr 29 04:21:17 vagrant systemd[1]: Listening on gunicorn socket.



    (code) vagrant@vagrant:/vagrant/code$ file /run/gunicorn.sock
    /run/gunicorn.sock: socket



    (code) vagrant@vagrant:/vagrant/code$ sudo journalctl -u gunicorn.socket
    -- Logs begin at Tue 2020-04-28 13:54:23 UTC, end at Wed 2020-04-29 04:28:49 UTC. --
    Apr 29 04:21:17 vagrant systemd[1]: Listening on gunicorn socket.



## Testing Socket Activation


    (code) vagrant@vagrant:/vagrant/code$ sudo systemctl status gunicorn
    ● gunicorn.service - gunicorn daemon
       Loaded: loaded (/etc/systemd/system/gunicorn.service; disabled; vendor preset: enabled)
       Active: inactive (dead)


使用瀏覽器確認 HTTP 伺服器(Nginx) 已能與 APP 伺服器（Gunicorn）正常協同運作：
http://192.168.33.10/
http://192.168.66.216/


# 參考文件

**Gunicorn 官網技術文件**

http://docs.gunicorn.org/en/latest/deploy.html


**Python 環境管理工具：pyenv 與 pipenv** 


https://hackernoon.com/reaching-python-development-nirvana-bb5692adf30c



**使用 pyenv 管理作業系統層級之 Python 直譯器版本** 

https://blog.codylab.com/python-pyenv-management/


**適用於 VirtualBox VM 平台，專供 Ubuntu 18.04.4 之 Vagrant Box**

https://app.vagrantup.com/peru/boxes/ubuntu-18.04-desktop-amd64



# Vagrant 狀況排解

各種 Vagrant 或 Vagrant Box 操作問題排解指南。
https://www.ityoudao.cn/posts/vagrant-quickstart/


執行 apt upgrade 的過程，當機

https://itsfoss.com/could-not-get-lock-error/



# Vagrant Box 開發環境作業指南

說明如何使用 **Vagrant Box 技術，架設 Web App 之開發環境作業指南，適用於：Nginx + Gunicorn + Django + Postgres 架構。**

**【參考範例一】：**

https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04


**【參考範例二】：**


https://github.com/systers/macc/blob/develop/docs/Installation%20Guide.md#using-vagrant





# Ubuntu 22.04

# Network Configuration

<https://blog.devcloud.com.tw/ubuntu-22-04-wang-lu-she-ding-jing-tai-ip/>

    network:
      version: 2
      ethernets:
        eno1:
          dhcp4: no
          dhcp6: no
          addresses: [192.168.66.10/24]
          gateway4: 192.168.66.1
          nameservers:
            addresses: [8.8.8.8]

## Network Configuration

<https://linuxconfig.org/ubuntu-22-04-network-configuration>

## How to add static route with NetPlan

<https://linuxconfig.org/how-to-add-static-route-with-netplan-on-ubuntu-22-04-jammy-jellyfish-linux>

# KVM/QEMU

<https://www.linuxtechi.com/how-to-install-kvm-on-ubuntu-22-04/>

/etc/netplan/01-netcfg.yaml

    network:
      version: 2
      ethernets:
        eno1:
          dhcp4: false
          dhcp6: false
      # add configuration for bridge interface
      bridges:
        br0:
          interfaces: [eno1]
          dhcp4: false
          addresses: [192.168.66.10/24]
          routes:
            - to: default
              via: 192.168.66.1
              metric: 100
          nameservers:
            addresses: [8.8.8.8, 4.2.2.2]
          parameters:
            stp: false
          dhcp6: false

# Install Basic

    sudo apt install git curl


    sudo apt install build-essential manpages-dev

# Neovim

## 安裝作業

    sudo apt-get install software-properties-common


    sudo add-apt-repository ppa:neovim-ppa/stable
    sudo apt update
    sudo apt install neovim


    sudo apt-get install python-dev python-pip python3-dev python3-pip

## 異常排除作業

使用 sudo 操作 nvim ，致「使用者帳戶」自動切換成 root ，因而
「登入」時，原設定檔： %HOME/.config/nvim/init.lua 無法再被
讀取及使用。

【解法一】：

    sudo -E -s nvim /<DirPath>/<FileName>

【解法二】：使用 sudoedit 指令亦可。但 SHELL 設定檔，需有「
環境變數」：EDITOR 的設定 ，如： ~/.zshrc

    ...
    export EDITOR="nvim"
    ...

# VNC

VNC Clinet 欲連接 Ubuntu Desktop 內建的 VNC Server，結果卻出
現如下之錯誤訊息： "The connection was refused by the host
computer” ⋯⋯

【Ref】:
<https://help.realvnc.com/hc/en-us/articles/360002254738-VNC-Connect-Error-Messages#connectivity-error-messages-0-0>

| The connection was refused by the host computer | VNC
Server is either not running, or not running on the
specified port. | Ensure VNC Server is running. If you are
establishing a direct connection and have specified a port
other than the default for VNC (5900), ensure VNC Server is
configured to use that port. |

## VNC Host

1. 安裝 Ubuntu 預設的 VNC Server

   sudo apt install vino

2. 要求 Vino（VNC Server），可接受 Client 端，以「不加密」方
   式連線。

   gsettings set org.gnome.Vino require-encryption false

3. 驗證設定。

   gsettings get org.gnome.Vino require-encryption false

【註】：查詢/變更 Gnome 的設定（即：Current user’s GSettings
database），可使用工具： dconf-editor 。

![](https://paper-attachments.dropbox.com/s_6980145F18169361E90BE6D8D937EA56661C74123F69B52BCD5E25C5548F3E23_1662297085789_image.png)

![](https://paper-attachments.dropbox.com/s_6980145F18169361E90BE6D8D937EA56661C74123F69B52BCD5E25C5548F3E23_1662296987239_image.png)

![](https://paper-attachments.dropbox.com/s_6980145F18169361E90BE6D8D937EA56661C74123F69B52BCD5E25C5548F3E23_1662297062992_image.png)

## VNC Client: RealVNC

![](https://paper-attachments.dropbox.com/s_6980145F18169361E90BE6D8D937EA56661C74123F69B52BCD5E25C5548F3E23_1662296580977_image.png)

![](https://paper-attachments.dropbox.com/s_6980145F18169361E90BE6D8D937EA56661C74123F69B52BCD5E25C5548F3E23_1662296559505_image.png)

# MS RDP（非 XRDP）

<https://ubuntuhandbook.org/index.php/2022/04/ubuntu-22-04-remote-desktop-control/>

# 異常排除

RDP Client 連上「主機」後，畫面全黑

Microsoft llRemote Desktop 連上主機，所見為：全黑晝面。

![xrdp_logout](http://c-nergy.be/blog/wp-content/gallery/ubuntu20-10/cache/xrdp_logout.png-nggid044313-ngg0dyn-320x240x100-00f0w010c010r110f110r010t010.png)

常見「導因」為：使用者已登入主機。故「解法」為：

1. 先在「主機端」，完成「登出」；
2. 再自「遠端」，執行 XRDP Client 連線（如：macOS/Windows 的
   Remote Desktop)。 <http://c-nergy.be/blog/?p=16682>

另一種「解法」：變更作業系統的預設，允許同一使用者執行多重連
線。 <http://c-nergy.be/blog/?p=16698>

**連線後，畫面反應極低**

改用 **Ubuntu Xorg** 方式登入。

# SSH

    sudo apt install ssh

![](https://paper-attachments.dropbox.com/s_6980145F18169361E90BE6D8D937EA56661C74123F69B52BCD5E25C5548F3E23_1662297362474_image.png)

# PostgreSQL

    sudo apt install postgresql postgresql-contrib

[Reference]:
  https://linuxhint.com/install-and-setup-postgresql-database-ubuntu-22-04/

## **Access PostgreSQL Database Server**

To manage the PostgreSQL database, you will need to log in
as a `postgres` user (Linux user) and have to invoke PSQL
shell using the `psql` command.

    sudo -u postgres psqlCOPY

**Output:**

    psql (14.3 (Ubuntu 14.3-0ubuntu0.22.04.1))
    Type "help" for help.

    postgres=#
    COPY

On `psql` shell, run the below command to change the
`postgres` user (Database admin password).

    postgres=# \passwordCOPY

**OR**

    postgres=# \password postgres

## pgAdmin

<https://www.pgadmin.org/download/pgadmin-4-apt/>

# Microsoft SQL Server

<https://docs.microsoft.com/zh-tw/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver16>

無法在 Ubuntu 22.04 啟動的解決
<https://docs.microsoft.com/en-us/answers/questions/849599/microsoft-sql-is-not-working-on-ubuntu-2204.html>

    cd /opt/mssql/lib
    ls -la
    sudo rm libcrypto.so libssl.so
    sudo ln -s /usr/lib/x86_64-linux-gnu/libcrypto.so.1.1 libcrypto.so
    sudo ln -s /usr/lib/x86_64-linux-gnu/libssl.so.1.1 libssl.1.1

# OBS

<https://www.linuxcapable.com/how-to-install-obs-studio-on-ubuntu-22-04-lts/>

# Gnome Extnsions

    sudo apt-get install chrome-gnome-shell

---

# 開發環境建置篇

---

# 安裝 NodeJS

## 安裝 n

1. 安裝 n 套件

   curl -L <https://git.io/n-install> | bash

2. 設定 Shell RC

   nvim ~/.zshrc

# Node.JS

    ```sh
    # export N*PREFIX="$HOME/n"; [[ :$PATH: == *":$N_PREFIX/bin:"_ ]] || PATH+=":$N_PREFIX/bin" # Added by n-install (see <http://git.io/n-install-repo>)

    export N_PREFIX="$HOME/n"
    export PATH="$N_PREFIX/bin:$PATH"
    ```

3. 重啟 ZSH Shell . ~/.zshrc

## 安裝 node 與 npm

1. 安裝 n, npm

   n lts

2. 驗證 node -v npm -v

3. 安裝 yarn

   npm install -g yarn

   ~/n/bin/yarn -> ~/n/lib/node_modules/yarn/bin/yarn.js
   ~/n/bin/yarnpkg -> ~/n/lib/node_modules/yarn/bin/yarn.js

# Python 開發環境建置作業

## 安裝 pyenv & pyenv-virtualenv

<https://github.com/pyenv/pyenv-installer>

    curl https://pyenv.run | bash
    $ git clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv

變更 Shell 設定檔（~/.bashrc）

    # Python
    export PYENV_ROOT="$HOME/.pyenv"
    export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init -)"
    eval "$(pyenv virtualenv-init -)"
    export PYENV_ROOT="$HOME/.pyenv"
    export PIPENV_VERBOSITY=-1

重啟 Shell

    exec $SHELL

## 使用 pyenv 安裝 Python

**設定 Global**

    pyenv global system

**查詢可安裝版本**

    pyenv install --list

--or--

    pyenv install 3.10

PS:

    Installing Python-3.10.6...
    WARNING: The Python tkinter extension was not compiled and GUI subsystem has been detected. Missing the Tk toolkit?
    Installed Python-3.10.6 to /home/alanjui/.pyenv/versions/3.10.6

**安裝**

    pyenv versions
    pyenv install 3.10.6

**驗證**

    pyenv versions

    ll ~/.pyenv/versions/3.10.6/bin/
    ll ~/.pyenv/versions/3.10.6/lib/python3.10/

## 更新 pip

    ~/.pyenv/versions/3.10.6/bin/python3.10 -m pip install --upgrade pip

    ~/.pyenv/versions/3.10.6/envs/venv-3.10.6/bin/python3.10 -m pip install --upgrade pip

## 使用 pyenv-virtualenv 建置 Python 虛擬環境

**（1）建置虛擬環境**

    pyenv virtualenv 3.10.6 venv-3.10.6

**（2）檢驗虛擬環境已被建立**

    pyenv virtualenvs

**（3）設定「作業系統」使用之「預設虛擬環境」**

    pyenv global venv-3.10.6

**（4）檢驗設定正確無誤**

    pyenv versions


    cd
    pyenv version
    python

**（5）安裝 Neovim 支援套件**

    pyenv activate venv-3.10.6
    python -m pip install --upgrade pip
    python -m pip install pynvim

## 安裝 Python 套件

    pip install pipenv



    pip install pylint autopep8


    ll ~/.pyenv/versions/3.10.6/envs/venv-3.10.6/bin/


    ll ~/.pyenv/versions/3.10.6/envs/venv-3.10.6/lib/python3.10/site-packages/

# Neovim

## 安裝 OS 套件

**安裝 lua lib 管理器**

    sudo apt install luarocks

**安裝 ctags**

<https://installati.one/ubuntu/22.04/universal-ctags/>

    sudo apt install universal-ctags

**安裝 ripgrep**

<https://installati.one/ubuntu/22.04/ripgrep/>

    sudo apt install ripgrep

**安裝 fd**

<https://installati.one/ubuntu/22.04/fd-find/>

    sudo apt install fd-find

**安裝 Markdown Preview 工具**

    yarn global add instant-markdown-d

## 安裝 nvim-lsp-installer 支援套件

## go

<https://linuxhint.com/install-use-go-ubuntu-22-04/>

    sudo apt install -y golang-go

## julia

<https://github.com/JuliaLang/julia>

**（1）下載原始碼**

    cd ~/.local/share
    git clone https://github.com/JuliaLang/julia.git
    cd julia
    git checkout v1.8.0

**（2）編譯原始碼**

    sudo apt install build-essential libatomic1 python gfortran perl wget m4 cmake pkg-config curl

    make
    make testall

**（3）安裝執行檔**

    make install
    ln -fns ~/.local/share/julia/usr/bin/julia ~/.local/bin/

**安裝 Rust 與 Cargo**

<https://www.linuxcapable.com/how-to-install-rust-on-ubuntu-22-04-lts/>

    sudo apt install -y curl build-essential gcc make


    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

- Cargo home directory ( $CARGO_HOME ): ~/.cargo
- Cargo’s bin directory ( cargo, rustc, rustup ) — add to
  PATH environment variable:
  - ~/.profile
  - ~/.bashrc
  - ~/.zshenv

~/.profile

    source "$HOME/.cargo/env"


    exec $SHELL

**安裝 Java 與 Javac**
<https://linuxhint.com/install-java-ubuntu-22-04/>

    sudo apt install -y openjdk-18-jdk


    java --version
    javac --version

**安裝 PHP 與 Composer**
<https://linuxhint.com/install-and-use-php-composer-ubuntu-22-04/>

**（1）Update system packages**

    sudo apt update

**（2）Install required packages**

    sudo apt install -y php-cli unzip

**（3）Download PHP Composer setup file**

    curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php

Validate if the PHP Composer installer can be safely
executed or not:

    HASH=`curl -sS https://composer.github.io/installer.sig`


    php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"

**（4）Install PHP Composer**

    sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer

**（5）Test PHP Composer installation**

    composer

## 安裝 null-ls 支援套件

<https://smarttech101.com/nvim-lsp-set-up-null-ls-for-beginners/>

**安裝 null-ls 對 Node.JS 的支援套件**

    n lts
    yarn global add eslint

【註】：使用 npm 安裝作法

    npm install --location=global eslint

**HTML/CSS/JavaScript/TypeScript/JSON/Markdown/YAML 自動格式
調整工具（Formatting）**

    yarn global add prettier

**安\*\***裝 null-ls 對 Markdown 的支援套件\*\*

    sudo global add instant-markdown-d

**安裝 null-ls 對 Python 的支援套件**

    pip install pylint flake8 autopep8 djlint djhtml

**安裝 null-ls 對 Lua Script 的支援套件**

    sudo apt install -y node-stylus

**安裝 null-ls 對 Markdown Lint 的支援套件**

<https://github.com/igorshubovych/markdownlint-cli>

    yarn global add markdownlint-cli


    which markdownlint
    /home/alanjui/.yarn/bin/markdownlint

# Lua 安裝

<https://innovativeinnovation.github.io/ubuntu-setup/lua/>
<http://www.lua.org/manual/5.4/readme.html>

## 透過 apt 套件管理工具安裝

（1）安裝(Installation)

    sudo apt install lua5.4 liblua5.4-dev

**（2）設定（Configuration）**

    sudo update-alternatives --config lua-compiler
    替代項目 lua-compiler（提供 /usr/bin/luac）有 3 個選擇。

      選項       路徑            優先權  狀態
    ------------------------------------------------------------
    * 0            /usr/bin/luac5.3   120       自動模式
      1            /usr/bin/luac5.1   110       手動模式
      2            /usr/bin/luac5.3   120       手動模式
      3            /usr/bin/luac5.4   20        手動模式

    按下 <enter> 鍵以保留目前選項[*]，或是輸入選擇編號：3
    update-alternatives: 在手動模式下以 /usr/bin/luac5.4 來提供 /usr/bin/luac (lua-compiler)



    sudo update-alternatives --config lua-interpreter
    替代項目 lua-interpreter（提供 /usr/bin/lua）有 3 個選擇。

      選項       路徑           優先權  狀態
    ------------------------------------------------------------
    * 0            /usr/bin/lua5.3   120       自動模式
      1            /usr/bin/lua5.1   110       手動模式
      2            /usr/bin/lua5.3   120       手動模式
      3            /usr/bin/lua5.4   20        手動模式

    按下 <enter> 鍵以保留目前選項[*]，或是輸入選擇編號：3
    update-alternatives: 在手動模式下以 /usr/bin/lua5.4 來提供 /usr/bin/lua (lua-interpreter)

**（3）驗證**

    lua
    Lua 5.4.4  Copyright (C) 1994-2022 Lua.org, PUC-Rio
    >

## 透過原始碼自行編譯及安裝

**（1）以瀏覽器查詢可供下載的「原始碼壓縮檔案」**

    http://www.lua.org/ftp/

**（2）下載原始碼及解壓縮**

    curl -R -O http://www.lua.org/ftp/lua-5.4.4.tar.gz
    tar zxf lua-5.4.4.tar.gz

**（3）檢測能否編譯及安裝**

    cd lua-5.4.4
    make linux test

**（4）執行安裝作業，置入目錄：/usr/local/opt/lua/**

    sudo make install INSTALL_TOP=/usr/local/opt/lua
    cd src && mkdir -p /usr/local/opt/lua/bin /usr/local/opt/lua/include /usr/local/opt/lua/lib /usr/local/opt/lua/man/man1 /usr/local/opt/lua/share/lua/5.4 /usr/local/opt/lua/lib/lua/5.4
    cd src && install -p -m 0755 lua luac /usr/local/opt/lua/bin
    cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/local/opt/lua/include
    cd src && install -p -m 0644 liblua.a /usr/local/opt/lua/lib
    cd doc && install -p -m 0644 lua.1 luac.1 /usr/local/opt/lua/man/man

【驗證】：

    ll /usr/local/opt/lua
    總用量 20
    drwxr-xr-x 2 root root 4096  8月 20 19:46 bin
    drwxr-xr-x 2 root root 4096  8月 20 19:42 include
    drwxr-xr-x 3 root root 4096  8月 20 19:42 lib
    drwxr-xr-x 3 root root 4096  8月 20 19:42 man
    drwxr-xr-x 3 root root 4096  8月 20 19:42 share

（4-1）以「預設」安裝

    sudo make install
    cd src && mkdir -p /usr/local/bin /usr/local/include /usr/local/lib /usr/local/man/man1 /usr/local/share/lua/5.3 /usr/local/lib/lua/5.3
    cd src && install -p -m 0755 lua luac /usr/local/bin
    cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/local/include
    cd src && install -p -m 0644 liblua.a /usr/local/lib
    cd doc && install -p -m 0644 lua.1 luac.1 /usr/local/man/man1

- /usr/local/bin
- /usr/local/include
- /usr/local/lib
- /usr/local/man/man1
- /usr/local/share/lua/5.3
- /usr/local/lib/lua/5.3

## LuaRocks 設定檔

    sudo nvim /etc/luarocks/config.lua


    rocks_trees = {
       home..[[/.luarocks]],
       [[/usr/local]]
    }

【參考】：

    rocks_trees = { "/usr/local/lib/luarocks/5.1" }
    variables = {
       LUA = "/usr/local/opt/lua/bin/lua5.1",
       LUA_BINDIR = "/usr/local/opt/lua/bin",
       LUA_INCDIR = "/usr/local/opt/lua/include",
       LUA_LIBDIR = "/usr/local/opt/lua/lib",
    }

## 使用 LuaRocks 安裝

<https://luarocks.org/>

    luarocks install luaformatter --lua-version 5.4

**安裝 null-ls 對 Lua Formatter 的支援套件**

    sudo luarocks install formatter

【LuaFormatter】：

<https://github.com/Koihik/LuaFormatter>

（1）透過 luarocks 安裝 lua 套件：lua-format

    sudo apt install -y cmake
    sudo luarocks install --server=https://luarocks.org/dev luaformatter


     which lua-format
    /usr/local/bin/lua-format

【未安裝 cmake 套件會出現如下之問題】：

    Error: Build error: 'cmake' program not found. Make sure CMake is installed and is available in your PATH (or you may want to edit the 'variables.CMAKE' value in file '/etc/luarocks/config-5.1.lua')

Error: Failed finding Lua header files. You may need to
install them or configure LUA_INCDIR.

    $ sudo apt install liblua5.1-dev
    正在讀取套件清單... 完成
    正在重建相依關係... 完成
    正在讀取狀態資料... 完成
    注意，選取 liblua5.1-0-dev 而非 liblua5.1-dev
    liblua5.1-0-dev 已是最新版本 (5.1.5-8.1build4)。
    liblua5.1-0-dev 被設定為手動安裝。
    升級 0 個，新安裝 0 個，移除 0 個，有 0 個未被升級。

## 安裝 Language Server 套件

透過 Neovim 套件：nvim-lsp-installer ，以下之 Language
Server 會自動安裝，置於如下目錄路徑處：

    [alanjui@VM101 nvim]$ ll ~/.local/share/nvim/lsp_servers/
    total 48
    drwxr-xr-x 13 alanjui alanjui 4096  八  18 09:34 .
    drwxr-xr-x  3 alanjui alanjui 4096  八  18 09:33 cssls
    drwxr-xr-x  3 alanjui alanjui 4096  八  18 09:33 diagnosticls
    drwxr-xr-x  3 alanjui alanjui 4096  八  18 09:33 emmet_ls
    drwxr-xr-x  3 alanjui alanjui 4096  八  18 09:33 html
    drwxr-xr-x  3 alanjui alanjui 4096  八  18 09:33 jsonls
    drwxr-xr-x  3 alanjui alanjui 4096  八  18 09:33 pyright
    drwxr-xr-x  2 alanjui alanjui 4096  八  17 09:50 rust_analyzer
    drwxr-xr-x  3 alanjui alanjui 4096  八  18 09:34 stylelint_lsp
    drwxr-xr-x  3 alanjui alanjui 4096  八  17 09:50 sumneko_lua
    drwxr-xr-x  2 alanjui alanjui 4096  八  17 09:50 texlab
    drwxr-xr-x  3 alanjui alanjui 4096  八  18 09:34 tsserver

~~**TypeScript Language Server**~~

    yarn global add typescript typescript-language-server

~~**Python Language Server**~~

    yarn global add pyright

~~**Diagnostic Language Server**~~

    yarn global add diagnostic-languageserver

## 安裝 Provider 套件

**Node.JS Provider**

    npm install -g neovim

**Python Provider**

    pip install neovim pynvim

## 安裝 VimTeX 套件

<https://riptutorial.com/latex/example/7452/installation-and-setup>

    sudo apt install -y texlive-full

# 安裝 VS Code

## Install VS Code

    yay -S visual-studio-code-bin

## Turn on Settings Sync

先開 Google Chrome 瀏覽器

1. 執行同步指令： /Account/Turn on Settings Sync
2. 選擇同步項目後，再按《Sign in & Turn on》按鈕：

   - Settings
   - Keyboard Shortcuts for each platform
   - User Snippets
   - User Tasks
   - Extensions
   - UI State

3. 選擇登入方式：Sign in with GitHub

## Install Visual Code Extension

- VSCode Neovim
- Python
- Pylance
- Prettier - Code formatter
- Live Server
- HTML CSS Support
- Color Highlight
- Auto Close Tag
- ESLint
- Markdown All in One
- Django
- SQLite
- SQL Server (mssql)

# Django

    mkdir -p ~/workspace/django && cd $_


    git clone git@github.com:AlanJui/Django4.git


    pyenv version
    python3.10 -m pip install --upgrade pip
    pip install pipenv
    pipenv shell
    pipenv install


    (venv-3.10.6) [alanjui@VM101 Django4]$ ll ~/.pyenv/versions/3.10.6/envs/venv-3.10.6/lib/python3.10/site-packages/
    total 100
    drwxr-xr-x 22 alanjui alanjui  4096  八  18 14:50 .
    drwxr-xr-x  3 alanjui alanjui  4096  八  18 14:48 certifi
    drwxr-xr-x  2 alanjui alanjui  4096  八  18 14:48 certifi-2022.6.15.dist-info
    -rw-r--r--  1 alanjui alanjui 10759  八  18 14:48 clonevirtualenv.py
    drwxr-xr-x  3 alanjui alanjui  4096  八  18 14:48 distlib
    drwxr-xr-x  2 alanjui alanjui  4096  八  18 14:48 distlib-0.3.5.dist-info
    -rw-r--r--  1 alanjui alanjui   151  八  18 09:49 distutils-precedence.pth
    drwxr-xr-x  3 alanjui alanjui  4096  八  18 14:48 filelock
    drwxr-xr-x  2 alanjui alanjui  4096  八  18 14:48 filelock-3.8.0.dist-info
    drwxr-xr-x  5 alanjui alanjui  4096  八  18 14:50 pip
    drwxr-xr-x  7 alanjui alanjui  4096  八  18 14:48 pipenv
    drwxr-xr-x  2 alanjui alanjui  4096  八  18 14:48 pipenv-2022.8.17.dist-info
    drwxr-xr-x  2 alanjui alanjui  4096  八  18 14:50 pip-22.2.2.dist-info
    drwxr-xr-x  5 alanjui alanjui  4096  八  18 09:49 pkg_resources
    drwxr-xr-x  3 alanjui alanjui  4096  八  18 14:48 platformdirs
    drwxr-xr-x  3 alanjui alanjui  4096  八  18 14:48 platformdirs-2.5.2.dist-info
    drwxr-xr-x  8 alanjui alanjui  4096  八  18 09:49 setuptools
    drwxr-xr-x  2 alanjui alanjui  4096  八  18 09:49 setuptools-63.2.0.dist-info
    drwxr-xr-x 11 alanjui alanjui  4096  八  18 14:48 virtualenv
    drwxr-xr-x  2 alanjui alanjui  4096  八  18 14:48 virtualenv-20.16.3.dist-info
    drwxr-xr-x  2 alanjui alanjui  4096  八  18 14:48 virtualenv_clone-0.5.7.dist-info
    drwxr-xr-x  3 alanjui alanjui  4096  八  18 09:49 _distutils_hack
    drwxr-xr-x  2 alanjui alanjui  4096  八  18 14:48 __pycache__

## 透過 pipenv 與 Pipfile.lock 產生 requirements.txt 套件安裝清單

    pipenv lock --requirements > requirements.txt


    pip install -r requirements.txt

# 建立 Django Project

## 建置 Django Project

1. Create dir

   cd ~/workspace/django mkdir vscode-tutorial && cd $\_

2. Query venv

   pyenv virtualenvs

3. Set and start up venv for project

   pyenv local venv-3.10.6 pipenv shell

4. Install django (python package)

   pipenv install django

5. Create Django Project

   django-admin startproject myapp .

6. 驗證

   ./manage.py migrate ./manage.py runserver

Google Chrome shortcut key for “go to URL Address Bar”:

- macOS: <Command>+<L>
- Linux: <Ctrl>+<L>

## 設定相關套件所需環境

1. copy configurations files:

- .gitignore
- .yabs
- pyrightconfig.json
- pylintrc
- flake8
- prettierrc.json
- requirements.txt

2. 安裝 Django Project 基本套件 pipenv install -r
   requirements.txt

3. 修訂 pyrightconfig.json

   { "venvPath":
   "/home/alanjui/.pyenv/versions/3.10.6/venvs", "venv":
   "venv-3.10.6", ... }

4. 修訂 .pylintrc

   [MASTER] ... django-settings-module=myapp.settings

5. 建版本儲存倉

   git init git add git commit -m "Initial project done"

## 建立專案附屬 App

    python manage.py starapp <AppName>


    ./manage.py startapp hello

# 安裝 Python 除錯器： **Debugpy**

## 安裝作業程序

    cd
    mkdir .virtualenvs
    cd .virtualenvs
    python -m venv debugpy
    ./debugpy/bin/python -m pip install debugpy

**debugpy 安裝路徑：**

    [alanjui@VM101 .virtualenvs]$ ll debugpy/lib/python3.10/site-packages
    /
    total 40
    drwxr-xr-x 10 alanjui alanjui 4096  八  19 20:36 .
    drwxr-xr-x  8 alanjui alanjui 4096  八  19 20:35 debugpy
    drwxr-xr-x  2 alanjui alanjui 4096  八  19 20:35 debugpy-1.6.3.dist-i
    nfo
    -rw-r--r--  1 alanjui alanjui  151  八  19 20:33 distutils-precedence
    .pth
    drwxr-xr-x  5 alanjui alanjui 4096  八  19 20:36 pip
    drwxr-xr-x  2 alanjui alanjui 4096  八  19 20:36 pip-22.2.2.dist-info
    drwxr-xr-x  5 alanjui alanjui 4096  八  19 20:33 pkg_resources
    drwxr-xr-x  8 alanjui alanjui 4096  八  19 20:33 setuptools
    drwxr-xr-x  2 alanjui alanjui 4096  八  19 20:33 setuptools-63.2.0.di
    st-info
    drwxr-xr-x  3 alanjui alanjui 4096  八  19 20:33 _distutils_hack

**更新 pip**

    ./debugpy/bin/python -m pip install --upgrade pip

## 在 Django 專案執行除錯作業

【註】：**在專案中，不必再安裝 debugpy 套件。**

**（1）設定「除錯暫停點」(Breakpoint)** 打開 python 原始碼檔
案，在原始碼「標註除錯暫停點」：《Space》、《d》 、《b》

**（2）啟動除錯器，開始監聽 Django App 之執行作業。** 啟動
debugpy 除錯器： 《Space》、《d》 、《c》

**（3）透過 Web 瀏覽器，啟動 Django App 執行作業。**

**（4） 查詢「變數」內含值：**

    - 使用 Hover 功能詳讀： 《Space》、《d》 、《h》
    - 使用 Widgets 功能瀏覽：《Space》、《d》 、《h》

【註】：在 nvim 的指令列，控制 nvim-dap-ui 的 UI 介面：

    :lua require("dapui").open()
    :lua require("dapui").close()
    :lua require("dapui").toggle()

**（5）繼續 Django App 執行作業：**

    - 執行一行程式碼（Step Over）： 《Space》、《d》 、《o》
    - Step Into：《Space》、《d》 、《i》
    - Step Out：《Space》、《d》 、《o》

# 防火牆

    sudo ufw allow 1022/tcp


    sudo ufw reload


    sudo ufw status

---

# 參考

---

## Upgrade from Ubuntu 20.04 to 22.04

<https://websetnet.net/zh-TW/how-to-upgrade-from-ubuntu-20-04-to-ubuntu-22-04-lts-step-by-step-guide/>

## Networking on Ubuntu 22.04

<https://www.itzgeek.com/how-tos/linux/ubuntu-how-tos/set-a-static-ip-address-on-ubuntu-22-04.html>

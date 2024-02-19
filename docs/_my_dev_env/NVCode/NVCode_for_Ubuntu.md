# NVCode for Ubuntu


## Neovim 安裝

https://paper.dropbox.com/ep/redirect/external-link?url=https%3A%2F%2Fgithub.com%2Fneovim%2Fneovim%2Freleases%2Fnightly&hmac=D9RmfsNcTJOgx8nP5%2BNpylNT224oXnoH3OKP%2BKMUZL0%3D

**（1）Install Neovim**

    


**（2）Install Python support for Neovim**
先完成 pyenv ：Python 版本管理器之安裝後，再執行如下指令：

    pip install --upgrade pip
    pip install pynvim
    pip install neovim-remote


**（3）Install Node.JS support for Neovim**
先完成 n : Node.JS 版本管理器之安裝後，再執行如下指令：

    npm install -g neovim


**（4）Install Lua**

    sudo apt install lua5.3
    sudo apt install -y luarocks

【參考】： https://www.tecmint.com/install-lua-in-centos-ubuntu-linux/


**（5）Install Neovim Plugins**


《ripgrep》

    sudo apt install -y ripgrep


《silver searcher》

    sudo apt install -y silversearcher-ag


https://github.com/ggreer/the_silver_searcher


《fd》

    sudo apt install -y fd-find


    vim ~/.zshrc


    alias fd=fdfind


https://www.howtogeek.com/682244/how-to-use-the-fd-command-on-linux/



《ranger》

    sudo apt install -y ranger caca-utils highlight atool w3m poppler-utils mediainfo


https://www.digitalocean.com/community/tutorials/installing-and-using-ranger-a-terminal-file-manager-on-a-ubuntu-vps



《**Rnvimr**》

    pip install ranger-fm ueberzug

【註】：
Rnvimr is a NeoVim plugin that allows you to use Ranger in a floating window.

Different than other Ranger vim-plugins, Rnvimr gives you full control over Ranger. It uses [RPC](https://neovim.io/doc/user/api.html#RPC) to communicate with Ranger.

This plugin does not support Vim.

https://awesomeopensource.com/project/kevinhwang91/rnvimr?categoryPage=40#installation


《universal-ctags》

    cd ~/build
    git clone https://github.com/universal-ctags/ctags.git
    cd ctags
    ./autogen.sh 
    ./configure
    make
    sudo make install


https://github.com/universal-ctags/ctags/blob/master/docs/autotools.rst



《lazy git》

    sudo add-apt-repository ppa:lazygit-team/daily
    sudo apt update
    sudo apt install lazygit


https://github.com/jesseduffield/lazygit#ubuntu



《lazy docker》

    curl https://raw.githubusercontent.com/jesseduffield/lazydocker/master/scripts/install_update_linux.sh | bash


https://github.com/jesseduffield/lazydocker#installation


《coc-nvim extension: bash-language-server》


《coc-nvim extension: lua-language-server》


- Install Pre-build tool: Ninja
    sudo apt install -y ninja-build


- Install lua-language-server
    cd ~/build
    git clone https://github.com/sumneko/lua-language-server
    cd lua-language-server
    git submodule update --init --recursive
    
    cd 3rd/luamake
    ninja -f ninja/linux.ninja
    cd ../..
    ./3rd/luamake/luamake rebuild
    
    cp bin/Linux/lua-language-server ~/.local/bin/


https://github.com/sumneko/lua-language-server/wiki/Build-and-Run-(Standalone)




----------
## MyNVCode 設定檔安裝


**下載**

    git clone git@github.com:AlanJui/MyNVCode.git ~/.config/nvim


    git clone https://github.com/AlanJui/MyNVCode.git ~/.config/nvim


修訂 ～/.config/nvim/init.vim

    https://github.com/AlanJui/MyNVCode.git


修訂 ~/.config/coc-settings.json

    cd ~/.config/nvim
    rm coc-settings.json
    ln -s -f my-nvim/coc-settings.json


    vim coc-settings.json


    {
      ....
      "languageserver": {
        "bash": {
          "command": "bash-language-server",
          "args": ["start"],
          "filetypes": ["sh"],
          "ignoredRootPaths": ["~"]
        },
        "lua": {
          "command": "~/.local/bin/lua-language-server",
          "filetypes": ["lua"],
          "trace.server": "verbose"
        }
    }


啟動 FAR

    nvim
    :UpdateRemotePlugins


Clipboard: xclip



----------
## Django Project



    pyenv local venv-3.9.1



    pip install django



    pip install pylint autopep8


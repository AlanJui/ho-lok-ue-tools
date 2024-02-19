# 納管設定檔（dotfiles）
在 Mac OSX  或是 Ubuntu 作業系統，許多應用軟體的「設定檔」，如：VIM (.vimrc) 、ZSH (.zshrc) ，其「檔案名稱」均是以「點」開始；且都會存放在個人的 Home 目錄下（如： /home/alanjui/.zshrc ）。

由於這些「設定檔」，隨時會基於「某時的需求」，進行設定「變更」。也因此，可能會設定變更之後，原來正常的軟體，變得無法正常運作；或是變更之後反悔了，想要回復成先前的設定⋯⋯。

基於上述種種理由，這些設定檔也該進行「版本控管」。

只是⋯⋯，對於習慣用 git 進行檔案版本控管的人，會有一個大麻煩，那就是在個人的 Home 目錄下，常有一大堆的設定檔（dotfiles），可是，我們想真正想做版本控管的檔案卻僅只有幾個。那⋯⋯，這該怎麼辦呢？

這問題的「關鍵重點」在於：建立 git repo 時，使用 bare 選項，如：

    $ git init --bare $HOME/.dotfiles



# 在另一台電腦套用設定檔


## 首次設定

**（1）下載 Remote Git 容器**

【macOS】

    $ git clone --bare https://gitlab.com/alanjui.1960/dotfiles.git $HOME/dotfiles
    
    $ git clone --bare git@gitlab.com:alanjui.1960/dotfiles.git $HOME/dotfiles


【Ubuntu】

    $ git clone --bare git@github.com:AlanJui/ubuntu-dotfiles.git $HOME/dotfiles



    git clone --bare https://github.com/AlanJui/ubuntu-dotfiles.git $HOME/dotfiles



**（2）以別稱（alias）設定操作指令**

於 Shell 設定檔（如： ~/.zshrc、 ~/.bashrc 、 ~/.bash_profile ）加入「指令別稱設定」：dotfiles 

$HOME/.zshrc

    alias dotfiles='/usr/bin/git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'




    $ cd
    
    $ alias dotfiles='/usr/bin/git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'
    
    $ dotfiles config --local status.showUntrackedFiles no
    
    $ mkdir -p ~/dotfiles-backup
    
    $ dotfiles checkout 2>&1 | egrep "\s+\." | awk {'print $1'} | xargs -I{} mv {} dotfiles-backup/{}
    
    $ cp ~/.zshrc ~/.zshrc.bak
    $ mv .config/Code/User/settings.json .config/Code/User/settings.json.bak
    
    $ dotfiles checkout


**（3）簽出各個 dotfiles 的實體檔案**


    source ~/.bashrc
    dotfiles checkout



## 強制更新到最新版

不管本機端 Git 容器內之檔案是否有變更（目錄路徑： ~/.dotfiles ），直接使用遠地端之 Git 容器覆寫。


    dotfiles reset --hard HEAD
    dotfiles pull 



# 安裝 pyenv

**Install pyenv on mac**

    $ brew update
    $ brew install pyenv

**Install pyenv on Ubuntu**

    $ git clone https://github.com/pyenv/pyenv.git ~/.pyenv


$HOME/.profile

    export PYENV_ROOT=$(pyenv root)
    export PATH="$PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH"


    $ source ~/.zshrc
    
    $ sudo apt install --no-install-recommends make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev


    $ pyenv install 3.8.5
    python-build: use openssl@1.1 from homebrew
    python-build: use readline from homebrew
    Downloading Python-3.8.5.tar.xz...
    -> https://www.python.org/ftp/python/3.8.5/Python-3.8.5.tar.xz
    Installing Python-3.8.5...
    python-build: use readline from homebrew
    python-build: use zlib from xcode sdk
    Installed Python-3.8.5 to /Users/alanjui/.pyenv/versions/3.8.5


    $ pyenv versions
    * system (set by /Users/alanjui/.pyenv/version)
      3.8.5
    
    $ pyenv global 3.8.5
    
    $ pyenv versions
      system
    * 3.8.5 (set by /Users/alanjui/.pyenv/version)
    
    $ python --version
    Python 3.8.5
    
    $ pyenv which python
    /Users/alanjui/.pyenv/versions/3.8.5/bin/python


    pip install --upgrade pip
    pip install pipenv

$HOME/.profile

    #--------------------------------------------------------------------
    # pyenv
    #--------------------------------------------------------------------
    
    # export PYENV_ROOT="$HOME/.pyenv"
    export PYENV_ROOT=$(pyenv root)
    export PATH="$PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH"
    
    if command -v pyenv 1>/dev/null 2>&1; then
      eval "$(pyenv init -)"
      # eval "$(pyenv virtualenv-init -)"
    fi
    
    #--------------------------------------------------------------------
    # pipenv and autoenv
    #--------------------------------------------------------------------
    
    # Shell Ciompletion
    eval "$(pipenv --completion)"
    
    # Use Vim with virtualenv
    if [[ -n $VIRTUAL_ENV && -e "${VIRTUAL_ENV}/bin/activate" ]]; then
      source "${VIRTUAL_ENV}/bin/activate"
    fi
    
    # Create VirtualEnvironment directory under Django Project Root
    # export PIPENV_VENV_IN_PROJECT=1
    export PIPENV_VENV_IN_PROJECT="enabled"
    



# 安裝 ZSH

Install ZSH

    $ brew install zsh
    $ sudo sh -c "echo $(which zsh) >> /etc/shells" 
    $ chsh -s $(which zsh)


Install oh-my-zsh

    sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

Install Power Level 9K Theme

    $ brew tap sambadevi/powerlevel9k
    $ brew install powerlevel9k



    $ git clone https://github.com/bhilburn/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k


$HOME/.zshrc

    export ZSH="/Users/alanjui/.oh-my-zsh"
    ...
    ZSH_THEME="powerlevel9k/powerlevel9k"
    source /usr/local/opt/powerlevel9k/powerlevel9k.zsh-theme
    ...
    source $ZSH/oh-my-zsh.sh


# 設定 NeoVim



## 安裝 Nvim 需有的 Python 套件


    $ pyenv version
    3.8.5 (set by /Users/alanjui/.pyenv/version)
    
    $ pyenv which python
    /Users/alanjui/.pyenv/versions/3.8.5/bin/python
    
    $ pip install pynvim



## 安裝需有的 Node.js 套件： node + npm + yarn


    $ curl -L https://git.io/n-install | bash
    
    $ npm --version
    6.14.6
    
    $ node --version
    v12.18.4



    $ npm install -g yarn
    /Users/alanjui/n/bin/yarn -> /Users/alanjui/n/lib/node_modules/yarn/bin/yarn.js
    /Users/alanjui/n/bin/yarnpkg -> /Users/alanjui/n/lib/node_modules/yarn/bin/yarn.js
    + yarn@1.22.5
    added 1 package in 0.432s


Install neovim

    yarn global add neovim


Install clipboard support for Ubuntu

    $ sudo apt install xsel


## 下載 vim-plug


    sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
           https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'




    $ nvim
    :PlugInstall
    :UpdateRemotePlugins
    :checkhealth


# 設定 Tmux

Install tmux on Ubuntu

    sudo apt install tmux


使用 Oh my tmux 

    $ cd
    $ git clone https://github.com/gpakosz/.tmux.git
    $ ln -s -f .tmux/.tmux.conf
    $ cp .tmux/.tmux.conf.local .


下載 tmux 的 session 管理 plugin

    git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm



    tmux


**Installing plugins**

1. Add new plugin to `~/.tmux.conf` with `set -g @plugin '...'`
2. Press `prefix` + I (capital i, as in **I**nstall) to fetch the plugin.


**Named Session**

    tmux new -s session_name

**Detach**
**[Ctrl-b]** **d**

**List**

    tmux ls

**Attach**

    tmux attach-session -t number

**New Session**

    tmux new-session -d 'vim'



# 參考文檔


## 解說參考文件
https://medium.com/toutsbrasil/how-to-manage-your-dotfiles-with-git-f7aeed8adf8b


原文章似有「打字錯誤」，對於以下這段的內容需進行修訂：

    echo "alias dotfiles='/usr/bin/git --git-dir=$HOME/.cfg.dotfiles --work-tree=$HOME'" >> $HOME/.bashrc


另一篇參考文件： https://www.atlassian.com/git/tutorials/dotfiles


## 解說及示範影片


https://www.youtube.com/watch?v=tBoLDpTWVOM&&t=141s


[https://youtu.be/tBoLDpTWVOM?t=141s](https://youtu.be/tBoLDpTWVOM?t=141s)




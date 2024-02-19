---
sidebar: auto
---

# Arch Linux: 編輯器安裝指引

**Vim 8.2**

Install Vim 8.2 from PPA Repo

    yay -Ss vim
    yay -S vim

download configuration from GitHub Repo

    cd
    git clone https://github.com/AlanJui/vim8.git .vim

Install all plugins for vim 8

    vim
    :PlugInstall
    :PlugUpdate
    :UpdateRemotePlugins
    :q



    vim

## NVCode

**Install Neovim**

    yay -S neovim-git

Validate

    which nvim
    nvim

**Clone configuration fr Neovim**

    git clone https://github.com/ChristianChiarulli/nvim.git ~/.config/nvim

**Install Python & Node support**

    pip install --upgrade pip
    pip install pynvim


    $ which node
    /usr/bin/node

    $ sudo mv /usr/bin/node /usr/bin/node.bak

    $ whcih node
    /home/alanjui/n/bin/node

    $ npm i -g neovim



    vim ~/.config/nvim/init.vim


    ....
    let g:python3_host_prog = expand("$HOME/.pyenv/versions/3.9.1/bin/python3")
    let g:node_host_prog = expand("$HOME/n/bin/node")

**Install Neovim remote**

    pip install neovim-remote


    [alanjui@VB2101-Manjaro-KDE-202 ~]$ pip install neovim-remote
    Collecting neovim-remote
     Using cached neovim_remote-2.4.0-py3-none-any.whl (12 kB)
    Requirement already satisfied: psutil in ./.pyenv/versions/3.9.1/lib/python3.9/site-packages (from neovim-remote) (5.8.0)
    Requirement already satisfied: pynvim in ./.pyenv/versions/3.9.1/lib/python3.9/site-packages (from neovim-remote) (0.4.2)
    Requirement already satisfied: setuptools in ./.pyenv/versions/3.9.1/lib/python3.9/site-packages (from neovim-remote) (49.2.1)
    Requirement already satisfied: msgpack>=0.5.0 in ./.pyenv/versions/3.9.1/lib/python3.9/site-packages (from pynvim->neovim-remote) (1.
    0.2)
    Requirement already satisfied: greenlet in ./.pyenv/versions/3.9.1/lib/python3.9/site-packages (from pynvim->neovim-remote) (1.0.0)
    Installing collected packages: neovim-remote
    Successfully installed neovim-remote-2.4.0

    [alanjui@VB2101-Manjaro-KDE-202 ~]$ ll .pyenv/shims/nvr
    -rwxr-xr-x 1 alanjui alanjui 406  1月 17 12:05 .pyenv/shims/nvr

**Install clipboard support**

    sudo pacman -S xsel

**Install programs which support nvim plugins**

    sudo pacman -S ranger ueberzug ripgrep the_silver_searcher fd universal-ctags
    yay -S lazygit lazydocker

**Install “Language Serv ers”**

    npm i -g bash-language-server
    vim ~/.config/nvim/coc-settings.json


    ....
      "languageserver": {
        "lua": {
          ....
        },
        "bash": {
          "command": "bash-language-server",
          "args": ["start"],
          "filetypes": ["sh"],
          "ignoredRootPaths": ["~"]
        }
      },
     ....

**Update for FAR to work**

    :UpdateRemotePlugins

**Enable Vim Gists**

    git config --global github.user "Alan Jui"

---

## NVCode

**Install VisualStudio Code**

    yay -S visual-studio-code-bin


    yay -s vscodium-bin


    codium

**Install VS Code Extensions (Plugins)**

- Vim (vscodevim.vim)
- Neo Vim (asvetliakov.vscode-neovim / vscode-neovim)
- Python (ms-python.python)
- Docker (ms-azuretools.vscode-docker)

---

## VSCodium

**安裝軟件**

    yay -Ss vscodium
    yay -S vscodium-bin


    [alanjui@VB02-ArchLinux ~]$ yay -Ss vscodium
    aur/vscodium-bin-marketplace 1.51.1-1 (+0 0.00)
        Enable vscode marketplace in vscodium-bin
    aur/vscodium-git 1.52.1-2 (+3 0.73)
        Binary releases of VS Code without MS branding/telemetry/licensing (git build).
    aur/vscodium-bin 1.52.1-2 (+32 7.83)
        Binary releases of VS Code without MS branding/telemetry/licensing.

**啟動軟件**

    vscodium

**變更 Plugins 可用來源 open-vsx.org**

    sudo vim /usr/share/vscodium-bin/resources/app/product.json


    ....
    "extensionsGallery": {
        "serviceUrl": "https://marketplace.visualstudio.com/_apis/public/gallery",
        "itemUrl": "https://marketplace.visualstudio.com/items"
    }
    ....

---

## Neovim

https://www.chrisatmachine.com/Neovim/01-vim-plug/

**安裝軟件**

    sudo pacman -S neovim

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610684834196_image.png)

    [alanjui@VB02-ArchLinux ~]$ sudo pacman -S neovim
    正在解決依賴關係…
    正在檢查衝突的軟體包…

    軟體包 (6) libluv-1.36.0-1  libtermkey-0.22-2  libvterm-0.1.3.git1.65dbda-1  msgpack-c-3.3.0-2  unibilium-2.1.0-2
               neovim-0.4.4-1

    總計下載大小：   5.62 MiB
    總計安裝大小：  26.17 MiB

    :: 進行安裝嗎？ [Y/n]
    :: 正在接收軟體包…
     unibilium-2.1.0-2-x86_64                         116.4 KiB  3.16 MiB/s 00:00 [############################################] 100%
     libtermkey-0.22-2-x86_64                          47.1 KiB  0.00   B/s 00:00 [############################################] 100%
     msgpack-c-3.3.0-2-x86_64                         276.7 KiB  6.76 MiB/s 00:00 [############################################] 100%
     libvterm-0.1.3.git1.65dbda-1-x86_64               44.6 KiB  14.5 MiB/s 00:00 [############################################] 100%
     libluv-1.36.0-1-x86_64                            49.3 KiB  12.0 MiB/s 00:00 [############################################] 100%
     neovim-0.4.4-1-x86_64                              5.1 MiB  10.7 MiB/s 00:00 [############################################] 100%
    (6/6) 正在檢查鑰匙圈中的鑰匙                                                  [############################################] 100%
    (6/6) 正在檢查軟體包完整性                                                    [############################################] 100%
    (6/6) 正在載入軟體包檔案                                                      [############################################] 100%
    (6/6) 正在檢查檔案衝突                                                        [############################################] 100%
    (6/6) 正在檢查可用磁碟空間                                                    [############################################] 100%
    :: 正在處理軟體包變更…
    (1/6) 正在安裝 unibilium                                                      [############################################] 100%
    (2/6) 正在安裝 libtermkey                                                     [############################################] 100%
    (3/6) 正在安裝 msgpack-c                                                      [############################################] 100%
    (4/6) 正在安裝 libvterm                                                       [############################################] 100%
    (5/6) 正在安裝 libluv                                                         [############################################] 100%
    (6/6) 正在安裝 neovim                                                         [############################################] 100%
    neovim 的可選依賴
        python-neovim: for Python 3 plugin support (see :help python)
        xclip: for clipboard support on X11 (or xsel) (see :help clipboard)
        xsel: for clipboard support on X11 (or xclip) (see :help clipboard)
        wl-clipboard: for clipboard support on wayland (see :help clipboard)
    :: 正在執行後置作業掛鉤…
    (1/2) Arming ConditionNeedsUpdate...
    (2/2) Updating the desktop file MIME type cache...



    sudo pacman -S python-neovim

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610685011778_image.png)

    sudo pacman -S xclip

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610685086895_image.png)

    nvim

![](https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610685133076_image.png)

**建置「環境設定檔」**

    mkdir ~/.config/nvim
    touch ~/.config/nvim/init.vim

**安裝 vim-plug**

    curl -fLo ~/.config/nvim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

**建置 nvim 的 plugins 設定檔**

    [alanjui@VB02-ArchLinux ~]$ mkdir ~/.config/nvim/vim-plug
    [alanjui@VB02-ArchLinux ~]$ touch ~/.config/nvim/vim-plug/plugins.vim

~/.confibg/nvim/vim-plug/plugins.vim

    " auto-install vim-plug
    if empty(glob('~/.config/nvim/autoload/plug.vim'))
      silent !curl -fLo ~/.config/nvim/autoload/plug.vim --create-dirs
        \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
      "autocmd VimEnter * PlugInstall
      "autocmd VimEnter * PlugInstall | source $MYVIMRC
    endif

    call plug#begin('~/.config/nvim/autoload/plugged')

        " Better Syntax Support
        Plug 'sheerun/vim-polyglot'
        " File Explorer
        Plug 'scrooloose/NERDTree'
        " Auto pairs for '(' '[' '{'
        Plug 'jiangmiao/auto-pairs'

    call plug#end()

---

## NVCode

https://github.com/ChristianChiarulli/nvim

    mv ~/.config/nvim ~/.config/nvim.old

    bash <(curl -s https://raw.githubusercontent.com/ChristianChiarulli/nvim/master/utils/install.sh)



    yay -S neovim-git



    neovim-git 的可選依賴
        python2-neovim: for Python 2 plugin support (see :help provider-python)
        python-neovim: for Python 3 plugin support (see :help provider-python) [已安裝]
        ruby-neovim: for Ruby plugin support (see :help provider-ruby)
        xclip: for clipboard support (or xsel) (see :help provider-clipboard) [已安裝]
        xsel: for clipboard support (or xclip) (see :help provider-clipboard)
        wl-clipboard: for clipboard support on wayland (see :help clipboard)su



    sudo pacman -S python-neovim xsel

**Install Python & Node support**

    pip install --upgrade pip
    pip install pynvim

    npm i -g neovim

**Install Neovim remote**

    pip install neovim-remote

List of programs should be installed

- ranger
- ubeerzug
- ripgrep
- the_silver_searcher


    yay -S lazygit
    yay -S lazydocker

**~/.config/nvim/coc-settings.json**

---

## Visual Studio Code

https://wiki.archlinux.org/index.php/Visual_Studio_Code

**Install**

    yay -S visual-studio-code-bin


    sudo pacman -S code

**Execute**

    code

**Configuration**

    ~/.config/Code/User/settings.json


    {
        "terminal.integrated.shell.linux": "/usr/bin/bash",
        "vscode-neovim.neovimExecutablePaths.linux": "/usr/bin/nvim",
        "vscode-neovim.neovimInitVimPaths.linux": "~/.config/nvim/init.vim",
        "terminal.integrated.fontFamily": "FiraMono Nerd Font"
    }

套件：

- visual-studio-code-bin (AUR) ==> **~/.config/Code/User/settings.json**
- Code ==> **~/.config/Code - OSS/User/settings.json**
  cd ~/.config
  ln -s 'Code - OSS' Code

---

## NeoVim（VS Code Neovim）

https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim&fbclid=IwAR3UH-vJhQ4rAriMsH3PQPSGQ6BLVGwxiVhFDNJ-dNt8XWk6N4mqcuNzwy4

**（1）Install Nvim V0.5**

    yay -S neovim-git

**（2）Install vscode-neovim extension**
在 VS Code 中，安裝 VSCode-NeoVim Extension：

        - Which Key (vspacecode.whichkey)
        - Pylance (ms-python.vscode-pylance)

**（3）設定 VS Code 作業環境（\$HOME/.config/Code/User/\*\***settings.json\***\*）**

        - 設定 Nvim 執行檔路徑所在：
    "vscode-neovim.neovimExecutablePaths.linux": "/usr/bin/nvim",
    "vscode-neovim.neovimInitVimPaths.linux": "~/.config/nvim/init.vim",
    "vscode-neovim.mouseSelectionStartVisualMode": true,
        - 適當地切分設定檔（$HOME/.config/nvim/init.vim）
    if exists('g:vscode')
      " 置放 VS Code extension 適用之 Extensions
      source ...
      source ...
    else
      " 置放只有 Nvim 適用的 Vim Plugins
      source ...
      source ...
    endif

**（4）設定 VSCode-NeoVim 專用的設定檔（\$HOME/.config/Code/User/\*\***keybindings.json\***\*）**

    File 》Preferences 》Keyboard Shortcuts


    [
      {
        "command": "vscode-neovim.compositeEscape1",
        "key": "j",
        "when": "neovim.mode == insert && editorTextFocus",
        "args": "j"
      },
      {
        ....
      }
    ]

（4）若是 VS Code 出現如下之錯誤警示時，使用者當試著 Uninstall 某些 VSCode Extensions：

    Unable to init vscode-neovim: command 'type' already exists

（5）whichkey.show failed

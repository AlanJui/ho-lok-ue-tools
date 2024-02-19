---
sidebar: auto
---

# Neovim 安裝與設定指引

## 安裝 Neovim

### 安裝 Neovim 套件

1. 執行安裝指令。

```
yay -S neovim-git
```

2. 驗證安裝已完成。

```
which neovim
nvim
```

### 設定支援 Python 與 Node.js

安裝支援 Python 與 Node.js 之 Neovim Extensions

1. 安裝 pynvim

```
pip install --upgrade pip
pip install pynvim
```

2. 安裝 neovim

- 確認使用 n 作為「Node.js 版本管理器」。

```
$ which node
/usr/bin/node

$ sudo mv /usr/bin/node /usr/bin/node.bak

$ which node
/home/alanjui/n/bin/node
```

- 執行 neovim 安裝指令

```
$ npm i -g neovim
```

3. 設定 Neovim 支援 Python, Node.js

```
nvim ~/.config/nvim/init.vim
```

init.vim:

```
...
let g:python3_host_prog = expand("$HOME/.pyenv/versions/3.9.1/bin/python3")
let g:node_host_prog = expand("$HOME/n/bin/node")
```

### 安裝 Neovim Remote

```
pip install neovim-remote
```

【安裝畫面顯示參考】：

```
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
```

## 安裝 Neovim Plugins 相依套件

### 速簡安裝法

1. 使用 pacman 安裝：

```
sudo pacman -S xsel ranger ueberzug ripgrep the_silver_searcher fd universal-ctags fzf

```

2. 使用 yay 安裝：

```
yay -S lazygit lazydocker
```

3. 使用 pip 安裝：

```
pip install uberzug
```

### 作業系統剪貼簿支援

REF: https://wiki.archlinux.org/index.php/clipboard

```
sudo pacman -S xsel
```

### ripgrep

REF: https://github.com/BurntSushi/ripgrep

```
sudo pacman -S ripgrep
```

### silver searcher

REF: https://github.com/ggreer/the_silver_searcher

```
sudo pacman -S the_silver_searcher
```

### fd

REF: https://github.com/sharkdp/fd

```
sudo pacman -S fd
```

### ranger

REF：[Ranger image preview on OSX with Iterm2](https://www.everythingcli.org/ranger-image-preview-on-osx-with-iterm2/)

1. 安裝 ranger (File Manager)

```
sudo pacman -S ranger
```

2. 安裝 ueberzug (Image Preview Tool)

```
sudo pacman -S ueberzug
```

3. 設定 ranger 執行環境

```
vim ~/.config/ranger/rc.conf
```

rc.conf:

```
set preview_images true
set preview_images_method ueberzug

default_linemod devicons
set show_hidden true
```

### Rnvimr

REF: https://github.com/kevinhwang91/rnvimr

Rnvimr 相依套件：

- Ranger (v1.9.3 at least)
- Pynvim
- Neovim
- Python 3.6
- Ueberzug (optiona, v18.1.6 at least) : 只有 Linux 版可安裝

```
pip install ueberzug
```

【註】：
Rnvimr is a NeoVim plugin that allows you to use Ranger in a floating window.

Different than other Ranger vim-plugins, Rnvimr gives you full control over Ranger.
It uses RPC to communicate with Ranger.

This plugin does not support Vim.

macOS users please install ranger by `pip3 ranger-fm` instead of `brew install ranger`

https://awesomeopensource.com/project/kevinhwang91/rnvimr?categoryPage=40#installation

### universal-ctags

REF: https://github.com/universal-ctags/homebrew-universal-ctags

```
sudo pacman -S universal-ctags
```

### lazy git

REF: https://github.com/jesseduffield/lazygit#ubuntu

```
yay -S lazygit-git
```

### lazy docker

REF: https://github.com/jesseduffield/lazydocker#installation

```
yay -S lazydocker-git
```

### fzf-preview

REF: https://github.com/yuki-yano/fzf-preview.vim#installation

```
sudo pacman -S fzf
```

## 設定 Neovim 作業環境

### 下載 NVCode 設定檔

```
git clone https://github.com/ChristianChiarulli/nvim.git ~/.config/nvim
```

### 設定 Bash LSP

安裝 coc-nvim extensions 所需之 bash language server。

1. 執行安裝指令。

```
npm i -g bash-language-server
```

2. 完成應有之設定。

```
nvim ~/.confifg/nvim/coc-settings.json
```

coc-settings.json:

```
{
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
}
```

### 設定 Lua LSP

請參考文件：[Lua 作業環境安裝指引](/ArchLinux/Manjaro-KDE-Guideline/lua) 在
「設定 Vim/Neovim 對 Lua 的支援」章節之說明。

1. 安裝「Lua 作業環境」。

2. 安裝 Lua LSP

```
:CocInstall coc-lua
```

3. 對 coc-nvim 設定檔，設定 Lua LSP。

- 打開設定檔

```
:CocConfig
```

- 加入如下設定：

~/.config/nvim/coc-settings.json:

```
{
    ....
    "languageserver": {
        "bash": {
            ....
        },
        "lua": {
            "command": "~/.local/share/lua-language-server/bin/lua-language-server",
            "args": [
              "-E",
              "-e",
              "LANG=en",
              "~/.local/share/lua-language-server/main.lua"
            ],
            "filetypes": ["lua"],
            "trace.server": "verbose"
        }
    },
    ....
}
```

### 啟用 FAR Neovim Plugin

先啟動 nvim ，再於「Command Line」執行下列指令：

```
:UpdateRemotePlugins
```

### 啟用 Vim Gists Neovim Plugin

```
$ git config --global github.user "Alan Jui"
```

## 參考資料

N/A

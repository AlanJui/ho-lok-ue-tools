# NVCode

https://github.com/ChristianChiarulli/nvim



https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim&fbclid=IwAR3UH-vJhQ4rAriMsH3PQPSGQ6BLVGwxiVhFDNJ-dNt8XWk6N4mqcuNzwy4



https://code.visualstudio.com/docs/python/tutorial-django




## Neovim


https://github.com/neovim/neovim/releases/nightly



## Mac


**Install Neovim V0.5**

    brew install --HEAD neovim # Nightly version
    
    brew upgrade neovim --fetch-HEAD # Sometimes you need to update

/usr/local/Cellar/neovim/HEAD-f3a8c93

$HOME/.local/bin/nvim

錯誤路徑： /usr/local/bin/nvim



**Install Neovim V0.5 Nightly Version**

https://github.com/neovim/neovim/wiki/Installing-Neovim




    cd ~/build
    curl -LO https://github.com/neovim/neovim/releases/download/nightly/nvim-macos.tar.gz
    tar xzf nvim-macos.tar.gz
    mv nvim-osx64 ~/.local/share
    
    cd ~/.local/bin
    ln -s -f ~/.local/share/nvim-osx64/bin/nvim
    
    ./local/share/nvim-osx64/bin/nvim


**Install Python & NodeJS support**

    pip install --upgrade pip
    pip install pynvim
    pip install neovim-remote


    npm i -g neovim


~/.config/nvim/my_nvim.vim

    let g:python3_host_prog = expand("$HOME/.pyenv/versions/3.8.5/bin/python3.8")
    let g:node_host_prog = expand("$HOME/n/bin/ndeovim-node-host")



**Install clipboard support**
pbcopy is bulletin


**Install programs support Vim Plugins**


    brew install <Package>


    - ripgrep
    - the_silver_searcher
    - fd


- ranger
https://github.com/kevinhwang91/rnvimr

    pip install ranger-fm



- ueberzug

https://awesomeopensource.com/project/kevinhwang91/rnvimr?categoryPage=40


- rnvimr
    pip install ueberzug



- universal-ctags
https://github.com/universal-ctags/homebrew-universal-ctags

    brew install --HEAD universal-ctags/universal-ctags/universal-ctags



- lazy git
https://github.com/jesseduffield/lazygit

    brew install lazygit



- lazy docker
https://github.com/jesseduffield/lazydocker

    brew install lazydocker


**Language Servers**


- Bash Language Server


    npm i -g bash-language-server

$HOME/.config/nvim/coc-settings.json

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



- Lua Language Server
    參考「建置 Lua 開發環境」



----------

**For FAR to work**

    :UpdateRemotePlugins


**Vim Gists**

    git config --global github.user "Alan Jui"




**Clone configuration files**

（1）下載 Christ 的 NVCode 設定檔：

    git clone https://github.com/ChristianChiarulli/nvim.git ~/.config/nvim

（2）下載「個人客製化」設定檔：

    cd ~/.config/nvim
    git clone <Repo> my-nvim

my-nvim 之目錄結構與檔案清單：

    [alanjui@VB2101-Manjaro-KDE-202 nvim]$ tree my-nvim        
    my-nvim 
    ├── coc-settings.json 
    ├── lua 
    │   ├── ccc-eviline.lua 
    │   ├── ccc-spaceline.lua 
    │   ├── ccc-statusline.lua 
    │   └── my-statusLine.lua 
    ├── my-init.vim 
    ├── my-settings.vim 
    └── snips 
       ├── html.snippets 
       ├── javascript-node.snippets 
       ├── javascript.snippets 
       ├── json.snippets 
       ├── markdown.json 
       ├── markdown.snippets 
       └── python.snippets 
    
    2 directories, 14 files

（3）修訂原設定檔，以便加入「個人客製化」設定：

    cd ~/.config/nvim
    cp init.vim init.vim.org
    vim init.vim

在「檔案底端」加入如下「設定」：

    "=========================================================================
    " User Define
    
    if !exists('g:vscode')
        let g:python3_host_prog = expand("$HOME/.pyenv/versions/3.9.1/bin/python3")
        let g:node_host_prog = expand("$HOME/n/bin/neovim-node-host")
    
        let g:loaded_python_provider = 0
        let g:loaded_ruby_provider = 0
        let g:loaded_perl_provider = 0
    
        source  $HOME/.config/nvim/my-nvim/my-settings.vim
        luafile $HOME/.config/nvim/my-nvim/lua/my-statusLine.lua
    endif


（4）設定 Snipeets 

（4-1）與 VS Code 共用

    cd ~/.config/nvim/snips
    ln -s -f ~/.config/Code/User/snippets/django-html.json htmldjango.json
    ln -s -f ~/.config/Code/User/snippets/django-python.json
    ln -s -f ~/.config/Code/User/snippets/markdown.json

（4-2）個人客製

    cd ~/.config/nvim/snips
    ln -s -f ../my-nvim/snips/html.snippets
    ln -s -f ../my-nvim/snips/javascript-node.snippets
    ln -s -f ../my-nvim/snips/javascript.snippets
    ln -s -f ../my-nvim/snips/json.snippets
    ln -s -f ../my-nvim/snips/markdown.snippets
    ln -s -f ../my-nvim/snips/python.snippets


（5）設定「Coc-nvim」設定檔

    cd ~/.config/nvim
    mv coc-settings.json coc-settings.json.org
    ln -s -f my-nvim/coc-settings.json


（6）去除不用的 coc-entensions.vim

    let g:coc_global_extensions = [
      \ 'coc-snippets',
      \ 'coc-actions',
      \ 'coc-sh',
      \ 'coc-java-debug',
      \ 'coc-java',
      \ 'coc-lists',
      \ 'coc-emmet',
      \ 'coc-tasks',
      \ 'coc-pairs',
      \ 'coc-tsserver',
      \ 'coc-floaterm',
      \ 'coc-fzf-preview',
      \ 'coc-html',
      \ 'coc-css',
      \ 'coc-cssmodules',
      \ 'coc-stylelintplus',
      \ 'coc-emoji',
      \ 'coc-yaml',
      \ 'coc-explorer',
      \ 'coc-svg',
      \ 'coc-prettier',
      \ 'coc-vimlsp',
      \ 'coc-xml',
      \ 'coc-yank',
      \ 'coc-json',
      \ 'coc-marketplace',
      \ ]
      " \ 'coc-pyright',
      " \ 'coc-bookmark',
      " \ 'coc-tabnine',
      " \ 'coc-highlight',




----------
## Visual Studio Code Extensions


https://morioh.com/p/b6323e6cdfca

- Install VS Code extensions: 
    - Neo Vim
    - Which Key
    - prettier - Code formatter (esbenp.prettier-vscode)
    - Material Icon Theme (pkief.material-icon-theme)
    - Django (batisteo.vscode-django)
    - Djaneiro - Django Snippets (thebarkman.vscode-djaneiro)
    - Django Samples (mengsicode.vscode-django-boilerplate)
    - Bracket Pair Colorizer 2 (coenraads.bracket-pair-colorizer-2)
    - GitLens - Git supercharged (eamodio.gitlens)
    - Git Graph (mhutchie.git-graph)


- Ref: utils/vscode_config/ ( Git Repo: https://github.com/ChristianChiarulli/nvim )
    - keybindings.json
    - settings.json

settings.json

    {
      "vscode-neovim.mouseSelectionStartVisualMode": true,
      "vscode-neovim.neovimExecutablePaths.linux": "/usr/bin/nvim",
      "vscode-neovim.neovimInitVimPaths.linux": "~/.config/nvim/init.vim",
      "vscode-neovim.neovimExecutablePaths.darwin": "/Users/alanjui/.local/share/nvim/bin/nvim",
      "vscode-neovim.neovimInitVimPaths.darwin": "/Users/alanjuigg/.config/nvim/init.vim",
    
      "files.associations": {
        "**/*.html": "html",
        "**/templates/**/*.html": "django-html",
        "**/templates/**/*": "django-txt",
        "**/requirements{/**,*}.{txt,in}": "pip-requirements"
      },
      "files.exclude": {
        "**/__pycache__": true,
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
      },
      "code-runner.executorMap": {
        "python": "$pythonPath $fileName",
        "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
        "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
      },
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      
      "emmet.showSuggestionsAsSnippets": true,
      "emmet.triggerExpansionOnTab": true,
      "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "django-html": "html",
        "razor": "html",
        "plaintext": "pug"
      },
    
      "editor.fontSize": 14,
      "editor.suggestFontSize": 14,
      "editor.suggestSelection": "first",
      "editor.cursorBlinking": "solid",
      "editor.fontFamily": "FiraCode Nerd Font Mono, Hack, Menlo, Monaco, 'Courier New', monospace",
      "editor.minimap.enabled": false,
      "editor.snippetSuggestions": "bottom",
      "editor.scrollbar.horizontal": "hidden",
      "editor.scrollbar.vertical": "hidden",
    
      //==================================================================
      // Python
      //==================================================================
      //"python.pythonPath": "/home/chris/.miniconda/envs/ds/bin/python",
      //"python.condaPath": "$HOME/.miniconda/bin/conda",
      "python.languageServer": "Pylance",
      "python.formatting.provider": "autopep8",
      "python.terminal.activateEnvironment": false,
      "python.insidersChannel": "off",
      "python.showStartPage": false,
      "python.dataScience.alwaysTrustNotebooks": true,
     
      "whichkey.bindings": [
        {
          "key": ";",
          "name": "commands",
          "type": "command",
          "command": "workbench.action.showCommands"
        },
        ....
      ]


**Git**


    $ git config --global user.name "Alan Jui"
    $ git config --global user.email alanjui.1960@gmail.com



----------
## 常用操作


**依據「游標」所在處，打開檔案**

https://vim.fandom.com/wiki/Open_file_under_cursor



**在 Mac 使用 Nvim V0.4 與 V0.5**
https://purefun.io/blog/2020-11-28-multiple-versions-of-neovim/



----------
## 建置 Django 開發環境

**（1）在 VS Code 安裝 Extension： Django (batisteo.vscode-django)**


**（2）在 settings.json 檔，設定 Django HTML 的 file association**

    "files.associations": {
        "**/*.html": "html",
        "**/templates/**/*.html": "django-html",
        "**/templates/**/*": "django-txt",
        "**/requirements{/**,*}.{txt,in}": "pip-requirements"
    },


**（3）啟用 Emmet 設定，以便編輯 Django Template 時，可透過 Emmet 編輯 HTML Tag：**

    "emmet.includeLanguages": {"django-html": "html"},


**（4）令 Django Extension 所使用之 User Snippets ，亦可供 Nvim 使用：**

在 **VS Code ，Django Template Snippets 存放於路徑：** 

    $HOME/Library/Application\ Support/Code/User/snippets/django-html.json


- 在 **Nvim / Vim Plugins： coc-nvim 的設定檔： coc-settings.json ，增添如下設定⋯⋯**
    "snippets.textmateSnippetsRoots": [
        “~/.config/nvim/snips”
    ]


- **建立 Symbolic Link: htmldjango.json 指向 django-html.json：**

【Mac】：

    cd ~/.config/nvim/snips
    ln -s -f ~/Library/Application\ Support/Code/User/snippets/django-html.json htmldjango.json

【ArchLinux】：

    cd ~/.config/nvim/snips
    ln -s -f ~/.config/Code/User/snippets/django-html.json  htmldjango.json
    ln -s -f ~/.config/Code/User/snippets/markdown.json 


**Coc.nvim 對 Code Snippets 的支援**


https://kanneg881.gitbook.io/workspace/vim/wai-gua-tui-jian/dai-ma/coc/coc-snippets


安裝 pylint

    pip install pylint

產生 .pylintrc 設定檔

    pylint --generate-rcfile > .pylintrc

設定可略過之「規則」


- `C0114` (`missing-module-docstring`)
- `C0115` (`missing-class-docstring`)
- `C0116` (`missing-function-docstring`)


    [MASTER]
    ....
    disable=print-statement,
            ....,
            C0114,
            C0115,
            C0116,
            compresension-escape



----------
## 建置 Lua 開發環境

由於 Neovim 支援 Lua ，故而不少的 Nvim-Plugin 系以 Lua Script 撰寫而成。故而 NVCode 之使用，不僅需要建置 Python, NodeJS 作業環境；亦需添加 Lua 作業環境。
https://nathansmith.io/posts/neovim-lsp/

在 Neovim 中使用 Lua Script 參考：

https://github.com/nanotee/nvim-lua-guide


https://www.tutorialspoint.com/lua/lua_environment.htm

https://luarocks.org/modules/alloyed/lua-lsp


【Mac】

**（1）安裝 Lua 直譯器（Lua Compiler）**

《安裝最新版》

    brew install lua

【註】：在 2021/1/20 安裝，最新版本為： 5.4。

《安裝特定版》

    brew install lua@5.3

【註】：lua 執行檔所在路徑

    $ ll /usr/local/opt/lua*
    lrwxr-xr-x  1 alanjui  admin    19B  1 20 11:13 /usr/local/opt/lua -> ../Cellar/lua/5.4.2
    lrwxr-xr-x  1 alanjui  admin    23B  1 20 11:16 /usr/local/opt/lua@5.3 -> ../Cellar/lua@5.3/5.3.6
    lrwxr-xr-x  1 alanjui  admin    19B  1 20 11:13 /usr/local/opt/lua@5.4 -> ../Cellar/lua/5.4.2
    lrwxr-xr-x  1 alanjui  admin    22B  9  7 16:27 /usr/local/opt/luajit -> ../Cellar/luajit/2.0.5
    lrwxr-xr-x  1 alanjui  admin    24B  1 20 11:23 /usr/local/opt/luarocks -> ../Cellar/luarocks/3.5.0


**（2）安裝「套件管理器」**

    brew install luarocks

luarocks 安裝套件時，可配合 **—lua-dir=** 選項，用以指定 lua 版本：

    luarocks --lua-dir=/usr/local/opt/lua@5.1 install say

《範例》：使用 「套件管理器」，安裝 Lua Language Server: lua-lsp

    sudo luarocks --lua-dir=/usr/local/opt/lua@5.3 install lua-lsp

【註】：在 2021/1/20 時，尚不能使用以下「方式」安裝 lua-lsp，因為 luarocks 還未支援 lua V5.4 版

    luarocks install lua-lsp


【註】： 安裝時參考資訊

    $ brew install lua luarocks
    
    Updating Homebrew...
    ==> Downloading https://homebrew.bintray.com/bottles/lua-5.4.2.big_sur.bottle.tar.gz
    Already downloaded: /Users/alanjui/Library/Caches/Homebrew/downloads/0bf17f22ff52041bf7ca9415def4cdfcd893ab4c5f72991825cd53c5d3a759c8--lua-5.4.2.big_sur.bottle.tar.gz
    ==> Pouring lua-5.4.2.big_sur.bottle.tar.gz
    ==> Caveats
    You may also want luarocks:
      brew install luarocks
    ==> Summary
    🍺  /usr/local/Cellar/lua/5.4.2: 28 files, 403.8KB
    ==> Downloading https://homebrew.bintray.com/bottles/luarocks-3.5.0.big_sur.bottle.1.tar.gz
    Already downloaded: /Users/alanjui/Library/Caches/Homebrew/downloads/716ae460cb801bb882ce188936f66f5032772ff968fc35c407013948784e028f--luarocks-3.5.0.big_sur.bottle.1.tar.gz
    ==> Pouring luarocks-3.5.0.big_sur.bottle.1.tar.gz
    ==> Caveats
    LuaRocks supports multiple versions of Lua. By default it is configured
    to use Lua5.4, but you can require it to use another version at runtime
    with the `--lua-dir` flag, like this:
    
      luarocks --lua-dir=/usr/local/opt/lua@5.1 install say
    ==> Summary
    🍺  /usr/local/Cellar/luarocks/3.5.0: 104 files, 707.3KB
    ==> Caveats
    ==> lua
    You may also want luarocks:
      brew install luarocks
    ==> luarocks
    LuaRocks supports multiple versions of Lua. By default it is configured
    to use Lua5.4, but you can require it to use another version at runtime
    with the `--lua-dir` flag, like this:
    
      luarocks --lua-dir=/usr/local/opt/lua@5.1 install say



**（3）安裝 Lua language Server** 

《作業系統層級》

    sudo luarocks --lua-dir=/usr/local/opt/lua@5.3 install lua-lsp

lua-lsp 存放路徑：

    $ which lua-lsp
    /usr/local/bin/lua-lsp


《應用軟體層級：VS Code 整合》
 啟動 VS Code ，安裝 Lua language Server Extension: Lua (sumneko.lua)


**（4）參考資訊**

使用 brew 安裝 Lua 時的畫面：

    $ brew install lua
    ==> Downloading https://homebrew.bintray.com/bottles/lua-5.4.2.big_sur.bottle.tar.gz
    ######################################################################## 100.0%
    ==> Reinstalling lua
    ==> Pouring lua-5.4.2.big_sur.bottle.tar.gz
    Error: The `brew link` step did not complete successfully
    The formula built, but is not symlinked into /usr/local
    Could not symlink bin/lua
    Target /usr/local/bin/lua
    already exists. You may want to remove it:
      rm '/usr/local/bin/lua'
    
    To force the link and overwrite all conflicting files:
      brew link --overwrite lua
    
    To list all files that would be deleted:
      brew link --overwrite --dry-run lua
    
    Possible conflicting files are:
    /usr/local/bin/lua
    /usr/local/bin/luac
    ==> Caveats
    You may also want luarocks:
      brew install luarocks
    ==> Summary
    🍺  /usr/local/Cellar/lua/5.4.2: 28 files, 403.8KB
    ==> Upgrading 1 dependent:
    vim 8.2.2250_1 -> 8.2.2350
    ==> Upgrading vim 8.2.2250_1 -> 8.2.2350
    ==> Downloading https://homebrew.bintray.com/bottles/tcl-tk-8.6.11.big_sur.bottle.tar.gz
    ==> Downloading from https://d29vzk4ow07wi7.cloudfront.net/f7c4fb93ca32dca70f3ead938b44bce22c7a99f060242ce802ca8955d274f361?response-c
    ######################################################################## 100.0%
    ==> Downloading https://homebrew.bintray.com/bottles/python%403.9-3.9.1_6.big_sur.bottle.tar.gz
    ==> Downloading from https://d29vzk4ow07wi7.cloudfront.net/48d123683fa125de9f02f7777683edda40e998f0e2dca492024c00bbd3f05ea2?response-c
    ######################################################################## 100.0%
    ==> Downloading https://homebrew.bintray.com/bottles/vim-8.2.2350.big_sur.bottle.tar.gz
    ==> Downloading from https://d29vzk4ow07wi7.cloudfront.net/5510c6bc9722e6d5fb620b750c9a5879355aef97a2e0bba8208f83323780cf12?response-c
    ######################################################################## 100.0%
    ==> Installing dependencies for vim: tcl-tk and python@3.9
    ==> Installing vim dependency: tcl-tk
    ==> Pouring tcl-tk-8.6.11.big_sur.bottle.tar.gz
    ==> Caveats
    tcl-tk is keg-only, which means it was not symlinked into /usr/local,
    because macOS already provides this software and installing another version in
    parallel can cause all kinds of trouble.
    
    If you need to have tcl-tk first in your PATH run:
      echo 'export PATH="/usr/local/opt/tcl-tk/bin:$PATH"' >> ~/.zshrc
    
    For compilers to find tcl-tk you may need to set:
      export LDFLAGS="-L/usr/local/opt/tcl-tk/lib"
      export CPPFLAGS="-I/usr/local/opt/tcl-tk/include"
    
    For pkg-config to find tcl-tk you may need to set:
      export PKG_CONFIG_PATH="/usr/local/opt/tcl-tk/lib/pkgconfig"
    
    ==> Summary
    🍺  /usr/local/Cellar/tcl-tk/8.6.11: 3,041 files, 51.6MB
    ==> Installing vim dependency: python@3.9
    ==> Pouring python@3.9-3.9.1_6.big_sur.bottle.tar.gz
    ==> /usr/local/Cellar/python@3.9/3.9.1_6/bin/python3 -m ensurepip
    ==> /usr/local/Cellar/python@3.9/3.9.1_6/bin/pip3 install -v --global-option=--no-user-cfg --install-option=--force --install-option=-
    ==> /usr/local/Cellar/python@3.9/3.9.1_6/bin/pip3 wheel --wheel-dir=/usr/local/Cellar/python@3.9/3.9.1_6/Frameworks/Python.framework/V
    ==> Caveats
    Python has been installed as
      /usr/local/bin/python3
    
    Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
    `python3`, `python3-config`, `pip3` etc., respectively, have been installed into
      /usr/local/opt/python@3.9/libexec/bin
    
    You can install Python packages with
      pip3 install <package>
    They will install into the site-package directory
      /usr/local/lib/python3.9/site-packages
    
    See: https://docs.brew.sh/Homebrew-and-Python


手動安裝作業程序：

    cd ~/build
    
    # (1) Download the latest version of Lua
    curl -R -O http://www.lua.org/ftp/lua-5.2.3.tar.gz
    
    # (2) Extract it
    tar zxf lua-5.2.3.tar.gz
    
    # (3) Go to the new directory
    cd lua-5.2.3
    
    # (4) Compile it
    make macosx
    
    # (5) Test it.
    make test
    
    # (6) If it succeeds, install it.
    sudo make install

【註】：上述之手動作業，需要在「終端機」中，使用「make」指令。若作業系統尚未安裝 Xcode 及其 Command Line Tools ，很可能會無法正常運作。


    $ sudo make install
    Password:
    cd src && mkdir -p /usr/local/bin /usr/local/include /usr/local/lib /usr/local/man/man1 /usr/local/share/lua/5.2 /usr/local/lib/lua/5.2
    cd src && install -p -m 0755 lua luac /usr/local/bin
    cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/local/include
    cd src && install -p -m 0644 liblua.a /usr/local/lib
    cd doc && install -p -m 0644 lua.1 luac.1 /usr/local/man/man1


【ArchLinux】

https://wiki.archlinux.org/index.php/Lua


    sudo pacman -S lua53


    sudo pacman -S luarocks

luarocks-3.4.0-1 軟體包：

- unzip-6.0-14
- zip-3.0-9
- luarocks-3.4.0-1


    luarocks install lua-lsp


    yay -S lua-language-server-git


Lua 其它參考：

https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/84650/




----------
## Django Project 開發環境


**開發環境設定檔**

需有的開發環境設定檔：

- .python-version
- pyrightconfig.json
- .gitignore


**《.python-version》**


    $ cat .python-version
    venv-3.9.1

上述檔案，可使用下列指令產生：

    pyenv local <venv>

範例：

    pyenv local venv-3.9.1


**《pyrightconfig.json》**


    $ cat pyrightconfig.json
    {
      "venvPath": "/Users/alanjui/.pyenv/versions/3.9.1/envs",
      "venv": "venv-3.9.1"
    }


【註】： **venvPath** 的設定，不可使用 Home Dir 的簡寫：

    - $**HOME**/.pyenv/versions/3.9.1/envs
    - **~**/.pyenv/versions/3.9.1/envs


**《.gitignore》**


    $ cat .gitignore
    $HOME/.config/coc/extensions/
    ###################
    .DS_Store
    .hg
    .svn
    .idea
    .vscode
    *.vscode
    node_modules
    ###################
    # Python files
    .venv/
    env/
    __pycache__/
    .pyc
    static_collected/
    # Temporary files
    *.kate-swp
    *.swp
    *.swo
    *~


**存檔時自動格式化**


https://github.com/neoclide/coc-prettier

https://prettier.io/docs/en/vim.html




## 


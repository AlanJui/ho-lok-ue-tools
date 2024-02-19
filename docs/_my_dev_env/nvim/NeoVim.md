# NeoVim


# 下載 Linux App Image 檔案


    curl -LO https://github.com/neovim/neovim/releases/download/stable/nvim.appimage
    chmod u+x nvim.appimage
    ./nvim.appimage
    
    sudo mv nvim.appimage /usr/bin/
    sudo ln /usr/bin/nvim.appimage /usr/bin/nvim



    curl -LO https://github.com/neovim/neovim/releases/download/v0.4.3/nvim.appimage
    chmod +x nvim.appimage


其它下載參考：


    # 發展中最新版本
    curl -LO https://github.com/neovim/neovim/releases/download/nightly/nvim.appimage
    # 最近發钸正式版本
    curl -LO https://github.com/neovim/neovim/releases/download/latest/nvim.appimage



# 設定相關目錄


## 啟動設定檔案存放目錄
    ~/.config/nvim/init.vim


## Plugin 存放目錄路徑
    ~/.local/share/nvim/plugged/



## 安裝 Plugins 管理工具

以 Vim Plug 作為 Plugins 管理工具。

    curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim



## 編輯 Nvim 設定檔

~/.config/nvim/init.vim

    "--------------------------------------------------------------
    " 擴充套件（Plugins）
    "--------------------------------------------------------------
    
    call plug#begin('~/.local/share/nvim/plugged')
    
    " 停用擴充套件
    " Plug 'davidhalter/jedi-vim', { 'on': []}
    
    Plug 'davidhalter/jedi-vim'
    
    call plug#end()
    
    
    "--------------------------------------------------------------
    " 系統設定 
    "--------------------------------------------------------------
    
    " 設定 <Leader> 鍵
    let g:mapleader = ","
    let mapleader = ","
    set timeout timeoutlen=1500
    
    
    " 可用滑鼠操作
    set mouse=a
    
    " 顯示「行標」
    set cursorline
    
    " 離開插入模式，回返一般模式
    imap jj <Esc>
    
    " 設定〔行號〕顯示模式
    set number                  " 顯示行號
    set relativenumber          " 在遊標所在處顯示相對行號
    
    " 變更行號顯示模式
    nmap <Leader>nu :set number<CR>             " :set nu
    nmap <Leader>nn :set nonumber<CR>           " :set nu!
    nmap <Leader>nr :set relativenumber<CR>     " :set rnu
    nmap <Leader>ns :set norelativenumber<CR>   " :set nornu
    
    
    "--------------------------------------------------------------
    " 檔案作業 
     
    " 停用 backup 與 swap 功能
    set nobackup
    set nowritebackup
    set noswapfile
    
    " Automatically re-read file if a change was detected outside of vim
    set autoread
    
    
    " 編輯設定檔
    nmap <Leader>i :tabnew ~/.config/nvim/init.vim<CR>
    
    " 依據設定檔重啟設定
    nmap <Leader>I :source ~/.config/nvim/init.vim<CR>
    
    
    " 儲存檔案
    nmap <Leader>w :w<CR>
    imap <Leader>w :w<CR>
    vmap <Leader>w :w<CR>
    nnoremap fs :w<CR>
    
    
    " Allows you to save files you opened without write permissions via sudo
    cmap w!! w !sudo tee %
    
    
    " 關閉目前正編輯的檔案
    map fc :bd<CR>      " 已存檔
    map fC :bd!<CR>     " 已編輯，不存檔，強迫關閉
    
    
    " 退出 Vim
    noremap <Leader>e :quit<CR>  " Exit current window
    noremap <Leader>E :qa!<CR>   " Exit all windows
    nnoremap <Leader>Q  :qa!<CR>
    
    
    "--------------------------------------------------------------
    " Tabs and spaces handling
    set smarttab
    set cindent
    set tabstop=2
    set shiftwidth=2
    set softtabstop=2
    set shiftround
    set expandtab               " always uses spaces instead of tab characters
    
    
    " 文字搜尋：Serach configuration
    set ignorecase              " 搜尋時怱略英文字母的大小寫
    set smartcase               " turn on smartcase
    set incsearch
    set hlsearch                " highlight search results



## 安裝 Plugin 

重新啟動 Nvim 後，於 Command Line 執行 Plugin 安裝指令：

    :PlugInstall


# Plugins 套件


## vim-airline-theme


    https://www.cnblogs.com/xcw0754/p/5079798.html


## defx【Files/Buffers 管理】


    pip install pynvim
    pip install Send2Trash


## Snippets
- NeoSnippet
- vim-snippets

**NeoSnippet 安裝目錄**

    ~/.local/share/nvim/plugged/neosnippet-snippets/neosnippets/

**Django Snippets 安裝目錄路徑**

    ~/.local/share/nvim/plugged/vim-snippets/UltiSnips/django.snippet

**個人設定 snippets 存檔目錄路徑：**

     ~/.local/share/nvim/snippets/my_django.snippet



    snippet mysnippet
       <bla attr="${1:default}" />




    "--------------------------------------------------------------
    " 自動完成（Autocomplete）
    
    " Automatic quote and bracket completion
    Plug 'jiangmiao/auto-pairs'
    
    " A set of mappings for HTML, XML, PHP, ASP, eRuby, JSP, and more 
    Plug 'tpope/vim-ragtag' 
    
    " This is a fast, extensible, async completion framework for neovim. <Paste>IIII
    Plug 'ncm2/ncm2'
    Plug 'roxma/nvim-yarp'
    
    " NOTE: you need to install completion sources to get completions. Check
    " our wiki page for a list of sources: https://github.com/ncm2/ncm2/wiki
    
    " Gerenal purpose
    Plug 'ncm2/ncm2-bufword'
    Plug 'ncm2/ncm2-path'
    Plug 'ncm2/ncm2-syntax'
    
    " Web Development
    Plug 'ncm2/ncm2-html-subscope'
    Plug 'ncm2/ncm2-tagprefix'
    Plug 'ncm2/ncm2-markdown-subscope'
    
    " Python completion for ncm2 via the great jedi library.
    Plug 'ncm2/ncm2-jedi'
    
    " Neosnippet integration for ncm2.
    "  - snippet completion source
    "  - trigger dynamic snippet of completed item, e.g. parameter expansion.
    if has('nvim')
      Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
    else
      Plug 'Shougo/deoplete.nvim'
      Plug 'roxma/nvim-yarp'
      Plug 'roxma/vim-hug-neovim-rpc'
    endif
    
    
    Plug 'Shougo/neosnippet.vim'
    Plug 'Shougo/neosnippet-snippets'
    Plug 'ncm2/ncm2-neosnippet'
    





    " Snippets
    "Plug 'marcweber/vim-addon-manager'
    Plug 'MarcWeber/vim-addon-mw-utils'
    Plug 'tomtom/tlib_vim'
    Plug 'garbas/vim-snipmate'
    Plug 'honza/vim-snippets'
    
    Plug 'jamescarr/snipmate-nodejs'
    Plug 'grvcoelho/vim-javascript-snippets'
    


**VS Code 個人 Snippets 存放路徑**


    /Users/alanjui/Library/Application Support/Code/User/snippets


    $ cd ~/Library/Application\ Support/Code/User/snippets
    $ ls -all
    total 72
    drwxr-xr-x  7 alanjui  staff    224  7 17 12:12 .
    drwxr-xr-x  7 alanjui  staff    224  7 17 10:56 ..
    -rw-r--r--  1 alanjui  staff   5521  7 20 20:33 django-html.json
    -rw-r--r--  1 alanjui  staff    587  7 17 10:52 django-txt.json
    -rw-r--r--  1 alanjui  staff    897  7 17 08:40 html.json
    -rw-r--r--  1 alanjui  staff  14160  7 17 10:44 javascript.json
    -rw-r--r--  1 alanjui  staff   3752  7 17 12:13 python.json



# 操作


## 利用已開啟的檔案，建立新檔案

在 Nvim 已有檔案被開啟後，想要另外建立一個新檔案，使之與原檔案儲存於相同之目錄路徑。

**【方法一】：**

 1. 建立檔案

    :e %:h/<FileName>
    【註】： %：h 釋義
        - %：指已被開啟的檔案本身；
        - :h：表補註的修飾詞，意指%檔案的「Home目錄路徑」。
        - e %:h/<FileName> → 全文意指：建立一個檔名為：FilName 的檔案；該檔案的存放路徑位於同開啟檔案的所在位置。

 2. 存檔

    :w


**【方法二】：**

透過 Vim 指令進行設定，要求 Vim 只要有檔案被開啟，Vim 便要做「Change current directory」的設定。若後續執行 :edit 建立新檔案的指令時，該檔案預設的存檔目錄路徑，與前一已開啟檔案同。

 1. 設定 Vim 

    :set autochdir

 2. 開啟某一檔案，檔案為： ~/workspace/django/app-01/blog/views.py。
 
 3. 建立另一個新檔案。

    :e urls.py

 4. 儲存檔案。


    【註】：urls.py 檔案儲存路徑，與 views.py 同。
                目錄路徑： ~/workspace/django/app-01/blog/



# 設定參考

https://jdhao.github.io/2018/12/24/centos_nvim_install_use_guide_en/

https://yufanlu.net/2018/09/03/neovim-python/



    @login_required
    def dashboard(request):
        return render(request,
                      'account/dashboard.html',
                      {'section': 'dashboard'})
    
    


# coc-nvim

https://github.com/neoclide/coc.nvim

# 安裝

 1. 透過 vim-plug 進行安裝
 2. 透過 vim command: CocInstall 安裝下列 coc extension

    - coc-json
    - coc-lists
    - coc-emmet
    - coc-snippets 
    - 兼容 VS Code Snippets 之 JEST Engine
    - coc-ultisnips
    - coc-html
    - coc-css
    - coc-tsserver
    - coc-git
    - coc-yank
    - coc-highlight


    $ npm i jest --save-dev


# 設定


## nvim 設定

配合用 python packages

- pynvim
- pylint
- autopep8
- move2trash


## coc-nvim 設定檔


    ~/.config/nvim/coc-settings.json


- 可用 :CocConfig 或 C ，編輯設定檔
- 需先安裝 coc extensions (plugin)

~/.config/nvim/coc-settings.json

    {
        "suggest.noselect": false,
        "snippets.loadFromExtensions": true,
        "snippets.ultisnips.enable": true,
        "snippets.textmateSnippetsRoots": ["~/.config/nvim/snippets"],
        "snippets.userSnippetsDirectory": "~/.config/coc/ultisnips",
        "snippets.snipmate.enable": false,
        "snippets.extends": {
          "javascript": ["javascript"],
          "html": ["html"],
          "htmldjango": ["htmldjango", "html"]
      }
    }


## coc-snippets 安裝與使用

在 coc-nvim 使用 snippets ，可透過 coc-nvim extension（擴充套件）： coc-snippets 達成。

【參考文件】： https://github.com/neoclide/coc-snippets

**安裝操作**

安裝 coc-nvim extension：coc-snippets。

    :CocInstall coc-snippets

**取得 Snippets 來源**

為配合 coc-snippets 的使用， snippets 來源，可透過安裝如下之 vim plug 取得。

    Plug 'honza/vim-snippets'

vim-snippets 的 snippets 檔案存放路徑：

    ~/.local/share/nvim/plugged/vim-snippets/snippets/


**使用 VSCode snippet**

（1）欲使用 VSCode snippets，需要先安裝 coc-snippets。

（2）接下來則需安裝 coc-nvim extension：vscode-jest-snippets

    :CocInstall https://github.com/andys8/vscode-jest-snippets

【註】：若要改用 vim-plug 安裝 coc-nvim extension：

    Plug 'https://github.com/andys8/vscode-jest-snippets.git'

（3）設定 VSCode Snippets 存放處。

於 coc-settings.json 檔案，加入 snippets.textmateSnippetsRoots 設定：

      "snippets.textmateSnippetsRoots": [ 
        "~/Library/Application Support/Code/User/snippets",
        "~/.config/nvim/snippets/vs_code"
      ],

**依據目前編輯檔案類型（filetype），查詢可用之 Snippets** 


    :CocList snippets


![](https://paper-attachments.dropbox.com/s_EA74C7D56FABDAE19AF2C81175E8A1B9447B4E7814C4FA0314F67A2D7BA4BD93_1574651648943_image.png)


**依據目前編輯檔案類型（filetype），打開相關可用之 Snippets 設定檔**


    :CocCommand snippets.openSnippetFiles
    choose snippet file::
    1. /Users/alanjui/.config/coc/ultisnips/html.snippets
    2. /Users/alanjui/.local/share/nvim/plugged/vim-snippets/UltiSnips/html.snippets
    3. /Users/alanjui/.local/share/nvim/plugged/vim-snippets/UltiSnips/html_minimal.snippets
    4. /Users/alanjui/.local/share/nvim/plugged/vim-snippets/UltiSnips/htmldjango.snippets
    5. /Users/alanjui/Library/Application Support/Code/User/snippets/html.json
    Type number and <Enter> or click with mouse (empty cancels):


**個人客製化Snippets，檔案目錄路徑(UltiSnips)**


    ~/.config/coc/ultisnips/


- htmldjango.snippets
- html.snippets
- css.snippets
- javascript.snippets


在 nvim 查詢已安裝之 snippet 檔案，及其存放路徑處：

    :CocCommand snippets.openSnippetFiles
    choose snippet file::
    1. /Users/alanjui/.config/nvim/snippets/ultisnips/html_minimal.snippets
    2. /Users/alanjui/.config/nvim/snippets/ultisnips/html.snippets
    3. /Users/alanjui/.local/share/nvim/plugged/vim-snippets/UltiSnips/html.snippets
    4. /Users/alanjui/.local/share/nvim/plugged/vim-snippets/UltiSnips/html_minimal.snippets
    5. /Users/alanjui/.config/nvim/snippets/vs_code/html.json
    Type number and <Enter> or click with mouse (empty cancels):


# 常用指令


## 設定檔（coc-settings.json)
    :CocConfig


## CocInfo
    :CocInfo


## Marketplace


    :CocList marketplace


    :CocList marketplace python


## Snippets

**有那些 snippets 可用**

    :CocList snippets


**進行設定檔編輯**

    :CocCommand snippets.editSnippets



    :CocCommand snippets.openSnippetFiles



# 擴充套件


https://github.com/neoclide/coc.nvim/wiki/Using-coc-extensions



## Install extensions

Using `:CocInstall`:

    :CocInstall coc-json coc-css



## Uninstall coc extension
    :CocUninstall coc-css



## Manage extensions with CocList

Run command:

    CocList extensions

to open CocList buffer, which looks like:

![screen shot 2018-09-10 at 10 28 06 pm](https://user-images.githubusercontent.com/251450/45303659-e475d380-b548-11e8-9671-8a3e8e116db4.png)

- `?` means invalid extension
- `*` means extension is activated
- `+` means extension is loaded
- `-` means extension is disabled

Supported actions (hit tab to activate action menu):

- `toggle` default action. activate/deactivate selected extension(s).
- `enable`: enable selected extension(s).
- `disable`: disable selected extension(s).
- `reload`: reload selected extension(s).
- uninstall`: remove selected extension(s).
- `lock`: toggle lock of extension, locked extension won't be updated by `:CocUpdate`



# Vim設定


## 設定 htmldjango
https://stackoverflow.com/questions/3853028/how-to-force-vim-to-syntax-highlight-a-file-as-html




**在 Vim Command Line 進行即時設定：**

    :set syntax=html


**在「Vim設定檔（~/.vimrc）」進行永久設定：**


    autocmd BufNewFile,BufRead *.html set filetype = htmldjango



## 強迫將某類檔案，以 html 語法處理

下例，將副檔名為：ezt 類型檔案，檔案內容中之「語法解析」，視作 html 檔案處理。

    au BufReadPost *.ezt set syntax=html


# 參考


## init.vim

**~/.config/nvim/init.vim**
****

    """ Vim-Plug
    call plug#begin('~/.local/share/nvim/plugged')
    
    Plug 'scrooloose/nerdtree'
    Plug 'neoclide/coc.nvim', {'branch': 'release'}
    
    Plug 'vim-airline/vim-airline'
    
    call plug#end()
    
    "======================================================================
    " 快速鍵設定
    
    " 進入「貼上（Paste）」模式
    set pastetoggle=<F2>
    
    " 設定 Leader 鍵
    let mapleader = ","
    set timeout timeoutlen=1500
    
    " 行號顯示
    nmap <leader>ns :set nu<cr>
    nmap <leader>nr :set relativenumber<cr>
    
    " 設定檔變更與重啟
    nmap <Leader>i :tabnew ~/.config/nvim/init.vim<CR>
    nmap <Leader>I :source ~/.config/nvim/init.vim<CR>
    nmap <Leader>s :source %<CR>
    
    " 儲存檔案
    nmap <leader>w :update<CR>
    
    " 退出系統
    nmap <leader>q :quit<CR>
    nmap <leader>Q :qa!<CR>
    
    
    " NERDTree
    nmap \ :NERDTreeToggle<CR>
    
    
    "----------------------------------------------------------------------
    imap jj <Esc>
    
    imap <leader><leader> <Esc>A,
    imap <C-,> <Right>,<Left>
    
    imap :: <Esc>A:
    imap <C-:> <Right>:<Left>
    
    imap ;; <Esc>A;
    
    imap <leader>O <Esc>O
    imap <leader>o <Esc>o
    
    " 拆疊／展開開關
    nmap <Space> za
    
    "----------------------------------------------------------------------
    " 搬移文字
    
    nnoremap <M-j> :m .+1<CR>==
    nnoremap <M-k> :m .-2<CR>==
    inoremap <M-j> <Esc>:m .+1<CR>==gi
    inoremap <M-k> <Esc>:m .-2<CR>==gi
    vnoremap <M-j> :m '>+1<CR>gv=gv
    vnoremap <M-k> :m '<-2<CR>gv=gv
    
    
    "----------------------------------------------------------------------
    """ Environment Configurations
    set mouse=a
    set ruler laststatus=2 showcmd showmode
    set list listchars=trail:»,tab:»-
    set fillchars+=vert:\ 
    set wrap breakindent
    set encoding=utf-8
    set number
    set relativenumber
    
    
    """ Python3 VirtualEnv
    "let g:python3_host_prog = expand('~/.config/nvim/env/bin/python')
    "let g:python3_host_prog = '/home/alanjui/.pyenv/versions/neovim3/bin/python'
    
    """ Coloring
    syntax on
    highlight Pmenu guibg=white guifg=black gui=bold
    highlight Comment gui=bold
    highlight Normal gui=none
    highlight NonText guibg=none
    
    " Opaque Background (Comment out to use terminal's profile)
    set termguicolors
    
    " Transparent Background (For i3 and compton)
    highlight Normal guibg=NONE ctermbg=NONE
    highlight LineNr guibg=NONE ctermbg=NONE
    
    """ Other Configurations
    filetype plugin indent on
    set tabstop=2 softtabstop=2 shiftwidth=2 expandtab smarttab autoindent
    set incsearch ignorecase smartcase hlsearch
    set title
    
    
    """ Plugin Configurations
    
    
    "NERDTree
    map \ :NERDTreeToggle<CR>
    
    
    "=====================================================
    """ COC Setup
    
    
    "if hidden is not set, TextEdit might fail.
    set hidden
    
    " Some servers have issues with backup files, see #649
    set nobackup
    set nowritebackup
    
    " Better display for messages
    set cmdheight=2
    
    " You will have bad experience for diagnostic messages when it's default 4000.
    set updatetime=300
    
    " don't give |ins-completion-menu| messages.
    set shortmess+=c
    
    " always show signcolumns
    set signcolumn=yes
    
    " Use command ':verbose imap <tab>' to make sure tab is not mapped by other plugin.
    " use <tab> for trigger completion and navigate to the next complete item
    function! s:check_back_space() abort
      let col = col('.') - 1
      return !col || getline('.')[col - 1]  =~ '\s'
    endfunction
    
    inoremap <silent><expr> <Tab>
          \ pumvisible() ? "\<C-n>" :
          \ <SID>check_back_space() ? "\<Tab>" :
          \ coc#refresh()
    
    " Use <c-space> to trigger completion.
    inoremap <silent><expr> <c-space> coc#refresh()
    
    " Use <Tab> and <S-Tab> to navigate the completion list:
    inoremap <expr> <Tab> pumvisible() ? "\<C-n>" : "\<Tab>"
    inoremap <expr> <S-Tab> pumvisible() ? "\<C-p>" : "\<S-Tab>"
    
    " Use <cr> to confirm completion:
    " `<C-g>u` means break undo chain at current position.
    " Coc only does snippet and additional edit on confirm.
    inoremap <expr> <cr> pumvisible() ? "\<C-y>" : "\<C-g>u\<CR>"
    
    " To make <cr> select the first completion item and confirm the completion when no item has been selected:
    inoremap <silent><expr> <cr> pumvisible() ? coc#_select_confirm() : "\<C-g>u\<CR>"
    
    " Close the preview window when completion is done.
    autocmd! CompleteDone * if pumvisible() == 0 | pclose | endif
    
    
    " Use `[c` and `]c` to navigate diagnostics
    nmap <silent> [c <Plug>(coc-diagnostic-prev)
    nmap <silent> ]c <Plug>(coc-diagnostic-next)
    
    " Remap keys for gotos
    nmap <silent> gd <Plug>(coc-definition)
    nmap <silent> gy <Plug>(coc-type-definition)
    nmap <silent> gi <Plug>(coc-implementation)
    nmap <silent> gr <Plug>(coc-references)
    
    " Use K to show documentation in preview window
    nnoremap <silent> K :call <SID>show_documentation()<CR>
    
    function! s:show_documentation()
      if (index(['vim','help'], &filetype) >= 0)
        execute 'h '.expand('<cword>')
      else
        call CocAction('doHover')
      endif
    endfunction
    
    " Highlight symbol under cursor on CursorHold
    autocmd CursorHold * silent call CocActionAsync('highlight')
    
    " Remap for rename current word
    nmap <leader>rn <Plug>(coc-rename)
    
    " Remap for format selected region
    xmap <leader>f  <Plug>(coc-format-selected)
    nmap <leader>f  <Plug>(coc-format-selected)
    
    augroup mygroup
      autocmd!
      " Setup formatexpr specified filetype(s).
      autocmd FileType typescript,json setl formatexpr=CocAction('formatSelected')
      " Update signature help on jump placeholder
      autocmd User CocJumpPlaceholder call CocActionAsync('showSignatureHelp')
    augroup end
    
    " Remap for do codeAction of selected region, ex: `<leader>aap` for current paragraph
    xmap <leader>a  <Plug>(coc-codeaction-selected)
    nmap <leader>a  <Plug>(coc-codeaction-selected)
    
    " Remap for do codeAction of current line
    nmap <leader>ac  <Plug>(coc-codeaction)
    " Fix autofix problem of current line
    nmap <leader>qf  <Plug>(coc-fix-current)
    
    " Use <tab> for select selections ranges, needs server support, like: coc-tsserver, coc-python
    nmap <silent> <TAB> <Plug>(coc-range-select)
    xmap <silent> <TAB> <Plug>(coc-range-select)
    xmap <silent> <S-TAB> <Plug>(coc-range-select-backword)
    
    " Use `:Format` to format current buffer
    command! -nargs=0 Format :call CocAction('format')
    
    " Use `:Fold` to fold current buffer
    command! -nargs=? Fold :call     CocAction('fold', <f-args>)
    
    " use `:OR` for organize import of current buffer
    command! -nargs=0 OR   :call     CocAction('runCommand', 'editor.action.organizeImport')
    
    " Add status line support, for integration with other plugin, checkout `:h coc-status`
    set statusline^=%{coc#status()}%{get(b:,'coc_current_function','')}
    
    " Using CocList
    " Show all diagnostics
    nnoremap <silent> <space>a  :<C-u>CocList diagnostics<cr>
    " Manage extensions
    nnoremap <silent> <space>e  :<C-u>CocList extensions<cr>
    " Show commands
    nnoremap <silent> <space>c  :<C-u>CocList commands<cr>
    " Find symbol of current document
    nnoremap <silent> <space>o  :<C-u>CocList outline<cr>
    " Search workspace symbols
    nnoremap <silent> <space>s  :<C-u>CocList -I symbols<cr>
    " Do default action for next item.
    nnoremap <silent> <space>j  :<C-u>CocNext<CR>
    " Do default action for previous item.
    nnoremap <silent> <space>k  :<C-u>CocPrev<CR>
    " Resume latest coc list
    nnoremap <silent> <space>p  :<C-u>CocListResume<CR>
    
    
    
    """ Using the configuration file
    function! SetupCommandAbbrs(from, to)
      exec 'cnoreabbrev <expr> '.a:from
            \ .' ((getcmdtype() ==# ":" && getcmdline() ==# "'.a:from.'")'
            \ .'? ("'.a:to.'") : ("'.a:from.'"))'
    endfunction
    
    " Use C to open coc config
    call SetupCommandAbbrs('C', 'CocConfig')
    
    autocmd FileType json syntax match Comment +\/\/.\+$+
    



## ncm2 in nvim


    "--------------------------------------------------------------
    " 語法檢查（Syntax Check）
    
    " Check syntax (linting) and fix files asynchronously, with Language
    " Server Protocol (LSP) integration in Vim
    Plug 'w0rp/ale'
    
    "--------------------------------------------------------------
    " 自動完成（Autocomplete）
    
    " Automatic quote and bracket completion
    Plug 'jiangmiao/auto-pairs'
    
    " " A set of mappings for HTML, XML, PHP, ASP, eRuby, JSP, and more
    " Plug 'tpope/vim-ragtag'
    
    " NCM2 (nvim-completion-manager v2) is a fast, extensible, async completion 
    " framework for neovim.
    Plug 'ncm2/ncm2'
    Plug 'roxma/nvim-yarp'
    
    " NOTE: you need to install completion sources to get completions. Check
    " our wiki page for a list of sources: https://github.com/ncm2/ncm2/wiki
    
    " Gerenal purpose
    Plug 'ncm2/ncm2-bufword'
    Plug 'ncm2/ncm2-path'
    
    " Syntax
    Plug 'ncm2/ncm2-syntax' | Plug 'Shougo/neco-syntax'
    
    " Web Development
    Plug 'ncm2/ncm2-html-subscope'
    Plug 'ncm2/ncm2-tagprefix'
    " Plug 'ncm2/ncm2-markdown-subscope'
    
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
    
    " Emmet for vim
    Plug 'mattn/emmet-vim'
    
    " Snippets
    
    




## NERDTree

"--------------------------------------------------------------
" 瀏覽目錄與檔案： NERDTree

"  - To open file navigation window:  [:NERDTree]
"  - To open a file in the file explorer to the right window:  <o>
"  - To switch between file window and nerdtree file navigation window:
"  <Ctrl+w><Ctrl+w>; <Ctrl+w><L>
"  - To exit or close file explorer window: <q>; [:NERDTreeClose]
" o: 在已有窗口中打開文件、目錄或書籤，並跳到該窗口
" go: 在已有窗口 中打開文件、目錄或書籤，但不跳到該窗口
" t: 在新 Tab 中打開選中文件/書籤，並跳到新 Tab
" T: 在新 Tab 中打開選中文件/書籤，但不跳到新 Tab
" i: split 一個新窗口打開選中文件，並跳到該窗口
" gi: split 一個新窗口打開選中文件，但不跳到該窗口
" s: vsplit 一個新窗口打開選中文件，並跳到該窗口
" gs: vsplit 一個新 窗口打開選中文件，但不跳到該窗口
" !: 執行當前文件
" O: 遞歸打開選中 結點下的所有目錄
" m: 文件操作：複製、刪除、移動等



## Airline 安裝前置準備

需要有 Powerline Font 與 Nerd Font

**Powerline Fonts 安裝**

The repository of “Powerline Fonts” contains pre-patched and adjusted fonts for usage with the [Powerline](https://github.com/powerline/powerline) statusline plugin.


    sudo apt install fonts-powerline

官網及安裝參考文件： https://github.com/powerline/fonts

**Nerd Font 安裝**

**Nerd Fonts** is a project that patches developer targeted fonts with a high number of glyphs (icons). Specifically to add a high number of extra glyphs from popular 'iconic fonts' such as [Font Awesome ➶](https://github.com/FortAwesome/Font-Awesome), [Devicons ➶](https://vorillaz.github.io/devicons/), [Octicons ➶](https://github.com/primer/octicons), and [others](https://github.com/ryanoasis/nerd-fonts#glyph-sets).

 1. 適用於 Linux 作業系統，手動下載網址： https://github.com/ryanoasis/nerd-fonts/tags
 
    發行說明： https://github.com/ryanoasis/nerd-fonts/releases

 2. 透過「安裝腳本檔案（install.sh）」
 https://github.com/ryanoasis/nerd-fonts/blob/master/install.sh
 

    git clone https://github.com/ryanoasis/nerd-fonts.git

 

    $ wget https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/install.sh

 
 **All fonts:**

- Installs all the patched Fonts (*Warning: This is a lot of Fonts adding up to a large size*)
    ./install.sh

**Single font:**

- Installs a single Font of your choice
    ./install.sh <FontName>


    $ ./install.sh Hack
    $ ./install.sh HeavyData

官網及安裝參考文件： https://github.com/ryanoasis/nerd-fonts


## Airline Theme 的圖示無法正常顯示

注意： 光是安裝 Powerline Font ，仍無法正常顯示所有的 Icon ；需安裝 Nerd Font 才行。


    1.) Download a Nerd Font （如： Meslo for Powerline）
    2.) Unzip and copy to ~/.fonts
    3.) Run the command fc-cache -fv to manually rebuild the font cache

下載網址：  [**nerd-fonts**](https://github.com/ryanoasis/nerd-fonts)/[patched-fonts](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts)/[Meslo](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Meslo)/[L-DZ](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Meslo/L-DZ)/[Regular](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Meslo/L-DZ/Regular)/**complete**/

https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/Meslo/L-DZ/Regular/complete/Meslo%20LG%20L%20DZ%20Regular%20Nerd%20Font%20Complete%20Mono.ttf


**配合之 init.vim 檔設定：**


    "--------------------------------------------------------------
    " 狀態列： Airline & AirlineTheme
    
    " Automatically displays all buffers when there's only one tab open
    let g:airline#extensions#tabline#enabled = 2
    let g:airline#extensions#tabline#formatter = 'default'
     
    let g:airline_powerline_fonts = 1
    set guifont=MesloLGM\ Nerd\ Font:h17
    
    let g:airline_theme='wombat'
    " let g:airline_theme='lucius'
    " let g:airline_theme='luna'
    
    if !exists('g:airline_symbols')
        let g:airline_symbols = {}
    endif
    
    " unicode symbols
    let g:airline_left_sep = '»'
    let g:airline_left_sep = '▶'
    let g:airline_right_sep = '«'
    let g:airline_right_sep = '◀'
    let g:airline_symbols.crypt = '🔒'
    let g:airline_symbols.linenr = '☰'
    let g:airline_symbols.linenr = '␊'
    let g:airline_symbols.linenr = '␤'
    let g:airline_symbols.linenr = '¶'
    let g:airline_symbols.maxlinenr = ''
    let g:airline_symbols.maxlinenr = '㏑'
    let g:airline_symbols.branch = '⎇'
    let g:airline_symbols.paste = 'ρ'
    let g:airline_symbols.paste = 'Þ'
    let g:airline_symbols.paste = '∥'
    let g:airline_symbols.spell = 'Ꞩ'
    let g:airline_symbols.notexists = 'Ɇ'
    let g:airline_symbols.whitespace = 'Ξ'
    
    " powerline symbols
    let g:airline_left_sep = ''
    let g:airline_left_alt_sep = ''
    let g:airline_right_sep = ''
    let g:airline_right_alt_sep = ''
    let g:airline_symbols.branch = ''
    let g:airline_symbols.readonly = ''
    let g:airline_symbols.linenr = '☰'
    let g:airline_symbols.maxlinenr = '' 
    let g:airline_symbols.dirty= '⚡'




# 設定參考範本


https://github.com/liaoishere/dotfiles/tree/master/vim


http://liaoph.com/modern-vim/


https://github.com/PegasusWang/vim-config/tree/rafi


https://juejin.im/entry/5d92f7eaf265da5b926bc022



https://morioh.com/p/e472c4057aeb



https://github.com/ctaylo21/jarvis



https://github.com/0xff91/vide

http://gopherhub.org/2019/06/28/thinkvim/




    brew install ripgrep
    ...
    Bash completion has been installed to:
      /usr/local/etc/bash_completion.d
    
    zsh completions have been installed to:
      /usr/local/share/zsh/site-functions


https://awesomeopensource.com/project/kutsan/dotfiles



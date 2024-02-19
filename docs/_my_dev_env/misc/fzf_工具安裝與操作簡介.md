# fzf 工具安裝與操作簡介
fzf 提供的「Fuzzy 搜尋功能」，可用於「終端機」及「Vim 8編輯器」。

https://www.youtube.com/watch?v=1a5NiMhqAR0&


[https://youtu.be/1a5NiMhqAR0](https://youtu.be/1a5NiMhqAR0)



# fzf 安裝與設定

以下之安裝作業程序，個人測試過，試用於 Ubuntu 20.04 與 macOS 11.1 之作業系統。


## 將 fzf 充當「終端機」工具
https://github.com/junegunn/fzf/blob/master/README-VIM.md



**（1）自 Git Repo 下載安裝執行檔**

    $ git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf


**（2）執行安裝軟件**

    $ ~/.fzf/install
    Downloading bin/fzf ...
      - Found in $PATH
      - Creating symlink: bin/fzf -> /usr/bin/fzf
      - Checking fzf executable ... 0.20.0 != 0.25.0
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100   635  100   635    0     0   1446      0 --:--:-- --:--:-- --:--:--  1443
    100 1122k  100 1122k    0     0  1024k      0  0:00:01  0:00:01 --:--:-- 1024k
      - Checking fzf executable ... 0.25.0
    Do you want to enable fuzzy auto-completion? ([y]/n) y
    Do you want to enable key bindings? ([y]/n) y
    
    Generate /home/alanjui/.fzf.bash ... OK
    Generate /home/alanjui/.fzf.zsh ... OK
    
    Do you want to update your shell configuration files? ([y]/n) y
    
    Update /home/alanjui/.bashrc:
      - [ -f ~/.fzf.bash ] && source ~/.fzf.bash
        - Already exists: line #173
    
    Update /home/alanjui/.zshrc:
      - [ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
        + Added
    
    Finished. Restart your shell or reload config file.
       source ~/.bashrc  # bash
       source ~/.zshrc   # zsh
    
    Use uninstall script to remove fzf.
    
    For more information, see: https://github.com/junegunn/fzf


**（3）驗證執行檔安裝路徑**

    $ which fzf
    /usr/bin/fzf


**（4）驗證各 Shell 的設定檔**
驗證下列各 Shell 設定檔，是否已加入應有的「設定」。

《**Bash Shell 設定檔》：~/.bashrc**

    ....
    [ -f ~/.fzf.bash ] && source ~/.fzf.bash


《**ZSH Shell 設定檔》：~/.zshrc**

    ....
    [ -f ~/.fzf.zsh ] && source ~/.fzf.zsh



## 與 Vim 8 整合應用
https://github.com/junegunn/fzf.vim



（1）在 **Vim  Plugins 設定檔，加入如下設定：**

    vim ~/.vim/vimrc


    " check whether vim-plug is installed and install it if necessary
    if empty(glob('~/.vim/autoload/plug.vim'))
      silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
        \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
      autocmd VimEnter * PlugInstall
    endif
    
    "==============================================================
    " 擴充套件安裝
    "==============================================================
    
    call plug#begin('~/.vim/plugged')
    ....
    Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
    Plug 'junegunn/fzf.vim'
    
    call plug#end()


**（2）在 Vim 8 透過 vim-plug 安裝 Plugins**

    :PlugInstall


**（3）在 Vim 設定檔，加入設定。**

【註】：以下的「設定」 ，會令「Preview Window」顯示在 Vim 的畫面中央，此等功能需要 Vim 8.2 方能支援。

    " Keymap
    map <silent> <Leader>f :Files<CR>
    map <silent> <Leader>g :GFiles<CR>
    map <silent> <leader>b :Buffers<CR>
    nnoremap <leader>g :Rg<CR>
    nnoremap <leader>t :Tags<CR>
    nnoremap <leader>m :Marks<CR>
    
    
    " This is the default extra key bindings
    let g:fzf_action = {
      \ 'ctrl-t': 'tab split',
      \ 'ctrl-x': 'split',
      \ 'ctrl-v': 'vsplit' }
    
    " Enable per-command history.
    " CTRL-N and CTRL-P will be automatically bound to next-history and
    " previous-history instead of down and up. If you don't like the change,
    " explicitly bind the keys to down and up in your $FZF_DEFAULT_OPTS.
    let g:fzf_history_dir = '~/.local/share/fzf-history'
    
    
    let g:fzf_tags_command = 'ctags -R'
    " Border color
    let g:fzf_layout = {'up':'~90%', 'window': { 'width': 0.8, 'height': 0.8,'yoffset':0.5,'xoffset': 0.5, 'highlight': 'Todo', 'border': 'sharp' } }
    
    let $FZF_DEFAULT_OPTS = '--layout=reverse --info=inline'
    let $FZF_DEFAULT_COMMAND="rg --files --hidden"
    " let $FZF_DEFAULT_COMMAND="rg --files"
    
    
    " Customize fzf colors to match your color scheme
    let g:fzf_colors =
    \ { 'fg':      ['fg', 'Normal'],
      \ 'bg':      ['bg', 'Normal'],
      \ 'hl':      ['fg', 'Comment'],
      \ 'fg+':     ['fg', 'CursorLine', 'CursorColumn', 'Normal'],
      \ 'bg+':     ['bg', 'CursorLine', 'CursorColumn'],
      \ 'hl+':     ['fg', 'Statement'],
      \ 'info':    ['fg', 'PreProc'],
      \ 'border':  ['fg', 'Ignore'],
      \ 'prompt':  ['fg', 'Conditional'],
      \ 'pointer': ['fg', 'Exception'],
      \ 'marker':  ['fg', 'Keyword'],
      \ 'spinner': ['fg', 'Label'],
      \ 'header':  ['fg', 'Comment'] }
    
    "Get Files
    command! -bang -nargs=? -complete=dir Files
        \ call fzf#vim#files(<q-args>, fzf#vim#with_preview({'options': ['--layout=reverse', '--info=inline']}), <bang>0)
    
    
    " Get text in files with Rg
    command! -bang -nargs=* Rg
      \ call fzf#vim#grep(
      \   'rg --column --line-number --no-heading --color=always --smart-case '.shellescape(<q-args>), 1,
      \   fzf#vim#with_preview(), <bang>0)
    
    " Ripgrep advanced
    function! RipgrepFzf(query, fullscreen)
      let command_fmt = 'rg --column --line-number --no-heading --color=always --smart-case %s || true'
      let initial_command = printf(command_fmt, shellescape(a:query))
      let reload_command = printf(command_fmt, '{q}')
      let spec = {'options': ['--phony', '--query', a:query, '--bind', 'change:reload:'.reload_command]}
      call fzf#vim#grep(initial_command, 1, fzf#vim#with_preview(spec), a:fullscreen)
    endfunction
    
    command! -nargs=* -bang RG call RipgrepFzf(<q-args>, <bang>0)
    
    " Git grep
    command! -bang -nargs=* GGrep
      \ call fzf#vim#grep(
      \   'git grep --line-number '.shellescape(<q-args>), 0,
      \   fzf#vim#with_preview({'dir': systemlist('git rev-parse --show-toplevel')[0]}), <bang>0)


使用「快捷鍵」：**《，》**+**《f》**；或用「Vim 指令」：**:Files** ，Vim 將會顯示如下之 fzf preview 畫面。在畫面「左邊」的「檔案清單」，若有檔案不想看到，譬如： Django 專案的 __**pycach__/  目錄，或** .pyc 檔案，可藉由 git repo 及 .gitignore 來控制「不要顯示」。

至於「隱藏檔」，要不要顯示，則透過 vimrc 設定檔中的 **$FZF_DEFAULT_COMMAND** 變數來控制。想要顯示隱藏檔，就加入選項 —hidden：

    let $FZF_DEFAULT_COMMAND="rg --files --hidden"


![](https://paper-attachments.dropbox.com/s_47C109833DC0497FDCE822317C00C069C098DEF280C17A0C6936FF770DF11953_1612020401643_image.png)


以下為 Django 專案，所使用 .gitignore 設定：

    ###################
    .DS_Store
    .hg
    .svn
    .idea
    .vscode
    .git
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



----------
# 安裝 Vim 8.2


https://www.ultralinux.org/post/how-to-install-vim-8-2-on-ubuntu/



**（1） 解除已安裝 Vim**

    sudo apt remove --purge vim vim-runtime


**（2）自 Git  Repo 下載原始碼**

    cd ~/build
    git clone https://github.com/vim/vim
    cd vim
    git pull && git fetch


**（3） 執行「設定編譯組態」**

    $ ./configure \
    --enable-multibyte \
    --enable-rubyinterp=dynamic \
    --enable-pythoninterp=dynamic \
    --with-ruby-command=/usr/bin/ruby \
    --enable-python3interp \
    --enable-cscope \
    --enable-gui=auto \
    --with-features=huge \
    --with-x \
    --enable-fontset \
    --enable-largefile \
    --disable-netbeans \
    --with-compiledby="alanjui" \
    --enable-fail-if-missing
    
    $ make && sudo make install

【註】： 


- 安裝路徑：  
    # 執行檔安裝路徑
    $ which vim
    /usr/local/bin/vim
    
    # 執行環境存放路徑
    $ ll /usr/local/share/vim/vim82
    總用量 392
    drwxr-xr-x  4 root root  4096  1月 30 22:25 autoload
    -rw-r--r--  1 root root  1927  1月 30 22:25 bugreport.vim
    drwxr-xr-x  3 root root  4096  1月 30 22:25 colors
    drwxr-xr-x  2 root root  4096  1月 30 22:25 compiler
    -rw-r--r--  1 root root  4454  1月 30 22:25 defaults.vim
    -rw-r--r--  1 root root   806  1月 30 22:25 delmenu.vim
    drwxr-xr-x  2 root root  4096  1月 30 22:25 doc
    -rw-r--r--  1 root root  2126  1月 30 22:25 evim.vim
    -rw-r--r--  1 root root 61332  1月 30 22:25 filetype.vim
    -rw-r--r--  1 root root   280  1月 30 22:25 ftoff.vim
    drwxr-xr-x  2 root root 12288  1月 30 22:25 ftplugin
    -rw-r--r--  1 root root   971  1月 30 22:25 ftplugin.vim
    -rw-r--r--  1 root root   337  1月 30 22:25 ftplugof.vim
    -rw-r--r--  1 root root  1641  1月 30 22:25 gvimrc_example.vim
    drwxr-xr-x  2 root root  4096  1月 30 22:25 indent
    -rw-r--r--  1 root root   767  1月 30 22:25 indent.vim
    -rw-r--r--  1 root root   282  1月 30 22:25 indoff.vim
    drwxr-xr-x  2 root root  4096  1月 30 22:25 keymap
    drwxr-xr-x 43 root root 12288  1月 30 22:25 lang
    drwxr-xr-x  6 root root  4096  1月 30 22:25 macros
    -rw-r--r--  1 root root 42147  1月 30 22:25 menu.vim
    -rw-r--r--  1 root root  3430  1月 30 22:25 mswin.vim
    -rw-r--r--  1 root root 67096  1月 30 22:25 optwin.vim
    drwxr-xr-x  3 root root  4096  1月 30 22:25 pack
    drwxr-xr-x  2 root root  4096  1月 30 22:25 plugin
    drwxr-xr-x  2 root root  4096  1月 30 22:25 print
    -rw-r--r--  1 root root 17780  1月 30 22:25 rgb.txt
    -rw-r--r--  1 root root 11716  1月 30 22:25 scripts.vim
    drwxr-xr-x  2 root root  4096  1月 30 22:25 spell
    -rw-r--r--  1 root root 39825  1月 30 22:25 synmenu.vim
    drwxr-xr-x  2 root root 20480  1月 30 22:25 syntax
    drwxr-xr-x  2 root root  4096  1月 30 22:25 tools
    drwxr-xr-x  2 root root  4096  1月 30 22:25 tutor
    -rw-r--r--  1 root root  1369  1月 30 22:25 vimrc_example.vim


- 錯誤路徑：
    /usr/bin/vim


**（4）驗證安裝結果**

    $ /usr/local/bin/vim --version
    VIM - Vi IMproved 8.2 (2019 Dec 12, compiled Jan 30 2021 22:25:11)
    引入修正: 1-2427
    編譯者:alanjui@SRV-2020
    超強版本 不使用圖型界面。 目前可使用(+)與不可使用(-)的模組列表:
    +acl               -farsi             +mouse_sgr         +tag_binary
    +arabic            +file_in_path      -mouse_sysmouse    -tag_old_static
    +autocmd           +find_in_path      +mouse_urxvt       -tag_any_white
    +autochdir         +float             +mouse_xterm       -tcl
    -autoservername    +folding           +multi_byte        +termguicolors
    -balloon_eval      -footer            +multi_lang        +terminal
    +balloon_eval_term +fork()            -mzscheme          +terminfo
    -browse            +gettext           +netbeans_intg     +termresponse
    ++builtin_terms    -hangul_input      +num64             +textobjects
    +byte_offset       +iconv             +packages          +textprop
    +channel           +insert_expand     +path_extra        +timers
    +cindent           +ipv6              -perl              +title
    +clientserver      +job               +persistent_undo   -toolbar
    +clipboard         +jumplist          +popupwin          +user_commands
    +cmdline_compl     +keymap            +postscript        +vartabs
    +cmdline_hist      +lambda            +printer           +vertsplit
    +cmdline_info      +langmap           +profile           +virtualedit
    +comments          +libcall           -python            +visual
    +conceal           +linebreak         -python3           +visualextra
    +cryptv            +lispindent        +quickfix          +viminfo
    +cscope            +listcmds          +reltime           +vreplace
    +cursorbind        +localmap          +rightleft         +wildignore
    +cursorshape       -lua               -ruby              +wildmenu
    +dialog_con        +menu              +scrollbind        +windows
    +diff              +mksession         +signs             +writebackup
    +digraphs          +modify_fname      +smartindent       +X11
    -dnd               +mouse             -sound             +xfontset
    -ebcdic            -mouseshape        +spell             -xim
    +emacs_tags        +mouse_dec         +startuptime       -xpm
    +eval              -mouse_gpm         +statusline        +xsmp_interact
    +ex_extra          -mouse_jsbterm     -sun_workshop      +xterm_clipboard
    +extra_search      +mouse_netterm     +syntax            -xterm_save
            系統 vimrc 設定檔: "$VIM/vimrc"
      使用者個人 vimrc 設定檔: "$HOME/.vimrc"
        第二組個人 vimrc 檔案: "~/.vim/vimrc"
       使用者個人 exrc 設定檔: "$HOME/.exrc"
           defaults file: "$VIMRUNTIME/defaults.vim"
                  $VIM 預設值: "/usr/local/share/vim"
    編譯方式: gcc -c -I. -Iproto -DHAVE_CONFIG_H -O2 -fno-strength-reduce -Wall -U_FORTIFY_SOURCE -D_FORTIFY_SOURCE=1
    鏈結方式: gcc -L/usr/local/lib -Wl,--as-needed -o vim -lSM -lICE -lXt -lX11 -lXdmcp -lSM -lICE -lm -ltinfo -ldl


**（5）下載個人 Vim 8 設定檔**

    git clone https://github.com/AlanJui/vim8 ~/.vim
    vim



    :PlugInstall
    :CocInstall


# Nvim + Tmux 打造 Django 開發環境


# 軟體開發者打造環境的需求

從軟體開發者的工作流程，觀察作業應用的使用者需求；兼談 Tmux 與 Vim 工具能提供的功能特性。


https://www.youtube.com/watch?v=sSOfr2MtRU8&&t=1s


[https://youtu.be/sSOfr2MtRU8](https://youtu.be/sSOfr2MtRU8?t=1s)



# 以 VS Code 為師，使用 Vim + Tmux 打造開發環境

對於用過 VS Code 的使用者，想要透過 Vim + Tmux 打造個人化開發環境時，該怎麼做、應滿足那些要求？！


https://www.youtube.com/watch?v=gnupOrSEikQ&&t=1021s


[https://youtu.be/gnupOrSEikQ](https://youtu.be/gnupOrSEikQ?t=1021s)


# 跟著高手練功

參考高手已完成的實作案例，快速學習實務方面，在「設定」上的 How-to 。

**A Complete Guide for Installing and Setting up Neovim for Python Development**
https://jdhao.github.io/2018/12/24/centos_nvim_install_use_guide_en/

【註】： 以上文章，個人已完成實習，有興趣的朋友可參考我完成實作的 **init.vim** 設定檔。

**Setup Neovim for Python**
https://jdhao.github.io/2018/12/24/centos_nvim_install_use_guide_en/

**使用 neovim 打造一個現代化的編輯單**
http://liaoph.com/modern-vim/

**VSCode-like envirnoment with vim + tmux**

https://blog.inkdrop.info/vscode-like-environment-with-vim-tmux-4c2bfe17d31e




# 基礎打底

因為對 Vim 或 Tmux ，「有點熟但不是很熟 」的朋友，有些「專有名詞」、「操作概念」還無法全掌握者，可參考以下資料，練好基本功，為實力紮基礎。


## Python 開發者使用需求


https://www.youtube.com/watch?v=vlb3qUiS2ZY&&t=193s


[https://youtu.be/vlb3qUiS2ZY?t=193s](https://youtu.be/vlb3qUiS2ZY?t=193s)


## 何謂 Syntax Highlighting


https://www.youtube.com/watch?v=P5US8U8-KmA&


[https://youtu.be/P5US8U8-KmA](https://youtu.be/P5US8U8-KmA)


## Copy and Paste for tmux & vim on Linux

http://squidarth.com/programming/2018/12/14/tmux-linux.html


## 使用 Linux 的 AppImage 檔案在 Ubuntu 18.04 安裝 Nvim
https://github.com/neovim/neovim/releases/tag/v0.4.3



# 個人實作成品參考

以下之「設定檔」，於 Ubuntu 18.04 作業系統完成實作。


## Nvim 設定檔（～/.config/nvim/init.vim)
    "--------------------------------------------------------------
    " 擴充套件（Plugins）
    "--------------------------------------------------------------
    
    call plug#begin('~/.local/share/nvim/plugged')
    
    " 停用擴充套件
    " Plug 'davidhalter/jedi-vim', { 'on': []}
    
    " 程式語言　auto-completion
    Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
    Plug 'davidhalter/jedi-vim'
    
    " 狀態指示列
    Plug 'vim-airline/vim-airline'
    Plug 'vim-airline/vim-airline-themes'
    
    " 自動配對
    Plug 'jiangmiao/auto-pairs'
    
    " 註釋
    Plug 'scrooloose/nerdcommenter'
    
    " 自動調整排版格式
    " pip install yapf
    Plug 'sbdchd/neoformat'
    
    " 自動顯示定義處(Code Jump)
    Plug 'davidhalter/jedi-vim'
    
    " 檔案顯示管理
    Plug 'scrooloose/nerdtree'
    
    " 程式碼檢核
    " pipenv install pylint
    Plug 'neomake/neomake'
    
    " 多游標編輯
    Plug 'terryma/vim-multiple-cursors'
    
    " 高亮度標示被複製的文字
    Plug 'machakann/vim-highlightedyank'
    
    " 折疊／開展程式碼
    Plug 'tmhedberg/SimpylFold'
    
    " 佈景（Theme）
    Plug 'morhetz/gruvbox'
    Plug 'joshdick/onedark.vim'
    Plug 'itchyny/lightline.vim'
    Plug 'sheerun/vim-polyglot'
    
    call plug#end()
    
    
    "--------------------------------------------------------------
    " 系統設定
    "--------------------------------------------------------------
    
    " 設定 <Leader> 鍵
    let g:mapleader = ","
    let mapleader = ","
    set timeout timeoutlen=1500
    
    set clipboard=unnamedplus
    
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
    nmap <leader>nu :set number<CR>             " :set nu
    nmap <leader>n! :set nonumber<CR>           " :set nu!
    nmap <leader>NU :set relativenumber<CR>     " :set rnu
    nmap <leader>N! :set norelativenumber<CR>   " :set nornu
    
    
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
    
    
    
    "--------------------------------------------------------------
    " 系統設定
    "--------------------------------------------------------------
    
    " Enable deoplete plugin
    let g:python3_host_prog = "/home/web_admin/.pyenv/shims/python"
    
    "
    " 程式語言　auto-completion
    "
    let g:deoplete#enable_at_startup = 1
    
    " automatically close the method preview window
    autocmd InsertLeave, CompleteDone * if pumvisible() == 0 | pclose | endif
    
    " Navigate through the auto-completion list with Tab key
    inoremap <expr><tab> pumvisible() ? "\<c-n>" : "\<tab>"
    
    "
    " 狀態指示列
    "
    let g:airline_theme='luna'
    
    
    "
    " 自動調整排版格式
    "
    
    " Vim Command
    " :Neoformat! [python [yapf]]
    
    " Enable alignment
    let g:neoformat_basic_format_align = 1
    
    " Enable tab to spaces conversion
    let g:neoformat_basic_format_retab = 1
    
    " Enable trimming of trailing whitespace
    let g:neoformat_basic_format_trim = 1
    
    " Run a formatter on save
    augroup fmt
      autocmd!
      autocmd BufWritePre * undojoin | Neoformat
    augroup END
    
    
    "
    " 自動顯示定義處(Code Jump)
    "
    
    " Move the cursor to the class or method you want to check, then press the various supported shortcut provided by jedi-vim:
    "
    " - <leader>d: go to definition
    " - K:         check documentation of class or method
    " - <leader>n: show the usage of a name in current file
    " - <leader>r: rename a name
    
    " disable autocompletion, cause we use deoplete for completion
    let g:jedi#completions_enabled = 0
    
    " open the go-to function in split, not another buffer
    let g:jedi#use_splits_not_buffers = 'right'
    
    
    "
    " 檔案顯示管理
    "
    
    " Vim Command: NERDTree
    " OP Ref: https://jdhao.github.io/2018/09/10/nerdtree_usage/
    " - Open a file in the file explorer: <o>
    " - Switch betwen file window and nerdtree file navigation window:
    "     (a) <C-w><C-w>
    "     (b) <C-w><L>
    " - close file explorer window:
    "     (a) <q> on file explorer window
    "     (b) Vim Command: NERDTreeClose
    
    " Open the NerdTree window when start up Nvim, but put the cursor in the file-editing window
    autocmd VimEnter * NERDTree | wincmd p
    
    " Sublime Text like： Open side bar
    nnoremap <silent> <C-k><C-b> :NERDTreeToggle<CR>
    
    
    "
    " 程式碼檢核
    "
    " Vim Command:
    "  - Neomake: Manually start syntax checking
    "  - lwindow / lopen: Navigate them using the buil-in methods
    "  - lprev / lnext : Go back and forth
    "
    "  pylint --generate-rcfile > ~/.pylintrc
    "  Usage Ref: https://stackoverflow.com/questions/4341746/how-do-i-disable-a-pylint-warning/23542817#23542817
    
    let g:neomake_python_enabled_makers = ['pylint']
    
    " Open the list automatically
    let g:neomake_open_list = 2
    
    " enable automatical code check: normal mode (after 1s; no delay when writing)
    call neomake#configure#automake('nrwi', 500)
    
    
    "
    " 多游標編輯
    "
    " (1) move the cursor to a variable you want to rename
    " (2) press <C-n> to enter multiple cursor ediiting mode and let variable to be highlighted
    " (3) if a occurance want to skip, press <C-x>
    " (4) press <c> (meands to change) and enter insert mode. Input a new name.
    " (5) press <ESC> to exit multiple cursor editting mode
    
    
    "
    " 高亮度標示被複製的文字
    "
    
    highlight HighlightedyankRegion cterm=reverse gui=reverse
    
    " set highlight duration time to 1000 ms, i.e., 1 second
    let g:highlightedyank_highlight_duration = 1000
    
    
    "
    " 折疊／開展程式碼
    "
    
    " - zo： Open fold in current cursor postion
    " - zO： Open fold and sub-fold in current cursor postion recursively
    " - zc： Close the fold in current cursor position
    " - zC： Close the fold and sub-fold in current cursor position recursively
    
    let g:SimpylFold_docstring_preview = 1
    let g:SimpylFold_fold_docstring = 0
    let g:SimpylFold_fold_import = 0
    
    
    "
    " 佈景（Theme）
    "
    
    " support true color
    set notermguicolors
    
    " airline theme
    set laststatus=2
    if !has('gui_running')
      set t_Co=256
    endif
    set noshowmode
    let g:lightline = {
          \ 'colorscheme': 'wombat',
          \ }
    
    let g:airline_theme='tomorrow'
    
    " gruvbox theme
    colorscheme gruvbox
    set background=dark
    "set background=light
    
    "" onedark theme
    "let g:onedark_hide_endofbuffer = 0
    "let g:onedark_termcolors = 256
    
    "" onedark#extend_highlight
    "if (has("autocmd"))
    "augroup colorextend
    "autocmd!
    "" Make `Function`s bold in GUI mode
    "autocmd ColorScheme * call onedark#extend_highlight("Function", { "gui": "bold" })
    "" Override the `Statement` foreground color in 256-color mode
    "autocmd ColorScheme * call onedark#extend_highlight("Statement", { "fg": { "cterm": 128 } })
    "" Override the `Identifier` background color in GUI mode
    "autocmd ColorScheme * call onedark#extend_highlight("Identifier", { "bg": { "gui": "#333333" } })
    "augroup END
    "endif
    
    "" onedark#set_highlight
    "" onedark.vim override: Don't set a background color when running in a terminal;
    "" just use the terminal's background color
    "" `gui` is the hex color code used in GUI mode/nvim true-color mode
    "" `cterm` is the color code used in 256-color mode
    "" `cterm16` is the color code used in 16-color mode
    "if (has("autocmd") && !has("gui_running"))
    "augroup colorset
    "autocmd!
    "let s:white = { "gui": "#ABB2BF", "cterm": "145", "cterm16" : "7" }
    "autocmd ColorScheme * call onedark#set_highlight("Normal", { "fg": s:white }) " `bg` will not be styled since there is no `bg` setting
    "augroup END
    "endif
    
    """ Global color overrides
    "let g:onedark_color_overrides = {
          "\ "black": {"gui": "#2F343F", "cterm": "235", "cterm16": "0" },
          "\ "purple": { "gui": "#C678DF", "cterm": "170", "cterm16": "5" }
    "\}
    
    "syntax on
    "colorscheme onedark
    
    
    "
    " Builtin terminal
    "
    
    " To open the terminal:
    "  (A) :terminal
    "  (B) :vnew term://bash
    "  (C) :new term://bash
    "
    " Entering the terminal emulator: Press <i> to start typing terminal command
    "
    " To exit terminal commad: Press <C-\><C-n>
    "
    " To exit terminal emulator: exit<Enter>
    



## Tmux 設定檔（～/.tmux.conf）
    # https://tmuxguide.readthedocs.io/en/latest/tmux/tmux.html#tmux-conf
    
    #========================================================
    # Tmux Plugins
    #========================================================
    
    # Tmux Plugin Manager
    if "test ! -d ~/.tmux/plugins/tpm" \
         "run 'git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm && ~/.tmux/plugins/tpm/bin/install_plugins'"
    
    # List of plugins
         set -g @plugin 'tmux-plugins/tpm'
         set -g @plugin 'tmux-plugins/tmux-sensible'
    
    # Session save and restore
    #  - continuous saving of tmux environment
    #  - automatic tmux start when computer/server is turned on
    #  - automatic restore when tmux is started
         set -g @plugin 'tmux-plugins/tmux-resurrect'
         set -g @plugin 'tmux-plugins/tmux-continuum'
    
         set -g @plugin 'tmux-plugins/tmux-yank'
         set -g default-command "reattach-to-user-namespace -l $SHELL"
    
         set -g @resurrect-strategy-vim 'session'
    
    # Other examples:
    # set -g @plugin 'github_username/plugin_name'
    # set -g @plugin 'git@github.com/user/plugin'
    # set -g @plugin 'git@bitbucket.com/user/plugin'
    
    # Tmux Powerline theme
         set -g @plugin 'jooize/tmux-powerline-theme'
    
    
    #========================================================
    # Tmux Configuration
    #========================================================
    
    # unbind default prefix and set it to ctrl-a
         set -g prefix C-t
         unbind C-b
         bind C-t send-prefix
    
    # make delay shorter
         set -sg escape-time 0
    
    # Automatic restore session
         set -g @continuum-restore 'on'
    
    # history size
         set -g history-limit 10000
    
    # enable mouse support for switching panes/windows
         set -g mouse on
    
    ### other optimization
    
    # display things in 256 colors
    # set -g default-terminal "xterm-256color"
    # set -ga terminal-overrides ",xterm-256color:Tc"
    
    # tell Tmux that outside terminal supports true color
         set -g default-terminal "screen-256color"
         set -ga terminal-overrides ",xterm-256color*:Tc"
    
    # stop auto renaming
         setw -g automatic-rename off
         set-option -g allow-rename off
    
    # renumber windows sequentially after closing
         set -g renumber-windows on
    
    # window notifications; display activity on other window
         setw -g monitor-activity on
         set -g visual-activity on
    
    
    #
    # Status Line
    #
    
    # Status Line Format
         set-window-option -g status-left ""
         set-window-option -g status-right "#[fg=white,bg=colour88] #S #[fg=colour231,bg=colour240] #H #[fg=black,bg=colour252,nobold] %b %d %a #[bold]%H:%M"
    
    # default status bar colors
         set -g status-fg colour240
         set -g status-bg colour233
    
    # default window title colors
         set-window-option -g window-status-style fg=colour220
         set-window-option -g window-status-style bg=default
    
    #
    # Status bar window in background (not active)
    #
    # set-window-option -g window-status-format "#I #W "
    
         set-window-option -g window-status-style dim
         set-window-option -g window-status-style bg=colour240
         set-window-option -g window-status-style fg=colour231
    
    #
    # Status bar window currently active
    #
    # set-window-option -g window-status-current-format "#I #W "
    
    # active window title colors
         set-window-option -g window-status-current-style bright
         set-window-option -g window-status-current-style bg=colour68
         set-window-option -g window-status-current-style fg=colour220
    
    
    #========================================================
    # Key bindings
    #========================================================
    
    # reload config file
         bind r source-file ~/.tmux.conf \; display-message "Config reloaded..."
    
    # quickly open a new window
         bind N new-window
    
    # synchronize all panes in a window
         bind y setw synchronize-panes
    
    # "|" splits the current window vertically, and "-" splits it horizontally
         unbind %
         bind | split-window -h
         bind - split-window -v
    
    # Pane navigation (vim-like)
         bind h select-pane -L
         bind j select-pane -D
         bind k select-pane -U
         bind l select-pane -R
    
    # Pane resizing
         bind -r Left  resize-pane -L 4
         bind -r Down  resize-pane -D 4
         bind -r Up    resize-pane -U 4
         bind -r Right resize-pane -R 4
    
    # Move window
         bind-key S-Left swap-window -t -1
         bind-key S-Right swap-window -t +1
    
    # Cycle prev/next pane
    # bind -n S-Left  select-pane -t :.-
    # bind -n S-Right select-pane -t :.+
    # bind -n C-n     select-pane -t :.+
    
    # Open current directory
         bind f run-shell "open #{pane_current_path}"
    
    #### copy mode : vim ####
    
         bind P paste-buffer
    
    # set vi mode for copy mode
         setw -g mode-keys vi
    
    # Setup 'v' to begin selection as in Vim
         bind -T copy-mode-vi 'v' send-keys -X begin-selection
    
    # Copy to tmux buffer
    # For binding 'y' to copy and exiting selection mode
         bind -T copy-mode-vi 'y' send-keys -X copy-pipe-and-cancel "xclip -sel clip -i"
    
    # Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
         run -b '~/.tmux/plugins/tpm/tpm'


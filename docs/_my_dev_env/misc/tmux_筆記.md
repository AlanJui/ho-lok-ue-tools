# tmux 筆記



# 常用操作


## Sharing a tmux session

The simplest setup is using the exact same session with multiple tmux client instances. The following steps will get us there:

1. Alice and Bob `ssh` into the same server
2. Alice creates a new tmux sesssion: `tmux new -s shared`
3. Bob connects to that session: `tmux attach -t shared`



## 建立 Django RunServer Shred Session

 1. 建立名為 shared 的 session

    tmux new -s shared


2. 啟動 Django Runserver

2.1 

    cd ~/workspace/Python/django_001/

2.2

    pipenv shell

2.3

    ./manage.py runserver

2.4

    tmux a -t Django

2.5 進入下方監察視窗
切換 Tmux Window 到下方，用於專門監察 shared session 狀態之視窗。

2.6 

    tmux a -t shared




# 常用指令


## Server


    tmux kill-server



## Session


    tmux ls



    tmux new -s <SessionName>



    tmux attach -t 0



    tmux a -t <SessionName>



    tmux rename-session -t <TerminalNo> <SessionName>

【註】： （1）先進入 Session；（2）按鍵<Prefix> + $；（3）輸入 Session Name


    tmux kill-session -t <TerminalNo>



    tmux source-file <SourceFile>

Default： ~/.tmux.conf



    tmux ls



## Window


- 將 window 移至左方

<Prefix>

    :swap-window -t -1


- 將 window 移至右方

<Prefix>

    :swap-window -t +1



- 設成快速鍵（~/.tmux.conf）


    bind-key S-Left swap-window -t -1
    bind-key S-Right swap-window -t +1



# tmux 常用快速鍵

預設 〔prefix〕快速鍵為： <Ctrl+B> ；但多數人會將之變更成 <Ctrl+A>


## Session

斷開 Session ： [prefix] D

【註】：是 D ；而非 d 。


## 視窗（Window）

**1. 開新視窗**
[prefix] c

**2. 切換到上/下一個視窗**
[prefix] p   (上)
[prefix] n   (下)

**3. 切換至指定視窗 (數字鍵/列表)**
\[prefix\] [0-9]   (數字鍵)
[prefix] w   (列表選項)

**4. 重新命名視窗**
[prefix] ,

**5. 修改視窗編號 - 修改視窗順序**
[prefix] .

**6. 關閉視窗**
[prefix] &


## 窗格（Pane）


-  `<Ctrl+b> + "`：進行**水平**分割
    
-  `<Ctrl+b> + %`：進行**垂直**分割
    
-  `<Ctrl+b> + <方向鍵>`：移動到其他 pane


-  `<Ctrl+b> + <Space>`：切換佈局
    
- `<Ctrl+b> + x`：關閉目前的 pane



# 儲存與啟用環境設定檔


## 儲存

<Prefix> + <C-S>


## 啟用

tmux

<Prefix> + <C-R>



# Tmux 擴充套件（Plugin）

Ref： https://github.com/tmux-plugins/tpm

**(1) 安裝  TPM (Tmux Plugins Manager)**


    $ git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm


**(2) 設定 TPM (Tmux Plugin Manager)**

編輯 TMUX 設定檔（~/.tmux.conf）


    # List of plugins
    set -g @plugin 'tmux-plugins/tpm'
    set -g @plugin 'tmux-plugins/tmux-sensible'
    
    # Other plugins:
    # set -g @plugin 'github_username/plugin_name'
    # set -g @plugin 'git@github.com/user/plugin'
    # set -g @plugin 'git@bitbucket.com/user/plugin'
    ......
    ......
    # Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
    run -b '~/.tmux/plugins/tpm/tpm'

**(3) 啟用 TPM**


    $ tmux source ~/.tmux.conf

**(4) 安裝 tmux plugin** 

先在 ~/.tmux.conf 設定檔加入

    set -g @plugin '來源處'

按安裝鍵
<Prefix><I>



# 使用 Theme

OneDark Tmux Theme

https://github.com/odedlaz/tmux-onedark-theme/blob/master/README.md




https://github.com/gpakosz/.tmux



# 使用 True Color
| 1. Edit .tmux.conf<br>    # ！！！importent！！！ 开启24 bit color 其他方式都无效<br>    set -g default-terminal "tmux-256color"<br>    set -ga terminal-overrides ",*256col*:Tc"<br>2. Edit: .vimrc<br>    " Enable true color 启用终端24位色<br>    if exists('+termguicolors')<br>      let &t_8f = "\<Esc>[38;2;%lu;%lu;%lum"<br>      let &t_8b = "\<Esc>[48;2;%lu;%lu;%lum"<br>      set termguicolors<br>    endif |





# 設定檔 ～/.tmux.conf


- set = set-option
- setw = set-window-option
- send = send-keys
- bind = bind-key



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
    set -g default-terminal "screen-256color"
    set -ga terminal-overrides ",xterm-256color:Tc"
    
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
    
    
    #### copy mode : vim ####
    
    # set vi mode for copy mode
    setw -g mode-keys vi
    
    # Setup 'v' to begin selection as in Vim
    # bind-key -T copy-mode-vi 'v' send-keys -X begin-selection
    bind -T copy-mode-vi 'v' send -X begin-selection
    
    # Copy to clipboard
    # bind-key -T copy-mode-vi 'y' send-keys -X copy-pipe "reattach-to-user-namespace pbcopy" \; send -X clear-selection
    bind -T copy-mode-vi 'y' send -X copy-pipe-and-cancel "reattach-to-user-namespace pbcopy"
    
    # Update default binding of Enter` to also use copy-pipe
    # bind-key -T copy-mode-vi Enter send-keys -X copy-pipe "reattach-to-user-namespace pbcopy" \; send -X clear-selection
    unbind -T copy-mode-vi Enter
    bind -T copy-mode-vi Enter send -X copy-pipe-and-cancel "reattach-to-user-namespace pbcopy"
    
    # Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
    run -b '~/.tmux/plugins/tpm/tpm'




# 綜合應用


## 查詢版本號


    tmux -V


## 共用剪下／貼上（剪貼簿）

電腦的業系統，擁有被稱作：「剪貼簿」的「暫存區」（Buffers），當有 Ctrl＋C （Copy）指令執行時，則有資料被複製，置入此前貼簿的暫存區。

然而，Tmux 本身也有自用，獨立的「暫存區」；可稱作： tmux buffer 。

以下操作說明：在 tmux session 中，如何將資料「複製」到 tmux buffer ，以及作業系統的「剪貼簿」。


## Tmux copy-paste - the defaults

The defaults are slighly involved, so this section is purely for informational purposes, and shouldn’t be memorized. Skipping this section is perfectly okay.

1. Enter ‘copy mode’ by pressing `CTRL`+`b`, `[`.
2. Use the arrow keys to go to the position from where you want to start copying. Press `CTRL`+`SPACE` to start copying.
3. Use arrow keys to go to the end of text you want to copy. Press `ALT`+`w` or `CTRL`+`w` to copy into Tmux buffer.
4. Press `CTRL`+`b`, `]` to paste in a possibly different Tmux pane/window.



## 建立 IDE 環境

~/bin/ide

    #!/usr/local/bin/bash
    tmux split-window -v -p 30
    tmux split-window -h -p 66
    tmux split-window -h -p 50

<Prefix> z → 開／關下排的 Terminal 視窗


![](https://paper-attachments.dropbox.com/s_222A3E3514C6A19893F02B76011A189C8D73F73BCEF3CD58EDA27F29E47D4D03_1574342920308_image.png)



# 參考文件


## 官網文件：

https://tmuxguide.readthedocs.io/en/latest/tmux/tmux.html#tmux-conf



## 教材

https://iter01.com/76932.html



## 如何在 macOS 設定 Copy Mode
https://thoughtbot.com/blog/tmux-copy-paste-on-os-x-a-better-future




https://blog.inkdrop.info/vscode-like-environment-with-vim-tmux-4c2bfe17d31e




https://www.youtube.com/watch?v=sSOfr2MtRU8&


[https://youtu.be/sSOfr2MtRU8](https://youtu.be/sSOfr2MtRU8)



https://www.youtube.com/watch?v=gnupOrSEikQ&


[https://youtu.be/gnupOrSEikQ](https://youtu.be/gnupOrSEikQ)


## tmux 速簡指引
https://gist.github.com/MohamedAlaa/2961058


[https://gist.github.com/MohamedAlaa/2961058](https://gist.github.com/MohamedAlaa/2961058)




https://gist.github.com/andreyvit/2921703


[https://gist.github.com/andreyvit/2921703](https://gist.github.com/andreyvit/2921703)




# 在 MacBookPro-2018 安裝 tmux 


    brew install tmux
    ...
    ==> openssl@1.1
    A CA file has been bootstrapped using certificates from the system
    keychain. To add additional certificates, place .pem files in
      /usr/local/etc/openssl@1.1/certs
    
    and run
      /usr/local/opt/openssl@1.1/bin/c_rehash
    
    openssl@1.1 is keg-only, which means it was not symlinked into /usr/local,
    because macOS provides LibreSSL.
    
    If you need to have openssl@1.1 first in your PATH run:
      echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc
    
    For compilers to find openssl@1.1 you may need to set:
      export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
      export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"
    
    ==> tmux
    Example configuration has been installed to:
      /usr/local/opt/tmux/share/tmux
    
    Bash completion has been installed to:
      /usr/local/etc/bash_completion.d



    $ cat /usr/local/opt/tmux/share/tmux/example_tmux.conf                               
    #
    # Example .tmux.conf
    #
    # By Nicholas Marriott. Public domain.
    #
    
    # Some tweaks to the status line
    set -g status-right "%H:%M"
    set -g window-status-current-style "underscore"
    
    # If running inside tmux ($TMUX is set), then change the status line to red
    %if #{TMUX}
    set -g status-bg red
    %endif
    
    # Enable RGB colour if running in xterm(1)
    set-option -sa terminal-overrides ",xterm*:Tc"
    
    # Change the default $TERM to tmux-256color
    set -g default-terminal "tmux-256color"
    
    # No bells at all
    set -g bell-action none
    
    # Keep windows around after they exit
    set -g remain-on-exit on
    
    # Change the prefix key to C-a
    set -g prefix C-a
    unbind C-b
    bind C-a send-prefix
    
    # Turn the mouse on, but without copy mode dragging
    set -g mouse on
    unbind -n MouseDrag1Pane
    unbind -Tcopy-mode MouseDrag1Pane
    
    # Some extra key bindings to select higher numbered windows
    bind F1 selectw -t:10
    bind F2 selectw -t:11
    bind F3 selectw -t:12
    bind F4 selectw -t:13
    bind F5 selectw -t:14
    bind F6 selectw -t:15
    bind F7 selectw -t:16
    bind F8 selectw -t:17
    bind F9 selectw -t:18
    bind F10 selectw -t:19
    bind F11 selectw -t:20
    bind F12 selectw -t:21
    
    # A key to toggle between smallest and largest sizes if a window is visible in
    # multiple places
    bind F set -w window-size
    
    # Keys to toggle monitoring activity in a window and the synchronize-panes option
    bind m set monitor-activity
    bind y set synchronize-panes\; display 'synchronize-panes #{?synchronize-panes,on,off}'
    
    # Create a single default session - because a session is created here, tmux
    # should be started with "tmux attach" rather than "tmux new"
    new -d -s0 -nirssi 'exec irssi'
    set -t0:0 monitor-activity on
    set  -t0:0 aggressive-resize on
    neww -d -ntodo 'exec emacs ~/TODO'
    setw -t0:1 aggressive-resize on
    neww -d -nmutt 'exec mutt'
    setw -t0:2 aggressive-resize on
    neww -d
    neww -d
    neww -d


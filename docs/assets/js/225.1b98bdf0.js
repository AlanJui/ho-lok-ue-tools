(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{508:function(t,e,s){"use strict";s.r(e);var a=s(10),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tmux-筆記"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux-筆記"}},[t._v("#")]),t._v(" tmux 筆記")]),t._v(" "),e("h1",{attrs:{id:"常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用操作"}},[t._v("#")]),t._v(" 常用操作")]),t._v(" "),e("h2",{attrs:{id:"sharing-a-tmux-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sharing-a-tmux-session"}},[t._v("#")]),t._v(" Sharing a tmux session")]),t._v(" "),e("p",[t._v("The simplest setup is using the exact same session with multiple tmux client instances. The following steps will get us there:")]),t._v(" "),e("ol",[e("li",[t._v("Alice and Bob "),e("code",[t._v("ssh")]),t._v(" into the same server")]),t._v(" "),e("li",[t._v("Alice creates a new tmux sesssion: "),e("code",[t._v("tmux new -s shared")])]),t._v(" "),e("li",[t._v("Bob connects to that session: "),e("code",[t._v("tmux attach -t shared")])])]),t._v(" "),e("h2",{attrs:{id:"建立-django-runserver-shred-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立-django-runserver-shred-session"}},[t._v("#")]),t._v(" 建立 Django RunServer Shred Session")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("建立名為 shared 的 session")]),t._v(" "),e("p",[t._v("tmux new -s shared")])]),t._v(" "),e("li",[e("p",[t._v("啟動 Django Runserver")])])]),t._v(" "),e("p",[t._v("2.1")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("cd ~/workspace/Python/django_001/\n")])])]),e("p",[t._v("2.2")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("pipenv shell\n")])])]),e("p",[t._v("2.3")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("./manage.py runserver\n")])])]),e("p",[t._v("2.4")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("tmux a -t Django\n")])])]),e("p",[t._v("2.5 進入下方監察視窗\n切換 Tmux Window 到下方，用於專門監察 shared session 狀態之視窗。")]),t._v(" "),e("p",[t._v("2.6")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("tmux a -t shared\n")])])]),e("h1",{attrs:{id:"常用指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[t._v("#")]),t._v(" 常用指令")]),t._v(" "),e("h2",{attrs:{id:"server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" Server")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("tmux kill-server\n")])])]),e("h2",{attrs:{id:"session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[t._v("#")]),t._v(" Session")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("tmux ls\n\n\n\ntmux new -s <SessionName>\n\n\n\ntmux attach -t 0\n\n\n\ntmux a -t <SessionName>\n\n\n\ntmux rename-session -t <TerminalNo> <SessionName>\n")])])]),e("p",[t._v("【註】： （1）先進入 Session；（2）按鍵"),e("Prefix",[t._v(" + $；（3）輸入 Session Name")])],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("tmux kill-session -t <TerminalNo>\n\n\n\ntmux source-file <SourceFile>\n")])])]),e("p",[t._v("Default： ~/.tmux.conf")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("tmux ls\n")])])]),e("h2",{attrs:{id:"window"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" Window")]),t._v(" "),e("ul",[e("li",[t._v("將 window 移至左方")])]),t._v(" "),e("Prefix",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(":swap-window -t -1\n")])])]),e("ul",[e("li",[t._v("將 window 移至右方")])]),t._v(" "),e("Prefix",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(":swap-window -t +1\n")])])]),e("ul",[e("li",[e("p",[t._v("設成快速鍵（~/.tmux.conf）")]),t._v(" "),e("p",[t._v("bind-key S-Left swap-window -t -1\nbind-key S-Right swap-window -t +1")])])]),t._v(" "),e("h1",{attrs:{id:"tmux-常用快速鍵"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux-常用快速鍵"}},[t._v("#")]),t._v(" tmux 常用快速鍵")]),t._v(" "),e("p",[t._v("預設 〔prefix〕快速鍵為： <Ctrl+B> ；但多數人會將之變更成 <Ctrl+A>")]),t._v(" "),e("h2",{attrs:{id:"session-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-2"}},[t._v("#")]),t._v(" Session")]),t._v(" "),e("p",[t._v("斷開 Session ： [prefix] D")]),t._v(" "),e("p",[t._v("【註】：是 D ；而非 d 。")]),t._v(" "),e("h2",{attrs:{id:"視窗-window"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#視窗-window"}},[t._v("#")]),t._v(" 視窗（Window）")]),t._v(" "),e("p",[e("strong",[t._v("1. 開新視窗")]),t._v("\n[prefix] c")]),t._v(" "),e("p",[e("strong",[t._v("2. 切換到上/下一個視窗")]),t._v("\n[prefix] p   (上)\n[prefix] n   (下)")]),t._v(" "),e("p",[e("strong",[t._v("3. 切換至指定視窗 (數字鍵/列表)")]),t._v("\n[prefix] [0-9]   (數字鍵)\n[prefix] w   (列表選項)")]),t._v(" "),e("p",[e("strong",[t._v("4. 重新命名視窗")]),t._v("\n[prefix] ,")]),t._v(" "),e("p",[e("strong",[t._v("5. 修改視窗編號 - 修改視窗順序")]),t._v("\n[prefix] .")]),t._v(" "),e("p",[e("strong",[t._v("6. 關閉視窗")]),t._v("\n[prefix] &")]),t._v(" "),e("h2",{attrs:{id:"窗格-pane"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#窗格-pane"}},[t._v("#")]),t._v(" 窗格（Pane）")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v('<Ctrl+b> + "')]),t._v("：進行"),e("strong",[t._v("水平")]),t._v("分割")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("<Ctrl+b> + %")]),t._v("：進行"),e("strong",[t._v("垂直")]),t._v("分割")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("<Ctrl+b> + <方向鍵>")]),t._v("：移動到其他 pane")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("<Ctrl+b> + <Space>")]),t._v("：切換佈局")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("<Ctrl+b> + x")]),t._v("：關閉目前的 pane")])])]),t._v(" "),e("h1",{attrs:{id:"儲存與啟用環境設定檔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#儲存與啟用環境設定檔"}},[t._v("#")]),t._v(" 儲存與啟用環境設定檔")]),t._v(" "),e("h2",{attrs:{id:"儲存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#儲存"}},[t._v("#")]),t._v(" 儲存")]),t._v(" "),e("Prefix",[t._v(" + "),e("C-S",[e("h2",{attrs:{id:"啟用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#啟用"}},[t._v("#")]),t._v(" 啟用")]),t._v(" "),e("p",[t._v("tmux")]),t._v(" "),e("Prefix",[t._v(" + "),e("C-R",[e("h1",{attrs:{id:"tmux-擴充套件-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux-擴充套件-plugin"}},[t._v("#")]),t._v(" Tmux 擴充套件（Plugin）")]),t._v(" "),e("p",[t._v("Ref： https://github.com/tmux-plugins/tpm")]),t._v(" "),e("p",[e("strong",[t._v("(1) 安裝  TPM (Tmux Plugins Manager)")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("$ git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm\n")])])]),e("p",[e("strong",[t._v("(2) 設定 TPM (Tmux Plugin Manager)")])]),t._v(" "),e("p",[t._v("編輯 TMUX 設定檔（~/.tmux.conf）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("# List of plugins\nset -g @plugin 'tmux-plugins/tpm'\nset -g @plugin 'tmux-plugins/tmux-sensible'\n\n# Other plugins:\n# set -g @plugin 'github_username/plugin_name'\n# set -g @plugin 'git@github.com/user/plugin'\n# set -g @plugin 'git@bitbucket.com/user/plugin'\n......\n......\n# Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)\nrun -b '~/.tmux/plugins/tpm/tpm'\n")])])]),e("p",[e("strong",[t._v("(3) 啟用 TPM")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("$ tmux source ~/.tmux.conf\n")])])]),e("p",[e("strong",[t._v("(4) 安裝 tmux plugin")])]),t._v(" "),e("p",[t._v("先在 ~/.tmux.conf 設定檔加入")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("set -g @plugin '來源處'\n")])])]),e("p",[t._v("按安裝鍵\n"),e("Prefix",[e("I")],1)],1),t._v(" "),e("h1",{attrs:{id:"使用-theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-theme"}},[t._v("#")]),t._v(" 使用 Theme")]),t._v(" "),e("p",[t._v("OneDark Tmux Theme")]),t._v(" "),e("p",[t._v("https://github.com/odedlaz/tmux-onedark-theme/blob/master/README.md")]),t._v(" "),e("p",[t._v("https://github.com/gpakosz/.tmux")]),t._v(" "),e("h1",{attrs:{id:"使用-true-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-true-color"}},[t._v("#")]),t._v(" 使用 True Color")]),t._v(" "),e("p",[t._v("| 1. Edit .tmux.conf"),e("br"),t._v("    # ！！！importent！！！ 开启24 bit color 其他方式都无效"),e("br"),t._v('    set -g default-terminal "tmux-256color"'),e("br"),t._v('    set -ga terminal-overrides ",'),e("em",[t._v("256col")]),t._v(':Tc"'),e("br"),t._v("2. Edit: .vimrc"),e("br"),t._v('    " Enable true color 启用终端24位色'),e("br"),t._v("    if exists('+termguicolors')"),e("br"),t._v('      let &t_8f = "<Esc>[38;2;%lu;%lu;%lum"'),e("br"),t._v('      let &t_8b = "<Esc>[48;2;%lu;%lu;%lum"'),e("br"),t._v("      set termguicolors"),e("br"),t._v("    endif |")]),t._v(" "),e("h1",{attrs:{id:"設定檔-tmux-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定檔-tmux-conf"}},[t._v("#")]),t._v(" 設定檔 ～/.tmux.conf")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("set = set-option")])]),t._v(" "),e("li",[e("p",[t._v("setw = set-window-option")])]),t._v(" "),e("li",[e("p",[t._v("send = send-keys")])]),t._v(" "),e("li",[e("p",[t._v("bind = bind-key")]),t._v(" "),e("h1",{attrs:{id:"https-tmuxguide-readthedocs-io-en-latest-tmux-tmux-html-tmux-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https-tmuxguide-readthedocs-io-en-latest-tmux-tmux-html-tmux-conf"}},[t._v("#")]),t._v(" https://tmuxguide.readthedocs.io/en/latest/tmux/tmux.html#tmux-conf")]),t._v(" "),e("p",[t._v("#========================================================")]),t._v(" "),e("h1",{attrs:{id:"tmux-plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux-plugins"}},[t._v("#")]),t._v(" Tmux Plugins")]),t._v(" "),e("p",[t._v("#========================================================")]),t._v(" "),e("h1",{attrs:{id:"tmux-plugin-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux-plugin-manager"}},[t._v("#")]),t._v(" Tmux Plugin Manager")]),t._v(" "),e("p",[t._v('if "test ! -d ~/.tmux/plugins/tpm" '),e("br"),t._v("\n\"run 'git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm && ~/.tmux/plugins/tpm/bin/install_plugins'\"")]),t._v(" "),e("h1",{attrs:{id:"list-of-plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-of-plugins"}},[t._v("#")]),t._v(" List of plugins")]),t._v(" "),e("p",[t._v("set -g @plugin 'tmux-plugins/tpm'\nset -g @plugin 'tmux-plugins/tmux-sensible'")]),t._v(" "),e("h1",{attrs:{id:"session-save-and-restore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-save-and-restore"}},[t._v("#")]),t._v(" Session save and restore")]),t._v(" "),e("h1",{attrs:{id:"continuous-saving-of-tmux-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#continuous-saving-of-tmux-environment"}},[t._v("#")]),t._v(" - continuous saving of tmux environment")]),t._v(" "),e("h1",{attrs:{id:"automatic-tmux-start-when-computer-server-is-turned-on"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatic-tmux-start-when-computer-server-is-turned-on"}},[t._v("#")]),t._v(" - automatic tmux start when computer/server is turned on")]),t._v(" "),e("h1",{attrs:{id:"automatic-restore-when-tmux-is-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatic-restore-when-tmux-is-started"}},[t._v("#")]),t._v(" - automatic restore when tmux is started")]),t._v(" "),e("p",[t._v("set -g @plugin 'tmux-plugins/tmux-resurrect'\nset -g @plugin 'tmux-plugins/tmux-continuum'")]),t._v(" "),e("p",[t._v("set -g @plugin 'tmux-plugins/tmux-yank'\nset -g default-command \"reattach-to-user-namespace -l $SHELL\"")]),t._v(" "),e("p",[t._v("set -g @resurrect-strategy-vim 'session'")]),t._v(" "),e("h1",{attrs:{id:"other-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-examples"}},[t._v("#")]),t._v(" Other examples:")]),t._v(" "),e("h1",{attrs:{id:"set-g-plugin-github-username-plugin-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-g-plugin-github-username-plugin-name"}},[t._v("#")]),t._v(" set -g @plugin 'github_username/plugin_name'")]),t._v(" "),e("h1",{attrs:{id:"set-g-plugin-git-github-com-user-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-g-plugin-git-github-com-user-plugin"}},[t._v("#")]),t._v(" set -g @plugin 'git@github.com/user/plugin'")]),t._v(" "),e("h1",{attrs:{id:"set-g-plugin-git-bitbucket-com-user-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-g-plugin-git-bitbucket-com-user-plugin"}},[t._v("#")]),t._v(" set -g @plugin 'git@bitbucket.com/user/plugin'")]),t._v(" "),e("h1",{attrs:{id:"tmux-powerline-theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux-powerline-theme"}},[t._v("#")]),t._v(" Tmux Powerline theme")]),t._v(" "),e("p",[t._v("set -g @plugin 'jooize/tmux-powerline-theme'")]),t._v(" "),e("p",[t._v("#========================================================")]),t._v(" "),e("h1",{attrs:{id:"tmux-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux-configuration"}},[t._v("#")]),t._v(" Tmux Configuration")]),t._v(" "),e("p",[t._v("#========================================================")]),t._v(" "),e("h1",{attrs:{id:"unbind-default-prefix-and-set-it-to-ctrl-a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unbind-default-prefix-and-set-it-to-ctrl-a"}},[t._v("#")]),t._v(" unbind default prefix and set it to ctrl-a")]),t._v(" "),e("p",[t._v("set -g prefix C-t\nunbind C-b\nbind C-t send-prefix")]),t._v(" "),e("h1",{attrs:{id:"make-delay-shorter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make-delay-shorter"}},[t._v("#")]),t._v(" make delay shorter")]),t._v(" "),e("p",[t._v("set -sg escape-time 0")]),t._v(" "),e("h1",{attrs:{id:"automatic-restore-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatic-restore-session"}},[t._v("#")]),t._v(" Automatic restore session")]),t._v(" "),e("p",[t._v("set -g @continuum-restore 'on'")]),t._v(" "),e("h1",{attrs:{id:"history-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#history-size"}},[t._v("#")]),t._v(" history size")]),t._v(" "),e("p",[t._v("set -g history-limit 10000")]),t._v(" "),e("h1",{attrs:{id:"enable-mouse-support-for-switching-panes-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-mouse-support-for-switching-panes-windows"}},[t._v("#")]),t._v(" enable mouse support for switching panes/windows")]),t._v(" "),e("p",[t._v("set -g mouse on")]),t._v(" "),e("h3",{attrs:{id:"other-optimization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-optimization"}},[t._v("#")]),t._v(" other optimization")]),t._v(" "),e("h1",{attrs:{id:"display-things-in-256-colors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-things-in-256-colors"}},[t._v("#")]),t._v(" display things in 256 colors")]),t._v(" "),e("p",[t._v('set -g default-terminal "screen-256color"\nset -ga terminal-overrides ",xterm-256color:Tc"')]),t._v(" "),e("h1",{attrs:{id:"stop-auto-renaming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-auto-renaming"}},[t._v("#")]),t._v(" stop auto renaming")]),t._v(" "),e("p",[t._v("setw -g automatic-rename off\nset-option -g allow-rename off")]),t._v(" "),e("h1",{attrs:{id:"renumber-windows-sequentially-after-closing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#renumber-windows-sequentially-after-closing"}},[t._v("#")]),t._v(" renumber windows sequentially after closing")]),t._v(" "),e("p",[t._v("set -g renumber-windows on")]),t._v(" "),e("h1",{attrs:{id:"window-notifications-display-activity-on-other-window"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window-notifications-display-activity-on-other-window"}},[t._v("#")]),t._v(" window notifications; display activity on other window")]),t._v(" "),e("p",[t._v("setw -g monitor-activity on\nset -g visual-activity on")]),t._v(" "),e("h1",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),e("h1",{attrs:{id:"status-line"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status-line"}},[t._v("#")]),t._v(" Status Line")]),t._v(" "),e("h1",{attrs:{id:"-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])]),t._v(" "),e("h1",{attrs:{id:"status-line-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status-line-format"}},[t._v("#")]),t._v(" Status Line Format")]),t._v(" "),e("p",[t._v('set-window-option -g status-left ""\nset-window-option -g status-right "#[fg=white,bg=colour88] #S #[fg=colour231,bg=colour240] #H #[fg=black,bg=colour252,nobold] %b %d %a #[bold]%H:%M"')]),t._v(" "),e("h1",{attrs:{id:"default-status-bar-colors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-status-bar-colors"}},[t._v("#")]),t._v(" default status bar colors")]),t._v(" "),e("p",[t._v("set -g status-fg colour240\nset -g status-bg colour233")]),t._v(" "),e("h1",{attrs:{id:"default-window-title-colors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-window-title-colors"}},[t._v("#")]),t._v(" default window title colors")]),t._v(" "),e("p",[t._v("set-window-option -g window-status-style fg=colour220\nset-window-option -g window-status-style bg=default")]),t._v(" "),e("h1",{attrs:{id:"-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[t._v("#")])]),t._v(" "),e("h1",{attrs:{id:"status-bar-window-in-background-not-active"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status-bar-window-in-background-not-active"}},[t._v("#")]),t._v(" Status bar window in background (not active)")]),t._v(" "),e("h1",{attrs:{id:"-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[t._v("#")])]),t._v(" "),e("h1",{attrs:{id:"set-window-option-g-window-status-format-i-w"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-window-option-g-window-status-format-i-w"}},[t._v("#")]),t._v(' set-window-option -g window-status-format "#I #W "')]),t._v(" "),e("p",[t._v("set-window-option -g window-status-style dim\nset-window-option -g window-status-style bg=colour240\nset-window-option -g window-status-style fg=colour231")]),t._v(" "),e("h1",{attrs:{id:"-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[t._v("#")])]),t._v(" "),e("h1",{attrs:{id:"status-bar-window-currently-active"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status-bar-window-currently-active"}},[t._v("#")]),t._v(" Status bar window currently active")]),t._v(" "),e("h1",{attrs:{id:"-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-6"}},[t._v("#")])]),t._v(" "),e("h1",{attrs:{id:"set-window-option-g-window-status-current-format-i-w"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-window-option-g-window-status-current-format-i-w"}},[t._v("#")]),t._v(' set-window-option -g window-status-current-format "#I #W "')]),t._v(" "),e("h1",{attrs:{id:"active-window-title-colors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#active-window-title-colors"}},[t._v("#")]),t._v(" active window title colors")]),t._v(" "),e("p",[t._v("set-window-option -g window-status-current-style bright\nset-window-option -g window-status-current-style bg=colour68\nset-window-option -g window-status-current-style fg=colour220")]),t._v(" "),e("p",[t._v("#========================================================")]),t._v(" "),e("h1",{attrs:{id:"key-bindings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-bindings"}},[t._v("#")]),t._v(" Key bindings")]),t._v(" "),e("p",[t._v("#========================================================")]),t._v(" "),e("h1",{attrs:{id:"reload-config-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reload-config-file"}},[t._v("#")]),t._v(" reload config file")]),t._v(" "),e("p",[t._v('bind r source-file ~/.tmux.conf ; display-message "Config reloaded..."')]),t._v(" "),e("h1",{attrs:{id:"quickly-open-a-new-window"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quickly-open-a-new-window"}},[t._v("#")]),t._v(" quickly open a new window")]),t._v(" "),e("p",[t._v("bind N new-window")]),t._v(" "),e("h1",{attrs:{id:"synchronize-all-panes-in-a-window"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronize-all-panes-in-a-window"}},[t._v("#")]),t._v(" synchronize all panes in a window")]),t._v(" "),e("p",[t._v("bind y setw synchronize-panes")]),t._v(" "),e("h1",{attrs:{id:"splits-the-current-window-vertically-and-splits-it-horizontally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#splits-the-current-window-vertically-and-splits-it-horizontally"}},[t._v("#")]),t._v(' "|" splits the current window vertically, and "-" splits it horizontally')]),t._v(" "),e("p",[t._v("unbind %\nbind | split-window -h\nbind - split-window -v")]),t._v(" "),e("h1",{attrs:{id:"pane-navigation-vim-like"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pane-navigation-vim-like"}},[t._v("#")]),t._v(" Pane navigation (vim-like)")]),t._v(" "),e("p",[t._v("bind h select-pane -L\nbind j select-pane -D\nbind k select-pane -U\nbind l select-pane -R")]),t._v(" "),e("h1",{attrs:{id:"pane-resizing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pane-resizing"}},[t._v("#")]),t._v(" Pane resizing")]),t._v(" "),e("p",[t._v("bind -r Left  resize-pane -L 4\nbind -r Down  resize-pane -D 4\nbind -r Up    resize-pane -U 4\nbind -r Right resize-pane -R 4")]),t._v(" "),e("h4",{attrs:{id:"copy-mode-vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy-mode-vim"}},[t._v("#")]),t._v(" copy mode : vim")]),t._v(" "),e("h1",{attrs:{id:"set-vi-mode-for-copy-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-vi-mode-for-copy-mode"}},[t._v("#")]),t._v(" set vi mode for copy mode")]),t._v(" "),e("p",[t._v("setw -g mode-keys vi")]),t._v(" "),e("h1",{attrs:{id:"setup-v-to-begin-selection-as-in-vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-v-to-begin-selection-as-in-vim"}},[t._v("#")]),t._v(" Setup 'v' to begin selection as in Vim")]),t._v(" "),e("h1",{attrs:{id:"bind-key-t-copy-mode-vi-v-send-keys-x-begin-selection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bind-key-t-copy-mode-vi-v-send-keys-x-begin-selection"}},[t._v("#")]),t._v(" bind-key -T copy-mode-vi 'v' send-keys -X begin-selection")]),t._v(" "),e("p",[t._v("bind -T copy-mode-vi 'v' send -X begin-selection")]),t._v(" "),e("h1",{attrs:{id:"copy-to-clipboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy-to-clipboard"}},[t._v("#")]),t._v(" Copy to clipboard")]),t._v(" "),e("h1",{attrs:{id:"bind-key-t-copy-mode-vi-y-send-keys-x-copy-pipe-reattach-to-user-namespace-pbcopy-send-x-clear-selection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bind-key-t-copy-mode-vi-y-send-keys-x-copy-pipe-reattach-to-user-namespace-pbcopy-send-x-clear-selection"}},[t._v("#")]),t._v(" bind-key -T copy-mode-vi 'y' send-keys -X copy-pipe \"reattach-to-user-namespace pbcopy\" ; send -X clear-selection")]),t._v(" "),e("p",[t._v("bind -T copy-mode-vi 'y' send -X copy-pipe-and-cancel \"reattach-to-user-namespace pbcopy\"")]),t._v(" "),e("h1",{attrs:{id:"update-default-binding-of-enter-to-also-use-copy-pipe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-default-binding-of-enter-to-also-use-copy-pipe"}},[t._v("#")]),t._v(" Update default binding of Enter` to also use copy-pipe")]),t._v(" "),e("h1",{attrs:{id:"bind-key-t-copy-mode-vi-enter-send-keys-x-copy-pipe-reattach-to-user-namespace-pbcopy-send-x-clear-selection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bind-key-t-copy-mode-vi-enter-send-keys-x-copy-pipe-reattach-to-user-namespace-pbcopy-send-x-clear-selection"}},[t._v("#")]),t._v(' bind-key -T copy-mode-vi Enter send-keys -X copy-pipe "reattach-to-user-namespace pbcopy" ; send -X clear-selection')]),t._v(" "),e("p",[t._v('unbind -T copy-mode-vi Enter\nbind -T copy-mode-vi Enter send -X copy-pipe-and-cancel "reattach-to-user-namespace pbcopy"')]),t._v(" "),e("h1",{attrs:{id:"initialize-tmux-plugin-manager-keep-this-line-at-the-very-bottom-of-tmux-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initialize-tmux-plugin-manager-keep-this-line-at-the-very-bottom-of-tmux-conf"}},[t._v("#")]),t._v(" Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)")]),t._v(" "),e("p",[t._v("run -b '~/.tmux/plugins/tpm/tpm'")])])]),t._v(" "),e("h1",{attrs:{id:"綜合應用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#綜合應用"}},[t._v("#")]),t._v(" 綜合應用")]),t._v(" "),e("h2",{attrs:{id:"查詢版本號"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查詢版本號"}},[t._v("#")]),t._v(" 查詢版本號")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("tmux -V\n")])])]),e("h2",{attrs:{id:"共用剪下-貼上-剪貼簿"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共用剪下-貼上-剪貼簿"}},[t._v("#")]),t._v(" 共用剪下／貼上（剪貼簿）")]),t._v(" "),e("p",[t._v("電腦的業系統，擁有被稱作：「剪貼簿」的「暫存區」（Buffers），當有 Ctrl＋C （Copy）指令執行時，則有資料被複製，置入此前貼簿的暫存區。")]),t._v(" "),e("p",[t._v("然而，Tmux 本身也有自用，獨立的「暫存區」；可稱作： tmux buffer 。")]),t._v(" "),e("p",[t._v("以下操作說明：在 tmux session 中，如何將資料「複製」到 tmux buffer ，以及作業系統的「剪貼簿」。")]),t._v(" "),e("h2",{attrs:{id:"tmux-copy-paste-the-defaults"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux-copy-paste-the-defaults"}},[t._v("#")]),t._v(" Tmux copy-paste - the defaults")]),t._v(" "),e("p",[t._v("The defaults are slighly involved, so this section is purely for informational purposes, and shouldn’t be memorized. Skipping this section is perfectly okay.")]),t._v(" "),e("ol",[e("li",[t._v("Enter ‘copy mode’ by pressing "),e("code",[t._v("CTRL")]),t._v("+"),e("code",[t._v("b")]),t._v(", "),e("code",[t._v("[")]),t._v(".")]),t._v(" "),e("li",[t._v("Use the arrow keys to go to the position from where you want to start copying. Press "),e("code",[t._v("CTRL")]),t._v("+"),e("code",[t._v("SPACE")]),t._v(" to start copying.")]),t._v(" "),e("li",[t._v("Use arrow keys to go to the end of text you want to copy. Press "),e("code",[t._v("ALT")]),t._v("+"),e("code",[t._v("w")]),t._v(" or "),e("code",[t._v("CTRL")]),t._v("+"),e("code",[t._v("w")]),t._v(" to copy into Tmux buffer.")]),t._v(" "),e("li",[t._v("Press "),e("code",[t._v("CTRL")]),t._v("+"),e("code",[t._v("b")]),t._v(", "),e("code",[t._v("]")]),t._v(" to paste in a possibly different Tmux pane/window.")])]),t._v(" "),e("h2",{attrs:{id:"建立-ide-環境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立-ide-環境"}},[t._v("#")]),t._v(" 建立 IDE 環境")]),t._v(" "),e("p",[t._v("~/bin/ide")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("#!/usr/local/bin/bash\ntmux split-window -v -p 30\ntmux split-window -h -p 66\ntmux split-window -h -p 50\n")])])]),e("Prefix",[t._v(" z → 開／關下排的 Terminal 視窗\n"),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_222A3E3514C6A19893F02B76011A189C8D73F73BCEF3CD58EDA27F29E47D4D03_1574342920308_image.png",alt:""}})]),t._v(" "),e("h1",{attrs:{id:"參考文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#參考文件"}},[t._v("#")]),t._v(" 參考文件")]),t._v(" "),e("h2",{attrs:{id:"官網文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官網文件"}},[t._v("#")]),t._v(" 官網文件：")]),t._v(" "),e("p",[t._v("https://tmuxguide.readthedocs.io/en/latest/tmux/tmux.html#tmux-conf")]),t._v(" "),e("h2",{attrs:{id:"教材"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#教材"}},[t._v("#")]),t._v(" 教材")]),t._v(" "),e("p",[t._v("https://iter01.com/76932.html")]),t._v(" "),e("h2",{attrs:{id:"如何在-macos-設定-copy-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何在-macos-設定-copy-mode"}},[t._v("#")]),t._v(" 如何在 macOS 設定 Copy Mode")]),t._v(" "),e("p",[t._v("https://thoughtbot.com/blog/tmux-copy-paste-on-os-x-a-better-future")]),t._v(" "),e("p",[t._v("https://blog.inkdrop.info/vscode-like-environment-with-vim-tmux-4c2bfe17d31e")]),t._v(" "),e("p",[t._v("https://www.youtube.com/watch?v=sSOfr2MtRU8&")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://youtu.be/sSOfr2MtRU8",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://youtu.be/sSOfr2MtRU8"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("https://www.youtube.com/watch?v=gnupOrSEikQ&")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://youtu.be/gnupOrSEikQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://youtu.be/gnupOrSEikQ"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"tmux-速簡指引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux-速簡指引"}},[t._v("#")]),t._v(" tmux 速簡指引")]),t._v(" "),e("p",[t._v("https://gist.github.com/MohamedAlaa/2961058")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://gist.github.com/MohamedAlaa/2961058",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gist.github.com/MohamedAlaa/2961058"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("https://gist.github.com/andreyvit/2921703")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://gist.github.com/andreyvit/2921703",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gist.github.com/andreyvit/2921703"),e("OutboundLink")],1)]),t._v(" "),e("h1",{attrs:{id:"在-macbookpro-2018-安裝-tmux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-macbookpro-2018-安裝-tmux"}},[t._v("#")]),t._v(" 在 MacBookPro-2018 安裝 tmux")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('brew install tmux\n...\n==> openssl@1.1\nA CA file has been bootstrapped using certificates from the system\nkeychain. To add additional certificates, place .pem files in\n  /usr/local/etc/openssl@1.1/certs\n\nand run\n  /usr/local/opt/openssl@1.1/bin/c_rehash\n\nopenssl@1.1 is keg-only, which means it was not symlinked into /usr/local,\nbecause macOS provides LibreSSL.\n\nIf you need to have openssl@1.1 first in your PATH run:\n  echo \'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"\' >> ~/.zshrc\n\nFor compilers to find openssl@1.1 you may need to set:\n  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"\n  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"\n\n==> tmux\nExample configuration has been installed to:\n  /usr/local/opt/tmux/share/tmux\n\nBash completion has been installed to:\n  /usr/local/etc/bash_completion.d\n\n\n\n$ cat /usr/local/opt/tmux/share/tmux/example_tmux.conf                               \n#\n# Example .tmux.conf\n#\n# By Nicholas Marriott. Public domain.\n#\n\n# Some tweaks to the status line\nset -g status-right "%H:%M"\nset -g window-status-current-style "underscore"\n\n# If running inside tmux ($TMUX is set), then change the status line to red\n%if #{TMUX}\nset -g status-bg red\n%endif\n\n# Enable RGB colour if running in xterm(1)\nset-option -sa terminal-overrides ",xterm*:Tc"\n\n# Change the default $TERM to tmux-256color\nset -g default-terminal "tmux-256color"\n\n# No bells at all\nset -g bell-action none\n\n# Keep windows around after they exit\nset -g remain-on-exit on\n\n# Change the prefix key to C-a\nset -g prefix C-a\nunbind C-b\nbind C-a send-prefix\n\n# Turn the mouse on, but without copy mode dragging\nset -g mouse on\nunbind -n MouseDrag1Pane\nunbind -Tcopy-mode MouseDrag1Pane\n\n# Some extra key bindings to select higher numbered windows\nbind F1 selectw -t:10\nbind F2 selectw -t:11\nbind F3 selectw -t:12\nbind F4 selectw -t:13\nbind F5 selectw -t:14\nbind F6 selectw -t:15\nbind F7 selectw -t:16\nbind F8 selectw -t:17\nbind F9 selectw -t:18\nbind F10 selectw -t:19\nbind F11 selectw -t:20\nbind F12 selectw -t:21\n\n# A key to toggle between smallest and largest sizes if a window is visible in\n# multiple places\nbind F set -w window-size\n\n# Keys to toggle monitoring activity in a window and the synchronize-panes option\nbind m set monitor-activity\nbind y set synchronize-panes\\; display \'synchronize-panes #{?synchronize-panes,on,off}\'\n\n# Create a single default session - because a session is created here, tmux\n# should be started with "tmux attach" rather than "tmux new"\nnew -d -s0 -nirssi \'exec irssi\'\nset -t0:0 monitor-activity on\nset  -t0:0 aggressive-resize on\nneww -d -ntodo \'exec emacs ~/TODO\'\nsetw -t0:1 aggressive-resize on\nneww -d -nmutt \'exec mutt\'\nsetw -t0:2 aggressive-resize on\nneww -d\nneww -d\nneww -d\n')])])])])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);
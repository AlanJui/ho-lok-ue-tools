(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{408:function(e,n,t){"use strict";t.r(n);var o=t(10),s=Object(o.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"升級到ubuntu-20-04"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#升級到ubuntu-20-04"}},[e._v("#")]),e._v(" 升級到Ubuntu 20.04")]),e._v(" "),n("p",[e._v("如何自 Ubuntu 18.04 升級至 20.04 。")]),e._v(" "),n("h1",{attrs:{id:"升級作業"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#升級作業"}},[e._v("#")]),e._v(" 升級作業")]),e._v(" "),n("p",[e._v("https://www.linuxtechi.com/upgrade-ubuntu-18-04-lts-to-ubuntu-20-04-lts/")]),e._v(" "),n("h2",{attrs:{id:"檢驗作業"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#檢驗作業"}},[e._v("#")]),e._v(" 檢驗作業")]),e._v(" "),n("p",[e._v("https://www.omgubuntu.co.uk/2020/04/how-to-upgrade-to-ubuntu-20-04")]),e._v(" "),n("h2",{attrs:{id:"升級作業-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#升級作業-2"}},[e._v("#")]),e._v(" 升級作業")]),e._v(" "),n("p",[e._v("https://www.linuxtechi.com/upgrade-ubuntu-18-04-lts-to-ubuntu-20-04-lts/")]),e._v(" "),n("p",[e._v("升級過程會暫停及確認的地方")]),e._v(" "),n("ul",[n("li",[e._v("第三方軟體套件在升級過程被停用")]),e._v(" "),n("li",[e._v("準備好要下載軟體套件及執行升級作業時（65個不再被 Canonical 支援；將移除 66 個；將安裝 491 個；將升級 2601 個。下載工作完成後，安裝程序便啟動，升級作業再也無法取消）\n按【y】【Enter】")])]),e._v(" "),n("h1",{attrs:{id:"完成升級後"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#完成升級後"}},[e._v("#")]),e._v(" 完成升級後")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("安裝 RIME中文輸入法\nhttps://github.com/rime/home/wiki/RimeWithIBus")])]),e._v(" "),n("li",[n("p",[e._v("更新 LibreOffice  7.0\nhttps://wiki.documentfoundation.org/Documentation/Install/Linux")])]),e._v(" "),n("li",[n("p",[e._v("清松手寫中文字體\nhttps://free.com.tw/jasonwriting-free-font/")])]),e._v(" "),n("li",[n("p",[e._v("TimeShift\nhttps://linuxhint.com/timeshift_linux_mint_19_usb/\nhttps://www.fosslinux.com/34377/how-to-backup-and-restore-ubuntu-with-timeshift.htm")]),e._v(" "),n("p",[e._v("https://www.linuxtechi.com/timeshift-backup-restore-ubuntu-linux/")])]),e._v(" "),n("li",[n("p",[e._v("Back In Time\nhttps://github.com/bit-team/backintime")])]),e._v(" "),n("li",[n("p",[e._v("Chomre\nhttps://linuxconfig.org/how-to-install-google-chrome-web-browser-on-ubuntu-20-04-focal-fossa")])]),e._v(" "),n("li",[n("p",[e._v("GParted\nhttps://techpiezo.com/linux/install-gparted-in-ubuntu-20-04-lts/")])]),e._v(" "),n("li",[n("p",[e._v("升級後應有的調整\nhttps://kknews.cc/zh-tw/code/m9gp26g.html")])])]),e._v(" "),n("p",[e._v("Docker on Ubuntu 20.04")]),e._v(" "),n("p",[e._v("https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04")]),e._v(" "),n("h2",{attrs:{id:"guake-terminal-pull-down-terminal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#guake-terminal-pull-down-terminal"}},[e._v("#")]),e._v(" Guake Terminal (Pull Down Terminal)")]),e._v(" "),n("p",[e._v("http://ubuntuhandbook.org/index.php/2020/02/install-guake-37-ubuntu-18-04/")]),e._v(" "),n("h2",{attrs:{id:"ssh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[e._v("#")]),e._v(" SSH")]),e._v(" "),n("p",[e._v("https://linuxconfig.org/enable-ssh-on-ubuntu-20-04-focal-fossa-linux")]),e._v(" "),n("h2",{attrs:{id:"obs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#obs"}},[e._v("#")]),e._v(" OBS")]),e._v(" "),n("p",[e._v("https://www.liquidweb.com/kb/how-to-install-obs-on-linux-windows-and-macos/")]),e._v(" "),n("h1",{attrs:{id:"backup-current-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#backup-current-system"}},[e._v("#")]),e._v(" Backup current system")]),e._v(" "),n("p",[e._v("https://www.chainnews.com/zh-hant/articles/802381694538.htm")]),e._v(" "),n("p",[e._v("https://www.linuxtechi.com/timeshift-backup-restore-ubuntu-linux/")]),e._v(" "),n("p",[e._v(".basrc")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("# ~/.bashrc: executed by bash(1) for non-login shells.\n# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)\n# for examples\n\n# If not running interactively, don't do anything\ncase $- in\n    *i*) ;;\n      *) return;;\nesac\n\n# don't put duplicate lines or lines starting with space in the history.\n# See bash(1) for more options\nHISTCONTROL=ignoreboth\n\n# append to the history file, don't overwrite it\nshopt -s histappend\n\n# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)\nHISTSIZE=1000\nHISTFILESIZE=2000\n\n# check the window size after each command and, if necessary,\n# update the values of LINES and COLUMNS.\nshopt -s checkwinsize\n\n# If set, the pattern \"**\" used in a pathname expansion context will\n# match all files and zero or more directories and subdirectories.\n#shopt -s globstar\n\n# make less more friendly for non-text input files, see lesspipe(1)\n[ -x /usr/bin/lesspipe ] && eval \"$(SHELL=/bin/sh lesspipe)\"\n\n# set variable identifying the chroot you work in (used in the prompt below)\nif [ -z \"${debian_chroot:-}\" ] && [ -r /etc/debian_chroot ]; then\n    debian_chroot=$(cat /etc/debian_chroot)\nfi\n\n# set a fancy prompt (non-color, unless we know we \"want\" color)\ncase \"$TERM\" in\n    xterm-color|*-256color) color_prompt=yes;;\nesac\n\n# uncomment for a colored prompt, if the terminal has the capability; turned\n# off by default to not distract the user: the focus in a terminal window\n# should be on the output of commands, not on the prompt\n#force_color_prompt=yes\n\nif [ -n \"$force_color_prompt\" ]; then\n    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then\n        # We have color support; assume it's compliant with Ecma-48\n        # (ISO/IEC-6429). (Lack of such support is extremely rare, and such\n        # a case would tend to support setf rather than setaf.)\n        color_prompt=yes\n    else\n        color_prompt=\n    fi\nfi\n\nif [ \"$color_prompt\" = yes ]; then\n    PS1='${debian_chroot:+($debian_chroot)}\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ '\nelse\n    PS1='${debian_chroot:+($debian_chroot)}\\u@\\h:\\w\\$ '\nfi\nunset color_prompt force_color_prompt\n\n# If this is an xterm set the title to user@host:dir\ncase \"$TERM\" in\nxterm*|rxvt*)\n    PS1=\"\\[\\e]0;${debian_chroot:+($debian_chroot)}\\u@\\h: \\w\\a\\]$PS1\"\n    ;;\n*)\n    ;;\nesac\n\n# enable color support of ls and also add handy aliases\nif [ -x /usr/bin/dircolors ]; then\n    test -r ~/.dircolors && eval \"$(dircolors -b ~/.dircolors)\" || eval \"$(dircolors -b)\"\n    alias ls='ls --color=auto'\n    #alias dir='dir --color=auto'\n    #alias vdir='vdir --color=auto'\n\n    alias grep='grep --color=auto'\n    alias fgrep='fgrep --color=auto'\n    alias egrep='egrep --color=auto'\nfi\n\n# colored GCC warnings and errors\n#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'\n\n# some more ls aliases\nalias ll='ls -alF'\nalias la='ls -A'\nalias l='ls -CF'\n\n# Add an \"alert\" alias for long running commands.  Use like so:\n#   sleep 10; alert\nalias alert='notify-send --urgency=low -i \"$([ $? = 0 ] && echo terminal || echo error)\" \"$(history|tail -n1|sed -e '\\''s/^\\s*[0-9]\\+\\s*//;s/[;&|]\\s*alert$//'\\'')\"'\n\n# Alias definitions.\n# You may want to put all your additions into a separate file like\n# ~/.bash_aliases, instead of adding them here directly.\n# See /usr/share/doc/bash-doc/examples in the bash-doc package.\n\nif [ -f ~/.bash_aliases ]; then\n    . ~/.bash_aliases\nfi\n\n# enable programmable completion features (you don't need to enable\n# this, if it's already enabled in /etc/bash.bashrc and /etc/profile\n# sources /etc/bash.bashrc).\nif ! shopt -oq posix; then\n  if [ -f /usr/share/bash-completion/bash_completion ]; then\n    . /usr/share/bash-completion/bash_completion\n  elif [ -f /etc/bash_completion ]; then\n    . /etc/bash_completion\n  fi\nfi\n")])])]),n("p",[e._v(".profile")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("# ~/.bashrc: executed by bash(1) for non-login shells.\n# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)\n# for examples\n\n# If not running interactively, don't do anything\ncase $- in\n    *i*) ;;\n      *) return;;\nesac\n\n# don't put duplicate lines or lines starting with space in the history.\n# See bash(1) for more options\nHISTCONTROL=ignoreboth\n\n# append to the history file, don't overwrite it\nshopt -s histappend\n\n# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)\nHISTSIZE=1000\nHISTFILESIZE=2000\n\n# check the window size after each command and, if necessary,\n# update the values of LINES and COLUMNS.\nshopt -s checkwinsize\n\n# If set, the pattern \"**\" used in a pathname expansion context will\n# match all files and zero or more directories and subdirectories.\n#shopt -s globstar\n\n# make less more friendly for non-text input files, see lesspipe(1)\n[ -x /usr/bin/lesspipe ] && eval \"$(SHELL=/bin/sh lesspipe)\"\n\n# set variable identifying the chroot you work in (used in the prompt below)\nif [ -z \"${debian_chroot:-}\" ] && [ -r /etc/debian_chroot ]; then\n    debian_chroot=$(cat /etc/debian_chroot)\nfi\n\n# set a fancy prompt (non-color, unless we know we \"want\" color)\ncase \"$TERM\" in\n    xterm-color|*-256color) color_prompt=yes;;\nesac\n\n# uncomment for a colored prompt, if the terminal has the capability; turned\n# off by default to not distract the user: the focus in a terminal window\n# should be on the output of commands, not on the prompt\n#force_color_prompt=yes\n\nif [ -n \"$force_color_prompt\" ]; then\n    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then\n        # We have color support; assume it's compliant with Ecma-48\n        # (ISO/IEC-6429). (Lack of such support is extremely rare, and such\n        # a case would tend to support setf rather than setaf.)\n        color_prompt=yes\n    else\n        color_prompt=\n    fi\nfi\n\nif [ \"$color_prompt\" = yes ]; then\n    PS1='${debian_chroot:+($debian_chroot)}\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ '\nelse\n    PS1='${debian_chroot:+($debian_chroot)}\\u@\\h:\\w\\$ '\nfi\nunset color_prompt force_color_prompt\n\n# If this is an xterm set the title to user@host:dir\ncase \"$TERM\" in\nxterm*|rxvt*)\n    PS1=\"\\[\\e]0;${debian_chroot:+($debian_chroot)}\\u@\\h: \\w\\a\\]$PS1\"\n    ;;\n*)\n    ;;\nesac\n\n# enable color support of ls and also add handy aliases\nif [ -x /usr/bin/dircolors ]; then\n    test -r ~/.dircolors && eval \"$(dircolors -b ~/.dircolors)\" || eval \"$(dircolors -b)\"\n    alias ls='ls --color=auto'\n    #alias dir='dir --color=auto'\n    #alias vdir='vdir --color=auto'\n\n    alias grep='grep --color=auto'\n    alias fgrep='fgrep --color=auto'\n    alias egrep='egrep --color=auto'\nfi\n\n# colored GCC warnings and errors\n#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'\n\n# some more ls aliases\nalias ll='ls -alF'\nalias la='ls -A'\nalias l='ls -CF'\n\n# Add an \"alert\" alias for long running commands.  Use like so:\n#   sleep 10; alert\nalias alert='notify-send --urgency=low -i \"$([ $? = 0 ] && echo terminal || echo error)\" \"$(history|tail -n1|sed -e '\\''s/^\\s*[0-9]\\+\\s*//;s/[;&|]\\s*alert$//'\\'')\"'\n\n# Alias definitions.\n# You may want to put all your additions into a separate file like\n# ~/.bash_aliases, instead of adding them here directly.\n# See /usr/share/doc/bash-doc/examples in the bash-doc package.\n\nif [ -f ~/.bash_aliases ]; then\n    . ~/.bash_aliases\nfi\n\n# enable programmable completion features (you don't need to enable\n# this, if it's already enabled in /etc/bash.bashrc and /etc/profile\n# sources /etc/bash.bashrc).\nif ! shopt -oq posix; then\n  if [ -f /usr/share/bash-completion/bash_completion ]; then\n    . /usr/share/bash-completion/bash_completion\n  elif [ -f /etc/bash_completion ]; then\n    . /etc/bash_completion\n  fi\nfi\n")])])]),n("p",[e._v(".bash_logout")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('# ~/.bash_logout: executed by bash(1) when login shell exits.\n\n# when leaving the console clear the screen to increase privacy\n\nif [ "$SHLVL" = 1 ]; then\n    [ -x /usr/bin/clear_console ] && /usr/bin/clear_console -q\nfi\n')])])]),n("p",[e._v("SSH Server\n/etc/systemd/resolved.conf")]),e._v(" "),n("p",[e._v("mime-support: /etc/mime.types")]),e._v(" "),n("p",[e._v("Nginx:")]),e._v(" "),n("ul",[n("li",[e._v("/etc/nginx.nginx.conf")]),e._v(" "),n("li",[e._v("/etc/nginx/sites-available/default")])]),e._v(" "),n("p",[e._v("s-nail: /etc/s-nail.rc")]),e._v(" "),n("p",[e._v("cron: /etc/crontab")]),e._v(" "),n("p",[e._v("phppgadmin: /etc/phppgadmin/config.inc.php")]),e._v(" "),n("p",[e._v("/etc/init.d/procps: /etc/sysctl.conf")]),e._v(" "),n("p",[e._v("dovecot:")]),e._v(" "),n("ul",[n("li",[e._v("/usr/share/dovecot/conf.d/10-logging.conf")]),e._v(" "),n("li",[e._v("/usr/share/dovecot/conf.d/10-mail.conf")]),e._v(" "),n("li",[e._v("/usr/share/dovecot/conf.d/10-master.conf")]),e._v(" "),n("li",[e._v("/usr/share/dovecot/conf.d/10-ssl.conf")])]),e._v(" "),n("p",[e._v("Samba Server: /etc/samba/smb.conf")]),e._v(" "),n("p",[e._v("Redis: /etc/redis/redis.conf")]),e._v(" "),n("p",[e._v("Bind:")]),e._v(" "),n("ul",[n("li",[e._v("/etc/bind/named.conf.default-zones")]),e._v(" "),n("li",[e._v("/etc/bind/named.conf.options")])]),e._v(" "),n("p",[e._v("Xrdp: /etc/xrdp/xrdp.ini")]),e._v(" "),n("p",[e._v("spamassassin:")]),e._v(" "),n("ul",[n("li",[e._v("/etc/cron.daily/spamassassin")]),e._v(" "),n("li",[e._v("/etc/spamassassin/local.cf")])]),e._v(" "),n("p",[e._v("ubuntu-release-upgrader-core: /etc/update-manager/release-upgrades")]),e._v(" "),n("h1",{attrs:{id:"參考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#參考"}},[e._v("#")]),e._v(" 參考")]),e._v(" "),n("p",[e._v("如何安裝 Ruby + RbEnv + Gem")]),e._v(" "),n("p",[e._v("https://linuxize.com/post/how-to-install-ruby-on-ubuntu-20-04/")]),e._v(" "),n("hr"),e._v(" "),n("h1",{attrs:{id:"異常排除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#異常排除"}},[e._v("#")]),e._v(" 異常排除")]),e._v(" "),n("p",[n("strong",[e._v("滑鼠拖曳功能消失（Drag and Drop）")])]),e._v(" "),n("p",[e._v("https://itsfoss.com/fix-drag-drop-ubuntu/")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("gsettings set org.gnome.nautilus.preferences use-experimental-views false\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);
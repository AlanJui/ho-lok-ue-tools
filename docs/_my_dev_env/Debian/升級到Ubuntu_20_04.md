# 升級到Ubuntu 20.04
如何自 Ubuntu 18.04 升級至 20.04 。


# 升級作業

https://www.linuxtechi.com/upgrade-ubuntu-18-04-lts-to-ubuntu-20-04-lts/


## 檢驗作業


https://www.omgubuntu.co.uk/2020/04/how-to-upgrade-to-ubuntu-20-04



## 升級作業

https://www.linuxtechi.com/upgrade-ubuntu-18-04-lts-to-ubuntu-20-04-lts/


升級過程會暫停及確認的地方

- 第三方軟體套件在升級過程被停用
- 準備好要下載軟體套件及執行升級作業時（65個不再被 Canonical 支援；將移除 66 個；將安裝 491 個；將升級 2601 個。下載工作完成後，安裝程序便啟動，升級作業再也無法取消）
    按【y】【Enter】


# 完成升級後


- 安裝 RIME中文輸入法
https://github.com/rime/home/wiki/RimeWithIBus

- 更新 LibreOffice  7.0
    https://wiki.documentfoundation.org/Documentation/Install/Linux
    
- 清松手寫中文字體
https://free.com.tw/jasonwriting-free-font/

- TimeShift
    https://linuxhint.com/timeshift_linux_mint_19_usb/
https://www.fosslinux.com/34377/how-to-backup-and-restore-ubuntu-with-timeshift.htm

    https://www.linuxtechi.com/timeshift-backup-restore-ubuntu-linux/
- Back In Time
https://github.com/bit-team/backintime

- Chomre
    https://linuxconfig.org/how-to-install-google-chrome-web-browser-on-ubuntu-20-04-focal-fossa
- GParted
    https://techpiezo.com/linux/install-gparted-in-ubuntu-20-04-lts/
- 升級後應有的調整
https://kknews.cc/zh-tw/code/m9gp26g.html



Docker on Ubuntu 20.04

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04




## Guake Terminal (Pull Down Terminal)

http://ubuntuhandbook.org/index.php/2020/02/install-guake-37-ubuntu-18-04/




## SSH

https://linuxconfig.org/enable-ssh-on-ubuntu-20-04-focal-fossa-linux





## OBS
https://www.liquidweb.com/kb/how-to-install-obs-on-linux-windows-and-macos/

# Backup current system



https://www.chainnews.com/zh-hant/articles/802381694538.htm


https://www.linuxtechi.com/timeshift-backup-restore-ubuntu-linux/


.basrc 

    # ~/.bashrc: executed by bash(1) for non-login shells.
    # see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
    # for examples
    
    # If not running interactively, don't do anything
    case $- in
        *i*) ;;
          *) return;;
    esac
    
    # don't put duplicate lines or lines starting with space in the history.
    # See bash(1) for more options
    HISTCONTROL=ignoreboth
    
    # append to the history file, don't overwrite it
    shopt -s histappend
    
    # for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
    HISTSIZE=1000
    HISTFILESIZE=2000
    
    # check the window size after each command and, if necessary,
    # update the values of LINES and COLUMNS.
    shopt -s checkwinsize
    
    # If set, the pattern "**" used in a pathname expansion context will
    # match all files and zero or more directories and subdirectories.
    #shopt -s globstar
    
    # make less more friendly for non-text input files, see lesspipe(1)
    [ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"
    
    # set variable identifying the chroot you work in (used in the prompt below)
    if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
        debian_chroot=$(cat /etc/debian_chroot)
    fi
    
    # set a fancy prompt (non-color, unless we know we "want" color)
    case "$TERM" in
        xterm-color|*-256color) color_prompt=yes;;
    esac
    
    # uncomment for a colored prompt, if the terminal has the capability; turned
    # off by default to not distract the user: the focus in a terminal window
    # should be on the output of commands, not on the prompt
    #force_color_prompt=yes
    
    if [ -n "$force_color_prompt" ]; then
        if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
            # We have color support; assume it's compliant with Ecma-48
            # (ISO/IEC-6429). (Lack of such support is extremely rare, and such
            # a case would tend to support setf rather than setaf.)
            color_prompt=yes
        else
            color_prompt=
        fi
    fi
    
    if [ "$color_prompt" = yes ]; then
        PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
    else
        PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
    fi
    unset color_prompt force_color_prompt
    
    # If this is an xterm set the title to user@host:dir
    case "$TERM" in
    xterm*|rxvt*)
        PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
        ;;
    *)
        ;;
    esac
    
    # enable color support of ls and also add handy aliases
    if [ -x /usr/bin/dircolors ]; then
        test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
        alias ls='ls --color=auto'
        #alias dir='dir --color=auto'
        #alias vdir='vdir --color=auto'
    
        alias grep='grep --color=auto'
        alias fgrep='fgrep --color=auto'
        alias egrep='egrep --color=auto'
    fi
    
    # colored GCC warnings and errors
    #export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'
    
    # some more ls aliases
    alias ll='ls -alF'
    alias la='ls -A'
    alias l='ls -CF'
    
    # Add an "alert" alias for long running commands.  Use like so:
    #   sleep 10; alert
    alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'
    
    # Alias definitions.
    # You may want to put all your additions into a separate file like
    # ~/.bash_aliases, instead of adding them here directly.
    # See /usr/share/doc/bash-doc/examples in the bash-doc package.
    
    if [ -f ~/.bash_aliases ]; then
        . ~/.bash_aliases
    fi
    
    # enable programmable completion features (you don't need to enable
    # this, if it's already enabled in /etc/bash.bashrc and /etc/profile
    # sources /etc/bash.bashrc).
    if ! shopt -oq posix; then
      if [ -f /usr/share/bash-completion/bash_completion ]; then
        . /usr/share/bash-completion/bash_completion
      elif [ -f /etc/bash_completion ]; then
        . /etc/bash_completion
      fi
    fi


.profile

    # ~/.bashrc: executed by bash(1) for non-login shells.
    # see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
    # for examples
    
    # If not running interactively, don't do anything
    case $- in
        *i*) ;;
          *) return;;
    esac
    
    # don't put duplicate lines or lines starting with space in the history.
    # See bash(1) for more options
    HISTCONTROL=ignoreboth
    
    # append to the history file, don't overwrite it
    shopt -s histappend
    
    # for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
    HISTSIZE=1000
    HISTFILESIZE=2000
    
    # check the window size after each command and, if necessary,
    # update the values of LINES and COLUMNS.
    shopt -s checkwinsize
    
    # If set, the pattern "**" used in a pathname expansion context will
    # match all files and zero or more directories and subdirectories.
    #shopt -s globstar
    
    # make less more friendly for non-text input files, see lesspipe(1)
    [ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"
    
    # set variable identifying the chroot you work in (used in the prompt below)
    if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
        debian_chroot=$(cat /etc/debian_chroot)
    fi
    
    # set a fancy prompt (non-color, unless we know we "want" color)
    case "$TERM" in
        xterm-color|*-256color) color_prompt=yes;;
    esac
    
    # uncomment for a colored prompt, if the terminal has the capability; turned
    # off by default to not distract the user: the focus in a terminal window
    # should be on the output of commands, not on the prompt
    #force_color_prompt=yes
    
    if [ -n "$force_color_prompt" ]; then
        if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
            # We have color support; assume it's compliant with Ecma-48
            # (ISO/IEC-6429). (Lack of such support is extremely rare, and such
            # a case would tend to support setf rather than setaf.)
            color_prompt=yes
        else
            color_prompt=
        fi
    fi
    
    if [ "$color_prompt" = yes ]; then
        PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
    else
        PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
    fi
    unset color_prompt force_color_prompt
    
    # If this is an xterm set the title to user@host:dir
    case "$TERM" in
    xterm*|rxvt*)
        PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
        ;;
    *)
        ;;
    esac
    
    # enable color support of ls and also add handy aliases
    if [ -x /usr/bin/dircolors ]; then
        test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
        alias ls='ls --color=auto'
        #alias dir='dir --color=auto'
        #alias vdir='vdir --color=auto'
    
        alias grep='grep --color=auto'
        alias fgrep='fgrep --color=auto'
        alias egrep='egrep --color=auto'
    fi
    
    # colored GCC warnings and errors
    #export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'
    
    # some more ls aliases
    alias ll='ls -alF'
    alias la='ls -A'
    alias l='ls -CF'
    
    # Add an "alert" alias for long running commands.  Use like so:
    #   sleep 10; alert
    alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'
    
    # Alias definitions.
    # You may want to put all your additions into a separate file like
    # ~/.bash_aliases, instead of adding them here directly.
    # See /usr/share/doc/bash-doc/examples in the bash-doc package.
    
    if [ -f ~/.bash_aliases ]; then
        . ~/.bash_aliases
    fi
    
    # enable programmable completion features (you don't need to enable
    # this, if it's already enabled in /etc/bash.bashrc and /etc/profile
    # sources /etc/bash.bashrc).
    if ! shopt -oq posix; then
      if [ -f /usr/share/bash-completion/bash_completion ]; then
        . /usr/share/bash-completion/bash_completion
      elif [ -f /etc/bash_completion ]; then
        . /etc/bash_completion
      fi
    fi


.bash_logout

    # ~/.bash_logout: executed by bash(1) when login shell exits.
    
    # when leaving the console clear the screen to increase privacy
    
    if [ "$SHLVL" = 1 ]; then
        [ -x /usr/bin/clear_console ] && /usr/bin/clear_console -q
    fi


SSH Server
/etc/systemd/resolved.conf

mime-support: /etc/mime.types

Nginx: 

- /etc/nginx.nginx.conf
- /etc/nginx/sites-available/default

s-nail: /etc/s-nail.rc

cron: /etc/crontab

phppgadmin: /etc/phppgadmin/config.inc.php

/etc/init.d/procps: /etc/sysctl.conf

dovecot: 

- /usr/share/dovecot/conf.d/10-logging.conf
- /usr/share/dovecot/conf.d/10-mail.conf
- /usr/share/dovecot/conf.d/10-master.conf
- /usr/share/dovecot/conf.d/10-ssl.conf

Samba Server: /etc/samba/smb.conf

Redis: /etc/redis/redis.conf

Bind: 

- /etc/bind/named.conf.default-zones
- /etc/bind/named.conf.options

Xrdp: /etc/xrdp/xrdp.ini

spamassassin: 

- /etc/cron.daily/spamassassin
- /etc/spamassassin/local.cf

ubuntu-release-upgrader-core: /etc/update-manager/release-upgrades



# 參考

如何安裝 Ruby + RbEnv + Gem

https://linuxize.com/post/how-to-install-ruby-on-ubuntu-20-04/




----------
# 異常排除

**滑鼠拖曳功能消失（Drag and Drop）**

https://itsfoss.com/fix-drag-drop-ubuntu/



    gsettings set org.gnome.nautilus.preferences use-experimental-views false


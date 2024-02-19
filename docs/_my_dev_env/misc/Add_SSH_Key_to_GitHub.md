---
sidebar: auto
tags: ["SSH", "GitHub", "macOS", "Ubuntu", "Debian"]
---

# Add SSH Key to GitHub

# macOS

## 1. Generating a new SSH key

    $ ssh-keygen -t ed25519 -C "alanjui.1960@gmail.com"

## 2. Adding SSH key to the ssh-agent

**(1) Start the ssh-agent in the background.**

    $ eval "$(ssh-agent -s)"

**(2) If you're using macOS Sierra 10.12.2 or later, you will need to modify your** `**~/.ssh/config**` **file to automatically load keys into the ssh-agent and store passphrases in your keychain.**

    vim ~/.ssh/config


    Host *
      AddKeysToAgent yes
      UseKeychain yes
      IdentityFile ~/.ssh/id_ed25519

**(3) Add your SSH private key to the ssh-agent and store your passphrase in the keychain.**

    $ ssh-add -K ~/.ssh/id_ed25519

## 3. Add the SSH key to GitHub account

    $ pbcopy < ~/.ssh/id_ed25519.pub

---

# Linux

## 1. Generating a new SSH key

    $ ssh-keygen -t ed25519 -C "alanjui.1960@gmail.com"

## 2. Adding SSH key to the ssh-agent

**Start the ssh-agent in the background.**

    $ eval $(ssh-agent -s)

## 3. Add the SSH key to GitHub account

- ArchLinux
  $ sudo pacman -S xclip
    $ xclip -selection clipboard < ~/.ssh/id_ed25519.pub

* Debian / Ubuntu
  $ sudo apt install xclip
    $ xclip -selection clipboard < ~/.ssh/id_ed25519.pub

---

## Clone Vim8

**下載 Vim 8 設定檔**

    git clone git@github.com:AlanJui/vim8.git ~/.vim

**下載 Terminal 用 Nerd Font**

Ref:

- https://webinstall.dev/nerdfont/
- https://ostechnix.com/install-nerd-fonts-to-add-glyphs-in-your-code-on-linux/

Easy way:

    curl -sS https://webinstall.dev/nerdfont | bash

Manually

    $ su -
    $ cd /usr/share/fonts/truetype/

    $ wget https://github.com/source-foundry/Hack/releases/download/v3.003/Hack-v3.003-ttf.zip
    $ unzip Hack-v3.003-ttf.zip



    $ fc-cache -f -v
    $ fc-list | grep "Hack"

**Install Terminal Color Scheme**

    bash -c  "$(wget -qO- https://git.io/vQgMr)"

Ref: https://mayccoll.github.io/Gogh/

**安裝 Plugin 相依之作業系統軟件**

    $ sudo apt install ripgrep


    $ sudo apt install fzf

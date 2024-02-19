# Ubuntu 18.04 安裝 macOS UI
【參考文件】：

https://github.com/Jonchun/ubuntu2macOS/blob/master/README.md




## Step 1

Install [Kinto](https://github.com/rbreaves/kinto). This converts/remaps alt→ctrl and alt→ctrl+shift in terminal applications. This lets you use hotkeys like cmd+c and cmd+v, but in Linux.


    juzhengzhong@SRV-01:~$ cd kinto/
    juzhengzhong@SRV-01:~/kinto$ python --version
    Python 3.7.3
    juzhengzhong@SRV-01:~/kinto$ ./setup.py 
    Xbindkeys, xdotool and IBus requirement is installed.
    
    Kinto - Type in Linux like it's a Mac.
    
        1. ❖  Windows 
        2. ⌘  Mac 
        3. ✇  Chromebook 
    
    Please enter your keyboard type (1 - 3) : 2
    
    1. Mac - hid driver (Recommended - Also supports Windows keyboards)
    Description: Standard Mac Keyboards with Apple driver
    2. Mac Only (VMs & non-official Apple keyboards)
    Description: Standard Mac Keyboards
    
    Please enter your keyboard config (1 - 2) : 1
    
    You have selected a keyboard config that needs the following command to be ran.
    
    echo '1' | sudo tee -a /sys/module/hid_apple/parameters/swap_opt_cmd
    echo 'options hid_apple swap_opt_cmd=1' | sudo tee -a /etc/modprobe.d/hid_apple.conf
    sudo update-initramfs -u -k all
    
    Would you like to run it now? (Will require sudo privileges. Will exit on No.) (Y/n) y
    tee: /sys/module/hid_apple/parameters/swap_opt_cmd: 沒有此一檔案或目錄
    1
    options hid_apple swap_opt_cmd=1
    update-initramfs: Generating /boot/initrd.img-4.15.0-91-generic
    update-initramfs: Generating /boot/initrd.img-4.15.0-88-generic
    './.xkb' -> '/home/juzhengzhong/.xkb/'
    './.xkb/symbols' -> '/home/juzhengzhong/.xkb/symbols'
    './.xkb/symbols/chromebook' -> '/home/juzhengzhong/.xkb/symbols/chromebook'
    './.xkb/symbols/mac_gui' -> '/home/juzhengzhong/.xkb/symbols/mac_gui'
    './.xkb/symbols/mac_term' -> '/home/juzhengzhong/.xkb/symbols/mac_term'
    './.xkb/symbols/mac_term_chromebook' -> '/home/juzhengzhong/.xkb/symbols/mac_term_chromebook'
    './.xkb/types' -> '/home/juzhengzhong/.xkb/types'
    './.xkb/types/mac_gui' -> '/home/juzhengzhong/.xkb/types/mac_gui'
    './.xkb/types/mac_term' -> '/home/juzhengzhong/.xkb/types/mac_term'
    One time initialization tweaks are available. Would you like to view them? (Y/n) n
    
    
    Dynamic shortcut tweaks
    
    1. Gnome Activities Overview
    Description: Cmd+Space activates Activities Overview
    run in gui mode: gsettings set org.gnome.desktop.wm.keybindings panel-main-menu "['<Ctrl>Space']"
    run in terminal mode: gsettings set org.gnome.desktop.wm.keybindings panel-main-menu "['<Control><Shift>Space']"
    
    Please enter your dynamic shortcut tweak(s) (eg 1 or 1 2 3 - leave blank to skip): 
    
    Saved configuration to ~/.config/kinto/user_config.json
    
    Now running keyswap_service.sh to setup the keyswap service...
    Keyswap will be configured to run on user login
    
    You may start, stop, restart or view the status of the service with following commands
    
    systemctl --user start keyswap
    systemctl --user stop keyswap
    systemctl --user restart keyswap
    systemctl --user status keyswap
    Created symlink /home/juzhengzhong/.config/systemd/user/default.target.wants/keyswap.timer → /home/juzhengzhong/.config/systemd/user/keyswap.timer.
    juzhengzhong@SRV-01:~/kinto$ 


## Step 2

Install [Gnome Tweaks](https://github.com/GNOME/gnome-tweaks) and [Gnome Shell Extensions](https://gitlab.gnome.org/GNOME/gnome-shell-extensions).


    sudo apt-get install -y gnome-tweaks gnome-shell-extensions


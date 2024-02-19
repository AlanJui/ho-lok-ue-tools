# 在 Ubuntu 20.04 安裝 macOS 佈景

Ref: https://linuxconfig.org/how-to-install-macos-theme-on-ubuntu-20-04-focal-fossa-linux


# 安裝 Gnome Tweaks


    sudo apt install gnome-tweak-tool
    sudo apt install  gnome-shell-extension-gsconnect




# 安裝 Mojave macOS theme


    sudo apt install gtk2-engines-murrine gtk2-engines-pixbuf

Next, download the Mojave macOS theme: https://www.gnome-look.org/p/1275087/

![Navigate your browser the mcMojave theme and download the theme package. There are multiple options so choose any style you favour as the installation process is exactly the same.](https://linuxconfig.org/images/01-how-to-install-macos-theme-on-ubuntu-20-04-focal-fossa-linux.png)


Navigate your browser to [McMojave theme](https://www.gnome-look.org/p/1275087/) page and download the theme package. There are multiple options so choose any style you favour as the installation process is exactly the same. For the purpose of this tutorial we will go with the dark theme. Download the package to your `~/Downloads` directory.
At this stage you should have the package downloaded in your `~/Downloads` directory. Once ready execute the below commands to install the macOS theme:


    $ tar xf Mojave-dark.tar.xz
    $ mkdir ~/.themes
    $ mv Mojave-dark ~/.themes/


# 安裝 Mojave CT icons


https://www.gnome-look.org/p/1210856/

![Use your browser to download the macOS Mojave CT icons](https://linuxconfig.org/images/04-how-to-install-macos-theme-on-ubuntu-20-04-focal-fossa-linux.png)


Use your browser to download the [macOS Mojave CT icons](https://www.gnome-look.org/p/1210856/). Once again pick any icon style and save the package into your `~/Downloads` directory.
At this stage you should have the package downloaded in your `~/Downloads` directory. Once ready execute the below commands to install the macOS Mojave CT icons:

    $ tar xf Mojave-CT-Night-Mode.tar.xz
    $ mkdir ~/.icons
    $ mv Mojave-CT-Night-Mode ~/.icons/
# 
# 安裝 macOS cursor set


https://www.gnome-look.org/p/1148748/


download the macOS cursor set 
Using your browser download the macOS cursor set package into your ~/Downloads directory.
Once you have the macOS cursor set package downloaded in your ~/Downloads directory execute the below commands to install it:


    $ unzip -qq macOS\ Cursor\ Set.zip
    $ mv macOS\ Cursor\ Set ~/.icons/
# 
# 設定 Mojave wallpaper



# 安裝 macOS Panel


    $ sudo apt install plank

自 Activities Menu 啟動 plank


1. Once the Plank application is installed launch it from your `Activities` menu:
![Start Plank application on Ubuntu 20.04 Gnome Desktop](https://linuxconfig.org/images/11-how-to-install-macos-theme-on-ubuntu-20-04-focal-fossa-linux.png)

2. Start Plank application on Ubuntu 20.04 Gnome Desktop
![At this point you should see the macOS panel at the bottom of your desktop.](https://linuxconfig.org/images/12-how-to-install-macos-theme-on-ubuntu-20-04-focal-fossa-linux.png)

3. At this point you should see the macOS panel at the bottom of your desktop.
![Hold the left CTRL and right click to the bottom macOS panel to open up Preferences. Customise the macOS panel to fit your desired look and feel](https://linuxconfig.org/images/13-how-to-install-macos-theme-on-ubuntu-20-04-focal-fossa-linux.png)

4. Hold the left CTRL and right click to the bottom macOS panel to open up Preferences. Customise the macOS panel to fit your desired look and feel. If you wish to take yet another step further install the optional [macOS Plank theme](https://www.gnome-look.org/p/1248226/)



# 
# 


# How to install Davinci Resolve 16 on Ubuntu 20.04


# 安裝

【參考文件】：  https://www.reallinuxuser.com/how-to-install-davinci-resolve-on-ubuntu-based-linux-distros/

 0. 完成下列兩個檔案的「下載」，並存放至目錄： ~/_Download 。

    - 安裝用 .run 檔案： 
        **https://www.blackmagicdesign.com/products/davinciresolve/**
    - 製作 .deb 檔案用之 .sh 檔：
        **https://www.danieltufvesson.com/makeresolvedeb**

 1. 備妥「製作 .deb 檔所需套件」


    sudo apt install ocl-icd-opencl-dev fakeroot xorriso

如有必要，尚需安裝 libssl 套件，但版本： 1.0.0 的套件已退役，請改裝 libssl 1.1.x

    sudo apt install libssl1.1


2. 啟動指令，開始製作 .deb 安裝檔。


    cd ~/_Downloads
    sudo sh ./makeresolvedeb_16.2.6-1.sh lite

 3. 執行「安裝指令」。

    ll *.deb
    sudo dpkg -i davinci-resolve_16.2.6-1_amd64.deb



# 御除



    sudo rm -f -r /opt/resolve
    sudo rm /usr/share/applications/davinci-resolve.desktop





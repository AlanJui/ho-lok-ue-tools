# Gnome 3 桌面客製

![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528500657720_Screenshot-20180607070757-1366x768.png)



# 摘要

上圖為「桌面客製目標」，其完成後的「配方」，以「調校」工具觀察其組成元件，如下所示：

![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528500851485_Screenshot-20180609065105-1366x768.png)


桌面組成元素：

- 佈景主題：
    - 應用程式：Canta
    - 圖示（Icon）：Canta
    - Shell：Canta
- 背景
    - 影像：[74152-212.jpg](https://drive.google.com/open?id=1Bf8lFK369rmqwfiVM86JfbSaMMPIVi9R) 
![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528501142113_74152-212.jpg)

# 

**整個桌面客製的作業程序如下：** 
（1）Canta Theme 安裝前置準備
（2）下載 Canta Theme 檔案
（3）安裝 Canta Theme 的佈景
（4）安裝 Canta Theme 的圖示
（5）使用「調校」客製桌面的佈景主題
（6）更換「桌布」


----------
## （1）Canta Theme 安裝前置準備
![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528502303161_Screenshot-20180609075800-1366x768.png)


Canta Theme 下載網址：https://www.gnome-look.org/p/1220749/

因 Cata Theme 需搭配 GTK2 Engines，所以需透過「終端機」執行以下指令，進行安裝工作：

    $ sudo apt install gtk2-engines-murrine gtk2-engines-pixbuf

如果您也希望：「在 Dock 內的 App 圖示，能以圓形顯示」，那麼請執行如下指令，以完成 numix-icon-theme-circle 的安裝：

    $ sudo add-apt-repository ppa:numix/ppa
    $ sudo apt update
    $ sudo apt install numix-icon-theme-circle


----------


## （2）下載 Canta Theme 檔案

啟動 Web 瀏覽器，輸入 Canta Theme 下載網址：https://www.gnome-look.org/p/1220749/ 。

先點擊「Files 頁籤」切換畫面，然後下載以下所述的兩個壓縮檔案：

- Canta.tar.xz
- Canta-icon-theme.tar.xz
![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528528731500_Screenshot-20180609081757-1366x768.png)


將以上兩個壓縮檔案，進行「解壓縮」，並存放在目錄路徑 **~/下載** 中。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528529143805_Screenshot-20180609152347-691x551.png)



----------


## （3）安裝 Canta Theme 的佈景

待安裝之 Canta Theme ，存放在目錄路徑： ~/下載/Canta/ 中。有興趣驗證的話，可在「終端機」執行下列指令，進行確認：

    $ ls -al ~/下載/Canta

經由上述指令的輸出結果，可知在 Canta 目錄之下，還有兩個子目錄：

- Canta
- Canta-compact
![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528529280182_Screenshot-20180609152745-691x551.png)











在 Ubuntu 18.04 、 Debian 9 作業系統，Gnome 3 桌面環境所使用的「佈景」，其「預設目錄路徑」為： /usr/share/themes/ 。有興趣驗證的話，可在「終端機」執行列指令，進行確認：

    $ ls -al /usr/share/themes/

在「終端機」，執行下列指令，以便將 Canta Theme 的兩個目錄，複製到 「佈景」的預設目錄路徑中：

    $ cd
    $ sudo cp -r ~/下載/Canta/* /usr/share/themes/


----------


## （4）安裝 Canta Theme 的圖示

Canta Theme 所使用的圖示（Icon），存放在目錄路徑： ~/下載/Canta-icon-theme/ 中。有興趣驗證的話，可在「終端機」執行下列指令，進行確認：

    $ ls -al ~/下載/Canta-icon-theme

經由上述指令的輸出結果，可知在 Canta-icon-theme 目錄之下，有個名為： installer.sh 的安裝執行檔。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528529495237_Screenshot-20180609153122-691x551.png)











在 Ubuntu 18.04 、 Debian 9 作業系統，Gnome 3 桌面環境所使用的「圖示」，其「預設目錄路徑」為： /usr/share/icons/ 。有興趣驗證的話，可在「終端機」執行下列指令，進行確認：

    $ ls -al /usr/share/icons/

以管理員身份，執行 installer.sh ，以便將 Canta Theme 的圖示，安裝到「圖示」的預設目錄路徑。

    $ cd ~/下載/Canta-icon-theme
    $ sudo ./installer.sh

千萬注意！上述的最後一個指令，若是少了 sudo ，圖示安裝的目錄路徑，就會變成：  ~/.icons ，對於後續的設定工作，將會造成無法執行的問題。

installer.sh 的執行過程，會有三個時間點暫停，需要執行者回覆；請依如下之「示範畫面」，給予應有之輸入（您需要輸入的地方及其文字，均以反白區塊標示）：

    amos@Amos-Aspire-5745G:~/下載/Canta-icon-theme$ sudo ./installer.sh 
    
    +----------------------------------------------+
    |      Canta Icon Theme Installer Script       |
    +----------------------------------------------+
    
    What you want to do: (i)nstall, (r)emove : 
    
    i
    
    Canta Gtk Theme will be installed in:
    
            /usr/share/icons
    
    It will be available to all users.
    
    Do you want to continue? (y)es, (n)o : 
    
    y
    
    Installing Canta...
    
    Installation complete!
    
    If you want a better experience you should install numix-circle first!
    Because Canta icon theme use numix-icon-theme-circle icon theme for Inherits!
    
    Do you want to set the theme now? (y)es, (n)o : 
    
    y
    Setting Canta...
    Done!
    amos@Amos-Aspire-5745G:~/下載/Canta-icon-theme$


----------


## （5）使用「調校」客製桌面的佈景主題

執行「調校（Tweak Tool）」，先在左窗格選「外觀」，然後再於右窗格，針對桌面「佈景主題」的設定項目，進行客製化的設定工作。

需設定之項目，及其設定值，如下所示：

- 應用程式：Canta
- 圖示：Canta
- Shell：Canta
![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528530267566_Screenshot-20180609110615-1366x768.png)


【註】：在前述「安裝 Canta Theme 的圖示」步驟之前，若己執行「調校」，須先關掉，再重新啟動。


----------


## （6）更換「桌布」

延續前面的「調校」設定畫面，進行「桌布（Wallpaper）」更換的設定工作。

點擊「背景／影像」欄位右方的「圖示」：

![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528513758733_Screenshot-20180609110615-1366x768.png)


指定影像檔案：[74152-212.jpg](https://drive.google.com/open?id=1Bf8lFK369rmqwfiVM86JfbSaMMPIVi9R) ，所在位置。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528513878254_Screenshot-20180609110853-1366x768.png)


結束「調校」，即可看到全新的桌面。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_6AFCC2CF44E8265FDC8902EFAB0B411BC6125E3C8C9A4FE9195F4F9E3630AF2C_1528514014204_Screenshot-20180609111217-1366x768.png)


好了！打完收工，以上的桌面客製化工作至此結束。 


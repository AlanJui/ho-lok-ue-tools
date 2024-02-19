# USB 藍牙+Wi-Fi 二合一無線網路卡安裝

本文件之目的用於說明：如何在 Ubuntu 20.04 作業系統，安裝「TOTO LINK A600UB AC600 USB 藍牙+WiFi 二合一無線網路卡」。以下，對於「USB 藍牙＋Wi-Fi 二合一無線網路卡」將簡稱為：「USB 二合一網路卡」。

安裝「USB 二合一網路卡」使用的電腦，其硬體配備、軟體環境，摘要如下：

    - CPU： 第三代 Intel Core i7-3770
    - 主機板使用之晶片組： Intel Q77 (主機板：GA-Q77M-D2H rev. 1.0 ) 
    - 作業系統名稱及版本： Ubuntu 20.04.1
    - 核心（Kernel）版本： 5.4.0-52-generic

以下之安裝作業，參考如下連結之文件，略加修飾及編輯而成。

https://github.com/brektrou/rtl8821CU




# 環境確認作業


## 作業系統版本

透過「終端機」輸入以下指令，確認「作業系統版本」為：Ubuntu 20.04.1 。

    $ lsb_release -a
    No LSB modules are available.
    Distributor ID:        Ubuntu
    Description:        Ubuntu 20.04.1 LTS
    Release:        20.04
    Codename:        focal


## 核心版本（Kernel Version）

透過「終端機」輸入以下指令，確認「核心版本」為：5.4.0-52-generic 。

    $ uname -r
    5.4.0-52-generic


## USB 裝置代碼（USB ID）

透過「終端機」輸入以下指令，確認作業系統已能偵測到，您插入的「USB 二合一網路卡」。

「USB 二合一網路卡」的 「USB 裝置代碼」為：0dba:1a2b。

    $ lsusb
    Bus 002 Device 003: ID 0bda:0161 Realtek Semiconductor Corp. Mass Storage Device
    Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
    Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 001 Device 004: ID 040b:0a67 Weltrend Semiconductor 
    Bus 001 Device 003: ID 248a:8366 Maxxter Wireless Optical Mouse ACT-MUSW-002
    Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 004 Device 004: ID 05e3:0620 Genesys Logic, Inc. BUP Portable
    Bus 004 Device 003: ID 05e3:0620 Genesys Logic, Inc. USB3.1 Hub
    Bus 004 Device 002: ID 0bc2:ac26 Seagate RSS LLC BUP Portable
    Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
    Bus 003 Device 005: ID 0bda:1a2b Realtek Semiconductor Corp. 
    Bus 003 Device 006: ID 534d:2109  
    Bus 003 Device 004: ID 05e3:0610 Genesys Logic, Inc. 4-port hub
    Bus 003 Device 003: ID 05e3:0610 Genesys Logic, Inc. 4-port hub
    Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub

USB 二合一網路卡（裝置代碼：0dba:1a2b），所使用的晶片為： RTL8818CU 。

以下網址，可用 USB 裝置代碼（USB ID），查詢該裝置所使用的「晶片代碼」。

    https://the-sz.com/products/usbid/index.php



# WiFi 無線網路卡安裝作業


## 安裝工具程式


    $ sudo apt install git gcc dkms  
    $ sudo apt install linux-headers-$(uname -r)
    $ sudo apt install net-tools




## 安裝驅動程式

**(1) 建立驅動程式安裝目錄。**


    ~ $ cd
    ~ $ mkdir build && cd $_
    ~/build $


**(2) 下載驅動程式原始碼。**


    ~/build $ git clone https://github.com/brektrou/rtl8821CU


**(3) 編譯驅動程式原始碼 (Compile the Driver)。**


    ~/build $ cd rtl8821CU
    ~/build/rtl8821CU $ sudo ./dkms-install.sh
    About to run dkms install steps...
    
    Creating symlink /var/lib/dkms/rtl8821CU/5.4.1/source ->
                     /usr/src/rtl8821CU-5.4.1
    
    DKMS: add completed.
    
    Kernel preparation unnecessary for this kernel.  Skipping...
    
    Building module:
    cleaning build area...
    'make' KVER=5.4.0-52-generic..........................................
    cleaning build area...
    
    DKMS: build completed.
    
    8821cu.ko:
    Running module version sanity check.
     - Original module
       - No original module exists within this kernel
     - Installation
       - Installing to /lib/modules/5.4.0-52-generic/updates/dkms/
    
    depmod...
    
    DKMS: install completed.
    Finished running dkms install steps.


驗證「驅動程式檔案：8821cu.ko」已被置入應存放之目錄中。

    $ ll /lib/modules/5.4.0-52-generic/updates/dkms 
    總計 33628
    drwxr-xr-x 2 root root     4096 10月 27 22:21 ./
    drwxr-xr-x 3 root root     4096 10月 21 09:03 ../
    -rw-r--r-- 1 root root  3749784 10月 27 22:21 8821cu.ko
    -rw-r--r-- 1 root root    76960 10月 21 09:03 nvidia-drm.ko
    -rw-r--r-- 1 root root 27353104 10月 21 09:03 nvidia.ko
    -rw-r--r-- 1 root root  1553616 10月 21 09:03 nvidia-modeset.ko
    -rw-r--r-- 1 root root  1617184 10月 21 09:03 nvidia-uvm.ko
    -rw-r--r-- 1 root root    62264 10月 21 09:03 v4l2loopback.ko


驗證「驅動程式模組：rtl8821CU」，已被安裝到 dkms 。

    $ sudo dkms status
    nvidia, 450.80.02, 5.4.0-51-generic, x86_64: installed
    nvidia, 450.80.02, 5.4.0-52-generic, x86_64: installed
    rtl8821CU, 5.4.1, 5.4.0-52-generic, x86_64: installed
    v4l2loopback, 0.12.3, 5.4.0-51-generic, x86_64: installed
    v4l2loopback, 0.12.3, 5.4.0-52-generic, x86_64: installed


【參考用資訊】： 有些文件說 make 執行過後，會將「驅動程式檔案」：8821CU.ko ，置入目錄路徑中：/lib/modules/5.4.0-52-generic/kernel/drivers/net/wireless/。但我執行的實際結果，並非如此。

    $ ll /lib/modules/5.4.0-52-generic/kernel/drivers/net/wireless 
    總計 436
    drwxr-xr-x 18 root root   4096 10月 26 08:19 ./
    drwxr-xr-x 27 root root   4096 10月 21 09:03 ../
    drwxr-xr-x  2 root root   4096 10月 21 09:03 admtek/
    drwxr-xr-x 10 root root   4096 10月 21 09:03 ath/
    drwxr-xr-x  2 root root   4096 10月 21 09:03 atmel/
    drwxr-xr-x  5 root root   4096 10月 21 09:03 broadcom/
    drwxr-xr-x  2 root root   4096 10月 21 09:03 cisco/
    drwxr-xr-x  5 root root   4096 10月 21 09:03 intel/
    drwxr-xr-x  5 root root   4096 10月 21 09:03 intersil/
    -rw-r--r--  1 root root 100617 10月 15 18:28 mac80211_hwsim.ko
    drwxr-xr-x  5 root root   4096 10月 21 09:03 marvell/
    drwxr-xr-x  4 root root   4096 10月 21 09:03 mediatek/
    drwxr-xr-x  3 root root   4096 10月 21 09:03 quantenna/
    drwxr-xr-x  3 root root   4096 10月 21 09:03 ralink/
    -rw-r--r--  1 root root 104817 10月 15 18:28 ray_cs.ko
    drwxr-xr-x  6 root root   4096 10月 21 09:03 realtek/
    -rw-r--r--  1 root root  96321 10月 15 18:28 rndis_wlan.ko
    drwxr-xr-x  2 root root   4096 10月 21 09:03 rsi/
    drwxr-xr-x  3 root root   4096 10月 21 09:03 st/
    drwxr-xr-x  6 root root   4096 10月 21 09:03 ti/
    -rw-r--r--  1 root root  20473 10月 15 18:28 virt_wifi.ko
    -rw-r--r--  1 root root  41481 10月 15 18:28 wl3501_cs.ko
    drwxr-xr-x  3 root root   4096 10月 21 09:03 zydas/


【參考用資訊】： 有些文件說 make 執行過後，會將「驅動程式模組」檔案：8821CU.ko ，置入目錄路徑中：/lib/modules/5.4.0-52-generic/kernel/drivers/net/wireless/realtek/。但我執行的實際結果，並非如此。

    $ ll /lib/modules/5.4.0-52-generic/kernel/drivers/net/wireless/realtek 
    總計 24
    drwxr-xr-x  6 root root 4096 10月 21 09:03 ./
    drwxr-xr-x 18 root root 4096 10月 26 08:19 ../
    drwxr-xr-x  4 root root 4096 10月 21 09:03 rtl818x/
    drwxr-xr-x  2 root root 4096 10月 21 09:03 rtl8xxxu/
    drwxr-xr-x 14 root root 4096 10月 21 09:03 rtlwifi/
    drwxr-xr-x  2 root root 4096 10月 21 09:03 rtw88/


**(4) 啟動驅動程式（Load the Driver）。**

完成上述工作後，無論是透過「設定值」的操作；或是使用 iwconfig 指令進行查詢，都會發覺「USB 二合一網路卡」仍未能正常運作。

使用 iwconfig 指令驗證，發現 Wi-Fi 無線網路功能尚未能正常啟動。

    $ iwconfig
    eno1      no wireless extensions.
    
    lo        no wireless extensions.


進入「設定值」的操作介面，發現「網路」項目上，仍未顯現「Wi-Fi」項目；也就是Wi-Fi 無線網路功能尚未能正常啟動。

![](https://paper-attachments.dropbox.com/s_010D076FC054E694629575437D9304AF30F543BC8559D33273E6CECB48D4C666_1603807608840_gnome-shell-screenshot-N8U6S0.png)


再次使用 lsusb 指令查詢，可知「USB 裝置」：0dba:1a2b ，使用 Bus: 001 、Device: 005 。

    $ lsusb
    Bus 002 Device 003: ID 0bda:0161 Realtek Semiconductor Corp. Mass Storage Device
    Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
    Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 001 Device 004: ID 040b:0a67 Weltrend Semiconductor 
    Bus 001 Device 003: ID 248a:8366 Maxxter Wireless Optical Mouse ACT-MUSW-002
    Bus 001 Device 005: ID 0bda:1a2b Realtek Semiconductor Corp. 
    Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 004 Device 002: ID 0bc2:ac26 Seagate RSS LLC BUP Portable
    Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
    Bus 003 Device 004: ID 534d:2109  
    Bus 003 Device 003: ID 05e3:0610 Genesys Logic, Inc. 4-port hub
    Bus 003 Device 002: ID 05e3:0610 Genesys Logic, Inc. 4-port hub
    Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub


使用 usb_modeswitch 指令，要求 USB 裝置，將其 USB 模式切換成 Wi-Fi 模式。
**（許多的網友就因為缺漏這個步驟，以致功虧一簣，終究沒能完成安裝。 ）**

    $ sudo usb_modeswitch -KW -v 0bda -p 1a2b
    Take all parameters from the command line
    
    
     * usb_modeswitch: handle USB devices with multiple modes
     * Version 2.5.2 (C) Josua Dietze 2017
     * Based on libusb1/libusbx
    
     ! PLEASE REPORT NEW CONFIGURATIONS !
    
    DefaultVendor=  0x0bda
    DefaultProduct= 0x1a2b
    
    StandardEject=1
    
    Look for default devices ...
      found USB ID 0bda:0161
       vendor ID matched
      found USB ID 8087:0024
      found USB ID 1d6b:0002
      found USB ID 040b:0a67
      found USB ID 248a:8366
      found USB ID 0bda:1a2b
       vendor ID matched
       product ID matched
      found USB ID 8087:0024
      found USB ID 1d6b:0002
      found USB ID 0bc2:ac26
      found USB ID 1d6b:0003
      found USB ID 534d:2109
      found USB ID 05e3:0610
      found USB ID 05e3:0610
      found USB ID 1d6b:0002
     Found devices in default mode (1)
    Access device 005 on bus 001
    Get the current device configuration ...
    Current configuration number is 1
    Use interface number 0
     with class 8
    Use endpoints 0x0b (out) and 0x8a (in)
    
    USB description data (for identification)
    -------------------------
    Manufacturer: Realtek
         Product: DISK
      Serial No.: not provided
    -------------------------
    Sending standard EJECT sequence
    Looking for active drivers ...
     OK, driver detached
    Set up interface 0
    Use endpoint 0x0b for message sending ...
    Trying to send message 1 to endpoint 0x0b ...
     OK, message successfully sent
    Read the response to message 1 (CSW) ...
     Response successfully read (13 bytes), status 0
    Trying to send message 2 to endpoint 0x0b ...
     OK, message successfully sent
    Read the response to message 2 (CSW) ...
     Response successfully read (13 bytes), status 0
    Trying to send message 3 to endpoint 0x0b ...
     Sending the message returned error -1. Try to continue
    Read the response to message 3 (CSW) ...
     Response reading failed (error -1)
     Device is gone, skip any further commands
    -> Run lsusb to note any changes. Bye!


再次使用 lsusb 指令查詢，將發覺「USB 裝置」：0dba:1a2b 不見了；卻產生了新的：0dba:c820（使用 Bus: 001 、Device: 006） 。

    $ lsusb
    Bus 002 Device 003: ID 0bda:0161 Realtek Semiconductor Corp. Mass Storage Device
    Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
    Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 001 Device 004: ID 040b:0a67 Weltrend Semiconductor 
    Bus 001 Device 003: ID 248a:8366 Maxxter Wireless Optical Mouse ACT-MUSW-002
    Bus 001 Device 006: ID 0bda:c820 Realtek Semiconductor Corp. 
    Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 004 Device 002: ID 0bc2:ac26 Seagate RSS LLC BUP Portable
    Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
    Bus 003 Device 004: ID 534d:2109  
    Bus 003 Device 003: ID 05e3:0610 Genesys Logic, Inc. 4-port hub
    Bus 003 Device 002: ID 05e3:0610 Genesys Logic, Inc. 4-port hub
    Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub


再次進入「設定值」的操作介面，將發現「網路」項目上，已顯現「Wi-Fi」項目；也就是Wi-Fi 無線網路功能已正常啟動。

![](https://paper-attachments.dropbox.com/s_010D076FC054E694629575437D9304AF30F543BC8559D33273E6CECB48D4C666_1603809538984_image.png)



再次進入「設定值」的操作介面，點擊「藍牙」項目，將可自右邊的畫面，驗證藍牙功能已正常啟動。

![](https://paper-attachments.dropbox.com/s_010D076FC054E694629575437D9304AF30F543BC8559D33273E6CECB48D4C666_1603809496565_image.png)


此時，再次執行 iwconfig 指令，可發現「無線網路卡」已能正常運作（尚未連上無線網路時）：

    $ iwconfig
    enx7a6c1ccb0f60  no wireless extensions.
    
    lo        no wireless extensions.
    
    wlxd0c0bf50e619  unassociated  Nickname:"<WIFI@REALTEK>"
              Mode:Managed  Frequency=5.785 GHz  Access Point: Not-Associated   
              Sensitivity:0/0  
              Retry:off   RTS thr:off   Fragment thr:off
              Power Management:off
              Link Quality=0/100  Signal level=0 dBm  Noise level=0 dBm
              Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
              Tx excessive retries:0  Invalid misc:0   Missed beacon:0
    
    eno1      no wireless extensions.


已連上無線網路時，執行 iwconfig 指令後的結果（參考）：

    $ iwconfig
    enx7a6c1ccb0f60  no wireless extensions.
    
    lo        no wireless extensions.
    
    wlxd0c0bf50e619  IEEE 802.11AC  ESSID:"CCC Dlink-6AD2-5GHz"  Nickname:"<WIFI@REALTEK>"
              Mode:Managed  Frequency:5.785 GHz  Access Point: 74:DA:DA:03:6A:D4   
              Bit Rate:434 Mb/s   Sensitivity:0/0  
              Retry:off   RTS thr:off   Fragment thr:off
              Power Management:off
              Link Quality=78/100  Signal level=-51 dBm  Noise level=0 dBm
              Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
              Tx excessive retries:0  Invalid misc:0   Missed beacon:0
    
    eno1      no wireless extensions.


**(4) 驗證驅動程式已成功啟動，被載入作業系統。**

設定作業系統：「自動啟動藍芽服務 Bluetooh Service」。

    $ sudo systemctl start bluetooth


驗證作業系統已啟動藍芽服務。

    $ sudo service bluetooth status
    ● bluetooth.service - Bluetooth service
         Loaded: loaded (/lib/systemd/system/bluetooth.service; enabled; vendor preset: enabled)
         Active: active (running) since Tue 2020-10-27 22:32:07 CST; 7min ago
           Docs: man:bluetoothd(8)
       Main PID: 24328 (bluetoothd)
         Status: "Running"
          Tasks: 1 (limit: 19087)
         Memory: 3.0M
         CGroup: /system.slice/bluetooth.service
                 └─24328 /usr/lib/bluetooth/bluetoothd
    
    10月 27 22:32:07 SRV-2020 systemd[1]: Starting Bluetooth service...
    10月 27 22:32:07 SRV-2020 bluetoothd[24328]: Bluetooth daemon 5.53
    10月 27 22:32:07 SRV-2020 systemd[1]: Started Bluetooth service.
    10月 27 22:32:07 SRV-2020 bluetoothd[24328]: Starting SDP server
    10月 27 22:32:07 SRV-2020 bluetoothd[24328]: Bluetooth management interface 1.14 initialized
    10月 27 22:32:07 SRV-2020 bluetoothd[24328]: Endpoint registered: sender=:1.71 path=/MediaEndpoint/A2DPSink/sbc
    10月 27 22:32:07 SRV-2020 bluetoothd[24328]: Endpoint registered: sender=:1.71 path=/MediaEndpoint/A2DPSource/sbc


驗證「驅動程式」也就「8821cu模組」，已被作業系統載入。

    $ sudo lsmod | grep 8821cu
    8821cu               2211840  0
    cfg80211              704512  1 8821cu


驗證「無線網卡裝置」已可被作業系統偵測到。

    $ iwconfig
    eno1      no wireless extensions.
    
    lo        no wireless extensions.
    
    wlxd0c0bf50e619  IEEE 802.11AC  ESSID:"CCC Dlink-6AD2-5GHz"  Nickname:"<WIFI@REALTEK>"
              Mode:Managed  Frequency:5.785 GHz  Access Point: 74:DA:DA:03:6A:D4   
              Bit Rate:434 Mb/s   Sensitivity:0/0  
              Retry:off   RTS thr:off   Fragment thr:off
              Power Management:off
              Link Quality=62/100  Signal level=-60 dBm  Noise level=0 dBm
              Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
              Tx excessive retries:0  Invalid misc:0   Missed beacon:0


**(5) 設定作業系統於啟動後，自動將 USB 裝置切換到 Wi-Fi 模式。**

透過 usb_modeswitch 指令，切換的 USB 模式，會因重開機而失效。所以，需執行以下設定，使 usb_modeswitch 指令，能於作業系統開機時自動執行。

啟動編輯器，並打開檔案： 40-usb_modeswitch.rules 。

    $ sudo nvim /lib/udev/rules.d/40-usb_modeswitch.rules

在「`**LABEL="modeswitch_rules_end"**`」這行之前，加入以下設定指令。

    # Realtek 8211CU Wifi AC USB
    ATTR{idVendor}=="0bda", ATTR{idProduct}=="1a2b", RUN+="/usr/sbin/usb_modeswitch -K -v 0bda -p 1a2b"
    
    LABEL="modeswitch_rules_end"


**(6) 重新啟動作業系統。**


    ~/build/rtl8821CU $ sudo reboot




# 問題診斷與修復




----------
## 修正 make 無法正常運作的問題

驅動程式原始碼在編譯時，若無法正常執行，且「錯誤訊息」指出：Linux Header 目錄中找不到 build 目錄的連結。

**正常狀態，在「Linux Headers」目錄中，應有「build」的軟連結，對映到 /usr/src/linux-headers-5.4.0-52-generic/ 。**

    $ ll /lib/modules/5.4.0-52-generic/
    總計 5836
    drwxr-xr-x  6 root root    4096 10月 26 10:36 ./
    drwxr-xr-x  7 root root    4096 10月 21 09:03 ../
    lrwxrwxrwx  1 root root      39 10月 15 18:28 build -> /usr/src/linux-headers-5.4.0-52-generic/
    drwxr-xr-x  2 root root    4096 10月 15 18:28 initrd/
    drwxr-xr-x 17 root root    4096 10月 21 09:03 kernel/
    -rw-r--r--  1 root root 1392413 10月 26 10:36 modules.alias
    -rw-r--r--  1 root root 1368666 10月 26 10:36 modules.alias.bin
    -rw-r--r--  1 root root    8105 10月 15 18:28 modules.builtin
    -rw-r--r--  1 root root   24985 10月 26 10:36 modules.builtin.alias.bin
    -rw-r--r--  1 root root   10257 10月 26 10:36 modules.builtin.bin
    -rw-r--r--  1 root root   63335 10月 15 18:28 modules.builtin.modinfo
    -rw-r--r--  1 root root  610732 10月 26 10:36 modules.dep
    -rw-r--r--  1 root root  853697 10月 26 10:36 modules.dep.bin
    -rw-r--r--  1 root root     330 10月 26 10:36 modules.devname
    -rw-r--r--  1 root root  220055 10月 15 18:28 modules.order
    -rw-r--r--  1 root root     828 10月 26 10:36 modules.softdep
    -rw-r--r--  1 root root  617900 10月 26 10:36 modules.symbols
    -rw-r--r--  1 root root  751222 10月 26 10:36 modules.symbols.bin
    drwxr-xr-x  3 root root    4096 10月 21 09:03 updates/
    drwxr-xr-x  3 root root    4096 10月 21 09:03 vdso/

若是找不到 build 連結，可透過如下指令重建。

    $ sudo apt install linux-headers-$(uname -r)




----------
## 清理 make 執行過後的暫存檔案

如下圖所示，make 指令執行後，會產生目的檔及暫存檔。


    $ cd ~/build/rtl8821CU
    $ ll
    總計 7652
    drwxrwxr-x 8 alanjui alanjui    4096 10月 26 12:51 ./
    drwxrwxr-x 4 alanjui alanjui    4096 10月 26 12:48 ../
    -rw-rw-r-- 1 alanjui alanjui 3755568 10月 26 12:51 8821cu.ko
    -rw-rw-r-- 1 alanjui alanjui     270 10月 26 12:51 .8821cu.ko.cmd
    -rw-rw-r-- 1 alanjui alanjui    8744 10月 26 12:51 8821cu.mod
    -rw-rw-r-- 1 alanjui alanjui    1165 10月 26 12:51 8821cu.mod.c
    -rw-rw-r-- 1 alanjui alanjui    8851 10月 26 12:51 .8821cu.mod.cmd
    -rw-rw-r-- 1 alanjui alanjui    3752 10月 26 12:51 8821cu.mod.o
    -rw-rw-r-- 1 alanjui alanjui   31124 10月 26 12:51 .8821cu.mod.o.cmd
    -rw-rw-r-- 1 alanjui alanjui 3761208 10月 26 12:51 8821cu.o
    -rw-rw-r-- 1 alanjui alanjui    8895 10月 26 12:51 .8821cu.o.cmd
    -rw-rw-r-- 1 alanjui alanjui   57288 10月 26 12:48 changelog.pdf
    -rwxrwxr-x 1 alanjui alanjui      64 10月 26 12:48 clean*
    drwxrwxr-x 4 alanjui alanjui    4096 10月 26 12:51 core/
    -rw-rw-r-- 1 alanjui alanjui     234 10月 26 12:48 dkms.conf
    -rwxrwxr-x 1 alanjui alanjui     813 10月 26 12:48 dkms-install.sh*
    -rwxrwxr-x 1 alanjui alanjui     503 10月 26 12:48 dkms-remove.sh*
    drwxrwxr-x 8 alanjui alanjui    4096 10月 26 12:48 .git/
    drwxrwxr-x 9 alanjui alanjui    4096 10月 26 12:50 hal/
    -rwxrwxr-x 1 alanjui alanjui      54 10月 26 12:48 ifcfg-wlan0*
    drwxrwxr-x 5 alanjui alanjui   12288 10月 26 12:48 include/
    -rwxrwxr-x 1 alanjui alanjui     110 10月 26 12:48 Kconfig*
    -rw-rw-r-- 1 alanjui alanjui   18092 10月 26 12:48 LICENSE
    -rwxrwxr-x 1 alanjui alanjui   67981 10月 26 12:48 Makefile*
    -rw-rw-r-- 1 alanjui alanjui      40 10月 26 12:51 modules.order
    -rw-rw-r-- 1 alanjui alanjui       0 10月 26 12:51 Module.symvers
    drwxrwxr-x 3 alanjui alanjui    4096 10月 26 12:49 os_dep/
    drwxrwxr-x 2 alanjui alanjui    4096 10月 26 12:51 platform/
    -rw-rw-r-- 1 alanjui alanjui    3253 10月 26 12:48 README.md
    -rwxrwxr-x 1 alanjui alanjui    2569 10月 26 12:48 rtl8821c.mk*
    -rwxrwxr-x 1 alanjui alanjui     423 10月 26 12:48 runwpa*
    -rwxrwxr-x 1 alanjui alanjui     294 10月 26 12:48 wlan0dhcp*

上述經 make 產生之檔案，可透過 make clean 指令，將之自動清除。

    ~/build/rtl8821CU $ make clean
    #make -C /lib/modules/5.4.0-52-generic/build M=/home/alanjui/build/rtl8821CU clean
    cd hal ; rm -fr */*/*/*.mod.c */*/*/*.mod */*/*/*.o */*/*/.*.cmd */*/*/*.ko
    cd hal ; rm -fr */*/*.mod.c */*/*.mod */*/*.o */*/.*.cmd */*/*.ko
    cd hal ; rm -fr */*.mod.c */*.mod */*.o */.*.cmd */*.ko
    cd hal ; rm -fr *.mod.c *.mod *.o .*.cmd *.ko
    cd core ; rm -fr */*.mod.c */*.mod */*.o */.*.cmd */*.ko
    cd core ; rm -fr *.mod.c *.mod *.o .*.cmd *.ko
    cd os_dep/linux ; rm -fr *.mod.c *.mod *.o .*.cmd *.ko
    cd os_dep ; rm -fr *.mod.c *.mod *.o .*.cmd *.ko
    cd platform ; rm -fr *.mod.c *.mod *.o .*.cmd *.ko
    rm -fr Module.symvers ; rm -fr Module.markers ; rm -fr modules.order
    rm -fr *.mod.c *.mod *.o .*.cmd *.ko *~
    rm -fr .tmp_versions

使用 ll (或 ls -al) 指令再次確認。

    ~/build/rtl8821CU $ ll
    總計 224
    drwxrwxr-x 8 alanjui alanjui  4096 10月 27 23:05 ./
    drwxrwxr-x 4 alanjui alanjui  4096 10月 26 12:48 ../
    -rw-rw-r-- 1 alanjui alanjui 57288 10月 26 12:48 changelog.pdf
    -rwxrwxr-x 1 alanjui alanjui    64 10月 26 12:48 clean*
    drwxrwxr-x 4 alanjui alanjui  4096 10月 27 23:05 core/
    -rw-rw-r-- 1 alanjui alanjui   234 10月 26 12:48 dkms.conf
    -rwxrwxr-x 1 alanjui alanjui   813 10月 26 12:48 dkms-install.sh*
    -rwxrwxr-x 1 alanjui alanjui   503 10月 26 12:48 dkms-remove.sh*
    drwxrwxr-x 8 alanjui alanjui  4096 10月 26 12:48 .git/
    drwxrwxr-x 9 alanjui alanjui  4096 10月 27 23:05 hal/
    -rwxrwxr-x 1 alanjui alanjui    54 10月 26 12:48 ifcfg-wlan0*
    drwxrwxr-x 5 alanjui alanjui 12288 10月 26 12:48 include/
    -rwxrwxr-x 1 alanjui alanjui   110 10月 26 12:48 Kconfig*
    -rw-rw-r-- 1 alanjui alanjui 18092 10月 26 12:48 LICENSE
    -rwxrwxr-x 1 alanjui alanjui 67981 10月 26 12:48 Makefile*
    drwxrwxr-x 3 alanjui alanjui  4096 10月 27 23:05 os_dep/
    drwxrwxr-x 2 alanjui alanjui  4096 10月 27 23:05 platform/
    -rw-rw-r-- 1 alanjui alanjui  3253 10月 26 12:48 README.md
    -rwxrwxr-x 1 alanjui alanjui  2569 10月 26 12:48 rtl8821c.mk*
    -rwxrwxr-x 1 alanjui alanjui   423 10月 26 12:48 runwpa*
    -rwxrwxr-x 1 alanjui alanjui   294 10月 26 12:48 wlan0dhcp*




----------
## USB ID 查詢工具

每個 USB 裝置，都有「USB 裝置代碼（USB ID）」，例如：0dba:1a2b 。

「冒號」前的代碼：0dba，代表：Vendor ID；「冒號」後的代碼：1a2b，代表：Product ID。

取得 USB 裝置的「USB ID」後，便可透過如下網址，查詢該裝置所使用的「晶片代碼」。


    https://the-sz.com/products/usbid/index.php

以下畫面，在「Vendor ID」、「Product ID」欄位輸入資料，然後按「Search」鈕。

    - Vendor ID: 0x0dba
    - Product ID: 0x1a2b
![](https://paper-attachments.dropbox.com/s_010D076FC054E694629575437D9304AF30F543BC8559D33273E6CECB48D4C666_1603857637029_image.png)


查詢之結果，如下畫面所示。可知晶片代碼為：RTL8188CU。

![](https://paper-attachments.dropbox.com/s_010D076FC054E694629575437D9304AF30F543BC8559D33273E6CECB48D4C666_1603857942593_image.png)


**Search Results:**

    https://the-sz.com/products/usbid/index.php?v=0x0bda&p=0x1a2b&n=

Vendor ID (VID): 0x0bda 
Product ID (PID): 0x1a2b
**RTL8188GU 802.11n WLAN Adapter (Driver CDROM Mode)**

![](http://upload.wikimedia.org/wikipedia/en/thumb/7/70/Realtek_logo_vector.svg/256px-Realtek_logo_vector.svg.png)





----------
## 將 USB 二合一網路卡的USB模式切換為 Wi-Fi 模式

透過以下指令，可將 USB 二合一網路卡的「USB 模式」，切換成 Wi-Fi 模式。


    $ sudo usb_modeswitch -KW -v 0dba -p 1a2b




----------
## 確認作業系統是否已能辨識「無線網路卡」

無線網路卡要能正常運作，首要條件當然是：能被作業系統偵測到、並能辨識。所以，指令：iwconfig 亦能充當成「診斷工具」，用於判斷「無線網路卡」是否已能被作業系統所認可；若診斷結果為「否」，除非是網卡本身故障；否則應是「驅動程式」未正確安裝。

當「無線網路卡」還無法正常運作時，iwconfig 指令的執行結果如下：

    $ iwconfig
    lo        no wireless extensions.
    
    eno1      no wireless extensions.


當「無線網路卡」已能正常運作時，iwconfig 指令的執行結果如下：

    $ iwconfig
    eno1      no wireless extensions.
    
    lo        no wireless extensions.
    
    wlxd0c0bf50e619  IEEE 802.11AC  ESSID:"CCC Dlink-6AD2-5GHz"  Nickname:"<WIFI@REALTEK>"
              Mode:Managed  Frequency:5.785 GHz  Access Point: 74:DA:DA:03:6A:D4   
              Bit Rate:434 Mb/s   Sensitivity:0/0  
              Retry:off   RTS thr:off   Fragment thr:off
              Power Management:off
              Link Quality=66/100  Signal level=-55 dBm  Noise level=0 dBm
              Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
              Tx excessive retries:0  Invalid misc:0   Missed beacon:0




----------
## 診斷驅動程式已能正常運作的問題

當驅動程式完成應有的安裝與設定作業後，應重新開機。在開機過程中，作業系統的核心（Kernel），應能透過驅動程式與硬體溝通，偵測到系統已安裝的硬體。若開機完成後，硬體仍未能正常運作，則有可能是「驅動程式」本身仍有問題。

由於「dmesg」指令，可查詢「開機過程中，作業系統所偵測到的各種硬體狀態訊息」。故而，可據此輸出診斷：「驅動程式是否已能正常運作，可令**作業系統**與**硬體**溝通」，找出問題導因。


    ~ $ dmesg


**診斷：開機時，作業系統能偵測到的 Realtek 晶片有那些？**

因為 Realtek 的 Vendor ID 為 0dba，故可使用以下指令進行診斷。

    $ dmesg | grep idVendor=0bda                      
    [    2.082072] usb 2-1.5: New USB device found, idVendor=0bda, idProduct=0161, bcdDevice=61.23
    [    2.565297] usb 3-3.4: New USB device found, idVendor=0bda, idProduct=1a2b, bcdDevice= 2.00
    [ 3730.159308] usb 3-3.1.1: New USB device found, idVendor=0bda, idProduct=1a2b, bcdDevice= 2.00
    [ 3730.707456] usb 3-3.1.1: New USB device found, idVendor=0bda, idProduct=c820, bcdDevice= 2.00
    [ 4158.529202] usb 3-3.1.1: New USB device found, idVendor=0bda, idProduct=c820, bcdDevice= 2.00


**診斷：開機時，作業系統是否能偵測到『TOTO LINK A600UB AC600 USB 藍牙+WiFi 二合一無線網路卡』？**

因為 TOTO LINK A600UB 這個 USB 無線網路卡，使用的晶片為 Realtek 的 RTL8821CU 晶片；經查詢後得知 Vendor ID 為 0dba；Product ID 為 c820。故可使用以下指令診斷：開機過程中，作業系統是否有偵測到這個USB 無線網路卡。

    $ dmesg | grep idVendor=0bda | grep idProduct=c820
    [ 3730.707456] usb 3-3.1.1: New USB device found, idVendor=0bda, idProduct=c820, bcdDevice= 2.00
    [ 4158.529202] usb 3-3.1.1: New USB device found, idVendor=0bda, idProduct=c820, bcdDevice= 2.00




# 參考文件


- [ubuntu18.04 按网上教程安装USB网卡驱动后还是用不了](https://forum.ubuntu.org.cn/viewtopic.php?t=489451)
    https://forum.ubuntu.org.cn/viewtopic.php?t=489451
    
- [**Installation Guide for Linux**](https://static.tp-link.com/2018/201805/20180508/Installation%20Guide%20for%20Linux.pdf)
    [https://static.tp-link.com/2018/201805/20180508/Installation%20Guide%20for%20Linux.pdf](https://static.tp-link.com/2018/201805/20180508/Installation%20Guide%20for%20Linux.pdf)


**分隔線以下，均為曾試過，卻都無法成功的參考文件。**


----------


- [**TL-WDN5200H無線usb網卡在Linux上的使用**](https://www.itdaan.com/tw/18e383751ef23d19f4c5d9fe8ec3cef1) ****https://www.itdaan.com/tw/18e383751ef23d19f4c5d9fe8ec3cef1


- [**Linux安装无线网卡驱动通用方法**](https://www.wyr.me/post/623)
    https://www.wyr.me/post/623


- [**Install USB Wifi dongle on Ubuntu 18.04**](https://aaronlelevier.github.io/install-usb-wifi-dongle-on-ubuntu-18.04/)
    https://aaronlelevier.github.io/install-usb-wifi-dongle-on-ubuntu-18.04/


- [**No Wi-Fi adapter Found(rtl8811au)**](https://ubuntuforums.org/showthread.php?t=2375603)
    https://ubuntuforums.org/showthread.php?t=2375603


- [**USB Antenna Not Working on Dell Optiplex 760 Desktop?**](https://askubuntu.com/questions/1045765/usb-antenna-not-working-on-dell-optiplex-760-desktop/1045927#1045927)
https://askubuntu.com/questions/1045765/usb-antenna-not-working-on-dell-optiplex-760-desktop/1045927#1045927



- [**aircrack-ng/rtl8812au**](https://github.com/aircrack-ng/rtl8812au)
https://github.com/aircrack-ng/rtl8812au

    



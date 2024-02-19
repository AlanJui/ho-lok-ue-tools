# Gnome Vino VNC Server




（1）設定 VNC Server 在連接時，不使用加密協定。

    gsettings set org.gnome.Vino require-encryption false

【註】： 不要指令前頭加上「sudo」。



（2）變更 VNC Encryption Method 的預設協定。

使用 Dconf-Editor ，設定 Gnome 桌面環境的預設值。


    suo apt install dconf-editor


    sudo dnf install dconf-editor

Vino VNC Server 在 Gnome 桌面環境的預設為：「使用 tls-anon 作業預設的 Encryption Method」。

故變更以下兩項設定：

- 使用預設值：改為「關閉」；
- 自訂數值：原選項僅有 tls-anon ，自己手動新增 none 選項。

變更「設定值」，改成如下：

- 使用預設值：關
- 自訂數值：[‘none’, ‘tls-anon’]

【註】：完成變更後，千萬不要漏按最後一行的「套用」鈕（一個藍底白鈎的按鈕符號）。


![](https://paper-attachments.dropbox.com/s_8C68D6AE3290040D09A14AAB36F9B58C5580121D49B83A378D4CCC9C09215412_1607501980128_image.png)




## 參考文件

https://www.answertopia.com/ubuntu/ubuntu-remote-desktop-access-with-vino/





----------


## Xrdp on CentOS / Fedora


https://www.mdeditor.tw/pl/pcdk/zh-tw


## 安裝 xrdp 套件


    sudo dnf install epel-release
    sudo dnf install xrdp



## 設定 xrdp service 開機時自動啟動

**（1）設定 service 開機自動啟動（順帶啟動 xrdp service）**

    sudo systemctl enable xrdp --now


**（2）確認 xrdp service 已啟動**

    sudo systemctl status xrdp



## 設定 xrdp service 連線使用 gnome session

**（1）編輯設定檔，設定 xrdp 連線使用 gnome-session**

    sudo vim /etc/xrdp/xrdp.ini

在 xrdp.ini 檔案最後，加下列一行設定：

    exec gnome-session


**(2) 重新啟動 xrdp service**

    sudo systemctl restart xrdp




## 設定 xrdp service 可通過防火牆



    sudo firewall-cmd --new-zone=xrdp --permanent
    sudo firewall-cmd --zone=xrdp --add-port=3389/tcp --permanent
    sudo firewall-cmd --zone=xrdp --add-source=192.168.66.0/24 --permanent
    sudo firewall-cmd --reload




## 其它參考文件

**配合 VNC Server**

https://www.itzgeek.com/how-tos/linux/centos-how-tos/how-to-install-xrdp-on-red-hat-enterprise-linux-8.html



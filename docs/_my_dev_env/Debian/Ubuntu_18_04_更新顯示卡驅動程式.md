# Ubuntu 18.04 更新顯示卡驅動程式


# Nvidia GeForce 驅動程式下載處

https://www.geforce.com.tw/drivers



# 安裝驅動程式



## 自 Intel GPU 切換到 Nvidia GPU (外顯卡)
https://www.linuxbabe.com/desktop-linux/switch-intel-nvidia-graphics-card-ubuntu




## 使用GUI介面操作／指令輸入的驅動程式安裝法
https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu-18-04




## 使用官方下載的驅動程式（.RUN檔）安裝法
https://medium.com/@antonioszeto/how-to-install-nvidia-driver-on-ubuntu-18-04-7b464bab43e6




# 其它參考


## 無法安裝官方驅動程式： Unload kernel module ‘nvidia-drm’ 

http://chiustin.blogspot.com/2019/01/ubuntunvidia.html



https://unix.stackexchange.com/questions/440840/how-to-unload-kernel-module-nvidia-drm




## 無法安裝官方驅動程式：please exit X server before installing
https://askubuntu.com/questions/149206/how-to-install-nvidia-run





## 在 Terminal 更新

http://chiustin.blogspot.com/2019/01/ubuntunvidia.html



## 使用下載的 .RUN 檔更新驅動程式
https://medium.com/@rosdyanakusuma/how-to-install-nvidia-driver-in-ubuntu-18-04-307c25f73259



**Step 1** 
1. Check the model of your NVIDIA GPU

    $ ubuntu-drivers devices

 2. Download NVIDIA Driver from URL:  https://www.nvidia.com/Download/index.aspx to Home DIR
 
 3. Ensure the driver (.RUN file) to be runnable

    $ chmod +x NVIDIA-Linux-<xxx>.run

**Step 2**

    sudo apt list --installed | grep "nvidia*"


    sudo apt purge "nvidia*"

**Step 3**

    sudo apt install build-essential gcc-multilib dkms 

**Step 4**

    sudo vim /etc/modprobe.d/blacklist-nvidia-nouveau.conf

**blacklist-nvidia-nouveau.conf**

    blacklist nouveau
    options nouveau modeset=0


**Step 5**

    sudo update-initramfs -u
    sudo reboot


**Step 6: Stop “Display Manager Service” (gdm)**
After reboot/restart, open console from login page (ctrl+alt+f2).

<Ctrl> + <Alt> + <F2>

    $ sudo service gdm stop

**Step 7: Install .run driver** 

    sudo ./NVIDIA-Linux-x86_64-418.56.run

若遇到錯誤訊息： pre-install script failed —》 不用理它，繼續執行下去
https://blog.csdn.net/u014561933/article/details/79958130


- DKMS: y
- Lib 32: y
- Configure X Server: y

**Step 8:**

    $ nvidia-smi
    $ sudo reboot





----------


# OBS Support NVENC H264

**NVENC Support Matrix**
https://developer.nvidia.com/video-encode-decode-gpu-support-matrix



https://arstech.net/compile-ffmpeg-with-nvenc-h264/

https://arstech.net/how-to-disable-nouveau-nvidia-driver-on-ubuntu-18-04/




## Uninstall Driver

https://linuxconfig.org/how-to-uninstall-the-nvidia-drivers-on-ubuntu-20-04-focal-fossa-linux



/etc/modprobe.d/nvidia-installer-disable-nouveau.conf  
/var/log/nvidia-installer.log



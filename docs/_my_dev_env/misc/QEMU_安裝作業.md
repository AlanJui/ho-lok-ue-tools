# QEMU 安裝作業
在 macOS 10.15.7 使用 QEMU 安裝 Debian VM。

http://wiki.colar.net/creating_a_qemu_image_and_installing_debian_in_it


## Creating a Debian image

**(1) Download the Debian installation CD (ISO File)**

    cd ~/workspace/qemu
    wget http://debian.osuosl.org/debian-cdimage/current/i386/iso-cd/debian-mac-10.6.0-i386-netinst.iso


**(2) Create a disk image for QEMU (ex: fake hard drive).** 

    qemu-img create -f qcow2 vdisk1.qcow2 10G

Or…..

    qemu-img create debian.img 2G


**(3) Start the Debian installation CD with QEMU and the new image as the HD.**

    qemu \
    -cdrom debian-mac-10.6.0-i386-netinst.iso \
    -hda vdisk1.qcow2
    -boot d

**(4) Follow through the steps to install Debian:**

    - Choose a language, country and keyboard mapping
    - Set the host and domain names and choose a server to download other components from
    - Then i choose 'manual partitioning' and create just one / partition using the whole disk (simpler for this purpose). Type: ext3. then save the partition to disk.
    - I don't bother setting a swap in this case, my machine as lots of memory anyway.
    - Select your timezone
    - create the root and a user accounts
    - after that it will start installing the system, retrieving packages from the ISO and network. (takes a while)
    - software to install: standard system only

   
    At the end it will reboot.
    Reboot will fail, just stop QEMU (<Ctrl-C>).
    
**(5) Boot the new clean Debian install**

    qemu -hda debian.qcow2

 ****
 From now I have a fully functional ‘vanilla’ Debian system. ****
  
**(6) Make a copy for Vanilla Debian System.**

    cp debian.qcow2 debian-vanilla.qcow2

Actually you do not need to copy the image for later reuse. It is faster and more space-efficient to make a snapshot.

    http://wiki.qemu.org/Documentation/CreateSnapshot


## Resizing the QEMU image

**(1) Create a copy of the image in raw format**

    qemu-img convert Debian.qcow2 -O raw debian.raw




## How to create qcow2 image


https://www.geekpills.com/virtulization/how-to-create-qcow2-image


**To create a qcow2 image on host machine**

    $ qemu-img create -f qcow2 vdisk1.qcow2 40G
    Formatting 'vdisk1.qcow2', fmt=qcow2 cluster_size=65536 compression_type=zlib size=42949672960 lazy_refcounts=off refcount_bits=16
    
    $ ls -lh vdisk1.qcow2
    -rw-r--r--  1 alanjui  staff   193K 12  1 20:33 vdisk1.qcow2



    $ qemu-img info vdisk1.qcow2
    image: vdisk1.qcow2
    file format: qcow2
    virtual size: 40 GiB (42949672960 bytes)
    disk size: 196 KiB
    cluster_size: 65536
    Format specific information:
        compat: 1.1
        compression type: zlib
        lazy refcounts: false
        refcount bits: 16
        corrupt: false


**Attach of qcow2 disk on virtual machine**

    virsh attach-disk centos7_1 --source /data/vm_images/centos7_1/vdisk1 --target vdc --driver qemu



----------


## VM 網路


**橋接網路（Network Bridge）**

為使位於 Host (真實電腦) 內的 VM ，可與其它串接真實電腦的網路連通，故需需要使月手「橋接網路」。 


![](https://paper-attachments.dropbox.com/s_C38DE0FFD44FC6519D2A0ECC6EEDE90188A60B048C654C363F819B16E41B899C_1606997609886_image.png)




![](https://paper-attachments.dropbox.com/s_C38DE0FFD44FC6519D2A0ECC6EEDE90188A60B048C654C363F819B16E41B899C_1607782746987_image.png)




https://www.cyberciti.biz/faq/ubuntu-20-04-add-network-bridge-br0-with-nmcli-command/



**QEMU 與虛擬網路**


![](https://paper-attachments.dropbox.com/s_C38DE0FFD44FC6519D2A0ECC6EEDE90188A60B048C654C363F819B16E41B899C_1606969095603_file.png)




http://pominglee.blogspot.com/2014/12/br10.html



https://yangyuan.github.io/post/2014-12-10-zh-qemu-create-virtual-machine-with-bridge/

**Bridged network with a static IP address**

Bridged networking can also be used to configure the guest to use a static IP address. To configure a bridged network with a static IP address for the guest virtual machine, use the following options:

    --network br0 \
    --extra-args "ip=192.168.1.2::192.168.1.1:255.255.255.0:test.example.com:eth0:none"

Ref: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-guest_virtual_machine_installation_overview-creating_guests_with_virt_install



https://octetz.com/docs/2020/2020-11-13-vm-networks/



https://www.youtube.com/watch?v=6435eNKpyYw&


[https://youtu.be/6435eNKpyYw](https://youtu.be/6435eNKpyYw)




https://octetz.com/docs/2020/2020-05-06-linux-hypervisor-setup/




https://www.youtube.com/watch?v=HfNKpT2jo7U&


[https://youtu.be/HfNKpT2jo7U](https://youtu.be/HfNKpT2jo7U)




https://www.youtube.com/watch?v=amTJHm19ts0&&t=12s


[https://youtu.be/amTJHm19ts0?t=12s](https://youtu.be/amTJHm19ts0?t=12s)




https://www.youtube.com/watch?v=LQuxJxfMd6w&


[https://youtu.be/LQuxJxfMd6w](https://youtu.be/LQuxJxfMd6w)






----------


## QEMU 參數


    $ qemu-system-x86_64 -display help
    Available display backend types:
    none
    curses
    cocoa



----------
## Ubuntu 平台 QEMU 作業


https://websiteforstudents.com/how-to-install-kvm-on-ubuntu-20-04-18-04/




https://www.cyberciti.biz/faq/how-to-install-kvm-on-ubuntu-20-04-lts-headless-server/



    $ ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
        inet6 ::1/128 scope host 
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.10/24 brd 192.168.66.255 scope global noprefixroute eno1
           valid_lft forever preferred_lft forever
        inet6 fd00:30b7:d45e:4bf2:922b:34ff:fed1:a61b/64 scope global dynamic mngtmpaddr 
           valid_lft 535426sec preferred_lft 401569sec
        inet6 fe80::922b:34ff:fed1:a61b/64 scope link 
           valid_lft forever preferred_lft forever
    3: wlxd0c0bf50e619: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
        inet 192.168.0.108/24 brd 192.168.0.255 scope global dynamic noprefixroute wlxd0c0bf50e619
           valid_lft 85091sec preferred_lft 85091sec
        inet6 fe80::4055:6f3b:fe30:ce21/64 scope link noprefixroute 
           valid_lft forever preferred_lft forever
    4: virbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
        link/ether 52:54:00:1c:ea:b4 brd ff:ff:ff:ff:ff:ff
        inet 192.168.122.1/24 brd 192.168.122.255 scope global virbr0
           valid_lft forever preferred_lft forever
    5: virbr0-nic: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master virbr0 state DOWN group default qlen 1000
        link/ether 52:54:00:1c:ea:b4 brd ff:ff:ff:ff:ff:ff

/etc/netplan/50-cloud-init.yaml


Delete br0 bridge

    sudo ifconfig br0 down
    sudo brctl delbr br0


    sudo ip link set dev br0 down



## Host Network Bridge


https://levelup.gitconnected.com/how-to-setup-bridge-networking-with-kvm-on-ubuntu-20-04-9c560b3e3991




    virt-install --name vm1 --ram=8192 --disk size=10 --vcpus 1 --os-type linux --os-variant ubuntu20.04 --graphics none --location 'http://archive.ubuntu.com/ubuntu/dists/focal/main/installer-amd64/' --extra-args "console=tty0 console=ttyS0,115200n8"



    virt-install --name vm1 --ram=4096 --disk size=10 --vcpus 6 --os-type linux --os-variant ubuntu20.04 --graphics none --cdrom "/NAS/Downloads/Linux/Ubuntu/ubuntu-20.04-desktop-amd64.iso" --extra-args "console=tty0 console=ttyS0,115200n8"


    sudo virt-install \
    --virt-type=kvm \
    --hvm \
    --os-type=linux \
    --os-variant=ubuntu20.04 \
    --name ubuntu2004 \
    --vcpus=6 \
    --ram 4096 \
    --network=bridge=host-bridge,model=virtio \
    --graphics vnc,listen=0.0.0.0,password="555099" \ 
    --cdrom="/var/lib/libvirt/boot/ubuntu-20.04-desktop-amd64.iso" \
    --disk path="/home/alanjui/workspace/qemu/ubuntu-2004/ubuntu2004.qcow2",size=40,bus=virtio,format=qcow2



    sudo virt-install \
    --virt-type=kvm \
    --hvm \
    --os-type=linux \
    --os-variant=ubuntu20.04 \
    --name ubuntu2004 \
    --vcpus=6 \
    --ram 4096 \
    --network=bridge="host-bridge",model=virtio \
    --graphics vnc \ 
    --cdrom="/var/lib/libvirt/boot/ubuntu-20.04-desktop-amd64.iso" \
    --disk path="/home/alanjui/workspace/qemu/ubuntu-2004/ubuntu2004.qcow2",size=40,bus=virtio,format=qcow2



    sudo virt-install \
    --virt-type=x86_64 \
    --name centos8-4 \
    --ram 4096 \
    --vcpus=6 \
    --os-variant="centos8" \
    --virt-type=x86_64 \
    --hvm \
    --cdrom="/var/lib/libvirt/boot/CentOS-8.2.2004-x86_64-dvd1.iso" \
    --network=bridge="host-bridge",model=virtio \
    --graphics vnc \
    --disk path="/var/lib/libvirt/images/centos8-3.qcow2",size=40,bus=virtio,format=qcow2


![](https://paper-attachments.dropbox.com/s_C38DE0FFD44FC6519D2A0ECC6EEDE90188A60B048C654C363F819B16E41B899C_1607174373650_image.png)



![](https://paper-attachments.dropbox.com/s_C38DE0FFD44FC6519D2A0ECC6EEDE90188A60B048C654C363F819B16E41B899C_1607174470291_image.png)





----------
## macOS 平台 QEMU 作業


**（1）QEMU VHD 建置作業**

**s01-create-hd**

    qemu-img create -f qcow2 vdisk1.qcow2 30G


**（2）在 QEMU VM 執行 Guest OS 安裝作業**

**s02-install-vm**

    qemu-system-x86_64 \
    -drive file=./vdisk1.qcow2,if=virtio \
    -cdrom ./ubuntu-20.10-desktop-amd64.iso \
    -m 4096 \
    -cpu Nehalem \
    -smp cores=6 \
    -machine q35,accel=hvf \
    -display default,show-cursor=on \
    -vga virtio \
    -net user,hostfwd=tcp::2222-:22 \
    -net nic \
    -usb \
    -device usb-tablet \
    -boot menu=on


    qemu-system-x86_64 \
    -drive file=./vdisk1.qcow2,if=virtio \
    -cdrom ./ubuntu-20.10-desktop-amd64.iso \
    -m 4096 \
    -cpu Nehalem \
    -machine q35,accel=hvf \
    -display default,show-cursor=on \
    -vga virtio \
    -usb \
    -device usb-tablet 


**（3）QEMU VM 開機作業**

**s03-start-vm**

    qemu-system-x86_64 \
    -drive file=./vdisk1.qcow2,if=virtio \
    -m 4096 \
    -cpu Nehalem \
    -smp cores=6 \
    -machine q35,accel=hvf \
    -display default,show-cursor=on \
    -vga virtio \
    -net user,hostfwd=tcp::2222-:22 \
    -net nic \
    -usb \
    -device usb-tablet \
    -boot menu=on


    qemu-system-x86_64 \
    -drive file=./vdisk1.qcow2,if=virtio \
    -m 4096 \
    -cpu Nehalem \
    -machine q35,accel=hvf \
    -display default,show-cursor=on \
    -vga virtio \
    -usb \
    -device usb-tablet 


Ref: https://doc.opensuse.org/documentation/leap/archive/42.1/virtualization/html/book.virt/cha.qemu.guest_inst.html

**查詢 Snapshot 清單**

    qemu-img snapshot -l vdisk1.qcow2


**在已關機VM建立Snapshot**

    qemu-img snapshot -c backup_snapshot vdisk1.qcow2
    
    qemu-img snapshot -l vdisk1.qcow2
    Snapshot list:
    ID        TAG                     VM SIZE                DATE       VM CLOCK
    1         backup_snapshot             0 B 2020-12-02 23:24:58   00:00:00.000



----------


## 使用 Virsh

**Creating a guest VM from a configuration file**

    # virsh create ubuntu.xml


    # virsh send-key ubuntu --codeset Linux --holdtime 1000 KEY_LEFTCTRL KEY_LEFTALT KEY_DELETE


    # virsh edit ubuntu


https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-domain_commands-creating_a_guest_virtual_machine_from_a_configuration_file



**Removing and deleting a VM**

    virsh destroy ubuntu


    virsh undefine ubuntu


    virsh list


https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-virsh-delete




----------


## Network Bridge


https://documentation.suse.com/sles/15-SP1/html/SLES-all/cha-libvirt-networks.html



----------
## 使用 QEMU 安裝 Mac VM

https://github.com/foxlet/macOS-Simple-KVM


https://github.com/kholia/OSX-KVM





----------


## Create a VM 


https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-guest_virtual_machine_installation_overview-creating_guests_with_virt_install




----------
## 參考文件

【QEMU System Emulation Users Guide】
https://www.qemu.org/docs/master/system/invocation.html


**【建置符合 QEMU 用之 Qcow2 Image 檔案 】**

https://www.geekpills.com/virtulization/how-to-create-qcow2-image



**【在 Mac 電腦中使用 QEMU 安裝可執行 Fedora 33 的虛擬電腦】**

https://opensource.com/article/20/9/try-linux-mac



 **【工具 IP 的用法】**

https://www.cyberciti.biz/faq/linux-ip-command-examples-usage-syntax/




**【使用 virt-install建置VM】**

https://unix.stackexchange.com/questions/309788/how-to-create-a-vm-from-scratch-with-virsh




**【在 Mac 安裝 QEMU 軟體套件】**
https://www.qemu.org/download/#macos



**【建置可執行 Debian VM 的 QEMU Image 檔案】**
http://wiki.colar.net/creating_a_qemu_image_and_installing_debian_in_it




----------


## Download ISO image file

**下載 Fedora 33 ISO 檔（台灣區）**

https://getfedora.org/zh_Hant_TW/workstation/download/



**下載 Debian ISO 檔**
http://debian.osuosl.org/debian-cdimage/current/i386/iso-cd/



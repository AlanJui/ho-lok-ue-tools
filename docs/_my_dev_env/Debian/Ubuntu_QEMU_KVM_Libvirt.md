# Ubuntu QEMU/KVM/Libvirt


https://www.youtube.com/watch?v=2SdSiJTGKLM&


[https://youtu.be/2SdSiJTGKLM](https://youtu.be/2SdSiJTGKLM)



![](https://paper-attachments.dropbox.com/s_A95431A2A3965C3081D7C5E4A15B0A1AD7277E450233574D54E3FFB13242D8F0_1607783224168_image.png)



## 安裝 KVM

https://linuxhint.com/install_kvm_ubuntu-2/



https://linuxize.com/post/how-to-install-kvm-on-ubuntu-20-04/




----------

完成 KVM 安裝作業後，須登出／重開機，使用以下指令確認，與 QEMU 相關的 Bridge, NIC 的網路設備是否都已存在於作業系統中。


    $ ip link show master virbr0
    5: virbr0-nic: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master virbr0 state DOWN mode DEFAULT group default qlen 1000
        link/ether 52:54:00:1c:ea:b4 brd ff:ff:ff:ff:ff:ff



    $ bridge link show dev virbr0-nic
    5: virbr0-nic: <BROADCAST,MULTICAST> mtu 1500 master virbr0 state disabled priority 32 cost 100 



    $ ip a s virbr0
    4: virbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
        link/ether 52:54:00:1c:ea:b4 brd ff:ff:ff:ff:ff:ff
        inet 192.168.122.1/24 brd 192.168.122.255 scope global virbr0
           valid_lft forever preferred_lft forever



----------
## 【案例一】



    cd /kvm/iso
    sudo wget https://releases.ubuntu.com/20.04/ubuntu-20.04.1-live-server-amd64.iso



    virt-install --name server-01 \
    --os-type linux \
    --os-variant ubuntu20.04 \
    --ram 1024 \
    --disk /kvm/disk/server-01.img,device=disk,bus=virtio,size=10,format=qcow2 \
    --graphics vnc,listen=0.0.0.0 \
    --noautoconsole \
    --hvm \
    --cdrom /kvm/iso/ubuntu-20.04.1-live-server-amd64.iso \
    --boot cdrom,hd



## 【案例二】Configuring Guest Networking

http://www.linux-kvm.org/page/Networking




----------
## 使用指令建置 VM


**使用 qemu-img 建置虛擬硬碟**


    qemu-img create -f qcow2 vm12-debian-10.qcow2 40G


**使用 virt-install 建置 VM**


    #!/bin/sh
    VM_NAME="ARCH-02"
    echo "VM_NAME=$VM_NAME"
    virt-install \
        --name "$VM_NAME" \
        --os-variant=generic \
        --hvm \
        --cpu host \
        --vcpus=6 \
        --ram 2048 \
        --graphics spice \
        --network bridge=br0 \
        --disk path=/var/lib/libvirt/images/$VM_NAME,size=60 \
        --cdrom /kvm/iso/archlinux-2020.12.01-x86_64.iso \
        --boot uefi


    $ ./s02-install-vm


    virt-install \
      --name VM12-Debian-10 \
      --os-type linux \
      --os-variant generic \
      --vcpus 6 \
      --ram 2048 \
      --birdge=br0 \
      --cdrom ./debian-mac-10.6.0-i386-netinst.iso \
      --disk ./vm12-debian-10.qcow2


**使用 qemu-system-x86_64 建置 VM**


    qemu-system-x86_64 \
      -machine q35,accel=hvf \
      -cpu host \
      -m 2048 \
      -display default,show-cursor=on \
      -vga virtio \
      -usb \
      -device usb-tablet \
      -netdev bridge,br=br0,id=n1 \
      -device virtio-net,netdev=n1 \
      -vnc :5 \
      -hda ./vdisk1.qcow2,if=virtio \
      -cdrom $HOME/worksapce/qemu/ISO/debian-10.6.0-amd64-netinst.iso \
      -boot d 



    qemu-system-x86_64 \
    -machine q35,accel=hvf \
    -cpu host \
    -m 2048 \
    -display default,show-cursor=on \
    -vga virtio \
    -usb \
    -device usb-tablet \
    -nic user,model=virtio,ipv6=off \
    -net bridge,name=bridge1 \
    -drive media=disk,format=qcow2,file=./vdisk1.qcow2 \
    -cdrom $HOME/workspace/qemu/ISO/ubunttu-20.10-desktop-amd64.iso \
    -boot d






    qemu-system-x86_64 \
    -machine q35,accel=hvf \
    -cpu host \
    -m 2048 \
    -display default,show-cursor=on \
    -vga virtio \
    -usb \
    -device usb-tablet \
    -nic tap,model=virtio,ipv6=off \
    -netdev tap,script=./qemu-ifup.sh,downscript=./qemu-ifdown.sh \
    -vnc :5 \
    -hda ./vdisk1.qcow2 \
    -cdrom $HOME/workspace/qemu/ISO/debian-10.6.0-amd64-netinst.iso \
    -boot d



      -nic tap,model=virtio,ipv6=off \
      -netdev tap,script=./qemu-ifup.sh,downscript=./qemu-ifdown.sh \ 



      -nic tap,model=virtio,ipv6=off \
      -netdev tap,id=nd0,ifname=tap0,br=br0 \




    qemu-system-x86_64 \
      -hda vdisk1.qcow2
      -cdrom $HOME/worksapce/qemu/ISO/debian-10.6.0-amd64-netinst.iso \
      -m 2048 \
      -accel hvf \
      -vga virtio \
      -usb \
      -device usb-tablet \
      -display default,show-ciursor=on \
      -boot d



----------
## 使用圖形介面工具建置虛擬橋接器

使用「**圖形介面工具**」： nm-connection-editor ，在「虛擬網路」建置「虛擬橋接器」。


**（1）暫停 Network Manager 網路服務。**

    sudo systemctl stop NetworkManager


**（2）Remove connection profile：刪除「有線網路設定檔」，以便原「有線網路卡」釋放出 IP 。**

![](https://paper-attachments.dropbox.com/s_A95431A2A3965C3081D7C5E4A15B0A1AD7277E450233574D54E3FFB13242D8F0_1607307972771_image.png)



    $ ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
        inet6 ::1/128 scope host 
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    3: wlxd0c0bf50e619: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.215/24 brd 192.168.66.255 scope global dynamic noprefixroute wlxd0c0bf50e619
           valid_lft 603037sec preferred_lft 603037sec
        inet6 fd00:30b7:d45e:4bf2:24c1:2b9a:4515:5ccc/64 scope global temporary dynamic 
           valid_lft 535423sec preferred_lft 84529sec
        inet6 fd00:30b7:d45e:4bf2:23d3:ea79:b82d:3ee9/64 scope global dynamic mngtmpaddr noprefixroute 
           valid_lft 535423sec preferred_lft 401566sec
        inet6 fe80::a062:787:9737:838/64 scope link noprefixroute 
           valid_lft forever preferred_lft forever


**（3）使用 nm-connectiion-editor 指令，建置虛擬網路所需使用的虛擬橋接器（bridge0）**

    $ sudo nm-connection-editor


![](https://paper-attachments.dropbox.com/s_A95431A2A3965C3081D7C5E4A15B0A1AD7277E450233574D54E3FFB13242D8F0_1607308205175_image.png)



![](https://paper-attachments.dropbox.com/s_A95431A2A3965C3081D7C5E4A15B0A1AD7277E450233574D54E3FFB13242D8F0_1607308313753_image.png)

![](https://paper-attachments.dropbox.com/s_A95431A2A3965C3081D7C5E4A15B0A1AD7277E450233574D54E3FFB13242D8F0_1607308358839_image.png)



![](https://paper-attachments.dropbox.com/s_A95431A2A3965C3081D7C5E4A15B0A1AD7277E450233574D54E3FFB13242D8F0_1607308407161_image.png)



![](https://paper-attachments.dropbox.com/s_A95431A2A3965C3081D7C5E4A15B0A1AD7277E450233574D54E3FFB13242D8F0_1607308448623_image.png)



![](https://paper-attachments.dropbox.com/s_A95431A2A3965C3081D7C5E4A15B0A1AD7277E450233574D54E3FFB13242D8F0_1607308495922_image.png)



![將 Connection name 改成：bridge0](https://paper-attachments.dropbox.com/s_A95431A2A3965C3081D7C5E4A15B0A1AD7277E450233574D54E3FFB13242D8F0_1607308521825_image.png)




![](https://paper-attachments.dropbox.com/s_A95431A2A3965C3081D7C5E4A15B0A1AD7277E450233574D54E3FFB13242D8F0_1607308573498_image.png)




    $ ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
        inet6 ::1/128 scope host 
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master bridge0 state UP group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    3: wlxd0c0bf50e619: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.215/24 brd 192.168.66.255 scope global dynamic noprefixroute wlxd0c0bf50e619
           valid_lft 603292sec preferred_lft 603292sec
        inet6 fd00:30b7:d45e:4bf2:24c1:2b9a:4515:5ccc/64 scope global temporary dynamic 
           valid_lft 535421sec preferred_lft 84783sec
        inet6 fd00:30b7:d45e:4bf2:23d3:ea79:b82d:3ee9/64 scope global dynamic mngtmpaddr noprefixroute 
           valid_lft 535421sec preferred_lft 401564sec
        inet6 fe80::a062:787:9737:838/64 scope link noprefixroute 
           valid_lft forever preferred_lft forever
    5: bridge0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff


**（4）重新啟動作業系統的網路功能**

    sudo systemctl restart NetworkManager


    sudo systemctl restart networking

習慣用 service 指令者，亦能以下列方式，重新啟動作業系統的網路：

    sudo service network-manager restart



    $ ip a                                
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
        inet6 ::1/128 scope host 
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master bridge0 state UP group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    3: wlxd0c0bf50e619: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.215/24 brd 192.168.66.255 scope global dynamic noprefixroute wlxd0c0bf50e619
           valid_lft 604793sec preferred_lft 604793sec
        inet6 fd00:30b7:d45e:4bf2:24c1:2b9a:4515:5ccc/64 scope global temporary dynamic 
           valid_lft 535425sec preferred_lft 86285sec
        inet6 fd00:30b7:d45e:4bf2:23d3:ea79:b82d:3ee9/64 scope global dynamic mngtmpaddr noprefixroute 
           valid_lft 535425sec preferred_lft 401568sec
        inet6 fe80::a062:787:9737:838/64 scope link noprefixroute 
           valid_lft forever preferred_lft forever
    6: bridge0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.217/24 brd 192.168.66.255 scope global dynamic noprefixroute bridge0
           valid_lft 604789sec preferred_lft 604789sec
        inet6 fd00:30b7:d45e:4bf2:d3e5:e9f6:99d:79c/64 scope global dynamic noprefixroute 
           valid_lft 535425sec preferred_lft 401568sec
        inet6 fe80::ea43:3bee:13c4:8e43/64 scope link noprefixroute 
           valid_lft forever preferred_lft forever


**（4）驗證 bridge 0 已能正常運作**

    $ ping google.com
    PING google.com (216.58.200.238) 56(84) bytes of data.
    64 bytes from tsa03s01-in-f238.1e100.net (216.58.200.238): icmp_seq=1 ttl=118 time=14.7 ms
    64 bytes from tsa03s01-in-f238.1e100.net (216.58.200.238): icmp_seq=2 ttl=118 time=8.85 ms
    64 bytes from tsa03s01-in-f238.1e100.net (216.58.200.238): icmp_seq=3 ttl=118 time=11.2 ms
    ^C
    --- google.com ping statistics ---
    3 packets transmitted, 3 received, 0% packet loss, time 2003ms
    rtt min/avg/max/mdev = 8.854/11.588/14.738/2.420 ms




----------
## 手動建置虛擬橋接器

使用實體的「有線網路卡」，建置可連接 VM 的「虛擬橋接器」。

**（1）停用實體的有線網路卡（NIC）**

    $ ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.10/24 brd 192.168.66.255 scope global dynamic noprefixroute eno1
           valid_lft 574391sec preferred_lft 574391sec
    3: wlxd0c0bf50e619: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
    
    $ sudo ip link set eno1 down
    
    $ ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.10/24 brd 192.168.66.255 scope global dynamic noprefixroute eno1
           valid_lft 574391sec preferred_lft 574391sec
    3: wlxd0c0bf50e619: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff


**（2）去除「有線網路卡」原先已繫結的 IP 網址**

    $ sudo ip addr del 192.168.66.10/24 dev eno1
    
    $ ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen s1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    3: wlxd0c0bf50e619: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
        inet 192.168.0.103/24 brd 192.168.0.255 scope global dynamic noprefixroute wlxd0c0bf50e619
           valid_lft 86371sec preferred_lft 86371sec
    


**（3）停用 NetworkManager (network-manager) 服務**

    $ sudo systemctl status NetworkManager
    $ sudo systemctl stop NetworkManager
    $ sudo systemctl status NetworkManager

註： NetworkManager 可用 network-manager 代。


**（4）停用 systemd-networkd 服務** 

    $ sudo systemctl status systemd-networkd
    ● systemd-networkd.service - Network Service
         Loaded: loaded (/lib/systemd/system/systemd-networkd.service; disabled; vendor preset: enabled)
         Active: inactive (dead)
           Docs: man:systemd-networkd.service(8)


**（5）建立「虛擬橋接器」，並將之命名為： br0** 

    $ sudo ip link add name br0 type bridge
    
    $ ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    3: wlxd0c0bf50e619: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
        inet 192.168.0.103/24 brd 192.168.0.255 scope global dynamic noprefixroute wlxd0c0bf50e619
           valid_lft 85944sec preferred_lft 85944sec
    9: br0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
        link/ether be:bd:64:83:d8:23 brd ff:ff:ff:ff:ff:ff


**（6）將「虛擬橋接器（br0）」的網路連接介面，設定成：「有線網路卡（eno1）」**

    $ sudo ip link set eno1 master br0
    
    $ ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master br0 state DOWN group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    3: wlxd0c0bf50e619: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
        inet 192.168.0.103/24 brd 192.168.0.255 scope global dynamic noprefixroute wlxd0c0bf50e619
           valid_lft 85805sec preferred_lft 85805sec
    9: br0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    


**（7）設定「虛擬橋接器（br0）」 的 IP 網址**


- **IP 網址： 192.168.4.7 ；**
- **廣播網址：192.168.255.255**
    $ sudo ip addr add 192.168.4.7/16 dev br0 brd 192.168.255.255


**（8）啟動「虛擬橋接器（br0）」** 

    $ sudo ip link set up eno1 &&\
    sudo ip link set up br0



----------
## 管理 KVM/libvirtd 網路

使用 virsh 指令管理 KVM/libvirtd 網路。

KVM/libvirtd 網路使用的「網路介面」：

- 虚擬橋接器：vibr0
- 虚擬網路卡：vibr0-nic


**修復已毀損的 default 網路**


    $ sudo virsh net-start default
    ERROR    Requested operation is not valid: network 'default' is not active

https://blog.programster.org/kvm-missing-default-network


**啟動 default 網路**


    $ virsh net-start default
    Network default started
    
    $ virsh net-list
     Name      State    Autostart   Persistent
    --------------------------------------------
     default   active   yes         yes
    
    $ ip a                   
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.10/24 brd 192.168.66.255 scope global dynamic noprefixroute eno1
           valid_lft 604370sec preferred_lft 604370sec
    3: enx00e04c361a3c: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
        link/ether 00:e0:4c:36:1a:3c brd ff:ff:ff:ff:ff:ff
    6: wlxd0c0bf50e619: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
    9: vibr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
        link/ether 52:54:00:01:cd:21 brd ff:ff:ff:ff:ff:ff
        inet 192.168.122.1/24 brd 192.168.122.255 scope global vibr0
           valid_lft forever preferred_lft forever
    10: vibr0-nic: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master vibr0 state DOWN group default qlen 1000
        link/ether 52:54:00:01:cd:21 brd ff:ff:ff:ff:ff:ff


**關閉 default 網路**


    $ virsh net-destroy default
    Network default destroyed
    
    $ virsh net-list           
     Name   State   Autostart   Persistent
    ----------------------------------------
    
    $ ip a
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
    2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.10/24 brd 192.168.66.255 scope global dynamic noprefixroute eno1
           valid_lft 604425sec preferred_lft 604425sec
    3: enx00e04c361a3c: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
        link/ether 00:e0:4c:36:1a:3c brd ff:ff:ff:ff:ff:ff
    6: wlxd0c0bf50e619: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff



----------
## 透過虚擬橋接器建置虛擬機（VM）

使用 virt-install 指令，搭配「bridge」option，建置「虛擬機」。


**（1）確認作業系統中有可用的「有線網路卡」**


    $ nmcli connection show --active
    NAME                 UUID                                  TYPE      DEVICE          
    有線連線 1            145fcaf0-9e92-3c5d-976a-763ff771a8b1  ethernet  eno1            
    CCC Dlink-6AD2-5GHz  2219a958-d49c-4b27-a936-77208aba2139  wifi      wlxd0c0bf50e619 
    virbr0               7d1cbd53-1411-44ee-bce6-c2c5d69bd36e  bridge    virbr0      


**（2）建立虛擬橋接器（br0）** 


    $ sudo nmcli con add ifname br0 type bridge con-name br0
    連線「br0」 (0cf1c559-1ddf-4ce6-be7c-92c74d458695) 已成功新增。
    
    $ sudo nmcli con add type bridge-slave ifname enp0s31f6 master br0
    連線「bridge-slave-enp0s31f6」 (faf70f17-371c-49bf-b68f-87b0b3d98571) 已成功新增。
    
    $ nmcli connection show
    NAME                    UUID                                  TYPE       DEVICE          
    br0                     0cf1c559-1ddf-4ce6-be7c-92c74d458695  bridge     br0             
    有線連線 1               145fcaf0-9e92-3c5d-976a-763ff771a8b1  ethernet   eno1            
    CCC Dlink-6AD2-5GHz     2219a958-d49c-4b27-a936-77208aba2139  wifi       wlxd0c0bf50e619 
    virbr0                  7d1cbd53-1411-44ee-bce6-c2c5d69bd36e  bridge     virbr0          
    bridge-slave-enp0s31f6  faf70f17-371c-49bf-b68f-87b0b3d98571  ethernet   --              
    CCC99-5G                fddcb72d-251a-42be-bd72-6f3e16ccdbdd  wifi       --              
    Hotspot                 65a39bb3-f67c-4a7b-bd95-62493218aa99  wifi       --              
    iPhone-CCC 網路         525bb90a-f228-4a36-a3e1-661db85890be  bluetooth  --   


**（3）設定 IP V4 網路**

    $ sudo nmcli connection modify br0 ipv4.addresses '192.168.66.90/24'
    $ sudo nmcli connection modify br0 ipv4.gateway '192.168.66.1'
    $ sudo nmcli connection modify br0 ipv4.dns '192.168.66.1'
    $ sudo nmcli connection modify br0 ipv4.dns-search 'ccc99.tw'
    $ sudo nmcli connection modify br0 ipv4.method manual


**（4）設定執行 virt-install 指令時，所需的「環境變數」** 

    export ISO="/var/lib/libvirt/boot/CentOS-8.2.2004-x86_64-dvd1.iso"
    export NET="br0"
    export OS="centos8"
    export VM_IMG="/var/lib/libvirt/images/centos8.qcow2"


**（5）使用 virt-install 指令，建置 VM** 

    sudo virt-install \
    --virt-type=kvm \
    --name centos8 \
    --ram 2048 \
    --vcpus=2 \
    --os-variant=${OS} \
    --virt-type=kvm \
    --hvm \
    --cdrom=${ISO} \
    --network=bridge=${NET},model=virtio \
    --graphics vnc \
    --disk path=${VM_IMG},size=40,bus=virtio,format=qcow2



    sudo virt-install \
    --virt-type=kvm \
    --name centos8-3 \
    --ram 2048 \
    --vcpus=2 \
    --os-variant="centos8" \
    --virt-type=kvm \
    --hvm \
    --cdrom="/var/lib/libvirt/boot/CentOS-8.2.2004-x86_64-dvd1.iso" \
    --network=bridge="br0",model=virtio \
    --graphics vnc \
    --disk path="/var/lib/libvirt/images/centos8-3.qcow2",size=40,bus=virtio,format=qcow2


**【參考資料】： LibVirt 目錄結構**


    $ ll /etc/libvirt 
    總計 132
    drwxr-xr-x   7 root root  4096 12月  4 11:04 ./
    drwxr-xr-x 152 root root 12288 12月  4 11:35 ../
    drwxr-xr-x   2 root root  4096 10月  8 13:36 hooks/
    -rw-r--r--   1 root root   450 10月  8 13:36 libvirt-admin.conf
    -rw-r--r--   1 root root   547 10月  8 13:36 libvirt.conf
    -rw-r--r--   1 root root 16715 10月  8 13:36 libvirtd.conf
    -rw-r--r--   1 root root  2268 10月  8 13:36 libxl.conf
    -rw-r--r--   1 root root  2169 10月  8 13:36 libxl-lockd.conf
    -rw-r--r--   1 root root  2465 10月  8 13:36 libxl-sanlock.conf
    -rw-r--r--   1 root root  1175 10月  8 13:36 lxc.conf
    drwxr-xr-x   2 root root  4096 12月  4 11:04 nwfilter/
    drwxr-xr-x   3 root root  4096 12月  4 18:44 qemu/
    -rw-------   1 root root 32342 10月  8 13:36 qemu.conf
    -rw-r--r--   1 root root  2169 10月  8 13:36 qemu-lockd.conf
    -rw-r--r--   1 root root  2465 10月  8 13:36 qemu-sanlock.conf
    drwx------   2 root root  4096 12月  1 10:49 secrets/
    drwxr-xr-x   3 root root  4096 12月  4 12:51 storage/
    -rw-r--r--   1 root root  3058 10月  8 13:36 virtlockd.conf
    -rw-r--r--   1 root root  3374 10月  8 13:36 virtlogd.conf
    -rw-r--r--   1 root root  1883 10月  8 13:36 virt-login-shell.conf



    $ll /etc/libvirt/qemu
    總計 44
    drwxr-xr-x 3 root root 4096 12月  4 18:44 ./
    drwxr-xr-x 7 root root 4096 12月  4 11:04 ../
    -rw------- 1 root root 5878 12月  4 18:44 centos8-2.xml
    -rw------- 1 root root 5326 12月  4 13:52 centos8.xml
    -rw------- 1 root root 5888 12月  1 21:57 debian10.xml
    drwxr-xr-x 3 root root 4096 12月  4 11:04 networks/
    -rw------- 1 root root 4385 12月  1 12:00 VM01-Ubuntu-2010.xml



    $ ll /etc/libvirt/qemu/networks 
    總計 16
    drwxr-xr-x 3 root root 4096 12月  4 11:04 ./
    drwxr-xr-x 3 root root 4096 12月  4 18:44 ../
    drwxr-xr-x 2 root root 4096 12月  4 11:04 autostart/
    -rw------- 1 root root  576 12月  4 11:04 default.xml



    $ ll /etc/libvirt/qemu/networks/autostart  
    總計 8
    drwxr-xr-x 2 root root 4096 12月  4 11:04 ./
    drwxr-xr-x 3 root root 4096 12月  4 11:04 ../
    lrwxrwxrwx 1 root root   38 12月  4 11:04 default.xml -> /etc/libvirt/qemu/networks/default.xml



    $ ll /etc/libvirt/storage 
    總計 32
    drwxr-xr-x 3 root root 4096 12月  4 12:51 ./
    drwxr-xr-x 7 root root 4096 12月  4 11:04 ../
    drwxr-xr-x 2 root root 4096 12月  4 12:51 autostart/
    -rw------- 1 root root  530 12月  4 12:51 boot.xml
    -rw------- 1 root root  560 12月  1 21:55 debian-001.xml
    -rw------- 1 root root  538 12月  1 11:30 default.xml
    -rw------- 1 root root  524 12月  1 11:39 ISO.xml
    -rw------- 1 root root  540 12月  1 11:34 Ubuntu.xml



----------
## 建置 tap 網路

【參考】： https://gist.github.com/extremecoders-re/e8fd8a67a515fee0c873dcafc81d811c


**（1）安裝工具軟體**

    sudo apt install uml-utilities


**（2）建立虛擬橋接器： br0**

    sudo brctl addbr br0


**（3）清除主機網路卡的 IP 網址**

    sudo ip addr flush dev enx00e04c361a3c


**（4）設定主機網路卡為虛擬橋接器的網路介面**

    sudo brctl addif br0 enx00e04c361a3c
    
    ip a
    ...
    3: br0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
        link/ether 00:e0:4c:36:1a:3c brd ff:ff:ff:ff:ff:ff
        inet 192.168.66.213/24 brd 192.168.66.255 scope global dynamic br0
           valid_lft 581410sec preferred_lft 581410sec
        inet6 fd00:30b7:d45e:4bf2:2e0:4cff:fe36:1a3c/64 scope global dynamic mngtmpaddr noprefixroute 
           valid_lft 535428sec preferred_lft 401571sec
        inet6 fe80::5c0f:1dff:fe73:dd9c/64 scope link 
           valid_lft forever preferred_lft forever
    4: enx00e04c361a3c: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master br0 state UP group default qlen 1000
        link/ether 00:e0:4c:36:1a:3c brd ff:ff:ff:ff:ff:ff


**（5）建立虛擬網路介面卡：tap0 ，並設定使用者為 login 時的使用者帳號**

    sudo tunctl -t tap0 -u `whoami`
    
    ip a
    ...
    27: tap0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
        link/ether 1a:ba:c5:15:8c:24 brd ff:ff:ff:ff:ff:ff


**（6）將虛擬網路介面卡（tap0）連上虛擬橋接器（br0）**

    sudo brctl addif br0 tap0
    
    ip a
    ...
    27: tap0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop master br0 state DOWN group default qlen 1000
        link/ether 1a:ba:c5:15:8c:24 brd ff:ff:ff:ff:ff:ff


**（7）啟動 tap 網路需使用的所有裝置**

    sudo ifconfig enx00e04c361a3c up
    sudo ifconfig tap0 up
    sudo ifconfig br0 up


**（8）驗證虛擬網路介面卡（tap0）確實已接上虛擬橋器（br0）**

    $ brctl show
    bridge name        bridge id                STP enabled       interfaces
    br0                8000.00e04c361a3c        no                enx00e04c361a3c
                                                                  tap0
    vibr0              8000.52540001cd21        yes               vibr0-nic


**（9）設定虛擬橋接器在網路介面使用的 IP （由 DHCP 伺服器發配）**

    $ sudo dhclient -v br0
    Internet Systems Consortium DHCP Client 4.4.1
    Copyright 2004-2018 Internet Systems Consortium.
    All rights reserved.
    For info, please visit https://www.isc.org/software/dhcp/
    
    Listening on LPF/br0/00:e0:4c:36:1a:3c
    Sending on   LPF/br0/00:e0:4c:36:1a:3c
    Sending on   Socket/fallback
    DHCPDISCOVER on br0 to 255.255.255.255 port 67 interval 3 (xid=0xa806e24f)
    DHCPOFFER of 192.168.66.213 from 192.168.66.1
    DHCPREQUEST for 192.168.66.213 on br0 to 255.255.255.255 port 67 (xid=0x4fe206a8)
    DHCPACK of 192.168.66.213 from 192.168.66.1 (xid=0xa806e24f)
    RTNETLINK answers: File exists
    cmp: EOF on /tmp/tmp.mS1wZw0aVa which is empty
    bound to 192.168.66.213 -- renewal in 284457 seconds.


**（10）安裝 VM ，用以驗證虚擬橋接器設定的正確性**

    $ sudo qemu-system-i386 \
      -cdrom Core-current.iso \
      -boot d \
      -netdev tap,id=mynet0,ifname=tap0,script=no,downscript=no \
      -device e1000,netdev=mynet0,mac=52:55:00:d1:55:01


    ./s01-create-hd
    ./s02-install-vm



----------
## Network 管理指令


**使用 ip 列舉作業系統已有的網路裝置**

    $ ip link
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master bridge0 state UP mode DEFAULT group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    3: wlxd0c0bf50e619: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DORMANT group default qlen 1000
        link/ether d0:c0:bf:50:e6:19 brd ff:ff:ff:ff:ff:ff
    4: enxd2c5f35747bc: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state DOWN mode DEFAULT group default qlen 1000
        link/ether d2:c5:f3:57:47:bc brd ff:ff:ff:ff:ff:ff
    5: bridge0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    7: virbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000
        link/ether 52:54:00:d5:1e:01 brd ff:ff:ff:ff:ff:ff
    8: virbr0-nic: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master virbr0 state DOWN mode DEFAULT group default qlen 1000
        link/ether 52:54:00:d5:1e:01 brd ff:ff:ff:ff:ff:ff


**使用 ip 查詢某網路裝置的狀庇**

    $ ip a show dev eno1
    2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master bridge0 state UP group default qlen 1000
        link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff


**使用 network-manager 管理 Network Manager Service**

    $ sudo systemctl status network-manager
    ● NetworkManager.service - Network Manager
         Loaded: loaded (/lib/systemd/system/NetworkManager.service; enabled; vendor preset: enabled)
         Active: active (running) since Mon 2020-12-07 12:32:45 CST; 7min ago
           Docs: man:NetworkManager(8)
       Main PID: 18102 (NetworkManager)
          Tasks: 3 (limit: 19083)
         Memory: 7.8M
         CGroup: /system.slice/NetworkManager.service
                 └─18102 /usr/sbin/NetworkManager --no-daemon
    
    12月 07 12:32:50 SRV-2020 NetworkManager[18102]: <info>  [1607315570.1816] device (wlxd0c0bf50e619): state change: ip-config -> ip-chec>
    12月 07 12:32:50 SRV-2020 NetworkManager[18102]: <info>  [1607315570.1864] device (wlxd0c0bf50e619): state change: ip-check -> secondar>
    12月 07 12:32:50 SRV-2020 NetworkManager[18102]: <info>  [1607315570.1868] device (wlxd0c0bf50e619): state change: secondaries -> activ>
    12月 07 12:32:50 SRV-2020 NetworkManager[18102]: <info>  [1607315570.1903] device (wlxd0c0bf50e619): Activation: successful, device act>
    12月 07 12:32:51 SRV-2020 NetworkManager[18102]: <info>  [1607315571.3478] manager: startup complete
    12月 07 12:32:54 SRV-2020 NetworkManager[18102]: <info>  [1607315574.4242] dhcp6 (wlxd0c0bf50e619): activation: beginning transaction (>
    12月 07 12:33:32 SRV-2020 NetworkManager[18102]: <warn>  [1607315612.9881] dhcp6 (bridge0): request timed out
    12月 07 12:33:32 SRV-2020 NetworkManager[18102]: <info>  [1607315612.9882] dhcp6 (bridge0): state changed unknown -> timeout
    12月 07 12:33:39 SRV-2020 NetworkManager[18102]: <warn>  [1607315619.9881] dhcp6 (wlxd0c0bf50e619): request timed out
    12月 07 12:33:39 SRV-2020 NetworkManager[18102]: <info>  [1607315619.9882] dhcp6 (wlxd0c0bf50e619): state changed unknown -> timeout


**使用 nmcli 指令觀察作業系統已安裝的網路裝置（dev: device)**

    $ nmcli dev
    DEVICE                   TYPE      STATE     CONNECTION   
    bridge0                  bridge    已連線    橋接的連線 1 
    wlxd0c0bf50e619          wifi      已連線    CCC99-5G     
    virbr0                   bridge    已連線    virbr0       
    eno1                     ethernet  已連線    eno1         
    78:6C:1C:CB:0F:61        bt        離線      --           
    p2p-dev-wlxd0c0bf50e619  wifi-p2p  離線      --           
    enxd2c5f35747bc          ethernet  無法使用  --           
    lo                       loopback  不受管理  --           
    virbr0-nic               tun       不受管理  --    


**查詢連線狀態**

    $ nmcli general status
    STATE   CONNECTIVITY  WIFI-HW  WIFI    WWAN-HW  WWAN   
    已連線  已滿          已啟用   已啟用  已啟用   已啟用 


**Device Status**

    $ nmcli dev status
    DEVICE                   TYPE      STATE     CONNECTION   
    bridge0                  bridge    已連線    橋接的連線 1 
    wlxd0c0bf50e619          wifi      已連線    CCC99-5G     
    virbr0                   bridge    已連線    virbr0       
    eno1                     ethernet  已連線    eno1         
    78:6C:1C:CB:0F:61        bt        離線      --           
    p2p-dev-wlxd0c0bf50e619  wifi-p2p  離線      --           
    enxd2c5f35747bc          ethernet  無法使用  --           
    lo                       loopback  不受管理  --           
    virbr0-nic               tun       不受管理  --           


**Device Status Report**

    $ nmcli -p d status
    ==============
      裝置的狀態
    ==============
    DEVICE                   TYPE      STATE     CONNECTION   
    -------------------------------------------------------------------------
    bridge0                  bridge    已連線    橋接的連線 1 
    wlxd0c0bf50e619          wifi      已連線    CCC99-5G     
    virbr0                   bridge    已連線    virbr0       
    eno1                     ethernet  已連線    eno1         
    78:6C:1C:CB:0F:61        bt        離線      --           
    p2p-dev-wlxd0c0bf50e619  wifi-p2p  離線      --           
    enxd2c5f35747bc          ethernet  無法使用  --           
    lo                       loopback  不受管理  --           
    virbr0-nic               tun       不受管理  --           


**Connections of configured on the system**

    $ nmcli con show
    NAME                 UUID                                  TYPE       DEVICE          
    橋接的連線 1         c9171de1-ee5e-4667-9bd6-42c35b759ec8  bridge     bridge0         
    CCC99-5G             fddcb72d-251a-42be-bd72-6f3e16ccdbdd  wifi       wlxd0c0bf50e619 
    eno1                 eb312132-e6b2-46cd-9485-cc3fd5593a07  ethernet   eno1            
    virbr0               ab7a56f5-7685-4b67-9130-11b9a2ca95da  bridge     virbr0          
    bridge0 slave 1      1a1764cd-0dd2-4f7e-8f24-4236beeb3a5e  ethernet   --              
    CCC Dlink-6AD2-5GHz  2219a958-d49c-4b27-a936-77208aba2139  wifi       --              
    Hotspot              65a39bb3-f67c-4a7b-bd95-62493218aa99  wifi       --              
    iPhone-CCC 網路      8349ed64-e9c5-4fe6-ace1-e37bc41c726f  bluetooth  --              
    netplan-eno1         10838d80-caeb-349e-ba73-08ed16d4d666  ethernet   --           


**Activated connections**

    $ nmcli con show -a
    NAME          UUID                                  TYPE      DEVICE          
    橋接的連線 1  c9171de1-ee5e-4667-9bd6-42c35b759ec8  bridge    bridge0         
    CCC99-5G      fddcb72d-251a-42be-bd72-6f3e16ccdbdd  wifi      wlxd0c0bf50e619 
    eno1          eb312132-e6b2-46cd-9485-cc3fd5593a07  ethernet  eno1            
    virbr0        ab7a56f5-7685-4b67-9130-11b9a2ca95da  bridge    virbr0          


**WiFi devices**

    $ nmcli device wifi list
    IN-USE  BSSID              SSID                 MODE   CHAN  RATE        SIGNAL  BARS  SECURITY  
            74:DA:DA:03:6A:D4  CCC Dlink-6AD2-5GHz  Infra  153   270 Mbit/s  69      ▂▄▆_  WPA1 WPA2 
            74:DA:DA:03:6A:D2  CCC Dlink-6AD2       Infra  3     270 Mbit/s  67      ▂▄▆_  WPA1 WPA2 
    *       30:B7:D4:5E:4B:F8  CCC99-5G             Infra  6     195 Mbit/s  51      ▂▄__  WPA2      
            80:30:DC:2E:B3:E5  FOXC_BD_AP_SSID      Infra  11    65 Mbit/s   37      ▂▄__  WPA1 WPA2 


**Delete a device**

    $ nmcli d status                  
    DEVICE                   TYPE      STATE     CONNECTION   
    bridge0                  bridge    已連線    橋接的連線 1 
    wlxd0c0bf50e619          wifi      已連線    CCC99-5G     
    virbr0                   bridge    已連線    virbr0       
    eno1                     ethernet  已連線    eno1         
    78:6C:1C:CB:0F:61        bt        離線      --           
    p2p-dev-wlxd0c0bf50e619  wifi-p2p  離線      --           
    enxd2c5f35747bc          ethernet  無法使用  --           
    lo                       loopback  不受管理  --           
    virbr0-nic               tun       不受管理  --           
    
    $ sudo nmcli con delete virbr0    
    連線「virbr0」 (ab7a56f5-7685-4b67-9130-11b9a2ca95da) 已成功刪除。
    
    $ nmcli d status
    DEVICE                   TYPE      STATE     CONNECTION   
    bridge0                  bridge    已連線    橋接的連線 1 
    wlxd0c0bf50e619          wifi      已連線    CCC99-5G     
    eno1                     ethernet  已連線    eno1         
    virbr0                   bridge    離線      --           
    78:6C:1C:CB:0F:61        bt        離線      --           
    p2p-dev-wlxd0c0bf50e619  wifi-p2p  離線      --           
    enxd2c5f35747bc          ethernet  無法使用  --           
    lo                       loopback  不受管理  --           
    virbr0-nic               tun       不受管理  --         


**nmcli delete a network device**

    $ nmcli d       
    DEVICE                   TYPE      STATE     CONNECTION   
    bridge0                  bridge    已連線    橋接的連線 1 
    wlxd0c0bf50e619          wifi      已連線    CCC99-5G     
    eno1                     ethernet  已連線    eno1         
    virbr0                   bridge    離線      --           
    78:6C:1C:CB:0F:61        bt        離線      --           
    p2p-dev-wlxd0c0bf50e619  wifi-p2p  離線      --           
    enxd2c5f35747bc          ethernet  無法使用  --           
    lo                       loopback  不受管理  --           
    virbr0-nic               tun       不受管理  --           



    $ nmcli d delete virbr0
    裝置「virbr0」已成功移除。



    $ nmcli d              
    DEVICE                   TYPE      STATE     CONNECTION   
    bridge0                  bridge    已連線    橋接的連線 1 
    wlxd0c0bf50e619          wifi      已連線    CCC99-5G     
    eno1                     ethernet  已連線    eno1         
    78:6C:1C:CB:0F:61        bt        離線      --           
    p2p-dev-wlxd0c0bf50e619  wifi-p2p  離線      --           
    enxd2c5f35747bc          ethernet  無法使用  --           
    lo                       loopback  不受管理  --           
    virbr0-nic               tun       不受管理  --           



----------
## 硬碟管理

**增加硬碟空間**


    $ qemu-img info archlinux.qcow2 
    image: archlinux.qcow2
    file format: qcow2
    virtual size: 20 GiB (21474836480 bytes)
    disk size: 3.32 MiB
    cluster_size: 65536
    Format specific information:
        compat: 1.1
        lazy refcounts: true
        refcount bits: 16
        corrupt: false
    
    $ qemu-img resize archlinux.qcow2 +40G
    Image resized.
    
    $ qemu-img info archlinux.qcow2 
    image: archlinux.qcow2
    file format: qcow2
    virtual size: 60 GiB (64424509440 bytes)
    disk size: 3.32 MiB
    cluster_size: 65536
    Format specific information:
        compat: 1.1
        lazy refcounts: true
        refcount bits: 16
        corrupt: false



----------
## 參考文件


**virt-install 指令指引**
https://linux.die.net/man/1/virt-install


**qemu-system-x86_64 的 options 參考文件**
https://www.qemu.org/docs/master/system/index.html


**libvirt Virtual Networking**
https://wiki.libvirt.org/page/VirtualNetworking


**Ubuntu 20.04 Network Management**
https://www.answertopia.com/ubuntu/ubuntu-network-management/


**Ubuntu 20.04 network Configuration**
https://linuxhint.com/ubuntu_20-04_network_configuration/


**啟用 UEFI  支援**

https://ostechnix.com/enable-uefi-support-for-kvm-virtual-machines-in-linux/



https://www.systutorials.com/docs/linux/man/1-qemu-system-x86_64/



**How to install KVM on Ubuntu 20.04**

https://websiteforstudents.com/how-to-install-kvm-on-ubuntu-20-04-18-04/



**How to install KVM on Ubuntu 20.04 LTS Headless Server**

https://www.cyberciti.biz/faq/how-to-install-kvm-on-ubuntu-20-04-lts-headless-server/



**Qemu/Virt-manager/KVM Bridge and NAT Networking**

https://www.youtube.com/watch?v=amTJHm19ts0&&t=135s


[https://youtu.be/amTJHm19ts0?t=135s](https://youtu.be/amTJHm19ts0?t=135s)


**建置 QEMU/Libvirt 環境適用的 VM Network**

https://octetz.com/docs/2020/2020-11-13-vm-networks/



**Setting up Qemu with a Tap Interface**

https://gist.github.com/extremecoders-re/e8fd8a67a515fee0c873dcafc81d811c


[https://gist.github.com/extremecoders-re/e8fd8a67a515fee0c873dcafc81d811c](https://gist.github.com/extremecoders-re/e8fd8a67a515fee0c873dcafc81d811c)


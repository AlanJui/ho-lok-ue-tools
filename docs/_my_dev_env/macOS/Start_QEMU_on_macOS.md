# Start QEMU on macOS


https://graspingtech.com/ubuntu-desktop-18.04-virtual-machine-macos-qemu/



https://opensource.com/article/20/9/try-linux-mac




https://rambling-ideas.salessandri.name/setup-nat-network-for-qemu-in-mac-osx/




https://forums.virtualbox.org/viewtopic.php?p=66322




    brew install tuntap



    $ brew tap homebrew/cask
    $ brew cask install tuntap



    $ sudo bash
    root@MBP2018:~/workspace/qemu/test-002# exec 4<>/dev/tap0
    root@MBP2018:~/workspace/qemu/test-002# ll /dev/tap0
    crw-rw----  1 root  wheel   37,   0 12 16 21:31 /dev/tap0



    root@MBP2018:~/workspace/qemu/test-002# exec 4>&-
    root@MBP2018:~/workspace/qemu/test-002# exit
    $



----------


## Install QEMU


    brew install qemu



    qemu-system-x86_64 --version



## Create a Disk Image


    qemu-img create -f qcow2 vdisk.qcow2 20G



## Install OS with ISO


    touch start.sh
    sudo chmod +x start.sh
    vim start.sh

**start.sh**

    #!/bin/sh
    qemu-system-x86_64 \
      -machine type=q35,accel=hvf \
      -cpu host \
      -smp cpus=6 \
      -m 4G \
      -vga virtio \
      -display default,show-cursor=on \
      -device usb-tablet \
      -usb \
      -cdrom $HOME/ISO/debian-10.7.0-amd64-netinst.iso \
      -drive file=vdisk.qcow2,if=virtio \
      -boot d



    ./start.sh



## Launch OS


    vim start.sh


    start.sh
    #!/bin/sh
    qemu-system-x86_64 \
      ......
      -boot c



    ./start.shlll


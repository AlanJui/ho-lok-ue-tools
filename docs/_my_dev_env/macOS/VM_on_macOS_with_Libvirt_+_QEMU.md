---
sidebar: auto
---

# macOS 使用 Libvirt + QEMU 建置 VM 指引

https://www.naut.ca/blog/2020/08/26/ubuntu-vm-on-macos-with-libvirt-qemu/

---

## NAT 網路

https://rambling-ideas.salessandri.name/setup-nat-network-for-qemu-in-mac-osx/

![](https://paper-attachments.dropbox.com/s_0B73CB7F4D14E6D0E0B06E068565277F4E4DEC60C43E40C1FB34DDEE4E1FB7F5_1608381246655_image.png)

**Creating the bridge interface**

1.

    sudo ifconfig bridge1 create


    bridge1: flags=8822<BROADCAST,SMART,SIMPLEX,MULTICAST> mtu 1500
            options=63<RXCSUM,TXCSUM,TSO4,TSO6>
            ether f2:18:98:45:b4:01
            Configuration:
                    id 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0
                    maxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200
                    root id 0:0:0:0:0:0 priority 0 ifcost 0 port 0
                    ipfilter disabled flags 0x0
            nd6 options=201<PERFORMNUD,DAD>
            media: <unknown type>
            status: inactive

2.

    sudo ifconfig bridge1 192.168.100.1/24


    bridge1: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
            options=63<RXCSUM,TXCSUM,TSO4,TSO6>
            ether f2:18:98:45:b4:01
            inet 192.168.100.1 netmask 0xffffff00 broadcast 192.168.100.255
            Configuration:
                    id 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0
                    maxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200
                    root id 0:0:0:0:0:0 priority 0 ifcost 0 port 0
                    ipfilter disabled flags 0x0
            nd6 options=201<PERFORMNUD,DAD>
            media: <unknown type>
            status: inactive

**Packet forwarding and NAT**

3.

    vim pfctl-nat-config

pfctl-nat-config

    nat on en10 from bridge1:network to any -> (en10)

4.

    sudo pfctl -F all
    Password:
    No ALTQ support in kernel
    ALTQ related functions disabled
    rules cleared
    nat cleared
    dummynet cleared
    0 tables deleted.
    0 states cleared
    source tracking entries cleared
    pf: statistics cleared
    pf: interface flags reset

5.

    sudo pfctl -f ./pfctl-nat-config -e
    pfctl: Use of -f option, could result in flushing of rules
    present in the main ruleset added by the system at startup.
    See /etc/pf.conf for further details.

    No ALTQ support in kernel
    ALTQ related functions disabled
    pf enabled

**Setting up the DHCP server**

6.

    sudo vim /etc/bootpd.list

/etc/bootpd.list

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
        <dict>
            <key>bootp_enabled</key>
            <false/>
            <key>dhcp_enabled</key>
            <array>
                <string>bridge1</string>
            </array>
            <key>netboot_enabled</key>
            <false/>
            <key>relay_enabled</key>
            <false/>
            <key>Subnets</key>
            <array>
                <dict>
                    <key>name</key>
                    <string>VM NAT Network (192.168.100.0/24)</string>
                    <key>net_mask</key>
                    <string>255.255.255.0</string>
                    <key>net_address</key>
                    <string>192.168.100.0</string>
                    <key>net_range</key>
                    <array>
                        <string>192.168.100.2</string>
                        <string>192.168.100.254</string>
                    </array>
                    <key>allocate</key>
                    <true/>
                    <key>dhcp_router</key>
                    <string>192.168.100.1</string>
                    <key>dhcp_domain_name_server</key>
                    <array>
                        <string>8.8.8.8</string>
                    </array>
                </dict>
            </array>
        </dict>
    </plist>

7.

     sudo /usr/libexec/bootpd -D

**QEMU and interface setup**

8.

    ./s01-create-hd
    ./s02-install-vm

---

## 安裝 tap/tun 工具

1.

    brew install --cask tuntap

2.  Reboot OS

## 建置 tap 網路

**釋放網路介面卡網址**

    $ ifconfig
    ......
    en7: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
            options=6407<RXCSUM,TXCSUM,VLAN_MTU,CHANNEL_IO,PARTIAL_CSUM,ZEROINVERT_CSUM>
            ether 00:14:3d:14:45:f8
            inet6 fe80::184f:b99:3a1e:bdc1%en7 prefixlen 64 secured scopeid 0x14
            inet 192.168.66.236 netmask 0xffffff00 broadcast 192.168.66.255
            nd6 options=201<PERFORMNUD,DAD>
            media: autoselect (100baseTX <full-duplex>)
            status: active

    $ sudo ifconfig en7 down

    $ ifconfig
    ......
    en7: flags=8822<BROADCAST,SMART,SIMPLEX,MULTICAST> mtu 1500
            options=6407<RXCSUM,TXCSUM,VLAN_MTU,CHANNEL_IO,PARTIAL_CSUM,ZEROINVERT_CSUM>
            ether 00:14:3d:14:45:f8
            nd6 options=201<PERFORMNUD,DAD>
            media: autoselect (none)
            status: inactive



    $ sudo ifconfig bridge0 down

    $ ifconfig
    ......
    bridge0: flags=8822<BROADCAST,SMART,SIMPLEX,MULTICAST> mtu 1500
            options=3<RXCSUM,TXCSUM>
            ether d0:37:45:d2:70:98
            inet6 fe80::cf0:4f39:9250:31d5%bridge0 prefixlen 64 secured scopeid 0xf
            inet6 fd00:30b7:d45e:4bf2:103e:27cc:b83f:321d prefixlen 64 autoconf secured
            inet6 fd00:30b7:d45e:4bf2:a1d4:1d24:9af3:2a70 prefixlen 64 autoconf temporary
            inet 192.168.66.21 netmask 0xffffff00 broadcast 192.168.66.255
            inet 192.168.66.19 netmask 0xffffff00 broadcast 192.168.66.255
            Configuration:
                    id 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0
                    maxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200
                    root id 0:0:0:0:0:0 priority 0 ifcost 0 port 0
                    ipfilter disabled flags 0x0
            member: en10 flags=3<LEARNING,DISCOVER>
                    ifmaxaddr 0 port 10 priority 0 path cost 0
            member: en7 flags=3<LEARNING,DISCOVER>
                    ifmaxaddr 0 port 20 priority 0 path cost 0
            nd6 options=201<PERFORMNUD,DAD>
            media: autoselect
            status: active
    ......

    $ sudo ifconfig bridge0 addm en7

    $ ifconfig
    ......
    en7: flags=8963<UP,BROADCAST,SMART,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
            options=6407<RXCSUM,TXCSUM,VLAN_MTU,CHANNEL_IO,PARTIAL_CSUM,ZEROINVERT_CSUM>
            ether 00:14:3d:14:45:f8
            inet6 fe80::184f:b99:3a1e:bdc1%en7 prefixlen 64 duplicated secured scopeid 0x14
            inet 192.168.66.236 netmask 0xffffff00 broadcast 192.168.66.255
            nd6 options=201<PERFORMNUD,DAD>
            media: autoselect (100baseTX <full-duplex>)
            status: active




    $ sudo sh -c "exec 5<>/dev/tap0; chown $USER: /dev/tap0"
    $ ll /dev/tap0
    crw-rw----  1 alanjui  wheel   22,   0 12 19 14:07 /dev/tap0



    $ sudo ifconfig bridge0 addm tap0
    $ ifconfig
    ......
    bridge0: flags=8822<BROADCAST,SMART,SIMPLEX,MULTICAST> mtu 1500
            options=3<RXCSUM,TXCSUM>
            ether d0:37:45:d2:70:98
            inet6 fe80::cf0:4f39:9250:31d5%bridge0 prefixlen 64 secured scopeid 0xf
            inet6 fd00:30b7:d45e:4bf2:103e:27cc:b83f:321d prefixlen 64 autoconf secured
            inet6 fd00:30b7:d45e:4bf2:a1d4:1d24:9af3:2a70 prefixlen 64 autoconf temporary
            inet 192.168.66.21 netmask 0xffffff00 broadcast 192.168.66.255
            inet 192.168.66.19 netmask 0xffffff00 broadcast 192.168.66.255
            Configuration:
                    id 0:0:0:0:0:0 priority 0 hellotime 0 fwddelay 0
                    maxage 0 holdcnt 0 proto stp maxaddr 100 timeout 1200
                    root id 0:0:0:0:0:0 priority 0 ifcost 0 port 0
                    ipfilter disabled flags 0x0
            member: en10 flags=3<LEARNING,DISCOVER>
                    ifmaxaddr 0 port 10 priority 0 path cost 0
            member: en7 flags=3<LEARNING,DISCOVER>
                    ifmaxaddr 0 port 20 priority 0 path cost 0
            member: tap0 flags=3<LEARNING,DISCOVER>
                    ifmaxaddr 0 port 19 priority 0 path cost 0
            nd6 options=201<PERFORMNUD,DAD>
            media: autoselect
            status: active
    ......
    tap0: flags=8943<UP,BROADCAST,RUNNING,PROMISC,SIMPLEX,MULTICAST> mtu 1500
            ether 52:53:79:9b:1c:3a
            media: autoselect
            status: active
            open (pid 11861)




    sudo ifconfig bridge0 up

**(1) Establish the Bridge Interface**

![](https://paper-attachments.dropbox.com/s_0B73CB7F4D14E6D0E0B06E068565277F4E4DEC60C43E40C1FB34DDEE4E1FB7F5_1608434952756_image.png)

    sudo ifconfig bridge1 192.168.100.1/24

**(2) Enable NAT on macOS**

    sudo ./pf_nat.sh

pf_nat.sh

    #!/bin/sh

    NIC="en10"
    BRIDGE="bridge1"

    sudo cat > /usr/local/etc/pf-nat.conf << EOF
    nat on $NIC from $BRIDGE:network to any -> ($NIC)
    EOF

    sudo pfctl -d
    sudo sysctl -w net.inet.ip.forwarding=1
    sudo pfctl -f /usr/local/etc/pf-nat.conf -e

**(3) Setting up the DHCP server**

    sudo /usr/libexec/bootpd -D

**/etc/bootpd.list** :

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
        <dict>
            <key>bootp_enabled</key>
            <false/>
            <key>dhcp_enabled</key>
            <array>
                <string>bridge1</string>
            </array>
            <key>netboot_enabled</key>
            <false/>
            <key>relay_enabled</key>
            <false/>
            <key>Subnets</key>
            <array>
                <dict>
                    <key>name</key>
                    <string>VM NAT Network (192.168.100.0/24)</string>
                    <key>net_mask</key>
                    <string>255.255.255.0</string>
                    <key>net_address</key>
                    <string>192.168.100.0</string>
                    <key>net_range</key>
                    <array>
                        <string>192.168.100.2</string>
                        <string>192.168.100.254</string>
                    </array>
                    <key>allocate</key>
                    <true/>
                    <key>dhcp_router</key>
                    <string>192.168.100.1</string>
                    <key>dhcp_domain_name_server</key>
                    <array>
                        <string>8.8.8.8</string>
                    </array>
                </dict>
            </array>
        </dict>
    </plist>

**(4) Install VM**

    ./s01-create-hd

    sudo ./s02-install-vm

**s02-install-vm** :

    #!/bin/sh
    VM_NAME="ARCH-01"
    MAC_ADDR=$(./qemu-mac-hasher.py "$VM_NAME")

    echo "VM_NAME=$VM_NAME"
    echo "MAC_ADDR=$MAC_ADDR"

    qemu-system-x86_64 \
        -name "$VM_NAME" \
        -machine q35,accel=hvf \
        -cpu host \
        -smp cpus=2 \
        -m 2048 \
        -vga virtio \
        -display default,show-cursor=on \
        -usb \
        -device usb-tablet \
        -drive media=disk,format=qcow2,file=./vdisk1.qcow2 \
        -cdrom $HOME/ISO/debian-10.7.0-amd64-netinst.iso \
        -netdev tap,id=nd0,ifname=tap0,script=./qemu-ifup.sh,downscript=./qemu-ifdown.sh \
        -device virtio-net-pci,netdev=nd0,mac="$MAC_ADDR" \
        -boot n

---

## brew services manager

     brew services --help
    Usage: brew services [subcommand]

    Manage background services with macOS' launchctl(1) daemon manager.

    If sudo is passed, operate on /Library/LaunchDaemons (started at boot).
    Otherwise, operate on ~/Library/LaunchAgents (started at login).

    [sudo] brew services [list]:
        List all managed services for the current user (or root).

    [sudo] brew services run (formula|--all):
        Run the service formula without registering to launch at login (or boot).

    [sudo] brew services start (formula|--all):
        Start the service formula immediately and register it to launch at login
    (or boot).

    [sudo] brew services stop (formula|--all):
        Stop the service formula immediately and unregister it from launching at
    login (or boot).

    [sudo] brew services restart (formula|--all):
        Stop (if necessary) and start the service formula immediately and register
    it to launch at login (or boot).

    [sudo] brew services cleanup:
        Remove all unused services.

          --all                        Run subcommand on all services.
      -d, --debug                      Display any debugging information.
      -q, --quiet                      Make some output more quiet.
      -v, --verbose                    Make some output more verbose.
      -h, --help                       Show this message.



    brew services start libvirt


    brew services stop libvirt


    brew services restart libvirt


    $ brew services
    Name    Status  User    Plist
    libvirt started alanjui /Users/alanjui/Library/LaunchAgents/homebrew.mxcl.libvirt.plist
    unbound started root    /Library/LaunchDaemons/homebrew.mxcl.unbound.plist

## Network

Ref: [Setting up Qemu with a tap interface](https://gist.github.com/extremecoders-re/e8fd8a67a515fee0c873dcafc81d811c)

## [**How to install Qemu on MAC OSX 10.6 & 10.7**](http://forum.gns3.net/topic4600-10.html?sid=bcc54b911ab5f3ee60c34ab608e8a2d2)

## [Bridged network on macOS host (10.14.6 Mojave)](https://www.emaculation.com/forum/viewtopic.php?f=34&t=10411&sid=862ba8c952aaf298c80eddc3ed438199)

**s01-chreate-hd**

    #!/bin/sh
    qemu-img create -f qcow2 vdisk1.qcow2 30G

**s00-generate-mac**

    #!/usr/local/bin/bash
    # generate a random mac address for the qemu nic
    # printf 'DE:AD:BE:EF:%02X:%02X\n' $((RANDOM%256)) $((RANDOM%256))
    VAR1=$((RANDOM%256))
    VAR2=$((RANDOM%256))
    MAC_ADDR="DE:AD:BE:EF:$VAR1:$VAR2"

    echo "export MAC_ADDR='$MAC_ADDR'"

    export MAC_ADDR="$MAC_ADDR"

**qemu-mac-hasher.py**

    #!/usr/bin/env python
    # usage: qemu-mac.hasher.py <VMName>

    import sys
    import zlib

    crc = str(hex(zlib.crc32(sys.argv[1].encode("utf-8"))))[-8:]
    print("52:54:%s%s:%s%s:%s%s:%s%s" % tuple(crc))

**s02-install**

    #!/bin/sh
    VM_NAME="arch-001"
    MAC_ADDR=$(./qemu-mac-hasher.py "$VM_NAME")

    echo "VM_NAME = $VM_NAME"
    echo "MAC_ADDR = $MAC_ADDR"

    qemu-system-x86_64 \
        -name "$VM_NAME" \
        -machine type=q35,accel=hvf \
        -cpu host \
        -smp cpus=6 \
        -m 4G \
        -vga virtio \
        -display default,show-cursor=on \
        -usb \
        -device usb-tablet \
        -drive file=./vdisk1.qcow2,if=virtio \
        -cdrom $HOME/ISO/debian-10.7.0-amd64-netinst.iso \
        -nic user,id=eth0,restrict=off,ipv4=on,ipv6=off,model=virtio,mac="$MAC_ADDR" \
        -boot n

**s03-start-vm**

    #!/bin/sh
    qemu-system-x86_64 \
        -name "$VM_NAME" \
        -machine type=q35,accel=hvf \
        -cpu host \
        -smp cpus=6 \
        -m 4G \
        -vga virtio \
        -display default,show-cursor=on \
        -usb \
        -device usb-tablet \
        -drive file=./vdisk1.qcow2,if=virtio \
        -nic user,id=eth0vi,model=virtio,restrict=off \
        -boot c

## 參考

**ifconfig 指令**

    ifconfig --help
    ifconfig: illegal option -- -
    usage: ifconfig \[-C\] [-L] interface address_family [address [dest_address]]
                    [parameters]
           ifconfig interface create
           ifconfig -a \[-C\] [-L] \[-d\] [-m] \[-u\] [-v] [address_family]
           ifconfig -l \[-d\] [-u] [address_family]
           ifconfig \[-C\] [-L] \[-d\] [-m] \[-u\] [-v]

**Download tuntaposx**

https://github.com/mal/docker-for-mac-host-bridge/issues/2

[mal/docker-for-mac-host-bridge#2](https://github.com/mal/docker-for-mac-host-bridge/issues/2)

https://github.com/AlmirKadric-Published/docker-tuntap-osx

https://gist.github.com/retspen/4e6ec73271594399c050f6f8027a9880

[https://gist.github.com/retspen/4e6ec73271594399c050f6f8027a9880](https://gist.github.com/retspen/4e6ec73271594399c050f6f8027a9880)

## NIC Models:

    sudo qemu-system-x86_64  -nic tap,model=help
    Password:
    Supported NIC models:
    e1000
    e1000-82544gc
    e1000-82545em
    e1000e
    i82550
    i82551
    i82557a
    i82557b
    i82557c
    i82558a
    i82558b
    i82559a
    i82559b
    i82559c
    i82559er
    i82562
    i82801
    ne2k_pci
    pcnet
    rtl8139
    tulip
    virtio-net-pci
    virtio-net-pci-non-transitional
    virtio-net-pci-transitional
    vmxnet3

**-nic user**

    #!/bin/sh
    VM_NAME="ARCH-01"
    MAC_ADDR=$(./qemu-mac-hasher.py "$VM_NAME")

    echo "VM_NAME=$VM_NAME"
    echo "MAC_ADDR=$MAC_ADDR"

    qemu-system-x86_64 \
        -name "$VM_NAME" \
        -machine q35,accel=hvf \
        -cpu host \
        -smp cpus=2 \
        -m 2048 \
        -vga virtio \
        -display default,show-cursor=on \
        -usb \
        -device usb-tablet \
        -drive media=disk,format=qcow2,file=./vdisk1.qcow2 \
        -cdrom $HOME/ISO/debian-10.7.0-amd64-netinst.iso \
        -nic user,ipv6=off,model=virtio-net-pci,mac="$MAC_ADDR" \
        -boot n

![](https://paper-attachments.dropbox.com/s_0B73CB7F4D14E6D0E0B06E068565277F4E4DEC60C43E40C1FB34DDEE4E1FB7F5_1608426343884_image.png)

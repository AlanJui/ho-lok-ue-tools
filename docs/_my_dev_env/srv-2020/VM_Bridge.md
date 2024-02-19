---
sidebar: auto
---
# Virtual Bridge 設定指引
## 摘要

在 Ubuntu 作業系統，使用 Virtual Machine Manager (QEMU/KVM) 建置虛擬電腦，
需要在「網路介面」增設 Virtual Bridge ，以便 Virtual Machine Manager 所建
置的各個虛擬電腦可以連上 local network 所使用之「網段」。

以下作業程序，屬「老式」作法，得在「終端機」手動輸入指令完成。新式作法，可透過
netplan 的設定檔，一下子完成。

## 作業程序

### 1. 檢視網路設定現況

檢查作業系統已能識別之「網路介面」，及其「現狀」。

```
$ ip a s
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eno1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
3: br0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UNKNOWN group default qlen 1000
    link/ether de:34:fd:08:81:02 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::dc34:fdff:fe08:8102/64 scope link
       valid_lft forever preferred_lft forever
4: enx00e04c7887f2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:e0:4c:78:87:f2 brd ff:ff:ff:ff:ff:ff
    inet 192.168.66.19/24 brd 192.168.66.255 scope global noprefixroute enx00e04c7887f2
       valid_lft forever preferred_lft forever
5: lxcbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 00:16:3e:00:00:00 brd ff:ff:ff:ff:ff:ff
    inet 10.0.3.1/24 brd 10.0.3.255 scope global lxcbr0
       valid_lft forever preferred_lft forever
```

檢查目前 route 設定之「現況」。

```
$ route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         hitronhub.home  0.0.0.0         UG    100    0        0 enx00e04c7887f2
10.0.3.0        0.0.0.0         255.255.255.0   U     0      0        0 lxcbr0
link-local      0.0.0.0         255.255.0.0     U     1000   0        0 enx00e04c7887f2
192.168.66.0    0.0.0.0         255.255.255.0   U     100    0        0 enx00e04c7887f2
```
### 2. 停用「有線網路介面」及清除舊有的設定

關閉「網路介面卡」，及不用的「Virtual Bridge」。

```
$ sudo ip link set eno1 down
$ sudo ip link set down br0
```

刪除某些網路介面。（原有之 br0 ，與我們打算命名的 Virtual Bridge 同名，
故將舊有之 br0 Virtual Bridge 刪除。）

```
$ sudo ip link delete br0 type bridge
```

檢視已執行的「停用」、「刪除」指令，是否已生效。

```
$ ip a s
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eno1: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
    link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    inet 192.168.66.10/16 brd 192.168.255.255 scope global dynamic noprefixroute eno1
       valid_lft 597453sec preferred_lft 597453sec
7: lxcbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 00:16:3e:00:00:00 brd ff:ff:ff:ff:ff:ff
    inet 10.0.3.1/24 brd 10.0.3.255 scope global lxcbr0
       valid_lft forever preferred_lft forever
11: enx00e04c7887f2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:e0:4c:78:87:f2 brd ff:ff:ff:ff:ff:ff
```
### 3. 建立名為 br0 的 Virtual Bridge

建立新的 Virtual Bridge ，並將之命名為：「br0」。

```
$ sudo ip link add name br0 type bridge

$ ip a s
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eno1: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
    link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    inet 192.168.66.10/16 brd 192.168.255.255 scope global dynamic noprefixroute eno1
       valid_lft 597387sec preferred_lft 597387sec
7: lxcbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 00:16:3e:00:00:00 brd ff:ff:ff:ff:ff:ff
    inet 10.0.3.1/24 brd 10.0.3.255 scope global lxcbr0
       valid_lft forever preferred_lft forever
11: enx00e04c7887f2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:e0:4c:78:87:f2 brd ff:ff:ff:ff:ff:ff
12: br0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UNKNOWN group default qlen 1000
    link/ether 86:38:ba:bd:88:59 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::8438:baff:febd:8859/64 scope link
       valid_lft forever preferred_lft forever
```

### 4. 將有線網路介面(NIC)綁至 br0 Bridge

```
$ sudo ip link set eno1 master br0

$ ip a s
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eno1: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master br0 state DOWN group default qlen 1000
    link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    inet 192.168.66.10/16 brd 192.168.255.255 scope global dynamic noprefixroute eno1
       valid_lft 596563sec preferred_lft 596563sec
7: lxcbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 00:16:3e:00:00:00 brd ff:ff:ff:ff:ff:ff
    inet 10.0.3.1/24 brd 10.0.3.255 scope global lxcbr0
       valid_lft forever preferred_lft forever
11: enx00e04c7887f2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:e0:4c:78:87:f2 brd ff:ff:ff:ff:ff:ff
12: br0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    inet6 fe80::8438:baff:febd:8859/64 scope link
       valid_lft forever preferred_lft forever
```

### 5. 在有線網路介面，設定 IP ，並指定使用 br0 Bridge 

```
$ sudo ip addr add 192.168.4.7/16 dev br0 brd 192.168.255.255

$ ip a s
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eno1: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master br0 state DOWN group default qlen 1000
    link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
7: lxcbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 00:16:3e:00:00:00 brd ff:ff:ff:ff:ff:ff
    inet 10.0.3.1/24 brd 10.0.3.255 scope global lxcbr0
       valid_lft forever preferred_lft forever
11: enx00e04c7887f2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:e0:4c:78:87:f2 brd ff:ff:ff:ff:ff:ff
12: br0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 90:2b:34:d1:a6:1b brd ff:ff:ff:ff:ff:ff
    inet 192.168.4.7/16 brd 192.168.255.255 scope global br0
       valid_lft forever preferred_lft forever
    inet6 fe80::8438:baff:febd:8859/64 scope link
       valid_lft forever preferred_lft forever
```

【註】：欲刪除有線網路介面，已有之 IP 設定。

```
$ sudo ip addr del 192.168.4.7/16 dev br0
```

### 6. 檢視網路 route 設定的現況

```
$ route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
10.0.3.0        0.0.0.0         255.255.255.0   U     0      0        0 lxcbr0
192.168.0.0     0.0.0.0         255.255.0.0     U     0      0        0 br0
192.168.66.0    0.0.0.0         255.255.255.0   U     0      0        0 enx00e04c7887f2
```

### 7. 設定網段使用的 Default Gateway

```
$ sudo route add default gw 192.168.1.1

$ route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         hitronhub.home  0.0.0.0         UG    0      0        0 br0
default         hitronhub.home  0.0.0.0         UG    1024   0        0 br0
10.0.3.0        0.0.0.0         255.255.255.0   U     0      0        0 lxcbr0
192.168.0.0     0.0.0.0         255.255.0.0     U     0      0        0 br0
hitronhub.home  0.0.0.0         255.255.255.255 UH    1024   0        0 br0
```

驗證 Default Gateway 已能正常運作，網路封包可送至 Internet 。

```
$ ping google.com
```

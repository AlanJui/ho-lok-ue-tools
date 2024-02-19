---
sidebar: auto
---

# Samba Server 安裝作業指引

## 硬碟與系統環境之前置要求

由於 SRV-2020 伺服器的規劃，Samba Server 提供的服務，須配合「第二顆硬碟」
使用，故在執行以下之安裝作業前，請先依照[《掛載第二顆硬碟作業指引》](./掛載第二顆硬碟)
，事先完成硬碟之安裝。

## 安裝作業

### 設定硬碟將掛載目錄之使用者及權限

設定第二顆硬碟的使用者及權限

    $ sudo mkdir /NAS
    $ sudo chmod -R 0770 /NAS
    $ sudo chown -R root:sambashare /NAS

### 安裝軟體套件

    $ sudo apt install samba

### 驗證「服務」已被啟動

    $ systemctl status smbd

### 修訂「設定檔」

    $ sudo nano -w /etc/samba/smb.conf

/etc/samba/**smb.conf**

```
# Sample configuration file for the Samba suite for Debian GNU/Linux.
#
#
# This is the main Samba configuration file. You should read the
# smb.conf(5) manual page in order to understand the options listed
# here. Samba has a huge number of configurable options most of which
# are not shown in this example
#
# Some options that are often worth tuning have been included as
# commented-out examples in this file.
#  - When such options are commented with ";", the proposed setting
#    differs from the default Samba behaviour
#  - When commented with "#", the proposed setting is the default
#    behaviour of Samba but the option is considered important
#    enough to be mentioned here
#
# NOTE: Whenever you modify this file you should run the command
# "testparm" to check that you have not made any basic syntactic
# errors.

#======================= Global Settings =======================

[global]

## Browsing/Identification ###

# Change this to the workgroup/NT-domain name your Samba server will part of
workgroup = WORKGROUP
netbios name = SRV-01

# server string is the equivalent of the NT Description field
server string = %h server (Samba, Ubuntu)

dns proxy = no

#### Networking ####

#### Debugging/Accounting ####
log file = /var/log/samba/log.%m

max log size = 1000

syslog = 0

panic action = /usr/share/samba/panic-action %d

####### Authentication #######
server role = standalone server
#security = user

passdb backend = tdbsam
obey pam restrictions = yes

unix password sync = yes

passwd program = /usr/bin/passwd %u
passwd chat = *Enter\snew\s*\spassword:* %n\n *Retype\snew\s*\spassword:* %n\n *password\supdated\ssuccessfully* .

pam password change = yes

map to guest = bad user

########## Domains ###########

############ Misc ############
usershare allow guests = yes

#============= Share Definitions =================

[printers]
comment = All Printers
browseable = no
path = /var/spool/samba
printable = yes
guest ok = no
read only = yes
create mask = 0700

[print$]
comment = Printer Drivers
path = /var/lib/samba/printers
browseable = yes
read only = yes
guest ok = no

#=================================================

[Anonymous]
path=/home/anonymous
browsable = yes
writable = yes
guest ok = yes
read only = no
force user = nobody
create mask = 0775

[pdf-documents]
path = /var/lib/samba/pdf-documents
comment = Converted PDF Documents
admin users = %U
available = yes
browseable = yes
writeable = yes
guest ok = yes
locking = no
strict locking = no

[pdf-printer]
path = /tmp
comment = PDF Printer Service
printable = yes
guest ok = yes
use client driver = yes
printing = bsd
print command = /usr/bin/gadmin-samba-pdf %s %u
lpq command =
lprm command =

[Temp]
comment = Public temp folder
path = /NAS/tmp
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = yes

[VirtualHosts]
comment = Virtual hosts for HTTP Server
path = /var/www
valid users = @sambashare
guest ok = no
browsable = yes
read only = no
writable = yes
create mask = 0775
directory mask = 0775

[AlanJui_Home]
comment = Home directory for SRV-01
path = /home/alanjui
valid users = @sambashare
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[Cloud]
comment = Public workspace folder
path = /NAS/Cloud
valid users = @sambashare
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[Downloads]
comment = Public workspace folder
path = /NAS/Downloads
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[Dropbox]
comment = Public workspace folder
path = /NAS/Dropbox
valid users = @sambashare
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[GitRepo]
comment = Public workspace folder
path = /NAS/GitRepo
valid users = @sambashare
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[Documents]
comment = Public workspace folder
path = /NAS/Documents
valid users = @sambashare
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[Movies]
comment = Public workspace folder
path = /NAS/Movies
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[Music]
comment = Public workspace folder
path = /NAS/Music
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[Photos]
comment = Public workspace folder
path = /NAS/Photos
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[Pictures]
comment = Public workspace folder
path = /NAS/Pictures
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[PAL]
comment = Process Acceset Library
path = /NAS/PAL
valid users = @sambashare
guest ok = no
browsable = yes
writable = yes

[Projects]
comment = Public workspace folder
path = /NAS/Projects
valid users = @sambashare
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[tmp]
comment = Public workspace folder
path = /NAS/tmp
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[Workspace]
comment = Public workspace folder
path = /NAS/Workspace
valid users = @sambashare
browsable = yes
read only = no
create mask = 0775
directory mask = 0775
guest ok = no

[PublicShare]
path = /NAS/PublicShare
comment = Anybody can view
valid users = %U
write list = %U
read only = no
available = yes
browseable = yes
writable = no
guest ok = no
public = no
printable = no
locking = no
strict locking = no
```

確定 Samba 設定檔中的設定無誤

```
root@srv-01:~# testparm
Load smb config files from /etc/samba/smb.conf
rlimit_max: increasing rlimit_max (1024) to minimum Windows limit (16384)
Processing section "[Anonymous]"
Processing section "[pdf-documents]"
Processing section "[pdf-printer]"
Processing section "[Temp]"
Processing section "[AlanJui_Home]"
Processing section "[Cloud]"
Processing section "[Downloads]"
Processing section "[Dropbox]"
Processing section "[GitRepo]"
Processing section "[Documents]"
Processing section "[Movies]"
Processing section "[Music]"
Processing section "[Photos]"
Processing section "[Pictures]"
Processing section "[PAL]"
Processing section "[Projects]"
Processing section "[tmp]"
Processing section "[Workspace]"
Processing section "[PublicShare]"
Loaded services file OK.
WARNING: You have some share names that are longer than 12 characters.
These may not be accessible to some older clients.
(Eg. Windows9x, WindowsMe, and smbclient prior to Samba 3.0.)
Server role: ROLE_STANDALONE

Press enter to see a dump of your service definitions
...
```

## Samba Server 安全設定

1. 提供 anonymous 使用權限的設定

```
$ sudo mkdir -p /home/anonymous
$ sudo ll /home/
總計 32
drwxr-xr-x 5 root root 4096 11 月 20 08:21 ./
drwxr-xr-x 25 root root 4096 11 月 19 13:10 ../
drwxrwxrwx 76 alanjui alanjui 4096 11 月 20 07:27 alanjui/
drwxr-xr-x 2 root root 4096 11 月 20 08:21 anonymous/
drwx------ 2 root root 16384 11 月 19 11:47 lost+found/
$ sudo chmod -R 0775 /home/anonymous/
$ sudo chown -R nobody:nogroup /home/anonymous/
```

2. 提供 Samba Server 使用者的權限設定

將使用者加入「群組：sambashare」，並為使用者設定密碼。

```
$ sudo usermod -aG sambashare alanjui #sudo useradd -G alanjui sambashare
$ sudo smbpasswd -a alanjui
New SMB password:
Retype new SMB password:
Added user alanjui.
```

## Samba Server 使用者管理作業

### 建立 Samba Server 之使用者帳號

在 Ubuntu 伺服器，建立新使用者帳號，並將之加入「Samba Server」，
使該使用者帳號，擁有 Samba 伺服器之使用權限。

```
sudo adduser <user_id>

sudo smbpasswd -a <user_id>
```

### 將伺服器使用者加入 sambashare 群組

將伺服器已建立之使用者帳號加入 sambashare 使用者群組。

```
$ sudo usermod -aG sambashare <user_id>

alanjui@SRV-01:~$ getent group sambashare
sambashare:x:126:alanjui,admin,amos
alanjui@SRV-01:~$ sudo usermod -G sambashare juzhengzhong
alanjui@SRV-01:~$ getent group sambashare
sambashare:x:126:alanjui,admin,amos,juzhengzhong
```

### 查詢使用者帳號

確認已設定之 Samba Server 使用者帳號有那些。

```
sudo pdbedit -L


alanjui@SRV-01:~$ sudo pdbedit -L
alanjui:1000:Alan Jui
amos:1002:
admin:1001:System Admin
```

### 查詢 sambashare 群組

確認 sambashare 群組中，所屬之全部使用者帳號。

```
getent group sambashare


juzhengzhong:1003:Ju Zheng-Zhong
alanjui@SRV-01:~$ getent group sambashare
sambashare:x:126:alanjui,admin,amos
```

## Samba Server 管理作業

### 重新啟動 Samba Service

```
$ sudo systemctl restart smbd
```

### 查詢 Samba Service 執行狀態

```
$ sudo systemctl status smbd
● smbd.service - LSB: start Samba SMB/CIFS daemon (smbd)
Loaded: loaded (/etc/init.d/smbd; bad; vendor preset: enabled)
Active: active (running) since 一 2017-11-20 08:28:21 CST; 10s ago
 Docs: man:systemd-sysv-generator(8)
Process: 29370 ExecStop=/etc/init.d/smbd stop (code=exited, status=0/SUCCESS)
Process: 29383 ExecStart=/etc/init.d/smbd start (code=exited, status=0/SUCCESS
CGroup: /system.slice/smbd.service
       ├─29401 /usr/sbin/smbd -D
       ├─29402 /usr/sbin/smbd -D
       └─29404 /usr/sbin/smbd -D

11月 20 08:28:21 srv-01 systemd[1]: Starting LSB: start Samba SMB/CIFS daemon (s
11月 20 08:28:21 srv-01 smbd[29383]:  * Starting SMB/CIFS daemon smbd
11月 20 08:28:21 srv-01 smbd[29383]:    ...done.
11月 20 08:28:21 srv-01 systemd[1]: Started LSB: start Samba SMB/CIFS daemon (sm
11月 20 08:28:21 srv-01 smbd[29401]: [2017/11/20 08:28:21.278156,  0] ../lib/uti
11月 20 08:28:21 srv-01 smbd[29401]:   STATUS=daemon 'smbd' finished starting up
```

## 參考資訊

### - [建立多使用者 SMB 掛載目錄](https://dywang.csie.cyut.edu.tw/dywang/rhce7/node51.html)

### - smb.conf 預設內容

/etc/samba/smb.conf:

```
#
# Sample configuration file for the Samba suite for Debian GNU/Linux.
#
#
# This is the main Samba configuration file. You should read the
# smb.conf(5) manual page in order to understand the options listed
# here. Samba has a huge number of configurable options most of which
# are not shown in this example
#
# Some options that are often worth tuning have been included as
# commented-out examples in this file.
#  - When such options are commented with ";", the proposed setting
#    differs from the default Samba behaviour
#  - When commented with "#", the proposed setting is the default
#    behaviour of Samba but the option is considered important
#    enough to be mentioned here
#
# NOTE: Whenever you modify this file you should run the command
# "testparm" to check that you have not made any basic syntactic
# errors.

#======================= Global Settings =======================

[global]

## Browsing/Identification ###

# Change this to the workgroup/NT-domain name your Samba server will part of
workgroup = WORKGROUP

# server string is the equivalent of the NT Description field
    server string = %h server (Samba, Ubuntu)

# Windows Internet Name Serving Support Section:
# WINS Support - Tells the NMBD component of Samba to enable its WINS Server
#   wins support = no

# WINS Server - Tells the NMBD components of Samba to be a WINS Client
# Note: Samba can be either a WINS Server, or a WINS Client, but NOT both
;   wins server = w.x.y.z

# This will prevent nmbd to search for NetBIOS names through DNS.
dns proxy = no

#### Networking ####

# The specific set of interfaces / networks to bind to
# This can be either the interface name or an IP address/netmask;
# interface names are normally preferred
;   interfaces = 127.0.0.0/8 eth0

# Only bind to the named interfaces and/or networks; you must use the
# 'interfaces' option above to use this.
# It is recommended that you enable this feature if your Samba machine is
# not protected by a firewall or is a firewall itself.  However, this
# option cannot handle dynamic or non-broadcast interfaces correctly.
;   bind interfaces only = yes



#### Debugging/Accounting ####

# This tells Samba to use a separate log file for each machine
# that connects
log file = /var/log/samba/log.%m

# Cap the size of the individual log files (in KiB).
max log size = 1000

# If you want Samba to only log through syslog then set the following
# parameter to 'yes'.
#   syslog only = no

# We want Samba to log a minimum amount of information to syslog. Everything
# should go to /var/log/samba/log.{smbd,nmbd} instead. If you want to log
# through syslog you should set the following parameter to something higher.
syslog = 0

# Do something sensible when Samba crashes: mail the admin a backtrace
panic action = /usr/share/samba/panic-action %d


####### Authentication #######

# Server role. Defines in which mode Samba will operate. Possible
# values are "standalone server", "member server", "classic primary
# domain controller", "classic backup domain controller", "active
# directory domain controller".
#
# Most people will want "standalone sever" or "member server".
# Running as "active directory domain controller" will require first
# running "samba-tool domain provision" to wipe databases and create a
# new domain.
server role = standalone server

# If you are using encrypted passwords, Samba will need to know what
# password database type you are using.
passdb backend = tdbsam

obey pam restrictions = yes

# This boolean parameter controls whether Samba attempts to sync the Unix
# password with the SMB password when the encrypted SMB password in the
# passdb is changed.
unix password sync = yes

# For Unix password sync to work on a Debian GNU/Linux system, the following
# parameters must be set (thanks to Ian Kahan <<kahan@informatik.tu-muenchen.de> for
# sending the correct chat script for the passwd program in Debian Sarge).
passwd program = /usr/bin/passwd %u
passwd chat = *Enter\snew\s*\spassword:* %n\n *Retype\snew\s*\spassword:* %n\n *password\supdated\ssuccessfully* .

# This boolean controls whether PAM will be used for password changes
# when requested by an SMB client instead of the program listed in
# 'passwd program'. The default is 'no'.
pam password change = yes

# This option controls how unsuccessful authentication attempts are mapped
# to anonymous connections
map to guest = bad user

########## Domains ###########

#
# The following settings only takes effect if 'server role = primary
# classic domain controller', 'server role = backup domain controller'
# or 'domain logons' is set
#

# It specifies the location of the user's
# profile directory from the client point of view) The following
# required a [profiles] share to be setup on the samba server (see
# below)
;   logon path = \\%N\profiles\%U
# Another common choice is storing the profile in the user's home directory
# (this is Samba's default)
#   logon path = \\%N\%U\profile

# The following setting only takes effect if 'domain logons' is set
# It specifies the location of a user's home directory (from the client
# point of view)
;   logon drive = H:
#   logon home = \\%N\%U

# The following setting only takes effect if 'domain logons' is set
# It specifies the script to run during logon. The script must be stored
# in the [netlogon] share
# NOTE: Must be store in 'DOS' file format convention
;   logon script = logon.cmd

# This allows Unix users to be created on the domain controller via the SAMR
# RPC pipe.  The example command creates a user account with a disabled Unix
# password; please adapt to your needs
; add user script = /usr/sbin/adduser --quiet --disabled-password --gecos "" %u

# This allows machine accounts to be created on the domain controller via the
# SAMR RPC pipe.
# The following assumes a "machines" group exists on the system
; add machine script  = /usr/sbin/useradd -g machines -c "%u machine account" -d /var/lib/samba -s /bin/false %u

# This allows Unix groups to be created on the domain controller via the SAMR
# RPC pipe.
; add group script = /usr/sbin/addgroup --force-badname %g

############ Misc ############

# Using the following line enables you to customise your configuration
# on a per machine basis. The %m gets replaced with the netbios name
# of the machine that is connecting
;   include = /home/samba/etc/smb.conf.%m

# Some defaults for winbind (make sure you're not using the ranges
# for something else.)
;   idmap uid = 10000-20000
;   idmap gid = 10000-20000
;   template shell = /bin/bash

# Setup usershare options to enable non-root users to share folders
# with the net usershare command.

# Maximum number of usershare. 0 (default) means that usershare is disabled.
;   usershare max shares = 100

# Allow users who've been granted usershare privileges to create
# public shares, not just authenticated ones
usershare allow guests = yes

#======================= Share Definitions =======================

# Un-comment the following (and tweak the other settings below to suit)
# to enable the default home directory shares. This will share each
# user's home directory as \\server\username
;[homes]
;   comment = Home Directories
;   browseable = no

# By default, the home directories are exported read-only. Change the
# next parameter to 'no' if you want to be able to write to them.
;   read only = yes

# File creation mask is set to 0700 for security reasons. If you want to
# create files with group=rw permissions, set next parameter to 0775.
;   create mask = 0700

# Directory creation mask is set to 0700 for security reasons. If you want to
# create dirs. with group=rw permissions, set next parameter to 0775.
;   directory mask = 0700

# By default, \\server\username shares can be connected to by anyone
# with access to the samba server.
# Un-comment the following parameter to make sure that only "username"
# can connect to \\server\username
# This might need tweaking when using external authentication schemes
;   valid users = %S

# Un-comment the following and create the netlogon directory for Domain Logons
# (you need to configure Samba to act as a domain controller too.)
;[netlogon]
;   comment = Network Logon Service
;   path = /home/samba/netlogon
;   guest ok = yes
;   read only = yes

# Un-comment the following and create the profiles directory to store
# users profiles (see the "logon path" option above)
# (you need to configure Samba to act as a domain controller too.)
# The path below should be writable by all users so that their
# profile directory may be created the first time they log on
;[profiles]
;   comment = Users profiles
;   path = /home/samba/profiles
;   guest ok = no
;   browseable = no
;   create mask = 0600
;   directory mask = 0700

[printers]
comment = All Printers
browseable = no
path = /var/spool/samba
printable = yes
guest ok = no
read only = yes
create mask = 0700

# Windows clients look for this share name as a source of downloadable
# printer drivers
[print$]
comment = Printer Drivers
path = /var/lib/samba/printers
browseable = yes
read only = yes
guest ok = no
# Uncomment to allow remote administration of Windows print drivers.
# You may need to replace 'lpadmin' with the name of the group your
# admin users are members of.
# Please note that you also need to set appropriate Unix permissions
# to the drivers directory for these users to have write rights in it
;   write list = root, @lpadmin
```

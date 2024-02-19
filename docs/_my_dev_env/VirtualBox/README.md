---
sidebar:auto
---

# VirtualBox 應用指引

## 安裝與操作

N/A

## 作業指引

### macOS 開機，自行啟動 VMs

1. 查詢已建置之 VM：VBoxManage list vms

```
alanjui@MBP-2012:~$ VBoxManage list vms
"Arch-001" {4076336b-3067-44d0-bd85-0129917e50fe}
"Ubuntu-2010" {530f4e72-ebb3-4096-9fec-bf216b4e108f}
"Ubuntu-2004" {ce7c3ad5-f056-4ec0-9fca-d5fce35db8b0}
"VB20-01-Manjaro-xfce-20.2" {006f92ec-ae62-4522-88aa-a115815c89ef}
"VB01-ArchLinux-KDE" {9f20b920-e21b-4f32-8743-cb1b3da4cc1a}
"VB02-Ubuntu-2004" {a415f5b9-82fb-4993-a051-53c0d120dd7c}
"VB03-Ubuntu-2104" {4b799ad2-03e3-482f-ae56-cb98bf704d81}
```

2. 建置 VirtualBox plist 檔案(Launch Daemon)。

```
alanjui@MBP-2012:~$ ll ~/Library/LaunchAgents/
total 32
drwxr-xr-x@  6 alanjui  staff   192  4 27 08:37 ./
drwx------@ 83 alanjui  staff  2656 11 30 09:54 ../
-rw-r--r--   1 alanjui  staff   556  4 27 08:37 com.hp.productresearch.plist
-rw-r--r--   1 alanjui  staff   719  8  8  2020 homebrew.mxcl.postgresql.plist
-rw-r--r--   1 alanjui  staff   397 11 16 17:47 homebrew.mxcl.stunnel.plist
-rw-r--r--@  1 alanjui  staff   677  3 24 13:58 org.virtualbox.vboxwebsrv.plist

alanjui@MBP-2012:~$ nvim ~/Library/LaunchAgents/org.virtualbox.VB02-Ubuntu-2004.plist
```

🔖 org.virtualbox.VB02-Ubuntu-2004.plist:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>org.virtualbox.launch.VB02-Ubuntu-2004</string>
  <key>ProgramArguments</key>
  <array>
    <string>/Applications/VirtualBox.app/Contents/MacOS/VBoxManage</string>
    <string>startvm</string>
    <string>VB02-Ubuntu-2004</string>
    <string>--type</string>
    <string>headless</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
</dict>
</plist>
```

3. 驗證 plist 檔案，其「設定」無誤。

```
launchctl load ~/Library/LaunchAgents/org.virtualbox.VB02-Ubuntu-2004.plist
```

📺

```
alanjui@MBP-2012:~$ launchctl load ~/Library/LaunchAgents/org.virtualbox.VB02-Ubuntu-2004.plist
alanjui@MBP-2012:~$
```

4. 重開機；或執行以下指令：

```
launchctl start ~/Library/LaunchAgents/org.virtualbox.VB02-Ubuntu-2004.plist
```

## 常見異常問題診斷與狀況排除

N/A

## 參考資料

### macOS 開機時，令 VM 自行啟動

[Auto-start VirtualBox VMs (headless) after reboot on Mac OSX](https://ma.ttias.be/auto-start-virtualbox-vms-headless-after-reboot-on-mac-osx/)

### Ubuntu 開機時，自動啟動 VM

[How to start Virtual box machines automatically when booting?](https://askubuntu.com/questions/404665/how-to-start-virtual-box-machines-automatically-when-booting)

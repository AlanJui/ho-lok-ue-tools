# 在 Ubuntu 18.04.4 安裝 GeForce GT 1030
參考文章： https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu-18-04



    $ sudo lshw -c video
      *-display
           description: VGA compatible controller
           product: GP108 [GeForce GT 1030]
           vendor: NVIDIA Corporation
           physical id: 0
           bus info: pci@0000:01:00.0
           version: a1
           width: 64 bits
           clock: 33MHz
           capabilities: pm msi pciexpress vga_controller bus_master cap_list rom
           configuration: driver=nouveau latency=0
           resources: irq:49 memory:fa000000-faffffff memory:c0000000-cfffffff memory:d0000000-d1ffffff ioport:e000(size=128) memory:c0000-dffff
    
    $ sudo ubuntu-drivers devices
    == /sys/devices/pci0000:00/0000:00:01.0/0000:01:00.0 ==
    modalias : pci:v000010DEd00001D01sv00001462sd00008C98bc03sc00i00
    vendor   : NVIDIA Corporation
    model    : GP108 [GeForce GT 1030]
    driver   : nvidia-driver-430 - distro non-free
    driver   : nvidia-driver-435 - distro non-free recommended
    driver   : nvidia-driver-390 - distro non-free
    driver   : xserver-xorg-video-nouveau - distro free builtin
    
    $ sudo lshw -c video
      *-display
           description: VGA compatible controller
           product: GP108 [GeForce GT 1030]
           vendor: NVIDIA Corporation
           physical id: 0
           bus info: pci@0000:01:00.0
           version: a1
           width: 64 bits
           clock: 33MHz
           capabilities: pm msi pciexpress vga_controller bus_master cap_list rom
           configuration: driver=nouveau latency=0
           resources: irq:49 memory:fa000000-faffffff memory:c0000000-cfffffff memory:d0000000-d1ffffff ioport:e000(size=128) memory:c0000-dffff
    
    




    $ sudo shutdown -r now
    
    $ sudo lshw -c video
    [sudo] password for alanjui:
      *-display
           description: VGA compatible controller
           product: GP108 [GeForce GT 1030]
           vendor: NVIDIA Corporation
           physical id: 0
           bus info: pci@0000:01:00.0
           version: a1
           width: 64 bits
           clock: 33MHz
           capabilities: pm msi pciexpress vga_controller bus_master cap_list rom
           configuration: driver=nvidia latency=0
           resources: irq:50 memory:fa000000-faffffff memory:c0000000-cfffffff memory:d0000000-d1ffffff ioport:e000(size=128) memory:c0000-dffff
    


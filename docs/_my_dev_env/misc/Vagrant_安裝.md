# Vagrant 安裝


# macOS Catalina 10.15 作業


## 安裝 VirtualBox 軟體

至官網下載軟體與執行安裝：VirtualBox 6.0.12。
https://www.virtualbox.org/wiki/Downloads


## 安裝 Vagrant 軟體

【安裝法一】：至官網下載 .dmg 安裝檔案

【安裝法二】：使用 brew


    $ brew cask install vagrant
    $ brew cask install vagrant-manager


https://www.vagrantup.com/



## 解除安裝

**安裝套件（.dmg）提供之工具**


    Last login: Mon Nov 11 21:26:18 on ttys002
    /Volumes/Vagrant/uninstall.tool ; exit;
    
    alanjui@MBP-2018:~ 
    $ /Volumes/Vagrant/uninstall.tool ; exit;
    The following files and directories will be removed:
        /opt/vagrant
        /usr/local/bin/vagrant
    
    Do you wish to uninstall Vagrant (Yes/No)?


**手動解除安裝**


    rm -rf /opt/vagrant
    rm -f /usr/local/bin/vagrant
    sudo pkgutil --forget com.vagrant.vagrant





## 安裝 Vagrant 附件軟體

**安裝 vagrant-libvirt plugin**

【參考文件】： vagrant-libvirt 無法正常安裝排解法
https://github.com/vagrant-libvirt/vagrant-libvirt/issues/497#issuecomment-331226071

（0）完成 Homebrew 安裝

（1）

    brew install libiconv gcc libvirt

（2）

    $ /opt/vagrant/embedded/bin/ruby --version
    ruby 2.4.6p354 (2019-04-01 revision 67394) [x86_64-darwin13]

（3）

    $ CONFIGURE_ARGS='with-ldflags=-L/opt/vagrant/embedded/lib with-libvirt-include=/usr/local/include/libvirt with-libvirt-lib=/usr/local/lib' \
    GEM_HOME=~/.vagrant.d/gems/2.4.6 \
    GEM_PATH=$GEM_HOME:/opt/vagrant/embedded/gems \
    PATH=/opt/vagrant/embedded/bin:$PATH \
    vagrant plugin install vagrant-libvirt
    Installing the 'vagrant-libvirt' plugin. This can take a few minutes...
    Building native extensions.  This could take a while...
    Fetching: fog-libvirt-0.6.0.gem (100%)
    Fetching: vagrant-libvirt-0.0.45.gem (100%)
    Installed the plugin 'vagrant-libvirt (0.0.45)'!
    
    alanjui@MBP-2018:~/workspace/vagrant/test-004
    $


    $ CONFIGURE_ARGS='with-ldflags=-L/opt/vagrant/embedded/lib with-libvirt-include=/usr/local/include/libvirt with-libvirt-lib=/usr/local/lib' \
    GEM_HOME=~/.vagrant.d/gems/2.4.4 \
    GEM_PATH=$GEM_HOME:/opt/vagrant/embedded/gems \
    PATH=/opt/vagrant/embedded/bin:$PATH \
    vagrant plugin install vagrant-libvirt

（4）

    $ brew install libvirt

【註】：如何啟動 libvirt :


    To have launchd start libvirt now and restart at login:
      brew services start libvirt
    Or, if you don't want/need a background service you can just run:
      libvirtd
    ==> Summary
    🍺  /usr/local/Cellar/libvirt/5.8.0: 506 files, 36.0MB


    alanjui@MBP-2018:~/workspace/vagrant/test-003
    $ brew services start libvirt
    ==> Successfully started `libvirt` (label: homebrew.mxcl.libvirt)


**安裝 VirtualBox Guest Additions 自動更新 plugin**

（1）

    $ vagrant plugin install vagrant-vbguest


    alanjui@MBP-2018:~/workspace/Python/django_002 (master)
    $ vagrant plugin install vagrant-vbguest
    Installing the 'vagrant-vbguest' plugin. This can take a few minutes...
    Fetching: micromachine-3.0.0.gem (100%)
    Fetching: vagrant-vbguest-0.20.0.gem (100%)
    Installed the plugin 'vagrant-vbguest (0.20.0)'!


【參考文件】：  How to update VirtualBox Guest Additions with Vagrant

https://gist.github.com/fernandoaleman/5083680


[https://gist.github.com/fernandoaleman/5083680](https://gist.github.com/fernandoaleman/5083680)


# Ubuntu 18.04 作業


## 安裝 VirtualBox 6 軟體套件
https://computingforgeeks.com/install-virtualbox-6-0-on-ubuntu-18-04-debian-9-ubuntu-16-04/



## 安裝 Vagrant 軟體套件

**啟動 vagrant**


    $ vagrant up
    Vagrant failed to initialize at a very early stage:
    
    The plugins failed to initialize correctly. This may be due to manual
    modifications made within the Vagrant home directory. Vagrant can
    attempt to automatically correct this issue by running:
    
      vagrant plugin repair
    
    If Vagrant was recently updated, this error may be due to incompatible
    versions of dependencies. To fix this problem please remove and re-install
    all plugins. Vagrant can attempt to do this automatically by running:
    
      vagrant plugin expunge --reinstall
    
    Or you may want to try updating the installed plugins to their latest
    versions:
    
      vagrant plugin update
    
    Error message given during initialization: Unable to resolve dependency: user requested 'vagrant-libvirt (= 0.0.43)'
    


## 安裝 Vagrant 用 Plugin


    $ vagrant plugin install vagrant-libvirt
    $ sudo apt install qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virt-manager
    $ sudo adduser $USER libvirt
    $ sudo adduser $USER libvirt-qemu
    $ sudo service libvirttd restart     # sudo /etc/init.d/libvirtd restart


# Mac OSX

http://sourabhbajaj.com/mac-setup/Vagrant/README.html


    brew cask install virtualbox
    brew cask install virtualbox-extension-pack


    brew cask install vagrant
    brew cask install vagrant-manager


     brew cask rm virtualbox


# Vagrant Resource


## Download App
https://www.vagrantup.com/downloads.html



## Find Box

https://app.vagrantup.com/boxes/search


## Getting Started
https://www.vagrantup.com/intro/getting-started/index.html



# Exercise


    $ vagrant init hashicorp/precise64
    $ vagrant up
    Bringing machine 'default' up with 'virtualbox' provider...
    ==> default: Box 'hashicorp/precise64' could not be found. Attempting to find and install...
        default: Box Provider: virtualbox
        default: Box Version: >= 0
    ==> default: Loading metadata for box 'hashicorp/precise64'
        default: URL: https://vagrantcloud.com/hashicorp/precise64
    ==> default: Adding box 'hashicorp/precise64' (v1.1.0) for provider: virtualbox
        default: Downloading: https://vagrantcloud.com/hashicorp/boxes/precise64/versions/1.1.0/providers/virtualbox.box
        default: Download redirected to host: vagrantcloud-files-production.s3.amazonaws.com
    ==> default: Successfully added box 'hashicorp/precise64' (v1.1.0) for 'virtualbox'!
    ==> default: Importing base box 'hashicorp/precise64'...
    ==> default: Matching MAC address for NAT networking...
    ==> default: Checking if box 'hashicorp/precise64' version '1.1.0' is up to date...
    ==> default: Setting the name of the VM: test-001_default_1555334147451_21236
    Vagrant is currently configured to create VirtualBox synced folders with
    the `SharedFoldersEnableSymlinksCreate` option enabled. If the Vagrant
    guest is not trusted, you may want to disable this option. For more
    information on this option, please refer to the VirtualBox manual:
    
      https://www.virtualbox.org/manual/ch04.html#sharedfolders
    
    This option can be disabled globally with an environment variable:
    
      VAGRANT_DISABLE_VBOXSYMLINKCREATE=1
    
    or on a per folder basis within the Vagrantfile:
    
      config.vm.synced_folder '/host/path', '/guest/path', SharedFoldersEnableSymlinksCreate: false
    ==> default: Clearing any previously set network interfaces...
    ==> default: Preparing network interfaces based on configuration...
        default: Adapter 1: nat
    ==> default: Forwarding ports...
        default: 22 (guest) => 2222 (host) (adapter 1)
    ==> default: Booting VM...
    ==> default: Waiting for machine to boot. This may take a few minutes...
        default: SSH address: 127.0.0.1:2222
        default: SSH username: vagrant
        default: SSH auth method: private key
        default:
        default: Vagrant insecure key detected. Vagrant will automatically replace
        default: this with a newly generated keypair for better security.
        default:
        default: Inserting generated public key within guest...
        default: Removing insecure key from the guest if it's present...
        default: Key inserted! Disconnecting and reconnecting using new SSH key...
    ==> default: Machine booted and ready!
    ==> default: Checking for guest additions in VM...
        default: The guest additions on this VM do not match the installed version of
        default: VirtualBox! In most cases this is fine, but in rare cases it can
        default: prevent things such as shared folders from working properly. If you see
        default: shared folder errors, please make sure the guest additions within the
        default: virtual machine match the version of VirtualBox you have installed on
        default: your host and reload your VM.
        default:
        default: Guest Additions Version: 4.2.0
        default: VirtualBox Version: 6.0
    ==> default: Mounting shared folders...
        default: /vagrant => /Users/alanjui/workspace/vagrant/test-001


**What boxes installed**

    vargant box list


----------


## Usage

Add the Vagrant box you want to use. We'll use Ubuntu 12.04 for the following example.

    $ vagrant box add precise64 http://files.vagrantup.com/precise64.box

You can find more boxes at [Vagrant Cloud](https://vagrantcloud.com/)
Now create a test directory and cd into the test directory. Then we'll initialize the vagrant machine.

    $ vagrant init precise64

Now lets start the machine using the following command.

    $ vagrant up

You can ssh into the machine now.

    $ vagrant ssh

Halt the vagrant machine now.

    $ vagrant halt

Other useful commands are `suspend`, `destroy` etc.



## How to creating Vagrant Box

https://medium.com/@tonyeung85/creating-an-ubuntu-18-04-base-box-b5ff4c1022fd



https://app.vagrantup.com/peru/boxes/ubuntu-18.04-desktop-amd64



## CentOS 7

https://app.vagrantup.com/centos/boxes/7

https://blog.centos.org/2019/02/updated-centos-vagrant-images-available-v1901-01/



## Ubuntu 18.04

https://app.vagrantup.com/peru/boxes/ubuntu-18.04-desktop-amd64


https://github.com/ruzickap/packer-templates/





    Vagrant.configure("2") do |config|
    
            config.vm.box = "peru/ubuntu-18.04-desktop-amd64"
            config.vm.box_version = "20190515.01"
    
            config.vm.provider "virtualbox" do |vb|
                    # Display the VirtualBox GUI when booting the machine
                    vb.gui = true
    
                    # Customize the amount of memory on the VM:
                    vb.memory = "1024"
                    vb.cpus = "4"
    
                    vb.name = "vm_ubuntu_1804"
            end
    
      # config.vm.provision "shell", inline: <<-SHELL
      #   apt-get update
      #   apt-get install -y apache2
      # SHELL
    
    end



    # -*- mode: ruby -*-
    # vi: set ft=ruby :
    
    # All Vagrant configuration is done below. The "2" in Vagrant.configure
    # configures the configuration version (we support older styles for
    # backwards compatibility). Please don't change it unless you know what
    # you're doing.
    Vagrant.configure("2") do |config|
      # The most common configuration options are documented and commented below.
      # For a complete reference, please see the online documentation at
      # https://docs.vagrantup.com.
    
      # Every Vagrant development environment requires a box. You can search for
      # boxes at https://vagrantcloud.com/search.
      config.vm.box = "centos/7"
    
      # Disable automatic box update checking. If you disable this, then
      # boxes will only be checked for updates when the user runs
      # `vagrant box outdated`. This is not recommended.
      # config.vm.box_check_update = false
    
      # Create a forwarded port mapping which allows access to a specific port
      # within the machine from a port on the host machine. In the example below,
      # accessing "localhost:8080" will access port 80 on the guest machine.
      # NOTE: This will enable public access to the opened port
      # config.vm.network "forwarded_port", guest: 80, host: 8080
    
      # Create a forwarded port mapping which allows access to a specific port
      # within the machine from a port on the host machine and only allow access
      # via 127.0.0.1 to disable public access
      config.vm.network "forwarded_port", guest: 80, host: 8088, host_ip: "127.0.0.1"
    
      # Create a private network, which allows host-only access to the machine
      # using a specific IP.
      config.vm.network "private_network", ip: "192.168.33.10"
    
      # Create a public network, which generally matched to bridged network.
      # Bridged networks make the machine appear as another physical device on
      # your network.
      config.vm.network "public_network", bridge: "enp5s0"
    
      # Share an additional folder to the guest VM. The first argument is
      # the path on the host to the actual folder. The second argument is
      # the path on the guest to mount the folder. And the optional third
      # argument is a set of non-required options.
      config.vm.synced_folder "../data", "/vagrant_data"
    
      # Provider-specific configuration so you can fine-tune various
      # backing providers for Vagrant. These expose provider-specific options.
      # Example for VirtualBox:
      #
      config.vm.provider "virtualbox" do |vb|
              vb.name = "vm_centos_7"
    
        # Display the VirtualBox GUI when booting the machine
        vb.gui = true
      
        # Customize the amount of memory on the VM:
        vb.memory = "2048"
    
        vb.cpus = 4
      end
      #
      # View the documentation for the provider you are using for more
      # information on available options.
    
      # Enable provisioning with a shell script. Additional provisioners such as
      # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
      # documentation for more information about their specific syntax and use.
      config.vm.provision "shell", inline: <<-SHELL
        yum install git
        yum groupinstall "GNOME Desktop" "Graphical Administration Tools"
        ln -sf /lib/systemd/system/runlevel5.target /etc/systemd/system/default.target
      SHELL
    
    end



# 問題排除


**完成 Vagrant 版本更新後，無法啟動 vagrant**


    /usr/local/bin/vagrant up
    Vagrant failed to initialize at a very early stage:
    
    The plugins failed to initialize correctly. This may be due to manual
    modifications made within the Vagrant home directory. Vagrant can
    attempt to automatically correct this issue by running:
    
      vagrant plugin repair
    
    If Vagrant was recently updated, this error may be due to incompatible
    versions of dependencies. To fix this problem please remove and re-install
    all plugins. Vagrant can attempt to do this automatically by running:
    
      vagrant plugin expunge --reinstall
    
    Or you may want to try updating the installed plugins to their latest
    versions:
    
      vagrant plugin update
    
    Error message given during initialization: Unable to resolve dependency: user requested 'vagrant-libvirt (= 0.0.45)'
    
    Process finished with exit code 1


**無法安裝 Plugin: vagrant-libvirt**


    Vagrant failed to properly resolve required dependencies. These
    errors can commonly be caused by misconfigured plugin installations
    or transient network issues. The reported error is:
    
    ERROR: Failed to build gem native extension.
    
        current directory: /Users/alanjui/.vagrant.d/gems/2.4.9/gems/ruby-libvirt-0.7.1/ext/libvirt
    /opt/vagrant/embedded/bin/ruby -r ./siteconf20191111-26905-3i8dr8.rb extconf.rb
    *** extconf.rb failed ***
    Could not create Makefile due to some reason, probably lack of necessary
    libraries and/or headers.  Check the mkmf.log file for more details.  You may
    need configuration options.
    
    Provided configuration options:
    --with-opt-dir
    --with-opt-include
    --without-opt-include=${opt-dir}/include
    --with-opt-lib
    --without-opt-lib=${opt-dir}/lib
    --with-make-prog
    --without-make-prog
    --srcdir=.
    --curdir
    --ruby=/opt/vagrant/embedded/bin/$(RUBY_BASE_NAME)
    --with-libvirt-include
    --without-libvirt-include
    --with-libvirt-lib
    --without-libvirt-lib
    --with-libvirt-config
    --without-libvirt-config
    --with-pkg-config
    --without-pkg-config
    extconf.rb:73:in `<main>': libvirt library not found in default locations (RuntimeError)
    
    To see why this extension failed to compile, please check the mkmf.log which can be found here:
    
      /Users/alanjui/.vagrant.d/gems/2.4.9/extensions/x86_64-darwin-13/2.4.0/ruby-libvirt-0.7.1/mkmf.log
    
    extconf failed, exit code 1
    
    Gem files will remain installed in /Users/alanjui/.vagrant.d/gems/2.4.9/gems/ruby-libvirt-0.7.1 for inspection.
    Results logged to /Users/alanjui/.vagrant.d/gems/2.4.9/extensions/x86_64-darwin-13/2.4.0/ruby-libvirt-0.7.1/gem_make.out



    alanjui@MBP-2018:~/workspace/Python/django_002 (master) 
    $ NOKOGIRI_USE_SYSTEM_LIBRARIES=1 CONFIGURE_ARGS="with-libvirt-include=/usr/include/libvirt with-libvirt-lib=/usr/lib/libvirt" vagrant plugin install vagrant-libvirt
    Installing the 'vagrant-libvirt' plugin. This can take a few minutes...
    Building native extensions.  This could take a while...
    Fetching: fog-libvirt-0.7.0.gem (100%)
    Fetching: vagrant-libvirt-0.0.45.gem (100%)
    Installed the plugin 'vagrant-libvirt (0.0.45)'!


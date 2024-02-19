# 安裝DockerCompose
參考文章出處：　https://docs.docker.com/compose/install/

Install Compose, do the following:


1. Install Docker Engine:
    - [Mac OS X installation](https://docs.docker.com/engine/installation/mac/)
    - [Windows installation](https://docs.docker.com/engine/installation/windows/)
    - [Ubuntu installation](https://docs.docker.com/engine/installation/ubuntulinux/)
    - [other system installations](https://docs.docker.com/engine/installation/)
        
2. The Docker Toolbox installation includes both Engine and Compose, so Mac and Windows users are done installing. Others should continue to the next step.
    
3. Go to the [Compose repository release page on GitHub](https://github.com/docker/compose/releases).
    
4. Follow the instructions from the release page and run the `curl` command, which the release page specifies, in your terminal.
        
5. The following is an example command illustrating the format:
    $ sudo curl -L https://github.com/docker/compose/releases/download/1.8.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
    
    $ sudo rm -f /usr/bin/docker-compose
    
6. If you have problems installing with `curl`, see [Alternative Install Options](https://docs.docker.com/compose/install/#alternative-install-options).
    
7. Apply executable permissions to the binary:
    $ sudo chmod +x /usr/local/bin/docker-compose
    
8. Optionally, install [command completion](https://docs.docker.com/compose/completion/) for the `bash` and `zsh` shell.
    
9. Test the installation.
    $ docker-compose --version
    docker-compose version: 1.8.1



----------

以下的操作，係用於指定Docker使用的「軟體套件庫來源」。
https://docs.docker.com/engine/installation/linux/ubuntulinux/

## Prerequisites

Docker requires a 64-bit installation regardless of your Ubuntu version. Additionally, your kernel must be 3.10 at minimum. The latest 3.10 minor version or a newer maintained version are also acceptable.


    $ uname -r
    3.11.0-15-generic
> **Note**: If you previously installed Docker using `APT`, make sure you update your `APT` sources to the new Docker repository.

**Update your apt sources**
Docker’s `APT` repository contains Docker 1.7.1 and higher. To set `APT` to use packages from the new repository:

1. Log into your machine as a user with `sudo` or `root` privileges.
    
2. Open a terminal window.
    
3. Update package information, ensure that APT works with the `https` method, and that CA certificates are installed.
     $ sudo apt-get update
     $ sudo apt-get install apt-transport-https ca-certificates
     
4. Add the new `GPG` key.
    $ sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
    
5. Open the `/etc/apt/sources.list.d/docker.list` file in your favorite editor.
    
6. If the file doesn’t exist, create it.
    
7. Remove any existing entries.
    #deb https://apt.dockerproject.org/repo ubuntu-xenial main
    
8. Add an entry for your Ubuntu operating system.
    
9. The possible entries are:
    - Ubuntu Xenial 16.04 (LTS)
    deb https://apt.dockerproject.org/repo ubuntu-xenial main
    > **Note**: Docker does not provide packages for all architectures. You can find nightly built binaries in [https://master.dockerproject.org](https://master.dockerproject.org/). To install docker on a multi-architecture system, add an `[arch=...]` clause to the entry. Refer to the [Debian Multiarch wiki](https://wiki.debian.org/Multiarch/HOWTO#Setting_up_apt_sources) for details.
        
10. Save and close the `/etc/apt/sources.list.d/docker.list` file.
    
11. Update the `APT` package index.
    $ sudo apt-get update
    
12. Purge the old repo if it exists.
    $ sudo apt-get purge lxc-docker
    
13. Verify that `APT` is pulling from the right repository.
    $ apt-cache policy docker-engine
    
14. From now on when you run `apt-get upgrade`, `APT` pulls from the new repository.


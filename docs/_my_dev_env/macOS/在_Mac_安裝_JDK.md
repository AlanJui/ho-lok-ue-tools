# 在 Mac 安裝 JDK


http://blog.tonycube.com/2018/11/java-openjdk.html



（1）安裝 Adopt OpenJDK 前


    $ java -version
    java version "1.8.0_192"
    Java(TM) SE Runtime Environment (build 1.8.0_192-b12)
    Java HotSpot(TM) 64-Bit Server VM (build 25.192-b12, mixed mode)
    
    $ javac -version
    javac 1.8.0_192


（2）透過 Homebrew 安裝 Adopt OpenJDK


    brew tap adoptopenjdk/openjdk
    
    # 如果你想安裝最新版本，目前是 14
    brew cask install adoptopenjdk
    
    # 或是安裝版本 LTS 版本：11
    brew cask install adoptopenjdk11
    
    # 安裝後目錄
    /Library/Java/JavaVirtualMachines



    brew cask install adoptopenjdk11
    Updating Homebrew...
    ==> Downloading https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11.0.7%2B10/OpenJDK11U-jdk_x64_mac_hotspot_11.0.7_10.pkg
    ==> Downloading from https://github-production-release-asset-2e65be.s3.amazonaws.com/140419044/9ef56580-7f38-11ea-9145-7f63713950c7?X-Amz-Algorithm=AW
    ######################################################################## 100.0%
    ==> Verifying SHA-256 checksum for Cask 'adoptopenjdk11'.
    ==> Installing Cask adoptopenjdk11
    ==> Running installer for adoptopenjdk11; your password may be necessary.
    ==> Package installers may write to any location; options such as --appdir are ignored.
    Password:
    installer: Package name is AdoptOpenJDK
    installer: Installing at base path /
    installer: The install was successful.
    package-id: net.adoptopenjdk.11.jdk
    version: 11.0.7+10
    volume: /
    location: Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk
    install-time: 1589337173
    🍺  adoptopenjdk11 was successfully installed!
    
    $ ll /Library/Java/JavaVirtualMachines
    total 0
    drwxr-xr-x  3 root  wheel    96B  5 13 10:32 adoptopenjdk-11.jdk
    drwxr-xr-x  3 root  wheel    96B 11 19  2018 jdk1.8.0_192.jdk
    
    $ ll /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home
    total 8
    drwxr-xr-x  35 root  wheel   1.1K  4 15 18:25 bin
    drwxr-xr-x   3 root  wheel    96B  4 15 20:15 bundle
    drwxr-xr-x   7 root  wheel   224B  4 15 18:25 conf
    drwxr-xr-x   9 root  wheel   288B  4 15 18:25 include
    drwxr-xr-x  72 root  wheel   2.3K  4 15 18:25 jmods
    drwxr-xr-x  72 root  wheel   2.3K  4 15 18:26 legal
    drwxr-xr-x  57 root  wheel   1.8K  4 15 18:26 lib
    drwxr-xr-x   5 root  wheel   160B  5 13 10:32 man
    -rw-r--r--   1 root  wheel   1.2K  4 15 18:26 release
    
    $ /usr/libexec/java_home
    /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home


（3）設定 Java PATH


    export JAVA_HOME=$(/usr/libexec/java_home)
    export PATH=$JAVA_HOME/bin:$PATH


（4）驗證安裝後已能正常運作


    $ java -version
    openjdk version "11.0.7" 2020-04-14
    OpenJDK Runtime Environment AdoptOpenJDK (build 11.0.7+10)
    OpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.7+10, mixed mode)
    
    $ javac -version
    javac 11.0.7


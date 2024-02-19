# NVCode for Debian

作業程序：
 1. 安裝 Neovim v5.x
 2. 安裝 Neovim 執行環境
 3. 安裝 Neovim Plugins 支援軟件
 4. 安裝 VS Code  及 Extensions
 5. 設定 VS Code 執行環境
 6. 設定 NVCode 執行環境
 7. 設定 Django Projects 執行環境



----------
# 安裝 Lua 



## 安裝 Lua 直譯器

**透過「原始碼」安裝 Lua 直譯器**

- https://www.lua.org/download.html
- https://www.lua.org/manual/5.4/readme.html

（1）安裝「原始碼編譯工具」。

    sudo apt install build-essential libreadline-dev cmake


（2）下載「原始碼」。

    cd ~/build
    curl -R -O http://www.lua.org/ftp/lua-5.4.2.tar.gz
    tar zxf lua-5.4.2.tar.gz
    cd lua-5.4.2

（3）編譯與安裝作業。

【編譯前確認可編譯之作業平台】：

    alanjui@VB01-Debian-10:~/build/lua-5.4.2$ make help
    make[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
    Do 'make PLATFORM' where PLATFORM is one of these:
       guess aix bsd c89 freebsd generic linux linux-readline macosx mingw posix solaris
    See doc/readme.html for complete instructions.
    make[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'

【編譯原始碼】：

    make linux

【註】： The compilation takes only a few moments and produces three files in the src directory:

            - lua (the interpreter), 
            - luac (the compiler), 
            - liblua.a (the library).
    alanjui@VB01-Debian-10:~/build/lua-5.4.2$ la src/lua*
    -rwxr-xr-x 1 alanjui alanjui 297240  2月 18 19:40 src/lua
    -rw-r--r-- 1 alanjui alanjui  18907 11月 13 23:32 src/lua.c
    -rwxr-xr-x 1 alanjui alanjui 211672  2月 18 19:40 src/luac
    -rw-r--r-- 1 alanjui alanjui  15145  4月 20  2020 src/luac.c
    -rw-r--r-- 1 alanjui alanjui  31136  2月 18 19:40 src/luac.o
    -rw-r--r-- 1 alanjui alanjui  20734 11月 13 23:32 src/luaconf.h
    -rw-r--r-- 1 alanjui alanjui  15765 11月 13 23:32 src/lua.h
    -rw-r--r-- 1 alanjui alanjui    191 12月 23  2004 src/lua.hpp
    -rw-r--r-- 1 alanjui alanjui   1183 11月 13 23:32 src/lualib.h
    -rw-r--r-- 1 alanjui alanjui  15728  2月 18 19:40 src/lua.o
    alanjui@VB01-Debian-10:~/build/lua-5.4.2$ la src/liblua*
    -rw-r--r-- 1 alanjui alanjui 491090  2月 18 19:40 src/liblua.a


【確認編譯及組建結果】：

    make linux-readline


    alanjui@VB01-Debian-10:~/build/lua-5.4.2$ make linux-readline
    make[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
    make all SYSCFLAGS="-DLUA_USE_LINUX -DLUA_USE_READLINE" SYSLIBS="-Wl,-E -ldl -lreadline"
    make[2]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
    make[2]: Nothing to be done for 'all'.
    make[2]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'
    make[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'


【註】：其它平台適用之查s

    make all test


    alanjui@VB01-Debian-10:~/build/lua-5.4.2$ make all test
    make[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
    Guessing Linux
    make[2]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
    make all SYSCFLAGS="-DLUA_USE_LINUX" SYSLIBS="-Wl,-E -ldl"
    make[3]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
    make[3]: Nothing to be done for 'all'.
    make[3]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'
    make[2]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'
    make[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'
    make[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
    ./lua -v
    Lua 5.4.2  Copyright (C) 1994-2020 Lua.org, PUC-Rio
    make[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'


【安裝組建的執行檔】：

    sudo make install


    alanjui@VB01-Debian-10:~/build/lua-5.4.2$ sudo make install
    [sudo] password for alanjui: 
    cd src && mkdir -p /usr/local/bin /usr/local/include /usr/local/lib /usr/local/man/man1 /usr/local/share/lua/5.4 /usr/local/lib/lua/5.4
    cd src && install -p -m 0755 lua luac /usr/local/bin
    cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/local/include
    cd src && install -p -m 0644 liblua.a /usr/local/lib
    cd doc && install -p -m 0644 lua.1 luac.1 /usr/local/man/man1

（4）設定 update-alternatives ，以便可切換「系統預設 Lua 直譯器」。

    sudo cp /usr/local/bin/lua /usr/bin/lua5.4
    sudo update-alternatives \
      --install /usr/bin/lua lua-interpreter /usr/bin/lua5.4 130 \
      --slave /usr/share/man/man1/lua.1.gz lua-manual /usr/local/man/man1/lua.1
    
    sudo cp /usr/local/bin/luac /usr/bin/luac5.4
    sudo update-alternatives \
      --install /usr/bin/luac lua-compiler /usr/bin/luac5.4 130 \
      --slave /usr/share/man/man1/luac.1.gz lua-compiler-manual /usr/local/man/man1/luac.1


**透過「作業系統套件庫」安裝 Lua 直譯器**

（1）執行「安裝指令」。

    sudo apt install lua5.3 liblua5.3-dev


（2）設定 update-alternatives ，以便可切換「系統預設 Lua 直譯器」。

    sudo update-alternatives --install /usr/bin/lua lua-interpreter /usr/bin/lua5.3 130 --slave /usr/share/man/man1/lua.1.gz lua-manual /usr/share/man/man1/lua5.3.1.gz
    
    sudo update-alternatives --install /usr/bin/luac lua-compiler /usr/bin/luac5.3 130 --slave /usr/share/man/man1/luac.1.gz lua-compiler-manual /usr/share/man/man1/luac5.3.1.gz



## 設定作業系統的 Lua 預設


**設定「作業系統預設的 Lua 直譯器」。**

    sudo update-alternatives --config lua-interpreter


    $ sudo update-alternatives --config lua-interpreter
    替代項目 lua-interpreter（提供 /usr/bin/lua）有 4 個選擇。
    
      選項       路徑           優先權  狀態
    ------------------------------------------------------------
      0            /usr/bin/lua5.4   130       自動模式
      1            /usr/bin/lua5.1   110       手動模式
      2            /usr/bin/lua5.2   120       手動模式
    * 3            /usr/bin/lua5.3   120       手動模式
      4            /usr/bin/lua5.4   130       手動模式
    
    按下 <enter> 鍵以保留目前選項[*]，或是輸入選擇編號：4
    update-alternatives: 在手動模式下以 /usr/bin/lua5.4 來提供 /usr/bin/lua (lua-interpreter)


**設定「作業系統預設的 Lua 編譯器」。**

    sudo update-alternatives --config lua-compiler


    $ sudo update-alternatives --config lua-compiler
    替代項目 lua-compiler（提供 /usr/bin/luac）有 4 個選擇。
    
      選項       路徑            優先權  狀態
    ------------------------------------------------------------
      0            /usr/bin/luac5.4   130       自動模式
      1            /usr/bin/luac5.1   110       手動模式
      2            /usr/bin/luac5.2   120       手動模式
    * 3            /usr/bin/luac5.3   120       手動模式
      4            /usr/bin/luac5.4   130       手動模式
    
    按下 <enter> 鍵以保留目前選項[*]，或是輸入選擇編號：4
    update-alternatives: 在手動模式下以 /usr/bin/luac5.4 來提供 /usr/bin/luac (lua-compiler)


**驗證設定已正確完成。**

    $ la /usr/bin/lua
    lrwxrwxrwx 1 root root 33  2月 18 16:30 /usr/bin/lua -> /etc/alternatives/lua-interpreter
    
    $ la /usr/bin/luac
    lrwxrwxrwx 1 root root 30  2月 18 16:30 /usr/bin/luac -> /etc/alternatives/lua-compiler
    
    $ la /usr/bin/lua*
    lrwxrwxrwx 1 root root     33  2月 18 16:30 /usr/bin/lua -> /etc/alternatives/lua-interpreter
    -rwxr-xr-x 1 root root 187480  8月  1  2016 /usr/bin/lua5.1
    -rwxr-xr-x 1 root root 207912  8月  1  2016 /usr/bin/lua5.2
    -rwxr-xr-x 1 root root 236536 12月 29  2018 /usr/bin/lua5.3
    -rwxr-xr-x 1 root root 297240  2月 18 20:29 /usr/bin/lua5.4
    -rwxr-xr-x 1 root root   1260  4月 16  2018 /usr/bin/lua-any
    lrwxrwxrwx 1 root root     30  2月 18 16:30 /usr/bin/luac -> /etc/alternatives/lua-compiler
    -rwxr-xr-x 1 root root 117328  8月  1  2016 /usr/bin/luac5.1
    -rwxr-xr-x 1 root root 133768  8月  1  2016 /usr/bin/luac5.2
    -rwxr-xr-x 1 root root 150136 12月 29  2018 /usr/bin/luac5.3
    -rwxr-xr-x 1 root root 211672  2月 18 20:44 /usr/bin/luac5.4
    -rwxr-xr-x 1 root root 502744 10月 25  2017 /usr/bin/luajit
    -rwxr-xr-x 1 root root    918 12月 26  2016 /usr/bin/luarocks
    -rwxr-xr-x 1 root root    514 12月 26  2016 /usr/bin/luarocks-admin
    
    alanjui@VB01-Debian-10:~$ which lua
    /usr/local/bin/lua
    alanjui@VB01-Debian-10:~$ which luac
    /usr/local/bin/luac
    
    alanjui@VB01-Debian-10:~/build/neovim$ which lua
    /usr/local/bin/lua
    alanjui@VB01-Debian-10:~/build/neovim$ sudo rm /usr/local/bin/lua
    alanjui@VB01-Debian-10:~/build/neovim$ which lua
    /usr/bin/lua



## 移除已安裝 Lua 套件

在 Debian 10 作業系統，移除 Lua v5.1 軟體套件。


    $ sudo apt remove lua5.1
    正在讀取套件清單... 完成
    正在重建相依關係          
    正在讀取狀態資料... 完成
    下列的額外套件將被安裝：
      lua5.2
    下列套件將會被【移除】：
      lua5.1
    下列【新】套件將會被安裝：
      lua5.2
    升級 0 個，新安裝 1 個，移除 1 個，有 0 個未被升級。
    需要下載 98.6 kB 的套件檔。
    此操作完成之後，會多佔用 27.6 kB 的磁碟空間。
    是否繼續進行 [Y/n]？ [Y/n] Y
    下載:1 http://deb.debian.org/debian buster/main amd64 lua5.2 amd64 5.2.4-1.1+b2 [98.6 kB]
    取得 98.6 kB 用了 0s (457 kB/s)  
    選取了原先未選的套件 lua5.2。
    （讀取資料庫 ... 目前共安裝了 197444 個檔案和目錄。）
    正在準備解包 .../lua5.2_5.2.4-1.1+b2_amd64.deb……
    Unpacking lua5.2 (5.2.4-1.1+b2) ...
    dpkg: lua5.1：發生相依上的問題，但還是應您要求強制移除：
     luarocks 相依於 lua5.1 | lua5.2 | lua5.3﹔然而：
      即將移除套件 lua5.1。
      lua5.2 套件尚未設定。
      套件 lua5.3 未安裝。
     lua-any 相依於 lua5.1 | lua﹔然而：
      即將移除套件 lua5.1。
      套件 lua 未安裝。
      提供了 lua 的套件 lua5.2 尚未設定。
      提供了 lua 的套件 lua5.1 即將被移除。
     lua-any 相依於 lua5.1 | lua﹔然而：
      即將移除套件 lua5.1。
      套件 lua 未安裝。
      提供了 lua 的套件 lua5.2 尚未設定。
      提供了 lua 的套件 lua5.1 即將被移除。
    
    （讀取資料庫 ... 目前共安裝了 197452 個檔案和目錄。）
    正在移除 lua5.1 (5.1.5-8.1+b2)……
    設定 lua5.2 (5.2.4-1.1+b2) ...
    update-alternatives: 在自動模式下以 /usr/bin/lua5.2 來提供 /usr/bin/lua (lua-interpreter)
    update-alternatives: 在自動模式下以 /usr/bin/luac5.2 來提供 /usr/bin/luac (lua-compiler)
    執行 man-db (2.8.5-2) 的觸發程式……



## 安裝 Lua 套件管理器 - LuaRocks
https://github.com/luarocks/luarocks/wiki/installation-instructions-for-unix



**透過原始碼安裝 luarocks**
https://luarocks.org/#quick-start

（1）下載「原始碼」。

    cd ~/build
    wget https://luarocks.org/releases/luarocks-3.5.0.tar.gz
    tar zxpf luarocks-3.5.0.tar.gz

（2）編譯原始碼與安裝執行檔。

    cd luarocks-3.5.0
    ./configure --with-lua-include=/usr/local/include
    make
    sudo make install



    alanjui@VB01-Debian-10:~/build$ cd luarocks-3.5.0/
    alanjui@VB01-Debian-10:~/build/luarocks-3.5.0$ ./configure --with-lua-include=/usr/local/include
    
    Configuring LuaRocks version 3.5.0...
    
    Lua version detected: 5.4
    Lua interpreter found: /usr/bin/lua5.4
    lua.h found: /usr/local/include/lua.h
    unzip found in PATH: /usr/bin
    
    Done configuring.
    
    LuaRocks will be installed at......: /usr/local
    LuaRocks will install rocks at.....: /usr/local
    LuaRocks configuration directory...: /usr/local/etc/luarocks
    Using Lua from.....................: /usr
    Lua include directory..............: /usr/local/include
    
    * Type make and make install:
      to install to /usr/local as usual.
    * Type make bootstrap:
      to install LuaRocks into /usr/local as a rock.
    
    $ la /usr/local/share/lua/5.4/luarocks/
    總計 380
    drwxr-xr-x 13 root root  4096  2月 19 14:17 .
    drwxr-xr-x  3 root root  4096  2月 19 14:17 ..
    drwxr-xr-x  3 root root  4096  2月 19 14:17 admin
    -rw-r--r--  1 root root 57956  2月 19 14:17 argparse.lua
    drwxr-xr-x  2 root root  4096  2月 19 14:17 build
    -rw-r--r--  1 root root 14899  2月 19 14:17 build.lua
    drwxr-xr-x  2 root root  4096  2月 19 14:17 cmd
    -rw-r--r--  1 root root 22434  2月 19 14:17 cmd.lua
    drwxr-xr-x  2 root root  4096  2月 19 14:17 core
    -rw-r--r--  1 root root  2414  2月 19 14:17 deplocks.lua
    -rw-r--r--  1 root root 26710  2月 19 14:17 deps.lua
    -rw-r--r--  1 root root  1543  2月 19 14:17 dir.lua
    -rw-r--r--  1 root root  2021  2月 19 14:17 download.lua
    drwxr-xr-x  2 root root  4096  2月 19 14:17 fetch
    -rw-r--r--  1 root root 16197  2月 19 14:17 fetch.lua
    drwxr-xr-x  4 root root  4096  2月 19 14:17 fs
    -rw-r--r--  1 root root  4112  2月 19 14:17 fs.lua
    -rw-r--r--  1 root root  2691  2月 19 14:17 fun.lua
    -rw-r--r--  1 root root  9183  2月 19 14:17 loader.lua
    drwxr-xr-x  2 root root  4096  2月 19 14:17 manif
    -rw-r--r--  1 root root  9979  2月 19 14:17 manif.lua
    -rw-r--r--  1 root root  6130  2月 19 14:17 pack.lua
    -rw-r--r--  1 root root 10642  2月 19 14:17 path.lua
    -rw-r--r--  1 root root  7930  2月 19 14:17 persist.lua
    -rw-r--r--  1 root root  6973  2月 19 14:17 queries.lua
    -rw-r--r--  1 root root  4372  2月 19 14:17 remove.lua
    -rw-r--r--  1 root root 22118  2月 19 14:17 repos.lua
    -rw-r--r--  1 root root   108  2月 19 14:17 require.lua
    -rw-r--r--  1 root root  1724  2月 19 14:17 results.lua
    -rw-r--r--  1 root root  5793  2月 19 14:17 rockspecs.lua
    -rw-r--r--  1 root root 14656  2月 19 14:17 search.lua
    -rw-r--r--  1 root root   994  2月 19 14:17 signing.lua
    drwxr-xr-x  2 root root  4096  2月 19 14:17 test
    -rw-r--r--  1 root root  1857  2月 19 14:17 test.lua
    drwxr-xr-x  2 root root  4096  2月 19 14:17 tools
    drwxr-xr-x  2 root root  4096  2月 19 14:17 type
    -rw-r--r--  1 root root  7567  2月 19 14:17 type_check.lua
    drwxr-xr-x  2 root root  4096  2月 19 14:17 upload
    -rw-r--r--  1 root root 20426  2月 19 14:17 util.lua


**驗證 luarocks 套件管理器已能正常運作**

    $ sudo luarocks install luasocket
    [sudo] password for alanjui: 
    Installing https://luarocks.org/luasocket-3.0rc1-2.src.rock
    
    luasocket 3.0rc1-2 depends on lua >= 5.1 (5.4-1 provided by VM)
    gcc -O2 -fPIC -I/usr/local/include -c src/buffer.c -o src/buffer.o -DLUA_COMPAT_APIINTCASTS -DLUASOCKET_DEBUG -DLUASOCKET_API=__attribute__((visibility("default"))) -DUNIX_API=__attribute__((visibility("default"))) -DMIME_API=__attribute__((visibility("default")))
    ....
    gcc -shared -o socket/core.so src/luasocket.o src/timeout.o src/buffer.o src/io.o src/auxiliar.o src/options.o src/inet.o src/except.o src/select.o src/tcp.o src/udp.o src/usocket.o
    gcc -O2 -fPIC -I/usr/local/include -c src/mime.c -o src/mime.o -DLUA_COMPAT_APIINTCASTS -DLUASOCKET_DEBUG -DLUASOCKET_API=__attribute__((visibility("default"))) -DUNIX_API=__attribute__((visibility("default"))) -DMIME_API=__attribute__((visibility("default")))
    gcc -shared -o mime/core.so src/mime.o
    luasocket 3.0rc1-2 is now installed in /usr/local (license: MIT)
    
    $ lua
    Lua 5.4.2  Copyright (C) 1994-2020 Lua.org, PUC-Rio
    > require "socket"
    table: 0x55fd73835380        /usr/local/share/lua/5.4/socket.lua
    > 
    $ 


**透過 luarocks 套件管理器安裝 Lua 套件**


    sudo luarocks build mpack
    sudo luarocks build lpeg
    sudo luarocks build inspect



    alanjui@VB01-Debian-10:~$ luarocks list
    
    Rocks installed for Lua 5.4
    ---------------------------
    
    alanjui@VB01-Debian-10:~$ sudo luarocks build mpack
    
    gcc -O2 -fPIC -I/usr/local/include -c lmpack.c -o lmpack.o
    gcc -shared -o mpack.so lmpack.o
    No existing manifest. Attempting to rebuild...
    mpack 1.0.8-0 is now installed in /usr/local (license: MIT)
    
    alanjui@VB01-Debian-10:~$ sudo luarocks build lpeg
    
    lpeg 1.0.2-1 depends on lua >= 5.1 (5.4-1 provided by VM)
    gcc -O2 -fPIC -I/usr/local/include -c lpcap.c -o lpcap.o
    gcc -O2 -fPIC -I/usr/local/include -c lpcode.c -o lpcode.o
    gcc -O2 -fPIC -I/usr/local/include -c lpprint.c -o lpprint.o
    gcc -O2 -fPIC -I/usr/local/include -c lptree.c -o lptree.o
    gcc -O2 -fPIC -I/usr/local/include -c lpvm.c -o lpvm.o
    gcc -shared -o lpeg.so lpcap.o lpcode.o lpprint.o lptree.o lpvm.o
    lpeg 1.0.2-1 is now installed in /usr/local (license: MIT/X11)
    
    alanjui@VB01-Debian-10:~$ sudo luarocks build inspect
    
    inspect 3.1.1-0 depends on lua >= 5.1 (5.4-1 provided by VM)
    inspect 3.1.1-0 is now installed in /usr/local (license: MIT <http://opensource.org/licenses/MIT>)
    
    alanjui@VB01-Debian-10:~$ luarocks list
    
    Rocks installed for Lua 5.4
    ---------------------------
    
    inspect
       3.1.1-0 (installed) - /usr/local/lib/luarocks/rocks-5.4
    
    lpeg
       1.0.2-1 (installed) - /usr/local/lib/luarocks/rocks-5.4
    
    mpack
       1.0.8-0 (installed) - /usr/local/lib/luarocks/rocks-5.4
    
    alanjui@VB01-Debian-10:~$ 


**瀏覽已安裝 Lua 套件**

    alanjui@VB01-Debian-10:~$ luarocks list
    
    Rocks installed for Lua 5.4
    ---------------------------
    
    inspect
       3.1.1-0 (installed) - /usr/local/lib/luarocks/rocks-5.4
    
    lpeg
       1.0.2-1 (installed) - /usr/local/lib/luarocks/rocks-5.4
    
    mpack
       1.0.8-0 (installed) - /usr/local/lib/luarocks/rocks-5.4
    
    alanjui@VB01-Debian-10:~$ la /usr/local/lib/luarocks/rocks-5.4/
    總計 24
    drwxr-xr-x 5 root root 4096  2月 19 14:24 .
    drwxr-xr-x 3 root root 4096  2月 19 14:23 ..
    drwxr-xr-x 3 root root 4096  2月 19 14:24 inspect
    drwxr-xr-x 3 root root 4096  2月 19 14:23 lpeg
    -rw-r--r-- 1 root root 1587  2月 19 14:24 manifest
    drwxr-xr-x 3 root root 4096  2月 19 14:23 mpack



----------
# 安裝 Neovim v5.x
https://github.com/neovim/neovim/tree/nightly




## 使用原始碼安裝 Neovim

**（1）安裝「原始碼編譯及安裝工具」**

建置環境需求（Build prerequisites）：

- Clang or GCC version 4.4+
- CMake version 2.8.12+, built with TLS/SSL support

安裝編譯與組建相關套件：

    sudo apt install ninja-build gettext libtool libtool-bin autoconf automake cmake g++ pkg-config unzip

安裝 Lua 套件：

    sudo luarocks build mpack
    sudo luarocks build lpeg
    sudo luarocks build inspect


**（2）下載原始碼**
 

    cd ~/build
    git clone https://github.com/neovim/neovim.git


**（3）編譯原始碼及安裝執行檔**

【方法一】：Building and Install to path: $HOME/.local/share/

    rm -r build/  # clear the CMake cache
    make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/.local/share/neovim"
    make install
    ln -s -f ~/.local/share/neovim/bin/nvim ~/.local/bin/


【方法二】：Building and Install to path: /usr/local/

    make CMAKE_BUILD_TYPE=Release
    sudo make install

解除安裝方法：

    sudo rm /usr/local/bin/nvim
    sudo rm -r /usr/local/share/nvim/



## 安裝開發中 Neovim （非正式發行版）
https://github.com/neovim/neovim/releases/nightly


**（1）自官網下載「執行檔」**

    cd ~/.local/share
    curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage


**（2）安裝執行檔。**

    chmod u+x nvim.appimage
    ln -s -f ~/.local/share/nvim.appimage ~/.local/bin/nvim



----------
# 安裝 Neovim 執行環境


## Python support for Neovim


    $ git clone https://github.com/pyenv/pyenv-virtualenv.git $HOME/.pyenv/plugins/pyenv-virtualenv


    $ pyenv virtualenv 3.9.1 venv-3.9.1

先完成 pyenv ：Python 版本管理器之安裝後，再執行如下指令：

    [alanjui@VB2101-Manjaro-KDE-202 .vim]$ pyenv versions 
     system 
    * 3.9.1 (set by /home/alanjui/.pyenv/version) 
     3.9.1/envs/my_venv 
     3.9.1/envs/venv-3.9.1 
     my_venv 
     venv-3.9.1


    pip install --upgrade pip
    pip install pynvim
    pip install neovim-remote



## Node.JS support for Neovim

先完成 n : Node.JS 版本管理器之安裝後，再執行如下指令：

    [alanjui@VB2101-Manjaro-KDE-202 .vim]$ n 
      installed : v14.15.4 (with npm 6.14.10) 
    [alanjui@VB2101-Manjaro-KDE-202 .vim]$ node -v 
    v14.15.4 
    [alanjui@VB2101-Manjaro-KDE-202 .vim]$ npm -v 
    6.14.10


    npm install -g neovim



## Lua support for Neovim

【執行檔直接安裝法】：
確認 Lua 編譯／執行環境已建立（即下列軟件已安裝）：

- Build: lua
- Run time: luarocks

【驗證安裝結果】：

    [alanjui@VB2101-Manjaro-KDE-202 .vim]$ which lua 
    /usr/bin/lua 
    [alanjui@VB2101-Manjaro-KDE-202 .vim]$ which luarocks 
    /usr/bin/luarocks
    
    
    $ lua
    Lua 5.4.2  Copyright (C) 1994-2020 Lua.org, PUC-Rio
    > ^D
    
    $ sudo luarocks install luasocket
    $ lua
    Lua 5.4.2  Copyright (C) 1994-2020 Lua.org, PUC-Rio
    > require "socket"
    table: 0x7ff0ef004f50   /usr/share/lua/5.4/socket.lua
    > ^D



## Git support for Neovim

**（1）安裝 git 軟件**

    sudo apt install git


**（2）設置 git 執行環境**

    $ git config --global user.name "Alan Jui"
    $ git config --global user.email "alanjui.1960@gmail.com"



----------
# 安裝 Neovim Plugins 支援軟件

Neovim Plugin 在「執行」時，會呼叫某些「作業系統」層級之軟件，以達成其「功能」之用途。故而需要安裝這些「**Neovim Plugins 支援軟件**」。


## 《Clipboard支援軟件》

https://wiki.archlinux.org/index.php/clipboard


    sudo apt install xsel


## 《ripgrep》
    sudo apt install ripgrep



## 《silver searcher》
    sudo apt install silversearcher-ag


https://github.com/ggreer/the_silver_searcher




## 《fd》
    sudo apt install fd-find


https://github.com/sharkdp/fd




## 《ranger》


- **安裝 ranger (File Manager)**
    sudo apt install ranger


- **設定 ranger 執行環境**
    vim ~/.config/ranger/rc.conf


    set preview_images true
    set preview_images_method ueberzug
    
    default_linemod devicons
    set show_hidden true

【參考文章】： 

- https://www.everythingcli.org/ranger-image-preview-on-osx-with-iterm2/




## 《Rnvimr》
    pip install ueberzug

【註】： Requirements

- Ranger (v1.9.3 at least)
- Pynvim
- Neovim
- Python 3.6
- Ueberzug (optiona, v18.1.6 at least) : 只有 Linux 版可安裝


https://github.com/kevinhwang91/rnvimr


【註】：
Rnvimr is a NeoVim plugin that allows you to use Ranger in a floating window.

Different than other Ranger vim-plugins, Rnvimr gives you full control over Ranger. It uses [RPC](https://neovim.io/doc/user/api.html#RPC) to communicate with Ranger.

This plugin does not support Vim.


    macOS users please install ranger by `pip3 ranger-fm` instead of `brew install ranger`

https://awesomeopensource.com/project/kevinhwang91/rnvimr?categoryPage=40#installation



## 《universal-ctags》
    sudo apt install universal-ctags


https://github.com/universal-ctags/homebrew-universal-ctags




## 《lazy git》
    yay -S lazygit-git


https://github.com/jesseduffield/lazygit#ubuntu




## 《lazy docker》
    yay -S lazydocker-git


https://github.com/jesseduffield/lazydocker#installation




## 《coc-nvim extension: bash-language-server》
    yay -S bash-language-server


    npm i -g bash-language-server


https://github.com/bash-lsp/bash-language-server




## 《coc-nvim extension: lua-language-server》
    yay -S lua-language-server-git


**《vim-visual-multi》**

https://github.com/mg979/vim-visual-multi



**《fzf-preview》**

https://github.com/yuki-yano/fzf-preview.vim

    sudo apt install fzf



    [ -f ~/.fzf.bash ] && source ~/.fzf.bash



----------
# 安裝 VS Code 及 Extensions



## 安裝 VS Code 軟件

安裝 VS Code 軟件，有以下三種方法：

- 使用官方提供之執行檔安裝
- 使用作業系統套件舘安裝
- 使用原始碼編譯及安裝


**使用官方提供之執行檔安裝**

自「官網」下載，及執行「安裝執行檔」。

https://code.visualstudio.com/download



- Mac 版： VSCode-darwin.zip
- Ubuntu/Debian 版： code_1.52.1-1608136922_amd64.deb
- Linux 版： code-stable-x64-1608137260.tar.gz （GZip壓縮檔）


**使用作業系統套件舘安裝**

許多的 Linux 作業系統，如： Ubuntu / Debian / CentOS 均有提供「套件舘（Package Library）」的安裝方式：

https://linuxhint.com/install_visual_studio_code_archlinux/


**使用原始碼編譯及安裝**

如：ArchLinux 
https://wiki.archlinux.org/index.php/Visual_Studio_Code



## 安裝 VS Code 擴充軟件（Extensions）

啟動 VS Code 後，安裝下列 Extensions：

- Neo Vim (asvetliakov.vscode-neovim)
- Which Key (vspacecode.whichkey)
- prettier - Code formatter (esbenp.prettier-vscode)
- Material Icon Theme (pkief.material-icon-theme)
- Auto Rename Tag (formulahendry.auto-rename-tag)
- Django (batisteo.vscode-django)
- Djaneiro - Django Snippets (thebarkman.vscode-djaneiro)
- Django Samples (mengsicode.vscode-django-boilerplate)
- Bracket Pair Colorizer 2 (coenraads.bracket-pair-colorizer-2)
- GitLens - Git supercharged (eamodio.gitlens)
- Git Graph (mhutchie.git-graph)
- Markdown All in One (yzhang.markdown-all-in-one)

【註】： 其它參考

https://blog.logrocket.com/top-10-vs-code-extensions-2021/

## 安裝 VS Code Terminal 使用字型

**Hack Nerd Font 下載網址：** 

Hack Regular Nerd Font Complete Mono.ttf


    $ cd ~/tmp
    
    $ wget https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/Hack/Regular/complete/Hack%20Regular%20Nerd%20Font%20Complete%20Mono.ttf
    
    $ sudo mv 'Hack Regular Nerd Font Complete Mono.ttf' /usr/share/fonts/TTF/


https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Hack


    cd ~/tmp
    wget https://github.com/source-foundry/Hack/releases/download/v3.003/Hack-v3.003-ttf.zip
    unzip Hack-v3.003-ttf.zip
    sudo mv ttf/*.ttf /usr/local/share/fonts/TTF/


**安裝 Hack Nerd Font 作業程序**


1. Download the [latest version of Hack](https://github.com/source-foundry/Hack/releases/download/v3.003/Hack-v3.003-ttf.zip).
2. Extract the files from the archive (`.zip`).
3. Copy the font files to either your system font folder (often `/usr/share/fonts/`) or user font folder (often `~/.local/share/fonts/` or `/usr/local/share/fonts`).
4. Copy the font configuration file in `config/fontconfig/` to either the system font configuration folder (often `/etc/fonts/conf.d/`) or the font user folder (often `~/.config/fontconfig/conf.d`)
5. Clear and regenerate your font cache and indexes with the following command:
    $ fc-cache -f -v

You can confirm that the fonts are installed with the following command:

    $ fc-list | grep "Hack"





----------
# 設定 VS Code 執行環境



## 置入 NVCode 支援之設定

將 NVCode 所提供之 VS Code 「設定」放進以下設定檔中：

- 來源處所在目錄： **~/.config/nvim/utils/vscode_config/**
- 標的處所在目錄： **~/Library/Application\ Support/Code/User/**
- 來源處之 Git Repo 網址：https://github.com/ChristianChiarulli/nvim

設定標的及其設定檔名稱：

- 執行環境設定： settings.json
- 快捷鍵設定：keybindings.json



## 同步 VS Code 執行環境設定

啟動 VS Code 後，執行「登入」及「Settings is Sync On」功能。



## 檢查 VS Code 執行環境設定

檢查「設定檔」： **~/Library/Application\ Support/Code/User/settings.json** 的「設定」內容：


**設定 Terminal**

      "terminal.external.osxExec": "iTerm.app",
      "terminal.integrated.cursorBlinking": true,
      "terminal.integrated.fontFamily": "Hack Nerd Font Mono",
      "terminal.integrated.fontSize": 14,
      "terminal.integrated.rightClickCopyPaste": true,


**設定 editor**

      "editor.fontSize": 14,
      "editor.suggestFontSize": 14,
      "editor.suggestSelection": "first",
      "editor.cursorBlinking": "solid",
      "editor.fontFamily": "FiraCode Nerd Font Mono, Hack, Menlo, Monaco, 'Courier New', monospace",
      "editor.minimap.enabled": false,
      "editor.snippetSuggestions": "bottom",
      "editor.scrollbar.horizontal": "hidden",
      "editor.scrollbar.vertical": "hidden",
      "editor.tokenColorCustomizations": {
        "[One Dark Pro]": {
          ....
      },


**設定 Emmet**

設定 HTML 之編輯，在 Emmet 之使用，於 Django Template 編輯時，可使用 Django Extension 的Snippets 。

      "emmet.showSuggestionsAsSnippets": true,
      "emmet.triggerExpansionOnTab": true,
      "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "django-html": "html",
        "razor": "html",
        "plaintext": "pug"
      },

 

**設定 Neo Vim Extension**

      "vscode-neovim.mouseSelectionStartVisualMode": true,
      "vscode-neovim.neovimExecutablePaths.linux": "/home/alanjui/.local/bin/nvim",
      "vscode-neovim.neovimInitVimPaths.linux": "/home/alanjui/.config/nvim/init.vim",
      "vscode-neovim.neovimExecutablePaths.darwin": "/Users/alanjui/.local/share/nvim-osx64/bin/nvim",
      "vscode-neovim.neovimInitVimPaths.darwin": "/Users/alanjui/.config/nvim/init.vim",

【註】：不可將 /Users/alanjui 目錄路徑「縮寫」成如下「格式」：

            - ~
            - $HOME

 
**設定 Which Key Extension**

      "whichkey.sortOrder": "alphabetically",
      "whichkey.delay": 0,
      "whichkey.bindings": [
        {
          "key": ";",
          "name": "commands",
          "type": "command",
          "command": "workbench.action.showCommands"
        },
        ....
      ]




**整體設定參考**

~/Library/Application\ Support/Code/User/settings.json

    {
      "vscode-neovim.mouseSelectionStartVisualMode": true,
      "vscode-neovim.neovimExecutablePaths.linux": "/usr/bin/nvim",
      "vscode-neovim.neovimInitVimPaths.linux": "~/.config/nvim/init.vim",
      "vscode-neovim.neovimExecutablePaths.darwin": "/Users/alanjui/.local/share/nvim/bin/nvim",
      "vscode-neovim.neovimInitVimPaths.darwin": "/Users/alanjuigg/.config/nvim/init.vim",
    
      "files.associations": {
        "**/*.html": "html",
        "**/templates/**/*.html": "django-html",
        "**/templates/**/*": "django-txt",
        "**/requirements{/**,*}.{txt,in}": "pip-requirements"
      },
      "files.exclude": {
        "**/__pycache__": true,
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
      },
      "code-runner.executorMap": {
        "python": "$pythonPath $fileName",
        "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
        "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
      },
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      
      "emmet.showSuggestionsAsSnippets": true,
      "emmet.triggerExpansionOnTab": true,
      "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "django-html": "html",
        "razor": "html",
        "plaintext": "pug"
      },
    
      "editor.fontSize": 14,
      "editor.suggestFontSize": 14,
      "editor.suggestSelection": "first",
      "editor.cursorBlinking": "solid",
      "editor.fontFamily": "FiraCode Nerd Font Mono, Hack, Menlo, Monaco, 'Courier New', monospace",
      "editor.minimap.enabled": false,
      "editor.snippetSuggestions": "bottom",
      "editor.scrollbar.horizontal": "hidden",
      "editor.scrollbar.vertical": "hidden",
    
      //==================================================================
      // Python
      //==================================================================
      //"python.pythonPath": "/home/chris/.miniconda/envs/ds/bin/python",
      //"python.condaPath": "$HOME/.miniconda/bin/conda",
      "python.languageServer": "Pylance",
      "python.formatting.provider": "autopep8",
      "python.terminal.activateEnvironment": false,
      "python.insidersChannel": "off",
      "python.showStartPage": false,
      "python.dataScience.alwaysTrustNotebooks": true,
     
      "whichkey.bindings": [
        {
          "key": ";",
          "name": "commands",
          "type": "command",
          "command": "workbench.action.showCommands"
        },
        ....
      ]


**設定 Python Extension**

      "python.languageServer": "Pylance",
      "python.formatting.provider": "autopep8",
      "python.terminal.activateEnvironment": false,
      "python.insidersChannel": "off",
      "python.showStartPage": false,
      "python.dataScience.alwaysTrustNotebooks": true,

code-runner.executorMap: 原始碼與執行編譯器之對映關係

      "code-runner.executorMap": {
        "python": "$pythonPath $fileName",
        "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
        "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
      },

file.exclude: 檔案瀏器可忽略不顯示之目錄或檔案

      "files.exclude": {
        "**/__pycache__": true,
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
      },
    

**設定 Django Extension**

files.associations: 設定「檔案型態辨識規則」

    "files.associations": {
        "**/*.html": "html",
        "**/templates/**/*.html": "django-html",
        "**/templates/**/*": "django-txt",
        "**/requirements{/**,*}.{txt,in}": "pip-requirements"
    },

 **【註】：**
 

- 配合 Django Extension 使用之 snippets 檔存放路徑：
    $HOME/Library/Application\ Support/Code/User/snippets/django-html.json

 

- 在 Coc-nvim 使用 Django Extension Snippets 需配合之設定：
    {
      ....
      "snippets.textmateSnippetsRoots": [
          "~/.config/nvim/snips"
      ],
      ....
    }

 

- **建立 Symbolic Link: htmldjango.json 指向 django-html.json：**

在 coc-nvim 使用之 Snippets 檔案，集中於目錄路徑： **~/.config/nvim/snips/** 。為方便 Snippet 檔案內容同步的管理，應避免使用「實體檔案」，而改用：「軟連結（Symbolic Link）」，建立檔案連結指向為宜。   

【Mac】：

    cd ~/.config/nvim/snips
    ln -s -f ~/Library/Application\ Support/Code/User/snippets/django-html.json htmldjango.json

【ArchLinux】：

    cd ~/.config/nvim/snips
    ln -s -f ~/.config/Code/User/snippets/django-html.json  htmldjango.json
    ln -s -f ~/.config/Code/User/snippets/markdown.json 

 
 


----------
# 設定 NVCode 執行環境



## 作業程序：

 1. 下載 NVCode 設定檔
 2. 編輯 NVCode 設定檔
 3. 編輯 coc-nvim 設定檔
 4. 安裝 Neovim Plugings
 5. 設置個人客製化設定




## 下載 NVCode 設定檔


    git clone git@github.com:AlanJui/MyNVCode.git ~/.config/nvim


    git clone https://github.com/AlanJui/MyNVCode.git ~/.config/nvim



## 編輯 NVCode 設定檔


**（1）修訂 ～/.config/nvim/init.vim**

    https://github.com/AlanJui/MyNVCode.git


**（2）設定 coc-settings.json 所在路徑**

    cd ~/.config/nvim
    rm coc-settings.json
    ln -s -f my-nvim/coc-settings.json



## 編輯 coc-nvim 設定檔


**修訂設定檔： coc-settings.json**

    vim ~/.config/nvim/coc-settings.json


**python 應用設定**

      "python.analysis.autoImportCompletions": true,
      "python.analysis.autoSearchPaths": true,
      "python.analysis.diagnosticMode": "openFilesOnly",
      "python.analysis.stubPath": "typings",
      "python.analysis.typeshedPaths": [],
      "python.analysis.diagnosticSeverityOverrides": {},
      "python.analysis.typeCheckingMode": "basic",
      "python.analysis.useLibraryCodeForTypes": true,
      "python.pythonPath": "python",
      "python.venvPath": "",
      "python.linting.enabled": true,
      "python.linting.pylintEnabled": true,
      "python.linting.pylintArgs": ["--disable=F401, E722, C0115, C0116, W0613"],
      "python.formatting.provider": "autopep8",
      "python.jediEnabled": false,
      // "python.formatting.provider": "black",
      // "python.formatting.blackPath": "~/.local/bin/black",
      // "python.linting.pylintPath": "~/.miniconda/envs/neovim/bin/pylint",
      // "python.condaPath": "~/.miniconda/bin/conda",
      // "python.sortImports.path": "~/.miniconda/envs/neovim/bin/isort",
      // "python.jediPath": "~/.miniconda/envs/neovim/lib/python3.8/site-packages",
      "pyright.disableCompletion": false,
      "pyright.disableLanguageServices": false,
      "pyright.disableOrganizeImports": false,


**Snippets 設定**

      "suggest.noselect": false,
      "snippets.userSnippetsDirectory": "~/.config/nvim/snips",
      "snippets.ultisnips.enable": true,
      "snippets.ultisnips.directories": ["UltiSnips", "~/.config/nvim/snips"],
      "snippets.snipmate.enable": false,
      "snippets.textmateSnippetsRoots": [
        // Ubuntu Path:
        //  "~/.config/Code/User/snippets"
        //
        // macOS(Darwin) Path:
        // "~/Library/Application Support/Code/User/snippets"
        "~/.config/nvim/snips"
      ],


**Emmet 設定**

      "emmet.includeLanguages": {
        "htmldjango": "html",
        "django-html": "html",
        "python.django": "python",
        "vue-html": "html",
        "javascript": "javascriptreact"
      },
      "emmet.showAbbreviationSuggestions": true,
      "emmet.showExpandedAbbreviation": "always",


**存檔後自動編排原始碼格式設定**

執行「存檔」指令後，自動編排「原始碼」應有的「格式」：

      "coc.preferences.formatOnSaveFiletypes": [
        "python",
        "html",
        "htmldjango",
        "django-html",
        "css",
        "markdown",
        "javascript",
        "graphql",
        "yaml",
        "json",
        "jsonc",
        "java"
      ],


**Language Server 設定**

    {
      ....
      "languageserver": {
        "bash": {
          "command": "bash-language-server",
          "args": ["start"],
          "filetypes": ["sh"],
          "ignoredRootPaths": ["~"]
        },
        "lua": {
          "command": "/usr/local/bin/lua-language-server",
          "filetypes": ["lua"],
          "trace.server": "verbose"
        }
    }



## 修訂 coc-nvim extensions 安裝清單

配合 coc-nvim 使用的 extensions（亦算是 Neovim Plugins 的一種），除了可在 Neovim 中，透過指令 CocInstall ，逐個「手動安裝」外。亦可透過設定「**安裝清單設定檔」： coc-extensions.vim ，令 coc-nvim 自動安裝。**


    vim ~/.config/nvim/plug-config/coc/coc-extensions.vim


    let g:coc_global_extensions = [
      \ 'coc-snippets',
      \ 'coc-actions',
      \ 'coc-sh',
      \ 'coc-java-debug',
      \ 'coc-java',
      \ 'coc-lists',
      \ 'coc-emmet',
      \ 'coc-tasks',
      \ 'coc-pairs',
      \ 'coc-tsserver',
      \ 'coc-floaterm',
      \ 'coc-fzf-preview',
      \ 'coc-html',
      \ 'coc-css',
      \ 'coc-cssmodules',
      \ 'coc-stylelintplus',
      \ 'coc-emoji',
      \ 'coc-yaml',
      \ 'coc-explorer',
      \ 'coc-svg',
      \ 'coc-prettier',
      \ 'coc-vimlsp',
      \ 'coc-xml',
      \ 'coc-yank',
      \ 'coc-json',
      \ 'coc-marketplace',
      \ ]
      " \ 'coc-pyright',
      " \ 'coc-bookmark',
      " \ 'coc-tabnine',
      " \ 'coc-highlight',




## 安裝 Neovim 擴充軟件（Plugins ）


**（1）啟動 Neovim**


**（2）安裝 Neovim Plugins**


**（3）啟動 FAR**

    nvim
    :UpdateRemotePlugins




## 設置個人客製化設定


**（1）設定「個人客製化」環境**

    cd ~/.config/nvim
    git clone <Repo> my-nvim

my-nvim 之目錄結構與檔案清單：

    [alanjui@VB2101-Manjaro-KDE-202 nvim]$ tree my-nvim        
    my-nvim 
    ├── coc-settings.json 
    ├── lua 
    │   ├── ccc-eviline.lua 
    │   ├── ccc-spaceline.lua 
    │   ├── ccc-statusline.lua 
    │   └── my-statusLine.lua 
    ├── my-init.vim 
    ├── my-settings.vim 
    └── snips 
       ├── html.snippets 
       ├── javascript-node.snippets 
       ├── javascript.snippets 
       ├── json.snippets 
       ├── markdown.json 
       ├── markdown.snippets 
       └── python.snippets 
    
    2 directories, 14 files


**（2）修訂原設定檔，以便加入「個人客製化」設定：**

    cd ~/.config/nvim
    cp init.vim init.vim.org
    vim init.vim

在「檔案底端」加入如下「設定」：

    "=========================================================================
    " User Define
    
    if !exists('g:vscode')
        let g:python3_host_prog = expand("$HOME/.pyenv/versions/3.9.1/envs/venv-3.9.1/bin/python3")
        let g:node_host_prog = expand("$HOME/n/bin/neovim-node-host")
    
        let g:loaded_python_provider = 0
        let g:loaded_ruby_provider = 0
        let g:loaded_perl_provider = 0
    
        source  $HOME/.config/nvim/my-nvim/my-settings.vim
        luafile $HOME/.config/nvim/my-nvim/lua/my-statusLine.lua
    endif


**（3）設定 Snippets** 

與 VS Code 共用 Snippets

**《Mac版》**

    cd ~/.config/nvim/snips
    ln -s -f ~/Library/Application\ Support/Code/User/snippets/django-html.json htmldjango.json
    ln -s -f ~/Library/Application\ Support/Code/User/snippets/django-python.json
    ln -s -f ~/Library/Application\ Support/Code/User/snippets/markdown.json

**《Linux版》**

    cd ~/.config/nvim/snips
    ln -s -f ~/.config/Code/User/snippets/django-html.json htmldjango.json
    ln -s -f ~/.config/Code/User/snippets/django-python.json
    ln -s -f ~/.config/Code/User/snippets/markdown.json


設定個人用 Snippets

    cd ~/.config/nvim/snips
    ln -s -f ../my-nvim/snips/html.snippets
    ln -s -f ../my-nvim/snips/javascript-node.snippets
    ln -s -f ../my-nvim/snips/javascript.snippets
    ln -s -f ../my-nvim/snips/json.snippets
    ln -s -f ../my-nvim/snips/markdown.snippets
    ln -s -f ../my-nvim/snips/python.snippets





----------
# 設定 Django Projects 執行環境



## 作業程序：

 1. 安裝 Python 執行環境
 2. 建置 Django Project 
 3. 設定 Django Project 執行環境


## 建置 Django Project 目錄

**（1）建置專案目錄**

    cd ~/workspace/django
    mkdir <ProjectName> && cd $_


**（2）設定專案使用 Python 版本**

《建置新的虛擬環境》

    pyenv versions
    pyenv virtualenv 3.9.1 venv-3.9.1

《指定專案所使用的虛擬環境》

    pyenv local venv-3.9.1
    pyenv version


**（3）安裝 Python 套件：Django**

    pip install django


**（4）安裝 Python 格式編排器**

    pip install autopep8


**（5）安裝 Python 語法檢視器**


- **安裝 pylint**
    pip install pylint
    cp ~/.config/nvim/my-nvim/utils/.pylintrc

【註】：自行產生 .pylintrc 設定檔

    pylint --generate-rcfile > .pylintrc


- **設定可略過之「規則」：**
    - `C0114` (`missing-module-docstring`)
    - `C0115` (`missing-class-docstring`)
    - `C0116` (`missing-function-docstring`)


    [MASTER]
    ....
    disable=print-statement,
            ....,
            C0114,
            C0115,
            C0116,
            compresension-escape


**（6）建置 pyright 設定：pyrightconfig.json**


    cp ~/.config/nvim/my-nvim/utils/pyrightconfig.json .


    nvim pyrightconfig.json


    {
      "venvPath": "/Users/alanjui/.pyenv/versions/3.9.1/envs",
      "venv": "venv-3.9.1",
      "reportMissingImports": true, 
      "pythonVersion": "3.9",
      "exclude": [
        "**/node_modules",
        "**/__pycache__"
      ]
    }


【註】： **venvPath** 的設定，不可使用 Home Dir 的簡寫：

    - $**HOME**/.pyenv/versions/3.9.1/envs
    - **~**/.pyenv/versions/3.9.1/envs


    $ pip freeze > requirements.txt


    $ pip install -r requirements.txt


**（7）建置 git 版本管理器**


    cp ~/.config/nvim/my-nvim/utils/.gitignore .
    git init
    git add .
    git commit -m "Initial project"


    $ cat .gitignore
    $HOME/.config/coc/extensions/
    ###################
    .DS_Store
    .hg
    .svn
    .idea
    .vscode
    *.vscode
    node_modules
    ###################
    # Python files
    .venv/
    env/
    __pycache__/
    .pyc
    static_collected/
    # Temporary files
    *.kate-swp
    *.swp
    *.swo
    *~


**（8）建立 Django Project**

    django-admin startproject web_config .


**（9）驗證建立結果**

    $ ./manage.py runserver
    Watching for file changes with StatReloader
    Performing system checks...
    
    System check identified no issues (0 silenced).
    
    You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
    Run 'python manage.py migrate' to apply them.
    January 26, 2021 - 04:12:53
    Django version 3.1.5, using settings 'web_config.settings'
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.


**（10）建立 app**

    $ ./manage.py startapp <AppName>



## VS Code 操作


**設定 Python 直譯器版本**

 1.《Shift》＋《Cmd》＋《P》

 2. Python: Select Interpreter ==> venv-3.9.1



## 設定 launch.json 

《專案目錄》/.vscode/launch.json

    {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Python: Django",
                "type": "python",
                "request": "launch",
                "program": "${workspaceFolder}/manage.py",
                "args": [
                    "runserver",
                    "0.0.0.0:9000"
                ],
                "django": true
            }
        ]
    }



----------
# 參考資訊



## [Vim 8.2](https://paper.dropbox.com/doc/NVCode-for-ArchLinx-OkttDpJ4pcQd3WUEVoU6D#:uid=286156922109040961383735&h2=Vim-8.2)
    sudo pacman -S vim
    git clone git@github.com:AlanJui/vim8.git ~/.vim


    sudo pacman -S vim
    正在解決依賴關係…
    正在檢查衝突的軟體包…
    
    軟體包 (2) vim-runtime-8.2.2380-1  vim-8.2.2380-1
    
    總計下載大小：   8.18 MiB
    總計安裝大小：  34.01 MiB
    淨升級大小：   0.01 MiB
    
    :: 進行安裝嗎？ [Y/n] 
    ....




## Coc-nvim 參考資料


**Neovim Plugin: Coc-nvim 簡介**
https://www.chrisatmachine.com/Neovim/04-vim-coc/


**Coc-nvim 對 Code Snippets 的支援**


https://kanneg881.gitbook.io/workspace/vim/wai-gua-tui-jian/dai-ma/coc/coc-snippets


 
**存檔時自動編排原始碼格式**


https://github.com/neoclide/coc-prettier

https://prettier.io/docs/en/vim.html




----------
## Command Line File Explorr

ranger

**（1）Install on Mac**

    pyenv global venv-3.9.1
    pip install ranger-fm

（2）Execute

    $ ranger



----------
## Lua 原始碼安裝作業

透過「原始碼」安裝 Lua 。


**（1）在此網頁查詢 Lua 版本及下載網址：**

    http://www.lua.org/versions.html
    http://www.lua.org/ftp/


**（2）編譯原始碼及安裝執行檔**

    $ cd ~/build
    $ curl -R -O http://www.lua.org/ftp/lua-5.4.2.tar.gz
    $ tar -zxvf lua-5.4.2.tar.gz
    $ cd lua-5.4.2
    $ make macosx
    $ sudo make install



    $ sudo make install
    Password:
    cd src && mkdir -p /usr/local/bin /usr/local/include /usr/local/lib /usr/local/man/man1 /usr/local/share/lua/5.4 /usr/local/lib/lua/5.4
    cd src && install -p -m 0755 lua luac /usr/local/bin
    cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/local/include
    cd src && install -p -m 0644 liblua.a /usr/local/lib
    cd doc && install -p -m 0644 lua.1 luac.1 /usr/local/man/man1


【註】： 



- Lua V5.3.4 下載
    $ curl -R -O http://www.lua.org/ftp/lua-5.3.4.tar.gz



- lua 安裝結果與執行檔所在路徑
    - lua: /usr/local/bin/lua
    - luac: /usr/local/bin/luac
    - lua.h luaconf.h lualib.h lauxlib.h lua.php: /usr/local/include
    - liblua.a: /usr/local/lib
    - lua.1 luac.1 /usr/local/man/man1



- 驗證安裝結果
    $ which lua
    /usr/local/bin/lua
    
    $ which lua
    /usr/local/bin/luac
    
    $ ll /usr/local/include/lua*
    -rw-r--r--  1 root     admin    15K 11 13 23:32 /usr/local/include/lua.h
    -rw-r--r--  1 root     admin   191B 12 23  2004 /usr/local/include/lua.hpp
    -rw-r--r--  1 root     admin    20K 11 13 23:32 /usr/local/include/luaconf.h
    lrwxr-xr-x  1 alanjui  admin    41B  1 22 13:11 /usr/local/include/luajit-2.0 -> ../Cellar/luajit/2.0.5/include/luajit-2.0
    -rw-r--r--  1 root     admin   1.2K 11 13 23:32 /usr/local/include/lualib.h
    
    $ ll /usr/local/lib/lua
    total 0
    drwxr-xr-x  2 root  admin    64B  1 18 13:36 5.2
    drwxr-xr-x  3 root  admin    96B  1 20 11:27 5.3
    drwxr-xr-x  2 root  admin    64B  1 24 10:33 5.4
    
    $ ll /usr/local/man/man1
    total 16
    -rw-r--r--  1 root  wheel   3.0K  5 22  2020 lua.1
    -rw-r--r--  1 root  wheel   3.0K 11 17  2011 luac.1


**Lua 操作參考：**


https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/84650/






## Lua 套件管理器：luarocks 安裝

https://luarocks.org/#quick-start


【Installation instructions for macOS】

https://github.com/luarocks/luarocks/wiki/Installation-instructions-for-macOS



【Installation instructions for Unix】

https://github.com/luarocks/luarocks/wiki/Installation-instructions-for-Unix



【Using LuaRocks】

https://github.com/luarocks/luarocks/wiki/Using-LuaRocks


**【使用原始碼安裝法】：**

    $ cd ~/build
    $ wget https://luarocks.org/releases/luarocks-3.5.0.tar.gz
    $ tar zxpf luarocks-3.5.0.tar.gz
    $ cd luarocks-3.5.0
    $ ./configure && make && sudo make install


**【安裝後驗證】：**

    $ which luarocks
    /usr/local/bin/luarocks
    
    $ sudo luarocks install luasocket
    $ lua
    Lua 5.3.5 Copyright (C) 1994-2018 Lua.org, PUC-Rio
    > require "socket"


《註》：執行時參考資訊

    $ ./configure
    
    Configuring LuaRocks version 3.5.0...
    
    Lua version detected: 5.1
    Lua interpreter found: /usr/local/bin/luajit
    lua.h found: /usr/local/include/lua.h
    unzip found in PATH: /usr/bin
    
    Done configuring.
    
    LuaRocks will be installed at......: /usr/local
    LuaRocks will install rocks at.....: /usr/local
    LuaRocks configuration directory...: /usr/local/etc/luarocks
    Using Lua from.....................: /usr/local
    
    * Type make and make install:
      to install to /usr/local as usual.
    * Type make bootstrap:
      to install LuaRocks into /usr/local as a rock.






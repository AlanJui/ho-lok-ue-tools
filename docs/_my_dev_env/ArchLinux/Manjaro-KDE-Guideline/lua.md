---
sidebar: auto
---

# Lua 作業環境安裝指引

## 透過套件安裝作業

### 執行安裝指令

```
sudo pacman -S lua luarocks
```

### 驗證安裝結果

1. 驗證 Lua 直譯器已能正常運作。

```
[alanjui@VB2101-Manjaro-KDE-202 .vim]$ which lua
/usr/bin/lua
[alanjui@VB2101-Manjaro-KDE-202 .vim]$ which luarocks
/usr/bin/luarocks


$ lua
Lua 5.4.2  Copyright (C) 1994-2020 Lua.org, PUC-Rio
> ^D
```

2. 驗證 Lua 套件管理器，亦能正常運作：使用 luarocks 套件管理器，安裝 luasocket 。

```
$ sudo luarocks install luasocket
$ lua
Lua 5.4.2  Copyright (C) 1994-2020 Lua.org, PUC-Rio
> require "socket"
table: 0x7ff0ef004f50   /usr/share/lua/5.4/socket.lua
> ^D
```

## 透過原始碼安裝作業

以下作業程序，系參考 Lua 官方文件： [Welcome to Lua 5.4](https://www.lua.org/manual/5.4/readme.html) 完成。

### 安裝「原始碼編譯工具」

```
sudo pacman -Sy base-devel
```

### 下載「原始碼」

```
$ cd ~/build
$ wget https://luarocks.org/releases/luarocks-X.Y.Z.tar.gz
$ tar zxpf luarocks-X.Y.Z.tar.gz
$ la lua-X.Y.Z
總計 24
drwxr-xr-x 4 alanjui alanjui 4096 11月 13 23:42 .
drwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:44 ..
drwxr-xr-x 2 alanjui alanjui 4096 11月 13 23:35 doc
-rw-r--r-- 1 alanjui alanjui 3146 11月 11 04:54 Makefile
-rw-r--r-- 1 alanjui alanjui  151 11月 13 23:42 README
drwxr-xr-x 2 alanjui alanjui 4096 11月 13 23:33 src
$ cd luarocks-X.Y.Z
```

【下載 Lua 5.4.2】：

```
cd ~/build
curl -R -O http://www.lua.org/ftp/lua-5.4.2.tar.gz
tar zxf lua-5.4.2.tar.gz
cd lua-5.4.2
```

### 編譯 Lua 套件

1. 確認 Lua 是否支援自己所用的「作業系統」。

```
make help

The platforms currently supported are:

- guess
- aix
- bsd
- c89
- freebsd
- generic
- linux
- linux-readline
- macosx
- mingw
- posix
- solaris
```

2. 執行編譯

```
make linux-readline
```

3. 檢驗編譯結果

```
make test
```

### 驗證 Lua 已能正常運作

完成安裝後，Lua 所需使用之執行檔及相關檔案，所在路徑如下：

- lua: /usr/local/bin/lua
- luac: /usr/local/bin/luac
- lua.h luaconf.h lualib.h lauxlib.h lua.php: /usr/local/include
- liblua.a: /usr/local/lib
- lua.1 luac.1 /usr/local/man/man1

驗證安裝結果的方法：

```
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
```

### 安裝 Lua 套件

```
sudo make linux-readline install
```

## 設定 Vim/Neovim 對 Lua 的支援

### 安裝 Lua Language Server

Ref: https://emacs-lsp.github.io/lsp-mode/page/lsp-lua-language-server/

1. 安裝 ninja。

```
sudo pacman -S ninja
```

2. 確認已安裝 C++17 編譯器。

3. 下載原始碼。

```
cd ~/build
git clone https://github.com/sumneko/lua-language-server
cd lua-language-server
git submodule update --init --recursive
```

4. 執行編譯。

```
cd 3rd/luamake
ninja -f ninja/linux.ninja
cd ../..
./3rd/luamake/luamake rebuild
```

5. 執行 Lua Language Server 。

```
./bin/Linux/lua-language-server -E ./main.lua
```

6. 執行「安裝」。

```
mv ~/build/lua-language-server ~/.local/share/
cd ~/.local/share/lua-language-server/bin/Linux
cp * ../
```

### 設定 coc-nvim 使之支援 Lua LSP

設定 coc-nvim ，使之支援 Lua Language Server。

1.  啟動 Vim 8 / Neovim 0.5

2.  透過 Command Line ，執行 coc-nvim 安裝指令：

```
:CocInstall coc-lua
```

3. 設定 Lua Language Server Path

```
:CocConfig
```

【註】：等同 `nvim ~/.config/nvim/coc-settings.json` 或
`vim ~/.vim/coc-settings.json` 。

coc-settings.json：

```
{
    ....
    "languageserver": {
        "bash": {
            ....
        },
        "lua": {
            "command": "~/.local/share/lua-language-server/bin/lua-language-server",
            "args": [
              "-E",
              "-e",
              "LANG=en",
              "~/.local/share/lua-language-server/main.lua"
            ],
            "filetypes": ["lua"],
            "trace.server": "verbose"
        }
    },
    ....
}
```

### 驗證設定正確完成

1. 啟動 Vim/Neovim 編輯器，編輯 Lua 原始碼。

```
cd ~/.vim/lua
vim testLua.lua
```

2. 編譯及執行 Lua 原始碼。

Presss key: [Space][a][t] to open a floating window for terminal.

Entering commad below:

```
lua testLua.lua
```

Entering `exit` command to close terminal window and return to vim editor.

```
exit
```

## 參考資料

### Install Lua locally

To install Lua locally after building it, do "make local". This will create
a directory install with subdirectories bin, include, lib, man, share, and
install Lua as listed below.

- bin:
  - lua
  - luac
- include:
  - lua.h
  - luaconf.h
  - lualib.h
  - lauxlib.h
  - lua.hpp
- lib:
  - liblua.a
- man/man1:
  - lua.1
  - luac.1

```
make linux-readline local
```

```
alanjui@VB01-Debian-10:~/build/lua-5.4.2$ make linux-readline local
make[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
make all SYSCFLAGS="-DLUA_USE_LINUX -DLUA_USE_READLINE" SYSLIBS="-Wl,-E -ldl -lreadline"
make[2]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
make[2]: Nothing to be done for 'all'.
make[2]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'
make[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'
make install INSTALL_TOP=../install
make[1]: Entering directory '/home/alanjui/build/lua-5.4.2'
cd src && mkdir -p ../install/bin ../install/include ../install/lib ../install/man/man1 ../install/share/lua/5.4 ../install/lib/lua/5.4
cd src && install -p -m 0755 lua luac ../install/bin
cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp ../install/include
cd src && install -p -m 0644 liblua.a ../install/lib
cd doc && install -p -m 0644 lua.1 luac.1 ../install/man/man1
make[1]: Leaving directory '/home/alanjui/build/lua-5.4.2'

alanjui@VB01-Debian-10:~/build/lua-5.4.2$ la
總計 28
drwxr-xr-x 5 alanjui alanjui 4096  2月 19 21:28 .
drwxr-xr-x 6 alanjui alanjui 4096  2月 18 19:40 ..
drwxr-xr-x 2 alanjui alanjui 4096 11月 13 23:35 doc
drwxr-xr-x 7 alanjui alanjui 4096  2月 19 21:28 install
-rw-r--r-- 1 alanjui alanjui 3146 11月 11 04:54 Makefile
-rw-r--r-- 1 alanjui alanjui  151 11月 13 23:42 README
drwxr-xr-x 2 alanjui alanjui 4096  2月 18 19:40 src

alanjui@VB01-Debian-10:~/build/lua-5.4.2$ la install
總計 28
drwxr-xr-x 7 alanjui alanjui 4096  2月 19 21:28 .
drwxr-xr-x 5 alanjui alanjui 4096  2月 19 21:28 ..
drwxr-xr-x 2 alanjui alanjui 4096  2月 19 21:28 bin
drwxr-xr-x 2 alanjui alanjui 4096  2月 19 21:28 include
drwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:28 lib
drwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:28 man
drwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:28 share

alanjui@VB01-Debian-10:~/build/lua-5.4.2$ tree install
install
├── bin
│   ├── lua
│   └── luac
├── include
│   ├── lauxlib.h
│   ├── luaconf.h
│   ├── lua.h
│   ├── lua.hpp
│   └── lualib.h
├── lib
│   ├── liblua.a
│   └── lua
│       └── 5.4
├── man
│   └── man1
│       ├── lua.1
│       └── luac.1
└── share
    └── lua
        └── 5.4

10 directories, 10 files
```

To install Lua locally, but in some other directory,
do "make install INSTALL_TOP=xxx", where xxx is your chosen directory.
The installation starts in the src and doc directories, so take care
if INSTALL_TOP is not an absolute path.

### Install Lua golbally

```
sudo make linux-readline install INSTALL_TOP=/usr
```

```
alanjui@VB01-Debian-10:~/build/lua-5.4.2$ sudo make linux-readline install INSTALL_TOP=/usr
make[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
make all SYSCFLAGS="-DLUA_USE_LINUX -DLUA_USE_READLINE" SYSLIBS="-Wl,-E -ldl -lreadline"
make[2]: Entering directory '/home/alanjui/build/lua-5.4.2/src'
make[2]: Nothing to be done for 'all'.
make[2]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'
make[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'
cd src && mkdir -p /usr/bin /usr/include /usr/lib /usr/man/man1 /usr/share/lua/5.4 /usr/lib/lua/5.4
cd src && install -p -m 0755 lua luac /usr/bin
cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/include
cd src && install -p -m 0644 liblua.a /usr/lib
cd doc && install -p -m 0644 lua.1 luac.1 /usr/man/man1
alanjui@VB01-Debian-10:~/build/lua-5.4.2$
```

These are the only directories you need for development. If you only want
to run Lua programs, you only need the files in bin and man. The files in
include and lib are needed for embedding Lua in C or C++ programs.

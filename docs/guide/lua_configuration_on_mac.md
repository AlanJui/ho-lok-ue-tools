# 在 macOS 建置 Lua 開發環境

## 安裝作業

```sh
bew install lua
```

[Log]

```sh
❯ brew install lua
==> Downloading https://formulae.brew.sh/api/formula.jws.json
#=O#- #
==> Downloading https://formulae.brew.sh/api/cask.jws.json
#=O#- #
==> Fetching lua
==> Downloading https://ghcr.io/v2/homebrew/core/lua/manifests/5.4.6
Already downloaded: /Users/alanjui/Library/Caches/Homebrew/downloads/e499b9e26150b05dcd37e7a4ee511c844e80b6770ac3d33d0af1b6bd370df1fb--lua-5.4.6.bottle_manifest.json
==> Downloading https://ghcr.io/v2/homebrew/core/lua/blobs/sha256:9b7170b3d84e70b9e89f356355744a277718ffcbee6a1b
Already downloaded: /Users/alanjui/Library/Caches/Homebrew/downloads/064eab4c251371f7b9136d5793023ee78299523237b0ed03ca4261360e52bd07--lua--5.4.6.ventura.bottle.tar.gz
==> Pouring lua--5.4.6.ventura.bottle.tar.gz
==> Caveats
You may also want luarocks:
  brew install luarocks
==> Summary
🍺  /usr/local/Cellar/lua/5.4.6: 29 files, 711.5KB
==> Running `brew cleanup lua`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
❯ brew install luarocks
==> Fetching luarocks
==> Downloading https://ghcr.io/v2/homebrew/core/luarocks/manifests/3.9.2-1
######################################################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/luarocks/blobs/sha256:86bc3a1641c84a2554d393406f56aa448a5478f9f
######################################################################################################### 100.0%
==> Pouring luarocks--3.9.2.all.bottle.1.tar.gz
==> Caveats
LuaRocks supports multiple versions of Lua. By default it is configured
to use Lua5.4, but you can require it to use another version at runtime
with the `--lua-dir` flag, like this:

  luarocks --lua-dir=/usr/local/opt/lua@5.3 install say
==> Summary
🍺  /usr/local/Cellar/luarocks/3.9.2: 103 files, 728.2KB
==> Running `brew cleanup luarocks`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
```

```sh
❯ la /usr/local/Cellar/lua/5.4.6
total 16
drwxr-xr-x  3 alanjui  admin    96B  5  3 04:12 .brew
-rw-r--r--  1 alanjui  admin   1.0K  6 27 10:38 INSTALL_RECEIPT.json
-rw-r--r--  1 alanjui  admin   151B  5  3 04:12 README
drwxr-xr-x  8 alanjui  admin   256B  5  3 04:12 bin
drwxr-xr-x  4 alanjui  admin   128B  5  3 04:12 include
drwxr-xr-x  8 alanjui  admin   256B  5  3 04:12 lib
drwxr-xr-x  3 alanjui  admin    96B  5  3 04:12 share
```

### 初始環境

透過 brew 安裝之 luarocks ，將安裝於如下路徑：

```sh
❯ la /usr/local/Cellar/luarocks/3.9.2/share/lua/5.4
total 0
drwxr-xr-x  39 alanjui  admin   1.2K  6 27 10:42 luarocks
```

luarocks 安裝過程中會建立一「等同」連結：
/usr/local/share/lua/

```sh
❯ la /usr/local/share/lua
lrwxr-xr-x  1 alanjui  admin    34B  6 27 10:01 /usr/local/share/lua -> ../Cellar/luarocks/3.9.2/share/lua
```

```sh
❯ la /usr/local/share/lua/5.4
total 0
drwxr-xr-x  39 alanjui  admin   1.2K  6 27 10:42 luarocks
```

```sh
❯ la /usr/local/opt/lua
lrwxr-xr-x  1 alanjui  admin    19B  6 27 10:38 /usr/local/opt/lua -> ../Cellar/lua/5.4.6
```

## 建置 Shell 環境

編輯 Shell 設定檔。

```sh
nvim ~/.profile
```

```sh
#--------------------------------------------------------------------
# OpenSSL 3
#--------------------------------------------------------------------
export OPENSSL_DIR=/usr/local/opt/openssl
export OPENSSL_LIBDIR=/usr/local/opt/openssl/lib
export OPENSSL_INCDIR=/usr/local/opt/openssl/include

export CRYPTO_DIR=/usr/local/opt/openssl
export CRYPTO_INCDIR=/usr/local/opt/openssl/include

# for VuePress to run Node.js
export NODE_OPTIONS="--openssl-legacy-provider"

#--------------------------------------------------------------------
# Lua Script
#--------------------------------------------------------------------
export LUA_PATH="/usr/local/share/lua/5.1/?.lua;?.lua"
export LUA_PATH="$HOME/.luarocks/share/lua/5.1/?.lua;$HOME/.luarocks/share/lua/5.1/?/init.lua"

export LUA_CPATH="/usr/local/lib/lua/5.1/?.so;?.lua"
export LUA_CPATH="$HOME/.luarocks/lib/lua/5.1/?.so;$LUA_CPATH"
```

重啟 Shell 環境；並查檢設定結果，驗證結果正確。

```sh
$ source ~/.zshrc

$ echo $LUA_PATH
/Users/alanjui/.luarocks/share/lua/5.1/?.lua;/Users/alanjui/.luarocks/share/lua/5.1/?/init.lua

$ echo $LUA_CPATH
/Users/alanjui/.luarocks/lib/lua/5.1/?.so;/usr/local/lib/lua/5.1/?.so;?.lua
```

### 驗證 Lua 直譯器已完成安裝

```sh
❯ lua
Lua 5.4.6  Copyright (C) 1994-2023 Lua.org, PUC-Rio
> print('Hello! My name is AlanJui.')
Hello! My name is AlanJui.
> ^D
```

## 解除作業

### 解除套件管理器

luarocks 可透過 brew 指令，直接解除安裝。但 luarocks 執行時
期使用到的目錄，得手動刪除。

```sh
❯ brew uninstall luarocks
Uninstalling /usr/local/Cellar/luarocks/3.9.2... (239 files, 1.7MB)
Error: Could not remove luarocks keg! Do so manually:
  sudo rm -rf /usr/local/Cellar/luarocks/3.9.2

❯ sudo rm -rf /usr/local/Cellar/luarocks/3.9.2
Password:
❯
```

```sh
❯ brew uninstall luarocks
Uninstalling /usr/local/Cellar/luarocks/3.9.2... (103 files, 728.2KB)

Warning: The following luarocks configuration files have not been removed!
If desired, remove them manually with `rm -rf`:
  /usr/local/etc/luarocks
  /usr/local/etc/luarocks/config-5.4.lua
```

### 解除 Lua 直譯器

因為 macOS 的套件 vim ，設定 lua 為其相依套件，故無法直接解
除安裝。另外，如同 luarocks 一般，執行時期會使用的目錄，得手
動刪除。

```sh
❯ brew uninstall lua
Error: Refusing to uninstall /usr/local/Cellar/lua/5.4.6
because it is required by vim, which is currently installed.
You can override this and force removal with:
  brew uninstall --ignore-dependencies lua

❯ brew uninstall --ignore-dependencies lua
Uninstalling /usr/local/Cellar/lua/5.4.6... (29 files, 711.5KB)

Warning: The following may be lua configuration files and have not been removed!
If desired, remove them manually with `rm -rf`:
  /usr/local/etc/luarocks

❯ rm -rf /usr/local/etc/luarocks
```

## 操作技巧

### 安裝非預設版本的模組套件

目前版本為：5.4 ，欲安裝 5.3 版的模組

```sh
luarocks --lua-dir=/usr/local/opt/lua@5.3 install say
```

```sh
luarocks --lua-version 5.1 install http
```

### 安裝在個人目錄

```sh
luarocks --local install http
```

```sh
❯ la ~/.luarocks/share/lua/5.1
total 96
-rw-r--r--   1 alanjui  staff   9.3K  6 27 15:33 basexx.lua
-rw-r--r--   1 alanjui  staff    12K  6 27 15:33 binaryheap.lua
drwxr-xr-x   4 alanjui  staff   128B  6 27 15:27 compat53
drwxr-xr-x  12 alanjui  staff   384B  6 27 15:33 cqueues
-rw-r--r--   1 alanjui  staff   4.2K  6 27 15:33 cqueues.lua
-rw-r--r--   1 alanjui  staff   2.0K  6 27 15:33 fifo.lua
drwxr-xr-x  26 alanjui  staff   832B  6 27 15:33 http
drwxr-xr-x  11 alanjui  staff   352B  6 27 15:33 lpeg_patterns
drwxr-xr-x  18 alanjui  staff   576B  6 27 15:33 openssl
-rw-r--r--   1 alanjui  staff    25B  6 27 15:33 openssl.lua
-rw-r--r--   1 alanjui  staff   6.3K  6 27 15:33 re.lua

❯ la ~/.luarocks/share/lua/5.1/http
total 696
-rw-r--r--  1 alanjui  staff   1.3K  6 27 15:33 bit.lua
-rw-r--r--  1 alanjui  staff   3.1K  6 27 15:33 client.lua
drwxr-xr-x  4 alanjui  staff   128B  6 27 15:33 compat
-rw-r--r--  1 alanjui  staff   2.1K  6 27 15:33 connection_common.lua
-rw-r--r--  1 alanjui  staff    25K  6 27 15:33 cookie.lua
-rw-r--r--  1 alanjui  staff    13K  6 27 15:33 h1_connection.lua
-rw-r--r--  1 alanjui  staff   2.1K  6 27 15:33 h1_reason_phrases.lua
-rw-r--r--  1 alanjui  staff    33K  6 27 15:33 h1_stream.lua
-rw-r--r--  1 alanjui  staff    18K  6 27 15:33 h2_connection.lua
-rw-r--r--  1 alanjui  staff   3.0K  6 27 15:33 h2_error.lua
-rw-r--r--  1 alanjui  staff    47K  6 27 15:33 h2_stream.lua
-rw-r--r--  1 alanjui  staff   4.9K  6 27 15:33 headers.lua
-rw-r--r--  1 alanjui  staff    26K  6 27 15:33 hpack.lua
-rw-r--r--  1 alanjui  staff   3.0K  6 27 15:33 hsts.lua
-rw-r--r--  1 alanjui  staff   2.0K  6 27 15:33 proxies.lua
-rw-r--r--  1 alanjui  staff    19K  6 27 15:33 request.lua
-rw-r--r--  1 alanjui  staff    14K  6 27 15:33 server.lua
-rw-r--r--  1 alanjui  staff    11K  6 27 15:33 socks.lua
-rw-r--r--  1 alanjui  staff   4.4K  6 27 15:33 stream_common.lua
-rw-r--r--  1 alanjui  staff    32K  6 27 15:33 tls.lua
-rw-r--r--  1 alanjui  staff   7.4K  6 27 15:33 util.lua
-rw-r--r--  1 alanjui  staff   151B  6 27 15:33 version.lua
-rw-r--r--  1 alanjui  staff    25K  6 27 15:33 websocket.lua
-rw-r--r--  1 alanjui  staff   1.8K  6 27 15:33 zlib.lua
```

```sh
❯ la ~/.luarocks/lib/lua/5.1
total 1528
-rwxr-xr-x  1 alanjui  staff   380K  6 27 15:33 _cqueues.so
-rwxr-xr-x  1 alanjui  staff   242K  6 27 15:33 _openssl.so
-rwxr-xr-x  1 alanjui  staff    49K  6 27 15:27 bit32.so
drwxr-xr-x  5 alanjui  staff   160B  6 27 15:27 compat53
-rwxr-xr-x  1 alanjui  staff    88K  6 27 15:33 lpeg.so
```

確認 http 套件真的沒完成安裝。

```sh
❯ luarocks --local remove http
Checking stability of dependencies in the absence of
http 0.4-0...

Removing http 0.4-0...

Error: rock_manifest file not found for http 0.4-0 - removed entry from the manifest
```

改用 Lua 5.1 安裝。

```sh
❯ luarocks --local --lua-version 5.1 install http
Installing https://luarocks.org/http-0.4-0.all.rock
Missing dependencies for http 0.4-0:
   compat53 >= 0.3 (not installed)
   bit32 (not installed)
   cqueues >= 20161214 (not installed)
   luaossl >= 20161208 (not installed)
   basexx >= 0.2.0 (not installed)
   lpeg (not installed)
   lpeg_patterns >= 0.5 (not installed)
   binaryheap >= 0.3 (not installed)
   fifo (not installed)

http 0.4-0 depends on lua >= 5.1 (5.1-1 provided by VM)
http 0.4-0 depends on compat53 >= 0.3 (not installed)
Installing https://luarocks.org/compat53-0.8-1.src.rock

compat53 0.8-1 depends on lua >= 5.1, < 5.5 (5.1-1 provided by VM)
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/Users/alanjui/.local/bin/include/luajit-2.0 -c ltablib.c -o ltablib.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/openssl@1.1/lib -bundle -undefined dynamic_lookup -all_load -o compat53/table.so ltablib.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/Users/alanjui/.local/bin/include/luajit-2.0 -c lutf8lib.c -o lutf8lib.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/openssl@1.1/lib -bundle -undefined dynamic_lookup -all_load -o compat53/utf8.so lutf8lib.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/Users/alanjui/.local/bin/include/luajit-2.0 -c lstrlib.c -o lstrlib.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/openssl@1.1/lib -bundle -undefined dynamic_lookup -all_load -o compat53/string.so lstrlib.o
No existing manifest. Attempting to rebuild...
compat53 0.8-1 is now installed in /Users/alanjui/.luarocks (license: MIT)

Missing dependencies for http 0.4-0:
   bit32 (not installed)
   cqueues >= 20161214 (not installed)
   luaossl >= 20161208 (not installed)
   basexx >= 0.2.0 (not installed)
   lpeg (not installed)
   lpeg_patterns >= 0.5 (not installed)
   binaryheap >= 0.3 (not installed)
   fifo (not installed)
http 0.4-0 depends on bit32 (not installed)
Installing https://luarocks.org/bit32-5.3.5.1-1.src.rock

bit32 5.3.5.1-1 depends on lua >= 5.1, < 5.5 (5.1-1 provided by VM)
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/Users/alanjui/.local/bin/include/luajit-2.0 -c lbitlib.c -o lbitlib.o -DLUA_COMPAT_BITLIB -Ic-api
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/openssl@1.1/lib -bundle -undefined dynamic_lookup -all_load -o bit32.so lbitlib.o
bit32 5.3.5.1-1 is now installed in /Users/alanjui/.luarocks (license: MIT)

Missing dependencies for http 0.4-0:
   cqueues >= 20161214 (not installed)
   luaossl >= 20161208 (not installed)
   basexx >= 0.2.0 (not installed)
   lpeg (not installed)
   lpeg_patterns >= 0.5 (not installed)
   binaryheap >= 0.3 (not installed)
   fifo (not installed)
http 0.4-0 depends on cqueues >= 20161214 (not installed)
Installing https://luarocks.org/cqueues-20200726.51-0.src.rock

Error: Failed installing dependency: https://luarocks.org/cqueues-20200726.51-0.src.rock - Could not find header file for CRYPTO
  No file openssl/crypto.h in /usr/include
  No file openssl/crypto.h in /include
  No file openssl/crypto.h in /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/usr/include
  No file openssl/crypto.h in /usr/local/opt/include
You may have to install CRYPTO in your system and/or pass CRYPTO_DIR or CRYPTO_INCDIR to the luarocks command.
Example: luarocks install cqueues CRYPTO_DIR=/usr/local
```

```sh
luarocks --lua-version 5.1 path

```

```sh
luarocks --local --lua-version 5.1 install http \
OPENSSL_DIR=/usr/local/opt/openssl@1.1 \
OPENSSL_LIBDIR=/usr/local/opt/openssl@1.1/lib \
OPENSSL_INCDIR=/usr/local/opt/openssl@1.1/include \
CRYPTO_DIR=/usr/local/opt/openssl@1.1
```

```sh
luarocks --local --lua-version 5.1 install http \
OPENSSL_DIR=/usr/local/opt/openssl \
OPENSSL_LIBDIR=/usr/local/opt/openssl/lib \
OPENSSL_INCDIR=/usr/local/opt/openssl/include \
CRYPTO_DIR=/usr/local/opt/openssl


Missing dependencies for http 0.4-0:
   lpeg (not installed)
   lpeg_patterns >= 0.5 (not installed)
   binaryheap >= 0.3 (not installed)
   fifo (not installed)
http 0.4-0 depends on lpeg (not installed)
Installing https://luarocks.org/lpeg-1.0.2-1.src.rock

lpeg 1.0.2-1 depends on lua >= 5.1 (5.1-1 provided by VM)
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/Users/alanjui/.local/bin/include/luajit-2.0 -c lpcap.c -o lpcap.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/Users/alanjui/.local/bin/include/luajit-2.0 -c lpcode.c -o lpcode.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/Users/alanjui/.local/bin/include/luajit-2.0 -c lpprint.c -o lpprint.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/Users/alanjui/.local/bin/include/luajit-2.0 -c lptree.c -o lptree.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/Users/alanjui/.local/bin/include/luajit-2.0 -c lpvm.c -o lpvm.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/openssl@1.1/lib -bundle -undefined dynamic_lookup -all_load -o lpeg.so lpcap.o lpcode.o lpprint.o lptree.o lpvm.o
lpeg 1.0.2-1 is now installed in /Users/alanjui/.luarocks (license: MIT/X11)

Missing dependencies for http 0.4-0:
   lpeg_patterns >= 0.5 (not installed)
   binaryheap >= 0.3 (not installed)
   fifo (not installed)
http 0.4-0 depends on lpeg_patterns >= 0.5 (not installed)
Installing https://luarocks.org/lpeg_patterns-0.5-0.src.rock

lpeg_patterns 0.5-0 depends on lua (5.1-1 provided by VM)
lpeg_patterns 0.5-0 depends on lpeg (1.0.2-1 installed)
lpeg_patterns 0.5-0 is now installed in /Users/alanjui/.luarocks (license: MIT)

Missing dependencies for http 0.4-0:
   binaryheap >= 0.3 (not installed)
   fifo (not installed)
http 0.4-0 depends on binaryheap >= 0.3 (not installed)
Installing https://luarocks.org/binaryheap-0.4-1.src.rock

binaryheap 0.4-1 depends on lua >= 5.1 (5.1-1 provided by VM)
binaryheap 0.4-1 is now installed in /Users/alanjui/.luarocks (license: MIT/X11)

Missing dependencies for http 0.4-0:
   fifo (not installed)
http 0.4-0 depends on fifo (not installed)
Installing https://luarocks.org/fifo-0.2-0.all.rock

fifo 0.2-0 depends on lua (5.1-1 provided by VM)
fifo 0.2-0 is now installed in /Users/alanjui/.luarocks (license: MIT/X11)

http 0.4-0 is now installed in /Users/alanjui/.luarocks (license: MIT)


❯ la ~/.luarocks/share/lua/5.1
total 96
-rw-r--r--   1 alanjui  staff   9.3K  6 27 13:03 basexx.lua
-rw-r--r--   1 alanjui  staff    12K  6 27 13:03 binaryheap.lua
drwxr-xr-x   4 alanjui  staff   128B  6 27 12:13 compat53
drwxr-xr-x  12 alanjui  staff   384B  6 27 13:03 cqueues
-rw-r--r--   1 alanjui  staff   4.2K  6 27 13:03 cqueues.lua
-rw-r--r--   1 alanjui  staff   2.0K  6 27 13:03 fifo.lua
drwxr-xr-x  26 alanjui  staff   832B  6 27 13:03 http
drwxr-xr-x  11 alanjui  staff   352B  6 27 13:03 lpeg_patterns
drwxr-xr-x  18 alanjui  staff   576B  6 27 13:03 openssl
-rw-r--r--   1 alanjui  staff    25B  6 27 13:03 openssl.lua
-rw-r--r--   1 alanjui  staff   6.3K  6 27 13:03 re.lua
```

```sh
package.path = "/path/to/your/luarocks/share/lua/5.1/?.lua;" .. package.path
package.cpath = "/path/to/your/luarocks/lib/lua/5.1/?.so;" .. package.cpath
```

```sh
❯ luarocks --local --lua-version 5.3 install lua-json
Installing https://luarocks.org/lua-json-1.0.0-1.src.rock

lua-json 1.0.0-1 depends on lua >= 5.1 (5.3-1 provided by VM)
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/usr/local/opt/lua@5.3/include/lua5.3 -c src/json.c -o src/json.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/usr/local/opt/lua@5.3/include/lua5.3 -c src/json-encode.c -o src/json-encode.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/usr/local/opt/lua@5.3/include/lua5.3 -c src/json-decode.c -o src/json-decode.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/lua@5.3/lib -bundle -undefined dynamic_lookup -all_load -o json.so src/json.o src/json-encode.o src/json-decode.o
lua-json 1.0.0-1 is now installed in /Users/alanjui/.luarocks (license: MIT)
```

## 異常：無法安裝

未搭配正確的 OpenSSL 選項設定。

```sh
❯ luarocks --local install http
Installing https://luarocks.org/http-0.4-0.all.rock
Missing dependencies for http 0.4-0:
   compat53 >= 0.3 (not installed)
   bit32 (not installed)
   cqueues >= 20161214 (not installed)
   luaossl >= 20161208 (not installed)
   basexx >= 0.2.0 (not installed)
   lpeg (not installed)
   lpeg_patterns >= 0.5 (not installed)
   binaryheap >= 0.3 (not installed)
   fifo (not installed)

http 0.4-0 depends on lua >= 5.1 (5.4-1 provided by VM)
http 0.4-0 depends on compat53 >= 0.3 (not installed)
Installing https://luarocks.org/compat53-0.8-1.src.rock

compat53 0.8-1 depends on lua >= 5.1, < 5.5 (5.4-1 provided by VM)
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/usr/local/opt/lua/include/lua5.4 -c lstrlib.c -o lstrlib.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/openssl@1.1/lib -bundle -undefined dynamic_lookup -all_load -o compat53/string.so lstrlib.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/usr/local/opt/lua/include/lua5.4 -c lutf8lib.c -o lutf8lib.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/openssl@1.1/lib -bundle -undefined dynamic_lookup -all_load -o compat53/utf8.so lutf8lib.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/usr/local/opt/lua/include/lua5.4 -c ltablib.c -o ltablib.o
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/openssl@1.1/lib -bundle -undefined dynamic_lookup -all_load -o compat53/table.so ltablib.o
No existing manifest. Attempting to rebuild...
compat53 0.8-1 is now installed in /Users/alanjui/.luarocks (license: MIT)

Missing dependencies for http 0.4-0:
   bit32 (not installed)
   cqueues >= 20161214 (not installed)
   luaossl >= 20161208 (not installed)
   basexx >= 0.2.0 (not installed)
   lpeg (not installed)
   lpeg_patterns >= 0.5 (not installed)
   binaryheap >= 0.3 (not installed)
   fifo (not installed)
http 0.4-0 depends on bit32 (not installed)
Installing https://luarocks.org/bit32-5.3.5.1-1.src.rock

bit32 5.3.5.1-1 depends on lua >= 5.1, < 5.5 (5.4-1 provided by VM)
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/usr/local/opt/lua/include/lua5.4 -c lbitlib.c -o lbitlib.o -DLUA_COMPAT_BITLIB -Ic-api
env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/openssl@1.1/lib -bundle -undefined dynamic_lookup -all_load -o bit32.so lbitlib.o
bit32 5.3.5.1-1 is now installed in /Users/alanjui/.luarocks (license: MIT)

Missing dependencies for http 0.4-0:
   cqueues >= 20161214 (not installed)
   luaossl >= 20161208 (not installed)
   basexx >= 0.2.0 (not installed)
   lpeg (not installed)
   lpeg_patterns >= 0.5 (not installed)
   binaryheap >= 0.3 (not installed)
   fifo (not installed)
http 0.4-0 depends on cqueues >= 20161214 (not installed)
Installing https://luarocks.org/cqueues-20200726.54-0.src.rock

Error: Failed installing dependency: https://luarocks.org/cqueues-20200726.54-0.src.rock - Could not find header file for CRYPTO
  No file openssl/crypto.h in /usr/include
  No file openssl/crypto.h in /include
  No file openssl/crypto.h in /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/usr/include
  No file openssl/crypto.h in /usr/local/opt/include
You may have to install CRYPTO in your system and/or pass CRYPTO_DIR or CRYPTO_INCDIR to the luarocks command.
Example: luarocks install cqueues CRYPTO_DIR=/usr/local
```

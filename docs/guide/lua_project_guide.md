# Lua Project Guide

## Init project

```sh
❯ luarocks --local init

Initializing project 'my_lua01' for Lua 5.4 ...
-----------------------------------------------

Checking your Lua installation ...
Warning: Please specify supported Lua versions with --lua-versions=<ver>. See '/usr/local/bin/luarocks help write_rockspec'.

Wrote template at /Users/alanjui/workspace/lua/my_lua01/my_lua01-dev-1.rockspec -- you should now edit and finish it.

Adding entries to .gitignore ...
Preparing ./.luarocks/ ...
Wrote .luarocks/config-5.4.lua
Preparing ./lua_modules/ ...
Preparing ./luarocks ...
Preparing ./lua for version 5.4...
```

目錄結構：

```sh
❯ la
total 40
-rw-r--r--  1 alanjui  staff    39B  6 28 22:27 .gitignore
drwxr-xr-x  4 alanjui  staff   128B  6 28 22:27 .luarocks
-rwxr-xr-x  1 alanjui  staff   421B  6 28 22:27 lua
drwxr-xr-x  3 alanjui  staff    96B  6 28 22:27 lua_modules
-rwxr-xr-x  1 alanjui  staff   517B  6 28 22:27 luarocks
-rw-r--r--  1 alanjui  staff   345B  6 28 22:27 my_lua01-dev-1.rockspec
-rw-r--r--  1 alanjui  staff   1.6K  6 28 22:26 test_api_get.lua
```

Lua Project 的預設：

```sh
❯ la .luarocks
total 16
-rw-r--r--  1 alanjui  staff   172B  6 28 22:27 config-5.4.lua
-rw-r--r--  1 alanjui  staff    13B  6 28 22:27 default-lua-version.lua
```

./.luarocks/config-5.4.lua

```sh
lua_interpreter = "lua5.4"
variables = {
   LUA_BINDIR = "/usr/local/opt/lua/bin",
   LUA_DIR = "/usr/local/opt/lua",
   LUA_INCDIR = "/usr/local/opt/lua/include/lua5.4"
}
```

./.luarocks/default-lua-version.lua

```sh
return "5.4"
```

## 安裝套件

```sh
luarocks install http
luarocks install luasocket
```

確認套件已安裝。

```sh
❯ la lua_modules/share/lua/5.4
total 96
-rw-r--r--   1 alanjui  staff   9.3K  6 28 22:33 basexx.lua
-rw-r--r--   1 alanjui  staff    12K  6 28 22:33 binaryheap.lua
drwxr-xr-x   4 alanjui  staff   128B  6 28 22:33 compat53
drwxr-xr-x  12 alanjui  staff   384B  6 28 22:33 cqueues
-rw-r--r--   1 alanjui  staff   4.2K  6 28 22:33 cqueues.lua
-rw-r--r--   1 alanjui  staff   2.0K  6 28 22:33 fifo.lua
drwxr-xr-x  26 alanjui  staff   832B  6 28 22:33 http
drwxr-xr-x  11 alanjui  staff   352B  6 28 22:33 lpeg_patterns
drwxr-xr-x  18 alanjui  staff   576B  6 28 22:33 openssl
-rw-r--r--   1 alanjui  staff    25B  6 28 22:33 openssl.lua
-rw-r--r--   1 alanjui  staff   6.3K  6 28 22:33 re.lua
```

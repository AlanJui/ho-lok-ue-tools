---
sidebar: auto
---

# Lua 開發環境作業指引

macOS

## Install module with specific version

    luarocks install --lua-version=5.3 <module-name>

For example, to install the `**lua-http**` module for Lua
5.3, you can run:

     luarocks install --lua-version=5.3 lua-http

## install requirement for shell environment

**1.**

    brew install openssl

**2.**

    #--------------------------------------------------------------------
    # OpenSSL 3
    #--------------------------------------------------------------------
    export OPENSSL_DIR=/usr/local/opt/openssl
    export CRYPTO_DIR=/usr/local/opt/openssl

**3.**

    exec $SHELL

## Install lua-http

    luarocks install http CRYPTO_DIR=/usr/local/opt/openssl@3 CRYPTO_INCDIR=/usr/local/opt/openssl@3/include OPENSSL_DIR=/usr/local/opt/openssl@3/ OPENSSL_INCDIR=/usr/local/opt/openssl@3/include

To install the `**lua-http**` module with Lua 5.1
interpreter used by Neovim, you can use the following
command:

    $ luarocks install --tree ~/.config/nvim/lua/rocks http CRYPTO_DIR=/usr/local/opt/openssl OPENSSL_DIR=/usr/local/opt/openssl

    Installing https://luarocks.org/http-0.4-0.all.rock

    http 0.4-0 depends on lua >= 5.1 (5.4-1 provided by VM)
    http 0.4-0 depends on compat53 >= 0.3 (0.8-1 installed)
    http 0.4-0 depends on bit32 (5.3.5.1-1 installed)
    http 0.4-0 depends on cqueues >= 20161214 (20200726.54-0 installed)
    http 0.4-0 depends on luaossl >= 20161208 (20220711-0 installed)
    http 0.4-0 depends on basexx >= 0.2.0 (0.4.1-1 installed)
    http 0.4-0 depends on lpeg (1.0.2-1 installed)
    http 0.4-0 depends on lpeg_patterns >= 0.5 (0.5-0 installed)
    http 0.4-0 depends on binaryheap >= 0.3 (0.4-1 installed)
    http 0.4-0 depends on fifo (0.2-0 installed)
    http 0.4-0 is now installed in /Users/alanjui/.config/nvim/lua/rocks (license: MIT)

This will install the `**http**` module in a local
`**rocks**` directory under `**~/.config/nvim/lua/**`. The
`**--tree**` option specifies the directory where the module
will be installed.

---

Note that you will need to add the local installation
directory to the `**package.path**` and `**package.cpath**`
variables in your Neovim Lua scripts to use the locally
installed modules:

    -- Add local LuaRocks installation directory to package path
    package.path = package.path .. ";~/.config/nvim/lua/?.lua"
    package.cpath = package.cpath .. ";~/.config/nvim/lua/rocks/?.so"


    /usr/local/share/lua/5.4/?.lua;?.lua;/Users/alanjui/.cache/nvim/packer_hererocks/2.1.0-beta3/share/lua/5.1/?.lua
    ;/Users/alanjui/.cache/nvim/packer_hererocks/2.1.0-beta3/share/lua/5.1/?/init.lua;/Users/alanjui/.cache/nvim/pac
    ker_hererocks/2.1.0-beta3/lib/luarocks/rocks-5.1/?.lua;/Users/alanjui/.cache/nvim/packer_hererocks/2.1.0-beta3/l
    ib/luarocks/rocks-5.1/?/init.lua

## Install lua-cjson

    ❯ luarocks install lua-cjson
    Installing https://luarocks.org/lua-cjson-2.1.0.10-1.src.rock

    lua-cjson 2.1.0.10-1 depends on lua >= 5.1 (5.4-1 provided by VM)
    env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/usr/local/opt/lua/include/lua5.4 -c lua_cjson.c -o lua_cjson.o
    env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/usr/local/opt/lua/include/lua5.4 -c strbuf.c -o strbuf.o
    env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -O2 -fPIC -I/usr/local/opt/lua/include/lua5.4 -c fpconv.c -o fpconv.o
    env MACOSX_DEPLOYMENT_TARGET=11.0 gcc -L/usr/local/opt/openssl@1.1/lib -bundle -undefined dynamic_lookup -all_load -o cjson.so lua_cjson.o strbuf.o fpconv.o
    lua-cjson 2.1.0.10-1 is now installed in /usr/local (license: MIT)

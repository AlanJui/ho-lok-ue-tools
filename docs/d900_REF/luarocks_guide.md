## API 操作指引

在 Neovim 執行環境中，我們亦可使用 HTTP Request ，透過 Web
API 自 REST 伺服器取得資料。

### 安裝 Lua 套件

安裝 Lua Module：

- http
- json-lua

1. 執行前置準備所需安裝指令：

```sh
luarocks --lua-version 5.1 install luasec \
OPENSSL_DIR=/usr/local/opt/openssl \
OPENSSL_LIBDIR=/usr/local/opt/openssl/lib \
OPENSSL_INCDIR=/usr/local/opt/openssl/include \
CRYPTO_DIR=/usr/local/opt/openssl
CRYPTO_INCDIR=/usr/local/opt/openssl/include
```

2. 執行 http 安裝指令：

```sh
❯ luarocks --lua-version 5.1 install http \
OPENSSL_DIR=/usr/local/opt/openssl@1.1 \
OPENSSL_LIBDIR=/usr/local/opt/openssl@1.1/lib \
OPENSSL_INCDIR=/usr/local/opt/openssl@1.1/include \
CRYPTO_DIR=/usr/local/opt/openssl@1.1
CRYPTO_INCDIR=/usr/local/opt/openssl@1.1/include

Warning: falling back to wget - install luasec to get native HTTPS support
Installing https://luarocks.org/http-0.4-0.all.rock

http 0.4-0 depends on lua >= 5.1 (5.1-1 provided by VM)
http 0.4-0 depends on compat53 >= 0.3 (0.8-1 installed)
http 0.4-0 depends on bit32 (5.3.5.1-1 installed)
http 0.4-0 depends on cqueues >= 20161214 (20200726.51-0 installed)
http 0.4-0 depends on luaossl >= 20161208 (20220711-0 installed)
http 0.4-0 depends on basexx >= 0.2.0 (0.4.1-1 installed)
http 0.4-0 depends on lpeg (1.0.2-1 installed)
http 0.4-0 depends on lpeg_patterns >= 0.5 (0.5-0 installed)
http 0.4-0 depends on binaryheap >= 0.3 (0.4-1 installed)
http 0.4-0 depends on fifo (0.2-0 installed)
http 0.4-0 is now installed in /Users/alanjui/.luarocks (license: MIT)
```

3. 執行 json-lua 安裝指令：

```sh
❯ luarocks --lua-version 5.1 install json-lua

Warning: falling back to wget - install luasec to get native HTTPS support
Installing https://luarocks.org/json-lua-0.1-4.rockspec
Cloning into 'json-lua'...
remote: Enumerating objects: 50, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 50 (delta 0), reused 2 (delta 0), pack-reused 47
Receiving objects: 100% (50/50), 26.55 KiB | 590.00 KiB/s, done.
Resolving deltas: 100% (20/20), done.

json-lua 0.1-4 depends on lua >= 5.1 (5.1-1 provided by VM)
json-lua 0.1-4 is now installed in /Users/alanjui/.luarocks (license: CC)
```

4. 驗證 Module 已完成安裝及確認其安裝路徑：

```sh
❯ la ~/.luarocks/share/lua/5.1
total 208
-rw-r--r--   1 alanjui  staff    54K Jun 22 19:45 JSON.lua
-rw-r--r--   1 alanjui  staff   9.3K Jun 22 16:56 basexx.lua
-rw-r--r--   1 alanjui  staff    12K Jun 22 19:38 binaryheap.lua
drwxr-xr-x   4 alanjui  staff   128B Jun 22 16:14 compat53
drwxr-xr-x  12 alanjui  staff   384B Jun 22 19:41 cqueues
-rw-r--r--   1 alanjui  staff   4.2K Jun 22 19:41 cqueues.lua
-rw-r--r--   1 alanjui  staff   2.0K Jun 22 19:38 fifo.lua
drwxr-xr-x  26 alanjui  staff   832B Jun 22 20:27 http
drwxr-xr-x  11 alanjui  staff   352B Jun 22 19:37 lpeg_patterns
drwxr-xr-x  18 alanjui  staff   576B Jun 22 19:25 openssl
-rw-r--r--   1 alanjui  staff    25B Jun 22 19:25 openssl.lua
-rw-r--r--   1 alanjui  staff   6.3K Jun 22 19:36 re.lua
```

## 撰寫程式碼

1. 指明 Module 的搜尋路徑

使用以下方法，在 Lua Script 原始碼檔案，加入之下兩行設定，令
Lua Script 知曉，遇有 require 欲取用 Module 時，應至那些目錄
進行搜尋：

```sh
package.path = "/path/to/your/luarocks/share/lua/5.1/?.lua;" .. package.path
package.cpath = "/path/to/your/luarocks/lib/lua/5.1/?.so;" .. package.cpath
```

2. 查詢 Module 安裝的路徑位置

若不清楚 Lua Libs 的安裝路徑，可使用以下指令，要求 luarocks
回報：

```sh
❯ luarocks --lua-version 5.1 path
export LUA_PATH='/usr/local/Cellar/luarocks/3.9.2/share/lua/5.1/?.lua;;/usr/local/share/lua/5.1/?.lua;?.lua;/Users/alanjui/.luarocks/share/lua/5.1/?.lua;/Users/alanjui/.luarocks/share/lua/5.1/?/init.lua;/usr/local/share/lua/5.1/?/init.lua'
export LUA_CPATH=';/usr/local/lib/lua/5.1/?.so;?.lua;/Users/alanjui/.luarocks/lib/lua/5.1/?.so'
export PATH='/Users/alanjui/.luarocks/bin:/usr/local/opt/m4/bin:/Library/TeX/texbin:/Users/alanjui/.poetry/bin:/Users/alanjui/.pyenv/plugins/pyenv-virtualenv/shims:/Users/alanjui/.pyenv/shims:/Users/alanjui/.pyenv/bin:/usr/local/opt/sqlite/bin:/Users/alanjui/.yarn/bin:/Users/alanjui/.config/yarn/global/node_modules/.bin:/Users/alanjui/n/bin:/Users/alanjui/.cargo/bin:/Users/alanjui/.gem/bin:/usr/local/opt/libtool/libexec/gnubin:/usr/local/opt/libiconv/bin:/usr/local/opt/openssl@1.1/bin:/usr/local/opt/ruby/bin:/Users/alanjui/bin:/Users/alanjui/.local/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:/Applications/Visual Studio Code.app/Contents/Resources/app/bin:/usr/local/share/dotnet:/Applications/Postgres.app/Contents/Versions/latest/bin:/Users/alanjui/go/bin:/usr/local/opt/go/libexec/bin:/usr/local/opt/fzf/bin'
```

3. 實例參考

譬如：想用 http.request ，透過 REST API 獲取資料時，需在原始
碼的檔案，進行如下宣告：

```sh
package.path = "/usr/local/Cellar/luarocks/3.9.2/share/lua/5.1/?.lua;/usr/local/share/lua/5.1/?.lua;?.lua;/Users/alanjui/.luarocks/share/lua/5.1/?.lua;/Users/alanjui/.luarocks/share/lua/5.1/?/init.lua;/usr/local/share/lua/5.1/?/init.lua"
package.cpath = "/usr/local/lib/lua/5.1/?.so;?.lua;/Users/alanjui/.luarocks/lib/lua/5.1/?.so"
```

完整程式碼展示：

```sh
package.path =
  "/usr/local/Cellar/luarocks/3.9.2/share/lua/5.1/?.lua;;/usr/local/share/lua/5.1/?.lua;?.lua;/Users/alanjui/.luarocks/share/lua/5.1/?.lua;/Users/alanjui/.luarocks/share/lua/5.1/?/init.lua;/usr/local/share/lua/5.1/?/init.lua"
package.cpath = ";/usr/local/lib/lua/5.1/?.so;?.lua;/Users/alanjui/.luarocks/lib/lua/5.1/?.so"

local http_request = require "http.request"
local json = require "json"

local function get_message()
  local req = http_request.new_from_uri "http://localhost:8000/api/huan_tshiat_huat/"
  local headers, stream = req:go()
  local body = stream:get_body_as_string()
  local data = json:decode(body)
  return data.message
end

vim.api.nvim_buf_set_lines(0, 0, -1, false, { get_message() })
```

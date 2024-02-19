# NPM安裝疑難雜症


# 安裝NPM模組時，出現錯誤訊息。
    (node:34053) fs: re-evaluating native module sources is not supported. If you are using the graceful-fs module, please update it to a more recent version.


    AlanJui at MacBook-Pro.local in [~/workspace/nodeJS/WebServer]
    20:05:27 $ npm install mime --save
    (node:34053) fs: re-evaluating native module sources is not supported. If you are using the graceful-fs module, please update it to a more recent version.
    webserver@0.0.1 /Users/AlanJui/workspace/nodeJS/WebServer
    └── mime@1.2.11
    
    npm WARN webserver@0.0.1 No repository field.

執行指令：

    npm install --save graceful-fs@latest


    AlanJui at MacBook-Pro.local in [~/workspace/nodeJS/WebServer]
    20:23:57 $ npm install --save graceful-fs@latest
    (node:35413) fs: re-evaluating native module sources is not supported. If you are using the graceful-fs module, please update it to a more recent version.
    webserver@0.0.1 /Users/AlanJui/workspace/nodeJS/WebServer
    └── graceful-fs@4.1.9
    
    npm WARN webserver@0.0.1 No repository field.



# 查詢NPM模組的最新版本。


    $ npm view graceful-fs version

view: 可用 info 或 show 代替。


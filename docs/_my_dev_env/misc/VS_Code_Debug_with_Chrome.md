# VS Code Debug with Chrome

1. 啟動 VS Code App，設定 Debug 環境。

透過編輯「設定檔」（檔案路徑:  /.vscode/launch.json），完成如下內容之設定:


    {
      // 使用 Chrome Extension to Debug 之前，務必先將所有的 Chrome App 通通結束
      "version": "0.2.0",
      "configurations": [
        {
          "name": "Launch Chrome against localhost, with sourcemaps",
          "type": "chrome",
          "runtimeExecutable": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          "request": "launch",
          "url": "http://localhost:3000",
          "port": 9222,
          "sourceMaps": true,
          "webRoot": "${workspaceRoot}",
          "userDataDir": "${workspaceRoot}/.vscode/chrome",
          "diagnosticLogging": false
        },
        {
          "name": "Launch URL with sourcemaps",
          "type": "chrome",
          "request": "launch",
          "url": "http://127.0.0.1:3000/index.html",
          "webRoot": "${workspaceRoot}",
          "port": 9222,
          "sourceMaps": true
        },
        {
          // 從未試成功
          "name": "Attach to Chrome, with sourcemaps",
          "type": "chrome",
          "request": "attach",
          "url": "http://127.0.0.1:3000/index.html",
          "webRoot": "${workspaceRoot}",
          "port": 9222,
          "sourceMaps": true
        }
      ]
    }


2. 執行 http-server (NPM 模組)


    AlanJui at MacBook-Pro.local in [~/workspace/TypeScripts/ts-10]
    14:06:27 $ http-server
    Starting up http-server, serving ./
    Available on:
      http://127.0.0.1:8080
      http://192.168.66.110:8080
      http://192.168.66.72:8080
    Hit CTRL-C to stop the server
    


3. 回到「VS Code App」。找到欲偵錯的原始檔案 ${workspaceRoot}/src/${toDebugFile}.ts  ，設定「偵錯岔斷點（Break Point）」。
    
4. 進入「偵錯」檢視，挑選設定選項:「Launch Chrome against localhost, with sourcemaps」，按下「偵錯」鈕以啟動偵錯功能。


    【註】: 若是「設定選項」挑:「Launch URL with sourcemaps」，則務必先將所有已啟用的「Google Chrome 瀏覽器」通通結束。
    
5. Google Chrome 瀏覽器自動開啟，欲偵錯的網頁顯現。（「偵錯岔斷點（Break Point）」此時無作用）


6. 在「Google Chrome 瀏覽器」，按下「重新載入此頁」，此時的「偵錯岔斷點（Break Point）」，開始能正常運作。



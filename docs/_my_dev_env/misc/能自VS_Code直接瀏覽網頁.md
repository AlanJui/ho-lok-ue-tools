# 能自VS Code直接瀏覽網頁
執行 Command －－ Tasks： Configure Task Runner

 1.  <Command> + <Shift> + <P>
 2. Tasks： Configure Task Runner


## 設定 tasks.json 檔案


    {
      // See https://go.microsoft.com/fwlink/?LinkId=733558
      // for the documentation about the tasks.json format
      "version": "0.1.0",
      "command": "Chrome",
      "osx": {
        "command": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      },
      "args": [
        "--incognito",
        "${file}"
      ]
    }


## 執行 Tasks: Run Build Task

按鍵 <Command> + <Shift> + <B>


(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{457:function(e,s,r){"use strict";r.r(s);var o=r(10),n=Object(o.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ms-sql-server-2017-for-linux-on-mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ms-sql-server-2017-for-linux-on-mac"}},[e._v("#")]),e._v(" MS SQL Server 2017 for Linux on Mac")]),e._v(" "),s("p",[e._v("學習目標：")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-develop-use-vscode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use Visual Studio Code to create and run Transact-SQL scripts for SQL Server"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.microsoft.com/en-us/sql-server/developer-get-started/node/mac/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create Node.js apps using SQL Server on macOS"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/tutorial-writing-transact-sql-statements",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tutorial: Writing Transact-SQL Statements"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://docs.sequelizejs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sequelize"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://angular-fullstack.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Angular Full-Stack Generator"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/DavideViolante/Angular-Full-Stack",target:"_blank",rel:"noopener noreferrer"}},[e._v("DavideViolante/Angular-Full-Stack"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/codeschool/WatchUsBuild-MovieListingsAppWithSQL",target:"_blank",rel:"noopener noreferrer"}},[e._v("codeschool/WatchUsBuild-MovieListingsAppWithSQL"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("重要參考：")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Run the SQL Server 2017 container image on Docker on Linux, Mac, or Windows"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup-tools#macos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install sqlcmd and bcp the SQL Server command-line tools on Linux"),s("OutboundLink")],1)])]),e._v(" "),s("hr"),e._v(" "),s("h1",{attrs:{id:"download-docker-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-docker-image"}},[e._v("#")]),e._v(" Download Docker Image")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ docker pull microsoft/mssql-server-linux\n")])])]),s("h1",{attrs:{id:"執行-container-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#執行-container-image"}},[e._v("#")]),e._v(" 執行 Container Image")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 -d microsoft/mssql-server-linux\n\n\n\n$ docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 -v /Users/AlanJui/DB/mssql:/var/opt/mssql/data --name ms-sql-server --rm -d microsoft/mssql-server-linux\n\n\n$ docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 --name ms-sql-server -v /user/my/db:/var/opt/mssql --rm -d microsoft/mssql-server-linux\n")])])]),s("h1",{attrs:{id:"查詢正執行中的-container-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查詢正執行中的-container-image"}},[e._v("#")]),e._v(" 查詢正執行中的 Container Image")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('$ docker ps \n\nCONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                    NAMES\n61739dd1a2d7        microsoft/mssql-server-linux   "/bin/sh -c /opt/m..."   7 seconds ago       Up 5 seconds        0.0.0.0:1433->1433/tcp   ms-sql-server\n')])])]),s("h1",{attrs:{id:"終止正執行中的-container-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#終止正執行中的-container-image"}},[e._v("#")]),e._v(" 終止正執行中的 Container Image")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ docker stop [Container ID] \n\n\n$ docker stop ms-sql-server\n")])])]),s("h2",{attrs:{id:"與sql-server對話"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#與sql-server對話"}},[e._v("#")]),e._v(" 與SQL Server對話")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ docker exec -ti ms-sql-server /bin/bash\n")])])]),s("hr"),e._v(" "),s("h1",{attrs:{id:"檢視sql-server-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#檢視sql-server-log"}},[e._v("#")]),e._v(" 檢視SQL Server Log")]),e._v(" "),s("p",[e._v("遇有異常狀況，想知道 MS SQL Server 的 Log 是怎麼描述「當時的狀態」……")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ docker cp ms-sql-server:/var/opt/mssql/log/errorlog ./\n$ code errorlog\n")])])]),s("hr"),e._v(" "),s("h1",{attrs:{id:"安裝command-line-for-sql-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝command-line-for-sql-server"}},[e._v("#")]),e._v(" 安裝Command Line for SQL Server")]),e._v(" "),s("p",[e._v("SQL Server command-line tools on Linux")]),e._v(" "),s("h2",{attrs:{id:"籌備作業"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#籌備作業"}},[e._v("#")]),e._v(" 籌備作業")]),e._v(" "),s("p",[e._v("設定個人在GitHub的Personal Access Token:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('create a personal access token:\n  https://github.com/settings/tokens/new?scopes=gist,public_repo&description=Homebrew\n\n$ export HOMEBREW_GITHUB_API_TOKEN="864866d896bbeb6720ad3556d6501639c47770a7"\n')])])]),s("h2",{attrs:{id:"安裝作業"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝作業"}},[e._v("#")]),e._v(" 安裝作業")]),e._v(" "),s("p",[s("strong",[e._v("基本安裝指令：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ brew tap microsoft/mssql-release https://github.com/Microsoft/homebrew-mssql-release\n\n$ brew update\n\n$ ACCEPT_EULA=y brew install mssql-tools\n")])])]),s("p",[s("strong",[e._v("實際安裝程序：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]\n22:17:57 $ brew tap microsoft/mssql-release https://github.com/Microsoft/homebrew-mssql-release\n==> Tapping microsoft/mssql-release\nCloning into \'/usr/local/Homebrew/Library/Taps/microsoft/homebrew-mssql-release\'...\nremote: Counting objects: 8, done.\nremote: Compressing objects: 100% (5/5), done.\nremote: Total 8 (delta 3), reused 8 (delta 3), pack-reused 0\nUnpacking objects: 100% (8/8), done.\nChecking connectivity... done.\nTapped 4 formulae (34 files, 33.7KB)\n\nAlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]\n22:22:28 $ brew update\nAlready up-to-date.\n\nAlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]\n22:22:39 $ ACCEPT_EULA=y brew install mssql-tools\n==> Installing mssql-tools from microsoft/mssql-release\n==> Installing dependencies for microsoft/mssql-release/mssql-tools: msodbcsql\n==> Installing microsoft/mssql-release/mssql-tools dependency: msodbcsql\n==> Downloading http://download.microsoft.com/download/4/9/5/495639C0-79E4-45A7-B65A-B264071C3D9A/msodbcsql-13.1.7.\nAlready downloaded: /Users/AlanJui/Library/Caches/Homebrew/msodbcsql-13.1.7.0.tar.gz\n==> odbcinst -u -d -n "ODBC Driver 13 for SQL Server"\n==> odbcinst -i -d -f ./odbcinst.ini\n==> Caveats\nIf you installed this formula with the registration option (default), you\'ll\nneed to manually remove [ODBC Driver 13 for SQL Server] section from\nodbcinst.ini after the formula is uninstalled. This can be done by executing\nthe following command:\n    odbcinst -u -d -n "ODBC Driver 13 for SQL Server"\n==> Summary\n🍺  /usr/local/Cellar/msodbcsql/13.1.7.0: 8 files, 2.6MB, built in 1 second\n==> Installing microsoft/mssql-release/mssql-tools\n==> Downloading https://go.microsoft.com/fwlink/?linkid=848963\n==> Downloading from http://download.microsoft.com/download/F/D/1/FD16AA69-F27D-440E-A15A-6C521A1972E6/mssql-tools-\n######################################################################## 100.0%\n🍺  /usr/local/Cellar/mssql-tools/14.0.6.0: 11 files, 1.1MB, built in 2 seconds\n')])])]),s("p",[s("strong",[e._v("安裝位置：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("AlanJui at MacBook-Pro-2.local in [~]\n8:05:13 $ ll /usr/local/Homebrew/Library/Taps/microsoft/homebrew-mssql-release/Formula\ntotal 32\n-rwxr-xr-x  1 AlanJui  admin   2.4K  5 28 22:22 msodbcsql.rb\n-rwxr-xr-x  1 AlanJui  admin   2.5K  5 28 22:22 msodbcsql@13.1.7.0.rb\n-rw-r--r--  1 AlanJui  admin   2.0K  5 28 22:22 mssql-tools.rb\n-rw-r--r--  1 AlanJui  admin   2.0K  5 28 22:22 mssql-tools@14.0.6.0.rb\n")])])]),s("hr"),e._v(" "),s("h1",{attrs:{id:"異常狀態處理作法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#異常狀態處理作法"}},[e._v("#")]),e._v(" 異常狀態處理作法")]),e._v(" "),s("h2",{attrs:{id:"error-formulae-found-in-multiple-taps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-formulae-found-in-multiple-taps"}},[e._v("#")]),e._v(" Error: Formulae found in multiple taps:")]),e._v(" "),s("p",[e._v("先完成ODBC Driver for Mac的安裝，然後再安裝 mssql-tools 會遭遇到的問題。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]\n20:38:59 $ brew install mssql-tools\nError: Formulae found in multiple taps:\n * microsoft/msodbcsql/mssql-tools\n * microsoft/mssql-release/mssql-tools\n\nPlease use the fully-qualified name e.g. microsoft/msodbcsql/mssql-tools to refer the formula.\n\nAlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]\n20:48:44 $ brew untap microsoft/msodbcsql\nUntapping microsoft/msodbcsql... (30 files, 27.3KB)\nUntapped 2 formulae\n\nAlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]\n20:48:55 $ brew uninstall mssql-tools\nUninstalling /usr/local/Cellar/mssql-tools/14.0.5.0... (11 files, 1.1MB)\n")])])]),s("hr"),e._v(" "),s("h2",{attrs:{id:"odbcinst-sqlremovedriver-failed-with-unable-to-find-component-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#odbcinst-sqlremovedriver-failed-with-unable-to-find-component-name"}},[e._v("#")]),e._v(" odbcinst: SQLRemoveDriver failed with Unable to find component name.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]\n21:04:58 $ ACCEPT_EULA=y brew install mssql-tools\n\nUpdating Homebrew...\n==> Auto-updated Homebrew!\nUpdated 1 tap (homebrew/core).\nNo changes to formulae.\n\n==> Installing mssql-tools from microsoft/mssql-release\n==> Installing dependencies for microsoft/mssql-release/mssql-tools: msodbcsql\n==> Installing microsoft/mssql-release/mssql-tools dependency: msodbcsql\n==> Downloading http://download.microsoft.com/download/4/9/5/495639C0-79E4-45A7-B65A-B264071C3D9A/msodbcsql-13.1.7.\nAlready downloaded: /Users/AlanJui/Library/Caches/Homebrew/msodbcsql-13.1.7.0.tar.gz\n==> odbcinst -u -d -n "ODBC Driver 13 for SQL Server"\nLast 15 lines from /Users/AlanJui/Library/Logs/Homebrew/msodbcsql/01.odbcinst:\n2017-05-28 21:06:27 +0800\n\nodbcinst -u -d -n "ODBC Driver 13 for SQL Server"\n\nodbcinst: SQLRemoveDriver failed with Unable to find component name.\n\nIf reporting this issue please do so at (not Homebrew/brew or Homebrew/core):\nhttps://github.com/microsoft/homebrew-mssql-release/issues\n')])])]),s("hr"),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]\n20:49:37 $ brew install mssql-tools\n==> Installing mssql-tools from microsoft/mssql-release\n==> Installing dependencies for microsoft/mssql-release/mssql-tools: msodbcsql\n==> Installing microsoft/mssql-release/mssql-tools dependency: msodbcsql\n==> Downloading http://download.microsoft.com/download/4/9/5/495639C0-79E4-45A7-B65A-B264071C3D9A/msodbcsql-13.1.7.\nAlready downloaded: /Users/AlanJui/Library/Caches/Homebrew/msodbcsql-13.1.7.0.tar.gz\nThe license terms for this product can be downloaded from\nhttps://aka.ms/odbc131eula and found in\n/usr/local/share/doc/msodbcsql/LICENSE.txt . By entering 'YES',\nyou indicate that you accept the license terms.\n\nDo you accept the license terms? (Enter YES or NO)\nYES\n==> odbcinst -u -d -n \"ODBC Driver 13 for SQL Server\"\nLast 15 lines from /Users/AlanJui/Library/Logs/Homebrew/msodbcsql/01.odbcinst:\n2017-05-28 20:50:21 +0800\n\nodbcinst -u -d -n \"ODBC Driver 13 for SQL Server\"\n\nodbcinst: SQLRemoveDriver failed with Unable to find component name.\n\nIf reporting this issue please do so at (not Homebrew/brew or Homebrew/core):\nhttps://github.com/microsoft/homebrew-mssql-release/issues\n\n/usr/local/Homebrew/Library/Homebrew/utils/github.rb:216:in `raise_api_error': GitHub  (GitHub::AuthenticationFailedError)\nThe GitHub credentials in the macOS keychain may be invalid.\nClear them with:\n  printf \"protocol=https\\nhost=github.com\\n\" | git credential-osxkeychain erase\nOr create a personal access token:\n  https://github.com/settings/tokens/new?scopes=gist,public_repo&description=Homebrew\nand then set the token as: export HOMEBREW_GITHUB_API_TOKEN=\"your_new_token\"\n        from /usr/local/Homebrew/Library/Homebrew/utils/github.rb:184:in `open'\n        from /usr/local/Homebrew/Library/Homebrew/utils/github.rb:233:in `issues_matching'\n        from /usr/local/Homebrew/Library/Homebrew/utils/github.rb:272:in `issues_for_formula'\n        from /usr/local/Homebrew/Library/Homebrew/exceptions.rb:368:in `fetch_issues'\n        from /usr/local/Homebrew/Library/Homebrew/exceptions.rb:364:in `issues'\n        from /usr/local/Homebrew/Library/Homebrew/exceptions.rb:418:in `dump'\n        from /usr/local/Homebrew/Library/Homebrew/brew.rb:131:in `rescue in <main>'\n        from /usr/local/Homebrew/Library/Homebrew/brew.rb:30:in `<main>'\n\nAlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]\n20:50:26 $\n")])])]),s("hr"),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]\n22:15:11 $ brew info msodbcsql\nmicrosoft/mssql-release/msodbcsql: stable 13.1.7.0\nODBC Driver for Microsoft(R) SQL Server(R)\nhttps://msdn.microsoft.com/en-us/library/mt654048(v=sql.1).aspx\nNot installed\nFrom: https://github.com/Microsoft/homebrew-mssql-release/blob/master/Formula/msodbcsql.rb\n==> Dependencies\nRequired: unixodbc ✔, openssl ✔\n==> Options\n--without-registration\n        Don\'t register the driver in odbcinst.ini\n==> Caveats\nIf you installed this formula with the registration option (default), you\'ll\nneed to manually remove [ODBC Driver 13 for SQL Server] section from\nodbcinst.ini after the formula is uninstalled. This can be done by executing\nthe following command:\n    odbcinst -u -d -n "ODBC Driver 13 for SQL Server"\n\nAlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]\n22:16:01 $ odbcinst -u -d -n "ODBC Driver 13 for SQL Server"\nODBC Driver 13 for SQL Server has been deleted (if it existed at all) because its usage count became zero\n\nAlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]\n22:16:50 $ brew uninstall mssql-tools\nError: No such keg: /usr/local/Cellar/mssql-tools\n\nAlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]\n22:17:28 $ brew untap microsoft/mssql-release\nUntapping microsoft/mssql-release... (35 files, 34.7KB)\nUntapped 4 formulae\n')])])]),s("hr")])}),[],!1,null,null,null);s.default=n.exports}}]);
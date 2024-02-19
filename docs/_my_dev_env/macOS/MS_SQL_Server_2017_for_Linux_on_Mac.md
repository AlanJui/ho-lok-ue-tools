# MS SQL Server 2017 for Linux on Mac
學習目標：

- [Use Visual Studio Code to create and run Transact-SQL scripts for SQL Server](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-develop-use-vscode)
- [Create Node.js apps using SQL Server on macOS](https://www.microsoft.com/en-us/sql-server/developer-get-started/node/mac/)
- [Tutorial: Writing Transact-SQL Statements](https://docs.microsoft.com/en-us/sql/t-sql/tutorial-writing-transact-sql-statements)
- [Sequelize](http://docs.sequelizejs.com/)
- [The Angular Full-Stack Generator](https://angular-fullstack.github.io/)
- [DavideViolante/Angular-Full-Stack](https://github.com/DavideViolante/Angular-Full-Stack)
- [codeschool/WatchUsBuild-MovieListingsAppWithSQL](https://github.com/codeschool/WatchUsBuild-MovieListingsAppWithSQL)

重要參考：

- [Run the SQL Server 2017 container image on Docker on Linux, Mac, or Windows](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup-docker)
- [Install sqlcmd and bcp the SQL Server command-line tools on Linux](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup-tools#macos)


----------
# Download Docker Image
    $ docker pull microsoft/mssql-server-linux


# 執行 Container Image
    $ docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 -d microsoft/mssql-server-linux



    $ docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 -v /Users/AlanJui/DB/mssql:/var/opt/mssql/data --name ms-sql-server --rm -d microsoft/mssql-server-linux


    $ docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 --name ms-sql-server -v /user/my/db:/var/opt/mssql --rm -d microsoft/mssql-server-linux
# 查詢正執行中的 Container Image
    $ docker ps 
    
    CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                    NAMES
    61739dd1a2d7        microsoft/mssql-server-linux   "/bin/sh -c /opt/m..."   7 seconds ago       Up 5 seconds        0.0.0.0:1433->1433/tcp   ms-sql-server


# 終止正執行中的 Container Image
    $ docker stop [Container ID] 


    $ docker stop ms-sql-server


## 與SQL Server對話
    $ docker exec -ti ms-sql-server /bin/bash


----------


# 檢視SQL Server Log

遇有異常狀況，想知道 MS SQL Server 的 Log 是怎麼描述「當時的狀態」……


    $ docker cp ms-sql-server:/var/opt/mssql/log/errorlog ./
    $ code errorlog



----------
# 安裝Command Line for SQL Server

SQL Server command-line tools on Linux

## 籌備作業

設定個人在GitHub的Personal Access Token:


    create a personal access token:
      https://github.com/settings/tokens/new?scopes=gist,public_repo&description=Homebrew
    
    $ export HOMEBREW_GITHUB_API_TOKEN="864866d896bbeb6720ad3556d6501639c47770a7"


## 安裝作業

**基本安裝指令：**

    $ brew tap microsoft/mssql-release https://github.com/Microsoft/homebrew-mssql-release
    
    $ brew update
    
    $ ACCEPT_EULA=y brew install mssql-tools

**實際安裝程序：**

    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]
    22:17:57 $ brew tap microsoft/mssql-release https://github.com/Microsoft/homebrew-mssql-release
    ==> Tapping microsoft/mssql-release
    Cloning into '/usr/local/Homebrew/Library/Taps/microsoft/homebrew-mssql-release'...
    remote: Counting objects: 8, done.
    remote: Compressing objects: 100% (5/5), done.
    remote: Total 8 (delta 3), reused 8 (delta 3), pack-reused 0
    Unpacking objects: 100% (8/8), done.
    Checking connectivity... done.
    Tapped 4 formulae (34 files, 33.7KB)
    
    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]
    22:22:28 $ brew update
    Already up-to-date.
    
    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]
    22:22:39 $ ACCEPT_EULA=y brew install mssql-tools
    ==> Installing mssql-tools from microsoft/mssql-release
    ==> Installing dependencies for microsoft/mssql-release/mssql-tools: msodbcsql
    ==> Installing microsoft/mssql-release/mssql-tools dependency: msodbcsql
    ==> Downloading http://download.microsoft.com/download/4/9/5/495639C0-79E4-45A7-B65A-B264071C3D9A/msodbcsql-13.1.7.
    Already downloaded: /Users/AlanJui/Library/Caches/Homebrew/msodbcsql-13.1.7.0.tar.gz
    ==> odbcinst -u -d -n "ODBC Driver 13 for SQL Server"
    ==> odbcinst -i -d -f ./odbcinst.ini
    ==> Caveats
    If you installed this formula with the registration option (default), you'll
    need to manually remove [ODBC Driver 13 for SQL Server] section from
    odbcinst.ini after the formula is uninstalled. This can be done by executing
    the following command:
        odbcinst -u -d -n "ODBC Driver 13 for SQL Server"
    ==> Summary
    🍺  /usr/local/Cellar/msodbcsql/13.1.7.0: 8 files, 2.6MB, built in 1 second
    ==> Installing microsoft/mssql-release/mssql-tools
    ==> Downloading https://go.microsoft.com/fwlink/?linkid=848963
    ==> Downloading from http://download.microsoft.com/download/F/D/1/FD16AA69-F27D-440E-A15A-6C521A1972E6/mssql-tools-
    ######################################################################## 100.0%
    🍺  /usr/local/Cellar/mssql-tools/14.0.6.0: 11 files, 1.1MB, built in 2 seconds
    
    


**安裝位置：**

    AlanJui at MacBook-Pro-2.local in [~]
    8:05:13 $ ll /usr/local/Homebrew/Library/Taps/microsoft/homebrew-mssql-release/Formula
    total 32
    -rwxr-xr-x  1 AlanJui  admin   2.4K  5 28 22:22 msodbcsql.rb
    -rwxr-xr-x  1 AlanJui  admin   2.5K  5 28 22:22 msodbcsql@13.1.7.0.rb
    -rw-r--r--  1 AlanJui  admin   2.0K  5 28 22:22 mssql-tools.rb
    -rw-r--r--  1 AlanJui  admin   2.0K  5 28 22:22 mssql-tools@14.0.6.0.rb


----------
# 異常狀態處理作法


## Error: Formulae found in multiple taps:

先完成ODBC Driver for Mac的安裝，然後再安裝 mssql-tools 會遭遇到的問題。


    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]
    20:38:59 $ brew install mssql-tools
    Error: Formulae found in multiple taps:
     * microsoft/msodbcsql/mssql-tools
     * microsoft/mssql-release/mssql-tools
    
    Please use the fully-qualified name e.g. microsoft/msodbcsql/mssql-tools to refer the formula.
    
    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]
    20:48:44 $ brew untap microsoft/msodbcsql
    Untapping microsoft/msodbcsql... (30 files, 27.3KB)
    Untapped 2 formulae
    
    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]
    20:48:55 $ brew uninstall mssql-tools
    Uninstalling /usr/local/Cellar/mssql-tools/14.0.5.0... (11 files, 1.1MB)



----------


## odbcinst: SQLRemoveDriver failed with Unable to find component name.


    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]
    21:04:58 $ ACCEPT_EULA=y brew install mssql-tools
    
    Updating Homebrew...
    ==> Auto-updated Homebrew!
    Updated 1 tap (homebrew/core).
    No changes to formulae.
    
    ==> Installing mssql-tools from microsoft/mssql-release
    ==> Installing dependencies for microsoft/mssql-release/mssql-tools: msodbcsql
    ==> Installing microsoft/mssql-release/mssql-tools dependency: msodbcsql
    ==> Downloading http://download.microsoft.com/download/4/9/5/495639C0-79E4-45A7-B65A-B264071C3D9A/msodbcsql-13.1.7.
    Already downloaded: /Users/AlanJui/Library/Caches/Homebrew/msodbcsql-13.1.7.0.tar.gz
    ==> odbcinst -u -d -n "ODBC Driver 13 for SQL Server"
    Last 15 lines from /Users/AlanJui/Library/Logs/Homebrew/msodbcsql/01.odbcinst:
    2017-05-28 21:06:27 +0800
    
    odbcinst -u -d -n "ODBC Driver 13 for SQL Server"
    
    odbcinst: SQLRemoveDriver failed with Unable to find component name.
    
    If reporting this issue please do so at (not Homebrew/brew or Homebrew/core):
    https://github.com/microsoft/homebrew-mssql-release/issues





----------


    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]
    20:49:37 $ brew install mssql-tools
    ==> Installing mssql-tools from microsoft/mssql-release
    ==> Installing dependencies for microsoft/mssql-release/mssql-tools: msodbcsql
    ==> Installing microsoft/mssql-release/mssql-tools dependency: msodbcsql
    ==> Downloading http://download.microsoft.com/download/4/9/5/495639C0-79E4-45A7-B65A-B264071C3D9A/msodbcsql-13.1.7.
    Already downloaded: /Users/AlanJui/Library/Caches/Homebrew/msodbcsql-13.1.7.0.tar.gz
    The license terms for this product can be downloaded from
    https://aka.ms/odbc131eula and found in
    /usr/local/share/doc/msodbcsql/LICENSE.txt . By entering 'YES',
    you indicate that you accept the license terms.
    
    Do you accept the license terms? (Enter YES or NO)
    YES
    ==> odbcinst -u -d -n "ODBC Driver 13 for SQL Server"
    Last 15 lines from /Users/AlanJui/Library/Logs/Homebrew/msodbcsql/01.odbcinst:
    2017-05-28 20:50:21 +0800
    
    odbcinst -u -d -n "ODBC Driver 13 for SQL Server"
    
    odbcinst: SQLRemoveDriver failed with Unable to find component name.
    
    If reporting this issue please do so at (not Homebrew/brew or Homebrew/core):
    https://github.com/microsoft/homebrew-mssql-release/issues
    
    /usr/local/Homebrew/Library/Homebrew/utils/github.rb:216:in `raise_api_error': GitHub  (GitHub::AuthenticationFailedError)
    The GitHub credentials in the macOS keychain may be invalid.
    Clear them with:
      printf "protocol=https\nhost=github.com\n" | git credential-osxkeychain erase
    Or create a personal access token:
      https://github.com/settings/tokens/new?scopes=gist,public_repo&description=Homebrew
    and then set the token as: export HOMEBREW_GITHUB_API_TOKEN="your_new_token"
            from /usr/local/Homebrew/Library/Homebrew/utils/github.rb:184:in `open'
            from /usr/local/Homebrew/Library/Homebrew/utils/github.rb:233:in `issues_matching'
            from /usr/local/Homebrew/Library/Homebrew/utils/github.rb:272:in `issues_for_formula'
            from /usr/local/Homebrew/Library/Homebrew/exceptions.rb:368:in `fetch_issues'
            from /usr/local/Homebrew/Library/Homebrew/exceptions.rb:364:in `issues'
            from /usr/local/Homebrew/Library/Homebrew/exceptions.rb:418:in `dump'
            from /usr/local/Homebrew/Library/Homebrew/brew.rb:131:in `rescue in <main>'
            from /usr/local/Homebrew/Library/Homebrew/brew.rb:30:in `<main>'
    
    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/my-soa-01]
    20:50:26 $



----------



    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]
    22:15:11 $ brew info msodbcsql
    microsoft/mssql-release/msodbcsql: stable 13.1.7.0
    ODBC Driver for Microsoft(R) SQL Server(R)
    https://msdn.microsoft.com/en-us/library/mt654048(v=sql.1).aspx
    Not installed
    From: https://github.com/Microsoft/homebrew-mssql-release/blob/master/Formula/msodbcsql.rb
    ==> Dependencies
    Required: unixodbc ✔, openssl ✔
    ==> Options
    --without-registration
            Don't register the driver in odbcinst.ini
    ==> Caveats
    If you installed this formula with the registration option (default), you'll
    need to manually remove [ODBC Driver 13 for SQL Server] section from
    odbcinst.ini after the formula is uninstalled. This can be done by executing
    the following command:
        odbcinst -u -d -n "ODBC Driver 13 for SQL Server"
    
    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]
    22:16:01 $ odbcinst -u -d -n "ODBC Driver 13 for SQL Server"
    ODBC Driver 13 for SQL Server has been deleted (if it existed at all) because its usage count became zero
    
    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]
    22:16:50 $ brew uninstall mssql-tools
    Error: No such keg: /usr/local/Cellar/mssql-tools
    
    AlanJui at MacBook-Pro-2.local in [~/workspace/ms-sql/angular-sql]
    22:17:28 $ brew untap microsoft/mssql-release
    Untapping microsoft/mssql-release... (35 files, 34.7KB)
    Untapped 4 formulae



----------


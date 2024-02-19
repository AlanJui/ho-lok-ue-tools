# MS SQL Server 2017 for Linux
文章參考處：　

- https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker
- https://docs.microsoft.com/zh-tw/sql/linux/quickstart-install-connect-docker

Docker Hub: 
  https://store.docker.com/images/mssql-server-linux


----------


# 安裝


## 下載 Docker Image
    docker pull microsoft/mssql-server-linux


## 啟動 Docker Container

**Start a mssql-server instance using the latest update for SQL Server 2017**

    $ docker run --name ms-sql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 -d microsoft/mssql-server-linux:2017-latest


    $ docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 -d microsoft/mssql-server-linux:latest

**Start a mssql-server instance running as the SQL Express edition**

    $ docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -e 'MSSQL_PID=Express' -p 1433:1433 -d microsoft/mssql-server-linux:latest


## 連上 SQL Server

**指令格式**

    docker exec -it <container_id|container_name> /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P <your_password>


    docker exec -it ms-sql /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Passw0rd

**實際演練：**

    $ docker exec -it ms-sql bash
    $ /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Passw0rd'

自 Host  連上 Docker Container 中執行的 SQL Server

    sqlcmd -S 10.3.2.4,1401 -U SA -P 'Passw0rd'


## 驗證

執行 Query 指令

    CREATE DATABASE TestDB
    SELECT Name from sys.Databases
    GO



----------


# 令資料永續保存

Ref:

- https://docs.microsoft.com/zh-tw/sql/linux/sql-server-linux-configure-docker#設定Docker容器
- https://docs.docker.com/engine/admin/volumes/volumes/

透過 Volume ，令 Docker Container 中執行的 SQL Server ，能將 Database 資料永續保存。

**方法一：為資料磁碟區掛接主機目錄（Mount a host directory as data volume）**

    docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<YourStrong!Passw0rd>' -p 1433:1433 -v <host directory>:/var/opt/mssql -d microsoft/mssql-server-linux:2017-latest



    docker run --name ms-sql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 -v /Users/alanjui/ms-sql:/var/opt/mssql -d microsoft/mssql-server-linux:2017-latest 


    docker run --name ms-sql \
       -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' \
       -e 'MSSQL_PID=Developer' -p 1433:1433 \
       -v /d/data/ms-sql:/var/opt/mssql \
       -d microsoft/mssql-server-linux:latest


**方法二：使用資料磁碟區容器（Use data volume containers）**

    docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<YourStrong!Passw0rd>' -p 1433:1433 -v sqlvolume:/var/opt/mssql -d microsoft/mssql-server-linux:2017-latest



    docker volume create ms-sql-db-vol
    
    docker volume ls
    
    docker volume inspect ms-sql-db-vol
    
    docker run --name ms-sql-server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -e 'MSSQL_PID=Developer' -p 1433:1433 -v ms-sql-db-vol:/var/opt/mssql -d microsoft/mssql-server-linux:latest
    
    docker ps
    
    docker exec -it ms-sql-server bash
    
    /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Passw0rd'



## 建立資料庫
    CREATE DATABASE TestDB
    SELECT Name from sys.Databases
    GO



## 放入資料
    USE TestDB
    CREATE TABLE Inventory (id INT, name NVARCHAR(50), quantity INT)
    INSERT INTO Inventory VALUES (1, 'banana', 150); 
    INSERT INTO Inventory VALUES (2, 'orange', 154);
    GO



## 查詢資料
    SELECT * FROM Inventory WHERE quantity > 152;
    GO



## 退出 SQL SERVER
    QUIT



    $ docker stop ms-sql-server
    $ docker ps
    $ docker start ms-sql-server
    $ docker ps
    $ docker exec -it ms-sql-server bash
    root@628c1e796fdc:/# /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Passw0rd'
    1> USE TestDB
    2> SELECT * FROM Inventory WHERE quantity > 152;
    3> GO
    Changed database context to 'TestDB'.
    id          name                                               quantity
    ----------- -------------------------------------------------- -----------
              2 orange                                                     154
    
    (1 rows affected)
    1>




----------


## VS Code with SQL Server

Ref: https://docs.microsoft.com/zh-tw/sql/linux/sql-server-linux-develop-use-vscode

可使用 VS Code 執行以下 SQL Script。
首次在 VS Code 啟用 SQL Script ， VS Code 會要求安裝「SQL Server (mssql)」Extension。
執行 SQL Script ，使用 <Cmd> + <Shift> + E 按鍵。
首次連上某 SQL Server 前， VS Code 會顯示要求建立 Server Connection Profile 的訊息。

**(1) Create DB**

    USE master
    GO
    IF NOT EXISTS (
       SELECT name
       FROM sys.databases
       WHERE name = N'TutorialDB'
    )
    CREATE DATABASE [TutorialDB]
    GO

**(2) Create Table**

    -- Create a new table called 'Employees' in schema 'dbo'
    -- Drop the table if it already exists
    IF OBJECT_ID('dbo.Employees', 'U') IS NOT NULL
    DROP TABLE dbo.Employees
    GO
    -- Create the table in the specified schema
    CREATE TABLE dbo.Employees
    (
       EmployeesId        INT    NOT NULL   PRIMARY KEY, -- primary key column
       Name      \[NVARCHAR\](50)  NOT NULL,
       Location   \[NVARCHAR\](50)  NOT NULL
    );
    GO

**(3) Insert Data and Query**

    -- Insert rows into table 'Employees'
    INSERT INTO Employees
       ([EmployeesId],[Name],[Location])
    VALUES
       ( 1, N'Jared', N'Australia'),
       ( 2, N'Nikita', N'India'),
       ( 3, N'Tom', N'Germany'),
       ( 4, N'Jake', N'United States')   
    GO   
    -- Query the total count of employees
    SELECT COUNT(*) as EmployeeCount FROM dbo.Employees;
    -- Query all employee information
    SELECT e.EmployeesId, e.Name, e.Location 
    FROM dbo.Employees as e
    GO


在 Container  中，使用 sqlcmd shell command  查詢：


    $ docker exec -it ms-sql-server bash
    root@e3cd59d5fdb8:/# /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P Passw0rd
    1> select name from sys.databases
    2> go
    name
    --------------------------------------------------------------------------------------
    master
    tempdb
    model
    msdb
    TutorialDB
    
    (5 rows affected)
    1> use TutorialDB
    2> select name from sys.tables
    3> go
    Changed database context to 'TutorialDB'.
    name
    --------------------------------------------------------------------------------------
    Employees
    
    (1 rows affected)
    1>


----------


    CREATE DATABASE [Blogging];
    GO
    USE [Blogging];
    GO
    CREATE TABLE [Blog] (
        [BlogId] int NOT NULL IDENTITY,
        [Url] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Blog] PRIMARY KEY ([BlogId])
    );
    GO
    CREATE TABLE [Post] (
        [PostId] int NOT NULL IDENTITY,
        [BlogId] int NOT NULL,
        [Content] nvarchar(max),
        [Title] nvarchar(max),
        CONSTRAINT [PK_Post] PRIMARY KEY ([PostId]),
        CONSTRAINT [FK_Post_Blog_BlogId] FOREIGN KEY ([BlogId]) REFERENCES [Blog] ([BlogId]) ON DELETE CASCADE
    );
    GO
    INSERT INTO [Blog] (Url) VALUES
    ('http://blogs.msdn.com/dotnet'),
    ('http://blogs.msdn.com/webdev'),
    ('http://blogs.msdn.com/visualstudio')
    GO

查詢

    USE [Blogging];
    SELECT * FROM Blog;
    GO






----------


# 狀況排除


## 1. 無法啟動 SQL Server

**1.1 port is already allocated.**

導因：系統已安裝的 SQL Server 2014 Service 未關閉

    (Wagtail)
    AlanJui@WIN-01 MINGW64 /d/Workspace/Docker
    $ docker run --name ms-sql-server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 -d microsoft/mssql-server-linux:latest
    3abc22f1d0de8916872a5e8718ae512e035d0194a3a83395d2143906effffcda
    C:\Program Files\Docker\Docker\Resources\bin\docker.exe: Error response from daemon: driver failed programming external connectivity on endpoint ms-sql-server (f6b2e675126634dfc3686a3c6b1df363094b69f8273ac2c768ffe56c1b7fe875): Error starting userland proxy: Bind for 0.0.0.0:1433 failed: port is already allocated.

解法： 透過「服務」，將Service暫時停止。

**1.2** The container name "/ms-sql-server" is already in use by container "3abc22f1d0de8916872a5e8718ae512e035d0194a3a83395d2143906effffcda".

導因：先前啟動時，已建立的Continer已暫用相同的Port號

    (Wagtail)
    AlanJui@WIN-01 MINGW64 /d/Workspace/Docker
    $ docker run --name ms-sql-server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 -d microsoft/mssql-server-linux:latest
    C:\Program Files\Docker\Docker\Resources\bin\docker.exe: Error response from daemon: Conflict. The container name "/ms-sql-server" is already in use by container "3abc22f1d0de8916872a5e8718ae512e035d0194a3a83395d2143906effffcda". You have to remove (or rename) that container to be able to reuse that name.
    See 'C:\Program Files\Docker\Docker\Resources\bin\docker.exe run --help'.

解法：

    $ docker rmi 3abc
    $ docker run --name ms-sql-server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' -p 1433:1433 -d microsoft/mssql-server-linux:latest
    910cdeae0fc0419ec5ae9bde7ca52a422944c2a8692c07f3aff9327822764b07


## 終止佔用 Port 1433 之 Process


    $ docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=Passw0rd' --cap-add SYS_PTRACE -p 1433:1433 -v ~/data/ms-sql:/var/opt/mssql -d microsoft/mssql-server-linux  --name ms-sql-server --rm
    6c0d85e32cfc402071e68da4a75fc250e62eafb14b9576033f747cbfcbca647d
    docker: Error response from daemon: driver failed programming external connectivity on endpoint objective_torvalds (6d0bb21569324d91538ebd0b76a75096c6df31c797c7bc483ccd0122025e33c3): Error starting userland proxy: listen tcp 0.0.0.0:1433: bind: address already in use.


    $ sudo kill `sudo lsof -t -i:1433`


----------
## 變更 sa 密碼


    docker exec -it <Container ID> /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '<Old Password>' -Q 'ALTER LOGIN SA WITH PASSWORD="<New Password>";'



----------
## 使用data volume containers


    docker run  --name ms-sql-server -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=Passw0rd' -p 1433:1433 -v /d/data/ms-sql:/var/opt/mssql -d microsoft/mssql-server-linux


    docker run  --name mssql-linux --rm -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=Passw0rd' --cap-add SYS_PTRACE -p 1433:1433 -v ~/data/ms-sql:/var/opt/mssql -d microsoft/mssql-server-linux




    $ docker volume create --help
    
    Usage:  docker volume create \[OPTIONS\] [VOLUME]
    
    Create a volume
    
    Options:
      -d, --driver string   Specify volume driver name (default "local")
          --label list      Set metadata for a volume
      -o, --opt map         Set driver specific options (default map[])
    
    AlanJui@WIN-01 MINGW64 /d/Workspace
    $ docker volume create --label ms-sql-db
    28edf7296921a219f6d00cbb95f540483d38b88af19f76587d387c46406095e7


----------


    docker login
    docker pull microsoft/mssql-server-linux:latest



    docker run --name ms-sql-server \
       -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd' \
       -e 'MSSQL_PID=Developer ' -p 1433:1433 \
       -d microsoft/mssql-server-linux:latest



    docker exec -it ms-sql-server bash




Change Password:

    docker exec -it sql1 /opt/mssql-tools/bin/sqlcmd \
       -S localhost -U SA -P '<YourStrong!Passw0rd>' \
       -Q 'ALTER LOGIN SA WITH PASSWORD="<YourNewStrong!Passw0rd>"'



    docker exec -it ms-sql-server /opt/mssql-tools/bin/sqlcmd \
       -S localhost -U SA -P 'Passw0rd' \
       -Q 'ALTER LOGIN SA WITH PASSWORD="ChingHai99@"'




----------
## Linux / MacOS

**啟動 SQL Server 的 Docker Image**

    docker run --name mssql-linux --rm -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=Passw0rd' -e 'MSSQL_PID=Developer' --cap-add SYS_PTRACE -p 1433:1433 -d microsoft/mssql-server-linux

連上 SQL Server

    docker exec -it mssql-linux "bash"

登入SQL Server

    /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Passw0rd'


----------
## Windows 10

啟動 Docker Container 

    docker run --name mssql-linux --rm -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Passw0rd" -e "MSSQL_PID=Developer" --cap-add SYS_PTRACE -p 1401:1433 -d microsoft/mssql-server-linux

連上SQL Server

    docker exec -it mssql-linux "bash"



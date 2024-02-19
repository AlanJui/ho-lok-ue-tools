# VS2017 EF Core筆記

# 1. 自動產生Model類別


1. 安裝套件
    Install-Package Microsoft.EntityFrameworkCore
    Install-Package Microsoft.EntityFrameworkCore.Tools
    
    Install-Package Microsoft.EntityFrameworkCore.SqlServer
    Install-Package Microsoft.EntityFrameworkCore.SqlServer.Design
    


2. 在 `Package Manager Console` 執行下列指令


    Scaffold-DbContext "Server=localhost;Database=Northwind;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models


    Scaffold-DbContext "Server=DEV-01\SQLEXPRESS;Database=Northwind;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models


    PM> Scaffold-DbContext "Server=DEV-01\SQLEXPRESS;Database=Northwind;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
    For column diagram_id. Unable to find parent table [dbo].[sysdiagrams]. Skipping column.
    For column principal_id. Unable to find parent table [dbo].[sysdiagrams]. Skipping column.
    For column version. Unable to find parent table [dbo].[sysdiagrams]. Skipping column.
    For column name. Unable to find parent table [dbo].[sysdiagrams]. Skipping column.
    For column definition. Unable to find parent table [dbo].[sysdiagrams]. Skipping column.
    For index PK__sysdiagrams__48CFD27E. Unable to find parent table [dbo].[sysdiagrams]. Skipping index.
    For index UK_principal_name. Unable to find parent table [dbo].[sysdiagrams]. Skipping index.
    For index UK_principal_name. Unable to find parent table [dbo].[sysdiagrams]. Skipping index.



    Scaffold-DbContext "Server=DEV-01\SQLEXPRESS;Database=Northwind;User id=sa; pwd=P@ssword;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models


    Scaffold-DbContext "Server=127.0.0.1;Database=Northwind;User id=sa; pwd=P@ssword;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models

3.檢查Model資料夾

4.針對 NorthwindContext 類別，進行修改


- 刪去OnConfiguring Method
- 新增建構Method
    public NorthwindContext(DbContextOptions<NorthwindContext> options)
        : base(options)
    { }


5. 修改 Startup 類別

新增使用套件：

    using myWebApp.Models;
    using Microsoft.EntityFrameworkCore;

appsettings.json


    {
      "ConnectionStrings": {
          "DefaultConnection": "Server=127.0.0.1; Database=Northwind; Trusted_Connection=True;"
      }, 
      ......
    }



    {
      "ConnectionStrings": {
          "DefaultConnection": "Server=127.0.0.1; Database=Northwind; user id=sa; password=Passw0rd;"
      }, 
      ......
    }



    public void ConfigureServices(IServiceCollection services)
    {
        // Add framework services.
        services.AddMvc();
        services.AddDbContext<NorthwindContext>(options => 
                    options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
    }


# 2.自動產生Controller類別



----------


## 無法使用瀏覽器瀏覽


    Bad Request - Invalid Hostname
    HTTP Error 400. The request hostname is invalid.

PowerShell with Admin

     netsh http add urlacl url=http://*:5000/ user=Everyone
----------


    netsh http add urlacl url=http://192.168.66.11:5566/ user=\Everyone


    d:
    cd D:\Workspace\AspNetCore2\WebAPI-001
    rd .vs /s /q


變更ＤＢ名稱


## 使用 Transact-SQL

若要重新命名資料庫

1. 連接到 Database Engine。
2. 在標準列中，按一下 **[新增查詢]**。
3. 將下列範例複製並貼入查詢視窗中，然後按一下 **[執行]**。 這個範例會將 `AdventureWorks2012` 資料庫的名稱變更為 `Northwind`。


    USE master;  
    GO  
    ALTER DATABASE NORTHWND  
    Modify Name = Northwind;  
    GO  
## 使用 SQL Server Management Studio

若要重新命名資料庫

1. 在 **[物件總管]**中，連接到 SQL Server Database Engine的執行個體，然後展開該執行個體。
2. 確定沒有人使用此資料庫，然後[將資料庫設定為單一使用者模式](https://docs.microsoft.com/zh-tw/sql/relational-databases/databases/set-a-database-to-single-user-mode)。
3. 展開 [資料庫]，以滑鼠右鍵按一下要重新命名的資料庫，然後按一下 [重新命名]。
4. 輸入新的資料庫名稱，然後按一下 **[確定]**。

(1)


    USE master;
    GO
    ALTER DATABASE NORTHWND
    SET SINGLE_USER
    WITH ROLLBACK IMMEDIATE;
    GO
    ALTER DATABASE NORTHWND
    SET READ_ONLY;
    GO





(2)

    ALTER DATABASE Northwind
    SET MULTI_USER;
    GO


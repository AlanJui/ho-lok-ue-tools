# ASP.NET Core 筆記
筆記 ASP.NET Core 如何使用 dotnet CLI工具，令 Code Generation Tools 可自動「產出」，Controller 、 View 類別程式碼。

【重要參考】： dotnet 指令之使用

-  [.NET Command Line Tools for EF Core](https://docs.microsoft.com/en-us/ef/core/miscellaneous/cli/dotnet)  
-  http://www.cnblogs.com/linezero/p/5688772.html


----------
# Create專案後
## Create  資料夾
    $ mkdir Models
    $ mkdir SQL_Scripts
## 在 [Project].csproj 安裝  CLI Tools 、EF Core 及 SQL Server : 
    <Project Sdk="Microsoft.NET.Sdk.Web">
      <PropertyGroup>
        <TargetFramework>netcoreapp1.1</TargetFramework>
        <PackageTargetFallback>$(PackageTargetFallback);dotnet5.6;portable-net45+win8</PackageTargetFallback>
      </PropertyGroup>
      <ItemGroup>
        <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="1.0.0"/>
        <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="1.0.0" />
        <DotNetCliToolReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Tools" Version="1.0.0" />
      </ItemGroup>
    </Project>  


    $ dotnet add package Microsoft.EntityFrameworkCore.SqlServer
    $ dotnet add package Microsoft.EntityFrameworkCore.SqlServer.Design
    $ dotnet add package Microsoft.EntityFrameworkCore.Design
    $ dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
    
    $ dotnet restore 


## appsettings.json
    "Logging": {
        "IncludeScopes": false,
        "LogLevel": {
          "Default": "Warning"
        }
      },
      "ConnectionStrings": {
        "Default": "server=localhost; database=MyBloggingDB; user id=sa; password=Passw0rd"
      }
    }  


## ApplicationDbContext.cs
    using System;
    using Microsoft.EntityFrameworkCore;
    namespace Blogging.Models
    {
      public class ApplicationDbContext : DbContext
      {
        //public DbSet<Blog> Blogs { get; set; }
        
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
      }
    }
## startup.cs
    using Microsoft.EntityFrameworkCore;
    using [Project].Models;
    
    public void ConfigureServices(IServiceCollection services)
    {
        // Add framework services.
        services.AddMvc();
        services.AddDbContext<ApplicationDbContext>(options => 
            options.UseSqlServer(Configuration.GetConnectionString("Default")));
    }


# 自DB建 Model


## 使用T-SQL建DB
    CREATE DATABASE [MyBloggingDB];
    GO
    USE [MyBloggingDB];
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


## 透過 EF Core 自動產生 Model 類別

使用 dotnet ef dbcontext scaffold 產生 Model 用類別


    dotnet ef dbcontext scaffold "Server=.\;Database=Northwind;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer --schema employees --output-dir Models --context "NorthwindContext"


    dotnet ef dbcontext scaffold "Server=.\;Database=Northwind;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer --table employees --output-dir Models


    dotnet ef dbcontext scaffold "Server=localhost; Database=Northwind; user id=sa; password=Passw0rd" Microsoft.EntityFrameworkCore.SqlServer --schema employees --output-dir Models


    $ dotnet ef dbcontext scaffold "Server=localhost; Database=MyBloggingDB; user id=sa; password=Passw0rd" Microsoft.EntityFrameworkCore.SqlServer --output-dir Models


    lanJui at MacBook-Pro-2.local in [~/workspace/dotNET/Blogging]
    16:01:24 $ dotnet ef dbcontext scaffold "Server=localhost; Database=MyBloggingDB; user id=sa; password=Passw0rd" Microsoft.EntityFrameworkCore.SqlServer --output-dir Models
    
    Build succeeded.
        0 Warning(s)
        0 Error(s)
    
    Time Elapsed 00:00:03.03



## 建立 API Controller
    $ dotnet aspnet-codegenerator controller -name BlogsController -m Blog -dc ApplicationDbContext -api -outDir Controllers
## 透過 EF Core 自動產生 Controller 類別及CRUD之Action
## Scaffold the BlogController
    $ dotnet aspnet-codegenerator controller -name BlogsController -m Blog -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries



    AlanJui at MacBook-Pro-2.local in [~/workspace/dotNET/Blogging]
    17:13:08 $ dotnet aspnet-codegenerator controller -name BlogsController -m Blog -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScri
    ptLibraries
    Command Line: controller -name BlogsController -m Blog -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries
    Microsoft (R) Build Engine version 15.1.1012.6693
    Copyright (C) Microsoft Corporation. All rights reserved.
    
    Building project ...
    Microsoft (R) Build Engine version 15.1.1012.6693
    Copyright (C) Microsoft Corporation. All rights reserved.
    
      Blogging -> /Users/AlanJui/workspace/dotNET/Blogging/bin/Debug/netcoreapp1.1/Blogging.dll
    
    Build succeeded.
        0 Warning(s)
        0 Error(s)
    
    Time Elapsed 00:00:05.60
    Command Line: --no-dispatch --port-number 54855 controller -name BlogsController -m Blog -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --refe
    renceScriptLibraries --dispatcher-version 1.0.0-rtm-10308
    Finding the generator 'controller'...
    Running the generator 'controller'...
    Attempting to compile the application in memory
    Attempting to figure out the EntityFramework metadata for the model and DbContext: Blog
    Added Controller : /Controllers/BlogsController.cs
    Added View : /Views/Blogs/Create.cshtml
    Added View : /Views/Blogs/Edit.cshtml
    Added View : /Views/Blogs/Details.cshtml
    Added View : /Views/Blogs/Delete.cshtml
    Added View : /Views/Blogs/Index.cshtml
    Added additional file :Views/Shared/_ValidationScriptsPartial.cshtml
    RunTime 00:00:14.31



## Add Student Controller
    $ dotnet aspnet-codegenerator controller -name StudentsController -m Student -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries



    AlanJui at MacBook-Pro-2.local in [~/workspace/dotNET/ContosoUniversity]  on git:master ✗  bdb3326 "完成 HomeController 的 Index Action"
    21:03:37 $ dotnet aspnet-codegenerator controller -name StudentsController -m Student -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries
    Command Line: controller -name StudentsController -m Student -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries
    Microsoft (R) Build Engine version 15.1.1012.6693
    Copyright (C) Microsoft Corporation. All rights reserved.
    
    Building project ...
    Microsoft (R) Build Engine version 15.1.1012.6693
    Copyright (C) Microsoft Corporation. All rights reserved.
    
      ContosoUniversity -> /Users/AlanJui/workspace/dotNET/ContosoUniversity/bin/Debug/netcoreapp1.1/ContosoUniversity.dll
    
    Build succeeded.
        0 Warning(s)
        0 Error(s)
    
    Time Elapsed 00:00:04.09
    Command Line: --no-dispatch --port-number 60101 controller -name StudentsController -m Student -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries --dispatcher-version 1.0.0-rtm-10308
    Finding the generator 'controller'...
    Running the generator 'controller'...
    Attempting to compile the application in memory
    Attempting to figure out the EntityFramework metadata for the model and DbContext: Student
    Added Controller : /Controllers/StudentsController.cs
    Added View : /Views/Students/Create.cshtml
    Added View : /Views/Students/Edit.cshtml
    Added View : /Views/Students/Details.cshtml
    Added View : /Views/Students/Delete.cshtml
    Added View : /Views/Students/Index.cshtml
    Added additional file :Views/Shared/_ValidationScriptsPartial.cshtml
    RunTime 00:00:13.18


## Add Courses Controller
    $ dotnet aspnet-codegenerator controller -name CoursesController -m Course -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries


    AlanJui at MacBook-Pro-2.local in [~/workspace/dotNET/ContosoUniversity]  on git:master ✗  bdb3326 "完成 HomeController 的 Index Action"
    21:40:44 $ dotnet aspnet-codegenerator controller -name CoursesController -m Course -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries
    Command Line: controller -name CoursesController -m Course -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries
    Microsoft (R) Build Engine version 15.1.1012.6693
    Copyright (C) Microsoft Corporation. All rights reserved.
    
    Building project ...
    Microsoft (R) Build Engine version 15.1.1012.6693
    Copyright (C) Microsoft Corporation. All rights reserved.
    
      ContosoUniversity -> /Users/AlanJui/workspace/dotNET/ContosoUniversity/bin/Debug/netcoreapp1.1/ContosoUniversity.dll
    
    Build succeeded.
        0 Warning(s)
        0 Error(s)
    
    Time Elapsed 00:00:04.14
    Command Line: --no-dispatch --port-number 60283 controller -name CoursesController -m Course -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries --dispatcher-version 1.0.0-rtm-10308
    Finding the generator 'controller'...
    Running the generator 'controller'...
    Attempting to compile the application in memory
    Attempting to figure out the EntityFramework metadata for the model and DbContext: Course
    Added Controller : /Controllers/CoursesController.cs
    Added View : /Views/Courses/Create.cshtml
    Added View : /Views/Courses/Edit.cshtml
    Added View : /Views/Courses/Details.cshtml
    Added View : /Views/Courses/Delete.cshtml
    Added View : /Views/Courses/Index.cshtml
    RunTime 00:00:13.59
    


## Add Enrollment Controller
    $ dotnet aspnet-codegenerator controller -name EnrollmentsController -m Enrollment -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries


    AlanJui at MacBook-Pro-2.local in [~/workspace/dotNET/ContosoUniversity]  on git:master ✗  bdb3326 "完成 HomeController 的 Index Action"
    21:52:53 $ dotnet aspnet-codegenerator controller -name EnrollmentsController -m Enrollment -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries
    Command Line: controller -name EnrollmentsController -m Enrollment -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries
    Microsoft (R) Build Engine version 15.1.1012.6693
    Copyright (C) Microsoft Corporation. All rights reserved.
    
    Building project ...
    Microsoft (R) Build Engine version 15.1.1012.6693
    Copyright (C) Microsoft Corporation. All rights reserved.
    
      ContosoUniversity -> /Users/AlanJui/workspace/dotNET/ContosoUniversity/bin/Debug/netcoreapp1.1/ContosoUniversity.dll
    
    Build succeeded.
        0 Warning(s)
        0 Error(s)
    
    Time Elapsed 00:00:04.16
    Command Line: --no-dispatch --port-number 60360 controller -name EnrollmentsController -m Enrollment -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries --dispatcher-version 1.0.0-rtm-10308
    Finding the generator 'controller'...
    Running the generator 'controller'...
    Attempting to compile the application in memory
    Attempting to figure out the EntityFramework metadata for the model and DbContext: Enrollment
    Added Controller : /Controllers/EnrollmentsController.cs
    Added View : /Views/Enrollments/Create.cshtml
    Added View : /Views/Enrollments/Edit.cshtml
    Added View : /Views/Enrollments/Details.cshtml
    Added View : /Views/Enrollments/Delete.cshtml
    Added View : /Views/Enrollments/Index.cshtml
    RunTime 00:00:13.41
    


···




# dotnet指令集

# 專案設定
## 在 [Project].csproj 安裝  CLI Tools 、EF Core 及 SQL Server : 
    <Project Sdk="Microsoft.NET.Sdk.Web">
    
      <PropertyGroup>
        <TargetFramework>netcoreapp1.1.2</TargetFramework>
      </PropertyGroup>
    
      <ItemGroup>
        <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="1.0.1"/>
        <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="1.0.1"/>
        <DotNetCliToolReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Tools" Version="1.0.1"/>
      </ItemGroup>
    
    </Project>  


    $ dotnet add package Microsoft.EntityFrameworkCore.SqlServer
    $ dotnet add package Microsoft.EntityFrameworkCore.SqlServer.Design
    $ dotnet add package Microsoft.EntityFrameworkCore.Design
    $ dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
    
    $ dotnet restore 



    dotnet add package Microsoft.EntityFrameworkCore.SqlServer
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer.Design
    dotnet add package Microsoft.EntityFrameworkCore.Design
    dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design


**AppDbContext.cs**


    using System;
    using Microsoft.EntityFrameworkCore;
    
    namespace <Project>.Models
    {
      public class AppDbContext : DbContext
      {
    
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }
      }
    }



## startup.cs
    using Microsoft.EntityFrameworkCore;
    using [Project].Models;
    
    ......
    
    public void ConfigureServices(IServiceCollection services)
    {
        // Add framework services.
        services.AddMvc();
        
        services.AddDbContext<AppDbContext>(options => 
            options.UseSqlServer(Configuration.GetConnectionString("Default")));
    }




# 指令使用

**安裝 NuGet 套件**


    $ dotnet add package <Package>


**透過Model產生DB**


1. ef migrations
    $ dotnet ef migrations add InitialCreate


2. ef database update
    $ dotnet ef database update


    <Project Sdk="Microsoft.NET.Sdk.Web">
      <PropertyGroup>
        <TargetFramework>netcoreapp1.1.2</TargetFramework>
      </PropertyGroup>
      <ItemGroup>
        <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="1.0.1" />
        <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="1.0.1" />
        <DotNetCliToolReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Tools" Version="1.0.1" />
      </ItemGroup>
      <ItemGroup>
        <PackageReference Include="Microsoft.AspNetCore" Version="1.1.2" />
        <PackageReference Include="Microsoft.AspNetCore.Mvc" Version="1.1.3" />
        <PackageReference Include="Microsoft.AspNetCore.StaticFiles" Version="1.1.2" />
        <PackageReference Include="Microsoft.EntityFrameworkCore" Version="1.1.2" />
        <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="1.1.2" />
        <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="1.1.2" />
        <PackageReference Include="Microsoft.Extensions.Logging.Debug" Version="1.1.2" />
        <PackageReference Include="Microsoft.VisualStudio.Web.BrowserLink" Version="1.1.2" />
      </ItemGroup>
    </Project>


**透過 DB 產生 Model 類別**

使用 dbcontext scaffold 產生 Model 類別

    $ dotnet ef dbcontext scaffold "Server=localhost; Database=MyDatabase; user id=sa; password=Passw0rd" Microsoft.EntityFrameworkCore.SqlServer --output-dir Models


**建立 API Controller**


    $ dotnet aspnet-codegenerator controller -name BlogsController -m Blog -dc AppDbContext -api -outDir Controllers


**自動產生 Controller 類別及其CRUD Action**

## Scaffold the BlogController
    $ dotnet aspnet-codegenerator controller -name BlogsController -m Blog -dc ApplicationDbContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries




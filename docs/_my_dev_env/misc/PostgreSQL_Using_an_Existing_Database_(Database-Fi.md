# PostgreSQL Using an Existing Database (Database-First)

1. 建立 ASP.NET Core MVC Web
    $ mkdir pgSQL && cd $_
    $ dotnet new mvc

 2. 設定 .csproj

    <Project Sdk="Microsoft.NET.Sdk.Web">
      <PropertyGroup>
        <TargetFramework>netcoreapp1.1</TargetFramework>
      </PropertyGroup>
      <ItemGroup>
        <PackageReference Include="Microsoft.AspNetCore" Version="1.1.2" />
        <PackageReference Include="Microsoft.AspNetCore.Mvc" Version="1.1.3" />
        <PackageReference Include="Microsoft.AspNetCore.StaticFiles" Version="1.1.2" />
        <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="1.1.2" />
        <PackageReference Include="Microsoft.Extensions.Logging.Debug" Version="1.1.2" />
        <PackageReference Include="Microsoft.VisualStudio.Web.BrowserLink" Version="1.1.2" />
        <PackageReference Include="Npgsql.EntityFrameworkCore.PostgreSQL" Version="1.1.0" />
        <PackageReference Include="Npgsql.EntityFrameworkCore.PostgreSQL.Design" Version="1.1.0" />
        <PackageReference Include="Microsoft.EntityFrameworkCore" Version="1.1.2" />
      </ItemGroup>
      
      <ItemGroup>
        <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="1.0.1" />
      </ItemGroup>
    </Project>

安裝 Package

    $ dotnet restore


3. 透過 EF Core 產生 Model 類別程式碼
    $ dotnet ef dbcontext scaffold "Host=localhost;Database=Blogging;Username=postgres;Password=ChingHai99@" Npgsql.EntityFrameworkCore.PostgreSQL -o Models


4. 修改 Db Context
    using System;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    
    ......
    
    public BloggingContext(DbContextOptions<BloggingContext> options)
                : base(options)
            { } 
            
    // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            // {
            //     #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            //     optionsBuilder.UseNpgsql(@"Host=localhost;Database=Blogging;Username=postgres;Password=ChingHai99@");
            // }        



5. 修改 appsettins.json
    {
      "ConnectionStrings": {
        "DefaultConnection": "Host=localhost;Database=Blogging;Username=postgres;Password=ChingHai99@"
      },
      ......
    }


6. 修改 Starup 類別，加添 ConfigureServices
    ......
    using Microsoft.EntityFrameworkCore;
    using pgSQL.Models;
    
    public void ConfigureServices(IServiceCollection services)
            {
                // Add framework services.
                ......
                services.AddDbContext<BloggingContext>(options =>
                    options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));
            }


7. 新增 Controller 類別
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using pgSQL.Models;
    using System.Linq;
    namespace pgSQL.Controllers
    {
      [Route("/api/[controller]")]
      public class UserController : Controller {
        private readonly BloggingContext _context;
        public UserController(BloggingContext context)
        {
          _context = context;
        }
        [HttpGet]
        public IEnumerable<User> GetAll()
        {
          return _context.Users.ToList();
        }
        private List<User> NewMethod()
        {
          return _context.Users.ToList();
        }
      }
    }
    
# Migration


## DB First Migration

dotnet ef migrations add InitialMigration

    AlanJui at MacBook-Pro-2.local in [~/workspace/VS2017/pgSQL]  on git:master ✗  5ba705a "Initialize Project"
    11:03:38 $ dotnet ef migrations add InitialMigration
    
    Build succeeded.
        0 Warning(s)
        0 Error(s)
    
    Time Elapsed 00:00:05.10
    Done. To undo this action, use 'ef migrations remove'



## Code First Migration

**InitialModel**

    $ dotnet ef migrations add InitialModel


    AlanJui at MacBook-Pro-2.local in [~/workspace/PostgreSQL/AspNetCoreSpa]  on git:master ✗  336052b "初步加入 Domain Model"
    18:12:46 $ dotnet ef migrations add InitialModel
    
    Build succeeded.
        0 Warning(s)
        0 Error(s)
    
    Time Elapsed 00:00:04.92
    Done. To undo this action, use 'ef migrations remove'




    AlanJui at MacBook-Pro-2.local in [~/workspace/PostgreSQL/AspNetCoreSpa]  on git:master ✗  336052b "初步加入 Domain Model"
    18:13:27 $ dotnet ef migrations add --help
    
    
    Usage: dotnet ef migrations add \[arguments\] [options]
    
    Arguments:
      <NAME>  The name of the migration.
    
    Options:
      -o|--output-dir <PATH>                 The directory (and sub-namespace) to use. Paths are relative to the project directory. Defaults to "Migrations".
      --json                                 Show JSON output.
      -c|--context <DBCONTEXT>               The DbContext to use.
      -p|--project <PROJECT>                 The project to use.
      -s|--startup-project <PROJECT>         The startup project to use.
      --framework <FRAMEWORK>                The target framework.
      --configuration <CONFIGURATION>        The configuration to use.
      --msbuildprojectextensionspath <PATH>  The MSBuild project extensions path. Defaults to "obj".
      -e|--environment <NAME>                The environment to use. Defaults to "Development".
      -h|--help                              Show help information
      -v|--verbose                           Show verbose output.
      --no-color                             Don't colorize output.
      --prefix-output                        Prefix output with level.

**Remove Migrations**

    $ dotnet ef migrations remove

**Update Database**

    $ dotnet ef database update


    $ dotnet ef database update 0

**Apply Constraints**

    $ dotnet ef migrations add ApplyConstraints

**Seed Database**

    $ dotnet ef migrations add SeedDatabase



    using System;
    using System.Collections.Generic;
    using Microsoft.EntityFrameworkCore.Migrations;
    namespace AspNetCoreSpa.Migrations
    {
        public partial class SeedDatabase : Migration
        {
            protected override void Up(MigrationBuilder migrationBuilder)
            {
                migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Make1')");
                migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Make2')");
                migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Make3')");
                
                migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Make1-ModelA', (SELECT ID FROM Makes WHERE Name = 'Make1'))");
                migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Make1-ModelB', (SELECT ID FROM Makes WHERE Name = 'Make1'))");
                migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Make1-ModelC', (SELECT ID FROM Makes WHERE Name = 'Make1'))");
                
                migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Make2-ModelA', (SELECT ID FROM Makes WHERE Name = 'Make2'))");
                migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Make2-ModelB', (SELECT ID FROM Makes WHERE Name = 'Make2'))");
                migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Make2-ModelC', (SELECT ID FROM Makes WHERE Name = 'Make2'))");
                
                migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Make3-ModelA', (SELECT ID FROM Makes WHERE Name = 'Make3'))");
                migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Make3-ModelB', (SELECT ID FROM Makes WHERE Name = 'Make3'))");
                migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Make3-ModelC', (SELECT ID FROM Makes WHERE Name = 'Make3'))");
            }
            protected override void Down(MigrationBuilder migrationBuilder)
            {
                migrationBuilder.Sql("DELETE FROM Makes");
            }
        }
    }
    


Fro PostgreSQL:

    using System;
    using System.Collections.Generic;
    using Microsoft.EntityFrameworkCore.Migrations;
    namespace AspNetCoreSpa.Migrations
    {
        public partial class SeedDatabase : Migration
        {
            protected override void Up(MigrationBuilder migrationBuilder)
            {
                migrationBuilder.Sql("INSERT INTO public.makes (name) VALUES ('Make1')");
                migrationBuilder.Sql("INSERT INTO public.makes (name) VALUES ('Make2')");
                migrationBuilder.Sql("INSERT INTO public.makes (name) VALUES ('Make3')");
                
                migrationBuilder.Sql("INSERT INTO public.models (name, \"makeID\") VALUES ('Make1-ModelA', (SELECT id FROM public.makes WHERE name = 'Make1'))");
                migrationBuilder.Sql("INSERT INTO public.models (name, \"makeID\") VALUES ('Make1-ModelB', (SELECT id FROM public.makes WHERE name = 'Make1'))");
                migrationBuilder.Sql("INSERT INTO public.models (name, \"makeID\") VALUES ('Make1-ModelC', (SELECT id FROM public.makes WHERE name = 'Make1'))");
                
                migrationBuilder.Sql("INSERT INTO public.models (name, \"makeID\") VALUES ('Make2-ModelA', (SELECT id FROM public.makes WHERE name = 'Make2'))");
                migrationBuilder.Sql("INSERT INTO public.models (name, \"makeID\") VALUES ('Make2-ModelB', (SELECT id FROM public.makes WHERE name = 'Make2'))");
                migrationBuilder.Sql("INSERT INTO public.models (name, \"makeID\") VALUES ('Make2-ModelC', (SELECT id FROM public.makes WHERE name = 'Make2'))");
                
                migrationBuilder.Sql("INSERT INTO public.models (name, \"makeID\") VALUES ('Make3-ModelA', (SELECT id FROM public.makes WHERE name = 'Make3'))");
                migrationBuilder.Sql("INSERT INTO public.models (name, \"makeID\") VALUES ('Make3-ModelB', (SELECT id FROM public.makes WHERE name = 'Make3'))");
                migrationBuilder.Sql("INSERT INTO public.models (name, \"makeID\") VALUES ('Make3-ModelC', (SELECT id FROM public.makes WHERE name = 'Make3'))"); 
            }
            
            protected override void Down(MigrationBuilder migrationBuilder)
            {
                migrationBuilder.Sql("DELETE FROM public.makes WHERE name IN ('Make1', 'Make2', 'Make3')");
            }
        }
    }


Create Main Bundle for Client Site

    $ webpack --config webpack.config.vendor.js
    $ webpack


Resource and Auto Mapper

    $ dotnet add package AutoMapper
    $ dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection --version 1.2.0


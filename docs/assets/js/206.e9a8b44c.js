(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{489:function(e,n,a){"use strict";a.r(n);var t=a(10),o=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"postgresql-using-an-existing-database-database-first"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-using-an-existing-database-database-first"}},[e._v("#")]),e._v(" PostgreSQL Using an Existing Database (Database-First)")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("建立 ASP.NET Core MVC Web\n$ mkdir pgSQL && cd $_\n$ dotnet new mvc")])]),e._v(" "),n("li",[n("p",[e._v("設定 .csproj")]),e._v(" "),n("Project",{attrs:{Sdk:"Microsoft.NET.Sdk.Web"}},[n("PropertyGroup",[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("<TargetFramework>netcoreapp1.1</TargetFramework>\n")])])])]),e._v(" "),n("ItemGroup",[n("PackageReference",{attrs:{Include:"Microsoft.AspNetCore",Version:"1.1.2"}}),e._v(" "),n("PackageReference",{attrs:{Include:"Microsoft.AspNetCore.Mvc",Version:"1.1.3"}}),e._v(" "),n("PackageReference",{attrs:{Include:"Microsoft.AspNetCore.StaticFiles",Version:"1.1.2"}}),e._v(" "),n("PackageReference",{attrs:{Include:"Microsoft.EntityFrameworkCore.Design",Version:"1.1.2"}}),e._v(" "),n("PackageReference",{attrs:{Include:"Microsoft.Extensions.Logging.Debug",Version:"1.1.2"}}),e._v(" "),n("PackageReference",{attrs:{Include:"Microsoft.VisualStudio.Web.BrowserLink",Version:"1.1.2"}}),e._v(" "),n("PackageReference",{attrs:{Include:"Npgsql.EntityFrameworkCore.PostgreSQL",Version:"1.1.0"}}),e._v(" "),n("PackageReference",{attrs:{Include:"Npgsql.EntityFrameworkCore.PostgreSQL.Design",Version:"1.1.0"}}),e._v(" "),n("PackageReference",{attrs:{Include:"Microsoft.EntityFrameworkCore",Version:"1.1.2"}})],1),e._v(" "),n("ItemGroup",[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="1.0.1" />\n')])])])])],1)],1)]),e._v(" "),n("p",[e._v("安裝 Package")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ dotnet restore\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[e._v('透過 EF Core 產生 Model 類別程式碼\n$ dotnet ef dbcontext scaffold "Host=localhost;Database=Blogging;Username=postgres;Password=ChingHai99@" Npgsql.EntityFrameworkCore.PostgreSQL -o Models')])]),e._v(" "),n("li",[n("p",[e._v("修改 Db Context\nusing System;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata;")]),e._v(" "),n("p",[e._v("......")]),e._v(" "),n("p",[e._v("public BloggingContext(DbContextOptions"),n("BloggingContext",[e._v(" options)\n: base(options)\n{ }")])],1),e._v(" "),n("p",[e._v('// protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n// {\n//     #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.\n//     optionsBuilder.UseNpgsql(@"Host=localhost;Database=Blogging;Username=postgres;Password=ChingHai99@");\n// }')])]),e._v(" "),n("li",[n("p",[e._v('修改 appsettins.json\n{\n"ConnectionStrings": {\n"DefaultConnection": "Host=localhost;Database=Blogging;Username=postgres;Password=ChingHai99@"\n},\n......\n}')])]),e._v(" "),n("li",[n("p",[e._v("修改 Starup 類別，加添 ConfigureServices\n......\nusing Microsoft.EntityFrameworkCore;\nusing pgSQL.Models;")]),e._v(" "),n("p",[e._v("public void ConfigureServices(IServiceCollection services)\n{\n// Add framework services.\n......\nservices.AddDbContext"),n("BloggingContext",[e._v('(options =>\noptions.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));\n}')])],1)]),e._v(" "),n("li",[n("p",[e._v('新增 Controller 類別\nusing System.Collections.Generic;\nusing Microsoft.AspNetCore.Mvc;\nusing pgSQL.Models;\nusing System.Linq;\nnamespace pgSQL.Controllers\n{\n[Route("/api/[controller]")]\npublic class UserController : Controller {\nprivate readonly BloggingContext _context;\npublic UserController(BloggingContext context)\n{\n_context = context;\n}\n[HttpGet]\npublic IEnumerable'),n("User",[e._v(" GetAll()\n{\nreturn _context.Users.ToList();\n}\nprivate List"),n("User",[e._v(" NewMethod()\n{\nreturn _context.Users.ToList();\n}\n}\n}")])],1)],1)])]),e._v(" "),n("h1",{attrs:{id:"migration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#migration"}},[e._v("#")]),e._v(" Migration")]),e._v(" "),n("h2",{attrs:{id:"db-first-migration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#db-first-migration"}},[e._v("#")]),e._v(" DB First Migration")]),e._v(" "),n("p",[e._v("dotnet ef migrations add InitialMigration")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("AlanJui at MacBook-Pro-2.local in [~/workspace/VS2017/pgSQL]  on git:master ✗  5ba705a \"Initialize Project\"\n11:03:38 $ dotnet ef migrations add InitialMigration\n\nBuild succeeded.\n    0 Warning(s)\n    0 Error(s)\n\nTime Elapsed 00:00:05.10\nDone. To undo this action, use 'ef migrations remove'\n")])])]),n("h2",{attrs:{id:"code-first-migration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code-first-migration"}},[e._v("#")]),e._v(" Code First Migration")]),e._v(" "),n("p",[n("strong",[e._v("InitialModel")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ dotnet ef migrations add InitialModel\n\n\nAlanJui at MacBook-Pro-2.local in [~/workspace/PostgreSQL/AspNetCoreSpa]  on git:master ✗  336052b "初步加入 Domain Model"\n18:12:46 $ dotnet ef migrations add InitialModel\n\nBuild succeeded.\n    0 Warning(s)\n    0 Error(s)\n\nTime Elapsed 00:00:04.92\nDone. To undo this action, use \'ef migrations remove\'\n\n\n\n\nAlanJui at MacBook-Pro-2.local in [~/workspace/PostgreSQL/AspNetCoreSpa]  on git:master ✗  336052b "初步加入 Domain Model"\n18:13:27 $ dotnet ef migrations add --help\n\n\nUsage: dotnet ef migrations add \\[arguments\\] [options]\n\nArguments:\n  <NAME>  The name of the migration.\n\nOptions:\n  -o|--output-dir <PATH>                 The directory (and sub-namespace) to use. Paths are relative to the project directory. Defaults to "Migrations".\n  --json                                 Show JSON output.\n  -c|--context <DBCONTEXT>               The DbContext to use.\n  -p|--project <PROJECT>                 The project to use.\n  -s|--startup-project <PROJECT>         The startup project to use.\n  --framework <FRAMEWORK>                The target framework.\n  --configuration <CONFIGURATION>        The configuration to use.\n  --msbuildprojectextensionspath <PATH>  The MSBuild project extensions path. Defaults to "obj".\n  -e|--environment <NAME>                The environment to use. Defaults to "Development".\n  -h|--help                              Show help information\n  -v|--verbose                           Show verbose output.\n  --no-color                             Don\'t colorize output.\n  --prefix-output                        Prefix output with level.\n')])])]),n("p",[n("strong",[e._v("Remove Migrations")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ dotnet ef migrations remove\n")])])]),n("p",[n("strong",[e._v("Update Database")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ dotnet ef database update\n\n\n$ dotnet ef database update 0\n")])])]),n("p",[n("strong",[e._v("Apply Constraints")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ dotnet ef migrations add ApplyConstraints\n")])])]),n("p",[n("strong",[e._v("Seed Database")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ dotnet ef migrations add SeedDatabase\n\n\n\nusing System;\nusing System.Collections.Generic;\nusing Microsoft.EntityFrameworkCore.Migrations;\nnamespace AspNetCoreSpa.Migrations\n{\n    public partial class SeedDatabase : Migration\n    {\n        protected override void Up(MigrationBuilder migrationBuilder)\n        {\n            migrationBuilder.Sql(\"INSERT INTO Makes (Name) VALUES ('Make1')\");\n            migrationBuilder.Sql(\"INSERT INTO Makes (Name) VALUES ('Make2')\");\n            migrationBuilder.Sql(\"INSERT INTO Makes (Name) VALUES ('Make3')\");\n            \n            migrationBuilder.Sql(\"INSERT INTO Models (Name, MakeId) VALUES ('Make1-ModelA', (SELECT ID FROM Makes WHERE Name = 'Make1'))\");\n            migrationBuilder.Sql(\"INSERT INTO Models (Name, MakeId) VALUES ('Make1-ModelB', (SELECT ID FROM Makes WHERE Name = 'Make1'))\");\n            migrationBuilder.Sql(\"INSERT INTO Models (Name, MakeId) VALUES ('Make1-ModelC', (SELECT ID FROM Makes WHERE Name = 'Make1'))\");\n            \n            migrationBuilder.Sql(\"INSERT INTO Models (Name, MakeId) VALUES ('Make2-ModelA', (SELECT ID FROM Makes WHERE Name = 'Make2'))\");\n            migrationBuilder.Sql(\"INSERT INTO Models (Name, MakeId) VALUES ('Make2-ModelB', (SELECT ID FROM Makes WHERE Name = 'Make2'))\");\n            migrationBuilder.Sql(\"INSERT INTO Models (Name, MakeId) VALUES ('Make2-ModelC', (SELECT ID FROM Makes WHERE Name = 'Make2'))\");\n            \n            migrationBuilder.Sql(\"INSERT INTO Models (Name, MakeId) VALUES ('Make3-ModelA', (SELECT ID FROM Makes WHERE Name = 'Make3'))\");\n            migrationBuilder.Sql(\"INSERT INTO Models (Name, MakeId) VALUES ('Make3-ModelB', (SELECT ID FROM Makes WHERE Name = 'Make3'))\");\n            migrationBuilder.Sql(\"INSERT INTO Models (Name, MakeId) VALUES ('Make3-ModelC', (SELECT ID FROM Makes WHERE Name = 'Make3'))\");\n        }\n        protected override void Down(MigrationBuilder migrationBuilder)\n        {\n            migrationBuilder.Sql(\"DELETE FROM Makes\");\n        }\n    }\n}\n")])])]),n("p",[e._v("Fro PostgreSQL:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("using System;\nusing System.Collections.Generic;\nusing Microsoft.EntityFrameworkCore.Migrations;\nnamespace AspNetCoreSpa.Migrations\n{\n    public partial class SeedDatabase : Migration\n    {\n        protected override void Up(MigrationBuilder migrationBuilder)\n        {\n            migrationBuilder.Sql(\"INSERT INTO public.makes (name) VALUES ('Make1')\");\n            migrationBuilder.Sql(\"INSERT INTO public.makes (name) VALUES ('Make2')\");\n            migrationBuilder.Sql(\"INSERT INTO public.makes (name) VALUES ('Make3')\");\n            \n            migrationBuilder.Sql(\"INSERT INTO public.models (name, \\\"makeID\\\") VALUES ('Make1-ModelA', (SELECT id FROM public.makes WHERE name = 'Make1'))\");\n            migrationBuilder.Sql(\"INSERT INTO public.models (name, \\\"makeID\\\") VALUES ('Make1-ModelB', (SELECT id FROM public.makes WHERE name = 'Make1'))\");\n            migrationBuilder.Sql(\"INSERT INTO public.models (name, \\\"makeID\\\") VALUES ('Make1-ModelC', (SELECT id FROM public.makes WHERE name = 'Make1'))\");\n            \n            migrationBuilder.Sql(\"INSERT INTO public.models (name, \\\"makeID\\\") VALUES ('Make2-ModelA', (SELECT id FROM public.makes WHERE name = 'Make2'))\");\n            migrationBuilder.Sql(\"INSERT INTO public.models (name, \\\"makeID\\\") VALUES ('Make2-ModelB', (SELECT id FROM public.makes WHERE name = 'Make2'))\");\n            migrationBuilder.Sql(\"INSERT INTO public.models (name, \\\"makeID\\\") VALUES ('Make2-ModelC', (SELECT id FROM public.makes WHERE name = 'Make2'))\");\n            \n            migrationBuilder.Sql(\"INSERT INTO public.models (name, \\\"makeID\\\") VALUES ('Make3-ModelA', (SELECT id FROM public.makes WHERE name = 'Make3'))\");\n            migrationBuilder.Sql(\"INSERT INTO public.models (name, \\\"makeID\\\") VALUES ('Make3-ModelB', (SELECT id FROM public.makes WHERE name = 'Make3'))\");\n            migrationBuilder.Sql(\"INSERT INTO public.models (name, \\\"makeID\\\") VALUES ('Make3-ModelC', (SELECT id FROM public.makes WHERE name = 'Make3'))\"); \n        }\n        \n        protected override void Down(MigrationBuilder migrationBuilder)\n        {\n            migrationBuilder.Sql(\"DELETE FROM public.makes WHERE name IN ('Make1', 'Make2', 'Make3')\");\n        }\n    }\n}\n")])])]),n("p",[e._v("Create Main Bundle for Client Site")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ webpack --config webpack.config.vendor.js\n$ webpack\n")])])]),n("p",[e._v("Resource and Auto Mapper")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ dotnet add package AutoMapper\n$ dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection --version 1.2.0\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{542:function(e,a,n){"use strict";n.r(a);var s=n(10),i=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"將資料庫匯入sql-server-for-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#將資料庫匯入sql-server-for-linux"}},[e._v("#")]),e._v(" 將資料庫匯入SQL Server for Linux")]),e._v(" "),a("p",[e._v("將原本存放在 Windows  平台的 SQL Server 資料，匯出並匯入 SQL Server for Linux 版本。")]),e._v(" "),a("ol",[a("li",[e._v("將 SQL Server 的「資料庫」匯出。")])]),e._v(" "),a("p",[e._v("Export a database with SSMS")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Start SSMS by typing "),a("strong",[e._v("Microsoft SQL Server Management Studio")]),e._v(" in the Windows search box, and then click the desktop app.\n"),a("img",{attrs:{src:"https://docs.microsoft.com/en-us/sql/linux/media/sql-server-linux-develop-use-ssms/ssms.png",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("Connect to your source database in Object Explorer. The source database can be in Microsoft SQL Server running on-premises or in the cloud, on Linux, Windows or Docker and Azure SQL Database or Azure SQL Data Warehouse.")])]),e._v(" "),a("li",[a("p",[e._v("Right-click the source database in the Object Explorer, point to "),a("strong",[e._v("Tasks")]),e._v(", and click "),a("strong",[e._v("Export Data-Tier Application...")])])]),e._v(" "),a("li",[a("p",[e._v("In the export wizard, click "),a("strong",[e._v("Next")]),e._v(", and then on the "),a("strong",[e._v("Settings")]),e._v(" tab, configure the export to save the BACPAC file to either a local disk location or to an Azure blob.")])]),e._v(" "),a("li",[a("p",[e._v("By default, all objects in the database are exported. Click the "),a("strong",[e._v("Advanced tab")]),e._v(" and choose the database objects that you wish to export.")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("strong",[e._v("Next")]),e._v(" and then click "),a("strong",[e._v("Finish")]),e._v(".")])])]),e._v(" "),a("p",[e._v("The *.BACPAC file is successfully created at the location you chose and you are ready to import it into a target database.")]),e._v(" "),a("p",[e._v("REF URL: https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-migrate-ssms")]),e._v(" "),a("hr"),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("將「資料庫」匯入。")])]),e._v(" "),a("h2",{attrs:{id:"import-a-database-with-ssms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-a-database-with-ssms"}},[e._v("#")]),e._v(" Import a database with SSMS")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Start SSMS by typing "),a("strong",[e._v("Microsoft SQL Server Management Studio")]),e._v(" in the Windows search box, and then click the desktop app.\n"),a("img",{attrs:{src:"https://docs.microsoft.com/en-us/sql/linux/media/sql-server-linux-develop-use-ssms/ssms.png",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("Connect to your target server in Object Explorer. The target server can be Microsoft SQL Server running on-premises or in the cloud, on Linux, Windows or Docker and Azure SQL Database or Azure SQL Data Warehouse.")])]),e._v(" "),a("li",[a("p",[e._v("Right-click the "),a("strong",[e._v("Databases")]),e._v(" folder in the Object Explorer and click "),a("strong",[e._v("Import Data-tier Application...")])])]),e._v(" "),a("li",[a("p",[e._v("To create the database in your target server, specify a BACPAC file from your local disk or select the Azure storage account and container to which you uploaded your BACPAC file.")])]),e._v(" "),a("li",[a("p",[e._v("Provide the New database name for the database. If you are importing a database on Azure SQL Database, set the Edition of Microsoft Azure SQL Database (service tier), Maximum database size, and Service Objective (performance level).")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("strong",[e._v("Next")]),e._v(" and then click "),a("strong",[e._v("Finish")]),e._v(" to import the BACPAC file into a new database in your target server.")])]),e._v(" "),a("li",[a("ul",[a("li")])])]),e._v(" "),a("p",[e._v("The *.BACPAC file is imported to create a new database in the target server you specified.")]),e._v(" "),a("hr"),e._v(" "),a("ol",[a("li",[e._v("啟動 SQL Bash Shell")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ docker exec -ti ms-sql-server /bin/bash\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("將「資料庫檔案」自「主機（Host）」複製到「容器（Container）」中")])]),e._v(" "),a("p",[e._v("指令格式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("docker cp <containerId>:/file/path/within/container /host/path/target\n")])])]),a("p",[e._v("操作範例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ docker cp ~/Northwind.bacpac  ms-sql-server:/home \n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("將資料庫匯入到 SQL Server for Linux")])]),e._v(" "),a("p",[e._v("指令格式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("/opt/mssql/bin/sqlpackage /a:Import /tsn:tcp:<your_server> /tdn:<your_database> /tu:<username> /tp:<password> /sf:</path/to/your/file.bacpac>\n")])])]),a("p",[e._v("操作範例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ /opt/mssql/bin/sqlpackage /a:Import /tsn:tcp:127.0.0.1 /tdn:Northwind /tu:sa /tp:Passw0rd /sf:/home/Northwind.bacpac\n\n\n\n$ /opt/mssql/bin/sqlpackage /a:Export /ssn:tcp:127.0.0.1 /sdn:Northwind /su:sa /sp:Passw0rd /tf:/home/myNorthwind.bacpac \n\n\nroot@7a6830d6b2db:/# /opt/mssql/bin/sqlpackage /a:Export /ssn:tcp:127.0.0.1 /sdn:Northwind /su:sa /sp:Passw0rd /tf:/home/myNorthwind.bacpac\n\nThis is an evaluation version.  There are [134] days left in the evaluation period.\nConnecting to database 'Northwind' on server 'tcp:127.0.0.1'.\nExtracting schema\nExtracting schema from database\nResolving references in schema model\nValidating schema model\nValidating schema model for data package\nValidating schema\nExporting data from database\nExporting data\nProcessing Export.\nProcessing Table '[dbo].[CustomerCustomerDemo]'.\nProcessing Table '[dbo].[Suppliers]'.\nProcessing Table '[dbo].[Categories]'.\nProcessing Table '[dbo].[Territories]'.\nProcessing Table '[dbo].[EmployeeTerritories]'.\nProcessing Table '[dbo].[Employees]'.\nProcessing Table '[dbo].[Orders]'.\nProcessing Table '[dbo].[Order Details]'.\nProcessing Table '[dbo].[Products]'.\nProcessing Table '[dbo].[Customers]'.\nProcessing Table '[dbo].[CustomerDemographics]'.\nProcessing Table '[dbo].[Shippers]'.\nProcessing Table '[dbo].[Region]'.\nSuccessfully exported database and saved it to file 'C:\\home\\myNorthwind.bacpac'.\nroot@7a6830d6b2db:/#\n\n\nroot@7a6830d6b2db:/# /opt/mssql/bin/sqlpackage /a:Import /tsn:tcp:127.0.0.1 /tdn:Northwind /tu:sa /tp:Passw0rd /sf:/home/myNorthwind.bacpac\nThis is an evaluation version.  There are [134] days left in the evaluation period.\nImporting to database 'Northwind' on server 'tcp:127.0.0.1'.\nCreating deployment plan\nInitializing deployment\nVerifying deployment plan\nAnalyzing deployment plan\nImporting package schema and data into database\nUpdating database\nImporting data\nProcessing Import.\nDisabling indexes.\nDisabling index 'CategoryName'.\nDisabling index 'PK_CustomerCustomerDemo'.\nDisabling index 'PK_CustomerDemographics'.\nDisabling index 'City'.\nDisabling index 'CompanyName'.\nDisabling index 'PostalCode'.\nDisabling index 'Region'.\nDisabling index 'LastName'.\nDisabling index 'PostalCode'.\nDisabling index 'PK_EmployeeTerritories'.\nDisabling index 'OrderID'.\nDisabling index 'OrdersOrder_Details'.\nDisabling index 'ProductID'.\nDisabling index 'ProductsOrder_Details'.\nDisabling index 'CustomerID'.\nDisabling index 'CustomersOrders'.\nDisabling index 'EmployeeID'.\nDisabling index 'EmployeesOrders'.\nDisabling index 'OrderDate'.\nDisabling index 'ShippedDate'.\nDisabling index 'ShippersOrders'.\nDisabling index 'ShipPostalCode'.\nDisabling index 'CategoriesProducts'.\nDisabling index 'CategoryID'.\nDisabling index 'ProductName'.\nDisabling index 'SupplierID'.\nDisabling index 'SuppliersProducts'.\nDisabling index 'PK_Region'.\nDisabling index 'CompanyName'.\nDisabling index 'PostalCode'.\nDisabling index 'PK_Territories'.\nProcessing Table '[dbo].[Categories]'.\nProcessing Table '[dbo].[CustomerCustomerDemo]'.\nProcessing Table '[dbo].[CustomerDemographics]'.\nProcessing Table '[dbo].[Customers]'.\nProcessing Table '[dbo].[Employees]'.\nProcessing Table '[dbo].[EmployeeTerritories]'.\nProcessing Table '[dbo].[Order Details]'.\nProcessing Table '[dbo].[Orders]'.\nProcessing Table '[dbo].[Products]'.\nProcessing Table '[dbo].[Region]'.\nProcessing Table '[dbo].[Shippers]'.\nProcessing Table '[dbo].[Suppliers]'.\nProcessing Table '[dbo].[Territories]'.\nEnabling indexes.\nEnabling index 'CategoryName'.\nEnabling index 'PK_CustomerCustomerDemo'.\nEnabling index 'PK_CustomerDemographics'.\nEnabling index 'City'.\nEnabling index 'CompanyName'.\nEnabling index 'PostalCode'.\nEnabling index 'Region'.\nEnabling index 'LastName'.\nEnabling index 'PostalCode'.\nEnabling index 'PK_EmployeeTerritories'.\nEnabling index 'OrderID'.\nEnabling index 'OrdersOrder_Details'.\nEnabling index 'ProductID'.\nEnabling index 'ProductsOrder_Details'.\nEnabling index 'CustomerID'.\nEnabling index 'CustomersOrders'.\nEnabling index 'EmployeeID'.\nEnabling index 'EmployeesOrders'.\nEnabling index 'OrderDate'.\nEnabling index 'ShippedDate'.\nEnabling index 'ShippersOrders'.\nEnabling index 'ShipPostalCode'.\nEnabling index 'CategoriesProducts'.\nEnabling index 'CategoryID'.\nEnabling index 'ProductName'.\nEnabling index 'SupplierID'.\nEnabling index 'SuppliersProducts'.\nEnabling index 'PK_Region'.\nEnabling index 'CompanyName'.\nEnabling index 'PostalCode'.\nEnabling index 'PK_Territories'.\nSuccessfully imported database.\nroot@7a6830d6b2db:/#\n")])])]),a("hr"),e._v(" "),a("h1",{attrs:{id:"參考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考文章"}},[e._v("#")]),e._v(" 參考文章：")]),e._v(" "),a("h2",{attrs:{id:"export-a-database-schema-and-user-data-to-a-bacpac-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-a-database-schema-and-user-data-to-a-bacpac-file"}},[e._v("#")]),e._v(" Export a database (schema and user data) to a .BACPAC file")]),e._v(" "),a("p",[e._v("Use the following command to export database schema and user data to a .BACPAC file:\nbashCopy")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("/opt/mssql/bin/sqlpackage /a:Export /ssn:tcp:<your_server> /sdn:<your_database> /su:<username> /sp:<password> /tf:</path/to/your/file.bacpac> \n")])])]),a("h2",{attrs:{id:"import-a-database-schema-and-user-data-from-a-bacpac-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-a-database-schema-and-user-data-from-a-bacpac-file"}},[e._v("#")]),e._v(" Import a database (schema and user data) from a .BACPAC file")]),e._v(" "),a("p",[e._v("Use the following command to import database schema and user data from a .BACPAC file:\nbashCopy")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("/opt/mssql/bin/sqlpackage /a:Import /tsn:tcp:<your_server> /tdn:<your_database> /tu:<username> /tp:<password\n")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);
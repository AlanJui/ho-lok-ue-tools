# 將資料庫匯入SQL Server for Linux
將原本存放在 Windows  平台的 SQL Server 資料，匯出並匯入 SQL Server for Linux 版本。

 1. 將 SQL Server 的「資料庫」匯出。
 
 Export a database with SSMS

1. Start SSMS by typing **Microsoft SQL Server Management Studio** in the Windows search box, and then click the desktop app.
![](https://docs.microsoft.com/en-us/sql/linux/media/sql-server-linux-develop-use-ssms/ssms.png)

2. Connect to your source database in Object Explorer. The source database can be in Microsoft SQL Server running on-premises or in the cloud, on Linux, Windows or Docker and Azure SQL Database or Azure SQL Data Warehouse.
3. Right-click the source database in the Object Explorer, point to **Tasks**, and click **Export Data-Tier Application...**
4. In the export wizard, click **Next**, and then on the **Settings** tab, configure the export to save the BACPAC file to either a local disk location or to an Azure blob.
5. By default, all objects in the database are exported. Click the **Advanced tab** and choose the database objects that you wish to export.
6. Click **Next** and then click **Finish**.

The *.BACPAC file is successfully created at the location you chose and you are ready to import it into a target database.

REF URL: https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-migrate-ssms


----------

2. 將「資料庫」匯入。

## Import a database with SSMS
1. Start SSMS by typing **Microsoft SQL Server Management Studio** in the Windows search box, and then click the desktop app.
![](https://docs.microsoft.com/en-us/sql/linux/media/sql-server-linux-develop-use-ssms/ssms.png)

2. Connect to your target server in Object Explorer. The target server can be Microsoft SQL Server running on-premises or in the cloud, on Linux, Windows or Docker and Azure SQL Database or Azure SQL Data Warehouse.
3. Right-click the **Databases** folder in the Object Explorer and click **Import Data-tier Application...**
4. To create the database in your target server, specify a BACPAC file from your local disk or select the Azure storage account and container to which you uploaded your BACPAC file.
5. Provide the New database name for the database. If you are importing a database on Azure SQL Database, set the Edition of Microsoft Azure SQL Database (service tier), Maximum database size, and Service Objective (performance level).
6. Click **Next** and then click **Finish** to import the BACPAC file into a new database in your target server.
7. +

The *.BACPAC file is imported to create a new database in the target server you specified.


----------

 1.  啟動 SQL Bash Shell

    $ docker exec -ti ms-sql-server /bin/bash


2. 將「資料庫檔案」自「主機（Host）」複製到「容器（Container）」中

指令格式：

    docker cp <containerId>:/file/path/within/container /host/path/target

操作範例：

    $ docker cp ~/Northwind.bacpac  ms-sql-server:/home 


3. 將資料庫匯入到 SQL Server for Linux

指令格式：

    /opt/mssql/bin/sqlpackage /a:Import /tsn:tcp:<your_server> /tdn:<your_database> /tu:<username> /tp:<password> /sf:</path/to/your/file.bacpac>

操作範例：

    $ /opt/mssql/bin/sqlpackage /a:Import /tsn:tcp:127.0.0.1 /tdn:Northwind /tu:sa /tp:Passw0rd /sf:/home/Northwind.bacpac



    $ /opt/mssql/bin/sqlpackage /a:Export /ssn:tcp:127.0.0.1 /sdn:Northwind /su:sa /sp:Passw0rd /tf:/home/myNorthwind.bacpac 


    root@7a6830d6b2db:/# /opt/mssql/bin/sqlpackage /a:Export /ssn:tcp:127.0.0.1 /sdn:Northwind /su:sa /sp:Passw0rd /tf:/home/myNorthwind.bacpac
    
    This is an evaluation version.  There are [134] days left in the evaluation period.
    Connecting to database 'Northwind' on server 'tcp:127.0.0.1'.
    Extracting schema
    Extracting schema from database
    Resolving references in schema model
    Validating schema model
    Validating schema model for data package
    Validating schema
    Exporting data from database
    Exporting data
    Processing Export.
    Processing Table '[dbo].[CustomerCustomerDemo]'.
    Processing Table '[dbo].[Suppliers]'.
    Processing Table '[dbo].[Categories]'.
    Processing Table '[dbo].[Territories]'.
    Processing Table '[dbo].[EmployeeTerritories]'.
    Processing Table '[dbo].[Employees]'.
    Processing Table '[dbo].[Orders]'.
    Processing Table '[dbo].[Order Details]'.
    Processing Table '[dbo].[Products]'.
    Processing Table '[dbo].[Customers]'.
    Processing Table '[dbo].[CustomerDemographics]'.
    Processing Table '[dbo].[Shippers]'.
    Processing Table '[dbo].[Region]'.
    Successfully exported database and saved it to file 'C:\home\myNorthwind.bacpac'.
    root@7a6830d6b2db:/#


    root@7a6830d6b2db:/# /opt/mssql/bin/sqlpackage /a:Import /tsn:tcp:127.0.0.1 /tdn:Northwind /tu:sa /tp:Passw0rd /sf:/home/myNorthwind.bacpac
    This is an evaluation version.  There are [134] days left in the evaluation period.
    Importing to database 'Northwind' on server 'tcp:127.0.0.1'.
    Creating deployment plan
    Initializing deployment
    Verifying deployment plan
    Analyzing deployment plan
    Importing package schema and data into database
    Updating database
    Importing data
    Processing Import.
    Disabling indexes.
    Disabling index 'CategoryName'.
    Disabling index 'PK_CustomerCustomerDemo'.
    Disabling index 'PK_CustomerDemographics'.
    Disabling index 'City'.
    Disabling index 'CompanyName'.
    Disabling index 'PostalCode'.
    Disabling index 'Region'.
    Disabling index 'LastName'.
    Disabling index 'PostalCode'.
    Disabling index 'PK_EmployeeTerritories'.
    Disabling index 'OrderID'.
    Disabling index 'OrdersOrder_Details'.
    Disabling index 'ProductID'.
    Disabling index 'ProductsOrder_Details'.
    Disabling index 'CustomerID'.
    Disabling index 'CustomersOrders'.
    Disabling index 'EmployeeID'.
    Disabling index 'EmployeesOrders'.
    Disabling index 'OrderDate'.
    Disabling index 'ShippedDate'.
    Disabling index 'ShippersOrders'.
    Disabling index 'ShipPostalCode'.
    Disabling index 'CategoriesProducts'.
    Disabling index 'CategoryID'.
    Disabling index 'ProductName'.
    Disabling index 'SupplierID'.
    Disabling index 'SuppliersProducts'.
    Disabling index 'PK_Region'.
    Disabling index 'CompanyName'.
    Disabling index 'PostalCode'.
    Disabling index 'PK_Territories'.
    Processing Table '[dbo].[Categories]'.
    Processing Table '[dbo].[CustomerCustomerDemo]'.
    Processing Table '[dbo].[CustomerDemographics]'.
    Processing Table '[dbo].[Customers]'.
    Processing Table '[dbo].[Employees]'.
    Processing Table '[dbo].[EmployeeTerritories]'.
    Processing Table '[dbo].[Order Details]'.
    Processing Table '[dbo].[Orders]'.
    Processing Table '[dbo].[Products]'.
    Processing Table '[dbo].[Region]'.
    Processing Table '[dbo].[Shippers]'.
    Processing Table '[dbo].[Suppliers]'.
    Processing Table '[dbo].[Territories]'.
    Enabling indexes.
    Enabling index 'CategoryName'.
    Enabling index 'PK_CustomerCustomerDemo'.
    Enabling index 'PK_CustomerDemographics'.
    Enabling index 'City'.
    Enabling index 'CompanyName'.
    Enabling index 'PostalCode'.
    Enabling index 'Region'.
    Enabling index 'LastName'.
    Enabling index 'PostalCode'.
    Enabling index 'PK_EmployeeTerritories'.
    Enabling index 'OrderID'.
    Enabling index 'OrdersOrder_Details'.
    Enabling index 'ProductID'.
    Enabling index 'ProductsOrder_Details'.
    Enabling index 'CustomerID'.
    Enabling index 'CustomersOrders'.
    Enabling index 'EmployeeID'.
    Enabling index 'EmployeesOrders'.
    Enabling index 'OrderDate'.
    Enabling index 'ShippedDate'.
    Enabling index 'ShippersOrders'.
    Enabling index 'ShipPostalCode'.
    Enabling index 'CategoriesProducts'.
    Enabling index 'CategoryID'.
    Enabling index 'ProductName'.
    Enabling index 'SupplierID'.
    Enabling index 'SuppliersProducts'.
    Enabling index 'PK_Region'.
    Enabling index 'CompanyName'.
    Enabling index 'PostalCode'.
    Enabling index 'PK_Territories'.
    Successfully imported database.
    root@7a6830d6b2db:/#


----------
# 參考文章：
## Export a database (schema and user data) to a .BACPAC file

Use the following command to export database schema and user data to a .BACPAC file:
bashCopy

    /opt/mssql/bin/sqlpackage /a:Export /ssn:tcp:<your_server> /sdn:<your_database> /su:<username> /sp:<password> /tf:</path/to/your/file.bacpac> 
## Import a database (schema and user data) from a .BACPAC file

Use the following command to import database schema and user data from a .BACPAC file:
bashCopy

    /opt/mssql/bin/sqlpackage /a:Import /tsn:tcp:<your_server> /tdn:<your_database> /tu:<username> /tp:<password


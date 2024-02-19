# 在 Azure App Service 建置 Django App


https://docs.microsoft.com/zh-tw/azure/app-service/containers/quickstart-python?toc=%2Fpython%2Fazure%2FTOC.json&tabs=bash



https://docs.microsoft.com/zh-tw/azure/developer/python/tutorial-deploy-app-service-on-linux-01




https://docs.microsoft.com/zh-tw/azure/app-service/containers/how-to-configure-python



# 發展 Source Code




# 佈署至 Azure App Service



    az webapp up --sku F1 -n my-flask -l eastasia
    webapp my-flask doesn't exist
    Creating Resource group 'AlanJui_rg_Linux_eastasia' ...
    Resource group creation complete
    Creating AppServicePlan 'AlanJui_asp_Linux_eastasia_0' ...
    Creating webapp 'my-flask' ...
    Configuring default logging for the app, if not already enabled
    Creating zip with contents of dir /Users/alanjui/workspace/docker/python-docs-hello-world ...
    Getting scm site credentials for zip deployment
    Starting zip deployment. This operation can take a while to complete ...
    Deployment endpoint responded with status code 202
    You can launch the app at http://my-flask.azurewebsites.net
    {
      "URL": "http://my-flask.azurewebsites.net",
      "appserviceplan": "AlanJui_asp_Linux_eastasia_0",
      "location": "eastasia",
      "name": "my-flask",
      "os": "Linux",
      "resourcegroup": "AlanJui_rg_Linux_eastasia",
      "runtime_version": "python|3.7",
      "runtime_version_detected": "-",
      "sku": "FREE",
      "src_path": "//Users//alanjui//workspace//docker//python-docs-hello-world"
    }



`az webapp up` 命令會執行下列動作：

- 建立預設[**資源群組**](https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az-group-create)。
- 建立預設 [**App Service 方案**](https://docs.microsoft.com/cli/azure/appservice/plan?view=azure-cli-latest#az-appservice-plan-create)。
- 使用所指定的名稱[**建立應用程式**](https://docs.microsoft.com/cli/azure/webapp?view=azure-cli-latest#az-webapp-create)。
- [**以 Zip 檔進行部署**](https://docs.microsoft.com/azure/app-service/deploy-zip)，將目前工作目錄中的檔案部署到應用程式。



## **瀏覽至應用程式**

使用網頁瀏覽器瀏覽至已部署的應用程式 (URL 為 `http://<app-name>.azurewebsites.net`)。
Python 範例程式碼目前使用內建映像在 App Service 中執行 Linux 容器。

https://my-flask.azurewebsites.net/


![在 Azure 中執行範例 Python 應用程式](https://docs.microsoft.com/zh-tw/azure/app-service/containers/media/quickstart-python/run-hello-world-sample-python-app-in-browser.png)




## 重新佈署到 Azure App Service


    az webapp up
    Webapp my-flask already exists. The command will deploy contents to the existing app.
    Creating zip with contents of dir /Users/alanjui/workspace/docker/python-docs-hello-world ...
    Getting scm site credentials for zip deployment
    Starting zip deployment. This operation can take a while to complete ...
    Deployment endpoint responded with status code 202
    You can launch the app at http://my-flask.azurewebsites.net
    {
      "URL": "http://my-flask.azurewebsites.net",
      "appserviceplan": "AlanJui_asp_Linux_eastasia_0",
      "location": "eastasia",
      "name": "my-flask",
      "os": "Linux",
      "resourcegroup": "AlanJui_rg_Linux_eastasia",
      "runtime_version": "python|3.7",
      "runtime_version_detected": "-",
      "sku": "FREE",
      "src_path": "//Users//alanjui//workspace//docker//python-docs-hello-world"
    }



## 監視 Azure App Service 



![](https://paper-attachments.dropbox.com/s_0A2889DF450D28F97FFE12FD4F82B6973EDF13BB7212A5942E3CDABDFA77F1BE_1589207425364_image.png)




![](https://paper-attachments.dropbox.com/s_0A2889DF450D28F97FFE12FD4F82B6973EDF13BB7212A5942E3CDABDFA77F1BE_1589207440633_image.png)




## 終止 Azure App Service




    az group delete -n <resource-group-name>




# PostgreSQL App



https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/postgresql/quickstart-create-server-database-portal.md



（1）建立 Azure 資料庫（類別：PostgreSQL伺服器）



    psql --host=<servername> --port=<port> --username=<user@servername> --dbname=<dbname>


    psql -v sslmode=true --host=ccc99-tw.postgres.database.azure.com --username=alanjui@ccc99-tw --dbname=postgres
    Password for user alanjui@ccc99-tw:
    psql (11.6, server 10.11)
    SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
    Type "help" for help.
    
    postgres=> CREATE DATABASE polls_db;
    CREATE DATABASE
    postgres=> \l
                                                                   List of databases
           Name        |      Owner      | Encoding |          Collate           |           Ctype            |          Access privileges
    -------------------+-----------------+----------+----------------------------+----------------------------+-------------------------------------
     azure_maintenance | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | azure_superuser=CTc/azure_superuser
     azure_sys         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 |
     polls_db          | alanjui         | UTF8     | English_United States.1252 | English_United States.1252 |
     postgres          | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 |
     template0         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | =c/azure_superuser                 +
                       |                 |          |                            |                            | azure_superuser=CTc/azure_superuser
     template1         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | =c/azure_superuser                 +
                       |                 |          |                            |                            | azure_superuser=CTc/azure_superuser
    (6 rows)
    
    polls_db=> \c polls_db
    psql (11.6, server 10.11)
    SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
    You are now connected to database "polls_db" as user "alanjui@ccc99-tw".
    polls_db=> CREATE USER polls_user WITH ENCRYPTED PASSWORD 'Pollsdb1';
    CREATE ROLE
    polls_db=> GRANT ALL PRIVILEGES ON DATABASE polls_db TO polls_user;
    GRANT
    polls_db=> \q



    psql -v sslmode=true --host=ccc99-tw.postgres.database.azure.com --username=polls_user@ccc99-tw --dbname=polls_db -W
    Password:
    psql (11.6, server 10.11)
    SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
    Type "help" for help.
    
    polls_db=> \l
                                                                   List of databases
           Name        |      Owner      | Encoding |          Collate           |           Ctype            |          Access privileges
    -------------------+-----------------+----------+----------------------------+----------------------------+-------------------------------------
     azure_maintenance | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | azure_superuser=CTc/azure_superuser
     azure_sys         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 |
     polls_db          | alanjui         | UTF8     | English_United States.1252 | English_United States.1252 | =Tc/alanjui                        +
                       |                 |          |                            |                            | alanjui=CTc/alanjui                +
                       |                 |          |                            |                            | polls_user=CTc/alanjui
     postgres          | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 |
     template0         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | =c/azure_superuser                 +
                       |                 |          |                            |                            | azure_superuser=CTc/azure_superuser
     template1         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | =c/azure_superuser                 +
                       |                 |          |                            |                            | azure_superuser=CTc/azure_superuser
    (6 rows)
    
    polls_db=> \conninfo
    You are connected to database "polls_db" as user "polls_user@ccc99-tw" on host "ccc99-tw.postgres.database.azure.com" at port "5432".
    SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
    polls_db=> \c
    Password for user polls_user@ccc99-tw:
    psql (11.6, server 10.11)
    SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
    You are now connected to database "polls_db" as user "polls_user@ccc99-tw".
    polls_db=> \d
     public | pg_buffercache     | view | azure_superuser
     public | pg_stat_statements | view | azure_superuser
    
    polls_db=> \q





（2）為 Web App 建立 Azure App Service

部署完成後，您會看到如下所示的 JSON 輸出：

    {
      "URL": "http://<app-name>.azurewebsites.net",
      "appserviceplan": "myAppServicePlan",
      "location": "westus",
      "name": "<app-name>",
      "os": "Linux",
      "resourcegroup": "<app-resource-group>",
      "runtime_version": "python|3.7",
      "runtime_version_detected": "-",
      "sku": "BASIC",
      "src_path": "//var//lib//postgresql//djangoapp"
    }



    $ az webapp up --plan myAppServicePlan --sku B1 --name psqlapp -l eastasia
    webapp psqlapp doesn't exist
    Creating webapp 'psqlapp' ...
    Configuring default logging for the app, if not already enabled
    Creating zip with contents of dir /Users/alanjui/workspace/azure/djangoapp ...
    Getting scm site credentials for zip deployment
    Starting zip deployment. This operation can take a while to complete ...
    Deployment endpoint responded with status code 202
    You can launch the app at http://psqlapp.azurewebsites.net
    {
      "URL": "http://psqlapp.azurewebsites.net",
      "appserviceplan": "myAppServicePlan",
      "location": "eastasia",
      "name": "psqlapp",
      "os": "Linux",
      "resourcegroup": "AlanJui_rg_Linux_eastasia",
      "runtime_version": "python|3.7",
      "runtime_version_detected": "-",
      "sku": "BASIC",
      "src_path": "//Users//alanjui//workspace//azure//djangoapp"
    }


（3）設定 Postgres 資料庫使用的「環境變數」



    az webapp config appsettings set --name <app-name> \
      --resource-group <app-resource-group> \
      --settings DJANGO_ENV="production" \
                 DBHOST="<postgresql-name>.postgres.database.azure.com" \
                 DBUSER="root@<postgresql-name>" \
                 DBPASS="Pollsdb1" \
                 DBNAME="pollsdb"



    az webapp config appsettings set --name psqlapp --resource-group AlanJui_rg_linux_eastasia --settings DJANGO_ENV="production" DBHOST="ccc99-tw.postgres.database.azure.com" DBUSER="polls_user@ccc99-tw" DBPASS="Pollsdb1" DBNAME="polls_db"
    
    [                                                                                       {
        "name": "SCM_DO_BUILD_DURING_DEPLOYMENT",
        "slotSetting": false,
        "value": "True"
      },
      {
        "name": "WEBSITE_HTTPLOGGING_RETENTION_DAYS",
        "slotSetting": false,
        "value": "3"
      },
      {
        "name": "DJANGO_ENV",
        "slotSetting": false,
        "value": "production"
      },
      {
        "name": "DBHOST",
        "slotSetting": false,
        "value": "ccc99-tw.postgres.database.azure.com"
      },
      {
        "name": "DBUSER",
        "slotSetting": false,
        "value": "root@ccc99-tw"
      },
      {
        "name": "DBPASS",
        "slotSetting": false,
        "value": "Pollsdb1"
      },
      {
        "name": "DBNAME",
        "slotSetting": false,
        "value": "pollsdb"
      }
    ]


（4）透過 SSH 連上 App Service Host ，執行資料庫移轉



     https://<app-name>.scm.azurewebsites.net/webssh/host



     https://psqlapp.scm.azurewebsites.net/webssh/host



    cd site/wwwroot
    
    # Activate default virtual environment in App Service container
    source /antenv/bin/activate
    # Install requirements in environment
    pip install -r requirements.txt
    # Run database migrations
    python manage.py migrate
    # Create the super user (follow prompts)
    python manage.py createsuperuser





https://stackoverflow.com/questions/47683059/force-ssl-for-django-postgres-connection




# Azure Blob Storage


# 其它



## Azure App Service 與 URL 對映關聯

http://<app-name>.azurewebsites.net

http://psqlapp.azurewebsites.net




## 在瀏覽器中使用 SSH 終端機

Azure App Service 提供 SSH 遠端連線功能，令使用者可透過 GUI 介面，於 Web 瀏覽器使用「終端機」。

SSH 連線的網址（URL）格式為：

    https://<app-name>.scm.azurewebsites.net/webssh/host

使用上述的 Web 終端機前，須先通過「使用者身份驗證」（如：使用 az login 登入 Azure Cloud Service）才能連線。 

每個 Azure App ，其 Web 終端機的內容大致如下。

![SSH 連線](https://docs.microsoft.com/zh-tw/azure/includes/media/app-service-web-ssh-connect-no-h/app-service-linux-ssh-connection.png)


 ****
 
 

# 後續參考


- [Django — Using Azure blob storage to handle static & media assets — from scratch](https://medium.com/@DawlysD/django-using-azure-blob-storage-to-handle-static-media-assets-from-scratch-90cbbc7d56be)
    
- [教學課程：採用 PostgreSQL 的 Python (Django) Web 應用程式](https://docs.microsoft.com/zh-tw/azure/app-service/containers/tutorial-python-postgresql-app)
    
- [將使用者登入新增至 Python Web 應用程式](https://docs.microsoft.com/zh-tw/azure/active-directory/develop/quickstart-v2-python-webapp)
    
- [設定 Python 應用程式](https://docs.microsoft.com/zh-tw/azure/app-service/containers/how-to-configure-python)
    
- [教學課程：在自訂容器中執行 Python 應用程式](https://docs.microsoft.com/zh-tw/azure/app-service/containers/tutorial-custom-docker-image)


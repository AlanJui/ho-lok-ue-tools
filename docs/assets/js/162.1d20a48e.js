(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{448:function(e,s,t){"use strict";t.r(s);var a=t(10),n=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"在-azure-app-service-建置-django-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-azure-app-service-建置-django-app"}},[e._v("#")]),e._v(" 在 Azure App Service 建置 Django App")]),e._v(" "),s("p",[e._v("https://docs.microsoft.com/zh-tw/azure/app-service/containers/quickstart-python?toc=%2Fpython%2Fazure%2FTOC.json&tabs=bash")]),e._v(" "),s("p",[e._v("https://docs.microsoft.com/zh-tw/azure/developer/python/tutorial-deploy-app-service-on-linux-01")]),e._v(" "),s("p",[e._v("https://docs.microsoft.com/zh-tw/azure/app-service/containers/how-to-configure-python")]),e._v(" "),s("h1",{attrs:{id:"發展-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#發展-source-code"}},[e._v("#")]),e._v(" 發展 Source Code")]),e._v(" "),s("h1",{attrs:{id:"佈署至-azure-app-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#佈署至-azure-app-service"}},[e._v("#")]),e._v(" 佈署至 Azure App Service")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('az webapp up --sku F1 -n my-flask -l eastasia\nwebapp my-flask doesn\'t exist\nCreating Resource group \'AlanJui_rg_Linux_eastasia\' ...\nResource group creation complete\nCreating AppServicePlan \'AlanJui_asp_Linux_eastasia_0\' ...\nCreating webapp \'my-flask\' ...\nConfiguring default logging for the app, if not already enabled\nCreating zip with contents of dir /Users/alanjui/workspace/docker/python-docs-hello-world ...\nGetting scm site credentials for zip deployment\nStarting zip deployment. This operation can take a while to complete ...\nDeployment endpoint responded with status code 202\nYou can launch the app at http://my-flask.azurewebsites.net\n{\n  "URL": "http://my-flask.azurewebsites.net",\n  "appserviceplan": "AlanJui_asp_Linux_eastasia_0",\n  "location": "eastasia",\n  "name": "my-flask",\n  "os": "Linux",\n  "resourcegroup": "AlanJui_rg_Linux_eastasia",\n  "runtime_version": "python|3.7",\n  "runtime_version_detected": "-",\n  "sku": "FREE",\n  "src_path": "//Users//alanjui//workspace//docker//python-docs-hello-world"\n}\n')])])]),s("p",[s("code",[e._v("az webapp up")]),e._v(" 命令會執行下列動作：")]),e._v(" "),s("ul",[s("li",[e._v("建立預設"),s("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/group?view=azure-cli-latest#az-group-create",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("資源群組")]),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("li",[e._v("建立預設 "),s("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/appservice/plan?view=azure-cli-latest#az-appservice-plan-create",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("App Service 方案")]),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("li",[e._v("使用所指定的名稱"),s("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/webapp?view=azure-cli-latest#az-webapp-create",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("建立應用程式")]),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/deploy-zip",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("以 Zip 檔進行部署")]),s("OutboundLink")],1),e._v("，將目前工作目錄中的檔案部署到應用程式。")])]),e._v(" "),s("h2",{attrs:{id:"瀏覽至應用程式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#瀏覽至應用程式"}},[e._v("#")]),e._v(" "),s("strong",[e._v("瀏覽至應用程式")])]),e._v(" "),s("p",[e._v("使用網頁瀏覽器瀏覽至已部署的應用程式 (URL 為 "),s("code",[e._v("http://<app-name>.azurewebsites.net")]),e._v(")。\nPython 範例程式碼目前使用內建映像在 App Service 中執行 Linux 容器。")]),e._v(" "),s("p",[e._v("https://my-flask.azurewebsites.net/")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://docs.microsoft.com/zh-tw/azure/app-service/containers/media/quickstart-python/run-hello-world-sample-python-app-in-browser.png",alt:"在 Azure 中執行範例 Python 應用程式"}})]),e._v(" "),s("h2",{attrs:{id:"重新佈署到-azure-app-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重新佈署到-azure-app-service"}},[e._v("#")]),e._v(" 重新佈署到 Azure App Service")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('az webapp up\nWebapp my-flask already exists. The command will deploy contents to the existing app.\nCreating zip with contents of dir /Users/alanjui/workspace/docker/python-docs-hello-world ...\nGetting scm site credentials for zip deployment\nStarting zip deployment. This operation can take a while to complete ...\nDeployment endpoint responded with status code 202\nYou can launch the app at http://my-flask.azurewebsites.net\n{\n  "URL": "http://my-flask.azurewebsites.net",\n  "appserviceplan": "AlanJui_asp_Linux_eastasia_0",\n  "location": "eastasia",\n  "name": "my-flask",\n  "os": "Linux",\n  "resourcegroup": "AlanJui_rg_Linux_eastasia",\n  "runtime_version": "python|3.7",\n  "runtime_version_detected": "-",\n  "sku": "FREE",\n  "src_path": "//Users//alanjui//workspace//docker//python-docs-hello-world"\n}\n')])])]),s("h2",{attrs:{id:"監視-azure-app-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#監視-azure-app-service"}},[e._v("#")]),e._v(" 監視 Azure App Service")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_0A2889DF450D28F97FFE12FD4F82B6973EDF13BB7212A5942E3CDABDFA77F1BE_1589207425364_image.png",alt:""}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_0A2889DF450D28F97FFE12FD4F82B6973EDF13BB7212A5942E3CDABDFA77F1BE_1589207440633_image.png",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"終止-azure-app-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#終止-azure-app-service"}},[e._v("#")]),e._v(" 終止 Azure App Service")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("az group delete -n <resource-group-name>\n")])])]),s("h1",{attrs:{id:"postgresql-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-app"}},[e._v("#")]),e._v(" PostgreSQL App")]),e._v(" "),s("p",[e._v("https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/postgresql/quickstart-create-server-database-portal.md")]),e._v(" "),s("p",[e._v("（1）建立 Azure 資料庫（類別：PostgreSQL伺服器）")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('psql --host=<servername> --port=<port> --username=<user@servername> --dbname=<dbname>\n\n\npsql -v sslmode=true --host=ccc99-tw.postgres.database.azure.com --username=alanjui@ccc99-tw --dbname=postgres\nPassword for user alanjui@ccc99-tw:\npsql (11.6, server 10.11)\nSSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)\nType "help" for help.\n\npostgres=> CREATE DATABASE polls_db;\nCREATE DATABASE\npostgres=> \\l\n                                                               List of databases\n       Name        |      Owner      | Encoding |          Collate           |           Ctype            |          Access privileges\n-------------------+-----------------+----------+----------------------------+----------------------------+-------------------------------------\n azure_maintenance | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | azure_superuser=CTc/azure_superuser\n azure_sys         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 |\n polls_db          | alanjui         | UTF8     | English_United States.1252 | English_United States.1252 |\n postgres          | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 |\n template0         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | =c/azure_superuser                 +\n                   |                 |          |                            |                            | azure_superuser=CTc/azure_superuser\n template1         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | =c/azure_superuser                 +\n                   |                 |          |                            |                            | azure_superuser=CTc/azure_superuser\n(6 rows)\n\npolls_db=> \\c polls_db\npsql (11.6, server 10.11)\nSSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)\nYou are now connected to database "polls_db" as user "alanjui@ccc99-tw".\npolls_db=> CREATE USER polls_user WITH ENCRYPTED PASSWORD \'Pollsdb1\';\nCREATE ROLE\npolls_db=> GRANT ALL PRIVILEGES ON DATABASE polls_db TO polls_user;\nGRANT\npolls_db=> \\q\n\n\n\npsql -v sslmode=true --host=ccc99-tw.postgres.database.azure.com --username=polls_user@ccc99-tw --dbname=polls_db -W\nPassword:\npsql (11.6, server 10.11)\nSSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)\nType "help" for help.\n\npolls_db=> \\l\n                                                               List of databases\n       Name        |      Owner      | Encoding |          Collate           |           Ctype            |          Access privileges\n-------------------+-----------------+----------+----------------------------+----------------------------+-------------------------------------\n azure_maintenance | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | azure_superuser=CTc/azure_superuser\n azure_sys         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 |\n polls_db          | alanjui         | UTF8     | English_United States.1252 | English_United States.1252 | =Tc/alanjui                        +\n                   |                 |          |                            |                            | alanjui=CTc/alanjui                +\n                   |                 |          |                            |                            | polls_user=CTc/alanjui\n postgres          | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 |\n template0         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | =c/azure_superuser                 +\n                   |                 |          |                            |                            | azure_superuser=CTc/azure_superuser\n template1         | azure_superuser | UTF8     | English_United States.1252 | English_United States.1252 | =c/azure_superuser                 +\n                   |                 |          |                            |                            | azure_superuser=CTc/azure_superuser\n(6 rows)\n\npolls_db=> \\conninfo\nYou are connected to database "polls_db" as user "polls_user@ccc99-tw" on host "ccc99-tw.postgres.database.azure.com" at port "5432".\nSSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)\npolls_db=> \\c\nPassword for user polls_user@ccc99-tw:\npsql (11.6, server 10.11)\nSSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)\nYou are now connected to database "polls_db" as user "polls_user@ccc99-tw".\npolls_db=> \\d\n public | pg_buffercache     | view | azure_superuser\n public | pg_stat_statements | view | azure_superuser\n\npolls_db=> \\q\n')])])]),s("p",[e._v("（2）為 Web App 建立 Azure App Service")]),e._v(" "),s("p",[e._v("部署完成後，您會看到如下所示的 JSON 輸出：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('{\n  "URL": "http://<app-name>.azurewebsites.net",\n  "appserviceplan": "myAppServicePlan",\n  "location": "westus",\n  "name": "<app-name>",\n  "os": "Linux",\n  "resourcegroup": "<app-resource-group>",\n  "runtime_version": "python|3.7",\n  "runtime_version_detected": "-",\n  "sku": "BASIC",\n  "src_path": "//var//lib//postgresql//djangoapp"\n}\n\n\n\n$ az webapp up --plan myAppServicePlan --sku B1 --name psqlapp -l eastasia\nwebapp psqlapp doesn\'t exist\nCreating webapp \'psqlapp\' ...\nConfiguring default logging for the app, if not already enabled\nCreating zip with contents of dir /Users/alanjui/workspace/azure/djangoapp ...\nGetting scm site credentials for zip deployment\nStarting zip deployment. This operation can take a while to complete ...\nDeployment endpoint responded with status code 202\nYou can launch the app at http://psqlapp.azurewebsites.net\n{\n  "URL": "http://psqlapp.azurewebsites.net",\n  "appserviceplan": "myAppServicePlan",\n  "location": "eastasia",\n  "name": "psqlapp",\n  "os": "Linux",\n  "resourcegroup": "AlanJui_rg_Linux_eastasia",\n  "runtime_version": "python|3.7",\n  "runtime_version_detected": "-",\n  "sku": "BASIC",\n  "src_path": "//Users//alanjui//workspace//azure//djangoapp"\n}\n')])])]),s("p",[e._v("（3）設定 Postgres 資料庫使用的「環境變數」")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('az webapp config appsettings set --name <app-name> \\\n  --resource-group <app-resource-group> \\\n  --settings DJANGO_ENV="production" \\\n             DBHOST="<postgresql-name>.postgres.database.azure.com" \\\n             DBUSER="root@<postgresql-name>" \\\n             DBPASS="Pollsdb1" \\\n             DBNAME="pollsdb"\n\n\n\naz webapp config appsettings set --name psqlapp --resource-group AlanJui_rg_linux_eastasia --settings DJANGO_ENV="production" DBHOST="ccc99-tw.postgres.database.azure.com" DBUSER="polls_user@ccc99-tw" DBPASS="Pollsdb1" DBNAME="polls_db"\n\n[                                                                                       {\n    "name": "SCM_DO_BUILD_DURING_DEPLOYMENT",\n    "slotSetting": false,\n    "value": "True"\n  },\n  {\n    "name": "WEBSITE_HTTPLOGGING_RETENTION_DAYS",\n    "slotSetting": false,\n    "value": "3"\n  },\n  {\n    "name": "DJANGO_ENV",\n    "slotSetting": false,\n    "value": "production"\n  },\n  {\n    "name": "DBHOST",\n    "slotSetting": false,\n    "value": "ccc99-tw.postgres.database.azure.com"\n  },\n  {\n    "name": "DBUSER",\n    "slotSetting": false,\n    "value": "root@ccc99-tw"\n  },\n  {\n    "name": "DBPASS",\n    "slotSetting": false,\n    "value": "Pollsdb1"\n  },\n  {\n    "name": "DBNAME",\n    "slotSetting": false,\n    "value": "pollsdb"\n  }\n]\n')])])]),s("p",[e._v("（4）透過 SSH 連上 App Service Host ，執行資料庫移轉")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" https://<app-name>.scm.azurewebsites.net/webssh/host\n\n\n\n https://psqlapp.scm.azurewebsites.net/webssh/host\n\n\n\ncd site/wwwroot\n\n# Activate default virtual environment in App Service container\nsource /antenv/bin/activate\n# Install requirements in environment\npip install -r requirements.txt\n# Run database migrations\npython manage.py migrate\n# Create the super user (follow prompts)\npython manage.py createsuperuser\n")])])]),s("p",[e._v("https://stackoverflow.com/questions/47683059/force-ssl-for-django-postgres-connection")]),e._v(" "),s("h1",{attrs:{id:"azure-blob-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-blob-storage"}},[e._v("#")]),e._v(" Azure Blob Storage")]),e._v(" "),s("h1",{attrs:{id:"其它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[e._v("#")]),e._v(" 其它")]),e._v(" "),s("h2",{attrs:{id:"azure-app-service-與-url-對映關聯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-app-service-與-url-對映關聯"}},[e._v("#")]),e._v(" Azure App Service 與 URL 對映關聯")]),e._v(" "),s("p",[e._v("http://"),s("app-name",[e._v(".azurewebsites.net")])],1),e._v(" "),s("p",[e._v("http://psqlapp.azurewebsites.net")]),e._v(" "),s("h2",{attrs:{id:"在瀏覽器中使用-ssh-終端機"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在瀏覽器中使用-ssh-終端機"}},[e._v("#")]),e._v(" 在瀏覽器中使用 SSH 終端機")]),e._v(" "),s("p",[e._v("Azure App Service 提供 SSH 遠端連線功能，令使用者可透過 GUI 介面，於 Web 瀏覽器使用「終端機」。")]),e._v(" "),s("p",[e._v("SSH 連線的網址（URL）格式為：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("https://<app-name>.scm.azurewebsites.net/webssh/host\n")])])]),s("p",[e._v("使用上述的 Web 終端機前，須先通過「使用者身份驗證」（如：使用 az login 登入 Azure Cloud Service）才能連線。")]),e._v(" "),s("p",[e._v("每個 Azure App ，其 Web 終端機的內容大致如下。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://docs.microsoft.com/zh-tw/azure/includes/media/app-service-web-ssh-connect-no-h/app-service-linux-ssh-connection.png",alt:"SSH 連線"}})]),e._v(" "),s("hr"),e._v(" "),s("h1",{attrs:{id:"後續參考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#後續參考"}},[e._v("#")]),e._v(" 後續參考")]),e._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://medium.com/@DawlysD/django-using-azure-blob-storage-to-handle-static-media-assets-from-scratch-90cbbc7d56be",target:"_blank",rel:"noopener noreferrer"}},[e._v("Django — Using Azure blob storage to handle static & media assets — from scratch"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-tw/azure/app-service/containers/tutorial-python-postgresql-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("教學課程：採用 PostgreSQL 的 Python (Django) Web 應用程式"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-tw/azure/active-directory/develop/quickstart-v2-python-webapp",target:"_blank",rel:"noopener noreferrer"}},[e._v("將使用者登入新增至 Python Web 應用程式"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-tw/azure/app-service/containers/how-to-configure-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("設定 Python 應用程式"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-tw/azure/app-service/containers/tutorial-custom-docker-image",target:"_blank",rel:"noopener noreferrer"}},[e._v("教學課程：在自訂容器中執行 Python 應用程式"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
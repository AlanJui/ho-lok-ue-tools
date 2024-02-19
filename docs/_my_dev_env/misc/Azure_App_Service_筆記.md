# Azure App Service 筆記


- [Django on Azure - beyond "hello world"](https://tonybaloney.github.io/posts/django-on-azure-beyond-hello-world.html)
- [Django — Using Azure blob storage to handle static & media assets — from scratch](https://medium.com/@DawlysD/django-using-azure-blob-storage-to-handle-static-media-assets-from-scratch-90cbbc7d56be)


# Deployment by CLI


## 首次安裝 Azure CLI


    brew update && brew install azure-cli



## 更換 Python 3 版本（3.8.2 ==> 3.7.4）


     ll /usr/local/Cellar/azure-cli/2.6.0/libexec/lib/
    total 0
    drwxr-xr-x   3 alanjui  staff    96  5 18 10:54 ./
    drwxr-xr-x   6 alanjui  staff   192  5 18 10:54 ../
    drwxr-xr-x  58 alanjui  staff  1856  5 25 23:29 python3.8/


    brew link --overwrite python3




## （1）建立佈署專用的使用者帳號


    az webapp deployment user set --user-name <username> --password <password>


    az webapp deployment user set --user-name alanjui --password VegLife99@
    {
      "id": null,
      "kind": null,
      "name": "web",
      "publishingPassword": null,
      "publishingPasswordHash": null,
      "publishingPasswordHashSalt": null,
      "publishingUserName": "alanjui",
      "scmUri": null,
      "type": "Microsoft.Web/publishingUsers/web"
    }



    az configure --defaults group=<name>
    az configure --defaults group=myResourceGroup



## （2）建立「測試」與「上線」環境用 App Service 方案（Service Plan）


    az appservice plan create --name staging --resource-group yourResourceGroup --sku P1V2 --is-linux
    az appservice plan create --name production --resource-group yourResourceGroup --sku P2V2 --is-linux


    az appservice plan create --name staging --resource-group myResourceGroup --sku F1 --is-linux
    {- Finished ..
      "freeOfferExpirationTime": null,
      "geoRegion": "West US",
      "hostingEnvironmentProfile": null,
      "hyperV": false,
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/staging",
      "isSpot": false,
      "isXenon": false,
      "kind": "linux",
      "location": "West US",
      "maximumElasticWorkerCount": 1,
      "maximumNumberOfWorkers": 1,
      "name": "staging",
      "numberOfSites": 0,
      "perSiteScaling": false,
      "provisioningState": "Succeeded",
      "reserved": true,
      "resourceGroup": "myResourceGroup",
      "sku": {
        "capabilities": null,
        "capacity": 1,
        "family": "F",
        "locations": null,
        "name": "F1",
        "size": "F1",
        "skuCapacity": null,
        "tier": "Free"
      },
      "spotExpirationTime": null,
      "status": "Ready",
      "subscription": "bdbe86f1-40d5-4305-99ce-bb6ea7c085c7",
      "tags": null,
      "targetWorkerCount": 0,
      "targetWorkerSizeId": 0,
      "type": "Microsoft.Web/serverfarms",
      "workerTierName": null
    }



    az appservice plan create --name production --resource-group myResourceGroup --sku P1V2 --is-linux
    az appservice plan create --name production --resource-group myResourceGroup --sku P1V2 --is-linux
    {- Finished ..
      "freeOfferExpirationTime": null,
      "geoRegion": "West US",
      "hostingEnvironmentProfile": null,
      "hyperV": false,
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/production",
      "isSpot": false,
      "isXenon": false,
      "kind": "linux",
      "location": "West US",
      "maximumElasticWorkerCount": 1,
      "maximumNumberOfWorkers": 30,
      "name": "production",
      "numberOfSites": 0,
      "perSiteScaling": false,
      "provisioningState": "Succeeded",
      "reserved": true,
      "resourceGroup": "myResourceGroup",
      "sku": {
        "capabilities": null,
        "capacity": 1,
        "family": "Pv2",
        "locations": null,
        "name": "P1v2",
        "size": "P1v2",
        "skuCapacity": null,
        "tier": "PremiumV2"
      },
      "spotExpirationTime": null,
      "status": "Ready",
      "subscription": "bdbe86f1-40d5-4305-99ce-bb6ea7c085c7",
      "tags": null,
      "targetWorkerCount": 0,
      "targetWorkerSizeId": 0,
      "type": "Microsoft.Web/serverfarms",
      "workerTierName": null
    }



## （3）建立「測試」與「上線」環境用 Web App (App Service)


    az webapp create --resource-group yourResourceGroup --plan staging --name app-staging --runtime "PYTHON|3.7" --deployment-local-git 
    az webapp create --resource-group yourResourceGroup --plan production --name app-production --runtime "PYTHON|3.7" --deployment-local-git


    az webapp create --resource-group myResourceGroup --plan staging --name app-stage --runtime "PYTHON|3.7" --deployment-local-git
    
    Local git is configured with url of 'https://alanjui@app-stage.scm.azurewebsites.net/app-stage.git'
    {
      "availabilityState": "Normal",
      "clientAffinityEnabled": true,
      "clientCertEnabled": false,
      "clientCertExclusionPaths": null,
      "cloningInfo": null,
      "containerSize": 0,
      "dailyMemoryTimeQuota": 0,
      "defaultHostName": "app-stage.azurewebsites.net",
      "deploymentLocalGitUrl": "https://alanjui@app-stage.scm.azurewebsites.net/app-stage.git",
      "enabled": true,
      "enabledHostNames": [
        "app-stage.azurewebsites.net",
        "app-stage.scm.azurewebsites.net"
      ],
      "ftpPublishingUrl": "ftp://waws-prod-bay-139.ftp.azurewebsites.windows.net/site/wwwroot",
      "hostNameSslStates": [
        {
          "hostType": "Standard",
          "ipBasedSslResult": null,
          "ipBasedSslState": "NotConfigured",
          "name": "app-stage.azurewebsites.net",
          "sslState": "Disabled",
          "thumbprint": null,
          "toUpdate": null,
          "toUpdateIpBasedSsl": null,
          "virtualIp": null
        },
        {
          "hostType": "Repository",
          "ipBasedSslResult": null,
          "ipBasedSslState": "NotConfigured",
          "name": "app-stage.scm.azurewebsites.net",
          "sslState": "Disabled",
          "thumbprint": null,
          "toUpdate": null,
          "toUpdateIpBasedSsl": null,
          "virtualIp": null
        }
      ],
      "hostNames": [
        "app-stage.azurewebsites.net"
      ],
      "hostNamesDisabled": false,
      "hostingEnvironmentProfile": null,
      "httpsOnly": false,
      "hyperV": false,
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/sites/app-stage",
      "identity": null,
      "inProgressOperationId": null,
      "isDefaultContainer": null,
      "isXenon": false,
      "kind": "app,linux",
      "lastModifiedTimeUtc": "2020-05-22T04:05:25.936666",
      "location": "West US",
      "maxNumberOfWorkers": null,
      "name": "app-stage",
      "outboundIpAddresses": "40.112.243.7,40.118.229.231,13.64.89.216,40.78.16.175,52.160.111.150",
      "possibleOutboundIpAddresses": "40.112.243.7,40.118.229.231,13.64.89.216,40.78.16.175,52.160.111.150,13.64.91.216,13.64.94.144,13.91.124.136,13.91.125.204,40.118.239.192",
      "redundancyMode": "None",
      "repositorySiteName": "app-stage",
      "reserved": true,
      "resourceGroup": "myResourceGroup",
      "scmSiteAlsoStopped": false,
      "serverFarmId": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/staging",
      "siteConfig": {
        "acrUseManagedIdentityCreds": false,
        "acrUserManagedIdentityID": null,
        "alwaysOn": null,
        "apiDefinition": null,
        "apiManagementConfig": null,
        "appCommandLine": null,
        "appSettings": null,
        "autoHealEnabled": null,
        "autoHealRules": null,
        "autoSwapSlotName": null,
        "azureMonitorLogCategories": null,
        "connectionStrings": null,
        "cors": null,
        "customAppPoolIdentityAdminState": null,
        "customAppPoolIdentityTenantState": null,
        "defaultDocuments": null,
        "detailedErrorLoggingEnabled": null,
        "documentRoot": null,
        "experiments": null,
        "fileChangeAuditEnabled": null,
        "ftpsState": null,
        "functionsRuntimeScaleMonitoringEnabled": null,
        "handlerMappings": null,
        "healthCheckPath": null,
        "http20Enabled": null,
        "httpLoggingEnabled": null,
        "ipSecurityRestrictions": [
          {
            "action": "Allow",
            "description": "Allow all access",
            "ipAddress": "Any",
            "name": "Allow all",
            "priority": 1,
            "subnetMask": null,
            "subnetTrafficTag": null,
            "tag": null,
            "vnetSubnetResourceId": null,
            "vnetTrafficTag": null
          }
        ],
        "javaContainer": null,
        "javaContainerVersion": null,
        "javaVersion": null,
        "limits": null,
        "linuxFxVersion": null,
        "loadBalancing": null,
        "localMySqlEnabled": null,
        "logsDirectorySizeLimit": null,
        "machineKey": null,
        "managedPipelineMode": null,
        "managedServiceIdentityId": null,
        "metadata": null,
        "minTlsVersion": null,
        "netFrameworkVersion": null,
        "nodeVersion": null,
        "numberOfWorkers": null,
        "phpVersion": null,
        "powerShellVersion": null,
        "preWarmedInstanceCount": null,
        "publishingPassword": null,
        "publishingUsername": null,
        "push": null,
        "pythonVersion": null,
        "remoteDebuggingEnabled": null,
        "remoteDebuggingVersion": null,
        "requestTracingEnabled": null,
        "requestTracingExpirationTime": null,
        "routingRules": null,
        "runtimeADUser": null,
        "runtimeADUserPassword": null,
        "scmIpSecurityRestrictions": [
          {
            "action": "Allow",
            "description": "Allow all access",
            "ipAddress": "Any",
            "name": "Allow all",
            "priority": 1,
            "subnetMask": null,
            "subnetTrafficTag": null,
            "tag": null,
            "vnetSubnetResourceId": null,
            "vnetTrafficTag": null
          }
        ],
        "scmIpSecurityRestrictionsUseMain": null,
        "scmType": null,
        "tracingOptions": null,
        "use32BitWorkerProcess": null,
        "virtualApplications": null,
        "vnetName": null,
        "webSocketsEnabled": null,
        "websiteTimeZone": null,
        "winAuthAdminState": null,
        "winAuthTenantState": null,
        "windowsFxVersion": null,
        "xManagedServiceIdentityId": null
      },
      "slotSwapStatus": null,
      "state": "Running",
      "suspendedTill": null,
      "tags": null,
      "targetSwapSlot": null,
      "trafficManagerHostNames": null,
      "type": "Microsoft.Web/sites",
      "usageState": "Normal"
    }



    az webapp create --resource-group myResourceGroup --plan production --name app-production --runtime "PYTHON|3.7" --deployment-local-git
    
    Local git is configured with url of 'https://alanjui@app-production.scm.azurewebsites.net/app-production.git'
    {
      "availabilityState": "Normal",
      "clientAffinityEnabled": true,
      "clientCertEnabled": false,
      "clientCertExclusionPaths": null,
      "cloningInfo": null,
      "containerSize": 0,
      "dailyMemoryTimeQuota": 0,
      "defaultHostName": "app-production.azurewebsites.net",
      "deploymentLocalGitUrl": "https://alanjui@app-production.scm.azurewebsites.net/app-production.git",
      "enabled": true,
      "enabledHostNames": [
        "app-production.azurewebsites.net",
        "app-production.scm.azurewebsites.net"
      ],
      "ftpPublishingUrl": "ftp://waws-prod-bay-139.ftp.azurewebsites.windows.net/site/wwwroot",
      "hostNameSslStates": [
        {
          "hostType": "Standard",
          "ipBasedSslResult": null,
          "ipBasedSslState": "NotConfigured",
          "name": "app-production.azurewebsites.net",
          "sslState": "Disabled",
          "thumbprint": null,
          "toUpdate": null,
          "toUpdateIpBasedSsl": null,
          "virtualIp": null
        },
        {
          "hostType": "Repository",
          "ipBasedSslResult": null,
          "ipBasedSslState": "NotConfigured",
          "name": "app-production.scm.azurewebsites.net",
          "sslState": "Disabled",
          "thumbprint": null,
          "toUpdate": null,
          "toUpdateIpBasedSsl": null,
          "virtualIp": null
        }
      ],
      "hostNames": [
        "app-production.azurewebsites.net"
      ],
      "hostNamesDisabled": false,
      "hostingEnvironmentProfile": null,
      "httpsOnly": false,
      "hyperV": false,
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/sites/app-production",
      "identity": null,
      "inProgressOperationId": null,
      "isDefaultContainer": null,
      "isXenon": false,
      "kind": "app,linux",
      "lastModifiedTimeUtc": "2020-05-22T03:54:22.200000",
      "location": "West US",
      "maxNumberOfWorkers": null,
      "name": "app-production",
      "outboundIpAddresses": "13.64.91.216,13.64.94.144,13.91.124.136,13.91.125.204,40.118.239.192",
      "possibleOutboundIpAddresses": "40.112.243.7,40.118.229.231,13.64.89.216,40.78.16.175,52.160.111.150,13.64.91.216,13.64.94.144,13.91.124.136,13.91.125.204,40.118.239.192",
      "redundancyMode": "None",
      "repositorySiteName": "app-production",
      "reserved": true,
      "resourceGroup": "myResourceGroup",
      "scmSiteAlsoStopped": false,
      "serverFarmId": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/production",
      "siteConfig": {
        "acrUseManagedIdentityCreds": false,
        "acrUserManagedIdentityID": null,
        "alwaysOn": null,
        "apiDefinition": null,
        "apiManagementConfig": null,
        "appCommandLine": null,
        "appSettings": null,
        "autoHealEnabled": null,
        "autoHealRules": null,
        "autoSwapSlotName": null,
        "azureMonitorLogCategories": null,
        "connectionStrings": null,
        "cors": null,
        "customAppPoolIdentityAdminState": null,
        "customAppPoolIdentityTenantState": null,
        "defaultDocuments": null,
        "detailedErrorLoggingEnabled": null,
        "documentRoot": null,
        "experiments": null,
        "fileChangeAuditEnabled": null,
        "ftpsState": null,
        "functionsRuntimeScaleMonitoringEnabled": null,
        "handlerMappings": null,
        "healthCheckPath": null,
        "http20Enabled": null,
        "httpLoggingEnabled": null,
        "ipSecurityRestrictions": [
          {
            "action": "Allow",
            "description": "Allow all access",
            "ipAddress": "Any",
            "name": "Allow all",
            "priority": 1,
            "subnetMask": null,
            "subnetTrafficTag": null,
            "tag": null,
            "vnetSubnetResourceId": null,
            "vnetTrafficTag": null
          }
        ],
        "javaContainer": null,
        "javaContainerVersion": null,
        "javaVersion": null,
        "limits": null,
        "linuxFxVersion": null,
        "loadBalancing": null,
        "localMySqlEnabled": null,
        "logsDirectorySizeLimit": null,
        "machineKey": null,
        "managedPipelineMode": null,
        "managedServiceIdentityId": null,
        "metadata": null,
        "minTlsVersion": null,
        "netFrameworkVersion": null,
        "nodeVersion": null,
        "numberOfWorkers": null,
        "phpVersion": null,
        "powerShellVersion": null,
        "preWarmedInstanceCount": null,
        "publishingPassword": null,
        "publishingUsername": null,
        "push": null,
        "pythonVersion": null,
        "remoteDebuggingEnabled": null,
        "remoteDebuggingVersion": null,
        "requestTracingEnabled": null,
        "requestTracingExpirationTime": null,
        "routingRules": null,
        "runtimeADUser": null,
        "runtimeADUserPassword": null,
        "scmIpSecurityRestrictions": [
          {
            "action": "Allow",
            "description": "Allow all access",
            "ipAddress": "Any",
            "name": "Allow all",
            "priority": 1,
            "subnetMask": null,
            "subnetTrafficTag": null,
            "tag": null,
            "vnetSubnetResourceId": null,
            "vnetTrafficTag": null
          }
        ],
        "scmIpSecurityRestrictionsUseMain": null,
        "scmType": null,
        "tracingOptions": null,
        "use32BitWorkerProcess": null,
        "virtualApplications": null,
        "vnetName": null,
        "webSocketsEnabled": null,
        "websiteTimeZone": null,
        "winAuthAdminState": null,
        "winAuthTenantState": null,
        "windowsFxVersion": null,
        "xManagedServiceIdentityId": null
      },
      "slotSwapStatus": null,
      "state": "Running",
      "suspendedTill": null,
      "tags": null,
      "targetSwapSlot": null,
      "trafficManagerHostNames": null,
      "type": "Microsoft.Web/sites",
      "usageState": "Normal"
    }



## （4）設定 Web App 作業環境
| Configuration Area                            | Setting             | Recommended Value | Purpose                                       |
| --------------------------------------------- | ------------------- | ----------------- | --------------------------------------------- |
| Settings -> Configuration -> General Settings | FTP State           | Disabled          | Disables FTP and FTPS deployments             |
| Settings -> Configuration -> General Settings | Remote Debugging    | Disabled          | Stops remote application access for debuggers |
| Settings -> TLS/SSL Settings                  | HTTPS only          | On                | Requires HTTPS connections                    |
| Settings -> TLS/SSL Settings                  | Minimum TLS Version | 1.2               | Requires minimum TLS 1.2                      |




# 資料庫建置作業

使用 Azure Postgres Service 用於納管資料庫。


## 建立資料庫伺服器


    az deployment group create \
      --resource-group your_resource_group \
      --template-file .arm-templates/db/template.json \
      --parameters server_name='mydatabase' region_code='southeastasia'



    az deployment group create \
      --resource-group myResourceGroup \
      --parameters server_name='ccc99-tw' region_code='southeastasia'



## 建立資料庫與管理者

於伺服器**建立資料庫，並設定該資料庫擁有者之帳號及密碼**


    psql -v sslmode=true --host=ccc99-tw.postgres.database.azure.com --username=alanjui@ccc99-tw --dbname=postgres
    
    CREATE DATABASE django_on_docker_db;
    CREATE USER django_on_docker_user@ccc99-tw WITH ENCRYPTED PASSWORD 'Passw0rd';
    GRANT ALL PRIVILEGES ON DATABASE django_on_docker_db TO django_on_docker_user;




# 靜態檔容器建置作業

使用 Azure Storage 容器，用於存放如； static 與 media 等靜態檔案。


## 建立 Storage Account

在 myResourceGroup 的 Resource Group 中，建立名稱為： ccc99twstorage 的 Storage Account 。


    az storage account create -n ccc99twstorage -g myResourceGroup -l westus --sku Standard_LRS --https-only true 
    {- Finished ..
      "accessTier": "Hot",
      "azureFilesIdentityBasedAuthentication": null,
      "blobRestoreStatus": null,
      "creationTime": "2020-05-25T13:01:52.724547+00:00",
      "customDomain": null,
      "enableHttpsTrafficOnly": true,
      "encryption": {
        "keySource": "Microsoft.Storage",
        "keyVaultProperties": null,
        "services": {
          "blob": {
            "enabled": true,
            "keyType": "Account",
            "lastEnabledTime": "2020-05-25T13:01:52.787032+00:00"
          },
          "file": {
            "enabled": true,
            "keyType": "Account",
            "lastEnabledTime": "2020-05-25T13:01:52.787032+00:00"
          },
          "queue": null,
          "table": null
        }
      },
      "failoverInProgress": null,
      "geoReplicationStats": null,
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/ccc99twstorage",
      "identity": null,
      "isHnsEnabled": null,
      "kind": "StorageV2",
      "largeFileSharesState": null,
      "lastGeoFailoverTime": null,
      "location": "westus",
      "name": "ccc99twstorage",
      "networkRuleSet": {
        "bypass": "AzureServices",
        "defaultAction": "Allow",
        "ipRules": [],
        "virtualNetworkRules": []
      },
      "primaryEndpoints": {
        "blob": "https://ccc99twstorage.blob.core.windows.net/",
        "dfs": "https://ccc99twstorage.dfs.core.windows.net/",
        "file": "https://ccc99twstorage.file.core.windows.net/",
        "internetEndpoints": null,
        "microsoftEndpoints": null,
        "queue": "https://ccc99twstorage.queue.core.windows.net/",
        "table": "https://ccc99twstorage.table.core.windows.net/",
        "web": "https://ccc99twstorage.z22.web.core.windows.net/"
      },
      "primaryLocation": "westus",
      "privateEndpointConnections": [],
      "provisioningState": "Succeeded",
      "resourceGroup": "myResourceGroup",
      "routingPreference": null,
      "secondaryEndpoints": null,
      "secondaryLocation": null,
      "sku": {
        "name": "Standard_LRS",
        "tier": "Standard"
      },
      "statusOfPrimary": "available",
      "statusOfSecondary": null,
      "tags": {},
      "type": "Microsoft.Storage/storageAccounts"
    }



## 建立 static 與 media 容器


**建立 static container**


    az storage container create -n static --account-name ccc99twstorage --public-access blob


**建立 static container**


    az storage container create -n media --account-name ccc99twstorage --public-access blob



## 取得 Storage Key


    $ az storage account keys list -n ccc99twstorage -g myResourceGroup
    [
      {
        "keyName": "key1",
        "permissions": "Full",
        "value": "g0XVx47utOAnOw4hKxCr/tfPj+MNKGbFF3138K970aHF5vSw8Y2TeZZiUpKaIt2qlo3t7BkFg3GVEs3YCo3Dmg=="
      },
      {
        "keyName": "key2",
        "permissions": "Full",
        "value": "AX+3JjcXrsQytICw83M2UkxPOGGaVt/DhV+ahEnGdQRuoI6UrHJs7y+GR0Cgcw5dWRQGblddGvy0KCk6RUq/Qg=="
      }
    ]


# 佈署作業



## 備妥啟動指令檔（startup script）

For Django 3, on the P2V2 Service Plan, use ASGI (async WSGI) instead of WSGI. 


    gunicorn --workers 8 --threads 4 --timeout 60 --access-logfile \
        '-' --error-logfile '-' --bind=0.0.0.0:8000  -k uvicorn.workers.UvicornWorker \
         --chdir=/home/site/wwwroot django_on_azure.asgi

Make sure you add `uvicorn` to the `requirements.txt` file.


For Django 2, use the WSGI entry point with Gunicorn


    gunicorn --workers 8 --threads 4 --timeout 60 --access-logfile \
        '-' --error-logfile '-' --bind=0.0.0.0:8000 \
         --chdir=/home/site/wwwroot django_on_azure.wsgi


將 startup.sh 設定成 startup command

Settings -> Configuration -> General Settings -> Startup command




## 設定 Azure Web App 環境變數


    az webapp config appsettings set --name <app-name> --resource-group <resourcegroup-name> --settings ...


    az webapp config appsettings set --name app-production --resource-group myResourceGroup --settings @env_prod.json
    [
      {
        "name": "DEBUG",
        "slotSetting": false,
        "value": "0"
      },
      {
        "name": "SECRET_KEY",
        "slotSetting": false,
        "value": "ChangeToVeganWorldToSaveLife"
      },
      {
        "name": "DJANGO_ALLOWED_HOSTS",
        "slotSetting": false,
        "value": "localhost 127.0.0.1 django-on-docker.azurewebsites.net"
      },
      {
        "name": "DB_ENGINE",
        "slotSetting": false,
        "value": "django.db.backends.postgresql"
      },
      {
        "name": "DB_HOST",
        "slotSetting": false,
        "value": "ccc99-tw.postgres.database.azure.com"
      },
      {
        "name": "DB_PORT",
        "slotSetting": false,
        "value": "5432"
      },
      {
        "name": "DB_DATABASE",
        "slotSetting": false,
        "value": "django_on_docker_db"
      },
      {
        "name": "DB_USER",
        "slotSetting": false,
        "value": "django_on_docker_user"
      },
      {
        "name": "DB_PASSWORD",
        "slotSetting": false,
        "value": "Passw0rd"
      },
      {
        "name": "DATABASE",
        "slotSetting": false,
        "value": "postgres"
      }
    ]



## 自開發機佈署 Azure Web App


Azure Web App 預設的佈署作業程序：
 1. 依據 requirements.txt 檔案，安裝 Python 套件；
 2. 執行 Django 指令： python manage.py collectstatic
 

**（1）設定 Git 容器**


    git remote add staging <staging-git-url>
    git remote add production <production-git-url>



    git remote add production https://app-production.scm.azurewebsites.net:443/app-production.git


**（2）將原始碼置入 Git 容器**


    git push staging master
    git push production master

Web App 終端機

（1）

    cd ~/homt/site/wwwroot
    source /antenv/bin/activate
    


（2）

    





# Azure CLI


https://docs.microsoft.com/zh-tw/cli/azure/?view=azure-cli-latest




    # Get the blob service account url for the storage account
    az storage account show -n ccc99twstorage -g myResourceGroup --query "primaryEndpoints.blob"
    "https://ccc99twstorage.blob.core.windows.net/"

**建置 Resource Group**


    az group create -l centralus -n PythonSDKExample-WebApp-rg


    az group create -l westus -n myResourceGroup

**建置 App Service Plan**


    az appservice plan create -n PythonSDKExample-WebApp-plan --is-linux --sku B1

建置 Web App 


    az webapp create -g PythonSDKExample-WebApp-rg \
        -n PythonSDKExample-WebApp-ccc99tw \
        --plan PythonSDKExample-WebApp-plan --runtime "python|3.8"


    az webapp create -g myResourceGroup \
        -n PythonSDKExample-WebApp-ccc99tw \
        --plan PythonSDKExample-WebApp-plan --runtime "python|3.8"



    az webapp create -g myResourceGroup \
        -n provision-deploy-webapp \
        --plan PythonSDKExample-WebApp-plan --runtime "python|3.8"



**建置 Web App (2)：指定 Git Repo URL**


    az webapp create -n PythonSDKExample-WebApp-ccc99tw \
      --plan PythonSDKExample-WebApp-plan \
      --deployment-source-url https://github.com/AlanJui/python-docs-hello-world \
      --runtime "python|3.8"




## 實作流程

**建置 Resource Group**


    az group create -l westus -n myResourceGroup

**建置 App Service Plan**


    az appservice plan create -n PythonSDKExample-WebApp-plan --is-linux --sku B1

建置 Web App 


    az webapp create -g myResourceGroup \
        -n provision-deploy-webapp \
        --plan PythonSDKExample-WebApp-plan \
        --runtime "python|3.8"

透過指定的 **Git Repo URL 佈署**


    REPO_URL = "https://github.com/AlanJui/python-docs-hello-world.git"
    
    poller = app_service_client.web_apps.create_or_update_source_control(
        RESOURCE_GROUP_NAME,
        WEB_APP_NAME,
        {
          'localtion': 'GitHub',
          'repo_url': REPO_URL,
          'branch': 'master'
        }
    )
    
    sc_result = poller.result()


**（1）設定 WEB APP 相關環境變數**


    source ~/.zshrc

~/.profile

    ...
    export AZURE_SUBSCRIPTION_ID="bdbe86f1-40d5-4305-99ce-bb6ea7c085c7"
    export AZURE_TENANT_ID="ff3e1c6b-0fd2-4651-8898-fa9429981c8b"
    export AZURE_CLIENT_ID="be6223fe-527e-4af8-9d81-97657212b9ea"
    export AZURE_CLIENT_SECRET="[$FJU41C/7>Byt6<%!]+w0\\&*yt\\E5J{"
    export WEB_APP_NAME="provision-deploy-webapp"
    export REPO_URL="https://github.com/AlanJui/python-docs-hello-world"


**（2）啟動專案虛擬環境及安裝專案所需 Python 套件**


    source .venv/bin/activate
    pip install -r requirements.txt


**（3）執行 WEB APP 佈署程式**


    $ python provision_deploy_webapp.py
    Provisioned resource group myResourceGroup
    Provisioned App Service plan PythonSDKExample-WebApp-plan
    Set source control on web app to master branch of https://github.com/AlanJui/python-docs-hello-world




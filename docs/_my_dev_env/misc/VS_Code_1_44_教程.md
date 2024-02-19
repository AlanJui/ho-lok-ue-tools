# VS Code 1.44 教程


https://code.visualstudio.com/updates/v1_44#_python




https://code.visualstudio.com/docs/containers/quickstart-python




https://docs.microsoft.com/zh-tw/cli/azure/install-azure-cli-apt?view=azure-cli-latest



https://docs.microsoft.com/zh-tw/azure/container-registry/container-registry-get-started-portal





https://code.visualstudio.com/docs/containers/tutorial-django-push-to-registry





https://docs.microsoft.com/zh-tw/azure/developer/python/tutorial-deploy-containers-01



https://code.visualstudio.com/docs/python/tutorial-django




https://code.visualstudio.com/docs/python/debugging




https://code.visualstudio.com/docs/python/python-tutorial




https://docs.microsoft.com/zh-tw/cli/azure/?view=azure-cli-latest






----------
https://github.com/microsoft/python-sample-vscode-django-tutorial/tree/tutorial



https://code.visualstudio.com/docs/containers/quickstart-python




https://docs.microsoft.com/zh-tw/azure/container-registry/container-registry-get-started-portal



https://code.visualstudio.com/docs/containers/tutorial-django-push-to-registry





----------


# 使用 GitHub 範例檔


1. 
    git clone git@github.com:microsoft/python-sample-vscode-django-tutorial.git


2. Setup version of python interpreter to  3.8.2
    pyenv local 3.8.2


3. Verify 
    python --version


4. Create a subdirectory named env for virtual environment in current directory of project
    python -m venv env


5. Activate the virtual environment by running 
    source env/bin/activate


6. Install python package
    pip install -r requirements.txt

 7. Create and initialize the database by running 

    python manage.py migrate

 8. Create an account for admin

    python manage.py createsuperuser

 9. Collect static files

    python manage.py collectstatic


10. Run App
    python manage.py runserver 8000



launch.json

    {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Docker: Python - Django",
                "type": "docker",
                "request": "launch",
                "preLaunchTask":  "docker-run: debug",
                "python": {
                    "pathMappings": [
                        {
                            "localRoot": "${workspaceFolder}",
                            "remoteRoot": "/app"
                        }
                    ],
                    "projectType": "django"
                }
            },
            {
                "name": "Python: Current File (Integrated Terminal)",
                "type": "python",
                "request": "launch",
                "program": "${file}",
                "console": "integratedTerminal"
            },
            {
                "name": "Python: Attach",
                "type": "python",
                "request": "attach",
                "port": 5678,
                "host": "localhost"
            },
            {
                "name": "Python: Django",
                "type": "python",
                "request": "launch",
                "program": "${workspaceFolder}/manage.py",
                "console": "integratedTerminal",
                "args": [
                    "runserver",
                    "--noreload",
                    "--nothreading"
                ],
                "django": true
            },
            {
                "name": "Python: Current File (External Terminal)",
                "type": "python",
                "request": "launch",
                "program": "${file}",
                "console": "externalTerminal"
            }
        ]
    }


settings.py


     ALLOWED_HOSTS = [
      'localhost',
      '127.0.0.1',
      'mydjangoapp001.azurewebsites.net',
    ]



    $ az acr login --name mydjangoapp001



    $ docker build --tag my-django-app-001 .
    ...
    $ docker run -p 8000:8000 my-django-app-001
    ...
    $ docker tag my-django-app-001 mydjangoapp001.azurecr.io/my-django-app-001:latest
    ...
    $ docker push mydjangoapp001.azurecr.io/my-django-app-001:latest



將映像推送至您的容器登錄之後，請從您的本機 Docker 環境中移除 hello-world:v1 映像。 (請注意，此 docker rmi 命令並不會從 Azure 容器登錄中的 hello-world 存放區移除映像。)

docker rmi <acrLoginServer>/hello-world:v1




    docker run mydjangoapp001.azurecr.io/django-tutorial:v2




    $ pipenv lock --requirements > requirements.txt
    $ docker build -t mydjangoapp001.azurecr.io/my-django-app-001 .
    $ docker images
    REPOSITORY                                    TAG                   IMAGE ID            CREATED             SIZE
    my-django-app-001                             latest                f99755fd7f7c        29 minutes ago      219MB
    mydjangoapp001.azurecr.io/my-django-app-001   latest                f99755fd7f7c        29 minutes ago      219MB
    ccc99docker001.azurecr.io/my-docker-image     v1.1.0                e377e2b4a1f6        10 hours ago        994MB
    my-docker-image                               latest                e377e2b4a1f6        10 hours ago        994MB
    ccc99docker001.azurecr.io/my-docker-image     v1.0.0                bcb46af95658        23 hours ago        994MB
    



    $ az acr login --name mydjangoapp001
    $ docker run -p 8000:8000 mydjangoapp001.azurecr.io/my-django-app-001
    ...
    $ docker ps
    CONTAINER ID        IMAGE                                         COMMAND                  CREATED             STATUS              PORTS                                     NAMES
    862678c714d9        mydjangoapp001.azurecr.io/my-django-app-001   "sh /entrypoint.sh /…"   56 seconds ago      Up 55 seconds       80/tcp, 443/tcp, 0.0.0.0:8000->8000/tcp   busy_bassi
    
    $ docker stop 862
    862
    
    docker ps
    CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
    



    $ docker push mydjangoapp001.azurecr.io/my-django-app-001:latest







----------



    az webapp up --sku F1 -n ccc99-tw-app-001
    Webapp ccc99-tw-app-001 already exists. The command will deploy contents to the existing app.
    Creating zip with contents of dir /home/alanjui/workspace/django/python-sample-vscode-django-tutorial ...
    Getting scm site credentials for zip deployment
    Starting zip deployment. This operation can take a while to complete ...
    Deployment endpoint responded with status code 202
    You can launch the app at http://ccc99-tw-app-001.azurewebsites.net
    {
      "URL": "http://ccc99-tw-app-001.azurewebsites.net",            
      "appserviceplan": "appsvc_linux_centralus",
      "location": "centralus",
      "name": "ccc99-tw-app-001",
      "os": "Linux",
      "resourcegroup": "appsvc_linux_centralus",
      "runtime_version": "python|3.7",
      "runtime_version_detected": "-",
      "sku": "FREE",
      "src_path": "//home//alanjui//workspace//django//python-sample-vscode-django-tutorial"
    }





----------


# Azure教程

透過 CLI 介面的 Azure Cloud Shell ，將容器的「影像檔」發佈至 ACR (Azure Container Registry)，並將此「容器」佈署成為「網路服務」（Azure App Service）。

https://docs.microsoft.com/zh-tw/azure/app-service/containers/tutorial-custom-docker-image


〖註〗：以下為：「如何在 VS Code 安裝 Azure Cloud Shell」之參考文件。

https://dev.to/azure/how-to-use-cloud-shell-in-visual-studio-code-3acf




## 下載範例

在終端機視窗中執行下列命令，將範例應用程式存放庫複製到本機電腦，然後變更為包含範例程式碼的目錄。

bash

    git clone https://github.com/Azure-Samples/docker-django-webapp-linux.git --config core.autocrlf=input
    
    cd docker-django-webapp-linux


    pyenv install 3.4.10
    pyenv local 3.4.10
    pyenv version
    python --version
    pip install pipenv
    pipenv --python 3.4
    pipenv shell
    pipenv install -r requirements.txt


## 從 Docker 檔案建立映像

在 Git 存放庫中，看看 *Dockerfile*。 此檔案會描述執行您應用程式所需的 Python 環境。 此外，映像會設定 [SSH](https://www.ssh.com/ssh/protocol/) 伺服器，以在容器與主機之間進行安全通訊。 *Dockerfile* 的最後一行 `ENTRYPOINT ["init.sh"]` 會叫用 `init.sh` 來啟動 SSH 服務和 Python 伺服器。

Dockerfile

    FROM python:3.4
    
    RUN mkdir /code
    WORKDIR /code
    ADD requirements.txt /code/
    RUN pip install -r requirements.txt
    ADD . /code/
    
    # ssh
    ENV SSH_PASSWD "root:Docker!"
    RUN apt-get update \
            && apt-get install -y --no-install-recommends dialog \
            && apt-get update \
        && apt-get install -y --no-install-recommends openssh-server \
        && echo "$SSH_PASSWD" | chpasswd 
    
    COPY sshd_config /etc/ssh/
    COPY init.sh /usr/local/bin/
        
    RUN chmod u+x /usr/local/bin/init.sh
    EXPOSE 8000 2222
    
    #service SSH start
    #CMD ["python", "/code/manage.py", "runserver", "0.0.0.0:8000"]
    ENTRYPOINT ["init.sh"]

使用 `docker build` 命令建置 Docker 映像。

bash

    docker build --tag mydockerimage .


    docker build --tag my-docker-image .

測試組建運作的方式是執行 Docker 容器。 發出 `[docker run](https://docs.docker.com/engine/reference/commandline/run/)` 命令，並將映像的名稱和標記傳遞給它。 請務必使用 `-p` 引數來指定連接埠。

bash

    docker run -p 8000:8000 mydockerimage


    docker run -p 8000:8000 my-docker-image

驗證 web 應用程式和容器是否會正常運作，方法是瀏覽至 `http://localhost:8000`。

![在本機測試 Web 應用程式](https://docs.microsoft.com/zh-tw/azure/app-service/containers/media/app-service-linux-using-custom-docker-image/app-service-linux-browse-local.png)




## 建立資源群組

[資源群組](https://docs.microsoft.com/zh-tw/azure/azure-resource-manager/management/overview#terminology)是一個邏輯容器，可在其中部署與管理 Azure 資源 (例如 Web 應用程式、資料庫和儲存體帳戶)。 例如，您可以選擇在稍候透過一個簡單的步驟刪除整個資源群組。

在 Cloud Shell 中，使用 `[az group create](https://docs.microsoft.com/zh-tw/cli/azure/group?view=azure-cli-latest#az-group-create)` 命令來建立資源群組。 下列範例會在「美國西部」 位置建立名為 myResourceGroup 的資源群組。 若要查看**基本**層中 Linux 上之 App Service 的所有支援位置，請執行 `[az appservice list-locations --sku B1 --linux-workers-enabled](https://docs.microsoft.com/zh-tw/cli/azure/appservice?view=azure-cli-latest#az-appservice-list-locations)` 命令。

Azure CLI

    az group create --name myResourceGroup --location "West US"

當命令完成時，JSON 輸出會顯示資源群組屬性。



## 建立 Azure Container Registry

在 Cloud Shell 中，使用 `[az acr create](https://docs.microsoft.com/zh-tw/cli/azure/acr?view=azure-cli-latest#az-acr-create)` 命令來建立 Azure Container Registry。
Azure CLI

    az acr create --name <azure-container-registry-name> --resource-group myResourceGroup --sku Basic --admin-enabled true


    az acr create --name ccc99docker001 --resource-group myResourceGroup --sku Basic --admin-enabled true



## 登入 Azure Container Registry

若要將映像推送至登錄，您需要向私人登錄進行驗證。 在 Cloud Shell 中，使用 `[az acr show](https://docs.microsoft.com/zh-tw/cli/azure/acr?view=azure-cli-latest#az-acr-show)` 命令從您所建立的登錄中擷取認證。

Azure CLI

    az acr credential show --name <azure-container-registry-name>

輸出會顯示兩個密碼及使用者名稱。

JSON

    {
      "passwords": [
        {
          "name": "password",
          "value": "{password}"
        },
        {
          "name": "password2",
          "value": "{password}"
        }
      ],
      "username": "<registry-username>"
    }

使用 `docker login` 命令從本機終端機視窗登入 Azure Container Registry，如下列範例所示。 將 *<azure-container-registry-name>* 和 *<registry-username>* 取代為您的登錄值。 出現提示時，輸入上一個步驟中的其中一個密碼。

bash

    docker login <azure-container-registry-name>.azurecr.io --username <registry-username>

確認登入成功。


    $ az acr credential show --name ccc99docker001
    {
      "passwords": [
        {
          "name": "password",
          "value": "gOMvbs5SoSOhALw=EkhbjME4cqShN/GY"
        },
        {
          "name": "password2",
          "value": "Es+DrREIJ38WK2mgX3wV9pL4DTcIxqlZ"
        }
      ],
      "username": "ccc99docker001"
    }
    
    $ docker login ccc99docker001.azurecr.io --username ccc99docker001




## 將映像推送至 Azure Container Registry

標記 Azure Container Registry 的本機映像。 例如：

bash

    docker tag mydockerimage <azure-container-registry-name>.azurecr.io/mydockerimage:v1.0.0

使用 `docker push` 命令來推送映像。 以登錄名稱再接著映像名稱和標籤來標記映像。

bash

    docker push <azure-container-registry-name>.azurecr.io/mydockerimage:v1.0.0



    $ docker tag my-docker-image ccc99docker001.azurecr.io/my-docker-image:v1.0.0
    ...
    $ docker push ccc99docker001.azurecr.io/my-docker-image:v1.0.0


在 Cloud Shell 中，確認推送已成功。

Azure CLI

    az acr repository list -n <azure-container-registry-name>

您應該會取得下列輸出。

JSON

    [
      "mydockerimage"
    ]



    $ az acr repository list -n ccc99docker001
    [
      "my-docker-image"
    ]




## 建立 App Service 方案

在 Cloud Shell 中，使用 `[az appservice plan create](https://docs.microsoft.com/zh-tw/cli/azure/appservice/plan?view=azure-cli-latest#az-appservice-plan-create)` 命令在資源群組中建立 App Service 方案。

下列範例會在**免費**定價層 (`--sku F1`) 和 Linux 容器 (`--is-linux`) 中，建立名為 `myAppServicePlan` 的 App Service 方案。

Azure CLI

    az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku F1 --is-linux

建立 App Service 方案後，Azure CLI 會顯示類似下列範例的資訊：

JSON

    { 
      "adminSiteName": null,
      "appServicePlanName": "myAppServicePlan",
      "geoRegion": "West Europe",
      "hostingEnvironmentProfile": null,
      "id": "/subscriptions/0000-0000/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/myAppServicePlan",
      "kind": "linux",
      "location": "West Europe",
      "maximumNumberOfWorkers": 1,
      "name": "myAppServicePlan",
      < JSON data removed for brevity. >
      "targetWorkerSizeId": 0,
      "type": "Microsoft.Web/serverfarms",
      "workerTierName": null
    } 



    $ az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku F1 --is-linux
    {- Finished ..
      "freeOfferExpirationTime": null,
      "geoRegion": "West US",
      "hostingEnvironmentProfile": null,
      "hyperV": false,
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/myAppServicePlan",
      "isSpot": false,
      "isXenon": false,
      "kind": "linux",
      "location": "West US",
      "maximumElasticWorkerCount": 1,
      "maximumNumberOfWorkers": 1,
      "name": "myAppServicePlan",
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
      "subscription": "bdbe86f1-40d5-4305-99ce-bb6ea7c085c7",gOMvbs5SoSOhALw=EkhbjME4cqShN/GY
      "tags": null,
      "targetWorkerCount": 0,
      "targetWorkerSizeId": 0,
      "type": "Microsoft.Web/serverfarms",
      "workerTierName": null
    }



## 建立 Web 應用程式

在 Cloud Shell 中，使用 `[az webapp create](https://docs.microsoft.com/zh-tw/cli/azure/webapp?view=azure-cli-latest#az-webapp-create)` 命令，在 `myAppServicePlan` App Service 方案中建立 [Web 應用程式](https://docs.microsoft.com/zh-tw/azure/app-service/containers/app-service-linux-intro)。 將 *<app-name>* 取代為唯一的應用程式名稱，將 *<azure-container-registry-name>* 取代為您的登錄名稱。

Azure CLI

    az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name <app-name> --deployment-container-image-name <azure-container-registry-name>.azurecr.io/mydockerimage:v1.0.0

建立 Web 應用程式後，Azure CLI 會顯示類似下列範例的輸出：

JSON

    {
      "availabilityState": "Normal",
      "clientAffinityEnabled": true,
      "clientCertEnabled": false,
      "cloningInfo": null,
      "containerSize": 0,
      "dailyMemoryTimeQuota": 0,
      "defaultHostName": "<app-name>.azurewebsites.net",
      "deploymentLocalGitUrl": "https://<username>@<app-name>.scm.azurewebsites.net/<app-name>.git",
      "enabled": true,
      < JSON data removed for brevity. >
    }



    $ az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name ccc99docker001 --deployment-container-image-name ccc99docker001.azurecr.io/my-docker-image:v1.0.0
    No credential was provided to access Azure Container Registry. Trying to look up...
    {
      "availabilityState": "Normal",
      "clientAffinityEnabled": true,
      "clientCertEnabled": false,
      "clientCertExclusionPaths": null,
      "cloningInfo": null,
      "containerSize": 0,
      "dailyMemoryTimeQuota": 0,
      "defaultHostName": "ccc99docker001.azurewebsites.net",
      "enabled": true,
      "enabledHostNames": [
        "ccc99docker001.azurewebsites.net",
        "ccc99docker001.scm.azurewebsites.net"
      ],
      "ftpPublishingUrl": "ftp://waws-prod-bay-139.ftp.azurewebsites.windows.net/site/wwwroot",
      "hostNameSslStates": [
        {
          "hostType": "Standard",
          "ipBasedSslResult": null,
          "ipBasedSslState": "NotConfigured",
          "name": "ccc99docker001.azurewebsites.net",
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
          "name": "ccc99docker001.scm.azurewebsites.net",
          "sslState": "Disabled",
          "thumbprint": null,
          "toUpdate": null,
          "toUpdateIpBasedSsl": null,
          "virtualIp": null
        }
      ],
      "hostNames": [
        "ccc99docker001.azurewebsites.net"
      ],
      "hostNamesDisabled": false,
      "hostingEnvironmentProfile": null,
      "httpsOnly": false,
      "hyperV": false,
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/sites/ccc99docker001",
      "identity": null,
      "inProgressOperationId": null,
      "isDefaultContainer": null,
      "isXenon": false,
      "kind": "app,linux,container",
      "lastModifiedTimeUtc": "2020-04-19T12:31:22.486666",
      "location": "West US",
      "maxNumberOfWorkers": null,
      "name": "ccc99docker001",
      "outboundIpAddresses": "40.112.243.7,40.118.229.231,13.64.89.216,40.78.16.175,52.160.111.150",
      "possibleOutboundIpAddresses": "40.112.243.7,40.118.229.231,13.64.89.216,40.78.16.175,52.160.111.150,13.64.91.216,13.64.94.144,13.91.124.136,13.91.125.204,40.118.239.192",
      "redundancyMode": "None",
      "repositorySiteName": "ccc99docker001",
      "reserved": true,
      "resourceGroup": "myResourceGroup",
      "scmSiteAlsoStopped": false,
      "serverFarmId": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/myAppServicePlan",
      "siteConfig": null,
      "slotSwapStatus": null,
      "state": "Running",
      "suspendedTill": null,
      "tags": null,
      "targetSwapSlot": null,
      "trafficManagerHostNames": null,
      "type": "Microsoft.Web/sites",
      "usageState": "Normal"
    }



## 在 Web 應用程式中設定登錄認證

若要使 App Service 提取私人映像，它需要有關您的登錄和映像的相關資訊。 在 Cloud Shell 中，為他們提供 `[az webapp config container set](https://docs.microsoft.com/zh-tw/cli/azure/webapp/config/container?view=azure-cli-latest#az-webapp-config-container-set)` 命令。 取代 *<app-name>* 、 *<azure-container-registry-name>* 、 *<registry-username>* 及 *<password>* 。

Azure CLI

    az webapp config container set --name <app-name> --resource-group myResourceGroup --docker-custom-image-name <azure-container-registry-name>.azurecr.io/mydockerimage:v1.0.0 --docker-registry-server-url https://<azure-container-registry-name>.azurecr.io --docker-registry-server-user <registry-username> --docker-registry-server-password <password>

注意
使用 Docker Hub 以外的登錄時，`--docker-registry-server-url` 必須格式化為 `https://`，後面加上登錄的完整網域名



    $ az webapp config container set --name ccc99docker001 --resource-group myResourceGroup --docker-custom-image-name ccc99docker001.azurecr.io/my-docker-image:v1.0.0 --docker-registry-server-url https://ccc99docker001.azurecr.io --docker-registry-server-user ccc99docker001 --docker-registry-server-password gOMvbs5SoSOhALw=EkhbjME4cqShN/GY
    [
      {
        "name": "WEBSITES_ENABLE_APP_SERVICE_STORAGE",
        "slotSetting": false,
        "value": "false"
      },
      {
        "name": "DOCKER_REGISTRY_SERVER_URL",
        "slotSetting": false,
        "value": "https://ccc99docker001.azurecr.io"
      },
      {
        "name": "DOCKER_REGISTRY_SERVER_USERNAME",
        "slotSetting": false,
        "value": "ccc99docker001"
      },
      {
        "name": "DOCKER_REGISTRY_SERVER_PASSWORD",
        "slotSetting": false,
        "value": null
      },
      {
        "name": "DOCKER_CUSTOM_IMAGE_NAME",
        "value": "DOCKER|ccc99docker001.azurecr.io/my-docker-image:v1.0.0"
      }
    ]




## 設定環境變數

大部分的 Docker 映像會使用自訂環境變數，例如 80 以外的連接埠。 可告訴 App Service 您映像所使用的連接埠，方法是使用 `WEBSITES_PORT` 應用程式設定。 [本教學課程中的 Python 範例](https://github.com/Azure-Samples/docker-django-webapp-linux) GitHub 頁面說明您必須將 `WEBSITES_PORT` 設定為 *8000*。

若要設定應用程式的設定，請在 Cloud Shell 中使用 `[az webapp config appsettings set](https://docs.microsoft.com/zh-tw/cli/azure/webapp/config/appsettings?view=azure-cli-latest#az-webapp-config-appsettings-set)` 命令。 應用程式設定為區分大小寫和空格分隔。

Azure CLI

    az webapp config appsettings set --resource-group myResourceGroup --name <app-name> --settings W


    $ az webapp config appsettings set --resource-group myResourceGroup --name ccc99docker001 --settings WEBSITES_PORT=8000
    [
      {
        "name": "WEBSITES_ENABLE_APP_SERVICE_STORAGE",
        "slotSetting": false,
        "value": "false"
      },
      {
        "name": "DOCKER_REGISTRY_SERVER_URL",
        "slotSetting": false,
        "value": "https://ccc99docker001.azurecr.io"
      },
      {
        "name": "DOCKER_REGISTRY_SERVER_USERNAME",
        "slotSetting": false,
        "value": "ccc99docker001"
      },
      {
        "name": "DOCKER_REGISTRY_SERVER_PASSWORD",
        "slotSetting": false,
        "value": null
      },
      {
        "name": "WEBSITES_PORT",
        "slotSetting": false,
        "value": "8000"
      }
    ]



## 測試 Web 應用程式

瀏覽至 Web 應用程式以確認它可運作 (https://<app-name>.azurewebsites.net)。


    https://ccc99docker001.azurewebsites.net/

注意

第一次存取應用程式時，可能需要一些時間，因為 App Service 必須提取整個映像。 如果瀏覽器逾時，只需重新整理頁面即可。


![測試 web 應用程式連接埠設定](https://docs.microsoft.com/zh-tw/azure/app-service/containers/media/app-service-linux-using-custom-docker-image/app-service-linux-browse-azure.png)



## 變更 Web 應用程式並重新部署

在您的本機 Git 存放庫中，開啟 app/templates/app/index.html。 找出第一個 HTML 元素，並將它加以變更。

Python

    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Azure App Service - Updated Here!</a>
          </div>
        </div>
      </nav>

一旦您修改了 Python 檔案並加以儲存後，必須重建並推送新的 Docker 映像。 接著，重新啟動 Web 應用程式，變更才會生效。 使用您先前已在本教學課程中使用的相同命令。 您可以參考[從 Docker 檔案建立映像](https://docs.microsoft.com/zh-tw/azure/app-service/containers/tutorial-custom-docker-image#build-the-image-from-the-docker-file)和[將映像推送至 Azure Container Registry](https://docs.microsoft.com/zh-tw/azure/app-service/containers/tutorial-custom-docker-image#push-image-to-azure-container-registry)。 遵循[測試 Web 應用程式](https://docs.microsoft.com/zh-tw/azure/app-service/containers/tutorial-custom-docker-image#test-the-web-app)中的指示來測試 web 應用程式。


    docker build --tag my-docker-image .
    ...
    docker ps
    ...
    docker stop <ContainerID>
    ...
    docker run -p 8000:8000 my-docker-image



    $ docker tag my-docker-image ccc99docker001.azurecr.io/my-docker-image:v1.1.0
    ...
    $ docker push ccc99docker001.azurecr.io/my-docker-image:v1.1.0
    ...
    $ az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name ccc99docker001 --deployment-container-image-name ccc99docker001.azurecr.io/my-docker-image:v1.1.0




## 存取診斷記錄

您可以存取從容器產生的主控台記錄。 請先在 Cloud Shell 中執行下列命令來開啟容器記錄：

Azure CLI

    az webapp log config --name <app-name> --resource-group myResourceGroup --docker-container-logging filesystem


    $ az webapp log config --name ccc99docker001 --resource-group myResourceGroup --docker-container-logging filesystem
    {
      "applicationLogs": {
        "azureBlobStorage": {
          "level": "Off",
          "retentionInDays": null,
          "sasUrl": null
        },
        "azureTableStorage": {
          "level": "Off",
          "sasUrl": null
        },
        "fileSystem": {
          "level": "Off"
        }
      },
      "detailedErrorMessages": {
        "enabled": false
      },
      "failedRequestsTracing": {
        "enabled": false
      },
      "httpLogs": {
        "azureBlobStorage": {
          "enabled": false,
          "retentionInDays": 3,
          "sasUrl": null
        },
        "fileSystem": {
          "enabled": true,
          "retentionInDays": 3,
          "retentionInMb": 100
        }
      },
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/sites/ccc99docker001/config/logs",
      "kind": null,
      "location": "West US",
      "name": "logs",
      "resourceGroup": "myResourceGroup",
      "type": "Microsoft.Web/sites/config"
    }

開啟容器記錄後，請執行下列命令來查看記錄資料流：

Azure CLI

    az webapp log tail --name <app-name> --resource-group myResourceGroup


    $ az webapp log tail --name ccc99docker001 --resource-group myResourceGroup

如果您沒有立即看到主控台記錄，請在 30 秒後再查看。

注意
您也可以在瀏覽器中的 `https://<app-name>.scm.azurewebsites.net/api/logs/docker` 檢查記錄檔。

https://ccc99docker001.scm.azurewebsites.net/api/logs/docker

若要隨時停止記錄資料流，請輸入 `Ctrl`+`C`。



## 啟用 SSH 連線

SSH 可讓容器和用戶端之間進行安全通訊。 若要啟用與容器的 SSH 連線，則必須設定它的自訂映像。 讓我們看一下已經具有必要設定的範例存放庫。


- 在 [Dockerfile](https://github.com/Azure-Samples/docker-django-webapp-linux/blob/master/Dockerfile) 中，下列程式碼會安裝 SSH 伺服器，並也會設定登入認證。
    

Dockerfile

    ENV SSH_PASSWD "root:Docker!"
    RUN apt-get update \
            && apt-get install -y --no-install-recommends dialog \
            && apt-get update \
      && apt-get install -y --no-install-recommends openssh-server \
      && echo "$SSH_PASSWD" | chpasswd 

  

    注意
    此設定不允許容器的外部連線。 SSH 只能透過 Kudu/SCM 站台提供。 Kudu/SCM 站台會向 Azure 帳戶進行驗證。


- [Dockerfile](https://github.com/Azure-Samples/docker-django-webapp-linux/blob/master/Dockerfile#L18) 會將存放庫中的 [sshd_config](https://github.com/Azure-Samples/docker-django-webapp-linux/blob/master/sshd_config) 檔案複製到 /etc/ssh/ 目錄。


    Dockerfile
      COPY sshd_config /etc/ssh/


- [Dockerfile](https://github.com/Azure-Samples/docker-django-webapp-linux/blob/master/Dockerfile#L22) 會公開容器中的連接埠 2222。 它是供內部使用的連接埠，只有私人虛擬網路之橋接網路內的容器可以存取。

Dockerfile

    EXPOSE 8000 2222


- [輸入指令碼](https://github.com/Azure-Samples/docker-django-webapp-linux/blob/master/init.sh#L5)會啟動 SSH 伺服器。

bash

    #!/bin/bash
    service ssh start


**開啟對容器的 SSH 連線**

SSH 連線只能透過 Kudu 站台提供，可在 `https://<app-name>.scm.azurewebsites.net` 存取。
若要連線，請瀏覽至 `https://<app-name>.scm.azurewebsites.net/webssh/host` 並以您的 Azure 帳戶登入。


    https://ccc99docker001.scm.azurewebsites.net/webssh/host

然後，系統會將您重新導向至一個顯示互動式主控台的頁面。

![](https://paper-attachments.dropbox.com/s_9D8ADAD807EF4924D634CFA48524E7FFC4232471F219E6705E5EB4E7BBD5CC16_1587343158936_image.png)


您需要確認特定應用程式正在容器中執行。 若要檢查容器並確認執行的流程，在提示字元提出 `top` 命令。

bash

    top

`top` 命令會公開容器中所有執行中的程序。

    PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND
     1 root      20   0  945616  35372  15348 S  0.0  2.1   0:04.63 node
    20 root      20   0   55180   2776   2516 S  0.0  0.2   0:00.00 sshd
    42 root      20   0  944596  33340  15352 S  0.0  1.9   0:05.80 node /opt/s+
    56 root      20   0   59812   5244   4512 S  0.0  0.3   0:00.93 sshd
    58 root      20   0   20228   3128   2664 S  0.0  0.2   0:00.00 bash
    62 root      20   0   21916   2272   1944 S  0.0  0.1   0:03.15 top
    63 root      20   0   59812   5344   4612 S  0.0  0.3   0:00.03 sshd
    65 root      20   0   20228   3140   2672 S  0.0  0.2   0:00.00 bash
    71 root      20   0   59812   5380   4648 S  0.0  0.3   0:00.02 sshd
    73 root      20   0   20228   3160   2696 S  0.0  0.2   0:00.00 bash
    77 root      20   0   21920   2304   1972 R  0.0  0.1   0:00.00 top

恭喜！ 您已在 App Service 中設定自訂的 Linux 容器。



## 清除部署

在執行過範例指令碼之後，您可以使用下列命令來移除資源群組和所有與其相關聯的資源。

Azure CLI

    az group delete --name myResourceGroup










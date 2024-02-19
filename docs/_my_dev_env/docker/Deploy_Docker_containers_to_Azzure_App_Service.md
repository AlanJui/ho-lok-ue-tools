# Deploy Docker containers to Azzure App Service


# 作業流程



## 建立 ACR


- Resource Group: AzureDocker-rg
- Registry Name: ccc99
- SKU: Standard


## 建立 Django Project


    cd ~/workspace/django
    mkdir my-project && cd $_
    python -m venv .venv
    source .venv/bin/activate
    pip install django
    mkdir django && cd $_
    django-admin startproject web_app .
    code .



## 建立 Django 用 Dockerfile




## 在 ACR 建立 Docker Image 檔案

（1）登入 ACR 。

    az acr login --name ccc99


（2）組建 Django App Docker Image ，並於完成後置入 ACR 。

    az acr build --image ccc99.azurecr.io/my-log:v1 \
      --registry ccc99 \
      --file Dockerfile .


（3）自 VS Code —》Docker —》Registeries 啟動「佈署」指令：

- Globally unique name: my-log-ccc99
- Resource Group: AzureDocker-rg
- Linux App Service Plan: production


（4）自 VS Code —》Azure —》Open Web Site：  https://my-log-ccc99.azurewebsites.net




# 參考文件


## 【文件】：


- [Tutorial: Deploy Docker containers to Azure App Service with Visual Studio Code](https://docs.microsoft.com/en-us/azure/developer/python/tutorial-deploy-containers-01)
- [Python in a container](https://code.visualstudio.com/docs/containers/quickstart-python)
- [Python/Django Tutorial Sample for VS Code](https://github.com/microsoft/python-sample-vscode-django-tutorial/tree/tutorial)



## 【Docker 指令】：

（1）組建 Docker Image 檔案

    docker build


（2）為 Docker Image 檔案添加「標籤」。

    docker tag <ImageName> ccc99.azurecr.io/<ImageName>:<Version>


（3）驗證 Docker Image 的標籤已建立。

    docker images


（4）將 Docker Image 檔案置入 Docker Hub 之類的網站（ACR）。

    docker push ccc99.azurecr.io/<ImageName>:<Version>


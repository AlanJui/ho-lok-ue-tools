# Azure Cloud Service



# 安裝


## 安裝 Azure CLI


    $ brew update && brew install azure-cli
    ⋯⋯
    ==> openssl@1.1
    A CA file has been bootstrapped using certificates from the system
    keychain. To add additional certificates, place .pem files in
      /usr/local/etc/openssl@1.1/certs
    
    and run
      /usr/local/opt/openssl@1.1/bin/c_rehash
    
    openssl@1.1 is keg-only, which means it was not symlinked into /usr/local,
    because macOS provides LibreSSL.
    
    If you need to have openssl@1.1 first in your PATH run:
      echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc
    
    For compilers to find openssl@1.1 you may need to set:
      export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
      export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"
    
    For pkg-config to find openssl@1.1 you may need to set:
      export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"
    
    ==> azure-cli
    Bash completion has been installed to:
      /usr/local/etc/bash_completion.d



    $ az login
    You have logged in. Now let us find all the subscriptions to which you have access...
    [
      {
        "cloudName": "AzureCloud",
        "homeTenantId": "ff3e1c6b-0fd2-4651-8898-fa9429981c8b",
        "id": "bdbe86f1-40d5-4305-99ce-bb6ea7c085c7",
        "isDefault": true,
        "managedByTenants": [],
        "name": "Azure subscription 1",
        "state": "Enabled",
        "tenantId": "ff3e1c6b-0fd2-4651-8898-fa9429981c8b",
        "user": {
          "name": "AlanJui@outlook.com",
          "type": "user"
        }
      }
    ]
    




# 佈署 docker-compose 應用系統至 Azure



https://docs.microsoft.com/zh-tw/azure/virtual-machines/linux/docker-compose-quickstart



[Deployment of WordPress+MySQL Containers with Docker Compose](https://github.com/Azure/azure-quickstart-templates/tree/master/docker-wordpress-mysql)


（1）登入


     az login
    You have logged in. Now let us find all the subscriptions to which you have access...
    [
      {
        "cloudName": "AzureCloud",
        "homeTenantId": "ff3e1c6b-0fd2-4651-8898-fa9429981c8b",
        "id": "bdbe86f1-40d5-4305-99ce-bb6ea7c085c7",
        "isDefault": true,
        "managedByTenants": [],
        "name": "Azure subscription 1",
        "state": "Enabled",
        "tenantId": "ff3e1c6b-0fd2-4651-8898-fa9429981c8b",
        "user": {
          "name": "AlanJui@outlook.com",
          "type": "user"
        }
      }
    ]


（2）建立「資源群組（Resource Group）」


    az group create --name myDockerGroup --location eastus
    {
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup",
      "location": "eastus",
      "managedBy": null,
      "name": "myDockerGroup",
      "properties": {
        "provisioningState": "Succeeded"
      },
      "tags": null,
      "type": "Microsoft.Resources/resourceGroups"
    }


（3）建立虛擬主機


    az group create --name myDockerGroup --location eastus
    {
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup",
      "location": "eastus",
      "managedBy": null,
      "name": "myDockerGroup",
      "properties": {
        "provisioningState": "Succeeded"
      },
      "tags": null,
      "type": "Microsoft.Resources/resourceGroups"
    }


（4）設定虛擬主機使用 Port：80

cloud-init.txt

    #include https://get.docker.com


    az vm open-port --port 80 \
        --resource-group myDockerGroup \
        --name myDockerVM
    {- Finished ..
      "defaultSecurityRules": [
        {
          "access": "Allow",
          "description": "Allow inbound traffic from all VMs in VNET",
          "destinationAddressPrefix": "VirtualNetwork",
          "destinationAddressPrefixes": [],
          "destinationApplicationSecurityGroups": null,
          "destinationPortRange": "*",
          "destinationPortRanges": [],
          "direction": "Inbound",
          "etag": "W/\"c82de93d-1821-4bed-b3a6-c150a2005c42\"",
          "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowVnetInBound",
          "name": "AllowVnetInBound",
          "priority": 65000,
          "protocol": "*",
          "provisioningState": "Succeeded",
          "resourceGroup": "myDockerGroup",
          "sourceAddressPrefix": "VirtualNetwork",
          "sourceAddressPrefixes": [],
          "sourceApplicationSecurityGroups": null,
          "sourcePortRange": "*",
          "sourcePortRanges": [],
          "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"
        },
        {
          "access": "Allow",
          "description": "Allow inbound traffic from azure load balancer",
          "destinationAddressPrefix": "*",
          "destinationAddressPrefixes": [],
          "destinationApplicationSecurityGroups": null,
          "destinationPortRange": "*",
          "destinationPortRanges": [],
          "direction": "Inbound",
          "etag": "W/\"c82de93d-1821-4bed-b3a6-c150a2005c42\"",
          "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowAzureLoadBalancerInBound",
          "name": "AllowAzureLoadBalancerInBound",
          "priority": 65001,
          "protocol": "*",
          "provisioningState": "Succeeded",
          "resourceGroup": "myDockerGroup",
          "sourceAddressPrefix": "AzureLoadBalancer",
          "sourceAddressPrefixes": [],
          "sourceApplicationSecurityGroups": null,
          "sourcePortRange": "*",
          "sourcePortRanges": [],
          "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"
        },
        {
          "access": "Deny",
          "description": "Deny all inbound traffic",
          "destinationAddressPrefix": "*",
          "destinationAddressPrefixes": [],
          "destinationApplicationSecurityGroups": null,
          "destinationPortRange": "*",
          "destinationPortRanges": [],
          "direction": "Inbound",
          "etag": "W/\"c82de93d-1821-4bed-b3a6-c150a2005c42\"",
          "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/DenyAllInBound",
          "name": "DenyAllInBound",
          "priority": 65500,
          "protocol": "*",
          "provisioningState": "Succeeded",
          "resourceGroup": "myDockerGroup",
          "sourceAddressPrefix": "*",
          "sourceAddressPrefixes": [],
          "sourceApplicationSecurityGroups": null,
          "sourcePortRange": "*",
          "sourcePortRanges": [],
          "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"
        },
        {
          "access": "Allow",
          "description": "Allow outbound traffic from all VMs to all VMs in VNET",
          "destinationAddressPrefix": "VirtualNetwork",
          "destinationAddressPrefixes": [],
          "destinationApplicationSecurityGroups": null,
          "destinationPortRange": "*",
          "destinationPortRanges": [],
          "direction": "Outbound",
          "etag": "W/\"c82de93d-1821-4bed-b3a6-c150a2005c42\"",
          "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowVnetOutBound",
          "name": "AllowVnetOutBound",
          "priority": 65000,
          "protocol": "*",
          "provisioningState": "Succeeded",
          "resourceGroup": "myDockerGroup",
          "sourceAddressPrefix": "VirtualNetwork",
          "sourceAddressPrefixes": [],
          "sourceApplicationSecurityGroups": null,
          "sourcePortRange": "*",
          "sourcePortRanges": [],
          "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"
        },
        {
          "access": "Allow",
          "description": "Allow outbound traffic from all VMs to Internet",
          "destinationAddressPrefix": "Internet",
          "destinationAddressPrefixes": [],
          "destinationApplicationSecurityGroups": null,
          "destinationPortRange": "*",
          "destinationPortRanges": [],
          "direction": "Outbound",
          "etag": "W/\"c82de93d-1821-4bed-b3a6-c150a2005c42\"",
          "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowInternetOutBound",
          "name": "AllowInternetOutBound",
          "priority": 65001,
          "protocol": "*",
          "provisioningState": "Succeeded",
          "resourceGroup": "myDockerGroup",
          "sourceAddressPrefix": "*",
          "sourceAddressPrefixes": [],
          "sourceApplicationSecurityGroups": null,
          "sourcePortRange": "*",
          "sourcePortRanges": [],
          "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"
        },
        {
          "access": "Deny",
          "description": "Deny all outbound traffic",
          "destinationAddressPrefix": "*",
          "destinationAddressPrefixes": [],
          "destinationApplicationSecurityGroups": null,
          "destinationPortRange": "*",
          "destinationPortRanges": [],
          "direction": "Outbound",
          "etag": "W/\"c82de93d-1821-4bed-b3a6-c150a2005c42\"",
          "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/DenyAllOutBound",
          "name": "DenyAllOutBound",
          "priority": 65500,
          "protocol": "*",
          "provisioningState": "Succeeded",
          "resourceGroup": "myDockerGroup",
          "sourceAddressPrefix": "*",
          "sourceAddressPrefixes": [],
          "sourceApplicationSecurityGroups": null,
          "sourcePortRange": "*",
          "sourcePortRanges": [],
          "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"
        }
      ],
      "etag": "W/\"c82de93d-1821-4bed-b3a6-c150a2005c42\"",
      "flowLogs": null,
      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG",
      "location": "eastus",
      "name": "myDockerVMNSG",
      "networkInterfaces": [
        {
          "dnsSettings": null,
          "enableAcceleratedNetworking": null,
          "enableIpForwarding": null,
          "etag": null,
          "hostedWorkloads": null,
          "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkInterfaces/myDockerVMVMNic",
          "ipConfigurations": null,
          "location": null,
          "macAddress": null,
          "name": null,
          "networkSecurityGroup": null,
          "primary": null,
          "privateEndpoint": null,
          "provisioningState": null,
          "resourceGroup": "myDockerGroup",
          "resourceGuid": null,
          "tags": null,
          "tapConfigurations": null,
          "type": null,
          "virtualMachine": null
        }
      ],
      "provisioningState": "Succeeded",
      "resourceGroup": "myDockerGroup",
      "resourceGuid": "e946d9f8-d415-4f62-8bab-5d2449858766",
      "securityRules": [
        {
          "access": "Allow",
          "description": null,
          "destinationAddressPrefix": "*",
          "destinationAddressPrefixes": [],
          "destinationApplicationSecurityGroups": null,
          "destinationPortRange": "22",
          "destinationPortRanges": [],
          "direction": "Inbound",
          "etag": "W/\"c82de93d-1821-4bed-b3a6-c150a2005c42\"",
          "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/securityRules/default-allow-ssh",
          "name": "default-allow-ssh",
          "priority": 1000,
          "protocol": "Tcp",
          "provisioningState": "Succeeded",
          "resourceGroup": "myDockerGroup",
          "sourceAddressPrefix": "*",
          "sourceAddressPrefixes": [],
          "sourceApplicationSecurityGroups": null,
          "sourcePortRange": "*",
          "sourcePortRanges": [],
          "type": "Microsoft.Network/networkSecurityGroups/securityRules"
        },
        {
          "access": "Allow",
          "description": null,
          "destinationAddressPrefix": "*",
          "destinationAddressPrefixes": [],
          "destinationApplicationSecurityGroups": null,
          "destinationPortRange": "80",
          "destinationPortRanges": [],
          "direction": "Inbound",
          "etag": "W/\"c82de93d-1821-4bed-b3a6-c150a2005c42\"",
          "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/securityRules/open-port-80",
          "name": "open-port-80",
          "priority": 900,
          "protocol": "*",
          "provisioningState": "Succeeded",
          "resourceGroup": "myDockerGroup",
          "sourceAddressPrefix": "*",
          "sourceAddressPrefixes": [],
          "sourceApplicationSecurityGroups": null,
          "sourcePortRange": "*",
          "sourcePortRanges": [],
          "type": "Microsoft.Network/networkSecurityGroups/securityRules"
        }
      ],
      "subnets": null,
      "tags": {},
      "type": "Microsoft.Network/networkSecurityGroups"
    }



## 在 VM 安裝 docker-compose

（1）查詢 IP


![](https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589083227127_image.png)




![](https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589083154027_image.png)


（2）


    ssh azureuser@13.68.177.20
    The authenticity of host '13.68.177.20 (13.68.177.20)' can't be established.
    ECDSA key fingerprint is SHA256:3TAsZrGjNeq+fLcfKVRwFhKoywhOJ0utwSYdIaeQm4U.
    Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
    Warning: Permanently added '13.68.177.20' (ECDSA) to the list of known hosts.
    Welcome to Ubuntu 18.04.4 LTS (GNU/Linux 5.3.0-1020-azure x86_64)
    
     * Documentation:  https://help.ubuntu.com
     * Management:     https://landscape.canonical.com
     * Support:        https://ubuntu.com/advantage
    
      System information as of Sun May 10 03:56:15 UTC 2020
    
      System load:  0.08              Processes:              110
      Usage of /:   6.4% of 28.90GB   Users logged in:        0
      Memory usage: 10%               IP address for eth0:    10.0.0.4
      Swap usage:   0%                IP address for docker0: 172.17.0.1
    
    3 packages can be updated.
    2 updates are security updates.
    
    
    
    The programs included with the Ubuntu system are free software;
    the exact distribution terms for each program are described in the
    individual files in /usr/share/doc/*/copyright.
    
    Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
    applicable law.
    
    To run a command as administrator (user "root"), use "sudo <command>".
    See "man sudo_root" for details.
    
    azureuser@myDockerVM:~$


（2）安裝 docker-compose

    sudo apt update && sudo apt upgrade -y
    sudo apt install docker-compose -y


（3）設定 docker-compose.yml 組態檔


    $ vim docker-compose.yml

docker-compose.yml

    wordpress:
      image: wordpress
      links:
        - db:mysql
      ports:
        - 80:80
    
    db:
      image: mariadb
      environment:
        MYSQL_ROOT_PASSWORD: Passw0rd


（4）啟動 docker 容器


    $ sudo docker-compose up -d


（5）檢查 docker 容器已啟動


    $ sudo docker-compose ps
          Name                     Command               State         Ports
    -------------------------------------------------------------------------------
    app01_db_1          docker-entrypoint.sh mysqld      Up      3306/tcp
    app01_wordpress_1   docker-entrypoint.sh apach ...   Up      0.0.0.0:80->80/tcp


（6）在瀏覽器，執行安裝指令


    http://13.68.177.20/wp-admin/install.php


![](https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589084453698_image.png)




# Azure Cloud Service 學習資源 



## Azure Linux VM 教學指南
https://docs.microsoft.com/zh-tw/azure/virtual-machines/linux/tutorial-manage-vm




## 在 Azure App Service 建置 Linux 容器，啟用 Python 應用系統
https://docs.microsoft.com/zh-tw/azure/app-service/containers/quickstart-python?toc=%2Fpython%2Fazure%2FTOC.json&tabs=bash



## CLI 指引
https://docs.microsoft.com/zh-tw/cli/azure/?view=azure-cli-latest




## Azure 文件
https://docs.microsoft.com/zh-tw/azure/?product=featured



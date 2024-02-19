# 在 Azure VM 安裝 Django App 環境



# 建置 VM



https://docs.microsoft.com/zh-tw/azure/virtual-machines/linux/docker-compose-quickstart



[Deployment of WordPress+MySQL Containers with Docker Compose](https://github.com/Azure/azure-quickstart-templates/tree/master/docker-wordpress-mysql)



## 建立 VM 作業流程


（1）登入 Azure Cloud


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


（2）建立「資源群組（Resource Group）」


    $ az group create --name myDockerGroup --location eastus
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

cloud-init.txt

    #include https://get.docker.com



    $ az vm create \
        --resource-group myDockerGroup \
        --name myDockerVM \
        --image UbuntuLTS \
        --admin-username azureuser \
        --generate-ssh-keys \
        --custom-data cloud-init.txt
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

（4）設定虛擬主機使用 Port：80


    $ az vm open-port --port 80 \
        --resource-group myDockerGroup \
        --name myDockerVM
    




## 在 VM 安裝 docker-compose

（1）查詢 IP


![](https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589083227127_image.png)




![](https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589083154027_image.png)


（2）使用 ssh 連上 VM 主機


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


（2）在 VM 主機安裝 docker-compose 軟體


    sudo apt update && sudo apt upgrade -y
    sudo apt install docker-compose -y



## 透過 WordPress 驗證 docker-compose 已能正常運作


（1）設定 WordPress 用 docker-compose.yml 組態檔


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


（2）啟動 docker 容器


    $ sudo docker-compose up -d


（3）驗證 docker 容器已啟動，並能正常運作


    $ sudo docker-compose ps
          Name                     Command               State         Ports
    -------------------------------------------------------------------------------
    app01_db_1          docker-entrypoint.sh mysqld      Up      3306/tcp
    app01_wordpress_1   docker-entrypoint.sh apach ...   Up      0.0.0.0:80->80/tcp


（4）在瀏覽器，執行安裝指令，驗證 WrodPress 能正常運作


    http://13.68.177.20/wp-admin/install.php


![](https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589084453698_image.png)




# 安裝與設定 Django App 環境



## 安裝 Django App 環境所需軟體套件

**（1）登入 Azure Cloud VM 主機**

透過 ssh 登入 VM 主機。


    $ ssh azureuser@13.68.177.20
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


**（2）安裝 VM 作業系統所需軟體套件**


    $ sudo apt update && sudo apt upgrade -y
    
    $ sudo apt install -y git wget curl tree neovim xclip nginx
    
    $ sudo apt install -y build-essential checkinstall libffi-dev python-dev
    
    $ sudo apt install -y libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev



## 安裝 ssh ，並於 GitHub 安裝公鑰


（1）在終端機輸入指令，建立 SSH Key 。


    $ ssh-keygen -t rsa -b 4096 -C "alanjui.1960@gmail.com"


（2）驗證 SSH 公鑰已建立。


    $ ll ~/.ssh
    total 24
    drwx------ 2 azureuser azureuser 4096 May 11 03:18 ./
    drwxr-xr-x 7 azureuser azureuser 4096 May 10 09:47 ../
    -rw------- 1 azureuser azureuser  381 May 10 03:44 authorized_keys
    -rw------- 1 azureuser azureuser 3243 May 11 03:18 id_rsa
    -rw-r--r-- 1 azureuser azureuser  748 May 11 03:18 id_rsa.pub
    -rw-r--r-- 1 azureuser azureuser  884 May 10 09:40 known_hosts


（3）將 SSH Key 加入 ssh-agent 。

啟動 ssh-agent ，並置於作業系統背景處理。


    $ eval "$(ssh-agent -s)"
    Agent pid 110025


將 SSH 私鑰置入 ssh-agent 。


    $ ssh-add ~/.ssh/id_rsa
    Identity added: /home/azureuser/.ssh/id_rsa (/home/azureuser/.ssh/id_rsa)


（4）將 SSH 公鑰，置入 GitHub 。

將 SSH 公鑰置入個人電腦的「剪貼簿」。


    $ cat ~/.ssh/id_rsa.pub
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCuQnjbcvS5bAMPhrpqfEMeqaQgNa+4LPWAYs07PpNzirQoe00OKlIMIAudbjej3S774Q8Xa2y2GirK046bYueRMmfp5K3pdCi0nOKgQJ/DStBuNpjTUp7VRTbLPIgITJhg5xgmN5i3WhI8jJhhVgaZ/iAsJzWLVifqLi2ZWI57pTD7NjoUi+yS11mzscQPFCya+nWRdAzbBvOmUoYyPEdS52bYPZ7w7uFZRuwQxJEyjyUBEdSRYllwAY0cM/KvkXpVAzz68wI6XHFbt96seFpYE9dSwCV9awHmK2qPpH2JTLWFSeDB1TaddU8l8VcwknHYKIiTe/24XT87jazg/xn0iX6MtouMmPqfUwKs2WaJ0L8TYlIJAuDWqaaAA+TLKvfGjj56ikiS7wFCD94DZfRsGEEzE+D9DlYXl0t/KPRVtAlz6rU0TE2mEIyRsDw66N0f+IAtbhs+zCFiE556q2KWikLsyjhXl+nBAOFiwmEFVB2X0H6YAVF0iMTMyYQ53TOILUgd215tFjv6x4ojQisTouZ/+4thHYQCHwWdGvunIe8pHd37TBRiVqpkFcv/nK96vr3dL/oBsc1t4uNE//n2cI0ImGaTTgCI9D0pC5aRKun3ny2UBdz1tqMTjx13GNGjmAdpd3FbanNK+teTsjq8jBhKS+HML/2JFJRf3/hgRw== alanjui.1960@gmail.com


    DISPLAY=:0 xclip -sel clip < ~/.ssh/id_rsa.pub


將 SSH 公鑰置入 GitHub 。


https://github.com/settings/profile


路徑： AlanJui 帳號（Settings）／SSH and GPG Keys / SSH keys / New SSH key



# 安裝 Django App 



## 自 GitHub 置入 Django App



    cd
    mkdir -p ~/workspace && cd $_
    git clone git@github.com:AlanJui/DjangoApp-DevTemplate.git app-02
    cd app-02

安裝 Django App 所需套件

    $ sudo gpasswd -a ${USER} docker
    Adding user azureuser to group docker



    azureuser@myDockerVM:~/workspace/app-02$ cd code
    azureuser@myDockerVM:~/workspace/app-02/code$ pipenv shell
    Creating a virtualenv for this project…
    Pipfile: /home/azureuser/workspace/app-02/code/Pipfile
    Using /home/azureuser/.pyenv/versions/3.8.2/bin/python3 (3.8.2) to create virtualenv…
    ⠴ Creating virtual environment...created virtual environment CPython3.8.2.final.0-64 in 340ms
      creator CPython3Posix(dest=/home/azureuser/.local/share/virtualenvs/code-LQmY7Qdt, clear=False, global=False)
      seeder FromAppData(download=False, pip=latest, setuptools=latest, wheel=latest, via=copy, app_data_dir=/home/azureuser/.local/share/virtualenv/seed-app-data/v1.0.1)
      activators BashActivator,CShellActivator,FishActivator,PowerShellActivator,PythonActivator,XonshActivator
    
    ✔ Successfully created virtual environment!
    Virtualenv location: /home/azureuser/.local/share/virtualenvs/code-LQmY7Qdt
    Launching subshell in virtual environment…
     . /home/azureuser/.local/share/virtualenvs/code-LQmY7Qdt/bin/activate
    azureuser@myDockerVM:~/workspace/app-02/code$  . /home/azureuser/.local/share/virtualenvs/code-LQmY7Qdt/bin/activate
    (code) azureuser@myDockerVM:~/workspace/app-02/code$



    (code) azureuser@myDockerVM:~/workspace/app-02/code$ pipenv install
    Installing dependencies from Pipfile.lock (f6a73a)…
      🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 6/6 — 00:00:12
    (code) azureuser@myDockerVM:~/workspace/app-02/code$



    (code) azureuser@myDockerVM:~/workspace/app-02/code$ python manage.py collectstatic
    
    132 static files copied to '/home/azureuser/workspace/app-02/code/static_collected'.
    (code) azureuser@myDockerVM:~/workspace/app-02/code$




    cd ~/workspace/app-02
    sudo docker-compose up --build -d
    (code) azureuser@myDockerVM:~/workspace/app-02$ sudo docker-compose ps
         Name                    Command               State           Ports
    ---------------------------------------------------------------------------------
    app02_adminer_1   entrypoint.sh docker-php-e ...   Up      0.0.0.0:8080->8080/tcp
    app02_db_1        docker-entrypoint.sh postgres    Up      0.0.0.0:5432->5432/tcp
    app02_proxy_1     nginx -g daemon off;             Up      0.0.0.0:5000->80/tcp
    app02_web_1       gunicorn --bind 0.0.0.0:80 ...   Up      0.0.0.0:8000->8000/tcp



    (code) azureuser@myDockerVM:~/workspace/app-02$ sudo docker-compose exec web python manage.py migrate
    Operations to perform:
      Apply all migrations: admin, auth, contenttypes, log_msg, sessions
    Running migrations:
      Applying contenttypes.0001_initial... OK
      Applying auth.0001_initial... OK
      Applying admin.0001_initial... OK
      Applying admin.0002_logentry_remove_auto_add... OK
      Applying admin.0003_logentry_add_action_flag_choices... OK
      Applying contenttypes.0002_remove_content_type_name... OK
      Applying auth.0002_alter_permission_name_max_length... OK
      Applying auth.0003_alter_user_email_max_length... OK
      Applying auth.0004_alter_user_username_opts... OK
      Applying auth.0005_alter_user_last_login_null... OK
      Applying auth.0006_require_contenttypes_0002... OK
      Applying auth.0007_alter_validators_add_error_messages... OK
      Applying auth.0008_alter_user_username_max_length... OK
      Applying auth.0009_alter_user_last_name_max_length... OK
      Applying auth.0010_alter_group_name_max_length... OK
      Applying auth.0011_update_proxy_permissions... OK
      Applying log_msg.0001_initial... OK
      Applying sessions.0001_initial... OK
    (code) azureuser@myDockerVM:~/workspace/app-02$



    (code) azureuser@myDockerVM:~/workspace/app-02$ sudo docker-compose exec web python manage.py collectstatic
    
    You have requested to collect static files at the destination
    location as specified in your settings:
    
        /app/static_collected
    
    This will overwrite existing files!
    Are you sure you want to do this?
    
    Type 'yes' to continue, or 'no' to cancel: yes
    
    0 static files copied to '/app/static_collected', 132 unmodified.
    (code) azureuser@myDockerVM:~/workspace/app-02$





    http://13.68.177.20:5000/




# Azure Cloud Service 學習資源 


## CLI 指引
https://docs.microsoft.com/zh-tw/cli/azure/?view=azure-cli-latest




## Azure 文件
https://docs.microsoft.com/zh-tw/azure/?product=featured






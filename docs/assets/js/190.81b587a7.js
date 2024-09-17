(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{478:function(e,n,r){"use strict";r.r(n);var o=r(10),t=Object(o.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"azure-cloud-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-cloud-service"}},[e._v("#")]),e._v(" Azure Cloud Service")]),e._v(" "),n("h1",{attrs:{id:"安裝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝"}},[e._v("#")]),e._v(" 安裝")]),e._v(" "),n("h2",{attrs:{id:"安裝-azure-cli"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝-azure-cli"}},[e._v("#")]),e._v(" 安裝 Azure CLI")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ brew update && brew install azure-cli\n⋯⋯\n==> openssl@1.1\nA CA file has been bootstrapped using certificates from the system\nkeychain. To add additional certificates, place .pem files in\n  /usr/local/etc/openssl@1.1/certs\n\nand run\n  /usr/local/opt/openssl@1.1/bin/c_rehash\n\nopenssl@1.1 is keg-only, which means it was not symlinked into /usr/local,\nbecause macOS provides LibreSSL.\n\nIf you need to have openssl@1.1 first in your PATH run:\n  echo \'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"\' >> ~/.zshrc\n\nFor compilers to find openssl@1.1 you may need to set:\n  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"\n  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"\n\nFor pkg-config to find openssl@1.1 you may need to set:\n  export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"\n\n==> azure-cli\nBash completion has been installed to:\n  /usr/local/etc/bash_completion.d\n\n\n\n$ az login\nYou have logged in. Now let us find all the subscriptions to which you have access...\n[\n  {\n    "cloudName": "AzureCloud",\n    "homeTenantId": "ff3e1c6b-0fd2-4651-8898-fa9429981c8b",\n    "id": "bdbe86f1-40d5-4305-99ce-bb6ea7c085c7",\n    "isDefault": true,\n    "managedByTenants": [],\n    "name": "Azure subscription 1",\n    "state": "Enabled",\n    "tenantId": "ff3e1c6b-0fd2-4651-8898-fa9429981c8b",\n    "user": {\n      "name": "AlanJui@outlook.com",\n      "type": "user"\n    }\n  }\n]\n')])])]),n("h1",{attrs:{id:"佈署-docker-compose-應用系統至-azure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#佈署-docker-compose-應用系統至-azure"}},[e._v("#")]),e._v(" 佈署 docker-compose 應用系統至 Azure")]),e._v(" "),n("p",[e._v("https://docs.microsoft.com/zh-tw/azure/virtual-machines/linux/docker-compose-quickstart")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/Azure/azure-quickstart-templates/tree/master/docker-wordpress-mysql",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deployment of WordPress+MySQL Containers with Docker Compose"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("（1）登入")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(' az login\nYou have logged in. Now let us find all the subscriptions to which you have access...\n[\n  {\n    "cloudName": "AzureCloud",\n    "homeTenantId": "ff3e1c6b-0fd2-4651-8898-fa9429981c8b",\n    "id": "bdbe86f1-40d5-4305-99ce-bb6ea7c085c7",\n    "isDefault": true,\n    "managedByTenants": [],\n    "name": "Azure subscription 1",\n    "state": "Enabled",\n    "tenantId": "ff3e1c6b-0fd2-4651-8898-fa9429981c8b",\n    "user": {\n      "name": "AlanJui@outlook.com",\n      "type": "user"\n    }\n  }\n]\n')])])]),n("p",[e._v("（2）建立「資源群組（Resource Group）」")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('az group create --name myDockerGroup --location eastus\n{\n  "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup",\n  "location": "eastus",\n  "managedBy": null,\n  "name": "myDockerGroup",\n  "properties": {\n    "provisioningState": "Succeeded"\n  },\n  "tags": null,\n  "type": "Microsoft.Resources/resourceGroups"\n}\n')])])]),n("p",[e._v("（3）建立虛擬主機")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('az group create --name myDockerGroup --location eastus\n{\n  "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup",\n  "location": "eastus",\n  "managedBy": null,\n  "name": "myDockerGroup",\n  "properties": {\n    "provisioningState": "Succeeded"\n  },\n  "tags": null,\n  "type": "Microsoft.Resources/resourceGroups"\n}\n')])])]),n("p",[e._v("（4）設定虛擬主機使用 Port：80")]),e._v(" "),n("p",[e._v("cloud-init.txt")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('#include https://get.docker.com\n\n\naz vm open-port --port 80 \\\n    --resource-group myDockerGroup \\\n    --name myDockerVM\n{- Finished ..\n  "defaultSecurityRules": [\n    {\n      "access": "Allow",\n      "description": "Allow inbound traffic from all VMs in VNET",\n      "destinationAddressPrefix": "VirtualNetwork",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Inbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowVnetInBound",\n      "name": "AllowVnetInBound",\n      "priority": 65000,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "VirtualNetwork",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    },\n    {\n      "access": "Allow",\n      "description": "Allow inbound traffic from azure load balancer",\n      "destinationAddressPrefix": "*",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Inbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowAzureLoadBalancerInBound",\n      "name": "AllowAzureLoadBalancerInBound",\n      "priority": 65001,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "AzureLoadBalancer",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    },\n    {\n      "access": "Deny",\n      "description": "Deny all inbound traffic",\n      "destinationAddressPrefix": "*",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Inbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/DenyAllInBound",\n      "name": "DenyAllInBound",\n      "priority": 65500,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "*",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    },\n    {\n      "access": "Allow",\n      "description": "Allow outbound traffic from all VMs to all VMs in VNET",\n      "destinationAddressPrefix": "VirtualNetwork",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Outbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowVnetOutBound",\n      "name": "AllowVnetOutBound",\n      "priority": 65000,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "VirtualNetwork",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    },\n    {\n      "access": "Allow",\n      "description": "Allow outbound traffic from all VMs to Internet",\n      "destinationAddressPrefix": "Internet",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Outbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowInternetOutBound",\n      "name": "AllowInternetOutBound",\n      "priority": 65001,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "*",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    },\n    {\n      "access": "Deny",\n      "description": "Deny all outbound traffic",\n      "destinationAddressPrefix": "*",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Outbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/DenyAllOutBound",\n      "name": "DenyAllOutBound",\n      "priority": 65500,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "*",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    }\n  ],\n  "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n  "flowLogs": null,\n  "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG",\n  "location": "eastus",\n  "name": "myDockerVMNSG",\n  "networkInterfaces": [\n    {\n      "dnsSettings": null,\n      "enableAcceleratedNetworking": null,\n      "enableIpForwarding": null,\n      "etag": null,\n      "hostedWorkloads": null,\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkInterfaces/myDockerVMVMNic",\n      "ipConfigurations": null,\n      "location": null,\n      "macAddress": null,\n      "name": null,\n      "networkSecurityGroup": null,\n      "primary": null,\n      "privateEndpoint": null,\n      "provisioningState": null,\n      "resourceGroup": "myDockerGroup",\n      "resourceGuid": null,\n      "tags": null,\n      "tapConfigurations": null,\n      "type": null,\n      "virtualMachine": null\n    }\n  ],\n  "provisioningState": "Succeeded",\n  "resourceGroup": "myDockerGroup",\n  "resourceGuid": "e946d9f8-d415-4f62-8bab-5d2449858766",\n  "securityRules": [\n    {\n      "access": "Allow",\n      "description": null,\n      "destinationAddressPrefix": "*",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "22",\n      "destinationPortRanges": [],\n      "direction": "Inbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/securityRules/default-allow-ssh",\n      "name": "default-allow-ssh",\n      "priority": 1000,\n      "protocol": "Tcp",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "*",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/securityRules"\n    },\n    {\n      "access": "Allow",\n      "description": null,\n      "destinationAddressPrefix": "*",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "80",\n      "destinationPortRanges": [],\n      "direction": "Inbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/securityRules/open-port-80",\n      "name": "open-port-80",\n      "priority": 900,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "*",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/securityRules"\n    }\n  ],\n  "subnets": null,\n  "tags": {},\n  "type": "Microsoft.Network/networkSecurityGroups"\n}\n')])])]),n("h2",{attrs:{id:"在-vm-安裝-docker-compose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-vm-安裝-docker-compose"}},[e._v("#")]),e._v(" 在 VM 安裝 docker-compose")]),e._v(" "),n("p",[e._v("（1）查詢 IP")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589083227127_image.png",alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589083154027_image.png",alt:""}})]),e._v(" "),n("p",[e._v("（2）")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('ssh azureuser@13.68.177.20\nThe authenticity of host \'13.68.177.20 (13.68.177.20)\' can\'t be established.\nECDSA key fingerprint is SHA256:3TAsZrGjNeq+fLcfKVRwFhKoywhOJ0utwSYdIaeQm4U.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added \'13.68.177.20\' (ECDSA) to the list of known hosts.\nWelcome to Ubuntu 18.04.4 LTS (GNU/Linux 5.3.0-1020-azure x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Sun May 10 03:56:15 UTC 2020\n\n  System load:  0.08              Processes:              110\n  Usage of /:   6.4% of 28.90GB   Users logged in:        0\n  Memory usage: 10%               IP address for eth0:    10.0.0.4\n  Swap usage:   0%                IP address for docker0: 172.17.0.1\n\n3 packages can be updated.\n2 updates are security updates.\n\n\n\nThe programs included with the Ubuntu system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nUbuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by\napplicable law.\n\nTo run a command as administrator (user "root"), use "sudo <command>".\nSee "man sudo_root" for details.\n\nazureuser@myDockerVM:~$\n')])])]),n("p",[e._v("（2）安裝 docker-compose")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("sudo apt update && sudo apt upgrade -y\nsudo apt install docker-compose -y\n")])])]),n("p",[e._v("（3）設定 docker-compose.yml 組態檔")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ vim docker-compose.yml\n")])])]),n("p",[e._v("docker-compose.yml")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("wordpress:\n  image: wordpress\n  links:\n    - db:mysql\n  ports:\n    - 80:80\n\ndb:\n  image: mariadb\n  environment:\n    MYSQL_ROOT_PASSWORD: Passw0rd\n")])])]),n("p",[e._v("（4）啟動 docker 容器")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo docker-compose up -d\n")])])]),n("p",[e._v("（5）檢查 docker 容器已啟動")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo docker-compose ps\n      Name                     Command               State         Ports\n-------------------------------------------------------------------------------\napp01_db_1          docker-entrypoint.sh mysqld      Up      3306/tcp\napp01_wordpress_1   docker-entrypoint.sh apach ...   Up      0.0.0.0:80->80/tcp\n")])])]),n("p",[e._v("（6）在瀏覽器，執行安裝指令")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("http://13.68.177.20/wp-admin/install.php\n")])])]),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589084453698_image.png",alt:""}})]),e._v(" "),n("h1",{attrs:{id:"azure-cloud-service-學習資源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-cloud-service-學習資源"}},[e._v("#")]),e._v(" Azure Cloud Service 學習資源")]),e._v(" "),n("h2",{attrs:{id:"azure-linux-vm-教學指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-linux-vm-教學指南"}},[e._v("#")]),e._v(" Azure Linux VM 教學指南")]),e._v(" "),n("p",[e._v("https://docs.microsoft.com/zh-tw/azure/virtual-machines/linux/tutorial-manage-vm")]),e._v(" "),n("h2",{attrs:{id:"在-azure-app-service-建置-linux-容器-啟用-python-應用系統"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-azure-app-service-建置-linux-容器-啟用-python-應用系統"}},[e._v("#")]),e._v(" 在 Azure App Service 建置 Linux 容器，啟用 Python 應用系統")]),e._v(" "),n("p",[e._v("https://docs.microsoft.com/zh-tw/azure/app-service/containers/quickstart-python?toc=%2Fpython%2Fazure%2FTOC.json&tabs=bash")]),e._v(" "),n("h2",{attrs:{id:"cli-指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cli-指引"}},[e._v("#")]),e._v(" CLI 指引")]),e._v(" "),n("p",[e._v("https://docs.microsoft.com/zh-tw/cli/azure/?view=azure-cli-latest")]),e._v(" "),n("h2",{attrs:{id:"azure-文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-文件"}},[e._v("#")]),e._v(" Azure 文件")]),e._v(" "),n("p",[e._v("https://docs.microsoft.com/zh-tw/azure/?product=featured")])])}),[],!1,null,null,null);n.default=t.exports}}]);
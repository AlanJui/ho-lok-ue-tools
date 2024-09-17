(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{447:function(e,n,r){"use strict";r.r(n);var o=r(10),s=Object(o.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"在-azure-vm-安裝-django-app-環境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-azure-vm-安裝-django-app-環境"}},[e._v("#")]),e._v(" 在 Azure VM 安裝 Django App 環境")]),e._v(" "),n("h1",{attrs:{id:"建置-vm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建置-vm"}},[e._v("#")]),e._v(" 建置 VM")]),e._v(" "),n("p",[e._v("https://docs.microsoft.com/zh-tw/azure/virtual-machines/linux/docker-compose-quickstart")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/Azure/azure-quickstart-templates/tree/master/docker-wordpress-mysql",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deployment of WordPress+MySQL Containers with Docker Compose"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"建立-vm-作業流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建立-vm-作業流程"}},[e._v("#")]),e._v(" 建立 VM 作業流程")]),e._v(" "),n("p",[e._v("（1）登入 Azure Cloud")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ az login\nYou have logged in. Now let us find all the subscriptions to which you have access...\n[\n  {\n    "cloudName": "AzureCloud",\n    "homeTenantId": "ff3e1c6b-0fd2-4651-8898-fa9429981c8b",\n    "id": "bdbe86f1-40d5-4305-99ce-bb6ea7c085c7",\n    "isDefault": true,\n    "managedByTenants": [],\n    "name": "Azure subscription 1",\n    "state": "Enabled",\n    "tenantId": "ff3e1c6b-0fd2-4651-8898-fa9429981c8b",\n    "user": {\n      "name": "AlanJui@outlook.com",\n      "type": "user"\n    }\n  }\n]\n')])])]),n("p",[e._v("（2）建立「資源群組（Resource Group）」")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ az group create --name myDockerGroup --location eastus\n{\n  "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup",\n  "location": "eastus",\n  "managedBy": null,\n  "name": "myDockerGroup",\n  "properties": {\n    "provisioningState": "Succeeded"\n  },\n  "tags": null,\n  "type": "Microsoft.Resources/resourceGroups"\n}\n')])])]),n("p",[e._v("（3）建立虛擬主機")]),e._v(" "),n("p",[e._v("cloud-init.txt")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('#include https://get.docker.com\n\n\n\n$ az vm create \\\n    --resource-group myDockerGroup \\\n    --name myDockerVM \\\n    --image UbuntuLTS \\\n    --admin-username azureuser \\\n    --generate-ssh-keys \\\n    --custom-data cloud-init.txt\n{- Finished ..\n  "defaultSecurityRules": [\n    {\n      "access": "Allow",\n      "description": "Allow inbound traffic from all VMs in VNET",\n      "destinationAddressPrefix": "VirtualNetwork",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Inbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowVnetInBound",\n      "name": "AllowVnetInBound",\n      "priority": 65000,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "VirtualNetwork",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    },\n    {\n      "access": "Allow",\n      "description": "Allow inbound traffic from azure load balancer",\n      "destinationAddressPrefix": "*",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Inbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowAzureLoadBalancerInBound",\n      "name": "AllowAzureLoadBalancerInBound",\n      "priority": 65001,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "AzureLoadBalancer",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    },\n    {\n      "access": "Deny",\n      "description": "Deny all inbound traffic",\n      "destinationAddressPrefix": "*",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Inbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/DenyAllInBound",\n      "name": "DenyAllInBound",\n      "priority": 65500,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "*",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    },\n    {\n      "access": "Allow",\n      "description": "Allow outbound traffic from all VMs to all VMs in VNET",\n      "destinationAddressPrefix": "VirtualNetwork",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Outbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowVnetOutBound",\n      "name": "AllowVnetOutBound",\n      "priority": 65000,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "VirtualNetwork",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    },\n    {\n      "access": "Allow",\n      "description": "Allow outbound traffic from all VMs to Internet",\n      "destinationAddressPrefix": "Internet",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Outbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/AllowInternetOutBound",\n      "name": "AllowInternetOutBound",\n      "priority": 65001,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "*",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    },\n    {\n      "access": "Deny",\n      "description": "Deny all outbound traffic",\n      "destinationAddressPrefix": "*",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "*",\n      "destinationPortRanges": [],\n      "direction": "Outbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/defaultSecurityRules/DenyAllOutBound",\n      "name": "DenyAllOutBound",\n      "priority": 65500,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "*",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/defaultSecurityRules"\n    }\n  ],\n  "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n  "flowLogs": null,\n  "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG",\n  "location": "eastus",\n  "name": "myDockerVMNSG",\n  "networkInterfaces": [\n    {\n      "dnsSettings": null,\n      "enableAcceleratedNetworking": null,\n      "enableIpForwarding": null,\n      "etag": null,\n      "hostedWorkloads": null,\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkInterfaces/myDockerVMVMNic",\n      "ipConfigurations": null,\n      "location": null,\n      "macAddress": null,\n      "name": null,\n      "networkSecurityGroup": null,\n      "primary": null,\n      "privateEndpoint": null,\n      "provisioningState": null,\n      "resourceGroup": "myDockerGroup",\n      "resourceGuid": null,\n      "tags": null,\n      "tapConfigurations": null,\n      "type": null,\n      "virtualMachine": null\n    }\n  ],\n  "provisioningState": "Succeeded",\n  "resourceGroup": "myDockerGroup",\n  "resourceGuid": "e946d9f8-d415-4f62-8bab-5d2449858766",\n  "securityRules": [\n    {\n      "access": "Allow",\n      "description": null,\n      "destinationAddressPrefix": "*",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "22",\n      "destinationPortRanges": [],\n      "direction": "Inbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/securityRules/default-allow-ssh",\n      "name": "default-allow-ssh",\n      "priority": 1000,\n      "protocol": "Tcp",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "*",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/securityRules"\n    },\n    {\n      "access": "Allow",\n      "description": null,\n      "destinationAddressPrefix": "*",\n      "destinationAddressPrefixes": [],\n      "destinationApplicationSecurityGroups": null,\n      "destinationPortRange": "80",\n      "destinationPortRanges": [],\n      "direction": "Inbound",\n      "etag": "W/\\"c82de93d-1821-4bed-b3a6-c150a2005c42\\"",\n      "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myDockerGroup/providers/Microsoft.Network/networkSecurityGroups/myDockerVMNSG/securityRules/open-port-80",\n      "name": "open-port-80",\n      "priority": 900,\n      "protocol": "*",\n      "provisioningState": "Succeeded",\n      "resourceGroup": "myDockerGroup",\n      "sourceAddressPrefix": "*",\n      "sourceAddressPrefixes": [],\n      "sourceApplicationSecurityGroups": null,\n      "sourcePortRange": "*",\n      "sourcePortRanges": [],\n      "type": "Microsoft.Network/networkSecurityGroups/securityRules"\n    }\n  ],\n  "subnets": null,\n  "tags": {},\n  "type": "Microsoft.Network/networkSecurityGroups"\n}\n')])])]),n("p",[e._v("（4）設定虛擬主機使用 Port：80")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ az vm open-port --port 80 \\\n    --resource-group myDockerGroup \\\n    --name myDockerVM\n")])])]),n("h2",{attrs:{id:"在-vm-安裝-docker-compose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-vm-安裝-docker-compose"}},[e._v("#")]),e._v(" 在 VM 安裝 docker-compose")]),e._v(" "),n("p",[e._v("（1）查詢 IP")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589083227127_image.png",alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589083154027_image.png",alt:""}})]),e._v(" "),n("p",[e._v("（2）使用 ssh 連上 VM 主機")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('ssh azureuser@13.68.177.20\nThe authenticity of host \'13.68.177.20 (13.68.177.20)\' can\'t be established.\nECDSA key fingerprint is SHA256:3TAsZrGjNeq+fLcfKVRwFhKoywhOJ0utwSYdIaeQm4U.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added \'13.68.177.20\' (ECDSA) to the list of known hosts.\nWelcome to Ubuntu 18.04.4 LTS (GNU/Linux 5.3.0-1020-azure x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Sun May 10 03:56:15 UTC 2020\n\n  System load:  0.08              Processes:              110\n  Usage of /:   6.4% of 28.90GB   Users logged in:        0\n  Memory usage: 10%               IP address for eth0:    10.0.0.4\n  Swap usage:   0%                IP address for docker0: 172.17.0.1\n\n3 packages can be updated.\n2 updates are security updates.\n\n\n\nThe programs included with the Ubuntu system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nUbuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by\napplicable law.\n\nTo run a command as administrator (user "root"), use "sudo <command>".\nSee "man sudo_root" for details.\n\nazureuser@myDockerVM:~$\n')])])]),n("p",[e._v("（2）在 VM 主機安裝 docker-compose 軟體")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("sudo apt update && sudo apt upgrade -y\nsudo apt install docker-compose -y\n")])])]),n("h2",{attrs:{id:"透過-wordpress-驗證-docker-compose-已能正常運作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#透過-wordpress-驗證-docker-compose-已能正常運作"}},[e._v("#")]),e._v(" 透過 WordPress 驗證 docker-compose 已能正常運作")]),e._v(" "),n("p",[e._v("（1）設定 WordPress 用 docker-compose.yml 組態檔")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ vim docker-compose.yml\n")])])]),n("p",[e._v("docker-compose.yml")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("wordpress:\n  image: wordpress\n  links:\n    - db:mysql\n  ports:\n    - 80:80\n\ndb:\n  image: mariadb\n  environment:\n    MYSQL_ROOT_PASSWORD: Passw0rd\n")])])]),n("p",[e._v("（2）啟動 docker 容器")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo docker-compose up -d\n")])])]),n("p",[e._v("（3）驗證 docker 容器已啟動，並能正常運作")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo docker-compose ps\n      Name                     Command               State         Ports\n-------------------------------------------------------------------------------\napp01_db_1          docker-entrypoint.sh mysqld      Up      3306/tcp\napp01_wordpress_1   docker-entrypoint.sh apach ...   Up      0.0.0.0:80->80/tcp\n")])])]),n("p",[e._v("（4）在瀏覽器，執行安裝指令，驗證 WrodPress 能正常運作")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("http://13.68.177.20/wp-admin/install.php\n")])])]),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_AACA570217B9FB240B7CB3EDE6535CC4FA8185265C3C18E6A8B4FACA7A8FC4BB_1589084453698_image.png",alt:""}})]),e._v(" "),n("h1",{attrs:{id:"安裝與設定-django-app-環境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝與設定-django-app-環境"}},[e._v("#")]),e._v(" 安裝與設定 Django App 環境")]),e._v(" "),n("h2",{attrs:{id:"安裝-django-app-環境所需軟體套件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝-django-app-環境所需軟體套件"}},[e._v("#")]),e._v(" 安裝 Django App 環境所需軟體套件")]),e._v(" "),n("p",[n("strong",[e._v("（1）登入 Azure Cloud VM 主機")])]),e._v(" "),n("p",[e._v("透過 ssh 登入 VM 主機。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ ssh azureuser@13.68.177.20\nThe authenticity of host \'13.68.177.20 (13.68.177.20)\' can\'t be established.\nECDSA key fingerprint is SHA256:3TAsZrGjNeq+fLcfKVRwFhKoywhOJ0utwSYdIaeQm4U.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added \'13.68.177.20\' (ECDSA) to the list of known hosts.\nWelcome to Ubuntu 18.04.4 LTS (GNU/Linux 5.3.0-1020-azure x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Sun May 10 03:56:15 UTC 2020\n\n  System load:  0.08              Processes:              110\n  Usage of /:   6.4% of 28.90GB   Users logged in:        0\n  Memory usage: 10%               IP address for eth0:    10.0.0.4\n  Swap usage:   0%                IP address for docker0: 172.17.0.1\n\n3 packages can be updated.\n2 updates are security updates.\n\n\n\nThe programs included with the Ubuntu system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nUbuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by\napplicable law.\n\nTo run a command as administrator (user "root"), use "sudo <command>".\nSee "man sudo_root" for details.\n\nazureuser@myDockerVM:~$\n')])])]),n("p",[n("strong",[e._v("（2）安裝 VM 作業系統所需軟體套件")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo apt update && sudo apt upgrade -y\n\n$ sudo apt install -y git wget curl tree neovim xclip nginx\n\n$ sudo apt install -y build-essential checkinstall libffi-dev python-dev\n\n$ sudo apt install -y libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev\n")])])]),n("h2",{attrs:{id:"安裝-ssh-並於-github-安裝公鑰"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝-ssh-並於-github-安裝公鑰"}},[e._v("#")]),e._v(" 安裝 ssh ，並於 GitHub 安裝公鑰")]),e._v(" "),n("p",[e._v("（1）在終端機輸入指令，建立 SSH Key 。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ ssh-keygen -t rsa -b 4096 -C "alanjui.1960@gmail.com"\n')])])]),n("p",[e._v("（2）驗證 SSH 公鑰已建立。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ ll ~/.ssh\ntotal 24\ndrwx------ 2 azureuser azureuser 4096 May 11 03:18 ./\ndrwxr-xr-x 7 azureuser azureuser 4096 May 10 09:47 ../\n-rw------- 1 azureuser azureuser  381 May 10 03:44 authorized_keys\n-rw------- 1 azureuser azureuser 3243 May 11 03:18 id_rsa\n-rw-r--r-- 1 azureuser azureuser  748 May 11 03:18 id_rsa.pub\n-rw-r--r-- 1 azureuser azureuser  884 May 10 09:40 known_hosts\n")])])]),n("p",[e._v("（3）將 SSH Key 加入 ssh-agent 。")]),e._v(" "),n("p",[e._v("啟動 ssh-agent ，並置於作業系統背景處理。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ eval "$(ssh-agent -s)"\nAgent pid 110025\n')])])]),n("p",[e._v("將 SSH 私鑰置入 ssh-agent 。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ ssh-add ~/.ssh/id_rsa\nIdentity added: /home/azureuser/.ssh/id_rsa (/home/azureuser/.ssh/id_rsa)\n")])])]),n("p",[e._v("（4）將 SSH 公鑰，置入 GitHub 。")]),e._v(" "),n("p",[e._v("將 SSH 公鑰置入個人電腦的「剪貼簿」。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ cat ~/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCuQnjbcvS5bAMPhrpqfEMeqaQgNa+4LPWAYs07PpNzirQoe00OKlIMIAudbjej3S774Q8Xa2y2GirK046bYueRMmfp5K3pdCi0nOKgQJ/DStBuNpjTUp7VRTbLPIgITJhg5xgmN5i3WhI8jJhhVgaZ/iAsJzWLVifqLi2ZWI57pTD7NjoUi+yS11mzscQPFCya+nWRdAzbBvOmUoYyPEdS52bYPZ7w7uFZRuwQxJEyjyUBEdSRYllwAY0cM/KvkXpVAzz68wI6XHFbt96seFpYE9dSwCV9awHmK2qPpH2JTLWFSeDB1TaddU8l8VcwknHYKIiTe/24XT87jazg/xn0iX6MtouMmPqfUwKs2WaJ0L8TYlIJAuDWqaaAA+TLKvfGjj56ikiS7wFCD94DZfRsGEEzE+D9DlYXl0t/KPRVtAlz6rU0TE2mEIyRsDw66N0f+IAtbhs+zCFiE556q2KWikLsyjhXl+nBAOFiwmEFVB2X0H6YAVF0iMTMyYQ53TOILUgd215tFjv6x4ojQisTouZ/+4thHYQCHwWdGvunIe8pHd37TBRiVqpkFcv/nK96vr3dL/oBsc1t4uNE//n2cI0ImGaTTgCI9D0pC5aRKun3ny2UBdz1tqMTjx13GNGjmAdpd3FbanNK+teTsjq8jBhKS+HML/2JFJRf3/hgRw== alanjui.1960@gmail.com\n\n\nDISPLAY=:0 xclip -sel clip < ~/.ssh/id_rsa.pub\n")])])]),n("p",[e._v("將 SSH 公鑰置入 GitHub 。")]),e._v(" "),n("p",[e._v("https://github.com/settings/profile")]),e._v(" "),n("p",[e._v("路徑： AlanJui 帳號（Settings）／SSH and GPG Keys / SSH keys / New SSH key")]),e._v(" "),n("h1",{attrs:{id:"安裝-django-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝-django-app"}},[e._v("#")]),e._v(" 安裝 Django App")]),e._v(" "),n("h2",{attrs:{id:"自-github-置入-django-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自-github-置入-django-app"}},[e._v("#")]),e._v(" 自 GitHub 置入 Django App")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("cd\nmkdir -p ~/workspace && cd $_\ngit clone git@github.com:AlanJui/DjangoApp-DevTemplate.git app-02\ncd app-02\n")])])]),n("p",[e._v("安裝 Django App 所需套件")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo gpasswd -a ${USER} docker\nAdding user azureuser to group docker\n\n\n\nazureuser@myDockerVM:~/workspace/app-02$ cd code\nazureuser@myDockerVM:~/workspace/app-02/code$ pipenv shell\nCreating a virtualenv for this project…\nPipfile: /home/azureuser/workspace/app-02/code/Pipfile\nUsing /home/azureuser/.pyenv/versions/3.8.2/bin/python3 (3.8.2) to create virtualenv…\n⠴ Creating virtual environment...created virtual environment CPython3.8.2.final.0-64 in 340ms\n  creator CPython3Posix(dest=/home/azureuser/.local/share/virtualenvs/code-LQmY7Qdt, clear=False, global=False)\n  seeder FromAppData(download=False, pip=latest, setuptools=latest, wheel=latest, via=copy, app_data_dir=/home/azureuser/.local/share/virtualenv/seed-app-data/v1.0.1)\n  activators BashActivator,CShellActivator,FishActivator,PowerShellActivator,PythonActivator,XonshActivator\n\n✔ Successfully created virtual environment!\nVirtualenv location: /home/azureuser/.local/share/virtualenvs/code-LQmY7Qdt\nLaunching subshell in virtual environment…\n . /home/azureuser/.local/share/virtualenvs/code-LQmY7Qdt/bin/activate\nazureuser@myDockerVM:~/workspace/app-02/code$  . /home/azureuser/.local/share/virtualenvs/code-LQmY7Qdt/bin/activate\n(code) azureuser@myDockerVM:~/workspace/app-02/code$\n\n\n\n(code) azureuser@myDockerVM:~/workspace/app-02/code$ pipenv install\nInstalling dependencies from Pipfile.lock (f6a73a)…\n  🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 6/6 — 00:00:12\n(code) azureuser@myDockerVM:~/workspace/app-02/code$\n\n\n\n(code) azureuser@myDockerVM:~/workspace/app-02/code$ python manage.py collectstatic\n\n132 static files copied to '/home/azureuser/workspace/app-02/code/static_collected'.\n(code) azureuser@myDockerVM:~/workspace/app-02/code$\n\n\n\n\ncd ~/workspace/app-02\nsudo docker-compose up --build -d\n(code) azureuser@myDockerVM:~/workspace/app-02$ sudo docker-compose ps\n     Name                    Command               State           Ports\n---------------------------------------------------------------------------------\napp02_adminer_1   entrypoint.sh docker-php-e ...   Up      0.0.0.0:8080->8080/tcp\napp02_db_1        docker-entrypoint.sh postgres    Up      0.0.0.0:5432->5432/tcp\napp02_proxy_1     nginx -g daemon off;             Up      0.0.0.0:5000->80/tcp\napp02_web_1       gunicorn --bind 0.0.0.0:80 ...   Up      0.0.0.0:8000->8000/tcp\n\n\n\n(code) azureuser@myDockerVM:~/workspace/app-02$ sudo docker-compose exec web python manage.py migrate\nOperations to perform:\n  Apply all migrations: admin, auth, contenttypes, log_msg, sessions\nRunning migrations:\n  Applying contenttypes.0001_initial... OK\n  Applying auth.0001_initial... OK\n  Applying admin.0001_initial... OK\n  Applying admin.0002_logentry_remove_auto_add... OK\n  Applying admin.0003_logentry_add_action_flag_choices... OK\n  Applying contenttypes.0002_remove_content_type_name... OK\n  Applying auth.0002_alter_permission_name_max_length... OK\n  Applying auth.0003_alter_user_email_max_length... OK\n  Applying auth.0004_alter_user_username_opts... OK\n  Applying auth.0005_alter_user_last_login_null... OK\n  Applying auth.0006_require_contenttypes_0002... OK\n  Applying auth.0007_alter_validators_add_error_messages... OK\n  Applying auth.0008_alter_user_username_max_length... OK\n  Applying auth.0009_alter_user_last_name_max_length... OK\n  Applying auth.0010_alter_group_name_max_length... OK\n  Applying auth.0011_update_proxy_permissions... OK\n  Applying log_msg.0001_initial... OK\n  Applying sessions.0001_initial... OK\n(code) azureuser@myDockerVM:~/workspace/app-02$\n\n\n\n(code) azureuser@myDockerVM:~/workspace/app-02$ sudo docker-compose exec web python manage.py collectstatic\n\nYou have requested to collect static files at the destination\nlocation as specified in your settings:\n\n    /app/static_collected\n\nThis will overwrite existing files!\nAre you sure you want to do this?\n\nType 'yes' to continue, or 'no' to cancel: yes\n\n0 static files copied to '/app/static_collected', 132 unmodified.\n(code) azureuser@myDockerVM:~/workspace/app-02$\n\n\n\n\n\nhttp://13.68.177.20:5000/\n")])])]),n("h1",{attrs:{id:"azure-cloud-service-學習資源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-cloud-service-學習資源"}},[e._v("#")]),e._v(" Azure Cloud Service 學習資源")]),e._v(" "),n("h2",{attrs:{id:"cli-指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cli-指引"}},[e._v("#")]),e._v(" CLI 指引")]),e._v(" "),n("p",[e._v("https://docs.microsoft.com/zh-tw/cli/azure/?view=azure-cli-latest")]),e._v(" "),n("h2",{attrs:{id:"azure-文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-文件"}},[e._v("#")]),e._v(" Azure 文件")]),e._v(" "),n("p",[e._v("https://docs.microsoft.com/zh-tw/azure/?product=featured")])])}),[],!1,null,null,null);n.default=s.exports}}]);
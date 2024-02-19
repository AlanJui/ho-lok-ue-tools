---
sidebar: auto
---

# 在 Ubuntu 建置 Node.js 作業環境指引

## 摘要

在 Ubuntu 作業系統，建置 Node.js 作業平台。

- 安裝 Global 作業環境
- 安裝 Local 作業環境

## Global 方式安裝作業

## 安裝套件

安裝「預設 Node.js」。

安裝作業系統層級，提供：root 帳號；或套件（如：vim）使用的
「預設 Node.js」。

1. 安裝 Node.js 與 npm 套件管理器。

```
sudo apt install nodejs npm
```

2. 確認 node 與 npm 安裝處。

```
alanjui@VB02-Ubuntu-2004:~$ ll /usr/bin/node
-rwxr-xr-x 1 root root 14416  3月 31  2020 /usr/bin/node*

alanjui@VB02-Ubuntu-2004:~$ ll /usr/bin/npm
lrwxrwxrwx 1 root root 27  4月  9  2020 /usr/bin/npm -> ../share/npm/bin/npm-cli.js*
```

## 更新到最新版

1. 安裝 n 套件管理器

```
sudo su
npm install -g npm
npm install -g n
```

2. 透過 n 套件管理器，安裝最新版。

- 最新版

```
n latest
```

- 最近 LTS 版

```
n lts
```

📚

```
- Ubuntu 作業系統「預設Node.js」安裝路徑： /usr/bin/node

- 使用 n 更新到新版後，安裝路徑會變更位置： /usr/local/bin/node
```

📺

```
root@VB02-Ubuntu-2004:/var/www/mysite.ccc.tw.local# sudo n lts
  installing : node-v14.16.0
       mkdir : /usr/local/n/versions/node/14.16.0
       fetch : https://nodejs.org/dist/v14.16.0/node-v14.16.0-linux-x64.tar.xz
   installed : v14.16.0 (with npm 6.14.11)

Note: the node command changed location and the old location may be remembered in your current shell.
         old : /usr/bin/node
         new : /usr/local/bin/node
To reset the command location hash either start a new shell, or execute PATH="$PATH"

root@VB02-Ubuntu-2004:/var/www/mysite.ccc.tw.local# which node
/usr/local/bin/node

root@VB02-Ubuntu-2004:/var/www/mysite.ccc.tw.local# ll /usr/bin/node
-rwxr-xr-x 1 root root 14416  3月 31  2020 /usr/bin/node*
```

## Local 方式安裝作業

### 安裝 node 版本管理器

提供一般使用者用的 Node.js 與 npm 。

1. 安裝 Node.js 版本管理器：n 。

```
cd
curl -L https://git.io/n-install | bash

source ~/.bashrc
```

2. 設定 PATH 及重啟 Shell 。

- 設定 PATH

```
vim ~/.bahrc
```

🔖 .bashrc

```
#export N_PREFIX="$HOME/n"; [[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin"  # Added by n-install (see http://git.io/n-install-repo).
export N_PREFIX="$HOME/n";
export PATH="$N_PREFIX/bin:$PATH"
```

- 重啟 Shell

```
source ~/.bashrc
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ echo $PATH
/home/alanjui/.pyenv/plugins/pyenv-virtualenv/shims:/home/alanjui/.pyenv/shims:/home/alanjui/.pyenv/bin:/home/alanjui/n/bin:/home/alanjui/.pyenv/plugins/pyenv-virtualenv/shims:/home/alanjui/.pyenv/shims:/home/alanjui/.pyenv/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/home/alanjui/n/bin
```

3. 使用 n 版本管理器，安裝 LTS 版本 Node.js 。

```
n lts
```

4. 驗證安裝無誤。

```
node -v
which node

npm -v
which npm
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ n lts
   installed : v14.16.0 (with npm 6.14.11)

alanjui@VB02-Ubuntu-2004:~$ node -v
v14.16.0
alanjui@VB02-Ubuntu-2004:~$ which node
/home/alanjui/n/bin/node

alanjui@VB02-Ubuntu-2004:~$ npm -v
6.14.11
alanjui@VB02-Ubuntu-2004:~$ which npm
/home/alanjui/n/bin/npm
```

### 安裝 Node 套件管理器：yarn

npm 本身即是 Node 之「套件管理器」。何以要再安裝 yarn ，主要原因是有些套件的安裝
偏好使用 yarn 所致。

1. 安裝

```
npm i -g yarn
```

2. 驗證

```
which yarn
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ npm i -g yarn

> yarn@1.22.10 preinstall /home/alanjui/n/lib/node_modules/yarn
> :; (node ./preinstall.js > /dev/null 2>&1 || true)

/home/alanjui/n/bin/yarn -> /home/alanjui/n/lib/node_modules/yarn/bin/yarn.js
/home/alanjui/n/bin/yarnpkg -> /home/alanjui/n/lib/node_modules/yarn/bin/yarn.js
+ yarn@1.22.10
added 1 package in 0.854s

alanjui@VB02-Ubuntu-2004:~$ yarn -v
1.22.10

alanjui@VB02-Ubuntu-2004:~$ which yarn
/home/alanjui/n/bin/yarn
```

## 常用操作

N/A

## 診斷問題與排除狀況

N/A

## 參考資料

N/A

# yarn 安裝設定與操作使用
yarn ：管理 Node.js 模組套件工具。


## 在 Mac 安裝 yarn


**使用 curl 安裝**

此法亦為「[yarn self-update](https://classic.yarnpkg.com/en/docs/cli/self-update/)」。

 （1）執行安裝指令。

    curl --compressed -o- -L https://yarnpkg.com/install.sh | bash


（2）設定 Shell Path 。


    nvim ~/.profile

加入以下設定：

    export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

（3）啟用 

    source ~/.zshrc

（4）驗證 

    which yarn
    /Users/alanjui/.yarn/bin/yarn
    
    yarn --version
    1.22.4






**使用 brew 安裝**

此方式對已安裝 Homebrew 的 Mac 使用者，是最方便的方法；但也僅適用於 macOS 環境。

使用 brew 安裝 yarn 時，NodeJS 會被當作相依套件，一併進行安裝作業。如此一來，將致 n (NodeJS 的版本控管工具失效）。


    brew install yarn


- 執行檔安裝目錄路徑： `/usr/local/Cellar/yarn/1.19.1/bin/yarn`


    $ which yarn
    /usr/local/bin/yarn
    
    $ ls -al /usr/local/bin/yarn
    lrwxr-xr-x  1 alanjui  admin  30 10 18 10:41 /usr/local/bin/yarn -> ../Cellar/yarn/1.19.1/bin/yarn
    
    $ ll /usr/local/Cellar/yarn/1.19.1/bin/yarn
    -r-xr-xr-x  1 alanjui  admin  130 10 18 10:41 /usr/local/Cellar/yarn/1.19.1/bin/yarn


- Global 套件預設安裝目錄： `$HOME/.config/yarn/global/node_modules/`
    $ yarn global dir
    /Users/alanjui/.config/yarn/global


**使用 Shell Script 安裝**

以此方式安裝，不僅適用於 Mac 作業系統；同樣亦適用於 Linux 作業系統環境。


    curl -o- -L https://yarnpkg.com/install.sh | bash

若需「指明版本」，則改用下列指令進行安裝：


    curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version [version]


## 環境設定

**設定 Global 套件（node_module 檔案）存放路徑：**


1. 建 Global 套件存放目錄： `~/.yarn`


    cd
    mkdir ~/.yarn


2. 執行 yarn 指令，設定 Global 套件目錄路徑。 


    $ yarn config set prefix ~/.yarn
    yarn config v1.19.1
    success Set "prefix" to "/Users/alanjui/.yarn".
    ✨  Done in 0.02s.


3. 設定 Shell 啟動預設檔。


    vim ~/.bash_profile

【.bash_profile】:


    ⋯⋯
    export PATH="$(yarn global bin):$PATH"
    ⋯⋯

::: tip

    vim ~/.zshrc

:::


4. 重新啟動 Shell 。


    source ~/.bash_profile

 5. 驗證設定結果是否正確。


    $ yarn global dir
    /Users/alanjui/.config/yarn/global



## 操作使用


- **查詢 Global 套件安裝目錄路徑**


    $ yarn global dir
    /Users/alanjui/.config/yarn/global



- **查詢已安裝之 Global 套件**


    $ yarn global list
    yarn global v1.19.1
    info "vuepress@1.2.0" has binaries:
       - vuepress
    ✨  Done in 0.66s.


## 參考文章


https://yarnpkg.com/lang/en/docs/cli/global/



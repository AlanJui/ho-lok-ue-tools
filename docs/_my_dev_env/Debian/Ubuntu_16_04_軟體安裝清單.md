# Ubuntu 16.04 軟體安裝清單

- 作業系統
- 磁碟
- 網路
- 開發
- 多媒體

 

----------
# 工具


## 磁碟工具
[x] GParted
[x] gpart
## 作業系統工具：
[ ] FontManager
[ ] Guake Terminal  (Yakuake)
[ ] Guake Indicator
[x] Tmux
[x] Oh-My-Zsh


    $ sudo apt-get install -y ssh wget tmux


## 網路基礎工具：
[x] ssh
[x] wget
[x] Git


    $ sudo apt-get install -y ssh wget tmux


# 軟體開發
## 編輯器
[x] Visual Studio Code (VS Code)
[x] Sublime Text 3
[x] WebStorm



## NPM Packages
[x] Node & NPM
[x] n
[x] typescript
[x] eslint
[x] tslint
[x] bower
[x] gulp
[x] yo
[x] lite-server
[x] angular-cli
[x] gulp-cli


安裝 Node & NPM

    $ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    $ sudo apt-get install -y nodejs


    $ sudo npm install -g angular-cli 
## Yeoman Generator
[ ] generator-rest
[ ] generator-api
[ ] generator-angular-fullstack
[ ] generator-babel-boilerplate


    gulp-cli generator-angular-fullstack




# 系統開發輔助工具
[x] MongoDB
[ ] MongoBooster
[x] Docker
[x] docker-compose
[x] Heroku
[ ] Mono



    $ sudo apt-get install mono-complete



## VS Code Extenstion
[ ] Node Debug (安裝此之前，得先安裝 Mono on Linux)
[ ] ESLint
[ ] ESLint On Save


----------
# 多媒體
## 播放器
- SMPlayer
- MuseScroe


## 影像及繪圖
- GIMP
- Darktable
- RawTherapee
- Inkscape
- MyPaint
- 掃描易


## 桌面錄製
- Kazam
- RecordMyDesktop


## 影片編輯器
- OpenShot Video Editor
- Pitivi
- **Kdenlive**
- **Flowblade Movie Editor**
- **Lightworks** 




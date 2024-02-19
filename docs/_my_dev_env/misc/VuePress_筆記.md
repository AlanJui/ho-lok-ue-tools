# VuePress 筆記


# 快速入門

https://vuepress.vuejs.org/



## [建置 VuePress 執行環境](https://paper.dropbox.com/doc/VuePress--A2h7b2LC3vxLYQXYVC89wnI1Ag-9H8omQBg6oUUncYox6Lic#:uid=344715562197476506091704&h2=%E5%BB%BA%E7%BD%AE-VuePress-%E5%9F%B7%E8%A1%8C%E7%92%B0%E5%A2%83)


    # install globally
    yarn global add vuepress # OR npm install -g vuepress
    
    # create the project folder
    mkdir vuepress-starter && cd vuepress-starter
    
    # create a markdown file
    echo '# Hello VuePress' > README.md
    
    # start writing
    vuepress dev
    
    # build
    vuepress build


## 建立 VuePress Web Site


    # 進入工作區
    cd ~/workspace/vuepress
    mkdir <ProjectName> && cd $_
    
    # Scaffold VuePress site
    yarn create vuepress [directoryName]
    # OR npx create-vuepress [directoryName]
    
    # Navigate to your new VuePress directory
    cd [directoryName]
    
    # Start local dev server
    yarn dev
    # OR npm run dev
    
    # Build static files
    yarn build
    # OR npm run build

**COMPATIBILITY NOTE**
VuePress requires Node.js >= 8.6.


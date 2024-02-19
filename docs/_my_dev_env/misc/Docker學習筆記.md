# Docker學習筆記
Docker學習筆記

# 常用指令


## 顯示現在正執中的 Container
    $ docker ps



## 刪除已存在的 Container
    $ docker rm $(docker ps -q -f status=exited) 

 
`-q` prints just the container ids (without column headers)
`-f` allows you to filter your list of printed containers (in this case we are filtering to only show exited containers)



## 刪除所有停用的 Container
    $ docker rm $(docker ps -a | grep Exited | awk '{print $1}')



## Stop containers
    $ docker stop webserver



## Start containers
    $ docker start webserver



## Remove containers
    $ docker rm -f webserver



## Remove images
    $ docker rmi nginx


清除不想用的 Docker Image

    $ docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")



清除不用的 Docker Images
有好一陣子沒再學 Docker ，今天告訴自己，不能再如此「匪端下去」，於是乎「O 塞 Go 壁」，勇敢的啟動了 Terminal ，指尖在鍵盤上輕快的飛舞，立即㪣完「docker images」，然後按個《Enter》鍵，接著一看……

https://d2mxuefqeaa7sj.cloudfront.net/s_4EC83AD3250063F6EE4B4BB9E63C835A6AC9E3EF0C21A949BFEB79ED109D5AA4_1474787932841_file.png


「安娘巍～」，我的電腦內，什麼時候搞出那麼多的 Docker Images 啊？！

還有 ……

那個 TAG 名稱為 **<none>** 的 Docker Image 為何特多滴？要怎麼用最快的速度，一次搞定，清除這些無用的東東呢？

Google 了一下，有高手給了如下一帖秘技：

    $ docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")

話不多說，趕快來試，這組指令是否有效……

https://d2mxuefqeaa7sj.cloudfront.net/s_4EC83AD3250063F6EE4B4BB9E63C835A6AC9E3EF0C21A949BFEB79ED109D5AA4_1474789176810_file.png


打完收工，驗證一下，是否有達成自己的心願？

https://d2mxuefqeaa7sj.cloudfront.net/s_4EC83AD3250063F6EE4B4BB9E63C835A6AC9E3EF0C21A949BFEB79ED109D5AA4_1474789287056_file.png


哇～～～！

果然有效，有網路，學技術－真好！！   ^^y


----------


# 分解動作
- docker images | grep “<none>”
- docker images | grep “<none>” | awk “{print \$3}”
- docker rmi -f $(docker images | grep “<none>” | awk “{print \$3}”)


只要 TAG 名稱為 <none> 的 Docker Image：

    $ docker images | grep "<none>"


https://d2mxuefqeaa7sj.cloudfront.net/s_4EC83AD3250063F6EE4B4BB9E63C835A6AC9E3EF0C21A949BFEB79ED109D5AA4_1474789462317_file.png


只要 Terminal 顯示，第三欄的「Docker Image ID」資料：

    $ docker images | grep "<none>" | awk "{print \$3}"


https://d2mxuefqeaa7sj.cloudfront.net/s_4EC83AD3250063F6EE4B4BB9E63C835A6AC9E3EF0C21A949BFEB79ED109D5AA4_1474789813105_file.png


將「經Shell指令加工過濾後的 Docker Image ID」回傳給 docker rmi 指令使用：

    $ docker rim -f $(<<Shell指令>>)
https://d2mxuefqeaa7sj.cloudfront.net/s_4EC83AD3250063F6EE4B4BB9E63C835A6AC9E3EF0C21A949BFEB79ED109D5AA4_1474790507298_file.png


【註】： rmi 為刪除 Docker Image 的指令。


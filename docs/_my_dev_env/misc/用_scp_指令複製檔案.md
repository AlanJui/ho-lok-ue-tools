# 用 scp 指令複製檔案
【Local端 - Ubuntu】： Srv-01 (IP: 192.168.66.10)
【Remote端 - OS X】：MacBookPro.local (IP: 192.168.66.110)


Remote → Local

在 Remote 端電腦操作，想將 Remote 端電腦內的 ~/myEvn.sh 檔案，複製到 Local 端電腦內「home」路徑中。

在 Remote 端電腦輸入指令：

    $ scp ~/myEnv.sh alanjui@192.168.66.10:/home/alanjui



----------

想將 Remote 端電腦內的 ~/workspace/Angular2/quick-start-03/app/*.ts 檔案，複製到 Local 端電腦內「~/workspace/RESTful/rest-000/app/」路徑中。

在 Remote 端電腦輸入指令：

    $ scp ~/workspace/Angular2/quick-start-03/app/*.ts alanjui@192.168.66.10:/home/alanjui/workspace/RESTful/rest-000/app/


在 Local 端電腦輸入指令：

    $ scp AlanJui@192.168.66.110:/Users/AlanJui/workspace/Angular2/quick-start-03/app/*.ts /home/alanjui/workspace/RESTful/rest-000/app/

可以偷懶的作法：（操作者以 alanjui 帳號，在 Local 端登入）

    $ scp AlanJui@192.168.66.110:/Users/AlanJui/workspace/Angular2/quick-start-03/app/*.ts ~/workspace/RESTful/rest-000/app/

【ＺＳＨ Shell專用】：
ZSH不可以在指令中使用「萬用字元 *」，得改成「\*」。

    $ scp AlanJui@192.168.66.110:/Users/AlanJui/workspace/Angular2/quick-start-03/app/\*.ts ~/workspace/RESTful/rest-000/app/

參考文件： http://www.computerhope.com/unix/scp.htm


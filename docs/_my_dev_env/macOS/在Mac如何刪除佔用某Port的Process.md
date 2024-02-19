# 在Mac如何刪除佔用某Port的Process

在 OS X作業系統，想要刪除佔用 Port：3000 的 Process。


    $ lsof -i tcp:3000
    $ kill -9 <PID>



    20:55:07 $ lsof -i tcp:3000
    COMMAND    PID    USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
    webstorm 86693 AlanJui  120u  IPv4 0xda1df6f98d1fc2cb      0t0  TCP localhost:59465->localhost:hbci (CLOSE_WAIT)
    
    AlanJui at MacBook-Pro.local in [~/workspace/RESTful/rest-000]  on git:master ✗  6805b8d "校正無法自 RESTful Server 讀取資料的問題。"
    20:55:10 $ kill -9 86693
    


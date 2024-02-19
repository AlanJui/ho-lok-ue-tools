# 在 Mac 使用 ranger  瀏覽圖片檔

【參考文章】： https://www.everythingcli.org/ranger-image-preview-on-osx-with-iterm2/

前置條件：

    適用於 iTerm App v2.9 （ >= )


**安裝 ranger**

    brew install ranger


**下載 imgcat**

    wget -O ~/.local/bin/imgcat https://raw.githubusercontent.com/gnachman/iTerm2/master/tests/imgcat
    chmod u+x ~/.local/bin/imgcat
    
    ll ~/.local/bin/imgcat
    -rwxr--r--  1 alanjui  staff    47B  1 28 10:34 /Users/alanjui/.local/bin/imgcat


**設定 ranger 執行環境**

    vim ~/.config/ranger/rc.conf


    set preview_images true
    set preview_images_method iterm2
    
    default_linemod devicons
    set show_hidden true: 


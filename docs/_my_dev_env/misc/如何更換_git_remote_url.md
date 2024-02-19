# 如何更換 git remote url
使用 Heroku 建立  App 。

才剛完成，就覺得「App Name」不滿意，立即又再做一次建立 App  的動作，結果卻引發 git remote 的登記出了問題，因為在 heroku 的 URL  記錄的仍是先前舊 App 的 Remote Git URL ，而不是新 App 的 ，此時該怎麼辦？


1. 使用  heroku  的 create 指令，建立新 Heroku App 。


    AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN]  
    10:52:41 $ heroku create
    Creating app... done, ⬢ morning-falls-55231
    https://morning-falls-55231.herokuapp.com/ | https://git.heroku.com/morning-falls-55231.git

 2. 使用  heroku  的 create 指令，建立新 Heroku App 。


    AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN] 
    10:55:16 $ heroku create cid-for-mean
    Creating ⬢ cid-for-mean... done
    https://cid-for-mean.herokuapp.com/ | https://git.heroku.com/cid-for-mean.git


3. 查詢 git remote 的登記狀態，察覺 heroku 記錄的 Remote URL 仍是舊 Heroku App 的 Git Repo。


    AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN] 
    10:57:50 $ git remote
    heroku
    origin
    
    AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN]  
    11:01:44 $ git remote -v
    heroku        https://git.heroku.com/morning-falls-55231.git (fetch)
    heroku        https://git.heroku.com/morning-falls-55231.git (push)
    origin        git@github.com:AlanJui/CID_for_MEAN.git (fetch)
    origin        git@github.com:AlanJui/CID_for_MEAN.git (push)


4. 使用指令更正，並確認更正確實有效。


    AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN] 
    11:02:12 $ git remote set-url heroku https://git.heroku.com/cid-for-mean.git
    
    AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN]  
    11:05:23 $ git remote -v
    heroku        https://git.heroku.com/cid-for-mean.git (fetch)
    heroku        https://git.heroku.com/cid-for-mean.git (push)
    origin        git@github.com:AlanJui/CID_for_MEAN.git (fetch)
    origin        git@github.com:AlanJui/CID_for_MEAN.git (push)


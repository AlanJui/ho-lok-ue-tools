# Git快速入門


# 課程目標
- 可在 Local 端，使用 git 指令/GUI工具，進行檔案的版本控管
- 可將 Local 端已進行版本控管的檔案，放入 Remote 端
- 將 Remote 端的檔案複製（Clone）到 Local 端
- 提供 git 雲端服務的廠商，如何透過 Web 介面，對 Remote 端進行操作



----------
# Git安裝
- GitBash（在Windows作業系統專用，以指令操作的 Git 工具）：  https://git-scm.com/download/win


-  SourceTree（在 Windows / Mac OSX 作業系統，以 GUI 操作的 Git 工具）https://www.sourcetreeapp.com/


- 驗證 Git 已完成安裝


----------
# 常用指令基本操作


## Git納管作業流程
- 認識 Git 作業區
- 認識 Git 指令與各「作業區」的關聯


![git 指令與納管作業流程](https://greenido.files.wordpress.com/2013/07/git-local-remote.png?w=696&h=570)


Working Directory：工作區

Staging Area （亦有人稱作 Index Area）：索引區

Local Repo：本端納管區

Remote Repot：遠端納管區


----------


## 認識 File Status

在「工作區」中的檔案，其 File Status 共有以下四種：

- Untracked
- Unmodified
- Modified
- Staged

透過 git 指令，執行版本控管的作業，將致檔案的 File Status 引發轉變。

- git add: Add the file
- git commit: Commit
- git add: Stage the file
- git rm: Remove the file (已納管（亦即已 Tracked）的檔案，可放棄繼續納管)


![The lifecycle of the status of your files.](https://git-scm.com/book/en/v2/images/lifecycle.png)


git 只會追蹤（track）已被提交過（committed）的檔案。

在「工作區」新建立的檔案，因為尚不曾被提交過，所以其 File Status 為：Untracked 。


![](https://d2mxuefqeaa7sj.cloudfront.net/s_77BDC0D05430983BB80FBA177DFD202F72D136811A7934ADD1B209F1D469F1E6_1533031665419_image.png)


執行 **git add** 指令，完成 add the file 作業，將檔案放入「索引區」，其 File Status 轉成 Staged 。透過 **git status** 指令，可觀察到該檔案再也不屬 Untracked Files ；而是轉變成「Changes to be committed」。


![](https://d2mxuefqeaa7sj.cloudfront.net/s_77BDC0D05430983BB80FBA177DFD202F72D136811A7934ADD1B209F1D469F1E6_1533031890623_image.png)


執行 **git commit** 指令，完成 commit 作業，將檔案放入「本端納管區」，其 File Status 變成 Unmodified 。透過 **git status** 指令，可見該檔案再也不屬「Changes to be committed」。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_77BDC0D05430983BB80FBA177DFD202F72D136811A7934ADD1B209F1D469F1E6_1533033914884_image.png)


後續，因編輯檔案（Edit the file），而致內容變更，則「工作區」中的檔案，其 File Status 變成了 Modified 。透過 **git status** 指令，可觀察到該檔案已轉變成「Changes not staged for commit」。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_77BDC0D05430983BB80FBA177DFD202F72D136811A7934ADD1B209F1D469F1E6_1533034658847_image.png)


再度執行 **git add** 指令，完成 Stage the file 作業，則檔案會再放入「索引區」，其 File Status 又再變成 Staged 。透過 **git status** 指令觀察，可見該檔案現在亦再變成「Changes to be committed」。

![](https://d2mxuefqeaa7sj.cloudfront.net/s_77BDC0D05430983BB80FBA177DFD202F72D136811A7934ADD1B209F1D469F1E6_1533034910656_image.png)


再度執行 **git commit** 指令，完成 Commit 作業，則檔案會再放入「本端納管區」，其 File Status 又再變成 Unmodified 。透過 **git status** 指令觀察，「Changes to be committed」再也看不到任何檔案了。


![](https://d2mxuefqeaa7sj.cloudfront.net/s_77BDC0D05430983BB80FBA177DFD202F72D136811A7934ADD1B209F1D469F1E6_1533036979900_image.png)



----------

剛完成 git clone 指令時，已被放入「工作區」中的檔案，其 File Status 均為 Unmodified 。

若是對「工作區」中的某個檔案，執行 Edit the file 作業，將致 File Status 轉變成 Modified 。

為了要將此已變更的檔案，再次放入「本端納管區」 ，則需……

透過 **git add** 指令，執行 Stage the file 作業，將檔案再次放入「索引區」，令其 File Status 轉換成 Staged 。

接下來，再透過 **git commit** ****指令，執行 Commit 作業，將檔案再次放入「本端納管區」，令 File Status 再度轉為 Unmodified 。


----------

總結：

許多的 git 指令，都會切換「工作區」中，檔案的 File Status 。透過 git status 指令，可觀察「工作區」中檔案目前的 File Status ，同時 git 也會提醒使用者，下一步該做什麼事。

下一步該做什麼事，會依 File Status ，分成下列三大類別：

- Untracked Files
- Changes not staged for commit
- Changes to be committed


![](https://zlargon.gitbooks.io/git-tutorial/content/file/status/git_status.png)


觀察 File Status ，及其所屬「下一步該做什麼」的類別後，該執行那個 git 指令，可用以下類似「狀態圖（Status Machine Diagram）」來表述：


![git file status all.jpg](https://zlargon.gitbooks.io/git-tutorial/content/file/status/git_file_status.jpg)







----------


## 單機作業
- git init: 在目前所在「目錄」，建立「本端納管區」 
- git add: 將檔案加入「索引區」
- git status:  觀察檔案的狀態 (新增/變更/刪除/改名)
- git commit: 將檔案自「索引區」，提交到「本端納管區」  
- git log: 觀察納管的歴史紀錄
- .gitignore: 設定不想納管的檔案，要求 git 忽略它


## 共同作業
![多人協同作業，Repo 與納管項目（檔案）的關聯](https://www.cs.swarthmore.edu/~newhall/unixhelp/gitrepos.gif)



- git clone: 將存放於「遠端納管區（Remote Repo）」的檔案，複製（Clone）到「本端納管區（Local Repo）」
- git pull: 將「遠端納管區」的檔案，與「本端納管區」的檔案同步（Sync）
- git remote add: 設定「遠端納管區」的 URL 網址 
- git push: 將「本端納管區」的檔案，與「遠端納管區」的檔案同步（Sync）


## 發行作業
- git tag -a:  在「本端納管區」，建立 Tag 
- git tag -l : 條列「本端納管區」所有 Tag

在 2018-7-31 發行 V0.0.1 版

    $ GIT_COMMITTER_DATE="2006-10-02 10:31" git tag -a V0.0.1

透過以下「條列本端納管區所有 Tag 」的指令，可驗證上個指令是否成功達成目的：

    $ git tag -l


## 通信協定
- HTTP/HTTPS
- SSH


## Git 雲端服務商
- GitHub： https://github.com/
- BitBucket： https://bitbucket.org/
- GitLab： https://about.gitlab.com/


## 【演練一】：自 GitHub 複製 Repo 
- 自「遠端納管區」複製到「本端納管區」（Clone）
    GitHub Repo: AlanJui/AspNetCore-WebAPI-DevExtreme
    URL:  https://github.com/AlanJui/AspNetCore-WebAPI-DevExtreme


## 【演練二】：將本端納管區的檔案，放入位於 BitBucket 的 Repo 
- git init 建立「本端納管區」
- git add & git commit 將檔案納管到「本端納管區」
- 在 BitBucket 建立「遠端納管區」（Remote Repo）
- git remote add 建立「遠端納管區」與「本端納管區」的連結
- git push 要求「遠端納管區」與「本端納管區」，進行同步作業（意即將「本端納管區」中已納管的檔案，放入「遠端納管區」）

例如專案，當多人協同作業時，最好養成每天執行 git pull 的習慣，以便「本端」與「遠端」的檔案都在同步的狀態；最好是養成利用「Branch」與「Merge」的作業模式，如此一來則可現在大家各做各的事，但將來還是能將「本端納管區」的檔案彙整合併在一起。


# 教學影片
https://www.youtube.com/watch?v=SWYqp7iY_Tc&


[https://youtu.be/SWYqp7iY_Tc](https://youtu.be/SWYqp7iY_Tc)



# 複習用參考





![git 指令與 Repo 的關聯](https://i.stack.imgur.com/Ernz4.png)




---
sidebar: auto
---

# Git 操作指引

## 作業指引

### 將已納入版本管理的檔案移除

若有剛簽入（commit）檔案，已納入容器，管理其內容變更及識別版本。可因需要，將之撤
除。

### 剛完成簽入的檔案欲捨棄

剛完成簽入（commit）作業後，發現有無需納管之檔案，不慎已置入容器，需將之撤除。

1. 取消最近一次的 commit 。

```
git reset --soft HEAD~1
```

2. 自 staging 區，除去不需再納入版本管理檔案。

```
git reset HEAD [file]
```

3. 自 index 區，除去不需再納入版本管理檔案。

```
git rm --cached [file]
```

4. 重新再簽入容器。

```
git commit --amend
```

5. 驗證執行結果。

```
git ls-files
```

### 列示所有納管檔案

將納管在 Git Repo 中的檔案，全部列示。

```
$ git ls-files
.gitignore
.pylintrc
.python-version
app_config/__init__.py
app_config/asgi.py
app_config/settings.py
app_config/settings_local.py
app_config/settings_local_example.py
app_config/urls.py
app_config/wsgi.py
config/app1.ccc.tw.local
config/uwsgi_app1.ini
db.sqlite3
index.html
manage.py
media/search.svg
requirements.txt
```

### 列示所有標籤

將容器已建立之所有標籤，全部列示。

```
git tag -l
```

### 發行版本

執行以下作業前，需先完成 git add 與 git commit 之「簽入作業」。

1. 建立新標籤。

```
git tag -a [tag_name] -m "[message]"
```

📺 發行 v0.1 版 Django App 。

```
git tag -a v0.1.0 -m "已完成驗證 Django App 可佈署至上線環境（尙缺DB）"
```

2. 確認標籤已被建立。

```
git tag
```

### 開發新版本

1. 建立「新版本」使用之分支（branch）

```
git branch [dev_branch_name]
```

2. 切換分支

```
git checkout [dev_branch_name]
```

📚 上述步驟 1 及 2 可合併成如下一個指令。

```
git checkout -b [dev_branch_name]
```

📚 刪去 Local 端已棄置不用之分支。

```
git branch -d [dev_branch_name]
```

3. 檢視目前所使用之分支，借以確認已成功完成切換。

```
git branch
```

📺 建立新版本開發用 v0.1.1 分支。

```
$ git branch v0.1.1

$ git checkout v0.1.1
切換到分支 'v0.1.1'

$ git branch
  master
* v0.1.1
```

### 發行更新版

例如：v0.1.1 版，以 v0.1 版為基礎，進行新版本 v0.2 開發作業。在開發作業過程中，
更新版的開發作業，在開發期間，使用「分支」名稱為：「v0.1.1」進行作業。

在程式編撰完成及通過測試後，發行「更新版」：v0.2.0 時，其作業程序如下。

【註】：在執行發行更新版作業前，原先在「開發時期」所有的新增／刪除/變更檔案，均
需已完成 git add 及 git commit 之「簽入作業」。

1. 切換分支回到 master 。

```
git checkout master
```

2. 將「開發時期」使用之「分支」：v0.1.1 ，與分支：master 合併。

```
git branch
git merege [dev_branch_name]
```

📺

```
git merege v0.1.1
```

3. 刪去 Local 端已棄置不用之分支。

```
git branch -d [branch_name]
```

📺

```
git branch -d v0.1.1
```

4. 執行「版本發行」作業。

📺

```
git tag -a v0.2.0 -m "自 v0.1.1 變更後，改發行 v0.2.0"
```

## 問題診斷與狀況排除

### status 中文顯示不正常

- [執行 git status 指令後，畫面顯示的中文檔名為亂碼](https://www.google.com/search?q=git+status+%E4%B8%AD%E6%96%87%E4%BA%82%E7%A2%BC&oq=git+stat&aqs=chrome.1.69i57j35i39j0l2j69i65j69i60l3.7942j0j7&sourceid=chrome&ie=UTF-8)

### commit 取巧法

執行 git commit 時，應於 -m 選項後加以「註釋」，如此次 commit 與上回相同，可採如
下方法引用上回 commit 時輸入的「註釋」。

```sh
git commit -C $(git log -1 --pretty=format:%H)
```

- `git log -1 --pretty=format:%H`：可獲取上一回 commit ，git log 的 Hash 值；
- `git commit -C`：要求 commit 指令重用以往的「註釋」。

### push 異常

git push 無法正常執行，被告知遠端 Repo 與這一端有不一致的問題，git 要求你得先進
行合併作業。

```sh
On branch main
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)
```

問題排除程序：

1. 在當前分支上，執行 git stash 以保存更改的 tests.py。這將把您的工作區更改存儲
   在一個臨時區域。

2. 使用 git pull 命令將遠程分支（origin/main）合併到您的本地分支（main）。

3. 使用 git stash apply 命令將臨時區域中的更改應用回工作區。

4. 如果合併時有衝突，解決這些衝突並將它們標記為已解決。

5. 現在，您可以再次嘗試使用 git commit --amend 修改上一次提交。

6. 最後，使用 git push --force-with-lease 強制推送已修改的提交。注意：這可能會覆
   蓋遠程倉庫中的提交，因此請確保您在執行此操作前了解所有的影響。

這樣，您就可以在保留您的更改的同時解決分支衝突問題。在將來，為了避免此類問題，建
議在進行新的更改之前先執行 git pull 以確保您的本地分支與遠程分支同步。

### pull 異常

執行 `git push` 失敗時；或執行 `git status` 後，git 告知 Local 端與 Remote 端（
如：GitHub），兩端 Repo 有內容不一致狀況發生時，要求你執行 git pull 指令。可是當
你輸入 `git pull` 指令，欲令以兩端進行合併作業，但 git pull 也無法正常完成，同時
git 給予你一些 hint 如下：

```sh
❯ git pull
remote: Enumerating objects: 627, done.
remote: Counting objects: 100% (188/188), done.
remote: Compressing objects: 100% (116/116), done.
remote: Total 627 (delta 124), reused 72 (delta 72), pack-reused 439
Receiving objects: 100% (627/627), 1.91 MiB | 2.06 MiB/s, done.
Resolving deltas: 100% (370/370), done.
From github.com:AlanJui/Django4-Project-Template
 + bd12626...e08ee83 gh-pages   -> origin/gh-pages  (forced update)
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint:
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
```

此提示信息，表 git 要求你做決定，對於兩端 Repo 內容不一致的問題，應以何種方式處
理，解決內容分歧的問題，可選用方式共三種：

- 合併（merge）
- 變基（rebase）
- 允許快速向前（fast-forward only）

遇此狀況，建議合併或變基方法處理：

方法一：使用合併 (merge)

```sh
git config pull.rebase false
git pull
```

方法二：使用變基 (rebase)

```sh
git config pull.rebase true
git pull
```

您也可以為所有倉庫設置一個全局默認選項，只需將 git config 替換為 git config
--global 即可。例如，要將變基設置為所有倉庫的默認選項，您可以運行：

```sh
git config --global pull.rebase true
```

然後，您只需在以後運行 git pull，Git 將使用所選的策略。如果您想要在某次調用時覆
蓋配置的默認值，可以在命令行上傳遞 --rebase、--no-rebase 或 --ff-only。

### push 後 amend commit

使用 `git amend commit` 可讓人略過「註釋」的輸入，偷懶一下。但這僅適用 Repo 的內
容尚未 push 到遠端的 Repo ，以下的情境，必會發生 git 警示你，發生了兩端 Repo 不
一致的問題。

1. nvim tests.py

2. git add . && git commit -m "XXXXX"

3. git push

4. nvim tests.py

5. git add . && git commit --amend

6. git status

   ```sh
   On branch main
   Your branch and 'origin/main' have diverged,
   and have 1 and 1 different commits each, respectively.
     (use "git pull" to merge the remote branch into yours)
   ```

問題解決方法，請參考「push 異常」。

在 commit 及 push 之後，若發現 commit 的檔案還需修改，請於修改後使用 commit 指令
，若想略去「註釋」的輸入，可依上述之 commit 取巧法簡化工作。

## 參考資料

### 取消簽入

- [How to remove files from Git commit](https://devconnected.com/how-to-remove-files-from-git-commit/)

### 使用標籤（tag）

- [Git 官網文件：2.6 Git 基礎 - 標籤](https://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-%E6%A8%99%E7%B1%A4)

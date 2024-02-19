# Git 指令速查


## 將已commit到容器的目錄清除
    git rm -r --cached .venv


## 手動加入 Heroku 的 Git Repo
    git remote add heroku https://git.heroku.com/serene-crag-30137.git
    git remove -v


## 發行新版本
    git log
    git tag -a V1.1.0 bb2af85 -m "發行 V1.1.0 版本"  
    git tag
    git push origin --tags


## 建分支
    git branch [BranchName]


    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master*›
    ╰─$ git branch Gap_Analysis
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master*›
    ╰─$ git branch --list
      Gap_Analysis
    * master
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master*›
    ╰─$


## 切到分支
    git checkout [BranchName]


    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master*›
    ╰─$ git checkout Gap_Analysis
    M        .gitignore
    Switched to branch 'Gap_Analysis'
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹Gap_Analysis*›
    ╰─$ gs
    On branch Gap_Analysis
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git checkout -- <file>..." to discard changes in working directory)
    
            modified:   .gitignore
    
    no changes added to commit (use "git add" and/or "git commit -a")
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹Gap_Analysis*›
    ╰─$ ll
    total 8
    -rw-r--r--+ 1 AlanJui  staff    46B  8  1 10:34 file001.txt
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹Gap_Analysis*›
    ╰─$


## 將分支併回主幹（Master）
    git merge [BranchName]



    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹Gap_Analysis›
    ╰─$ git checkout master
    Switched to branch 'master'
    Your branch is up-to-date with 'origin/master'.
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master›
    ╰─$ ll
    total 8
    -rw-r--r--+ 1 AlanJui  staff    46B  8  1 10:34 file001.txt
    -rw-r--r--+ 1 AlanJui  staff     0B  8  1 17:13 file002.txt
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master›
    ╰─$ git branch --list
      Gap_Analysis
    * master
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master›
    ╰─$ git merge Gap_Analysis
    Merge made by the 'recursive' strategy.
     .gitignore | 3 ++-
     PIID.md    | 2 ++
     2 files changed, 4 insertions(+), 1 deletion(-)
     create mode 100644 PIID.md
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master›
    ╰─$ ll
    total 16
    -rw-r--r--+ 1 AlanJui  staff    23B  8  1 17:14 PIID.md
    -rw-r--r--+ 1 AlanJui  staff    46B  8  1 10:34 file001.txt
    -rw-r--r--+ 1 AlanJui  staff     0B  8  1 17:13 file002.txt
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master›
    ╰─$ git branch --list
      Gap_Analysis
    * master
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master›
    ╰─$ gs
    On branch master
    Your branch is ahead of 'origin/master' by 3 commits.
      (use "git push" to publish your local commits)
    
    nothing to commit, working tree clean
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master›
    ╰─$



    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master›
    ╰─$ git push
    Counting objects: 9, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (7/7), done.
    Writing objects: 100% (9/9), 1.01 KiB | 1.01 MiB/s, done.
    Total 9 (delta 1), reused 0 (delta 0)
    To bitbucket.org:AlanJui/git123.git
       dc4ee33..423489f  master -> master
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master›
    ╰─$ gs
    On branch master
    Your branch is up-to-date with 'origin/master'.
    
    nothing to commit, working tree clean
    ╭─AlanJui@MacBook-Pro  ~/workspace/git/git123  ‹master›
    ╰─$


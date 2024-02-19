# git branch merge

1. 使用  Branch: review 發展「Review Process」功能
    $ git checkout -b review-process


2. 完成發展後，將資料簽入 Git Repo 。
    $ git commit -am "Review Procees function done"

 3. 完成發展後，將之併回  Branch：  master

    $ git checkout master
    $ git merge review-process



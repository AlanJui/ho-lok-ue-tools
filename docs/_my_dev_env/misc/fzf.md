---
sidebar: auto
---

# fzf 安裝與操作指引

## 摘要

fzf 為「指令介面」，多用途 Fuzzy Finder 。使用者可以「模糊搜尋」方式，找出
檔案、曾執行過之指令。

## 安裝作業

### macOS

```
brew install fzf
brew install ripgrep
```

### Ubuntu / Debian

```
sudo apt install fzf
```

### ArchLinux

```
sudo pacman -S fzf
```

### Git

使用 git 安裝。

```
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

## 設定作業

### 設定 Shell 作業環境設定檔

🔖 .bashrc (.zshrc)

```
if type rg &> /dev/null; then
  export FZF_DEFAULT_COMMAND='rg --files'
  export FZF_DEFAULT_OPTS='-m --height 50% --border'
fi
```

## 常用操作

### Vim：以「檔名」進行快搜

- Vim 指令：`:Files`
- 快速按鍵：[,][f] 或 [Space][p]

### Vim：以「內容」進行快搜

- Vim 指令：`:Rg`
- 快速按鍵：[,][g]

### 命令列：快速找到檔案並編輯

透過模糊搜，迅束尋找出欲修訂檔案，並打開編輯器進行內容編輯工作。

使用 nvim 編輯檔案：docs/Debian/Ubuntu-Install_SIT_Server-Build_DjangoApp_Platform.md 。

1. 在「指令列」，先輸入：vim 。

2. 按 [Ctrl + T] 鍵，啟動 fzf 搜尋。

3. 輸入「關鍵字」：

```
ubu sit
```

4. fzf 立即進行模糊搜尋，並將卞搜尋結果，以清單形式條列於畫面：
   ![](/assets/img/fzf/fzf-open-and-edit.png)

5. 在搜尋結果清單中，移動游標到檔案：docs/Debian/Ubuntu-Install_SIT_Server-Build_DjangoApp_Platform.md

6. 按 [Enter] 鍵，選擇游標所在處之「檔案名稱」。

此時命令列顯示如下：

```
$ vim docs/Debian/Ubuntu-Install_SIT_Server-Build_DjangoApp_Platform.md
```

7. 再按 [Enter] 鍵，即可啟動 nvim ，進行檔案編輯工作。

### 使用環境變數簡化搜尋

上述的檔案模糊搜尋，可透過以下的環境變數設定，將之更形簡化。

1. 設定環境變數（可放入 SHELL 設定檔）

```
export FZF_DEFAULT_COMMAND='fd --type f'
```

2. 先輸入：

```
vim **[Tab]
```

3. 使用游標鍵，先選檔案，再按 [Enter] 鍵。

### 搜尋指令

使用「模糊搜尋」，找出曾執行過之指令：[Ctrl+R] 。

輸入曾使用過之指令： yarn editing 。

1. 按鍵 [Ctrl+R] ，要求 fzf 「對歷史指令，啟動糢糊搜尋」功能。

2. 先輸入「關鍵字」：

```
ya ed
```

![](/assets/img/fzf/fzf-search-and-run-command.png)

3. 移動游標，自搜尋結果清單中選擇歷史指令，再按 [Enter] 鍵。

畫面顯示完整指令。

```
yarn editing
```

4. 再按 [Enter] 鍵，要求執行指令。

### 做用模糊搜尋切換目錄

自「當前目錄」，切換到其下的「子目錄：./docs/Debian/ 」。

1. 按鍵 [Alt+C]

2. 輸入「關鍵字」，fzf 立即進行模糊搜尋，並將搜尋結果，以清單形式條列於畫畫：

```
de
```

![](/assets/img/fzf/fzf-cd.png)

3. 如有必要，先移動游標鍵，選擇「目錄路徑」。

4. 按 [Enter] 鍵。

5. fzf 觸動 cd 指令之執行

```
cd [目錄路徑]
```

```
cd docs/Debian
```

## 問題診斷與狀況排除

N/A

## 參考資料

### 使用 fzf 進行模糊搜尋

[How to search faster in Vim with FZF.vim](https://dev.to/iggredible/how-to-search-faster-in-vim-with-fzf-vim-36ko)

### Git 容器與原始碼

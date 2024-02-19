---
sidebar: auto
---

# Vim 安裝與操作指引

## 安裝作業

安裝 Vim 編輯器。

## Ubuntu / Debian

### 使用原始碼安裝作業

1. 下載原始碼。

```
cd ~/build
git clone https://github.com/vim/vim.git
```

2. 編輯原始碼與安裝執行檔。

```
cd vim
./configure
sudo apt install ncurses-dev
make
sudo make install
```

### 設定作業環境與安裝 Plugins

複製 Vim 作業環境的設定檔；完成 Vim Plugins 安裝，與相依套件之安裝。

1. 自 GitHub 複製 Vim 作業環境設定檔。

```
git clone https://github.com/AlanJui/vim8.git ~/.vim
```

2. 啟動 vim ，讓 vim 自動執行 vim plugins 安裝工作。

3. 安裝 vim plugins 所需使用之相依套件。

```
sudo apt install vifm
sudo apt install fzf
sudo apt install ripgrep
```

```
npm i -g bash-language-server
```

📺

```
alanjui@VB02-Ubuntu-2004:~$ npm i -g bash-language-server
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()
/home/alanjui/n/bin/bash-language-server -> /home/alanjui/n/lib/node_modules/bash-language-server/bin/main.js
+ bash-language-server@1.17.0
added 115 packages from 220 contributors in 9.368s
```

## macOS

N/A

## ArchLinux

N/A

## 常用操作

### 依游標所在位置開啟檔案

Goto File

```
[g], [f]
```

### 切割視窗

- Split：[Ctrl+W], [S]
- VSplit: [Ctrl+W], [V]

### 調整視窗的寬或高

【使用鍵盤】：

- 增寬／減寬： [量值], [Ctrl+W], [>]/[<] ▶ 20, [Ctrl+W], [>]
- 增高／減高： [量值], [Ctrl+W], [+]/[-] ▶ 10, [Ctrl+W], [+]
- 指定寬度： [量值], [Ctrl+W], [|] ▶ 30, [Ctrl+W], [|]
- 指定高度： [量值], [Ctrl+W], [\_] ▶ 40, [Ctrl+W], [\_]
- 指定等寬／高：[Ctrl+W], [=]

【使用指令】：

- 調寬度： `:resite [+/-]N`
- 調高度： `:vertical resite [+/-]N`

## 問題診斷與狀況排除

### 自 Shell 再回到 Vim

按鍵 [Ctrl+Z] ，會觸動 Vim 指令，將 Vim 暫停，衍生 Backgroud 作業，進入 Shell 環境。
使用者欲結束 Shell ，再度回到 Foreground 作業（即 Vim），可輸入以下指令：

```
fg[Enter]
```

## 參考資料

### Vim 作業環境設定檔

- [Vim 8.2 設定檔](https://github.com/AlanJui/vim8)

### Markdown 應用

- [plasticboy vim plugin: Vim Markdown](https://github.com/plasticboy/vim-markdown)
- [How do I prevent vim from hiding symbols in markdown and json](https://vi.stackexchange.com/questions/7258/how-do-i-prevent-vim-from-hiding-symbols-in-markdown-and-json)

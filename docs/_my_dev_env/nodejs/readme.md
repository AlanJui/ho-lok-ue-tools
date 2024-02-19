---
sidebar: auto
---

<!-- markdownlint-disable MD024 MD041 MD040 MD043 -->

# Node.js 作業指引

## 摘要

建置 Node.js 應用系統開發，所需之作業環境。

## 作業程序

1. 安裝 Node.js 版本管理工具： n

   執行 n-install 。

   ```sh
   curl -L https://bit.ly/n-install | bash
   ```

2. 安裝 node 與 npm

   安裝 Node.js 直譯器與 Node.js 套件管理工具：npm。

   （a）安裝最近的 Long Term Support 版。

   ```sh
   n lts
   ```

   （b）安裝最新版。

   ```sh
   n latest
   ```

3. 設定 PATH 環境變數

   變更 Shell 設定檔，在 PATH 加入 node.js 及 npm 所在位置

   編輯 ~/.zshrc

   ```sh
   nvim ~/.zshrc
   ```

   ~/.zshrc:

   ```sh
   export N_PREFIX="$HOME/n"
   export PATH="$N_PREFIX/bin:$PATH"
   export PATH="$HOME/.yarn/bin:$PATH"
   ```

4. 重啟 SHELL 環境

   ```sh
   source ~/.zshrc
   ```

5. 安裝 Yarn 套件管理器

   yarn 等同 npm ，均為 Node.js 之「套件管理工具」。

   (a) 執行安裝指令

   ```sh
   sudo npm i -g yarn
   ```

   (b) 驗證

   驗證 yarn 已完成安裝，yarn 執行檔位於目錄路徑：
   $HOME/n/bin/yarn

   ```sh
   which yarn
   ```

   📺

   ```sh
   alanjui@VB02-Ubuntu-2004:~$ which yarn
   /home/alanjui/n/bin/yarn
   ```

## 參考資料

- [tj/n GitHub Repo](https://github.com/tj/n)

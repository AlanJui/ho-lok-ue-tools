---
sidebar: auto
---

# VS Code 安裝與設定指引

## 摘要

安裝 VS Code 軟件，有以下三種方法：

- 使用官方執行檔安裝
- 使用套件管理器安裝
- 使用原始碼安裝

![](http://umaranis.com/wp-content/uploads/2018/07/home-screenshot-win.png)

## 安裝 VS Code

### 使用官方執行檔安裝

使用官方提供之執行檔，執行安裝作業。

自「官網」下載，及執行「安裝執行檔」。

https://code.visualstudio.com/download

- Mac 版： VSCode-darwin.zip
- Ubuntu/Debian 版： code_1.52.1-1608136922_amd64.deb
- Linux 版： code-stable-x64-1608137260.tar.gz （GZip 壓縮檔）

### 使用套件管理器安裝

使用作業系統的套件管理器安裝。

1. 安裝 VS Code 套件

```
yay -S visual-studio-code-bin
```

或 ⋯⋯

```
yay -s vscodium-bin
```

【註】：採第二種方式安裝，欲於「終端機」啟動 VS Code 時，需改指令為：

```
$ codium
```

2. 啟動 VS Code

```
$ code
```

### 使用原始碼安裝

1. 自 AUR 容器，下載原始碼：

```
$ cd ~/build
$ git clone https://aur.archlinux.org/visual-studio-code-bin.git
```

```
[alanjui@VB22-Manjaro-KDE ~]$ cd ~/build

[alanjui@VB22-Manjaro-KDE build]$ ls -al
總用量 12
drwxr-xr-x  3 alanjui alanjui 4096  2月 22 22:02 .
drwx------ 20 alanjui alanjui 4096  3月 19 10:13 ..
drwxr-xr-x  5 alanjui alanjui 4096  2月 22 22:15 yay

[alanjui@VB22-Manjaro-KDE build]$ git clone https://aur.archlinux.org/visual-studio-code-bin.git
正複製到 'visual-studio-code-bin'...
remote: Enumerating objects: 492, done.
remote: Counting objects: 100% (492/492), done.
remote: Compressing objects: 100% (303/303), done.
remote: Total 492 (delta 190), reused 490 (delta 189), pack-reused 0
接收物件中: 100% (492/492), 391.83 KiB | 399.00 KiB/s, 完成.
處理 delta 中: 100% (190/190), 完成.
[alanjui@VB22-Manjaro-KDE build]$ ls -al
總用量 16
drwxr-xr-x  4 alanjui alanjui 4096  3月 19 10:14 .
drwx------ 20 alanjui alanjui 4096  3月 19 10:13 ..
drwxr-xr-x  3 alanjui alanjui 4096  3月 19 10:14 visual-studio-code-bin
drwxr-xr-x  5 alanjui alanjui 4096  2月 22 22:15 yay
```

2. 進入原始碼所在目錄。

```
$ cd visual-studio-code-bin
```

```
[alanjui@VB22-Manjaro-KDE build]$ cd visual-studio-code-bin/

[alanjui@VB22-Manjaro-KDE visual-studio-code-bin]$ ls -al
總用量 32
drwxr-xr-x 3 alanjui alanjui 4096  3月 19 10:14 .
drwxr-xr-x 4 alanjui alanjui 4096  3月 19 10:14 ..
drwxr-xr-x 8 alanjui alanjui 4096  3月 19 10:14 .git
-rw-r--r-- 1 alanjui alanjui 3183  3月 19 10:14 PKGBUILD
-rw-r--r-- 1 alanjui alanjui 1849  3月 19 10:14 .SRCINFO
-rw-r--r-- 1 alanjui alanjui  555  3月 19 10:14 visual-studio-code.desktop
-rw-r--r-- 1 alanjui alanjui  345  3月 19 10:14 visual-studio-code-url-handler.desktop
-rw-r--r-- 1 alanjui alanjui  300  3月 19 10:14 visual-studio-code-workspace.xml
```

3. 編譯原始碼與安裝執行碼。

```
$ makepkg -si
```

```
[alanjui@VB22-Manjaro-KDE visual-studio-code-bin]$ makepkg -si
==> 製作軟體包中：visual-studio-code-bin 1.54.3-3 (西元2021年03月19日 (週五) 10時21分29秒)
==> 正在檢查執行時期依賴關係...
==> 正在檢查建置時期依賴關係...
==> 擷取來源中...
  -> 找到 visual-studio-code.desktop
  -> 找到 visual-studio-code-url-handler.desktop
  -> 找到 visual-studio-code-workspace.xml
  -> 正在下載 code_x64_1.54.3.tar.gz...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   134  100   134    0     0    133      0  0:00:01  0:00:01 --:--:--   133
100 94.3M  100 94.3M    0     0  9861k      0  0:00:09  0:00:09 --:--:-- 11.2M
==> 正在驗證 source 檔案 (使用 sha256sums)...
    visual-studio-code.desktop ... 已通過
    visual-studio-code-url-handler.desktop ... 已通過
    visual-studio-code-workspace.xml ... 已通過
==> 正在驗證 source_x86_64 檔案 (使用 sha256sums)...
    code_x64_1.54.3.tar.gz ... 已通過
==> 正在解開來源...
  -> 正在解壓縮 code_x64_1.54.3.tar.gz (使用 bsdtar)
==> 正在進入 fakeroot 環境...
==> 正在啟動 package()...
==> 正在整理安裝...
  -> 正在移除 libtool 的檔案…
  -> 正剷除不要的檔案...
  -> 正從靜態函式庫檔案中移除…
  -> 正從二進位檔與函式庫中去除不需要的符號連結...
  -> 正在壓縮 man 與 info 頁面...
==> 正在檢查軟體包問題……
==> 正在建立「visual-studio-code-bin」軟體包...
  -> 正在生成 .PKGINFO 檔...
  -> 正在生成 .BUILDINFO 檔...
  -> 正在生成 .MTREE 檔...
  -> 正在壓縮軟體包...
==> 正離開 fakeroot 環境。
==> 製作完成：visual-studio-code-bin 1.54.3-3 (西元2021年03月19日 (週五) 10時22分07秒)
==> 正在安裝 visual-studio-code-bin 軟體包 (使用 pacman -U)…
[sudo] alanjui 的密碼：
正在載入軟體包…
正在解決依賴關係…
正在檢查衝突的軟體包…

軟體包 (1) visual-studio-code-bin-1.54.3-3

總計安裝大小：  254.33 MiB

:: 進行安裝嗎？ [Y/n] Y
(1/1) 正在檢查鑰匙圈中的鑰匙                                                    [##############################################] 100%
(1/1) 正在檢查軟體包完整性                                                      [##############################################] 100%
(1/1) 正在載入軟體包檔案                                                        [##############################################] 100%
(1/1) 正在檢查檔案衝突                                                          [##############################################] 100%
(1/1) 正在檢查可用磁碟空間                                                      [##############################################] 100%
:: 正在處理軟體包變更…
(1/1) 正在安裝 visual-studio-code-bin                                           [##############################################] 100%
visual-studio-code-bin 的可選依賴
    glib2: Needed for move to trash functionality [已安裝]
    libdbusmenu-glib: Needed for KDE global menu [已安裝]
:: 正在執行後置作業掛鉤…
(1/3) Arming ConditionNeedsUpdate...
(2/3) Updating the desktop file MIME type cache...
(3/3) Updating the MIME type database...

[alanjui@VB22-Manjaro-KDE visual-studio-code-bin]$ ls -al
總用量 186760
drwxr-xr-x 5 alanjui alanjui     4096  3月 19 10:22 .
drwxr-xr-x 4 alanjui alanjui     4096  3月 19 10:14 ..
-rw-r--r-- 1 alanjui alanjui 98891905  3月 19 10:21 code_x64_1.54.3.tar.gz
drwxr-xr-x 8 alanjui alanjui     4096  3月 19 10:14 .git
drwxr-xr-x 3 alanjui alanjui     4096  3月 19 10:21 pkg
-rw-r--r-- 1 alanjui alanjui     3183  3月 19 10:14 PKGBUILD
drwxr-xr-x 3 alanjui alanjui     4096  3月 19 10:21 src
-rw-r--r-- 1 alanjui alanjui     1849  3月 19 10:14 .SRCINFO
-rw-r--r-- 1 alanjui alanjui 92303750  3月 19 10:22 visual-studio-code-bin-1.54.3-3-x86_64.pkg.tar.zst
-rw-r--r-- 1 alanjui alanjui      555  3月 19 10:14 visual-studio-code.desktop
-rw-r--r-- 1 alanjui alanjui      345  3月 19 10:14 visual-studio-code-url-handler.desktop
-rw-r--r-- 1 alanjui alanjui      300  3月 19 10:14 visual-studio-code-workspace.xml
[alanjui@VB22-Manjaro-KDE visual-studio-code-bin]$
```

## 設定 VS Code 作業環境

### 設定檔及所在目錄路徑

```
nvim ~/.config/Code/User/settings.json
```

### 設定終端機作業環境

```
nvim ~/.config/Code/User/settings.json
```

settings.json:

```
{
  "terminal.integrated.shell.linux": "/usr/bin/bash",

  "terminal.external.osxExec": "iTerm.app",
  "terminal.external.linuxExec": "gnome-terminal",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.rightClickCopyPaste": true,

  // "terminal.integrated.fontFamily": "FiraMono Nerd Font",
  "terminal.integrated.fontFamily": "Hack Nerd Font Mono",
  "terminal.integrated.fontSize": 14,
}
```

### 設定 editor 作業環境

```
{
  "editor.fontSize": 14,
  "editor.suggestFontSize": 14,
  "editor.suggestSelection": "first",
  "editor.cursorBlinking": "solid",
  "editor.fontFamily": "FiraCode Nerd Font Mono, Hack, Menlo, Monaco, 'Courier New', monospace",
  "editor.minimap.enabled": false,
  "editor.snippetSuggestions": "bottom",
  "editor.scrollbar.horizontal": "hidden",
  "editor.scrollbar.vertical": "hidden",
  "editor.tokenColorCustomizations": {
    "[One Dark Pro]": {
      ....
  },
}
```

### 設定 Emmet 作業環境

依據 Django Extension 說明文件指示，完成下列設定，以便 Django Template 之編輯
作業，可使用同 HTML 之 Emmet 。

```
{
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "django-html": "html",
    "razor": "html",
    "plaintext": "pug"
  },
}
```

### 設定 Python 作業環境

```
{
  "python.languageServer": "Pylance",
  "python.formatting.provider": "autopep8",
  "python.terminal.activateEnvironment": false,
  "python.insidersChannel": "off",
  "python.showStartPage": false,
  "python.dataScience.alwaysTrustNotebooks": true,

  "code-runner.executorMap": {
    "python": "$pythonPath $fileName",
    "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
    "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
  },

  "files.exclude": {
    "**/__pycache__": true,
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
}
```

### 設定 Django Extension 作業環境

```
{
  "files.associations": {
      "**/*.html": "html",
      "**/templates/**/*.html": "django-html",
      "**/templates/**/*": "django-txt",
      "**/requirements{/**,*}.{txt,in}": "pip-requirements"
  },
}
```

## 安裝 VS Code Extensions

VS Code 啟動後，安裝下列 VS Code Extensions:

- Neo Vim (asvetliakov.vscode-neovim / vscode-neovim)
- Which Key (vspacecode.whichkey)
- Python (ms-python.python)
- Pylance (ms-python.vscode-pylance)
- Django (batisteo.vscode-django)
- Djaneiro - Django Snippets (thebarkman.vscode-djaneiro)
- Django Samples (mengsicode.vscode-django-boilerplate)
- Bracket Pair Colorizer 2 (coenraads.bracket-pair-colorizer-2)
- prettier - Code formatter (esbenp.prettier-vscode)
- Material Icon Theme (pkief.material-icon-theme)
- Auto Rename Tag (formulahendry.auto-rename-tag)
- GitLens - Git supercharged (eamodio.gitlens)
- Git Graph (mhutchie.git-graph)
- Markdown All in One (yzhang.markdown-all-in-one)
- Docker (ms-azuretools.vscode-docker)

【註】：[Top 10 VS Code extensions for 2021](https://blog.logrocket.com/top-10-vs-code-extensions-2021/)

## 設定 NVCode 作業環境

### 下載 NVCode 設定檔

- 透過 SSH 通信協定下載

```
git clone git@github.com:AlanJui/MyNVCode.git ~/.config/nvim
```

- 透過 HTTPS 通信協定下載

```
git clone https://github.com/AlanJui/MyNVCode.git ~/.config/nvim
```

### 安裝 VS Code Extensions

於 VS Code 啟動後，安裝 NVCode 相依，需使用之 VS Code Extensions:

- Neo Vim (asvetliakov.vscode-neovim)
- Which Key (vspacecode.whichkey)。

### 設定 Neovim Extension 作業環境

```
nvim ~/.config/Code/User/settings.json
```

1. 設定 Neovim 啟動目錄及執行時可用選項。

settings.json:

```
{
  "vscode-neovim.mouseSelectionStartVisualMode": true,
  "vscode-neovim.neovimExecutablePaths.linux": "/home/alanjui/.local/bin/nvim",
  "vscode-neovim.neovimInitVimPaths.linux": "/home/alanjui/.config/nvim/init.vim",
  "vscode-neovim.neovimExecutablePaths.darwin": "/Users/alanjui/.local/share/nvim-osx64/bin/nvim",
  "vscode-neovim.neovimInitVimPaths.darwin": "/Users/alanjui/.config/nvim/init.vim",
}
```

2. 設定 Which Key Extension ，啟用 [Space] 按鍵可啟動 Neovim 之功能選擇。

settings.json:

```
{
  "whichkey.sortOrder": "alphabetically",
  "whichkey.delay": 0,
  "whichkey.bindings": [
    {
      "key": ";",
      "name": "commands",
      "type": "command",
      "command": "workbench.action.showCommands"
    },
    ....
  ]
}
```

### 設定 Neovim 啟動設定檔（init.vim）

設定 init.vim 與組織 Neovim Plugins 設定檔。

Neovim 預設檔路徑：\$HOME/.config/nvim/init.vim

init.vim:

```
  if exists('g:vscode')
    " 置放 VS Code extension 適用之 Extensions
    source ...
    source ...
  else
    " 置放只有 Nvim 適用的 Vim Plugins
    source ...
    source ...
  endif
```

## 設定 coc-nvim 作業環境

coc-nvim 設定檔存放路徑：

```
~/.config/nvim/coc-settings.json:
```

### 設定 Python 作業環境

```
{
  "python.analysis.autoImportCompletions": true,
  "python.analysis.autoSearchPaths": true,
  "python.analysis.diagnosticMode": "openFilesOnly",
  "python.analysis.stubPath": "typings",
  "python.analysis.typeshedPaths": [],
  "python.analysis.diagnosticSeverityOverrides": {},
  "python.analysis.typeCheckingMode": "basic",
  "python.analysis.useLibraryCodeForTypes": true,
  "python.pythonPath": "python",
  "python.venvPath": "",
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "python.linting.pylintArgs": ["--disable=F401, E722, C0115, C0116, W0613"],
  "python.formatting.provider": "autopep8",
  "python.jediEnabled": false,
  // "python.formatting.provider": "black",
  // "python.formatting.blackPath": "~/.local/bin/black",
  // "python.linting.pylintPath": "~/.miniconda/envs/neovim/bin/pylint",
  // "python.condaPath": "~/.miniconda/bin/conda",
  // "python.sortImports.path": "~/.miniconda/envs/neovim/bin/isort",
  // "python.jediPath": "~/.miniconda/envs/neovim/lib/python3.8/site-packages",
  "pyright.disableCompletion": false,
  "pyright.disableLanguageServices": false,
  "pyright.disableOrganizeImports": false,
}
```

### 設定原始碼自動排版

設定 VS Code 於每次存檔時，自動觸發「原始碼自動重新排版」作業。

```
{
  "coc.preferences.formatOnSaveFiletypes": [
    "python",
    "html",
    "htmldjango",
    "django-html",
    "css",
    "markdown",
    "javascript",
    "graphql",
    "yaml",
    "json",
    "jsonc",
    "java"
  ],
}
```

### 啟用 Emmet 設定

```
{
  "emmet.includeLanguages": {
    "htmldjango": "html",
    "django-html": "html",
    "python.django": "python",
    "vue-html": "html",
    "javascript": "javascriptreact"
  },
  "emmet.showAbbreviationSuggestions": true,
  "emmet.showExpandedAbbreviation": "always",
}
```

### 啟用 Snippets 設定

```
{
  "suggest.noselect": false,
  "snippets.userSnippetsDirectory": "~/.config/nvim/snips",
  "snippets.ultisnips.enable": true,
  "snippets.ultisnips.directories": ["UltiSnips", "~/.config/nvim/snips"],
  "snippets.snipmate.enable": false,
  "snippets.textmateSnippetsRoots": [
    // Ubuntu Path:
    //  "~/.config/Code/User/snippets"
    //
    // macOS(Darwin) Path:
    // "~/Library/Application Support/Code/User/snippets"
    "~/.config/nvim/snips"
  ],
}
```

### 啟用 Django Extension 之 Snippets

透過以下設定，可令 Neovim 與 Django Extension 共用 Snippets。

1. Django Extension 在 VS Code 編輯 Django Template 時，其所使用之 Snippets ，
   取用來源處為：

```
~/.config/Code/User/snippets/django-html.json
```

2. Neovim 搭配 coc-nvim plugin 之整合作業環境，需進行設定如下：

~/.config/nvim/coc-settings.json:

```
{
  ....
  "snippets.textmateSnippetsRoots": [
      "~/.config/nvim/snips"
  ],
  ....
}
```

3. 建立連結指向 Django Extension 之 Snippets 設定檔。

當使用者透過 Neovim ，編輯 Djanto Template 檔案時（即 File Type 為：htmldjango），
Neovim 在讀取 Django Template Snippets 設定時，其所欲讀取的檔案：htmldjango.json，
指向 Django Extension 所使用的實體檔案： `django-html.json` 。

由於設計規劃，想將所有 Neovim 使用之 Snippets 檔案，全部集中於同一目錄路徑之下：
~/.config/nvim/snips/ ；透過使用「軟連結（Symbolic Link）」作法，能令 Snippets
設定檔之內容變更，可即時同步，簡化管理操作上的麻煩，

```
cd ~/.config/nvim/snips
ln -s -f ~/.config/Code/User/snippets/django-html.json  htmldjango.json
ln -s -f ~/.config/Code/User/snippets/markdown.json
```

### 啟用 Language Server（LSP）設定

```
{
  ....
  "languageserver": {
    "bash": {
      "command": "bash-language-server",
      "args": ["start"],
      "filetypes": ["sh"],
      "ignoredRootPaths": ["~"]
    },
    "lua": {
      "command": "/usr/local/bin/lua-language-server",
      "filetypes": ["lua"],
      "trace.server": "verbose"
    }
  },
  ....
}
```

### 修訂 coc-nvim extensions 自動安裝清單

配合 coc-nvim 使用的 extensions（亦算是 Neovim Plugins 的一種），除了可在
Neovim 中，透過 Command Line ，使用指令：CocInstall ，手動安裝外，亦可透過
「安裝清單設定檔」：coc-extensions.vim ，要求 coc-nvim 自動安裝。

1. 編輯安裝清單設定檔。

```
nvim ~/.config/nvim/plug-config/coc/coc-extensions.vim
```

2. 建議設定內容：

coc-extensions.vim:

```
let g:coc_global_extensions = [
  \ 'coc-snippets',
  \ 'coc-actions',
  \ 'coc-sh',
  \ 'coc-java-debug',
  \ 'coc-java',
  \ 'coc-lists',
  \ 'coc-emmet',
  \ 'coc-tasks',
  \ 'coc-pairs',
  \ 'coc-tsserver',
  \ 'coc-floaterm',
  \ 'coc-fzf-preview',
  \ 'coc-html',
  \ 'coc-css',
  \ 'coc-cssmodules',
  \ 'coc-stylelintplus',
  \ 'coc-emoji',
  \ 'coc-yaml',
  \ 'coc-explorer',
  \ 'coc-svg',
  \ 'coc-prettier',
  \ 'coc-vimlsp',
  \ 'coc-xml',
  \ 'coc-yank',
  \ 'coc-json',
  \ 'coc-marketplace',
  \ ]
  " \ 'coc-pyright',
  " \ 'coc-bookmark',
  " \ 'coc-tabnine',
  " \ 'coc-highlight',
```

## 常見問題診斷與狀況排除

### vscode-neovim 無法正常啟動

- Unable to init vscode-neovim: command 'type' already exists

若 VS Code 出現如下之錯誤警示，試著 Uninstall 某些 VS Code Extensions：

```
Unable to init vscode-neovim: command 'type' already exists
```

## 參考資料

### 設定 VS Code 快捷鍵 (Shortcuts)

VS Code 快捷鍵設定檔路徑：\$HOME/.config/Code/User/keybindings.json 。

亦可與 VS Code 啟動後，自功能表呼叫：
File 》Preferences 》Keyboard Shortcuts

keybindings.json:

```
[
  {
    "command": "vscode-neovim.compositeEscape1",
    "key": "j",
    "when": "neovim.mode == insert && editorTextFocus",
    "args": "j"
  },
  {
    ....
  }
]
```

### 安裝 VSCodium

此為 VS Code 的另一分支 Open Source Project 。

1. 安裝 VSCodium

```
yay -Ss vscodium
yay -S vscodium-bin
```

【安裝時畫面參考】：

```
[alanjui@VB02-ArchLinux ~]$ yay -Ss vscodium
aur/vscodium-bin-marketplace 1.51.1-1 (+0 0.00)
    Enable vscode marketplace in vscodium-bin
aur/vscodium-git 1.52.1-2 (+3 0.73)
    Binary releases of VS Code without MS branding/telemetry/licensing (git build).
aur/vscodium-bin 1.52.1-2 (+32 7.83)
    Binary releases of VS Code without MS branding/telemetry/licensing.
```

2. 啟動 VSCodium

```
$ vscodium
```

3. 設定 VSCodium Extensions 來源處為：open-vsx.org

```
sudo vscodium /usr/share/vscodium-bin/resources/app/product.json
```

product.json:

```
{
  ....
  "extensionsGallery": {
    "serviceUrl": "https://marketplace.visualstudio.com/_apis/public/gallery",
    "itemUrl": "https://marketplace.visualstudio.com/items"
  }
  ....
}
```

### 如何將 makepkg -si 指令拆解

編譯原始碼與安裝執碼的工作，可分兩階段執行。

1. 編譯原始碼：

```
$ makepkg -s
```

```
[alanjui@VB22-Manjaro-KDE visual-studio-code-bin]$ makepkg -s
==> 製作軟體包中：visual-studio-code-bin 1.54.3-3 (西元2021年03月19日 (週五) 11時08分07秒)
==> 正在檢查執行時期依賴關係...
==> 正在檢查建置時期依賴關係...
==> 擷取來源中...
  -> 找到 visual-studio-code.desktop
  -> 找到 visual-studio-code-url-handler.desktop
  -> 找到 visual-studio-code-workspace.xml
  -> 找到 code_x64_1.54.3.tar.gz
==> 正在驗證 source 檔案 (使用 sha256sums)...
    visual-studio-code.desktop ... 已通過
    visual-studio-code-url-handler.desktop ... 已通過
    visual-studio-code-workspace.xml ... 已通過
==> 正在驗證 source_x86_64 檔案 (使用 sha256sums)...
    code_x64_1.54.3.tar.gz ... 已通過
==> 正在解開來源...
  -> 正在解壓縮 code_x64_1.54.3.tar.gz (使用 bsdtar)
==> 正在移除既有的 $pkgdir/ 目錄...
==> 正在進入 fakeroot 環境...
==> 正在啟動 package()...
==> 正在整理安裝...
  -> 正在移除 libtool 的檔案…
  -> 正剷除不要的檔案...
  -> 正從靜態函式庫檔案中移除…
  -> 正從二進位檔與函式庫中去除不需要的符號連結...
  -> 正在壓縮 man 與 info 頁面...
==> 正在檢查軟體包問題……
==> 正在建立「visual-studio-code-bin」軟體包...
  -> 正在生成 .PKGINFO 檔...
  -> 正在生成 .BUILDINFO 檔...
  -> 正在生成 .MTREE 檔...
  -> 正在壓縮軟體包...
==> 正離開 fakeroot 環境。
==> 製作完成：visual-studio-code-bin 1.54.3-3 (西元2021年03月19日 (週五) 11時08分35秒)
[alanjui@VB22-Manjaro-KDE visual-studio-code-bin]$
```

2. 安裝執行碼：

```
$ sudo pacman -U visual-studio-code-bin-1.54.3-3-x86_64.pkg.tar.zst
```

```
[alanjui@VB22-Manjaro-KDE visual-studio-code-bin]$ sudo pacman -U visual-studio-code-bin-1.54.3-3-x86_64.pkg.tar.zst
[sudo] alanjui 的密碼：
正在載入軟體包…
警告：visual-studio-code-bin-1.54.3-3 已經為最新——重新安裝
正在解決依賴關係…
正在檢查衝突的軟體包…

軟體包 (1) visual-studio-code-bin-1.54.3-3

總計安裝大小：  254.33 MiB
淨升級大小：    0.00 MiB

:: 進行安裝嗎？ [Y/n] Y
(1/1) 正在檢查鑰匙圈中的鑰匙                                                    [##############################################] 100%
(1/1) 正在檢查軟體包完整性                                                      [##############################################] 100%
(1/1) 正在載入軟體包檔案                                                        [##############################################] 100%
(1/1) 正在檢查檔案衝突                                                          [##############################################] 100%
(1/1) 正在檢查可用磁碟空間                                                      [##############################################] 100%
:: 正在處理軟體包變更…
(1/1) 正在重裝 visual-studio-code-bin                                           [##############################################] 100%
:: 正在執行後置作業掛鉤…
(1/3) Arming ConditionNeedsUpdate...
(2/3) Updating the desktop file MIME type cache...
(3/3) Updating the MIME type database...
[alanjui@VB22-Manjaro-KDE visual-studio-code-bin]$
```

### 如何透過 Snap Store 安裝 VS Code

REF: [How to Install Visual Studio Code Editor on ArchLinux](https://linuxhint.com/install_visual_studio_code_archlinux/)

1. 透過 AUR ，自原始碼安裝 Snap Service。

下載 [snapd](https://aur.archlinux.org/packages/snapd/) 套件原始碼。

```
$ cd ~/build
$ git clone  https://aur.archlinux.org/snapd.git
```

![](https://linuxhint.com/wp-content/uploads/2020/11/install_visual_studio_code_archlinux_1.jpg)

進入套件原始碼目錄中。

```
$ cd snapd
```

![](https://linuxhint.com/wp-content/uploads/2020/11/install_visual_studio_code_archlinux_2.jpg)

編譯原始碼與安裝執行碼。

```
$ makepkg -si
```

![](https://linuxhint.com/wp-content/uploads/2020/11/install_visual_studio_code_archlinux_3.jpg)

2. 啟用 Snap 服務。

執行指令，啟用 Snap 服務。

```
$ sudo systemctl enable --now snapd.socket
```

![](https://linuxhint.com/wp-content/uploads/2020/11/install_visual_studio_code_archlinux_4.jpg)

設置 snap 軟連結。

```
$ sudo ln -s /var/lib/snapd/snap /snap
```

![](https://linuxhint.com/wp-content/uploads/2020/11/install_visual_studio_code_archlinux_5.jpg)

3. 自 AUR 安裝 VS Code

- [Arch Linux 官網：Visual Studio Code 文件](https://wiki.archlinux.org/index.php/Visual_Studio_Code)
- [AUR package for VS Code: visual-studio-code-bin](https://aur.archlinux.org/packages/visual-studio-code-bin)

下載原始碼的壓縮檔。

```
$ cd ~/build
$ curl -L -O https://aur.archlinux.org/cgit/aur.git/snapshot/visual-studio-code-bin.tar.gz
```

![](https://linuxhint.com/wp-content/uploads/2020/11/install_visual_studio_code_archlinux_6-1140x103.jpg)

將原始碼檔案解壓縮。

```
$ tar -xvf visual-studio-code-bin.tar.gz
```

![](https://linuxhint.com/wp-content/uploads/2020/11/install_visual_studio_code_archlinux_7.jpg)

進入已解壓縮後的目錄。

```
$ cd visual-studio-code-bin
```

![](https://linuxhint.com/wp-content/uploads/2020/11/install_visual_studio_code_archlinux_8.jpg)

編譯原始碼與安裝執行碼。

```
$ makepkg -si
```

![](https://linuxhint.com/wp-content/uploads/2020/11/install_visual_studio_code_archlinux_9.jpg)

### 如何安裝 AUR Packages

[Arch User Repository](https://wiki.archlinux.org/index.php/Arch_User_Repository#Build_and_install_the_package)

### 如何在 Linux 平台安裝 VS Code

Microsoft 官網說明文件：[Visual Studio Code on Linux](https://code.visualstudio.com/docs/setup/linux)。

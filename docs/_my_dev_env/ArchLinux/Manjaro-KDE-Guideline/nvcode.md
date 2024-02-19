---
sidebar: auto
---

# NVCode 安裝與設定指引

安裝 Neovim 與 VS Code 整合作業環境。

## 安裝 Neovim

[Neovim 安裝與設定指引](./neovim)

## 安裝 VS Code

### 安裝 VS Code 套件

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

### 啟動 VS Code

```
$ code
```

### 完成 VS Code 作業環境設定

```
nvim ~/.config/Code/User45/settings.json
```

settings.json:

```
{
    "terminal.integrated.shell.linux": "/usr/bin/bash",
    "vscode-neovim.neovimExecutablePaths.linux": "/usr/bin/nvim",
    "vscode-neovim.neovimInitVimPaths.linux": "~/.config/nvim/init.vim",
    "terminal.integrated.fontFamily": "FiraMono Nerd Font"
}
```

### 安裝 VS Code Extensions

VS Code 啟動後，安裝下列 VS Code Extensions:

- Vim (vscodevim.vim)
- Neo Vim (asvetliakov.vscode-neovim / vscode-neovim)
- Python (ms-python.python)
- Docker (ms-azuretools.vscode-docker)
- Pylance (ms-python.vscode-pylance)

### 安裝 NVCode 所需之 VS Code Extensions

- Which Key (vspacecode.whichkey)

### 完成 NVCode 作業環境設定

VS Code 作業環境設定檔路徑：\$HOME/.config/Code/User/settings.json

1. 設定 Nvim 執行檔路徑所在：

```
{
  "vscode-neovim.neovimExecutablePaths.linux": "/usr/bin/nvim",
  "vscode-neovim.neovimInitVimPaths.linux": "~/.config/nvim/init.vim",
  "vscode-neovim.mouseSelectionStartVisualMode": true,
}
```

2. 分割 Neovim 設定檔，提供 NVCode 專用之 Neovim Plugins

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

### 設定 NVCode 快捷鍵 (Shortcuts)

快捷鍵設定檔路徑：\$HOME/.config/Code/User/keybindings.json 。

亦可與 VS Code 啟動後，自功能表呼叫：
File 》Preferences 》Keyboard Shortcuts

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

## 參考

### 常見問題診斷與狀況排除

- Unable to init vscode-neovim: command 'type' already exists

若 VS Code 出現如下之錯誤警示，試著 Uninstall 某些 VS Code Extensions：

```
Unable to init vscode-neovim: command 'type' already exists
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

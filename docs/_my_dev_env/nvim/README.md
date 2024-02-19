---
sidebar:auto
---

# Neovim 安裝與操作指引

## 安裝與操作

- [在 Linux 作業系統安裝與設定 Neovim](./NeoVim)
- [coc-nvim plugin 安裝與設定](./coc-nvim)

### 在 mac 安裝 Nightly 版本

1. 下載檔案： nvim-macos.tar.gz

下載網址： [Neovim Nightly](https://github.com/neovim/neovim/releases/tag/nightly)

```
wget https://github.com/neovim/neovim/releases/download/nightly/nvim-macos.tar.gz
```

2. 解壓縮檔案

```
tar xzvf nvim-macos.tar.gz
```

3. 安裝在個人目錄路徑：

```
mv nvim-osx64/ ~/.local/share/
```

4. 建立連結：

```
ln -nfs ~/.local/share/nvim-osx64/bin/nvim ~/.local/bin/
```

### [在 mac 編譯與安裝](https://github.com/neovim/neovim/wiki/Building-Neovim)

自 GitHub 下載原始碼，進行編譯與安裝。

1. 安裝 xcode commandline tools

```
xcode-select --install
```

2. 安裝「建置工具」

```
brew install ninja libtool automake cmake pkg-config gettext
```

3. 下載原始碼。

```
cd ~/build
git clone https://github.com/neovim/neovim
```

4. 執行「建置作業（Build）」

```
rm -r build/ # clear teh CMake cache
make CMAKE_INSTALL_PREFIX=$HOME/.local/share/neovim/
make install
```

```
rm -r build/ # clear teh CMake cache
make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/.local/share/neovim"
make install
```

## 作業指引

N/A

## 常見異常問題診斷與狀況排除

N/A

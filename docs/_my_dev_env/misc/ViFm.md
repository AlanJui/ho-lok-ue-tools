---
sidebar:auto
---

# ViFm 安裝與操作指引

說明 vifm 在各作業系統之安裝與常見操作。

## 安裝作業

### macOS

```
brew install wifm
```

### Ubuntu / Debian

```
sudo apt install wifm
```

## 常用操作

### 建立目錄

```
:mkdir [directory_name]
```

```
:!mkdir [directory_name]
```

### 建立檔案

```
:touch [file_name]
```

### 令 vifm 只顯示某些欄位

想要求 vifm 只顯示兩個欄位：

- 檔案名稱
- 日期時間

可變更其「設定檔」：~/.config/vifm/vifmrc

```
set viewcolumns=-{name},{mtime}
```

📚 語法參考：

```
set viewcolumns=*{name}..,16{mtime},7{}.
```

細節參考：「客製顯示欄位」

## 問題診斷與狀況排除

N/A

## 參考資料

### 客製「顯示欄位」

📚 [vifm-column-view 參考](https://vifm.info/vimdoc.shtml#vifm-column-view)

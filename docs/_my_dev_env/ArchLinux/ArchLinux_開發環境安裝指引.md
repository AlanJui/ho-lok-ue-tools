---
sidebar: auto
---

# Arch Linux 開發作業環境安裝指引

## 文件摘要

對於使用 Arch Linux / Manjaro 為作業系統之電腦，提供作業指引，說明如何安裝
軟體開發環境之操作程序。

軟體開發作業環境需涵蓋之範圍如下：

- Python 3 作業環境
- Node.js 作業環境
- Lua 作業環境

## Python 3 作業環境安裝程序

### 安裝 Python 及版本管理器

1. 安裝作業系統，編譯原始程式碼及建置執行碼所需軟體。

```
sudo pacman -Sy base-devel
```

2. 安裝 Python 版本管理器：pyenv。

```
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
git clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv
```

3. 設定 pyenv 所需之「環境變數」。

```
vim ~/.bashrc
```

.bashrc:

```
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
  eval "$(pyenv virtualenv-init -)"
fi
```

4. 重新啟動「終端機」。

```
exec "$SHELL"
```

6. 驗證 pyenv 已能正常運作。

```
pyenv versions
```

7. 安裝 Python 2.7.8 直譯器。

```
pyenv install 2.7.8
```

8. 安裝 Python 3.8 直譯器。

```
pyenv install 3.8
pyenv install 3.8.6
pyenv versions
```

9. 安裝 Python 3.9 並設定成預設 Python 3 使用版本

```
pyenv install 3.9.1
pyenv versions
pyenv global 2.7.8 3.9.1
```

10. 驗證設定結果：

```
pyenv version
python --version
```

### 設定 Python 虛擬環境 (Virtual Envirnoment)

1. 建立名為：venv-3.9.1 虛擬環境

```
pyenv virtualenv 3.9.1 venv-3.9.1
```

2. 觀察虛擬環境建置之目錄路徑。

```
[alanjui@VB02-ArchLinux ~]$ pyenv virtualenv 3.9.1 venv-3.9.1
Looking in links: /tmp/tmppncsrj5g
Requirement already satisfied: setuptools in /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1/lib/python3.9/site-packages (49.2.1)
Requirement already satisfied: pip in /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1/lib/python3.9/site-packages (20.2.3)

[alanjui@VB02-ArchLinux ~]$ ls -al ~/.pyenv/versions
總用量 16
drwxr-xr-x  4 alanjui alanjui 4096  1月 15 11:11 .
drwxr-xr-x 14 alanjui alanjui 4096  1月 15 11:11 ..
drwxr-xr-x  6 alanjui alanjui 4096  1月 15 11:06 3.8.6
drwxr-xr-x  7 alanjui alanjui 4096  1月 15 11:11 3.9.1
lrwxrwxrwx  1 alanjui alanjui   51  1月 15 11:11 venv-3.9.1 -> /home/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1

[alanjui@VB03-ArchLinux-KDE ~]$ pyenv virtualenvs
  3.9.1/envs/venv-3.9.1 (created from /home/alanjui/.pyenv/versions/3.9.1)
  venv-3.9.1 (created from /home/alanjui/.pyenv/versions/3.9.1)
```

### Python 版本管理器常用操作

- Python 虛擬環境的啟用／關閉

```
pyenv activate [name]
pyenv deactivate
```

- Python 虛擬環境移除

```
pyenv uninstall [my-virtual-env]
```

- ~/.pyenv/versions/[my-virtual-env]
- ~/.pyenv/versions/{Python_version}/envs/[my-virtual-env]

- 設定作業系統層級之「預設 Python 直譯器」。

```
pyenv global 3.8.6
pyenv version
python --version
```

## Node.js 作業環境安裝程序

參考資料： https://github.com/tj/n

### 安裝 node 與 npm 套件

1. 解除系統預設安裝

```
sudo mv /usr/bin/node /usr/bin/node.old
```

2. 安裝 Node.js 版本管理器：n 。

```
cd
curl -L https://git.io/n-install | bash
. ~/.bashrc
```

3. 使用 n 版本管理器，安裝 LTS 版本

```
n lts


[alanjui@VB02-ArchLinux ~]$ n lts
   installed : v14.15.4 (with npm 6.14.10)
```

4. 驗證 node 與 npm 均已能正常運作。

```
node -v
npm -v


[alanjui@VB03-ArchLinux-KDE ~]$ node -v
v14.15.4
[alanjui@VB03-ArchLinux-KDE ~]$ npm -v
6.14.10
```

### 透過 npm 安裝 yarn 套件管理器

```
npm install -g yarn
```

### 透過作業系統之套件管理器，安裝 yarn 套件管理器

1. 安裝軟體套件

若是可以，儘可能透過 npm 安裝 yarn 。

```
sudo pacman -S yarn
```

【安裝時終端機畫面顯示】：

```
[alanjui@VB03-ArchLinux-KDE ~]$ sudo pacman -S yarn
正在解決依賴關係…
正在檢查衝突的軟體包…

軟體包 (3) libuv-1.40.0-1  nodejs-15.5.1-1  yarn-1.22.10-1

總計下載大小：   9.61 MiB
總計安裝大小：  35.08 MiB

:: 進行安裝嗎？ [Y/n] y
:: 正在接收軟體包…
 libuv-1.40.0-1-x86_64                               224.8 KiB  1561 KiB/s 00:00 [##############################################] 100%
 nodejs-15.5.1-1-x86_64                                8.5 MiB  10.8 MiB/s 00:01 [##############################################] 100%
 yarn-1.22.10-1-any                                  953.5 KiB  10.3 MiB/s 00:00 [##############################################] 100%
(3/3) 正在檢查鑰匙圈中的鑰匙                                                     [##############################################] 100%
(3/3) 正在檢查軟體包完整性                                                       [##############################################] 100%
(3/3) 正在載入軟體包檔案                                                         [##############################################] 100%
(3/3) 正在檢查檔案衝突                                                           [##############################################] 100%
(3/3) 正在檢查可用磁碟空間                                                       [##############################################] 100%
:: 正在處理軟體包變更…
(1/3) 正在安裝 libuv                                                             [##############################################] 100%
(2/3) 正在安裝 nodejs                                                            [##############################################] 100%
nodejs 的可選依賴
    npm: nodejs package manager
(3/3) 正在安裝 yarn                                                              [##############################################] 100%
:: 正在執行後置作業掛鉤…
(1/1) Arming ConditionNeedsUpdate...
```

2. 驗證

有些作業系統之「套件管件管理器」，如：macOS 之 Homebrew ，認定 yarn 之執行，需有
相依套件：node、npm 存在於作業系統中，故而在安裝作業，會自動偵測 node, npm 是否
已存在於作業系統中，若其診測結果認定為：否，則會自動安裝「相依套件」。

由於 n 這 Node.js 版本管理器，未必被所有的套件管理器所支援，故而 yarn 安裝完成後
，需驗證作業系統所認可的 node, npm 套件，未被自動安裝入作業系統中。

```
[alanjui@VB03-ArchLinux-KDE ~]$ which yarn
/usr/bin/yarn

[alanjui@VB03-ArchLinux-KDE ~]$ yarn --version
1.22.10

[alanjui@VB03-ArchLinux-KDE ~]$ node -v
v14.15.4

[alanjui@VB03-ArchLinux-KDE ~]$ npm -v
6.14.10
```

## Lua 作業環境安裝程序

N/A

## 常見問題診斷與狀況排除

N/A

## 參考資料

N/A

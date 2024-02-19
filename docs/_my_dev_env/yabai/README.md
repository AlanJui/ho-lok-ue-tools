<!-- markdownlint-disable MD024 MD040 MD041 MD043 MD033 -->

# Yabai 操作指引

在 Linux 平台，Windows Management 工具軟體，開發人員可專注於
鍵盤操作，無需滑鼠輔助，以此方式作業，進而提昇工作的高效。但
在 macOS 平台上，並未提供類似的 Windows Management 工具。但
有名為 Yabai 的工具軟體，能提供相類似的功能。

本指引用於說明，如何透過 Yabai ，並將 HarmmerSpoon 整合進來
，自行構建一個可用 macOS 平台的 Windows Management 工具。

::: tip

1. 欲令 Yabai 功能全開、發揮到極致，得要關閉 macOS 預設的
   SIP 保護功能。

2. HammerSpoon 是專為 macOS 作業系統開發的 Lua Script 工具軟
   體，在 Linux 的使用者，為了讓指令的操作更加 Smart ，常會
   利用 Shell Script 加工達其目的。仿照這樣的概念
   ，HammerSpoon 讓他的使用者可透過 Lua Script ，對 macOS 進
   行自動化、客製作的設計。

:::

## 作業環境

- 作業系統： macOS 10.13.1
- WE 平台：Yabai + SKHD
- Script 引擎： Hammerspoon
- 鍵盤配置標準：Querty
- 鍵盤引擎：Karabiner-Elements
- 終端機： iTerm 、Alacritty

## 安裝作業

### 安裝 [Yabai](https://github.com/koekeishiya/yabai/)

1. 安裝 Yabai 套件

   ```sh
   brew install koekeishiya/formulae/yabai
   ```

2. 以 Service 啟動 yabai

   ```sh
   brew services start yabai
   ```

3. 建立 Yabai 用戶啟動設定檔

   建立設定檔，以便 macOS 的使用者帳戶，能以 sa 帳戶的權限，
   啟動 Yabai Service。

   (a) 執行以下指令，備妥其輸出，以便待會在設定檔中填入。

   ```sh
   echo "$(whoami) ALL=(root) NOPASSWD: sha256:$(shasum -a 256 $(which yabai) | cut -d " " -f 1) $(which yabai) --load-sa"
   ```

   (b) 以系統管理員權限，編輯設定檔：

   ```sh
   sudo visudo -f /private/etc/sudoers.d/yabai
   ```

   (c) 加入如下所列之設定：

   ```sh
    # input the line below into the file you are editing
    # replace <yabai> with the path to the yabai binary (output of: which yabai)
    # replace <user> with your username (output of: whoami)
    # replace <hash> with the sha256 hash of the yabai binary (output of: shasum -a 256 $(which yabai))
    # this hash must be updated manually after running brew upgrade
    #
    # 設定之「填寫格式」
    # <user> ALL=(root) NOPASSWD: sha256:<hash> <yabai> --load-sa
   ```

   (d) 填入 (a) 指令輸出的執行結果。

4. 在 Yabai 設定檔加入上述設定。

   編輯 Yabai 設定檔：

   ```sh
   nvim ~/.config/yabai/yabairc
   ```

   在設定檔中，加入下列設定：

   ```sh
   yabai -m signal --add event=dock_did_restart action="sudo yabai --load-sa"
   sudo yabai --load-sa
   ```

5. 重新啟動 Yabai Service

   ```sh
   brew services restart yabai
   ```

## 安裝 [Karabiner-Elements](https://github.com/pqrs-org/Karabiner-Elements)

執行安裝指令：

```sh
brew install --cask karabiner-elements
```

## 安裝 [Hammerspoon](https://github.com/Hammerspoon/hammerspoon)

執行安裝指令：

```sh
brew install --cask hammerspoon
```

## 安裝 [myHammerSpoon](https://github.com/AlanJui/myHammerSpoon)

1. 下載本專案

```
cd
mv .hammerspoon .hammerspoon.bak
git clone https://github.com/AlanJui/myHammerSpoon .hammerspoon
```

（待完成）

# 環境設定

## Karabiner-Elements 設定

### 〔右 Command〕

令〔右 Command〕 鍵，代表 F18 功能鍵。

- Simple Modifications:
- right_command --> f18

### 〔右 Control〕＋〔T〕

令 〔右 Control〕＋〔T〕鍵，可啟動 App：Alacritty Terminal。

- Complex Modifications:
  - right_control + T: Alacritty Terminal

# 操作指引

## 功能指令鍵

啟動指令之操作按鍵，共有以下 10 種。

- **`Mod1`**：**〔ctrl〕**＋**〔alt〕**

  視窗／桌面擇定（Focus）【Tiling Space】指令。

- **`Mod2`**：**〔shift〕**＋**〔ctrl〕**＋**〔alt〕**

  視窗／桌面搬移（Move）/對調（Swap） 【Tiling Space】指令。

- **`Mod3`**：**〔alt〕**＋**〔cmd〕**

  螢幕擇定（Focus）指令。

- **`Mod4`**：**〔shift〕**＋**〔alt〕**＋**〔cmd〕**

  螢幕搬移（Move）指令。

- **`Mod5`**：**〔shift〕**＋**〔alt〕**

  視窗層級設置：變更（Set/Toggle）視窗屬性-寬度／高度指令。

- **`Mod6`**：**〔shift〕**＋**〔cmd〕**

  桌面／螢幕層級設置指令。

- **`Mod7`**：**〔ctrl〕**＋**〔cmd〕**

  移動視窗所在位置：移動視窗所在位置指令。

- **`Mod8`**：**〔shift〕**＋**〔ctrl〕**＋**〔cmd〕**

  桌面中視窗寬度比例調整指令。

- **`Mod9`**：**〔ctrl〕**＋**〔alt〕**＋**〔cmd〕**

  系統層級設置指令。

- **`Mod0`**：**〔shift〕**＋**〔ctrl〕**＋**〔alt〕**＋**〔cmd〕**

  系統層級設置 2 指令。

## 系統層級操作指令

- 〔Mod9〕＋〔y〕：重新啟動 Yabai Service 。

- 〔Mod9〕＋〔h〕：依據設定檔（~/.hammerspoon/init.lua）重啟
  Hammerspoon。

- 〔Mod9〕＋〔Enter〕：依據設定檔（~/.hammerspoon/init.lua）
  重啟。

- 〔Mod9〕＋〔m〕：標示滑鼠指標所停留之螢幕。

- 〔Mod5〕＋〔i〕：在 Hammerspoon Console 顯示除錯（Debug）
  資訊。

## 在堆疊排版桌面擇定（Focus）視窗

- 〔Mod1〕＋〔t〕：擇定堆疊桌面上一層視窗

- 〔Mod1〕＋〔g〕：擇定堆疊桌面下一層視窗

## 並排排版桌面

### 擇定（Focus）視窗

- 〔Mod1〕＋〔h〕：⬅️ 左（西）
- 〔Mod1〕＋〔j〕：⬇️ 下（南）
- 〔Mod1〕＋〔k〕：⬆️ 上（北）
- 〔Mod1〕＋〔l〕：➡️ 右（東）

### 搬移（Move）視窗

- 〔Mod2〕＋〔h〕：⬅️ 左（西）
- 〔Mod2〕＋〔j〕：⬇️ 下（南）
- 〔Mod2〕＋〔k〕：⬆️ 上（北）
- 〔Mod2〕＋〔l〕：➡️ 右（東）

### 對調（Swap）視窗

- 〔Mod2〕＋〔a〕：⬅️ 左（西）
- 〔Mod2〕＋〔s〕：⬇️ 下（南）
- 〔Mod2〕＋〔w〕：⬆️ 上（北）
- 〔Mod2〕＋〔d〕：➡️ 右（東）

## 以切換(Toggle)方式變更視窗屬性設置

### 切換視窗並排方向(split)

- 〔Mod5〕＋〔s〕：切換視窗的排版方向：上下並排／左右並排

在並排（BSP）桌面，將原本左右並排的桌面，改成上下並排（也有
可能是上下並排，改成左右並排）。

### 切換成浮動視窗(float/unfloat)

- 〔Mod5〕＋〔f〕：切換視窗的屬性：浮動／並排

在並排桌面，將作用視窗變更成浮動視窗。

### 切換成浮動且置中視窗(float/unfloat and center)

- 〔Mod5〕＋〔c〕：切換視窗的屬性：並排／浮動且置中

在並排桌面，將作用視窗變更成浮動視窗。

### 切換成佔用全桌面(zoom-parent)

- 〔Mod5〕＋〔p〕：切換視窗的屬性：將視窗尺寸放大成佔用全桌
  面／還原至放大前尺寸

### 切換成佔用全螢幕(zoom-fullscreen)

- 〔Mod5〕＋〔m〕：將並排（BSP）／堆疊（Stack）排版之桌面，
  令作用視窗之寬度及高度同時擴大，佔用整個螢幕。

【註】：屬浮動（Float）排版之桌面，無法使用此功能。

### 切換成佔用全螢幕(native-fullscreen)

- 〔Mod5〕＋〔n〕：將浮動視窗放大，佔用整個「螢幕」。

### 切換擺放順序在最上層(topmost)

- 〔Mod5〕＋〔t〕：切換視窗的堆疊順序：將視窗擺放至最上層／
  還原至擺放層

### 切換視窗框的顯示(border)

- 〔Mod5〕＋〔b〕：顯示／隱藏視窗框。

## 並排桌面

### 雙視窗佔用版面比例（BSP Ratio）設置調整

- 〔Mod5〕＋〔=〕：兩個視窗，各佔桌面寛度的一半
- 〔Mod5〕＋〔[〕：兩個視窗，左端佔桌面寛度的 2/3
- 〔Mod5〕＋〔]〕：兩個視窗，左端佔桌面寛度的 1/3

### 視窗寬度／高度設置調整

- 〔Mod5〕＋〔h〕：⬅️ 左（西）
- 〔Mod5〕＋〔j〕：⬇️ 下（南）
- 〔Mod5〕＋〔k〕：⬆️ 上（北）
- 〔Mod5〕＋〔l〕：➡️ 右（東）

## 浮動桌面

### 變更浮動視窗寬度

- 〔Mod6〕＋〔=〕：兩個視窗，各佔桌面寛度的一半
- 〔Mod6〕＋〔[〕：將視窗移至桌面左方；其寬度佔桌面寛的 2/3
- 〔Mod6〕＋〔]〕：將視窗移至桌面右方；其寬度佔桌面寛的 1/3

- 〔Mod6〕＋〔Up〕：放大視窗成佔用全桌面
- 〔Mod6〕＋〔Left〕：將視窗移至桌面左方；其寬度佔桌面寛的
  1/2
- 〔Mod6〕＋〔Right〕：將視窗移至桌面右方；其寬度佔桌面寛的
  1/2

### 雙視窗佔用桌面比例設置調整

- 〔Mod6〕＋〔1〕：兩個視窗佔用桌面寛度的比例，視窗移桌面左
  端，其寬佔桌面的 2/3
- 〔Mod6〕＋〔2〕：兩個視窗佔用桌面寛度的比例，視窗移桌面右
  端，其寬佔桌面的 1/3
- 〔Mod6〕＋〔3〕：兩個視窗佔用桌面寛度的比例，視窗移桌面左
  端，其寬佔桌面的 1/3
- 〔Mod6〕＋〔4〕：兩個視窗佔用桌面寛度的比例，視窗移桌面右
  端，其寬佔桌面的 2/3

### 搬移(Move) 視窗

- 〔Mod4〕＋〔h〕：⬅️ 左（西）
- 〔Mod4〕＋〔j〕：⬇️ 下（南）
- 〔Mod4〕＋〔k〕：⬆️ 上（北）
- 〔Mod4〕＋〔l〕：➡️ 右（東）

### 增加視窗的寛度／高度

- 〔Mod6〕＋〔h〕：⬅️ 左（西）
- 〔Mod6〕＋〔j〕：⬇️ 下（南）
- 〔Mod6〕＋〔k〕：⬆️ 上（北）
- 〔Mod6〕＋〔l〕：➡️ 右（東）

### 減少視窗的寛度／高度

- 〔Mod6〕＋〔a〕：⬅️ 左（西）
- 〔Mod6〕＋〔s〕：⬇️ 下（南）
- 〔Mod6〕＋〔w〕：⬆️ 上（北）
- 〔Mod6〕＋〔d〕：➡️ 右（東）

## 使用 HS 達成之操作

以下之操作，非 Yabai 指令可達成；而是使用 HS 採用的 Lua
Script 所完成的功能。視窗須為「浮動」視窗。

### 變更視窗之寬度／高度

- 〔Mod7〕＋〔⬅️〕：將視窗移至桌面左方；其寬度佔桌面寛的 1/2
- 〔Mod7〕＋〔➡️〕：將視窗移至桌面右方；其寬度佔桌面寛的 1/2
- 〔Mod7〕＋〔⬆️〕：將視窗移至桌面上方；其寬度佔桌面高的 1/2
- 〔Mod7〕＋〔⬇️〕：將視窗移至桌面下方；其寬度佔桌面高的 1/2

### 變更左右並排視窗之寬度

- 〔Mod7〕＋〔1〕：兩個視窗佔用桌面寛度的比例，視窗移桌面左
  端，其寬佔桌面的 2/3
- 〔Mod7〕＋〔2〕：兩個視窗佔用桌面寛度的比例，視窗移桌面右
  端，其寬佔桌面的 1/3
- 〔Mod7〕＋〔3〕：兩個視窗佔用桌面寛度的比例，視窗移桌面左
  端，其寬佔桌面的 1/3
- 〔Mod7〕＋〔4〕：兩個視窗佔用桌面寛度的比例，視窗移桌面右
  端，其寬佔桌面的 2/3

### 放大視窗至佔用全螢幕

- 〔Mod7〕＋〔m〕：放大視窗成佔用全桌面
- 〔Mod7〕＋〔f〕：放大視窗成佔用全桌面

### 將視窗移至桌面中央

- 〔Mod7〕＋〔c〕：將視窗移至桌面中央

### 以桌面 1/3 寬度或 1/3 高度移動視窗

- 〔Mod8〕＋〔⬅️〕：設定視窗的寬度為桌面三分之一，並依此寬度
  往左方移動
- 〔Mod8〕＋〔➡️〕：設定視窗的寬度為桌面三分之一，並依此寬度
  往右方移動
- 〔Mod8〕＋〔⬆️〕：設定視窗的高度為桌面三分之一，並依此高度
  往上方移動
- 〔Mod8〕＋〔⬇️〕：設定視窗的高度為桌面三分之一，並依此高度
  往下方移動

### 搬移(Move) 視窗

- 〔Mod8〕＋〔h〕：⬅️ 左（西）
- 〔Mod8〕＋〔j〕：⬇️ 下（南）
- 〔Mod8〕＋〔k〕：⬆️ 上（北）
- 〔Mod8〕＋〔l〕：➡️ 右（東）
- 〔Mod8〕＋〔y〕：左上（西北）
- 〔Mod8〕＋〔u〕：右上（東北）
- 〔Mod8〕＋〔b〕：左下（西南）
- 〔Mod8〕＋〔n〕：右下（東南）

## 擇定(Focus)桌面

### 依桌面編號

- 〔Mod3〕＋〔1〕..〔9〕：以編號擇定桌面

### 依桌面序號

- 〔Mod2〕＋〔=〕：上一次使用的桌面序號
- 〔Mod2〕＋〔[〕：桌面序號的前一個
- 〔Mod2〕＋〔]〕：桌面序號的後一個

## 搬移(Move)視窗至某桌面

### 依桌面編號

- 〔Mod4〕＋〔1〕..〔9〕：將作用中視窗，搬移至【編號】桌面

### 依桌面序號

- 〔Mod3〕＋〔=〕：上一次使用的桌面序號
- 〔Mod3〕＋〔[〕：桌面序號的前一個
- 〔Mod3〕＋〔]〕：桌面序號的後一個

## 變更桌面(Space)的設置

### 設定桌面採用之排版版面

每個桌面（Desktop/Space），均有三種視窗排版方式：左右／上下
並排（BSP）、堆疊（Stack）、浮動（Float）；三種視窗排版方式
，可以下列之按鍵切換：

- 〔Mod6〕＋〔b〕：並排（BSP/Tiling）版面

- 〔Mod6〕＋〔s〕：堆疊（Stack）版面

- 〔Mod6〕＋〔f〕：浮動（Floating）版面

### 切換視窗與桌面之間隔

- 〔Mod6〕＋〔g〕：擴張／減縮間隔距離

### 將視窗依順時鐘 90 度輪調

- 〔Mod6〕＋〔r〕：並排桌面之作用視窗，依順時鐘方向，輪轉 90
  度移動位置

### 令桌面中各視窗均寬

- 〔Mod6〕＋〔=〕：依桌面之寬度均分各視窗，令各個視窗同寬。

### 桌面中上、下視窗對調

- 〔Mod6〕＋〔x〕：令桌面中位居座標 X 軸：上、下兩方的視窗，
  對調位置

### 桌面中左、右視窗對調

- 〔Mod6〕＋〔y〕：令桌面中位居座標 Y 軸：左、右兩方的視窗，
  對調位置

## 擇定螢幕(Screen)

### 依螢幕編號

- 〔Mod9〕＋〔1〕..〔3〕：以編號擇定螢幕

### 依螢幕序號

- 〔Mod9〕＋〔=〕：上一次使用的螢幕序號
- 〔Mod9〕＋〔[〕：螢幕序號的前一個
- 〔Mod9〕＋〔]〕：螢幕序號的後一個

### 依螢幕擺放位置

- 〔Mod9〕＋〔q〕：擇定左方螢幕（螢幕序號：2）
- 〔Mod9〕＋〔w〕：擇定中央螢幕（螢幕序號：3）
- 〔Mod9〕＋〔e〕：擇定右方螢幕（螢幕序號：1）

## 搬移(Move)視窗至某螢幕

### 依螢幕編號

- 〔Mod0〕＋〔1〕..〔3〕：將作用中視窗，搬移至【編號】螢幕

### 依螢幕序號

- 〔Mod0〕＋〔[〕：將擇定視窗，搬移到螢幕序號的前一個
- 〔Mod0〕＋〔]〕：將擇定視窗，搬移到螢幕序號的後一個

- 〔Mod0〕＋〔⬅️〕：將擇定視窗，搬移到螢幕序號的前一個
- 〔Mod0〕＋〔➡️〕：將擇定視窗，搬移到螢幕序號的後一個

- 〔Mod0〕＋〔h〕：將擇定視窗，搬移到螢幕序號的前一個
- 〔Mod0〕＋〔l〕：將擇定視窗，搬移到螢幕序號的後一個

### 依螢幕擺放位置

- 〔Mod0〕＋〔q〕：將擇定視窗，搬移到左方螢幕（螢幕序號：2）
- 〔Mod0〕＋〔w〕：將擇定視窗，搬移到中央螢幕（螢幕序號：3）
- 〔Mod0〕＋〔e〕：將擇定視窗，搬移到右方螢幕（螢幕序號：1）

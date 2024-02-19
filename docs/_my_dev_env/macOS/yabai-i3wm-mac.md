---
sidebar: auto
---

# Yabai

https://www.youtube.com/watch?v=mMV3LXQ3pKQ&

[https://youtu.be/mMV3LXQ3pKQ](https://youtu.be/mMV3LXQ3pKQ)

https://www.youtube.com/watch?v=JL1lz77YbUE&

[https://youtu.be/JL1lz77YbUE](https://youtu.be/JL1lz77YbUE)

## 關閉 SIP

SIP（System Integrity Protection）

https://blog.developer.money/%E9%97%9C%E9%96%89-mac-%E7%9A%84-sip-system-integrity-protection-8f679c4fdd9e

## 快捷鍵操作

https://github.com/itgoyo/yabai-config

**Changing focus**
alt + hjkl

**Focus**

| **Action**  | **Key Combination** |
| ----------- | ------------------- |
| focus west  | alt + h             |
| focus south | alt + j             |
| focus north | alt + k             |
| focus east  | alt + l             |

**Resize windows**

| **Action**   | **Key Combination** |
| ------------ | ------------------- |
| Resize left  | shfit + cmd + h     |
| Resize down  | shfit + cmd + j     |
| Resize up    | shfit + cmd + k     |
| Resize right | shfit + cmd + l     |
| Equalise     | shfit + cmd + 0     |

**Move windows**
shift + alt + hjkl

**Move windows to workspace**

| **Action**                  | **Key Combination** |
| --------------------------- | ------------------- |
| Send to last active desktop | shift + alt + m     |
| Send to previous workplace  | shift + alt + p     |
| Send to next workplace      | shift + alt + n     |
| Send to workplace           | shift + alt + num   |

**Rotate windows**

| **Action**           | **Key Combination** |
| -------------------- | ------------------- |
| Rotate clockwise     | shift + alt + r     |
| Rotate anticlockwise | alt + r             |
| Flip on x-axis       | shift + alt + x     |
| Flip on y-axis       | shift + alt + y     |

**Window actions**

| **Action**        | **Key Combination** |
| ----------------- | ------------------- |
| Fullscreen        | alt + f             |
| Native fullscreen | shift + alt + f     |
| Center window     | shift + alt + c     |

**Insertion point**

| **Action**                   | **Key Combination**     |
| ---------------------------- | ----------------------- |
| Insert left                  | shift + lctrl + alt + h |
| Insert down                  | shift + lctrl + alt + j |
| Insert up                    | shift + lctrl + alt + k |
| Insert right                 | shift + lctrl + alt + l |
| Cancel insert (chunkwm only) | shift + lctrl + alt + x |

**Misc**

| **Action**      | **Key Combination**     |
| --------------- | ----------------------- |
| Toggle float    | shift + alt + space     |
| Toggle gaps     | lctrl + alt + g         |
| Restart chunkwm | lctrl + shift + alt + r |

---

- alt + hjkl
  切換視窗的 focus

- alt + s
  focus 視窗全屏

- alt + e
  切換回拼圖排列

- alt + shift + hjkl
  移動 focus 視窗的位置

- alt + cmd + shift + hjkl
  調整 focus 視窗的大小

- alt + r
  旋轉所有視窗 90 度

- alt + shift + space
  focus 視窗懸浮（可以亂移動）

- alt + shift + 1234
  把 focus 視窗送到 1234 的桌面（要先有桌面，必須手動新增）

- alt + shift + p n m
  把 focus 視窗送到 p(上一個) n(下一個) m(最後切換的) 桌面，如果條件不成立將無動作。

- alt + p n
  切換 focus 到 p(上一個) n(下一個) 視窗

## 設定檔

### .yabairc

    #!/usr/bin/env sh

    # the scripting-addition must be loaded manually if
    # you are running yabai on macOS Big Sur. Uncomment
    # the following line to have the injection performed
    # when the config is executed during startup.
    #
    # for this to work you must configure sudo such that
    # it will be able to run the command without password
    #
    # see this wiki page for information:
    #  - https://github.com/koekeishiya/yabai/wiki/Installing-yabai-(latest-release)
    #
    # sudo yabai --load-sa
    # yabai -m signal --add event=dock_did_restart action="sudo yabai --load-sa"

    # global settings
    yabai -m config mouse_follows_focus          off
    yabai -m config focus_follows_mouse          off
    yabai -m config window_placement             second_child
    yabai -m config window_topmost               off
    yabai -m config window_shadow                on
    yabai -m config window_opacity               off
    yabai -m config window_opacity_duration      0.0
    yabai -m config active_window_opacity        1.0
    yabai -m config normal_window_opacity        0.90
    yabai -m config window_border                off
    yabai -m config window_border_width          6
    yabai -m config active_window_border_color   0xff775759
    yabai -m config normal_window_border_color   0xff555555
    yabai -m config insert_feedback_color        0xffd75f5f
    yabai -m config split_ratio                  0.50
    yabai -m config auto_balance                 off
    yabai -m config mouse_modifier               fn
    yabai -m config mouse_action1                move
    yabai -m config mouse_action2                resize
    yabai -m config mouse_drop_action            swap

    # general space settings
    yabai -m config layout                       bsp
    yabai -m config top_padding                  12
    yabai -m config bottom_padding               12
    yabai -m config left_padding                 12
    yabai -m config right_padding                12
    yabai -m config window_gap                   06

    echo "yabai configuration loaded.."

### .skhdrc

    # opens iTerm2(暂时隐藏了，因为权限太高了，导致AS快捷键都捕获不到，热键冲突)
    #alt - return : "${HOME}"/.config/yabai/scripts/open_iterm2.sh


    # Show system statistics


    # Navigation
    alt - h : yabai -m window --focus west
    alt - j : yabai -m window --focus south
    alt - k : yabai -m window --focus north
    alt - l : yabai -m window --focus east

    # Moving windows
    shift + alt - h : yabai -m window --warp west
    shift + alt - j : yabai -m window --warp south
    shift + alt - k : yabai -m window --warp north
    shift + alt - l : yabai -m window --warp east


    # Resize windows
    shift+ cmd - h : \
        yabai -m window --resize left:-20:0 ; \
        yabai -m window --resize right:-20:0

    shift + cmd - j : \
        yabai -m window --resize bottom:0:20 ; \
        yabai -m window --resize top:0:20

    shift + cmd - k : \
        yabai -m window --resize top:0:-20 ; \
        yabai -m window --resize bottom:0:-20

    shift + cmd - l : \
        yabai -m window --resize right:20:0 ; \
        yabai -m window --resize left:20:0

    # Float and center window
    shift + alt - c : yabai -m window --toggle float;\
                      yabai -m window --grid 4:4:1:1:2:2

    # Equalize size of windows
    lctrl + alt - 0 : yabai -m space --balance

    # Enable / Disable gaps in current workspace
    lctrl + alt - g : yabai -m space --toggle padding; yabai -m space --toggle gap

    # Rotate windows clockwise and anticlockwise
    alt - r         : yabai -m space --rotate 90
    shift + alt - r : yabai -m space --rotate 270

    # Rotate on X and Y Axis
    shift + alt - x : yabai -m space --mirror x-axis
    shift + alt - y : yabai -m space --mirror y-axis

    # Set insertion point for focused container
    shift + lctrl + alt - h : yabai -m window --insert west
    shift + lctrl + alt - j : yabai -m window --insert south
    shift + lctrl + alt - k : yabai -m window --insert north
    shift + lctrl + alt - l : yabai -m window --insert east

    # Float / Unfloat window (更换 layout 方式) w
    shift + alt - space : yabai -m window --toggle float

    # Restart Yabai
    shift + cmd + alt - r :
        /usr/bin/env osascript <<< \
            "display notification \"Restarting Yabai\" with title \"Yabai\""; \
        launchctl kickstart -k "gui/${UID}/homebrew.mxcl.yabai"

    # Make window native fullscreen
    alt - f         : yabai -m window --toggle zoom-fullscreen
    shift + alt - f : yabai -m window --toggle native-fullscreen

    # toggle window split type
    alt - e : yabai -m window --toggle split

    # increase window size 竖直方向才能用 top  水平方向才能用 left
    shift + alt - d : yabai -m window --resize left:-20:0
    shift + alt - w : yabai -m window --resize top:0:-20


    # decrease window size
    shift + alt - a : yabai -m window --resize left:20:0
    shift + alt - s : yabai -m window --resize top:0:20


    # fast focus desktop (切换空间焦点)
    # cmd + alt - x : yabai -m space --focus recent
    # cmd + alt - z : yabai -m space --focus prev
    # cmd + alt - c : yabai -m space --focus next
    alt - 1 : yabai -m space --focus 1
    alt - 2 : yabai -m space --focus 2
    alt - 3 : yabai -m space --focus 3
    alt - 4 : yabai -m space --focus 4
    alt - 5 : yabai -m space --focus 5
    alt - 6 : yabai -m space --focus 6
    alt - 7 : yabai -m space --focus 7
    alt - 8 : yabai -m space --focus 8
    alt - 9 : yabai -m space --focus 9
    alt - 0 : yabai -m space --focus 10

    # create new space
    ctrl - n : yabai -m space --create
    ctrl - m : yabai -m space --destroy

    # destroy empty spaces
    shift + cmd + alt - w : echo "destroy empty spaces";\
                            yabai -m query --spaces \
                            | jq 'reverse | .[] | select((.windows | length) == 0) | .index' \
                            | xargs -I{} yabai -m space {} --destroy \;

    # send window to space
    ctrl + shift - 1 : yabai -m window --space 1
    ctrl + shift - 2 : yabai -m window --space 2
    ctrl + shift - 3 : yabai -m window --space 3
    ctrl + shift - 4 : yabai -m window --space 4
    ctrl + shift - 5 : yabai -m window --space 5
    ctrl + shift - 6 : yabai -m window --space 6
    ctrl + shift - 7 : yabai -m window --space 7
    ctrl + shift - 8 : yabai -m window --space 8
    ctrl + shift - 9 : yabai -m window --space 9
    ctrl + shift - 0 : yabai -m window --space 10

    # Move focus container to workspace
    shift + cmd - m : yabai -m window --space last && yabai -m space --focus last
    shift + cmd - b : yabai -m window --space prev && yabai -m space --focus prev
    shift + cmd - n : yabai -m window --space next && yabai -m space --focus next
    shift + cmd - 1 : yabai -m window --space 1 && yabai -m space --focus 1
    shift + cmd - 2 : yabai -m window --space 2 && yabai -m space --focus 2
    shift + cmd - 3 : yabai -m window --space 3 && yabai -m space --focus 3
    shift + cmd - 4 : yabai -m window --space 4 && yabai -m space --focus 4
    shift + cmd - 5 : yabai -m window --space 5 && yabai -m space --focus 5
    shift + cmd - 6 : yabai -m window --space 6 && yabai -m space --focus 6


    alt + ctrl - f : yabai -m space --layout float && \
                     yabai -m config window_border off
    alt + ctrl - b : yabai -m space --layout bsp && \
                     yabai -m config window_border on




    # ################################################################ #
    # THE FOLLOWING IS AN EXPLANATION OF THE GRAMMAR THAT SKHD PARSES. #
    # FOR SIMPLE EXAMPLE MAPPINGS LOOK FURTHER DOWN THIS FILE..        #
    # ################################################################ #

    # A list of all built-in modifier and literal keywords can
    # be found at https://github.com/koekeishiya/skhd/issues/1
    #
    # A hotkey is written according to the following rules:
    #
    #   hotkey       = <mode> '<' <action> | <action>
    #
    #   mode         = 'name of mode' | <mode> ',' <mode>
    #
    #   action       = <keysym> '[' <proc_map_lst> ']' | <keysym> '->' '[' <proc_map_lst> ']'
    #                  <keysym> ':' <command>          | <keysym> '->' ':' <command>
    #                  <keysym> ';' <mode>             | <keysym> '->' ';' <mode>
    #
    #   keysym       = <mod> '-' <key> | <key>
    #
    #   mod          = 'modifier keyword' | <mod> '+' <mod>
    #
    #   key          = <literal> | <keycode>
    #
    #   literal      = 'single letter or built-in keyword'
    #
    #   keycode      = 'apple keyboard kVK_<Key> values (0x3C)'
    #
    #   proc_map_lst = * <proc_map>
    #
    #   proc_map     = <string> ':' <command> | <string>     '~' |
    #                  '*'      ':' <command> | '*'          '~'
    #
    #   string       = '"' 'sequence of characters' '"'
    #
    #   command      = command is executed through '$SHELL -c' and
    #                  follows valid shell syntax. if the $SHELL environment
    #                  variable is not set, it will default to '/bin/bash'.
    #                  when bash is used, the ';' delimeter can be specified
    #                  to chain commands.
    #
    #                  to allow a command to extend into multiple lines,
    #                  prepend '\' at the end of the previous line.
    #
    #                  an EOL character signifies the end of the bind.
    #
    #   ->           = keypress is not consumed by skhd
    #
    #   *            = matches every application not specified in <proc_map_lst>
    #
    #   ~            = application is unbound and keypress is forwarded per usual, when specified in a <proc_map>
    #
    # A mode is declared according to the following rules:
    #
    #   mode_decl = '::' <name> '@' ':' <command> | '::' <name> ':' <command> |
    #               '::' <name> '@'               | '::' <name>
    #
    #   name      = desired name for this mode,
    #
    #   @         = capture keypresses regardless of being bound to an action
    #
    #   command   = command is executed through '$SHELL -c' and
    #               follows valid shell syntax. if the $SHELL environment
    #               variable is not set, it will default to '/bin/bash'.
    #               when bash is used, the ';' delimeter can be specified
    #               to chain commands.
    #
    #               to allow a command to extend into multiple lines,
    #               prepend '\' at the end of the previous line.
    #
    #               an EOL character signifies the end of the bind.

    # ############################################################### #
    # THE FOLLOWING SECTION CONTAIN SIMPLE MAPPINGS DEMONSTRATING HOW #
    # TO INTERACT WITH THE YABAI WM. THESE ARE SUPPOSED TO BE USED AS #
    # A REFERENCE ONLY, WHEN MAKING YOUR OWN CONFIGURATION..          #
    # ############################################################### #

    # focus window
    alt - h : yabai -m window --focus west

    # swap managed window
    shift + alt - h : yabai -m window --swap north

    # move managed window
    shift + cmd - h : yabai -m window --warp east

    # balance size of windows
    shift + alt - 0 : yabai -m space --balance

    # make floating window fill screen
    shift + alt - up     : yabai -m window --grid 1:1:0:0:1:1

    # make floating window fill left-half of screen
    shift + alt - left   : yabai -m window --grid 1:2:0:0:1:1

    # create desktop, move window and follow focus - uses jq for parsing json (brew install jq)
    shift + cmd - n : yabai -m space --create && \
                      index="$(yabai -m query --spaces --display | jq 'map(select(."native-fullscreen" == 0))[-1].index')" && \
                      yabai -m window --space "${index}" && \
                      yabai -m space --focus "${index}"

    # fast focus desktop
    cmd + alt - x : yabai -m space --focus recent
    cmd + alt - 1 : yabai -m space --focus 1

    # send window to desktop and follow focus
    shift + cmd - z : yabai -m window --space next; yabai -m space --focus next
    shift + cmd - 2 : yabai -m window --space  2; yabai -m space --focus 2

    # focus monitor
    ctrl + alt - z  : yabai -m display --focus prev
    ctrl + alt - 3  : yabai -m display --focus 3

    # send window to monitor and follow focus
    ctrl + cmd - 1  : yabai -m window --display 1; yabai -m display --focus 1
    ctrl + cmd - c  : yabai -m window --display next; yabai -m display --focus next

    # move floating window
    shift + ctrl - s : yabai -m window --move rel:0:20
    shift + ctrl - a : yabai -m window --move rel:-20:0

    # increase window size
    shift + alt - a : yabai -m window --resize left:-20:0
    shift + alt - w : yabai -m window --resize top:0:-20

    # decrease window size
    shift + cmd - s : yabai -m window --resize bottom:0:-20
    shift + cmd - w : yabai -m window --resize top:0:20

    # set insertion point in focused container
    ctrl + alt - h : yabai -m window --insert west

    # toggle window zoom
    alt - d : yabai -m window --toggle zoom-parent
    alt - f : yabai -m window --toggle zoom-fullscreen

    # toggle window split type
    alt - e : yabai -m window --toggle split

    # float / unfloat window and center on screen
    alt - t : yabai -m window --toggle float;\
              yabai -m window --grid 4:4:1:1:2:2

    # toggle sticky(+float), topmost, picture-in-picture
    alt - p : yabai -m window --toggle sticky;\
              yabai -m window --toggle topmost;\
              yabai -m window --toggle pip
    #
    # change windows size
    # shrink/extend width/height
    alt + shift + cmd - h : yabai tiling::window --use-temporary-ratio -0.05 --adjust-window-edge west;  yabai tiling::window --use-temporary-ratio -0.05 --adjust-window-edge east
    alt + shift + cmd - j : yabai tiling::window --use-temporary-ratio -0.05 --adjust-window-edge north; yabai tiling::window --use-temporary-ratio -0.05 --adjust-window-edge south
    alt + shift + cmd - k : yabai tiling::window --use-temporary-ratio  0.05 --adjust-window-edge north; yabai tiling::window --use-temporary-ratio  0.05 --adjust-window-edge south
    alt + shift + cmd - l : yabai tiling::window --use-temporary-ratio  0.05 --adjust-window-edge west;  yabai tiling::window --use-temporary-ratio  0.05 --adjust-window-edge east



    # focus window
    # alt - h : yabai -m window --focus west

    # swap managed window
    # shift + alt - h : yabai -m window --swap north

    # move managed window
    # shift + cmd - h : yabai -m window --warp east

    # balance size of windows
    # shift + alt - 0 : yabai -m space --balance

    # make floating window fill screen
    # shift + alt - up     : yabai -m window --grid 1:1:0:0:1:1

    # make floating window fill left-half of screen
    # shift + alt - left   : yabai -m window --grid 1:2:0:0:1:1

    # create desktop, move window and follow focus - uses jq for parsing json (brew install jq)
    # shift + cmd - n : yabai -m space --create && \
    #                   index="$(yabai -m query --spaces --display | jq 'map(select(."native-fullscreen" == 0))[-1].index')" && \
    #                   yabai -m window --space "${index}" && \
    #                   yabai -m space --focus "${index}"

    # fast focus desktop
    # cmd + alt - x : yabai -m space --focus recent
    # cmd + alt - 1 : yabai -m space --focus 1

    # send window to desktop and follow focus
    # shift + cmd - z : yabai -m window --space next; yabai -m space --focus next
    # shift + cmd - 2 : yabai -m window --space  2; yabai -m space --focus 2

    # focus monitor
    ctrl + alt - z  : yabai -m display --focus prev
    ctrl + alt - 3  : yabai -m display --focus 3

    # send window to monitor and follow focus
    # ctrl + cmd - c  : yabai -m window --display next; yabai -m display --focus next
    # ctrl + cmd - 1  : yabai -m window --display 1; yabai -m display --focus 1

    # move floating window
    # shift + ctrl - a : yabai -m window --move rel:-20:0
    # shift + ctrl - s : yabai -m window --move rel:0:20

    # increase window size
    # shift + alt - a : yabai -m window --resize left:-20:0
    # shift + alt - w : yabai -m window --resize top:0:-20

    # decrease window size
    # shift + cmd - s : yabai -m window --resize bottom:0:-20
    # shift + cmd - w : yabai -m window --resize top:0:20

    # set insertion point in focused container
    # ctrl + alt - h : yabai -m window --insert west

    # toggle window zoom
    # alt - d : yabai -m window --toggle zoom-parent
    # alt - f : yabai -m window --toggle zoom-fullscreen

    # toggle window split type
    # alt - e : yabai -m window --toggle split

    # float / unfloat window and center on screen
    # alt - t : yabai -m window --toggle float;\
    #           yabai -m window --grid 4:4:1:1:2:2

    # toggle sticky(+float), topmost, picture-in-picture
    # alt - p : yabai -m window --toggle sticky;\
    #           yabai -m window --toggle topmost;\
    #           yabai -m window --toggle pip

## 異常排除

### 無法切換桌面

**無法使用 [Cmd] + [Alt] + [n] 快捷鍵切換「桌面」（Desktop / Space）。**
可試著先用指令執行切換，籍此診斷：「是否導因起於『指令』亦無法正常運作？」。

    $ yabai -m space --focus 3

**無法使用「指令」切換桌面，終端機出現如下之錯誤回報：**

    $ yabai -m space --focus 3
    cannot focus space due to an error with the scripting-addition.

【異常排除作業】：

1. 務必確認「SPI： Disable」。
   csrutil status

【註】： 關閉 SPI 作業程序 ⋯⋯

https://blog.developer.money/%E9%97%9C%E9%96%89-mac-%E7%9A%84-sip-system-integrity-protection-8f679c4fdd9e

2.  重新安裝 scripting-addition，並重新啟動。

    sudo yabai --uninstall-sa && sudo yabai --install-sa
    sudo yabai --load-sa

### 無法使用浮動視窗

設定「某些 App 啟動時，使用浮動視窗」\*\*

    yabai -m rule --add app=SomeName manage=off

Ref: [set certain window to float mode #76](https://github.com/koekeishiya/yabai/issues/76)

# Yabai

<https://www.youtube.com/watch?v=mMV3LXQ3pKQ>&

[https://youtu.be/mMV3LXQ3pKQ](https://youtu.be/mMV3LXQ3pKQ)

<https://www.youtube.com/watch?v=JL1lz77YbUE>&

[https://youtu.be/JL1lz77YbUE](https://youtu.be/JL1lz77YbUE)

# 關閉 SIP（System Integrity Protection）

<https://blog.developer.money/%E9%97%9C%E9%96%89-mac-%E7%9A%84-sip-system-integrity-protection-8f679c4fdd9e>

## Install Yabai

Update newer “Command Lin e Tools”

    softwareupdate --all --install --force

If that doesn’t show any updates, run:

    sudo rm -rf /Library/Developer/CommandLineTools
    sudo xcode-select --install


    brew install koekeishiya/formulae/yabai

Logs will be found in /usr/local/var/log/yabai/yabai.[out|err].log

Open `System Preferences.app` and navigate to `Security & Privacy`, then
`Privacy`, then `Accessibility`. Click the lock icon at the bottom and enter
your password to allow changes to the list. Starting with
`brew services start yabai` will prompt the user to allow `yabai` accessibility
permissions. Check the box next to `yabai` to allow accessibility permissions.
Now install the scripting addition.

    # install the scripting addition
    sudo yabai --install-sa

    # if macOS Big Sur, load the scripting addition manually; follow instructions below to automate on startup
    sudo yabai --load-sa

To run yabai, simply start it.

    # start yabai
    brew services start yabai

To have launchd start koekeishiya/formulae/yabai now and restart at login:

    brew services start koekeishiya/formulae/yabai

# 快捷操作

<https://github.com/itgoyo/yabai-config>

**Focus window in a desktop (space)**

| **Action**  | **Key Combination** |
| ----------- | ------------------- |
| focus west  | cmd + h             |
| focus south | cmd + j             |
| focus north | cmd + k             |
| focus east  | cmd + l             |

**Move window by direction in a desktop (space)**

| **Action**           | **Key Combination** |
| -------------------- | ------------------- |
| Move window to left  | shift + cmd + h     |
| Move window up       | shift + cmd + j     |
| Move window down     | shift + cmd + k     |
| Move window to right | shift + cmd + l     |

**Resize windows**

| **Action**   | **Key Combination** |
| ------------ | ------------------- |
| Resize left  | shfit + cmd + h     |
| Resize down  | shfit + cmd + j     |
| Resize up    | shfit + cmd + k     |
| Resize right | shfit + cmd + l     |
| Equalise     | shfit + cmd + 0     |

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

- alt + hjkl 切換視窗的 focus
- alt + s focus 視窗全屏
- alt + e 切換回拼圖排列
- alt + shift + hjkl 移動 focus 視窗的位置
- alt + cmd + shift + hjkl 調整 focus 視窗的大小
- alt + r 旋轉所有視窗 90 度
- alt + shift + space focus 視窗懸浮（可以亂移動）
- alt + shift + 1234 把 focus 視窗送到 1234 的桌面（要先有桌面，必須手動新增）
- alt + shift + p n m 把 focus 視窗送到 p(上一個) n(下一個) m(最後切換的) 桌面，
  如果條件不成立將無動作。
- alt + p n 切換 focus 到 p(上一個) n(下一個) 視窗

## .yabairc

    #!/usr/bin/env sh

    # the scripting-addition must be loaded manually if
    # you are running yabai on macOS Big Sur. Uncomment
    # the following line to have the injection performed
    # when the config is executed during startup.
    #
    # for this to work you must configure sudo such that
    # it will be able to run the command without password

    sudo yabai --load-sa
    yabai -m signal --add event=dock_did_restart action="sudo yabai --load-sa"

    #YABAI STUFF
    # bsp or float (default: bsp)
    # yabai -m config layout bsp

    # My custom space names for my 3 monitor setup. These names are used in some of my scripts.
    yabai -m space 1 --label one
    yabai -m space 2 --label two
    yabai -m space 3 --label three

    # float system preferences. Most of these just diable Yabai form resizing them.
    # yabai -m rule --add app="系統偏好設定" manage=off
    # yabai -m rule --add app="GitKraken" manage=off
    # yabai -m rule --add app="LINE" manage=off
    # yabai -m rule --add app="Commander One" manage=off
    # yabai -m rule --add app="iTube Studio" manage=off
    # yabai -m rule --add app="啟動台" manage=off
    # yabai -m rule --add app="活動監視器" manage=off
    # yabai -m rule --add app="時光機" manage=off
    # yabai -m rule --add app="照片" manage=off
    # yabai -m rule --add app="預覽程式" manage=off
    # yabai -m rule --add app="影像擷取" manage=off
    # yabai -m rule --add app="行事曆" manage=off

    #find ~/Library/Parallels/Applications\ Menus/ -maxdepth 3 -type f | awk -F'/' '{ print $NF; }' | awk '{$1=$1};1' | sort | uniq | tr "\n" "\0" | xargs -0 -I{} yabai -m rule --add app="^{}\$" title=".*" manage=on

    ## Some random global settings
    #yabai -m config focus_follows_mouse          autoraise
    #yabai -m config focus_follows_mouse          on
    # New window spawns to the right if vertical split, or bottom if horizontal split
    yabai -m config window_placement second_child
    yabai -m config window_topmost off
    #yabai -m config window_shadow float
    yabai -m config window_opacity off
    yabai -m config window_opacity_duration 0.00
    yabai -m config active_window_opacity 1.0
    #yabai -m config normal_window_opacity        0.97
    #yabai -m config window_border                on | off

    ## WITH SIP ENABLED (Installed Limelight seperately, Don't need this)
    yabai -m config window_border off

    ## WTIH SIP DISABLED (Limelight build into Yabai, enable it here)
    #yabai -m config window_border on
    #yabai -m config window_border_width 3
    #yabai -m config active_window_border_color 0xFF40FF00
    #yabai -m config normal_window_border_color 0x00FFFFFF
    #yabai -m config insert_feedback_color        0xffd75f5f

    ## some other settings
    yabai -m config auto_balance off
    yabai -m config split_ratio 0.50
    # # set mouse interaction modifier key (default: fn)
    yabai -m config mouse_modifier ctrl
    # set modifier + right-click drag to resize window (default: resize)
    yabai -m config mouse_action2 resize
    # set modifier + left-click drag to resize window (default: move)
    yabai -m config mouse_action1 move

    # general space settings
    #yabai -m config focused_border_skip_floating  1
    #yabai -m config --space 3 layout             float

    ## Change how yabai looks
    yabai -m config layout bsp
    yabai -m config top_padding 2
    yabai -m config bottom_padding 2
    yabai -m config left_padding 2
    yabai -m config right_padding 2
    yabai -m config window_gap 10

    #Limelight addon (Kill it and start it each time Yabai starts)
    killall limelight &>/dev/null
    limelight &>/dev/null &

    # #Ubersicht widget bar stuff
    #yabai -m signal --add event=space_changed \
    #action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"nibar-spaces-primary-jsx\"'"
    #yabai -m signal --add event=display_changed \
    #action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"nibar-spaces-primary-jsx\"'"

    #yabai -m signal --add event=space_changed \
    #action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"nibar-spaces-secondary-jsx\"'"
    #yabai -m signal --add event=display_changed \
    #action="osascript -e 'tell application \"Übersicht\" to refresh widget id \"nibar-spaces-secondary-jsx\"'"

    # signals
    # yabai -m signal --add event=window_destroyed action="yabai -m query --windows --window &> /dev/null || yabai -m window --focus mouse"
    #yabai -m signal --add event=space_changed action="yabai -m window --focus $(yabai -m query --windows --window | jq ".id")"
    # yabai -m signal --add event=application_terminated action="yabai -m query --windows --window &> /dev/null || yabai -m window --focus mouse"

    #testing signals
    # yabai -m signal --add event=window_destroyed action="terminal-notifier -message 'window_destroyed'"
    # yabai -m signal --add event=application_terminated action="terminal-notifier -message 'application_terminated'"

    ## If I close the active window, focus on any other visible window.
    # yabai -m signal --add event=window_destroyed action="bash /Users/alanjui/.local/share/YabaiScripts/window-focus-on-destroy.sh"
    # yabai -m signal --add event=space_changed action="export CUR_ACTIVE_APP=\"iTerm2\""

    echo "yabai configuration loaded.."

    #END

## .skhdrc

    #SKHD STUFF
    # if you're having troubles finding key codes for a key just type
    # skhd --observe in a terminal and type a key.

    # hyper = Shift + Ctrl + Cmd(Window) + Alt(Option)

    # prevents skhd from monitoring events for listed processes.
    # .blacklist [
    #     "終端機"
    #     "iTerm2"
    #     "Google Chrome"
    # ]
    # .blacklist [
    # ]

    #==============================================================================
    # Restart Yabai
    hyper - r :
        /usr/bin/env osascript <<< \
            "display notification \"Restarting Yabai\" with title \"Yabai\""; \
        launchctl kickstart -k "gui/${UID}/homebrew.mxcl.yabai"

    ###################################################
    # Window
    ###################################################

    # focus a window by sequence (recent / previous / next)
    cmd - o : yabai -m window --focus recent
    cmd - p : yabai -m window --focus prev
    cmd - n : yabai -m window --focus next
    # = --> recent;  [ --> prev;  ] --> next
    cmd - 0x18 : yabai -m window --focus recent
    cmd - 0x21 : yabai -m window --focus prev
    cmd - 0x1E : yabai -m window --focus next

    # focus a window by direction
    cmd - h : yabai -m window --focus west
    cmd - j : yabai -m window --focus south
    cmd - k : yabai -m window --focus north
    cmd - l : yabai -m window --focus east

    # rotate focus window in desktop
    shift + cmd - r : yabai -m space --rotate 270
    cmd - r         : yabai -m space --rotate 270

    # # focus window through screen cyclely by direction
    # shift + ctrl + cmd - h : yabai -m query --spaces | jq -re ".[] | select(.visible == 1).index" | xargs -I{} yabai -m query --windows --space {} | jq -sre "add | sort_by(.display, .frame.x, .frame.y, .id) | nth(index(map(select(.focused == 1))) - 1).id" | xargs -I{} yabai -m window --focus {}

    # move window by direction (swap window)
    shift + cmd - h : yabai -m window --swap west
    shift + cmd - j : yabai -m window --swap south
    shift + cmd - k : yabai -m window --swap north
    shift + cmd - l : yabai -m window --swap east

    #--------------------------------------------------

    # toggle window split vertically or horizontally
    cmd + alt - t : yabai -m window --toggle split

    # toggle window to float / unfloat in desktop
    cmd + alt - f : yabai -m window --toggle float

    # toggle window to unfloat / foloat and center on screen
    cmd + alt - c : yabai -m window --toggle float;\
                    yabai -m window --grid 4:4:1:1:2:2

    # move floating window
    shift + cmd - w : yabai -m window --move rel:0:-20
    shift + cmd - s : yabai -m window --move rel:0:20
    shift + cmd - a : yabai -m window --move rel:-20:0
    shift + cmd - d : yabai -m window --move rel:20:0

    # toggle unfloat window to max size in desktop
    cmd + alt - z  : yabai -m window --toggle zoom-fullscreen

    # toggle window to zoon in/out screen
    ctrl + cmd - z : yabai -m window --toggle native-fullscreen

    #--------------------------------------------------

    # Resize width of a window
    cmd + alt - h : \
        yabai -m window --resize left:-20:0 ; \
        yabai -m window --resize right:-20:0

    cmd + alt - l : \
        yabai -m window --resize right:20:0 ; \
        yabai -m window --resize left:20:0

    # Resize height of a window
    cmd + alt - j : \
        yabai -m window --resize bottom:0:20 ; \
        yabai -m window --resize top:0:20

    cmd + alt - k : \
        yabai -m window --resize top:0:-20 ; \
        yabai -m window --resize bottom:0:-20

    # Equalize size of windows (0x18 --> '=')
    cmd + alt - 0 : yabai -m space --balance
    cmd + alt - 0x18 : yabai -m space --balance

    #--------------------------------------------------

    # create a window: open terminal
    # hyper - return : /Applications/iTerm.app/Contents/MacOS/iTerm2
    hyper - return : ~/.config/yabai/scripts/open_iterm2.sh

    # close a window (exit active application)
    hyper - backspace : $(yabai -m window $(yabai -m query --windows --window | jq -re ".id") --close)

    ###################################################
    # Desktop
    ###################################################

    # focus desktop by sequence (n: 1 --> 2 --> 3; p: 3 --> 2 --> 1)
    ctrl + cmd - o : yabai -m space --focus recent
    ctrl + cmd - p : yabai -m space --focus prev
    ctrl + cmd - n : yabai -m space --focus next
    # = --> recent;  [ --> prev;  ] --> next
    ctrl + cmd - 0x18 : yabai -m space --focus recent
    ctrl + cmd - 0x21 : yabai -m space --focus prev
    ctrl + cmd - 0x1E : yabai -m space --focus next

    # focus desktop by number
    ctrl + cmd - 1 : yabai -m space --focus 1
    ctrl + cmd - 2 : yabai -m space --focus 2
    ctrl + cmd - 3 : yabai -m space --focus 3
    ctrl + cmd - 4 : yabai -m space --focus 4
    ctrl + cmd - 5 : yabai -m space --focus 5
    ctrl + cmd - 6 : yabai -m space --focus 6
    ctrl + cmd - 7 : yabai -m space --focus 7
    ctrl + cmd - 8 : yabai -m space --focus 8
    ctrl + cmd - 9 : yabai -m space --focus 9
    ctrl + cmd - 0 : yabai -m space --focus 0

    # move window to prev/next desktop (space)
    # o --> recent;  p --> prev;  n --> next
    shift + ctrl + cmd - o : ~/.config/yabai/scripts/moveWindowToDesktop.sh recent
    shift + ctrl + cmd - p : ~/.config/yabai/scripts/moveWindowToDesktop.sh prev
    shift + ctrl + cmd - n : ~/.config/yabai/scripts/moveWindowToDesktop.sh next
    # = --> recent;  [ --> prev;  ] --> next
    shift + ctrl + cmd - 0x18 : ~/.config/yabai/scripts/moveWindowToDesktop.sh recent
    shift + ctrl + cmd - 0x21 : ~/.config/yabai/scripts/moveWindowToDesktop.sh prev
    shift + ctrl + cmd - 0x1E : ~/.config/yabai/scripts/moveWindowToDesktop.sh next

    # move window to desktop by number
    shift + ctrl + cmd - 1 : ~/.config/yabai/scripts/moveWindowToDesktop.sh 1
    shift + ctrl + cmd - 2 : ~/.config/yabai/scripts/moveWindowToDesktop.sh 2
    shift + ctrl + cmd - 3 : ~/.config/yabai/scripts/moveWindowToDesktop.sh 3
    shift + ctrl + cmd - 4 : ~/.config/yabai/scripts/moveWindowToDesktop.sh 4
    shift + ctrl + cmd - 5 : ~/.config/yabai/scripts/moveWindowToDesktop.sh 5
    shift + ctrl + cmd - 6 : ~/.config/yabai/scripts/moveWindowToDesktop.sh 6
    shift + ctrl + cmd - 7 : ~/.config/yabai/scripts/moveWindowToDesktop.sh 7
    shift + ctrl + cmd - 8 : ~/.config/yabai/scripts/moveWindowToDesktop.sh 8
    shift + ctrl + cmd - 9 : ~/.config/yabai/scripts/moveWindowToDesktop.sh 9
    shift + ctrl + cmd - 0 : ~/.config/yabai/scripts/moveWindowToDesktop.sh 0

    # warp desktop
    shift + ctrl + cmd - h : yabai -m window --warp west
    shift + ctrl + cmd - j : yabai -m window --warp south
    shift + ctrl + cmd - k : yabai -m window --warp north
    shift + ctrl + cmd - l : yabai -m window --warp east

    # flip the layout of desktop horizontally
    shift + ctrl + cmd - x : yabai -m space --mirror x-axis

    # flip the layout of desktop vertically
    shift + ctrl + cmd - y : yabai -m space --mirror y-axis

    #--------------------------------------------------

    # creat a desktop on current screen
    ctrl + cmd - c         : yabai -m space --create
    # destroy desktop on current screen
    ctrl + cmd - backspace : yabai -m space --destroy

    # create desktop, move focus window to created desktop and follow focus
    shift + ctrl + cmd - c : yabai -m space --create && \
                                 index="$(yabai -m query --spaces --display \
                                 | jq 'map(select(."native-fullscreen" == 0))[-1].index')" && \
                             yabai -m window --space "${index}" && \
                             yabai -m space --focus "${index}"

    # destroy empty spaces
    shift + ctrl + cmd - backspace : echo "destroy empty spaces";\
                                     yabai -m query --spaces \
                                     | jq 'reverse | .[] | select((.windows | length) == 0) | .index' \
                                     | xargs -I{} yabai -m space {} --destroy \;

    ###################################################
    # Screen
    ###################################################

    # focus screen by swquence
    ctrl + cmd + alt - o : yabai -m display --focus recent
    ctrl + cmd + alt - p : yabai -m display --focus prev
    ctrl + cmd + alt - n : yabai -m display --focus next
    ctrl + cmd + alt - m : yabai -m display --focus last

    # focus screen by number
    ctrl + cmd + alt - 1 : yabai -m display --focus 1
    ctrl + cmd + alt - 2 : yabai -m display --focus 2
    ctrl + cmd + alt - 3 : yabai -m display --focus 3

    # move window to prev/next screen
    # shift + ctrl + cmd + alt - p : /Users/alanjui/.config/yabai/scripts/moveWindowToPrevDisplay.sh
    # shift + ctrl + cmd + alt - n : /Users/alanjui/.config/yabai/scripts/moveWindowToNextDisplay.sh
    # o --> recent;  p --> prev;  n --> next
    shift + ctrl + cmd + alt - o : ~/.config/yabai/scripts/moveWindowToScreen.sh recent
    shift + ctrl + cmd + alt - p : ~/.config/yabai/scripts/moveWindowToScreen.sh prev
    shift + ctrl + cmd + alt - n : ~/.config/yabai/scripts/moveWindowToScreen.sh next
    # = --> recent;  [ --> prev;  ] --> next
    shift + ctrl + cmd + alt - 0x18 : ~/.config/yabai/scripts/moveWindowToScreen.sh recent
    shift + ctrl + cmd + alt - 0x21 : ~/.config/yabai/scripts/moveWindowToScreen.sh prev
    shift + ctrl + cmd + alt - 0x1E : ~/.config/yabai/scripts/moveWindowToScreen.sh next

    # move window to screen by number
    shift + ctrl + cmd + alt - 1 :~/.config/yabai/scripts/moveWindowToScreen.sh 1
    shift + ctrl + cmd + alt - 2 :~/.config/yabai/scripts/moveWindowToScreen.sh 2
    shift + ctrl + cmd + alt - 3 :~/.config/yabai/scripts/moveWindowToScreen.sh 3

# 異常排除

**無法使用 [Cmd] + [Alt] + [n] 快捷鍵切換「桌面」（Desktop / Space）。** 可試著
先用指令執行切換，籍此診斷：「是否導因起於『指令』亦無法正常運作？」。

    yabai -m space --focus 3

**無法使用「指令」切換桌面，終端機出現如下之錯誤回報：**

    $ yabai -m space --focus 3
    cannot focus space due to an error with the scripting-addition.

【異常排除作業】：

1. 務必確認「SPI： Disable」。 csrutil status

【註】： 關閉 SPI 作業程序 ⋯⋯

<https://blog.developer.money/%E9%97%9C%E9%96%89-mac-%E7%9A%84-sip-system-integrity-protection-8f679c4fdd9e>

2. 重新安裝 scripting-addition，並重新啟動。

    sudo yabai --uninstall-sa && sudo yabai --install-sa sudo yabai --load-sa

**設定「某些 App 啟動時，使用浮動視窗」**

    yabai -m rule --add app=SomeName manage=off

Ref:
[set certain window to float mode #76](https://github.com/koekeishiya/yabai/issues/76)

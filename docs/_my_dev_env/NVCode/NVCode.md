# NVCode

![NVCode pic](https://raw.githubusercontent.com/ChristianChiarulli/nvim/master/utils/images/nvim.png)




https://github.com/ChristianChiarulli/nvim



https://www.chrisatmachine.com/Neovim/22-vscodium-neovim/



https://www.youtube.com/watch?v=g4dXZ0RQWdw&


[https://youtu.be/g4dXZ0RQWdw](https://youtu.be/g4dXZ0RQWdw)



https://www.youtube.com/watch?v=g4dXZ0RQWdw&&t=639s


[https://youtu.be/g4dXZ0RQWdw?t=639s](https://youtu.be/g4dXZ0RQWdw?t=639s)




# 準備工作

更新 Command Line Tools

    softwareupdate --all --install --force


    sudo rm -rf /Library/Developer/CommandLineTools
    sudo xcode-select --install



# 安裝作業


## 安裝 Neovim 0.5

**在 macOS 安裝**

已安裝 NVim 0.4.4

    brew unlink neovim


    # Sometimes you need to update
    brew install --HEAD neovim ≈
    # Sometimes you need to update
    brew upgrade neovim --fetch-HEAD

**在 Ubuntu 安裝**

    curl -l https://github.com/neovim/neovim/releases/download/nightly/nvim.appimage > /tmp/nvim.appimage
    
    sudo mv /tmp/nvim.appimage /usr/local/bin/nvim
    
    sudo chmod +x /usr/local/bin/nvim



## 安裝設定檔


    cd ~/.config/
    mv nvim nvim.old


    git clone https://github.com/ChristianChiarulli/nvim.git ~/.config/nvim


~/Library/Application\ Support/Code/User/keybindings.json

    [
      {
        // 以 《J》《J》鍵等同按《ESC》鍵
        "command": "vscode-neovim.compositeEscape1",
        "key": "j",
        "when": "neovim.mode == insert && editorTextFocus",
        "args": "j"
      },
    ...




## 參考文件

**【以 Vim 模式在 VS Code 中操作】：**

https://www.barbarianmeetscoding.com/blog/2019/02/08/boost-your-coding-fu-with-vscode-and-vim


**【讓我們在 Nvim 中學著用 lua 客製化吧】：**


https://teukka.tech/luanvim.html



https://www.tecmint.com/install-lua-in-centos-ubuntu-linux/



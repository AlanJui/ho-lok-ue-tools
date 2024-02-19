# VS Code Vim Setting

## settings.json


      // Editor
        "editor.tabSize": 2,
        "editor.minimap.enabled": false,
        "editor.fontSize": 18,
        "editor.fontFamily": "Menlo, Monaco, 'Courier New', monospace, 'SauceCodePro Nerd Font'",
        
        // Vim 
        "editor.suggestSelection": "first",
        "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
        "python.jediEnabled": false,
       
        // Python
        "python.linting.pylintArgs": [
            "--load-plugins",
            "--errors-only", 
            "pylint_django"
        ],
     
        // Django
        "emmet.includeLanguages": {
            "django-html": "html"
        },
        "files.associations": {
            "**/templates/*.html": "django-html",
            "**/templates/*": "django-txt",
            "**/requirements{/**,*}.{txt,in}": "pip-requirements"
        },
        // VIM Ref: https://github.com/VSCodeVim/Vim
        "editor.lineNumbers": "relative",
        "vim.enableNeovim": true,
        "vim.neovimPath": "/usr/local/bin/nvim",
        "vim.easymotion": true,
        "vim.sneak": true,
        "vim.incsearch": true,
        "vim.useSystemClipboard": true,
        "vim.useCtrlKeys": true,
        "vim.hlsearch": true,
        // "vim.leader": "<space>",
        "vim.leader": ",",
        "vim.insertModeKeyBindings": [
            {
                "before": ["j", "j"],
                "after": ["<Esc>"]
            },
            {
                "before": ["<leader>", "<leader>"],
                "after": ["<Esc>", "A", ","]
            },
            {
                "before": ["<leader>", "."],
                "after": ["<Right>", ","]
            },
            {
                "before": [":", ":"],
                "after": ["<Esc>", "A", ":"]
            },
            {
                "before": ["<leader>", "w"],
                "commands": [
                    ":w"
                ]
            } 
        ],
        "vim.normalModeKeyBindingsNonRecursive": [
            {
                "before": ["<leader>", "d"],
                "after": ["d", "d"]
            },
            {
                "before": ["<C-n>"],
                "commands": [":nohl"]
            },
            {
                "before": ["<leader>", "w"],
                "commands": [
                    ":w"
                ]
            } 
        ],
        "vim.visualModeKeyBindingsNonRecursive": [
            {
                "before": ["<leader>", "w"],
                "commands": [
                    ":w"
                ]
            },
            {
                "before": [
                    ">"
                ],
                "commands": [
                    "editor.action.indentLines"
                ]
            },
            {
                "before": [
                    "<"
                ],
                "commands": [
                    "editor.action.outdentLines"
                ]
            },
        ],
        "vim.handleKeys": {
            "<C-a>": false,
            "<C-f>": false
        }



## launch.json


            {
                "name": "Python：Django",
                "type": "python",
                "request": "launch",
                "program": "${workspaceFolder}/manage.py",
                "args": [
                    "runserver",
                    "0.0.0.0:9000",
                    "--noreload"
                ],
                "django": true
            },
    



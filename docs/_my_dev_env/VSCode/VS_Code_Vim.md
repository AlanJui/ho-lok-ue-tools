---
tags: ["Vim", "VSCode"]
---

# VS Code Vim

settings.json

        // Vim
        "editor.lineNumbers": "relative",
        "vim.enableNeovim": true,
        "vim.neovimPath": "/usr/local/bin/nvim",
        "vim.easymotion": true,
        "vim.sneak": true,
        "vim.incsearch": true,
        "vim.useSystemClipboard": true,
        "vim.useCtrlKeys": true,
        "vim.hlsearch": true,
        "vim.leader": ",",
        "vim.insertModeKeyBindings": [
            {
                "before": [
                    "j",
                    "j"
                ],
                "after": [
                    "<Esc>"
                ]
            },
            {
                "before": [
                    "<leader>",
                    "o"
                ],
                "after": [
                    "<Esc>",
                    "o"
                ]
            },
            {
                "before": [
                    "<leader>",
                    "O"
                ],
                "after": [
                    "<Esc>",
                    "O"
                ]
            },
            {
                "before": [
                    ",",
                    ","
                ],
                "after": [
                    "<Esc>",
                    "A",
                    ","
                ]
            },
            {
                "before": [
                    "<Leader>",
                    "<Leader>",
                    ","
                ],
                "after": [
                    "<Right>",
                    ","
                ]
            },
            {
                "before": [
                    "<leader>",
                    "."
                ],
                "after": [
                    "<Right>",
                    "."
                ]
            },
            {
                "before": [
                    ":",
                    ":"
                ],
                "after": [
                    "<Right>",
                    ":"
                ]
            },
            {
                "before": [
                    "<leader>",
                    "w"
                ],
                "commands": [
                    ":w"
                ]
            }
        ],
        "vim.normalModeKeyBindingsNonRecursive": [
            {
                "before": [
                    "<leader>",
                    "d"
                ],
                "after": [
                    "d",
                    "d"
                ]
            },
            {
                "before": [
                    "<C-n>"
                ],
                "commands": [
                    ":nohl"
                ]
            },
            {
                "before": [
                    "<leader>",
                    "w",
                    "-"
                ],
                "commands": [
                    ":split"
                ]
            },
            {
                "before": [
                    "<leader>",
                    "w",
                    "_"
                ],
                "commands": [
                    ":vsplit"
                ]
            },
            {
                "before": [
                    "<leader>",
                    "n"
                ],
                "commands": [
                    ":tabnext"
                ]
            },
            {
                "before": [
                    "<leader>",
                    "p"
                ],
                "commands": [
                    ":tabprevious"
                ]
            },
            {
                "before": [
                    "<space>"
                ],
                "commands": [
                    "vspacecode.space"
                ]
            },
            {
                "before": [
                    ","
                ],
                "commands": [
                    "vspacecode.space",
                    {
                        "command": "whichkey.triggerKey",
                        "args": "m"
                    }
                ]
            }
        ],
        "vim.visualModeKeyBindingsNonRecursive": [
            {
                "before": [
                    "<leader>",
                    "w"
                ],
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
            {
                "before": [
                    "<space>"
                ],
                "commands": [
                    "vspacecode.space"
                ]
            },
            {
                "before": [
                    ","
                ],
                "commands": [
                    "vspacecode.space",
                    {
                        "command": "whichkey.triggerKey",
                        "args": "m"
                    }
                ]
            }
        ],
        "vim.handleKeys": {
            "<C-a>": false,
            "<C-f>": false
        },
        "window.zoomLevel": 0,

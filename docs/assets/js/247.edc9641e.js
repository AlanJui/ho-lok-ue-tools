(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{535:function(n,e,t){"use strict";t.r(e);var s=t(10),i=Object(s.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"coc-nvim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coc-nvim"}},[n._v("#")]),n._v(" coc-nvim")]),n._v(" "),e("p",[n._v("https://github.com/neoclide/coc.nvim")]),n._v(" "),e("h1",{attrs:{id:"安裝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安裝"}},[n._v("#")]),n._v(" 安裝")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("透過 vim-plug 進行安裝")])]),n._v(" "),e("li",[e("p",[n._v("透過 vim command: CocInstall 安裝下列 coc extension")]),n._v(" "),e("ul",[e("li",[n._v("coc-json")]),n._v(" "),e("li",[n._v("coc-lists")]),n._v(" "),e("li",[n._v("coc-emmet")]),n._v(" "),e("li",[n._v("coc-snippets")]),n._v(" "),e("li",[n._v("兼容 VS Code Snippets 之 JEST Engine")]),n._v(" "),e("li",[n._v("coc-ultisnips")]),n._v(" "),e("li",[n._v("coc-html")]),n._v(" "),e("li",[n._v("coc-css")]),n._v(" "),e("li",[n._v("coc-tsserver")]),n._v(" "),e("li",[n._v("coc-git")]),n._v(" "),e("li",[n._v("coc-yank")]),n._v(" "),e("li",[n._v("coc-highlight")])]),n._v(" "),e("p",[n._v("$ npm i jest --save-dev")])])]),n._v(" "),e("h1",{attrs:{id:"設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定"}},[n._v("#")]),n._v(" 設定")]),n._v(" "),e("h2",{attrs:{id:"nvim-設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nvim-設定"}},[n._v("#")]),n._v(" nvim 設定")]),n._v(" "),e("p",[n._v("配合用 python packages")]),n._v(" "),e("ul",[e("li",[n._v("pynvim")]),n._v(" "),e("li",[n._v("pylint")]),n._v(" "),e("li",[n._v("autopep8")]),n._v(" "),e("li",[n._v("move2trash")])]),n._v(" "),e("h2",{attrs:{id:"coc-nvim-設定檔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coc-nvim-設定檔"}},[n._v("#")]),n._v(" coc-nvim 設定檔")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("~/.config/nvim/coc-settings.json\n")])])]),e("ul",[e("li",[n._v("可用 :CocConfig 或 C ，編輯設定檔")]),n._v(" "),e("li",[n._v("需先安裝 coc extensions (plugin)")])]),n._v(" "),e("p",[n._v("~/.config/nvim/coc-settings.json")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('{\n    "suggest.noselect": false,\n    "snippets.loadFromExtensions": true,\n    "snippets.ultisnips.enable": true,\n    "snippets.textmateSnippetsRoots": ["~/.config/nvim/snippets"],\n    "snippets.userSnippetsDirectory": "~/.config/coc/ultisnips",\n    "snippets.snipmate.enable": false,\n    "snippets.extends": {\n      "javascript": ["javascript"],\n      "html": ["html"],\n      "htmldjango": ["htmldjango", "html"]\n  }\n}\n')])])]),e("h2",{attrs:{id:"coc-snippets-安裝與使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coc-snippets-安裝與使用"}},[n._v("#")]),n._v(" coc-snippets 安裝與使用")]),n._v(" "),e("p",[n._v("在 coc-nvim 使用 snippets ，可透過 coc-nvim extension（擴充套件）： coc-snippets 達成。")]),n._v(" "),e("p",[n._v("【參考文件】： https://github.com/neoclide/coc-snippets")]),n._v(" "),e("p",[e("strong",[n._v("安裝操作")])]),n._v(" "),e("p",[n._v("安裝 coc-nvim extension：coc-snippets。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocInstall coc-snippets\n")])])]),e("p",[e("strong",[n._v("取得 Snippets 來源")])]),n._v(" "),e("p",[n._v("為配合 coc-snippets 的使用， snippets 來源，可透過安裝如下之 vim plug 取得。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("Plug 'honza/vim-snippets'\n")])])]),e("p",[n._v("vim-snippets 的 snippets 檔案存放路徑：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("~/.local/share/nvim/plugged/vim-snippets/snippets/\n")])])]),e("p",[e("strong",[n._v("使用 VSCode snippet")])]),n._v(" "),e("p",[n._v("（1）欲使用 VSCode snippets，需要先安裝 coc-snippets。")]),n._v(" "),e("p",[n._v("（2）接下來則需安裝 coc-nvim extension：vscode-jest-snippets")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocInstall https://github.com/andys8/vscode-jest-snippets\n")])])]),e("p",[n._v("【註】：若要改用 vim-plug 安裝 coc-nvim extension：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("Plug 'https://github.com/andys8/vscode-jest-snippets.git'\n")])])]),e("p",[n._v("（3）設定 VSCode Snippets 存放處。")]),n._v(" "),e("p",[n._v("於 coc-settings.json 檔案，加入 snippets.textmateSnippetsRoots 設定：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('  "snippets.textmateSnippetsRoots": [ \n    "~/Library/Application Support/Code/User/snippets",\n    "~/.config/nvim/snippets/vs_code"\n  ],\n')])])]),e("p",[e("strong",[n._v("依據目前編輯檔案類型（filetype），查詢可用之 Snippets")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocList snippets\n")])])]),e("p",[e("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_EA74C7D56FABDAE19AF2C81175E8A1B9447B4E7814C4FA0314F67A2D7BA4BD93_1574651648943_image.png",alt:""}})]),n._v(" "),e("p",[e("strong",[n._v("依據目前編輯檔案類型（filetype），打開相關可用之 Snippets 設定檔")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocCommand snippets.openSnippetFiles\nchoose snippet file::\n1. /Users/alanjui/.config/coc/ultisnips/html.snippets\n2. /Users/alanjui/.local/share/nvim/plugged/vim-snippets/UltiSnips/html.snippets\n3. /Users/alanjui/.local/share/nvim/plugged/vim-snippets/UltiSnips/html_minimal.snippets\n4. /Users/alanjui/.local/share/nvim/plugged/vim-snippets/UltiSnips/htmldjango.snippets\n5. /Users/alanjui/Library/Application Support/Code/User/snippets/html.json\nType number and <Enter> or click with mouse (empty cancels):\n")])])]),e("p",[e("strong",[n._v("個人客製化Snippets，檔案目錄路徑(UltiSnips)")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("~/.config/coc/ultisnips/\n")])])]),e("ul",[e("li",[n._v("htmldjango.snippets")]),n._v(" "),e("li",[n._v("html.snippets")]),n._v(" "),e("li",[n._v("css.snippets")]),n._v(" "),e("li",[n._v("javascript.snippets")])]),n._v(" "),e("p",[n._v("在 nvim 查詢已安裝之 snippet 檔案，及其存放路徑處：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocCommand snippets.openSnippetFiles\nchoose snippet file::\n1. /Users/alanjui/.config/nvim/snippets/ultisnips/html_minimal.snippets\n2. /Users/alanjui/.config/nvim/snippets/ultisnips/html.snippets\n3. /Users/alanjui/.local/share/nvim/plugged/vim-snippets/UltiSnips/html.snippets\n4. /Users/alanjui/.local/share/nvim/plugged/vim-snippets/UltiSnips/html_minimal.snippets\n5. /Users/alanjui/.config/nvim/snippets/vs_code/html.json\nType number and <Enter> or click with mouse (empty cancels):\n")])])]),e("h1",{attrs:{id:"常用指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[n._v("#")]),n._v(" 常用指令")]),n._v(" "),e("h2",{attrs:{id:"設定檔-coc-settings-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定檔-coc-settings-json"}},[n._v("#")]),n._v(" 設定檔（coc-settings.json)")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocConfig\n")])])]),e("h2",{attrs:{id:"cocinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cocinfo"}},[n._v("#")]),n._v(" CocInfo")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocInfo\n")])])]),e("h2",{attrs:{id:"marketplace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#marketplace"}},[n._v("#")]),n._v(" Marketplace")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocList marketplace\n\n\n:CocList marketplace python\n")])])]),e("h2",{attrs:{id:"snippets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snippets"}},[n._v("#")]),n._v(" Snippets")]),n._v(" "),e("p",[e("strong",[n._v("有那些 snippets 可用")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocList snippets\n")])])]),e("p",[e("strong",[n._v("進行設定檔編輯")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocCommand snippets.editSnippets\n\n\n\n:CocCommand snippets.openSnippetFiles\n")])])]),e("h1",{attrs:{id:"擴充套件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#擴充套件"}},[n._v("#")]),n._v(" 擴充套件")]),n._v(" "),e("p",[n._v("https://github.com/neoclide/coc.nvim/wiki/Using-coc-extensions")]),n._v(" "),e("h2",{attrs:{id:"install-extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-extensions"}},[n._v("#")]),n._v(" Install extensions")]),n._v(" "),e("p",[n._v("Using "),e("code",[n._v(":CocInstall")]),n._v(":")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocInstall coc-json coc-css\n")])])]),e("h2",{attrs:{id:"uninstall-coc-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-coc-extension"}},[n._v("#")]),n._v(" Uninstall coc extension")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":CocUninstall coc-css\n")])])]),e("h2",{attrs:{id:"manage-extensions-with-coclist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manage-extensions-with-coclist"}},[n._v("#")]),n._v(" Manage extensions with CocList")]),n._v(" "),e("p",[n._v("Run command:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("CocList extensions\n")])])]),e("p",[n._v("to open CocList buffer, which looks like:")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/251450/45303659-e475d380-b548-11e8-9671-8a3e8e116db4.png",alt:"screen shot 2018-09-10 at 10 28 06 pm"}})]),n._v(" "),e("ul",[e("li",[e("code",[n._v("?")]),n._v(" means invalid extension")]),n._v(" "),e("li",[e("code",[n._v("*")]),n._v(" means extension is activated")]),n._v(" "),e("li",[e("code",[n._v("+")]),n._v(" means extension is loaded")]),n._v(" "),e("li",[e("code",[n._v("-")]),n._v(" means extension is disabled")])]),n._v(" "),e("p",[n._v("Supported actions (hit tab to activate action menu):")]),n._v(" "),e("ul",[e("li",[e("code",[n._v("toggle")]),n._v(" default action. activate/deactivate selected extension(s).")]),n._v(" "),e("li",[e("code",[n._v("enable")]),n._v(": enable selected extension(s).")]),n._v(" "),e("li",[e("code",[n._v("disable")]),n._v(": disable selected extension(s).")]),n._v(" "),e("li",[e("code",[n._v("reload")]),n._v(": reload selected extension(s).")]),n._v(" "),e("li",[n._v("uninstall`: remove selected extension(s).")]),n._v(" "),e("li",[e("code",[n._v("lock")]),n._v(": toggle lock of extension, locked extension won't be updated by "),e("code",[n._v(":CocUpdate")])])]),n._v(" "),e("h1",{attrs:{id:"vim設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim設定"}},[n._v("#")]),n._v(" Vim設定")]),n._v(" "),e("h2",{attrs:{id:"設定-htmldjango"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定-htmldjango"}},[n._v("#")]),n._v(" 設定 htmldjango")]),n._v(" "),e("p",[n._v("https://stackoverflow.com/questions/3853028/how-to-force-vim-to-syntax-highlight-a-file-as-html")]),n._v(" "),e("p",[e("strong",[n._v("在 Vim Command Line 進行即時設定：")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(":set syntax=html\n")])])]),e("p",[e("strong",[n._v("在「Vim設定檔（~/.vimrc）」進行永久設定：")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("autocmd BufNewFile,BufRead *.html set filetype = htmldjango\n")])])]),e("h2",{attrs:{id:"強迫將某類檔案-以-html-語法處理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#強迫將某類檔案-以-html-語法處理"}},[n._v("#")]),n._v(" 強迫將某類檔案，以 html 語法處理")]),n._v(" "),e("p",[n._v("下例，將副檔名為：ezt 類型檔案，檔案內容中之「語法解析」，視作 html 檔案處理。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("au BufReadPost *.ezt set syntax=html\n")])])]),e("h1",{attrs:{id:"參考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#參考"}},[n._v("#")]),n._v(" 參考")]),n._v(" "),e("h2",{attrs:{id:"init-vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init-vim"}},[n._v("#")]),n._v(" init.vim")]),n._v(" "),e("p",[e("strong",[n._v("~/.config/nvim/init.vim")])]),n._v(" "),e("hr"),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('""" Vim-Plug\ncall plug#begin(\'~/.local/share/nvim/plugged\')\n\nPlug \'scrooloose/nerdtree\'\nPlug \'neoclide/coc.nvim\', {\'branch\': \'release\'}\n\nPlug \'vim-airline/vim-airline\'\n\ncall plug#end()\n\n"======================================================================\n" 快速鍵設定\n\n" 進入「貼上（Paste）」模式\nset pastetoggle=<F2>\n\n" 設定 Leader 鍵\nlet mapleader = ","\nset timeout timeoutlen=1500\n\n" 行號顯示\nnmap <leader>ns :set nu<cr>\nnmap <leader>nr :set relativenumber<cr>\n\n" 設定檔變更與重啟\nnmap <Leader>i :tabnew ~/.config/nvim/init.vim<CR>\nnmap <Leader>I :source ~/.config/nvim/init.vim<CR>\nnmap <Leader>s :source %<CR>\n\n" 儲存檔案\nnmap <leader>w :update<CR>\n\n" 退出系統\nnmap <leader>q :quit<CR>\nnmap <leader>Q :qa!<CR>\n\n\n" NERDTree\nnmap \\ :NERDTreeToggle<CR>\n\n\n"----------------------------------------------------------------------\nimap jj <Esc>\n\nimap <leader><leader> <Esc>A,\nimap <C-,> <Right>,<Left>\n\nimap :: <Esc>A:\nimap <C-:> <Right>:<Left>\n\nimap ;; <Esc>A;\n\nimap <leader>O <Esc>O\nimap <leader>o <Esc>o\n\n" 拆疊／展開開關\nnmap <Space> za\n\n"----------------------------------------------------------------------\n" 搬移文字\n\nnnoremap <M-j> :m .+1<CR>==\nnnoremap <M-k> :m .-2<CR>==\ninoremap <M-j> <Esc>:m .+1<CR>==gi\ninoremap <M-k> <Esc>:m .-2<CR>==gi\nvnoremap <M-j> :m \'>+1<CR>gv=gv\nvnoremap <M-k> :m \'<-2<CR>gv=gv\n\n\n"----------------------------------------------------------------------\n""" Environment Configurations\nset mouse=a\nset ruler laststatus=2 showcmd showmode\nset list listchars=trail:»,tab:»-\nset fillchars+=vert:\\ \nset wrap breakindent\nset encoding=utf-8\nset number\nset relativenumber\n\n\n""" Python3 VirtualEnv\n"let g:python3_host_prog = expand(\'~/.config/nvim/env/bin/python\')\n"let g:python3_host_prog = \'/home/alanjui/.pyenv/versions/neovim3/bin/python\'\n\n""" Coloring\nsyntax on\nhighlight Pmenu guibg=white guifg=black gui=bold\nhighlight Comment gui=bold\nhighlight Normal gui=none\nhighlight NonText guibg=none\n\n" Opaque Background (Comment out to use terminal\'s profile)\nset termguicolors\n\n" Transparent Background (For i3 and compton)\nhighlight Normal guibg=NONE ctermbg=NONE\nhighlight LineNr guibg=NONE ctermbg=NONE\n\n""" Other Configurations\nfiletype plugin indent on\nset tabstop=2 softtabstop=2 shiftwidth=2 expandtab smarttab autoindent\nset incsearch ignorecase smartcase hlsearch\nset title\n\n\n""" Plugin Configurations\n\n\n"NERDTree\nmap \\ :NERDTreeToggle<CR>\n\n\n"=====================================================\n""" COC Setup\n\n\n"if hidden is not set, TextEdit might fail.\nset hidden\n\n" Some servers have issues with backup files, see #649\nset nobackup\nset nowritebackup\n\n" Better display for messages\nset cmdheight=2\n\n" You will have bad experience for diagnostic messages when it\'s default 4000.\nset updatetime=300\n\n" don\'t give |ins-completion-menu| messages.\nset shortmess+=c\n\n" always show signcolumns\nset signcolumn=yes\n\n" Use command \':verbose imap <tab>\' to make sure tab is not mapped by other plugin.\n" use <tab> for trigger completion and navigate to the next complete item\nfunction! s:check_back_space() abort\n  let col = col(\'.\') - 1\n  return !col || getline(\'.\')[col - 1]  =~ \'\\s\'\nendfunction\n\ninoremap <silent><expr> <Tab>\n      \\ pumvisible() ? "\\<C-n>" :\n      \\ <SID>check_back_space() ? "\\<Tab>" :\n      \\ coc#refresh()\n\n" Use <c-space> to trigger completion.\ninoremap <silent><expr> <c-space> coc#refresh()\n\n" Use <Tab> and <S-Tab> to navigate the completion list:\ninoremap <expr> <Tab> pumvisible() ? "\\<C-n>" : "\\<Tab>"\ninoremap <expr> <S-Tab> pumvisible() ? "\\<C-p>" : "\\<S-Tab>"\n\n" Use <cr> to confirm completion:\n" `<C-g>u` means break undo chain at current position.\n" Coc only does snippet and additional edit on confirm.\ninoremap <expr> <cr> pumvisible() ? "\\<C-y>" : "\\<C-g>u\\<CR>"\n\n" To make <cr> select the first completion item and confirm the completion when no item has been selected:\ninoremap <silent><expr> <cr> pumvisible() ? coc#_select_confirm() : "\\<C-g>u\\<CR>"\n\n" Close the preview window when completion is done.\nautocmd! CompleteDone * if pumvisible() == 0 | pclose | endif\n\n\n" Use `[c` and `]c` to navigate diagnostics\nnmap <silent> [c <Plug>(coc-diagnostic-prev)\nnmap <silent> ]c <Plug>(coc-diagnostic-next)\n\n" Remap keys for gotos\nnmap <silent> gd <Plug>(coc-definition)\nnmap <silent> gy <Plug>(coc-type-definition)\nnmap <silent> gi <Plug>(coc-implementation)\nnmap <silent> gr <Plug>(coc-references)\n\n" Use K to show documentation in preview window\nnnoremap <silent> K :call <SID>show_documentation()<CR>\n\nfunction! s:show_documentation()\n  if (index([\'vim\',\'help\'], &filetype) >= 0)\n    execute \'h \'.expand(\'<cword>\')\n  else\n    call CocAction(\'doHover\')\n  endif\nendfunction\n\n" Highlight symbol under cursor on CursorHold\nautocmd CursorHold * silent call CocActionAsync(\'highlight\')\n\n" Remap for rename current word\nnmap <leader>rn <Plug>(coc-rename)\n\n" Remap for format selected region\nxmap <leader>f  <Plug>(coc-format-selected)\nnmap <leader>f  <Plug>(coc-format-selected)\n\naugroup mygroup\n  autocmd!\n  " Setup formatexpr specified filetype(s).\n  autocmd FileType typescript,json setl formatexpr=CocAction(\'formatSelected\')\n  " Update signature help on jump placeholder\n  autocmd User CocJumpPlaceholder call CocActionAsync(\'showSignatureHelp\')\naugroup end\n\n" Remap for do codeAction of selected region, ex: `<leader>aap` for current paragraph\nxmap <leader>a  <Plug>(coc-codeaction-selected)\nnmap <leader>a  <Plug>(coc-codeaction-selected)\n\n" Remap for do codeAction of current line\nnmap <leader>ac  <Plug>(coc-codeaction)\n" Fix autofix problem of current line\nnmap <leader>qf  <Plug>(coc-fix-current)\n\n" Use <tab> for select selections ranges, needs server support, like: coc-tsserver, coc-python\nnmap <silent> <TAB> <Plug>(coc-range-select)\nxmap <silent> <TAB> <Plug>(coc-range-select)\nxmap <silent> <S-TAB> <Plug>(coc-range-select-backword)\n\n" Use `:Format` to format current buffer\ncommand! -nargs=0 Format :call CocAction(\'format\')\n\n" Use `:Fold` to fold current buffer\ncommand! -nargs=? Fold :call     CocAction(\'fold\', <f-args>)\n\n" use `:OR` for organize import of current buffer\ncommand! -nargs=0 OR   :call     CocAction(\'runCommand\', \'editor.action.organizeImport\')\n\n" Add status line support, for integration with other plugin, checkout `:h coc-status`\nset statusline^=%{coc#status()}%{get(b:,\'coc_current_function\',\'\')}\n\n" Using CocList\n" Show all diagnostics\nnnoremap <silent> <space>a  :<C-u>CocList diagnostics<cr>\n" Manage extensions\nnnoremap <silent> <space>e  :<C-u>CocList extensions<cr>\n" Show commands\nnnoremap <silent> <space>c  :<C-u>CocList commands<cr>\n" Find symbol of current document\nnnoremap <silent> <space>o  :<C-u>CocList outline<cr>\n" Search workspace symbols\nnnoremap <silent> <space>s  :<C-u>CocList -I symbols<cr>\n" Do default action for next item.\nnnoremap <silent> <space>j  :<C-u>CocNext<CR>\n" Do default action for previous item.\nnnoremap <silent> <space>k  :<C-u>CocPrev<CR>\n" Resume latest coc list\nnnoremap <silent> <space>p  :<C-u>CocListResume<CR>\n\n\n\n""" Using the configuration file\nfunction! SetupCommandAbbrs(from, to)\n  exec \'cnoreabbrev <expr> \'.a:from\n        \\ .\' ((getcmdtype() ==# ":" && getcmdline() ==# "\'.a:from.\'")\'\n        \\ .\'? ("\'.a:to.\'") : ("\'.a:from.\'"))\'\nendfunction\n\n" Use C to open coc config\ncall SetupCommandAbbrs(\'C\', \'CocConfig\')\n\nautocmd FileType json syntax match Comment +\\/\\/.\\+$+\n')])])]),e("h2",{attrs:{id:"ncm2-in-nvim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ncm2-in-nvim"}},[n._v("#")]),n._v(" ncm2 in nvim")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("\"--------------------------------------------------------------\n\" 語法檢查（Syntax Check）\n\n\" Check syntax (linting) and fix files asynchronously, with Language\n\" Server Protocol (LSP) integration in Vim\nPlug 'w0rp/ale'\n\n\"--------------------------------------------------------------\n\" 自動完成（Autocomplete）\n\n\" Automatic quote and bracket completion\nPlug 'jiangmiao/auto-pairs'\n\n\" \" A set of mappings for HTML, XML, PHP, ASP, eRuby, JSP, and more\n\" Plug 'tpope/vim-ragtag'\n\n\" NCM2 (nvim-completion-manager v2) is a fast, extensible, async completion \n\" framework for neovim.\nPlug 'ncm2/ncm2'\nPlug 'roxma/nvim-yarp'\n\n\" NOTE: you need to install completion sources to get completions. Check\n\" our wiki page for a list of sources: https://github.com/ncm2/ncm2/wiki\n\n\" Gerenal purpose\nPlug 'ncm2/ncm2-bufword'\nPlug 'ncm2/ncm2-path'\n\n\" Syntax\nPlug 'ncm2/ncm2-syntax' | Plug 'Shougo/neco-syntax'\n\n\" Web Development\nPlug 'ncm2/ncm2-html-subscope'\nPlug 'ncm2/ncm2-tagprefix'\n\" Plug 'ncm2/ncm2-markdown-subscope'\n\n\" Python completion for ncm2 via the great jedi library.\nPlug 'ncm2/ncm2-jedi'\n\n\" Neosnippet integration for ncm2.\n\"  - snippet completion source\n\"  - trigger dynamic snippet of completed item, e.g. parameter expansion.\nif has('nvim')\n  Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }\nelse\n  Plug 'Shougo/deoplete.nvim'\n  Plug 'roxma/nvim-yarp'\n  Plug 'roxma/vim-hug-neovim-rpc'\nendif\n\nPlug 'Shougo/neosnippet.vim'\nPlug 'Shougo/neosnippet-snippets'\nPlug 'ncm2/ncm2-neosnippet'\n\n\" Emmet for vim\nPlug 'mattn/emmet-vim'\n\n\" Snippets\n")])])]),e("h2",{attrs:{id:"nerdtree"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nerdtree"}},[n._v("#")]),n._v(" NERDTree")]),n._v(" "),e("p",[n._v('"--------------------------------------------------------------\n" 瀏覽目錄與檔案： NERDTree')]),n._v(" "),e("p",[n._v('"  - To open file navigation window:  [:NERDTree]\n"  - To open a file in the file explorer to the right window:  '),e("o",[n._v('\n"  - To switch between file window and nerdtree file navigation window:\n"  <Ctrl+w><Ctrl+w>; <Ctrl+w>'),e("L",[n._v('\n"  - To exit or close file explorer window: '),e("q",[n._v('; [:NERDTreeClose]\n" o: 在已有窗口中打開文件、目錄或書籤，並跳到該窗口\n" go: 在已有窗口 中打開文件、目錄或書籤，但不跳到該窗口\n" t: 在新 Tab 中打開選中文件/書籤，並跳到新 Tab\n" T: 在新 Tab 中打開選中文件/書籤，但不跳到新 Tab\n" i: split 一個新窗口打開選中文件，並跳到該窗口\n" gi: split 一個新窗口打開選中文件，但不跳到該窗口\n" s: vsplit 一個新窗口打開選中文件，並跳到該窗口\n" gs: vsplit 一個新 窗口打開選中文件，但不跳到該窗口\n" !: 執行當前文件\n" O: 遞歸打開選中 結點下的所有目錄\n" m: 文件操作：複製、刪除、移動等')])])],1)],1),n._v(" "),e("h2",{attrs:{id:"airline-安裝前置準備"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#airline-安裝前置準備"}},[n._v("#")]),n._v(" Airline 安裝前置準備")]),n._v(" "),e("p",[n._v("需要有 Powerline Font 與 Nerd Font")]),n._v(" "),e("p",[e("strong",[n._v("Powerline Fonts 安裝")])]),n._v(" "),e("p",[n._v("The repository of “Powerline Fonts” contains pre-patched and adjusted fonts for usage with the "),e("a",{attrs:{href:"https://github.com/powerline/powerline",target:"_blank",rel:"noopener noreferrer"}},[n._v("Powerline"),e("OutboundLink")],1),n._v(" statusline plugin.")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("sudo apt install fonts-powerline\n")])])]),e("p",[n._v("官網及安裝參考文件： https://github.com/powerline/fonts")]),n._v(" "),e("p",[e("strong",[n._v("Nerd Font 安裝")])]),n._v(" "),e("p",[e("strong",[n._v("Nerd Fonts")]),n._v(" is a project that patches developer targeted fonts with a high number of glyphs (icons). Specifically to add a high number of extra glyphs from popular 'iconic fonts' such as "),e("a",{attrs:{href:"https://github.com/FortAwesome/Font-Awesome",target:"_blank",rel:"noopener noreferrer"}},[n._v("Font Awesome ➶"),e("OutboundLink")],1),n._v(", "),e("a",{attrs:{href:"https://vorillaz.github.io/devicons/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Devicons ➶"),e("OutboundLink")],1),n._v(", "),e("a",{attrs:{href:"https://github.com/primer/octicons",target:"_blank",rel:"noopener noreferrer"}},[n._v("Octicons ➶"),e("OutboundLink")],1),n._v(", and "),e("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts#glyph-sets",target:"_blank",rel:"noopener noreferrer"}},[n._v("others"),e("OutboundLink")],1),n._v(".")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("適用於 Linux 作業系統，手動下載網址： https://github.com/ryanoasis/nerd-fonts/tags")]),n._v(" "),e("p",[n._v("發行說明： https://github.com/ryanoasis/nerd-fonts/releases")])]),n._v(" "),e("li",[e("p",[n._v("透過「安裝腳本檔案（install.sh）」\nhttps://github.com/ryanoasis/nerd-fonts/blob/master/install.sh")]),n._v(" "),e("p",[n._v("git clone https://github.com/ryanoasis/nerd-fonts.git")]),n._v(" "),e("p",[n._v("$ wget https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/install.sh")])])]),n._v(" "),e("p",[e("strong",[n._v("All fonts:")])]),n._v(" "),e("ul",[e("li",[n._v("Installs all the patched Fonts ("),e("em",[n._v("Warning: This is a lot of Fonts adding up to a large size")]),n._v(")\n./install.sh")])]),n._v(" "),e("p",[e("strong",[n._v("Single font:")])]),n._v(" "),e("ul",[e("li",[e("p",[n._v("Installs a single Font of your choice\n./install.sh "),e("FontName")],1),n._v(" "),e("p",[n._v("$ ./install.sh Hack\n$ ./install.sh HeavyData")])])]),n._v(" "),e("p",[n._v("官網及安裝參考文件： https://github.com/ryanoasis/nerd-fonts")]),n._v(" "),e("h2",{attrs:{id:"airline-theme-的圖示無法正常顯示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#airline-theme-的圖示無法正常顯示"}},[n._v("#")]),n._v(" Airline Theme 的圖示無法正常顯示")]),n._v(" "),e("p",[n._v("注意： 光是安裝 Powerline Font ，仍無法正常顯示所有的 Icon ；需安裝 Nerd Font 才行。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("1.) Download a Nerd Font （如： Meslo for Powerline）\n2.) Unzip and copy to ~/.fonts\n3.) Run the command fc-cache -fv to manually rebuild the font cache\n")])])]),e("p",[n._v("下載網址：  "),e("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[n._v("nerd-fonts")]),e("OutboundLink")],1),n._v("/"),e("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts",target:"_blank",rel:"noopener noreferrer"}},[n._v("patched-fonts"),e("OutboundLink")],1),n._v("/"),e("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Meslo",target:"_blank",rel:"noopener noreferrer"}},[n._v("Meslo"),e("OutboundLink")],1),n._v("/"),e("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Meslo/L-DZ",target:"_blank",rel:"noopener noreferrer"}},[n._v("L-DZ"),e("OutboundLink")],1),n._v("/"),e("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Meslo/L-DZ/Regular",target:"_blank",rel:"noopener noreferrer"}},[n._v("Regular"),e("OutboundLink")],1),n._v("/"),e("strong",[n._v("complete")]),n._v("/")]),n._v(" "),e("p",[n._v("https://github.com/ryanoasis/nerd-fonts/blob/master/patched-fonts/Meslo/L-DZ/Regular/complete/Meslo%20LG%20L%20DZ%20Regular%20Nerd%20Font%20Complete%20Mono.ttf")]),n._v(" "),e("p",[e("strong",[n._v("配合之 init.vim 檔設定：")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("\"--------------------------------------------------------------\n\" 狀態列： Airline & AirlineTheme\n\n\" Automatically displays all buffers when there's only one tab open\nlet g:airline#extensions#tabline#enabled = 2\nlet g:airline#extensions#tabline#formatter = 'default'\n \nlet g:airline_powerline_fonts = 1\nset guifont=MesloLGM\\ Nerd\\ Font:h17\n\nlet g:airline_theme='wombat'\n\" let g:airline_theme='lucius'\n\" let g:airline_theme='luna'\n\nif !exists('g:airline_symbols')\n    let g:airline_symbols = {}\nendif\n\n\" unicode symbols\nlet g:airline_left_sep = '»'\nlet g:airline_left_sep = '▶'\nlet g:airline_right_sep = '«'\nlet g:airline_right_sep = '◀'\nlet g:airline_symbols.crypt = '🔒'\nlet g:airline_symbols.linenr = '☰'\nlet g:airline_symbols.linenr = '␊'\nlet g:airline_symbols.linenr = '\n")])])]),e("p",[n._v("'\nlet g:airline_symbols.linenr = '¶'\nlet g:airline_symbols.maxlinenr = ''\nlet g:airline_symbols.maxlinenr = '㏑'\nlet g:airline_symbols.branch = '⎇'\nlet g:airline_symbols.paste = 'ρ'\nlet g:airline_symbols.paste = 'Þ'\nlet g:airline_symbols.paste = '∥'\nlet g:airline_symbols.spell = 'Ꞩ'\nlet g:airline_symbols.notexists = 'Ɇ'\nlet g:airline_symbols.whitespace = 'Ξ'")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("\" powerline symbols\nlet g:airline_left_sep = ''\nlet g:airline_left_alt_sep = ''\nlet g:airline_right_sep = ''\nlet g:airline_right_alt_sep = ''\nlet g:airline_symbols.branch = ''\nlet g:airline_symbols.readonly = ''\nlet g:airline_symbols.linenr = '☰'\nlet g:airline_symbols.maxlinenr = '' \nlet g:airline_symbols.dirty= '⚡'\n")])])]),e("h1",{attrs:{id:"設定參考範本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定參考範本"}},[n._v("#")]),n._v(" 設定參考範本")]),n._v(" "),e("p",[n._v("https://github.com/liaoishere/dotfiles/tree/master/vim")]),n._v(" "),e("p",[n._v("http://liaoph.com/modern-vim/")]),n._v(" "),e("p",[n._v("https://github.com/PegasusWang/vim-config/tree/rafi")]),n._v(" "),e("p",[n._v("https://juejin.im/entry/5d92f7eaf265da5b926bc022")]),n._v(" "),e("p",[n._v("https://morioh.com/p/e472c4057aeb")]),n._v(" "),e("p",[n._v("https://github.com/ctaylo21/jarvis")]),n._v(" "),e("p",[n._v("https://github.com/0xff91/vide")]),n._v(" "),e("p",[n._v("http://gopherhub.org/2019/06/28/thinkvim/")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("brew install ripgrep\n...\nBash completion has been installed to:\n  /usr/local/etc/bash_completion.d\n\nzsh completions have been installed to:\n  /usr/local/share/zsh/site-functions\n")])])]),e("p",[n._v("https://awesomeopensource.com/project/kutsan/dotfiles")])])}),[],!1,null,null,null);e.default=i.exports}}]);
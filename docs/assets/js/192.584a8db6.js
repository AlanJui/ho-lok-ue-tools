(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{478:function(e,n,t){"use strict";t.r(n);var i=t(10),r=Object(i.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"defx-denite-設定參考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#defx-denite-設定參考"}},[e._v("#")]),e._v(" Defx / Denite 設定參考")]),e._v(" "),n("h1",{attrs:{id:"defx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#defx"}},[e._v("#")]),e._v(" Defx")]),e._v(" "),n("h2",{attrs:{id:"配合用套件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配合用套件"}},[e._v("#")]),e._v(" 配合用套件")]),e._v(" "),n("p",[n("strong",[e._v("刪除檔案用")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("pip install Send2Trash\n")])])]),n("h2",{attrs:{id:"設定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#設定"}},[e._v("#")]),e._v(" 設定")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("autocmd FileType defx call s:defx_mappings()\n\nfunction! s:defx_mappings() abort\n  nnoremap <silent><buffer><expr> l     <SID>defx_toggle_tree()                    \" 打开或者关闭文件夹，文件\n  nnoremap <silent><buffer><expr> .     defx#do_action('toggle_ignored_files')     \" 显示隐藏文件\n  nnoremap <silent><buffer><expr> <C-r>  defx#do_action('redraw')\nendfunction\n\n\n\nfunction! s:QuitAllDefx(context) abort\n    let buffers = filter(range(1, bufnr('$')),\n                \\ 'getbufvar(v:val, \"&filetype\") ==# \"defx\"')\n    let win_id = -1\n    for i in buffers\n        call defx#call_action('quit')\n        if win_id == -1\n            let win_id = win_getid()\n            wincmd p\n        endif\n    endfor\n    call win_gotoid(win_id)\nendfunction\n\n\" Filetype settings\naugroup ps_defx\n    au!\n    au FileType defx call s:defx_settings()\n    au FileType defx setlocal relativenumber\naugroup END\n\n\nfunction! s:defx_settings()\n    \" Exit with escape key and q, Q\n    nnoremap <silent><buffer><expr> <ESC> defx#do_action('quit')\n    nnoremap <silent><buffer><expr> q defx#do_action('quit')\n    nnoremap <silent><buffer><expr> Q defx#do_action('call', '<SID>QuitAllDefx')\n    \" Edit and open with external program\n    nnoremap <silent><buffer><expr> <CR>\n        \\ defx#is_directory() ? defx#do_action('open') :\n        \\ defx#do_action('multi', ['drop', 'quit'])\n    nnoremap <silent><buffer><expr> l\n        \\ defx#is_directory() ? defx#do_action('open') :\n        \\ defx#do_action('multi', ['drop', 'quit'])\n    nnoremap <silent><buffer><expr> o defx#do_action('execute_system')\n   \" Tree editing, opening and closing\n   nnoremap <silent><buffer><expr> e\n        \\ defx#is_directory() ? defx#do_action('open_tree') :\n        \\ defx#do_action('multi', ['drop', 'quit'])\n    nnoremap <silent><buffer><expr> zo defx#do_action('open_tree')\n    nnoremap <silent><buffer><expr> zc defx#do_action('close_tree')\n    nnoremap <silent><buffer><expr> zr defx#do_action('open_tree_recursive',\n                \\ [3])\n    \" Open files in splits\n    nnoremap <silent><buffer><expr> s\n        \\ defx#do_action('multi', [['drop', 'split'], 'quit'])\n    nnoremap <silent><buffer><expr> v\n        \\ defx#do_action('multi', [['drop', 'vsplit'], 'quit'])\n    \" Copy, move, paste and remove\n    nnoremap <silent><buffer><expr> c defx#do_action('copy')\n    nnoremap <silent><buffer><expr> m defx#do_action('move')\n    nnoremap <silent><buffer><expr> p defx#do_action('paste')\n    nnoremap <silent><buffer><expr> d defx#do_action('remove_trash')\n    \" Yank and rename\n    nnoremap <silent><buffer><expr> y defx#do_action('yank_path')\n    nnoremap <silent><buffer><expr> r defx#do_action('rename')\n    \" New file and directory\n    nnoremap <silent><buffer><expr> F defx#do_action('new_file')\n    nnoremap <silent><buffer><expr> D defx#do_action('new_directory')\n    \" Move up a directory\n    nnoremap <silent><buffer><expr> u defx#do_action('cd', ['..'])\n    nnoremap <silent><buffer><expr> 2u defx#do_action('cd', ['../..'])\n    nnoremap <silent><buffer><expr> 3u defx#do_action('cd', ['../../..'])\n    nnoremap <silent><buffer><expr> 4u defx#do_action('cd', ['../../../..'])\n    \" Home directory\n    nnoremap <silent><buffer><expr> h defx#do_action('cd')\n    \" Mark a file\n    nnoremap <silent><buffer><expr> <Space>\n        \\ defx#do_action('toggle_select') . 'j'\n    \" Toggle hidden files\n    nnoremap <silent><buffer><expr> <Leader>th\n        \\ defx#do_action('toggle_ignored_files')\n    \" Redraw\n    nnoremap <silent><buffer><expr> <C-r> defx#do_action('redraw')\n    \" Toggle sorting from filename to time (with last modified first)\n    nnoremap <silent><buffer><expr> S defx#do_action('toggle_sort', 'Time')\n    \" Toggle columns to show time\n    nnoremap <silent><buffer><expr> T defx#do_action('toggle_columns',\n        \\ 'icons:filename:time')\n    \" Open new defx buffer\n    nnoremap <silent><buffer> <Leader>sp :execute\n        \\ 'Defx -new -split=horizontal -direction= ' . b:defx.paths[0]<CR>\n        \\ :wincmd p<CR>:execute float2nr(&lines /2) . 'wincmd _ '<CR>\n    \" change local window working dir to current dir\n    nnoremap <silent><buffer> <Leader>cd :execute 'lcd' . b:defx.paths[0]<CR>\n    \" History source\n    nnoremap <silent><buffer> <C-h> :Denite defx/history<CR>\n    \" Bookmarks source\n    nnoremap <silent><buffer> b :Denite defx/dirmark<CR>\n\n    \" Resize window\n    nnoremap <silent><buffer><expr> <A-l> defx#do_action('resize',\n        \\ defx#get_context().winwidth + 5)\n    nnoremap <silent><buffer><expr> <A-h> defx#do_action('resize',\n        \\ defx#get_context().winwidth - 5)\n\n    \" Custom actions\n    function! s:GetDefxBaseDir(candidate) abort\n        if line('.') == 1\n            let path_mod  = 'h'\n        else\n            let path_mod = isdirectory(a:candidate) ? 'h:h' : 'h'\n        endif\n        return fnamemodify(a:candidate, ':p:' . path_mod)\n    endfunction\n    function! s:denite_rec(context) abort\n        let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])\n        execute 'Denite -default-action=defx ' .\n                    \\ 'file/rec:' . narrow_dir\n    endfunction\n    function! s:denite_rec_no_ignore(context) abort\n        let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])\n        execute 'Denite -default-action=defx ' .\n                    \\ 'file/rec/noignore:' . narrow_dir\n    endfunction\n    function! s:denite_dir_rec(context) abort\n        let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])\n        execute 'Denite -default-action=defx ' .\n                    \\ 'directory_rec:' . narrow_dir\n    endfunction\n    function! s:denite_dir_rec_no_ignore(context) abort\n        let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])\n        execute 'Denite -default-action=defx ' .\n                    \\ 'directory_rec/noignore:' . narrow_dir\n    endfunction\n    function! s:denite_z(context) abort\n        execute 'Denite -default-action=defx z'\n    endfunction\n    function! s:denite_parents_dirs(context) abort\n        let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])\n        execute 'Denite -default-action=defx ' .\n                    \\ 'parent_dirs:' . narrow_dir\n    endfunction\n    function! s:defx_ranger(context) abort\n        let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])\n        call s:TmuxSplitCmd('ranger', narrow_dir)\n    endfunction\n    nnoremap <silent><buffer><expr> <C-t>\n                \\ defx#do_action('call', '<SID>denite_rec')\n    nnoremap <silent><buffer><expr> <A-t>\n                \\ defx#do_action('call', '<SID>denite_rec_no_ignore')\n    nnoremap <silent><buffer><expr> <A-c>\n                \\ defx#do_action('call', '<SID>denite_dir_rec')\n    nnoremap <silent><buffer><expr> <A-d>\n                \\ defx#do_action('call', '<SID>denite_dir_rec_no_ignore')\n    nnoremap <silent><buffer><expr> <A-z>\n                \\ defx#do_action('call', '<SID>denite_z')\n    nnoremap <silent><buffer><expr> <A-p>\n                \\ defx#do_action('call', '<SID>denite_parents_dirs')\n    nnoremap <silent><buffer><expr> ge\n                \\ defx#do_action('call', '<SID>defx_ranger')\nendfunction\n\n\n\n\" Avoid the white space highting issue\n\" autocmd FileType defx match ExtraWhitespace /^^/\n\" Keymap in defx\nautocmd FileType defx call s:defx_my_settings()\nfunction! s:defx_my_settings() abort\n  IndentLinesDisable\n  setl nospell\n  setl signcolumn=no\n  setl nonumber\n  nnoremap <silent><buffer><expr> <CR>\n  \\ defx#is_directory() ?\n  \\ defx#do_action('open_or_close_tree') :\n  \\ defx#do_action('drop',)\n  nmap <silent><buffer><expr> <2-LeftMouse>\n  \\ defx#is_directory() ?\n  \\ defx#do_action('open_or_close_tree') :\n  \\ defx#do_action('drop',)\n  nnoremap <silent><buffer><expr> s defx#do_action('drop', 'split')\n  nnoremap <silent><buffer><expr> v defx#do_action('drop', 'vsplit')\n  nnoremap <silent><buffer><expr> t defx#do_action('drop', 'tabe')\n  nnoremap <silent><buffer><expr> o defx#do_action('open_tree')\n  nnoremap <silent><buffer><expr> O defx#do_action('open_tree_recursive')\n  nnoremap <silent><buffer><expr> C defx#do_action('copy')\n  nnoremap <silent><buffer><expr> P defx#do_action('paste')\n  nnoremap <silent><buffer><expr> M defx#do_action('rename')\n  nnoremap <silent><buffer><expr> D defx#do_action('remove_trash')\n  nnoremap <silent><buffer><expr> A defx#do_action('new_multiple_files')\n  nnoremap <silent><buffer><expr> U defx#do_action('cd', ['..'])\n  nnoremap <silent><buffer><expr> . defx#do_action('toggle_ignored_files')\n  nnoremap <silent><buffer><expr> <Space> defx#do_action('toggle_select')\n  nnoremap <silent><buffer><expr> R defx#do_action('redraw')\nendfunction\n\n\n\" \" 使用 ;e 切换显示文件浏览，使用 ;a 查找到当前文件位置\n\" let g:maplocalleader=';'\n\" nnoremap <silent> <LocalLeader>e\n\" \\ :<C-u>Defx -resume -toggle -buffer-name=tab`tabpagenr()`<CR>\n\" nnoremap <silent> <LocalLeader>a\n\" \\ :<C-u>Defx -resume -buffer-name=tab`tabpagenr()` -search=`expand('%:p')`<CR>\n\"\n\" function! s:defx_mappings() abort\n\"     \" Defx window keyboard mappings\n\"     setlocal signcolumn=no\n\"     \" 使用回车打开文件\n\"     nnoremap <silent><buffer><expr> <CR> defx#do_action('multi', ['drop'])\n\" endfunction\n\n\n\n\"--------------------------------------------------------------\n\" defx\n\" pip install pynvim\n\" pip install Send2Trash\n\" \n\nlet g:indentLine_fileTypeExclude = ['defx']\nlet g:indentLine_fileTypeExclude = ['defx'] \" defx filetype is defx\nlet g:indentLine_bufTypeExclude = ['nofile']  \" defx buftype is nofile\nlet g:indentLine_bufNameExclude = [\"\\[defx\\]*\"]  \" my defx bufname is [defx] -0\n\n            \" \\ 'root_marker': '≡ ',\n            \" \\ 'root_marker': '📁 ',\ncall defx#custom#option('_', {\n            \\ 'root_marker': '[Root]: ',\n            \\ 'toggle': 1,\n            \\ 'winwidth': 66,\n            \\ 'split': 'vertical',\n            \\ 'direction': 'topleft',\n            \\ 'columns': 'mark:indent:icons:git:filename:time:size',\n            \\ 'show_ignored_files': 0,\n            \\ 'ignored_files':\n            \\     '.mypy_cache,.pytest_cache,.git,.hg,.svn,.stversions'\n            \\   . ',__pycache__,.sass-cache,*.egg-info,.DS_Store,*.pyc,*.swp'\n            \\   . ',.vscode,.idea,.vagrant',\n            \\ })\ncall defx#custom#column('mark', {\n            \\ 'readonly_icon': '',\n            \\ 'selected_icon': '',\n            \\ })\ncall defx#custom#column('indent', { 'indent': '  '})\ncall defx#custom#column('icon', {\n            \\ 'root_icon': '',\n            \\ 'directory_icon': '',\n            \\ 'opened_icon': '',\n            \\ })\ncall defx#custom#column('filename', {\n            \\ 'min_width': 30,\n            \\ 'max_width': 60,\n            \\ })\ncall defx#custom#column('time', {'format': '%y-%m-%d %H:%M'})\n\n\" Shown only current directory in root\nfunction! Root(path) abort\n    return fnamemodify(a:path, ':t') . '/'\nendfunction\ncall defx#custom#source('file', {'root': 'Root'})\n\n\" Keymap\nmap <silent> <Leader>e :Defx<CR>\n\" nnoremap <silent> <Leader>e :Defx<CR>\nnnoremap <silent> <Leader>f :Defx `expand('%:p:h')`\n            \\ -search=`expand('%:p')`<CR>\nnnoremap <silent> <Leader>df :Defx `expand('%:p:h') ` -search=`expand('%:p')`<CR>\n            \\ :execute 'Defx -new -split=horizontal -direction= '\n            \\ . b:defx.paths[0]<CR>:wincmd p<CR>\n            \\ :execute float2nr(&lines /2) . 'wincmd _ '<CR>\nnnoremap <silent> <Leader>fb :Defx<CR>:Denite defx/dirmark<CR>\nnnoremap <silent> <Leader>fr :Defx -resume<CR>\nnnoremap <silent> <Leader>fm :call <SID>TmuxSplitCmd('ranger', '')<CR>\n")])])]),n("h1",{attrs:{id:"denite"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#denite"}},[e._v("#")]),e._v(" Denite")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("\" Define mappings while in 'filter' mode\n\"   <C-o>         - Switch to normal mode inside of search results\n\"   <Esc>         - Exit denite window in any mode\n\"   <CR>          - Open currently selected file in any mode\n\"   <C-t>         - Open currently selected file in a new tab\n\"   <C-v>         - Open currently selected file a vertical split\n\"   <C-h>         - Open currently selected file in a horizontal split\n\nautocmd FileType denite-filter call s:denite_filter_my_settings()\n\nfunction! s:denite_filter_my_settings() abort\n imap <silent><buffer> <C-o>\n \\ <Plug>(denite_filter_quit)\n inoremap <silent><buffer><expr> <Esc>\n \\ denite#do_map('quit')\n nnoremap <silent><buffer><expr> <Esc>\n \\ denite#do_map('quit')\n inoremap <silent><buffer><expr> <CR>\n \\ denite#do_map('do_action')\n inoremap <silent><buffer><expr> <C-t>\n \\ denite#do_map('do_action', 'tabopen')\n inoremap <silent><buffer><expr> <C-v>\n \\ denite#do_map('do_action', 'vsplit')\n inoremap <silent><buffer><expr> <C-h>\n \\ denite#do_map('do_action', 'split')\nendfunction\n\n\n\n\" Define mappings while in denite window\n\"   <CR>        - Opens currently selected file\n\"   q or <Esc>  - Quit Denite window\n\"   d           - Delete currenly selected file\n\"   p           - Preview currently selected file\n\"   <C-o> or i  - Switch to insert mode inside of filter prompt\n\"   <C-t>       - Open currently selected file in a new tab\n\"   <C-v>       - Open currently selected file a vertical split\n\"   <C-h>       - Open currently selected file in a horizontal split\n\nautocmd FileType denite call s:denite_my_settings()\n\nfunction! s:denite_my_settings() abort\n  nnoremap <silent><buffer><expr> <CR>\n  \\ denite#do_map('do_action')\n  nnoremap <silent><buffer><expr> q\n  \\ denite#do_map('quit')\n  nnoremap <silent><buffer><expr> <Esc>\n  \\ denite#do_map('quit')\n  nnoremap <silent><buffer><expr> d\n  \\ denite#do_map('do_action', 'delete')\n  nnoremap <silent><buffer><expr> pdo\n  \\ denite#do_map('do_action', 'preview')\n  nnoremap <silent><buffer><expr> i\n  \\ denite#do_map('open_filter_buffer')\n  nnoremap <silent><buffer><expr> <C-i>\n  \\ denite#do_map('open_filter_buffer')\n  nnoremap <silent><buffer><expr> <C-t>\n  \\ denite#do_map('do_action', 'tabopen')\n  nnoremap <silent><buffer><expr> <C-v>\n  \\ denite#do_map('do_action', 'vsplit')\n  nnoremap <silent><buffer><expr> <C-h>\n  \\ denite#do_map('do_action', 'split')\nendfunction\n\n\n\n\" Wrap in try/catch to avoid errors on initial install before plugin is available\n\" === Denite setup ===\"\n\" Use ripgrep for searching current directory for files\n\" By default, ripgrep will respect rules in .gitignore\n\"   --files: Print each file that would be searched (but don't search)\n\"   --glob:  Include or exclues files for searching that match the given glob\n\"            (aka ignore .git files)\n\"\n\"call denite#custom#var('file/rec', 'command', ['rg', '--files', '--glob',  '!*.pyc', '!.git'])\ncall denite#custom#var('file/rec', 'command', ['rg', '--files', '--glob',  '!.git'])\n\n\n\" Use ripgrep in place of \"grep\"\ncall denite#custom#var('grep', 'command', ['rg'])\n\n\" Custom options for ripgrep\n\"   --vimgrep:  Show results with every match on it's own line\n\"   --hidden:   Search hidden directories and files\n\"   --heading:  Show the file name above clusters of matches from each file\n\"   --S:        Search case insensitively if the pattern is all lowercase\ncall denite#custom#var('grep', 'default_opts', ['--hidden', '--vimgrep', '--heading', '-S'])\n\n\" Recommended defaults for ripgrep via Denite docs\ncall denite#custom#var('grep', 'recursive_opts', [])\ncall denite#custom#var('grep', 'pattern_opt', ['--regexp'])\ncall denite#custom#var('grep', 'separator', ['--'])\ncall denite#custom#var('grep', 'final_opts', [])\n\n\" Remove date from buffer list\ncall denite#custom#var('buffer', 'date_format', '')\n\n\" Custom options for Denite\n\"   auto_resize             - Auto resize the Denite window height automatically.\n\"   prompt                  - Customize denite prompt\n\"   direction               - Specify Denite window direction as directly below current pane\n\"   winminheight            - Specify min height for Denite window\n\"   highlight_mode_insert   - Specify h1-CursorLine in insert mode\n\"   prompt_highlight        - Specify color of prompt\n\"   highlight_matched_char  - Matched characters highlight\n\"   highlight_matched_range - matched range highlight\nlet s:denite_options = {'default' : {\n  \\ 'split': 'floating',\n  \\ 'start_filter': 1,\n  \\ 'auto_resize': 1,\n  \\ 'source_names': 'short',\n  \\ 'prompt': 'λ ',\n  \\ 'statusline': 0,\n  \\ 'highlight_matched_char': 'QuickFixLine',\n  \\ 'highlight_matched_range': 'Visual',\n  \\ 'highlight_window_background': 'Visual',\n  \\ 'highlight_filter_background': 'DiffAdd',\n  \\ 'winrow': 1,\n  \\ 'vertical_preview': 1\n  \\ }}\n\n\" Loop through denite options and enable them\nfunction! s:profile(opts) abort\n  for l:fname in keys(a:opts)\n    for l:dopt in keys(a:opts[l:fname])\n      call denite#custom#option(l:fname, l:dopt, a:opts\\[l:fname\\][l:dopt])\n    endfor\n  endfor\nendfunction\n\ncall s:profile(s:denite_options)\ncatch\n  echo 'Denite not installed. It should work after running :PlugInstall'\nendtry\n\n\n\" === keymap === \"\n\"   b  - Browser currently open buffers\n\"   f  - Browse list of files in current directory\n\"   sg - Search current directory for occurences of given term and close window if no results\n\"   sc - Search current directory for occurences of word under cursor\nnmap <Leader>b :Denite buffer<CR>\nnmap <Leader>f :DeniteProjectDir file/rec<CR>\nnmap <Leader>sg :<C-u>Denite grep:. -no-empty<CR>\nnmap <Leader>sc :<C-u>DeniteCursorWord grep:.<CR>\n\" nmap <C-o> :Denite buffer<CR>\n\n\n\n\n\" Setup default denite options\ncall denite#custom#option('default', 'prompt', 'λ')\n\" call denite#custom#var('file/rec', 'command', ['ag', '--follow', '--nocolor', '--nogroup', '-g', ''])\n\" call denite#custom#var('grep', 'command', ['ag'])\ncall denite#custom#var('file/rec', 'command', ['rg', '--follow', '--nocolor', '--nogroup', '-g', ''])\ncall denite#custom#var('grep', 'command', ['rg'])\ncall denite#custom#var('grep', 'default_opts', ['-i', '--vimgrep'])\ncall denite#custom#var('grep', 'recursive_opts', [])\ncall denite#custom#var('grep', 'pattern_opt', [])\ncall denite#custom#var('grep', 'separator', ['--'])\ncall denite#custom#var('grep', 'final_opts', [])\ncall denite#custom#source('file_rec', 'sorters', ['sorter_sublime'])\ncall denite#custom#filter('matcher_ignore_globs', 'ignore_globs',\n      \\ [ '.git/', '.ropeproject/', '__pycache__/*', '*.pyc', 'node_modules/',\n      \\   'venv/', 'images/', '*.min.*', 'img/', 'fonts/', '*.png'])\n\nnmap <Leader>p :Denite -start-filter file/rec<CR>\nnmap <C-p> :Denite -start-filter file/rec<CR>\nnmap <Leader>b :Denite buffer<CR>\nnnoremap \\ :Denite grep<CR>\n\nnmap <Leader>f :DeniteProjectDir file/rec<CR>\n\n\" Setup key mappings in the denite buffer\nnnoremap <silent><buffer><expr> <CR>\n      \\ denite#do_map('do_action')\nnnoremap <silent><buffer><expr> d\n      \\ denite#do_map('do_action', 'delete')\nnnoremap <silent><buffer><expr> p\n      \\ denite#do_map('do_action', 'preview')\nnnoremap <silent><buffer><expr> <C-v>\n      \\ denite#do_map('do_action', 'vsplit')\nnnoremap <silent><buffer><expr> <C-x>\n      \\ denite#do_map('do_action', 'split')\nnnoremap <silent><buffer><expr> <Esc>\n      \\ denite#do_map('quit')\nnnoremap <silent><buffer><expr> i\n      \\ denite#do_map('open_filter_buffer')\nnnoremap <silent><buffer><expr> <Space>\n      \\ denite#do_map('toggle_select').'j'\n\n\" Setup the key mappings for the denite-filte buffer\nimap <silent><buffer> <Esc> <Plug>(denite_filter_quit)\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);
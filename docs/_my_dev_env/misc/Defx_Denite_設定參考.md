# Defx / Denite 設定參考


# Defx


## 配合用套件

**刪除檔案用**

    pip install Send2Trash


## 設定


    autocmd FileType defx call s:defx_mappings()
    
    function! s:defx_mappings() abort
      nnoremap <silent><buffer><expr> l     <SID>defx_toggle_tree()                    " 打开或者关闭文件夹，文件
      nnoremap <silent><buffer><expr> .     defx#do_action('toggle_ignored_files')     " 显示隐藏文件
      nnoremap <silent><buffer><expr> <C-r>  defx#do_action('redraw')
    endfunction



    function! s:QuitAllDefx(context) abort
        let buffers = filter(range(1, bufnr('$')),
                    \ 'getbufvar(v:val, "&filetype") ==# "defx"')
        let win_id = -1
        for i in buffers
            call defx#call_action('quit')
            if win_id == -1
                let win_id = win_getid()
                wincmd p
            endif
        endfor
        call win_gotoid(win_id)
    endfunction
    
    " Filetype settings
    augroup ps_defx
        au!
        au FileType defx call s:defx_settings()
        au FileType defx setlocal relativenumber
    augroup END
    
    
    function! s:defx_settings()
        " Exit with escape key and q, Q
        nnoremap <silent><buffer><expr> <ESC> defx#do_action('quit')
        nnoremap <silent><buffer><expr> q defx#do_action('quit')
        nnoremap <silent><buffer><expr> Q defx#do_action('call', '<SID>QuitAllDefx')
        " Edit and open with external program
        nnoremap <silent><buffer><expr> <CR>
            \ defx#is_directory() ? defx#do_action('open') :
            \ defx#do_action('multi', ['drop', 'quit'])
        nnoremap <silent><buffer><expr> l
            \ defx#is_directory() ? defx#do_action('open') :
            \ defx#do_action('multi', ['drop', 'quit'])
        nnoremap <silent><buffer><expr> o defx#do_action('execute_system')
       " Tree editing, opening and closing
       nnoremap <silent><buffer><expr> e
            \ defx#is_directory() ? defx#do_action('open_tree') :
            \ defx#do_action('multi', ['drop', 'quit'])
        nnoremap <silent><buffer><expr> zo defx#do_action('open_tree')
        nnoremap <silent><buffer><expr> zc defx#do_action('close_tree')
        nnoremap <silent><buffer><expr> zr defx#do_action('open_tree_recursive',
                    \ [3])
        " Open files in splits
        nnoremap <silent><buffer><expr> s
            \ defx#do_action('multi', [['drop', 'split'], 'quit'])
        nnoremap <silent><buffer><expr> v
            \ defx#do_action('multi', [['drop', 'vsplit'], 'quit'])
        " Copy, move, paste and remove
        nnoremap <silent><buffer><expr> c defx#do_action('copy')
        nnoremap <silent><buffer><expr> m defx#do_action('move')
        nnoremap <silent><buffer><expr> p defx#do_action('paste')
        nnoremap <silent><buffer><expr> d defx#do_action('remove_trash')
        " Yank and rename
        nnoremap <silent><buffer><expr> y defx#do_action('yank_path')
        nnoremap <silent><buffer><expr> r defx#do_action('rename')
        " New file and directory
        nnoremap <silent><buffer><expr> F defx#do_action('new_file')
        nnoremap <silent><buffer><expr> D defx#do_action('new_directory')
        " Move up a directory
        nnoremap <silent><buffer><expr> u defx#do_action('cd', ['..'])
        nnoremap <silent><buffer><expr> 2u defx#do_action('cd', ['../..'])
        nnoremap <silent><buffer><expr> 3u defx#do_action('cd', ['../../..'])
        nnoremap <silent><buffer><expr> 4u defx#do_action('cd', ['../../../..'])
        " Home directory
        nnoremap <silent><buffer><expr> h defx#do_action('cd')
        " Mark a file
        nnoremap <silent><buffer><expr> <Space>
            \ defx#do_action('toggle_select') . 'j'
        " Toggle hidden files
        nnoremap <silent><buffer><expr> <Leader>th
            \ defx#do_action('toggle_ignored_files')
        " Redraw
        nnoremap <silent><buffer><expr> <C-r> defx#do_action('redraw')
        " Toggle sorting from filename to time (with last modified first)
        nnoremap <silent><buffer><expr> S defx#do_action('toggle_sort', 'Time')
        " Toggle columns to show time
        nnoremap <silent><buffer><expr> T defx#do_action('toggle_columns',
            \ 'icons:filename:time')
        " Open new defx buffer
        nnoremap <silent><buffer> <Leader>sp :execute
            \ 'Defx -new -split=horizontal -direction= ' . b:defx.paths[0]<CR>
            \ :wincmd p<CR>:execute float2nr(&lines /2) . 'wincmd _ '<CR>
        " change local window working dir to current dir
        nnoremap <silent><buffer> <Leader>cd :execute 'lcd' . b:defx.paths[0]<CR>
        " History source
        nnoremap <silent><buffer> <C-h> :Denite defx/history<CR>
        " Bookmarks source
        nnoremap <silent><buffer> b :Denite defx/dirmark<CR>
    
        " Resize window
        nnoremap <silent><buffer><expr> <A-l> defx#do_action('resize',
            \ defx#get_context().winwidth + 5)
        nnoremap <silent><buffer><expr> <A-h> defx#do_action('resize',
            \ defx#get_context().winwidth - 5)
    
        " Custom actions
        function! s:GetDefxBaseDir(candidate) abort
            if line('.') == 1
                let path_mod  = 'h'
            else
                let path_mod = isdirectory(a:candidate) ? 'h:h' : 'h'
            endif
            return fnamemodify(a:candidate, ':p:' . path_mod)
        endfunction
        function! s:denite_rec(context) abort
            let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])
            execute 'Denite -default-action=defx ' .
                        \ 'file/rec:' . narrow_dir
        endfunction
        function! s:denite_rec_no_ignore(context) abort
            let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])
            execute 'Denite -default-action=defx ' .
                        \ 'file/rec/noignore:' . narrow_dir
        endfunction
        function! s:denite_dir_rec(context) abort
            let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])
            execute 'Denite -default-action=defx ' .
                        \ 'directory_rec:' . narrow_dir
        endfunction
        function! s:denite_dir_rec_no_ignore(context) abort
            let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])
            execute 'Denite -default-action=defx ' .
                        \ 'directory_rec/noignore:' . narrow_dir
        endfunction
        function! s:denite_z(context) abort
            execute 'Denite -default-action=defx z'
        endfunction
        function! s:denite_parents_dirs(context) abort
            let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])
            execute 'Denite -default-action=defx ' .
                        \ 'parent_dirs:' . narrow_dir
        endfunction
        function! s:defx_ranger(context) abort
            let narrow_dir = s:GetDefxBaseDir(a:context.targets[0])
            call s:TmuxSplitCmd('ranger', narrow_dir)
        endfunction
        nnoremap <silent><buffer><expr> <C-t>
                    \ defx#do_action('call', '<SID>denite_rec')
        nnoremap <silent><buffer><expr> <A-t>
                    \ defx#do_action('call', '<SID>denite_rec_no_ignore')
        nnoremap <silent><buffer><expr> <A-c>
                    \ defx#do_action('call', '<SID>denite_dir_rec')
        nnoremap <silent><buffer><expr> <A-d>
                    \ defx#do_action('call', '<SID>denite_dir_rec_no_ignore')
        nnoremap <silent><buffer><expr> <A-z>
                    \ defx#do_action('call', '<SID>denite_z')
        nnoremap <silent><buffer><expr> <A-p>
                    \ defx#do_action('call', '<SID>denite_parents_dirs')
        nnoremap <silent><buffer><expr> ge
                    \ defx#do_action('call', '<SID>defx_ranger')
    endfunction
    
    
    
    " Avoid the white space highting issue
    " autocmd FileType defx match ExtraWhitespace /^^/
    " Keymap in defx
    autocmd FileType defx call s:defx_my_settings()
    function! s:defx_my_settings() abort
      IndentLinesDisable
      setl nospell
      setl signcolumn=no
      setl nonumber
      nnoremap <silent><buffer><expr> <CR>
      \ defx#is_directory() ?
      \ defx#do_action('open_or_close_tree') :
      \ defx#do_action('drop',)
      nmap <silent><buffer><expr> <2-LeftMouse>
      \ defx#is_directory() ?
      \ defx#do_action('open_or_close_tree') :
      \ defx#do_action('drop',)
      nnoremap <silent><buffer><expr> s defx#do_action('drop', 'split')
      nnoremap <silent><buffer><expr> v defx#do_action('drop', 'vsplit')
      nnoremap <silent><buffer><expr> t defx#do_action('drop', 'tabe')
      nnoremap <silent><buffer><expr> o defx#do_action('open_tree')
      nnoremap <silent><buffer><expr> O defx#do_action('open_tree_recursive')
      nnoremap <silent><buffer><expr> C defx#do_action('copy')
      nnoremap <silent><buffer><expr> P defx#do_action('paste')
      nnoremap <silent><buffer><expr> M defx#do_action('rename')
      nnoremap <silent><buffer><expr> D defx#do_action('remove_trash')
      nnoremap <silent><buffer><expr> A defx#do_action('new_multiple_files')
      nnoremap <silent><buffer><expr> U defx#do_action('cd', ['..'])
      nnoremap <silent><buffer><expr> . defx#do_action('toggle_ignored_files')
      nnoremap <silent><buffer><expr> <Space> defx#do_action('toggle_select')
      nnoremap <silent><buffer><expr> R defx#do_action('redraw')
    endfunction
    
    
    " " 使用 ;e 切换显示文件浏览，使用 ;a 查找到当前文件位置
    " let g:maplocalleader=';'
    " nnoremap <silent> <LocalLeader>e
    " \ :<C-u>Defx -resume -toggle -buffer-name=tab`tabpagenr()`<CR>
    " nnoremap <silent> <LocalLeader>a
    " \ :<C-u>Defx -resume -buffer-name=tab`tabpagenr()` -search=`expand('%:p')`<CR>
    "
    " function! s:defx_mappings() abort
    "     " Defx window keyboard mappings
    "     setlocal signcolumn=no
    "     " 使用回车打开文件
    "     nnoremap <silent><buffer><expr> <CR> defx#do_action('multi', ['drop'])
    " endfunction



    "--------------------------------------------------------------
    " defx
    " pip install pynvim
    " pip install Send2Trash
    " 
    
    let g:indentLine_fileTypeExclude = ['defx']
    let g:indentLine_fileTypeExclude = ['defx'] " defx filetype is defx
    let g:indentLine_bufTypeExclude = ['nofile']  " defx buftype is nofile
    let g:indentLine_bufNameExclude = ["\[defx\]*"]  " my defx bufname is [defx] -0
    
                " \ 'root_marker': '≡ ',
                " \ 'root_marker': '📁 ',
    call defx#custom#option('_', {
                \ 'root_marker': '[Root]: ',
                \ 'toggle': 1,
                \ 'winwidth': 66,
                \ 'split': 'vertical',
                \ 'direction': 'topleft',
                \ 'columns': 'mark:indent:icons:git:filename:time:size',
                \ 'show_ignored_files': 0,
                \ 'ignored_files':
                \     '.mypy_cache,.pytest_cache,.git,.hg,.svn,.stversions'
                \   . ',__pycache__,.sass-cache,*.egg-info,.DS_Store,*.pyc,*.swp'
                \   . ',.vscode,.idea,.vagrant',
                \ })
    call defx#custom#column('mark', {
                \ 'readonly_icon': '',
                \ 'selected_icon': '',
                \ })
    call defx#custom#column('indent', { 'indent': '  '})
    call defx#custom#column('icon', {
                \ 'root_icon': '',
                \ 'directory_icon': '',
                \ 'opened_icon': '',
                \ })
    call defx#custom#column('filename', {
                \ 'min_width': 30,
                \ 'max_width': 60,
                \ })
    call defx#custom#column('time', {'format': '%y-%m-%d %H:%M'})
    
    " Shown only current directory in root
    function! Root(path) abort
        return fnamemodify(a:path, ':t') . '/'
    endfunction
    call defx#custom#source('file', {'root': 'Root'})
    
    " Keymap
    map <silent> <Leader>e :Defx<CR>
    " nnoremap <silent> <Leader>e :Defx<CR>
    nnoremap <silent> <Leader>f :Defx `expand('%:p:h')`
                \ -search=`expand('%:p')`<CR>
    nnoremap <silent> <Leader>df :Defx `expand('%:p:h') ` -search=`expand('%:p')`<CR>
                \ :execute 'Defx -new -split=horizontal -direction= '
                \ . b:defx.paths[0]<CR>:wincmd p<CR>
                \ :execute float2nr(&lines /2) . 'wincmd _ '<CR>
    nnoremap <silent> <Leader>fb :Defx<CR>:Denite defx/dirmark<CR>
    nnoremap <silent> <Leader>fr :Defx -resume<CR>
    nnoremap <silent> <Leader>fm :call <SID>TmuxSplitCmd('ranger', '')<CR>



# Denite


    " Define mappings while in 'filter' mode
    "   <C-o>         - Switch to normal mode inside of search results
    "   <Esc>         - Exit denite window in any mode
    "   <CR>          - Open currently selected file in any mode
    "   <C-t>         - Open currently selected file in a new tab
    "   <C-v>         - Open currently selected file a vertical split
    "   <C-h>         - Open currently selected file in a horizontal split
    
    autocmd FileType denite-filter call s:denite_filter_my_settings()
    
    function! s:denite_filter_my_settings() abort
     imap <silent><buffer> <C-o>
     \ <Plug>(denite_filter_quit)
     inoremap <silent><buffer><expr> <Esc>
     \ denite#do_map('quit')
     nnoremap <silent><buffer><expr> <Esc>
     \ denite#do_map('quit')
     inoremap <silent><buffer><expr> <CR>
     \ denite#do_map('do_action')
     inoremap <silent><buffer><expr> <C-t>
     \ denite#do_map('do_action', 'tabopen')
     inoremap <silent><buffer><expr> <C-v>
     \ denite#do_map('do_action', 'vsplit')
     inoremap <silent><buffer><expr> <C-h>
     \ denite#do_map('do_action', 'split')
    endfunction



    " Define mappings while in denite window
    "   <CR>        - Opens currently selected file
    "   q or <Esc>  - Quit Denite window
    "   d           - Delete currenly selected file
    "   p           - Preview currently selected file
    "   <C-o> or i  - Switch to insert mode inside of filter prompt
    "   <C-t>       - Open currently selected file in a new tab
    "   <C-v>       - Open currently selected file a vertical split
    "   <C-h>       - Open currently selected file in a horizontal split
    
    autocmd FileType denite call s:denite_my_settings()
    
    function! s:denite_my_settings() abort
      nnoremap <silent><buffer><expr> <CR>
      \ denite#do_map('do_action')
      nnoremap <silent><buffer><expr> q
      \ denite#do_map('quit')
      nnoremap <silent><buffer><expr> <Esc>
      \ denite#do_map('quit')
      nnoremap <silent><buffer><expr> d
      \ denite#do_map('do_action', 'delete')
      nnoremap <silent><buffer><expr> pdo
      \ denite#do_map('do_action', 'preview')
      nnoremap <silent><buffer><expr> i
      \ denite#do_map('open_filter_buffer')
      nnoremap <silent><buffer><expr> <C-i>
      \ denite#do_map('open_filter_buffer')
      nnoremap <silent><buffer><expr> <C-t>
      \ denite#do_map('do_action', 'tabopen')
      nnoremap <silent><buffer><expr> <C-v>
      \ denite#do_map('do_action', 'vsplit')
      nnoremap <silent><buffer><expr> <C-h>
      \ denite#do_map('do_action', 'split')
    endfunction



    " Wrap in try/catch to avoid errors on initial install before plugin is available
    " === Denite setup ==="
    " Use ripgrep for searching current directory for files
    " By default, ripgrep will respect rules in .gitignore
    "   --files: Print each file that would be searched (but don't search)
    "   --glob:  Include or exclues files for searching that match the given glob
    "            (aka ignore .git files)
    "
    "call denite#custom#var('file/rec', 'command', ['rg', '--files', '--glob',  '!*.pyc', '!.git'])
    call denite#custom#var('file/rec', 'command', ['rg', '--files', '--glob',  '!.git'])
    
    
    " Use ripgrep in place of "grep"
    call denite#custom#var('grep', 'command', ['rg'])
    
    " Custom options for ripgrep
    "   --vimgrep:  Show results with every match on it's own line
    "   --hidden:   Search hidden directories and files
    "   --heading:  Show the file name above clusters of matches from each file
    "   --S:        Search case insensitively if the pattern is all lowercase
    call denite#custom#var('grep', 'default_opts', ['--hidden', '--vimgrep', '--heading', '-S'])
    
    " Recommended defaults for ripgrep via Denite docs
    call denite#custom#var('grep', 'recursive_opts', [])
    call denite#custom#var('grep', 'pattern_opt', ['--regexp'])
    call denite#custom#var('grep', 'separator', ['--'])
    call denite#custom#var('grep', 'final_opts', [])
    
    " Remove date from buffer list
    call denite#custom#var('buffer', 'date_format', '')
    
    " Custom options for Denite
    "   auto_resize             - Auto resize the Denite window height automatically.
    "   prompt                  - Customize denite prompt
    "   direction               - Specify Denite window direction as directly below current pane
    "   winminheight            - Specify min height for Denite window
    "   highlight_mode_insert   - Specify h1-CursorLine in insert mode
    "   prompt_highlight        - Specify color of prompt
    "   highlight_matched_char  - Matched characters highlight
    "   highlight_matched_range - matched range highlight
    let s:denite_options = {'default' : {
      \ 'split': 'floating',
      \ 'start_filter': 1,
      \ 'auto_resize': 1,
      \ 'source_names': 'short',
      \ 'prompt': 'λ ',
      \ 'statusline': 0,
      \ 'highlight_matched_char': 'QuickFixLine',
      \ 'highlight_matched_range': 'Visual',
      \ 'highlight_window_background': 'Visual',
      \ 'highlight_filter_background': 'DiffAdd',
      \ 'winrow': 1,
      \ 'vertical_preview': 1
      \ }}
    
    " Loop through denite options and enable them
    function! s:profile(opts) abort
      for l:fname in keys(a:opts)
        for l:dopt in keys(a:opts[l:fname])
          call denite#custom#option(l:fname, l:dopt, a:opts\[l:fname\][l:dopt])
        endfor
      endfor
    endfunction
    
    call s:profile(s:denite_options)
    catch
      echo 'Denite not installed. It should work after running :PlugInstall'
    endtry
    
    
    " === keymap === "
    "   b  - Browser currently open buffers
    "   f  - Browse list of files in current directory
    "   sg - Search current directory for occurences of given term and close window if no results
    "   sc - Search current directory for occurences of word under cursor
    nmap <Leader>b :Denite buffer<CR>
    nmap <Leader>f :DeniteProjectDir file/rec<CR>
    nmap <Leader>sg :<C-u>Denite grep:. -no-empty<CR>
    nmap <Leader>sc :<C-u>DeniteCursorWord grep:.<CR>
    " nmap <C-o> :Denite buffer<CR>
    



    " Setup default denite options
    call denite#custom#option('default', 'prompt', 'λ')
    " call denite#custom#var('file/rec', 'command', ['ag', '--follow', '--nocolor', '--nogroup', '-g', ''])
    " call denite#custom#var('grep', 'command', ['ag'])
    call denite#custom#var('file/rec', 'command', ['rg', '--follow', '--nocolor', '--nogroup', '-g', ''])
    call denite#custom#var('grep', 'command', ['rg'])
    call denite#custom#var('grep', 'default_opts', ['-i', '--vimgrep'])
    call denite#custom#var('grep', 'recursive_opts', [])
    call denite#custom#var('grep', 'pattern_opt', [])
    call denite#custom#var('grep', 'separator', ['--'])
    call denite#custom#var('grep', 'final_opts', [])
    call denite#custom#source('file_rec', 'sorters', ['sorter_sublime'])
    call denite#custom#filter('matcher_ignore_globs', 'ignore_globs',
          \ [ '.git/', '.ropeproject/', '__pycache__/*', '*.pyc', 'node_modules/',
          \   'venv/', 'images/', '*.min.*', 'img/', 'fonts/', '*.png'])
    
    nmap <Leader>p :Denite -start-filter file/rec<CR>
    nmap <C-p> :Denite -start-filter file/rec<CR>
    nmap <Leader>b :Denite buffer<CR>
    nnoremap \ :Denite grep<CR>
    
    nmap <Leader>f :DeniteProjectDir file/rec<CR>
    
    " Setup key mappings in the denite buffer
    nnoremap <silent><buffer><expr> <CR>
          \ denite#do_map('do_action')
    nnoremap <silent><buffer><expr> d
          \ denite#do_map('do_action', 'delete')
    nnoremap <silent><buffer><expr> p
          \ denite#do_map('do_action', 'preview')
    nnoremap <silent><buffer><expr> <C-v>
          \ denite#do_map('do_action', 'vsplit')
    nnoremap <silent><buffer><expr> <C-x>
          \ denite#do_map('do_action', 'split')
    nnoremap <silent><buffer><expr> <Esc>
          \ denite#do_map('quit')
    nnoremap <silent><buffer><expr> i
          \ denite#do_map('open_filter_buffer')
    nnoremap <silent><buffer><expr> <Space>
          \ denite#do_map('toggle_select').'j'
    
    " Setup the key mappings for the denite-filte buffer
    imap <silent><buffer> <Esc> <Plug>(denite_filter_quit)


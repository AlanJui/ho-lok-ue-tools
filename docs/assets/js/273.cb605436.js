(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{563:function(s,a,n){"use strict";n.r(a);var t=n(10),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"建置-pyton-作業環境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建置-pyton-作業環境"}},[s._v("#")]),s._v(" 建置 Pyton 作業環境")]),s._v(" "),a("h2",{attrs:{id:"摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[s._v("#")]),s._v(" 摘要")]),s._v(" "),a("p",[s._v("建置 Python 語言開發應用系統時，所需之作業環境。")]),s._v(" "),a("p",[s._v("主要作業：")]),s._v(" "),a("ul",[a("li",[s._v("使用 pyenv 管理 Python 版本")]),s._v(" "),a("li",[s._v("使用 Poetry 管理 Python 套件")])]),s._v(" "),a("h2",{attrs:{id:"安裝-pyenv-作業"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-pyenv-作業"}},[s._v("#")]),s._v(" 安裝 pyenv 作業")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("自 GitHub 安裝 pyenv")]),s._v(" "),a("p",[s._v("自 GitHub 下載 pyenv 及 pyenv-virtualenv")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd\ngit clone https://github.com/pyenv/pyenv.git ~/.pyenv\ngit clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("設定 Shell 作業環境")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("~/.profile:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-----------------------------------------------------------")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pyenv")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-----------------------------------------------------------")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PYENV_ROOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.pyenv"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PYENV_ROOT")]),s._v("/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" pyenv "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pyenv init -"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pyenv virtualenv-init -"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export PYENV_VIRTUALENV_DISABLE_PROMPT=1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIPENV_VERBOSITY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("重啟 SHELL 服務")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"pyenv-作業指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pyenv-作業指引"}},[s._v("#")]),s._v(" pyenv 作業指引")]),s._v(" "),a("h3",{attrs:{id:"安裝某一-python-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝某一-python-版本"}},[s._v("#")]),s._v(" 安裝某一 Python 版本")]),s._v(" "),a("p",[s._v("設定作業使用之 Python 直譯器版本。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("透過 pyenv 安裝 python 直譯器")]),s._v(" "),a("p",[s._v("透過 pyenv 這套 python 版本管理工具，安裝 python v3.8.5\n版本之直譯器。")]),s._v(" "),a("p",[s._v("(a) 執行安裝指令：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pyenv "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(".5\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("(b) 驗證安裝完成")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ pyenv versions\n* system "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("set by /Users/alanjui/.pyenv/version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n$ pyenv "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(".5\npython-build: use openssl@1.1 from homebrew\npython-build: use readline from homebrew\nDownloading Python-3.8.5.tar.xz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" https://www.python.org/ftp/python/3.8.5/Python-3.8.5.tar.xz\nInstalling Python-3.8.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\npython-build: use readline from homebrew\npython-build: use zlib from xcode sdk\nInstalled Python-3.8.5 to /Users/alanjui/.pyenv/versions/3.8.5\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("檢視作業系統中已安裝之 Python 直譯器。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ pyenv versions\n* system "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("set by /Users/alanjui/.pyenv/version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(".5\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"設定「預設之-python-直譯器」"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#設定「預設之-python-直譯器」"}},[s._v("#")]),s._v(" 設定「預設之 Python 直譯器」")]),s._v(" "),a("p",[s._v("設定作業系統層級的「預設 Python 直譯器」。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pyenv global "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VerNo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Ex: Without Python 2 specified")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ pyenv global "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(".5\n\n$ pyenv versions\n  system\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(".5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("set by /Users/alanjui/.pyenv/version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Ex: With Python 2 and Python 3 specified")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$  pyenv versions\n  system\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".16\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(".5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("set by /Users/alanjui/.pyenv/version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.9")]),s._v(".1\n\n$ pyenv global "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".16 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.9")]),s._v(".1\n\n$ pyenv versions\n  system\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".16 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("set by /Users/alanjui/.pyenv/version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(".5\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.9")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("set by /Users/alanjui/.pyenv/version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" python\n/usr/bin/python\n$ la /usr/bin/python\nlrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root  wheel    75B  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" /usr/bin/python -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7\n$ /usr/bin/python\n\nWARNING: Python "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(" is not recommended.\nThis version is included "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" macOS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" compatibility with legacy software.\nFuture versions of macOS will not include Python "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".\nInstead, it is recommended that you transition to using "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'python3'")]),s._v(" from within Terminal.\n\nPython "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".16 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default, Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":00:36"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GCC Apple LLVM "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.0")]),s._v(".0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clang-1200.0.30.4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+internal-os, ptrauth-isa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sign+stri on darwin\nType "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"help"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"copyright"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"credits"')]),s._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"license"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ^D\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" python2\n/usr/bin/python2\n$ la /usr/bin/python2\nlrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root  wheel    75B  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" /usr/bin/python2 -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" python3\n/usr/local/bin/python3\n$ la /usr/local/bin/python3\nlrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" alanjui  admin    40B  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":23 /usr/local/bin/python3 -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/Cellar/python@3.9/3.9.1_8/bin/python3\n$ /usr/local/bin/python3\nPython "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.9")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default, Feb  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(", 07:38:02"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Clang "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.0")]),s._v(".0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clang-1200.0.32.29"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" on darwin\nType "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"help"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"copyright"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"credits"')]),s._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"license"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ^D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h2",{attrs:{id:"poetry-作業指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#poetry-作業指引"}},[s._v("#")]),s._v(" poetry 作業指引")]),s._v(" "),a("h3",{attrs:{id:"安裝-poetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-poetry"}},[s._v("#")]),s._v(" 安裝 poetry")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安裝軟體。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sSL")]),s._v(" https://install.python-poetry.org "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" python3 -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("設定 Shell 執行路徑。")]),s._v(" "),a("p",[s._v("(a) 編輯 Shell 設定檔： ~/.bashrc")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("nvim ~/.bashrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("(b) 加入設定")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/sammy/.local/bin:'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("(c) 重啟 Shell")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("驗證已安裝成功")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("poetry "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"管理-python-虛擬環境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理-python-虛擬環境"}},[s._v("#")]),s._v(" 管理 python 虛擬環境")]),s._v(" "),a("h3",{attrs:{id:"建置-python-虛擬環境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建置-python-虛擬環境"}},[s._v("#")]),s._v(" 建置 python 虛擬環境")]),s._v(" "),a("p",[s._v("建置專案使用之 Python 虛擬環境。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/workspace/django/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ProjectRoot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/\npyenv "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VerNo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\npython "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" venv .venv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"啟用專案虛擬環境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#啟用專案虛擬環境"}},[s._v("#")]),s._v(" 啟用專案虛擬環境")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("透過 poetry 啟動專案虛擬環境。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("poetry shell\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("安裝 python 套件管理工具： pipenv 。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("poetry add <PackageName>\npoetry add <PackageName> --group dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"安裝-python-套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-python-套件"}},[s._v("#")]),s._v(" 安裝 Python 套件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("poetry install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{368:function(a,s,n){"use strict";n.r(s);var e=n(10),l=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"lua-環境建置指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lua-環境建置指引"}},[a._v("#")]),a._v(" Lua 環境建置指引")]),a._v(" "),s("p",[a._v("Ref URL: https://www.lua.org/manual/5.4/readme.html")]),a._v(" "),s("h2",{attrs:{id:"building-lua"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-lua"}},[a._v("#")]),a._v(" Building Lua")]),a._v(" "),s("ol",[s("li",[a._v("Download source.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ wget https://luarocks.org/releases/luarocks-X.Y.Z.tar.gz\n$ tar zxpf luarocks-X.Y.Z.tar.gz\n$ la lua-X.Y.Z\n總計 24\ndrwxr-xr-x 4 alanjui alanjui 4096 11月 13 23:42 .\ndrwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:44 ..\ndrwxr-xr-x 2 alanjui alanjui 4096 11月 13 23:35 doc\n-rw-r--r-- 1 alanjui alanjui 3146 11月 11 04:54 Makefile\n-rw-r--r-- 1 alanjui alanjui  151 11月 13 23:42 README\ndrwxr-xr-x 2 alanjui alanjui 4096 11月 13 23:33 src\n$ cd luarocks-X.Y.Z\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("Make sure build platform.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("make help\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("The platforms currently supported are:")]),a._v(" "),s("ul",[s("li",[a._v("guess")]),a._v(" "),s("li",[a._v("aix")]),a._v(" "),s("li",[a._v("bsd")]),a._v(" "),s("li",[a._v("c89")]),a._v(" "),s("li",[a._v("freebsd")]),a._v(" "),s("li",[a._v("generic")]),a._v(" "),s("li",[a._v("linux")]),a._v(" "),s("li",[a._v("linux-readline")]),a._v(" "),s("li",[a._v("macosx")]),a._v(" "),s("li",[a._v("mingw")]),a._v(" "),s("li",[a._v("posix")]),a._v(" "),s("li",[a._v("solaris")])]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("Build from source code.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("make linux-readline\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alanjui@VB01-Debian-10:~/build/lua-5.4.2$ make linux-readline\nmake[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\nmake all SYSCFLAGS=\"-DLUA_USE_LINUX -DLUA_USE_READLINE\" SYSLIBS=\"-Wl,-E -ldl -lreadline\"\nmake[2]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\nmake[2]: Nothing to be done for 'all'.\nmake[2]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\nmake[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("The compilation takes only a few moments and produces three files in the\nsrc directory:")]),a._v(" "),s("ul",[s("li",[a._v("lua (the interpreter),")]),a._v(" "),s("li",[a._v("luac (the compiler),")]),a._v(" "),s("li",[a._v("liblua.a (the library).")])]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[a._v("To check that Lua has bben built correctly.")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("make test\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alanjui@VB01-Debian-10:~/build/lua-5.4.2$ make test\nmake[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\n./lua -v\nLua 5.4.2  Copyright (C) 1994-2020 Lua.org, PUC-Rio\nmake[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h2",{attrs:{id:"installing-lua"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-lua"}},[a._v("#")]),a._v(" Installing Lua")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo make linux-readline install\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"install-lua-locally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-lua-locally"}},[a._v("#")]),a._v(" Install Lua locally")]),a._v(" "),s("p",[a._v('To install Lua locally after building it, do "make local". This will create\na directory install with subdirectories bin, include, lib, man, share, and\ninstall Lua as listed below.')]),a._v(" "),s("ul",[s("li",[a._v("bin:\n"),s("ul",[s("li",[a._v("lua")]),a._v(" "),s("li",[a._v("luac")])])]),a._v(" "),s("li",[a._v("include:\n"),s("ul",[s("li",[a._v("lua.h")]),a._v(" "),s("li",[a._v("luaconf.h")]),a._v(" "),s("li",[a._v("lualib.h")]),a._v(" "),s("li",[a._v("lauxlib.h")]),a._v(" "),s("li",[a._v("lua.hpp")])])]),a._v(" "),s("li",[a._v("lib:\n"),s("ul",[s("li",[a._v("liblua.a")])])]),a._v(" "),s("li",[a._v("man/man1:\n"),s("ul",[s("li",[a._v("lua.1")]),a._v(" "),s("li",[a._v("luac.1")])])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("make linux-readline local\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alanjui@VB01-Debian-10:~/build/lua-5.4.2$ make linux-readline local\nmake[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\nmake all SYSCFLAGS=\"-DLUA_USE_LINUX -DLUA_USE_READLINE\" SYSLIBS=\"-Wl,-E -ldl -lreadline\"\nmake[2]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\nmake[2]: Nothing to be done for 'all'.\nmake[2]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\nmake[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\nmake install INSTALL_TOP=../install\nmake[1]: Entering directory '/home/alanjui/build/lua-5.4.2'\ncd src && mkdir -p ../install/bin ../install/include ../install/lib ../install/man/man1 ../install/share/lua/5.4 ../install/lib/lua/5.4\ncd src && install -p -m 0755 lua luac ../install/bin\ncd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp ../install/include\ncd src && install -p -m 0644 liblua.a ../install/lib\ncd doc && install -p -m 0644 lua.1 luac.1 ../install/man/man1\nmake[1]: Leaving directory '/home/alanjui/build/lua-5.4.2'\n\nalanjui@VB01-Debian-10:~/build/lua-5.4.2$ la\n總計 28\ndrwxr-xr-x 5 alanjui alanjui 4096  2月 19 21:28 .\ndrwxr-xr-x 6 alanjui alanjui 4096  2月 18 19:40 ..\ndrwxr-xr-x 2 alanjui alanjui 4096 11月 13 23:35 doc\ndrwxr-xr-x 7 alanjui alanjui 4096  2月 19 21:28 install\n-rw-r--r-- 1 alanjui alanjui 3146 11月 11 04:54 Makefile\n-rw-r--r-- 1 alanjui alanjui  151 11月 13 23:42 README\ndrwxr-xr-x 2 alanjui alanjui 4096  2月 18 19:40 src\n\nalanjui@VB01-Debian-10:~/build/lua-5.4.2$ la install\n總計 28\ndrwxr-xr-x 7 alanjui alanjui 4096  2月 19 21:28 .\ndrwxr-xr-x 5 alanjui alanjui 4096  2月 19 21:28 ..\ndrwxr-xr-x 2 alanjui alanjui 4096  2月 19 21:28 bin\ndrwxr-xr-x 2 alanjui alanjui 4096  2月 19 21:28 include\ndrwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:28 lib\ndrwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:28 man\ndrwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:28 share\n\nalanjui@VB01-Debian-10:~/build/lua-5.4.2$ tree install\ninstall\n├── bin\n│   ├── lua\n│   └── luac\n├── include\n│   ├── lauxlib.h\n│   ├── luaconf.h\n│   ├── lua.h\n│   ├── lua.hpp\n│   └── lualib.h\n├── lib\n│   ├── liblua.a\n│   └── lua\n│       └── 5.4\n├── man\n│   └── man1\n│       ├── lua.1\n│       └── luac.1\n└── share\n    └── lua\n        └── 5.4\n\n10 directories, 10 files\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br"),s("span",{staticClass:"line-number"},[a._v("52")]),s("br"),s("span",{staticClass:"line-number"},[a._v("53")]),s("br"),s("span",{staticClass:"line-number"},[a._v("54")]),s("br"),s("span",{staticClass:"line-number"},[a._v("55")]),s("br"),s("span",{staticClass:"line-number"},[a._v("56")]),s("br"),s("span",{staticClass:"line-number"},[a._v("57")]),s("br"),s("span",{staticClass:"line-number"},[a._v("58")]),s("br"),s("span",{staticClass:"line-number"},[a._v("59")]),s("br"),s("span",{staticClass:"line-number"},[a._v("60")]),s("br")])]),s("p",[a._v('To install Lua locally, but in some other directory,\ndo "make install INSTALL_TOP=xxx", where xxx is your chosen directory.\nThe installation starts in the src and doc directories, so take care\nif INSTALL_TOP is not an absolute path.')]),a._v(" "),s("h3",{attrs:{id:"install-lua-golbally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-lua-golbally"}},[a._v("#")]),a._v(" Install Lua golbally")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo make linux-readline install INSTALL_TOP=/usr\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alanjui@VB01-Debian-10:~/build/lua-5.4.2$ sudo make linux-readline install INSTALL_TOP=/usr\nmake[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\nmake all SYSCFLAGS=\"-DLUA_USE_LINUX -DLUA_USE_READLINE\" SYSLIBS=\"-Wl,-E -ldl -lreadline\"\nmake[2]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\nmake[2]: Nothing to be done for 'all'.\nmake[2]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\nmake[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\ncd src && mkdir -p /usr/bin /usr/include /usr/lib /usr/man/man1 /usr/share/lua/5.4 /usr/lib/lua/5.4\ncd src && install -p -m 0755 lua luac /usr/bin\ncd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/include\ncd src && install -p -m 0644 liblua.a /usr/lib\ncd doc && install -p -m 0644 lua.1 luac.1 /usr/man/man1\nalanjui@VB01-Debian-10:~/build/lua-5.4.2$\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("These are the only directories you need for development. If you only want\nto run Lua programs, you only need the files in bin and man. The files in\ninclude and lib are needed for embedding Lua in C or C++ programs.")]),a._v(" "),s("h2",{attrs:{id:"customization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[a._v("#")]),a._v(" Customization")]),a._v(" "),s("p",[a._v("Three kinds of things can be customized by editing a file:")]),a._v(" "),s("ul",[s("li",[a._v("Where and how to install Lua — edit Makefile.")]),a._v(" "),s("li",[a._v("How to build Lua — edit src/Makefile.")]),a._v(" "),s("li",[a._v("Lua features — edit src/luaconf.h.")])]),a._v(" "),s("p",[a._v("You don't actually need to edit the Makefiles because you may set the relevant\nvariables in the command line when invoking make. Nevertheless, it's probably\nbest to edit and save the Makefiles to record the changes you've made.")]),a._v(" "),s("p",[a._v("On the other hand, if you need to customize some Lua features, you'll need to\nedit src/luaconf.h before building and installing Lua. The edited file will be\nthe one installed, and it will be used by any Lua clients that you build, to\nensure consistency. Further customization is available to experts by editing\nthe Lua sources.")]),a._v(" "),s("h2",{attrs:{id:"configuration-for-alternatives-infrastructure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-for-alternatives-infrastructure"}},[a._v("#")]),a._v(" Configuration for alternatives infrastructure")]),a._v(" "),s("h3",{attrs:{id:"install-lua-options-for-alternatives-infrastructure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-lua-options-for-alternatives-infrastructure"}},[a._v("#")]),a._v(" Install lua options for alternatives infrastructure")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo cp /usr/bin/lua /usr/bin/lua5.4\n$ sudo cp /usr/bin/luac /usr/bin/luac5.4\n$ cd /usr/man/man1\n$ sudo gzip lua.1\n$ sudo gzip luac.1\n$ sudo cp lua.1.gz /usr/share/man/man1/lua5.4.2.gz\n$ sudo cp luac.1.gz /usr/share/man/man1/luac5.4.2.gz\n\n$ sudo update-alternatives \\\n  --install /usr/bin/lua lua-interpreter /usr/bin/lua5.4 130 \\\n  --slave /usr/share/man/man1/lua.1.gz lua-manual /usr/share/man/man1/lua5.4.2.gz\n\n$ sudo update-alternatives \\\n  --install /usr/bin/luac lua-compiler /usr/bin/luac5.4 130 \\\n  --slave /usr/share/man/man1/luac.1.gz lua-compiler-manual /usr/share/man/man1/luac5.4.2.gz\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h3",{attrs:{id:"change-default-lua-interpreter-compiler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-default-lua-interpreter-compiler"}},[a._v("#")]),a._v(" Change default Lua Interpreter / Compiler")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo update-alternatives --config lua-interpreter\n\n$ sudo update-alternatives --config lua-compiler\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"remove-option-for-alternatives-infrastructure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-option-for-alternatives-infrastructure"}},[a._v("#")]),a._v(" Remove option for alternatives infrastructure")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo update-alternatives --remove lua-interpreter /usr/share/lua/5.4/lua\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"install-lua-support-for-vim-neovim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-lua-support-for-vim-neovim"}},[a._v("#")]),a._v(" Install Lua Support for Vim/Neovim")]),a._v(" "),s("h3",{attrs:{id:"install-lua-language-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-lua-language-server"}},[a._v("#")]),a._v(" Install Lua Language Server")]),a._v(" "),s("p",[a._v("Ref: https://emacs-lsp.github.io/lsp-mode/page/lsp-lua-language-server/")]),a._v(" "),s("ol",[s("li",[a._v("Install ninja")])]),a._v(" "),s("p",[a._v("Debian/Ubuntu:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt install ninja-build\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("ArchLinux:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo pacman -S ninja\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("macOS:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew install ninja\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[a._v("Make sure you have C++17")])]),a._v(" "),s("li",[s("p",[a._v("Clone project")])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git clone https://github.com/sumneko/lua-language-server\ncd lua-language-server\ngit submodule update --init --recursive\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("Build")])]),a._v(" "),s("p",[a._v("Linux:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd 3rd/luamake\nninja -f ninja/linux.ninja\ncd ../..\n./3rd/luamake/luamake rebuild\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("macOS:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd 3rd/luamake\nninja -f ninja/macos.ninja\ncd ../..\n./3rd/luamake/luamake rebuild\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("Run")])]),a._v(" "),s("p",[a._v("Linux:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./bin/Linux/lua-language-server -E ./main.lua\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("macOS:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mv ~/build/lua-language-server ~/.local/share/\ncd ~/.local/share/lua-language-server\n./bin/macOS/lua-language-server -E ./main.lua\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ol",{attrs:{start:"6"}},[s("li",[a._v("Install")])]),a._v(" "),s("p",[a._v("Linux:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mv ~/build/lua-language-server ~/.local/share/\ncd ~/.local/share/lua-language-server/bin/Linux\ncp * ../\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("macOS:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mv ~/build/lua-language-server ~/.local/share/\ncd ~/.local/share/lua-language-server/bin/macOS\ncp * ../\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"install-lua-language-server-support-for-vim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-lua-language-server-support-for-vim"}},[a._v("#")]),a._v(" Install lua language server support for vim")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Start Vim 8 / Neovim 0.5")])]),a._v(" "),s("li",[s("p",[a._v("透過 coc-nvim 執行安裝指令：")])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(":CocInstall coc-lua\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("設定 Lua Language Server Path")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(":CocConfig\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("【註】：等同 "),s("code",[a._v("nvim ~/.config/nvim/coc-settings.json")]),a._v(" 或\n"),s("code",[a._v("vim ~/.vim/coc-settings.json")]),a._v(" 。")]),a._v(" "),s("p",[a._v("coc-settings.json")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{\n    ....\n    "languageserver": {\n        "bash": {\n            ....\n        },\n        "lua": {\n            "command": "~/.local/share/lua-language-server/bin/lua-language-server",\n            "args": [\n              "-E",\n              "-e",\n              "LANG=en",\n              "~/.local/share/lua-language-server/main.lua"\n            ],\n            "filetypes": ["lua"],\n            "trace.server": "verbose"\n        }\n    },\n    ....\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("h3",{attrs:{id:"verify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify"}},[a._v("#")]),a._v(" Verify")]),a._v(" "),s("ol",[s("li",[a._v("Editing source code")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd ~/.vim/lua\nvim testLua.lua\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("Run")])]),a._v(" "),s("p",[a._v("Presss key: [Space][a][t] to open a floating window for terminal.")]),a._v(" "),s("p",[a._v("Entering commad below:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lua testLua.lua\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Entering "),s("code",[a._v("exit")]),a._v(" command to close terminal window and return to vim editor.")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("exit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=l.exports}}]);
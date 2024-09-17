(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{538:function(n,e,s){"use strict";s.r(e);var a=s(10),t=Object(a.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"python-指引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-指引"}},[n._v("#")]),n._v(" Python 指引")]),n._v(" "),e("h2",{attrs:{id:"語法指引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#語法指引"}},[n._v("#")]),n._v(" 語法指引")]),n._v(" "),e("h3",{attrs:{id:"errors-與-exceptions-處理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#errors-與-exceptions-處理"}},[n._v("#")]),n._v(" Errors 與 Exceptions 處理")]),n._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://docs.python.org/3/tutorial/errors.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Python: 8. Errors and Exceptions"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("Python 語言，在執行時期，遇有問題發生時，如： 20 / x ，而 x = 0；或自 Internet 下\n載某檔案時，因網路發生問題，遲遲無法完成檔案下載...，此等時候，即為引用 Exceptions\n的處理時機。")])])]),n._v(" "),e("h2",{attrs:{id:"應用指引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#應用指引"}},[n._v("#")]),n._v(" 應用指引")]),n._v(" "),e("h3",{attrs:{id:"關閉-pylint-的某些規則"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#關閉-pylint-的某些規則"}},[n._v("#")]),n._v(" 關閉 pylint 的某些規則")]),n._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://stackoverflow.com/questions/4341746/how-do-i-disable-a-pylint-warning",target:"_blank",rel:"noopener noreferrer"}},[n._v("How do I disable a Pylint warning?"),e("OutboundLink")],1)])]),n._v(" "),e("li",[e("p",[n._v("在 .pylintrc 檔案中指定：")])])]),n._v(" "),e("p",[n._v("[MESSAGES CONTROL] 》disagle = [Message_ID]/[Symbolic_Name]")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("disable=W0511, C0321\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("disable=locally-disabled, multiple-statements, fixme, line-too-long\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("ul",[e("li",[n._v("在 .py 程式碼，要求 pylint 暫時怱略：")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("from settings_local import *   # pylint: disable=wrong-import-position\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("h2",{attrs:{id:"問題診斷與狀況排除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#問題診斷與狀況排除"}},[n._v("#")]),n._v(" 問題診斷與狀況排除")]),n._v(" "),e("h3",{attrs:{id:"import-指令無法放在底端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-指令無法放在底端"}},[n._v("#")]),n._v(" import 指令無法放在底端")]),n._v(" "),e("p",[n._v("📰\n在 .py 的原始碼檔案，無法將 import 指令放在檔案底端；每當執行「儲存檔案」時，總\n被 pylint 自動搬移至原始碼檔案開頭處。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("....\nimport settings_local from *\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("🔍")]),n._v(" "),e("p",[n._v("問題導因出在 coc.nvim ，依據「coc-settings.json」的設定。因為使用者設定使用\n「格式標準」為：autopep8 ，且於設定中要求「儲檔時依據格式標準，自動調整原始碼\n之排版，故而導至這個問題發生。")]),n._v(" "),e("p",[n._v("排除方法之一：於 coc-settings.json 檔中變更設定，要求忽略 autopep8 的規則，\nE401: Fix module level import not at top of file 。")]),n._v(" "),e("p",[n._v("🔨 變更 coc-settings.json 設定檔")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('....\n"python.formatting.autopep8Args": ["--ignore=E402"],\n....\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("h2",{attrs:{id:"參考資料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[n._v("#")]),n._v(" 參考資料")]),n._v(" "),e("h3",{attrs:{id:"coc-python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coc-python"}},[n._v("#")]),n._v(" coc-python")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/neoclide/coc-python",target:"_blank",rel:"noopener noreferrer"}},[n._v("GitHub: neoclide/coc-python"),e("OutboundLink")],1)]),n._v(" "),e("h3",{attrs:{id:"pylint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pylint"}},[n._v("#")]),n._v(" pylint")]),n._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://pypi.org/project/autopep8/",target:"_blank",rel:"noopener noreferrer"}},[n._v("autopep8"),e("OutboundLink")],1)])]),n._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://stackoverflow.com/questions/53579109/formatting-on-save-moves-import-statment-in-vs-code",target:"_blank",rel:"noopener noreferrer"}},[n._v("Formatting on save moves import statment in VS-Code"),e("OutboundLink")],1)])])]),n._v(" "),e("h3",{attrs:{id:"module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[n._v("#")]),n._v(" Module")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://stackabuse.com/creating-and-importing-modules-in-python/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Creating and Importing Modules in Python"),e("OutboundLink")],1)]),n._v(" "),e("h3",{attrs:{id:"pycharm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pycharm"}},[n._v("#")]),n._v(" PyCharm")]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://wsgzao.github.io/post/autopep8/",target:"_blank",rel:"noopener noreferrer"}},[n._v("PyCharm 使用 autopep8 按 PEP8 风格自动排版 Python 代码"),e("OutboundLink")],1)])]),n._v(" "),e("h3",{attrs:{id:"pep8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pep8"}},[n._v("#")]),n._v(" PEP8")]),n._v(" "),e("ul",[e("li",[n._v("autopep8 可修復之問題")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('E11  - Fix indentation.\nE121 - Fix indentation to be a multiple of four.\nE122 - Add absent indentation for hanging indentation.\nE123 - Align closing bracket to match opening bracket.\nE124 - Align closing bracket to match visual indentation.\nE125 - Indent to distinguish line from next logical line.\nE126 - Fix over-indented hanging indentation.\nE127 - Fix visual indentation.\nE128 - Fix visual indentation.\nE129 - Fix visual indentation.\nE131 - Fix hanging indent for unaligned continuation line.\nE133 - Fix missing indentation for closing bracket.\nE20  - Remove extraneous whitespace.\nE211 - Remove extraneous whitespace.\nE22  - Fix extraneous whitespace around keywords.\nE224 - Remove extraneous whitespace around operator.\nE225 - Fix missing whitespace around operator.\nE226 - Fix missing whitespace around arithmetic operator.\nE227 - Fix missing whitespace around bitwise/shift operator.\nE228 - Fix missing whitespace around modulo operator.\nE231 - Add missing whitespace.\nE241 - Fix extraneous whitespace around keywords.\nE242 - Remove extraneous whitespace around operator.\nE251 - Remove whitespace around parameter \'=\' sign.\nE252 - Missing whitespace around parameter equals.\nE26  - Fix spacing after comment hash for inline comments.\nE265 - Fix spacing after comment hash for block comments.\nE266 - Fix too many leading \'#\' for block comments.\nE27  - Fix extraneous whitespace around keywords.\nE301 - Add missing blank line.\nE302 - Add missing 2 blank lines.\nE303 - Remove extra blank lines.\nE304 - Remove blank line following function decorator.\nE305 - Expected 2 blank lines after end of function or class.\nE306 - Expected 1 blank line before a nested definition.\nE401 - Put imports on separate lines.\nE402 - Fix module level import not at top of file\nE501 - Try to make lines fit within --max-line-length characters.\nE502 - Remove extraneous escape of newline.\nE701 - Put colon-separated compound statement on separate lines.\nE70  - Put semicolon-separated compound statement on separate lines.\nE711 - Fix comparison with None.\nE712 - Fix comparison with boolean.\nE713 - Use \'not in\' for test for membership.\nE714 - Use \'is not\' test for object identity.\nE721 - Use "isinstance()" instead of comparing types directly.\nE722 - Fix bare except.\nE731 - Use a def when use do not assign a lambda expression.\nW291 - Remove trailing whitespace.\nW292 - Add a single newline at the end of the file.\nW293 - Remove trailing whitespace on blank line.\nW391 - Remove trailing blank lines.\nW503 - Fix line break before binary operator.\nW504 - Fix line break after binary operator.\nW601 - Use "in" rather than "has_key()".\nW602 - Fix deprecated form of raising exception.\nW603 - Use "!=" instead of "<>"\nW604 - Use "repr()" instead of backticks.\nW605 - Fix invalid escape sequence \'x\'.\nW690 - Fix various deprecated code (via lib2to3).\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);
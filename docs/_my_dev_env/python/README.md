---
sidebar: auto
---

# Python 指引

## 語法指引

### Errors 與 Exceptions 處理

- [Python: 8. Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)

  Python 語言，在執行時期，遇有問題發生時，如： 20 / x ，而 x = 0；或自 Internet 下
  載某檔案時，因網路發生問題，遲遲無法完成檔案下載...，此等時候，即為引用 Exceptions
  的處理時機。

## 應用指引

### 關閉 pylint 的某些規則

- [How do I disable a Pylint warning?](https://stackoverflow.com/questions/4341746/how-do-i-disable-a-pylint-warning)

- 在 .pylintrc 檔案中指定：

[MESSAGES CONTROL] 》disagle = [Message_ID]/[Symbolic_Name]

```
disable=W0511, C0321
```

```
disable=locally-disabled, multiple-statements, fixme, line-too-long
```

- 在 .py 程式碼，要求 pylint 暫時怱略：

```
from settings_local import *   # pylint: disable=wrong-import-position
```

## 問題診斷與狀況排除

### import 指令無法放在底端

📰
在 .py 的原始碼檔案，無法將 import 指令放在檔案底端；每當執行「儲存檔案」時，總
被 pylint 自動搬移至原始碼檔案開頭處。

```
....
import settings_local from *
```

🔍

問題導因出在 coc.nvim ，依據「coc-settings.json」的設定。因為使用者設定使用
「格式標準」為：autopep8 ，且於設定中要求「儲檔時依據格式標準，自動調整原始碼
之排版，故而導至這個問題發生。

排除方法之一：於 coc-settings.json 檔中變更設定，要求忽略 autopep8 的規則，
E401: Fix module level import not at top of file 。

🔨 變更 coc-settings.json 設定檔

```
....
"python.formatting.autopep8Args": ["--ignore=E402"],
....
```

## 參考資料

### coc-python

[GitHub: neoclide/coc-python](https://github.com/neoclide/coc-python)

### pylint

- [autopep8](https://pypi.org/project/autopep8/)

- [Formatting on save moves import statment in VS-Code](https://stackoverflow.com/questions/53579109/formatting-on-save-moves-import-statment-in-vs-code)

### Module

[Creating and Importing Modules in Python](https://stackabuse.com/creating-and-importing-modules-in-python/)

### PyCharm

- [PyCharm 使用 autopep8 按 PEP8 风格自动排版 Python 代码](https://wsgzao.github.io/post/autopep8/)

### PEP8

- autopep8 可修復之問題

```
E11  - Fix indentation.
E121 - Fix indentation to be a multiple of four.
E122 - Add absent indentation for hanging indentation.
E123 - Align closing bracket to match opening bracket.
E124 - Align closing bracket to match visual indentation.
E125 - Indent to distinguish line from next logical line.
E126 - Fix over-indented hanging indentation.
E127 - Fix visual indentation.
E128 - Fix visual indentation.
E129 - Fix visual indentation.
E131 - Fix hanging indent for unaligned continuation line.
E133 - Fix missing indentation for closing bracket.
E20  - Remove extraneous whitespace.
E211 - Remove extraneous whitespace.
E22  - Fix extraneous whitespace around keywords.
E224 - Remove extraneous whitespace around operator.
E225 - Fix missing whitespace around operator.
E226 - Fix missing whitespace around arithmetic operator.
E227 - Fix missing whitespace around bitwise/shift operator.
E228 - Fix missing whitespace around modulo operator.
E231 - Add missing whitespace.
E241 - Fix extraneous whitespace around keywords.
E242 - Remove extraneous whitespace around operator.
E251 - Remove whitespace around parameter '=' sign.
E252 - Missing whitespace around parameter equals.
E26  - Fix spacing after comment hash for inline comments.
E265 - Fix spacing after comment hash for block comments.
E266 - Fix too many leading '#' for block comments.
E27  - Fix extraneous whitespace around keywords.
E301 - Add missing blank line.
E302 - Add missing 2 blank lines.
E303 - Remove extra blank lines.
E304 - Remove blank line following function decorator.
E305 - Expected 2 blank lines after end of function or class.
E306 - Expected 1 blank line before a nested definition.
E401 - Put imports on separate lines.
E402 - Fix module level import not at top of file
E501 - Try to make lines fit within --max-line-length characters.
E502 - Remove extraneous escape of newline.
E701 - Put colon-separated compound statement on separate lines.
E70  - Put semicolon-separated compound statement on separate lines.
E711 - Fix comparison with None.
E712 - Fix comparison with boolean.
E713 - Use 'not in' for test for membership.
E714 - Use 'is not' test for object identity.
E721 - Use "isinstance()" instead of comparing types directly.
E722 - Fix bare except.
E731 - Use a def when use do not assign a lambda expression.
W291 - Remove trailing whitespace.
W292 - Add a single newline at the end of the file.
W293 - Remove trailing whitespace on blank line.
W391 - Remove trailing blank lines.
W503 - Fix line break before binary operator.
W504 - Fix line break after binary operator.
W601 - Use "in" rather than "has_key()".
W602 - Fix deprecated form of raising exception.
W603 - Use "!=" instead of "<>"
W604 - Use "repr()" instead of backticks.
W605 - Fix invalid escape sequence 'x'.
W690 - Fix various deprecated code (via lib2to3).
```

---
sidebar: auto
---

<!-- markdownlint-disable MD024 MD043 -->

# 《Poetry 操作指引》

【參考文件】： <https://python-poetry.org/docs/cli/>

## Poetry 管理作業

### 更新到最新版

更新到最新版。

```sh
poetry update
```

### 查詢 VirtualEnv 環境

確認 poetry 的虛擬環境是否已經被正確地啟動。你可以使用
poetry env info 指令來查看當前的 poetry 虛擬環境訊息。

```sh
❯ poetry env info

Virtualenv
Python:         3.10.6
Implementation: CPython
Path:           /Users/alanjui/workspace/rime/han_gi/.venv
Executable:     /Users/alanjui/workspace/rime/han_gi/.venv/bin/python
Valid:          True

System
Platform:   darwin
OS:         posix
Python:     3.10.6
Path:       /Users/alanjui/.pyenv/versions/3.10.6
Executable: /Users/alanjui/.pyenv/versions/3.10.6/bin/python3.10
```

## 安裝套件

### 套件安裝前置作業

啟用 Python Virtual Environment 。

```sh
poetry shell
```

### App 用套件

```sh
poetry add beautifulsoup
```

### App 開發用套件

```sh
poetry add types-requests --group dev
```

## mypy

### Source Code

```sh
import requests
from bs4 import BeautifulSoup


# 使用《中國哲學書電子化計劃》的《漢字字典》查「讀音」
# url = 'https://ctext.org/dictionary.pl?if=gb&char=東'
def tsa_huan_tshiat(han_ji):
    url = f'https://ctext.org/dictionary.pl?if=gb&char={han_ji}'

    # 發送 HTTP GET Request
    response = requests.get(url)

    # 解析 HTTP Response 返回的網頁（HTML）內容
    soup = BeautifulSoup(response.text, 'html.parser')

    # 自「網頁」中的「表格（Table）」，查找「反切」欄位，及取出「漢字讀音」
    table = soup.find('table', class_='info')
    rows = table.find_all('tr')
    for row in rows:
        th = row.find('th')
        if th and th.text.strip() == '反切:':
            td = row.find('td')
            if td:
                # 提取反切内容
                anchor = td.find('a')
                if anchor:
                    result = anchor.text.strip()
                    return result

    # 若輸入之「漢字」查找不到「反切」的讀音，則回傳 None 表「找不到」
    return None
```

### Lint Error

```sh
   article_pronunciation/lib_tsa_huan_tshiat.py  6
 │     Library stubs not installed for "requests" mypy (import) [1, 1]
 │     Import "requests" could not be resolved from source Pyright (reportMissingModuleSource) [1, 8]
 │     Import "bs4" could not be resolved from source Pyright (reportMissingModuleSource) [2, 6]
 │   󰋼  See https://mypy.readthedocs.io/en/stable/running_mypy.html#missing-imports mypy [1, 1]
 │   󰋼  Hint: "python3 -m pip install types-requests" mypy [1, 1]
 │   󰋼  (or run "mypy --install-types" to install all missing stub packages) mypy [1, 1]
```

### 安裝

```sh
❯ poetry run mypy --install-types
Installing missing stub packages:
/Users/alanjui/workspace/rime/han_gi/.venv/bin/python -m pip install types-requests

Install? [yN] y

Requirement already satisfied: types-requests in ./.venv/lib/python3.10/site-packages (2.31.0.1)
Requirement already satisfied: types-urllib3 in ./.venv/lib/python3.10/site-packages (from types-requests) (1.26.25.13)
```

檢查及確認驗證。

```sh
❯ la .venv/lib/python3.10/site-packages/types_requests-2.31.0.1.dist-info
total 40
-rw-r--r--  1 alanjui  staff    12B  6 24 11:40 INSTALLER
-rw-r--r--  1 alanjui  staff   1.3K  6 24 11:40 METADATA
-rw-r--r--  1 alanjui  staff   1.9K  6 24 11:40 RECORD
-rw-r--r--  1 alanjui  staff    92B  6 24 11:40 WHEEL
-rw-r--r--  1 alanjui  staff    15B  6 24 11:40 top_level.txt
```

確認 poetry 的虛擬環境中是否已經安裝了 types-requests。在
poetry 的虛擬環境中，執行 pip list 指令，並在列表中尋找
types-requests。

```sh
❯ pip list
Package                    Version
-------------------------- ----------
aiofiles                   22.1.0
aiosqlite                  0.18.0
anyio                      3.6.2
appnope                    0.1.3
argon2-cffi                21.3.0
argon2-cffi-bindings       21.2.0
arrow                      1.2.3
asgiref                    3.6.0
astroid                    2.15.0
asttokens                  2.2.1
async-generator            1.10
attrs                      22.2.0
autopep8                   2.0.2
Babel                      2.12.1
backcall                   0.2.0
beautifulsoup4             4.12.2
black                      23.1.0
bleach                     6.0.0
certifi                    2022.12.7
cffi                       1.15.1
charset-normalizer         3.1.0
chromedriver-autoinstaller 0.4.0
click                      8.1.3
colorama                   0.4.6
comm                       0.1.2
cssbeautifier              1.14.7
debugpy                    1.6.6
decorator                  5.1.1
defusedxml                 0.7.1
dill                       0.3.6
Django                     4.1.7
django-mathfilters         1.0.0
django-stubs               1.15.0
django-stubs-ext           0.7.0
djangorestframework        3.14.0
djlint                     1.19.16
EditorConfig               0.12.3
exceptiongroup             1.1.1
executing                  1.2.0
fastjsonschema             2.16.3
flake8                     6.0.0
fqdn                       1.5.1
h11                        0.14.0
html-tag-names             0.1.2
html-void-elements         0.1.0
idna                       3.4
iniconfig                  2.0.0
ipykernel                  6.21.3
ipython                    8.11.0
ipython-genutils           0.2.0
ipywidgets                 8.0.4
isoduration                20.11.0
isort                      5.12.0
jedi                       0.18.2
Jinja2                     3.1.2
jsbeautifier               1.14.7
json5                      0.9.11
jsonpointer                2.3
jsonschema                 4.17.3
jupyter                    1.0.0
jupyter_client             8.0.3
jupyter-console            6.6.3
jupyter_core               5.2.0
jupyter-events             0.6.3
jupyter_server             2.4.0
jupyter_server_fileid      0.8.0
jupyter_server_terminals   0.4.4
jupyter_server_ydoc        0.6.1
jupyter-ydoc               0.2.3
jupyterlab                 3.6.1
jupyterlab-pygments        0.2.2
jupyterlab_server          2.20.0
jupyterlab-widgets         3.0.5
lazy-object-proxy          1.9.0
lorem                      0.1.1
MarkupSafe                 2.1.2
matplotlib-inline          0.1.6
mccabe                     0.7.0
mistune                    2.0.5
mypy                       1.1.1
mypy-extensions            1.0.0
nbclassic                  0.5.3
nbclient                   0.7.2
nbconvert                  7.2.10
nbformat                   5.7.3
nest-asyncio               1.5.6
nodeenv                    1.7.0
notebook                   6.5.3
notebook_shim              0.2.2
numpy                      1.24.2
outcome                    1.2.0
packaging                  23.0
pandocfilters              1.5.0
parso                      0.8.3
pathspec                   0.11.1
pexpect                    4.8.0
pickleshare                0.7.5
pip                        23.1.2
platformdirs               3.1.1
pluggy                     1.0.0
prometheus-client          0.16.0
prompt-toolkit             3.0.38
psutil                     5.9.4
psycopg2-binary            2.9.5
ptyprocess                 0.7.0
pure-eval                  0.2.2
pycodestyle                2.10.0
pycparser                  2.21
pydocstyle                 6.3.0
pyflakes                   3.0.1
Pygments                   2.14.0
pylint                     2.17.0
pylint-django              2.5.3
pylint-plugin-utils        0.7
pyright                    1.1.299
pyrsistent                 0.19.3
PySocks                    1.7.1
pytest                     7.2.2
python-dateutil            2.8.2
python-dotenv              1.0.0
python-json-logger         2.0.7
pytz                       2023.3
PyYAML                     6.0
pyzmq                      25.0.1
qtconsole                  5.4.1
QtPy                       2.3.0
regex                      2022.10.31
requests                   2.31.0
rfc3339-validator          0.1.4
rfc3986-validator          0.1.1
selenium                   4.8.2
Send2Trash                 1.8.0
setuptools                 67.6.0
six                        1.16.0
sniffio                    1.3.0
snowballstemmer            2.2.0
sortedcontainers           2.4.0
soupsieve                  2.4
sqlparse                   0.4.3
stack-data                 0.6.2
terminado                  0.17.1
tinycss2                   1.2.1
tomli                      2.0.1
tomlkit                    0.11.6
tornado                    6.2
tqdm                       4.65.0
traitlets                  5.9.0
trio                       0.22.0
trio-websocket             0.10.0
types-pytz                 2022.7.1.2
types-PyYAML               6.0.12.8
types-requests             2.31.0.1
types-urllib3              1.26.25.13
typing_extensions          4.5.0
uri-template               1.2.0
urllib3                    1.26.15
wcwidth                    0.2.6
webcolors                  1.12
webencodings               0.5.1
websocket-client           1.5.1
widgetsnbextension         4.0.5
wrapt                      1.15.0
wsproto                    1.2.0
y-py                       0.5.9
ypy-websocket              0.8.2
```

檢驗 types-requests 套件已安裝。

```sh
❯ pip list | grep types-requests
types-requests             2.31.0.1
```

```sh
❯ poetry run mypy article_pronunciation/lib_tsa_huan_tshiat.py
Success: no issues found in 1 source file
```

### mypy linter

mypy linter 解析報錯。

```sh
  Library stubs not installed for "requests" mypy (import) [1, 1]
```

pyproject.toml 設定

```sh
[tool.mypy]
ignore_missing_imports = true
exclude = ['.venv', 'venv']
mypy_path = '~/workspace/rime/han_gi/.venv/lib/python3.10/site-packages'
python_executable = '~/workspace/rime/han_gi/.venv/bin/python3.10'
```

### pyright linter

pyright linter 解析報錯。

```sh
  Import "requests" could not be resolved from source Pyright (reportMissingModuleSource) [1, 8]
  Import "bs4" could not be resolved from source Pyright (reportMissingModuleSource) [2, 6]
```

pyproject.toml 設定。

```sh
[tool.pyright]
venvPath = "."
venv = ".venv"
extraPaths = [".venv/lib/python3.10/site-packages"]
```

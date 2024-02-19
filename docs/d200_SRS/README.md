---
sidebar: auto
---

<!-- markdownlint-disable MD024 MD043 -->

# 系統需求規格

本專案將建置之系統，其技術相關之系統需求描述如下：

## 1. 專案規格

1.1 專案名稱：han_ji

1.2 專案使用 Python Django

1.3 Python Intepreter 版本管理工具：pyenv

1.4 Python Version： 3.10.6

1.4 Python Package Manager 工具： Poetry

1.5 Python Virtual Environment 目錄：位於 Project 目錄之下，
使用名稱為： .venv 。

## 2. 漢字字庫應用

需要一個「漢字字典」管理功能 。使用 han_ji_dict 為 App Name
。功能需求如下

2.1 提供基本編輯功能：新增、更改、刪除及查詢。

2.2 每個漢字標示讀音的方法，各有 5 種：

2.2.1 十五音標音：sip_ngoo_im

2.2.2 方音符號注音：hong_im

2.2.3 教會羅馬字拼音：POJ

2.2.4 台灣閩南語羅馬拼音：TL

2.2.5 中國廈門大學閩拼標音：BP

2.3 每個漢字等於兩個英文字元

2.4 每個漢字的讀音需要 15 個英文字元

2.5 每個漢字的讀音各有一至多個；

## 3. 文章標讀音應用

需要一個「文章標讀音」管理功能

3-1. 可以輸入一篇文章；

3-2. 文章中的「漢字讀音」，可從「漢字字典」查找其讀音，然後
顯示於螢幕；

3-3. 使用 HTML Ruby Tag 為「漢字」標示「讀音」。

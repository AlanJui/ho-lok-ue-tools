---
sidebar: auto
---

<!-- markdownlint-disable MD024 MD043 MD033 -->

# 《系統功能規格》

## 為文章標註漢語讀音

使用者可輸入一段「漢字」，或一篇文章。系統將為每個漢字標註「福建話音標」。

### 作業程序

1. 使用者在瀏覽器輸入網址。

   【網址】 <http://localhost:8000/article_pronunciation/pronunciation/>

2. 系統顯示「輸入文章」表單。

3. 使用者先在表單中輸入文章，然後按《提交》按鈕。

4. 系統處理輸入之文章，為每個漢字標註「福建話音標」。最後，向使用者顯示已標註福建話音標之文章。

   【網址】 <http://localhost:8000/article_pronunciation/pronunciation/>

### 作業示意圖

<mermaid/>

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant System

    User->>Browser: 輸入網址：<br>http://localhost:8000/article_pronunciation/input/
    Browser->>System: 發送獲取網頁的 GET 請求
    System->>Browser: 以 HTML 格式回應網頁
    Browser->>User: 顯示網頁
    User->>Browser: 輸入文章並按提交
    Browser->>System: 發送帶有文章數據的 POST 請求
    System->>System: 處理文章輸入並生成帶有讀音的內容
    Note over System: 為文章中的每個漢字生成帶有讀音的內容
    System->>Browser: 重定向到網址：<br>http://localhost:8000/article_pronunciation/pronunciation/
    Browser->>User: 顯示帶有標註讀音的文章
    Note over User,Browser: 文章中的每個漢字都標註有它的讀音。
```

### 網頁架構

<mermaid/>

```mermaid
graph TD
    A(首頁)
    B(漢字字典)
    C(加註讀音)
    D(後台管理)

    A --> B
    A --> C
    linkStyle 0 stroke:#ff3,stroke-width:2px;
    Note over A,C: 漢字讀音，取自漢字字典
    A --> D
```

## Annotating Chinese Characters with Pronunciation in an Article

Users can input a string of "Chinese characters" or an entire article.
The system will annotate each Chinese character with the "Fujian dialect
phonetic notation."

### Procedure

1. The user enters the URL in the browser.

   【URL】 <http://localhost:8000/article_pronunciation/pronunciation/>

2. The system displays the "Enter Article" form.

3. The user inputs the article into the form and then clicks the "Submit" button.

4. The system processes the inputted article, annotates each Chinese
   character with the "Fujian dialect phonetic notation," and finally
   displays the article with annotated Fujian dialect phonetic notation to
   the user.

   【URL】 <http://localhost:8000/article_pronunciation/pronunciation/>

### Sqeuence Diagram for Procedure

<mermaid/>

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant System

    User->>Browser: Input URL:<br>http://localhost:8000/article_pronunciation/input/
    Browser->>System: Send GET request for web page
    System->>Browser: Respond with a webpage in HTML format
    Browser->>User: Display web page
    User->>Browser: Input article and press submit
    Browser->>System: Send POST request with article data
    System->>System: Process the input of article and generate content with pronunciation
    Note over System: Generate content with pronunciation for each Chinese character
    System->>Browser: Redirect to URL:<br>http://localhost:8000/article_pronunciation/pronunciation/
    Browser->>User: Display the article with annotated pronunciation
    Note over User,Browser: Each Chinese character in the article is annotated with its pronunciation.
```

## Reference: Original

- Step 1: User input URL in web browser `http://localhost:8000/article_pronunciation/input/`

- Step 2: System display `Enter Article` form

- Step 3: User input article into form and press submit button

- Step 4: System process the input and redirect to web page in URL and display the content
  which every han_ji (Chinese Character) with pronunction.
  (URL) <http://localhost:8000/article_pronunciation/pronunciation/>

Annotating Chinese Characters with Pronunciation in an Article
Users can input a string of "Chinese characters" or an entire article. The system will annotate each Chinese character with the "Fujian dialect phonetic notation."

Step 1: The user enters the URL in the browser.

【URL】 <http://localhost:8000/article_pronunciation/pronunciation/>

Step 2: The system displays the "Enter Article" form.

Step 3: The user inputs the article into the form and then clicks the "Submit" button.

Step 4: The system processes the inputted article, annotates each Chinese character with the "Fujian dialect phonetic notation," and finally displays the article with annotated Fujian dialect phonetic notation to the user.
【URL】 <http://localhost:8000/article_pronunciation/pronunciation/>

<mermaid/>

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant System

    User->>Browser: Input URL: http://localhost:8000/article_pronunciation/input/
    Browser->>System: Request page
    System->>Browser: Display "Enter Article" form
    Browser->>User: Show form
    User->>Browser: Input article and press submit
    Browser->>System: Submit article
    System->>System: Process input and generate content with pronunciation
    System->>Browser: Redirect to URL: http://localhost:8000/article_pronunciation/pronunciation/
    Browser->>User: Display content with han_ji and pronunciation
```

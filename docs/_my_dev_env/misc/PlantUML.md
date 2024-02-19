# PlantUML


# Preview in Vim


## 作業系統層套件需求


- macOS
    brew install --cask adoptopenjdk
    brew install graphviz


- Debian / Ubuntu
    sudo apt install graphviz



## 在 Vim / Neovim 應用層安裝需求


https://github.com/weirongxu/plantuml-previewer.vim



**Vim / Neovim Plugins 安裝設定（使用 vim-plug 套件管理器）**

    Plug 'huos3203/plantuml-syntax'   "plantuml語法高亮Plug 'aklt/plantuml-syntax' 
    Plug 'tyru/open-browser.vim' 
    Plug 'weirongxu/plantuml-previewer.vim' "在線工具：http://sujoyu .github.io/plantuml-previewer/



## 常用操作指令

https://www.dazhuanlan.com/2020/03/26/5e7c40feaf791/


    :PlantumlOpen


----------
# 教學影片
https://www.youtube.com/watch?v=MkmczZpaWUM&


[https://youtu.be/MkmczZpaWUM](https://youtu.be/MkmczZpaWUM)


    @startuml
    
    class PaymentDetail {
      PMId: number
      CardOwnerName: string
      CardNumber: string
      ExpirationDate: string
      CVV: string
    }
    
    @enduml


    !\[UML圖名稱\](URL)


    !\[PaymentDetail\](https://www.plantuml.com/plantuml/img/SoWkIImgAStDuU9ApaaiBbO8IApCJSqhSKajISpCKQZcKb08yFLCiLB8AyrDIYq2SfqJYrByo_DIY_mISrEj58fBYZBpqg7YVc15I8Ak5GMPHOabcVbvBeabAAh3mk2yMYukBeVKl1IWAm00)


----------



    # 類別圖
    
    ### Angular 2 原始程碼
    
    ```angular2
    export class PaymentDetail {
      PMId: number;
      CardOwnerName: string;
      CardNumber: string;
      ExpirationDate: string;
      CVV: string;
    }
    ```
    
    ### PlantUML 語法
    
    ```
    @startuml
    
    class PaymentDetail <<Model>> {
      PMId: number
      CardOwnerName: string
      CardNumber: string
      ExpirationDate: string
      CVV: string
    }
    
    @enduml
    ```
    
    ### UML 圖形
    
    !\[PaymentDetail\](https://www.plantuml.com/plantuml/img/LOv12eD0303lUKNU8I92zU11wybxsWsoi1ib6x6bzE-L8gB76UOmPJ9IMs80U0PA2NjwHnQhsCW7pFDsSXoA0Z-0sBUDor2M-63Ty4RgxgkmTXGvmsJgPTnzzuzEidxDNidy91NPfHw6Wxu0KBAuxUS7)
    
    
    ---
    
    # 系統功能操作介面
    
    簡介： http://plantuml.com/salt
    
    ## 對話方塊
    
    ### PlantUML 語法
    
    ```
    @startsalt
    scale 2
    {
      Login    | "MyName   "
      Password | "****     "
      [Cancel] | [  OK   ]
    }
    @endsalt
    
    ```
    
    ### UI 圖形
    
    !\[登入畫面\](https://www.plantuml.com/plantuml/img/SoWkIImgAKxCAU4gJaxCILKmughcKb3moK_Fp5C0WXe59TzAlyJSL21R2IWHa5XSN9vVb0AIq082a1gmHBHpObvoQauiK29QGS7V6oWSorNBvP2Qbm8s7G00)
    
    
    ## 條列清單
    
    ### PlantUML 語法
    
    ```
    @startsalt
    {#
    . | 專案名稱 | 開始日期 | 結束日期
    1 | 專案管理系統建置案 | 2018-04-01 | 2018-10-31
    2 | WebERP開發專案 | 2018-02-01 | 2018-11-30
    }
    @endsalt
    ```
    
    ### UI 圖形
    
    !\[專案清單畫面\](https://www.plantuml.com/plantuml/img/SoWkIImgAKxCAU6gLkRIKwXHUBgXuzd2ZgSJUf-ls0ZalfpM_NHvzxFfIv_DcG_aFjywuTdS-H0kbo5S-VDr2vzFQ7k-UVVphHkVxjxrVEywe21GriZ0q4BNm4JNm136CJJGDJRaCW9omrEJN8C2WEO_dxa7OWfSWn6o1aDTOmEkMYw7rBmKa3i1)
    
    



![](https://d2mxuefqeaa7sj.cloudfront.net/s_74885640AC03492F1C724FE4A7FE819D8D92862FF10D648E4E471345ABD8B3C2_1548576041794_2019-01-27_14-00-13.png)





----------
# 參考文件

**入門教學**

https://jonny-huang.github.io/projects/01_plantuml/


**官網**

http://plantuml.com/


**與 VS Code 整合應用**

https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml




## VS Code Extensions Supporting PlantUML



----------

**PlantUML 2.14.3** 
jebbs

Rich PlantUML support for Visual Studio Code. 

【註】： 支援 Preview 功能



----------

**PlantUML Syntax v0.0.3** 
Quido Hoekman

Language support for PlantUML.



----------

**Yog PlantUML Highlight v0.0.5**
Yog

PlantUML Syntax higlight for Visual Studio Code.



----------

**macOS 繪圖支援軟件**
http://www.graphviz.org/download/


**範例參考**
https://plantuml.com/zh/


**參考文章：在 VS Code 編輯器中整合 PlantUML 的應用**

https://blog.anoff.io/2018-07-31-diagrams-with-plantuml/



(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{282:function(s,t,a){s.exports=a.p+"assets/img/Token.c2844c40.png"},283:function(s,t,a){s.exports=a.p+"assets/img/Token_Scope.7fcd55af.png"},284:function(s,t,a){s.exports=a.p+"assets/img/Actions_secrets.0c953e79.png"},285:function(s,t,a){s.exports=a.p+"assets/img/github_repo_setting_pages.369f16c1.png"},418:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"將-vuepress-文件佈署至-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#將-vuepress-文件佈署至-github"}},[s._v("#")]),s._v(" 將 VuePress 文件佈署至 GitHub")]),s._v(" "),t("h2",{attrs:{id:"摘要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[s._v("#")]),s._v(" 摘要")]),s._v(" "),t("p",[s._v("GitHub 提供之 GitHub Pages 功能，可令每個「檔案倉」(Repo) ，亦可視作一個僅只提供\n檔案讀取的「靜態 Web 網站」。")]),s._v(" "),t("p",[s._v("例如：敞人在 GitHub 的「使用者帳號」為：AlanJui ；我在 GitHub 建置的檔案倉（Repo）\n名為： my-dev-env 。經變更 Repo 的「預設」後，該 Repo 的 GitHub Pages 功能已被啟\n用，則此 GitHub Repo 亦成為了一個「靜態網站」，其網址為：\n"),t("a",{attrs:{href:"https://alanjui.github.io/my-dev-denv",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://alanjui.github.io/my-dev-env"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"github-設定作業"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-設定作業"}},[s._v("#")]),s._v(" GitHub 設定作業")]),s._v(" "),t("h3",{attrs:{id:"設定-secrets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#設定-secrets"}},[s._v("#")]),s._v(" 設定 Secrets")]),s._v(" "),t("ol",[t("li",[s._v("添加 Personal access tokens 設定。")])]),s._v(" "),t("p",[s._v("/<GitHub_User_Account>/Settings/Developer settings/Personal access\ntokens/Generate new token")]),s._v(" "),t("p",[t("img",{attrs:{src:a(282),alt:"Create Token"}})]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("設定 Token 的使用權限。")])]),s._v(" "),t("p",[s._v("Token scopes:")]),s._v(" "),t("ul",[t("li",[s._v("repo (all)")]),s._v(" "),t("li",[s._v("workflow")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(283),alt:"Token Scope"}})]),s._v(" "),t("h3",{attrs:{id:"設定-github-action-作業環境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#設定-github-action-作業環境"}},[s._v("#")]),s._v(" 設定 GitHub Action 作業環境")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("設定 GitHub Action 作業時，所使用的 Screts（Personal Access Token）。\n以便 GitHub 可驗證其「使用及存取權限」。")]),s._v(" "),t("ul",[t("li",[s._v("/Repo/Settings/Security/Secrets/Actions/New repository secret")])]),s._v(" "),t("p",[s._v("【註】：完成設定儲存時，其名稱應為：ACCESS_TOKEN 。")])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(284),alt:"Actions Secrets"}})]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("設定組建作業，取自 Repo 的那個 Branch")])]),s._v(" "),t("p",[s._v("GitHub Pages 之組建(Build)作業，可透過「GitHub Action」功能達成。因為每個\n檔案倉(Repo) 可附帶好幾個「分支（Branch）」，故以下之設定，主在告知 Repo ，\n產生 GitHub Pages 靜態網頁，應自那個 Branch 取用。")]),s._v(" "),t("ul",[t("li",[s._v("Repo/Settings/Code and automation/Pages/Source\n"),t("ul",[t("li",[s._v("Branch: gh-pages")]),s._v(" "),t("li",[s._v("Dir: /(root)")])])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(285),alt:"設定 Repo/setting/Pages/Source "}})]),s._v(" "),t("h2",{attrs:{id:"設定檔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#設定檔"}},[s._v("#")]),s._v(" 設定檔")]),s._v(" "),t("h3",{attrs:{id:"package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[s._v("#")]),s._v(" package.json")]),s._v(" "),t("p",[s._v("檢查 Node.js 套件管理設定檔，具備執行〖yarn build〗指令的腳本設定。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-dev-env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"review"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"live-server docs/.vuepress/dist"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"release"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('". publish.sh"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"live-server"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.2.2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.9.7"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"vuepress-deploy-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-deploy-yml"}},[s._v("#")]),s._v(" vuepress-deploy.yml")]),s._v(" "),t("p",[s._v("在 VuePress 專案的「根目錄」，建置 GitHub Action 專用的「佈署用腳本」設定檔。")]),s._v(" "),t("ul",[t("li",[s._v("目錄路徑："),t("code",[s._v("<ProjectRoot>/.github/workflows/")])]),s._v(" "),t("li",[s._v("檔案名稱："),t("code",[s._v("vuepress-deploy.yml")])])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build and Deploy\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-and-deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@master\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" vuepress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jenkey2011/vuepress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy@master\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ACCESS_TOKEN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACCESS_TOKEN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TARGET_REPO")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" AlanJui/my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("env\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TARGET_BRANCH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BUILD_SCRIPT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn "),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("&&")]),s._v(" yarn build\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BUILD_DIR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("CNAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//alanjui.github.io/my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("env/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("【設定作業查核事項】：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("變更 "),t("code",[s._v("TARGET_REPO")]),s._v(" 欄。")])]),s._v(" "),t("li",[t("p",[s._v("確認 "),t("code",[s._v("TARGET_BRANCH")]),s._v(" 欄，其值應為： "),t("code",[s._v("gh-pages")]),s._v(" ，不是 "),t("code",[s._v("main")]),s._v(" ；或 "),t("code",[s._v("master")]),s._v(" 。")])]),s._v(" "),t("li",[t("p",[s._v("確認 "),t("code",[s._v("BUILD_SCRIPT")]),s._v(" 欄之設定值。此處之設定值，應用 package.json 檔，第 8 行\n之設定。由於 VuePress 官網之 Quick Start 教學，其示範例所建立之 script 名稱為：\n"),t("code",[s._v("docs:build")]),s._v(" ；而非 "),t("code",[s._v("build")]),s._v(" 。遇此情況，建議將 package.json 檔內之 script 名\n自 "),t("code",[s._v("docs:build")]),s._v(" 變更成 "),t("code",[s._v("build")]),s._v(" 。")])]),s._v(" "),t("li",[t("p",[s._v("若有必要，變更 "),t("code",[s._v("CNAME")]),s._v(" 欄之設定值。不然，整行刪除亦可。")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{519:function(o,t,r){"use strict";r.r(t);var e=r(10),i=Object(e.a)({},(function(){var o=this,t=o._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"如何更換-git-remote-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何更換-git-remote-url"}},[o._v("#")]),o._v(" 如何更換 git remote url")]),o._v(" "),t("p",[o._v("使用 Heroku 建立  App 。")]),o._v(" "),t("p",[o._v("才剛完成，就覺得「App Name」不滿意，立即又再做一次建立 App  的動作，結果卻引發 git remote 的登記出了問題，因為在 heroku 的 URL  記錄的仍是先前舊 App 的 Remote Git URL ，而不是新 App 的 ，此時該怎麼辦？")]),o._v(" "),t("ol",[t("li",[t("p",[o._v("使用  heroku  的 create 指令，建立新 Heroku App 。")]),o._v(" "),t("p",[o._v("AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN]"),t("br"),o._v("\n10:52:41 $ heroku create\nCreating app... done, ⬢ morning-falls-55231\nhttps://morning-falls-55231.herokuapp.com/ | https://git.heroku.com/morning-falls-55231.git")])]),o._v(" "),t("li",[t("p",[o._v("使用  heroku  的 create 指令，建立新 Heroku App 。")]),o._v(" "),t("p",[o._v("AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN]\n10:55:16 $ heroku create cid-for-mean\nCreating ⬢ cid-for-mean... done\nhttps://cid-for-mean.herokuapp.com/ | https://git.heroku.com/cid-for-mean.git")])]),o._v(" "),t("li",[t("p",[o._v("查詢 git remote 的登記狀態，察覺 heroku 記錄的 Remote URL 仍是舊 Heroku App 的 Git Repo。")]),o._v(" "),t("p",[o._v("AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN]\n10:57:50 $ git remote\nheroku\norigin")]),o._v(" "),t("p",[o._v("AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN]"),t("br"),o._v("\n11:01:44 $ git remote -v\nheroku        https://git.heroku.com/morning-falls-55231.git (fetch)\nheroku        https://git.heroku.com/morning-falls-55231.git (push)\norigin        git@github.com:AlanJui/CID_for_MEAN.git (fetch)\norigin        git@github.com:AlanJui/CID_for_MEAN.git (push)")])]),o._v(" "),t("li",[t("p",[o._v("使用指令更正，並確認更正確實有效。")]),o._v(" "),t("p",[o._v("AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN]\n11:02:12 $ git remote set-url heroku https://git.heroku.com/cid-for-mean.git")]),o._v(" "),t("p",[o._v("AlanJui at MacBook-Pro.local in [~/workspace/MEAN/CID4MEAN]"),t("br"),o._v("\n11:05:23 $ git remote -v\nheroku        https://git.heroku.com/cid-for-mean.git (fetch)\nheroku        https://git.heroku.com/cid-for-mean.git (push)\norigin        git@github.com:AlanJui/CID_for_MEAN.git (fetch)\norigin        git@github.com:AlanJui/CID_for_MEAN.git (push)")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);
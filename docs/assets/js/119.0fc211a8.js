(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{405:function(o,n,e){"use strict";e.r(n);var t=e(10),r=Object(t.a)({},(function(){var o=this,n=o._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[n("h1",{attrs:{id:"apt-get-upgrade用法與時機"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apt-get-upgrade用法與時機"}},[o._v("#")]),o._v(" apt-get upgrade用法與時機")]),o._v(" "),n("ol",[n("li",[n("p",[o._v("執行 apt-get 相關指令，如：update,  purge，在指令結束後，看到系統有指示：")]),o._v(" "),n("p",[o._v("alanjui@Srv-01:~/workspace/RESTful/rest-002$ sudo apt-get update\n[sudo] password for alanjui:\n已有:1 http://tw.archive.ubuntu.com/ubuntu xenial InRelease\n略過:2 http://dl.google.com/linux/chrome/deb stable InRelease"),n("br"),o._v("\n已有:3 http://tw.archive.ubuntu.com/ubuntu xenial-updates InRelease"),n("br"),o._v("\n已有:4 http://dl.google.com/linux/chrome/deb stable Release"),n("br"),o._v("\n已有:5 http://tw.archive.ubuntu.com/ubuntu xenial-backports InRelease"),n("br"),o._v("\n已有:6 https://apt.dockerproject.org/repo ubuntu-xenial InRelease"),n("br"),o._v("\n略過:8 http://linux.dropbox.com/ubuntu wily InRelease"),n("br"),o._v("\n已有:9 http://linux.dropbox.com/ubuntu wily Release"),n("br"),o._v("\n下載:11 http://security.ubuntu.com/ubuntu xenial-security InRelease [94.5 kB]"),n("br"),o._v("\n已有:12 https://deb.nodesource.com/node_6.x xenial InRelease"),n("br"),o._v("\n略過:14 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 InRelease"),n("br"),o._v("\n略過:13 http://toolbelt.heroku.com/ubuntu ./ InRelease"),n("br"),o._v("\n已有:15 http://toolbelt.heroku.com/ubuntu ./ Release"),n("br"),o._v("\n已有:17 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 Release\n取得 94.5 kB 用了 2秒 (45.9 kB/s)\n正在讀取套件清單... 完成")]),o._v(" "),n("p",[o._v("alanjui@Srv-01:~/workspace/RESTful/rest-002$ sudo apt-get purge lxc-docker\n正在讀取套件清單... 完成\n正在重建相依關係"),n("br"),o._v("\n正在讀取狀態資料... 完成\nPackage 'lxc-docker' is not installed, so not removed\n升級 0 個，新安裝 0 個，移除 0 個，有 5 個未被升級。")]),o._v(" "),n("p",[o._v("alanjui@Srv-01:~/workspace/RESTful/rest-002$ apt-cache policy docker-engine\ndocker-engine:\n已安裝：1.12.1-0~xenial\n候選： 1.12.1-0~xenial\n版本列表：\n*** 1.12.1-0~xenial 500\n500 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages\n100 /var/lib/dpkg/status\n1.12.0-0~xenial 500\n500 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages\n1.11.2-0~xenial 500\n500 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages\n1.11.1-0~xenial 500\n500 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages\n1.11.0-0~xenial 500\n500 https://apt.dockerproject.org/repo ubuntu-xenial/main amd64 Packages")])])]),o._v(" "),n("p",[o._v("**** 2. 執行 upgrade 指令，以便讓"),n("strong",[o._v("軟體套件")]),o._v("升級．")]),o._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[o._v("alanjui@Srv-01:~/workspace/RESTful/rest-002$ sudo apt-get upgrade\n正在讀取套件清單... 完成\n正在重建相依關係          \n正在讀取狀態資料... 完成\n籌備升級中... 完成\n下列套件將會被升級：\n  mongodb-org mongodb-org-mongos mongodb-org-server mongodb-org-shell mongodb-org-tools\n升級 5 個，新安裝 0 個，移除 0 個，有 0 個未被升級。\n需要下載 51.5 MB 的套件檔。\n此操作完成之後，會空出 21.8 MB 的磁碟空間。\nDo you want to continue? [Y/n] Y\n下載:1 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 mongodb-org-shell amd64 3.2.10 [5,251 kB]\n下載:2 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 mongodb-org-server amd64 3.2.10 [9,916 kB]\n下載:3 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 mongodb-org-mongos amd64 3.2.10 [4,640 kB]\n下載:4 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 mongodb-org-tools amd64 3.2.10 [31.7 MB]         \n下載:5 http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2/multiverse amd64 mongodb-org amd64 3.2.10 [3,556 B]               \n取得 51.5 MB 用了 16秒 (3,049 kB/s)                                                                                                \n（讀取資料庫 ... 目前共安裝了 262398 個檔案和目錄。）\n準備解開 .../mongodb-org-shell_3.2.10_amd64.deb ...\nUnpacking mongodb-org-shell (3.2.10) over (3.2.9) ...\n準備解開 .../mongodb-org-server_3.2.10_amd64.deb ...\nUnpacking mongodb-org-server (3.2.10) over (3.2.9) ...\n準備解開 .../mongodb-org-mongos_3.2.10_amd64.deb ...\nUnpacking mongodb-org-mongos (3.2.10) over (3.2.9) ...\n準備解開 .../mongodb-org-tools_3.2.10_amd64.deb ...\nUnpacking mongodb-org-tools (3.2.10) over (3.2.9) ...\n準備解開 .../mongodb-org_3.2.10_amd64.deb ...\nUnpacking mongodb-org (3.2.10) over (3.2.9) ...\nProcessing triggers for man-db (2.7.5-1) ...\n設定 mongodb-org-shell (3.2.10) ...\n設定 mongodb-org-server (3.2.10) ...\n設定 mongodb-org-mongos (3.2.10) ...\n設定 mongodb-org-tools (3.2.10) ...\n設定 mongodb-org (3.2.10) ...\nalanjui@Srv-01:~/workspace/RESTful/rest-002$ \n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);
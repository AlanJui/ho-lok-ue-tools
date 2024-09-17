(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{480:function(a,e,t){"use strict";t.r(e);var r=t(10),s=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker學習筆記"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker學習筆記"}},[a._v("#")]),a._v(" Docker學習筆記")]),a._v(" "),e("p",[a._v("Docker學習筆記")]),a._v(" "),e("h1",{attrs:{id:"常用指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[a._v("#")]),a._v(" 常用指令")]),a._v(" "),e("h2",{attrs:{id:"顯示現在正執中的-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#顯示現在正執中的-container"}},[a._v("#")]),a._v(" 顯示現在正執中的 Container")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ docker ps\n")])])]),e("h2",{attrs:{id:"刪除已存在的-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刪除已存在的-container"}},[a._v("#")]),a._v(" 刪除已存在的 Container")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ docker rm $(docker ps -q -f status=exited) \n")])])]),e("p",[e("code",[a._v("-q")]),a._v(" prints just the container ids (without column headers)\n"),e("code",[a._v("-f")]),a._v(" allows you to filter your list of printed containers (in this case we are filtering to only show exited containers)")]),a._v(" "),e("h2",{attrs:{id:"刪除所有停用的-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刪除所有停用的-container"}},[a._v("#")]),a._v(" 刪除所有停用的 Container")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ docker rm $(docker ps -a | grep Exited | awk '{print $1}')\n")])])]),e("h2",{attrs:{id:"stop-containers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-containers"}},[a._v("#")]),a._v(" Stop containers")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ docker stop webserver\n")])])]),e("h2",{attrs:{id:"start-containers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-containers"}},[a._v("#")]),a._v(" Start containers")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ docker start webserver\n")])])]),e("h2",{attrs:{id:"remove-containers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove-containers"}},[a._v("#")]),a._v(" Remove containers")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ docker rm -f webserver\n")])])]),e("h2",{attrs:{id:"remove-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove-images"}},[a._v("#")]),a._v(" Remove images")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ docker rmi nginx\n")])])]),e("p",[a._v("清除不想用的 Docker Image")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('$ docker rmi -f $(docker images | grep "<none>" | awk "{print \\$3}")\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
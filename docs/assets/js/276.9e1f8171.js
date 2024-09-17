(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{565:function(s,a,e){"use strict";e.r(a);var n=e(10),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"掛載第二顆硬碟作業指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#掛載第二顆硬碟作業指引"}},[s._v("#")]),s._v(" 掛載第二顆硬碟作業指引")]),s._v(" "),a("p",[s._v("令作業系統於開機時，自動掛載第二顆台硬碟。")]),s._v(" "),a("h2",{attrs:{id:"電腦內硬碟摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#電腦內硬碟摘要"}},[s._v("#")]),s._v(" 電腦內硬碟摘要")]),s._v(" "),a("ul",[a("li",[s._v("第一顆硬碟（500GB)： /dev/sda")]),s._v(" "),a("li",[s._v("第二顆硬碟（2TB)： /dev/sdb")])]),s._v(" "),a("h2",{attrs:{id:"作業程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作業程序"}},[s._v("#")]),s._v(" 作業程序")]),s._v(" "),a("ol",[a("li",[s._v("確認作業系統偵測到兩顆內接硬碟皆已存在：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ls /dev/sd*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("驗證第二顆硬碟的容量")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo fdisk -l /dev/sdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("查詢第二顆硬碟的 UUID\n查詢 /dev/sdb 的 UUID")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo blkid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[s._v("編輯「硬碟自動掛載設定檔」 /etc/fstab")]),s._v(" "),a("p",[s._v("4.1 開啟設定檔")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo vim /etc/fstab\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4.2 加入設定")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# External Disk\nUUID=9279ede9-49f6-44fe-b481-261500f67675 /NAS ext4 defaults 0 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("設定檔內完整的設定：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# /etc/fstab: static file system information.\n#\n# Use 'blkid' to print the universally unique identifier for a\n# device; this may be used with UUID= as a more robust way to name devices\n# that works even if disks are added and removed. See fstab(5).\n#\n# <file system> <mount point>   <type>  <options>  <dump>  <pass>\n# / was on /dev/sda3 during installation\nUUID=328f484d-11f6-4135-ba2b-0ad26916dfd8 /        ext4    errors=remount-ro 0     1\n# /boot was on /dev/sda1 during installation\nUUID=d949a31c-0426-486d-a8a4-53a8d825ed5c /boot    ext4    defaults        　0      2\n# /home was on /dev/sda4 during installation\nUUID=fb7971a1-2fb7-48d9-8131-05cd840c9143 /home    ext4    defaults        　0      2\n# swap was on /dev/sda5 during installation\nUUID=9d5873a4-fa56-4a3b-bf3c-9b769e266097 none     swap    swap            　0      0\n# External Disk\nUUID=9279ede9-49f6-44fe-b481-261500f67675 /NAS    ext4    defaults    　 　　0      2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("設定掛載點\n設定第二顆硬碟（/dev/sdb），掛載點位於目錄路徑： /NAS。")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo mkdir /NAS\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("第一次手動掛載硬碟")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo mount /NAS\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("驗證已成功掛載")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo df -h\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("實作參考：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('alanjui@Srv-01:/NAS1$ df -h\n檔案系統 容量 已用 可用 已用% 掛載點\nudev 7.8G 0 7.8G 0% /dev\ntmpfs 1.6G 9.8M 1.6G 1% /run\n/dev/sda3 47G 4.6G 40G 11% /\ntmpfs 7.8G 61M 7.8G 1% /dev/shm\ntmpfs 5.0M 4.0K 5.0M 1% /run/lock\ntmpfs 7.8G 0 7.8G 0% /sys/fs/cgroup\n/dev/sdb1 1.8T 841G 901G 49% /NAS1\n/dev/sda1 945M 55M 825M 7% /boot\n/dev/sda4 388G 1.1G 368G 1% /home\ntmpfs 1.6G 116K 1.6G 1% /run/user/1000\ntmpfs 1.6G 4.0K 1.6G 1% /run/user/108\n\nalanjui@Srv-01:/NAS1\\$ sudo blkid\n/dev/sda1: UUID="d949a31c-0426-486d-a8a4-53a8d825ed5c" TYPE="ext4" PARTUUID="7b5d65b9-01"\n/dev/sda3: UUID="328f484d-11f6-4135-ba2b-0ad26916dfd8" TYPE="ext4" PARTUUID="7b5d65b9-03"\n/dev/sda4: UUID="fb7971a1-2fb7-48d9-8131-05cd840c9143" TYPE="ext4" PARTUUID="7b5d65b9-04"\n/dev/sda5: UUID="9d5873a4-fa56-4a3b-bf3c-9b769e266097" TYPE="swap" PARTUUID="7b5d65b9-05"\n/dev/sdb1: LABEL="NAS" UUID="9279ede9-49f6-44fe-b481-261500f67675" TYPE="ext4" PARTUUID="3c9b9d09-01"\n\n$ ls -al /NAS1\n....\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);
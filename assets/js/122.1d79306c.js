(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{409:function(o,e,t){"use strict";t.r(e);var n=t(10),a=Object(n.a)({},(function(){var o=this,e=o._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h1",{attrs:{id:"在ubuntu-16-04-安裝-mongodb-3-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在ubuntu-16-04-安裝-mongodb-3-2"}},[o._v("#")]),o._v(" 在Ubuntu 16.04 安裝 MongoDB 3.2")]),o._v(" "),e("h2",{attrs:{id:"install-mongodb-community-edition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-mongodb-community-edition"}},[o._v("#")]),o._v(" Install MongoDB Community Edition")]),o._v(" "),e("p",[e("strong",[o._v("1 Import the public key used by the package management system.")]),o._v("\nThe Ubuntu package management tools (i.e. dpkg and apt) ensure package consistency and authenticity by requiring that distributors sign packages with GPG keys. Issue the following command to import the "),e("a",{attrs:{href:"https://www.mongodb.org/static/pgp/server-3.2.asc",target:"_blank",rel:"noopener noreferrer"}},[o._v("MongoDB public GPG Key"),e("OutboundLink")],1),o._v(":")]),o._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[o._v("$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927\n")])])]),e("p",[e("strong",[o._v("2 Create a list file for MongoDB.")]),o._v("\nCreate the /etc/apt/sources.list.d/mongodb-org-3.2.list list file using the command appropriate for your version of Ubuntu:")]),o._v(" "),e("p",[o._v("Ubuntu 16.04")]),o._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[o._v('$ echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list\n')])])]),e("p",[e("strong",[o._v("3 Reload local package database.")]),o._v("\nIssue the following command to reload the local package database:")]),o._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[o._v("$ sudo apt-get update\n")])])]),e("p",[e("strong",[o._v("4 Install the MongoDB packages.")])]),o._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[o._v("$ sudo apt-get install -y mongodb-org\n")])])]),e("p",[e("strong",[o._v("5 Create systemd service file (Ubuntu 16.04-only)")])]),o._v(" "),e("p",[e("strong",[o._v("NOTE")]),o._v("\nFollow this step ONLY if you are running Ubuntu 16.04.\nCreate a new file at /lib/systemd/system/mongod.service with the following contents:")]),o._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[o._v("[Unit]\nDescription=High-performance, schema-free document-oriented database\nAfter=network.target\nDocumentation=https://docs.mongodb.org/manual\n\n[Service]\nUser=mongodb\nGroup=mongodb\nExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf\n\n[Install]\nWantedBy=multi-user.target\n")])])]),e("hr"),o._v(" "),e("h2",{attrs:{id:"run-mongodb-community-edition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-mongodb-community-edition"}},[o._v("#")]),o._v(" Run MongoDB Community Edition")]),o._v(" "),e("p",[o._v("The MongoDB instance stores its data files in /var/lib/mongodb and its log files in/var/log/mongodb by default, and runs using the mongodb user account. You can specify alternate log and data file directories in /etc/mongod.conf. See "),e("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/configuration-options/#systemLog.path",target:"_blank",rel:"noopener noreferrer"}},[o._v("systemLog.path"),e("OutboundLink")],1),o._v(" and "),e("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/configuration-options/#storage.dbPath",target:"_blank",rel:"noopener noreferrer"}},[o._v("storage.dbPath"),e("OutboundLink")],1),o._v(" for additional information.\nIf you change the user that runs the MongoDB process, you "),e("strong",[o._v("must")]),o._v(" modify the access control rights to the/var/lib/mongodb and /var/log/mongodb directories to give this user access to these directories.")]),o._v(" "),e("p",[e("strong",[o._v("1 Start MongoDB.")]),o._v("\nIssue the following command to start "),e("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod",target:"_blank",rel:"noopener noreferrer"}},[o._v("mongod"),e("OutboundLink")],1),o._v(":")]),o._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[o._v("$ sudo service mongod start\n")])])]),e("p",[e("strong",[o._v("2 Verify that MongoDB has started successfully")]),o._v("\nVerify that the "),e("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod",target:"_blank",rel:"noopener noreferrer"}},[o._v("mongod"),e("OutboundLink")],1),o._v(" process has started successfully by checking the contents of the log file at/var/log/mongodb/mongod.log for a line reading")]),o._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[o._v("[initandlisten] waiting for connections on port <port>\n")])])]),e("p",[o._v("where "),e("port",[o._v(" is the port configured in /etc/mongod.conf, 27017 by default.")])],1),o._v(" "),e("p",[e("strong",[o._v("3 Stop MongoDB.")]),o._v("\nAs needed, you can stop the "),e("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod",target:"_blank",rel:"noopener noreferrer"}},[o._v("mongod"),e("OutboundLink")],1),o._v(" process by issuing the following command:")]),o._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[o._v("$ sudo service mongod stop\n")])])]),e("p",[e("strong",[o._v("4 Restart MongoDB.")]),o._v("\nIssue the following command to restart "),e("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod",target:"_blank",rel:"noopener noreferrer"}},[o._v("mongod"),e("OutboundLink")],1),o._v(":")]),o._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[o._v("$ sudo service mongod restart\n")])])]),e("p",[e("strong",[o._v("5")]),o._v(" 設定開機後自動啟動 Service：")]),o._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[o._v("$ sudo systemctl enable mongod\n")])])]),e("p",[o._v("［文件參考來源］：　　https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/")])])}),[],!1,null,null,null);e.default=a.exports}}]);
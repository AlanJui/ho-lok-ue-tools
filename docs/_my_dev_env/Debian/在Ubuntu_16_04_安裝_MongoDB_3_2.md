# 在Ubuntu 16.04 安裝 MongoDB 3.2


## Install MongoDB Community Edition

**1 Import the public key used by the package management system.**
The Ubuntu package management tools (i.e. dpkg and apt) ensure package consistency and authenticity by requiring that distributors sign packages with GPG keys. Issue the following command to import the [MongoDB public GPG Key](https://www.mongodb.org/static/pgp/server-3.2.asc):

    $ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

**2 Create a list file for MongoDB.**
Create the /etc/apt/sources.list.d/mongodb-org-3.2.list list file using the command appropriate for your version of Ubuntu:

Ubuntu 16.04

    $ echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

**3 Reload local package database.**
Issue the following command to reload the local package database:

    $ sudo apt-get update

**4 Install the MongoDB packages.**

    $ sudo apt-get install -y mongodb-org

**5 Create systemd service file (Ubuntu 16.04-only)**

**NOTE**
Follow this step ONLY if you are running Ubuntu 16.04.
Create a new file at /lib/systemd/system/mongod.service with the following contents:

    [Unit]
    Description=High-performance, schema-free document-oriented database
    After=network.target
    Documentation=https://docs.mongodb.org/manual
    
    [Service]
    User=mongodb
    Group=mongodb
    ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf
    
    [Install]
    WantedBy=multi-user.target


----------
## Run MongoDB Community Edition

The MongoDB instance stores its data files in /var/lib/mongodb and its log files in/var/log/mongodb by default, and runs using the mongodb user account. You can specify alternate log and data file directories in /etc/mongod.conf. See [systemLog.path](https://docs.mongodb.com/manual/reference/configuration-options/#systemLog.path) and [storage.dbPath](https://docs.mongodb.com/manual/reference/configuration-options/#storage.dbPath) for additional information.
If you change the user that runs the MongoDB process, you **must** modify the access control rights to the/var/lib/mongodb and /var/log/mongodb directories to give this user access to these directories.

**1 Start MongoDB.**
Issue the following command to start [mongod](https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod):

    $ sudo service mongod start

**2 Verify that MongoDB has started successfully**
Verify that the [mongod](https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod) process has started successfully by checking the contents of the log file at/var/log/mongodb/mongod.log for a line reading

    [initandlisten] waiting for connections on port <port>

where <port> is the port configured in /etc/mongod.conf, 27017 by default.

**3 Stop MongoDB.**
As needed, you can stop the [mongod](https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod) process by issuing the following command:

    $ sudo service mongod stop

**4 Restart MongoDB.**
Issue the following command to restart [mongod](https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod):

    $ sudo service mongod restart

**5** 設定開機後自動啟動 Service：

    $ sudo systemctl enable mongod

［文件參考來源］：　　https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/


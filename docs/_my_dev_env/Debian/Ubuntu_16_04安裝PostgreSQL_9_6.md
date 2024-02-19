# Ubuntu 16.04安裝PostgreSQL 9.6

1. 自網站下載　**EnterpriseDB　版本，安裝執行檔**


2. 進入終端機，將下載之安裝執行檔改成可執行檔
    $ chmod 0755 postgresql-9.6.3-2-linux-x64.run


3. 執行安裝程式
    $ sudo ./postgresql-9.6.3-2-linux-x64.run


4. 透過 “Ubuntu軟體”　安裝  pgAdmin III

 5. 設定作業系統 PATH
 
 檔案： ~/.profile

    PATH="/opt/PostgreSQL/9.6/bin:$PATH"

檔案： ~/myEnv.sh

    export PATH="/opt/PostgreSQL/9.6/bin":$PATH


6. 啟動PATH
    $ source ~/.zshrc


7. 初始資料庫
    $ initdb ~/pgsql/data


    alanjui at Srv-01 in [~]   
    12:46:31 $ initdb ~/pgsql/data
    The files belonging to this database system will be owned by user "alanjui".
    This user must also own the server process.
    
    The database cluster will be initialized with locale "zh_TW.UTF-8".
    The default database encoding has accordingly been set to "UTF8".
    initdb: could not find suitable text search configuration for locale "zh_TW.UTF-8"
    The default text search configuration will be set to "simple".
    
    Data page checksums are disabled.
    
    creating directory /home/alanjui/pgsql/data ... ok
    creating subdirectories ... ok
    selecting default max_connections ... 100
    selecting default shared_buffers ... 128MB
    selecting dynamic shared memory implementation ... posix
    creating configuration files ... ok
    running bootstrap script ... ok
    performing post-bootstrap initialization ... ok
    syncing data to disk ... ok
    
    WARNING: enabling "trust" authentication for local connections
    You can change this by editing pg_hba.conf or using the option -A, or
    --auth-local and --auth-host, the next time you run initdb.
    
    Success. You can now start the database server using:
    
        pg_ctl -D /home/alanjui/pgsql/data -l logfile start


8. 啟動 PostgreSQL


    alanjui at Srv-01 in [~]   
    12:47:57 $ pg_ctl -D /home/alanjui/pgsql/data -l logfile start
    server starting

 9. 使用 pgAdmin 連上 PostgreSQL
 



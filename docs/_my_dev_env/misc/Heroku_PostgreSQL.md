# Heroku PostgreSQL
在 Heroku App 建立 Postgres DB


    heroku addons:create heroku-postgresql:hobby-dev


    AlanJui at MacBook-Pro.local in [~/workspace/VS2017/docker-01]  on git:master ✔︎  487c670 "將 Dockerfile 分成：（1）在 Local 端用（使用檔案：Dockerfile.local）；（2）佈署到 Heroku 用（使用檔案：Dockerfile）"
    22:54:57 $ heroku addons:create heroku-postgresql:hobby-dev
    Creating heroku-postgresql:hobby-dev on ⬢ ccc-asp-net-core-app... free
    Database has been created and is available
     ! This database is empty. If upgrading, you can transfer
     ! data from another database with pg:copy
    Created postgresql-flat-70920 as DATABASE_URL
    Use heroku addons:docs heroku-postgresql to view documentation


取得 Connect String

    $ heroku config -s | grep DATABASE_URL
    DATABASE_URL='postgres://izpjdgcbadslqy:1cebb52a07a3a071a4ae7b9518abcb6c19d04acfb51bdb9fd5482305d54111b7@ec2-54-163-254-143.compute-1.amazonaws.com:5432/depjqafb66e6rb'

取得 Postgres DB 資訊

    $ heroku pg:info
    === DATABASE_URL
    Plan:        Hobby-dev
    Status:      Available
    Connections: 0/20
    PG Version:  9.6.2
    Created:     2017-07-13 14:55 UTC
    Data Size:   7.2 MB
    Tables:      0
    Rows:        0/10000 (In compliance)
    Fork/Follow: Unsupported
    Rollback:    Unsupported
    Add-on:      postgresql-flat-70920

為  Postgres DB 做健康檢查

    $ heroku pg:diagnose
    Report 4c04b58e-89c1-437d-8f45-4bb457403513 for ccc-asp-net-core-app::DATABASE_URL
    available for one month after creation on 2017-07-13T15:03:32.881287+00:00
    
    GREEN: Connection Count
    GREEN: Long Queries
    GREEN: Idle in Transaction
    GREEN: Indexes
    GREEN: Bloat
    GREEN: Hit Rate
    GREEN: Blocking Queries
    GREEN: Sequences
    SKIPPED: Load
    Error Load check not supported on this plan

Local 設定 

    $ export DATABASE_URL=postgres:///$(whoami)
    
    $ echo $DATABASE_URL
    postgres:///AlanJui
    
    $ psql -h localhost
    psql (9.6.3)
    Type "help" for help.
    
    AlanJui=# \q

執行 Heroku PostgreSQL

    $ heroku pg:psql
    --> Connecting to postgresql-flat-70920
    psql (9.6.3, server 9.6.2)
    SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
    Type "help" for help.
    
    ccc-asp-net-core-app::DATABASE=> CREATE TABLE public.users
    ccc-asp-net-core-app::DATABASE-> (
    ccc-asp-net-core-app::DATABASE(>     id serial NOT NULL,
    ccc-asp-net-core-app::DATABASE(>     first_name character varying(50) NOT NULL,
    ccc-asp-net-core-app::DATABASE(>     last_name character varying(50)  NOT NULL,
    ccc-asp-net-core-app::DATABASE(>     blog_site_url character varying(200),
    ccc-asp-net-core-app::DATABASE(>     birthday date,
    ccc-asp-net-core-app::DATABASE(>     CONSTRAINT users_pkey PRIMARY KEY (id)
    ccc-asp-net-core-app::DATABASE(> );
    CREATE TABLE
    ccc-asp-net-core-app::DATABASE=> SELECT * FROM users;
     id | first_name | last_name | blog_site_url | birthday
    ----+------------+-----------+---------------+----------
    (0 rows)
    
    ccc-asp-net-core-app::DATABASE=> \q



    $ heroku pg:psql
    --> Connecting to postgresql-flat-70920
    psql (9.6.3, server 9.6.2)
    SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
    Type "help" for help.
    
    ccc-asp-net-core-app::DATABASE=> INSERT INTO public.users(
    ccc-asp-net-core-app::DATABASE(>     first_name, last_name, blog_site_url, birthday)
    ccc-asp-net-core-app::DATABASE-> VALUES
    ccc-asp-net-core-app::DATABASE->   ('Alan', 'Jui', 'http://www.ccc99.tw', to_date('1960-09-25', 'YYYY-MM-DD')),
    ccc-asp-net-core-app::DATABASE->   ('Stacy', 'Wu', '', to_date('1967-08-18', 'YYYY-MM-DD')),
    ccc-asp-net-core-app::DATABASE->   ('Amos', 'Jui', '', to_date('2003-06-04', 'YYYY-MM-DD'));
    INSERT 0 3
    ccc-asp-net-core-app::DATABASE=> SELECT * FROM public.users;
     id | first_name | last_name |    blog_site_url    |  birthday
    ----+------------+-----------+---------------------+------------
      1 | Alan       | Jui       | http://www.ccc99.tw | 1960-09-25
      2 | Stacy      | Wu        |                     | 1967-08-18
      3 | Amos       | Jui       |                     | 2003-06-04
    (3 rows)
    
    ccc-asp-net-core-app::DATABASE=> \q


PUSH/PULL




    $ heroku pg:push mylocaldb postgresql-flat-70920
    heroku-cli: Pushing mylocaldb ---> postgresql-flat-70920
    pg_dump: [archiver (db)] connection to database "mylocaldb" failed: FATAL:  database "mylocaldb" does not exist
    pg_restore: [archiver] input file is too short (read 0, expected 5)



    $ heroku pg:push AlanJui postgresql-flat-70920
    heroku-cli: Pushing AlanJui ---> postgresql-flat-70920
    pg_dump: last built-in OID is 16383
    pg_dump: reading extensions
    pg_dump: identifying extension members
    pg_dump: reading schemas
    pg_dump: reading user-defined tables
    pg_dump: reading user-defined functions
    pg_dump: reading user-defined types
    pg_dump: reading procedural languages
    pg_dump: reading user-defined aggregate functions
    pg_dump: reading user-defined operators
    pg_dump: reading user-defined access methods
    pg_dump: reading user-defined operator classes
    pg_dump: reading user-defined operator families
    pg_dump: reading user-defined text search parsers
    pg_dump: reading user-defined text search templates
    pg_dump: reading user-defined text search dictionaries
    pg_dump: reading user-defined text search configurations
    pg_dump: reading user-defined foreign-data wrappers
    pg_dump: reading user-defined foreign servers
    pg_dump: reading default privileges
    pg_dump: reading user-defined collations
    pg_dump: reading user-defined conversions
    pg_dump: reading type casts
    pg_dump: reading transforms
    pg_dump: reading table inheritance information
    pg_dump: reading event triggers
    pg_dump: finding extension tables
    pg_dump: finding inheritance relationships
    pg_dump: reading column info for interesting tables
    pg_dump: finding the columns and types of table "public.users"
    pg_dump: finding default expressions of table "public.users"
    pg_dump: flagging inherited columns in subtables
    pg_dump: reading indexes
    pg_dump: reading indexes for table "public.users"
    pg_dump: reading constraints
    pg_dump: reading triggers
    pg_dump: reading rewrite rules
    pg_dump: reading policies
    pg_dump: reading row security enabled for table "public.users_id_seq"
    pg_dump: reading policies for table "public.users_id_seq"
    pg_dump: reading row security enabled for table "public.users"
    pg_dump: reading policies for table "public.users"
    pg_dump: reading large objects
    pg_dump: reading dependency data
    pg_dump: saving encoding = UTF8
    pg_dump: saving standard_conforming_strings = on
    pg_dump: saving database definition
    pg_dump: dumping contents of table "public.users"
    pg_restore: connecting to database for restore
    pg_restore: creating SCHEMA "public"
    pg_restore: creating COMMENT "SCHEMA public"
    pg_restore: creating EXTENSION "plpgsql"
    pg_restore: creating COMMENT "EXTENSION plpgsql"
    pg_restore: [archiver (db)] Error while PROCESSING TOC:
    pg_restore: [archiver (db)] Error from TOC entry 2395; 0 0 COMMENT EXTENSION plpgsql
    pg_restore: [archiver (db)] could not execute query: ERROR:  must be owner of extension plpgsql
        Command was: COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
    
    
    
    pg_restore: creating TABLE "public.users"
    pg_restore: creating SEQUENCE "public.users_id_seq"
    pg_restore: creating SEQUENCE OWNED BY "public.users_id_seq"
    pg_restore: creating DEFAULT "public.users id"
    pg_restore: processing data for table "public.users"
    pg_restore: executing SEQUENCE SET users_id_seq
    pg_restore: creating CONSTRAINT "public.users users_pkey"
    pg_restore: setting owner and privileges for DATABASE "AlanJui"
    pg_restore: setting owner and privileges for SCHEMA "public"
    pg_restore: setting owner and privileges for COMMENT "SCHEMA public"
    pg_restore: setting owner and privileges for EXTENSION "plpgsql"
    pg_restore: setting owner and privileges for COMMENT "EXTENSION plpgsql"
    pg_restore: setting owner and privileges for TABLE "public.users"
    pg_restore: setting owner and privileges for SEQUENCE "public.users_id_seq"
    pg_restore: setting owner and privileges for SEQUENCE OWNED BY "public.users_id_seq"
    pg_restore: setting owner and privileges for DEFAULT "public.users id"
    pg_restore: setting owner and privileges for TABLE DATA "public.users"
    pg_restore: setting owner and privileges for SEQUENCE SET "public.users_id_seq"
    pg_restore: setting owner and privileges for CONSTRAINT "public.users users_pkey"
    WARNING: errors ignored on restore: 1


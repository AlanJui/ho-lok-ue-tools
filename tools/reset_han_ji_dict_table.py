import psycopg2

# 建立連線到 PostgreSQL 資料庫
conn = psycopg2.connect(
    dbname="Ho-Lok-Ue",  # 資料庫名稱
    user="root",  # 用戶名
    password="changeme",  # 密碼
    host="localhost",  # 資料庫服務器地址，本地則為 localhost
)

# 建立 cursor
cur = conn.cursor()

# 先刪除已存在的資料表，如果存在的話
cur.execute("DROP TABLE IF EXISTS public.han_ji_dict;")

# 建立新的資料表
cur.execute('''
    CREATE TABLE IF NOT EXISTS public.han_ji_dict
    (
        id SERIAL PRIMARY KEY,
        han_ji VARCHAR(2) NOT NULL,
        chu_im VARCHAR(10) NOT NULL,
        freq REAL,
        siann VARCHAR(3) NOT NULL,
        un VARCHAR(10) NOT NULL,
        tiau INTEGER,
        old_chu_im VARCHAR(10),
        sni_siann VARCHAR(10) NOT NULL,
        sni_un VARCHAR(10) NOT NULL
    );
''')

# 提交變更
conn.commit()

# 關閉 cursor 和連線
cur.close()
conn.close()

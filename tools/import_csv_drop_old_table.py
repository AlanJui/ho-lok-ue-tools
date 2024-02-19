import csv
import sqlite3

# 建立連線
conn = sqlite3.connect('db.sqlite3')

# 刪除現有的資料表
conn.execute('DROP TABLE IF EXISTS han_ji_dict_hanji')

# 建立新的資料表
conn.execute(
    '''CREATE TABLE "han_ji_dict_hanji" (
        "id" integer NOT NULL,
        "han_ji" varchar(2) NOT NULL,
        "chu_im" varchar(10) NOT NULL,
        "freq" real,
        "siann" varchar(2) NOT NULL,
        "un" varchar(5) NOT NULL,
        "tiau" integer,
        "old_chu_im" varchar(10),
        "sni_siann" varchar(10) NOT NULL,
        "sni_un" varchar(10) NOT NULL,
        PRIMARY KEY("id" AUTOINCREMENT)
  );'''
)

# 讀取 CSV 檔案
with open('han_ji.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)

    # 將 CSV 資料匯入到資料庫表格中
    for row in reader:
        values = [
            row['id'],
            row['han_ji'],
            row['chu_im'],
            row['freq'],
            row['siann'],
            row['un'],
            row['tiau'],
            row['old_chu_im'],
            row['sni_siann'],
            row['sni_un'],
        ]
        conn.execute(
            'INSERT INTO han_ji_dict_hanji VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            values,
        )

    # 提交變更
    conn.commit()

# 關閉連線
conn.close()

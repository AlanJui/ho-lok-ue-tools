"""
Imports CSV data into the `han_ji_dict_hanji` table in SQLite.

Reads data from a CSV file named 'han_ji.csv' and inserts it into the
`han_ji_dict_hanji` table in the SQLite database 'db.sqlite3'.

Default values are set for the `freq` and `tiau` fields if they are empty
or invalid in the CSV file.

SQL Script to clear all data in `han_ji_dict_hanji` table:
DELETE FROM han_ji_dict_hanji;
"""

import csv
import sqlite3

# 建立連線
conn = sqlite3.connect('db.sqlite3')

# 讀取 CSV 檔案
with open('./tools/han_ji.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)

    # 將 CSV 資料匯入到資料庫表格中
    for row in reader:
        values = [
            row['id'],
            row['han_ji'],
            row['chu_im'],
            float(row['freq']) if row['freq'] else 0.0,  # Set default value for freq
            row['siann'],
            row['un'],
            int(row['tiau']) if row['tiau'] else 0,  # Set default value for tiau
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

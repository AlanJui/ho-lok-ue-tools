import csv
import sqlite3

# 連接到 SQLite 資料庫
conn = sqlite3.connect('mydatabase.db')

# 創建一個新表格，名稱為 test
conn.execute(
    '''CREATE TABLE han_ji_dict
             (id INT PRIMARY KEY NOT NULL,
             han_ji TEXT NOT NULL,
             chu_im TEXT NOT NULL,
             freq REAL,
             siann TEXT NOT NULL,
             un TEXT NOT NULL,
             tiau INT NOT NULL,
             old_chu_im TEXT NOT NULL,
             sni_siann TEXT NOT NULL,
             sni_un TEXT NOT NULL);'''
)

# 讀取 CSV 檔案，將資料插入到資料庫表格中
with open('han_ji.csv', 'r', newline='', encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in csvreader:
        # 跳過第一列，因為它是欄位名稱
        if row[0] == 'id':
            continue
        # 插入資料
        conn.execute(
            "INSERT INTO han_ji_dict (id, han_ji, chu_im, freq, siann, un, tiau, old_chu_im, sni_siann, sni_un) \
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            row,
        )

# 提交並關閉連線
conn.commit()
conn.close()

import csv
import psycopg2

# 建立連線到 PostgreSQL 資料庫
conn = psycopg2.connect(
    dbname="Ho-Lok-Ue",  # 資料庫名稱
    user="root",  # 用戶名
    password="changeme",  # 密碼
    host="localhost",  # 資料庫服務器地址，本地則為 localhost
)

# 建立 cursor 以執行資料庫操作
cur = conn.cursor()

# 讀取 CSV 檔案
with open("./tools/han_ji.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)

    # 將 CSV 資料匯入到資料庫表格中
    for row in reader:
        values = (
            row["id"],
            row["han_ji"],
            row["chu_im"],
            float(row["freq"]) if row["freq"] else 0.0,  # Set default value for freq
            row["siann"],
            row["un"],
            int(row["tiau"]) if row["tiau"] else 0,  # Set default value for tiau
            row["old_chu_im"],
            row["sni_siann"],
            row["sni_un"],
        )
        cur.execute(
            "INSERT INTO han_ji_dict (id, han_ji, chu_im, freq, siann, un, tiau, old_chu_im, sni_siann, sni_un) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
            values,
        )

    # 提交變更
    conn.commit()

# 關閉 cursor 和連線
cur.close()
conn.close()

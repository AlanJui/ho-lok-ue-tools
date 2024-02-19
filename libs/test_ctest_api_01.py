import requests
from bs4 import BeautifulSoup

url = 'https://ctext.org/dictionary.pl?if=gb&char=東'

# 发送 HTTP GET 请求
response = requests.get(url)

# 解析 HTML 响应
soup = BeautifulSoup(response.text, 'html.parser')

# 在表格中查找反切信息
table = soup.find('table', class_='info')
rows = table.find_all('tr')
for row in rows:
    th = row.find('th')
    if th and th.text.strip() == '反切:':
        td = row.find('td')
        if td:
            # 提取反切内容
            anchor = td.find('a')
            if anchor:
                result = anchor.text.strip()
                print(result)
                break

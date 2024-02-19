```sh
def extract_readings_from_html(html):
    # 自「網頁」中的「表格（Table）」，查找「反切」欄位，及取出「漢字讀音」
    soup = BeautifulSoup(html, 'html.parser')
    table = soup.find('table', class_='info')
    rows = table.find_all('tr')
    readings = []
    for row in rows:
        th = row.find('th')
        if th and th.text.strip() == '反切:':
            td = row.find('td')
            if td:
                reading_list = []
                for content in td.contents:
                    if content.name == 'a' and '(' not in content.text:
                        reading = content.text.strip()
                        reading_list.append(reading)
                if reading_list:
                    readings.append({
                        'huan_tshiat': reading_list[0],
                        'un_su': reading_list[1] if len(reading_list) > 1 else None,
                        'siann_tiau': reading_list[2] if len(reading_list) > 2 else None,
                        'siann_bu': reading_list[3] if len(reading_list) > 3 else None,
                        'un_bu': reading_list[4] if len(reading_list) > 4 else None
                    })
    # 若輸入之「漢字」查找不到「反切」的讀音，則 readings 為空
    return readings
```

執行至 L 17：  reading_list list = ['昨宰', '廣韻', '上聲',
'海', '在', '昨代', '廣韻', '去聲', '代', '載']  special
variables  function variables 0 str = '昨宰' 1 str = '廣韻'
2 str = '上聲' 3 str = '海' 4 str = '在' 5 str = '昨代' 6
str = '廣韻' 7 str = '去聲' 8 str = '代' 9 str = '載' len()
int = 10

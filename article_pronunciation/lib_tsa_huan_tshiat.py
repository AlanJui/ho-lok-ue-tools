# 使用《中國哲學書電子化計劃》的《漢字字典》查「讀音」
# url = 'https://ctext.org/dictionary.pl?if=gb&char=東'
# url = 'https://ctext.org/dictionary.pl?if=gb&char=在'

# pyright: reportUnknownArgumentType=false, reportMissingTypeArgument=false, reportMissingParameterType=false, reportUnknownVariableType=false, reportUnknownMemberType=false, reportOptionalMemberAccess=false, reportOptionalIterable=false, reportGeneralTypeIssues=false
import requests
from bs4 import BeautifulSoup

from han_ji_dict.models import HanJi


# ==========================================================
# 使用平水韻的反切規則，自反切上、下字，推導漢字在八音的聲調
# ==========================================================
# pylint: disable=R0912
def determine_tone(tiau1, tiau2):  # noqa: C901
    # 以反切上字推導聲調之：清／濁
    clearness = 'clear' if int(tiau1) <= 4 else 'muddy'

    # 以反切下字推導聲調之：平／上／去／入
    if int(tiau2) in {1, 5}:
        tone_category = 'level'
    elif int(tiau2) in {2, 6}:
        tone_category = 'rising'
    elif int(tiau2) in {3, 7}:
        tone_category = 'departing'
    elif int(tiau2) in {4, 8}:
        tone_category = 'entering'
    else:
        return "Invalid tone for the lower character."

    # 綜合「清／濁」音與「平／上／去／入」聲，推導聲調為：1／2／3／4／5／6／7／8
    if clearness == 'clear':
        if tone_category == 'level':
            tone = '1'
        elif tone_category == 'rising':
            tone = '2'
        elif tone_category == 'departing':
            tone = '3'
        else:  # entering
            tone = '4'
    else:  # muddy
        if tone_category == 'level':
            tone = '5'
        elif tone_category == 'rising':
            tone = '6'
        elif tone_category == 'departing':
            tone = '7'
        else:  # entering
            tone = '8'

    return tone


# ==========================================================
# 反切法推導漢字讀音
# ==========================================================
def parse_fanqie(character1, character2):
    han_ji1 = HanJi.objects.filter(han_ji=character1).order_by('-freq').first()
    han_ji2 = HanJi.objects.filter(han_ji=character2).order_by('-freq').first()

    if not han_ji1 or not han_ji2:
        return None

    siann_bu1, un_bu1, tiau1 = han_ji1.split_chu_im()
    siann_bu2, un_bu2, tiau2 = han_ji2.split_chu_im()

    tone = determine_tone(tiau1, tiau2)

    piau_im = siann_bu1 + un_bu2 + tone

    return {
        'tsuan_ji': piau_im,                     # 漢字拼音
        'siong_ji': [siann_bu1, un_bu1, tiau1],  # 上字
        'e_ji': [siann_bu2, un_bu2, tiau2],      # 下字
    }


# ==========================================================
# 將「反切讀音」字串列表（List），轉換成「漢字反切讀音」字典結構
# ==========================================================
def convert_list_to_dict_list(string_list):
    dict_list = []
    i = 0
    for _ in string_list:
        # 從「反切讀音」欄位，取「上字」（聲母）、「下字」（韻母）
        siong_ji = string_list[i][0]
        e_ji = string_list[i][1]
        # 以「上字」、「下字」查「音標」；再將「音標」填入「反切讀音」欄位
        piau_im = parse_fanqie(siong_ji, e_ji)
        piau_im = '' if piau_im is None else piau_im

        if string_list[i+1] == '廣韻':
            han_ji_tak_im = {
                'huan_tshiat': string_list[i],
                'piau_im': piau_im,
                'un_su': string_list[i + 1] if i + 1 < len(string_list) else None,
                'siann_tiau': string_list[i + 2] if i + 2 < len(string_list) else None,
                'siann_bu': string_list[i + 3] if i + 3 < len(string_list) else None,
                'un_bu': string_list[i + 4] if i + 4 < len(string_list) else None
            }
        else:
            su_mia = f'{string_list[i]}.{string_list[i + 1]}.{string_list[i + 2]}'
            han_ji_tak_im = {
                'huan_tshiat': string_list[i],
                'piau_im': piau_im,
                'un_su': su_mia,
                'siann_tiau': '',
                'siann_bu': '',
                'un_bu': ''
            }
        dict_list.append(han_ji_tak_im)

        if string_list[i+1] == '廣韻':
            i += 5
        else:
            i += 4
        if i >= len(string_list):
            break

    return dict_list


# ==========================================================
# 自「網頁」中的「表格（Table）」，查找「反切」欄位，箤取出成「反切讀音」字串列表
# ==========================================================
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
                    dict_list = convert_list_to_dict_list(reading_list)
                    readings.extend(dict_list)
    # 若輸入之「漢字」查找不到「反切」的讀音，則 readings 為空
    return readings


# ==========================================================
# 向字典網站發送 HTTP Request，取得「漢字反切讀音」，以便據此反切讀音
# 推導該漢字的「台羅拼音」
# ==========================================================
def tsa_huan_tshiat(han_ji):
    # 發送 HTTP GET Request，要求查詢「漢字」的「讀音」
    url = f'https://ctext.org/dictionary.pl?if=gb&char={han_ji}'
    response = requests.get(url)

    # 解析 HTTP Response 返回的網頁（HTML）內容
    han_ji_dict = {
        'han_ji': han_ji,
        'tak_im_list': None,
    }
    han_ji_dict['tak_im_list'] = extract_readings_from_html(response.text)
    return han_ji_dict


def run_test(han_ji):
    # 以「漢字」查「反切讀音」
    han_ji_dict = tsa_huan_tshiat(han_ji)

    # 顯示查詢結果
    if len(han_ji_dict['tak_im_list']) > 0:
        print('==============================================')
        print(f'【查找漢字】：{han_ji_dict["han_ji"]}')
        for tak_im in han_ji_dict['tak_im_list']:
            print('----------------------------------------------')
            print(f'【反切讀音】：{tak_im["huan_tshiat"]}')
            print(f'【台羅拼音】：{tak_im["piau_im"]["tsuan_ji"]}')
            print(f'【上字拼音】：{tak_im["piau_im"]["siong_ji"]}')
            print(f'【下字拼音】：{tak_im["piau_im"]["e_ji"]}')
            print(f'【查詢結果】：{tak_im}')
    else:
        print('找不到反切讀音')
    print()


# 驗證用例
# run_test('在')
# run_test('離')
# run_test('東')

han_ji_thak_im = {
    'han_ji': '在',
    'tak_im_list': [
        {
            'huan_tshiat': '昨宰',
            'piau_im': {
                'tsuan_ji': 'tsai6',
                'siong_ji': ['ts', 'ok', '8'],
                'e_ji': ['ts', 'ai', '2'],
            },
            'un_su': '廣韻',
            'siann_tiau': '上聲',
            'siann_bu': '海',
            'un_bu': '在',
        },
        {
            'huan_tshiat': '昨代',
            'piau_im': {
                'tsuan_ji': 'tsai7',
                'siong_ji': ['ts', 'ok', '8'],
                'e_ji': ['t', 'ai', '7'],
            },
            'un_su': '廣韻',
            'siann_tiau': '去聲',
            'siann_bu': '代',
            'un_bu': '載',
        },
    ],
}

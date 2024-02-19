import sys

import requests


def send_api_request(han_ji):
    url = f'http://localhost:8000/api/huan_tshiat_huat/'
    params = {'han_ji': han_ji}
    response = requests.get(url, params=params)
    return response.json()


# 取得輸入之漢字
han_ji = sys.argv[1]

# 發送 HTTP 請求，要求伺服器查詢「漢字」的「反切讀音」及「台羅拼音」
han_ji_dict = send_api_request(han_ji)

# 在控制台上顯示響應結果
# print(han_ji_dict)

# 顯示查詢結果
if len(han_ji_dict['tak_im_list']) > 0:
    print('==============================================')
    print(f'【查找漢字】：{han_ji_dict["han_ji"]}')
    for tak_im in han_ji_dict['tak_im_list']:
        print('----------------------------------------------')
        print(f'【反切讀音】：{tak_im["huan_tshiat"]}')
        print(f'【拼音字母】：{tak_im["piau_im"]}')
        print(f'【查詢結果】：{tak_im}')
else:
    print('找不到反切讀音')
print()

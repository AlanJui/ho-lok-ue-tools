# -*- coding: utf-8 -*-
# string_list = ['昨宰', '廣韻', '上聲', '海', '在', '昨代', '廣韻', '去聲', '代', '載']
# nodes_list = [i for i, string in enumerate(string_list) if string == '廣韻']
# print(f'nodes_list = {nodes_list}')
# print(f'lengh of string_list = {len(string_list)}')

test_string_list2 = ['力智', '四書章句集注', '孟子集注', '盡心章句上', '吕支',
                     '廣韻', '上平聲', '支', '離', '力智', '廣韻', '去聲', '寘', '詈']
string_list = test_string_list2
print(f'string_list = {string_list}')

nodes_list = [i for i, string in enumerate(string_list) if string == '廣韻']
print(f'nodes_list = {nodes_list}')
print(f'lengh of string_list = {len(string_list)}')

n = len(string_list)
quotient = n // 5  # 商數
remainder = n % 5  # 餘數
if remainder > 0:
    quotient += 1  # 商數加一
print(f'quotient = {quotient}')

count = string_list.count('廣韻')
print(f"字串 '廣韻' 在清單中出現的次數：{count}")

dict_list = []
i = 0
for string in string_list:
    if string_list[i+1] == '廣韻':
        han_ji_tak_im = {
            'huan_tshiat': string_list[i],
            'un_su': string_list[i + 1] if i + 1 < len(string_list) else None,
            'siann_tiau': string_list[i + 2] if i + 2 < len(string_list) else None,
            'siann_bu': string_list[i + 3] if i + 3 < len(string_list) else None,
            'un_bu': string_list[i + 4] if i + 4 < len(string_list) else None
        }
    else:
        su_mia = f'{string_list[i]}.{string_list[i + 1]}.{string_list[i + 2]}'
        han_ji_tak_im = {
            'huan_tshiat': string_list[i],
            'un_su': su_mia,
            'siann_tiau': None,
            'siann_bu': None,
            'un_bu': None
        }

    dict_list.append(han_ji_tak_im)
    if string_list[i+1] == '廣韻':
        i += 5
    else:
        i += 4
    if i >= len(string_list):
        break

print(f'dict_list = {dict_list}')

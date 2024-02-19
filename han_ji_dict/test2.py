import re


def is_chu_im_tone(chu_im):
    """
    判斷 chu_im 最後一個字元是否為數字。
    """
    last_char = chu_im[-1]
    return last_char.isdigit()

def split_chu_im(chu_im):
    result = []

    siann_pattern = re.compile(r"(b|tsh|ts|g|h|j|kh|k|l|m|ng|n|ph|p|s|th|t|q)?")
    siann_match = siann_pattern.match(chu_im)

    if siann_match:
        siann_bu = siann_match.group()
    else:
        siann_bu = ""

    # 判斷韻母中是否有聲調，若有則直接取出，若無則補上預設聲調
    if is_chu_im_tone(chu_im):
        # 若注音符號最後一個字元為「數值」，表「聲調」。即
        un_bu = chu_im[len(siann_bu):-1]
        tiau = chu_im[-1]
    else:
        un_bu = chu_im[len(siann_bu):]
        if un_bu in [
            'un',
            'ian',
            'im',
            'ui',
            'ee',
            'an',
            'ong',
            'uai',
            'ing',
            'uan',
            'oo',
            'iau',
            'ei',
            'iong',
            'o',
            'ai',
            'in',
            'iang',
            'am',
            'ua',
            'ang',
            'iam',
            'au',
            'ia',
            'ue',
            'ann',
            'u',
            'a',
            'i',
            'iu',
            'enn',
            'uinn',
            'io',
            'inn',
            'ionn',
            'iannh',
            'uann',
            'ng',
            'e',
            'ainn',
            'onn',
            'm',
            'uang',
            'uainn',
            'uenn',
            'iaunn',
            'om',
            'aunn',
            'onn',
            'iunn',
        ]:
            tiau = '1'
        else:
            tiau = '4'

    result += [siann_bu]
    result += [un_bu]
    result += [tiau]
    return result


# han_ji1 = 'king'
# result = is_chu_im_tone(han_ji1)
# print(result)

# 經 ＝king
# 簡化注音符號
han_ji1 = 'king'
print(split_chu_im(han_ji1))

# 無簡化注音符號
han_ji1 = 'king1'
print(split_chu_im(han_ji1))

# 叔 ＝ tsik4
# 簡化注音符號
han_ji1 = 'tsik'
print(split_chu_im(han_ji1))

# 無簡化注音符號
han_ji1 = 'tsik4'
print(split_chu_im(han_ji1))

# ==========================================================
# 反切法推導漢字讀音
# ==========================================================
from han_ji_dict.models import HanJi
from django.core.exceptions import MultipleObjectsReturned


def determine_tone(tiau1, tiau2):
    # tiau1: 依「聲母」之「字韻聲調」，辨清（陰／上）；澤（陽／下）
    tshing_lo_im = '清' if int(tiau1) <= 4 else '濁'

    # tiau2: 依「韻母」之「聲調」，辨四聲（平、上、去、入）
    if int(tiau2) in {1, 5}:
        si_siann_tiau = '平'
    elif int(tiau2) in {2, 6}:
        si_siann_tiau = '上'
    elif int(tiau2) in {3, 7}:
        si_siann_tiau = '去'
    elif int(tiau2) in {4, 8}:
        si_siann_tiau = '入'
    else:
        return f"{tiau2} 聲調，無法歸入四聲調：平、上、去、入其中一種！"

    # 分清、濁
    if tshing_lo_im == '清':
        if si_siann_tiau == '平':
            tiau_ho = '1'
        elif si_siann_tiau == '上':
            tiau_ho = '2'
        elif si_siann_tiau == '去':
            tiau_ho = '3'
        else:
            tiau_ho = '4'
    else:  # lo
        if si_siann_tiau == '平':
            tiau_ho = '5'
        elif si_siann_tiau == '上':
            tiau_ho = '6'
        elif si_siann_tiau == '去':
            tiau_ho = '7'
        else:
            tiau_ho = '8'

    return tiau_ho, tshing_lo_im, si_siann_tiau


def parse_huan_tshiat(character1, character2):
    try:
        # 取聲母
        han_ji1 = HanJi.objects.get(han_ji=character1)
    except HanJi.DoesNotExist:
        return None
    except MultipleObjectsReturned:
        han_ji1_list = HanJi.objects.filter(han_ji=character1)
        han_ji1 = han_ji1_list.first()

    try:
        # 取韻母
        han_ji2 = HanJi.objects.get(han_ji=character2)
    except HanJi.DoesNotExist:
        return None
    except MultipleObjectsReturned:
        han_ji2_list = HanJi.objects.filter(han_ji=character2)
        han_ji2 = han_ji2_list.first()

    # 取聲母：siann_bu1
    siann_bu1, un_bu1, tiau1 = han_ji1.split_chu_im()
    # 取韻母：un_bu2
    siann_bu2, un_bu2, tiau2 = han_ji2.split_chu_im()

    # tshing_lo_im: 依「聲母」之「字韻聲調」，辨清（陰／上）；澤（陽／下）
    # si_siann_tiau: 依「韻母」之「聲調」，辨四聲（平、上、去、入）
    tiau_ho, tshing_lo_im, si_siann_tiau = determine_tone(tiau1, tiau2)

    piau_im = siann_bu1 + un_bu2 + tiau_ho

    return {
        'piau_im': piau_im,                      # 漢字拼音
        'siong_ji': [siann_bu1, un_bu1, tiau1],  # 上字
        'e_ji': [siann_bu2, un_bu2, tiau2],      # 下字
        'tshing_lo_im': tshing_lo_im,            # 清濁音
        'si_siann_tiau': si_siann_tiau,          # 四聲調
        'siann_bu': f"{siann_bu1}",              # 聲母
        'siann_bu_piau_im': f"{siann_bu1}{un_bu1}{tiau1}",
        'siann_piau_im': f"{siann_bu1}",
        'un_bu': f"{un_bu2}",                    # 韻母
        'un_bu_piau_im': f"{siann_bu2}{un_bu2}{tiau2}",
        'un_piau_im': f"{un_bu2}",
        'tiau_ho': tiau_ho,                      # 聲調
    }

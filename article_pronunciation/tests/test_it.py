from bs4 import BeautifulSoup
from django.test import TestCase

# from ..huan_tshiat_huat import determine_tone, parse_fanqie
from article_pronunciation.lib_huan_tshiat_huat import (determine_tone,
                                                        parse_fanqie)
from han_ji_dict.models import HanJi


class HuanTshiatHuatTestCase(TestCase):
    def setUp(self):
        HanJi.objects.create(
            han_ji="德",
            chu_im="tik4",
            freq=0.1,
            siann="t",
            un="ik",
            tiau=4,
            old_chu_im="",
            sni_siann="地",
            sni_un="經",
        )
        HanJi.objects.create(
            han_ji="紅",
            chu_im="hong5",
            freq=0.1,
            siann="h",
            un="ong",
            tiau=5,
            old_chu_im="",
            sni_siann="喜",
            sni_un="公",
        )

    def test_get_chu_im_function(self):
        siong_ji = HanJi.objects.get(han_ji="德")
        # 取得「德」字的「讀音」
        siann_bu, un_bu, tiau = siong_ji.split_chu_im()
        assert siann_bu == "t"
        assert un_bu == "ik"
        assert int(tiau) == 4

        e_ji = HanJi.objects.get(han_ji="紅")
        siann_bu2, un_bu2, tiau2 = e_ji.split_chu_im()
        assert siann_bu2 == "h"
        assert un_bu2 == "ong"
        assert int(tiau2) == 5

    def test_determine_tone_function(self):
        # 依據「清／濁」、「平／上／去／入」，推導「聲調」
        siong_ji = HanJi.objects.get(han_ji="德")
        e_ji = HanJi.objects.get(han_ji="紅")
        # 依據上字的音調4（清音）、下字的音調5（平聲），推導出聲調：1（陰平）
        self.assertEqual(determine_tone(siong_ji.tiau, e_ji.tiau), "1")

    def test_huan_tshiat_huat_function(self):
        # 〖東〗字讀音：德紅切
        # 德字讀音：tik4
        # 紅字讀音：hong5
        # 東字讀音：tong1

        # 取得德字的讀音
        self.assertEqual(parse_fanqie("德", "紅"), "tong1")

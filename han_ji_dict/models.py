import re

from django.db import models

from .ban_phing_lo_ma_ji import BanPhing
from .fong_yim_fu_ho import FongYimFuHo
from .peh_oe_ji import PehOeJi
from .sip_ngoo_im import SipNgooIm
from .tai_uan_lo_ma_ji import TaiLo


class HanJi(models.Model):
    # 漢字
    han_ji = models.CharField(max_length=2, default='')
    # 漢字讀音編碼
    chu_im = models.CharField(max_length=10, default='')
    # 讀音常用頻率
    freq = models.FloatField(default=0.0)
    # 聲母碼
    siann = models.CharField(max_length=2, default='')
    # 韻母碼
    un = models.CharField(max_length=5, default='')
    # 調號
    tiau = models.IntegerField(default=0)
    # 原編者使用的 BP 標音
    old_chu_im = models.CharField(max_length=10, null=True)
    # 十五音聲母
    sni_siann = models.CharField(max_length=10, default='')
    # 十五音韻母
    sni_un = models.CharField(max_length=10, default='')

    def __str__(self):
        return self.han_ji

    def is_chu_im_tone(self):
        """
        判斷注音符號中是否含有「聲調」.

        若最後一個字元不是數值，表示使用者可能引用「略去聲調」不寫規則.
        """
        last_char = self.chu_im[-1]
        return last_char.isdigit()

    def split_chu_im(self):
        """
        此方法用於將「注音」(chu_im) 分解成： 聲母、韻母和調號.

        1. 使用正則表達式（regular expression）匹配聲母。這裡，聲母是由特定字
        符組成的，例如 "b", "tsh", "ts" 等。

        2. 韻母是在聲母之後、調號之前的部分。為了找到韻母，我們首先計算聲母的
        長度（len(siann_bu)），然後從音節的開頭去掉聲母部分，並在音節的末尾
        去掉調號部分。

        3. 調號是音節最後一個字符。

        4. 調號可省略規則：
           當「韻母」為「舒聲韻」時，若「聲調」未標示，則代表「第一聲」；
           當「韻母」為「入聲韻」時，若「聲調」未標示，則代表「第四聲」。
        """

        valid_un_bu_endings = [
            'un', 'ian', 'im', 'ui', 'ee', 'an', 'ong', 'uai', 'ing', 'uan',
            'oo', 'iau', 'ei', 'iong', 'o', 'ai', 'in', 'iang', 'am', 'ua',
            'ang', 'iam', 'au', 'ia', 'ue', 'ann', 'u', 'a', 'i', 'iu', 'enn',
            'uinn', 'io', 'inn', 'ionn', 'iannh', 'uann', 'ng', 'e', 'ainn',
            'onn', 'm', 'uang', 'uainn', 'uenn', 'iaunn', 'om', 'aunn', 'onn',
            'iunn'
        ]

        result = []

        # 正規表達式，用於表達所有可能的聲母。
        siann_pattern = re.compile(r"(b|tsh|ts|g|h|j|kh|k|l|m|ng|n|ph|p|s|th|t|q)?")
        # 透過 match 方法，找到「注音」之中的「聲母」。然後再利用 group
        # 方法，將注音群分「聲母」與「韻母」。
        siann_match = siann_pattern.match(self.chu_im)

        if siann_match:
            siann_bu = siann_match.group()
        else:
            siann_bu = ""

        # 依據「注音符號」中是否有含「聲調」，決定取得韻母與調號的方式。
        if self.is_chu_im_tone():
            # 若注音符號最後一個字元為「數值」，表「聲調」。即
            un_bu = self.chu_im[len(siann_bu): -1]
            tiau = self.chu_im[-1]
        else:
            un_bu = self.chu_im[len(siann_bu):]
            if un_bu in valid_un_bu_endings:
                tiau = '1'
            else:
                tiau = '4'

        result += [siann_bu]
        result += [un_bu]
        result += [tiau]
        return result

    # ==========================================================
    # 取得十五音的注音
    # ==========================================================
    def get_sip_ngoo_im_chu_im(self):
        # 取得「聲母」
        siann = self.split_chu_im()[0]
        # 取得「韻母」
        un = self.split_chu_im()[1]
        # 取得「調號」
        tiau = self.split_chu_im()[2]

        sip_ngoo_im = SipNgooIm()
        return sip_ngoo_im.get_chu_im(siann, un, tiau)

    # ==========================================================
    # 取得台羅拼音（TL）的注音
    # ==========================================================
    def get_tai_lo_chu_im(self):
        # 取得「聲母」
        siann = self.split_chu_im()[0]
        # 取得「韻母」
        un = self.split_chu_im()[1]
        # 取得「調號」
        tiau = self.split_chu_im()[2]

        chu_im_method = TaiLo()
        return chu_im_method.get_chu_im(siann, un, tiau)

    # ==========================================================
    # 取得白話字（POJ）的注音
    # ==========================================================
    def get_peh_oe_ji_chu_im(self):
        # 取得「聲母」
        siann = self.split_chu_im()[0]
        # 取得「韻母」
        un = self.split_chu_im()[1]
        # 取得「調號」
        tiau = self.split_chu_im()[2]

        chu_im_method = PehOeJi()
        return chu_im_method.get_chu_im(siann, un, tiau)

    # ==========================================================
    # 取得閩南語拼音方案（BP）注音
    # ==========================================================
    def get_ban_phing_chu_im(self):
        # 取得「聲母」
        siann = self.split_chu_im()[0]
        # 取得「韻母」
        un = self.split_chu_im()[1]
        # 取得「調號」
        tiau = self.split_chu_im()[2]

        chu_im_method = BanPhing()
        return chu_im_method.get_chu_im(siann, un, tiau)

    # ==========================================================
    # 取得方音符號（TPS）注音
    # ==========================================================
    def get_fong_yim_fu_ho_chu_im(self):
        # 取得「聲母」
        siann = self.split_chu_im()[0]
        # 取得「韻母」
        un = self.split_chu_im()[1]
        # 取得「調號」
        tiau = self.split_chu_im()[2]

        chu_im_method = FongYimFuHo()
        return chu_im_method.get_chu_im(siann, un, tiau)

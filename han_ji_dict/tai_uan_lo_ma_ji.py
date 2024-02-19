"""台灣羅馬字拼音（TL）."""
import re


class TaiLo:
    def __init__(self):
        """Intialize SipNgooIm class with dicitionaries."""
        self.siann_bu_dict = {
            '': '',
            'q': '',
            'l': 'l',
            'n': 'n',
            'p': 'p',
            'k': 'k',
            'kh': 'kh',
            't': 't',
            'ph': 'ph',
            'th': 'th',
            'ts': 'ts',
            'j': 'j',
            's': 's',
            'b': 'b',
            'm': 'm',
            'g': 'g',
            'ng': 'ng',
            'tsh': 'tsh',
            'h': 'h',
        }

        self.un_bu_dict = {
            'un': 'un',
            'ut': 'ut',
            'ian': 'ian',
            'iat': 'iat',
            'im': 'im',
            'ip': 'ip',
            'ui': 'ui',
            'uih': 'uih',
            'ee': 'ee',
            'eeh': 'eeh',
            'an': 'an',
            'at': 'at',
            'ong': 'ong',
            'ok': 'ok',
            'uai': 'uai',
            'uaih': 'uaih',
            'ing': 'ing',
            'ik': 'ik',
            'uan': 'uan',
            'uat': 'uat',
            'oo': 'oo',
            'ooh': 'ooh',
            'iau': 'iau',
            'iauh': 'iauh',
            'ei': 'ei',
            'eih': 'eih',
            'iong': 'iong',
            'iok': 'iok',
            'o': 'o',
            'oh': 'oh',
            'ai': 'ai',
            'aih': 'aih',
            'in': 'in',
            'it': 'it',
            'iang': 'iang',
            'iak': 'iak',
            'am': 'am',
            'ap': 'ap',
            'ua': 'ua',
            'uah': 'uah',
            'ang': 'ang',
            'ak': 'ak',
            'iam': 'iam',
            'iap': 'iap',
            'au': 'au',
            'auh': 'auh',
            'ia': 'ia',
            'iah': 'iah',
            'ue': 'ue',
            'ueh': 'ueh',
            'ann': 'ann',
            'ahnn': 'ahnn',
            'u': 'u',
            'uh': 'uh',
            'a': 'a',
            'ah': 'ah',
            'i': 'i',
            'ih': 'ih',
            'iu': 'iu',
            'iuh': 'iuh',
            'enn': 'enn',
            'ehnn': 'ehnn',
            'uinn': 'uinn',
            'uinnh': 'uinnh',
            'io': 'io',
            'ioh': 'ioh',
            'inn': 'inn',
            'ihnn': 'ihnn',
            'ionn': 'ionn',
            'ionnh': 'ionnh',
            'iann': 'iann',
            'iannh': 'iannh',
            'uann': 'uann',
            'uannh': 'uannh',
            'ng': 'ng',
            'ngh': 'ngh',
            'e': 'e',
            'eh': 'eh',
            'ainn': 'ainn',
            'ainnh': 'ainnh',
            'onn': 'onn',
            'ohnn': 'ohnn',
            'onnh': 'onnh',
            'm': 'm',
            'mh': 'mh',
            'uang': 'uang',
            'uak': 'uak',
            'uainn': 'uainn',
            'uaihnn': 'uaihnn',
            'uenn': 'uenn',
            'uennh': 'uennh',
            'iaunn': 'iaunn',
            'iauhnn': 'iauhnn',
            'om': 'om',
            'op': 'op',
            'aunn': 'aunn',
            'aunnh': 'aunnh',
            'iunn': 'iunn',
            'iunnh': 'iunnh',
        }

        self.tiau_dict = {
            1: "一",  # "上平"
            2: "二",  # "上声"
            3: "三",  # "上去"
            4: "四",  # "上入"
            5: "五",  # "下平"
            6: "六",  # "下上"
            7: "七",  # "下去"
            8: "八",  # "下入"
        }

        self.accent_mapping = {
            'a': {
                '1': 'a',
                '2': 'á',
                '3': 'à',
                '4': 'a',
                '5': 'â',
                '6': 'ǎ',
                '7': 'ā',
                '8': 'a̍',
            },
            'e': {
                '1': 'e',
                '2': 'é',
                '3': 'è',
                '4': 'e',
                '5': 'ê',
                '6': 'ě',
                '7': 'ē',
                '8': 'e̍',
            },
            'i': {
                '1': 'i',
                '2': 'í',
                '3': 'ì',
                '4': 'i',
                '5': 'î',
                '6': 'ǐ',
                '7': 'ī',
                '8': 'i̍',
            },
            'o': {
                '1': 'o',
                '2': 'ó',
                '3': 'ò',
                '4': 'o',
                '5': 'ô',
                '6': 'ǒ',
                '7': 'ō',
                '8': 'o̍',
            },
            'u': {
                '1': 'u',
                '2': 'ú',
                '3': 'ù',
                '4': 'u',
                '5': 'û',
                '6': 'ǔ',
                '7': 'ū',
                '8': 'u̍',
            },
            'm': {
                '1': 'm',
                '2': 'ḿ',
                '3': 'm̀',
                '4': 'm',
                '5': 'm̂',
                '6': 'm̌',
                '7': 'm̄',
                '8': 'm̍',
            },
            'n': {
                '1': 'n',
                '2': 'ń',
                '3': 'ǹ',
                '4': 'n',
                '5': 'n̂',
                '6': 'ň',
                '7': 'n̄',
                '8': 'n̍',
            },
        }

        self.pattern = r"(iu|ui|oo|ng|ere)"

    def get_siann_bu(self, siann):
        return self.siann_bu_dict[siann]

    def get_un_bu(self, un):
        return self.un_bu_dict[un]

    def get_tiau_ho(self, tiau):
        return self.tiau_dict[tiau]

    def get_vowel_idx(self, vowel, syllable):
        """Get index of the vowel in the syllable."""
        return syllable.index(vowel)

    def get_primary_vowel(self, syllable):
        """Get primary vowel based on the rules."""
        vowels = [
            'a',
            'e',
            'o',
            'i',
            'u',
            'n',
            'm',
        ]
        primary_vowel = None
        for vowel in vowels:
            if vowel in syllable:
                if primary_vowel is None or vowels.index(vowel) < vowels.index(
                    primary_vowel
                ):
                    primary_vowel = vowel
        return primary_vowel

    def get_chu_im(self, siann, un, tiau):
        siann_bu = self.get_siann_bu(siann)
        un_bu = self.get_un_bu(un)

        # 將韻母字串拆解成韻母 List ，如： "ian" ==> ['i', 'a', 'n']
        un_chars = list(un_bu)
        # 找出「韻母」中，應標示「聲調符號」之「元音」
        idx = 0
        # self.pattern = r"(oai|oan|oat|oah|oeh|ee|ei)"
        searchObj = re.search(self.pattern, un_bu, re.M | re.I)
        if searchObj:
            found = searchObj.group(1)
            if found in ('iu', 'ui'):
                idx = 1
            elif found in ('oo', 'ng'):
                idx = 0
            elif found in ('ere'):
                idx = 2
        else:
            primary_vowel = self.get_primary_vowel(un_bu)
            idx = self.get_vowel_idx(primary_vowel, un_bu)

        # 將找到之「元音」，加上「聲調符號」
        guan_im = un_chars[idx]
        vowel_with_tiau = self.accent_mapping[guan_im][tiau]
        un_chars[idx] = vowel_with_tiau
        # 將資料型態為 List 的「韻母」，重新組合成「字串」資料型態
        un_bu_str = "".join(un_chars)

        chu_im = f"{siann_bu}{un_bu_str}"
        return chu_im

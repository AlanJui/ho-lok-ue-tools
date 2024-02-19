"""閩南拼音方案（BP）."""

import re


class BanPhing:
    def __init__(self):
        """Intialize class with dicitionaries."""
        self.siann_bu_dict = {
            '': '',
            'q': '',
            'b': 'bb',
            'g': 'gg',
            'h': 'h',
            'j': 'zz',
            'k': 'g',
            'kh': 'k',
            'l': 'l',
            'm': 'bbn',
            'n': 'ln',
            'ng': 'ggn',
            'p': 'b',
            'ph': 'p',
            's': 's',
            't': 'd',
            'th': 't',
            'ts': 'z',
            'tsh': 'c',
        }

        self.un_bu_dict = {
            'a': 'a',
            'ah': 'ah',
            'ai': 'ai',
            'aih': 'aih',
            'ainn': 'nai',
            'ainnh': 'naih',
            'ak': 'ak',
            'am': 'am',
            'an': 'an',
            'ang': 'ang',
            'ann': 'na',
            'annh': 'nah',
            'ap': 'ap',
            'at': 'at',
            'au': 'ao',
            'auh': 'aoh',
            'aunn': 'nao',
            'aunnh': 'naoh',
            'e': 'e',
            'ee': 'e',
            'eh': 'eh',
            'ei': 'e',
            'enn': 'ne',
            'ennh': 'neh',
            'i': 'i',
            'ia': 'ia',
            'iah': 'iah',
            'iak': 'iak',
            'iam': 'iam',
            'ian': 'ian',
            'iang': 'iang',
            'iann': 'nia',
            'iannh': 'niah',
            'iap': 'iap',
            'iat': 'iat',
            'iau': 'iao',
            'iauh': 'iaoh',
            'iaunn': 'niao',
            'iaunnh': 'niaoh',
            'ih': 'ih',
            'ik': 'ik',
            'im': 'im',
            'in': 'in',
            'ing': 'ing',
            'inn': 'ni',
            'innh': 'nih',
            'io': 'io',
            'ioh': 'ioh',
            'iok': 'iok',
            'iong': 'iong',
            'ionn': 'nioo',
            'ionnh': 'niooh',
            'ip': 'ip',
            'it': 'it',
            'iu': 'iu',
            'iuh': 'iuh',
            'iunn': 'niu',
            'iunnh': 'niuh',
            'm': 'm',
            'mh': 'mh',
            'ng': 'ng',
            'ngh': 'ngh',
            'o': 'o',
            'oh': 'oh',
            'ok': 'ok',
            'om': 'om',
            'ong': 'ong',
            'onn': 'no',
            'onnh': 'noh',
            'oo': 'oo',
            'ooh': 'ooh',
            'op': 'op',
            'u': 'u',
            'ua': 'ua',
            'uah': 'uah',
            'uai': 'uai',
            'uaih': 'uaih',
            'uainn': 'nuai',
            'uainnh': 'nuaih',
            'uak': 'uak',
            'uan': 'uan',
            'uang': 'uang',
            'uann': 'nua',
            'uannh': 'nuah',
            'uat': 'uat',
            'ue': 'ue',
            'ueh': 'ueh',
            'uenn': 'nue',
            'uennh': 'nueh',
            'uh': 'uh',
            'ui': 'ui',
            'uih': 'uih',
            'uinn': 'nui',
            'uinnh': 'nuih',
            'un': 'un',
            'ut': 'ut',
        }

        self.tiau_dict = {
            1: "一",  # 陰平
            2: "二",  # 陽平
            3: "三",  # 上声
            4: "四",  # 陽上
            5: "五",  # 陰去
            6: "六",  # 陽去
            7: "七",  # 陰入
            8: "八",  # 陽入
        }

        # 將「傳統八聲調」轉換成閩拼使用的調號
        self.trandication_tiau_dict = {
            1: 1,  # 陰平: 44
            2: 3,  # 上聲：53
            3: 5,  # 陰去：21
            4: 7,  # 上聲：53
            5: 2,  # 陽平：24
            6: 4,
            7: 6,  # 陰入：3?
            8: 8,  # 陽入：4?
        }

        self.accent_mapping = {
            'a': {1: 'ā', 2: 'á', 3: 'ǎ', 4: '', 5: 'à', 6: 'â', 7: 'ā', 8: 'á'},
            'e': {1: 'ē', 2: 'é', 3: 'ě', 4: '', 5: 'è', 6: 'ê', 7: 'ē', 8: 'é'},
            'i': {1: 'ī', 2: 'í', 3: 'ǐ', 4: '', 5: 'ì', 6: 'î', 7: 'ī', 8: 'í'},
            'o': {1: 'ō', 2: 'ó', 3: 'ǒ', 4: '', 5: 'ò', 6: 'ô', 7: 'ō', 8: 'ó'},
            'u': {1: 'ū', 2: 'ú', 3: 'ǔ', 4: '', 5: 'ù', 6: 'û', 7: 'ū', 8: 'ú'},
            'm': {1: 'ḿ', 2: 'ḿ', 3: 'm̌', 4: '', 5: 'm̀', 6: 'm̂', 7: 'm̄', 8: 'ḿ'},
            'n': {1: 'ń', 2: 'ń', 3: 'ň', 4: '', 5: 'ǹ', 6: 'n̂', 7: 'n̄', 8: 'ń'},
            'oo': {
                1: 'ōo',
                2: 'óo',
                3: 'ǒo',
                4: 'ǒo',
                5: 'òo',
                6: 'ôo',
                7: 'ōo',
                8: 'óo',
            },
        }

        self.pattern = r"(oo|ere|iu|ui|ng)"

    def get_siann_bu(self, siann):
        return self.siann_bu_dict[siann]

    def get_un_bu(self, un):
        return self.un_bu_dict[un]

    def get_tiau_ho(self, tiau):
        return self.tiau_dict[tiau]

    def convert_trandication_tiau(self, tiau):
        return self.trandication_tiau_dict[tiau]

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
            'm',
            'n',
        ]
        primary_vowel = None
        for vowel in vowels:
            if vowel in syllable:
                if primary_vowel is None or vowels.index(vowel) < vowels.index(
                    primary_vowel
                ):
                    primary_vowel = vowel
        return primary_vowel

    def _find_accented_vowel(self, un_bu, tiau):
        for vowel, accent_map in self.accent_mapping.items():
            if vowel in un_bu:
                un_bu = un_bu.replace(vowel, accent_map[tiau])
                break
        return un_bu

    def get_chu_im(self, siann, un, tiau):
        siann_bu = self.get_siann_bu(siann).strip()
        un_bu = self.get_un_bu(un)

        # 將「傳統八聲調」轉換成閩拼使用的調號
        new_tiau = self.convert_trandication_tiau(int(tiau))

        # 將韻母字串拆解成韻母 List ，如： "ian" ==> ['i', 'a', 'n']
        un_chars = list(un_bu)
        # 找出「韻母」中，應標示「聲調符號」之「元音」
        idx = 0
        searchObj = re.search(self.pattern, un_bu, re.M | re.I)
        if searchObj:
            found = searchObj.group(1)
            if found in ('iu', 'ui'):
                idx = 1
            elif found in ('oo', 'ng'):
                idx = 0
            elif found == "ere":
                idx = 2
        else:
            primary_vowel = self.get_primary_vowel(un_bu)
            idx = self.get_vowel_idx(primary_vowel, un_bu)

        # 將找到之「元音」，加上「聲調符號」
        vowel_with_tiau = self._find_accented_vowel(un_chars[idx], new_tiau)
        un_chars[idx] = vowel_with_tiau
        # 將資料型態為 List 的「韻母」，重新組合成「字串」資料型態
        un_bu_str = "".join(un_chars)

        # 當聲母為「空白」，韻母為：i 或 u 的調整
        if siann_bu == "":
            if un_chars[0] in ('i', 'u'):
                siann = "y" if un_chars[0] == "i" else "w"
        chu_im = f"{siann_bu}{un_bu_str}"

        return chu_im

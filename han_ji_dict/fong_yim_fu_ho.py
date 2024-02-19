"""台灣方音符號（TPS: Taiwanese Phonetic Symbols）."""

import re


class FongYimFuHo:
    def __init__(self):
        """Intialize class with dicitionaries."""
        self.siann_bu_dict = {
            '': '',
            'q': '',
            'b': 'ㆠ',
            'g': 'ㆣ',
            'h': 'ㄏ',
            'j': 'ㆡ',
            'k': 'ㄍ',
            'kh': 'ㄎ',
            'l': 'ㄌ',
            'm': 'ㄇ',
            'n': 'ㄋ',
            'ng': 'ㄫ',
            'p': 'ㄅ',
            'ph': 'ㄆ',
            's': 'ㄙ',
            't': 'ㄉ',
            'th': 'ㄊ',
            'ts': 'ㄗ',
            'tsh': 'ㄘ',
        }

        self.un_bu_dict = {
            'a': 'ㄚ',
            'ah': 'ㄚㆷ',
            'ai': 'ㄞ',
            'aih': 'ㄞㆷ',
            'ainn': 'ㆮ',
            'ainnh': 'ㆮㆷ',
            'ak': 'ㄚㆻ',
            'am': 'ㆰ',
            'an': 'ㄢ',
            'ang': 'ㄤ',
            'ann': 'ㆩ',
            'annh': 'ㆩㆷ',
            'ap': 'ㄚㆴ',
            'at': 'ㄚㆵ',
            'au': 'ㄠ',
            'auh': 'ㄠㆷ',
            'aunn': 'ㆯ',
            'aunnh': 'ㆯㆷ',
            'e': 'ㆤ',
            'ee': 'ㄝ',
            'eh': 'ㆤㆷ',
            'ei': 'ㆤ',
            'enn': 'ㆥ',
            'ennh': 'ㆥㆷ',
            'i': 'ㄧ',
            'ia': 'ㄧㄚ',
            'iah': 'ㄧㄚㆷ',
            'iak': 'ㄧㄚㆻ',
            'iam': 'ㄧㆰ',
            'ian': 'ㄧㄢ',
            'iang': 'ㄧㄤ',
            'iann': 'ㄧㆩ',
            'iannh': 'ㄧㆩㆷ',
            'iap': 'ㄧㄚㆴ',
            'iat': 'ㄧㄚㆵ',
            'iau': 'ㄧㄠ',
            'iauh': 'ㄧㄠㆷ',
            'iaunn': 'ㄧㆯ',
            'iaunnh': 'ㄧㆯㆷ',
            'ih': 'ㄧㆷ',
            'ik': 'ㄧㆻ',
            'im': 'ㄧㆬ',
            'in': 'ㄧㄣ',
            'ing': 'ㄧㄥ',
            'inn': 'ㆪ',
            'innh': 'ㆪ',
            'io': 'ㄧㄜ',
            'ioh': 'ㄧㄜㆷ',
            'iok': 'ㄧㆦㆻ',
            'iong': 'ㄧㆲ',
            'ionn': 'ㄧㆧ',
            'ionnh': 'ㄧㆧㆷ',
            'ip': 'ㄧㆴ',
            'it': 'ㄧㆵ',
            'iu': 'ㄧㄨ',
            'iuh': 'ㄧㄨㆷ',
            'iunn': 'ㄧㆫ',
            'iunnh': 'ㄧㆫㆷ',
            'm': 'ㆬ',
            'mh': 'ㆬㆷ',
            'ng': 'ㆭ',
            'ngh': 'ㆭㆷ',
            'o': 'ㄜ',
            'oh': 'ㄜㆷ',
            'ok': 'ㆦㆻ',
            'om': 'ㆱ',
            'ong': 'ㆲ',
            'onn': 'ㆧ',
            'onnh': 'ㆧㆷ',
            'oo': 'ㆦ',
            'ooh': 'ㆦㆷ',
            'op': 'ㆦㆴ',
            'u': 'ㄨ',
            'ua': 'ㄨㄚ',
            'uah': 'ㄨㄚㆷ',
            'uai': 'ㄨㄞ',
            'uaih': 'ㄨㄞㆷ',
            'uainn': 'ㄨㆮ',
            'uainnh': 'ㄨㆮㆷ',
            'uak': 'ㄨㄚㆻ',
            'uan': 'ㄨㄢ',
            'uang': 'ㄨㄤ',
            'uann': 'ㄨㆩ',
            'uannh': 'ㄨㆩㆷ',
            'uat': 'ㄨㄚㆵ',
            'ue': 'ㄨㆤ',
            'ueh': 'ㄨㆤㆷ',
            'uenn': 'ㄨㆥ',
            'uennh': 'ㄨㆥㆷ',
            'uh': 'ㄨㆷ',
            'ui': 'ㄨㄧ',
            'uih': 'ㄨㄧㆷ',
            'uinn': 'ㄨㆪ',
            'uinnh': 'ㄨㆪㆷ',
            'un': 'ㄨㄣ',
            'ut': 'ㄨㆵ',
        }

        self.tiau_dict = {
            1: "",  # 陰平
            2: "ˋ",  # 上声
            3: "˪",  # 陰去
            4: "",  # 陰入
            5: "ˊ",  # 陽平
            6: "",  # 陽上
            7: "˫",  # 陽去
            8: "\u02D9",  # 陽入
        }

    def get_siann_bu(self, siann, un):
        if siann == "ts" and un.startswith("i"):
            return "ㄐ"
        elif siann == "tsh" and un.startswith("i"):
            return "ㄑ"
        elif siann == "s" and un.startswith("i"):
            return "ㄒ"
        elif siann == "j" and un.startswith("i"):
            return "ㆢ"
        else:
            return self.siann_bu_dict[siann]

    def get_un_bu(self, un):
        return self.un_bu_dict[un]

    def get_tiau_ho(self, tiau):
        return self.tiau_dict[tiau]

    def get_chu_im(self, siann, un, tiau):
        siann_bu = self.get_siann_bu(siann, un).strip()
        un_bu = self.get_un_bu(un)
        tiau_fu = self.get_tiau_ho(int(tiau))

        chu_im = f"{siann_bu}{un_bu}{tiau_fu}"

        return chu_im

class SipNgooIm:
    def __init__(self):
        """Intialize SipNgooIm class with dicitionaries."""
        self.siann_bu_dict = {
            'l': '柳',
            'n': '柳',
            'p': '邊',
            'k': '求',
            'kh': '去',
            't': '地',
            'ph': '頗',
            'th': '他',
            'ts': '曾',
            'j': '入',
            's': '時',
            '': '英',
            'q': '英',
            'b': '門',
            'm': '門',
            'g': '語',
            'ng': '語',
            'tsh': '出',
            'h': '喜',
        }

        self.un_bu_dict = {
            'un': '君',
            'ut': '君',
            'ian': '堅',
            'iat': '堅',
            'im': '金',
            'ip': '金',
            'ui': '規',
            'uih': '規',
            'ee': '嘉',
            'eeh': '嘉',
            'an': '干',
            'at': '干',
            'ong': '公',
            'ok': '公',
            'uai': '乖',
            'uaih': '乖',
            'ing': '經',
            'ik': '經',
            'uan': '觀',
            'uat': '觀',
            'oo': '沽',
            'ooh': '沽',
            'iau': '嬌',
            'iauh': '嬌',
            'ei': '稽',
            'eih': '稽',
            'iong': '恭',
            'iok': '恭',
            'o': '高',
            'oh': '高',
            'ai': '皆',
            'aih': '皆',
            'in': '巾',
            'it': '巾',
            'iang': '姜',
            'iak': '姜',
            'am': '甘',
            'ap': '甘',
            'ua': '瓜',
            'uah': '瓜',
            'ang': '江',
            'ak': '江',
            'iam': '兼',
            'iap': '兼',
            'au': '交',
            'auh': '交',
            'ia': '迦',
            'iah': '迦',
            'ue': '檜',
            'ueh': '檜',
            'ann': '監',
            'ahnn': '監',
            'u': '艍',
            'uh': '艍',
            'a': '膠',
            'ah': '膠',
            'i': '居',
            'ih': '居',
            'iu': '丩',
            'iuh': '丩',
            'enn': '更',
            'ehnn': '更',
            'uinn': '褌',
            'uinnh': '褌',
            'io': '茄',
            'ioh': '茄',
            'inn': '梔',
            'ihnn': '梔',
            'ionn': '薑',
            'ionnh': '薑',
            'iann': '驚',
            'iannh': '驚',
            'uann': '官',
            'uannh': '官',
            'ng': '鋼',
            'ngh': '鋼',
            'e': '伽',
            'eh': '伽',
            'ainn': '閒',
            'ainnh': '閒',
            'onn': '扛',
            'ohnn': '扛',
            'onnh': '姑',
            'm': '姆',
            'mh': '姆',
            'uang': '光',
            'uak': '光',
            'uainn': '閂',
            'uaihnn': '閂',
            'uenn': '糜',
            'uennh': '糜',
            'iaunn': '嘄',
            'iauhnn': '嘄',
            'om': '箴',
            'op': '箴',
            'aunn': '爻',
            'aunnh': '爻',
            'iunn': '牛',
            'iunnh': '牛',
        }

        self.tiau_dict = {
            1: "一",
            2: "二",
            3: "三",
            4: "四",
            5: "五",
            7: "七",
            8: "八",
        }

    def get_siann_bu(self, siann):
        return self.siann_bu_dict[siann]

    def get_un_bu(self, un, tiau):
        # if tiau == 4 or tiau == 8:
        if tiau in (4, 8):
            # 韻母為入聲韻
            un_bu = self.un_bu_dict[un][1]
        else:
            # 韻母為舒聲韻
            un_bu = self.un_bu_dict[un][0]
        return un_bu

    def get_tiau_ho(self, tiau):
        return self.tiau_dict[tiau]

    def get_chu_im(self, siann, un, tiau):
        un_bu = self.get_un_bu(un, tiau)
        tiau_ho = self.get_tiau_ho(int(tiau))
        siann_bu = self.get_siann_bu(siann)

        return f"{un_bu}{tiau_ho}{siann_bu}"

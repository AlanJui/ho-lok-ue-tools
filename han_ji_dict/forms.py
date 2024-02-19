from django.forms import ModelForm

from .models import HanJi


class HanJiForm(ModelForm):
    class Meta:
        model = HanJi
        fields = '__all__'
        labels = {
            'han_ji': '漢字',
            'chu_im': '讀音編碼',
            'freq': '讀音常用頻率',
            'siann': '聲母碼',
            'un': '韻母碼',
            'tiau': '調號',
            'old_chu_im': '原編者使用的 BP 標音',
            'sni_siann': '十五音聲母',
            'sni_un': '十五音韻母',
        }

    def __init__(self, *args, **kwargs):
        """定義以下欄位可略過."""
        super().__init__(*args, **kwargs)
        self.fields['siann'].required = False
        self.fields['old_chu_im'].required = False
        self.fields['sni_siann'].required = False
        self.fields['sni_un'].required = False

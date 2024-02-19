from django import forms

pronunciation_options = {
    "tai_lo": "台羅拼音",
    "peh_oe_ji": "白話字",
    "ban_phing": "閩南語拼音方案",
    "sip_ngoo": "十五音",
    "fong_yim": "方音符號"
}

class MyForm(forms.Form):
    PRONUNCIATION_CHOICES = [
        ("tai_lo", "台羅拼音"),
        ("peh_oe_ji", "白話字"),
        ("ban_phing", "閩南語拼音方案"),
        ("sip_ngoo", "十五音"),
        ("fong_yim", "方音符號")
    ]
    pronunciation = forms.ChoiceField(choices=PRONUNCIATION_CHOICES)


class FanqieForm(forms.Form):
    characters = forms.CharField(label='反切法拼音漢字', max_length=2)

    def clean_characters(self):
        data = self.cleaned_data['characters']

        if len(data) != 2:
            raise forms.ValidationError("反切法拼音的漢字需有兩個！")

        return data

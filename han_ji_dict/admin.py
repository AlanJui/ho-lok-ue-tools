from django.contrib import admin

from .models import HanJi


class HanJiAdmin(admin.ModelAdmin):
    list_display = (
        'han_ji',
        'chu_im',
        'freq',
        'siann',
        'un',
        'tiau',
        'old_chu_im',
        'sni_siann',
        'sni_un',
    )
    search_fields = ('han_ji', 'chu_im', 'sni_siann', 'sni_un', 'tiau')

    def display_freq(self, obj):
        try:
            return format(obj.freq, '.2f')
        except (IndexError, ValueError):
            return "N/A"

    display_freq.admin_order_field = 'freq'
    display_freq.short_description = 'Frequency'

    def display_tiau(self, obj):
        try:
            return obj.tiau
        except IndexError:
            return "N/A"

    display_tiau.admin_order_field = 'tiau'
    display_tiau.short_description = 'Tiau'


admin.site.register(HanJi, HanJiAdmin)

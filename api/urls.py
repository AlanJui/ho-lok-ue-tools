# pylint: disable=C0301
# flake8: noqa: E501
from django.urls import path

from .views import (hello, huan_tshiat_huat, tshue_han_ji_e_ban_phing,
                    tshue_han_ji_e_hong_im_hu_ho, tshue_han_ji_e_peh_ue_ji,
                    tshue_han_ji_e_sip_ngoo_im, tshue_han_ji_e_tai_lo_phing_im,
                    tshue_han_ji_huat_im)

app_name = 'api'

urlpatterns = [
    # 查漢字發音
    path('tshue_han_ji_huat_im/<str:han_ji>',
         tshue_han_ji_huat_im, name='tshue_han_ji_huat_im'),
    # 查漢字十五音標音發音
    path('tshue_han_ji_huat_im/sip_ngoo_im/<str:han_ji>/',
         tshue_han_ji_e_sip_ngoo_im, name='tshue_han_ji_e_sip_ngoo_im'),
    # 查漢字台羅拼音發音
    path('tshue_han_ji_huat_im/tai_lo_phing_im/<str:han_ji>/',
         tshue_han_ji_e_tai_lo_phing_im, name='tshue_han_ji_e_tai_lo_phing_im'),
    # 查漢字白話字拼音發音
    path('tshue_han_ji_huat_im/peh_ue_ji/<str:han_ji>/',
         tshue_han_ji_e_peh_ue_ji, name='tshue_han_ji_e_peh_ue_ji'),
    # 查漢字閩拼方案發音
    path('tshue_han_ji_huat_im/ban_phing/<str:han_ji>/',
         tshue_han_ji_e_ban_phing, name='tshue_han_ji_e_ban_phing'),
    # 查漢字方音符號發音
    path('tshue_han_ji_huat_im/hong_im_hu_ho/<str:han_ji>/',
         tshue_han_ji_e_hong_im_hu_ho, name='tshue_han_ji_e_hong_im_hu_ho'),
    # 查反切法
    path('huan_tshiat_huat/', huan_tshiat_huat, name='huan_tshiat_huat'),
    # API 測試用
    path('hello/', hello, name='hello'),
]

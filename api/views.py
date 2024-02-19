# pylint: disable=C0301
# flake8: noqa: E501
# pyright: reportUnknownArgumentType=false, reportMissingTypeArgument=false, reportMissingParameterType=false, reportUnknownVariableType=false, reportUnknownMemberType=false, reportOptionalMemberAccess=false, reportOptionalIterable=false, reportGeneralTypeIssues=false
# pylint: disable=unused-argument
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view
from rest_framework.response import Response

from article_pronunciation.lib_tsa_huan_tshiat import tsa_huan_tshiat
from han_ji_dict.models import HanJi


# ==========================================================
# 反切法推導漢字讀音
# http://localhost:8000/api/huan_tshiat_huat/?han_ji=東
# http://localhost:8000/api/huan_tshiat_huat/?han_ji=在
# ==========================================================
@api_view(['GET'])
def huan_tshiat_huat(request):
    # 對 request 參數進行一個操作，以顯示使用它
    _ = request.GET.get('example_param')

    if 'han_ji' in request.query_params:
        # 取得欲查詢之「漢字」
        han_ji = request.query_params['han_ji']
        # 以漢字查詢「反切讀音」
        han_ji_dict = tsa_huan_tshiat(han_ji)
        return Response(han_ji_dict)
    else:
        return Response({'error': '請提供要查詢的漢字。'})


# ==========================================================
# 查找漢字發音
# http://localhost:8000/api/tshue_han_ji_huat_im/在/
# ==========================================================
@api_view(['GET'])
def tshue_han_ji_huat_im(request, han_ji):  # noqa: unused-argument
    # 對 request 參數進行一個操作，以顯示使用它
    _ = request.GET.get('example_param')

    # 取得欲查詢之「漢字」
    u_tshue_tioh_e_han_ji = HanJi.objects.filter(
        han_ji=han_ji).order_by('-freq').first()

    if u_tshue_tioh_e_han_ji:
        tshue_tioh_e_han_ji = model_to_dict(u_tshue_tioh_e_han_ji)
        return Response(tshue_tioh_e_han_ji)
    else:
        return Response({'error': '請提供要查詢的漢字。'})


# ==========================================================
# 查找漢字十五音標音發音
# http://localhost:8000/api/tshue_han_ji_huat_im/sip_ngoo_im/東/
# ==========================================================
@api_view(['GET'])
def tshue_han_ji_e_sip_ngoo_im(request, han_ji):
    # 對 request 參數進行一個操作，以顯示使用它
    _ = request.GET.get('example_param')

    # 取得欲查詢之「漢字」
    u_tshue_tioh_e_han_ji = HanJi.objects.filter(
        han_ji=han_ji).order_by('-freq').first()

    if u_tshue_tioh_e_han_ji:
        return Response({
            'han_ji': han_ji,
            'sip_ngoo_im': u_tshue_tioh_e_han_ji.get_sip_ngoo_im_chu_im(),
        })
    else:
        return Response({'error': '請提供要查詢的漢字。'})


# ==========================================================
# 查找漢字台羅拼音發音
# http://localhost:8000/api/tshue_han_ji_huat_im/tai_lo_phing_im/東/
# ==========================================================
@api_view(['GET'])
def tshue_han_ji_e_tai_lo_phing_im(request, han_ji):
    # 對 request 參數進行一個操作，以顯示使用它
    _ = request.GET.get('example_param')

    # 取得欲查詢之「漢字」
    u_tshue_tioh_e_han_ji = HanJi.objects.filter(
        han_ji=han_ji).order_by('-freq').first()

    if u_tshue_tioh_e_han_ji:
        return Response({
            'han_ji': han_ji,
            'tai_lo_phing_im': u_tshue_tioh_e_han_ji.get_tai_lo_chu_im(),
        })
    else:
        return Response({'error': '請提供要查詢的漢字。'})


# ==========================================================
# 查找白話字（POJ）拼音發音
# http://localhost:8000/api/tshue_han_ji_huat_im/peh_ue_ji/東/
# ==========================================================
@api_view(['GET'])
def tshue_han_ji_e_peh_ue_ji(request, han_ji):
    # 對 request 參數進行一個操作，以顯示使用它
    _ = request.GET.get('example_param')

    # 取得欲查詢之「漢字」
    u_tshue_tioh_e_han_ji = HanJi.objects.filter(
        han_ji=han_ji).order_by('-freq').first()

    if u_tshue_tioh_e_han_ji:
        return Response({
            'han_ji': han_ji,
            'peh_ue_ji': u_tshue_tioh_e_han_ji.get_peh_oe_ji_chu_im(),
        })
    else:
        return Response({'error': '請提供要查詢的漢字。'})


# ==========================================================
# 查找漢字閩拼（BP）發音
# http://localhost:8000/api/tshue_han_ji_huat_im/ban_phing/東/
# ==========================================================
@api_view(['GET'])
def tshue_han_ji_e_ban_phing(request, han_ji):
    # 對 request 參數進行一個操作，以顯示使用它
    _ = request.GET.get('example_param')

    # 取得欲查詢之「漢字」
    u_tshue_tioh_e_han_ji = HanJi.objects.filter(
        han_ji=han_ji).order_by('-freq').first()

    if u_tshue_tioh_e_han_ji:
        return Response({
            'han_ji': han_ji,
            'ban_phing': u_tshue_tioh_e_han_ji.get_ban_phing_chu_im(),
        })
    else:
        return Response({'error': '請提供要查詢的漢字。'})


# ==========================================================
# 查找漢字方音符號（TPS）發音
# http://localhost:8000/api/tshue_han_ji_huat_im/hong_im_fu_ho/東/
# ==========================================================
@api_view(['GET'])
def tshue_han_ji_e_hong_im_hu_ho(request, han_ji):
    # 對 request 參數進行一個操作，以顯示使用它
    _ = request.GET.get('example_param')

    # 取得欲查詢之「漢字」
    u_tshue_tioh_e_han_ji = HanJi.objects.filter(
        han_ji=han_ji).order_by('-freq').first()

    if u_tshue_tioh_e_han_ji:
        return Response({
            'han_ji': han_ji,
            'hong_im_fu_ho': u_tshue_tioh_e_han_ji.get_fong_yim_fu_ho_chu_im(),
        })
    else:
        return Response({'error': '請提供要查詢的漢字。'})


@ api_view(['GET'])
def hello(request):
    # 對 request 參數進行一個操作，以顯示使用它
    _ = request.GET.get('example_param')

    return Response({'message': '你好，世界！'})

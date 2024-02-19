# Debug parse_huan_tshiat

執行 `http://hangi.ccc.tw.local/huan_tshiat_huat/` ，發生錯
誤如下：

```sh
MultipleObjectsReturned at /huan_tshiat_huat/
get() returned more than one HanJi -- it returned 2!
Request Method:	POST
Request URL:	http://hangi.ccc.tw.local/huan_tshiat_huat/
Django Version:	4.1.7
Exception Type:	MultipleObjectsReturned
Exception Value:
get() returned more than one HanJi -- it returned 2!
Exception Location:	/apps/hangi.ccc.tw.local/.venv/lib/python3.10/site-packages/django/db/models/query.py, line 653, in get
Raised during:	article_pronunciation.views.huan_tshiat_huat
Python Executable:	/apps/hangi.ccc.tw.local/.venv/bin/uwsgi
Python Version:	3.10.6
Python Path:
['.',
 '',
 '/home/alanjui/.pyenv/versions/3.10.6/lib/python310.zip',
 '/home/alanjui/.pyenv/versions/3.10.6/lib/python3.10',
 '/home/alanjui/.pyenv/versions/3.10.6/lib/python3.10/lib-dynload',
 '/apps/hangi.ccc.tw.local/.venv/lib/python3.10/site-packages']
Server time:	Sun, 30 Jul 2023 03:27:42 +0000
```

依錯誤訊息推導出問題源頭：
article_pronunciation.views.huan_tshiat_huat

```sh
Environment:


Request Method: POST
Request URL: http://hangi.ccc.tw.local/huan_tshiat_huat/

Django Version: 4.1.7
Python Version: 3.10.6
Installed Applications:
['django.contrib.admin',
 'django.contrib.auth',
 'django.contrib.contenttypes',
 'django.contrib.sessions',
 'django.contrib.messages',
 'django.contrib.staticfiles',
 'mathfilters',
 'rest_framework',
 'api',
 'han_ji_dict',
 'article_pronunciation']
Installed Middleware:
['django.middleware.security.SecurityMiddleware',
 'django.contrib.sessions.middleware.SessionMiddleware',
 'django.middleware.common.CommonMiddleware',
 'django.middleware.csrf.CsrfViewMiddleware',
 'django.contrib.auth.middleware.AuthenticationMiddleware',
 'django.contrib.messages.middleware.MessageMiddleware',
 'django.middleware.clickjacking.XFrameOptionsMiddleware']



Traceback (most recent call last):
  File "/apps/hangi.ccc.tw.local/.venv/lib/python3.10/site-packages/django/core/handlers/exception.py", line 56, in inner
    response = get_response(request)
  File "/apps/hangi.ccc.tw.local/.venv/lib/python3.10/site-packages/django/core/handlers/base.py", line 197, in _get_response
    response = wrapped_callback(request, *callback_args, **callback_kwargs)
  File "/apps/hangi.ccc.tw.local/./article_pronunciation/views.py", line 175, in huan_tshiat_huat
    han_ji_haut_im = parse_fanqie(character1, character2)
  File "/apps/hangi.ccc.tw.local/./article_pronunciation/lib_huan_tshiat_huat.py", line 51, in parse_fanqie
    han_ji2 = HanJi.objects.get(han_ji=character2)
  File "/apps/hangi.ccc.tw.local/.venv/lib/python3.10/site-packages/django/db/models/manager.py", line 85, in manager_method
    return getattr(self.get_queryset(), name)(*args, **kwargs)
  File "/apps/hangi.ccc.tw.local/.venv/lib/python3.10/site-packages/django/db/models/query.py", line 653, in get
    raise self.model.MultipleObjectsReturned(

Exception Type: MultipleObjectsReturned at /huan_tshiat_huat/
Exception Value: get() returned more than one HanJi -- it returned 2!
```

【article_pronunciation/views.py】:

```sh

from django.db.models import Max from django.http import
HttpResponse from django.shortcuts import render

from han_ji_dict.models import HanJi

from .forms import FanqieForm from .lib_huan_tshiat_huat
import parse_huan_tshiat ... def huan_tshiat_huat(request):
if request.method == 'POST': form = FanqieForm(request.POST)
if form.is_valid(): characters =
form.cleaned_data['characters'] character1 = characters[0]
character2 = characters[1] han_ji_haut_im =
parse_huan_tshiat(character1, character2) return
render(request,
'article_pronunciation/huan_tshiat_huat.html', { 'form':
form, 'siong_ji': character1, 'e_ji': character2,
'han_ji_haut_im': han_ji_haut_im, }) else: form =
FanqieForm() return render(request,
'article_pronunciation/huan_tshiat_huat.html', {'form':
form}) ...

```

【article_pronunciation/lib_huan_tshiat_huat.py】:

```sh
def parse_huan_tshiat(character1, character2):
    try:
        # 取聲母
        han_ji1 = HanJi.objects.get(han_ji=character1)
        # 取韻母
        han_ji2 = HanJi.objects.get(han_ji=character2)
    except HanJi.DoesNotExist:
        return None

    # 取聲母：siann_bu1
    siann_bu1, un_bu1, tiau1 = han_ji1.split_chu_im()
    # 取韻母：un_bu2
    siann_bu2, un_bu2, tiau2 = han_ji2.split_chu_im()

    # tshing_lo_im: 依「聲母」之「字韻聲調」，辨清（陰／上）；澤（陽／下）
    # si_siann_tiau: 依「韻母」之「聲調」，辨四聲（平、上、去、入）
    tiau_ho, tshing_lo_im, si_siann_tiau = determine_tone(tiau1, tiau2)

    piau_im = siann_bu1 + un_bu2 + tiau_ho

    return {
        'piau_im': piau_im,                      # 漢字拼音
        'siong_ji': [siann_bu1, un_bu1, tiau1],  # 上字
        'e_ji': [siann_bu2, un_bu2, tiau2],      # 下字
        'tshing_lo_im': tshing_lo_im,            # 清濁音
        'si_siann_tiau': si_siann_tiau,          # 四聲調
        'siann_bu': f"{siann_bu1}",              # 聲母
        'siann_bu_piau_im': f"{siann_bu1}{un_bu1}{tiau1}",
        'siann_piau_im': f"{siann_bu1}",
        'un_bu': f"{un_bu2}",                    # 韻母
        'un_bu_piau_im': f"{siann_bu2}{un_bu2}{tiau2}",
        'un_piau_im': f"{un_bu2}",
        'tiau_ho': tiau_ho,                      # 聲調
    }
```

```

```

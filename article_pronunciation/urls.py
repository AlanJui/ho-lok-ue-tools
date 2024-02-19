# article_pronunciation/urls.py
from django.urls import path

from . import views
from .views import huan_tshiat_huat

app_name = 'article_pronunciation'

urlpatterns = [
    path('save_file/', views.save_file, name='save_file'),
    path('huan_tshiat_huat/', views.huan_tshiat_huat, name='huan_tshiat_huat'),
    path('', views.index, name='index'),
]

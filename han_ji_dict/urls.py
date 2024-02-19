from django.urls import path

from . import views

app_name = 'han_ji_dict'

urlpatterns = [
    path('', views.HanJiListView.as_view(), name='home'),
    path('<int:pk>/', views.HanJiDetailView.as_view(), name='detail'),
    path('create/', views.HanJiCreateView.as_view(), name='create'),
    path('<int:pk>/update/', views.HanJiUpdateView.as_view(), name='update'),
    path('<int:pk>/delete/', views.HanJiDeleteView.as_view(), name='delete'),
]

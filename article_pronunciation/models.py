from django.db import models
from django_summernote.fields import SummernoteTextField
from django.db.models import CharField, DateField, DateTimeField


class MyNote(models.Model):
    title: CharField = models.CharField('文章標題', max_length=200)
    author: CharField = models.CharField('作者', max_length=50, default='佚名')
    tag: CharField = models.CharField('標籤', max_length=10)
    content = SummernoteTextField('文章內容')
    publish_date: DateField = models.DateField('發佈日期', auto_now=True)
    created_at: DateTimeField = models.DateTimeField('建檔日期', auto_now_add=True)
    updated_at: DateTimeField = models.DateTimeField('更新日期', auto_now=True)

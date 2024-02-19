from bs4 import BeautifulSoup
from django.contrib.auth.models import AnonymousUser
from django.test import Client, RequestFactory, TestCase
from django.urls import reverse

from han_ji_dict.models import HanJi

from ..views import index


class TestArticlePronunciationView(TestCase):

    def setUp(self):
        HanJi.objects.create(
            han_ji="德",
            chu_im="tik4",
            freq=0.1,
            siann="t",
            un="ik",
            tiau=4,
            old_chu_im="",
            sni_siann="地",
            sni_un="經",
        )
        self.client = Client()
        self.index_url = reverse('article_pronunciation:index')
        self.post_data = {
            'text': '德',
            'pronunciation': 'tai_lo',
        }

    def test_pronunciation_output(self):
        response = self.client.post(self.index_url, self.post_data)
        soup = BeautifulSoup(response.content, 'html.parser')
        # 找到 ruby 標籤內容
        ruby_tag = soup.find('ruby')
        rb_text = ruby_tag.find('rb').text.strip()
        rt_text = ruby_tag.find('rt').text.strip()

        self.assertEqual(rb_text, '德')
        self.assertEqual(rt_text, 'tik')

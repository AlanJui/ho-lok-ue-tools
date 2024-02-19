# tests/sit/test_article_pronunciation.py
from django.test import TestCase

from han_ji_dict.models import HanJi


class ArticlePronunciationIntegrationTest(TestCase):
    def test_article_pronunciation_can_get_hanji_objects(self):
        # Create a sample HanJi object
        HanJi.objects.create(han_ji='測', chu_im='tsheh4')

        # Test if the HanJi object is accessible
        hanji = HanJi.objects.get(han_ji='測')
        self.assertEqual(hanji.chu_im, 'tsheh4')

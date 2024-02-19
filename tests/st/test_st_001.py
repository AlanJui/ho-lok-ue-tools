"""
To valid that use can input an article and see the pronunciations.

User input article by web browser (like seleium)

- Step 1: User input URL in web browser `http://localhost:8000/article_pronunciation/input/`

- Step 2: System display `Enter Article` form

- Step 3: User input article into form and press submit button

- Step 4: System process the input and redirect to web page in URL and display the content
which every han_ji (Chinese Character) with pronunction.
(URL) http://localhost:8000/article_pronunciation/pronunciation/

Command to run test:
poetry run python manage.py test tests.st
"""
# tests/sft/test_article_pronunciation.py

from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test import LiveServerTestCase
from django.urls import reverse
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

from han_ji_dict.models import HanJi


class ArticlePronunciationFunctionalTest(LiveServerTestCase):
    def setUp(self):
        HanJi.objects.create(han_ji='測', chu_im='tshik4')
        HanJi.objects.create(han_ji='試', chu_im='tshi3')
        # self.browser = webdriver.Firefox()
        self.browser = webdriver.Chrome()

    def tearDown(self):
        self.browser.quit()

    def test_input_article_and_get_pronunciation(self):
        # Step 1: User input URL in web browser
        self.browser.get(self.live_server_url + reverse("input_article"))

        # Step 2: System display "Enter Article" form
        # textarea = self.browser.find_element_by_id("article")
        textarea = self.browser.find_element(By.NAME, "article")

        # Step 3: User input article into form and press submit button
        textarea.send_keys("測試")
        textarea.send_keys(Keys.ENTER)
        # submit_button = self.browser.find_element_by_xpath("//button[@type='submit']")
        submit_button = self.browser.find_element(By.XPATH, "//button[@type='submit']")
        submit_button.click()

        # Print the page source for debugging
        # print(self.browser.page_source)

        # Step 4: System process the input and display the content with pronunciation
        wait = WebDriverWait(self.browser, 3)  # Wait for the page to load
        # hanji_elements = self.browser.find_elements_by_css_selector(".hanji")
        hanji_elements = wait.until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, "ruby"))
        )

        # Add assertions here to check the content and prounciation of han_ji
        hanji_character_text = self.browser.execute_script(
            "return arguments[0].childNodes[0].nodeValue.trim()", hanji_elements[0]
        )
        self.assertEqual(hanji_character_text, "測")

        hanji_character_text2 = self.browser.execute_script(
            "return arguments[0].childNodes[0].nodeValue.trim()", hanji_elements[1]
        )
        self.assertEqual(hanji_character_text2, "試")

        # Locate the first <rt> element within the <ruby> element
        rt_element = hanji_elements[0].find_element(By.CSS_SELECTOR, "rt")
        rt_element2 = hanji_elements[1].find_element(By.CSS_SELECTOR, "rt")

        # Check if the text content of the <rt> element matches the expected pronunciation
        self.assertEqual(rt_element.text, "tshik4")
        self.assertEqual(rt_element2.text, "tshi3")

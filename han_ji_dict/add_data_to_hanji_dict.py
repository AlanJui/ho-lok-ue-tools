import csv
import os
import sys

# Add your Django project root directory to the system path
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(project_root)
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'web_app.settings')

# pylint: disable=wrong-import-position
from django.core.wsgi import get_wsgi_application  # noqa: E402

application = get_wsgi_application()

# Now that the Django environment is set up, import the HanJi model
from han_ji_dict.models import HanJi  # noqa: E402 pylint: disable=wrong-import-position

# CSV file path
csv_file_name = 'han_ji.csv'
source_dir = os.path.join(project_root, 'tools')
csv_file_path = os.path.join(source_dir, csv_file_name)

# Read the CSV file and add data to the HanJi model
with open(csv_file_path, 'r', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)

    # Iterate through the CSV rows and add data to the HanJi model
    for row in reader:
        han_ji_instance = HanJi(
            han_ji=row['han_ji'],
            chu_im=row['chu_im'],
            freq=float(row['freq']) if row['freq'] else 0.0,
            siann=row['siann'],
            un=row['un'],
            tiau=int(row['tiau']) if row['tiau'] else 0,
            old_chu_im=row['old_chu_im'],
            sni_siann=row['sni_siann'],
            sni_un=row['sni_un'],
        )
        han_ji_instance.save()

print("Data has been successfully added to the HanJi model.")

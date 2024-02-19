# export DJANGO_SETTINGS_MODULE=web_app.settings
# echo $DJANGO_SETTINGS_MODULE
import os
import sys

os.environ["DJANGO_SETTINGS_MODULE"] = "web_app.settings"
# 获取当前文件所在的目录
current_directory = os.getcwd()
sys.path.insert(0, current_directory)


# 获取当前文件（例如 views.py 或 models.py）的绝对路径
current_file_path = os.path.abspath(__file__)


# 获取项目根目录，这里我们假设项目根目录位于当前文件的上一级目录
project_root_directory = os.path.dirname(current_file_path)

print(f"current_file_path: {current_file_path}")
print(f"project_root_directory: {project_root_directory}")

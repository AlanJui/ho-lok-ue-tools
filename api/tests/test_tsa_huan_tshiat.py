
import requests


def send_api_request(han_ji):
    url = f'http://localhost:8000/api/huan_tshiat_huat/'
    params = {'han_ji': han_ji}
    response = requests.get(url, params=params)
    return response.json()


# 发送 HTTP 请求并获取响应数据
result = send_api_request('在')

# 在控制台上显示响应结果
print(result)

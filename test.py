import requests
import json
cookies = {
    'current_language': 'en',
    '_ga': 'GA1.1.894084240.1718141180',
    '_gcl_au': '1.1.1197975009.1718141181',
    '_ga_5370HT04Z3': 'GS1.1.1718143679.2.0.1718143679.0.0.0',
}

headers = {
    # 'accept': 'application/json, text/javascript, */*; q=0.01',
    # 'accept-language': 'en-PK,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
    # 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    # # 'cookie': 'current_language=en; _ga=GA1.1.894084240.1718141180; _gcl_au=1.1.1197975009.1718141181; _ga_5370HT04Z3=GS1.1.1718143679.2.0.1718143679.0.0.0',
    # 'origin': 'https://www.tikwm.com',
    # 'priority': 'u=1, i',
    # 'referer': 'https://www.tikwm.com/',
    # 'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    # 'sec-ch-ua-mobile': '?1',
    # 'sec-ch-ua-platform': '"Android"',
    # 'sec-fetch-dest': 'empty',
    # 'sec-fetch-mode': 'cors',
    # 'sec-fetch-site': 'same-origin',
    # 'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    # 'x-requested-with': 'XMLHttpRequest',
}

data = {
    'url': 'https://www.tiktok.com/@ubed_sk007/video/7274366546275732741',

}

response = requests.post('https://www.tikwm.com/api/', data=data)
print(json.dumps(response.json(), indent=4))
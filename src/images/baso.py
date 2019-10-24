from requests_html import HTML, HTMLSession
from time import sleep
import requests
import json

session = HTMLSession()
# s = session.get('https://cargocollective.com/baso/PAINTINGS')
# ----------------
# s = session.get('https://cargocollective.com/baso/MURALS')
# ----------------
s = session.get('https://cargocollective.com/baso/STORE')

images = s.html.find('.project_content img')

# for idx, image in enumerate(images):
#    image_url = image.attrs['src']
#    r = requests.get(image_url, allow_redirects=True)
#    open(f'basopainting{idx}.jpg', 'wb').write(r.content)
# -----------------
# for idx, image in enumerate(images):
#    image_url = image.attrs['src']
#    r = requests.get(image_url, allow_redirects=True)
#    open(f'basomural{idx}.jpg', 'wb').write(r.content)
#    sleep(2)
# -----------------
for idx, image in enumerate(images):
   image_url = image.attrs['src']
   r = requests.get(image_url, allow_redirects=True)
   open(f'basostore{idx}.jpg', 'wb').write(r.content)
   sleep(2)

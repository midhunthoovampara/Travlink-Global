from PIL import Image
import os

img_path = r'C:\Users\hp\.gemini\antigravity-ide\brain\a612d9f5-5bc2-4a77-a62b-aa8f71dfbed2\.user_uploaded\media_1790011493962.png'
if os.path.exists(img_path):
    img = Image.open(img_path)
    rgb = img.convert('RGB').getpixel((img.width // 2, img.height // 2))
    print('#%02x%02x%02x' % rgb)
else:
    print("Image not found")

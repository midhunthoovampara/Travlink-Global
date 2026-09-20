import re

def find_images(file_path):
    print(f"\n--- Images in {file_path} ---")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return

    # Find ALL img tags
    img_tags = re.findall(r'<img[^>]*src="([^"]+)"[^>]*>', content)
    for src in img_tags:
        print(f"IMG tag - src: {src}")
    
    # Find style="background-image: url(...)"
    bg_imgs = re.findall(r'url\([\'"]?([^\'")]+)[\'"]?\)', content)
    for src in bg_imgs:
        print(f"Background image - src: {src}")

find_images('content/markup/travel.html')
find_images('content/markup/trade.html')

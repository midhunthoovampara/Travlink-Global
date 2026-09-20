import re

def get_image_info(file_path):
    print(f"\n=== {file_path} ===")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return
        
    # Find all image tags with their classes and parent classes
    # We will just print lines that contain <img to see their context
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if '<img' in line.lower():
            # grab context
            start = max(0, i-2)
            end = min(len(lines), i+3)
            context = '\n'.join(lines[start:end])
            if 'logo' not in line.lower() and 'flagcdn' not in line.lower():
                print(f"Line {i}:\n{context}\n{'-'*40}")

get_image_info('content/markup/travel.html')
get_image_info('content/markup/trade.html')

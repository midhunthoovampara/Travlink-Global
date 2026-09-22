import re

with open('content/markup/travel.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Isolate the adventure section
parts = re.split(r'(<section class="travlink-adventure-section".*?</section>)', content, flags=re.DOTALL)

if len(parts) >= 3:
    adv_section = parts[1]
    
    # 1. Change section background
    adv_section = re.sub(r'background-color:\s*transparent;', 'background-color: #0b1c3c;', adv_section)
    
    # 2. Change heading and title colors (#0b1c3c -> #ffffff)
    adv_section = adv_section.replace('color: #0b1c3c;', 'color: #ffffff;')
    
    # 3. Change paragraph colors (#666 -> rgba(255,255,255,0.8))
    adv_section = adv_section.replace('color: #666;', 'color: rgba(255, 255, 255, 0.8);')
    
    # 4. Change eyebrow color if needed
    adv_section = re.sub(r'(<span class="travlink-travel-eyebrow"[^>]*style=")([^"]*)(")', 
                         lambda m: m.group(1) + m.group(2) + ('; ' if not m.group(2).strip().endswith(';') else ' ') + 'color: #38bdf8;' + m.group(3), adv_section)
    
    parts[1] = adv_section
    
    with open('content/markup/travel.html', 'w', encoding='utf-8') as f:
        f.write("".join(parts))
        
    print("Updated adventure section successfully.")
else:
    print("Could not find adventure section.")

import re

with open('content/markup/travel.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Discover
content = re.sub(r'(<section class="travlink-discover-section"[^>]*style=")([^"]*)(")', 
                 lambda m: m.group(1) + m.group(2) + ('; ' if not m.group(2).strip().endswith(';') else ' ') + 'background-color: #fffaf0;' + m.group(3), content)

# Premium / Luxury
content = re.sub(r'(<section class="travlink-premium-section"[^>]*style=")([^"]*)(")', 
                 lambda m: m.group(1) + m.group(2) + ('; ' if not m.group(2).strip().endswith(';') else ' ') + 'background-color: #fffaf0;' + m.group(3), content)

# Visa
content = re.sub(r'(<section class="travlink-visa-section"[^>]*style=")([^"]*)(")', 
                 lambda m: m.group(1) + m.group(2) + ('; ' if not m.group(2).strip().endswith(';') else ' ') + 'background-color: #fffaf0;' + m.group(3), content)

with open('content/markup/travel.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated backgrounds")

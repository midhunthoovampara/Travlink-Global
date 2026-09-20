import re

with open('public/css/style.css', 'r', encoding='utf-8') as f:
    content = f.read()
    
# Find all occurrences of travlink-ts-map
matches = re.findall(r'\.travlink-ts-map.*?\{[^}]*\}', content, re.DOTALL)
for m in matches:
    print(m)

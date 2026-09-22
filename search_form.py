import re

try:
    with open('content/markup/travel.html', 'r', encoding='utf-8') as f:
        content = f.read()
except UnicodeDecodeError:
    with open('content/markup/travel.html', 'r', encoding='utf-16') as f:
        content = f.read()

lines = content.split('\n')
for i, line in enumerate(lines):
    if '<form' in line.lower() or 'contact' in line.lower() and 'form' in line.lower():
        start = max(0, i-5)
        end = min(len(lines), i+30)
        print(f"--- Line {i} Context ---")
        print('\n'.join(lines[start:end]))
        break

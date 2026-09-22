import re

with open('content/markup/travel.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if re.search(r'<(h1|h2|h3|h4|p|article|div[^>]*class=".*(card|col-|content).+")', line, re.IGNORECASE):
        print(f"{i}: {line.strip()[:80]}")

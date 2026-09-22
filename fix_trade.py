import re

with open('content/markup/trade.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the icon wrapper backgrounds that were missed or mismatched
content = content.replace('background: #f0f9ff;', 'background: rgba(255, 255, 255, 0.1);')
content = content.replace('color: #0284c7;', 'color: #38bdf8;')

# Fix the bottom block to match the navy blue theme of the cards
content = content.replace('background: rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 15px 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 10px; border: 1px solid #e0f2fe;',
                          'background: #0b1c3c; border: none; border-radius: 8px; padding: 15px 20px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);')

content = content.replace('color: #1e1515;">Documentation', 'color: #ffffff;">Documentation')

with open('content/markup/trade.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("fixed")

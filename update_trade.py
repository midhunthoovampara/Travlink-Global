import re

with open('content/markup/trade.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Inject the new CSS block before the grid
css_block = '''<style>
.trade-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 20px;
}
@media (max-width: 991px) {
    .trade-services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
<div class="trade-services-grid">'''

content = re.sub(r'<div\s*style="display: grid; grid-template-columns: repeat\(auto-fit, minmax\(280px, 1fr\)\); gap: 20px; margin-bottom: 20px;">', css_block, content)

# 2. Update the cards
# Find the new grid block up to its closing div. It contains <article> tags.
# I'll just do a global replace for the specific card styles inside this file, assuming they only appear in this grid.
content = content.replace('background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.03);', 
                          'background: #0b1c3c; border: none; border-radius: 12px; padding: 25px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);')

content = content.replace('color: #0b1c3c;">Product', 'color: #ffffff;">Product')
content = content.replace('color: #0b1c3c;">Supplier', 'color: #ffffff;">Supplier')
content = content.replace('color: #0b1c3c;">Sample', 'color: #ffffff;">Sample')
content = content.replace('color: #0b1c3c;">Factory', 'color: #ffffff;">Factory')
content = content.replace('color: #0b1c3c;">Trade\n                        Exhibitions', 'color: #ffffff;">Trade\n                        Exhibitions')
content = content.replace('color: #0b1c3c;">Business\n                        Delegations', 'color: #ffffff;">Business\n                        Delegations')

# Actually, the replacement for text color inside the card can be done via regex
content = re.sub(r'(<h3 style=".*?)(color: #0b1c3c;)(.*?>)(Product|Supplier|Sample|Factory|Trade|Business)', 
                 r'\1color: #ffffff;\3\4', content, flags=re.DOTALL)

# And for paragraphs inside the cards
content = re.sub(r'(<p style=".*?)(color: #666;)(.*?>)(We help you find|We verify suppliers|We inspect and verify|We organize factory|We support your|We arrange business)', 
                 r'\1color: rgba(255, 255, 255, 0.8);\3\4', content, flags=re.DOTALL)

# Also update the icon wrapper background for better contrast against navy
content = re.sub(r'(<div\s*style=".*?)(background: #f0f9ff;)(.*?>\s*<i.*?)(color: #0284c7;)', 
                 r'\1background: rgba(255, 255, 255, 0.1);\3color: #38bdf8;', content, flags=re.DOTALL)

with open('content/markup/trade.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("done")

import re

with open('content/markup/travel.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add AOS to Section Headers (h2 and p following it)
def animate_headers(match):
    header = match.group(0)
    if 'data-aos' not in header:
        return header.replace('<header', '<header data-aos="fade-up" data-aos-duration="1000"')
    return header

content = re.sub(r'<header[^>]*class="[^"]*d-flex justify-content-between[^>]*>', animate_headers, content)

# 2. Add AOS to Cards (article) with staggered delays
# We will find sections of articles and add delays
articles = re.split(r'(<article[^>]*>)', content)
new_content = ""
delay = 100
for i, part in enumerate(articles):
    if part.startswith('<article'):
        if 'data-aos' not in part:
            # Inject AOS attributes
            # Reset delay if it gets too high, assuming a new grid
            if delay > 600:
                delay = 100
            
            # Find insertion point before >
            idx = part.rfind('>')
            if part[idx-1] == '/':
                idx -= 1
            
            injected = f' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="{delay}" '
            new_part = part[:idx] + injected + part[idx:]
            new_content += new_part
            delay += 100
        else:
            new_content += part
    else:
        new_content += part
        # If we see a section or grid end, reset delay
        if '</section>' in part or '</div>' in part:
            if '</div>' in part and delay > 100:
                # heuristic to reset delay between grids, but maybe unnecessary
                pass

# Let's reset delay more intelligently by splitting by sections first, or just keeping the simple logic.
# The simple logic above will stagger all articles throughout the page which might be okay.
content = new_content

# 3. Add AOS to the contact form section
def animate_contact(match):
    form_div = match.group(0)
    if 'data-aos' not in form_div:
        return form_div.replace('<div class="col-lg-8">', '<div class="col-lg-8" data-aos="fade-up" data-aos-duration="1200">')
    return form_div

content = re.sub(r'<div class="col-lg-8">\s*<h2 class="travlink-section-heading', animate_contact, content)

# Write back
with open('content/markup/travel.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("AOS animations added to travel.html")

import re

with open('original_home.html', 'r', encoding='utf-16', errors='ignore') as f:
    orig = f.read()

with open('content/markup/home.html', 'r', encoding='utf-8', errors='ignore') as f:
    curr = f.read()

orig_match = re.search(r'(<section class="contact-3-area.*?</section>)', orig, re.DOTALL)
curr_match = re.search(r'(<section class="contact-3-area.*?</section>)', curr, re.DOTALL)

if orig_match and curr_match:
    new_curr = curr[:curr_match.start()] + orig_match.group(1) + curr[curr_match.end():]
    with open('content/markup/home.html', 'w', encoding='utf-8') as f:
        f.write(new_curr)
    print("Successfully reverted contact section.")
else:
    print("Could not find section.")

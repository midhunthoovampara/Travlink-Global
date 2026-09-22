import re

with open('public/css/style.css', 'r', encoding='utf-8') as f:
    style_content = f.read()
    
# Change 640px to 480px for travlink-service-card and its content
style_content = style_content.replace('min-height: 640px;', 'min-height: 480px;')

with open('public/css/style.css', 'w', encoding='utf-8') as f:
    f.write(style_content)

with open('public/css/mobile-responsive.css', 'r', encoding='utf-8') as f:
    mobile_content = f.read()

# Change 570px to 420px for mobile
mobile_content = mobile_content.replace('min-height: 570px', 'min-height: 420px')
mobile_content = mobile_content.replace('height: 570px;', 'height: 420px;')

with open('public/css/mobile-responsive.css', 'w', encoding='utf-8') as f:
    f.write(mobile_content)

print("reduced card sizes")

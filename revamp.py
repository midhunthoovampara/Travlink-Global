import re

with open('public/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update the main card
css = re.sub(r'\.travlink-service-card\s*\{[^}]*\}', 
    '''.travlink-service-card {
    position: relative;
    isolation: isolate;
    min-height: 480px;
    height: 100%;
    overflow: hidden;
    background: #000;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    outline: none;
    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 500ms ease;
}''', css)

# 2. Card after (gradient overlay)
css = re.sub(r'\.travlink-service-card::after\s*\{[^}]*\}', 
    '''.travlink-service-card::after {
    position: absolute;
    content: "";
    inset: 0;
    z-index: -1;
    background: linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 100%);
    opacity: 1;
    transition: opacity 500ms ease;
}''', css)

# 3. Card image
css = re.sub(r'\.travlink-service-card__image\s*\{[^}]*\}', 
    '''.travlink-service-card__image {
    position: absolute;
    inset: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 1;
    transform: scale(1.02);
    transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1);
}''', css)

# 4. Content layout
css = re.sub(r'\.travlink-service-card__content\s*\{[^}]*\}', 
    '''.travlink-service-card__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 30px;
    height: 100%;
    position: relative;
    z-index: 2;
}''', css)

# 5. Make title, desc, cta always white
css = re.sub(r'\.travlink-service-card__title\s*\{[^}]*\}', 
    '''.travlink-service-card__title {
    margin: 0 0 12px;
    color: #ffffff !important;
    font-family: inherit;
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -.02em;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    transition: transform 400ms ease;
}''', css)

css = re.sub(r'\.travlink-service-card__description\s*\{[^}]*\}', 
    '''.travlink-service-card__description {
    max-width: 90%;
    margin: 0 0 20px;
    color: rgba(255,255,255,0.9) !important;
    font-size: 1.05rem;
    line-height: 1.6;
    text-shadow: 0 1px 5px rgba(0,0,0,0.3);
}''', css)

css = re.sub(r'\.travlink-service-card__cta\s*\{[^}]*\}', 
    '''.travlink-service-card__cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 12px 24px;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 30px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: #ffffff !important;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 400ms ease;
}''', css)

# Hover states
css = re.sub(r'\.travlink-service-card__cta:hover\s*\{[^}]*\}', 
    '''.travlink-service-card__cta:hover {
    background: #ffffff;
    color: #0b1c3c !important;
    gap: 16px;
    transform: translateX(5px);
}''', css)

css = css.replace(
    '.travlink-service-card:is(:hover, :focus-visible, .is-active) {', 
    '.travlink-service-card:is(:hover, :focus-visible, .is-active) {\n    box-shadow: 0 20px 50px rgba(0,0,0,0.15);\n    transform: translateY(-8px);\n}\n/* temp block to avoid matching */.ignore {')

css = css.replace(
    '.travlink-service-card:is(:hover, :focus-visible, .is-active) .travlink-service-card__image {', 
    '.travlink-service-card:is(:hover, :focus-visible, .is-active) .travlink-service-card__image {\n    transform: scale(1.08);\n}\n/* temp block */.ignore2 {')


# Overwrite the file
with open('public/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Revamped service card CSS")

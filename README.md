# Travlink Global

## Architecture

This is a Next.js 16 App Router project. Route entry points remain in `src/app`; small page assemblers live in `src/views` because `src/pages` is a reserved Next.js Pages Router directory.

- `src/components/layout` — shared React header, mobile menu, footer, page shell, WhatsApp and scroll controls
- `src/components/common` — reusable container, button, card, image, section heading and reveal primitives
- `src/components/services`, `faq`, `travel` — domain-level reusable components
- `src/data` — navigation, services, travel packages, countries, FAQs, process and page registry
- `src/hooks` — reusable media-query, auto-scroll and intersection-observer behavior with cleanup
- `src/styles` — design tokens, shared component rules and animations
- `src/lib/content.js` — server-only compatibility boundary for the historical page content in `content/markup`

The compatibility boundary deliberately preserves the existing page-body markup and CSS while shared layout and future sections use React. It is the only place that reads HTML files; route and layout components must not read files or manipulate the DOM.

## Common edits

- Colors, fonts, spacing, radii and shadows: `src/styles/variables.css`
- Shared component styling: `src/styles/components.css`
- Navigation and social links: `src/data/navigation.js`
- Service content: `src/data/services.js`
- Travel services and countries: `src/data/travelServices.js`, `src/data/countries.js`
- FAQ content: `src/data/faq.js`
- Header, footer and mobile navigation: `src/components/layout`
- Reveal behavior: `src/hooks/useIntersectionObserver.js` and `src/styles/animations.css`

Travlink Global is a complete React website built with Next.js 16 and the App
Router. The site is statically generated and can be deployed to Vercel or any
host that serves HTML, CSS, and JavaScript.

## Requirements

- Node.js 24
- npm

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Editing page content

Page content is stored as readable HTML in `content/markup/`:

- `home.html` contains the home page.
- `about.html`, `travel.html`, and the other named files contain their
  corresponding pages.
- Files ending in `.head.html` contain only that page's stylesheet links.
- The small JSON files in `content/` contain page titles, descriptions, and
  body classes.

Edit the normal `.html` files when changing sections, headings, cards, or text.
Do not place full-page HTML back inside the JSON files.

## Validation

```bash
npm run lint
npm audit --omit=dev
npm run build
```

The static production output is generated in `out/`.

## Vercel deployment

Import this repository into Vercel. The Next.js framework is detected from the
repository root, so no custom root directory, build command, or output setting
is required.

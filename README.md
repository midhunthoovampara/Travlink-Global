# Travlink Global

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

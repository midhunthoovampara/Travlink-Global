# Travlink Global

Travlink Global is a complete React website built with Next.js 16 and the App
Router. The site is statically generated and can be deployed to Vercel or any
host that serves HTML, CSS, and JavaScript.

## Requirements

- Node.js 20.9 or newer
- npm

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

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

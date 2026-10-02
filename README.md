# Fotmob

A modern football dashboard starter built with Next.js, TypeScript, and Tailwind CSS.

## Architecture

- `app/` contains the presentation layer and route pages.
- `app/page.tsx` is the main landing page for live scores and fixtures.
- `app/layout.tsx` provides the root layout and app shell.
- `app/globals.css` holds global styles and Tailwind directives.
- Future modules can be added for `components/`, `lib/`, `services/`, and `data/` as the app grows.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Scripts

- `npm run dev` starts the development server
- `npm run build` builds the production app
- `npm run start` runs the production build
- `npm run lint` runs the Next.js lint check

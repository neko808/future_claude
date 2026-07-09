# future-frontend

Frontend-only version of the `future-cms` landing page, built to deploy on
**Vercel** as a standard Next.js app.

The original `future-cms` project uses **Payload CMS + SQLite**, which does not
work in Vercel's serverless environment (local DB files aren't persisted). This
copy removes the CMS entirely and renders the same design from **static local
content**.

## What changed vs. `future-cms`

- ❌ Removed Payload admin UI (`/admin`), REST/GraphQL API routes (`/api/**`),
  the seed route, `payload.config.ts`, collections, globals, and the SQLite DB.
- ❌ No `getPayload`, `payload.find`, `payload.findGlobal`, or Payload config
  imports at runtime.
- ✅ Content now comes from a static object in
  `src/app/(frontend)/data/home.ts` (mirrors the original fallback content).
- ✅ All media is served from `public/assets/`.
- ✅ Same design, layout, CSS, animations, components, and assets.
- ✅ The home page prerenders as fully static content.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

Import the repo/folder in Vercel. It auto-detects Next.js — no environment
variables or database are required. To edit content, update
`src/app/(frontend)/data/home.ts`.

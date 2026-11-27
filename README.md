# Pro Fitness

Landing page for Pro Fitness, a gym in Versova, Mumbai. Built with Next.js 15 and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Gym details are all in `lib/site.ts`: address, hours, phone, map links, programs and gallery images.
Images live in `public/images/`, and the navbar logo is `public/logo.png`.

## Static export

```bash
STATIC_EXPORT=1 npm run build
```

This writes a static site to `out/`, which can be uploaded to any static host.

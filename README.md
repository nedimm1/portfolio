# Nedim's Portfolio

Personal portfolio built with [Next.js 14](https://nextjs.org/) (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

- `/` — Home (photo, bio, projects, contact)
- `/privacy-policy/arabic-flashcarder` — Privacy policy for the Arabic Flashcarder app

## Adding your real profile photo

Drop a square image at `public/profile.jpg` and update the `src` in `app/page.tsx`
from `/profile.svg` to `/profile.jpg`.

## Deploy

The easiest path is [Vercel](https://vercel.com): connect this Git repo and it
will build and host automatically. Both pages are statically generated.

# Ashfall Protocol — Landing Page

Premium landing page for the indie game **Ashfall Protocol**, built with:

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/page.tsx` — assembles all sections
- `components/Navbar.tsx` — fixed nav, blurs on scroll
- `components/Hero.tsx` — headline + original pixel-art SVG illustration
- `components/Features.tsx` — Explore / Survive / Cooperate cards
- `components/Screenshots.tsx` — 4 original SVG scene illustrations
- `components/Community.tsx` — social links + download CTA
- `components/Footer.tsx`
- `components/Particles.tsx` — floating ember background

## Download link

The "DOWNLOAD NOW" button in `components/Community.tsx` points to:
`https://gofile.io/d/ROuvyj`

Swap `DOWNLOAD_URL` in that file for your own link (Steam, itch.io, direct build, etc.) whenever you have a permanent hosting solution — gofile links can expire, so it's worth migrating to itch.io or Steam for the real launch.

## Art direction

All illustrations (hero scene + 4 screenshots) are original SVG compositions built for this brief — not copies of any reference image. Swap them for real in-game captures or commissioned pixel art renders whenever ready; each is isolated in its own component so replacing an `<svg>` block with an `<img>` tag is a one-line change.

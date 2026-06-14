# Florish Adekogbe — Portfolio

A modern, animated personal portfolio for a Frontend Engineer.

## Tech stack

- **Vite** — build tool & dev server
- **React 18 + TypeScript** — UI
- **Tailwind CSS v4** — styling (theme tokens defined in `src/index.css`)
- **Framer Motion** — scroll reveals, staggered entrances, counters & micro-interactions
- **lucide-react** — icons

## Getting started

```bash
yarn install     # install dependencies
yarn dev         # start the dev server (http://localhost:5173)
yarn build       # type-check + production build to /dist
yarn preview     # preview the production build locally
```

## Project structure

```
index.html                 # Vite entry HTML (Google Fonts loaded here)
src/
  main.tsx                 # React root
  App.tsx                  # composes all sections
  index.css                # Tailwind import + design tokens (@theme) + helpers
  data/portfolio.ts        # ALL site content (edit this to update copy)
  components/
    Background.tsx         # ambient gradient blobs + cursor spotlight
    ScrollProgress.tsx     # top gradient progress bar
    Navbar.tsx             # sticky nav, scroll-spy, mobile menu
    Hero.tsx               # headline, avatar, animated stat counters
    Projects.tsx           # selected work cards
    Experience.tsx         # animated career timeline
    About.tsx              # bio, education, certifications
    Skills.tsx             # infinite marquee + grouped skills
    Contact.tsx            # CTA + copy-email
    Footer.tsx
    Reveal.tsx / Counter.tsx / SectionHeading.tsx  # reusable primitives
```

## Customizing

- **Content** lives entirely in [`src/data/portfolio.ts`](src/data/portfolio.ts) — update experience, projects, skills, links, etc. there.
- **Theme/colours** are CSS variables in the `@theme` block of [`src/index.css`](src/index.css).
- **Résumé**: the nav/“Résumé” button links to `/Florish-Adekogbe-Resume.pdf`. Drop that PDF into the `public/` folder so the link resolves.
- **Project links**: add a `url` field to any project in `portfolio.ts` to show its “visit” button (only CompassAI has one wired up so far).

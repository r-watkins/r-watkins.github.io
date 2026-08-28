---
id: portfolio-page
design: complete
created: 2026-08-28
autonomy: ask
---

## Design summary

Ground-up rebuild of the portfolio as a single-page Vite + React 19 +
TypeScript app styled with Tailwind CSS v4 and shadcn/ui, replacing every
piece of the current CRA/react-router/styled-components/framer-motion stack.
Minimal black-and-white theme, system-preference dark mode via a custom
`ThemeProvider`, sticky top nav that scroll-spies and smooth-scrolls to three
sections (About, Sample Works, Side Projects), a circular hero image in
About, shared `ProjectCard`/`ProjectSection` components driving both project
sections from placeholder data, and a `motion`-driven bottom-aligned
background image per section that crossfades as each section fully enters
view. Deploy pipeline (`gh-pages` via GitHub Actions) is preserved, just
retargeted from `build/` to `dist/`.

## Architecture decisions (from research)

- **Vite** (`react-ts` template) replaces `react-scripts`. `.github/workflows/deploy.yml`
  needs **no changes** — it only calls `npm run build` / `npm run deploy`,
  never references the output directory by name. Only `package.json`'s
  `deploy` script changes: `gh-pages -d build` → `gh-pages -d dist`.
- **Tailwind CSS v4** via `@tailwindcss/vite`, config lives in `src/index.css`
  (`@theme`, `@custom-variant dark`) rather than a `tailwind.config.js`.
- **shadcn/ui** scaffolded via `npx shadcn@latest init`, components added
  individually as needed (`button`, `card`, `badge`, `separator`,
  `dropdown-menu`, `avatar`).
- **`motion`** (not `framer-motion`) for the hero entrance, card
  hover/enter, and the section background crossfade via `useInView`.
- **No routing library** — `scrollIntoView({ behavior: 'smooth', block: 'start' })`
  from nav click handlers, offset-adjusted for the sticky nav's height.
- **`@fontsource/montserrat`** (variable-font build) replaces the 18
  self-hosted static `.ttf` files — same typeface the user asked to keep,
  loaded as an npm-managed, self-hosted, no-external-request font.

## Design decisions proposed for confirmation

These fill the "open risks" research flagged as unresolved. Flagging each
explicitly — push back on any of them before I lock in the checklist:

1. **Placeholder images: [picsum.photos](https://picsum.photos) seeded URLs**
   (e.g. `https://picsum.photos/seed/hero/800/800`), not solid-color blocks or
   locally generated images. Reasoning: the crossfade effect and circular
   hero need actual photo-like imagery to look right during development; a
   seeded URL is deterministic (same image every reload) and trivially
   swappable later (replace the URL/import with a real asset). Trade-off:
   this is a dev-time external network dependency (images won't load
   offline/without network access) — everywhere it's used will be a single
   constant at the top of `src/data/*` and `src/assets/` so swapping to local
   files later is a one-line change.
2. **Background crossfade mechanics**: a single fixed-position layer
   (`bottom-0 left-0 right-0`, roughly 50–60vh tall) sits behind all section
   content (`-z-10`), rendered grayscale (`grayscale` filter, matching the
   B&W theme) at low opacity (~15–20%, slightly lower in dark mode) so section
   text stays legible without needing a separate contrast overlay. As the
   active section changes (via the same `useInView`-based tracking that
   drives nav scroll-spy), the layer's background image crossfades between
   the outgoing and incoming section's image — a true parallel crossfade
   (both opacities animate simultaneously), not a sequential fade-out then
   fade-in.
3. **Placeholder project data shape** (`src/data/projects.ts`):
   ```ts
   interface Project {
     id: string;
     title: string;
     description: string; // 1–2 sentence blurb
     tags: string[];
     href: string;         // external link-out
     thumbnail: string;    // placeholder image
     category: "sample-works" | "side-projects";
   }
   ```
   4 placeholder entries per category (8 total), matching the current site's
   4-case-study count.
4. **Testing scope**: no automated tests are part of this checklist. **Revised
   during Task 1**: research's "kept as-is" assumption for `@testing-library/*`
   didn't account for the fact that Jest itself was only present via
   `react-scripts` — with that removed there's no runner left to execute them
   under. Per the user, `@testing-library/*` is dropped entirely (not kept
   inert, not paired with a new Vitest runner) rather than left as unusable
   dead weight; testing can be reintroduced fresh later if actually needed.
5. **Accessibility/motion**: nav and sections get semantic landmarks
   (`<nav>`, `<section aria-label="...">`), and all `motion` animations
   respect `prefers-reduced-motion` (crossfade and entrance animations are
   skipped/instant for users who've requested reduced motion).

## File / module plan

```
index.html                          # Vite entry HTML (replaces public/index.html's CRA template)
vite.config.ts                      # react() + tailwindcss() plugins, "@" alias -> src/
tsconfig.json / tsconfig.app.json / tsconfig.node.json
components.json                     # shadcn config
package.json                        # rewritten: vite scripts, new deps, deploy -> dist
public/
  favicon.svg                       # kept as-is
src/
  main.tsx                          # ReactDOM root, wraps <App/> in <ThemeProvider>
  App.tsx                           # renders Nav + BackgroundLayer + the 3 sections
  index.css                         # Tailwind import, @theme tokens (B&W palette), font-face wiring
  components/
    ui/                             # shadcn-generated primitives (button, card, badge, separator, dropdown-menu, avatar)
    theme-provider.tsx              # system-preference-aware light/dark context
    mode-toggle.tsx                 # Sun/Moon dropdown toggle
    nav.tsx                         # sticky top nav, scroll-to-section + active-section highlight
    background-layer.tsx            # fixed bottom-aligned crossfading background image
    about-section.tsx               # circular hero image + bio text
    project-section.tsx             # shared: intro header + card grid, parameterized by category
    project-card.tsx                # single clickable card (title, blurb, tags, thumbnail, external link)
  data/
    projects.ts                     # placeholder Project[] (8 entries)
  hooks/
    use-active-section.ts           # IntersectionObserver-backed hook: which section id is active
  lib/
    utils.ts                        # shadcn's cn() helper
.github/workflows/deploy.yml        # unchanged (verified no path references to build/)
```

Everything under the old `src/` (all `components/`, `pages/`, `styles/`,
`assets/Resume.pdf`) is deleted as part of Task 1.

## Task checklist

- [ ] Task 1: Scaffold Vite + React + TypeScript, remove legacy CRA source and deps — delete all of current `src/**`; add `vite.config.ts`, `tsconfig*.json`, `index.html`, minimal `src/main.tsx`/`src/App.tsx`/`src/index.css`; rewrite `package.json` (remove `react-scripts`, `react-router`, `react-router-dom`, `@types/react-router-dom`, `styled-components`, `framer-motion`; add `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`); update `deploy` script to `gh-pages -d dist`. Verify: `npm run dev` serves a blank page, `npm run build` succeeds.
- [ ] Task 2: Install and configure Tailwind CSS v4 + shadcn/ui — add `tailwindcss`/`@tailwindcss/vite`, wire the plugin into `vite.config.ts`, set up `src/index.css` with `@theme`/`@custom-variant dark` and the `@` path alias in `tsconfig.app.json`; run `shadcn init` to generate `components.json` + `src/lib/utils.ts`. Verify: a Tailwind utility class and one shadcn component (e.g. Button) render correctly.
- [ ] Task 3: Add `@fontsource/montserrat`, wire it as the theme's `font-sans` token in `index.css`, apply to `body`. Verify: rendered text visually uses Montserrat.
- [ ] Task 4: Build `ThemeProvider` (system-preference default via `matchMedia`, persisted to `localStorage`, toggles a class on `<html>`) and `ModeToggle` (shadcn dropdown + lucide-react Sun/Moon), wired into `main.tsx`/`App.tsx`. Verify: toggle switches themes, first load matches OS preference, choice persists across reload.
- [ ] Task 5: Build `nav.tsx` (sticky top nav, About/Sample Works/Side Projects) and `use-active-section.ts` (IntersectionObserver-based active-section tracking) — clicking a nav item smooth-scrolls to the section (offset for nav height), active item highlights as the corresponding section scrolls into view. Verify: click-to-scroll and scroll-driven highlight both work for all three sections.
- [ ] Task 6: Build `about-section.tsx` — circular hero image (placeholder via picsum.photos) + bio text block, minimal B&W layout, responsive. Verify: renders correctly at mobile and desktop widths.
- [ ] Task 7: Add `src/data/projects.ts` (8 placeholder entries per the agreed shape) and build `project-card.tsx` + `project-section.tsx` (intro header + responsive card grid), instantiated once for Sample Works and once for Side Projects. Verify: both sections render their 4 cards, each card links out to its placeholder `href` in a new tab.
- [ ] Task 8: Build `background-layer.tsx` — fixed bottom-aligned grayscale background image, crossfades via `motion`/`useInView` as `use-active-section`'s active section changes, respects `prefers-reduced-motion`. Verify: scrolling through all three sections (both directions) crossfades the background correctly and legibly in both light and dark mode.
- [ ] Task 9: Final pass — accessibility (landmarks, `aria-label`s, focus states, reduced-motion coverage across all `motion` usages), confirm no unused dependencies remain in `package.json`, confirm `npm run build` output still deploys correctly via the unchanged GitHub Actions workflow (dry-run: inspect `dist/` output). Verify: production build boots cleanly, no console errors/warnings, `npm audit` shows no new high-severity issues introduced.

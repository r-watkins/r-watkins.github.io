---
id: portfolio-page
research: complete
created: 2026-08-28
prompt: >
  Rebuild the portfolio page using the most up-to-date libraries, dropping
  libraries no longer needed rather than upgrading them in place. Requirements:
  React + TypeScript, shadcn/ui component library, minimal black-and-white
  theme with light/dark mode defaulting to system preference, single page
  with a sticky top nav (About, Sample Works, Side Projects) that scrolls to
  sections rather than routing, an About section with a circular hero image
  plus text, Sample Works / Side Projects sections each with a small intro
  header and a clickable card list linking out to project pages, and a
  bottom-aligned background image per section that crossfades as each section
  scrolls fully into view. Use placeholder images during development. Fully
  greenfield rebuild — nothing in the current project files needs to be kept,
  all data can be overwritten.
autonomy: ask
---

## Scope questions & answers

1. **Build tool** — CRA (`react-scripts`) was officially deprecated by the
   React team in Feb 2025 (no more security patches, dependency updates, or
   compatibility fixes). Replace with Vite or Next.js (static export)?
   → **Answer: Vite.** Matches shadcn/ui's official install path, fastest dev
   server, and this is a single static page with no server-side needs — Next.js
   would add unused framework surface area (app router, file-based routing,
   image optimization pipeline).

2. **Scroll-driven animation approach** for the section background crossfade
   and nav scroll-spy — Motion (framer-motion's successor), native CSS
   scroll-driven animations (`animation-timeline`/`view()`), or a hand-rolled
   IntersectionObserver + CSS transitions?
   → **Answer: Motion library.** JS-driven via `useInView`, so it's reliable
   across all current browsers (native CSS scroll-driven animations sit at
   ~84% global support in 2026 and only landed in Safari 18+), and it also
   covers the hero entrance and card hover/enter animations without extra code.

3. **Content strategy** for the About bio and Sample Works / Side Projects
   cards — full placeholder copy, or adapt the existing site's real bio/project
   descriptions?
   → **Answer: Full placeholder content.** Consistent with using placeholder
   images; all text is treated as fill-in-later data, same as the images.

4. **Resume** — the current site has a dedicated Resume page/PDF link, but the
   new nav spec only lists About, Sample Works, Side Projects. Drop it, or
   keep it as a link inside the About section?
   → **Answer: Drop it entirely.** Out of scope for this rebuild; can be
   revisited later as a separate addition if wanted.

## Current project (what exists today, greenfield context)

The existing site is a Create React App (react-scripts 5) project with
`react-router-dom` (multi-route: Main/About/Works/Resume + 4 work subpages),
`styled-components` for styling, and `framer-motion` for a page-wipe
transition. Per the user, **none of the component/page code, styling
approach, or routing structure is being carried forward** — this is a
ground-up rebuild to a single-page layout. Read directly (no need for
codebase-locator/analyzer agents, since everything in `src/` is being
discarded):

- [package.json](../../package.json) — CRA scripts, npm as package manager
  (has a committed `package-lock.json`), deploys via `gh-pages -d build`.
- [.github/workflows/deploy.yml](../../.github/workflows/deploy.yml) — GitHub
  Actions on push to `main`: Node 22, `npm ci`, `npm run build`, then
  `npm run deploy` (gh-pages branch push). **This pipeline shape stays** —
  only the build output directory changes (`build` → `dist` for Vite) and the
  `deploy` script target updates to match.
  Node 22 in CI is already compatible with Vite + Tailwind v4.
- `homepage: "https://r-watkins.github.io"` in package.json — this is a user/org
  GitHub Pages site (not a project page), so Vite's `base` config stays `/`
  (root), same as CRA's behavior. No base-path surprises.
- No CNAME file in `public/` — plain `*.github.io` domain, nothing to preserve there.
- `src/styles/fonts/` currently self-hosts Montserrat + PT Serif as `.ttf`
  files (18 font files). Since the whole design is being rebuilt minimal/B&W,
  this is being replaced, not migrated — see Open risks below for the one
  open follow-up.
- 4 existing "Work" subpages (`Work01`–`Work04`) each have their own image
  assets and a dedicated internal route — these become the placeholder card
  data model to replace (external "link out" per the new spec, not internal
  routes).

## Best-practice findings (external research)

### Build tooling: Vite
React officially deprecated Create React App in Feb 2025 — no security
patches, no dependency updates. A fresh CRA install in 2026 shows numerous
high-severity `npm audit` findings from stale transitive deps. Vite is the
consensus migration target for SPAs; shadcn/ui documents Vite as a first-class
install target (`ui.shadcn.com/docs/installation/vite`).
Sources: [react.dev sunsetting CRA](https://react.dev/blog/2025/02/14/sunsetting-create-react-app), [shadcn/ui Vite install docs](https://ui.shadcn.com/docs/installation/vite)

Standard current setup: `npm create vite@latest -- --template react-ts`,
Tailwind v4 via `@tailwindcss/vite` plugin (Tailwind v4 moved config into CSS
via `@theme`/`@custom-variant` rather than `tailwind.config.js`), path alias
`@/*` wired in both `vite.config.ts` and `tsconfig.app.json`, then
`npx shadcn@latest init` to scaffold `components.json` + the `cn()` util +
base component primitives (Radix UI underneath, `class-variance-authority`,
`tailwind-merge`, `clsx`, `lucide-react` for icons).
Sources: [shadcn/ui Vite installation](https://ui.shadcn.com/docs/installation/vite), [shadcn/ui Tailwind v4 docs](https://ui.shadcn.com/docs/tailwind-v4)

### Dark mode with system-preference default (no Next.js / no next-themes)
shadcn/ui's Vite dark-mode guide (`ui.shadcn.com/docs/dark-mode/vite`) doesn't
use `next-themes` (that's Next-specific); instead it's a small custom
`ThemeProvider` (React Context) that toggles a `class` on `<html>`, persists
choice to `localStorage`, and on first load / no stored preference reads
`window.matchMedia('(prefers-color-scheme: dark)')` — this directly satisfies
"defaults to system preference." The toggle itself is a small dropdown/button
using `lucide-react`'s Sun/Moon icons.
Source: [shadcn/ui dark mode – Vite](https://ui.shadcn.com/docs/dark-mode/vite)

### Animation: `motion` package, not `framer-motion`
Framer Motion became an independent project in 2025 and was renamed **Motion**;
the npm package is now `motion` (React import path `motion/react`), API is
unchanged from `framer-motion` so it's a drop-in rename. The existing project
already depends on `framer-motion` — this is a "swap the package, not add a
new one" situation, consistent with the user's ask to drop stale libraries
rather than carry them forward under an old name.
Source: [Motion (formerly Framer Motion)](https://motion.dev/magazine/framer-motion-is-now-independent-introducing-motion)

`motion`'s `useInView` hook (wrapping IntersectionObserver) is the
recommended way to drive the per-section background crossfade and can also
back the nav scroll-spy (which section is "active" as the user scrolls),
avoiding a need for a separate scroll-spy library like `react-scroll` or
`react-scrollspy-nav`.

### Scroll-to-section nav (no react-router)
Since this is now a true single page (no more `react-router-dom`), section
navigation is native: `element.scrollIntoView({ behavior: 'smooth', block:
'start' })` (or `window.scrollTo` with a computed offset to account for the
sticky nav height) triggered from the nav's onClick handlers — no
`react-scroll` or similar package needed. This removes both `react-router`
and `react-router-dom` from the dependency list.
Source: [React smooth scroll patterns](https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react)

## Dependencies: what's being dropped vs added

**Dropped** (no longer needed once the rebuild lands):
- `react-router` / `react-router-dom` + `@types/react-router-dom` — single page, no routing.
- `styled-components` — replaced by Tailwind utility classes + shadcn's CVA-based component styling.
- `framer-motion` — renamed/replaced by `motion`.
- `react-scripts` — replaced by Vite.
- Self-hosted Montserrat/PT Serif `.ttf` files — see open risk below on font choice.

**Added**:
- `vite`, `@vitejs/plugin-react`
- `tailwindcss` v4, `@tailwindcss/vite`
- shadcn/ui scaffolding: Radix UI primitives (pulled in per-component), `class-variance-authority`, `tailwind-merge`, `clsx`, `lucide-react`
- `motion` (replaces `framer-motion`)
- TypeScript (`typescript`, `@types/react`, `@types/react-dom`) — the current project is plain JS

**Kept as-is**:
- `gh-pages` (deploy mechanism unchanged, only output dir target changes)
- Testing libraries (`@testing-library/*`) — kept available; whether to write new tests for the rebuilt page is a design/implementation-time decision, not a research blocker.

## Open risks / unknowns for design to account for

- **Font choice.** The current custom Montserrat/PT Serif font files are being
  dropped along with the rest of the styling, but no replacement was
  specified. Design should propose a minimal sans-serif pairing (e.g. a
  self-hosted variable font, or a Google Fonts import) fitting the
  black-and-white minimal aesthetic, and confirm with the user before locking
  it in.
- **Placeholder card count/shape.** The current site has 4 "Work" case
  studies; research assumes a similar count (~3-4 cards) split across Sample
  Works and Side Projects for placeholder data, but the exact number and
  per-card fields (title, short description, tags, external link, thumbnail)
  should be nailed down as a data shape in design.
- **"Fully scrolled into view" trigger precision.** The spec says the
  background crossfade should trigger "when the section is fully scrolled
  into view" — `motion`'s `useInView` supports an `amount: "all"` threshold
  for this, but exact fade timing/easing and whether the *previous* section's
  background must fully fade out before the *next* fades in (sequential) vs.
  a simple crossfade (parallel) needs a concrete interaction spec in design.
- **Placeholder image source.** No specific placeholder image service/approach
  was requested — design should pick one (e.g. local static placeholder
  assets vs. a placeholder image service) and confirm.
- **Testing scope.** Not addressed by the user's requirements; flagged above
  as a design/implementation-time decision rather than blocking research.

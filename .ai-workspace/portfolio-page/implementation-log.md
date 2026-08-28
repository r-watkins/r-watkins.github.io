---
id: portfolio-page
current_task: 7
current_task_status: pending-approval
last_commit: 6dd7479
autonomy: ask
---

## Task 1: Scaffold Vite + React + TypeScript, remove legacy CRA source and deps
status: complete
commit: 065e791
tests: passed (npm run build succeeds: tsc -b + vite build; npm run dev verified serving via curl)
notes: |
  Deleted all of old src/** (multi-route CRA app, styled-components, framer-motion)
  and public/index.html. Added Vite scaffold: index.html, vite.config.ts,
  tsconfig.json/tsconfig.app.json/tsconfig.node.json, src/main.tsx, src/App.tsx
  (placeholder), src/index.css (minimal), src/vite-env.d.ts. Rewrote package.json:
  removed react-scripts/react-router/react-router-dom/@types/react-router-dom/
  styled-components/framer-motion; added vite/@vitejs/plugin-react/typescript/
  @types/react/@types/react-dom/@types/node. deploy script now `gh-pages -d dist`.
  .gitignore: /build -> /dist, added *.tsbuildinfo.
  Kept public/favicon.svg, public/manifest.json, public/robots.txt as-is.
  Deviation from design.md (approved by user, design.md updated): dropped
  @testing-library/* entirely instead of keeping "as-is" -- react-scripts'
  bundled Jest was the only thing that could run them, and removing
  react-scripts left no runner. User chose to drop rather than add Vitest or
  keep them inert.
  Also worked around two TS7/Vite8 issues not anticipated in design: TS 7.0's
  native compiler removed `baseUrl` (paths now resolve relative to the
  tsconfig file without it), and `vite.config.ts` needed @types/node +
  `import.meta.dirname` instead of `__dirname` for forward-compat with Vite's
  upcoming native config loader default.

## Task 2: Install and configure Tailwind CSS v4 + shadcn/ui
status: complete
commit: 160a8d8
tests: passed (npm run build succeeds with Button component + Tailwind utility rendered; dev server verified via curl serving compiled App.tsx and Tailwind CSS layers)
notes: |
  Installed tailwindcss v4 + @tailwindcss/vite, wired the plugin into
  vite.config.ts, added `@import "tailwindcss";` to src/index.css.
  Ran `npx shadcn@latest init --template vite --base base --preset nova -y`
  (Base UI per user's choice this session -- see design.md revision).
  Generated: components.json, src/lib/utils.ts (cn()), src/components/ui/button.tsx,
  and a full neutral-palette (achromatic oklch, i.e. true grayscale) CSS
  variable theme in src/index.css for both :root and .dark, satisfying the
  black-and-white theme goal by default. Preset "Nova" also pulled in
  @fontsource-variable/geist and lucide-react as its default font/icon
  choices -- geist will be replaced by Montserrat in Task 3 per the user's
  earlier decision; lucide-react stays (already the planned icon library).
  New deps: @base-ui/react, @tailwindcss/vite, class-variance-authority,
  clsx, lucide-react, shadcn (ships importable base Tailwind CSS reset,
  referenced via `@import "shadcn/tailwind.css"` in index.css),
  tailwind-merge, tw-animate-css, @fontsource-variable/geist.

  Deviation from design.md (approved by user, design.md updated): shadcn's
  CLI now supports choosing the underlying primitive library
  (radix/base/aria); Base UI became shadcn's new default in July 2026,
  postdating research's "Radix UI primitives" assumption. Used Base UI.

  Real ecosystem incompatibility hit and resolved (approved by user):
  TypeScript 7.0's native compiler removed the `baseUrl` config option
  entirely, but shadcn's CLI alias resolver (both current and the 4.18.0
  fallback it suggested) hard-requires `baseUrl` in tsconfig to know where
  to write component files -- `shadcn init`/`add` fails regardless of `paths`
  config without it. Downgraded typescript to 6.0.3 (latest release on the
  classic pre-native-rewrite compiler line) and restored `baseUrl` + added
  `"ignoreDeprecations": "6.0"` to tsconfig.app.json/tsconfig.node.json.
  Separately (unrelated to the baseUrl fix, and the actual root cause of the
  CLI's "Could not load the workspace config" error) also had to add
  `compilerOptions.baseUrl`/`paths` directly to the root tsconfig.json --
  shadcn's official Vite docs specify both tsconfig.json AND tsconfig.app.json
  need these fields when using Vite's split solution-style tsconfig setup;
  the root tsconfig.json only had `references` with no `compilerOptions`.

## Task 3: Add @fontsource/montserrat and wire it as the theme font
status: complete
commit: e731e35
tests: passed (npm run build succeeds; compiled CSS confirmed to reference 'Montserrat Variable' as font-sans; Montserrat woff2 files bundled into dist/assets, replacing the Geist ones)
notes: |
  Used @fontsource-variable/montserrat (not the static-weights
  @fontsource/montserrat) to match the variable-font approach research/design
  specified and to mirror the pattern shadcn's Nova preset already used for
  Geist (single @import, few font files instead of many static weights).
  Removed @fontsource-variable/geist (Nova preset's default), replaced with
  @fontsource-variable/montserrat in src/index.css's @import list and as the
  --font-sans value in @theme inline (both light/dark themes inherit it via
  html's existing font-sans utility class from Task 2's shadcn base layer).

## Task 4: Build ThemeProvider (system-preference default) and ModeToggle
status: complete
commit: 0bc87d2
tests: passed (npm run build succeeds; browser-verified live via Playwright against `npm run dev`: first load matches OS prefers-color-scheme in both light and dark, dropdown toggle switches html class + body background color, choice persists in localStorage["portfolio-ui-theme"] across reload; zero console errors; screenshot confirms correct B&W dark-mode rendering with Montserrat)
notes: |
  Added src/components/theme-provider.tsx (standard shadcn Vite dark-mode
  pattern: React Context, localStorage key "portfolio-ui-theme", "system"
  default reads window.matchMedia("(prefers-color-scheme: dark)")) and
  src/components/mode-toggle.tsx (Sun/Moon lucide icons in a shadcn
  DropdownMenu with Light/Dark/System items). Added
  src/components/ui/dropdown-menu.tsx via `npx shadcn@latest add
  dropdown-menu` (Base UI's Menu primitive, per Task 2's Base UI choice --
  used Base UI's `render` prop for trigger composition instead of Radix's
  `asChild`, and plain `onClick` on DropdownMenuItem, both confirmed against
  @base-ui/react's type defs). Wired ThemeProvider around <App/> in
  main.tsx; App.tsx temporarily renders <ModeToggle/> for verification (will
  move into the real nav in Task 5).
  Minor enhancement beyond the base shadcn pattern: added a
  matchMedia("change") listener while theme === "system" so the page
  re-syncs live if the OS theme changes while the tab is open, not just on
  next mount.
  Verified in a real headless-Chromium browser via Playwright (chromium-cli
  wasn't available in this Windows/Git Bash environment; Playwright with an
  already-cached Chromium build was used instead) rather than just a build
  check, per the UI-verification requirement.

## Task 5: Build sticky nav with scroll-to-section and active-section highlighting
status: complete
commit: 99ddb45
tests: passed (npm run build succeeds; browser-verified live via Playwright against `npm run dev`: initial load highlights About, clicking each nav item smooth-scrolls to exactly nav-height offset and highlights that item, manual scroll back to top re-highlights About, click-from-bottom scrolls back to top; zero console errors; screenshot confirms correct highlight + scroll position)
notes: |
  Added src/hooks/use-active-section.ts (IntersectionObserver-based:
  observes each section id with rootMargin "-96px 0px -60% 0px" so the
  "active" section is whichever occupies a band just below the sticky nav;
  maintains a Set of currently-intersecting ids and picks the first in
  DOM/array order, avoiding flicker when two sections both technically
  intersect during a transition) and src/components/nav.tsx (sticky nav,
  native `window.scrollTo({ top, behavior: "smooth" })` offset by the nav's
  64px height -- no react-scroll or similar library, matching research's
  "no routing library" decision). aria-label="Primary" on <nav>,
  aria-current="true" on the active nav button, per design decision #5
  (accessibility landmarks).
  Rewrote App.tsx to render <Nav/> plus three placeholder <section id="about"
  | "sample-works" | "side-projects" aria-label="..."> stubs (min-h-screen,
  single line of placeholder text) so the scroll/highlight behavior could be
  tested end-to-end. These section wrapper elements (id, aria-label,
  min-h-screen) are the real structure Tasks 6-7 will fill in -- only the
  inner content changes, not the wrapper. ModeToggle moved from App.tsx's
  standalone placeholder into the real Nav.
  Verified in a real headless-Chromium browser via Playwright (same
  approach as Task 4), not just a build check.

## Task 6: Build About section (circular hero image + bio text)
status: complete
commit: 6dd7479
tests: passed (npm run build succeeds; browser-verified live via Playwright/Chromium against `npm run dev`: screenshotted at desktop 1280px, mobile 375px, and dark mode; zero console errors)
notes: |
  Added src/components/about-section.tsx: circular hero image (picsum.photos
  seeded URL per design decision #1, grayscale filter to match the B&W
  theme), heading with the real name "Ryan Watkins" (treated as immutable
  site identity, not placeholder data -- matches index.html's <title> from
  Task 1), and a placeholder bio paragraph written as readable filler prose
  (not lorem-ipsum gibberish) per design decision #3's "full placeholder
  content". Side-by-side layout on sm+ (flex-row), stacked/centered on
  mobile (flex-col). Replaced App.tsx's About placeholder stub with the real
  <AboutSection/>; Sample Works / Side Projects remain stubs for Task 7.

  Observed but NOT fixed (out of this task's scope -- nav.tsx is Task 5's
  file): at very narrow widths (375px) the nav's three links + mode toggle
  fit with almost no breathing room and would likely wrap or overflow on
  narrower phones (~320px). No mobile nav collapse/hamburger was in
  design.md's scope. Flagging for Task 9's final responsive pass rather than
  cascading into this task's diff.

## Task 7: Add mobile nav menu (hamburger + dropdown panel)
status: pending-approval
commit: null
tests: passed (npm run build succeeds; browser-verified live via Playwright at the narrowest common phone width (320px) and desktop (1280px): horizontal links hidden and hamburger shown below sm, panel opens with aria-expanded toggling true/false, clicking a link in the panel scrolls to the section AND closes the panel, clicking outside the panel closes it, Escape closes it, desktop layout (links + toggle, no hamburger) fully unaffected; zero console errors)
notes: |
  Added post-Task-6 per user request, not in original design.md checklist.
  Follows up on the mobile nav overflow observed during Task 6's browser
  verification at 375px. Dropdown-panel style (not a slide-in sheet), per
  user's choice.

  Rewrote nav.tsx: horizontal <ul> now `hidden sm:flex`; ModeToggle in the
  top bar now `hidden sm:block`; new hamburger Button (lucide Menu/X icons,
  sm:hidden) toggles isMenuOpen state. When open, a panel renders below the
  nav bar (sm:hidden, so it's inert even if isMenuOpen were somehow true
  above the breakpoint) with the same NAV_ITEMS stacked vertically plus a
  second <ModeToggle/> instance -- moved into the panel rather than kept
  floating in the collapsed top bar, so the mobile top bar is just the
  hamburger (uncluttered, directly fixing the crowding Task 6 flagged).
  scrollToSection now also closes the menu after scrolling. Close-on-outside-
  click uses a pointerdown listener checking the click target against a
  navRef wrapping the whole <nav>; close-on-Escape via a keydown listener;
  both only attached while isMenuOpen (removed on close/unmount).

## Task 8: Build placeholder project data, ProjectCard, and ProjectSection
status: pending
commit: null
tests: not-run
notes:

## Task 9: Build bottom-aligned crossfading background layer
status: pending
commit: null
tests: not-run
notes:

## Task 10: Final accessibility, dependency cleanup, and build verification pass
status: pending
commit: null
tests: not-run
notes:

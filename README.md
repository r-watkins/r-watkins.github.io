# Portfolio

My personal portfolio site — a single-page site with sections for About,
Sample Works, and Side Projects.

## Tech stack

- [Vite](https://vite.dev/) — build tool and dev server
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling, configured via CSS (`@theme`) rather than a JS config file
- [shadcn/ui](https://ui.shadcn.com/) (on [Base UI](https://base-ui.com/) primitives) — accessible, unstyled component foundations
- [Motion](https://motion.dev/) — the section background crossfade animation
- [lucide-react](https://lucide.dev/) — icons
- [Fontsource](https://fontsource.org/) — self-hosted variable Montserrat font

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the site and
publishes `dist/` to the `gh-pages` branch, served from
[r-watkins.github.io](https://r-watkins.github.io).

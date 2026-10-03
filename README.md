# Similynk

**Stay close to the people who matter.**

A quiet, private place for your family, your friends and the music you share. No ads, no strangers, nothing to scroll past.

This repo is the Similynk website: the home page and the docs at `/docs`.

## Run it

```bash
bun install
bun run dev
```

Then open http://localhost:4321.

| Command | What it does |
|---|---|
| `bun run dev` | Local site that reloads as you edit |
| `bun run build` | Builds the static site into `dist/` |
| `bun run preview` | Serves the built `dist/` locally |

## Where things are

| Path | What |
|---|---|
| `src/pages/index.astro` | Home page |
| `src/components/` | Home page sections |
| `src/content/docs/docs/` | Docs pages (Markdown) |
| `src/data/site.ts` | Version, download links and sizes |
| `astro.config.mjs` | Docs sidebar and settings |

To publish a release, update `src/data/site.ts` and add a section to `src/content/docs/docs/updates.md`.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

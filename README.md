# masa-whitestone.github.io

Personal site of Masaki Shiraishi — Quantum Algorithm & ML Engineer.
Built with [Astro](https://astro.build), deployed to GitHub Pages on every push
to `main`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then writes dist/
npm run preview  # serve the built site
```

## Updating content

No component needs editing to add something new. Every fact on the site lives in
a data file validated by a Zod schema in [`src/content.config.ts`](src/content.config.ts) —
a missing or misspelled field fails the build rather than silently rendering blank.

| What | Where |
|---|---|
| Talks | [`src/data/talks.yaml`](src/data/talks.yaml) |
| Papers and preprints | [`src/data/publications.yaml`](src/data/publications.yaml) |
| Press, interviews, quotes | [`src/data/media.yaml`](src/data/media.yaml) |
| Awards and programs | [`src/data/awards.yaml`](src/data/awards.yaml) |
| Positions and education | [`src/data/experience.yaml`](src/data/experience.yaml) |
| Research themes | [`src/content/research/*.mdx`](src/content/research) |
| Name, tagline, profile links | [`src/data/site.ts`](src/data/site.ts) |

The "Selected" block on the front page builds itself from the three most recent
entries across awards, media and publications — it needs no maintenance.

### After changing a schema

`src/content.config.ts` is read through a cache in `.astro/`, and the dev
server will keep serving entries parsed under the old schema — a newly added
field simply renders as nothing. `npm run build` is unaffected. To see the
change in dev:

```bash
rm -rf .astro && npx astro sync
```

### Adding a CV

Drop the PDF at `public/cv.pdf` and set `cv.available` to `true` in
[`src/data/site.ts`](src/data/site.ts). The link appears wherever it belongs.

## Design

Editorial/academic direction: warm paper, ink, a single vermillion accent, and
hairline rules. Source Serif 4 for headings, Inter for text, JetBrains Mono for
metadata — all self-hosted, no external font requests. Light and dark themes
follow the OS unless the visitor picks one; the choice persists in
`localStorage`. Design tokens live in [`src/styles/global.css`](src/styles/global.css).

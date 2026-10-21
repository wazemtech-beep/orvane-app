# Orvane Studio

A Next.js App Router project using TypeScript, React, GSAP and Lenis.

## Development

Install dependencies with `npm install`, then run `npm run dev`. The development port is set in `package.json`. Use `npm run build` and `npm start` for production.

## Source Structure

- `src/app`: route pages, metadata and the shared document layout.
- `src/components`: typed React sections, page compositions, layout and interactive controls.
- `src/data/siteConfig.ts`: editable brand identity and section content.
- `src/hooks`: animation lifecycle and page/section GSAP timelines.
- `src/components/layout/SmoothScroll.tsx`: the single Lenis instance.
- `src/styles/index.css`: the entry point for readable site CSS, in cascade order. Route-level runtime styles remain imported after it.
- `public`: assets referenced by the active application.

CSS source is readable and kept locally; no exported HTML, Webflow runtime, prebuilt CSS bundle or animation interpreter is injected into pages. Existing design class names are retained as a stable interface between TSX, CSS and GSAP. Next.js compiles these source styles for production as expected.

Do not reorder the imports in `src/styles/index.css`: their order preserves the design cascade. Before deleting selectors, check class toggles, configuration and GSAP selectors as well as JSX.

## Routes

- `/about`
- `/blog`
- `/contact`
- `/`
- `/portfolio/dream-homes`
- `/portfolio`
- `/pricing`
- `/service`
- `/team`

Forms are frontend controls unless a submission endpoint is explicitly configured; this cleanup does not add a backend.

## Migration History

One-time migration scripts, old HTML/JSON snapshots and staging output are no longer part of this application. Their recovery archive is stored outside the six apps in the workspace's `.cleanup-backups` directory. Reusable migration tooling remains in `../tools/template-migration`.

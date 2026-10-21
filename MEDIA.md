# Cloudinary Media

This project serves referenced images, background images, logos, videos and custom
fonts from its own folder under `wazemtech/` in Cloudinary cloud `dj4rfocct`.
`cloudinary-assets.json` records original sources, upload checksums, public IDs,
delivery URLs and successful delivery checks. It contains no credentials.

## Delivery

- `src/lib/cloudinary-loader.ts` integrates with ordinary Next.js `Image`.
  Responsive `srcset` URLs request the required width with automatic quality and
  format. `c_limit` retains aspect ratio without cropping or upscaling.
- SVGs stay vector. CSS backgrounds use verified delivery URLs. Already-compressed
  originals remain the fallback when a transformed full-width copy is larger.
- Custom TTF/OTF fonts were losslessly compressed to WOFF2 without removing glyphs
  or changing the font family. Next-managed fonts remain managed by Next.js.
- `src/components/ui/DeferredVideo.tsx` renders the same native video element and
  existing classes. It defers source activation until near the viewport, requests
  smaller Cloudinary videos on mobile, pauses offscreen/hidden playback and honors
  reduced motion. Existing poster styles and play/pause controls are retained.

## Deployment And Editing

No Cloudinary API key or secret is needed at runtime or in Vercel environment
variables. Only public delivery URLs ship to the browser. Updating these files
locally does not update an existing deployment: commit and redeploy this project.

For normal content changes, update media URLs in `src/data/siteConfig.ts`.
The workspace `tools/cloudinary-migration.mjs` can inventory, upload, verify and
apply new references; upload credentials are read only from process environment
variables `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET`. Never commit secrets.

Original public assets remain available for rollback but active source references
use Cloudinary. Source backups are outside the project in the workspace
`.cleanup-backups/cloudinary-migration/` and `.cleanup-backups/media-performance/`.

Production builds and focused media/hover tests do not replace a real browser
performance audit. Measure deployed mobile and desktop pages after redeployment
before claiming a Lighthouse score or an overall page-speed improvement.

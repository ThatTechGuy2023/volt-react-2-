# VOLT — fictional premium EV concept site
React + TypeScript + Vite + Tailwind CSS v4 + React Router + Motion + Lucide.
**All vehicles, specs, prices and technology are fictional demonstration content.**

## Run
`npm install` · `npm run dev` · `npm run build` · `npm run preview`

## Deploy (Vercel)
Push to Git, import the repo in Vercel (Vite preset). `vercel.json` rewrites all routes to `index.html` so direct URLs and refresh work.

## Known limitations
Vehicles are SVG illustrations, not photography. Centralise real images in `src/data` when available. The configurator preview is 2D and ignores interior choice visually. Test-drive form sends nothing.

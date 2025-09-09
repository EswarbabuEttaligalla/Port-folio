Deployment guide for the client Vite app

This repository contains a small Vite-powered site served from `client`. The original app uses UMD React via script tags and in-browser Babel; we kept those files under `client/public` and built a production `dist/` using Vite.

Quick local build & preview

1. Open a terminal and run:

```powershell
cd client
npm install
npm run build
npm run preview
```

`npm run preview` will serve the production `dist/` locally (default port 5173) so you can test the built site.

Deploy options

1) Vercel (recommended)
- Create a Vercel account and install the Vercel CLI if you want to deploy from terminal.
- From the project root (the folder that contains `client`), do one of:
  - Connect the Git repository in the Vercel dashboard and set the root to `/client`.
  - Or from terminal:

```powershell
cd client
vercel --prod
```

- Build command: `npm run build`
- Output directory: `dist`

2) Netlify
- Create a Netlify site and connect your Git repo, or use the Netlify CLI.
- In site settings, set build command to `npm run build` and publish directory to `client/dist` or if your working dir is `client`, set publish to `dist`.
- Example (CLI):

```powershell
cd client
netlify deploy --prod --dir=dist
```

3) GitHub Pages (static)
- Build locally and push the `dist` contents to a branch (e.g., `gh-pages`) or use an action that builds and deploys.
- Example using `gh-pages` npm package:

```powershell
cd client
npm run build
npx gh-pages -d dist
```

Notes & gotchas
- Tailwind `@apply` appears in the HTML because the project uses the CDN approach; if you want Tailwind compiled into CSS properly, migrate to a standard Vite + Tailwind config (postcss). This build works because the CSS is delivered raw and the CDN tailwind processes utilities at runtime.
- Form submissions use Formspree at `https://formspree.io/f/xzzaodae`. The client code attempts to POST to Formspree; if that fails it falls back to a `mailto:` link.
- If you want HTTPS custom domain or email automation, configure DNS and/or use serverless email functions.

If you'd like, I can add a `vercel.json` or `netlify.toml` and a GitHub Action to automatically build and deploy on push.

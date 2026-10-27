# Caio H. Andrade Lima — portfolio site

Static portfolio built with [Astro](https://astro.build) + Tailwind CSS, deployed free on **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Content

Edit **`src/data/site.ts`** for bio, projects, skills, and video embeds (`youtubeId`).

## Deploy (GitHub Pages)

1. Create a repo named **`CaioHAndradeLima.github.io`** (user site → `https://caiohandradelima.github.io/`).
2. Push this project to `main`.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` publishes on every push to `main`.

### Project site instead of user site

If the repo name is different (e.g. `caio-portfolio`), set in `astro.config.mjs`:

```js
base: '/caio-portfolio/',
site: 'https://caiohandradelima.github.io',
```

## Videos

Prefer **YouTube** (unlisted) or **Loom** links—do not commit large video files. Add `youtubeId` in `site.ts` for inline embeds.

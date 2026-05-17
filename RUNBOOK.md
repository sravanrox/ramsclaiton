# RamsClaiton — Build Guide & Runbook

## Quick reference

| Thing | Value |
|---|---|
| Live site | https://ramsclaiton.com |
| GitHub repo | https://github.com/sravanrox/ramsclaiton |
| GitHub Actions | https://github.com/sravanrox/ramsclaiton/actions |
| Local dev | http://localhost:3000 |
| Poshmark closet | https://poshmark.com/closet/ramsclaiton |
| Instagram | https://www.instagram.com/ramsclaiton.cali |
| TikTok | https://www.tiktok.com/@ramsclaiton.cali |

---

## How it works

The site is a **Next.js static export** — it builds to plain HTML/CSS/JS files in the `/out` folder, which GitHub Pages serves. There is no backend, no database, and no server to maintain. Everything lives in these source files:

```
app/
  products.ts    ← ★ edit this to add/update/remove products
  page.tsx       ← page layout (nav, grid, about, footer) — rarely needs editing
  layout.tsx     ← SEO metadata, Open Graph, favicon, Google Fonts imports
  globals.css    ← background gradient, base styles
tailwind.config.ts   ← custom color palette and font families
public/
  ramsclaiton-logo.png   ← the logo used in the header and as favicon
.github/workflows/
  deploy.yml     ← auto-deploys to GitHub Pages on every push to main
```

Pushes to `main` → GitHub Actions builds the site → deploys to GitHub Pages → live at ramsclaiton.com within ~2 minutes.

---

## Local development

### First-time setup

```bash
cd /Users/sravan/Desktop/ramsclaiton
npm install
```

### Start the dev server

```bash
npm run dev
```

Open http://localhost:3000. Changes to any file in `app/` update the browser instantly without refreshing.

### Check a production build locally

```bash
npm run build
```

This runs the same build that GitHub Actions runs. If it errors here, it will error in CI too. The output goes to `/out`.

---

## Deploying changes

```bash
git add app/page.tsx          # or whichever file you changed
git commit -m "What you did"
git push origin main
```

Then watch the deploy at https://github.com/sravanrox/ramsclaiton/actions — it takes about 90 seconds. Once the workflow shows a green checkmark, refresh ramsclaiton.com.

> **Never use `git add .` blindly** — the repo has build artifacts (`.next/`, `out/`) and macOS junk (`.DS_Store`) that don't belong in commits. Always add specific files.

---

## Common content updates

### Add or edit a product

All product data lives in **`app/products.ts`** — this is the only file you need to touch for product changes. `page.tsx` just imports and displays whatever is in that file.

Each product entry looks like this:

```ts
{
  name: "Organic Cotton Floral Cosmetic Pouch",
  price: "$25",
  label: "White / Blue",           // badge shown over the card image
  link: "https://poshmark.com/listing/...",
  image: "https://di2ponv0v5otw.cloudfront.net/...",  // Poshmark CDN image URL
  description: "One-line description shown under the product name.",
  meta: "White / Blue · OS · RAMS CLAITON",  // small uppercase line at the bottom
},
```

**To get the Poshmark image URL:** open the listing, right-click the main photo → "Copy image address". Use the URL that starts with `https://di2ponv0v5otw.cloudfront.net/` and has `m_` in the filename — that's the medium size.

**To add a new product:** paste a new object at the top (or wherever you want it in the grid) and push.

**To update a product:** edit the relevant field in `app/products.ts` and push.

**To remove a product:** delete its object from the array and push.

### Update social links

In `app/page.tsx`, at the top of the file:

```ts
const instagramUrl = "https://www.instagram.com/ramsclaiton.cali";
const tiktokUrl = "https://www.tiktok.com/@ramsclaiton.cali";
```

### Update the About Us text

In `app/page.tsx`, search for `<section id="about"`. The paragraphs are plain `<p>` tags — edit them directly. The script-font accent line just below the heading (`font-script`) can also be updated here.

### Reorder products

In `app/products.ts`, the order of objects in the array controls the order items appear in the grid. Current order:

1. Pink / Green · Top handle ($30)
2. Blue / Green ($30)
3. Blue / Pink ($25)
4. Pink / Green · Soft floral ($25)
5. White / Blue ($25)

Move objects within the array to change the display order.

### Update SEO / page title / description

Open `app/layout.tsx`. The `metadata` object at the top controls:
- `title` — browser tab and Google result title
- `description` — Google result snippet
- `openGraph` — what shows when the link is shared on social media
- `twitter` — Twitter/X card preview

After updating metadata, Google won't reflect it immediately. To force a re-crawl, go to **Google Search Console → URL Inspection → https://ramsclaiton.com → Request Indexing**. Updates usually appear within 1–2 days.

### Update the footer

The footer is at the bottom of `app/page.tsx` inside the `<footer>` tag. It contains:
- Brand name + script `&` + "Organic Cotton" tagline
- Instagram, TikTok, and Poshmark icon links (pulled from the URL constants at the top of the file)
- Copyright line — update the year manually if needed

### Replace the logo

Drop a new PNG file into `public/` with the exact filename `ramsclaiton-logo.png`. Same filename means no code changes needed. Then:

```bash
git add public/ramsclaiton-logo.png
git commit -m "Update logo"
git push origin main
```

---

## Design system

### Colors

The color palette is defined in `tailwind.config.ts` and used throughout `page.tsx`:

| Token | Hex | Used for |
|---|---|---|
| `cream` | `#f8f3ea` | Page background base |
| `petal` | `#f3c8d2` | Borders, soft accents |
| `blush` | `#ef8fa3` | Subheadings, hover states |
| `rosewood` | `#6f4654` | Primary buttons, brand text |
| `cocoa` | `#4b333e` | Body text |
| `sage` | `#d7deaa` | Green accents on product card gradients |

The background gradient lives in `globals.css` — two soft radial blobs (pink top-left, sage bottom-right) over a warm cream base.

Cards use Tailwind's `backdrop-blur` + semi-transparent white (`bg-white/58`) to create a frosted glass look.

### Fonts

Fonts are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables:

| Variable | Font | Tailwind class | Used for |
|---|---|---|---|
| `--font-display` | Cormorant Garamond | `font-display` | All headings (h1–h3) |
| `--font-script` | Great Vibes | `font-script` | Cursive accent lines |

To use the script font on an element, add `font-script` (and usually `italic text-blush`) as Tailwind classes.

---

## Troubleshooting

### Site not updating after a push
1. Check https://github.com/sravanrox/ramsclaiton/actions — look for a red X.
2. Click the failed run to read the error log.
3. Common cause: a TypeScript or build error in `page.tsx`. Run `npm run build` locally to reproduce it.

### CSS or images broken on the live site
The site uses no base path (no `NEXT_PUBLIC_BASE_PATH`). If assets ever 404, confirm `next.config.mjs` has `basePath` set to `""` or not set at all. Do **not** add `/ramsclaiton` as a base path — that was needed before the custom domain was set up and will break things now.

### Local dev port already in use
Next.js will automatically try the next available port (3001, 3002, etc.) and print it in the terminal.

### Undo a local edit before committing

```bash
git restore app/page.tsx
```

Only run this if you want to throw away your unsaved changes — it cannot be undone.

### Roll back a deployed change

```bash
git revert HEAD
git push origin main
```

This creates a new commit that undoes the last one and triggers a fresh deploy. Safer than force-pushing.

### See recent change history

```bash
git log --oneline -10
```

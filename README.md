<<<<<<< HEAD
# Obregad-Hydropower-Site
=======
# Western Energy and Ventures Pvt. Ltd. — Corporate Website (MVP)

Production-ready marketing website for **Western Energy and Ventures Pvt. Ltd.** and the
**9 MW Obregad Hydropower Project** (Jumla, Karnali Province, Nepal).

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4**.

## Stack

| Layer      | Choice                                              |
| ---------- | --------------------------------------------------- |
| Framework  | Next.js 16.3.6 (Turbopack)                          |
| UI         | Tailwind CSS v4 + lucide-react icons                |
| Charts     | recharts                                            |
| Animations | framer-motion (respects `prefers-reduced-motion`)   |
| Forms      | react-hook-form + zod (client validation, honeypot) |
| Fonts      | Manrope (next/font/google)                          |

## First-time setup (what to install)

You only need **Node.js** (tested with v24) and **npm** (v11). Everything else is
already installed in `package.json`.

```bash
# 1. Install dependencies (if you cloned/moved the folder elsewhere)
npm install

# 2. Start the development server
npm run dev

# 3. Open in your browser
#    http://localhost:3000
```

Production build & preview:

```bash
npm run build        # typecheck + lint + static export of all routes
npm run start        # serve the production build on :3000
```

Other scripts:

```bash
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run format       # Prettier (write)
npm run format:check # Prettier (check)
```

## Using this in VSCode

- Open the `westernenergy` folder in VSCode.
- VSCode will suggest the recommended extensions (`.vscode/extensions.json`):
  - **ESLint**
  - **Prettier**
  - **Tailwind CSS IntelliSense**
  - **Codeium** (optional; plain `.vscode/settings.json` config)
- The workspace is already configured for **format-on-save (Prettier)**, **fix-on-save
  (ESLint)**, and Tailwind IntelliSense.
- A launch config (`.vscode/launch.json`) is included: press **F5** to run the dev
  server / production build / lint with debugger support.
- Restart VSCode after the extensions finish installing the first time.

## Where to edit content

All site content lives in one place — **`src/data/`** — so you can edit text without
touching components:

| File                     | Controls                                                    |
| ------------------------ | ----------------------------------------------------------- |
| `src/data/company.ts`    | Company blurb, mission/vision/values, CSR commitments       |
| `src/data/project.ts`    | Project facts, technical spec, timeline, rationale          |
| `src/data/financials.ts` | Cost structure & modelled returns (70:30, ~18.4%/~24.7%)    |
| `src/data/investment.ts` | Equity plan, use of funds, FAQ                              |
| `src/data/news.ts`       | News & public notices articles                              |
| `src/data/documents.ts`  | Download centre documents                                   |
| `src/data/gallery.ts`    | Gallery images + captions                                   |
| `src/data/navigation.ts` | Header / footer / sitemap nav structure                     |
| `src/data/contact.ts`    | Contact details (currently placeholders/null)               |
| `src/lib/site.ts`        | Site name, tagline, **deployment URL** (needed for sitemap) |

Key styling tokens are in `src/app/globals.css` (`@theme`: brand blue `#0B4F71`,
leaf green `#159447`, ink/mist/line palettes).

## What to do next (post-MVP checklist)

1. **Fill in contact details** — edit `src/data/contact.ts` with the official office
   address, email and phone (they are deliberately left as placeholders).
2. **Wire the forms to email.** `POST /api/inquiry` currently validates, runs a
   honeypot and logs the submission (see `src/app/api/inquiry/route.ts`). Add your
   email provider (e.g. Nodemailer/SMTP or Resend) inside `src/lib/mail.ts` and send
   from that route. Same for the investor inquiry form on `/investors`.
3. **Replace placeholder PDFs** in `public/documents/` with the official
   `investor-booklet.pdf`, `project-overview.pdf` and `company-profile.pdf`
   (regenerate via `node scripts/gen-placeholder-pdfs.mjs` or just overwrite files).
4. **Replace concept images** — `public/images/*.svg` and gallery entries flagged
   `isIllustration: true` are self-drawn concept art, not real photos. Swap in real
   site imagery and update `src/data/gallery.ts`.
5. **Update the deployment URL** in `src/lib/site.ts` so `sitemap.xml` and
   `robots.txt` point at the real domain.
6. **Regenerate documents + favicon** — keep `src/app/icon.svg` and the auto-generated
   `opengraph-image` (1200×630) in sync with branding.
7. Deploy (Vercel recommended) and confirm `npm run build` passes in CI.

## Important editorial rules (kept deliberately)

- **No invented facts.** Anything not confirmed by the company (registration numbers,
  directors, PPA status, guarantees, final returns) is marked as planning-stage,
  unconfirmed, or left as a placeholder.
- All financial figures are **modelled planning cases**, displayed with
  “Planning / Development Stage” labels (`PlanningBadge`).
- This site is informational; the disclaimer at `/disclaimer` is linked from
  footer and investors sections.

## Project structure

```
src/
  app/            # routes (pages, api/inquiry, sitemap, robots, og-image)
  components/     # ui/ forms/ charts/ news/ project/ visuals/ sections/ layout/
  data/           # all editable site content
  lib/            # site config, cn, utils, inquiry validation
public/
  images/         # SVG illustrations (concept artwork)
  documents/      # placeholder PDFs (replace with official docs)
scripts/          # placeholder PDF generator
```
>>>>>>> b6c0b65 (obegrad project add)

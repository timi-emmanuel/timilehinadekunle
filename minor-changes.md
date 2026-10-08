# Portfolio update spec (for an AI coding agent)

Repo: Timilehin Adekunle's portfolio (Next.js, Tailwind). Deployed at https://timilehinadekunle.vercel.app

## Rules for the agent

1. Change only what this file lists. Do not redesign layout, components, animations, or the terminal theme.
2. Locate text by searching the repo for the **FIND** string. Copy often lives in a data file (for example `data/*.ts`, `content/*`) rather than JSX. Edit the data file when that is where it lives.
3. If a FIND string cannot be located, search by section name, make the closest edit, and list it in your final report. Do not guess silently.
4. Do not invent facts, numbers, links, or technologies. Anything marked `[VERIFY]` must be left as a `TODO(verify)` comment and listed in your final report.
5. Use plain hyphens or commas in new body copy. Do not use em dashes in body text. (The `<title>` and Open Graph title use one on purpose.)
6. When finished, run lint and build, then report: files changed, `[VERIFY]` items left, and anything not found.

## 0. Source of truth

| Item | Value |
|---|---|
| Display name (use everywhere) | **Timilehin Adekunle** |
| Role title (use everywhere) | **Full-Stack Engineer**|
| Location | Lagos, Nigeria (UTC+1) |
| Email | adekemmanuel17@gmail.com |
| GitHub | https://github.com/timi-emmanuel |
| Experience | 3 years |
| QuiqOrder live URL | https://www.tryquiqorder.com |
| Matchkicks URL | https://matchkicks.com |
| Jirella live demo | https://farms-accounting-software.vercel.app |
| Deslop repo | https://github.com/timi-emmanuel/deslop |

QuiqOrder numbers (all-time): **77** merchant accounts, **19** published storefronts, **₦2.2M+** merchant net sales. Live since **March 2026**.

Never show: "paid accounts", "WhatsApp connected", or "QuiqOrder revenue" figures.

## 1. Name and title consistency

Replace every occurrence below.

| FIND | REPLACE WITH |
|---|---|
| `Frontend & Systems Engineer` | `Full-Stack Engineer` |
| `Frontend & Full-Stack Developer` | `Full-Stack Engineer` |
| `Frontend & Full-Stack` | `Full-Stack` (except in the contact copy, which section 10 rewrites) |
| `Frontend Engineer` used as the headline role anywhere | `Full-Stack Engineer` |
| Photo caption `ADEKUNLE, O. E.` (any similar initials caption) | `Timilehin Adekunle` |
| `© 2026 timilehin.dev` | `© 2026 Timilehin Adekunle` |
| `Adekunle Oluwatimilehin Emmanuel` or `Adekunle Emmanuel` anywhere | `Timilehin Adekunle` |

After editing, run: `grep -rniE "Systems Engineer|Full-Stack Developer|Frontend Engineer|Oluwatimilehin|timilehin\.dev|ADEKUNLE, O" --exclude-dir=node_modules --exclude-dir=.next .` and confirm no matches (the old role titles must be gone from headings and metadata; `Frontend Developer (Contract)` in the SBE experience entry is a past job title and is correct, so it must stay).

## 2. Metadata and link preview

Edit the root layout metadata (`app/layout.tsx` or the metadata export you find).

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://timilehinadekunle.vercel.app"),
  title: "Timilehin Adekunle — Full-Stack Engineer (React / Next.js)",
  description:
    "Full-stack engineer (React, Next.js, TypeScript, PostgreSQL) in Lagos. Founding engineer at QuiqOrder: 77 merchant accounts, ₦2.2M+ in sales.",
  keywords: [
    "Timilehin Adekunle", "Full-Stack Engineer", "React Developer",
    "Next.js", "TypeScript", "PostgreSQL", "Nigeria",
  ],
  authors: [{ name: "Timilehin Adekunle" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Timilehin Adekunle",
    title: "Timilehin Adekunle — Full-Stack Engineer",
    description:
      "Founding engineer at QuiqOrder (77 merchant accounts, ₦2.2M+ in sales). React, Next.js, TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timilehin Adekunle — Full-Stack Engineer",
    description:
      "Founding engineer at QuiqOrder (77 merchant accounts, ₦2.2M+ in sales). React, Next.js, TypeScript.",
  },
};
```

Also update `meta-apple-mobile-web-app-title` to `Timilehin`.

### Open Graph image (replace the current 512px icon)

Create `app/opengraph-image.tsx` using `ImageResponse` from `next/og`. Size 1200x630, PNG. Add `app/twitter-image.tsx` that re-exports the same image. Remove any `og:image` / `twitter:image` that points to `icon-512.png`.

Design: background `#0A0D0B`, primary text `#E5E8E3`, accent = the site's existing accent color (read it from the global CSS variables, the amber used on the "view_work.sh" button). Layout, left aligned, generous padding:

- Line 1, large: `Timilehin Adekunle`
- Line 2, medium, accent color: `Full-Stack Engineer`
- Line 3, small, primary text: `React · Next.js · TypeScript · PostgreSQL`
- Bottom row, small: `77 merchant accounts · ₦2.2M+ merchant sales · QuiqOrder`

Text on the image must pass 4.5:1 against its background. Use the site's monospace font if it is a local font file, otherwise the default sans.

## 3. Hero

| Element | FIND (current) | REPLACE WITH |
|---|---|---|
| H1 line 1 | `Timilehin Adekunle` | no change |
| H1 line 2 | `Frontend & Systems Engineer` | `Full-Stack Engineer` (keep the blinking cursor) |
| Paragraph | the current hero paragraph starting `Fullstack Engineer with 3 years of experience` | see below |

Hero paragraph:

> Full-stack engineer with 3 years of experience building React and Next.js products and the data layers behind them: a live e-commerce platform as a founding engineer, a farm ERP on Supabase and PostgreSQL, and data-dense dashboards for multi-tenant sportsbook platforms.

Keep the "OPEN TO WORK" badge and the three buttons. 

## 4. Stats row (three tiles)

| Tile | Value | Label | Caption |
|---|---|---|---|
| 1 | `77` | `MERCHANT ACCOUNTS` | `QuiqOrder · 19 live stores · ₦2.2M+ sales` |
| 2 | `6+` | `BETTING Companies` | `Sportsbook back office` |
| 3 | `10` | `STAFF ROLES (RBAC)` | `Jirella · used daily by 5+ staff` |

`[VERIFY]` Tile 2: the CV says "6+ betting clients"; the old site said "6". Use `6+` and leave a `TODO(verify)` comment.

## 5. About section

FIND the paragraphs starting `I'm a full-stack engineer in Lagos, Nigeria` and `For the past 3 years`. REPLACE all three paragraphs with:

> I'm a full-stack engineer in Lagos, Nigeria, with 3 years of experience building React and Next.js products. I came into software from Mechanical Engineering, and that background still shapes how I work: I look for the system behind a problem before I build the interface for it.
>
> Most of my work is data-heavy: back offices and dashboards for sportsbook and SaaS platforms, and a live e-commerce platform where I'm one of the founding engineers. I'm comfortable in modern Next.js codebases and legacy Nuxt/Vue ones, turning messy requirements into interfaces that stay fast and maintainable.
>
> I own the layers below the UI too. On Jirella, a farm ERP I built solo, I designed the PostgreSQL schema, a 10-role access model enforced with Row-Level Security, and idempotent migrations, then built the product on top. I've also built a serverless image-generation service on AWS Lambda and a Playwright-based crawler API.

Keep the education card and the skills tag groups unchanged. Replace the caption that says `Hover to tap any technology icon` (or similar) with `Tools I use day to day`.

## 6. Projects

### Order

Reorder the cards to: **QuiqOrder, Jirella, Matchkicks, PadiHold**. Keep the header counter at `3 IN PRODUCTION`.

### Status labels

The cards currently show both `live demo` and `private / internal`, which reads as contradictory. Replace each with a single line using this pattern: `Live · Code private` (or `In development` for PadiHold). Show a link icon or button only where a public URL exists.

### Card copy

**QuiqOrder**
- Tag: `SAAS & E-COMMERCE`
- Title: `QuiqOrder`
- Status: `Live · Founding engineering team · Code private`
- Description: `E-commerce and revenue-recovery platform for merchants, live since March 2026 with 77 merchant accounts, 19 published storefronts, and ₦2.2M+ in merchant sales. I built the merchant dashboard, the internal admin portal, and the Shipbubble delivery integration.`
- Stack: Next.js, TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query, Zod, Shipbubble
- Link: https://www.tryquiqorder.com
- Image: the user will supply a merchant-dashboard screenshot at `public/projects/quiqorder-dashboard.png`. Wire the card to it. If the file is missing, keep the current image and add `TODO(user): add dashboard screenshot (blur customer data)`.

**Jirella Farm Management System**
- Tag: `AGRICULTURE & ERP`
- Status: `Live demo · Built solo for a client · Code private`
- Description: `Modular farm ERP built solo for a client: 8 modules covering poultry, catfish, feed mill, BSF, inventory, sales, and accounting, used daily by 5+ staff. Access is controlled by 10 staff roles enforced with PostgreSQL Row-Level Security.`
- Stack: Next.js, Supabase, PostgreSQL, AG Grid, Docker, Tailwind CSS
- Link: https://farms-accounting-software.vercel.app

**Matchkicks** (rename from "Mockup Integration Tool")
- Tag: `BACKEND AUTOMATION`
- Title: `Matchkicks Image Generation Service`
- Status: `Contract · Feb – Mar 2025 · Live · Code private`
- Description: `Serverless service that composites design layers into product mockups on demand as WebP, replacing pre-rendered images stored in S3. On-the-fly generation with Redis caching cut latency and storage costs. Also built Shopify product-creation and legacy-migration endpoints.`
- Stack: Node.js, Sharp, AWS Lambda, Redis, AWS S3, Express.js
- Link: https://matchkicks.com

**PadiHold**
- Tag: `FINTECH & ESCROW`
- Status: `In development`
- Description: `Escrow platform for online commerce in Nigeria, currently in development. Planned features include staged transaction states, an AI-assisted dispute flow, and Paystack settlement.` (Remove the phrase "engineered to eliminate online commerce fraud".)
- Stack: Next.js, TypeScript, Tailwind CSS, Zustand, Radix UI
- Remove `Solidity` from the stack.
- `[VERIFY]` Add `OpenAI`, `Paystack`, or `Zod` only if the user confirms they are in the codebase. Use the same stack on the Radar card in section 7.
- `[VERIFY]` Show a "live demo" link only if a public URL exists. Otherwise show no link.

### Archived experiments row

Remove the `archived_experiments` row (Shortly and Nationary).

## 7. Experience log

Keep the layout. Replace the entries with the following. Keep reverse-chronological order.

**Founding Engineer** · QuiqOrder (Startup) · `Nov 2024 – Present`
- One of the founding engineers on an e-commerce and revenue-recovery platform for merchants. Live since March 2026 with 77 merchant accounts, 19 published storefronts, and ₦2.2M+ in merchant sales.
- Built the merchant dashboard (products, orders, sales metrics, subscription billing) and the internal admin portal using Next.js App Router, TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query, React Hook Form, and Zod.
- Integrated Shipbubble logistics for delivery and order fulfilment. Contributed to the product rebuilds that led up to the March 2026 launch.

**Frontend Developer (Contract)** · Sportsbook Back Office (SBE) · `Sep 2025 – Sep 2026`
- Owned the data layer of a Next.js back office: Axios data fetching, shadcn/ui and TanStack Table, and Zustand state across high-density dashboards (player management, banking, bonus, risk, reporting).
- Built the Aviata Partner Back Office; optimized API calls and added API-key management to the main back office. Built features on the legacy Nuxt/Vue back office and the Aviatax mobile web app.
- Led a Tailwind v2 to v3 migration (~9,800 lines of legacy CSS removed). Resolved CORS and API integration issues, hardened impersonation-token handling, and fixed a Docker Compose healthcheck mismatch in production.

**Backend Developer** · Matchkicks · `Feb – Mar 2025`
- Built a serverless image-generation service (Node.js, Sharp, AWS Lambda, Redis) that composites design layers into product mockups on demand as WebP.
- Replaced pre-rendered images stored in S3 with on-the-fly generation and Redis caching, cutting latency and S3 storage costs.
- Built Shopify product-creation endpoints and legacy product-migration tooling.

## 8. Radar section

- **Remove** the cards `Server-Side Hydration Boundaries & Client Isolation` and `Frontend Architecture & System Design Principles` (they are "exploring" and "studying" items, not shipped work).
- **Remove** the line `Cadence: Updated bi-weekly...` (or any similar update-schedule promise).
- `[VERIFY]` Keep `PostgreSQL Row-Level Security Query Plan Auditing` only if the user has real benchmark results to show. Otherwise remove it.
- **Deslop card** copy:
  - Title: `Deslop: Anti-Slop Design System Engine`
  - Description: `Design-system extraction tool. Crawls any live URL with Playwright, clusters colors with CIEDE2000, snaps spacing to an 8pt grid, and outputs design.md, a Tailwind v4 theme, and .cursorrules for AI coding tools.`
  - Stack: Next.js 16, Fastify, Playwright, Drizzle, PostgreSQL, Tailwind CSS v4
  - Add a `View on GitHub` link to https://github.com/timi-emmanuel/deslop
- **PadiHold card**: use the same copy and stack as in section 6.

## 9. GitHub activity block

- Keep the `YEARLY VOLUME` (commit total) tile, the heatmap, and the profile link.
- **Remove** the tiles `CURRENT STREAK`, `LONGEST STREAK`, and `PEAK VELOCITY`.

## 10. Contact section

| Element | FIND | REPLACE WITH |
|---|---|---|
| Heading | `Need a reliable engineer who can own the frontend without getting lost in the backend?` | `Looking for a full-stack engineer who can ship the UI and own the API and database behind it?` |
| Body | the paragraph starting `I build performant, accessible web applications` | `I build performant, accessible web applications and I'm comfortable with REST APIs, PostgreSQL schemas, and Row-Level Security. Open to full-stack and frontend roles, and to contract work. Reach out directly.` |

Keep the email, copy-email, LinkedIn, and GitHub buttons.

## 11. Contrast and readability

Background: a Deslop scan reported the `text-muted` token `#E5E8E3` as failing at 1.24:1. That ratio is exactly `#E5E8E3` against pure white, so the scan probably measured against the wrong background. Against the site's dark background `#0A0D0B` the same color is about 15.8:1. The muted text still looks dim on screen, which suggests opacity is being applied on top of the color. The real contrast must be measured including opacity.

Tasks:

1. Find every place muted or secondary text is styled: the `--text-muted` token, `text-muted*` classes, any `opacity-*` utility on text, `text-*/NN` alpha colors, and `color-mix()` or `rgba()` text colors.
2. Create `scripts/check-contrast.mjs` (below). Fill `pairs` with every distinct text style: its color, its **actual background** (the nearest ancestor with a background, not the page default), and any opacity. Run it with `node scripts/check-contrast.mjs`.
3. Any pair under **4.5:1** must be fixed by raising the color or removing the opacity. Target **7:1 or higher** for text smaller than 12px.
4. No text below **12px** (0.75rem). Raise the tiny monospace labels (stat captions, tag text, card tags) to at least 12px, and 13px where the layout allows.
5. Include the script's output table in your final report.

```js
// scripts/check-contrast.mjs
const hex = (h) => { const n = parseInt(h.replace("#", ""), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const lin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const blend = (fg, bg, a) => fg.map((v, i) => Math.round(v * a + bg[i] * (1 - a)));
const ratio = (a, b) => { const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05); };

// TODO(agent): fill from the real CSS. opacity = 1 when none applies.
const pairs = [
  { name: "text-primary", fg: "#E5E8E3", bg: "#0A0D0B", opacity: 1 },
  // { name: "text-muted (stat caption)", fg: "...", bg: "...", opacity: 0.5 },
];

for (const p of pairs) {
  const bg = hex(p.bg);
  const fg = blend(hex(p.fg), bg, p.opacity ?? 1);
  const r = ratio(fg, bg);
  console.log(`${r >= 7 ? "AAA " : r >= 4.5 ? "AA  " : "FAIL"} ${r.toFixed(2)}:1  ${p.name}`);
}
```

## 12. Acceptance checklist

- [ ] No remaining matches for the grep in section 1.
- [ ] No `77+`, `Solidity` (unless user confirmed), `Backend Developer`, or `Mockup Integration Tool` left in the repo.
- [ ] `og:image` and `twitter:image` point to the generated 1200x630 image, and `twitter:card` is `summary_large_image`.
- [ ] All project cards use the `Live · Code private` / `In development` pattern.
- [ ] Contrast script shows no FAIL rows. No text under 12px.
- [ ] Lint and build pass.
- [ ] Final report lists every `TODO(verify)` and `TODO(user)` left behind.

## Items the user must supply

1. `public/resume.pdf`: the updated CV with the new name.
2. `public/projects/quiqorder-dashboard.png`: merchant dashboard screenshot (blur customer data).
3. Confirm: "6" vs "6+" betting clients; PadiHold's actual stack and whether it has a public demo; whether the RLS benchmark card has real results.
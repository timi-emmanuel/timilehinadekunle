# PRE_LAUNCH_CHECKLIST.md — "Doesn't Look Vibe-Coded" Pass

Run this checklist on every project before sharing it publicly, sending it
to a client, or posting it in build-in-public content. The goal: nothing
about the site should signal "AI-assisted build that was never finished."
Almost everything here falls into one of two buckets — **finished the
invisible 20%** (things a user never directly sees but a technical
evaluator immediately checks) or **treated the site as a product, not a
demo** (things that only exist if you're planning for the site to be
found, shared, and maintained).

---

## 1. Infrastructure & Build Hygiene

- [ ] **Custom domain connected** — no `vercel.app`/`netlify.app` URL in
      the final link. This alone is the single biggest "this is a demo"
      tell.
- [ ] **Prod source maps removed** — unminified source (variable names,
      comments, file structure) should not be visible in browser devtools
      in production. Minor security leak too.
- [ ] **Framework fingerprints minimized** — no leftover dev-mode
      warnings, unminified framework internals, or obvious Vite/CRA
      dev-server artifacts visible in devtools on the deployed build.
- [ ] **JS bundle size checked** — no single-page bundle should be
      several MB unminified/un-split for a landing page. Check
      code-splitting, tree-shaking, and that whole libraries aren't
      imported for one function. Run Lighthouse or check the Network tab.
- [ ] **Zero console errors** — open devtools on the live site and
      confirm no red errors. This is the fastest thing a technical
      reviewer checks.

## 2. SEO Fundamentals

- [ ] **Unique page titles** — no page still says the framework default
      ("React App," "Vite App," etc.), and no two pages share a title.
- [ ] **Unique meta description per page** — no copy-pasted description
      across every route.
- [ ] **Unique heading (H1) per page** — reinforces what the page is
      about, distinct from every other page's H1.
- [ ] **Canonical tags set** — especially where duplicate/similar URLs
      can exist (`?utm=` params, trailing slashes, www vs. non-www).
- [ ] **robots.txt present** — tells crawlers what to index.
- [ ] **sitemap.xml present** — especially for multi-page sites; a
      missing sitemap signals nobody thought past the homepage.
- [ ] **llms.txt present** — emerging convention (like robots.txt, but
      for AI crawlers/answer engines) describing how to interpret and
      cite the site. Signals the build accounts for AI-driven discovery.
- [ ] **Structured data / schema markup** — JSON-LD so search engines can
      render rich results (ratings, breadcrumbs, etc. where applicable).
- [ ] **Local business schema** — if the project represents a physical or
      local business, this is what makes it eligible for local search
      features (hours, map pack, etc.).
- [ ] **Social share images (OG images) set** — every shareable page
      should render a real preview card on X/LinkedIn/Slack, not a blank
      or broken one. Test this before posting the link anywhere.

## 3. Content Structure & Navigation

- [ ] **Custom 404 page** — no default framework 404 or blank white
      screen on a broken link. One of the most common tells because it's
      rarely tested before shipping.
- [ ] **Internal links present and purposeful** — pages link to each
      other where it makes sense; no orphan pages nothing links to.
- [ ] **Breadcrumbs** — present where the site has any real hierarchy
      (more than 1–2 levels deep).
- [ ] **Alt text on all images** — accessibility requirement and an SEO
      signal; easy to skip when moving fast, easy to check before launch.
- [ ] **Favicon set** — no generic browser-default icon or leftover
      framework logo in the browser tab. Small but visible in every open
      tab.

---

## 4. Definition of Done

Before sharing a link publicly or sending to a client:

- [ ] All boxes above checked, or explicitly marked N/A with a reason
      (e.g. "no local business schema — this is a SaaS product, not a
      local business").
- [ ] Link tested by pasting it into an actual chat app (X/LinkedIn/Slack)
      to confirm the share preview renders correctly.
- [ ] A broken URL manually tested to confirm the custom 404 renders.
- [ ] Lighthouse run once on the production build (not localhost) to sanity
      check performance/SEO/accessibility scores.

---

## 5. Notes

This list applies most fully to marketing/public-facing sites and
landing pages. For internal tools or authenticated dashboards (e.g. an
admin back office), sections 2 and 3 apply much more loosely — SEO and
public discoverability aren't relevant behind a login. Section 1
(infrastructure/build hygiene) still fully applies regardless of project
type.

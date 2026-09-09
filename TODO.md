# Portfolio Roadmap & On-Hold Features

This document tracks all features and enhancements currently placed on hold during the Terminal / Systems portfolio redesign. They can be implemented systematically in future phases.

---

## 1. 🔍 Comprehensive 6-Part Project Case Studies & Struggle Stories (Deep Dive)
- **Status:** `COMPLETED`
- **Concept:** Dedicated technical deep-dive modal inspector (`$ sys.inspect --case-study`) for key projects (`Jirella Farm ERP`, `SBE Ecosystem`, `PadiHold`, `QuiqOrder`, `Mockup Tool`) using the 6-part senior engineering framework:
  1. **The Problem:** The exact real-world bottleneck or commercial pain point.
  2. **What I Built:** Concrete feature architecture, services, and libraries used.
  3. **The Hard Part / Struggle Stories (Verified Incidents):**
     - **Production SSR Hydration Mismatch (SBE Reporting):** A production release caused date filters across reporting modules to silently fail (freezing input selection or not triggering data refreshes). Root cause was an SSR hydration mismatch on a DOM-dependent third-party datepicker component preventing event listener attachment. Resolved by standardizing client-only mounting boundaries across all DOM-dependent reporting components.
     - **Financial Calculation Defect (RTP & Jackpot Payouts):** Traced invalid values in production financial reporting to a multi-tier payout formula error; corrected calculation logic and standardized across reporting tables.
     - **FSM Escrow State Transitions (PadiHold):** State machine validation across multi-stage buyer/seller deal lifecycles.
     - **Idempotent SQL Migrations with Existence Guards (Jirella ERP):** Safe schema reruns across multi-stage Docker container environments.
     - **Sub-Pixel Image Scaling Concurrency (Mockup Tool):** Sharp stream backpressure avoiding Node.js heap exhaustion.
  4. **The Design & UI/UX:** Deliberate visual design, table density, and ergonomics decisions.
  5. **What's NOT in It:** Honest trade-offs, constraints, and intentional omissions.
  6. **Current Status & What's Next:** Operational status, roadmap, and next technical milestones.
- **Components activated:** `src/components/CaseStudyModal.jsx`, `src/data/projectDetails.js` (extended case studies), wired into `src/components/Projects.jsx`.

---

## 2. ✍️ Content & Thinkpieces Section (`06 — thinkpieces.txt`)
- **Status:** `COMPLETED`
- **Concept:** A minimalist technical writing and thought-leadership section formatted as a clean terminal text reader (`$ less --chop-long-lines thinkpiece.txt`).
- **Published Technical Essays:**
  - *Data Table Architecture: Handling 100K+ Live Sportsbook Events Without Frame Drops* (Virtualization, fine-grained Zustand subscriptions, and batching state updates in high-frequency trading & sports dashboards).
  - *From Mechanical Engineering to Software Systems: First-Principles State Machines* (How thermodynamics, control loops, and deterministic finite-state automata make frontend escrow workflows fail-safe).
  - *PostgreSQL Row-Level Security (RLS) in Multi-Tenant Agricultural ERPs* (Isolating tenant boundaries at the database kernel rather than trusting application middleware).
- **Components activated:** `src/components/Writing.jsx`, `src/data/thinkpieces.js`, integrated into `App.jsx`, `Titlebar.jsx`, with re-indexed pane sequence.

---

## 3. 📊 GitHub Contributions Heatmap (`05 — github_activity.log`)
- **Status:** `COMPLETED`
- **Concept:** An embedded, responsive 52-week GitHub contribution telemetry grid for `@timi-emmanuel` styled with terminal hues (`#131914` to `#4ADE80` green and `#F2B84B` amber peak spikes), tracking yearly commit volume, current/longest streaks, peak velocity, and interactive hover tooltips with live API fetching and bundled fallback data.
- **Components activated:** `src/components/GitHubActivity.jsx`, `src/data/githubActivityFallback.js`, wired into `App.jsx`, `Titlebar.jsx`, and numbered as `05 — github_activity.log`.

---

## 4. 🛰️ Currently Building Page / Live Radar (`radar.now`)
- **Status:** `COMPLETED`
- **Concept:** A personal `/now` telemetry pane tracking:
  - Active sprint projects & features in flight: SBE Affiliate Portal integration & BO stat alignment, Nexta AI truthful resume tailoring SaaS, and PadiHold escrow FSM state engine.
  - Systems & engineering depth: PostgreSQL multi-tenant RLS query plan benchmarking, SSR hydration boundaries, and frontend architecture principles (DRY, SOLID, 12-Factor App).
  - Telemetry ribbon showing real-time stream status, sync cadence, and operator coordinates.
- **Components activated:** `src/components/CurrentlyBuilding.jsx`, `src/data/currentlyBuilding.js`, wired into `App.jsx`, `Titlebar.jsx`, and numbered as `04 — radar.now`.

---

## 5. 🌓 Optional: Terminal CRT / Paper Mode Toggle
- **Status:** `OPTIONAL / DEFERRED`
- **Notes:** Current portfolio is purposefully unified on the high-contrast dark Terminal palette (`#0A0D0B`). If light mode is ever desired, implement a high-contrast "Paper Terminal" or "Amber Monochrome CRT" theme toggle.



## 6. 🌓 Subtle Animation
- **Status:** `COMPLETED`
- **Notes:** Added high-performance, subtle Framer Motion micro-animations:
  - **TechLogos:** Staggered entrance, spring physics on hover (`whileHover`), glowing border, and dynamic terminal typewriter readout with cursor.
  - **Titlebar:** Smooth `layoutId` sliding active pill transition between sections and a breathing terminal green dot.
  - **Hero:** Animated metric ticker (counting up `6+`, `5+`, `10`, `4.65`) on viewport entry and interactive 3D perspective tilt on the operator card.
  - **Projects:** Smooth screenshot depth zoom on hover, spring hover hops on tech stack tags, and archived experiments link transitions.
  - **Experience:** Interactive row hover highlights and animated chevron hops on bullet points.
  - **Footer:** Direct click-to-copy email button with animated terminal feedback (`$ pbcopy` ➔ `[200 OK: COPIED]`).
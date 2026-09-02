# Portfolio Roadmap & On-Hold Features

This document tracks all features and enhancements currently placed on hold during the Terminal / Systems portfolio redesign. They can be implemented systematically in future phases.

---

## 1. 🔍 Comprehensive 6-Part Project Case Studies (Deep Dive)
- **Status:** `PAUSED` (Awaiting Timi's personal project introspection notes)
- **Concept:** Provide a dedicated technical deep-dive modal or expandable inspector for key projects (`Jirella Farm ERP`, `PadiHold`, `QuiqOrder`, etc.) using the 6-part senior engineering framework:
  1. **The Problem:** The exact real-world bottleneck or commercial pain point.
  2. **What I Built:** Concrete feature architecture, services, and libraries used.
  3. **The Hard Part:** Complex engineering challenges (e.g., FSM escrow state transitions, CORS & token impersonation in SBE, idempotent SQL migrations with existence guards in Jirella).
  4. **The Design & UI/UX:** Deliberate visual design and ergonomics decisions.
  5. **What's NOT in It:** Honest trade-offs, constraints, and intentional omissions.
  6. **Current Status & What's Next:** Operational status, roadmap, and next technical milestones.
- **Components to activate:** `src/components/CaseStudyModal.jsx`, `src/data/projectDetails.js` (extended case studies).

---

## 2. ✍️ Content & Thinkpieces Section (`05 — thinkpieces.txt`)
- **Status:** `PAUSED`
- **Concept:** A minimalist technical writing and thought-leadership section formatted as a clean terminal text reader.
- **Draft Articles / Topics:**
  - *Data Table Architecture: Handling 100K+ Live Sportsbook Events Without Frame Drops*
  - *From Mechanical Engineering to Software Systems: First-Principles State Machines*
  - *PostgreSQL Row-Level Security (RLS) in Multi-Tenant Agricultural ERPs*
- **Components to activate:** `src/components/Writing.jsx`, `src/data/thinkpieces.js`.

---

## 3. 📊 GitHub Contributions Heatmap (`06 — github_activity.log`)
- **Status:** `PAUSED`
- **Concept:** An embedded, responsive GitHub contribution activity grid styled with dark terminal hues (`#121613` to `#F2B84B` amber / `#4ADE80` green) displaying commit velocity, streaks, and repository highlights.
- **Integration:** GitHub GraphQL/REST API cached endpoint or static synced SVG heatmap.
- **Components to activate:** `src/components/GitHubActivity.jsx`.

---

## 4. 🛰️ Currently Building Page / Live Radar (`radar.now`)
- **Status:** `PAUSED`
- **Concept:** A personal `/now` page tracking:
  - Active sprint projects & current production features in flight.
  - Engineering topics currently being explored (e.g., Rust, distributed systems, advanced PostgreSQL optimization).
  - Current tech stack experiments.
- **Components to activate:** `src/components/CurrentlyBuilding.jsx`, `src/data/currentlyBuilding.js`.

---

## 5. 🌓 Optional: Terminal CRT / Paper Mode Toggle
- **Status:** `OPTIONAL / DEFERRED`
- **Notes:** Current portfolio is purposefully unified on the high-contrast dark Terminal palette (`#0A0D0B`). If light mode is ever desired, implement a high-contrast "Paper Terminal" or "Amber Monochrome CRT" theme toggle.



## 5. 🌓 Subtle Animation
- **Status:** `REQUIRED`
- **Notes:** Add subtle animation wherever is necessary to showcase the Frontend and UI expertise of the dev.
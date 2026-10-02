# ⚡ Timilehin Adekunle — Terminal & Systems Engineering Portfolio

> **High-density, deterministic frontend architecture meets first-principles systems modeling.**  
> Live Telemetry: [timilehinadekunle.vercel.app](https://timilehinadekunle.vercel.app)

```bash
$ sys.status --telemetry
========================================================================
OPERATOR    : Timilehin Adekunle
ROLE        : Frontend & Systems Engineer
BACKGROUND  : B.Eng. Mechanical Engineering (First Class Honours · 4.65/5.00)
CORE FOCUS  : React 19 / Next.js · TanStack Table · State Automata · PostgreSQL RLS
PALETTE     : High-Contrast Terminal Dark (#0A0D0B / #F2B84B / #4ADE80)
UPTIME      : Systems Nominal // Live Telemetry Active
========================================================================
```

---

## 🗺️ Project Overview

This repository houses the personal engineering portfolio of **Timilehin Adekunle**. Designed from the ground up as a responsive, high-density **developer workstation terminal**, it abandons generic design templates in favor of a technical, tactile aesthetic with real engineering case studies, interactive telemetry streams, and technical essays.

### Design & Engineering Philosophy
1. **First-Principles Systems Thinking:** Applying thermodynamic control loops, physical constraints, and deterministic finite-state automata (FSM) to frontend data pipelines.
2. **High-Density Legibility:** Strict monospace typography, amber/green terminal accents, and clear visual hierarchy optimized for fast scanning by senior engineering leads and CTOs.
3. **No Fluff / Real Incidents:** Every featured project includes an honest, transparent breakdown of production bottlenecks, verified incidents, and architectural trade-offs.

---

## 🖥️ Architecture & Terminal Panes

The application is structured as a sequential single-page terminal divided into numbered systems panes:

| Pane Index | System Tag | Component | Description |
| :--- | :--- | :--- | :--- |
| **00** | `sys.boot` | [`TerminalBoot.jsx`](src/components/TerminalBoot.jsx) | Optional terminal boot sequence with animated system checks and hardware diagnostic logs. |
| **01** | `overview.sys` | [`Hero.jsx`](src/components/Hero.jsx) & [`About.jsx`](src/components/About.jsx) | Operator summary, education, core engineering metrics, and mechanical-to-software trajectory. |
| **02** | `projects.db` | [`Projects.jsx`](src/components/Projects.jsx) & [`CaseStudyModal.jsx`](src/components/CaseStudyModal.jsx) | Flagship production software portfolio paired with an interactive 6-part deep-dive modal inspector. |
| **03** | `experience.log` | [`Experience.jsx`](src/components/Experience.jsx) | Career history, commercial achievements, and engineering impact across sportsbook systems, ERPs, and fintech. |
| **04** | `radar.now` | [`CurrentlyBuilding.jsx`](src/components/CurrentlyBuilding.jsx) | Live `/now` telemetry stream tracking active sprints, prototypes, and backend benchmarking studies. |
| **05** | `github_activity.log` | [`GitHubActivity.jsx`](src/components/GitHubActivity.jsx) | 52-week contribution telemetry grid with year-over-year commit volume, streak metrics, and live GitHub API sync. |
| **06** | `thinkpieces.txt` | [`Writing.jsx`](src/components/Writing.jsx) | Terminal essay reader publishing long-form technical architectural thinkpieces. |

---

## 🔬 The 6-Part Case Study Framework

Every project in `projects.db` is backed by a structured engineering case study viewable via the `$ sys.inspect --case-study` modal:

1. **The Problem:** The commercial bottleneck, latency ceiling, or data integrity issue being addressed.
2. **What I Built:** Architecture, component tree, state engines, and integration layers.
3. **The Hard Part (Verified Production Incidents):**
   - *SSR Hydration Mismatches:* Datepicker DOM-dependency isolation preventing UI freezes.
   - *Multi-tier Payout Defect:* Resolving financial precision anomalies in sportsbook RTP ledgers.
   - *FSM State Deadlocks:* Validating non-deterministic edge cases in peer-to-peer escrow transitions.
   - *Container SQL Idempotency:* Bulletproof migration rollbacks with existence guards in Dockerized ERPs.
4. **Design & Ergonomics:** Visual density, keyboard navigation, contrast ratios, and table layouts.
5. **What's NOT in It:** Honest technical compromises, deferred features, and operational boundaries.
6. **Current Status & Milestones:** Operational health, telemetry status, and active roadmap.

---

## 🛠️ Technology Stack

- **Core Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with bespoke terminal tokens (`#0A0D0B`, `#F2B84B`, `#4ADE80`)
- **Motion & Micro-Interactions:** [Framer Motion](https://www.framer.com/motion/) (springs, layoutId animations, staggered entrances)
- **Smooth Scroll Dynamics:** [Lenis Scroll](https://github.com/darkroomengineering/lenis)
- **Iconography:** [Phosphor Icons](https://phosphoricons.com/) & [Lucide React](https://lucide.dev/)
- **Data & Telemetry:** Custom GitHub REST API v3 telemetry with resilient local fallback datasets

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18.x` or higher
- npm / pnpm / yarn

### Local Development
```bash
# 1. Clone the repository
git clone https://github.com/timi-emmanuel/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start the Vite local development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Production Build
```bash
# Compile and bundle assets for production
npm run build

# Preview the local production bundle
npm run preview

# Run ESLint validation
npm run lint
```

---

## 🌐 Telemetry & Contact

- **Live URL:** [timilehinadekunle.vercel.app](https://timilehinadekunle.vercel.app)
- **GitHub:** [@timi-emmanuel](https://github.com/timi-emmanuel)
- **LinkedIn:** [linkedin.com/in/timilehin-adekunle](https://linkedin.com/in/timilehin-adekunle)
- **Direct Mail:** [adekemmanuel17@gmail.com](mailto:adekemmanuel17@gmail.com)

---

*Designd & engineered with first-principles craft by Timilehin Adekunle © 2026.*

export const radarMetadata = {
  lastUpdated: "September 2026",
  status: "ONLINE // TRANSMITTING",
  location: "Lagos, NG (UTC+1)",
  cadence: "Updated bi-weekly with active engineering focus",
};

export const radarItems = [
  {
    id: "sbe-affiliate-portal",
    category: "ACTIVE PRODUCTION SPRINT",
    statusText: "IN SPRINT",
    statusType: "live", // live (green)
    title: "SBE Affiliate Portal Integration & BO Stat Alignment",
    organization: "SBE Partner & Affiliate Ecosystem",
    summary:
      "Completed core Back Office (BO) API integrations. Currently aligning production data models and metrics schemas so administrative tables render structured reporting accurately, alongside integrating player-facing redirect and tracking APIs into the affiliate portal.",
    stack: ["React", "Next.js", "REST APIs", "Data Tables", "Redirect Flows", "Tailwind CSS"],
  },
  {
    id: "nexta-saas",
    category: "SAAS IN ACTIVE INCUBATION",
    statusText: "MVP IN FLIGHT",
    statusType: "amber", // amber
    title: "Nexta — Truthful Resume Tailoring & Application Tracker",
    organization: "Nexta SaaS // Solo Architecture",
    summary:
      "Architecting a multi-stage AI pipeline (parsing, keyword extraction, and hallucination-guarded tailoring) that aligns base resumes with target job specs while enforcing factual integrity, paired with an integrated job application pipeline and PDF export engine.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "padihold-escrow",
    category: "FINTECH IN PROGRESS",
    statusText: "ACTIVE DEV",
    statusType: "cyan", // cyan
    title: "PadiHold — Escrow Multi-Stage State Engine & Settlement",
    organization: "PadiHold // FinTech Platform",
    summary:
      "Engineering a resilient finite-state machine (FSM) orchestrating peer-to-peer milestone releases, dispute arbitration lifecycles, and webhook-driven payment settlement (Paystack) for Nigerian digital commerce.",
    stack: ["Next.js", "Zustand", "Paystack API", "Framer Motion", "Radix UI", "Zod"],
  },
  {
    id: "systems-deepdive",
    category: "SYSTEMS & BACKEND DEPTH",
    statusText: "BENCHMARKING",
    statusType: "amber", // amber
    title: "PostgreSQL Row-Level Security (RLS) Query Plan Auditing",
    organization: "Systems Research // Jirella ERP",
    summary:
      "Benchmarking query plan execution on complex multi-tenant RLS policies. Analyzing policy filter pushdown, index usage on composite tenant keys, and migration rollback idempotency.",
    stack: ["PostgreSQL", "RLS", "Supabase", "Docker", "SQL Migrations"],
  },
  {
    id: "frontend-architecture",
    category: "FRONTEND ARCHITECTURE",
    statusText: "EXPLORING",
    statusType: "cyan", // cyan
    title: "Server-Side Hydration Boundaries & Client Isolation",
    organization: "Architecture Spike",
    summary:
      "Refining zero-hydration-mismatch patterns for DOM-dependent third-party components (date-pickers, data visualizers) to guarantee seamless SSR-to-client handoffs in Next.js 14/15.",
    stack: ["React 19", "Next.js", "Radix UI", "Tailwind CSS"],
  },
  {
    id: "architecture-principles",
    category: "ARCHITECTURE & METHODOLOGY",
    statusText: "STUDYING",
    statusType: "purple", // purple
    title: "Frontend Architecture & System Design Principles",
    organization: "Continuous Learning // Engineering Craft",
    summary:
      "Deepening core software engineering principles applied to scalable frontends: DRY, SOLID design patterns (single responsibility, dependency inversion), clean component decoupling, and adapting 12-Factor App methodology (strict config separation, stateless processes, environment parity) to modern React and Next.js platforms.",
    stack: ["SOLID Principles", "DRY & Clean Code", "12-Factor App", "Frontend Architecture", "Design Patterns"],
  },
];

export const radarMetadata = {
  lastUpdated: "September 2026",
  status: "ONLINE // TRANSMITTING",
  location: "Lagos, NG (UTC+1)",
  cadence: "Updated bi-weekly with active engineering focus",
};

export const radarItems = [
  {
    id: "active-sprint",
    category: "ACTIVE PRODUCTION SPRINT",
    statusText: "IN PROGRESS",
    statusType: "live", // live (green)
    title: "High-Density Table Caching & Data Layer Optimizations",
    organization: "SBE Sportsbook Back Office",
    summary:
      "Architecting TanStack Table query invalidation and request deduplication over high-density financial transaction logs. Eliminating redundant re-renders on real-time bet and payout feeds.",
    stack: ["Next.js", "TanStack Table", "Zustand", "Axios", "REST APIs"],
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
    id: "reading-focus",
    category: "READING & THEORY",
    statusText: "STUDYING",
    statusType: "purple", // purple
    title: "Distributed Systems & Data-Intensive Engineering",
    organization: "Continuous Learning",
    summary:
      "Re-reading Martin Kleppmann's 'Designing Data-Intensive Applications' — connecting mechanical engineering finite element and control system principles to distributed consensus and eventual consistency.",
    stack: ["Distributed Systems", "Fault Tolerance", "Concurrency"],
  },
];

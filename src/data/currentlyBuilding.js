export const radarMetadata = {
  lastUpdated: "October 2026",
  status: "ONLINE // TRANSMITTING",
  location: "Lagos, NG (UTC+1)",
};

// TODO(verify): Keep PostgreSQL Row-Level Security Query Plan Auditing only if the user has real benchmark results to show. Otherwise remove it.

export const radarItems = [
  {
    id: "deslop-engine",
    category: "AI DEVTOOLING",
    statusText: "ACTIVE DEV",
    statusType: "amber",
    title: "Deslop: Anti-Slop Design System Engine",
    organization: "Deslop // Solo Architecture",
    summary:
      "Design-system extraction tool. Crawls any live URL with Playwright, clusters colors with CIEDE2000, snaps spacing to an 8pt grid, and outputs design.md, a Tailwind v4 theme, and .cursorrules for AI coding tools.",
    stack: ["Next.js 16", "Fastify", "Playwright", "Drizzle", "PostgreSQL", "Tailwind CSS v4"],
    githubUrl: "https://github.com/timi-emmanuel/deslop",
  },
  {
    id: "padihold-escrow",
    category: "FINTECH & ESCROW",
    statusText: "IN DEVELOPMENT",
    statusType: "amber",
    title: "PadiHold",
    organization: "PadiHold // FinTech Platform",
    summary:
      "Escrow platform for online commerce in Nigeria, currently in development. Planned features include staged transaction states, an AI-assisted dispute flow, and Paystack settlement.",
    // TODO(verify): Add OpenAI, Paystack, or Zod only if confirmed in codebase
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Radix UI"],
  },
];

import { motion } from "framer-motion";

const experiences = [
  {
    date: "2025 — Present",
    role: "Frontend Developer (Freelance/Contract)",
    org: "Sportsbook Back Office (SBE Ecosystem)",
    bullets: [
      "Own the data layer of a production Next.js back office — architected the data-fetching layer (Axios), built the table system (shadcn/ui, TanStack Table), and optimized filtering/state management (Zustand) across high-density dashboards (player management, banking, bonus, risk, reporting) on an existing UI/auth scaffold.",
      "Rebuilt and extended a legacy Nuxt.js back office over 8 months — building commission/GGR (Gross Gaming Revenue) reporting with multi-tier payout logic, a player segmentation suite with campaign triggers, and a trust-threshold security module with audit logging.",
      "Diagnosed and resolved a production SSR hydration mismatch causing date-picker and table failures across reporting modules, standardizing client-only rendering for DOM-dependent components; also resolved CORS/API integration issues and impersonation-token security considerations in admin tooling.",
      "On a related back-office product line: corrected RTP and jackpot payout calculation logic that was producing invalid financial values, built an API caching layer eliminating redundant re-fetching, and led a Tailwind CSS v2→v3 migration removing ~9,800 lines of legacy CSS.",
      "Built a secure API key management system (one-time secret reveal, revocation) for partner accounts, implemented JWT expiration handling and protected-route architecture to prevent stale sessions, and built an end-to-end deposit/withdrawal transfer flow for a companion mobile web application.",
    ],
  },
  {
    date: "2024 — Present",
    role: "Junior Developer / Growth & Content",
    org: "QuiqOrder (J6 Business, Startup)",
    bullets: [
      "Contribute to frontend development of QuiqOrder's branded storefront platform for WhatsApp-based sellers, including UI development, Firebase integration, and the Shipbubble logistics integration for order fulfillment.",
      "Support lead generation and merchant activation through structured outreach and qualification campaigns.",
    ],
  },
  {
    date: "2023 — 2024",
    role: "Academic Unit Leader & Peer Mentor",
    org: "WCF FUTA Academic Unit · Leadership Role",
    bullets: [
      "Mentored and organized academic tutorials in engineering mathematics and technical computation for 100+ undergraduate students.",
      "Graduated First Class Honours with a 4.65/5.00 GPA in Mechanical Engineering.",
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="pane"
      id="experience"
    >
      {/* Pane Header */}
      <div className="pane-label">
        <span>03 — experience.log</span>
      </div>

      {/* Experience Rows */}
      <div className="divide-y divide-border text-left">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-8 grid sm:grid-cols-12 gap-4 sm:gap-6 items-start hover:bg-panel-2/30 transition-colors"
          >
            {/* Date Column (3 cols) */}
            <div className="sm:col-span-3 font-mono text-xs text-muted-2 pt-0.5">
              {exp.date}
            </div>

            {/* Content Column (9 cols) */}
            <div className="sm:col-span-9 space-y-2">
              <h3 className="font-mono text-base font-semibold text-text">
                {exp.role}
              </h3>
              <div className="font-mono text-xs text-accent">
                {exp.org}
              </div>

              <ul className="space-y-2 pt-2 text-xs sm:text-[13.5px] text-muted">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-accent font-mono shrink-0 pt-0.5">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;

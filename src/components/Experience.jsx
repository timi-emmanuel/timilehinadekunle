import { motion } from "framer-motion";

const experiences = [
  {
    date: "Nov 2024 — Present",
    role: "Founding Frontend Engineer",
    org: "QuiqOrder (Startup)",
    bullets: [
      "One of the founding engineers on an e-commerce and revenue-recovery platform for merchants. Live since March 2026 with 77 merchant accounts, 19 published storefronts, and ₦2.2M+ in merchant sales.",
      "Built the merchant dashboard (products, orders, sales metrics, subscription billing) and internal admin portal using Next.js App Router, TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query, React Hook Form, and Zod.",
      "Integrated Shipbubble logistics for automated delivery and order fulfilment. Contributed to the product rebuilds that led up to the March 2026 launch.",
    ],
  },
  {
    date: "Sep 2025 — Sep 2026",
    role: "Frontend Developer",
    org: "Sportsbook Back Office (SBE)",
    bullets: [
      "Owned the data layer of a Next.js B2B back office: Axios data fetching, shadcn/ui and TanStack Table, and Zustand state across high-density dashboards (player management, banking, bonus, risk, reporting) serving 6 betting businesses.",
      "Built the Aviata Partner Back Office; optimized API calls and added API-key management to the main back office. Built features on the legacy Nuxt/Vue back office and the Aviatax mobile web app.",
      "Led a Tailwind v2→v3 migration (~9,800 lines of legacy CSS removed). Resolved CORS and API integration issues, hardened impersonation-token handling, and fixed a Docker Compose healthcheck mismatch in production.",
    ],
  },
  {
    date: "Feb — Mar 2025",
    role: "Backend Developer (Contract)",
    org: "Matchkicks",
    bullets: [
      "Built a serverless image-generation service (Node.js, Sharp, AWS Lambda, Redis) that composites design layers into product mockups on demand as WebP.",
      "Replaced pre-rendered images stored in S3 with on-the-fly generation and Redis caching, cutting latency and S3 storage costs.",
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
            className="p-4 sm:p-8 grid sm:grid-cols-12 gap-4 sm:gap-6 items-start hover:bg-panel-2/40 transition-colors duration-200 group/row"
          >
            {/* Date Column (3 cols) */}
            <div className="sm:col-span-3 font-mono text-xs text-muted-2 pt-0.5 group-hover/row:text-accent transition-colors">
              {exp.date}
            </div>

            {/* Content Column (9 cols) */}
            <div className="sm:col-span-9 space-y-2">
              <h3 className="font-mono text-base font-semibold text-text group-hover/row:text-accent transition-colors">
                {exp.role}
              </h3>
              <div className="font-mono text-xs text-accent">
                {exp.org}
              </div>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-[13.5px] text-muted">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed group/bullet">
                    <span className="text-accent font-mono shrink-0 pt-0.5 transition-transform duration-150 group-hover/bullet:translate-x-1">
                      ›
                    </span>
                    <span className="transition-colors duration-150 group-hover/bullet:text-text">
                      {bullet}
                    </span>
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

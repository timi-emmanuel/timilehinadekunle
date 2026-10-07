import { motion } from "framer-motion";

const experiences = [
  {
    date: "2025 — Present",
    role: "Frontend Developer",
    org: "Sportsbook Back Office (SBE Ecosystem)",
    bullets: [
      "Architect and maintain data-heavy Next.js back office dashboards (TanStack Table, Zustand) for player management, banking, risk, and financial reporting.",
      "Engineered multi-tier commission/GGR calculation modules, API caching layers, and partner API key management systems (JWT auth, token revocation, RBAC).",
      "Resolved critical production SSR hydration and state synchronization bottlenecks, standardizing client-boundary patterns and modernizing legacy codebases.",
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

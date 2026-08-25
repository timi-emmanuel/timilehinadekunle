import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarBlank,
  CheckCircle,
  Buildings,
  Lightning,
  ShieldCheck,
  Code,
  RocketLaunch,
  ArrowUpRight
} from "@phosphor-icons/react";
import { fadeUpVariant as itemVariants, staggerContainerVariant as containerVariants } from "../utils/animations";

const experiences = [
  {
    role: "Frontend Developer (Freelance / Contract)",
    company: "Sportsbook Back Office (SBE Ecosystem)",
    location: "Remote",
    period: "2025 – Present",
    type: "Contract / Production",
    tagColor: "bg-neo-yellow",
    highlights: [
      "Built and maintained frontend features for a multi-tenant sportsbook back office serving 6+ betting clients in production, supporting 3,000+ betting markets and 100,000+ prematch events.",
      "Integrated REST APIs from Swagger documentation for real-time betting, cashier, and partner data across the Aviata Back Office, Aviata Partner BO, and Aviata Crash Shop applications.",
      "Resolved cross-origin (CORS) and API integration issues, and worked on security considerations around impersonation tokens in admin tooling.",
      "Diagnosed and fixed production issues, including a Docker Compose healthcheck port mismatch affecting service reliability; built Vue 3 component architecture for the Aviata Crash Shop cashier app handling real-time approval and transaction workflows.",
    ],
    tech: ["React", "TypeScript", "Vue 3", "Node.js", "REST APIs", "Swagger", "Docker", "JWT", "RBAC"],
  },
  {
    role: "Junior Developer / Growth & Content",
    company: "QuiqOrder (J6 Business, Startup)",
    location: "Lagos, Nigeria",
    period: "2024 – Present",
    type: "Startup / Hybrid",
    tagColor: "bg-neo-lime",
    highlights: [
      "Contribute to frontend development of QuiqOrder's branded storefront platform for WhatsApp-based sellers, including UI development and Firebase integration.",
      "Support lead generation and merchant activation through outreach campaigns, running a structured funnel and qualification process for prospective merchants.",
      "Built segmented outreach and follow-up content reflecting QuiqOrder's product positioning as the company scaled and refined its offering.",
    ],
    tech: ["React", "Firebase", "Tailwind CSS", "Node.js", "WhatsApp API", "Paystack"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative text-black dark:text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-20 bg-neo-bgAlt dark:bg-neo-darkSurface transition-colors duration-200 border-t-2 border-black dark:border-zinc-800"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="neo-badge bg-neo-pink text-white">
                <Briefcase size={14} weight="bold" />
                CAREER & TRACK RECORD
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-black dark:text-white">
              WORK{" "}
              <span className="bg-neo-lime text-black px-2 border-2 border-black shadow-neo-sm inline-block rotate-[-1deg]">
                EXPERIENCE
              </span>
            </h2>
          </div>
          <span className="font-mono text-xs font-bold text-zinc-500">
            PROVEN IMPACT IN PRODUCTION
          </span>
        </div>

        {/* Experience Timeline Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8 text-left"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="neo-box-lg bg-white dark:bg-neo-darkCard p-6 sm:p-8 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-black dark:border-zinc-700 mb-6">
                <div>
                  <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest block">
                    {exp.company}
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-black dark:text-white leading-tight">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className={`neo-badge ${exp.tagColor} text-black`}>
                    {exp.type}
                  </span>
                  <span className="neo-badge bg-zinc-100 dark:bg-neo-darkSurface text-black dark:text-white">
                    <CalendarBlank size={13} weight="bold" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="mb-6 space-y-3 font-sans text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                {exp.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      weight="bold"
                      className="text-neo-lime flex-shrink-0 mt-0.5"
                    />
                    <p className="leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              {/* Technologies Used Strip */}
              <div className="pt-4 border-t-2 border-dashed border-zinc-200 dark:border-zinc-700 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-zinc-500 mr-2">
                  Stack:
                </span>
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-100 dark:bg-neo-darkSurface border border-black dark:border-zinc-600 px-2 py-0.5 text-xs font-mono font-bold text-black dark:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;


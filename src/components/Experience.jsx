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
    number: "01",
    numberBg: "bg-neo-yellow text-black",
    role: "Frontend Developer (Freelance / Contract)",
    company: "Sportsbook Back Office (SBE Ecosystem)",
    location: "Remote",
    period: "2025 – Present",
    type: "CONTRACT / ENTERPRISE",
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
    number: "02",
    numberBg: "bg-neo-lime text-black",
    role: "Junior Developer / Growth & Content",
    company: "QuiqOrder (J6 Business, Startup)",
    location: "Lagos, Nigeria",
    period: "2024 – Present",
    type: "STARTUP / SAAS",
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
      className="relative text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-20 bg-neo-black dark:bg-[#0c0c0e] neo-terminal-grid transition-colors duration-200 border-t-2 border-black dark:border-zinc-800"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* High-Contrast Section Header (Ayooluwa & DevFest Inspired) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="neo-badge bg-white text-black dark:bg-neo-yellow dark:text-black">
                04 / TIMELINE
              </span>
              <span className="neo-badge bg-neo-pink text-white">
                <Briefcase size={14} weight="bold" />
                CAREER TRACK RECORD
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-white">
              WORK{" "}
              <span className="bg-neo-yellow text-black px-2 border-2 border-white shadow-neo-dark-white inline-block rotate-[-1deg]">
                EXPERIENCE_
              </span>
            </h2>
          </div>

          <div className="bg-neo-blue text-black border-2 border-white shadow-neo-dark-white px-3.5 py-1.5 font-mono text-xs font-black uppercase tracking-wider self-start sm:self-auto">
            ⚡ My professional journey & production roles.
          </div>
        </div>

        {/* Experience Timeline Cards with Numbered Left Boxes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-8 text-left"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: -2, y: -2, transition: { duration: 0.15 } }}
              className="bg-[#1A1A1E] dark:bg-[#16161A] border-2 border-white/80 dark:border-zinc-300 shadow-neo-dark-white p-6 sm:p-8 transition-[box-shadow,border-color] duration-150 relative transform-gpu"
            >
              {/* Top Row: Number Box + Role / Company + Badges */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b-2 border-zinc-700 mb-6">
                
                <div className="flex items-start gap-4">
                  {/* Chunky Number Box (Ayooluwa Style) */}
                  <div className={`neo-number-box ${exp.numberBg}`}>
                    {exp.number}
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block">
                      {exp.company}
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-tight mt-0.5">
                      {exp.role}
                    </h3>
                  </div>
                </div>

                {/* Right Badges */}
                <div className="flex flex-wrap items-center gap-2 self-start">
                  <span className={`neo-badge ${exp.tagColor} text-black border-white`}>
                    {exp.type}
                  </span>
                  <span className="neo-badge bg-zinc-800 text-zinc-200 border-zinc-500">
                    <CalendarBlank size={13} weight="bold" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="mb-6 space-y-3 font-sans text-sm sm:text-base text-zinc-300">
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
              <div className="pt-4 border-t-2 border-dashed border-zinc-700 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-zinc-400 mr-2">
                  Stack:
                </span>
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-800/90 border border-zinc-600 px-2.5 py-1 text-xs font-mono font-bold text-white shadow-neo-sm"
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

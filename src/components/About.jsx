import { motion } from "framer-motion";
import { GraduationCap, Code, Database, Wrench } from "@phosphor-icons/react";
import TechLogos from "./TechLogos";

const skillCategories = [
  {
    key: "Frontend & UI Engineering",
    icon: Code,
    tags: [
      "React.js",
      "Next.js",
      "Vue.js (Vue 3)",
      "Nuxt",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "TanStack Table",
      "AG Grid",
    ],
  },
  {
    key: "State, Data & Backend",
    icon: Database,
    tags: [
      "Zustand",
      "Axios",
      "Supabase (PostgreSQL, RLS, Auth)",
      "REST APIs",
      "Node.js",
      "Express.js",
      "SQL",
    ],
  },
  {
    key: "Architecture & Tooling",
    icon: Wrench,
    tags: [
      "Multi-Tenant Systems",
      "Role-Based Access Control (RBAC)",
      "Row-Level Security",
      "Git / GitHub",
      "Docker (multi-stage builds)",
      "Postman",
      "Vite",
      "Vercel",
      "Figma",
    ],
  },
];

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="pane"
      id="about"
    >
      {/* Pane Header */}
      <div className="pane-label">
        <span>01 — about.md</span>
        <span className="status-live font-mono text-[10px]">compiled</span>
      </div>

      {/* 2-Column Grid */}
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
        
        {/* Left Column: Story & System Mindset */}
        <div className="lg:col-span-6 p-4 sm:p-8 space-y-4">
          <p className="text-sm sm:text-[14.5px] text-muted leading-relaxed">
            I'm a <strong className="text-text font-medium">full-stack engineer</strong> in Lagos, Nigeria, with a <strong className="text-text font-medium">frontend focus</strong>. I came into software from Mechanical Engineering, and that background still shapes how I work: I look for the system behind a problem before I build the interface for it.
          </p>

          <p className="text-sm sm:text-[14.5px] text-muted leading-relaxed">
            For the past 3 years I've built data-heavy products for sportsbook and SaaS teams, including back offices and affiliate platforms used by <strong className="text-text font-medium">6+ betting clients</strong>. I'm equally at home in modern <strong className="text-text font-medium">Next.js</strong> codebases and legacy <strong className="text-text font-medium">Nuxt/Vue</strong> ones, turning messy business requirements into interfaces that stay fast and maintainable, with RBAC, auth, and reusable component systems underneath.
          </p>

          <p className="text-sm sm:text-[14.5px] text-muted leading-relaxed">
            I also go below the UI. On Jirella, a farm management ERP, I designed the <strong className="text-text font-medium">PostgreSQL schema</strong> myself, including a 10-role access model enforced with <strong className="text-text font-medium">Row-Level Security</strong> and idempotent migrations, then built the product on top of it.
          </p>

          {/* Academic Degree Badge with Subtle Micro-Interaction */}
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="mt-6 pt-4 border-t border-border flex items-start gap-3 group cursor-default"
          >
            <div className="p-2 border border-border bg-panel-2 text-accent shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:rotate-6">
              <GraduationCap size={18} weight="bold" />
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-text group-hover:text-accent transition-colors">
                B.Eng. Mechanical Engineering
              </div>
              <div className="font-mono text-xs text-muted mt-0.5">
                Federal University of Technology Akure (FUTA)
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Verified Tech Stack */}
        <div className="lg:col-span-6 divide-y divide-border">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="p-4 sm:p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] font-medium text-muted-2 uppercase tracking-wider mb-3">
                  <Icon size={14} weight="bold" className="text-accent" />
                  <span>{category.key}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.tags.map((tag, tIdx) => (
                    <motion.span
                      key={tIdx}
                      whileHover={{ y: -1.5, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 450, damping: 20 }}
                      className="tech-tag text-xs cursor-default select-none hover:border-accent/70 hover:text-accent transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Interactive Tech Logo Matrix with Hover Tooltips */}
          <div className="p-4 sm:p-6 bg-panel-2/30">
            <TechLogos />
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default About;

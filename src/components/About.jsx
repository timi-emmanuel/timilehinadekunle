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
            I'm a <strong className="text-text font-medium">Frontend Engineer</strong> based in Lagos, Nigeria. I transitioned from mechanical engineering into frontend engineering — bringing an analytical systems mindset to frontend UI designs and modern architecture.
          </p>

          <p className="text-sm sm:text-[14.5px] text-muted leading-relaxed">
            Comfortable working across both <strong className="text-text font-medium">legacy</strong> and <strong className="text-text font-medium">modern</strong> codebases (Nuxt/Vue and Next.js) — translating complex business requirements into software workflows, integrating REST APIs, implementing authentication and RBAC, and building reusable component systems. On Jirella Farm Management System, this extended into solo-architecting the PostgreSQL schema itself, including Row-Level Security (RLS) policies and idempotent migrations.
          </p>

          <p className="text-sm sm:text-[14.5px] text-muted leading-relaxed">
            Systems-oriented Mechanical Engineering background informs clean database design, Docker multi-stage builds, and reproducible SQL migrations.
          </p>

          {/* Academic Honours Badge */}
          <div className="mt-6 pt-4 border-t border-border flex items-start gap-3">
            <div className="p-2 border border-border bg-panel-2 text-accent shrink-0">
              <GraduationCap size={18} weight="bold" />
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-text">
                B.Eng. Mechanical Engineering — First Class Honours
              </div>
              <div className="font-mono text-xs text-muted mt-0.5">
                Federal University of Technology Akure (FUTA) • 4.65 / 5.00 GPA
              </div>
            </div>
          </div>
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
                    <span key={tIdx} className="tech-tag text-xs">
                      {tag}
                    </span>
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

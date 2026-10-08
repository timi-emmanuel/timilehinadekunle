import { motion } from "framer-motion";
import { GraduationCap, Code, Database, Wrench } from "@phosphor-icons/react";
import TechLogos from "./TechLogos";

const skillCategories = [
  {
    key: "Frontend & UI Engineering",
    icon: Code,
    tags: [
      "React",
      "Next.js",
      "Vue 3",
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
    key: "State, Data & APIs",
    icon: Database,
    tags: [
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "SWR",
      "Axios",
      "Zod",
      "React Hook Form",
      "REST APIs",
    ],
  },
  {
    key: "Backend, Cloud & Tooling",
    icon: Wrench,
    tags: [
      "Node.js",
      "Express",
      "Fastify",
      "Supabase (PostgreSQL, RLS, Auth)",
      "Drizzle ORM",
      "Redis",
      "AWS (Lambda, S3)",
      "Playwright",
      "Docker (multi-stage)",
      "Idempotent Migrations",
      "Vite",
      "Postman",
      "Git / GitHub",
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
        <span className="status-live font-mono text-xs">compiled</span>
      </div>

      {/* 2-Column Grid */}
      <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
        
        {/* Left Column: Story & System Mindset */}
        <div className="lg:col-span-6 p-4 sm:p-8 space-y-4">
          <p className="text-sm sm:text-[14.5px] text-muted leading-relaxed">
            I'm a full-stack engineer in Lagos, Nigeria, with 3 years of experience building React and Next.js products. I came into software from Mechanical Engineering, and that background still shapes how I work: I look for the system behind a problem before I build the interface for it.
          </p>

          <p className="text-sm sm:text-[14.5px] text-muted leading-relaxed">
            Most of my work is data-heavy: back offices and dashboards for sportsbook and SaaS platforms, and a live e-commerce platform where I'm one of the founding engineers. I'm comfortable in modern Next.js codebases and legacy Nuxt/Vue ones, turning messy requirements into interfaces that stay fast and maintainable.
          </p>

          <p className="text-sm sm:text-[14.5px] text-muted leading-relaxed">
            I own the layers below the UI too. On Jirella, a farm ERP I built solo, I designed the PostgreSQL schema, a 10-role access model enforced with Row-Level Security, and idempotent migrations, then built the product on top. I've also built a serverless image-generation service on AWS Lambda and a Playwright-based crawler API.
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
                B.Eng. Mechanical Engineering — First Class (4.65/5.00)
              </div>
              <div className="font-mono text-xs text-muted mt-0.5">
                Federal University of Technology, Akure (FUTA) • 2024
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
                <div className="flex items-center gap-2 font-mono text-xs font-medium text-muted-2 uppercase tracking-wider mb-3">
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

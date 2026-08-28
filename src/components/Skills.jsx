import { motion } from "framer-motion";
import {
  Code,
  Browser,
  Database,
  Wrench,
  Lightning,
  GitBranch,
  Terminal,
  Cpu,
  Stack,
  Sparkle
} from "@phosphor-icons/react";
import { fadeUpVariant as cardVariants, staggerContainerVariant as containerVariants } from "../utils/animations";

const skillSections = [
  {
    category: "Languages",
    icon: Code,
    color: "bg-neo-yellow",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "HTML5 / Semantic", level: "Expert" },
      { name: "CSS3 / Modern", level: "Expert" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    category: "Frontend & UI",
    icon: Browser,
    color: "bg-neo-lime",
    skills: [
      { name: "React.js", level: "Production" },
      { name: "Next.js (App Router)", level: "Production" },
      { name: "Vue.js (Vue 3)", level: "Production" },
      { name: "Nuxt.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Radix UI / shadcn", level: "Production" },
      { name: "Zustand State", level: "Advanced" },
    ],
  },
  {
    category: "Backend & Data",
    icon: Database,
    color: "bg-neo-pink",
    textColor: "text-white",
    skills: [
      { name: "Node.js", level: "Production" },
      { name: "Express.js", level: "Production" },
      { name: "Supabase (Postgres, RLS)", level: "Production" },
      { name: "REST APIs (Swagger)", level: "Production" },
      { name: "Firebase (Auth, DB)", level: "Advanced" },
      { name: "JWT & Role-Based Auth", level: "Production" },
    ],
  },
  {
    category: "Tools, DevOps & Media",
    icon: Wrench,
    color: "bg-neo-blue",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker (Basic / Compose)", level: "Proficient" },
      { name: "Vite / Webpack", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "AWS S3 & Sharp", level: "Production" },
      { name: "Figma (UI/UX)", level: "Proficient" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="w-full text-black dark:text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {skillSections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ x: -2, y: -2, transition: { duration: 0.15 } }}
              className="neo-box bg-white dark:bg-neo-darkCard p-5 text-left flex flex-col justify-between hover:shadow-neo-lg dark:hover:shadow-neo-dark transition-[box-shadow,border-color,background-color] duration-150 transform-gpu"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b-2 border-black dark:border-zinc-700 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 border-2 border-black ${section.color} ${
                        section.textColor || "text-black"
                      } flex items-center justify-center shadow-neo-sm`}
                    >
                      <Icon size={16} weight="bold" />
                    </span>
                    <h3 className="font-display font-black text-lg text-black dark:text-white">
                      {section.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] bg-zinc-100 dark:bg-neo-darkSurface border border-black dark:border-zinc-600 px-1.5 py-0.5 text-zinc-600 dark:text-zinc-300 font-bold">
                    {section.skills.length} SKILLS
                  </span>
                </div>

                {/* Skills Badges */}
                <ul className="flex flex-wrap gap-2">
                  {section.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="inline-flex items-center gap-1.5 bg-zinc-50 dark:bg-neo-darkSurface border-2 border-black dark:border-zinc-600 px-2.5 py-1 text-xs font-mono font-bold text-black dark:text-white shadow-neo-sm hover:bg-neo-yellow hover:text-black dark:hover:bg-neo-yellow dark:hover:text-black hover:-translate-y-0.5 transition-all duration-150"
                    >
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;


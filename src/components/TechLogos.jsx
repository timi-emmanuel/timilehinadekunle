import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVuedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiSupabase,
  SiGit,
  SiExpress,
  SiShadcnui,
} from "react-icons/si";

// Official vector logos for core technologies
const technologies = [
  {
    name: "React.js",
    category: "Frontend UI Library",
    icon: <SiReact className="w-5 h-5 text-[#61DAFB]" />,
  },
  {
    name: "Next.js",
    category: "Full-Stack React Framework",
    icon: <SiNextdotjs className="w-5 h-5 text-white" />,
  },
  {
    name: "TypeScript",
    category: "Type-Safe JavaScript",
    icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" />,
  },
  {
    name: "Vue.js",
    category: "Progressive Framework (Vue 3 / Nuxt)",
    icon: <SiVuedotjs className="w-5 h-5 text-[#41B883]" />,
  },
  {
    name: "Tailwind CSS",
    category: "Utility-First CSS & Design Systems",
    icon: <SiTailwindcss className="w-5 h-5 text-[#38BDF8]" />,
  },
  {
    name: "shadcn/ui",
    category: "Accessible Radix UI Component System",
    icon: <SiShadcnui className="w-5 h-5 text-white" />,
  },
  {
    name: "Node.js",
    category: "JavaScript Runtime Environment",
    icon: <SiNodedotjs className="w-5 h-5 text-[#5FA04E]" />,
  },
  {
    name: "Express.js",
    category: "Backend API Framework",
    icon: <SiExpress className="w-5 h-5 text-text" />,
  },
  {
    name: "PostgreSQL",
    category: "Relational DB & Row-Level Security",
    icon: <SiPostgresql className="w-5 h-5 text-[#336791]" />,
  },
  {
    name: "Supabase",
    category: "PostgreSQL, Auth & Real-Time BaaS",
    icon: <SiSupabase className="w-5 h-5 text-[#3ECF8E]" />,
  },
  {
    name: "Docker",
    category: "Multi-Stage Builds & Containers",
    icon: <SiDocker className="w-5 h-5 text-[#2496ED]" />,
  },
  {
    name: "Git",
    category: "Version Control & Branching Workflows",
    icon: <SiGit className="w-5 h-5 text-[#F05032]" />,
  },
];

const TechLogos = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="space-y-3 text-left">
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="text-muted-2 text-[11px] uppercase tracking-wider">
          Core Technologies // Stack Matrix
        </span>
        <span className="text-accent text-[10px] hidden sm:inline">hover for role</span>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            onMouseEnter={() => setHoveredTech(tech)}
            onMouseLeave={() => setHoveredTech(null)}
            className="relative p-3 border border-border bg-[#0E120F] flex items-center justify-center hover:border-accent/80 hover:bg-panel-2 transition-all cursor-crosshair group"
            title={`${tech.name} — ${tech.category}`}
          >
            <div className="transition-transform duration-200 group-hover:scale-110">
              {tech.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Hover Status Readout Bar */}
      <div className="h-7 px-3 border border-border/80 bg-panel-2/40 flex items-center justify-between font-mono text-[11px]">
        <AnimatePresence mode="wait">
          {hoveredTech ? (
            <motion.div
              key={hoveredTech.name}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 4 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-between w-full"
            >
              <span className="text-accent font-semibold">{hoveredTech.name}</span>
              <span className="text-muted text-[10.5px] truncate ml-2">
                {hoveredTech.category}
              </span>
            </motion.div>
          ) : (
            <span className="text-muted-2 text-[10px]">
              &gt; hover over any technology icon above to inspect category
            </span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TechLogos;

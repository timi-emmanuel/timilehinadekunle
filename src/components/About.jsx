import { motion } from "framer-motion";
import {
  GraduationCap,
  UsersThree,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Lightning,
  Sparkle,
  Compass
} from "@phosphor-icons/react";
import Skills from "./Skills";
import { fadeUpVariant as itemVariants, staggerContainerVariant as containerVariants } from "../utils/animations";

const principles = [
  {
    num: "01",
    title: "High Reliability & Speed",
    desc: "Production systems demand zero-error tolerance, caching strategies, and fast loading.",
    bg: "bg-neo-yellow",
  },
  {
    num: "02",
    title: "Clean & Secure Architecture",
    desc: "Strict Row-Level Security (RLS), impersonation token safety, and modular component hierarchy.",
    bg: "bg-neo-lime",
  },
  {
    num: "03",
    title: "Engineering Problem Solving",
    desc: "Mechanical engineering analytical rigor applied to complex full-stack web applications.",
    bg: "bg-neo-pink",
    textColor: "text-white",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative text-black dark:text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-20 bg-neo-bgAbout dark:bg-neo-darkBg neo-graph-grid transition-colors duration-200 border-t-2 border-black dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="neo-badge bg-black text-white dark:bg-white dark:text-black">
              02 / PHILOSOPHY
            </span>
            <span className="neo-badge bg-neo-lime text-black">
              <Compass size={14} weight="bold" />
              BACKGROUND & VALUES
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-black dark:text-white">
            ABOUT{" "}
            <span className="bg-neo-yellow text-black px-2 border-2 border-black shadow-neo-sm inline-block rotate-[1deg]">
              ME_
            </span>
          </h2>
        </div>

        {/* 2-Column Layout: Left Narrative & Education / Right Skills Matrix */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (6 cols): Story, Education & Leadership */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-6 text-left"
          >
            {/* Main Narrative Box */}
            <div className="neo-box bg-white dark:bg-neo-darkCard p-6 sm:p-7 space-y-4 text-zinc-700 dark:text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                I'm <strong className="text-black dark:text-white font-bold">Timilehin Adekunle</strong>, a Full-Stack & Frontend Engineer based in Nigeria with a strong foundation in mechanical engineering and distributed systems thinking.
              </p>
              <p>
                Transitioning from mechanical engineering (graduating with a <strong className="text-black dark:text-white font-bold bg-neo-yellow/50 dark:bg-neo-yellow/20 px-1 border border-black dark:border-zinc-500">4.65 / 5.00 First Class GPA</strong> from FUTA), I bring deep mathematical, logical, and systems-level problem solving to software engineering.
              </p>
              <p>
                In production, I have built and maintained multi-tenant frontend features for the <strong className="text-black dark:text-white font-bold">SBE Sportsbook Back Office Ecosystem</strong> (serving 6+ clients, 3,000+ betting markets, and 100,000+ prematch events), engineered real-time cashier architecture in Vue 3, architected FinTech escrow platforms (PadiHold), and designed robust PostgreSQL schemas with Supabase RLS.
              </p>
            </div>

            {/* Education & Leadership Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              {/* Education Card */}
              <div className="bg-neo-yellow dark:bg-neo-darkCard border-2 border-black dark:border-zinc-200 p-5 text-black dark:text-white shadow-neo dark:shadow-neo-dark">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap size={22} weight="bold" className="text-black dark:text-neo-yellow" />
                  <span className="font-mono text-xs font-black uppercase text-black dark:text-white">Education</span>
                </div>
                <h4 className="font-display font-black text-base leading-tight text-black dark:text-white">
                  B.Eng. Mechanical Engineering
                </h4>
                <p className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-300 mt-1">
                  FUTA • 4.65 / 5.00 GPA
                </p>
                <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-1">
                  First Class Distinction (Graduated 2024)
                </p>
              </div>

              {/* Leadership Card */}
              <div className="bg-neo-lime dark:bg-neo-darkCard border-2 border-black dark:border-zinc-200 p-5 text-black dark:text-white shadow-neo dark:shadow-neo-dark">
                <div className="flex items-center gap-2 mb-2">
                  <UsersThree size={22} weight="bold" className="text-black dark:text-neo-lime" />
                  <span className="font-mono text-xs font-black uppercase text-black dark:text-white">Leadership</span>
                </div>
                <h4 className="font-display font-black text-base leading-tight text-black dark:text-white">
                  Academic Unit Leader
                </h4>
                <p className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-300 mt-1">
                  WCF FUTA • 100+ Students
                </p>
                <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-1">
                  Mentoring, tutorials & academic planning
                </p>
              </div>

            </div>

            {/* Engineering Principles */}
            <div className="space-y-3 pt-2">
              <h4 className="font-display font-black text-base uppercase tracking-wider text-black dark:text-white">
                Engineering Values:
              </h4>
              <div className="grid gap-3">
                {principles.map((p, idx) => (
                  <div
                    key={idx}
                    className="neo-box bg-white dark:bg-neo-darkCard p-4 flex items-start gap-4"
                  >
                    <span
                      className={`font-mono font-black text-xs px-2 py-1 border-2 border-black ${p.bg} text-black shadow-neo-sm flex-shrink-0`}
                    >
                      {p.num}
                    </span>
                    <div>
                      <h5 className="font-display font-black text-sm text-black dark:text-white">
                        {p.title}
                      </h5>
                      <p className="font-sans text-xs text-zinc-600 dark:text-zinc-300 mt-0.5">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column (6 cols): Skills & Tech Stack Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between pb-2 mb-1">
              <div className="flex items-center gap-2">
                <span className="neo-badge bg-neo-pink text-white">
                  <Cpu size={14} weight="bold" />
                  TECHNICAL SKILLS
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-zinc-500">
                VERIFIED IN PRODUCTION
              </span>
            </div>

            <Skills />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;


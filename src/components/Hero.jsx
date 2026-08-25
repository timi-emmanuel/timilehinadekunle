import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  FilePdf,
  PaperPlaneTilt,
  Copy,
  Check,
  Lightning,
  TerminalWindow,
  Code,
  ShieldCheck,
  CheckCircle,
  Sparkle,
  ArrowUpRight
} from "@phosphor-icons/react";
import { fadeUpVariant as itemVariants, staggerContainerVariant as containerVariants } from "../utils/animations";
import heroImage from "../assets/hero-image-optimized.jpg";
import heroImage768 from "../assets/hero-image-768.jpg";

const stats = [
  { label: "Production Clients", value: "6+", sub: "Sportsbook Back Office" },
  { label: "Prematch Events", value: "100k+", sub: "Handled in Production" },
  { label: "Betting Markets", value: "3,000+", sub: "Real-time feeds" },
  { label: "Academic GPA", value: "4.65", sub: "First Class / Distinction" },
];

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = "adekemmanuel17@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 90;
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative text-black dark:text-white pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 xl:px-20 neo-grid-bg transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
        >
          <div className="neo-badge bg-neo-yellow text-black">
            <Lightning size={14} weight="bold" />
            <span>FULL-STACK & FRONTEND ENGINEER</span>
          </div>
          <div className="neo-badge bg-neo-lime text-black">
            <ShieldCheck size={14} weight="bold" />
            <span>PRODUCTION SPORTSBOOK EXPERIENCE</span>
          </div>
          <div className="neo-badge bg-white dark:bg-neo-darkSurface text-black dark:text-white hidden sm:inline-flex">
            <span>LAGOS / NIGERIA • REMOTE READY</span>
          </div>
        </motion.div>

        {/* Main Grid: Left Pitch / Right Terminal & Photo Card */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (7 cols): Hero Pitch & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08]"
            >
              Hi, I'm{" "}
              <span className="bg-neo-yellow text-black px-2 py-0.5 border-2 border-black shadow-neo-sm inline-block rotate-[-1deg]">
                Timilehin
              </span>
              <br />
              Building{" "}
              <span className="bg-neo-lime text-black px-2 py-0.5 border-2 border-black shadow-neo-sm inline-block mx-1 rotate-[1deg]">
                High-Scale
              </span>{" "}
              Sportsbook, FinTech & Web Platforms.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans"
            >
              Full-Stack Developer with production experience building high-traffic, real-money betting back-offices, escrow systems, and AI SaaS. Self-taught engineer with a <strong className="text-black dark:text-white font-bold underline decoration-neo-yellow decoration-4">Mechanical Engineering background (4.65/5.00 GPA)</strong>. Specialized in React, Next.js, Vue 3, TypeScript, Supabase, and Node.js.
            </motion.p>

            {/* Quick CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="neo-btn-primary"
              >
                <ArrowDown size={18} weight="bold" />
                <span>EXPLORE WORK</span>
              </button>

              <a
                href="/frontendResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn-secondary"
              >
                <FilePdf size={18} weight="bold" />
                <span>RESUME (PDF)</span>
              </a>

              <button
                onClick={() => handleScrollTo("contact")}
                className="neo-btn-lime"
              >
                <PaperPlaneTilt size={18} weight="bold" />
                <span>LET'S TALK</span>
              </button>
            </motion.div>

            {/* Email Quick-Copy Pill */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 pt-1"
            >
              <div className="flex items-center bg-white dark:bg-neo-darkCard border-2 border-black dark:border-zinc-300 p-1 pl-3 shadow-neo-sm">
                <span className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mr-3">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 bg-neo-yellow hover:bg-neo-yellowHover text-black border-2 border-black px-2.5 py-1 text-xs font-mono font-bold transition-all active:translate-x-0.5 active:translate-y-0.5"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} weight="bold" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} weight="bold" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Key Metrics Strip (Mobile / Tablet) */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-neo-darkCard border-2 border-black dark:border-zinc-200 p-3 shadow-neo-sm text-left hover:-translate-y-0.5 transition-transform"
                >
                  <div className="font-display font-black text-2xl sm:text-3xl text-black dark:text-white">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (5 cols): Neo Terminal & Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Retro System Specs Terminal */}
            <div className="neo-box-lg bg-white dark:bg-neo-darkCard overflow-hidden">
              
              {/* Terminal Header */}
              <div className="bg-black text-white px-4 py-2.5 flex items-center justify-between border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-300 font-bold">
                  <TerminalWindow size={15} weight="bold" />
                  <span>timi@production-box:~$</span>
                </div>
                <span className="w-4" />
              </div>

              {/* Terminal Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-left space-y-3 bg-[#18181B] text-[#F4F4F5]">
                <div className="flex items-center justify-between text-neo-yellow pb-2 border-b border-zinc-700">
                  <span className="font-bold">// SYSTEM ARCHITECTURE</span>
                  <span className="text-[10px] bg-zinc-800 text-neo-lime px-2 py-0.5 border border-zinc-600 font-bold">
                    ONLINE
                  </span>
                </div>

                <div className="space-y-1.5 text-zinc-300">
                  <p>
                    <span className="text-neo-pink font-bold">● Ecosystem:</span>{" "}
                    <span className="text-white font-medium">SBE Sportsbook & Partner BO</span>
                  </p>
                  <p>
                    <span className="text-neo-lime font-bold">● Core Stack:</span>{" "}
                    <span className="text-white font-medium">React, Next.js, Vue 3, TS, Node</span>
                  </p>
                  <p>
                    <span className="text-neo-blue font-bold">● Database:</span>{" "}
                    <span className="text-white font-medium">Supabase (PostgreSQL, RLS, Auth)</span>
                  </p>
                  <p>
                    <span className="text-neo-yellow font-bold">● Specialization:</span>{" "}
                    <span className="text-white font-medium">Dashboards, Real-Time APIS, FinTech</span>
                  </p>
                  <p>
                    <span className="text-zinc-400 font-bold">● Education:</span>{" "}
                    <span className="text-white font-medium">B.Eng Mech Eng (FUTA, 4.65/5.00)</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-700 flex items-center gap-2 text-neo-lime text-xs">
                  <span className="animate-pulse">▶</span>
                  <span>ready_for_dispatch: full-stack_challenges</span>
                </div>
              </div>
            </div>

            {/* Profile Snapshot Card with Sticker Badges */}
            <div className="neo-box bg-neo-yellow p-4 sm:p-5 text-black relative">
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={heroImage}
                    srcSet={`${heroImage768} 768w, ${heroImage} 1024w`}
                    alt="Timilehin Adekunle"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-black shadow-neo-sm"
                    loading="eager"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-neo-lime text-black border-2 border-black p-1 shadow-neo-sm">
                    <Sparkle size={16} weight="bold" />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <span className="font-mono text-xs font-black uppercase tracking-wider text-zinc-800">
                    Oluwatimilehin Adekunle
                  </span>
                  <span className="font-display font-black text-lg sm:text-xl leading-tight">
                    Senior-Grade Execution.
                  </span>
                  <p className="text-xs text-zinc-800 font-sans mt-1">
                    Delivering clean architecture, maintainable components, and reliable production tooling.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;



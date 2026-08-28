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
  ArrowUpRight,
  Broadcast
} from "@phosphor-icons/react";
import { fadeUpVariant as itemVariants, staggerContainerVariant as containerVariants } from "../utils/animations";
import heroImage from "../assets/hero-image-optimized.jpg";
import heroImage768 from "../assets/hero-image-768.jpg";

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
      className="relative text-black dark:text-white pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 xl:px-20 bg-neo-bgHero dark:bg-neo-darkBg neo-dot-bg transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
        >
          <div className="neo-badge bg-black text-white dark:bg-white dark:text-black">
            <span>01 / PROFILE</span>
          </div>
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

        {/* Main Grid: Left Pitch / Right Status.Log Terminal & Photo */}
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
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08] text-left"
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
              className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans text-left"
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
                  className="flex items-center gap-1 bg-neo-yellow hover:bg-neo-yellowHover text-black border-2 border-black px-2.5 py-1 text-xs font-mono font-bold transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
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
          </motion.div>

          {/* Right Column (5 cols): STATUS.LOG Terminal Widget & Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-5 text-left"
          >
            {/* STATUS.LOG Terminal Widget (Ayooluwa & DevFest Inspired) */}
            <div className="neo-box-lg bg-white dark:bg-neo-darkCard overflow-hidden relative">
              
              {/* Pinned Corner Milestone Ribbon */}
              <div className="absolute top-0 right-0 bg-neo-pink text-white font-mono text-[10px] font-black px-2.5 py-0.5 border-b-2 border-l-2 border-black shadow-neo-sm z-10">
                ACTIVE_DEPLOYMENT
              </div>

              {/* Terminal Header */}
              <div className="bg-black text-white px-4 py-2.5 flex items-center justify-between border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-300">
                  <TerminalWindow size={15} weight="bold" />
                  <span>STATUS.LOG</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-neo-lime font-bold">
                  <span className="w-2 h-2 rounded-full bg-neo-lime animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Status Key-Value Rows */}
              <div className="p-4 sm:p-5 font-mono text-xs space-y-3 bg-[#18181B] text-[#F4F4F5]">
                {/* Row 1: Current Focus */}
                <div className="border-2 border-zinc-700 bg-zinc-900/90 p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shadow-neo-sm">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                    CURRENT_FOCUS
                  </span>
                  <span className="bg-neo-yellow text-black font-black text-[11px] px-2 py-0.5 border border-black inline-block text-center truncate">
                    SPORTSBOOK & ENTERPRISE UI
                  </span>
                </div>

                {/* Row 2: Core Stack */}
                <div className="border-2 border-zinc-700 bg-zinc-900/90 p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shadow-neo-sm">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                    CORE_STACK
                  </span>
                  <span className="bg-neo-lime text-black font-black text-[11px] px-2 py-0.5 border border-black inline-block text-center truncate">
                    REACT • NEXT.JS • VUE 3 • TS
                  </span>
                </div>

                {/* Row 3: Location */}
                <div className="border-2 border-zinc-700 bg-zinc-900/90 p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shadow-neo-sm">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                    LOCATION
                  </span>
                  <span className="bg-neo-blue text-black font-black text-[11px] px-2 py-0.5 border border-black inline-block text-center truncate">
                    LAGOS, NIGERIA (REMOTE)
                  </span>
                </div>

                {/* Row 4: Availability */}
                <div className="border-2 border-zinc-700 bg-zinc-900/90 p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shadow-neo-sm">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                    AVAILABILITY
                  </span>
                  <span className="bg-neo-limeAlt text-black font-black text-[11px] px-2 py-0.5 border border-black inline-flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                    <span>OPEN FOR ROLES</span>
                  </span>
                </div>

                {/* Quick Action Button */}
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="w-full bg-neo-yellow hover:bg-neo-yellowHover text-black border-2 border-black py-2.5 font-display font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-neo-sm hover:shadow-neo transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer mt-2"
                >
                  <span>INITIATE_CONTACT</span>
                  <ArrowUpRight size={16} weight="bold" />
                </button>
              </div>
            </div>

            {/* Profile Snapshot Card with Sticker Badges */}
            <div className="bg-neo-yellow dark:bg-neo-darkCard border-2 border-black dark:border-zinc-200 shadow-neo dark:shadow-neo-dark p-4 sm:p-5 text-black dark:text-white relative">
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={heroImage}
                    srcSet={`${heroImage768} 768w, ${heroImage} 1024w`}
                    alt="Timilehin Adekunle"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-black dark:border-zinc-300 shadow-neo-sm"
                    loading="eager"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-neo-lime text-black border-2 border-black p-1 shadow-neo-sm">
                    <Sparkle size={16} weight="bold" />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <span className="font-mono text-xs font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-300">
                    Oluwatimilehin Adekunle
                  </span>
                  <span className="font-display font-black text-lg sm:text-xl leading-tight text-black dark:text-white">
                    Senior-Grade Execution.
                  </span>
                  <p className="text-xs text-zinc-800 dark:text-zinc-300 font-sans mt-1">
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

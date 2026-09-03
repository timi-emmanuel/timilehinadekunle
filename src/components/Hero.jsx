import { motion } from "framer-motion";
import { ArrowRight, DownloadSimple, Terminal, ShieldCheck } from "@phosphor-icons/react";
import HeroImg from "../assets/hero-image-optimized.jpg";

const stats = [
  { num: "6", label: "Prod. Clients", note: "Sportsbook Back Office" },
  { num: "5", label: "SaaS Merchants", note: "QuiqOrder Commerce" },
  { num: "10", label: "Staff Roles (RBAC)", note: "Jirella Farm ERP" },
  { num: "4.65", label: "GPA / 5.00", note: "First Class Distinction" },
];

const Hero = () => {
  return (
    <section className="pane hero" id="hero">
      <div className="p-4 sm:p-8 lg:p-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Intro & Navigation (8 cols on lg) */}
          <div className="lg:col-span-8 text-left">
            {/* Eyebrow CLI Prompt */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-xs text-accent mb-4 tracking-wide flex items-center gap-1.5"
            >
              <span className="text-muted-2">$</span>
              <span>whoami --role</span>
            </motion.div>

            {/* H1 Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="font-mono text-[26px] sm:text-4xl lg:text-[42px] font-semibold text-text leading-tight tracking-tight mb-5"
            >
              Timilehin Adekunle<br />
              <span className="text-accent">Frontend Engineer</span>
              <span className="terminal-cursor" aria-hidden="true" />
            </motion.h1>

            {/* Subtitle / Positioning Prose */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="font-sans text-sm sm:text-base text-muted max-w-2xl leading-relaxed mb-8"
            >
              Frontend Engineer not shy of working within backend systems, possessing professional experience across a multi-tenant sportsbook back office serving <strong className="text-text font-medium">6 betting clients</strong>, a SaaS commerce platform serving <strong className="text-text font-medium">5 businesses</strong>, and a solo-architected farm management ERP. Transitioned from Mechanical Engineering (<strong className="text-text font-medium">4.65/5.00, First Class Distinction</strong>) with systems-oriented strength in PostgreSQL, Row-Level Security, and RBAC.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#projects" className="btn-terminal btn-terminal-primary">
                <ArrowRight size={15} weight="bold" />
                <span>view_work.sh</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal btn-terminal-ghost"
              >
                <DownloadSimple size={15} weight="bold" />
                <span>resume.pdf</span>
              </a>
              <a href="#contact" className="btn-terminal btn-terminal-ghost">
                <Terminal size={15} weight="bold" />
                <span>$ contact --me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Operator Photo Card (4 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative p-3 border border-border bg-[#0E120F] max-w-[260px] sm:max-w-[280px] w-full select-none group shadow-lg">

              {/* Cross-Dot Texture */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#F2B84B_1px,transparent_1px)] [background-size:10px_10px]"
                aria-hidden="true"
              />

              {/* Photo Frame Header */}
              <div className="relative z-10 flex items-center justify-between pb-2 border-b border-border/80 font-mono text-[10px] text-muted mb-2.5">
                <span className="flex items-center gap-1 text-muted-2">
                  <ShieldCheck size={13} className="text-accent" />
                  <span>OPERATOR_ID</span>
                </span>
                <span className="status-live text-[9px] uppercase tracking-wider">active</span>
              </div>

              {/* Photo Itself */}
              <div className="relative z-10 border border-border/80 bg-black aspect-[4/5] overflow-hidden">
                <img
                  src={HeroImg}
                  alt="Timilehin Adekunle"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
                  loading="eager"
                />
              </div>

              {/* Photo Frame Footer */}
              <div className="relative z-10 pt-2.5 mt-2.5 border-t border-border/80 font-mono text-[10px] text-left space-y-0.5">
                <div className="text-text font-medium flex justify-between">
                  <span>ADEKUNLE, O. E.</span>
                  <span className="text-accent">0xADEK</span>
                </div>
                <div className="text-muted-2 text-[9.5px]">LAGOS, NG • UTC+1</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 4-Cell Metric Readout Strip from CV */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-border bg-panel-2/50">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-3.5 sm:p-5 flex flex-col justify-center text-left ${
              idx % 2 === 1 ? "border-l border-border" : ""
            } ${idx >= 2 ? "border-t border-border sm:border-t-0" : ""} ${
              idx > 0 ? "sm:border-l sm:border-border" : ""
            }`}
          >
            <div className="font-mono text-xl sm:text-2xl font-semibold text-accent leading-none">
              {stat.num}
            </div>
            <div className="font-mono text-[11px] font-medium text-muted uppercase tracking-wider mt-1.5">
              {stat.label}
            </div>
            <div className="font-mono text-[10px] text-muted-2 mt-0.5 hidden sm:block truncate">
              {stat.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

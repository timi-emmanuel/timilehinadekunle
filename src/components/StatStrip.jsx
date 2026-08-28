import { motion } from "framer-motion";
import { Lightning, ShieldCheck, Database, GraduationCap } from "@phosphor-icons/react";

const stats = [
  {
    num: "6+",
    color: "text-neo-pink dark:text-neo-pinkAlt",
    badgeBg: "bg-neo-pink text-white",
    icon: ShieldCheck,
    title: "PRODUCTION CLIENTS",
    subtitle: "Enterprise Sportsbook Back Office",
  },
  {
    num: "100k+",
    color: "text-neo-blue dark:text-neo-blueAlt",
    badgeBg: "bg-neo-blue text-black",
    icon: Database,
    title: "PREMATCH EVENTS",
    subtitle: "Real-Time Feeds & Markets",
  },
  {
    num: "3,000+",
    color: "text-neo-lime dark:text-neo-limeAlt",
    badgeBg: "bg-neo-lime text-black",
    icon: Lightning,
    title: "BETTING MARKETS",
    subtitle: "Cashier & Betting Operations",
  },
  {
    num: "4.65",
    color: "text-neo-yellow dark:text-neo-yellow",
    badgeBg: "bg-neo-yellow text-black",
    icon: GraduationCap,
    title: "DISTINCTION GPA",
    subtitle: "B.Eng Mech Engineering (FUTA)",
  },
];

const StatStrip = () => {
  return (
    <section className="w-full bg-white dark:bg-neo-darkCard border-y-2 border-black dark:border-zinc-700 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          const isLastCol = idx === stats.length - 1;
          const isEvenOnMobile = idx % 2 === 1;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.06 }}
              className={`p-6 sm:p-7 flex flex-col justify-between text-left transition-colors duration-150 transform-gpu group hover:bg-zinc-50 dark:hover:bg-neo-darkSurface/60 ${
                !isLastCol ? "lg:border-r-2 border-black dark:border-zinc-700" : ""
              } ${
                idx < 2 ? "border-b-2 sm:border-b-2 lg:border-b-0 border-black dark:border-zinc-700" : ""
              } ${
                idx === 2 ? "border-b-2 sm:border-b-0 border-black dark:border-zinc-700" : ""
              } ${
                !isEvenOnMobile ? "sm:border-r-2 lg:border-r-2 border-black dark:border-zinc-700" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-black tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                  {stat.title}
                </span>
                <span className={`p-1 border border-black ${stat.badgeBg} shadow-neo-sm inline-flex items-center justify-center`}>
                  <Icon size={14} weight="bold" />
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className={`font-display font-black text-4xl sm:text-5xl lg:text-5xl tracking-tight leading-none ${stat.color} group-hover:scale-105 transition-transform duration-200 inline-block`}>
                  {stat.num}
                </span>
              </div>

              <p className="font-mono text-xs font-semibold text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-1">
                {stat.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatStrip;

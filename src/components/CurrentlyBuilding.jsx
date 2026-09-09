import { motion } from "framer-motion";
import { Broadcast, GitCommit, ClockAfternoon } from "@phosphor-icons/react";
import { radarMetadata, radarItems } from "../data/currentlyBuilding";

const statusStyles = {
  live: {
    badge: "border-live text-live bg-[#0A0D0B]",
    dot: "bg-live shadow-[0_0_8px_#4ADE80]",
  },
  amber: {
    badge: "border-accent text-accent bg-[#0A0D0B]",
    dot: "bg-accent shadow-[0_0_8px_rgba(242,184,75,0.8)]",
  },
  cyan: {
    badge: "border-[#38BDF8] text-[#38BDF8] bg-[#0A0D0B]",
    dot: "bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]",
  },
  purple: {
    badge: "border-[#C084FC] text-[#C084FC] bg-[#0A0D0B]",
    dot: "bg-[#C084FC] shadow-[0_0_8px_#C084FC]",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 25,
    },
  },
};

const CurrentlyBuilding = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="pane"
      id="radar"
    >
      {/* Pane Header */}
      <div className="pane-label">
        <div className="flex items-center gap-2">
          <Broadcast size={13} className="text-accent" />
          <span>04 — radar.now</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-live animate-pulse" />
          <span>telemetry active</span>
        </div>
      </div>

      {/* Telemetry Status Ribbon */}
      <div className="px-4 py-3 sm:px-6 sm:py-3.5 border-b border-border bg-panel-2/30 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-2">
        <div className="flex items-center gap-2 text-text text-[11px] truncate">
          <span className="text-accent">$</span>
          <span>sys.radar --stream=latest</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] sm:text-[11px]">
          <span className="hidden sm:flex items-center gap-1 text-muted">
            <ClockAfternoon size={12} className="text-accent" />
            <span>Updated: {radarMetadata.lastUpdated}</span>
          </span>
          <span className="text-muted-2">•</span>
          <span className="text-accent">{radarMetadata.location}</span>
        </div>
      </div>

      {/* Grid of Radar Items (2-Col on Desktop) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        className="grid md:grid-cols-2 text-left"
      >
        {radarItems.map((item, idx) => {
          const style = statusStyles[item.statusType] || statusStyles.amber;
          const isLeftCol = idx % 2 === 0;
          const isLastItem = idx === radarItems.length - 1;
          const isSecondToLast = idx === radarItems.length - 2;
          const isLastRowDesktop = isLastItem || (isSecondToLast && radarItems.length % 2 === 0);

          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ backgroundColor: "rgba(22, 27, 23, 0.4)" }}
              className={`p-5 sm:p-7 space-y-3.5 transition-colors duration-200 group/radar ${
                isLeftCol ? "md:border-r md:border-border" : ""
              } ${
                !isLastItem ? "border-b border-border" : ""
              } ${
                isLastRowDesktop ? "md:border-b-0" : "md:border-b md:border-border"
              }`}
            >
              {/* Category & Live Badge */}
              <div className="flex items-center justify-between gap-2 font-mono text-[10.5px]">
                <span className="text-muted-2 uppercase tracking-wider flex items-center gap-1.5">
                  <GitCommit size={12} className="text-accent group-hover/radar:rotate-45 transition-transform duration-200" />
                  <span>{item.category}</span>
                </span>
                <span className={`px-2 py-0.5 border font-mono text-[9px] uppercase tracking-wider flex items-center gap-1.5 ${style.badge}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                  <span>{item.statusText}</span>
                </span>
              </div>

              {/* Title & Context */}
              <div className="space-y-1">
                <h3 className="font-mono text-sm sm:text-base font-semibold text-text group-hover/radar:text-accent transition-colors">
                  {item.title}
                </h3>
                <div className="font-mono text-xs text-muted-2">
                  {item.organization}
                </div>
              </div>

              {/* Summary Description */}
              <p className="font-sans text-xs sm:text-[13px] text-muted leading-relaxed">
                {item.summary}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="tech-tag text-[10.5px] py-0.5 px-2 select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Radar Footer Cadence Note */}
      <div className="p-3 sm:px-6 sm:py-2.5 border-t border-border bg-panel-2/20 flex items-center justify-between font-mono text-[10.5px] text-muted-2">
        <span className="truncate">cadence: {radarMetadata.cadence}</span>
        <span className="text-accent hidden sm:inline">sync: OK</span>
      </div>
    </motion.section>
  );
};

export default CurrentlyBuilding;

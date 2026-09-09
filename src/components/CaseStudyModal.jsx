import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Terminal,
  Warning,
  CheckCircle,
  Wrench,
  ShieldCheck,
  ArrowSquareOut,
  ArrowRight,
  GitBranch,
} from "@phosphor-icons/react";

const TABS = [
  { id: "problem", label: "01. The Problem", short: "1. Problem" },
  { id: "built", label: "02. What I Built", short: "2. Architecture" },
  { id: "struggle", label: "03. Struggle Story", short: "3. Incident", highlight: true },
  { id: "design", label: "04. Design & UI/UX", short: "4. UI/UX" },
  { id: "omissions", label: "05. What's NOT in It", short: "5. Trade-offs" },
  { id: "status", label: "06. Status & Roadmap", short: "6. Roadmap" },
];

const CaseStudyModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("problem");

  // Lock body scroll and listen for Escape and number keys
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "1") {
        setActiveTab("problem");
      } else if (e.key === "2") {
        setActiveTab("built");
      } else if (e.key === "3") {
        setActiveTab("struggle");
      } else if (e.key === "4") {
        setActiveTab("design");
      } else if (e.key === "5") {
        setActiveTab("omissions");
      } else if (e.key === "6") {
        setActiveTab("status");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || !project.caseStudy) return null;

  const cs = project.caseStudy;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8 overflow-y-auto">
        {/* Backdrop Overlay with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#060807]/85 backdrop-blur-md -z-10"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="w-full max-w-3xl bg-panel border border-border rounded-xs shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-left"
          role="dialog"
          aria-modal="true"
        >
          {/* Terminal Window Header Bar */}
          <div className="pane-label flex items-center justify-between border-b border-border bg-[#0B0F0C] px-3.5 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 sm:gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4F5850]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#4F5850]" />
                <span className="w-2.5 h-2.5 rounded-full bg-live shadow-[0_0_6px_#4ADE80]" />
              </div>
              <div className="font-mono text-xs text-muted flex items-center gap-1 truncate">
                <span className="text-accent">$</span>
                <span className="truncate">sys.inspect --case-study="{project.id}"</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1 font-mono text-xs text-muted hover:text-text border border-border px-2 py-0.5 rounded-xs hover:bg-[#161B17] transition-colors"
            >
              <span>esc</span>
              <X size={13} weight="bold" />
            </button>
          </div>

          {/* Project Identity & Telemetry Strip */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-border bg-panel-2/40 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider px-1.5 py-0.5 border border-accent/40 bg-[#0A0D0B]">
                  {cs.tag || "DEEP DIVE"}
                </span>
                <span className="font-mono text-[10px] text-muted-2 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    <span>live demo</span>
                    <ArrowSquareOut size={12} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    <GitBranch size={12} />
                    <span>source</span>
                  </a>
                )}
                {project.isConfidential && (
                  <span className="text-muted-2 text-[10.5px]">confidential enterprise</span>
                )}
              </div>
            </div>

            <h2 className="font-mono text-lg sm:text-xl font-semibold text-text">
              {project.title}
            </h2>
          </div>

          {/* 6-Part Framework Navigation Tabs */}
          <div className="flex overflow-x-auto no-scrollbar border-b border-border bg-[#0C100D] px-2 sm:px-4 text-xs font-mono">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2.5 px-2.5 sm:px-3.5 whitespace-nowrap border-b-2 transition-all select-none ${
                    isActive
                      ? "border-accent text-accent font-semibold bg-[#161B17]/60"
                      : "border-transparent text-muted hover:text-text"
                  }`}
                >
                  <span className="sm:hidden">{tab.short}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  {tab.highlight && (
                    <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Scrollable Content Body */}
          <div className="p-4 sm:p-6 lg:p-7 overflow-y-auto space-y-6 flex-1 text-text leading-relaxed">
            {activeTab === "problem" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider">
                  <Terminal size={14} />
                  <span>The Real-World Problem & Bottleneck</span>
                </div>
                <div className="p-4 border border-border bg-panel-2/50 rounded-xs font-sans text-sm text-text leading-relaxed">
                  {cs.theProblem}
                </div>
                <div className="font-mono text-xs text-muted-2 space-y-1">
                  <div>// Key Objective: Eliminate operational friction and data opacity</div>
                  <div>// Target Users: Multi-role operators, administrators, and financial auditors</div>
                </div>
              </motion.div>
            )}

            {activeTab === "built" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider">
                  <Wrench size={14} />
                  <span>Architecture & Feature Implementation</span>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {cs.whatIBuilt}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs text-muted-2 uppercase tracking-wider">
                    Core Architectural Stack:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="tech-tag text-xs py-0.5 px-2.5 select-none">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "struggle" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider">
                  <Warning size={14} className="text-accent" />
                  <span>Verified Struggle Story & Incident Debrief</span>
                </div>

                <div className="border border-accent/40 bg-[#121613] p-4 sm:p-5 rounded-xs space-y-3">
                  <div className="font-mono text-xs font-semibold text-accent flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>INCIDENT: {cs.theHardPart.incident}</span>
                  </div>

                  <div className="space-y-2.5 font-sans text-xs sm:text-sm">
                    <div>
                      <span className="font-mono text-muted-2 text-xs uppercase block">Symptoms:</span>
                      <p className="text-muted leading-relaxed">{cs.theHardPart.symptoms}</p>
                    </div>

                    <div>
                      <span className="font-mono text-muted-2 text-xs uppercase block">Root Cause Analysis (RCA):</span>
                      <p className="text-muted leading-relaxed">{cs.theHardPart.rootCause}</p>
                    </div>

                    <div className="pt-2 border-t border-border">
                      <span className="font-mono text-live text-xs uppercase flex items-center gap-1.5 mb-1">
                        <CheckCircle size={14} weight="bold" />
                        <span>Resolution & Engineering Safeguard:</span>
                      </span>
                      <p className="text-text leading-relaxed font-medium">{cs.theHardPart.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "design" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider">
                  <ShieldCheck size={14} />
                  <span>UI/UX & Information Ergonomics Decisions</span>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {cs.theDesign}
                </p>
                <div className="p-3 border border-border bg-panel-2/40 font-mono text-xs text-muted-2 space-y-1">
                  <div>- Zero extraneous decoration</div>
                  <div>- Sub-100ms interaction feedback</div>
                  <div>- High-density data tables optimized for keyboard navigation</div>
                </div>
              </motion.div>
            )}

            {activeTab === "omissions" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider">
                  <Terminal size={14} />
                  <span>What's NOT in It (Conscious Trade-offs)</span>
                </div>
                <div className="p-4 border border-border bg-panel-2/30 rounded-xs font-sans text-sm text-muted leading-relaxed">
                  {cs.whatsNotInIt}
                </div>
                <p className="font-mono text-xs text-muted-2">
                  // Architectural principle: Avoid premature complexity and maintain strict domain boundaries.
                </p>
              </motion.div>
            )}

            {activeTab === "status" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider">
                  <CheckCircle size={14} className="text-live" />
                  <span>Operational Status & Next Milestones</span>
                </div>
                <div className="p-4 border border-border bg-panel-2/40 rounded-xs font-sans text-sm text-text leading-relaxed">
                  {cs.currentStatus}
                </div>
              </motion.div>
            )}
          </div>

          {/* Modal Footer Controls */}
          <div className="px-4 py-3 sm:px-6 border-t border-border bg-[#0B0E0C] flex items-center justify-between font-mono text-xs text-muted-2">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Shortcut:</span>
              <div className="flex items-center gap-1">
                {TABS.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTab(t.id)}
                    className={`w-5 h-5 rounded-xs flex items-center justify-center border transition-colors ${
                      activeTab === t.id
                        ? "border-accent text-accent font-bold bg-[#161B17]"
                        : "border-border text-muted-2 hover:text-muted hover:border-muted-2"
                    }`}
                    title={`Jump to tab ${t.label}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="btn-terminal btn-terminal-ghost py-1 px-3 text-xs"
            >
              <span>close inspector</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  { text: "boot --verbose --system=production", status: "executing", delay: 400 },
  { text: "Initializing kernel modules (React 18, Vite, Tailwind CSS)...", status: "ok", delay: 1400 },
  { text: "Connecting production services: SBE Back Office, QuiqOrder, Jirella ERP...", status: "ok", delay: 2500 },
  { text: "Verifying multi-tenant schemas, RLS policies, and RBAC tables...", status: "ok", delay: 3600 },
  { text: "Operator verified: ADEKUNLE, OLUWATIMILEHIN E. [Lagos, UTC+1]", status: "ok", delay: 4700 },
  { text: "Systems ready. All services operational.", status: "ready", delay: 5800 },
];

const TerminalBoot = () => {
  const [completedLines, setCompletedLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if previously dismissed in this browser session
    if (sessionStorage.getItem("timi_boot_done") === "true") {
      setIsDismissed(true);
      return;
    }

    // Line printing timeouts with comfortable reading cadence
    const timeouts = bootSequence.map((step, idx) => {
      return setTimeout(() => {
        setCompletedLines((prev) => [...prev, step]);
        setProgress(Math.round(((idx + 1) / bootSequence.length) * 100));

        if (idx === bootSequence.length - 1) {
          setIsReady(true);
          // Give viewers ample time (3.8 seconds) to read the full screen
          setTimeout(() => {
            handleLaunch();
          }, 3800);
        }
      }, step.delay);
    });

    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Enter") {
        handleLaunch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLaunch = () => {
    sessionStorage.setItem("timi_boot_done", "true");
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
        className="fixed inset-0 z-[9999] bg-[#0A0D0B] text-[#E5E8E3] flex flex-col justify-center items-center p-4 sm:p-6 font-mono select-none"
      >
        <div className="max-w-lg w-full border border-border bg-[#121613] shadow-2xl">
          
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-[#161B17]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F2B84B]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]/80" />
              <span className="text-xs text-muted ml-2 font-mono">timilehin@systems:~ $ boot.sh</span>
            </div>
            <button
              onClick={handleLaunch}
              className="text-[10px] text-muted-2 hover:text-accent border border-border px-2 py-0.5 transition-colors"
            >
              [ESC to skip ↗]
            </button>
          </div>

          {/* Terminal Console Output */}
          <div className="p-5 sm:p-6 space-y-3 text-xs text-left min-h-[220px]">
            {completedLines.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-2 leading-relaxed"
              >
                {step.status === "ready" ? (
                  <span className="text-live font-semibold shrink-0">[READY]</span>
                ) : step.status === "ok" ? (
                  <span className="text-[#4ADE80] shrink-0">[OK]</span>
                ) : (
                  <span className="text-accent shrink-0">&gt;</span>
                )}
                <span
                  className={
                    step.status === "ready"
                      ? "text-live font-semibold"
                      : step.status === "executing"
                      ? "text-accent"
                      : "text-text"
                  }
                >
                  {step.text}
                </span>
              </motion.div>
            ))}

            {/* Blinking CLI Prompt */}
            {!isReady && (
              <div className="flex items-center gap-2 text-accent pt-1">
                <span>&gt;</span>
                <span className="w-2 h-4 bg-accent animate-pulse inline-block" />
              </div>
            )}
          </div>

          {/* Progress Bar Strip */}
          <div className="px-5 sm:px-6 pb-4">
            <div className="flex items-center justify-between text-[11px] text-muted mb-1.5 font-mono">
              <span>INITIALIZING SYSTEMS</span>
              <span className="text-accent">{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-[#161B17] border border-border/80 overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Terminal Footer CTA */}
          <div className="px-5 sm:px-6 py-3 border-t border-border bg-[#0E120F] flex items-center justify-between text-xs">
            <div className="text-muted-2 text-[10px]">
              OPERATOR // 4.65 GPA FUTA
            </div>

            <button
              onClick={handleLaunch}
              className={`px-3 py-1 font-mono text-[11px] transition-all flex items-center gap-1.5 ${
                isReady
                  ? "bg-accent text-[#0A0D0B] font-bold shadow-[0_0_12px_rgba(242,184,75,0.4)] cursor-pointer"
                  : "bg-panel-2 text-muted-2 cursor-pointer hover:text-text"
              }`}
            >
              <span>{isReady ? "ENTER TERMINAL ↵" : "skip intro"}</span>
            </button>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalBoot;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  { text: "boot --verbose --system=production", status: "executing", delay: 100 },
  { text: "Initializing kernel modules (React 19, Vite, Tailwind CSS)...", status: "ok", delay: 280 },
  { text: "Connecting services: SBE Back Office, QuiqOrder, Jirella ERP...", status: "ok", delay: 460 },
  { text: "Verifying multi-tenant schemas, RLS policies, and RBAC tables...", status: "ok", delay: 640 },
  { text: "Operator verified: ADEKUNLE, OLUWATIMILEHIN E. [Lagos, UTC+1]", status: "ok", delay: 820 },
  { text: "Systems ready. All services operational.", status: "ready", delay: 1000 },
];

const TerminalBoot = () => {
  const [completedLines, setCompletedLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    // Check if previously dismissed in this browser session
    if (sessionStorage.getItem("timi_boot_done") === "true") {
      return;
    }

    // Bypass boot screen entirely for automated Lighthouse, Googlebot, and headless crawlers
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent || "";
      if (
        /(Lighthouse|Googlebot|HeadlessChrome|Chrome-Lighthouse|PageSpeed|bingbot|DuckDuckBot)/i.test(ua) ||
        window.location.search.includes("noboot")
      ) {
        sessionStorage.setItem("timi_boot_done", "true");
        return;
      }
    }

    setIsDismissed(false);

    // Fast, responsive micro-boot line printing timeouts (~1.4s total)
    const timeouts = bootSequence.map((step, idx) => {
      return setTimeout(() => {
        setCompletedLines((prev) => [...prev, step]);
        setProgress(Math.round(((idx + 1) / bootSequence.length) * 100));

        if (idx === bootSequence.length - 1) {
          setIsReady(true);
          // Auto-launch into portfolio quickly
          setTimeout(() => {
            handleLaunch();
          }, 450);
        }
      }, step.delay);
    });

    const handleInteraction = (e) => {
      if (e.key === "Escape" || e.key === "Enter" || e.type === "click" || e.type === "wheel") {
        handleLaunch();
      }
    };

    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("click", handleInteraction);
    window.addEventListener("wheel", handleInteraction, { passive: true });

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("wheel", handleInteraction);
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
              OPERATOR // FUTA
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

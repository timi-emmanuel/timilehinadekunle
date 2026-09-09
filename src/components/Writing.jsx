import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Article,
  X,
  Copy,
  Check,
  Clock,
  Tag,
  ArrowRight,
  ArrowLeft,
  Terminal,
  Books,
} from "@phosphor-icons/react";
import { thinkpieces } from "../data/thinkpieces";

const Writing = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // Close reader on Escape key & support Arrow navigation
  useEffect(() => {
    if (!selectedArticle) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedArticle(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = thinkpieces.findIndex((a) => a.id === selectedArticle.id);
        if (currentIndex < thinkpieces.length - 1) {
          setSelectedArticle(thinkpieces[currentIndex + 1]);
        }
      } else if (e.key === "ArrowLeft") {
        const currentIndex = thinkpieces.findIndex((a) => a.id === selectedArticle.id);
        if (currentIndex > 0) {
          setSelectedArticle(thinkpieces[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedArticle]);

  // Lock body scroll when reader modal is active
  useEffect(() => {
    if (selectedArticle) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedArticle]);

  const handleCopyCode = (codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const currentIndex = selectedArticle
    ? thinkpieces.findIndex((a) => a.id === selectedArticle.id)
    : -1;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="pane"
      id="writing"
    >
      {/* Pane Header */}
      <div className="pane-label">
        <div className="flex items-center gap-2">
          <Article size={13} className="text-accent" />
          <span>06 — thinkpieces.txt</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-live animate-pulse" />
          <span>{thinkpieces.length} technical essays published</span>
        </div>
      </div>

      {/* Terminal Command & Directory Telemetry Ribbon */}
      <div className="px-4 py-3 sm:px-6 sm:py-3.5 border-b border-border bg-panel-2/30 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-2">
        <div className="flex items-center gap-2 text-text text-[11px] truncate">
          <span className="text-accent">$</span>
          <span>ls -la ~/articles/ --sort=importance</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-muted">
          <span className="flex items-center gap-1">
            <Books size={12} className="text-accent" />
            <span>Systems Architecture & Frontend Depth</span>
          </span>
          <span className="text-muted-2">•</span>
          <span>4,200+ words</span>
        </div>
      </div>

      {/* Articles Directory Listing */}
      <div className="divide-y divide-border text-left">
        {thinkpieces.map((article, idx) => (
          <div
            key={article.id}
            className="p-4 sm:p-7 hover:bg-panel-2/40 transition-colors duration-200 group/article flex flex-col justify-between gap-5"
          >
            <div className="space-y-2.5">
              {/* Top metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-semibold">[{String(idx + 1).padStart(2, "0")}]</span>
                  <span className="text-muted-2 font-mono text-[11px]">{article.filename}</span>
                </div>
                <div className="flex items-center gap-3 text-muted text-[11px]">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-accent" />
                    <span>{article.readTime}</span>
                  </span>
                  <span className="text-muted-2">•</span>
                  <span>{article.date}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3
                  onClick={() => setSelectedArticle(article)}
                  className="font-mono text-base sm:text-lg font-semibold text-text group-hover/article:text-accent transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{article.title}</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                  {article.subtitle}
                </p>
              </div>

              {/* Abstract excerpt */}
              <p className="font-sans text-xs text-muted-2 line-clamp-2 leading-relaxed italic border-l-2 border-border pl-3 mt-2">
                "{article.abstract}"
              </p>
            </div>

            {/* Bottom row: Topic tags & Read button */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-xs border border-border bg-[#0E1310] text-muted group-hover/article:border-border/90 transition-colors"
                  >
                    #{tag.toLowerCase()}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(article)}
                className="btn-terminal btn-terminal-secondary text-xs py-1.5 px-3 group/btn flex items-center gap-2 hover:border-accent hover:text-accent"
              >
                <Terminal size={12} className="text-accent" />
                <span>$ less {article.filename}</span>
                <ArrowRight size={11} className="transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Terminal Article Reader Modal ($ less thinkpiece.md) */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#0A0D0B]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full max-w-[880px] max-h-[92vh] flex flex-col bg-panel border border-border rounded-xs shadow-2xl overflow-hidden font-mono"
            >
              {/* Modal Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-5 sm:py-3 border-b border-border bg-[#0C100D] select-none shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E54D2E]/80" />
                    <span className="w-2 h-2 rounded-full bg-[#F5A623]/80" />
                    <span className="w-2 h-2 rounded-full bg-[#4ADE80]/80" />
                  </div>
                  <div className="text-xs text-muted flex items-center gap-1 truncate font-mono">
                    <span className="text-accent">$</span>
                    <span className="text-muted-2">less</span>
                    <span className="text-text font-medium truncate">~/articles/{selectedArticle.filename}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline font-mono text-[10px] text-muted-2">
                    [Esc] to close
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="p-1 rounded-xs hover:bg-[#1C231E] text-muted hover:text-text transition-colors"
                    aria-label="Close reader"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Reader Sub-bar: Telemetry */}
              <div className="px-4 py-2 sm:px-6 sm:py-2.5 border-b border-border/80 bg-[#101411] flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted shrink-0">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-accent font-medium">
                    <Clock size={12} />
                    <span>{selectedArticle.readTime}</span>
                  </span>
                  <span className="text-muted-2">•</span>
                  <span>{selectedArticle.wordCount} words</span>
                  <span className="text-muted-2">•</span>
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-2">
                  <span>Press</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[#161B17] border border-border text-muted font-mono">←</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-[#161B17] border border-border text-muted font-mono">→</kbd>
                  <span>to flip essays</span>
                </div>
              </div>

              {/* Scrollable Essay Body */}
              <div className="p-4 sm:p-8 overflow-y-auto space-y-7 text-left terminal-scrollbar-x font-sans">
                {/* Article Header */}
                <div className="space-y-3 border-b border-border pb-6">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {selectedArticle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-xs border border-accent/40 bg-accent/10 text-accent font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="font-mono text-xl sm:text-2xl font-bold text-text leading-tight">
                    {selectedArticle.title}
                  </h1>

                  <p className="font-sans text-sm sm:text-base text-muted leading-relaxed">
                    {selectedArticle.subtitle}
                  </p>

                  <div className="flex items-center gap-2 pt-1 font-mono text-xs text-muted-2">
                    <span>Author: Timilehin Adekunle</span>
                    <span>•</span>
                    <span>Domain: Production Systems</span>
                  </div>
                </div>

                {/* Lead Introduction */}
                <div className="text-sm sm:text-[15px] text-text/90 leading-relaxed bg-[#0E1310] border-l-2 border-accent p-4 rounded-r-xs font-sans">
                  {selectedArticle.content.introduction}
                </div>

                {/* Structured Sections */}
                {selectedArticle.content.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-3.5 pt-2">
                    <h2 className="font-mono text-base sm:text-lg font-semibold text-accent flex items-center gap-2 border-b border-border/60 pb-1.5">
                      <span>{section.heading}</span>
                    </h2>

                    <div className="font-sans text-xs sm:text-sm text-muted leading-relaxed space-y-3 whitespace-pre-line">
                      {section.body}
                    </div>

                    {/* ASCII Architecture Diagram (if present) */}
                    {section.diagram && (
                      <div className="mt-4 rounded-xs border border-border bg-[#070A08] p-4 font-mono text-[11px] sm:text-xs text-[#86EFAC] overflow-x-auto terminal-scrollbar-x shadow-inner">
                        <div className="text-[10px] text-muted-2 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                          <Terminal size={11} className="text-accent" />
                          <span>ASCII Architecture Pipeline</span>
                        </div>
                        <pre className="leading-tight font-mono">{section.diagram}</pre>
                      </div>
                    )}

                    {/* Code Snippet (if present) */}
                    {section.codeSnippet && (
                      <div className="mt-4 rounded-xs border border-border bg-[#070A08] overflow-hidden font-mono text-xs shadow-inner">
                        <div className="flex items-center justify-between px-3.5 py-2 border-b border-border bg-[#0D120E] text-[11px] text-muted">
                          <span className="text-accent">{section.codeSnippet.caption}</span>
                          <button
                            type="button"
                            onClick={() => handleCopyCode(section.codeSnippet.code)}
                            className="flex items-center gap-1 text-[10px] text-muted hover:text-text transition-colors py-0.5 px-2 rounded-xs border border-border/80 bg-[#121613]"
                          >
                            {copiedSnippet ? (
                              <>
                                <Check size={11} className="text-live" />
                                <span className="text-live">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={11} />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-4 text-[11.5px] sm:text-xs leading-relaxed text-[#E5E8E3] overflow-x-auto terminal-scrollbar-x">
                          <code>{section.codeSnippet.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}

                {/* Conclusion Callout */}
                <div className="pt-4 border-t border-border">
                  <div className="p-4 rounded-xs border border-border bg-panel-2/60 space-y-2">
                    <div className="font-mono text-xs text-accent uppercase tracking-wider flex items-center gap-1.5">
                      <Tag size={12} />
                      <span>Key Takeaway</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-text/90 leading-relaxed italic">
                      "{selectedArticle.content.conclusion}"
                    </p>
                  </div>
                </div>

                {/* Next / Previous Article Footer Controls */}
                <div className="pt-6 border-t border-border flex items-center justify-between gap-3 font-mono text-xs">
                  {currentIndex > 0 ? (
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(thinkpieces[currentIndex - 1])}
                      className="btn-terminal btn-terminal-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
                    >
                      <ArrowLeft size={12} />
                      <span>Prev Essay</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <span className="text-[11px] text-muted-2">
                    [{currentIndex + 1} of {thinkpieces.length}]
                  </span>

                  {currentIndex < thinkpieces.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(thinkpieces[currentIndex + 1])}
                      className="btn-terminal btn-terminal-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
                    >
                      <span>Next Essay</span>
                      <ArrowRight size={12} />
                    </button>
                  ) : (
                    <div />
                  )}
                </div>
              </div>

              {/* Modal Footer Status Bar */}
              <div className="px-4 py-2 border-t border-border bg-[#0C100D] flex items-center justify-between font-mono text-[10px] text-muted-2 select-none shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-live" />
                  <span>READ_MODE: 100% COMPLETE</span>
                </div>
                <div>TIMILEHIN ADEKUNLE · TECHNICAL ESSAYS</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Writing;

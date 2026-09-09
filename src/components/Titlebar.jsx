import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { id: "projects", label: "projects", path: "projects/" },
  { id: "experience", label: "experience", path: "experience.log" },
  { id: "radar", label: "radar", path: "radar.now" },
  { id: "activity", label: "activity", path: "github_activity.log" },
  { id: "contact", label: "contact", path: "contact.sh" },
];

const Titlebar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll spy to track currently active viewport section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "experience", "radar", "activity", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
          setActiveSection(section);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize or Escape key press
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0D0B]/95 backdrop-blur-md border-b border-border">
      <div className="max-w-[920px] mx-auto px-3.5 sm:px-5 py-2.5 sm:py-3.5 flex items-center justify-between gap-3">
        
        {/* Left: Window Dots & Responsive Breadcrumbs */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#4F5850]" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#4F5850]" />
            <motion.span
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-live shadow-[0_0_6px_#4ADE80]"
            />
          </div>

          <div className="font-mono text-xs text-muted flex items-center gap-1 truncate">
            <span className="text-muted-2">~/</span>
            <span className="hidden sm:inline text-muted-2">timilehin/</span>
            <motion.span
              key={activeSection}
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-text font-medium"
            >
              {activeSection === "hero" ? "portfolio.sh" : `${activeSection}/`}
            </motion.span>
          </div>
        </div>

        {/* Desktop: Horizontal Nav Tabs with Sliding Active Pill */}
        <nav className="hidden md:flex relative font-mono text-xs text-muted items-center gap-1.5 shrink-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-2.5 py-1 transition-colors duration-150 rounded-xs ${
                  isActive ? "text-accent font-semibold" : "hover:text-text"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#161B17] border border-border/90 rounded-xs -z-10 shadow-[0_0_8px_rgba(242,184,75,0.1)]"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 30,
                    }}
                  />
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Mobile: Sleek Terminal Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close terminal navigation menu" : "Open terminal navigation menu"}
          className="md:hidden flex items-center gap-1.5 px-2.5 py-1 text-muted hover:text-text border border-border bg-[#121613] hover:bg-[#161B17] rounded-xs font-mono text-xs transition-colors select-none"
        >
          {isMenuOpen ? (
            <X size={15} weight="bold" className="text-accent" />
          ) : (
            <List size={15} weight="bold" className="text-text" />
          )}
          <span className="text-[11px] text-muted-2">//</span>
          <span className="text-[11px]">{isMenuOpen ? "close" : "menu"}</span>
        </button>

      </div>

      {/* Mobile: Expandable Terminal Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t border-border bg-[#0A0D0B]/98 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="max-w-[920px] mx-auto px-4 py-3 space-y-1 font-mono text-xs">
              <div className="text-[10px] text-muted-2 uppercase tracking-wider pb-1.5 px-2.5 flex items-center justify-between border-b border-border/50 mb-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-live animate-pulse" />
                  <span>terminal navigation</span>
                </span>
                <span className="text-[9.5px] text-muted-2">esc to close</span>
              </div>

              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xs transition-all ${
                      isActive
                        ? "bg-[#161B17] text-accent border border-border font-medium shadow-[0_0_10px_rgba(242,184,75,0.06)]"
                        : "text-muted hover:text-text hover:bg-panel-2/40"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={isActive ? "text-accent" : "text-muted-2"}>
                        {isActive ? ">" : "$"}
                      </span>
                      <span className="text-[11.5px]">cd ~/{item.path}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-muted-2 font-normal">
                        [{String(idx + 1).padStart(2, "0")}]
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(242,184,75,0.8)]" />
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Titlebar;

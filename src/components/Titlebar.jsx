import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "radar", label: "radar" },
  { id: "contact", label: "contact" },
];

const Titlebar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "experience", "radar", "contact"];
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

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0D0B]/95 backdrop-blur-md border-b border-border">
      <div className="max-w-[920px] mx-auto px-3 sm:px-5 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
        
        {/* Left: Window Dots & Responsive Breadcrumbs */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
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

          <div className="font-mono text-[11px] sm:text-xs text-muted flex items-center gap-0.5 sm:gap-1 truncate">
            <span className="hidden sm:inline text-muted-2">~/timilehin</span>
            <span className="sm:hidden text-muted-2">~</span>
            <motion.span
              key={activeSection}
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-text font-medium"
            >
              /{activeSection === "hero" ? "portfolio.sh" : `${activeSection}/`}
            </motion.span>
          </div>
        </div>

        {/* Right: Curated Mobile-Responsive Nav Links with Sliding Active Pill */}
        <nav className="relative font-mono text-[11px] sm:text-xs text-muted flex items-center gap-1 sm:gap-2 shrink-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-2 py-1 transition-colors duration-150 rounded-xs ${
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

      </div>
    </header>
  );
};

export default Titlebar;

import { useState, useEffect } from "react";

const Titlebar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "experience", "contact"];
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
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-live shadow-[0_0_6px_#4ADE80]" />
          </div>

          <div className="font-mono text-[11px] sm:text-xs text-muted flex items-center gap-0.5 sm:gap-1 truncate">
            <span className="hidden sm:inline text-muted-2">~/timilehin</span>
            <span className="sm:hidden text-muted-2">~</span>
            <span className="text-text font-medium">
              /{activeSection === "hero" ? "portfolio.sh" : `${activeSection}/`}
            </span>
          </div>
        </div>

        {/* Right: Curated Mobile-Responsive Nav Links */}
        <nav className="font-mono text-[11px] sm:text-xs text-muted flex items-center gap-2.5 sm:gap-5 shrink-0">
          <a
            href="#projects"
            className={`transition-colors duration-150 hover:text-accent px-1 py-0.5 ${
              activeSection === "projects" ? "text-accent font-semibold" : ""
            }`}
          >
            projects
          </a>
          <a
            href="#experience"
            className={`transition-colors duration-150 hover:text-accent px-1 py-0.5 ${
              activeSection === "experience" ? "text-accent font-semibold" : ""
            }`}
          >
            experience
          </a>
          <a
            href="#contact"
            className={`transition-colors duration-150 hover:text-accent px-1 py-0.5 ${
              activeSection === "contact" ? "text-accent font-semibold" : ""
            }`}
          >
            contact
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Titlebar;

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
    <header className="sticky top-0 z-50 w-full bg-[#0A0D0B]/92 backdrop-blur-md border-b border-border">
      <div className="max-w-[920px] mx-auto px-5 py-3.5 flex items-center justify-between">
        
        {/* Left: Window Dots & Breadcrumb Path */}
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4F5850]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#4F5850]" />
            <span className="w-2.5 h-2.5 rounded-full bg-live shadow-[0_0_6px_#4ADE80]" />
          </div>

          <div className="font-mono text-xs text-muted flex items-center gap-1">
            <span>~/timilehin</span>
            <span className="text-text font-medium">
              /{activeSection === "hero" ? "portfolio.sh" : `${activeSection}/`}
            </span>
          </div>
        </div>

        {/* Right: Clean Nav Links from Spec */}
        <nav className="font-mono text-xs text-muted flex items-center gap-5">
          <a
            href="#projects"
            className="hover:text-accent transition-colors duration-150"
          >
            projects
          </a>
          <a
            href="#experience"
            className="hover:text-accent transition-colors duration-150"
          >
            experience
          </a>
          <a
            href="#contact"
            className="hover:text-accent transition-colors duration-150"
          >
            contact
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Titlebar;

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  List,
  X,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  ArrowUpRight,
  Sparkle
} from "@phosphor-icons/react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Contact", href: "contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef(null);
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection using Intersection Observer
  useEffect(() => {
    const sections = ["home", "about", "projects", "experience", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observers = sections.map((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(section);
        return observer;
      }
      return null;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 90;
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  // Close mobile menu on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Stamp */}
        <motion.a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "home")}
          className="flex items-center gap-2 bg-white dark:bg-neo-darkCard border-2 border-black dark:border-white p-1.5 sm:px-3 sm:py-2 shadow-neo dark:shadow-neo-dark-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-md dark:hover:shadow-neo-dark transition-all duration-150"
          whileTap={{ scale: 0.96 }}
        >
          <span className="w-7 h-7 sm:w-8 sm:h-8 bg-neo-yellow text-black border-2 border-black font-mono font-black text-sm sm:text-base flex items-center justify-center shadow-neo-sm">
            TA
          </span>
          <div className="flex flex-col text-left">
            <span className="font-display font-extrabold text-xs sm:text-sm tracking-tight leading-none text-black dark:text-white">
              TIMILEHIN
            </span>
            <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 leading-tight">
              FULL-STACK DEV
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Bar */}
        <nav className="hidden md:flex items-center gap-1 bg-white dark:bg-neo-darkCard border-2 border-black dark:border-white px-3 py-1.5 shadow-neo dark:shadow-neo-dark-white">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`relative px-3 py-1.5 font-display font-bold text-xs uppercase tracking-wider transition-all duration-150 ${
                  isActive
                    ? "bg-neo-yellow text-black border-2 border-black shadow-neo-sm -translate-y-0.5"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Status Badge, Theme Switcher & Socials */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Status Badge (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 bg-neo-lime text-black border-2 border-black px-3 py-1.5 text-xs font-mono font-bold shadow-neo-sm">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>OPEN TO WORK</span>
          </div>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.92 }}
            className="w-10 h-10 flex items-center justify-center bg-white dark:bg-neo-darkCard text-black dark:text-white border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark-white hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
            aria-label={`Toggle ${isDark ? "Light" : "Dark"} mode`}
          >
            {isDark ? (
              <Sun size={22} weight="bold" className="text-neo-yellow" />
            ) : (
              <Moon size={22} weight="bold" className="text-black" />
            )}
          </motion.button>

          {/* Social Quick Links (Desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://github.com/timi-emmanuel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-neo-darkCard text-black dark:text-white border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark-white hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
              aria-label="GitHub Profile"
            >
              <GithubLogo size={20} weight="bold" />
            </a>
            <a
              href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-neo-darkCard text-black dark:text-white border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark-white hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
              aria-label="LinkedIn Profile"
            >
              <LinkedinLogo size={20} weight="bold" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.92 }}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-neo-yellow text-black border-2 border-black shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden mt-3 max-w-sm mx-auto bg-white dark:bg-neo-darkCard border-2 border-black dark:border-white shadow-neo-lg dark:shadow-neo-dark-lg p-5 pointer-events-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b-2 border-black dark:border-zinc-700 mb-4">
              <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">
                Navigation Menu
              </span>
              <div className="flex items-center gap-1.5 bg-neo-lime text-black border-2 border-black px-2 py-0.5 text-[10px] font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                <span>AVAILABLE</span>
              </div>
            </div>

            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.li key={link.href} variants={itemVariants}>
                    <a
                      href={`#${link.href}`}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className={`flex items-center justify-between p-3 border-2 border-black font-display font-black text-base uppercase tracking-wider transition-all duration-150 ${
                        isActive
                          ? "bg-neo-yellow text-black shadow-neo-sm -translate-x-0.5 -translate-y-0.5"
                          : "bg-zinc-50 dark:bg-neo-darkSurface text-black dark:text-white hover:bg-neo-yellow hover:text-black"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={18} weight="bold" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* Socials inside Mobile Menu */}
            <div className="pt-4 mt-4 border-t-2 border-black dark:border-zinc-700 flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-zinc-500">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/timi-emmanuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-neo-darkSurface text-black dark:text-white border-2 border-black shadow-neo-sm"
                  aria-label="GitHub"
                >
                  <GithubLogo size={18} weight="bold" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-neo-darkSurface text-black dark:text-white border-2 border-black shadow-neo-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={18} weight="bold" />
                </a>
                <a
                  href="https://x.com/TimiTech10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-neo-darkSurface text-black dark:text-white border-2 border-black shadow-neo-sm"
                  aria-label="Twitter/X"
                >
                  <TwitterLogo size={18} weight="bold" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;


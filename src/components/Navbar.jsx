import { useState, useEffect,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import XIcon from '../assets/x.svg';
import { Linkedin, Github } from "lucide-react";

const menuVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
     y: -30, 
     opacity: 0,
     transition: { 
      duration: 0.3,
        ease: "easeIn"
     } 
    }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle initial hash navigation
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          const offset = 80;
          const targetPosition = targetElement.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  // Active section detection using Intersection Observer
  useEffect(() => {
    const sections = ["home", "about", "projects", "experience", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // Update URL hash without scrolling
          if (entry.target.id !== "home") {
            window.history.replaceState(null, "", `#${entry.target.id}`);
          } else {
            window.history.replaceState(null, "", window.location.pathname);
          }
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
      const offset = 80; // Account for navbar height
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  // Effect to close mobile menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={{
        top: {
          width: "95%",
          left: "50%",
          x: "-50%",
          top: 0,
          borderWidth: 0,
        },
        scrolled: {
          width: "90%",
          left: "50%",
          x: "-50%",
          borderRadius: "9999px",
          top: 16,
          borderWidth: 2,
        },
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed z-50 glass-strong py-2 md:py-3 px-4 lg:px-8 flex justify-between items-center shadow-lg shadow-primary/10"
    >
      <h1 className="text-white text-xl font-semibold font-display tracking-wide flex items-center gap-2">
        <span className="flex items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 w-10 h-10 text-white font-bold text-lg shadow-lg shadow-primary/50">
          T.
        </span>
        <span className="gradient-text-primary font-bold">TimTech</span>
      </h1>

      {/* Hamburger button for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 2,  } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-7 bg-white transition-all duration-300 origin-center"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 , transition:{ duration: 1,
        ease: "easeOut"}}}
          className="block h-0.5 w-7 bg-white my-1 transition-all duration-300 origin-center"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-7 bg-white transition-all duration-300 origin-center"
        />
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex md:gap-3 lg:gap-6 text-light text-sm items-center font-medium">
        <li>
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, "home")}
            className={`smooth-transition relative group ${
              activeSection === "home" 
                ? "text-primary-400" 
                : "hover:text-primary-400"
            }`}
          >
            Home
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
              activeSection === "home" ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            onClick={(e) => handleSmoothScroll(e, "about")}
            className={`smooth-transition relative group ${
              activeSection === "about" 
                ? "text-primary-400" 
                : "hover:text-primary-400"
            }`}
          >
            About
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
              activeSection === "about" ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            onClick={(e) => handleSmoothScroll(e, "projects")}
            className={`smooth-transition relative group ${
              activeSection === "projects" 
                ? "text-primary-400" 
                : "hover:text-primary-400"
            }`}
          >
            Projects
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
              activeSection === "projects" ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </a>
        </li>
        <li>
          <a 
            href="#experience" 
            onClick={(e) => handleSmoothScroll(e, "experience")}
            className={`smooth-transition relative group ${
              activeSection === "experience" 
                ? "text-primary-400" 
                : "hover:text-primary-400"
            }`}
          >
            Experience
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
              activeSection === "experience" ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className={`smooth-transition relative group ${
              activeSection === "contact" 
                ? "text-primary-400" 
                : "hover:text-primary-400"
            }`}
          >
            Contact
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
              activeSection === "contact" ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </a>
        </li>     
      </ul>

      <ul className="hidden md:flex text-white md:gap-4 lg:gap-6">
        {/* Social icons */}
        <li>
          <a href="https://x.com/TimiTech10" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-primary">
            <img src={XIcon} alt="X Icon" className="w-5 h-5 filter invert" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary">
            <Linkedin size={22} />
          </a>
        </li>
        <li>
          <a href="https://github.com/timi-emmanuel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary">
            <Github size={22} />
          </a>
        </li>
      </ul>
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile menu */}
            <motion.ul
              key="mobile-menu"
              ref={mobileMenuRef}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="md:hidden absolute top-full left-0 w-full bg-grayDark/95 backdrop-blur-xl border-t border-primary/30 text-light text-center flex flex-col gap-6 py-8 shadow-2xl z-50 rounded-b-2xl"
            >
              <motion.li variants={itemVariants}>
                <a 
                  href="#home" 
                  onClick={(e) => handleSmoothScroll(e, "home")}
                  className={`block smooth-transition ${
                    activeSection === "home" ? "text-primary-400 font-semibold" : "hover:text-primary-400"
                  }`}
                >
                  Home
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a 
                  href="#about" 
                  onClick={(e) => handleSmoothScroll(e, "about")}
                  className={`block smooth-transition ${
                    activeSection === "about" ? "text-primary-400 font-semibold" : "hover:text-primary-400"
                  }`}
                >
                  About
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a 
                  href="#projects" 
                  onClick={(e) => handleSmoothScroll(e, "projects")}
                  className={`block smooth-transition ${
                    activeSection === "projects" ? "text-primary-400 font-semibold" : "hover:text-primary-400"
                  }`}
                >
                  Projects
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a 
                  href="#experience" 
                  onClick={(e) => handleSmoothScroll(e, "experience")}
                  className={`block smooth-transition ${
                    activeSection === "experience" ? "text-primary-400 font-semibold" : "hover:text-primary-400"
                  }`}
                >
                  Experience
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                  className={`block smooth-transition ${
                    activeSection === "contact" ? "text-primary-400 font-semibold" : "hover:text-primary-400"
                  }`}
                >
                  Contact
                </a>
              </motion.li>
              <motion.li variants={itemVariants} className="pt-2">
                <span className="block text-xs text-gray-400 mb-2">Connect with me</span>
                <div className="flex justify-center gap-6 text-white">
                  <a href="https://x.com/TimiTech10" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-primary">
                   <img src={XIcon} alt="X Icon" className="w-5 h-5 filter invert"/>
                  </a>
                  <a href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary">
                    <Linkedin size={22} />
                  </a>
                  <a href="https://github.com/timi-emmanuel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary">
                    <Github size={22} />
                  </a>
                </div>
              </motion.li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

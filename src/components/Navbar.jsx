import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { y: -30, opacity: 0, transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={scrolled ? "scrolled" : "top"}
      variants={{
        top: {
          width: "100%",
          left: 0,
          x: 0,
          borderRadius: "0px",
          top: 0,
          borderWidth: 0,
        },
        scrolled: {
          width: "95%",
          left: "50%",
          x: "-50%",
          borderRadius: "9999px",
          top: 16, // 1rem (top-4)
          borderWidth: 2,
        },
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed z-50 bg-dark/60 backdrop-blur-md px-8 py-4 flex justify-between items-center shadow-sm border-primary mx-auto"
      style={{ position: "fixed", borderStyle: 'solid' }}
    >
      <h1 className="text-white text-xl font-bold font-alt flex items-center gap-2">
        <span className="flex items-center justify-center rounded-full bg-primary w-10 h-10 text-white font-bold text-lg">
          T.A
        </span>
        Timilehin Adekunle
      </h1>
      {/* Hamburger button for mobile with framer-motion animation */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-7 bg-white transition-all duration-300 origin-center"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block h-0.5 w-7 bg-white my-1 transition-all duration-300 origin-center"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-7 bg-white transition-all duration-300 origin-center"
        />
      </button>
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-light text-sm">
        <li><a href="#home" className="hover:text-primary">Home</a></li>
        <li><a href="#about" className="hover:text-primary">About</a></li>
        <li><a href="#projects" className="hover:text-primary">Projects</a></li>
        <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        <li>
          <a
            href="/resume.pdf"
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </li>
      </ul>
      {/* Mobile menu with framer-motion animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-dark text-light text-center flex flex-col gap-6 py-6 shadow-lg"
          >
            <motion.li variants={itemVariants}><a href="#home" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>Home</a></motion.li>
            <motion.li variants={itemVariants}><a href="#about" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>About</a></motion.li>
            <motion.li variants={itemVariants}><a href="#projects" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>Projects</a></motion.li>
            <motion.li variants={itemVariants}><a href="#contact" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>Contact</a></motion.li>
            <motion.li variants={itemVariants}>
              <a
                href="/resume.pdf"
                className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition block mx-auto w-4/5"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                My Resume
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

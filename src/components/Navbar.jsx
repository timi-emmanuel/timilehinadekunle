import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-dark px-8 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-white text-xl font-bold font-alt flex items-center gap-2">
        <span className="flex items-center justify-center rounded-full bg-primary w-10 h-10 text-white font-bold text-lg">
          T.A
        </span>
        Timilehin Adekunle
      </h1>
           
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-7 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block h-0.5 w-7 bg-white my-1 transition-all duration-300 origin-center ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-7 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
      {/* Mobile menu */}
      <ul
        className={`md:hidden absolute top-full left-0 w-full bg-dark text-light text-center flex flex-col gap-6 py-6 shadow-lg transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}
      >
        <li><a href="#home" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#projects" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>Contact</a></li>
        <li>
          <a
            href="/resume.pdf"
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition block mx-auto w-4/5"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            My Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

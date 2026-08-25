import {
  ArrowUp,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Heart,
  Sparkle
} from "@phosphor-icons/react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white dark:bg-neo-darkCard border-t-2 border-black dark:border-zinc-700 text-black dark:text-white py-10 px-4 sm:px-6 lg:px-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Stamp & Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-neo-yellow text-black border-2 border-black font-mono font-black text-sm flex items-center justify-center shadow-neo-sm">
            TA
          </span>
          <div className="text-left font-mono text-xs">
            <span className="font-bold block text-black dark:text-white">
              TIMILEHIN ADEKUNLE
            </span>
            <span className="text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} • Built with React, Tailwind & Phosphor
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/timi-emmanuel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-zinc-100 dark:bg-neo-darkSurface border-2 border-black dark:border-zinc-600 px-3 py-1.5 text-xs font-mono font-bold hover:bg-neo-yellow hover:text-black dark:hover:bg-neo-yellow dark:hover:text-black transition-all shadow-neo-sm"
          >
            <GithubLogo size={15} weight="bold" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-zinc-100 dark:bg-neo-darkSurface border-2 border-black dark:border-zinc-600 px-3 py-1.5 text-xs font-mono font-bold hover:bg-neo-blue hover:text-black dark:hover:bg-neo-blue dark:hover:text-black transition-all shadow-neo-sm"
          >
            <LinkedinLogo size={15} weight="bold" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://x.com/TimiTech10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-zinc-100 dark:bg-neo-darkSurface border-2 border-black dark:border-zinc-600 px-3 py-1.5 text-xs font-mono font-bold hover:bg-neo-pink hover:text-white dark:hover:bg-neo-pink dark:hover:text-white transition-all shadow-neo-sm"
          >
            <TwitterLogo size={15} weight="bold" />
            <span>Twitter/X</span>
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 bg-neo-yellow hover:bg-neo-yellowHover text-black border-2 border-black px-3.5 py-1.5 text-xs font-mono font-bold shadow-neo-sm hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
        >
          <span>TOP</span>
          <ArrowUp size={14} weight="bold" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-lightDark py-8 text-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <p className="text-sm sm:text-base mb-4">
          &copy; {new Date().getFullYear()} Timilehin Adekunle. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a 
            href="https://github.com/timi-emmanuel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-lightDark hover:text-primary-400 smooth-transition hover:scale-110 inline-block"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-lightDark hover:text-primary-400 smooth-transition hover:scale-110 inline-block"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

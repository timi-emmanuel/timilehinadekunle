const Footer = () => {
  return (
    <footer className="bg-grayDark border-t border-white/5 text-light py-8 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <p className="text-sm sm:text-base mb-4">
          &copy; {new Date().getFullYear()} Timilehin Adekunle. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a 
            href="https://github.com/timi-emmanuel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light hover:text-primary-400 smooth-transition hover:scale-110 inline-block"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light hover:text-primary-400 smooth-transition hover:scale-110 inline-block"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

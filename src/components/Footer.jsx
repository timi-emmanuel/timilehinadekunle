const Footer = () => {
  return (
    <footer className="bg-grayDark text-light py-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Timilehin Adekunle. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/timi-emmanuel" target="_blank" className="hover:text-primary">GitHub</a>
        <a href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/" target="_blank" className="hover:text-primary">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;

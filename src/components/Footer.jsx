const Footer = () => {
  return (
    <footer className="bg-grayDark text-light py-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Timilehin Adekunle. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/yourusername" target="_blank" className="hover:text-primary">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-primary">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;

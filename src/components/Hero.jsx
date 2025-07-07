
const Hero = () => {
  return (
    <section
      id="home"
      className="bg-dark text-white min-h-screen flex items-center justify-center px-6 md:px-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-xl text-primary mb-2">Hello 👋🏽</h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            I'm Timilehin, <br />
            <span className="text-primary">Frontend Developer</span>
          </h1>
          <p className="text-light mt-4 mb-6 max-w-md">
            I build interactive and modern web experiences using React, Tailwind CSS, and Firebase. Let's turn ideas into fast, beautiful websites.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-primary text-white px-5 py-3 rounded-lg hover:opacity-90 transition"
            >
              Got a project?
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-5 py-3 rounded-lg hover:bg-primary hover:text-white transition"
            >
              My Resume
            </a>
          </div>
        </div>

        {/* Right: SVG Placeholder */}
        <div className="flex justify-center">
          <img
            src="https://www.svgrepo.com/show/512301/developer-activity.svg"
            alt="Developer Illustration"
            className="w-80 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

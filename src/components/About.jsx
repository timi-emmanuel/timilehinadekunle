const About = () => {
  return (
    <section id="about" className="bg-grayDark text-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
        <p className="text-light leading-relaxed mb-6">
          I'm Timilehin, a self-taught frontend developer with a mechanical engineering background. I specialize in building fast, responsive, and intuitive web apps using React, Tailwind, and Firebase.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">5+</p>
            <p className="text-light">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">2+</p>
            <p className="text-light">Client Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">1</p>
            <p className="text-light">Hackathon Escrow App</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

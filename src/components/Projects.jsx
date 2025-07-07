const projects = [
  {
    title: "Shortly",
    description: "A modern URL shortener with Firebase Auth, analytics, and animations.",
    tech: ["React", "Tailwind", "Firebase"],
    live: "https://shortly-ivory-theta.vercel.app/",
    github: "https://github.com/yourusername/shortly",
  },
  {
    title: "QuiqOrder",
    description: "An AI-powered restaurant chatbot for order automation and admin dashboard.",
    tech: ["React", "Node.js", "OpenAI", "Firebase"],
    live: "https://quiqorder.com/",
    github: "https://github.com/yourusername/quiqorder",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-dark text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-grayDark p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-light mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-primary mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-dark px-2 py-1 rounded border border-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.live} target="_blank" className="text-primary hover:underline">Live</a>
                <a href={project.github} target="_blank" className="text-light hover:underline">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

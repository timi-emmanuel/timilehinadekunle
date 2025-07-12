import { motion } from "framer-motion";
import nationaryImage from "../assets/projects/nationary.png"
import shortlyImage from "../assets/projects/Shortly.png"

const projects = [
  {
    title: "Shortly",
    image: shortlyImage, // Replace with actual image or leave for now
    description: "A modern URL shortener with Firebase Auth, analytics, and animations.",
    tech: ["React", "Tailwind", "Firebase"],
    live: "https://shortly-ivory-theta.vercel.app/",
    github: "https://github.com/yourusername/shortly",
  },
  // {
  //   title: "QuiqOrder",
  //   image: "/projects/quiqorder.png", // Replace with actual image or leave for now
  //   description: "An AI-powered restaurant chatbot for order automation and admin dashboard.",
  //   tech: ["React", "Node.js", "OpenAI", "Firebase"],
  //   live: "https://quiqorder.com/",
  //   github: "https://github.com/yourusername/quiqorder",
  // },
   {
    title: "Nationary",
    image:nationaryImage, // Replace with actual image or leave for now
    description: "A resource for finding details about any country in the world",
    tech: ["React", "Node.js", "OpenAI", "Firebase"],
    live: "https://quiqorder.com/",
    github: "https://github.com/yourusername/quiqorder",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-dark text-white py-20 px-6 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-grayDark rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group"
              variants={card}
            >
              <div className="w-full h-60 bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) =>
                    (e.currentTarget.src = "https://via.placeholder.com/500x300?text=Project+Preview")
                  }
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-light text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm text-primary">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-dark border border-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="border border-light text-light px-4 py-2 rounded hover:bg-light hover:text-dark text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

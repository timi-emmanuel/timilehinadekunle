import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Info } from "lucide-react";
import ShortlyImg from "../assets/Shortly.png";
import QuiqOrderImg from "../assets/quiqorder.png";
import NationaryImg from "../assets/nationary.png";
import HuddleImg from "../assets/huddle.png";
import MatchkicksImg from "../assets/matchkicks.png";
import PadiHoldImg from "../assets/padihold.png";

const projects = [
  {
    title: "Padihold",
    description:
      "Padihold is Nigeria's leading escrow platform designed to secure online transactions with trusted dispute resolution and fund protection.",
    tech: [
      "Node.js",
      "TailwindCSS",
      "Next.js",
      "Framer Motion",
      "Radix UI",
      "Zod",
      "Zustand",
    ],
    live: "https://padi-hold.vercel.app/",
    github: null,
    image: PadiHoldImg,
  },
  {
    title: "Shortly",
    description:
      "A modern URL shortener with Firebase Auth, analytics, and animations.",
    tech: ["React", "Tailwind", "Firebase", "Framer"],
    live: "https://shortly-ivory-theta.vercel.app/",
    github: "https://github.com/timi-emmanuel/shortly",
    image: ShortlyImg,
  },
  {
    title: "QuiqOrder",
    description:
      "An AI-powered restaurant chatbot for order automation and admin dashboard.",
    tech: ["React", "Whatsapp API", "OpenAI", "Firebase", "Paystack", "Node.js"],
    live: "https://www.quiqorderng.com/",
    github: null,
    image: QuiqOrderImg,
  },
  {
    title: "Nationary",
    description:
      "A responsive React app that provides quick access to countries’ facts, maps, and flags through REST API integration, intuitive search, and smooth animations.",
    tech: ["React", "Tailwind", "REST Country API", "Zustand", "Framer"],
    live: "https://rest-countries-app-hazel.vercel.app/",
    github: "https://github.com/timi-emmanuel/rest-countries-app",
    image: NationaryImg,
  },
  {
    title: "Huddle Landing Page",
    description:
      "A responsive landing page challenge built with clean layout, hover effects, and mobile-first design.",
    tech: ["HTML", "CSS", "Responsive Design"],
    live: "https://manage-landing-page-test.netlify.app/",
    github: "https://github.com/timi-emmanuel/huddle-landing-page",
    image: HuddleImg,
  },
  {
    title: "Mockup Integration Tool",
    description:
      "Automated system that overlays design images onto mockups at precise coordinates, with S3 integration for user uploads and local mockup handling.",
    tech: ["Node.js", "Express.js", "Sharp", "AWS S3", "JavaScript"],
    live: "https://matchkicks.com/",
    github: null,
    image: MatchkicksImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Projects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      className="relative bg-dark text-white py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} 
      variants={containerVariants}
    >
      {/* Grid Background */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"
        style={{ y: yBg }}
      />

      <div className="relative z-10 mx-auto">
        <div className="flex items-center gap-4 mx-auto mb-16 p-2 md:p-0">
          <div className="w-full h-[0.1em] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white relative inline-flex items-end font-display">
            Projects
            <span className="text-4xl text-primary-500 absolute -right-4 bottom-[-0.20em]">
              &#8226;
            </span>
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div key={idx} variants={cardVariants}>
                <div
                  className={`flex flex-col-reverse ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row "
                  } gap-8 md:gap-12 items-center`}
                >
                  <motion.div
                    className="flex-1 overflow-hidden rounded-2xl group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover shadow-2xl rounded-2xl hover-glow smooth-transition"
                    />
                  </motion.div>

                  <div className="flex-1 text-left glass-card p-6 md:p-8 rounded-2xl hover-lift">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-display gradient-text-primary">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap justify-start gap-2 text-sm mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="glass border-primary/30 text-light px-3 py-1.5 rounded-full text-xs font-medium hover:border-primary/60 hover:bg-primary/10 smooth-transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-light mb-6 leading-relaxed text-base">{project.description}</p>
                    <div className="flex flex-wrap justify-start gap-4 items-center">
                      {project.github ? (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm flex items-center gap-2"
                          aria-label="GitHub"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={18} />
                          GitHub
                        </motion.a>
                      ) : (
                        <div className="relative group">
                          <button className="glass border-primary/30 text-light px-4 py-2 rounded-lg flex items-center gap-2 cursor-default text-sm font-medium">
                            <Info size={18} />
                            Private Repo
                          </button>
                          <div className="absolute left-0 mt-2 w-max glass-strong text-white text-sm rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-10 pointer-events-none">
                            Available upon request
                          </div>
                        </div>
                      )}
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm flex items-center gap-2"
                        aria-label="Live Project"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

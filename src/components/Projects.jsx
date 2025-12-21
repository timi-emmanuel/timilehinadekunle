import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Info } from "lucide-react";
import MagneticButton from "./MagneticButton";
import ShortlyImg from "../assets/Shortly.png";
import QuiqOrderImg from "../assets/quiqorder.png";
import NationaryImg from "../assets/nationary.png";
import HuddleImg from "../assets/huddle.png";
import MatchkicksImg from "../assets/matchkicks.png";
import PadiHoldImg from "../assets/padihold.png";
import SBEBackOfficeImg from "../assets/sbe-back-office.png";
import SBEPartnerBOImg from "../assets/sbe-partner-bo.png";

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
    title: "SBE Sportsbook Back Office",
    description:
      "An internal sportsbook back-office system used to manage agents, cashiers, users, and financial operations. Implemented role-based access control, secure authentication flows, and real-time operational dashboards for sportsbook management.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "JWT",
      "Role-Based Access Control",
      "REST APIs",
    ],
    live: null,
    github: null,
    image: SBEBackOfficeImg,
  },
  {
    title: "SBE Partner Back Office",
    description:
      "A partner-facing sportsbook management platform built as a separate codebase from the main back office. Focused on performance optimizations, token validation, API key management, and accurate financial computations including deposits, withdrawals, and RTP metrics.",
    tech: [
      "React",
      "Node.js",
      "JWT",
      "API Keys",
      "Caching",
      "Financial Logic",
    ],
    live: null,
    github: null,
    image: SBEPartnerBOImg,
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

// Enhanced Project Image Card with 3D tilt and zoom
const ProjectImageCard = ({ image, title }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className="flex-1 overflow-hidden rounded-2xl group relative shadow-lg dark:shadow-2xl dark:shadow-primary/20"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl"></div>
      <motion.img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover rounded-2xl hover-glow smooth-transition"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
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
      className="relative bg-slate-50 dark:bg-dark text-slate-800 dark:text-textDark py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-300"
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
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-textDark relative inline-flex items-end font-display">
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
                  <ProjectImageCard image={project.image} title={project.title} />

                  <div className="flex-1 text-left glass-card p-6 md:p-8 rounded-2xl hover-lift">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-display gradient-text-primary">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap justify-start gap-2 text-sm mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="glass border-primary/30 text-slate-600 dark:text-lightDark px-3 py-1.5 rounded-full text-xs font-medium hover:border-primary/60 hover:bg-primary/10 smooth-transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-lightDark mb-6 leading-relaxed text-base">{project.description}</p>
                    <div className="flex flex-wrap justify-start gap-4 items-center">
                      {project.github ? (
                        <MagneticButton>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm flex items-center gap-2"
                            aria-label="GitHub"
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={18} />
                            GitHub
                          </motion.a>
                        </MagneticButton>
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
                      <MagneticButton>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm flex items-center gap-2"
                          aria-label="Live Project"
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      </MagneticButton>
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

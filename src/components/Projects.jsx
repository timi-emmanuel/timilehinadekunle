import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import ShortlyImg from "../assets/Shortly.png";
import QuiqOrderImg from "../assets/quiqorder.png";
import NationaryImg from "../assets/nationary.png";
import HuddleImg from "../assets/huddle.png";

const projects = [
  {
    title: "Shortly",
    description: "A modern URL shortener with Firebase Auth, analytics, and animations.",
    tech: ["React", "Tailwind", "Firebase","Framer"],
    live: "https://shortly-ivory-theta.vercel.app/",
    github: "https://github.com/timi-emmanuel/shortly",
    image: ShortlyImg,
  },
  {
    title: "QuiqOrder",
    description: "An AI-powered restaurant chatbot for order automation and admin dashboard.",
    tech: ["React", "Whatsapp API", "OpenAI", "Firebase", "Paystack","Node.js"],
    live: "https://www.quiqorderng.com/",
    github: "https://github.com/timi-emmanuel/shortly",
    image: QuiqOrderImg,
  },
  {
  title: "Nationary",
  description: "An elegant dictionary web app with sleek UI, search suggestions, and audio pronunciations.",
  tech: ["React", "Tailwind", "REST Country API","Zustand", "Framer"],
  live: "https://rest-countries-app-hazel.vercel.app/",
  github: "https://github.com/timi-ema/nationary",
  image: NationaryImg, 
},
{
  title: "Huddle Landing Page",
  description: "A responsive landing page challenge built with clean layout, hover effects, and mobile-first design.",
  tech: ["HTML", "CSS", "Responsive Design"],
  live: "https://huddle-page-timmy.vercel.app/",
  github: "https://github.com/timi-emmanuel/huddle-landing-page",
  image: HuddleImg, 
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
      className="relative bg-dark text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Grid Background */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"
        style={{ y: yBg }}
      />

      <div className="relative z-10  mx-auto">
        <div className="flex  items-center gap-4 mx-auto mb-12 p-2 md:p-0">           
           <div className="w-full h-[0.1em] bg-gray-600"></div>   
           <h2 className="text-5xl  font-bold text-white relative inline-flex items-end">
              Project 
           <span className="text-4xl text-primary absolute -right-4 bottom-[-0.20em]">
                  &#8226;
           </span>
          </h2>       
        </div>

        <div className="space-y-20">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                
              >
                
                <div className={`flex flex-col-reverse  ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row "
                }  gap-6 md:gap-12`}>
                  <div className="flex-1 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover  shadow-lg  transition-transform duration-300 ease-out transform hover:scale-105"
                  />
                </div>

                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-semibold mb-6">{project.title}</h3>
                  <div className="flex flex-wrap justify-cnter md:justify-start gap-2 text-sm text-primary mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-600 text-gray-200  px-2 py-1 rounded-full  "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>                  
                  <p className="text-light mb-4">{project.description}</p>
                  
                    <div className="flex justify-start gap-4 items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-3 py-2 rounded flex items-center gap-2 hover:opacity-90 transition"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light underline underline-offset-8 rounded flex items-center gap-2 hover:text-primary transition"
                        aria-label="Live Project"
                      >
                        <ExternalLink size={18} />
                        Live
                      </a>
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

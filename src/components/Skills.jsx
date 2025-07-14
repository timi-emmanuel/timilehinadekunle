import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma
} from "react-icons/si";

const skillGroups = {
  Frontend: [
    { name: "HTML5", icon: <SiHtml5 className="text-[#e34f26]" /> },
    { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
  ],
  "Backend & DB": [
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Node.js (Basic)", icon: <SiNodedotjs className="text-[#68A063]" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  ],
  "Tools & Workflow": [
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-[#A259FF]" /> },
  ],
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.18,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

const Skills = () => {
  return (
    <motion.section
      className="text-white px-6 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-primary text-left md:text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Tools
        </motion.h2>
        <motion.div className="grid grid-cols-1 gap-6" variants={containerVariants}>
          {Object.entries(skillGroups).map(([category, skills], idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <ul className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="bg-grayDark text-light px-4 py-2 rounded-full border border-primary text-sm flex items-center gap-2 transition duration-300 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-r hover:from-primary/80 hover:to-secondary/80 hover:text-white"
                    variants={skillVariants}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;

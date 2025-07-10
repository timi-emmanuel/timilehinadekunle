import { motion } from "framer-motion";

const skillGroups = {
  "Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Framer Motion"],
  "Backend & DB": ["Firebase", "Node.js (Basic)","Express.js"],
  "Tools & Workflow": ["Git", "GitHub", "Vercel", "Figma",],
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
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } }
};

const Skills = () => {
  return (
    <motion.section
      className="bg-dark text-white py-20 px-6 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-primary text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Tools
        </motion.h2>
        <motion.div className="grid md:grid-cols-3 gap-10" variants={containerVariants}>
          {Object.entries(skillGroups).map(([category, skills], idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <ul className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="bg-grayDark text-light px-4 py-2 rounded-full border border-primary text-sm transition duration-300 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-r hover:from-primary/80 hover:to-secondary/80 hover:text-white"
                    variants={skillVariants}
                  >
                    {skill}
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

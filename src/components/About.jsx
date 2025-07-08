import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-grayDark text-white py-20 px-6 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="max-w-4xl mx-auto" variants={containerVariants}>
        <motion.h2
          className="text-3xl font-bold text-primary mb-4"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-light leading-relaxed mb-6"
          variants={itemVariants}
        >
          I'm Timilehin, a self-taught frontend developer with a mechanical
          engineering background. I specialize in building fast, responsive, and
          intuitive web apps using React, Tailwind, and Firebase.
        </motion.p>
        <motion.div
          className="grid md:grid-cols-3 gap-6 text-center"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <p className="text-3xl font-bold text-primary">5+</p>
            <p className="text-light">Projects Completed</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-3xl font-bold text-primary">2+</p>
            <p className="text-light">Client Projects</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-3xl font-bold text-primary">1</p>
            <p className="text-light">Hackathon Escrow App</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;

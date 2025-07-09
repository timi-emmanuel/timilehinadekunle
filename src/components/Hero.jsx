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

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="bg-dark text-white min-h-screen flex items-center justify-center px-6 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <motion.div variants={containerVariants}>
          <motion.h2
            className="text-xl text-primary mb-2"
            variants={itemVariants}
          >
            Hello 👋🏽
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            variants={itemVariants}
          >
            I'm Timilehin, <br />
            <span className="text-primary">Frontend Developer</span>
          </motion.h1>
          <motion.p
            className="text-light mt-4 mb-6 max-w-md"
            variants={itemVariants}
          >
            I build interactive and modern web experiences using React, Tailwind
            CSS, and Firebase. Let's turn ideas into fast, beautiful websites.
          </motion.p>
          <motion.div
            className="flex gap-4"
            variants={itemVariants}
          >
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
              className="border border-primary text-primary px-5 py-3 rounded-lg hover:bg-primary hover:text-white transition duration-200 ease-linear"
            >
              My Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right: SVG Placeholder */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.img
            src="https://www.svgrepo.com/show/512301/developer-activity.svg"
            alt="Developer Illustration"
            className="w-80 h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

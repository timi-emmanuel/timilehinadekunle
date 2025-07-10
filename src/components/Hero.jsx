import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.png";

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

const textParent = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.12,
    },
  },
};

const letter = {
  hidden: { y: 60, opacity: 0, scale: 0.6 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};




const Hero = () => {
  const name = "I'm Timilehin,";

  return (
    <motion.section
      id="home"
       className="text-white min-h-screen flex items-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center mt-12 pt-12"
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-4 flex-1"
        >
          <motion.h2
            className="flex items-end mb-2 relative pl-6 md:pl-16"
            variants={itemVariants}
          >
            <span className="text-2xl text-white mr-2 font-bold tracking-wider">
              Hello
            </span>
            <span className="relative inline-block h-[1.5em]">
              <span className="text-4xl text-primary absolute left-1/2 -translate-x-1/2 bottom-[-0.2em]">
                &#8226;
              </span>
            </span>
          </motion.h2>

          <motion.h1
            className="font-semibold leading-tight"
            variants={itemVariants}
          >
            <motion.div className="flex items-end mb-6" variants={itemVariants}>
              <span className="h-0.5 bg-primary mr-2 w-24 mb-2"></span>
              <motion.span
                className="text-2xl font-lora tracking-wide inline-flex overflow-hidden"
                variants={textParent}
                initial="hidden"
                animate="visible"
              >
                {name.split("").map((char, i) => (
                  <motion.span key={i} variants={letter} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.div>

            <span className="text-white text-4xl font-sans block px-6 md:px-16">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-light font-roboto mt-2 mb-4 max-w-md pl-6 md:pl-16"
            variants={itemVariants}
          >
            I build interactive and modern web experiences using React, Tailwind
            CSS, and Firebase. Let's turn ideas into fast, beautiful websites.
          </motion.p>

          <motion.div
            className="flex gap-4 pl-6 md:pl-16"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="bg-primary text-white px-5 py-3 hover:opacity-70 transition duration-200 ease-linear"
            >
              Got a project?
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-5 py-3 hover:bg-primary hover:text-white transition duration-200 ease-linear"
            >
              My Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image Section */}
        <motion.div
          className="flex justify-center flex-1 relative"
          variants={itemVariants}
        >
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div
              className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/20 blur-2xl"
              style={{ filter: "blur(60px)" }}
            ></div>
          </div>
          <motion.img
            src={heroImage}
            alt="Developer Illustration"
            className="w-80 h-auto z-10 relative"
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

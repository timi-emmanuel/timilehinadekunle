import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.png";


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const containerVariants = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,  
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08, // less delay
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const textParent = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.5, // was 0.4
      staggerChildren: 0.08,
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
      ease: [0.25, 0.46, 0.45, 0.94], 
    },
  },
};


const Hero = () => {
  const name = "I'm Timilehin,";

  return (
    <motion.section
      id="home"
      className="relative text-white md:h-fit xl:h-screen 2xl:h-full flex justify-between overflow-hidden bg-dark mt-16 md:mt-12 lg:mt-6 md:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern z-0"></div>

      {/* Gradient Glow Blobs */}
      <motion.div
        className="absolute w-[30rem] h-[30rem] bg-gradient-to-tr from-primary-500 via-accent-500 to-cyan-500 rounded-full blur-[120px] opacity-20 left-1/2 -translate-x-1/2 top-10 z-0"
        animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[25rem] h-[25rem] bg-gradient-to-bl from-cyan-500 via-primary-500 to-accent-500 rounded-full blur-[100px] opacity-15 right-0 bottom-20 z-0"
        animate={{ scale: [1, 1.15, 1], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className=" w-full grid md:grid-cols-2 gap-12 items-center pt-8 relative z-10"
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-6 flex-1 z-10"
        >
          <motion.h2
            className="flex items-end mb-2 relative pl-0 md:pl-8"
            variants={itemVariants}
          >
            <span className="text-2xl sm:text-3xl text-white mr-3 font-bold tracking-wider">
              Hello
            </span>
            <span className="relative inline-block h-[1.5em]">
              <span className="text-4xl text-primary-500 absolute left-1/2 -translate-x-1/2 bottom-[-0.2em] animate-pulse-slow">
                &#8226;
              </span>
            </span>
          </motion.h2>

          <motion.h1
            className="font-bold leading-tight"
            variants={itemVariants}
          >
            <motion.div className="flex items-end mb-4 md:mb-6" variants={itemVariants}>
              <span className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 mr-3 w-16 md:w-24 mb-2 rounded-full"></span>
              <motion.span
                className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight inline-flex overflow-hidden"
                variants={textParent}
                initial="hidden"
                animate="visible"
              >
                {name.split("").map((char, i) => (
                  <motion.span key={i} variants={letter} className="inline-block text-white">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.div>

            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold block pl-0 md:pl-8 relative">
              <span className="gradient-text relative inline-block">
                Frontend Developer                
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="text-light text-base sm:text-lg mt-4 mb-6 max-w-lg leading-relaxed pl-0 md:pl-8"
            variants={itemVariants}
          >
            I build interactive and modern web experiences using React, Tailwind
            CSS, and Firebase. Let's turn ideas into fast, beautiful websites.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pl-0 md:pl-8"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById("contact");
                if (targetElement) {
                  const offset = 80;
                  const targetPosition = targetElement.offsetTop - offset;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="btn-primary text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Got a project?
            </motion.a>
            <motion.a
              href="/frontendResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Image Section */}
        <motion.div
          className="flex justify-center items-center flex-1 relative lg:mr-12 mt-8 md:mt-0"
          variants={itemVariants}
        >
          <motion.div
            className="relative z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src={heroImage}
              alt="Developer Illustration"
              className="w-full max-w-[28rem] sm:max-w-[32rem] h-auto relative rounded-2xl shadow-2xl hover-glow"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl -z-10"></div>
          </motion.div>

          {/* Floating Tech Badges */}
          <motion.div 
            className="absolute top-4 right-4 md:top-8 md:right-10 glass-card px-4 py-2 text-sm text-white rounded-full shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          >
            <span className="gradient-text-primary font-semibold">React.js</span>
          </motion.div>
          <motion.div 
            className="absolute top-4 left-4 md:top-8 md:left-2 glass-card px-4 py-2 text-sm text-white rounded-full shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="gradient-text-primary font-semibold">Tailwind</span>
          </motion.div>
          <motion.div 
            className="absolute bottom-4 left-4 md:bottom-8 md:left-3 glass-card px-4 py-2 text-sm text-white rounded-full shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="gradient-text-primary font-semibold">Framer</span>
          </motion.div>
          <motion.div 
            className="absolute bottom-4 right-4 md:bottom-8 md:right-2 glass-card px-4 py-2 text-sm text-white rounded-full shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <span className="gradient-text-primary font-semibold">Node.js</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;


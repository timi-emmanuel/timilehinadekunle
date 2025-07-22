import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.png";


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08, // less delay
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const textParent = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1, // was 0.4
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
      duration: 0.35, 
      ease: [0.25, 0.46, 0.45, 0.94], // '
    },
  },
};


const Hero = () => {
  const name = "I'm Timilehin,";

  return (
    <motion.section
      id="home"
      className="relative text-white  md:h-fit xl:h-screen 2xl:h-full flex  justify-between overflow-hidden bg-dark mt-16 md:mt-12 lg:mt-6 md:pb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_2px)] [background-size:24px_24px] opacity-20 animate-pulse-slow z-0"></div>

      {/* Gradient Glow Blob */}
      <motion.div
      className="absolute w-[30rem] h-[30rem] bg-gradient-to-tr from-primary via-purple-600 to-indigo-500 rounded-full blur-[120px] opacity-30 left-1/2 -translate-x-1/2 top-10 z-0"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}/>

      <motion.div
        className=" w-full grid md:grid-cols-2 gap-12 items-center pt-8 relative z-10"
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
            <span className="text-2xl text-white mr-2 font-bold tracking-wider animate-pulse">
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
                className="text-2xl font-lora tracking-wide inline-flex overflow-hidden "
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

            <span className="text-white text-3xl lg:text-4xl font-sans block pl-6 md:pl-12 lg:px-16 relative">
              <span className="relative inline-block animate-bounce-slow">
                Frontend Developer                
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="text-light font-roboto mt-2 mb-4 max-w-md px-6 md:pl-12 md:pr-0 lg:pl-16 lg:pr-0"
            variants={itemVariants}
          >
            I build interactive and modern web experiences using React, Tailwind
            CSS, and Firebase. Let's turn ideas into fast, beautiful websites.
          </motion.p>

          <motion.div
            className="flex gap-4 pl-6 md:pl-12 lg:pl-16"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="bg-primary text-white px-5 py-3 rounded hover:opacity-80 hover:scale-105 transition-transform duration-200"
            >
              Got a project?
            </a>
            <a
              href="/frontendResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-5 py-3 rounded hover:bg-primary hover:text-white hover:scale-105 transition-transform duration-200"
            >
              My Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image Section */}
        <motion.div
          className="flex justify-center flex-1 relative lg:mr-12"
          variants={itemVariants}
        >
          <motion.img
            src={heroImage}
            alt="Developer Illustration"
            className="w-[30rem] h-auto z-10 relative rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          
          <div className="absolute top-8 right-10 bg-dark px-3 py-1 text-sm text-white border border-primary rounded-full shadow-lg animate-bounce-slow">
            React.js
          </div>
          <div className=" absolute top-8 left-8 md:left-2 bg-dark px-3 py-1 text-sm text-white border border-primary rounded-full shadow-md animate-pulse-slow">
            Tailwind
          </div>

          <div className=" absolute md:bottom-8 md:left-3 bg-dark px-3 py-1 text-sm text-white border border-primary rounded-full shadow-md animate-bounce-slow">
            Framer
          </div>
          <div className="absolute md:bottom-8 right-2 bg-dark px-3 py-1 text-sm text-white border border-primary rounded-full shadow-lg animate-pulse-slow">
            Node.js
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white opacity-60 z-10">
        ↓
      </div>
    </motion.section>
  );
};

export default Hero;


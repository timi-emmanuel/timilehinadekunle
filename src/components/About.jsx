import { motion } from "framer-motion";
import Skills from "./Skills";


const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-darkSecondary text-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex items-center gap-4 mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white relative inline-flex items-end font-display">
          About
          <span className="text-4xl text-primary-500 absolute -right-4 bottom-[-0.20em]">
            &#8226;
          </span>
        </h2>
        <div className="w-full h-[0.1em] bg-gradient-to-r from-primary/50 via-accent/50 to-transparent"></div>
      </div>

      <div className="mx-auto flex flex-col-reverse md:flex-row-reverse mt-8 gap-8 lg:gap-16">
        
        {/* Skills */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2"
        >
         <Skills/>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 text-left space-y-6"
        >      
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-light leading-relaxed">
              I'm Timilehin Adekunle, a passionate frontend developer with a
              mechanical engineering background. I love building clean, responsive
              UIs and modern web apps that feel great to use. My tools of choice
              include React, Tailwind CSS, and Firebase — and I'm currently
              exploring TypeScript and Next.js to further improve performance and
              scalability in my projects.
            </p>
            <p className="text-base sm:text-lg text-light leading-relaxed">
              Over time, I've built a range of projects — from sleek landing pages
              and dashboards to real-time tools with authentication and database
              integration. I take pride in attention to detail, problem-solving, web accessibility
              and learning fast. Whether it's a design-heavy interface or a
              functional frontend challenge, I enjoy bringing ideas to life.
            </p>
            <p className="text-base sm:text-lg text-light leading-relaxed">
              Outside of code, I love skyscrapers, great storytelling, and I think it safe to say I'm a critical thinker with a flair for the extraordinaire. I believe software should feel as good as it
              works — and I'm here to create meaningful digital experiences that do
              just that.
            </p>
          </div>
          <div>
            {/* Stats Section */}
            <div className="flex gap-6 lg:gap-8 mt-8 flex-wrap">
              <motion.div 
                className="glass-card flex flex-col items-center justify-center rounded-xl px-6 py-4 hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-4xl font-bold gradient-text-primary">2+</span>
                <span className="text-light text-sm mt-2 whitespace-nowrap">Years Experience</span>
              </motion.div>
              <motion.div 
                className="glass-card flex flex-col items-center justify-center rounded-xl px-6 py-4 hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-4xl font-bold gradient-text-primary">10+</span>
                <span className="text-light text-sm mt-2 whitespace-nowrap">Projects Completed</span>
              </motion.div>
              <motion.div 
                className="glass-card flex flex-col items-center justify-center rounded-xl px-6 py-4 hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-4xl font-bold gradient-text-primary">98%</span>
                <span className="text-light text-sm mt-2 whitespace-nowrap">Client Satisfaction</span>
              </motion.div>
            </div>
          </div>
         
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;

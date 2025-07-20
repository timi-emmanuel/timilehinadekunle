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
      className="pt-20 pb-12 bg-[#0e0e0e] text-light "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}

    >
      <div className="flex items-center gap-4 w-[90%] md:w-[85%] mx-auto">
           <h2 className="text-5xl font-bold text-white relative inline-flex items-end">
              About
           <span className="text-4xl text-primary absolute -right-4 bottom-[-0.20em]">
                  &#8226;
           </span>
          </h2>
           <div className="w-full h-[0.1em] bg-gray-600"></div>
          
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row-reverse mt-8 gap-12">
        
        {/* Skills */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 flex "
        >
         <Skills/>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 text-left space-y-6"
        >      
          <div>
             <p className="text-base text-light leading-relaxed">
            I'm Timilehin Adekunle, a passionate frontend developer with a
            mechanical engineering background. I love building clean, responsive
            UIs and modern web apps that feel great to use. My tools of choice
            include React, Tailwind CSS, and Firebase — and I’m currently
            exploring TypeScript and Next.js to further improve performance and
            scalability in my projects.
          </p>
          <p className="text-base text-light leading-relaxed">
            Over time, I’ve built a range of projects — from sleek landing pages
            and dashboards to real-time tools with authentication and database
            integration. I take pride in attention to detail, problem-solving, web accessibility
            and learning fast. Whether it’s a design-heavy interface or a
            functional frontend challenge, I enjoy bringing ideas to life.
          </p>
          <p className="text-base text-light leading-relaxed">
            Outside of code, I love skyscrapers, great storytelling, and I think it safe to say I'm a critical thinker with a flair for the extraordinaire. I believe software should feel as good as it
            works — and I’m here to create meaningful digital experiences that do
            just that.
          </p>
          </div>
          <div>
            {/* Stats Section */}
            <div className="flex gap-8 mt-8 flex-wrap">
              <div className="flex flex-col items-center justify-center rounded-xl px-2 py-0 min-w-[100px]">
                <span className="text-3xl font-bold text-primary">2+</span>
                <span className="text-light text-sm mt-1 whitespace-nowrap">Years Experience</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl px-2 py-0 min-w-[100px]">
                <span className="text-3xl font-bold text-primary">10+</span>
                <span className="text-light text-sm mt-1 whitespace-nowrap">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl px-2 py-0 min-w-[100px]">
                <span className="text-3xl font-bold text-primary">98%</span>
                <span className="text-light text-sm mt-1 whitespace-nowrap">Client Satisfaction</span>
              </div>
            </div>
          </div>
         
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;

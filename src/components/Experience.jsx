import { motion } from "framer-motion";

const experienceVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="text-white pt-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto">
       <div className="flex  items-center gap-4 mx-auto mb-12 p-2 md:p-0">           
             
           <h2 className="text-5xl  font-bold text-white relative inline-flex items-end">
            <span className="hidden md:inline">Experience</span>
            <span className="md:hidden">Exp</span>
              
           <span className="text-4xl text-primary absolute -right-4 bottom-[-0.20em]">
                  &#8226;
           </span>
          </h2>       
          <div className="w-full h-[0.1em] bg-gray-600"></div> 
        </div>

        <motion.div
          className="bg-grayDark border border-primary/40 p-6 rounded-lg shadow hover:shadow-lg transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={experienceVariants}
        >
          <h3 className="text-xl font-semibold text-white mb-1">J6 Business</h3>
          <p className="text-sm text-light italic mb-2">
            Frontend Developer &bull; 2024 – Present
          </p>
          <p className="text-light">
            Built and maintained the frontend of <strong>QuiqOrder</strong> — an AI-powered restaurant assistant and dashboard system. Implemented clean UI with React and Tailwind CSS, integrated Firebase services, and contributed to the overall UX and responsiveness of the platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

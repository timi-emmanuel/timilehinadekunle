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
    <section id="experience" className="text-white pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-darkSecondary">
      <div className="mx-auto">
        <div className="flex items-center gap-4 mx-auto mb-16 p-2 md:p-0">           
          <h2 className="text-4xl sm:text-5xl font-bold text-white relative inline-flex items-end font-display">
            <span className="hidden md:inline">Experience</span>
            <span className="md:hidden">Exp</span>
            <span className="text-4xl text-primary-500 absolute -right-4 bottom-[-0.20em]">
              &#8226;
            </span>
          </h2>       
          <div className="w-full h-[0.1em] bg-gradient-to-r from-primary/50 via-accent/50 to-transparent"></div> 
        </div>

        <motion.div
          className="glass-card p-8 rounded-2xl hover-lift"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={experienceVariants}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2 font-display gradient-text-primary">J6 Business</h3>
          <p className="text-sm text-primary-400 font-medium mb-4">
            Frontend Developer &bull; 2024 – Present
          </p>
          <p className="text-light leading-relaxed text-base">
            Built and maintained the frontend of <strong className="text-white">QuiqOrder</strong> — an AI-powered restaurant assistant and dashboard system. Implemented clean UI with React and Tailwind CSS, integrated Firebase services, and contributed to the overall UX and responsiveness of the platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

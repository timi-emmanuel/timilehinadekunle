import { motion } from "framer-motion";

const experiences = [
  {
    company: "SBE",
    role: "Software Engineer",
    period: "2025 – Present",
    description: (
      <>
        Built and maintained internal sportsbook back-office systems at{" "}
        <strong className="text-slate-800 dark:text-textDark">SBE</strong>.
        Worked across multiple codebases (main and partner BO), implementing
        role-based access control for superusers, agents, and cashiers.
        Designed and integrated authentication flows, API key systems,
        financial logic (deposits, withdrawals, RTP calculations), and
        performance optimizations such as caching. Collaborated with the
        product team to ensure reliability, security, and scalability of
        sportsbook operations.
      </>
    ),
  },
  {
    company: "QuiqOrder",
    role: "Frontend Developer",
    period: "2024 – Present",
    description: (
      <>
        Built and maintained the frontend of{" "}
        <strong className="text-slate-800 dark:text-textDark">QuiqOrder</strong> —
        an AI-powered restaurant assistant and dashboard system. Implemented
        clean UI with React and Tailwind CSS, integrated Firebase services,
        and contributed to the overall UX and responsiveness of the platform.
      </>
    ),
  },
];

export { experiences };

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
    <section id="experience" className="text-slate-800 dark:text-textDark pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-slate-100 dark:bg-darkSecondary transition-colors duration-300">
      <div className="mx-auto">
        <div className="flex items-center gap-4 mx-auto mb-16 p-2 md:p-0">           
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-textDark relative inline-flex items-end font-display">
            <span className="hidden md:inline">Experience</span>
            <span className="md:hidden">Exp</span>
            <span className="text-4xl text-primary-500 absolute -right-4 bottom-[-0.20em]">
              &#8226;
            </span>
          </h2>       
          <div className="w-full h-[0.1em] bg-gradient-to-r from-primary/50 via-accent/50 to-transparent"></div> 
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={experienceVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-textDark mb-2 font-display gradient-text-primary">
                {experience.company}
              </h3>
              <p className="text-sm text-primary-400 font-medium mb-4">
                {experience.role} &bull; {experience.period}
              </p>
              <div className="text-slate-600 dark:text-lightDark leading-relaxed text-base">
                {experience.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

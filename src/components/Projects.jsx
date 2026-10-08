import { motion } from "framer-motion";
import { GitBranch, ArrowSquareOut } from "@phosphor-icons/react";
import { projectsData } from "../data/projectDetails";

const Projects = () => {

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
        className="pane"
        id="projects"
      >
        {/* Pane Header with Counter */}
        <div className="pane-label">
          <span>02 — projects/</span>
          <span className="status-live font-mono text-xs">3 IN PRODUCTION</span>
        </div>

        {/* Project Rows with Backdrop & Clickable Images */}
        <div className="divide-y divide-border text-left">
          {projectsData.map((project, index) => {
            const destinationUrl = project.liveUrl || project.githubUrl;
            const isClickable = Boolean(destinationUrl);
            const isAlternate = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="p-4 sm:p-6 lg:p-8 hover:bg-panel-2/30 transition-colors duration-200 group/row"
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  
                  {/* Project Image / Architecture Card Column (5 cols) */}
                  <div className={`md:col-span-5 ${isAlternate ? "md:order-2" : "md:order-1"}`}>
                    <div
                      className={`relative p-3 sm:p-3.5 border border-border bg-[#0E120F] overflow-hidden block group select-none transition-all duration-300 ${
                        isClickable
                          ? "cursor-pointer hover:border-accent/70 hover:shadow-[0_8px_24px_rgba(242,184,75,0.08)]"
                          : "cursor-default"
                      }`}
                    >
                      {/* Atmospheric Backdrop: Blurred Screenshot or Radial Glow */}
                      <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center blur-2xl opacity-25 scale-125 transition-opacity duration-500 group-hover:opacity-45 pointer-events-none"
                        style={
                          project.image
                            ? { backgroundImage: `url("${project.image}")` }
                            : { background: "radial-gradient(circle, rgba(242,184,75,0.22) 0%, rgba(10,13,11,0.85) 100%)" }
                        }
                        aria-hidden="true"
                      />

                      {/* Subtle Cross-Dot Texture Overlay */}
                      <div
                        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#F2B84B_1px,transparent_1px)] [background-size:12px_12px]"
                        aria-hidden="true"
                      />

                      {/* Main Foreground Container */}
                      <div className="relative border border-border/90 bg-black aspect-[16/10] overflow-hidden shadow-md transition-all duration-300 group-hover:scale-[1.02]">
                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top opacity-95 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                            loading="lazy"
                          />
                        )}

                        {/* Status Overlay Badge */}
                        <div className="absolute top-2 left-2 z-10">
                          <span
                            className={`font-mono text-xs px-2 py-0.5 border backdrop-blur-md uppercase tracking-wider ${
                              project.status === "live"
                                ? "border-live text-live bg-[#0A0D0B]/90 shadow-[0_0_6px_rgba(74,222,128,0.25)]"
                                : "border-accent text-accent bg-[#0A0D0B]/90"
                            }`}
                          >
                            {project.status === "live" ? "Live" : "In Development"}
                          </span>
                        </div>

                        {/* Hover Action Pill */}
                        {isClickable && (
                          <div className="absolute bottom-2 right-2 z-10 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                            <a
                              href={destinationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-xs px-2.5 py-1 bg-accent text-[#0A0D0B] font-semibold flex items-center gap-1 shadow-md hover:brightness-110"
                            >
                              <span>{project.liveUrl ? "live demo" : "source"}</span>
                              <ArrowSquareOut size={13} weight="bold" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content & Metadata Column (7 cols) */}
                  <div className={`md:col-span-7 space-y-3 ${isAlternate ? "md:order-1" : "md:order-2"}`}>
                    
                    {/* Category & Single Consistent Status Label */}
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <span className="text-muted-2 text-xs uppercase tracking-wider">
                        {project.category}
                      </span>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-muted-2 text-xs select-none">
                          {project.statusLabel}
                        </span>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline flex items-center gap-1 transition-colors"
                            aria-label={`View live demo for ${project.title}`}
                          >
                            <ArrowSquareOut size={13} weight="bold" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent flex items-center gap-1 transition-colors"
                            aria-label={`View source code for ${project.title}`}
                          >
                            <GitBranch size={13} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Title (Clickable if Link Exists) */}
                    <h3 className="font-mono text-base sm:text-lg font-semibold text-text">
                      {destinationUrl ? (
                        <a
                          href={destinationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>

                    {/* Summary / Description */}
                    <p className="font-sans text-xs sm:text-[13.5px] text-muted leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ y: -2, scale: 1.04 }}
                          transition={{ type: "spring", stiffness: 450, damping: 20 }}
                          className="tech-tag text-xs py-0.5 px-2 cursor-default select-none hover:border-accent/70 hover:text-accent transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Case study modal placeholder if needed */}
      {/* <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      /> */}
    </>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { LockSimple, ArrowUpRight, GitBranch, ArrowSquareOut } from "@phosphor-icons/react";
import { projectsData } from "../data/projectDetails";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="pane"
      id="projects"
    >
      {/* Pane Header */}
      <div className="pane-label">
        <span>02 — projects/</span>
        <span className="status-live font-mono text-[10px]">3 in production</span>
      </div>

      {/* Project Rows with Backdrop & Clickable Images */}
      <div className="divide-y divide-border text-left">
        {projectsData.map((project) => {
          const destinationUrl = project.liveUrl || project.githubUrl;
          const isClickable = Boolean(destinationUrl);

          return (
            <div
              key={project.id}
              className="p-6 sm:p-8 hover:bg-panel-2/30 transition-colors duration-150"
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                
                {/* Project Image with Backdrop Column (5 cols) */}
                <div className="md:col-span-5">
                  <a
                    href={destinationUrl || undefined}
                    target={destinationUrl ? "_blank" : undefined}
                    rel={destinationUrl ? "noopener noreferrer" : undefined}
                    className={`relative p-3 sm:p-3.5 border border-border bg-[#0E120F] overflow-hidden block group select-none transition-all duration-300 ${
                      isClickable
                        ? "cursor-pointer hover:border-accent/60"
                        : "cursor-default"
                    }`}
                    title={
                      project.liveUrl
                        ? `Open live demo for ${project.title}`
                        : project.githubUrl
                        ? `View source for ${project.title}`
                        : project.title
                    }
                  >
                    {/* Atmospheric Backdrop: Blurred Project Screenshot + Grid Texture */}
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center blur-2xl opacity-25 scale-125 transition-opacity duration-300 group-hover:opacity-40 pointer-events-none"
                      style={{ backgroundImage: `url("${project.image}")` }}
                      aria-hidden="true"
                    />

                    {/* Subtle Cross-Dot Texture Overlay */}
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#F2B84B_1px,transparent_1px)] [background-size:12px_12px]"
                      aria-hidden="true"
                    />

                    {/* Main Foreground Screenshot */}
                    <div className="relative border border-border/90 bg-black aspect-[16/10] overflow-hidden shadow-md transition-all duration-300 group-hover:scale-[1.02]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-95 transition-opacity duration-300 group-hover:opacity-100"
                        loading="lazy"
                      />

                      {/* Status Overlay Badge */}
                      <div className="absolute top-2 left-2 z-10">
                        <span
                          className={`font-mono text-[9px] px-1.5 py-0.5 border backdrop-blur-md uppercase tracking-wider ${
                            project.status === "live"
                              ? "border-live text-live bg-[#0A0D0B]/90 shadow-[0_0_6px_rgba(74,222,128,0.25)]"
                              : "border-accent text-accent bg-[#0A0D0B]/90"
                          }`}
                        >
                          {project.status === "live" ? "live" : "in progress"}
                        </span>
                      </div>

                      {/* Hover Action Pill (When Clickable) */}
                      {isClickable && (
                        <div className="absolute bottom-2 right-2 z-10 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                          <span className="font-mono text-[10px] px-2 py-0.5 bg-accent text-[#0A0D0B] font-semibold flex items-center gap-1 shadow-md">
                            <span>{project.liveUrl ? "live demo" : "source"}</span>
                            <ArrowSquareOut size={12} weight="bold" />
                          </span>
                        </div>
                      )}
                    </div>
                  </a>
                </div>

                {/* Content & Metadata Column (7 cols) */}
                <div className="md:col-span-7 space-y-3">
                  
                  {/* Category & Text Links Row */}
                  <div className="flex items-center justify-between gap-3 font-mono text-xs">
                    <span className="text-muted-2 text-[11px] uppercase tracking-wider">
                      {project.category}
                    </span>
                    
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-accent flex items-center gap-1 transition-colors"
                        >
                          <span>↗ live demo</span>
                        </a>
                      )}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-accent flex items-center gap-1 transition-colors"
                        >
                          <GitBranch size={13} />
                          <span>↗ source</span>
                        </a>
                      ) : (
                        <span className="text-muted-2 text-[11px] flex items-center gap-1 select-none">
                          <LockSimple size={12} />
                          <span>private repo</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Title (Also Clickable if Link Exists) */}
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
                      <span key={idx} className="tech-tag text-[11px] py-0.5 px-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;

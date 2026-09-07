import { motion } from "framer-motion";
import { LockSimple, GitBranch, ArrowSquareOut } from "@phosphor-icons/react";
import { projectsData, archivedExperiments } from "../data/projectDetails";

const Projects = () => {
  const liveCount = projectsData.filter((p) => p.status === "live").length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="pane"
      id="projects"
    >
      {/* Pane Header with Dynamically Derived Count */}
      <div className="pane-label">
        <span>02 — projects/</span>
        <span className="status-live font-mono text-[10px]">{liveCount} in production</span>
      </div>

      {/* Project Rows with Backdrop & Clickable Images */}
      <div className="divide-y divide-border text-left">
        {projectsData.map((project) => {
          const destinationUrl = project.liveUrl || project.githubUrl;
          const isClickable = Boolean(destinationUrl);

          return (
            <div
              key={project.id}
              className="p-4 sm:p-6 lg:p-8 hover:bg-panel-2/30 transition-colors duration-150"
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                
                {/* Project Image / Architecture Card Column (5 cols) */}
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
                    {/* Atmospheric Backdrop: Blurred Screenshot or Radial Glow */}
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center blur-2xl opacity-25 scale-125 transition-opacity duration-300 group-hover:opacity-40 pointer-events-none"
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
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top opacity-95 transition-opacity duration-300 group-hover:opacity-100"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full p-3.5 sm:p-4 flex flex-col justify-between bg-[#080B09] font-mono select-none">
                          <div className="flex items-center justify-between text-[10px] text-muted-2 border-b border-border/80 pb-2">
                            <span className="flex items-center gap-1.5 text-accent">
                              <LockSimple size={12} weight="bold" />
                              <span>SYS://ENTERPRISE_INTERNAL</span>
                            </span>
                            <span className="text-[9px] px-1 py-0.2 border border-border text-muted-2 uppercase tracking-wider">
                              RESTRICTED
                            </span>
                          </div>

                          {/* Stylized SVG Attribution Cohort / Data Pipeline Graphic */}
                          <div className="py-2 flex flex-col items-center justify-center space-y-1.5 text-center">
                            <div className="w-full max-w-[180px] h-10 flex items-center justify-center gap-1.5 opacity-60">
                              <div className="h-5 w-2 bg-accent/40 rounded-xs" />
                              <div className="h-9 w-2 bg-accent/70 rounded-xs" />
                              <div className="h-7 w-2 bg-accent/50 rounded-xs" />
                              <div className="h-10 w-2 bg-accent rounded-xs" />
                              <div className="h-6 w-2 bg-accent/60 rounded-xs" />
                              <div className="h-8 w-2 bg-accent/80 rounded-xs" />
                            </div>
                            <div className="text-[10.5px] font-semibold text-text tracking-wide uppercase">
                              CONFIDENTIAL ENTERPRISE PLATFORM
                            </div>
                            <div className="text-[9px] text-muted-2 max-w-[210px] leading-tight">
                              Sportsbook & Casino Multi-Tenant Attribution // NDA Protected
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[9px] text-muted-2 border-t border-border/80 pt-1.5">
                            <span>TENANT_ISOLATION: ENFORCED</span>
                            <span className="text-accent">3-TIER RBAC</span>
                          </div>
                        </div>
                      )}

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
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
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
                          <span>private / internal</span>
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

      {/* Archived Experiments & Utilities Strip */}
      <div className="p-4 sm:p-6 border-t border-border bg-panel-2/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-muted-2">
          <span className="text-accent">$</span>
          <span>ls ./archived_experiments</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {archivedExperiments.map((item, idx) => (
            <a
              key={idx}
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <span className="text-text font-medium">{item.title}</span>
              <span className="text-muted-2 text-[11px] hidden md:inline">({item.description})</span>
              <ArrowSquareOut size={12} weight="bold" />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

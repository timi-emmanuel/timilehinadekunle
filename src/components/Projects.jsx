import { useState } from "react";
import { motion } from "framer-motion";
import { LockSimple, GitBranch, ArrowSquareOut, Terminal } from "@phosphor-icons/react";
import { projectsData, archivedExperiments } from "../data/projectDetails";
import CaseStudyModal from "./CaseStudyModal";

const Projects = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const liveCount = projectsData.filter((p) => p.status === "live").length;

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
                className="p-4 sm:p-6 lg:p-8 hover:bg-panel-2/30 transition-colors duration-200 group/row"
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  
                  {/* Project Image / Architecture Card Column (5 cols) */}
                  <div className="md:col-span-5">
                    <div
                      onClick={() => {
                        if (project.caseStudy && !destinationUrl) {
                          setActiveCaseStudy(project);
                        }
                      }}
                      className={`relative p-3 sm:p-3.5 border border-border bg-[#0E120F] overflow-hidden block group select-none transition-all duration-300 ${
                        isClickable
                          ? "cursor-pointer hover:border-accent/70 hover:shadow-[0_8px_24px_rgba(242,184,75,0.08)]"
                          : project.caseStudy
                          ? "cursor-pointer hover:border-accent/50"
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
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top opacity-95 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
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

                        {/* Hover Action Pill */}
                        {isClickable ? (
                          <div className="absolute bottom-2 right-2 z-10 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                            <a
                              href={destinationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-[10px] px-2 py-0.5 bg-accent text-[#0A0D0B] font-semibold flex items-center gap-1 shadow-md hover:brightness-110"
                            >
                              <span>{project.liveUrl ? "live demo" : "source"}</span>
                              <ArrowSquareOut size={12} weight="bold" />
                            </a>
                          </div>
                        ) : project.caseStudy ? (
                          <div className="absolute bottom-2 right-2 z-10 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                            <span className="font-mono text-[10px] px-2 py-0.5 bg-[#161B17] border border-accent/80 text-accent font-semibold flex items-center gap-1 shadow-md">
                              <span>case study</span>
                              <Terminal size={11} weight="bold" />
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </div>
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

                    {/* Tech Stack Pills with Micro-Spring Hover */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ y: -2, scale: 1.04 }}
                          transition={{ type: "spring", stiffness: 450, damping: 20 }}
                          className="tech-tag text-[11px] py-0.5 px-2 cursor-default select-none hover:border-accent/70 hover:text-accent transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* 6-Part Case Study Action Trigger */}
                    {project.caseStudy && (
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <motion.button
                          type="button"
                          onClick={() => setActiveCaseStudy(project)}
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn-terminal btn-terminal-ghost py-1 px-2.5 text-xs text-text hover:text-accent hover:border-accent/80 flex items-center gap-1.5 transition-all shadow-xs"
                          title={`Inspect 6-part senior engineering case study for ${project.title}`}
                        >
                          <Terminal size={13} className="text-accent" />
                          <span>inspect case study [01–06]</span>
                          <ArrowSquareOut size={12} className="text-muted-2" />
                        </motion.button>
                        <span className="font-mono text-[10.5px] text-muted-2 hidden sm:inline">
                          // verified struggle story & architectural trade-offs
                        </span>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Archived Experiments & Utilities Strip with Micro-Interactions */}
        <div className="p-4 sm:p-6 border-t border-border bg-panel-2/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-muted-2">
            <span className="text-accent">$</span>
            <span>ls ./archived_experiments</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {archivedExperiments.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="text-muted hover:text-accent transition-colors flex items-center gap-1.5 group/exp"
              >
                <span className="text-text font-medium group-hover/exp:text-accent transition-colors">
                  {item.title}
                </span>
                <span className="text-muted-2 text-[11px] hidden md:inline">({item.description})</span>
                <ArrowSquareOut size={12} weight="bold" className="group-hover/exp:translate-x-0.5 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6-Part Case Study Terminal Inspector Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </>
  );
};

export default Projects;

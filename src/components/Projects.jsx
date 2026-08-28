import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowSquareOut,
  GithubLogo,
  LockKey,
  Tag,
  Sparkle,
  Cpu,
  CheckCircle,
  X,
  Buildings,
  ShieldCheck,
  Lightning,
  Funnel
} from "@phosphor-icons/react";
import { fadeUpVariant as cardVariants, staggerContainerVariant as containerVariants } from "../utils/animations";

import ShortlyImg from "../assets/Shortly.png";
import QuiqOrderImg from "../assets/QuiqOrder Homepage.png";
import NationaryImg from "../assets/nationary.png";
import MatchkicksImg from "../assets/matchkicks.png";
import PadiHoldImg from "../assets/padihold.png";
import JirellaImg from "../assets/jirella-farm.png";

const categories = ["ALL", "FINTECH & SAAS", "AGRITECH & TOOLS", "WEB APPS"];

const projects = [
  {
    id: "padihold",
    title: "PadiHold — Escrow Platform",
    subtitle: "Nigeria's Escrow Platform for Secure Online Transactions",
    category: "FINTECH & SAAS",
    featured: true,
    tag: "FINTECH ESCROW",
    tagColor: "bg-neo-pink",
    tagTextColor: "text-white",
    metrics: "Blockchain Escrow • AI Dispute Assistant",
    description:
      "Nigeria's trust-centric escrow platform engineered to eliminate e-commerce fraud. Features a smart dispute resolution assistant powered by OpenAI, a trust scoring algorithm, and WhatsApp/Telegram bot interfaces for transaction updates.",
    highlights: [
      "Architected with Next.js, Tailwind CSS, Zustand, and Radix UI.",
      "Integrated AI dispute resolution assistant with OpenAI and simulated logistics API.",
      "Solidity smart contract prototype with Hardhat & Firebase Functions backend.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Firebase Functions", "Zustand", "Radix UI", "OpenAI", "Solidity"],
    live: "https://padi-hold.vercel.app/",
    github: null,
    image: PadiHoldImg,
    confidential: false,
  },
  {
    id: "jirella-farm",
    title: "Jirella Farm Management System",
    subtitle: "Modular Agritech & Inventory Platform",
    category: "AGRITECH & TOOLS",
    featured: true,
    tag: "SUPABASE RLS & AUTH",
    tagColor: "bg-neo-lime",
    metrics: "PostgreSQL Schema • Inventory • Feed Mill Logs",
    description:
      "A modern, modular farm management system designed for agricultural businesses. Covers inventory and store tracking, poultry lifecycle metrics, mortality tracking, and feed mill production logs with Supabase backend architecture.",
    highlights: [
      "Designed scalable data architecture on Supabase with strict Row-Level Security (RLS).",
      "Built modular dashboard components with Next.js, shadcn/ui, and Tailwind CSS.",
      "Interactive data visualizations for daily production output and feed consumption.",
    ],
    tech: ["Next.js", "Supabase", "PostgreSQL", "RLS & Auth", "shadcn/ui", "Tailwind CSS"],
    live: null,
    github: null,
    image: JirellaImg,
    confidential: false,
  },
  {
    id: "quiqorder",
    title: "QuiqOrder (Startup)",
    subtitle: "AI-Powered WhatsApp Storefront & Ordering System",
    category: "FINTECH & SAAS",
    featured: true,
    tag: "SAAS STARTUP",
    tagColor: "bg-neo-yellow",
    metrics: "WhatsApp API • Paystack Payments",
    description:
      "Frontend development for QuiqOrder's branded storefront platform empowering WhatsApp-based sellers. Includes real-time ordering UI, Firebase data sync, and Paystack payment processing.",
    highlights: [
      "Built responsive ordering interfaces for merchants and end-customers.",
      "Integrated Firebase authentication and real-time order state pipelines.",
      "Built segmented merchant activation content as the product scaled.",
    ],
    tech: ["React", "Firebase", "Node.js", "WhatsApp API", "Paystack", "OpenAI"],
    live: "https://www.quiqorderng.com/",
    github: null,
    image: QuiqOrderImg,
    confidential: false,
  },
  {
    id: "mockup-tool",
    title: "Mockup Integration Tool",
    subtitle: "Automated Image Processing & Placement Engine",
    category: "AGRITECH & TOOLS",
    featured: false,
    tag: "BACKEND AUTOMATION",
    tagColor: "bg-neo-blue",
    metrics: "AWS S3 • Sharp • Coordinate Mapping",
    description:
      "Backend automation service that dynamically overlays user-uploaded custom designs onto apparel and merchandise mockups at pixel-perfect coordinates.",
    highlights: [
      "Engineered high-throughput image rendering pipelines with Node.js and Sharp.",
      "Integrated Amazon S3 for multi-part file uploads and asset storage.",
      "Designed coordinate mapping algorithms for realistic product mockups.",
    ],
    tech: ["Node.js", "Express.js", "Sharp", "AWS S3", "JavaScript"],
    live: "https://matchkicks.com/",
    github: null,
    image: MatchkicksImg,
    confidential: false,
  },
  {
    id: "shortly",
    title: "Shortly",
    subtitle: "Modern URL Shortener with Analytics",
    category: "WEB APPS",
    featured: false,
    tag: "WEB APP",
    tagColor: "bg-neo-pink",
    tagTextColor: "text-white",
    metrics: "Firebase Auth • Realtime Analytics",
    description:
      "Feature-rich URL shortening application with user authentication, link management, click tracking analytics, and Framer Motion micro-animations.",
    highlights: [
      "Firebase Authentication and Firestore real-time database.",
      "Click tracking analytics with interactive charts.",
      "Mobile-first responsive design with Tailwind CSS.",
    ],
    tech: ["React", "Tailwind CSS", "Firebase", "Framer Motion"],
    live: "https://shortly-ivory-theta.vercel.app/",
    github: "https://github.com/timi-emmanuel/shortly",
    image: ShortlyImg,
    confidential: false,
  },
  {
    id: "nationary",
    title: "Nationary",
    subtitle: "Global Country Explorer & Data Viewer",
    category: "WEB APPS",
    featured: false,
    tag: "REST API",
    tagColor: "bg-neo-yellow",
    metrics: "REST Countries API • Zustand",
    description:
      "Interactive country exploration platform utilizing REST Countries API with real-time fuzzy search, regional filtering, border country links, and dark/light modes.",
    highlights: [
      "Global state management utilizing Zustand for search and filters.",
      "Dynamic theme toggle with accessible color contrast.",
      "Smooth list animations and detail modal transitions.",
    ],
    tech: ["React", "Zustand", "Tailwind CSS", "REST API", "Framer Motion"],
    live: "https://rest-countries-app-hazel.vercel.app/",
    github: "https://github.com/timi-emmanuel/rest-countries-app",
    image: NationaryImg,
    confidential: false,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative text-black dark:text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-20 bg-neo-bgProjects dark:bg-neo-darkSurface neo-cross-grid transition-colors duration-200 border-t-2 border-black dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Neo Stamp & Segmented Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="neo-badge bg-black text-white dark:bg-white dark:text-black">
                03 / CASE STUDIES
              </span>
              <span className="neo-badge bg-neo-yellow text-black">
                <Cpu size={14} weight="bold" />
                PRODUCTION SYSTEMS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-black dark:text-white text-left">
              FEATURED{" "}
              <span className="bg-neo-lime text-black px-2 border-2 border-black shadow-neo-sm inline-block rotate-[-1deg]">
                PROJECTS_
              </span>
            </h2>
          </div>

          {/* DevFest-Style Inset Segmented Tab Switcher */}
          <div className="neo-segmented-container flex-wrap self-start lg:self-end">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`neo-segmented-btn ${
                    isActive
                      ? "neo-segmented-btn-active"
                      : "neo-segmented-btn-inactive"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              variants={cardVariants}
              className="neo-box bg-white dark:bg-neo-darkCard flex flex-col justify-between overflow-hidden group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg dark:hover:shadow-neo-dark-lg transition-all duration-200"
            >
              <div>
                {/* Project Image Preview Header */}
                <div className="relative h-52 sm:h-64 overflow-hidden border-b-2 border-black dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Category & Status Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span
                      className={`neo-badge ${project.tagColor || "bg-neo-yellow"} ${
                        project.tagTextColor || "text-black"
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Pinned Corner Milestone Ribbon */}
                  {project.confidential ? (
                    <div className="absolute top-0 right-0 bg-black text-white dark:bg-black dark:text-neo-yellow border-b-2 border-l-2 border-black dark:border-zinc-300 px-2.5 py-1 text-[10px] font-mono font-black flex items-center gap-1 shadow-neo-sm z-10">
                      <LockKey size={13} weight="bold" />
                      <span>ENTERPRISE</span>
                    </div>
                  ) : (
                    <div className="absolute top-0 right-0 bg-neo-lime text-black border-b-2 border-l-2 border-black px-2.5 py-1 text-[10px] font-mono font-black shadow-neo-sm z-10">
                      <span>VERIFIED_SYSTEM</span>
                    </div>
                  )}

                  {/* Bottom metrics pill */}
                  {project.metrics && (
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-black/90 text-black dark:text-white border-2 border-black px-3 py-1 text-xs font-mono font-bold truncate backdrop-blur-sm shadow-neo-sm flex items-center gap-1.5">
                      <Lightning size={14} weight="fill" className="text-black dark:text-neo-yellow flex-shrink-0" />
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 text-left">
                  <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-1">
                    {project.category}
                  </span>
                  
                  <h3 className="font-display font-black text-xl sm:text-2xl text-black dark:text-white mb-2 leading-tight group-hover:text-neo-yellowHover dark:group-hover:text-neo-yellow transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights Bullet points */}
                  {project.highlights && (
                    <ul className="space-y-1.5 mb-5 font-sans text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            size={16}
                            weight="bold"
                            className="text-neo-lime flex-shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-zinc-100 dark:bg-neo-darkSurface text-black dark:text-white border border-black dark:border-zinc-600 px-2.5 py-1 text-[11px] font-mono font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t-2 border-dashed border-zinc-200 dark:border-zinc-700 flex flex-wrap items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn-primary text-xs py-2 px-4 flex-1 sm:flex-none"
                  >
                    <ArrowSquareOut size={16} weight="bold" />
                    <span>LIVE DEMO</span>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn-secondary text-xs py-2 px-4 flex-1 sm:flex-none"
                  >
                    <GithubLogo size={16} weight="bold" />
                    <span>CODE</span>
                  </a>
                )}

                {project.confidential && (
                  <div className="flex items-center gap-2 bg-zinc-100 dark:bg-neo-darkSurface border-2 border-black dark:border-zinc-600 px-3 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-300 shadow-neo-sm">
                    <LockKey size={14} weight="bold" />
                    <span>Confidential (Internal Architecture)</span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Banner for Architecture Discussions */}
        <div className="mt-16 bg-neo-yellow dark:bg-neo-darkCard border-2 border-black dark:border-zinc-200 shadow-neo-lg dark:shadow-neo-dark-lg p-6 sm:p-8 text-black dark:text-white flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <span className="neo-badge bg-black text-white dark:bg-white dark:text-black mb-2">
              <Lightning size={14} weight="bold" />
              WANT TO DISCUSS ARCHITECTURE?
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-black dark:text-white">
              Need scalable frontend architecture or reliable full-stack tooling?
            </h3>
            <p className="font-sans text-sm sm:text-base text-zinc-900 dark:text-zinc-300 mt-1 max-w-xl">
              I specialize in high-traffic real-time systems, Supabase RLS schema design, and modular UI engineering.
            </p>
          </div>
          <a
            href="#contact"
            className="neo-btn bg-black dark:bg-neo-yellow text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-neo-yellowHover whitespace-nowrap shadow-neo dark:shadow-neo-dark-white"
          >
            LET'S DISCUSS YOUR PROJECT
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;


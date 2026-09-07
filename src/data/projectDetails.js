import PadiHoldImg from "../assets/padihold.png";
import QuiqOrderImg from "../assets/QuiqOrder Homepage.png";
import JirellaImg from "../assets/jirella-farm.png";
import MatchkicksImg from "../assets/matchkicks.png";
import AffiliateImg from "../assets/affiliate-portal.png";

export const projectsData = [
  {
    id: "jirella-farm",
    title: "Jirella Farm Management System",
    category: "AGRITECH & ERP",
    status: "live",
    summary:
      "Architected and solo-built a modular agricultural ERP covering 8 core operational modules: Poultry, Catfish/Aquaculture, Feed Mill, BSF bioconversion, Central Store, Procurement, Inventory, and Sales. Designed an advanced RBAC engine mapping 10 distinct staff roles to operational modules using PostgreSQL Row-Level Security (RLS), configured AG Grid for high-density dashboards, wrote idempotent SQL migrations, and containerized the application with Docker.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "AG Grid", "Docker", "Tailwind CSS"],
    image: JirellaImg,
    liveUrl: "https://farms-accounting-software.vercel.app/",
    githubUrl: null,
  },
  {
    id: "sbe-affiliate-portal",
    title: "SBE Affiliate & Attribution Portal",
    category: "FINTECH & ATTRIBUTION",
    status: "live",
    summary:
      "Built the entire frontend of a multi-tenant affiliate and financial attribution platform for sportsbook/casino operators — traffic tracking, retention cohorts, and commission settlement dashboards, consuming backend REST APIs (backend and deployment handled separately). Implemented 3-tier RBAC and frontend session handling (silent JWT refresh, cross-device session termination, tenant context isolation), built a custom design system on Radix UI primitives, and built server-side paginated, filterable views over large activity logs using SWR caching and Zod schema validation.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Zustand", "SWR", "Radix UI", "Zod"],
    image: AffiliateImg,
    liveUrl: null,
    githubUrl: null,
    isConfidential: true,
  },
  {
    id: "quiqorder",
    title: "QuiqOrder (Startup)", 
    category: "SAAS & E-COMMERCE",
    status: "live",
    summary:
      "Frontend development of QuiqOrder's branded storefront platform for WhatsApp-based sellers, including UI development, Firebase real-time integration, and the Shipbubble logistics integration for automated order fulfillment.",
    stack: ["React.js", "Firebase", "Shipbubble", "Tailwind CSS", "WhatsApp API", "Node.js"],
    image: QuiqOrderImg,
    liveUrl: "https://www.tryquiqorder.com/",
    githubUrl: null,
  },
  {
    id: "padihold",
    title: "PadiHold — Escrow Platform",
    category: "FINTECH & ESCROW",
    status: "in-progress",
    summary:
      "Nigeria's trust-centric escrow platform engineered to eliminate online commerce fraud. Features an AI dispute resolution assistant, multi-stage deal lifecycle state tracking, and simulated logistics verification.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Radix UI", "OpenAI", "Solidity"],
    image: PadiHoldImg,
    liveUrl: "https://padi-hold.vercel.app/",
    githubUrl: null,
  },
  {
    id: "mockup-tool",
    title: "Mockup Integration Tool",
    category: "BACKEND AUTOMATION",
    status: "live",
    summary:
      "High-throughput automated image rendering service that dynamically overlays custom customer graphic designs onto merchandise mockups at pixel-perfect coordinates.",
    stack: ["Node.js", "Express.js", "Sharp", "AWS S3", "JavaScript"],
    image: MatchkicksImg,
    liveUrl: "https://matchkicks.com/",
    githubUrl: null,
  },
];

export const archivedExperiments = [
  {
    title: "Shortly",
    description: "URL Shortener & QR Generator",
    stack: ["React.js", "Tailwind CSS", "Firebase Auth", "Firestore", "Framer Motion"],
    liveUrl: "https://shortly-ivory-theta.vercel.app/",
    githubUrl: "https://github.com/timi-emmanuel/shortly",
  },
  {
    title: "Nationary",
    description: "Country Explorer & Filtering",
    stack: ["React.js", "Zustand", "Tailwind CSS", "REST API", "Framer Motion"],
    liveUrl: "https://rest-countries-app-hazel.vercel.app/",
    githubUrl: "https://github.com/timi-emmanuel/rest-countries-app",
  },
];

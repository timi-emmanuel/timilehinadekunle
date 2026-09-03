import PadiHoldImg from "../assets/padihold.png";
import QuiqOrderImg from "../assets/QuiqOrder Homepage.png";
import JirellaImg from "../assets/jirella-farm.png";
import ShortlyImg from "../assets/Shortly.png";
import NationaryImg from "../assets/nationary.png";
import MatchkicksImg from "../assets/matchkicks.png";

export const projectsData = [
  {
    id: "jirella-farm",
    title: "Jirella Farm Management System",
    category: "AGRITECH & DATA",
    status: "live",
    summary:
      "Solo-built a modular agricultural ERP covering Poultry, Catfish/Aquaculture, Feed Mill, BSF bioconversion, Central Store, Procurement, Inventory, and Sales. Designed RBAC with 10 distinct staff roles, configured AG Grid for data-dense tables, and wrote idempotent SQL migrations.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "AG Grid", "Docker", "Tailwind CSS"],
    image: JirellaImg,
    liveUrl: "https://farms-accounting-software.vercel.app/",
    githubUrl: null,
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
      "Nigeria's trust-centric escrow platform engineered to eliminate online commerce fraud. Features an AI dispute resolution assistant, finite state machine escrow deal lifecycles, and simulated logistics verification.",
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
  {
    id: "shortly",
    title: "Shortly — URL Shortener",
    category: "WEB APP",
    status: "live",
    summary:
      "Feature-rich link shortening platform with user authentication, real-time click tracking analytics, QR code generation, and mobile-first responsive layout.",
    stack: ["React.js", "Tailwind CSS", "Firebase Auth", "Firestore", "Framer Motion"],
    image: ShortlyImg,
    liveUrl: "https://shortly-ivory-theta.vercel.app/",
    githubUrl: "https://github.com/timi-emmanuel/shortly",
  },
  {
    id: "nationary",
    title: "Nationary — Country Explorer",
    category: "WEB APP",
    status: "live",
    summary:
      "Interactive country exploration platform utilizing REST Countries API with real-time fuzzy search, regional filtering, border country links, and dark/light modes.",
    stack: ["React.js", "Zustand", "Tailwind CSS", "REST API", "Framer Motion"],
    image: NationaryImg,
    liveUrl: "https://rest-countries-app-hazel.vercel.app/",
    githubUrl: "https://github.com/timi-emmanuel/rest-countries-app",
  },
];

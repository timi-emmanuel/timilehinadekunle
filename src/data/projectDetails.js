import PadiHoldImg from "../assets/padihold.png";
import QuiqOrderImg from "../assets/QuiqOrder Homepage.png";
import JirellaImg from "../assets/jirella-farm.png";
import MatchkicksImg from "../assets/matchkicks.png";

// TODO(user): add dashboard screenshot (blur customer data) at public/projects/quiqorder-dashboard.png

export const projectsData = [
  {
    id: "quiqorder",
    title: "QuiqOrder",
    category: "SAAS & E-COMMERCE",
    status: "live",
    statusLabel: "Live · Founding engineering team · Code private",
    summary:
      "E-commerce and revenue-recovery platform for merchants, live since March 2026 with 77 merchant accounts, 19 published storefronts, and ₦2.2M+ in merchant sales. I built the merchant dashboard, the internal admin portal, and the Shipbubble delivery integration.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "Zod", "Shipbubble"],
    image: QuiqOrderImg,
    liveUrl: "https://www.tryquiqorder.com",
    githubUrl: null,
    caseStudy: {
      tag: "SAAS & LOGISTICS",
      theProblem:
        "Micro-merchants and restaurants in emerging markets rely heavily on WhatsApp for order taking, but face overwhelming manual order collation, missed customer chats, inaccurate inventory tracking, and disconnected last-mile delivery fulfillment.",
      whatIBuilt:
        "Built the merchant dashboard, products and order management, sales telemetry, subscription billing, and internal admin portal. Integrated automated delivery logistics via Shipbubble for rapid on-demand order dispatch.",
      theHardPart: {
        incident: "Real-Time State Synchronization Between WhatsApp Bots & Dispatch",
        symptoms:
          "Customers placing orders via WhatsApp while simultaneously modifying carts on the web storefront created race conditions where delivery dispatches were requested for outdated item quantities.",
        rootCause:
          "Asynchronous webhook dispatch triggers firing before cart state reconciliation completed.",
        solution:
          "Decoupled order submission into atomic transactions with optimistic UI locking and live listener debouncing, ensuring order modifications immediately sync before dispatch triggers.",
      },
      theDesign:
        "Lightweight, mobile-first design system tailored for fast load times on constrained 3G/4G cellular networks. Simplified 2-tap checkout flow minimizing form fields, high-contrast action buttons, and instant order receipt sharing.",
      whatsNotInIt:
        "No complicated merchant ERP accounting (focused squarely on rapid order intake, catalog display, and delivery dispatch to keep the merchant learning curve under 5 minutes).",
      currentStatus:
        "Live in production. Powering automated ordering and instant delivery dispatch for emerging food and retail merchants.",
    },
  },
  {
    id: "jirella-farm",
    title: "Jirella Farm Management System",
    category: "AGRICULTURE & ERP",
    status: "live",
    statusLabel: "Live demo · Built solo for a client · Code private",
    summary:
      "Modular farm ERP built solo for a client: 8 modules covering poultry, catfish, feed mill, BSF, inventory, sales, and accounting, used daily by 5+ staff. Access is controlled by 10 staff roles enforced with PostgreSQL Row-Level Security.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "AG Grid", "Docker", "Tailwind CSS"],
    image: JirellaImg,
    liveUrl: "https://farms-accounting-software.vercel.app",
    githubUrl: null,
    caseStudy: {
      tag: "FLAGSHIP ARCHITECTURE",
      theProblem:
        "Jirella Farm operated 8 separate agricultural verticals (poultry, catfish aquaculture, feed mill, BSF bioconversion, procurement, inventory, store, sales). Operations relied on fragmented paper logs and spreadsheets, causing inventory leakage, delayed mortality tracking, and zero real-time visibility into feed conversion ratios (FCR) or profit margins per livestock batch.",
      whatIBuilt:
        "A full-stack modular agricultural ERP on Next.js, Supabase, and PostgreSQL. Engineered 8 isolated operational modules, a unified central inventory ledger, automated feed consumption tracking, mortality rate calculations, AG Grid enterprise data tables for sub-millisecond sorting/filtering over 10,000+ transaction rows, and Docker containerization for reproducible multi-stage deployments.",
      theHardPart: {
        incident: "Idempotent SQL Migrations with Existence Guards across Docker Environments",
        symptoms:
          "During multi-container Docker staging tests, running automated deployment scripts against live Supabase PostgreSQL instances caused migration failures and partially applied schemas due to destructive CREATE OR REPLACE commands conflicting with existing foreign key constraints.",
        rootCause:
          "Missing transaction isolation levels and non-idempotent migration ordering between core tenant tables and module-specific lookup tables.",
        solution:
          "Re-architected all DDL scripts with strict existence guards (IF NOT EXISTS, conditional DO blocks, and idempotent schema versioning tables), allowing safe, non-destructive roll-forward and rollback execution across staging and production.",
      },
      theDesign:
        "Clean, dark-mode terminal ergonomics with high-density AG Grid tables. Replaced whitespace-heavy consumer card layouts with condensed data grids showing batch status, feed inventory levels, mortality telemetry, and role-based action triggers. Used subtle phosphor green and warning amber for rapid anomaly detection.",
      whatsNotInIt:
        "No complex multi-currency conversion (hardcoded to NGN to match farm local commerce), no real-time IoT sensor telemetry (mortality and feed inputs are manually logged by section supervisors at shift changes to prevent false positives from unreliable farm hardware), and no native mobile app (responsive PWA built for mobile browser access across low-end Android handsets).",
      currentStatus:
        "Live in production. Successfully managing 8 farm operational modules, tracking thousands of livestock and daily feed batches with zero recorded schema inconsistencies.",
    },
  },
  {
    id: "matchkicks",
    title: "Matchkicks Image Generation Service",
    category: "BACKEND AUTOMATION",
    status: "live",
    statusLabel: "Contract · Feb – Mar 2025 · Live · Code private",
    summary:
      "Serverless service that composites design layers into product mockups on demand as WebP, replacing pre-rendered images stored in S3. On-the-fly generation with Redis caching cut latency and storage costs. Also built Shopify product-creation and legacy-migration endpoints.",
    stack: ["Node.js", "Sharp", "AWS Lambda", "Redis", "AWS S3", "Express.js"],
    image: MatchkicksImg,
    liveUrl: "https://matchkicks.com",
    githubUrl: null,
    caseStudy: {
      tag: "AUTOMATION & SYSTEMS",
      theProblem:
        "Custom merchandise and apparel brands spent hundreds of hours manually placing customer artwork and logos onto product mockup templates in Photoshop, creating major order fulfillment bottlenecks and human alignment errors.",
      whatIBuilt:
        "A high-throughput backend automation microservice built with Node.js, Express, and the Sharp high-performance image processing engine. Takes uploaded user graphic assets, validates DPI and color profiles, dynamically calculates coordinates and bounding boxes, and overlays artwork onto product mockups with sub-second turnaround, uploading final composites directly to AWS S3.",
      theHardPart: {
        incident: "Sub-Pixel Coordinate Mapping & Memory Leaks under Heavy Concurrency",
        symptoms:
          "Processing multiple 50MB+ high-resolution PNGs simultaneously caused Node.js heap memory exhaustion and subtle coordinate drift when scaling artwork across mockups with non-standard aspect ratios.",
        rootCause:
          "In-memory buffer allocations without stream backpressure and unnormalized pixel coordinates.",
        solution:
          "Migrated from in-memory buffer arrays to streaming Sharp pipeline transformations, enforced concurrency queues with worker threads, and derived normalized UV coordinate matrices that preserve sub-pixel accuracy across any product template dimensions.",
      },
      theDesign:
        "Clean headless architecture with minimal API response latency. Designed to be consumed by client-side e-commerce builders with instant preview rendering.",
      whatsNotInIt:
        "No interactive canvas editor on the backend (purely an automated, headless image compositing engine designed for speed and scale).",
      currentStatus:
        "Live in production powering automated mockup generation for commercial apparel customization platforms.",
    },
  },
  {
    id: "padihold",
    title: "PadiHold",
    category: "FINTECH & ESCROW",
    status: "in-progress",
    statusLabel: "In development",
    summary:
      "Escrow platform for online commerce in Nigeria, currently in development. Planned features include staged transaction states, an AI-assisted dispute flow, and Paystack settlement.",
    // TODO(verify): Add OpenAI, Paystack, or Zod only if the user confirms they are in the codebase
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Radix UI"],
    image: PadiHoldImg,
    // TODO(verify): Show a "live demo" link only if a public URL exists. Otherwise show no link.
    liveUrl: null,
    githubUrl: null,
    caseStudy: {
      tag: "FINTECH & ESCROW",
      theProblem:
        "Peer-to-peer e-commerce and freelance digital transactions in Nigeria suffer from rampant fraud, broken trust, and payment chargeback vulnerabilities. Buyers fear paying upfront for unverified goods or services, while sellers fear non-payment after delivery.",
      whatIBuilt:
        "An automated, trust-centric digital escrow platform engineered on Next.js, TypeScript, Zustand, and Tailwind CSS. Designed a strict finite-state machine (FSM) managing multi-stage deal lifecycles (Initiation ➔ Escrow Funded ➔ Milestone Verified ➔ Disbursed / Disputed), seamless payment checkout and settlement via Paystack webhooks, and an automated dispute mediation workflow.",
      theHardPart: {
        incident: "Finite-State Machine (FSM) Deal Lifecycle Validation & Webhook Race Conditions",
        symptoms:
          "Simultaneous buyer/seller actions (e.g. buyer confirming delivery while seller requests a deadline extension, combined with delayed payment gateway webhook delivery) could lead to invalid or corrupt transaction state transitions.",
        rootCause:
          "Lack of deterministic state locking and non-atomic webhook status updates.",
        solution:
          "Implemented a deterministic finite-state transition table with strict guard conditions. Any state mutation requires idempotency keys, atomic database transactions, and explicit state validation rules ensuring deals can never transition backwards or skip critical escrow milestones.",
      },
      theDesign:
        "Visual trust and absolute clarity. Transactions are presented as an interactive linear milestone timeline where both parties see exactly who owns the next action, the current fund custody status, and remaining inspection time. Clean typography with subtle emerald green security badges to maximize user confidence.",
      whatsNotInIt:
        "No uncollateralized lending or credit advances (purely an upfront custodial escrow model), and no automatic unassisted dispute payouts (disputes trigger a structured mediation timeline with manual operator review to prevent social engineering exploits).",
      currentStatus:
        "In active progress (MVP stage). Core escrow state machine, Paystack checkout integration, and milestone timeline UI completed. Next milestone: simulated logistics tracking API integration and automated carrier delivery webhooks.",
    },
  },
];

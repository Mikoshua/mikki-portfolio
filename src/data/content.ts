// All editable content lives here. No need to touch the components to update text.

export const profile = {
  name: "Mikhaela Faye M. Bigueras",
  shortName: "Mikki",
  oneLiner: "Founder & builder. Based in Manila.",
  bio: "Building things at the intersection of AI, hardware, and Filipino-first design. Currently co-founding three startups across beauty tech, agri-tech, and collaboration — and the Technical Lead of Mapua Machina robotics team.",
  location: "Manila, Philippines",
  email: "mfmbigueras@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/mikkiko/",
    // github: "",       // not yet — add when ready
    // instagram: "",    // not yet — add when ready
  },
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  stage: "Live" | "MVP" | "Prototype" | "In development" | "Concept";
  cofounders?: { name: string; role: string }[];
  tech?: string[];
  links?: { label: string; href: string }[];
  highlights?: string[];
  images?: { src: string; alt: string }[];
  accentColor?: string;
  industry?: string;
};

export const akit: Project = {
  slug: "akit",
  name: "AKIT Beauty",
  tagline: "AI skin analysis built for Filipino skin.",
  description:
    "AKIT is an AI-powered skincare companion. Take a selfie — our model analyzes skin in seconds, detecting acne, oiliness, redness, pigmentation, and more, then returns a severity score. We recommend specific ingredients backed by clinical research with PubMed citations, usage instructions, and safety warnings. We don't replace dermatologists — we help people understand their skin, and refer serious cases out.",
  role: "Co-founder & CTO / Technology Lead",
  stage: "MVP",
  industry: "AI · Beauty Tech",
  cofounders: [{ name: "Gabrielle Arco", role: "Co-founder & Marketing Lead" }],
  tech: ["Python", "Flask", "PyTorch", "EfficientNet", "Hugging Face Spaces"],
  links: [
    {
      label: "Try the demo on Hugging Face",
      href: "https://huggingface.co/spaces/Mikoshua/akit-beauty-app",
    },
  ],
  highlights: [
    "We educate, not just recommend — every suggestion comes with clinical research and citations.",
    "Built-in skincare tracker, habit reminders, and progress tracking to build lasting habits.",
    "Community feature where Filipinos share what's actually working, plus in-app dermatologist booking.",
    "First AI model being trained specifically on Filipino skin tones and conditions.",
  ],
  accentColor: "#C97D96",
};

export const groundup: Project = {
  slug: "groundup",
  name: "GroundUP",
  tagline: "Grow Smarter · Live Cleaner · Sustainable Harvests",
  description:
    "GroundUP is transforming agriculture through perching drones. Inspired by how eagles perch and observe their surroundings, our drones land on branches and elevated points to run AI-based field analysis from a stable vantage point. Combined with IoT sensors and automation, GroundUP gives farmers real-time decisions that maximize productivity while minimizing waste.",
  role: "Co-founder & COO",
  stage: "Prototype",
  industry: "Agri-Tech · Hardware",
  cofounders: [
    { name: "Alissander Gillean Binas", role: "Co-founder & CEO" },
  ],
  tech: ["Drone Hardware", "Computer Vision", "IoT Sensors", "Embedded AI"],
  highlights: [
    "Perching design inspired by raptors — drones save battery by landing instead of hovering, enabling long-duration field observation.",
    "On-board AI analyzes crop health, soil conditions, and pest patterns from a stable perch.",
    "IoT sensor network feeds back to a central dashboard for real-time farmer decision-making.",
    "Designed for Filipino agriculture — built around the realities of local farms, not Silicon Valley fields.",
  ],
  images: [
    { src: "/groundup/drone-three-quarter.jpg", alt: "GroundUP perching drone — three-quarter view" },
    { src: "/groundup/drone-front.jpg", alt: "GroundUP perching drone — front view" },
    { src: "/groundup/drone-side.jpg", alt: "GroundUP perching drone — side view showing articulated legs" },
  ],
  accentColor: "#7BC142",
};

export const kollabayan: Project = {
  slug: "kollabayan",
  name: "Kollabayan",
  tagline: "The opposite of a job board.",
  description:
    "Kollabayan is a community-first collaboration hub that helps students, creators, and professionals find the right teammates to bring their passion projects to life. We solve the \"ghosting\" and \"mismatch\" problem by combining smart team-formation tools with a built-in workspace that verifies effort and builds trust. It's not about finding freelancers — it's about finding your team.",
  role: "Co-founder & Business Lead",
  stage: "MVP",
  industry: "Community · Productivity",
  cofounders: [
    { name: "Ethan Jude Reyes", role: "Co-founder & Technology Lead" },
    { name: "Katrina Pasadilla", role: "Co-founder & Technology Lead" },
  ],
  tech: ["Next.js", "TypeScript", "Tailwind", "Community Tooling"],
  highlights: [
    "Smart team-formation matches based on skills, commitment level, and working style — not just job titles.",
    "Built-in workspace verifies effort and builds trust between collaborators.",
    "Designed for the Filipino \"kasama\" culture — finding teammates, not freelancers.",
    "Receipts system means finished work actually means something.",
  ],
  images: [
    { src: "/kollab/landing.png", alt: "Kollabayan landing page — 'The opposite of a job board'" },
    { src: "/kollab/discover.png", alt: "Kollabayan discover page — browse open collaborations" },
  ],
  accentColor: "#C84A2E",
};

export const projects: Project[] = [akit, groundup, kollabayan];

// === ROBOTICS ===
export const robotics = {
  team: "Mapua Machina",
  role: "Technical Lead",
  description:
    "Beyond startups, I lead the technical side of Mapua Machina — Mapua University's competitive robotics team. We design, build, and compete with custom robots across categories including sumo robotics, line-following, and autonomous systems. The same hands-on hardware skills and team leadership I bring to AKIT and GroundUP.",
  awards: [
    {
      placement: "1st Place — Champion",
      category: "EMegasumo V3 Open Category",
      competition: "4th National/International Robolution — Robotics & Automation Competition",
      date: "December 7, 2025",
      venue: "Don Bosco Technical Institute, Makati",
      tier: "National",
    },
    {
      placement: "1st Place — Champion",
      category: "EMegasumo V3 Open Category",
      competition: "NCR Regional Robolution",
      date: "November 25, 2025",
      venue: "Metro Manila",
      tier: "Regional",
    },
  ],
  gallery: [
    { src: "/robotics/robolution-champion.jpg", alt: "Mapua Machina 1st place Robolution championship trophies and sumo robot" },
    { src: "/robotics/technical-lead.jpg", alt: "Mapua Machina Technical Lead jersey" },
    { src: "/robotics/team-photo.jpg", alt: "Full Mapua Machina team with Robolution certificates" },
    { src: "/robotics/excellence-award.jpg", alt: "National Excellence Awards 2025 recognition" },
    { src: "/robotics/workbench.jpg", alt: "Late-night build session — drone frame, motors, soldering iron" },
    { src: "/robotics/sensor-array.jpg", alt: "Custom sensor array with rainbow wire harness" },
    { src: "/robotics/cinewhoop.jpg", alt: "Custom-built FPV cinewhoop drone" },
  ],
};

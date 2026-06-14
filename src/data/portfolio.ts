export const profile = {
  name: "Florish Adekogbe",
  alias: "Von",
  role: "Frontend Engineer",
  tagline: "I build production-grade web applications.",
  blurb:
    "Frontend Engineer with 5+ years of experience shipping resilient, high-performance products in React, Next.js and TypeScript, from multi-vendor marketplaces and logistics platforms to AI-powered, real-time experiences.",
  location: "Lagos, Nigeria — Remote",
  email: "florishadekogbe@gmail.com",
  phone: "+234 807 549 6460",
  resumeUrl:
    "https://docs.google.com/document/d/120xAtbyS99Ov2oZ2MOB2I9zRhBblUnfpJNgkpBfdQRU/edit?usp=sharing",
  avatar: "/photoroom.png",
};

export const socials = [
  { label: "GitHub", handle: "von-moyo", url: "https://github.com/von-moyo" },
  {
    label: "LinkedIn",
    handle: "florish-adekogbe",
    url: "https://www.linkedin.com/in/florish-adekogbe-b627451b6",
  },
  {
    label: "LeetCode",
    handle: "leetcode",
    url: "https://leetcode.com/",
  },
  { label: "Email", handle: "florishadekogbe@gmail.com", url: "mailto:florishadekogbe@gmail.com" },
];

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 10, suffix: "+", label: "Production apps shipped" },
  { value: 100, prefix: "$", suffix: "K", label: "Grant Carehub helped win" },
  { value: 350, suffix: "+", label: "Cypress tests authored" },
];

export type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Bethmeh Consulting Limited",
    role: "Frontend Engineer",
    type: "Full-time",
    period: "Oct 2025 — Present",
    location: "Remote, UK",
    current: true,
    points: [
      "Sole frontend engineer across three production Next.js (App Router) + TypeScript apps, Grubafood (multi-vendor food ordering), DeliveryWe (multi-service logistics), and the DeliveryWe Rider Platform — plus their back-office tools.",
      "Built Grubafood's customer experience end-to-end: vendor discovery, menu, cart, checkout and live order tracking, with a resilient cart-sync layer (Next.js route handlers / BFF) that recovers from expired sessions.",
      "Delivered DeliveryWe's logistics flows, instant shipping quotes, order creation/management and import/export/intercity services, with Google Maps for address selection and route-based pricing.",
      "Shipped the Rider Platform's onboarding & KYC document upload, in-app rider store, and end-to-end recruitment/job-application journeys.",
      "Standardized shared NextAuth v5 auth and a reusable Radix UI + Tailwind + RHF/Zod component system across all three apps.",
    ],
    stack: ["Next.js", "TypeScript", "NextAuth v5", "Radix UI", "Tailwind", "Zod", "Google Maps"],
  },
  {
    company: "Purelife Pharmacy",
    role: "Frontend Developer",
    type: "Part-time",
    period: "Sep 2024 — Present",
    location: "Remote",
    current: true,
    points: [
      "Led the end-to-end redevelopment of Purelife's healthcare platform, doctor consultation, vaccination and lab-test booking with integrated payments and appointment management.",
      "Built the Carehub platform, which contributed to the company winning a $100,000 grant from the African Business Heroes (ABH) competition.",
      "Owned frontend architecture across Next.js + TypeScript, establishing scalable patterns that improved maintainability, consistency and delivery speed.",
      "Added Mixpanel analytics and a Vitest suite covering critical services (cart sync, wallet, discounts, appointments) for measurable, reliable UX.",
    ],
    stack: ["Next.js", "TypeScript", "Vitest", "Mixpanel", "Payments"],
  },
  {
    company: "Axel Cyber",
    role: "Frontend Engineer",
    type: "Contract",
    period: "3 months",
    location: "Remote",
    points: [
      "Built EngageX — a communication-intelligence platform for a Fortune 500 client — delivering the web app and a real-time feedback dashboard over an AI/LLM scoring pipeline.",
      "Shipped role-based dashboards (Admin, Coach, User) surfacing scored feedback summaries, progress tracking and recommendations from ingested speech/video, transcripts and notes.",
      "Helped cut manual review time by 65% and reduce time-to-insight from 48h to under 4h — a 4× boost in enterprise L&D efficiency.",
    ],
    stack: ["React", "TypeScript", "LLM", "REST API", "RBAC"],
  },
  {
    company: "CompassAI",
    role: "Frontend Engineer",
    type: "Contract",
    period: "2024 · 2 months",
    location: "Remote",
    points: [
      "Built the AI chat flow and a customer-to-customer chat experience, both powered by WebSockets for real-time messaging.",
      "Focused on responsive, low-latency conversational UI and connection resilience.",
    ],
    stack: ["React", "TypeScript", "WebSocket"],
  },
  {
    company: "Yudimy",
    role: "Mid-Level Frontend Engineer",
    type: "Contract",
    period: "Mar 2024 — Sep 2024",
    location: "Remote",
    points: [
      "Designed an AI-powered conversational UI (React + TypeScript) enabling multi-flow job-description generation and candidate assessment, improving hiring workflow efficiency by 60% while enhancing SEO.",
      "Built an AI assistant chat flow with a custom message-processor algorithm that cut job setup time from 45+ minutes to under 10.",
    ],
    stack: ["React", "TypeScript", "AI UX", "SEO"],
  },
  {
    company: "Afriland Properties",
    role: "Frontend Engineer",
    type: "Full-time",
    period: "Aug 2023 — Jan 2024",
    location: "Lagos, Nigeria",
    points: [
      "Built responsive features with Next.js + TypeScript and authored 350+ Cypress tests that increased usability scores.",
    ],
    stack: ["Next.js", "TypeScript", "Cypress"],
  },
  {
    company: "QuickQuotes",
    role: "Junior Frontend Developer",
    type: "Contract",
    period: "Feb 2021 — Jul 2023",
    location: "Remote",
    points: [
      "Designed intuitive, user-centric interfaces for a B2B platform with fully functional payments and analytics using React + TypeScript, improving engagement and reducing bounce rate.",
    ],
    stack: ["React", "TypeScript", "Payments", "Analytics"],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  url?: string;
  accent: string; // gradient for the card mark
};

export const projects: Project[] = [
  {
    name: "Grubafood",
    category: "Multi-vendor marketplace",
    description:
      "Customer experience for a multi-vendor food-ordering platform: vendor discovery, menu, cart, checkout and live order tracking, with a resilient BFF cart-sync layer that survives expired sessions.",
    tags: ["Next.js", "TypeScript", "BFF", "Live tracking"],
    url: "https://grubafood.com/menu",
    accent: "from-[#7c7cff] to-[#a855f7]",
  },
  {
    name: "DeliveryWe",
    category: "Logistics platform",
    description:
      "Multi-service logistics workflows — instant shipping quotes, order creation & management, and import/export/intercity flows with Google Maps address selection and route-based pricing.",
    tags: ["Next.js", "TypeScript", "Google Maps", "Pricing"],
    url: "https://deliverywe.com/",
    accent: "from-[#22d3ee] to-[#7c7cff]",
  },
  {
    name: "DeliveryWe Rider",
    category: "Rider platform",
    description:
      "Rider onboarding & KYC document upload, an in-app rider store (catalog, product pages, cart, checkout) and end-to-end recruitment / job-application journeys.",
    tags: ["Next.js", "KYC", "E-commerce", "Auth"],
    url: "https://rider.deliverywe.com/",
    accent: "from-[#a855f7] to-[#22d3ee]",
  },
  {
    name: "Purelife & Carehub",
    category: "HealthTech",
    description:
      "Healthcare platform for doctor consultation, vaccination and lab-test booking with payments — plus Carehub, which helped secure a $100K African Business Heroes grant.",
    tags: ["Next.js", "Vitest", "Mixpanel", "Payments"],
    url: "https://purelifepharmacy.ng/",
    accent: "from-[#34d399] to-[#22d3ee]",
  },
  {
    name: "EngageX",
    category: "AI communication intelligence",
    description:
      "A communication-intelligence platform for a Fortune 500 client that ingests speech/video, transcripts and notes to produce scored feedback, progress tracking and recommendations. I built the web app and real-time feedback dashboard over an LLM scoring pipeline — cutting review time by 65% and driving a 4× boost in enterprise L&D efficiency.",
    tags: ["React", "TypeScript", "AI / LLM", "Dashboard", "RBAC"],
    accent: "from-[#2563eb] to-[#7c7cff]",
  },
  {
    name: "Precision",
    category: "Talent assessment platform",
    description:
      "A complete team-assessment platform that audits competence, behaviour and mindset across six core dimensions — so leaders know who to hire, who to develop and where performance is leaking. Rolls role-based hiring assessments, talent-management execution checks and competence audits into one tool, with detailed strengths-and-gaps reporting.",
    tags: ["React", "TypeScript", "Assessments", "Reporting"],
    url: "https://precisionmatch.ai/",
    accent: "from-[#818cf8] to-[#22d3ee]",
  },
  {
    name: "CompassAI",
    category: "Real-time AI chat",
    description:
      "AI chat flow and a customer-to-customer chat experience built on WebSockets, focused on low-latency conversational UI and connection resilience.",
    tags: ["React", "WebSocket", "AI UX"],
    url: "https://www.compasai.com/",
    accent: "from-[#f59e0b] to-[#a855f7]",
  },
  {
    name: "Afriland Properties",
    category: "Real estate",
    description:
      "Real-estate platform for one of Nigeria's leading property companies — built responsive features in Next.js + TypeScript and authored 350+ Cypress tests that lifted usability scores.",
    tags: ["Next.js", "TypeScript", "Cypress"],
    url: "https://www.afrilandproperties.com/",
    accent: "from-[#f97316] to-[#ec4899]",
  },
  {
    name: "Vukaya",
    category: "Personal project",
    description:
      "A mood-adaptive music web app with a simulated on-site mobile player that re-shapes each track in real time based on the mood you select.",
    tags: ["React", "Web Audio", "Animation"],
    url: "https://vukaya.onrender.com/",
    accent: "from-[#ec4899] to-[#7c7cff]",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Next.js", "Tailwind CSS", "Sass", "Material UI", "ShadCN", "Framer Motion"],
  },
  {
    title: "State & Data",
    items: ["Redux", "Zustand", "Context API", "WebSocket", "Supabase", "Swagger"],
  },
  {
    title: "Testing & Tooling",
    items: ["Jest", "Vitest", "Cypress", "Docker", "Git", "Vercel", "Render", "Postman"],
  },
  {
    title: "Foundations",
    items: ["Performance optimization", "Data Structures & Algorithms", "Problem solving", "Figma"],
  },
];

// Strip used for the infinite marquee
export const marqueeSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Zustand",
  "Redux",
  "WebSocket",
  "Supabase",
  "Vitest",
  "Cypress",
  "Docker",
  "ShadCN",
  "Figma",
];

export const education = {
  degree: "BSc. Computer Science",
  school: "University of Lagos",
  location: "Lagos, Nigeria",
};

export const certificates = [
  { name: "Goldman Sachs — Software Engineering Virtual Experience", issuer: "Forage", date: "Aug 2024" },
  { name: "J.P. Morgan — Software Engineering Virtual Experience", issuer: "Forage", date: "Sep 2024" },
  { name: "Python Programming Foundations", issuer: "Udacity", date: "May 2022" },
];

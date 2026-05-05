// ─── siteData.js ─────────────────────────────────────────
// Single source of truth for all site content.
// Update copy, programs, team members, etc. here.

export const siteConfig = {
  name:    "OWIN Foundation",
  tagline: "Our Willingness Is Now",
  email:   "info@owinfoundation.org",
  phone:   "", // add when available
  locations: ["Toronto, Canada", "Accra, Ghana"],
  socials: {
    facebook:  "#", // replace with real URLs
    instagram: "#",
    twitter:   "#",
  },
};


// ─── Programs / Pillars ──────────────────────────────────
export const programs = [
  {
    id:    "health",
    label: "Healthcare",
    icon:  "🩺",
    title: "Health & Wellness",
    summary:
      "Clinics, outreach programs, and health education that bring essential care to underserved communities across Ghana.",
    details: [
      "Wellness projects for Women, Children, and Men",
      "Health screening programs in Kwahu and beyond",
      "Medical outreach partnerships with local clinics",
    ],
    regions: ["Kwahu", "Accra", "Obuasi"],
    color:   "green-mid",
  },
  {
    id:    "housing",
    label: "Housing",
    icon:  "🏠",
    title: "Safe & Stable Housing",
    summary:
      "Building shelters and developing housing initiatives that give families the security and stability they need to thrive.",
    details: [
      "Future potential housing projects in Ghana",
      "Safe shelter partnerships",
      "Community-led housing planning",
    ],
    regions: ["Ghana"],
    color:   "green-olive",
  },
  {
    id:    "environment",
    label: "Environment",
    icon:  "🌿",
    title: "Environmental Sustainability",
    summary:
      "Greening programs, sustainability education, and community-driven initiatives that protect our shared future.",
    details: [
      "Environmental programs in school sectors in Ghana",
      "Accra Sustainability Project with local primary schools",
      "Youth-led environmental leadership programs",
    ],
    regions: ["Accra", "Schools across Ghana"],
    color:   "green-bright",
  },
];


// ─── Team Members ─────────────────────────────────────────
export const team = [
  {
    name:  "Vivian Ofori",
    role:  "Acting President",
    bio:   "Co-founder of OWIN Foundation. Inspired by the 2015 Accra floods, Vivian mobilized the Ghanaian diaspora in Toronto to create lasting change.",
    photo: null, // replace with imported image or URL
  },
  {
    name:  "Percy Larbi",
    role:  "Acting Vice President",
    bio:   "",
    photo: null,
  },
  {
    name:  "Augusta Bruce-Sarkodie",
    role:  "Core Team",
    bio:   "",
    photo: null,
  },
  {
    name:  "Emelia",
    role:  "Core Team",
    bio:   "",
    photo: null,
  },
  {
    name:  "Abigail Yankey",
    role:  "Core Team",
    bio:   "",
    photo: null,
  },
];


// ─── Active Campaign ──────────────────────────────────────
// !! Update / remove once campaign ends
export const activeCampaign = {
  active:    true,
  title:     "Health Screening — Kwahu 2026",
  body:      "Help us fund our upcoming health screening project in Kwahu, Ghana. Every donation brings essential care closer to those who need it most.",
  deadline:  "April 24, 2026",
  donateUrl: "/donate",
};


// ─── Featured Story ───────────────────────────────────────
export const featuredStory = {
  title:   "Accra Sustainability Project",
  location: "Accra, Ghana",
  body:
    "In collaboration with a local primary school in Accra, we launched an environmental sustainability initiative designed to educate students and improve their surrounding environment. This project reflects our belief that small actions can spark big change — especially when young people are inspired to lead the way.",
  photo:   null, // add image path when available
};


// ─── Values / Approach Blocks ─────────────────────────────
export const approachBlocks = [
  {
    title: "Transforming Lives",
    body:  "We make a meaningful difference in the lives of underprivileged women and youth, instilling hope, purpose, and opportunity.",
  },
  {
    title: "Dedicated Support",
    body:  "Every community we reach receives guidance, encouragement, and resources to implement initiatives with confidence.",
  },
  {
    title: "Community Impact",
    body:  "By lifting up one life, we spark a ripple effect that strengthens entire communities and builds a more inclusive society.",
  },
  {
    title: "Lasting Change",
    body:  "We instill resilience, determination, and compassion — values that guide the next generation.",
  },
];

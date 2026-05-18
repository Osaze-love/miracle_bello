export const siteContact = {
  email: "miraclebellz54@gmail.com",
  phone: ["09013788950", "08153395614"],
  instagram: "https://www.instagram.com/the__bellz?igsh=MW16Y3Nzenh6emk2cg%3D%3D&utm_source=qr",
  linkedin:
    "https://www.linkedin.com/in/miracle-bello-boluwaduro-25b9933b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
} as const;

export const cvUrl = "/miracle-bello-cv.docx";

export const workStats = [
  { value: "40M+", label: "YouTube views grown" },
  { value: "90%", label: "Audience reach increase" },
  { value: "2×", label: "Follower growth (beauty brand)" },
  { value: "4+", label: "Brands & channels managed" },
] as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  tag: string;
  highlight: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Social Media Manager & Community Manager",
    company: "Kradle Africa",
    period: "2026 – Present",
    tag: "EdTech",
    highlight: "In-house video production & community growth",
    bullets: [
      "Oversee daily social media operations, content creation, and publishing across multiple platforms for a growing African edtech brand.",
      "Handle full video production in-house — filming, editing, and publishing content that communicates the brand's educational offerings.",
      "Build and nurture an active online community by engaging followers, moderating discussions, and creating a consistent brand experience.",
      "Serve as the bridge between the brand and its audience with timely responses and meaningful engagement.",
    ],
  },
  {
    role: "Social Media Manager",
    company: "Laune Official",
    period: "2026",
    tag: "Fashion / Retail",
    highlight: "Content that converted followers into customers",
    bullets: [
      "Developed and executed a social media content strategy aligned with the brand's sales objectives.",
      "Created and published engaging content that directly drove product sales and converted followers into customers.",
    ],
  },
  {
    role: "YouTube Channel Manager",
    company: "The 7th Sound",
    period: "2025 – 2026",
    tag: "YouTube",
    highlight: "100K → 40M+ views",
    bullets: [
      "Managed full YouTube channel operations, including uploads, metadata optimisation, and publishing schedules.",
      "Grew total viewership from 100,000 to over 40 million views through strategic content management and audience growth tactics.",
    ],
  },
  {
    role: "Social Media Manager",
    company: "Oprahadey Beauty",
    period: "2023 – 2024",
    tag: "Beauty",
    highlight: "2× followers · 90% reach growth",
    bullets: [
      "Managed end-to-end social media operations including content scheduling, publishing, and brand voice.",
      "Monitored performance analytics to inform strategy and improve engagement over time.",
      "Doubled the brand's follower count and grew overall audience reach by 90%.",
      "Handled community engagement via DMs and fostered customer relationships.",
      "Planned, launched, and optimised paid social campaigns for visibility and acquisition.",
    ],
  },
];

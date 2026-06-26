const config = {
  name: "Aasiya Naaz",
  title: "CS Undergrad @ IIT Tirupati",
  description: "Building accessibility tools, game systems, and ML-driven applications.",
  accentColor: "#1d4ed8", 

  social: {
    email: "aasiyanaaz2003@gmail.com",
    linkedin: "https://www.linkedin.com/in/aasiya-naaz/", // 
    github: "https://github.com/AasiyaNaaz",
  },

  aboutMe:
    "I'm a Computer Science undergrad at IIT Tirupati who likes building things end-to-end — from cycle-accurate hardware simulators to gamified learning apps to compliance-detection tools. I'm drawn to projects that sit at the intersection of systems thinking and real-world impact, whether that's squeezing TLB hit rates above 97% or building data pipelines for social media analysis. I also compete on Codeforces (current rating 707, actively climbing) and am a core member of the Statistics Club and Literary Council at IIT Tirupati.",

  skills: [
    "C/C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Dart",
    "SQL",
    "React",
    "Express",
    "Flutter",
    "Three.js",
    "Pandas",
    "scikit-learn",
    "Git",
    "Linux",
  ],

  projects: [
    {
      name: "RISC-V Pipeline & Virtual Memory Simulator",
      description:
        "Cycle-accurate C++ simulator of a 5-stage RISC-V pipeline with hazard detection and register forwarding, extended with a 16-entry DTLB and configurable cache hierarchy — hit 97.8% TLB hit rates across 715K-instruction traces.",
      link: "https://github.com/TanujaJamadar/riscv-architecture-simulator",
      skills: ["C++", "RISC-V", "Cache Simulation", "Virtual Memory"],
    },
    {
      name: "Adobe Digital Experience Challenge",
      description:
        "Team project building a modular feature-engineering and data pipeline for a 300K-row social media dataset, with 72 engineered features feeding a downstream virality-prediction and tweet-generation model. Owned the preprocessing layer end-to-end, including parallelized URL-liveness verification across 300K+ records (96.3% verified-alive).",
      link: "https://github.com/shivam-purve/Adobe-Digital-Experience-Challenge",
      skills: ["Python", "Pandas", "scikit-learn", "ThreadPoolExecutor"],
    },
    {
      name: "SafeBuy: E-Commerce Compliance Scanner",
      description:
        "Automated tool that scrapes Flipkart/Amazon listings, screens them against consumer-protection rules, and generates structured PDF risk reports — 93% rule-classification accuracy across 100+ real listings. Won 2nd place at a class hackathon (AI for Social Wellbeing).",
      link: "https://github.com/Siddhardha-11/e---commerce-compliance-tool",
      skills: ["FastAPI", "BeautifulSoup", "SQLAlchemy", "React", "PostgreSQL"],
      image: "/images/projects/safebuy.png",
    },
    {
      name: "Ecopolis: Multiplayer Sustainability City-Builder",
      description:
        "Competitive 2-4 player board game balancing economic growth against environmental impact — 80-space animated board, 75+ unique building cards, and a live 3D city view rendered in Three.js.",
      link: "https://github.com/kartikssingh/Ecopolis",
      skills: ["React 19", "Three.js", "Vite", "JavaScript"],
      image: "/images/projects/ecopolis.png",
    },
    {
      name: "CodeBird — AI-Assisted App Builder",
      description:
        "Bolt.new-style local app builder where I led code generation as Code Gen Lead — built the project scaffolding engine and a shared multi-provider AI fallback layer used across the whole team.",
      link: "https://github.com/Siddhardha-11/CodeBird",
      skills: ["React", "Vite", "Express", "Node.js"],
      image: "/images/projects/codebird.png",
    },
    {
      name: "Lyrica",
      description:
        "Gamified Flutter app teaching Data Structures, Cryptography, and Structural Engineering through music and animation — owned the Structures module, using real-time audio-visual feedback to teach resonance.",
      link: "https://github.com/AasiyaNaaz/lyrica",
      skills: ["Flutter", "Dart", "Animations"],
      image: "/images/projects/lyrica.png",
    },
  ],

  experience: [
    {
      company: "CodeBird (Team Project)",
      title: "Code Generation Lead",
      dateRange: "2025",
      bullets: [
        "Owned mockProject.js, the core scaffolding engine bootstrapping language-aware file trees and folder structures for generated projects",
        "Built codebird.js, the shared frontend API service layer integrating a multi-provider AI fallback chain with graceful degradation",
        "Designed a language-aware blank file template system so generated projects ran immediately with zero manual config",
      ],
    },
    {
      company: "Lyrica (Team Project)",
      title: "Flutter Developer",
      dateRange: "2025",
      bullets: [
        "Built a gamified app teaching DSA, cryptography, and structural engineering through interactive music and animation",
        "Owned the Structures module end-to-end — designed music-integrated mini-games teaching resonance via real-time audio-visual feedback",
      ],
    },
  ],

  activities: [
    {
      org: "INTRA IIT House Cup",
      role: "House Head, Team Mahoraga",
      dateRange: "IIT Tirupati",
      bullets: [
        "Led Team Mahoraga as House Head in IIT Tirupati's annual cultural and literary cup, competing across 5 houses",
        "Guided the team to a 2nd place overall finish",
      ],
      emoji: "🏆",
    },
    {
      org: "Statistics Club",
      role: "Core Member — Events Management",
      dateRange: "2025-26",
      bullets: [
        "Organized and ran events to encourage statistical thinking across campus, including a guess-based statistical applications game",
      ],
      emoji: "📊",
    },
    {
      org: "Debate Club",
      role: "Core Member",
      dateRange: "IIT Tirupati",
      bullets: [
        "Held debate events including Shipwreck and JAM, and organized competitions for the club",
        "Competed in APDs, JAM, and Shipwreck formats",
        "Represented IIT Tirupati's debate team at Inter-IIT",
        "Won 2nd place in Spin a Yarn and 3rd place in Shipwreck (intra-college debate events)",
      ],
      emoji: "🎙️",
    },
    {
      org: "Medha Club",
      role: "Core Member",
      dateRange: "2 years",
      bullets: [
        "Contributed for 2 years to a platform recognizing women's accomplishments and fostering support within campus",
        "Played a key role organizing Women's Day celebrations for 2 consecutive years",
      ],
      emoji: "💜",
    },
    {
      org: "Tirutsava (IIT Tirupati's Cultural Fest)",
      role: "Event Management Core Member — Tirutsava 2k25",
      dateRange: "2025",
      bullets: ["Core member of the event management team for IIT Tirupati's annual cultural fest"],
      emoji: "🎉",
    },
    {
      org: "Tirutsava (IIT Tirupati's Cultural Fest)",
      role: "Graphic & Content Core Member — Tirutsava 2k26",
      dateRange: "2026",
      bullets: ["Designed official mailers and wrote anchoring speeches for the fest"],
      emoji: "🎨",
    },
  ],

  education: [
    {
      school: "Indian Institute of Technology, Tirupati",
      degree: "B.Tech, Computer Science & Engineering",
      dateRange: "2024 - 2028",
      achievements: [
        "CGPA: 7.92",
        "Competitive programmer on Codeforces — current rating 707, actively competing and climbing",
      ],
    },
    {
      school: "Telangana State Board",
      degree: "Senior Secondary",
      dateRange: "2023",
      achievements: ["92.2%"],
    },
  ],
};

export default config;

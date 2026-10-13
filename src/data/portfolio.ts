export interface Project {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  longDesc?: string;
  icon: string; // Minecraft item style icon name / pixel badge
  tech: string[];
  categories: string[];
  github: string;
  demo?: string;
  features: string[];
  status: string;
  isFlagship?: boolean;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'LANGUAGES' | 'WEB DEVELOPMENT' | 'AI & TOOLS' | 'DEVELOPER TOOLS';
  level: number;
  iconType: string;
  minecraftItem: string; // e.g. "Diamond Sword", "Redstone", "Golden Apple"
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Hackathon' | 'Certification' | 'Milestone' | 'Education';
  issuer: string;
  date: string;
  badge: string;
  icon: string; // Minecraft advancement icon
  description: string;
  skillsGained: string[];
  verificationLink?: string;
  advancementType: 'regular' | 'goal' | 'challenge';
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  badge: string;
  description: string;
  bullets: string[];
  tech: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  location: string;
  description: string;
  courses: string[];
  tech: string[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  handle: string;
  color: string;
  minecraftBlock: string;
}

export interface CreatorContent {
  id: string;
  title: string;
  platform: 'YouTube' | 'Instagram' | 'LinkedIn' | 'GitHub';
  url: string;
  thumbnail?: string;
  tag: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Nikhil Bhadauriya",
    firstName: "Nikhil",
    lastName: "Bhadauriya",
    tagline: "TECH BUILDER × AI ENTHUSIAST × CONTENT CREATOR",
    bubbleQuote: "Exploring Ideas. Building Impact. One Block at a Time.",
    bioShort: "Specializing in modern full-stack TypeScript, scalable React interfaces, event-driven Node.js microservices, Python backend architectures, and normalized relational databases.",
    bioLong: "Whether architecting database schemas for institutional management platforms like VidyaSanchar ERP, delivering the production-grade CarVerse car rental platform, or contributing during my apprenticeships at DUCAT India and S O Infotech, I focus on clean code, type safety, and real-world impact.",
    email: "nikhilbhadauriya2500@gmail.com",
    whatsapp: "+91 80773 13959",
    whatsappUrl: "https://wa.me/918077313959",
    location: "Agra & Noida, Uttar Pradesh, India",
    resumeUrl: "/resume/Nikhil_Bhadauriya_Resume.pdf",
    avatarImage: "/images/profile.jpg",
    avatarFallback: "/images/Nikhil Bhadauriya.png",
    currentFocus: "VidyaSanchar ERP & AI Systems",
    learningFocus: "AI Agents & Vector Search",
    recentActivity: "React & TypeScript Blueprints",
    statusBadge: "Active Tech Builder"
  },

  interests: [
    { title: "Artificial Intelligence", desc: "LLMs, Vector Search, AI agents & prompt flows", icon: "🧠" },
    { title: "Automation", desc: "Background pipelines, workflow tooling & scripts", icon: "⚙️" },
    { title: "Civic Technology", desc: "Digital public goods & citizen-first platforms", icon: "🏛️" },
    { title: "Hackathons", desc: "Rapid prototyping & competitive problem solving", icon: "🏆" },
    { title: "Startups", desc: "0-to-1 product architecture & scalable SaaS models", icon: "🚀" },
    { title: "Content Creation", desc: "Developer education on YouTube & Instagram", icon: "🎬" }
  ],

  projects: [
    {
      id: "nagrik-setu",
      title: "NagrikSetu",
      tagline: "Civic Services & Citizen Tech Gateway",
      desc: "An innovative civic technology platform designed to bridge the gap between citizens and local governance services with transparent workflows, accessible citizen dashboards, and complaint escalation pathways.",
      longDesc: "NagrikSetu empowers local communities with digital service accessibility, streamlined grievance reporting, and transparency metrics. Built with modular full-stack architecture, secure role boundaries, and citizen-friendly interfaces.",
      icon: "beacon",
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      categories: ["Full Stack", "Civic Tech"],
      github: "https://github.com/Nikhil-beep25",
      demo: "https://github.com/Nikhil-beep25",
      features: [
        "Citizen Grievance Portal",
        "Public Service Verification",
        "Status Tracking Ledger",
        "Community Outreach Feeds"
      ],
      status: "Featured Civic Innovation",
      isFlagship: true,
      rarity: "legendary"
    },
    {
      id: "vidyasanchar",
      title: "VidyaSanchar ERP",
      tagline: "School Management ERP Prototype",
      desc: "VidyaSanchar is a full-stack educational management portal simulating institutional automation with role-based access control, attendance logging, student dashboards, and a fee ledger — built with React, Node.js, PostgreSQL, and Prisma.",
      longDesc: "Engineered database schemas for institutional management platforms, with normalized 3NF data models, compound query indexing, transaction rollback safety, and modular role-based views for administrators, teachers, and students.",
      icon: "enchanted_book",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma ORM", "Express", "Docker"],
      categories: ["Full Stack", "SaaS"],
      github: "https://github.com/Nikhil-beep25/Nikhil-Portfolio",
      demo: "https://github.com/Nikhil-beep25",
      features: [
        "Role-Based Dashboards (Admin, Staff, Student)",
        "Attendance Logging & Records",
        "Fee Ledger & Payment Receipt Prototype",
        "PostgreSQL 3NF Normalized Schema"
      ],
      status: "Active Prototype",
      isFlagship: false,
      rarity: "epic"
    },
    {
      id: "carverse",
      title: "CarVerse",
      tagline: "Car Rental Management Platform",
      desc: "A full-stack car rental management system built with the MERN stack. Features vehicle fleet management, dynamic customer booking engine, JWT authentication, role-based admin dashboard, Razorpay payment workflow, and MongoDB Atlas database.",
      longDesc: "Production-ready vehicle reservation engine featuring catalog filtering by vehicle class, availability date intervals, secure payment verification, and admin telemetry for fleet allocation and revenue analytics.",
      icon: "minecart",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Razorpay"],
      categories: ["Full Stack", "Production"],
      github: "https://github.com/Nikhil-beep25/CarVerse",
      demo: "https://carverse-india.vercel.app/",
      features: [
        "Fleet & Vehicle Catalog Filtering",
        "Online Booking & Rental Engine",
        "Admin Fleet & Booking Dashboard",
        "JWT Auth & Role-Based Access Guards"
      ],
      status: "Production Ready",
      isFlagship: false,
      rarity: "rare"
    },
    {
      id: "portfolio-world",
      title: "Minecraft Developer World",
      tagline: "Interactive Portfolio & Game Engine UI",
      desc: "An explorable Minecraft-themed developer portfolio featuring procedural Web Audio synthesizer sounds, voxel environmental animations, 3x3 tech crafting table, interactive inventory, advancement achievements, and day/night cycles.",
      longDesc: "Engineered with React 19, TypeScript, Tailwind CSS, Framer Motion, and Web Audio API synthesizer. Zero copyright audio, accessible ARIA roles, responsive touch hotbar, and full keyboard navigation support.",
      icon: "crafting_table",
      tech: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Audio API", "Vite"],
      categories: ["Frontend", "Interactive"],
      github: "https://github.com/Nikhil-beep25/Nikhil-Portfolio",
      demo: "https://nikhilbhadauriya-portfolio.vercel.app",
      features: [
        "Interactive 3x3 Recipe Crafting Table",
        "Procedural Web Audio Sound Engine",
        "Day / Night Celestial System",
        "Clickable Block Break & XP Counter"
      ],
      status: "Production Live",
      isFlagship: false,
      rarity: "epic"
    }
  ] as Project[],

  skills: [
    // Languages
    { id: "python", name: "Python", category: "LANGUAGES", level: 90, iconType: "python", minecraftItem: "Golden Apple", description: "Backend algorithms, REST services, and GenAI pipelines" },
    { id: "javascript", name: "JavaScript", category: "LANGUAGES", level: 92, iconType: "javascript", minecraftItem: "Redstone Dust", description: "ES6+, event loops, asynchronous programming & DOM APIs" },
    { id: "typescript", name: "TypeScript", category: "LANGUAGES", level: 88, iconType: "typescript", minecraftItem: "Diamond Sword", description: "Strong typing, strict interfaces, generics, and schema validation" },
    { id: "sql", name: "SQL", category: "LANGUAGES", level: 86, iconType: "sql", minecraftItem: "Iron Pickaxe", description: "Relational queries, index optimizations, joins & aggregations" },
    { id: "cpp", name: "C / C++", category: "LANGUAGES", level: 80, iconType: "cpp", minecraftItem: "Bow", description: "Core CS, memory management & algorithmic foundations" },

    // Web Development
    { id: "react", name: "React", category: "WEB DEVELOPMENT", level: 92, iconType: "react", minecraftItem: "Totem of Undying", description: "Component hierarchy, hooks, state management & reactive UI" },
    { id: "nextjs", name: "Next.js", category: "WEB DEVELOPMENT", level: 84, iconType: "nextjs", minecraftItem: "Ender Pearl", description: "SSR, SSG, file-based routing & server actions" },
    { id: "nodejs", name: "Node.js", category: "WEB DEVELOPMENT", level: 88, iconType: "nodejs", minecraftItem: "Brewing Stand", description: "REST microservices, Express middleware & runtime IO" },
    { id: "express", name: "Express", category: "WEB DEVELOPMENT", level: 90, iconType: "express", minecraftItem: "Furnace", description: "API routing, JWT verification, rate limiting & error handling" },
    { id: "postgresql", name: "PostgreSQL", category: "WEB DEVELOPMENT", level: 88, iconType: "postgresql", minecraftItem: "Obsidian", description: "3NF relational modeling, transactions & ACID compliance" },
    { id: "prisma", name: "Prisma ORM", category: "WEB DEVELOPMENT", level: 90, iconType: "prisma", minecraftItem: "Enchanted Book", description: "Type-safe database migrations & declarative modeling" },
    { id: "mongodb", name: "MongoDB", category: "WEB DEVELOPMENT", level: 86, iconType: "mongodb", minecraftItem: "Emerald", description: "Document schemas, Atlas cloud clusters & aggregation pipelines" },
    { id: "tailwindcss", name: "Tailwind CSS", category: "WEB DEVELOPMENT", level: 95, iconType: "tailwind", minecraftItem: "Armor Stand", description: "Responsive layouts, utility tokens & custom design systems" },

    // AI & Tools
    { id: "gemini", name: "Gemini API", category: "AI & TOOLS", level: 86, iconType: "ai", minecraftItem: "Nether Star", description: "Multimodal LLM inference, structured output & reasoning" },
    { id: "vector-search", name: "Vector Search", category: "AI & TOOLS", level: 80, iconType: "ai", minecraftItem: "Eye of Ender", description: "Vector embeddings, similarity matching & RAG retrieval" },
    { id: "prompt-flow", name: "Prompt Flow", category: "AI & TOOLS", level: 85, iconType: "ai", minecraftItem: "Compass", description: "Context window optimization, chain-of-thought & guards" },

    // Developer Tools
    { id: "git", name: "Git", category: "DEVELOPER TOOLS", level: 92, iconType: "git", minecraftItem: "Anvil", description: "Branching strategies, interactive rebasing & conflict resolution" },
    { id: "github", name: "GitHub", category: "DEVELOPER TOOLS", level: 92, iconType: "github", minecraftItem: "Beacon", description: "Open source collaboration, PR reviews & CI/CD workflows" },
    { id: "docker", name: "Docker", category: "DEVELOPER TOOLS", level: 82, iconType: "docker", minecraftItem: "Chest", description: "Containerized dev environments & lightweight deployments" },
    { id: "vscode", name: "VS Code", category: "DEVELOPER TOOLS", level: 94, iconType: "vscode", minecraftItem: "Crafting Table", description: "Primary development workspace, debugging & extensions" },
    { id: "figma", name: "Figma", category: "DEVELOPER TOOLS", level: 82, iconType: "figma", minecraftItem: "Painting", description: "UI wireframing, component mockups & pixel design" }
  ] as SkillItem[],

  // Crafting Recipes: Combinations of technologies that craft real projects or capabilities!
  craftingRecipes: [
    {
      inputs: ["React", "TypeScript", "PostgreSQL"],
      result: {
        title: "NagrikSetu",
        type: "Civic Services Gateway",
        desc: "Crafted a citizen-facing governance portal with transparent service workflows and PostgreSQL ledger!",
        icon: "beacon"
      }
    },
    {
      inputs: ["React", "Node.js", "PostgreSQL"],
      result: {
        title: "VidyaSanchar ERP",
        type: "School Management System",
        desc: "Crafted an institutional ERP prototype with role-based access and Prisma database migrations!",
        icon: "enchanted_book"
      }
    },
    {
      inputs: ["React", "Node.js", "MongoDB"],
      result: {
        title: "CarVerse",
        type: "Fleet Reservation System",
        desc: "Crafted a full-stack car rental platform with JWT security and Razorpay payment engine!",
        icon: "minecart"
      }
    },
    {
      inputs: ["Python", "Gemini API", "FastAPI"],
      result: {
        title: "GenAI Intelligence Engine",
        type: "AI Pipeline Capability",
        desc: "Crafted an intelligent assistant capability with vector search and multimodal reasoning!",
        icon: "nether_star"
      }
    },
    {
      inputs: ["React", "Tailwind CSS", "TypeScript"],
      result: {
        title: "Minecraft Portfolio",
        type: "Interactive Game Experience",
        desc: "Crafted this immersive voxel web portfolio with custom Web Audio and interactive mechanics!",
        icon: "crafting_table"
      }
    }
  ],

  achievements: [
    {
      id: "adv-ducat",
      title: "MERN Full Stack Apprenticeship",
      category: "Milestone",
      issuer: "DUCAT India",
      date: "Mar 2026 – Aug 2026",
      badge: "⚡ APPRENTICESHIP COMPLETE",
      icon: "diamond_sword",
      description: "Completed an intensive engineering apprenticeship focused on modern MERN architecture, JWT security, and agile git workflows.",
      skillsGained: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "REST APIs"],
      verificationLink: "https://github.com/Nikhil-beep25",
      advancementType: "challenge"
    },
    {
      id: "adv-so-infotech",
      title: "Full Stack Developer Trainee",
      category: "Milestone",
      issuer: "S O Infotech (P) Ltd.",
      date: "Dec 2025 – Jul 2026",
      badge: "🏢 INDUSTRY EXPERIENCE",
      icon: "golden_apple",
      description: "Engineered commercial platforms with Python, Generative AI capabilities, payment integrations, and PostgreSQL query optimization.",
      skillsGained: ["Python", "Generative AI", "Payment Gateways", "PostgreSQL", "RESTful APIs"],
      verificationLink: "https://github.com/Nikhil-beep25",
      advancementType: "challenge"
    },
    {
      id: "adv-fcc",
      title: "JavaScript Algorithms & Data Structures",
      category: "Certification",
      issuer: "freeCodeCamp Verified",
      date: "Issued 2025",
      badge: "📜 300+ ALGORITHMIC CHALLENGES",
      icon: "enchanted_book",
      description: "Rigorous verification in foundational and advanced computer science algorithms, complex data structures, and functional programming.",
      skillsGained: ["Algorithms", "Data Structures", "OOP", "Recursion", "Big O Complexity"],
      verificationLink: "https://github.com/Nikhil-beep25",
      advancementType: "goal"
    },
    {
      id: "adv-udemy",
      title: "The Complete Web Developer Bootcamp",
      category: "Certification",
      issuer: "Udemy — Dr. Angela Yu",
      date: "Issued 2025",
      badge: "📜 FULL STACK MASTERY",
      icon: "totem_of_undying",
      description: "Mastered full-stack web development from fundamental frontend layouts to complex backend microservices, databases, and deployment.",
      skillsGained: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"],
      verificationLink: "https://github.com/Nikhil-beep25",
      advancementType: "regular"
    },
    {
      id: "adv-coursera",
      title: "Python for Everybody Specialization",
      category: "Certification",
      issuer: "University of Michigan (Coursera)",
      date: "Issued 2025",
      badge: "📜 PYTHON & SQL ARCHITECTURE",
      icon: "iron_pickaxe",
      description: "Specialized programmatic series covering Python data structures, networked application programming, Web Scraping, REST APIs, and SQLite database engineering.",
      skillsGained: ["Python 3", "SQLite Databases", "Web Scraping", "REST APIs", "JSON/XML Parsing"],
      verificationLink: "https://github.com/Nikhil-beep25",
      advancementType: "regular"
    },
    {
      id: "adv-dbrau",
      title: "Bachelor of Computer Applications (BCA)",
      category: "Education",
      issuer: "Dr. Bhimrao Ambedkar University, Agra",
      date: "2024 – 2027",
      badge: "🎓 HIGHER EDUCATION",
      icon: "beacon",
      description: "Pursuing BCA with a focus on Data Structures, Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.",
      skillsGained: ["Data Structures", "Algorithms", "Relational DBMS", "Computer Networks", "Software Engineering"],
      verificationLink: "https://github.com/Nikhil-beep25",
      advancementType: "goal"
    }
  ] as Achievement[],

  experience: [
    {
      id: "ducat",
      period: "Mar 2026 – Aug 2026",
      company: "DUCAT India",
      role: "Apprenticeship — MERN Full Stack Development",
      location: "Remote / Hybrid",
      badge: "⚡ APPRENTICESHIP",
      description: "Completed an intensive engineering apprenticeship focused on modern MERN architecture. Engineered reusable component systems, RESTful services, and production-grade state and authentication flows.",
      bullets: [
        "Developed production-ready full-stack applications using MongoDB, Express.js, React.js, and Node.js with responsive, accessible user interfaces.",
        "Implemented secure JWT authentication flows, request validations, and global state management using React hooks and Context API.",
        "Conducted end-to-end debugging workflows, API performance optimization, and collaborative Git version control in an agile team setup."
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "RESTful APIs", "Git", "Postman"]
    },
    {
      id: "so-infotech",
      period: "Dec 2025 – Jul 2026",
      company: "S O Infotech (P) Ltd.",
      role: "Full Stack Developer Trainee (Python & GenAI)",
      location: "Noida, Uttar Pradesh, India",
      badge: "🏢 INDUSTRY EXPERIENCE",
      description: "Engineered full-stack web applications and integrated Generative AI capabilities into commercial platforms while collaborating in an agile team environment.",
      bullets: [
        "Engineered an E-commerce web platform using Python Full Stack architecture integrated with Generative AI features for intelligent user interactions.",
        "Collaborated with senior engineers to design RESTful APIs, integrate secure third-party payment gateways, and optimize PostgreSQL queries for sub-second page performance.",
        "Participated in cross-functional sprint planning, schema migrations, code reviews, and version-controlled Git deployments."
      ],
      tech: ["Python", "Generative AI", "RESTful APIs", "Payment Gateways", "PostgreSQL", "SQL Optimization", "Git"]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "dbrau",
      period: "2024 – 2027",
      institution: "Dr. Bhimrao Ambedkar University (DBRAU)",
      degree: "Bachelor of Computer Applications (BCA)",
      location: "Agra, Uttar Pradesh, India",
      description: "Building strong foundations in algorithms, data structures, relational schemas, operating systems, and computer network protocols.",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++/Python)",
        "Database Management Systems (DBMS)",
        "Operating Systems & Computer Networks"
      ],
      tech: ["C / C++", "Python", "Data Structures", "Algorithms", "DBMS & SQL", "OOP"]
    }
  ] as EducationItem[],

  socials: [
    { platform: "GitHub", label: "GitHub", url: "https://github.com/Nikhil-beep25", handle: "@Nikhil-beep25", color: "#FFFFFF", minecraftBlock: "iron_block" },
    { platform: "LinkedIn", label: "LinkedIn", url: "https://www.linkedin.com/in/nikhil-bhadauriya-308414321", handle: "nikhil-bhadauriya", color: "#0A66C2", minecraftBlock: "lapis_block" },
    { platform: "Instagram", label: "Instagram", url: "https://www.instagram.com/itsnikhil_tech", handle: "@itsnikhil_tech", color: "#E1306C", minecraftBlock: "redstone_block" },
    { platform: "YouTube", label: "YouTube", url: "https://www.youtube.com/@ItsNikhilTech", handle: "@ItsNikhilTech", color: "#FF0000", minecraftBlock: "tnt" },
    { platform: "Email", label: "Email", url: "mailto:nikhilbhadauriya2500@gmail.com", handle: "nikhilbhadauriya2500@gmail.com", color: "#06B6D4", minecraftBlock: "diamond_block" }
  ] as SocialLink[],

  creatorContent: [
    {
      id: "youtube-channel",
      title: "ItsNikhilTech — Developer Tech & Code Tutorials",
      platform: "YouTube",
      url: "https://www.youtube.com/@ItsNikhilTech",
      tag: "Video Tutorials",
      description: "Sharing tech knowledge, programming fundamentals, web development blueprints, and software engineering insights for aspiring builders."
    },
    {
      id: "instagram-tech",
      title: "@itsnikhil_tech — Tech Snippets & Coding Life",
      platform: "Instagram",
      url: "https://www.instagram.com/itsnikhil_tech",
      tag: "Reels & Guides",
      description: "Visual coding tips, daily engineering workflow, developer roadmaps, and bite-sized tech updates."
    },
    {
      id: "linkedin-articles",
      title: "Engineering Articles & Architecture Breakdowns",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/nikhil-bhadauriya-308414321",
      tag: "Professional Posts",
      description: "Deep-dives into relational schema design, MERN performance optimization, and full-stack software practices."
    },
    {
      id: "github-open-source",
      title: "Open Source Repositories & Building in Public",
      platform: "GitHub",
      url: "https://github.com/Nikhil-beep25",
      tag: "Code Repositories",
      description: "Public codebases, commit histories, software architectures, and active project explorations."
    }
  ] as CreatorContent[]
};

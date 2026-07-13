import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ArrowRight, Mail, Layers, Code2, Server, Database, 
  Sparkles, Cpu, Smartphone, CheckCircle2, Send, Compass, BookOpen, AlertTriangle
} from 'lucide-react';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiPostgresql, SiTailwindcss, SiTypescript, SiDjango, SiExpress, SiPrisma } from 'react-icons/si';
import AnimatedRole from '../components/AnimatedRole';
import profileAsset from '../assets/profile.jpg';



// 2. Background floating particles
const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; top: string; left: string; size: number; delay: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 1.5 + Math.random() * 2,
      delay: Math.random() * 4,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-15">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

// 3. Social Dock
const SocialDock = () => {
  const socials = [
    { icon: <Mail size={18} />, url: "mailto:nikhilbhadauriya2500@gmail.com", label: "Email", color: "hover:text-[#06B6D4]" },
    { icon: <FaGithub size={18} />, url: "https://github.com/Nikhil-beep25", label: "GitHub", color: "hover:text-white" },
    { icon: <FaLinkedin size={18} />, url: "https://linkedin.com", label: "LinkedIn", color: "hover:text-[#3B82F6]" },
    { icon: <FaTwitter size={18} />, url: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
    { icon: <FaInstagram size={18} />, url: "https://instagram.com", label: "Instagram", color: "hover:text-[#EC4899]" },
  ];

  return (
    <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 shadow-2xl w-fit mx-auto backdrop-blur-md">
      {socials.map((social, idx) => (
        <motion.a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-text-muted transition-colors ${social.color} p-2 rounded-xl hover:bg-white/5 flex items-center justify-center cursor-pointer`}
          whileHover={{ scale: 1.2, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          title={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

const CountUp = ({ value, duration = 1500, suffix = "" }: { value: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = value;
          if (start === end) return;

          const totalMilliseconds = duration;
          const incrementTime = Math.max(Math.floor(totalMilliseconds / end), 20);
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, incrementTime);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef);
    return () => observer.disconnect();
  }, [elementRef, value, duration]);

  return (
    <span ref={setElementRef}>
      {count}{suffix}
    </span>
  );
};

export default function Home() {


  // Mouse move parallax coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const reactParallaxX = useTransform(springX, (v) => v * 0.3);
  const reactParallaxY = useTransform(springY, (v) => v * 0.3);

  const tsParallaxX = useTransform(springX, (v) => v * -0.25);
  const tsParallaxY = useTransform(springY, (v) => v * -0.25);

  const nodeParallaxX = useTransform(springX, (v) => v * 0.4);
  const nodeParallaxY = useTransform(springY, (v) => v * 0.4);

  const pgParallaxX = useTransform(springX, (v) => v * 0.35);
  const pgParallaxY = useTransform(springY, (v) => v * 0.35);

  const dockerParallaxX = useTransform(springX, (v) => v * 0.2);
  const dockerParallaxY = useTransform(springY, (v) => v * 0.2);

  const pythonParallaxX = useTransform(springX, (v) => v * -0.35);
  const pythonParallaxY = useTransform(springY, (v) => v * -0.35);

  const prismaParallaxX = useTransform(springX, (v) => v * -0.3);
  const prismaParallaxY = useTransform(springY, (v) => v * -0.3);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x * 40);
    mouseY.set(y * 40);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Typewriter effect
  const typewriterTexts = [
    "Modern Web Applications",
    "Robust Backend Architectures",
    "Secure SaaS Products",
    "Semantic LLM & AI Integrations"
  ];

  const [typewriterText, setTypewriterText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const currentFullText = typewriterTexts[textIndex];
      if (!isDeleting) {
        setTypewriterText(currentFullText.slice(0, typewriterText.length + 1));
        setTypingSpeed(60);
        
        if (typewriterText === currentFullText) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setTypewriterText(currentFullText.slice(0, typewriterText.length - 1));
        setTypingSpeed(30);
        
        if (typewriterText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
          setTypingSpeed(400);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, textIndex, typingSpeed, typewriterTexts]);

  const [activeProjectFilter, setActiveProjectFilter] = useState<'All' | 'Full Stack' | 'React' | 'SaaS' | 'ERP' | 'Portfolio'>('All');
  


  // Form submission states
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message.');
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', message: '' });
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit. Please try again.");
      setIsSubmitting(false);
    }
  };

  // What I Do Cards
  const whatIDoItems = [
    {
      title: "Frontend Development",
      desc: "Building responsive web applications using React, TypeScript, and Tailwind CSS.",
      icon: <Code2 size={24} className="text-primary-light" />,
      glowColor: "hover:shadow-[0_0_30px_var(--color-primary-hover)] hover:border-primary/25",
    },
    {
      title: "Backend Engineering",
      desc: "Designing RESTful web services, handling token schemes, and routing controllers.",
      icon: <Server size={24} className="text-secondary-light" />,
      glowColor: "hover:shadow-[0_0_30px_var(--color-secondary-hover)] hover:border-secondary/25",
    },
    {
      title: "Database Design",
      desc: "Modeling relational tables, writing schema configurations, and setting index rules.",
      icon: <Database size={24} className="text-secondary" />,
      glowColor: "hover:shadow-[0_0_30px_var(--color-secondary)] hover:border-secondary/25",
    },
    {
      title: "Full Stack Solutions",
      desc: "Building end-to-end applications with clean architectures and seamless integrations.",
      icon: <Layers size={24} className="text-primary" />,
      glowColor: "hover:shadow-[0_0_30px_var(--color-primary)] hover:border-primary/25",
    },
  ];

  // Skills Categories
  const skillsCategories = [
    {
      title: "Frontend Stack",
      icon: <Smartphone size={20} className="text-primary-light" />,
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
        { name: "Framer Motion", icon: <Sparkles className="text-indigo-400" /> },
        { name: "Vite", icon: <Layers className="text-purple-400" /> },
      ],
      glowClass: "hover:border-primary-light/35"
    },
    {
      title: "Backend Core",
      icon: <Server size={20} className="text-secondary-light" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-text-title" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
      ],
      glowClass: "hover:border-secondary-light/35"
    },
    {
      title: "Databases & ORMs",
      icon: <Database size={20} className="text-secondary" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-text-title" /> },
      ],
      glowClass: "hover:border-secondary/35"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cpu size={20} className="text-primary" />,
      skills: [
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "Git", icon: <FaGithub className="text-text-title" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
      ],
      glowClass: "hover:border-primary/35"
    },
    {
      title: "AI Integrations",
      icon: <Sparkles size={20} className="text-emerald-400" />,
      skills: [
        { name: "Gemini API", icon: <Sparkles className="text-emerald-400" /> },
        { name: "Vector Search", icon: <Cpu className="text-emerald-500" /> },
      ],
      glowClass: "hover:border-emerald-500/35"
    }
  ];

  // Project List (Only verified real projects that actually exist)
  const projectsList = [
    {
      title: "VidyaSanchar ERP",
      tagline: "School Management ERP Prototype",
      desc: "VidyaSanchar is a full-stack educational management portal built as an active learning project. It simulates institutional automation with role-based access control, attendance logging, student dashboards, and a fee ledger — built from scratch using React, Node.js, PostgreSQL, and Prisma.",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      categories: ["Full Stack", "ERP", "React"],
      link: "https://github.com/Nikhil-beep25",
      repo: "https://github.com/Nikhil-beep25/Nikhil-Portfolio",
      status: "Prototype Under Active Development",
      isSpotlight: true,
      features: [
        "Role-Based Dashboards",
        "Attendance Tracking",
        "Fee Ledger Prototype",
        "Student Record Management"
      ]
    },
    {
      title: "Personal Portfolio",
      tagline: "Full-Stack Developer Portfolio",
      desc: "A developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a dynamic theme customizer with 7 color palettes, dark/light/system modes, glassmorphism design, and a contact form powered by Resend.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      categories: ["Full Stack", "React", "SaaS", "Portfolio"],
      link: "https://github.com/Nikhil-beep25/Nikhil-Portfolio",
      repo: "https://github.com/Nikhil-beep25/Nikhil-Portfolio",
      status: "Production Ready",
      isSpotlight: false,
      features: [
        "Dynamic Theme Customizer",
        "7-Palette Color System",
        "English Support",
        "Scroll-Aware Navigation"
      ]
    }
  ];

  const filteredProjects = projectsList.filter(project => {
    if (activeProjectFilter === 'All') return true;
    return project.categories.includes(activeProjectFilter);
  });

  // Timeline journey
  const milestones = [
    {
      step: "STEP 1",
      title: "Computer Science Fundamentals",
      subtitle: "Fundamentals & Basics",
      desc: "Started learning web development fundamentals and computer science basics.",
      tech: ["HTML", "CSS", "JavaScript", "Git", "Problem Solving"]
    },
    {
      step: "STEP 2",
      title: "Frontend Development",
      subtitle: "UI Engineering",
      desc: "Focused on modern frontend development and UI engineering.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Component Architecture"]
    },
    {
      step: "STEP 3",
      title: "Backend Development",
      subtitle: "Server & REST APIs",
      desc: "Expanded into backend development and server-side architecture.",
      tech: ["Node.js", "Express.js", "REST APIs", "Authentication", "Database Design"]
    },
    {
      step: "STEP 4",
      title: "Database & DevOps",
      subtitle: "Infrastructure & Scaling",
      desc: "Built scalable applications with proper database structures.",
      tech: ["PostgreSQL", "Prisma ORM", "GitHub", "Deployment", "Docker Basics"]
    },
    {
      step: "STEP 5",
      title: "VidyaSanchar ERP",
      subtitle: "🔥 CURRENT PROJECT",
      desc: "Building a full-stack school ERP with authentication, student management, attendance, fee management, and PostgreSQL integration.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
      badge: "🔥 CURRENT PROJECT",
      highlight: true
    },
    {
      step: "STEP 6",
      title: "Future Goals",
      subtitle: "🚀 NEXT PHASE",
      desc: "",
      bullets: ["SaaS Products", "AI Integrations", "Open Source Contributions", "Production Scale Applications"],
      tech: [],
      badge: "🚀 NEXT PHASE"
    }
  ];

  return (
    <motion.div
      className="relative bg-bg-darkest min-h-screen text-text-main overflow-hidden pt-[80px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* -------------------- Aurora Blurred Background Orbs -------------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-10] select-none">
        <div className="absolute top-[3%] left-[8%] w-[450px] h-[450px] rounded-full orb-cyan blur-[130px] animate-aurora-slow" />
        <div className="absolute top-[22%] right-[4%] w-[550px] h-[550px] rounded-full orb-purple blur-[140px] animate-aurora-fast" />
        <div className="absolute top-[48%] left-[-8%] w-[500px] h-[500px] rounded-full orb-pink blur-[125px] animate-aurora-slow" />
        <div className="absolute top-[72%] right-[8%] w-[480px] h-[480px] rounded-full orb-blue blur-[120px] animate-aurora-fast" />
        <div className="absolute top-[88%] left-[15%] w-[420px] h-[420px] rounded-full orb-emerald blur-[115px] animate-aurora-slow" />
      </div>

      {/* Background Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-5] select-none">
        <ParticleBackground />
      </div>      {/* -------------------- SPLIT-SCREEN HERO SECTION -------------------- */}
      <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-8 overflow-hidden z-10 scroll-mt-[80px]">
        <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Personal Branding Layout */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left py-4 md:py-8">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-fit mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                AVAILABLE FOR PROJECTS
              </span>
            </motion.div>

            {/* Heading & Massive Name */}
            <div className="mb-4 w-full max-w-[850px] overflow-visible z-10 relative select-none cursor-default">
              <div className="absolute inset-0 bg-[#38BDF8]/15 blur-[40px] z-[1] pointer-events-none rounded-full w-full h-full" />
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                style={{ fontSize: "clamp(52px, 5vw, 72px)", lineHeight: "1", letterSpacing: "-0.03em" }}
                className="font-black font-display name-gradient-text relative select-none cursor-default whitespace-nowrap overflow-visible z-10 pb-1"
              >
                Nikhil Bhadauriya
              </motion.h1>
            </div>

            {/* Subtitle/Role with rotating professional titles */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mb-5 space-y-1.5 text-left"
            >
              {/* Rotating Title */}
              <div className="relative h-[28px] md:h-[34px] overflow-hidden w-full">
                <AnimatedRole className="text-xl md:text-2xl absolute left-0 top-0" />
              </div>

              {/* Typing Animation */}
              <p className="text-[10px] md:text-xs font-mono font-bold text-secondary-light tracking-widest uppercase h-5 flex items-center">
                {typewriterText}
                <span className="w-[2px] h-3.5 bg-primary-light ml-1 animate-pulse inline-block" />
              </p>
            </motion.div>

            {/* Short description */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="text-sm md:text-base text-text-muted leading-relaxed max-w-2xl mb-7 space-y-3"
            >
              <p>
                Building modern web applications, AI-powered products, and scalable SaaS platforms using React, TypeScript, Node.js, PostgreSQL, and modern cloud technologies.
              </p>
              <p>
                Focused on creating clean user experiences, building functional systems, and continuously improving through personal and educational projects.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                View My Work
                <ArrowRight size={14} />
              </a>
              <a
                href="/resume/Nikhil_Bhadauriya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/5 text-text-title border border-white/5 hover:border-primary/20 text-xs font-bold active:scale-95 transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]"
              >
                📄 View Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Apple Vision Pro style independent floating system with Mouse Parallax */}
          <motion.div 
            className="lg:col-span-6 flex justify-center items-center relative min-h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Outer Box Container with center profile image */}
            <div className="relative w-[360px] h-[360px] md:w-[500px] md:h-[500px] flex items-center justify-center">
              
              {/* Profile Image Frame (15% larger) with 6px floating animation */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative w-60 h-60 md:w-[330px] md:h-[330px] rounded-full p-1.5 bg-gradient-to-tr from-primary to-secondary shadow-[0_0_50px_rgba(139,92,246,0.15)] flex-shrink-0 z-10 overflow-hidden"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-bg-darkest relative bg-bg-dark flex items-center justify-center">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Nikhil Bhadauriya profile" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238B5CF6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </motion.div>

              {/* Independent Floating Tech Badges (Circular Orbit) with Mouse Parallax transforms */}
              {[
                { name: "React", icon: <FaReact className="text-[#61DAFB]" />, pos: { top: '6%', right: '6%' }, x: [0, -5, 5, 0], y: [0, -8, 6, 0], duration: 6, delay: 0, glow: "rgba(97,218,251,0.25)", pX: reactParallaxX, pY: reactParallaxY },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, pos: { top: '48%', right: '-10%' }, x: [0, -8, 6, 0], y: [0, -4, 8, 0], duration: 7, delay: 0.5, glow: "rgba(49,120,198,0.25)", pX: tsParallaxX, pY: tsParallaxY },
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, pos: { top: '6%', left: '6%' }, x: [0, 6, -5, 0], y: [0, -6, 8, 0], duration: 8, delay: 0.2, glow: "rgba(51,153,51,0.25)", pX: nodeParallaxX, pY: nodeParallaxY },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, pos: { bottom: '6%', left: '6%' }, x: [0, 8, -6, 0], y: [0, 6, -10, 0], duration: 7.5, delay: 0.8, glow: "rgba(65,105,225,0.25)", pX: pgParallaxX, pY: pgParallaxY },
                { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, pos: { top: '-10%', left: '42%' }, x: [0, 4, -4, 0], y: [0, -10, 6, 0], duration: 9, delay: 0, glow: "rgba(36,150,237,0.25)", pX: dockerParallaxX, pY: dockerParallaxY },
                { name: "Python", icon: <FaPython className="text-[#3776AB]" />, pos: { top: '48%', left: '-10%' }, x: [0, 6, -8, 0], y: [0, 8, -6, 0], duration: 6.5, delay: 1.0, glow: "rgba(55,118,171,0.25)", pX: pythonParallaxX, pY: pythonParallaxY },
                { name: "Prisma", icon: <SiPrisma className="text-white" />, pos: { bottom: '6%', right: '6%' }, x: [0, -6, 6, 0], y: [0, 8, -8, 0], duration: 8.5, delay: 1.2, glow: "rgba(255,255,255,0.15)", pX: prismaParallaxX, pY: prismaParallaxY },
              ].map((badge) => {
                return (
                  <motion.div
                    key={badge.name}
                    className="absolute z-20"
                    style={{
                      ...badge.pos,
                      x: badge.pX,
                      y: badge.pY
                    }}
                  >
                    <motion.div
                      animate={{
                        x: badge.x,
                        y: badge.y
                      }}
                      transition={{
                        duration: badge.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: badge.delay
                      }}
                      className="p-2 px-3 rounded-xl bg-bg-card backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-1.5 cursor-default hover:border-primary/50 transition-colors"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: `0 0 20px ${badge.glow}`,
                      }}
                    >
                      <span className="text-base flex items-center justify-center">{badge.icon}</span>
                      <span className="text-[9px] font-bold font-mono text-text-muted">{badge.name}</span>
                    </motion.div>
                  </motion.div>
                );
              })}

            </div>
          </motion.div>
          
        </div>
      </section>

      {/* -------------------- ABOUT SECTION -------------------- */}
      <section id="about" className="py-24 relative border-t border-white/5 bg-bg-dark/15 z-10 scroll-mt-[104px]">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-display text-xs font-bold tracking-widest uppercase mb-3 bg-white/[0.02] border border-white/5 px-3.5 py-1.5 rounded-full">
              WHO I AM
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              About & Core Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Summary Description */}
            <motion.div 
              className="lg:col-span-8 p-8 rounded-[32px] glass-aurora border border-white/5 relative overflow-hidden flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold font-display text-text-title mb-5 flex items-center gap-2">
                  <Sparkles size={22} className="text-primary animate-pulse" />
                  Nikhil Bhadauriya
                </h3>
                <p className="text-sm md:text-base text-text-muted leading-relaxed mb-6">
                  I am a software engineer focused on full-stack web development, API engineering, and database design. I build applications using React, TypeScript, Node.js, and Python, ensuring clean separation of concerns and optimized performance.
                </p>
                <p className="text-sm md:text-base text-text-muted leading-relaxed">
                  With experience in structuring relational schemas and designing robust APIs, I build functional applications like VidyaSanchar ERP. I enjoy solving architectural challenges and deploying scalable web services.
                </p>
              </div>

              {/* Genuine Information Block */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/5">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono mb-2 block">CORE FOCUS</span>
                  <ul className="text-xs text-text-main space-y-1.5 font-bold font-mono">
                    <li>• Full-Stack Architecture</li>
                    <li>• API Engineering</li>
                    <li>• Database Normalization</li>
                    <li>• SaaS Integrations</li>
                  </ul>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono mb-2 block">TECH STACK</span>
                  <div className="flex flex-wrap gap-1 max-w-xs">
                    {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Prisma', 'Docker'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[9px] text-text-muted font-mono font-bold">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono mb-2 block">LOCATION</span>
                  <span className="text-xs text-text-main font-bold font-mono">Agra, UP, India</span>
                </div>
              </div>
            </motion.div>

            {/* Right Card: Education Dashboard widget */}
            <motion.div 
              className="lg:col-span-4 p-8 rounded-[32px] glass-aurora border border-white/5 text-left flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div>
                <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-mono text-[10px] font-bold tracking-widest uppercase mb-3 bg-white/[0.02] border border-white/5 px-3 py-1 rounded-full">
                  ACADEMICS
                </span>
                <h3 className="text-lg font-bold font-display text-text-title mt-4 mb-3">
                  Education
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Pursuing a Bachelor of Computer Applications (BCA) at Dr. Bhimrao Ambedkar University, Agra. Focusing on computer science fundamentals, software engineering concepts, database management, and web technologies.
                </p>
              </div>
              
              <div className="mt-8 p-4 rounded-xl bg-white/[0.01] border border-white/5 flex gap-3 items-center">
                <BookOpen className="text-primary-light" size={24} />
                <span className="text-[11px] font-mono text-text-muted font-semibold">Bachelor of Computer Applications (BCA)</span>
              </div>
            </motion.div>
          </div>

          {/* Stats Counters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
            {[
              { value: 6, suffix: "+", label: "Core Services", desc: "API dev, DB designs, SaaS components, UI setups, and prompt engineering." },
              { value: 12, suffix: "+", label: "Stack Tools", desc: "Languages, databases, frameworks, and deployment engines." },
              { text: "100%", suffix: "", label: "Verifiable Code", desc: "Every project has a live repository and real codebases." },
              { text: "24/7", suffix: "", label: "Active Learning", desc: "Constantly building, optimizing, and exploring new systems." }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 text-center flex flex-col justify-between shadow-inner h-full min-h-[160px]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  <span className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-display block">
                    {'value' in stat ? (
                      <CountUp value={stat.value!} suffix={stat.suffix} />
                    ) : (
                      <span>{stat.text}{stat.suffix}</span>
                    )}
                  </span>
                  <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-text-muted mt-2 block">
                    {stat.label}
                  </span>
                </div>
                <p className="text-[10px] md:text-xs text-text-muted/80 leading-relaxed mt-3 pt-3 border-t border-white/5 font-medium">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Highlight Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            {[
              {
                title: "Frontend Development",
                icon: <Code2 className="text-primary-light" size={20} />,
                desc: "Creating clean user interfaces, structuring modular components, and building custom themes.",
                techs: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
              },
              {
                title: "Backend Core",
                icon: <Server className="text-secondary-light" size={20} />,
                desc: "Designing RESTful web services, handling token schemes, and routing controllers.",
                techs: ["Node.js", "Express", "REST APIs", "Prisma ORM"]
              },
              {
                title: "Python Utilities",
                icon: <FaPython className="text-secondary" size={20} />,
                desc: "Automating system configurations, writing scripts, and querying data models.",
                techs: ["Python 3", "Django", "Data Analytics", "Automation"]
              },
              {
                title: "Database Systems",
                icon: <Database className="text-primary" size={20} />,
                desc: "Modeling relational tables, writing schema configurations, and setting index rules.",
                techs: ["PostgreSQL", "Prisma ORM", "SQL Schema", "Data Modeling"]
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                className="p-6 rounded-[24px] glass-aurora border border-white/5 flex flex-col justify-between text-left transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl w-fit mb-5 group-hover:border-primary/30 transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-title font-display mb-2">{card.title}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed mb-4">{card.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-white/5">
                  {card.techs.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[9px] text-text-muted font-mono font-semibold">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expanded Personal Story & Current Goals Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              className="p-8 rounded-[32px] glass-aurora border border-white/5 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono mb-2.5 block">THE PATHWAY</span>
              <h4 className="text-lg font-bold font-display text-text-title mb-4">My Personal Coding Story</h4>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed select-none">
                My journey began with a curiosity for how web interfaces and software are built. Starting with basics like HTML/CSS, I soon progressed to full-stack engineering, learning how client applications interact with backend systems and relational databases. Building projects like VidyaSanchar ERP taught me how to manage real-world states and enforce role permissions. I enjoy creating robust applications that bridge backend efficiency with pleasant visual design.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-[32px] glass-aurora border border-white/5 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono mb-2.5 block">THE FUTURE</span>
              <h4 className="text-lg font-bold font-display text-text-title mb-4">My Development Goals</h4>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed select-none">
                I aim to master advanced backend paradigms, optimize database indexing, and build production-grade SaaS products. I am currently learning API load optimization, Docker configurations, and integrating LLMs/semantic lookups. My focus is on writing maintainable, well-structured codebases that follow clean programming principles.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* -------------------- WHAT I DO SERVICES SECTION -------------------- */}
      <section className="py-24 relative border-t border-white/5 z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text font-display text-xs font-bold tracking-widest uppercase mb-3 bg-white/[0.02] border border-white/5 px-3.5 py-1.5 rounded-full">
              WHAT I DO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              Core Engineering Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIDoItems.map((item, idx) => (
              <motion.div
                key={idx}
                className={`p-6 rounded-[24px] glass-aurora border border-white/5 flex flex-col h-full group text-left ${item.glowColor}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl w-fit mb-5 group-hover:border-primary/35 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-text-title font-display mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------- SKILLS WIDGETS SECTION -------------------- */}
      <section id="skills" className="py-24 relative border-t border-white/5 bg-bg-dark/15 z-10 scroll-mt-[104px]">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-display text-xs font-bold tracking-widest uppercase mb-3 bg-white/[0.02] border border-white/5 px-3.5 py-1.5 rounded-full">
              My Tech Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              Full-Stack Tooling & Expertise
            </h2>
          </div>

          {/* Equal height dashboard widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            {skillsCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className={`p-6 rounded-[24px] glass-aurora border border-white/5 flex flex-col justify-between h-[500px] min-h-[500px] group text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${category.glowClass}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Upper content wrapper */}
                <div className="flex flex-col gap-6 w-full">
                  {/* Header: Icon + Title */}
                  <div className="flex items-center gap-2.5 pb-4 border-b border-white/5">
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                      {category.icon}
                    </div>
                    <h4 className="text-xs font-bold text-text-title font-display uppercase tracking-wider">
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills List - Starts at same vertical offset */}
                  <div className="flex flex-col gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all duration-200 cursor-default"
                      >
                        <span className="text-lg flex items-center justify-center">
                          {skill.icon}
                        </span>
                        <span className="text-xs font-semibold text-text-muted font-mono">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Badge - Pushed to bottom */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-mono font-bold text-primary-light uppercase tracking-wider">
                    Verified Stack
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------- PROJECTS SECTION -------------------- */}
      <section id="projects" className="py-24 relative border-t border-white/5 z-10 scroll-mt-[104px]">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Header row: title left, filters right */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <span className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text font-display text-xs font-bold tracking-widest uppercase">
                Featured Project
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-2">
                Engineering Projects Case Studies
              </h2>
              <p className="text-text-muted mt-4 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
                Projects I have built from scratch — each with a real codebase, verifiable tech stack, and a GitHub repository.
              </p>
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'All', label: 'All' },
                { id: 'Full Stack', label: 'Full Stack' },
                { id: 'React', label: 'React' },
                { id: 'SaaS', label: 'SaaS' },
                { id: 'ERP', label: 'ERP' },
                { id: 'Portfolio', label: 'Portfolio' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveProjectFilter(filter.id as any)}
                  className={`px-4 py-1.5 text-[11px] font-bold rounded-full transition-all duration-300 border cursor-pointer whitespace-nowrap ${
                    activeProjectFilter === filter.id
                      ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/40 text-text-title shadow-sm'
                      : 'border-white/8 text-text-muted hover:text-text-title hover:bg-white/5'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2-column card grid */}
          <div className={`grid gap-8 ${filteredProjects.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 lg:grid-cols-2'}`}>
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, pIdx) => (
                <motion.div
                  key={project.title}
                  layout
                  className="rounded-[24px] glass-aurora border border-white/5 relative overflow-hidden flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: pIdx * 0.08 }}
                  whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(99,102,241,0.18)' }}
                >
                  {/* ── Browser mockup preview (light, forced inline) ── */}
                  <div
                    className="w-full rounded-t-[24px] overflow-hidden shrink-0"
                    style={{ background: '#ffffff', borderBottom: '1px solid rgba(0,0,0,0.07)' }}
                  >
                    {/* Browser chrome */}
                    <div
                      className="flex items-center gap-1.5 px-3 py-2"
                      style={{ background: '#f1f5f9', borderBottom: '1px solid rgba(0,0,0,0.05)' }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ background: '#f87171' }} />
                      <span className="w-2 h-2 rounded-full" style={{ background: '#fbbf24' }} />
                      <span className="w-2 h-2 rounded-full" style={{ background: '#4ade80' }} />
                      <div
                        className="ml-2 flex-1 max-w-[160px] rounded px-2 py-0.5 text-center text-[9px] font-mono truncate"
                        style={{ background: 'rgba(0,0,0,0.05)', color: '#64748b' }}
                      >
                        {project.title.toLowerCase().replace(/\s+/g, '-')}.dev
                      </div>
                    </div>

                    {/* Preview viewport — 230px */}
                    <div className="relative overflow-hidden" style={{ height: 230 }}>

                      {project.title === 'VidyaSanchar ERP' ? (
                        /* ═══════════════════════════════════════════════
                           LIGHT ERP DASHBOARD — Notion / Linear / Stripe
                           ═══════════════════════════════════════════════ */
                        <div
                          className="w-full h-full flex flex-col relative"
                          style={{ background: 'linear-gradient(150deg,#f8faff 0%,#f1f5fe 100%)', fontFamily: 'system-ui,sans-serif' }}
                        >
                          {/* Soft ambient glows */}
                          <div className="absolute pointer-events-none" style={{ top: -30, left: -20, width: 140, height: 140, background: 'radial-gradient(circle,rgba(99,102,241,0.10) 0%,transparent 70%)', borderRadius: '50%' }} />
                          <div className="absolute pointer-events-none" style={{ bottom: -20, right: 20, width: 110, height: 110, background: 'radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 70%)', borderRadius: '50%' }} />

                          {/* ── Top Navbar ── */}
                          <div className="flex items-center justify-between px-4 py-2 shrink-0 relative z-10" style={{ background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(99,102,241,0.10)' }}>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2.5 h-2.5 rounded" style={{ background: 'linear-gradient(135deg,#6366f1,#38bdf8)' }} />
                              <span style={{ fontSize: 8.5, fontWeight: 900, color: '#1e293b' }}>VidyaSanchar <span style={{ color: '#6366f1' }}>ERP</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                              {['Dashboard','Students','Attendance','Fees'].map(n => (
                                <span key={n} style={{ fontSize: 7, fontWeight: 700, color: n === 'Dashboard' ? '#6366f1' : '#94a3b8' }}>{n}</span>
                              ))}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="px-2 py-0.5 rounded-full" style={{ background: '#f0fdf4', border: '1px solid #86efac', fontSize: 6.5, fontWeight: 800, color: '#16a34a' }}>● Term Active</div>
                              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', fontSize: 7, fontWeight: 900, color: '#fff' }}>A</div>
                            </div>
                          </div>

                          {/* ── Dashboard Body ── */}
                          <div className="flex-1 flex gap-0 overflow-hidden relative z-10">
                            {/* Left sidebar */}
                            <div className="flex flex-col gap-0 py-2 px-2 shrink-0" style={{ width: 56, background: 'rgba(255,255,255,0.6)', borderRight: '1px solid rgba(99,102,241,0.08)' }}>
                              {[
                                { icon: '⊞', label: 'Overview', active: true },
                                { icon: '👥', label: 'Students', active: false },
                                { icon: '✅', label: 'Attend', active: false },
                                { icon: '💰', label: 'Fees', active: false },
                              ].map(item => (
                                <div key={item.label} className="flex flex-col items-center gap-0.5 py-1.5 rounded-lg" style={{ background: item.active ? 'rgba(99,102,241,0.08)' : 'transparent' }}>
                                  <span style={{ fontSize: 10 }}>{item.icon}</span>
                                  <span style={{ fontSize: 5.5, fontWeight: 700, color: item.active ? '#6366f1' : '#94a3b8' }}>{item.label}</span>
                                </div>
                              ))}
                            </div>

                            {/* Main content */}
                            <div className="flex-1 flex flex-col gap-2 p-3 overflow-hidden">
                              {/* Stat cards */}
                              <div className="grid grid-cols-4 gap-2 shrink-0">
                                {[
                                  { label: 'Students', val: '1,247', delta: '+4.2%', icon: '👥', vc: '#6366f1', dc: '#22c55e', bg: 'rgba(99,102,241,0.06)', border: 'rgba(99,102,241,0.15)' },
                                  { label: 'Attendance', val: '96.4%', delta: '↑ 1.1%', icon: '✅', vc: '#0ea5e9', dc: '#22c55e', bg: 'rgba(14,165,233,0.06)', border: 'rgba(14,165,233,0.15)' },
                                  { label: 'Fees Paid', val: '84.2%', delta: '₹8.4L', icon: '💰', vc: '#8b5cf6', dc: '#8b5cf6', bg: 'rgba(139,92,246,0.06)', border: 'rgba(139,92,246,0.15)' },
                                  { label: 'Classes', val: '38', delta: 'Active', icon: '📚', vc: '#f59e0b', dc: '#f59e0b', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.15)' },
                                ].map(s => (
                                  <div key={s.label} className="flex flex-col gap-0.5 p-2 rounded-xl" style={{ background: '#ffffff', border: `1px solid ${s.border}`, boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
                                    <div className="flex items-center justify-between">
                                      <span style={{ fontSize: 9 }}>{s.icon}</span>
                                      <span style={{ fontSize: 6, fontWeight: 800, color: s.dc, background: `${s.dc}15`, padding: '0 3px', borderRadius: 3 }}>{s.delta}</span>
                                    </div>
                                    <span style={{ fontSize: 13, fontWeight: 900, color: s.vc, lineHeight: 1 }}>{s.val}</span>
                                    <span style={{ fontSize: 6, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{s.label}</span>
                                    {/* Progress bar */}
                                    <div style={{ height: 2.5, background: `${s.border}`, borderRadius: 2, overflow: 'hidden', marginTop: 2 }}>
                                      <div style={{ height: '100%', width: s.label === 'Classes' ? '100%' : s.val.replace('%','').replace(',','') > '50' ? '80%' : '60%', background: s.vc, borderRadius: 2 }} />
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Student attendance table */}
                              <div className="flex-1 rounded-xl overflow-hidden flex flex-col" style={{ background: '#ffffff', border: '1px solid rgba(99,102,241,0.10)', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
                                <div className="flex items-center justify-between px-3 py-1.5" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', background: 'rgba(99,102,241,0.03)' }}>
                                  <span style={{ fontSize: 7.5, fontWeight: 800, color: '#334155' }}>Today's Attendance</span>
                                  <div className="flex gap-1.5">
                                    <span style={{ fontSize: 6, fontWeight: 700, padding: '1px 5px', borderRadius: 4, background: '#f0fdf4', color: '#16a34a', border: '1px solid #86efac' }}>42 Present</span>
                                    <span style={{ fontSize: 6, fontWeight: 700, padding: '1px 5px', borderRadius: 4, background: '#fff1f2', color: '#e11d48', border: '1px solid #fda4af' }}>3 Absent</span>
                                  </div>
                                </div>
                                <div className="flex px-3 py-1" style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                                  {['Name','Roll No','Class','Subject','Status'].map((h,i) => (
                                    <span key={h} style={{ fontSize: 6.5, fontWeight: 700, color: '#94a3b8', flex: i===0||i===3 ? 1.8 : 1, textAlign: i===4 ? 'right' : 'left' }}>{h}</span>
                                  ))}
                                </div>
                                {[
                                  { name: 'Aarav Sharma', roll: '#012', cls: '10-A', sub: 'Mathematics', s: 'Present', sc: '#16a34a', sb: '#f0fdf4', sbd: '#86efac' },
                                  { name: 'Priya Singh', roll: '#019', cls: '10-B', sub: 'Science', s: 'Present', sc: '#16a34a', sb: '#f0fdf4', sbd: '#86efac' },
                                  { name: 'Rohan Gupta', roll: '#034', cls: '10-A', sub: 'English', s: 'Absent', sc: '#e11d48', sb: '#fff1f2', sbd: '#fda4af' },
                                ].map((row, ri) => (
                                  <div key={row.name} className="flex items-center px-3 py-1" style={{ borderBottom: ri < 2 ? '1px solid rgba(0,0,0,0.03)' : 'none', background: ri % 2 === 1 ? 'rgba(99,102,241,0.01)' : 'transparent' }}>
                                    <div className="flex items-center gap-1" style={{ flex: 1.8 }}>
                                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', fontSize: 6, fontWeight: 900, color: '#fff' }}>{row.name[0]}</div>
                                      <span style={{ fontSize: 7, fontWeight: 700, color: '#1e293b' }}>{row.name}</span>
                                    </div>
                                    <span style={{ fontSize: 7, color: '#64748b', flex: 1 }}>{row.roll}</span>
                                    <span style={{ fontSize: 7, color: '#64748b', flex: 1 }}>{row.cls}</span>
                                    <span style={{ fontSize: 7, color: '#64748b', flex: 1.8 }}>{row.sub}</span>
                                    <span style={{ fontSize: 6.5, fontWeight: 800, padding: '1.5px 6px', borderRadius: 5, background: row.sb, color: row.sc, border: `1px solid ${row.sbd}`, flex: 1, textAlign: 'right' }}>{row.s}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                      ) : (
                        /* ════════════════════════════════════════════════
                           LIGHT PORTFOLIO — Premium Glassmorphism Preview
                           ════════════════════════════════════════════════ */
                        <div
                          className="w-full h-full flex flex-col relative"
                          style={{ background: 'linear-gradient(145deg,#eef2ff 0%,#f8faff 40%,#f3f0ff 100%)', fontFamily: 'system-ui,sans-serif' }}
                        >
                          {/* Ambient glow orbs */}
                          <div className="absolute pointer-events-none" style={{ top: -30, left: '5%', width: 150, height: 150, background: 'radial-gradient(circle,rgba(99,102,241,0.13) 0%,transparent 70%)', borderRadius: '50%' }} />
                          <div className="absolute pointer-events-none" style={{ bottom: -30, right: '5%', width: 120, height: 120, background: 'radial-gradient(circle,rgba(139,92,246,0.11) 0%,transparent 70%)', borderRadius: '50%' }} />
                          <div className="absolute pointer-events-none" style={{ top: '40%', right: '25%', width: 90, height: 90, background: 'radial-gradient(circle,rgba(56,189,248,0.09) 0%,transparent 70%)', borderRadius: '50%' }} />

                          {/* ── Glass Navbar ── */}
                          <div
                            className="flex items-center justify-between px-4 py-2 shrink-0 relative z-10"
                            style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(99,102,241,0.08)', boxShadow: '0 1px 16px rgba(99,102,241,0.05)' }}
                          >
                            {/* Logo */}
                            <div className="flex items-center gap-1.5">
                              <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 2px 6px rgba(99,102,241,0.4)' }}>
                                <span style={{ fontSize: 5.5, fontWeight: 900, color: '#fff' }}>N</span>
                              </div>
                              <span style={{ fontSize: 8.5, fontWeight: 900, color: '#1e1b4b', letterSpacing: '-0.02em' }}>Nikhil<span style={{ color: '#6366f1' }}>.</span><span style={{ color: '#8b5cf6' }}>dev</span></span>
                            </div>
                            {/* Nav links */}
                            <div className="flex items-center gap-3" style={{ fontSize: 7, fontWeight: 700 }}>
                              <span className="px-2 py-0.5 rounded-md" style={{ background: 'rgba(99,102,241,0.08)', color: '#6366f1' }}>Home</span>
                              <span style={{ color: '#64748b' }}>About</span>
                              <span style={{ color: '#64748b' }}>Skills</span>
                              <span style={{ color: '#64748b' }}>Projects</span>
                            </div>
                            {/* Hire CTA */}
                            <div className="px-2.5 py-1 rounded-full" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', fontSize: 6.5, fontWeight: 800, color: '#fff', boxShadow: '0 2px 10px rgba(99,102,241,0.40)' }}>Hire Me ↗</div>
                          </div>

                          {/* ── Hero body ── */}
                          <div className="flex-1 flex items-center justify-between gap-4 px-5 relative z-10 overflow-hidden">
                            {/* Left text column */}
                            <div className="flex flex-col gap-1.5 min-w-0" style={{ maxWidth: 155 }}>
                              {/* Available badge */}
                              <div className="inline-flex items-center gap-1.5 w-fit rounded-full px-2.5 py-1" style={{ background: '#f0fdf4', border: '1px solid #86efac', boxShadow: '0 1px 6px rgba(34,197,94,0.12)' }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 5px #22c55e' }} />
                                <span style={{ fontSize: 6.5, fontWeight: 800, color: '#15803d' }}>Available for Work</span>
                              </div>

                              {/* Hero name */}
                              <div style={{ fontSize: 19, fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.03em', background: 'linear-gradient(130deg,#4338ca 0%,#6366f1 35%,#38bdf8 70%,#8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Nikhil<br />Bhadauriya
                              </div>

                              {/* Subtitle */}
                              <div style={{ fontSize: 7.5, fontWeight: 800, color: '#6366f1', letterSpacing: '0.07em', textTransform: 'uppercase' }}>Full Stack Developer</div>

                              {/* Description micro */}
                              <div style={{ fontSize: 6.5, color: '#94a3b8', fontWeight: 600, lineHeight: 1.4 }}>
                                Building robust backends, scaling schemas, and creating functional React client interfaces.
                              </div>

                              {/* CTA row */}
                              <div className="flex items-center gap-2 mt-1">
                                <div className="px-3 py-1.5 rounded-xl" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', fontSize: 7, fontWeight: 800, color: '#fff', boxShadow: '0 4px 14px rgba(99,102,241,0.45)', whiteSpace: 'nowrap' }}>
                                  Explore Demo →
                                </div>
                                <div className="px-2.5 py-1.5 rounded-xl" style={{ background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.20)', fontSize: 7, fontWeight: 700, color: '#6366f1', whiteSpace: 'nowrap' }}>
                                  View Resume
                                </div>
                              </div>

                              {/* Mini stats */}
                              <div className="flex gap-3 mt-1">
                                {[['5+', 'Projects'], ['10+', 'Skills'], ['React', 'Stack']].map(([n, l]) => (
                                  <div key={l} className="flex flex-col">
                                    <span style={{ fontSize: 8, fontWeight: 900, color: '#1e293b' }}>{n}</span>
                                    <span style={{ fontSize: 5.5, fontWeight: 700, color: '#94a3b8' }}>{l}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Right: avatar orbit */}
                            <div className="relative flex items-center justify-center shrink-0" style={{ width: 110, height: 110 }}>
                              {/* Outer rotating dashed orbit */}
                              <motion.div 
                                className="absolute" 
                                style={{ width: 104, height: 104, border: '1.5px dashed rgba(99,102,241,0.22)', borderRadius: '50%' }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                              />
                              {/* Inner static/slow rotating ring */}
                              <motion.div 
                                className="absolute" 
                                style={{ width: 80, height: 80, border: '1px solid rgba(139,92,246,0.12)', borderRadius: '50%' }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                              />

                              {/* Floating Profile circle (image style) */}
                              <motion.div 
                                className="relative z-10 rounded-full flex items-center justify-center" 
                                style={{ 
                                  width: 48, 
                                  height: 48, 
                                  background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', 
                                  padding: '2px', 
                                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.25), 0 4px 15px rgba(59, 130, 246, 0.15), inset 0 0 8px rgba(255, 255, 255, 0.4)' 
                                }}
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                              >
                                <div 
                                  className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white/80 backdrop-blur-[6px]"
                                  style={{ border: '1px solid rgba(255, 255, 255, 0.6)' }}
                                >
                                  <img 
                                    src={profileAsset} 
                                    alt="Nikhil Bhadauriya" 
                                    className="w-full h-full object-cover rounded-full select-none"
                                  />
                                </div>
                                {/* Online indicator dot - floats with the avatar */}
                                <div 
                                  className="absolute" 
                                  style={{ bottom: 0, right: 0, width: 8, height: 8, background: '#22c55e', border: '1.5px solid #fff', borderRadius: '50%', boxShadow: '0 0 6px #22c55e' }}
                                />
                              </motion.div>

                              {/* Tech badges on orbit with subtle hover/float animations */}
                              {[
                                { icon: '⚛', text: 'React', pos: { top: 2, left: '50%', transform: 'translateX(-50%)' }, bg: '#eff6ff', bc: '#bfdbfe', c: '#2563eb', floatY: [-1, 1, -1], delay: 0 },
                                { icon: '', text: 'TS', pos: { right: 1, top: '50%', transform: 'translateY(-50%)' }, bg: '#eef2ff', bc: '#c7d2fe', c: '#4f46e5', floatX: [1, -1, 1], delay: 0.5 },
                                { icon: '', text: 'Node', pos: { bottom: 2, left: '50%', transform: 'translateX(-50%)' }, bg: '#f0fdf4', bc: '#86efac', c: '#16a34a', floatY: [1, -1, 1], delay: 0.2 },
                                { icon: '', text: 'PG', pos: { left: 1, top: '50%', transform: 'translateY(-50%)' }, bg: '#f0f9ff', bc: '#bae6fd', c: '#0369a1', floatX: [-1, 1, -1], delay: 0.7 },
                              ].map(b => (
                                <motion.div
                                  key={b.text}
                                  className="absolute flex items-center gap-0.5 rounded-md"
                                  style={{ ...b.pos, background: b.bg, border: `1px solid ${b.bc}`, padding: '2.5px 6px', fontSize: 6.5, fontWeight: 800, color: b.c, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', whiteSpace: 'nowrap' }}
                                  animate={b.floatY ? { y: b.floatY } : { x: b.floatX }}
                                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
                                >
                                  {b.icon && <span style={{ fontSize: 7 }}>{b.icon}</span>}{b.text}
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* ── Bottom tech strip ── */}
                          <div className="flex items-center gap-2 px-4 py-1.5 shrink-0 relative z-10" style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(99,102,241,0.07)' }}>
                            <span style={{ fontSize: 5.5, fontWeight: 700, color: '#94a3b8' }}>Stack:</span>
                            {[
                              { t: 'React 18', bg: '#eff6ff', bc: '#bfdbfe', c: '#2563eb' },
                              { t: 'TypeScript', bg: '#eef2ff', bc: '#c7d2fe', c: '#4f46e5' },
                              { t: 'Node.js', bg: '#f0fdf4', bc: '#86efac', c: '#16a34a' },
                              { t: 'PostgreSQL', bg: '#f0f9ff', bc: '#bae6fd', c: '#0369a1' },
                              { t: 'Tailwind', bg: '#f0fdfa', bc: '#99f6e4', c: '#0d9488' },
                              { t: 'Framer', bg: '#fdf4ff', bc: '#e9d5ff', c: '#7c3aed' },
                            ].map(sk => (
                              <span key={sk.t} style={{ fontSize: 5.5, fontWeight: 800, color: sk.c, background: sk.bg, border: `1px solid ${sk.bc}`, borderRadius: 4, padding: '1px 5px', whiteSpace: 'nowrap' }}>{sk.t}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ── Card text body ── */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-text-muted text-[10px] font-bold font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Title & status */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-display text-text-title leading-tight mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs font-bold text-primary font-mono uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                        {project.status}
                      </p>
                    </div>

                    <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>

                    {/* Feature checklist */}
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-xs text-text-muted font-bold font-mono">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                          {feat}
                        </div>
                      ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-3 mt-auto pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
                      >
                        Explore Live Demo <ArrowRight size={13} />
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/5 text-text-title border border-white/5 hover:border-primary/20 text-xs font-bold active:scale-95 transition-all duration-300"
                      >
                        <FaGithub size={13} /> Repository
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* -------------------- JOURNEY TIMELINE SECTION -------------------- */}
      <section id="experience" className="py-20 relative border-t border-white/5 bg-bg-dark/15 z-10 scroll-mt-[104px]">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-display text-xs font-bold tracking-widest uppercase mb-3 bg-white/[0.02] border border-white/5 px-3.5 py-1.5 rounded-full">
              Full Stack Development Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              2026 — Full Stack Development Journey
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto py-8">
            {/* Left aligned vertical roadmap line */}
            <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
            
            <div className="space-y-6">
              {milestones.map((milestone, idx) => {
                const isHighlight = milestone.highlight;
                return (
                  <div key={idx} className="relative flex gap-6 pl-1.5 items-stretch">
                    
                    {/* Pulsing indicator node */}
                    <div className="flex flex-col items-center justify-center shrink-0 w-8">
                      <div className={`w-3.5 h-3.5 rounded-full bg-bg-darkest border-2 ${isHighlight ? 'border-primary shadow-[0_0_12px_rgba(139,92,246,0.6)]' : 'border-primary/45'} flex items-center justify-center relative z-10`}>
                        <span className={`absolute inset-0 rounded-full bg-primary/20 ${isHighlight ? 'animate-ping' : 'animate-pulse'}`} />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <motion.div 
                      className={`w-full p-5 rounded-2xl border transition-all duration-300 text-left ${
                        isHighlight 
                          ? 'bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent border-primary/40 shadow-[0_0_20px_rgba(139,92,246,0.1)]'
                          : 'bg-white/[0.01] border border-white/5 hover:border-primary/20 hover:bg-white/[0.02]'
                      }`}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                    >
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="text-[9px] font-mono font-extrabold text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded">
                          {milestone.step}
                        </span>
                        {milestone.badge && (
                          <span className="text-[9px] font-mono font-extrabold text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 px-2 py-0.5 rounded">
                            {milestone.badge}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-base font-bold text-text-title font-display mb-1">
                        {milestone.title}
                      </h3>
                      {milestone.subtitle && !milestone.badge && (
                        <h4 className="text-[10px] font-bold text-secondary-light font-mono mb-2 uppercase tracking-wide">
                          {milestone.subtitle}
                        </h4>
                      )}
                      
                      {milestone.desc && (
                        <p className="text-xs text-text-muted leading-relaxed mb-3">
                          {milestone.desc}
                        </p>
                      )}

                      {/* Display bullets if any */}
                      {milestone.bullets && (
                        <ul className="list-disc list-inside text-xs text-text-muted space-y-1 mb-3 pl-1 font-mono">
                          {milestone.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}

                      {milestone.tech && milestone.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {milestone.tech.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-[9px] text-text-muted font-mono font-bold">{t}</span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* -------------------- GITHUB OPEN SOURCE PRESENCE SECTION -------------------- */}
      <section id="github" className="py-24 relative border-t border-white/5 bg-bg-dark/15 z-10 scroll-mt-[104px]">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-primary bg-clip-text font-display text-xs font-bold tracking-widest uppercase mb-3 bg-white/[0.02] border border-white/5 px-3.5 py-1.5 rounded-full">
              GITHUB CODE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              Open Source Presence
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="p-8 rounded-[32px] glass-aurora border border-white/5 shadow-2xl flex flex-col md:flex-row gap-8 items-center justify-between text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-grow">
                <span className="text-xs font-bold text-primary font-mono block mb-2">github.com/Nikhil-beep25</span>
                <h3 className="text-2xl font-bold text-text-title font-display mb-3">Exploring Open Source Repositories</h3>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed max-w-xl">
                  I host active codebases, prototype integrations, and portfolio blueprints on GitHub. Inspect commit logs, read through code structures, and star repositories to follow my journey.
                </p>

                <div className="flex gap-4 mt-6">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono">VidyaSanchar ERP</span>
                    <a 
                      href="https://github.com/Nikhil-beep25" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-primary-light hover:text-white transition-colors font-bold font-mono"
                    >
                      Case Study
                    </a>
                  </div>
                  <div className="w-px bg-white/5" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono">Nikhil Portfolio</span>
                    <a 
                      href="https://github.com/Nikhil-beep25/Nikhil-Portfolio" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-primary-light hover:text-white transition-colors font-bold font-mono"
                    >
                      Case Study
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/Nikhil-beep25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-300 w-full md:w-auto text-center"
              >
                <span>Follow on GitHub</span>
                <FaGithub size={14} />
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* -------------------- CONTACT SECTION -------------------- */}
      <section id="contact" className="py-24 relative border-t border-white/5 z-10 overflow-hidden scroll-mt-[104px]">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-display text-xs font-bold tracking-widest uppercase mb-3 bg-white/[0.02] border border-white/5 px-3.5 py-1.5 rounded-full">
              CONNECTION
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              Get In Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 max-w-5xl mx-auto">
            
            {/* Left Detail Statement */}
            <motion.div 
              className="lg:col-span-5 flex flex-col text-center lg:text-left items-center lg:items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold font-display text-text-title mb-4">
                Let's discuss a project
              </h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6">
                Have a project in mind, want to build a SaaS, or looking to hire a full-stack developer? Shoot me a message.
              </p>
              <div className="flex items-center gap-3 text-xs text-text-muted font-bold mb-3 select-none font-mono">
                <Mail size={16} className="text-primary-light" />
                nikhilbhadauriya2500@gmail.com
              </div>
              <div className="flex items-center gap-3 text-xs text-text-muted font-bold select-none font-mono">
                <Compass size={16} className="text-secondary-light" />
                Agra, Uttar Pradesh, India
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
              className="lg:col-span-7 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div 
                className="p-8 rounded-[32px] border shadow-2xl relative backdrop-blur-md"
                style={{ backgroundColor: 'rgba(255,255,255,0.85)', borderColor: 'rgba(125,125,125,0.18)' }}
              >
                <AnimatePresence mode="wait">
                  {!submitSuccess ? (
                    <motion.form 
                      key="form"
                      onSubmit={handleContactSubmit} 
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex flex-col text-left">
                        <label htmlFor="name" className="text-xs font-semibold text-[#374151] mb-2 tracking-[0.08em] uppercase font-mono">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4.5 py-3 rounded-2xl bg-white/75 backdrop-blur-[10px] border-[1.5px] border-[rgba(125,125,125,0.18)] focus:border-primary focus:shadow-[0_0_15px_rgba(139,92,246,0.25)] focus:scale-[1.01] transition-all duration-200 outline-none text-xs text-[#111827] font-medium placeholder:text-[#6B7280] placeholder:opacity-100 placeholder:font-medium"
                        />
                      </div>

                      <div className="flex flex-col text-left">
                        <label htmlFor="email" className="text-xs font-semibold text-[#374151] mb-2 tracking-[0.08em] uppercase font-mono">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-4.5 py-3 rounded-2xl bg-white/75 backdrop-blur-[10px] border-[1.5px] border-[rgba(125,125,125,0.18)] focus:border-primary focus:shadow-[0_0_15px_rgba(139,92,246,0.25)] focus:scale-[1.01] transition-all duration-200 outline-none text-xs text-[#111827] font-medium placeholder:text-[#6B7280] placeholder:opacity-100 placeholder:font-medium"
                        />
                      </div>

                      <div className="flex flex-col text-left">
                        <label htmlFor="message" className="text-xs font-semibold text-[#374151] mb-2 tracking-[0.08em] uppercase font-mono">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="How can I help you?"
                          className="w-full px-4.5 py-3 rounded-2xl bg-white/75 backdrop-blur-[10px] border-[1.5px] border-[rgba(125,125,125,0.18)] focus:border-primary focus:shadow-[0_0_15px_rgba(139,92,246,0.25)] focus:scale-[1.01] transition-all duration-200 outline-none text-xs text-[#111827] font-medium placeholder:text-[#6B7280] placeholder:opacity-100 placeholder:font-medium resize-none min-h-[180px]"
                        />
                      </div>

                      {submitError && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-[10px] font-bold font-mono flex items-center gap-2">
                          <AlertTriangle size={12} />
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold transition-all duration-300 cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <span>Sending Message...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={12} />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      className="py-12 flex flex-col items-center justify-center text-center font-display"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <CheckCircle2 size={36} className="animate-bounce" />
                      </div>
                      <h4 className="text-xl font-bold text-[#111827] mb-2">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-xs text-[#374151] max-w-sm font-semibold mb-4">
                        Thank you! Your message has been received. I will get back to you as soon as possible.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full justify-center">
                        <a
                          href="https://wa.me/918077313959"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all duration-300 shadow-md cursor-pointer hover:scale-[1.02] justify-center"
                        >
                          <FaWhatsapp size={14} />
                          Quick Chat on WhatsApp
                        </a>
                        <button
                          onClick={() => setSubmitSuccess(false)}
                          className="flex items-center justify-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer px-5 py-2.5 rounded-xl border border-primary/20 hover:bg-primary/5"
                        >
                          Send Another Message
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>

          {/* Social Dock */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SocialDock />
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}

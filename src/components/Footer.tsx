import { Terminal, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Journey', id: 'journey' },
    { name: 'GitHub', id: 'github' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-bg-darkest border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2.5">
          <a 
            href="#hero" 
            onClick={(e) => handleScrollTo(e, 'hero')}
            className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white shadow-md shadow-primary/20 transition-transform group-hover:scale-105 duration-300">
              <Terminal size={16} />
            </div>
            <span>Nikhil Bhadauriya</span>
          </a>
          <p className="text-zinc-500 text-xs max-w-xs leading-relaxed">
            Building premium, scalable full-stack web products and SaaS architectures.
          </p>
        </div>

        {/* Center: Sitemap Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Social Handles & Copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nikhilbhadauriya"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/nikhilbhadauriya"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://x.com/nikhilbhadauriya"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Twitter / X"
            >
              <RiTwitterXFill size={16} />
            </a>
          </div>
          
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-600 uppercase tracking-widest font-mono">
            <span>© {currentYear}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

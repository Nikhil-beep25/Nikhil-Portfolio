import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = ['hero', ...navLinks.map(link => link.href.substring(1))];
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            current = section;
          }
        }
      }
      setActiveSection(current === 'hero' ? 'hero' : current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-bg-darkest/75 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleClick(e, '#hero')}
          className="flex items-center gap-2 group font-display text-lg font-bold tracking-tight text-white"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white shadow-md shadow-primary/20 transition-transform group-hover:scale-105 duration-300">
            <Terminal size={16} />
          </div>
          <span className="relative overflow-hidden block">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Nikhil.B</span>
            <span className="absolute left-0 top-0 inline-block text-primary-light transition-transform duration-300 translate-y-full group-hover:translate-y-0">SaaS Builder</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Call to action button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-medium shadow-md shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group"
          >
            Hire Me
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-[73px] left-0 right-0 bottom-0 bg-bg-darkest/95 backdrop-blur-xl border-t border-white/5 z-40 px-6 py-8 flex flex-col gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`text-xl font-semibold py-2 border-b border-white/5 ${
                      isActive ? 'text-primary-light' : 'text-zinc-400'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
            <motion.a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="mt-auto w-full py-4 text-center rounded-xl bg-primary hover:bg-primary-hover text-white font-medium flex items-center justify-center gap-2 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Get In Touch
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

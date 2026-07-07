import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Sun, Moon, Languages } from 'lucide-react';

const navLinks = [
  { nameKey: 'navbar.home', href: '/' },
  { nameKey: 'navbar.about', href: '/about' },
  { nameKey: 'navbar.skills', href: '/skills' },
  { nameKey: 'navbar.projects', href: '/projects' },
  { nameKey: 'navbar.journey', href: '/journey' },
  { nameKey: 'navbar.contact', href: '/contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Theme state initialized from localStorage or defaulting to dark
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update theme class on HTML element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('i18nextLng', nextLang);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-bg-darkest/75 backdrop-blur-md border-b border-border-dark/60 shadow-lg shadow-black/5' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Branding */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group font-display text-lg font-bold tracking-tight text-text-title"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white shadow-md shadow-primary/20 transition-transform group-hover:scale-105 duration-300">
            <Terminal size={16} />
          </div>
          <span className="relative overflow-hidden block">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Nikhil</span>
            <span className="absolute left-0 top-0 inline-block text-primary-light transition-transform duration-300 translate-y-full group-hover:translate-y-0">SaaS Builder</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-bg-card/40 border border-border-dark/60 rounded-full p-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.nameKey}
              to={link.href}
              className={({ isActive }) => 
                `px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                    : 'text-[#4B5563] dark:text-[#D1D5DB] hover:text-[#09090B] dark:hover:text-white hover:bg-bg-card-hover/40'
                }`
              }
            >
              {t(link.nameKey)}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Utilities (Theme, Lang, Button) */}
        <div className="hidden lg:flex items-center gap-3">
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="p-2.5 rounded-full bg-bg-card border border-border-dark hover:border-primary/40 hover:bg-bg-card-hover text-text-muted hover:text-text-title transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-xs font-bold font-mono"
            title="Toggle Language / भाषा बदलें"
          >
            <Languages size={14} className="text-primary-light" />
            {i18n.language === 'en' ? 'EN' : 'HI'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-bg-card border border-border-dark hover:border-primary/40 hover:bg-bg-card-hover text-text-muted hover:text-text-title transition-all duration-300 cursor-pointer"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {theme === 'dark' ? <Sun size={14} className="text-yellow-400" /> : <Moon size={14} className="text-primary" />}
            </motion.div>
          </button>

          <Link
            to="/contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-md shadow-primary/20 hover:shadow-primary/35 transition-all duration-300 group"
          >
            {t('navbar.hireMe')}
          </Link>
        </div>

        {/* Mobile Navbar Controls (Theme, Lang, Menu) */}
        <div className="flex items-center gap-2 lg:hidden">
          
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg bg-bg-card border border-border-dark text-text-muted flex items-center gap-1 text-[11px] font-bold font-mono"
          >
            <Languages size={12} className="text-primary-light" />
            {i18n.language === 'en' ? 'EN' : 'HI'}
          </button>

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-bg-card border border-border-dark text-text-muted"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={14} className="text-yellow-400" /> : <Moon size={14} className="text-primary" />}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-text-muted hover:text-text-title hover:bg-bg-card border border-border-dark transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed top-[69px] left-0 right-0 bottom-0 bg-bg-darkest/98 backdrop-blur-xl border-t border-border-dark/60 z-40 px-6 py-8 flex flex-col gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.nameKey}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `text-base font-bold py-2.5 px-4 rounded-xl transition-all duration-300 text-left ${
                      isActive 
                        ? 'bg-primary text-white shadow-md shadow-primary/20' 
                        : 'text-[#4B5563] dark:text-[#D1D5DB] hover:text-[#09090B] dark:hover:text-white hover:bg-bg-card-hover/40'
                    }`
                  }
                >
                  {t(link.nameKey)}
                </NavLink>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-auto w-full py-3.5 text-center rounded-xl bg-primary hover:bg-primary-hover text-white font-bold flex items-center justify-center gap-2 transition-all duration-300"
            >
              {t('navbar.getInTouch')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

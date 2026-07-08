import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';

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
          className="flex items-center gap-3 group text-text-title relative"
        >
          <img
            src="/images/profile.jpg"
            alt="Nikhil Bhadauriya"
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover flex-shrink-0 border-2 border-white/15 shadow-md shadow-primary/10 transition-all duration-400 ease-out group-hover:scale-108 group-hover:rotate-2 group-hover:shadow-lg group-hover:shadow-primary/25"
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2306B6D4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E";
            }}
          />
          <span className="relative flex flex-col items-start py-1">
            <span className="font-bold text-2xl leading-none tracking-tight transition-all duration-300 ease-out group-hover:text-primary group-hover:tracking-[1px] group-hover:scale-[1.03] origin-left">
              Nikhil
            </span>
            <span className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 transition-all duration-300 ease-out group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-bg-card/40 border border-border-dark/60 rounded-full p-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.nameKey}
              to={link.href}
              className={({ isActive }) => 
                `px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 border border-transparent ${
                  isActive 
                    ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                    : 'text-text-muted hover:text-text-title hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:border-primary/20'
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
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-md shadow-primary/25 hover:scale-105 active:scale-95 transition-all duration-300"
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
          <>
            {/* Click Outside Overlay */}
            <div 
              className="fixed inset-0 z-30 bg-black/10 dark:bg-black/40 backdrop-blur-xs lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dedicated Mobile Dropdown */}
            <motion.div
              className="absolute top-full left-0 w-full bg-white dark:bg-bg-card border-b border-black/8 dark:border-white/8 shadow-lg dark:shadow-black/40 z-40 p-4 flex flex-col gap-4 lg:hidden"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.nameKey}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `text-sm font-bold py-2.5 px-4 rounded-xl transition-all duration-300 text-left ${
                        isActive 
                          ? 'bg-primary text-white shadow-md shadow-primary/25' 
                          : 'text-text-muted hover:text-text-title hover:bg-primary/10'
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
                className="w-full py-3.5 text-center rounded-xl bg-primary hover:bg-primary-hover text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300"
              >
                {t('navbar.getInTouch')}
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

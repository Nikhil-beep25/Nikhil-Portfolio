import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Languages, Settings, Monitor, Check } from 'lucide-react';
import Avatar from './Avatar';

const navLinks = [
  { nameKey: 'navbar.home', path: '/' },
  { nameKey: 'navbar.about', path: '/about' },
  { nameKey: 'navbar.skills', path: '/skills' },
  { nameKey: 'navbar.projects', path: '/projects' },
  { nameKey: 'navbar.journey', path: '/journey' },
  { nameKey: 'navbar.contact', path: '/contact' },
];

const colorThemes = [
  { name: 'purple', class: 'bg-[#8B5CF6]', label: 'Purple' },
  { name: 'blue', class: 'bg-[#3B82F6]', label: 'Blue' },
  { name: 'emerald', class: 'bg-[#10B981]', label: 'Emerald' },
  { name: 'orange', class: 'bg-[#F97316]', label: 'Orange' },
  { name: 'cyan', class: 'bg-[#06B6D4]', label: 'Cyan' },
  { name: 'rose', class: 'bg-[#F43F5E]', label: 'Rose' },
  { name: 'slate', class: 'bg-[#64748B]', label: 'Slate' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll state for sticky shadow
  const [isScrolled, setIsScrolled] = useState(false);

  // Theme customizer states
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'system'>(() => {
    return (localStorage.getItem('theme-mode') as 'light' | 'dark' | 'system') || 'dark';
  });

  const [themeColor, setThemeColor] = useState<string>(() => {
    return localStorage.getItem('theme-color') || 'purple';
  });

  // Track scroll position for header shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCustomizerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Mode changes (Light, Dark, System)
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const applyMode = (mode: 'light' | 'dark' | 'system') => {
      let isDark = mode === 'dark';
      if (mode === 'system') {
        isDark = systemPrefersDark;
      }
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    applyMode(themeMode);
    localStorage.setItem('theme-mode', themeMode);

    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyMode('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [themeMode]);

  // Handle Color accent changes
  useEffect(() => {
    const themes = {
      purple: { primary: '#8B5CF6', primaryHover: '#7C3AED', primaryLight: '#A78BFA', secondary: '#EC4899', secondaryHover: '#DB2777', secondaryLight: '#F472B6' },
      blue: { primary: '#3B82F6', primaryHover: '#2563EB', primaryLight: '#60A5FA', secondary: '#06B6D4', secondaryHover: '#0891B2', secondaryLight: '#67E8F9' },
      emerald: { primary: '#10B981', primaryHover: '#059669', primaryLight: '#34D399', secondary: '#3B82F6', secondaryHover: '#2563EB', secondaryLight: '#60A5FA' },
      orange: { primary: '#F97316', primaryHover: '#EA580C', primaryLight: '#FB923C', secondary: '#EF4444', secondaryHover: '#DC2626', secondaryLight: '#F87171' },
      cyan: { primary: '#06B6D4', primaryHover: '#0891B2', primaryLight: '#67E8F9', secondary: '#8B5CF6', secondaryHover: '#7C3AED', secondaryLight: '#A78BFA' },
      rose: { primary: '#F43F5E', primaryHover: '#E11D48', primaryLight: '#FB7185', secondary: '#8B5CF6', secondaryHover: '#7C3AED', secondaryLight: '#A78BFA' },
      slate: { primary: '#64748B', primaryHover: '#475569', primaryLight: '#94A3B8', secondary: '#334155', secondaryHover: '#1E293B', secondaryLight: '#64748B' },
    };
    
    const activeObj = themes[themeColor as keyof typeof themes] || themes.purple;
    const root = document.documentElement;
    root.style.setProperty('--color-primary', activeObj.primary);
    root.style.setProperty('--color-primary-hover', activeObj.primaryHover);
    root.style.setProperty('--color-primary-light', activeObj.primaryLight);
    root.style.setProperty('--color-secondary', activeObj.secondary);
    root.style.setProperty('--color-secondary-hover', activeObj.secondaryHover);
    root.style.setProperty('--color-secondary-light', activeObj.secondaryLight);

    localStorage.setItem('theme-color', themeColor);
  }, [themeColor]);

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('i18nextLng', nextLang);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[72px] z-[9999] transition-all duration-300 flex items-center ${
        isScrolled 
          ? 'bg-bg-darkest/80 backdrop-blur-lg border-b border-border-dark shadow-lg shadow-black/10' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto px-6">
        
        {/* Logo Branding */}
        <Link 
          to="/"
          className="flex items-center gap-2.5 group text-text-title relative"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative shrink-0 select-none">
            <Avatar size="sm" className="border-2 border-primary/20 group-hover:border-primary transition-all duration-300" />
            {/* Pulsating online status badge */}
            <span className="absolute bottom-0 right-0 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <span className="relative flex flex-col items-start py-0.5">
            <span className="font-extrabold text-sm sm:text-base leading-none tracking-tight font-display bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-300">
              Nikhil Bhadauriya
            </span>
            <span className="text-[8px] font-mono text-emerald-400 font-bold tracking-wider mt-0.5 select-none uppercase">AVAILABLE FOR HIRE</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 h-9">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 h-full flex items-center justify-center text-[13px] font-semibold rounded-full transition-all duration-300 group select-none ${
                isActive(link.path)
                  ? 'text-text-title font-bold' 
                  : 'text-text-muted hover:text-text-title'
              }`}
            >
              {isActive(link.path) && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full -z-10 shadow-[0_0_15px_rgba(139,92,246,0.05)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {t(link.nameKey)}
              {/* Sliding hover underline */}
              {!isActive(link.path) && (
                <span className="absolute bottom-1.5 left-4 right-4 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Utilities */}
        <div className="hidden lg:flex items-center gap-3 relative" ref={dropdownRef}>
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/30 hover:bg-white/5 text-text-muted hover:text-text-title transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-xs font-bold font-mono"
            title="Toggle Language / भाषा बदलें"
          >
            <Languages size={14} className="text-primary-light" />
            {i18n.language === 'en' ? 'EN' : 'HI'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/30 hover:bg-white/5 text-text-muted hover:text-text-title transition-all duration-300 cursor-pointer"
            aria-label="Toggle Theme Mode"
          >
            <motion.div
              initial={false}
              animate={{ rotate: themeMode === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {themeMode === 'dark' ? <Sun size={14} className="text-yellow-400" /> : <Moon size={14} className="text-primary" />}
            </motion.div>
          </button>

          {/* Settings Customizer toggle */}
          <button
            onClick={() => setCustomizerOpen(!customizerOpen)}
            className={`p-1.5 rounded-xl bg-white/[0.03] border transition-all duration-300 cursor-pointer text-text-muted hover:text-text-title ${
              customizerOpen ? 'border-primary/50 bg-white/5' : 'border-white/5 hover:border-primary/30'
            }`}
            title="Theme Settings"
          >
            <Settings size={14} className="animate-spin-slow" />
          </button>

          {/* Dropdown Customizer Content */}
          <AnimatePresence>
            {customizerOpen && (
              <motion.div
                className="absolute right-0 top-full mt-3 w-64 p-4 rounded-2xl bg-bg-darkest/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50 text-left"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Theme Mode Segment */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold font-mono block mb-2">Theme Mode</span>
                  <div className="grid grid-cols-3 gap-1 bg-white/[0.02] border border-white/5 rounded-lg p-0.5">
                    {(['light', 'dark', 'system'] as const).map((m) => (
                      <button
                        key={m}
                        onClick={() => setThemeMode(m)}
                        className={`py-1.5 px-2 rounded-md text-[10px] font-bold capitalize flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer ${
                          themeMode === m 
                            ? 'bg-primary/20 border border-primary/30 text-text-title'
                            : 'text-text-muted hover:text-text-title hover:bg-white/5'
                        }`}
                      >
                        {m === 'light' && <Sun size={10} />}
                        {m === 'dark' && <Moon size={10} />}
                        {m === 'system' && <Monitor size={10} />}
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accent Colors Segment */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold font-mono block mb-2">Accent Colors</span>
                  <div className="grid grid-cols-4 gap-2">
                    {colorThemes.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setThemeColor(c.name)}
                        className={`flex flex-col items-center gap-1 p-1.5 rounded-lg border text-[9px] font-bold font-mono transition-all duration-200 cursor-pointer ${
                          themeColor === c.name 
                            ? 'border-primary/50 bg-white/[0.03] text-text-title' 
                            : 'border-transparent text-text-muted hover:text-text-title hover:bg-white/[0.01]'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full ${c.class} shadow-sm relative flex items-center justify-center`}>
                          {themeColor === c.name && <Check size={10} className="text-white font-bold" />}
                        </div>
                        <span>{c.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>



          <button
            onClick={() => navigate('/contact')}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {t('navbar.hireMe')}
          </button>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          
          {/* Mobile Settings Button */}
          <button
            onClick={() => setCustomizerOpen(!customizerOpen)}
            className={`p-2 rounded-lg bg-white/[0.03] border text-text-muted cursor-pointer ${
              customizerOpen ? 'border-primary/50' : 'border-white/5'
            }`}
          >
            <Settings size={14} />
          </button>

          {/* Mobile Language Selector */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-text-muted flex items-center gap-1 text-[11px] font-bold font-mono cursor-pointer"
          >
            <Languages size={12} className="text-primary-light" />
            {i18n.language === 'en' ? 'EN' : 'HI'}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-text-muted hover:text-text-title hover:bg-white/5 border border-white/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Floating Settings Customizer panel for Mobile view */}
      <AnimatePresence>
        {customizerOpen && (
          <div className="lg:hidden" ref={dropdownRef}>
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[92%] p-5 rounded-2xl bg-bg-darkest/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50 text-left"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
            >
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold font-mono block mb-2">Theme Mode</span>
                <div className="grid grid-cols-3 gap-1 bg-white/[0.02] border border-white/5 rounded-lg p-0.5">
                  {(['light', 'dark', 'system'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setThemeMode(m)}
                      className={`py-2 px-2 rounded-md text-[10px] font-bold capitalize flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer ${
                        themeMode === m 
                          ? 'bg-primary/20 border border-primary/30 text-text-title'
                          : 'text-text-muted hover:text-text-title'
                      }`}
                    >
                      {m === 'light' && <Sun size={10} />}
                      {m === 'dark' && <Moon size={10} />}
                      {m === 'system' && <Monitor size={10} />}
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold font-mono block mb-2">Accent Colors</span>
                <div className="grid grid-cols-4 gap-2">
                  {colorThemes.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setThemeColor(c.name)}
                      className={`flex flex-col items-center gap-1 p-2 rounded-lg border text-[9px] font-bold font-mono cursor-pointer ${
                        themeColor === c.name 
                          ? 'border-primary/50 bg-white/[0.03] text-text-title' 
                          : 'border-transparent text-text-muted'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full ${c.class} shadow-sm relative flex items-center justify-center`}>
                        {themeColor === c.name && <Check size={10} className="text-white font-bold" />}
                      </div>
                      <span>{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              className="absolute top-full left-0 w-full bg-bg-darkest/95 backdrop-blur-xl border-b border-white/5 shadow-2xl z-40 p-5 flex flex-col gap-4 lg:hidden rounded-b-2xl"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-bold py-3 px-4 rounded-xl transition-all duration-300 text-left cursor-pointer ${
                      isActive(link.path)
                        ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-text-title border border-primary/25 shadow-sm' 
                        : 'text-text-muted hover:text-text-title hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {t(link.nameKey)}
                  </Link>
                ))}
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contact');
                }}
                className="w-full py-3.5 text-center rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                {t('navbar.getInTouch')}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

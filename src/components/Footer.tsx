import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Terminal, Heart, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const footerNavLinks = [
  { nameKey: 'navbar.about', href: '/about' },
  { nameKey: 'navbar.skills', href: '/skills' },
  { nameKey: 'navbar.projects', href: '/projects' },
  { nameKey: 'navbar.journey', href: '/journey' },
  { nameKey: 'navbar.contact', href: '/contact' },
];

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-darkest border-t border-border-dark/60 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2.5">
          <Link 
            to="/" 
            className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-text-title group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white shadow-md shadow-primary/20 transition-transform group-hover:scale-105 duration-300">
              <Terminal size={16} />
            </div>
            <span>Nikhil</span>
          </Link>
          <p className="text-text-muted text-xs max-w-xs leading-relaxed">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Center: Sitemap Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2.5">
          {footerNavLinks.map((link) => (
            <Link
              key={link.nameKey}
              to={link.href}
              className="text-xs font-semibold text-text-muted hover:text-text-title transition-colors duration-200"
            >
              {t(link.nameKey)}
            </Link>
          ))}
        </nav>

        {/* Right: Social Handles & Copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Nikhil-beep25"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-border-dark text-text-muted hover:text-text-title transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-bhadauriya-308414321"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-border-dark text-text-muted hover:text-text-title transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href="https://www.instagram.com/itsnikhilbhadauriya?igsh=MTY0dDJjaHAwOWt1Yg=="
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-border-dark text-text-muted hover:text-text-title transition-all"
              aria-label="Instagram"
            >
              <FaInstagram size={15} />
            </a>
            <a
              href="mailto:nikhilbhadauriya2500@gmail.com"
              className="p-2.5 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-border-dark text-text-muted hover:text-text-title transition-all"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
            <a
              href="https://wa.me/918077313959"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-border-dark text-text-muted hover:text-text-title transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={15} />
            </a>
          </div>
          
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-text-muted uppercase tracking-widest font-mono">
            <span>© {currentYear}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              {t('footer.crafted')} <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

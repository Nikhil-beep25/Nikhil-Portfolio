import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, Mail } from 'lucide-react';
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

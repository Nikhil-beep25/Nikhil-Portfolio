import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MapPin, Phone, Send, 
  AlertTriangle, ArrowRight, ShieldCheck, Sparkles, ArrowUpRight 
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import { INSTAGRAM_URL } from '../constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const tempErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof formData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).catch(() => {
        throw new Error("Unable to connect to the server.");
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("The contact service is currently unavailable.");
        } else if (response.status === 500) {
          throw new Error("Server error. Please try again later.");
        } else if (response.status === 502 || response.status === 504) {
          throw new Error("Unable to connect to the server. Please ensure the backend is running.");
        }
        throw new Error(`HTTP ${response.status}`);
      }

      const text = await response.text();
      if (!text) {
        throw new Error("Empty response from server.");
      }

      let result;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Invalid response format from server.");
      }

      if (!result.success) {
        throw new Error(result.error || result.message || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || "Failed to submit. Please try again.");
      setStatus('idle');
    }
  };

  const contactInfo = [
    { icon: <Mail size={16} className="text-primary-light" />, label: "Direct Email", value: "nikhilbhadauriya2500@gmail.com", href: "mailto:nikhilbhadauriya2500@gmail.com" },
    { icon: <Phone size={16} className="text-secondary-light" />, label: "WhatsApp Direct", value: "+91 80773 13959", href: "https://wa.me/918077313959" },
    { icon: <MapPin size={16} className="text-emerald-400" />, label: "Current Location", value: "Agra & Noida, Uttar Pradesh, India", href: "https://maps.google.com/?q=Agra" }
  ];

  return (
    <motion.div 
      className="py-6 md:py-10 relative overflow-hidden bg-bg-darkest min-h-screen text-text-main pt-4 md:pt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Aurora background glowing ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-10 md:space-y-12">
        
        {/* ── Page Header (JourneyPage Unified System) ── */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary-light uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={13} className="text-primary-light" />
            Direct Communications & Inquiries
          </motion.span>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-extrabold font-display text-text-title tracking-tight mt-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-pink-500">Touch</span>
          </motion.h1>
          
          <motion.p 
            className="text-text-muted mt-4 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind, seeking a passionate full-stack software engineer, or interested in discussing technical architecture? Send me a message below.
          </motion.p>
        </div>

        {/* ── Key Metrics Ribbon (4 Cards - Journey Standard) ── */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="p-4 rounded-2xl glass-aurora border border-emerald-500/25 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">Response Time</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">&lt; 24h</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Fast Turnaround on Emails</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-amber-500/25 relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-amber-400 block mb-1">Availability</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">Active</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Open for Roles & Projects</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-primary/25 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-primary-light block mb-1">Work Mode</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">Flexible</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Remote, Hybrid, or On-Site</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-secondary/25 relative overflow-hidden group hover:border-secondary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-secondary-light block mb-1">Location</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">Agra / Noida</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Uttar Pradesh, India (IST)</p>
          </div>
        </motion.div>

        {/* ── Main Content Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* LEFT: Metadata & Availability status */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between p-7 rounded-3xl glass-aurora border border-white/10 text-left shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              {/* Availability banner */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3 shadow-sm">
                <div className="relative flex h-3 w-3 shrink-0 mt-1 select-none">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-emerald-300 font-display">Active Availability</h3>
                  <p className="text-[11px] text-text-muted mt-0.5 leading-relaxed">
                    Available for full-time engineering roles, technical apprenticeships, and SaaS contracts.
                  </p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest font-mono block">
                  Direct Contact Channels
                </span>
                
                <div className="space-y-3">
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="p-2.5 h-fit rounded-xl bg-white/[0.04] border border-white/10 text-primary-light group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-text-muted font-bold block uppercase tracking-wider">{info.label}</span>
                        <span className="text-xs font-semibold text-text-title block mt-0.5 leading-snug group-hover:text-primary-light transition-colors">{info.value}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social channels card */}
            <div className="border-t border-white/5 pt-6 mt-6 space-y-3">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest font-mono block">
                Connect on Social Platforms
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/Nikhil-beep25"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primary/40 text-text-title hover:text-primary-light transition-all duration-300"
                  title="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhil-bhadauriya"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primary/40 text-text-title hover:text-[#0A66C2] transition-all duration-300"
                  title="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primary/40 text-text-title hover:text-[#EC4899] transition-all duration-300"
                  title="Instagram"
                  aria-label="Visit Nikhil Bhadauriya's Instagram Profile"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@ItsNikhilTech"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primary/40 text-text-title hover:text-[#FF0000] transition-all duration-300"
                  title="YouTube"
                >
                  <FaYoutube size={16} />
                </a>
                <a
                  href="https://wa.me/918077313959"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primary/40 text-text-title hover:text-emerald-400 transition-all duration-300"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Validated Form Center */}
          <motion.div 
            className="lg:col-span-7 p-7 md:p-8 rounded-3xl glass-aurora border border-white/10 shadow-2xl relative overflow-hidden text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

            {status === 'success' ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center h-full space-y-4 py-16"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
              >
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full animate-bounce">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="text-xl font-bold text-text-title font-display">Message Sent Successfully!</h3>
                <p className="text-xs text-text-muted max-w-sm leading-relaxed">
                  Thank you for reaching out! I have received your transmission and will get back to you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <a
                    href="https://wa.me/918077313959"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all duration-300 shadow-md cursor-pointer hover:scale-105 justify-center"
                  >
                    <FaWhatsapp size={14} />
                    WhatsApp Direct
                  </a>
                  <button
                    onClick={() => setStatus('idle')}
                    className="flex items-center justify-center gap-1.5 text-xs font-bold text-primary-light hover:text-primary transition-colors cursor-pointer px-5 py-2.5 rounded-xl border border-primary/20 hover:bg-primary/5"
                  >
                    Send another message
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-semibold text-text-muted uppercase tracking-wider font-mono">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all outline-none text-sm text-text-title placeholder:text-text-muted/50 font-sans"
                  />
                  {errors.name && (
                    <span className="text-[10px] font-bold font-mono text-red-400 flex items-center gap-1">
                      <AlertTriangle size={10} />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-semibold text-text-muted uppercase tracking-wider font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all outline-none text-sm text-text-title placeholder:text-text-muted/50 font-sans"
                  />
                  {errors.email && (
                    <span className="text-[10px] font-bold font-mono text-red-400 flex items-center gap-1">
                      <AlertTriangle size={10} />
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-semibold text-text-muted uppercase tracking-wider font-mono">
                    Project Requirements or Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project, timeline, or engineering opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all outline-none text-sm text-text-title placeholder:text-text-muted/50 resize-none min-h-[160px] font-sans"
                  />
                  {errors.message && (
                    <span className="text-[10px] font-bold font-mono text-red-400 flex items-center gap-1">
                      <AlertTriangle size={10} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {submitError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/25 text-red-400 rounded-xl text-xs font-mono flex items-center gap-2">
                    <AlertTriangle size={14} />
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white text-xs font-bold transition-all duration-300 disabled:opacity-60 shadow-lg hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  {status === 'submitting' ? "Sending Transmission..." : "Send Message"}
                  <Send size={13} />
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* ── GitHub & Professional Profiles CTA (Journey Standard) ── */}
        <div className="border-t border-white/5 pt-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="p-6 md:p-8 rounded-3xl glass-aurora border border-white/10 text-left shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <FaGithub size={28} className="text-text-title" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-text-title font-display">Nikhil Bhadauriya</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
                        Active Engineer
                      </span>
                    </div>
                    <span className="text-xs text-text-muted font-mono block mt-0.5">github.com/Nikhil-beep25</span>
                    <span className="text-xs text-secondary-light font-mono block mt-1">
                      Check out my open-source codebases, Git commit history, and technical architecture.
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://github.com/Nikhil-beep25"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <FaGithub size={15} />
                    <span>View GitHub</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikhil-bhadauriya"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-primary/40 text-text-title text-xs font-bold transition-all duration-300 hover:scale-105"
                  >
                    <FaLinkedin size={15} className="text-[#0A66C2]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

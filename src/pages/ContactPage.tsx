import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Mail, MapPin, Phone, Send, 
  AlertTriangle, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  const { t } = useTranslation();

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
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";
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
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit. Please try again.");
      setStatus('idle');
    }
  };

  const contactInfo = [
    { icon: <Mail size={16} className="text-primary-light" />, label: "Email Address", value: "nikhilbhadauriya2500@gmail.com", href: "mailto:nikhilbhadauriya2500@gmail.com" },
    { icon: <Phone size={16} className="text-secondary-light" />, label: "WhatsApp Direct", value: "+91 80773 13959", href: "https://wa.me/918077313959" },
    { icon: <MapPin size={16} className="text-emerald-400" />, label: "Current Location", value: "Agra, Uttar Pradesh, India", href: "https://maps.google.com/?q=Agra" }
  ];

  return (
    <motion.div 
      className="py-24 relative overflow-hidden bg-bg-darkest min-h-screen text-text-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] bg-secondary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-6 relative z-10 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary-light uppercase tracking-wider">
            {t('contact.badge') || "Get In Touch"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
            Contact Center
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
            Have an application design, a Python API pipeline task, or a database engineering project to build? Let's connect.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* LEFT: Metadata & Availability status */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-[32px] border shadow-2xl relative overflow-hidden backdrop-blur-md"
            style={{ backgroundColor: 'rgba(255,255,255,0.85)', borderColor: 'rgba(125,125,125,0.18)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8 text-left">
              {/* Availability panel */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3.5 shadow-sm">
                <div className="relative flex h-3.5 w-3.5 shrink-0 mt-0.5 select-none">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111827] font-display">Freelance Availability Status</h4>
                  <p className="text-[10px] text-[#374151] mt-1 leading-normal font-medium">
                    Currently accepting client contracts, backend integration tasks, and full stack SaaS setups.
                  </p>
                </div>
              </div>

              {/* Grid lists */}
              <div className="space-y-6">
                <h5 className="text-[10px] font-bold text-[#374151] uppercase tracking-widest font-mono">Direct Channels</h5>
                
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex gap-4 p-3 rounded-xl bg-black/[0.02] border border-transparent hover:border-black/5 hover:bg-black/[0.04] transition-all group"
                    >
                      <div className="p-2 h-fit rounded-lg bg-bg-dark border border-white/5 text-primary group-hover:border-primary-light transition-all">
                        {info.icon}
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-[#374151] font-bold block uppercase tracking-wider">{info.label}</span>
                        <span className="text-xs font-semibold text-[#111827] block mt-1 leading-normal group-hover:text-primary transition-colors">{info.value}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social channels card */}
            <div className="border-t border-black/5 pt-8 mt-8 text-left space-y-4">
              <span className="text-[10px] font-bold text-[#374151] uppercase tracking-widest font-mono block">Dev Handles</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Nikhil-beep25"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-black/5 hover:bg-black/10 border border-black/10 hover:border-primary/30 text-[#374151] hover:text-primary transition-all duration-300"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhil-bhadauriya-308414321"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-black/5 hover:bg-black/10 border border-black/10 hover:border-primary/30 text-[#374151] hover:text-primary transition-all duration-300"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="https://wa.me/918077313959"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-black/5 hover:bg-black/10 border border-black/10 hover:border-primary/30 text-[#374151] hover:text-primary transition-all duration-300"
                >
                  <FaWhatsapp size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Validated Form Center */}
          <motion.div 
            className="lg:col-span-7 p-8 rounded-[32px] border shadow-2xl relative overflow-hidden backdrop-blur-md"
            style={{ backgroundColor: 'rgba(255,255,255,0.85)', borderColor: 'rgba(125,125,125,0.18)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {status === 'success' ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center h-full space-y-4 py-16"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
              >
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full animate-bounce">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-display">Message Sent Successfully!</h3>
                <p className="text-xs text-[#374151] max-w-sm leading-relaxed font-semibold">
                  Your message has been delivered successfully. I will get back to you soon.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="https://wa.me/918077313959"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all duration-300 shadow-md cursor-pointer hover:scale-[1.02] justify-center"
                  >
                    <FaWhatsapp size={14} />
                    Contact on WhatsApp
                  </a>
                  <button
                    onClick={() => setStatus('idle')}
                    className="flex items-center justify-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer px-5 py-2.5 rounded-xl border border-primary/20 hover:bg-primary/5"
                  >
                    Send another message
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-semibold text-[#374151] uppercase tracking-[0.08em] font-mono">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4.5 py-3 rounded-2xl bg-white/75 backdrop-blur-[10px] border-[1.5px] border-[rgba(125,125,125,0.18)] focus:border-primary focus:shadow-[0_0_15px_rgba(139,92,246,0.25)] focus:scale-[1.01] transition-all duration-200 outline-none text-xs text-[#111827] font-medium placeholder:text-[#6B7280] placeholder:opacity-100 placeholder:font-medium"
                  />
                  {errors.name && (
                    <span className="text-[10px] font-bold font-mono text-red-500 flex items-center gap-1">
                      <AlertTriangle size={10} />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-semibold text-[#374151] uppercase tracking-[0.08em] font-mono">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full px-4.5 py-3 rounded-2xl bg-white/75 backdrop-blur-[10px] border-[1.5px] border-[rgba(125,125,125,0.18)] focus:border-primary focus:shadow-[0_0_15px_rgba(139,92,246,0.25)] focus:scale-[1.01] transition-all duration-200 outline-none text-xs text-[#111827] font-medium placeholder:text-[#6B7280] placeholder:opacity-100 placeholder:font-medium"
                  />
                  {errors.email && (
                    <span className="text-[10px] font-bold font-mono text-red-500 flex items-center gap-1">
                      <AlertTriangle size={10} />
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-semibold text-[#374151] uppercase tracking-[0.08em] font-mono">Project Requirements / message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Detail your request..."
                    className="w-full px-4.5 py-3 rounded-2xl bg-white/75 backdrop-blur-[10px] border-[1.5px] border-[rgba(125,125,125,0.18)] focus:border-primary focus:shadow-[0_0_15px_rgba(139,92,246,0.25)] focus:scale-[1.01] transition-all duration-200 outline-none text-xs text-[#111827] font-medium placeholder:text-[#6B7280] placeholder:opacity-100 placeholder:font-medium resize-none min-h-[180px]"
                  />
                  {errors.message && (
                    <span className="text-[10px] font-bold font-mono text-red-500 flex items-center gap-1">
                      <AlertTriangle size={10} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {submitError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-[10px] font-bold font-mono flex items-center gap-2">
                    <AlertTriangle size={12} />
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white text-xs font-bold transition-all duration-300 disabled:opacity-60 shadow-md shadow-primary/10 cursor-pointer hover:scale-[1.01] active:scale-[0.98]"
                >
                  {status === 'submitting' ? 'Sending Message...' : 'Submit Message'}
                  <Send size={12} />
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}

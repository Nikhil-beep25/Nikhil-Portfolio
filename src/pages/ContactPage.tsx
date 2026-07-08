import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Mail, Send, CheckCircle2, AlertTriangle, ArrowRight, User, MessageSquare } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) {
      newErrors.name = i18n.language === 'en' ? 'Name is required' : 'नाम आवश्यक है';
    }
    if (!formData.email.trim()) {
      newErrors.email = i18n.language === 'en' ? 'Email is required' : 'ईमेल आवश्यक है';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = i18n.language === 'en' ? 'Please provide a valid email' : 'कृपया एक मान्य ईमेल प्रदान करें';
    }
    if (!formData.message.trim()) {
      newErrors.message = i18n.language === 'en' ? 'Message is required' : 'संदेश आवश्यक है';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = i18n.language === 'en' ? 'Message should be at least 10 characters' : 'संदेश कम से कम 10 वर्णों का होना चाहिए';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      name: "Gmail / Email",
      value: "nikhilbhadauriya2006@gmail.com",
      url: "mailto:nikhilbhadauriya2006@gmail.com",
      icon: <Mail size={18} className="text-red-500" />,
      color: "hover:border-red-500/30 hover:bg-red-500/5",
      textCol: "hover:text-red-500"
    },
    {
      name: "WhatsApp",
      value: "+91 80773 13959",
      url: "https://wa.me/918077313959",
      icon: <FaWhatsapp size={18} className="text-[#25D366]" />,
      color: "hover:border-green-500/30 hover:bg-green-500/5",
      textCol: "hover:text-green-500"
    },
    {
      name: "LinkedIn",
      value: "Nikhil Bhadauriya",
      url: "https://www.linkedin.com/in/nikhil-bhadauriya-308414321",
      icon: <FaLinkedin size={18} className="text-[#0A66C2]" />,
      color: "hover:border-blue-500/30 hover:bg-[#0A66C2]/5",
      textCol: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      value: "Nikhil-beep25",
      url: "https://github.com/Nikhil-beep25",
      icon: <FaGithub size={18} className="text-text-title" />,
      color: "hover:border-primary/30 hover:bg-primary/5",
      textCol: "hover:text-primary-light"
    },
    {
      name: "Instagram",
      value: "@itsnikhilbhadauriya",
      url: "https://www.instagram.com/itsnikhilbhadauriya?igsh=MTY0dDJjaHAwOWt1Yg==",
      icon: <FaInstagram size={18} className="text-pink-500" />,
      color: "hover:border-pink-500/30 hover:bg-pink-500/5",
      textCol: "hover:text-pink-500"
    }
  ];

  return (
    <motion.div 
      className="py-24 relative overflow-hidden bg-bg-darkest"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3">
            {t('contact.badge')}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto text-sm md:text-base">
            {t('contact.description')}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <h4 className="text-xl font-bold text-text-title font-display mb-4">
                {t('contact.discuss')}
              </h4>
              <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-6">
                {t('contact.discussDesc')}
              </p>
            </div>

            {/* Social List */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">{t('contact.findMe')}</span>
              
              <div className="flex flex-col gap-3">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl glass-card text-text-muted transition-all duration-300 group shadow-sm ${info.color} ${info.textCol}`}
                  >
                    <div className="p-2.5 rounded-lg bg-bg-dark/50 border border-border-dark/30 transition-transform group-hover:scale-105 duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider block">{info.name}</span>
                      <span className="text-xs font-bold text-text-title group-hover:text-cyan-400 transition-colors font-mono">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl glass-card flex flex-col shadow-sm relative text-left hover:border-cyan-500/10">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <CheckCircle2 size={48} className="text-emerald-500" />
                    <h4 className="text-lg font-bold text-text-title font-display">{t('contact.successTitle')}</h4>
                    <p className="text-text-muted text-xs max-w-sm">
                      {t('contact.successDesc')}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer"
                    >
                      {t('contact.sendAnother')}
                      <ArrowRight size={14} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-bold text-text-muted uppercase tracking-wide flex items-center gap-1.5">
                        <User size={12} className="text-text-muted" />
                        {t('contact.formName')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-bg-darkest/60 border text-xs text-text-title focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all ${
                          errors.name ? 'border-red-500/50 focus:ring-red-500' : 'border-border-dark'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-1">
                          <AlertTriangle size={11} />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-bold text-text-muted uppercase tracking-wide flex items-center gap-1.5">
                        <Mail size={12} className="text-text-muted" />
                        {t('contact.formEmail')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-bg-darkest/60 border text-xs text-text-title focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all ${
                          errors.email ? 'border-red-500/50 focus:ring-red-500' : 'border-border-dark'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-1">
                          <AlertTriangle size={11} />
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[10px] font-bold text-text-muted uppercase tracking-wide flex items-center gap-1.5">
                        <MessageSquare size={12} className="text-text-muted" />
                        {t('contact.formMessage')}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-bg-darkest/60 border text-xs text-text-title focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none ${
                          errors.message ? 'border-red-500/50 focus:ring-red-500' : 'border-border-dark'
                        }`}
                        placeholder={t('contact.formPlaceholderMessage') || "Describe your project details..."}
                      />
                      {errors.message && (
                        <span className="text-[10px] font-semibold text-red-500 flex items-center gap-1 mt-1">
                          <AlertTriangle size={11} />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 disabled:from-cyan-500/50 disabled:to-violet-600/50 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t('contact.sending')}
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          {t('contact.send')}
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

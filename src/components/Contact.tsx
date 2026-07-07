import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { Mail, Send, CheckCircle2, AlertTriangle, ArrowRight, User, MessageSquare } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/nikhilbhadauriya",
      icon: <FaGithub size={20} />,
      bgColor: "hover:bg-zinc-800",
      textColor: "hover:text-white"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nikhilbhadauriya",
      icon: <FaLinkedin size={20} className="text-[#0A66C2]" />,
      bgColor: "hover:bg-[#0A66C2]/10",
      textColor: "hover:text-[#0A66C2]"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/nikhilbhadauriya",
      icon: <RiTwitterXFill size={20} className="text-white" />,
      bgColor: "hover:bg-white/10",
      textColor: "hover:text-white"
    },
    {
      name: "Email",
      url: "mailto:nikhilbhadauriya@example.com",
      icon: <Mail size={20} className="text-primary-light" />,
      bgColor: "hover:bg-primary/10",
      textColor: "hover:text-primary-light"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-darkest border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Connection
          </motion.h3>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-zinc-400 mt-4 max-w-lg mx-auto text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind, want to build a SaaS, or looking to hire a full-stack developer? Shoot me a message.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Socials / Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h4 className="text-xl font-bold text-white font-display mb-4">
                Let's discuss details
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                I'm interested in freelance contracts, remote software developer roles, and building micro-SaaS products. Feel free to ping me on socials or use the form.
              </p>
            </div>

            {/* Social Grid */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">Find me on</span>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-bg-card/40 text-zinc-400 ${link.bgColor} ${link.textColor} transition-all duration-300 group`}
                  >
                    <div className="transition-transform group-hover:scale-105 duration-200">
                      {link.icon}
                    </div>
                    <span className="text-xs font-bold font-sans">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Contact Detail */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary-light">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Direct Email</span>
                <a href="mailto:nikhilbhadauriya@example.com" className="text-sm font-semibold text-white hover:text-primary-light transition-colors font-mono">
                  nikhilbhadauriya@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-bg-card/30 relative">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <CheckCircle2 size={48} className="text-emerald-400" />
                    <h4 className="text-xl font-bold text-white font-display">Message Sent Successfully!</h4>
                    <p className="text-zinc-400 text-sm max-w-sm">
                      Thank you for reaching out, Nikhil. I have simulated the message reception and will respond to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary-light hover:text-white transition-colors"
                    >
                      Send another message
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
                      <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-wide flex items-center gap-1.5">
                        <User size={12} className="text-zinc-500" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-bg-darkest border text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all ${
                          errors.name ? 'border-red-500/50 focus:ring-red-500' : 'border-white/5'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="text-xs font-semibold text-red-400 flex items-center gap-1 mt-1">
                          <AlertTriangle size={12} />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-zinc-400 uppercase tracking-wide flex items-center gap-1.5">
                        <Mail size={12} className="text-zinc-500" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-bg-darkest border text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all ${
                          errors.email ? 'border-red-500/50 focus:ring-red-500' : 'border-white/5'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-xs font-semibold text-red-400 flex items-center gap-1 mt-1">
                          <AlertTriangle size={12} />
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-wide flex items-center gap-1.5">
                        <MessageSquare size={12} className="text-zinc-500" />
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-bg-darkest border text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none ${
                          errors.message ? 'border-red-500/50 focus:ring-red-500' : 'border-white/5'
                        }`}
                        placeholder="Briefly describe your project details, tech stack, and goals..."
                      />
                      {errors.message && (
                        <span className="text-xs font-semibold text-red-400 flex items-center gap-1 mt-1">
                          <AlertTriangle size={12} />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-semibold text-sm shadow-md transition-colors"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
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
    </section>
  );
}

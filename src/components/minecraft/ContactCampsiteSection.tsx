import SceneFrame from '../world3d/SceneFrame';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { MinecraftTorch } from './PixelArt';
import { audioManager } from '../../utils/audioManager';

export default function ContactCampsiteSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const errs: Partial<typeof formData> = {};
    if (!formData.name.trim()) errs.name = "Player name required";
    if (!formData.email.trim()) {
      errs.email = "Email address required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Invalid email format";
    }
    if (!formData.message.trim()) errs.message = "Message scroll required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => {
        throw new Error("Unable to connect to the server.");
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to deliver message`);
      }

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Invalid server response format.");
      }

      if (!result.success) {
        throw new Error(result.error || result.message || "Delivery failed.");
      }

      // Success
      audioManager.playDelivered();
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error(err);
      setServerError(err.message || "Failed to deliver message.");
      setStatus('idle');
    }
  };

  return (
    <section 
      id="contact" 
      className="world-section relative py-20 md:py-28 px-4 md:px-8 w-full z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        <SceneFrame kind="campfire" />

        {/* Section Header */}
        <div className="section-heading text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <MinecraftTorch size={24} />
            <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white mc-text-shadow">
              CAMPSITE & INQUIRIES
            </h2>
            <MinecraftTorch size={24} />
          </div>
          <p className="font-pixel-sub text-xs sm:text-sm text-stone-300">
            [ REST BY THE CAMPFIRE & SEND A DISPATCH SCROLL ]
          </p>
        </div>

        {/* Campsite Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Campfire Environment & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 mc-panel-wood p-6 sm:p-7 space-y-6 text-white shadow-2xl"
          >
            {/* Campfire Visual Centerpiece */}
            <div className="flex flex-col items-center justify-center py-4 bg-black/30 border-2 border-[#4E2E16] p-4">
              <img className="campsite-art" src="/world/woodland-campsite-small.webp" width="960" height="540" loading="lazy" decoding="async" alt="A glowing campfire and crafting bench in a detailed voxel forest beside a mountain lake" />
              <span className="font-pixel text-[10px] text-amber-300 mc-text-shadow mt-2">
                WARM EMBERS REST STOP
              </span>
              <p className="font-body text-xs text-stone-300 text-center max-w-xs mt-1">
                "Whether you're building a SaaS platform, need full-stack architecture, or want to collaborate on AI systems, grab a seat."
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3 font-body text-xs">
              <div className="mc-panel-dark p-3 flex items-center justify-between">
                <div>
                  <span className="font-pixel text-[9px] text-[#4AEDD9] block">DIRECT EMAIL</span>
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-stone-300 hover:text-white transition-colors">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
                <span>📧</span>
              </div>

              <div className="mc-panel-dark p-3 flex items-center justify-between">
                <div>
                  <span className="font-pixel text-[9px] text-[#55FF55] block">WHATSAPP / PHONE</span>
                  <a href={PORTFOLIO_DATA.personal.whatsappUrl} target="_blank" rel="noreferrer" className="text-stone-300 hover:text-white transition-colors">
                    {PORTFOLIO_DATA.personal.whatsapp}
                  </a>
                </div>
                <span>💬</span>
              </div>

              <div className="mc-panel-dark p-3 flex items-center justify-between">
                <div>
                  <span className="font-pixel text-[9px] text-amber-300 block">BASE LOCATION</span>
                  <span className="text-stone-300">{PORTFOLIO_DATA.personal.location}</span>
                </div>
                <span>📍</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Minecraft Message Interface Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 mc-panel p-6 sm:p-8 space-y-5 text-stone-900 shadow-2xl text-left"
          >
            <div className="border-b-2 border-stone-400 pb-3 flex items-center justify-between">
              <span className="font-pixel text-xs sm:text-sm text-stone-900">
                DISPATCH SCROLL TO NIKHIL
              </span>
              <span className="font-pixel-sub text-[10px] text-emerald-800">
                LET’S BUILD SOMETHING
              </span>
            </div>

            {/* Success Banner */}
            {status === 'success' && (
              <div className="mc-panel-dark p-4 border-2 border-emerald-400 text-center space-y-1 animate-fadeIn">
                <span className="font-pixel text-sm text-[#55FF55] block mc-text-shadow">
                  MESSAGE DELIVERED! ✨
                </span>
                <p className="font-body text-xs text-stone-300">
                  Your scroll has been dispatched successfully. Nikhil will get back to you shortly!
                </p>
              </div>
            )}

            {/* Error Banner */}
            {serverError && (
              <div className="mc-panel-dark p-3 border-2 border-red-500 text-center">
                <span className="font-pixel text-xs text-red-400 block">
                  DELIVERY FAILED
                </span>
                <p className="font-body text-xs text-stone-300 mt-0.5">
                  {serverError}
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Player Name */}
              <div className="space-y-1">
                <label htmlFor="contact-name" className="font-pixel text-[10px] text-stone-800 block">
                  YOUR NAME / GAMERTAG:
                </label>
                <input
                  autoComplete="name"
                  type="text"
                  id="contact-name"
                  name="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  placeholder="e.g. Nikhil Bhadauriya"
                  className="w-full mc-slot px-3 py-2.5 font-body text-xs text-stone-900 bg-white placeholder-stone-400 outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.name && (
                  <span id="contact-name-error" role="alert" className="font-body text-xs text-red-900 block">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="contact-email" className="font-pixel text-[10px] text-stone-800 block">
                  RETURN ADDRESS (EMAIL):
                </label>
                <input
                  autoComplete="email"
                  type="email"
                  id="contact-email"
                  name="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  value={formData.email}
                  onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                  placeholder="e.g. xyz@example.com"
                  className="w-full mc-slot px-3 py-2.5 font-body text-xs text-stone-900 bg-white placeholder-stone-400 outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.email && (
                  <span id="contact-email-error" role="alert" className="font-body text-xs text-red-900 block">{errors.email}</span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="contact-message" className="font-pixel text-[10px] text-stone-800 block">
                  PARCHMENT MESSAGE:
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me about your project, idea, or role..."
                  className="w-full mc-slot px-3 py-2.5 font-body text-xs text-stone-900 bg-white placeholder-stone-400 outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.message && (
                  <span id="contact-message-error" role="alert" className="font-body text-xs text-red-900 block">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                onClick={() => audioManager.playClick()}
                className="mc-button mc-button-green w-full py-3.5 text-xs font-pixel tracking-wider shadow-lg cursor-pointer disabled:opacity-50"
              >
                {status === 'submitting' ? '[ DISPATCHING SCROLL... ]' : '[ SEND MESSAGE 🕊️ ]'}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, X, Mail, Phone, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Resume() {
  const [showModal, setShowModal] = useState(false);

  const experience = [
    {
      role: "Python Full-Stack Engineer & SaaS Builder",
      company: "Freelance & Independent Projects",
      period: "2023 - Present",
      bullets: [
        "Architected and deployed full-stack school ERP (VidyaSanchar) serving 5,000+ users, utilizing Node.js, Express, PostgreSQL, and React.",
        "Engineered RESTful microservices in FastAPI and Django, decreasing API load times by 35% through query optimization and caching.",
        "Built and launched production SaaS architectures incorporating multi-tenant database isolation (schemas) and Stripe payment layers.",
        "Automated deployment workflows using Docker containers, Nginx reverse proxies, and GitHub Actions pipelines."
      ]
    },
    {
      role: "Backend Web Developer",
      company: "Contract Positions",
      period: "2021 - 2023",
      bullets: [
        "Built responsive CRUD APIs using Flask and Django REST Framework, integrating Postgres and MongoDB databases.",
        "Optimized complex database queries, indexes, and triggers, ensuring 99.9% application uptime.",
        "Collaborated with frontend designers to integrate REST endpoints with modular React-TypeScript client dashboards."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science / Information Technology",
      institution: "Indian University",
      period: "Completed"
    }
  ];

  const certifications = [
    "Advanced Python Applications & Scripting",
    "Full-Stack Web Development (MERN Ecosystem)",
    "Docker & Container Orchestration Practices"
  ];

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Credentials
          </motion.h3>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Resume
          </motion.h2>
        </div>

        {/* Resume Content Card */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Description & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-2xl font-bold text-white font-display">
              Ready to collaborate or hire?
            </h4>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              My resume outlines my technical experience, full-stack competencies, and operational framework. You can inspect the document inside a custom interactive modal right here in your browser, or download the optimized PDF copy to share with your technical recruiting team.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-md shadow-primary/25 hover:shadow-primary/45 transition-all duration-300"
              >
                <Eye size={16} />
                View Full Resume
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Download size={16} />
                Download PDF Resume
              </a>
            </div>
          </div>

          {/* Right Column: 3D CV Preview Simulation */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              className="relative w-64 h-80 rounded-xl bg-zinc-900 border border-white/10 p-5 shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer select-none"
              style={{ perspective: 1000 }}
              whileHover={{ 
                rotateY: -12, 
                rotateX: 8, 
                scale: 1.03,
                borderColor: "rgba(124,58,237,0.3)"
              }}
              onClick={() => setShowModal(true)}
            >
              {/* Paper overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Fake lines and items */}
              <div className="space-y-3.5">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="w-24 h-3 bg-white/80 rounded" />
                    <div className="w-16 h-2 bg-zinc-500 rounded mt-1.5" />
                  </div>
                  <FileText className="text-primary-light" size={20} />
                </div>

                <div className="border-t border-white/5 pt-3 space-y-2.5">
                  <div className="w-full h-1.5 bg-zinc-700 rounded" />
                  <div className="w-11/12 h-1.5 bg-zinc-700 rounded" />
                  <div className="w-10/12 h-1.5 bg-zinc-700 rounded" />
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="w-14 h-2.5 bg-white/60 rounded" />
                  <div className="flex gap-1.5">
                    <div className="w-10 h-1.5 bg-zinc-700 rounded" />
                    <div className="w-12 h-1.5 bg-zinc-700 rounded" />
                  </div>
                </div>
              </div>

              {/* Fake Footer */}
              <div className="flex items-center justify-between border-t border-white/5 pt-3">
                <div className="w-20 h-2 bg-zinc-500 rounded" />
                <span className="text-[8px] font-bold text-primary-light uppercase tracking-wider">Preview CV</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Interactive CV Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-bg-dark border border-white/10 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto flex flex-col shadow-2xl relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* Modal Header */}
              <div className="sticky top-0 bg-bg-dark border-b border-white/5 p-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <FileText className="text-primary-light" size={20} />
                  <span className="text-sm font-bold text-white font-display">Nikhil Bhadauriya — Full CV Preview</span>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-1.5 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body / The CV Paper */}
              <div className="p-8 md:p-12 space-y-10 text-left bg-zinc-950 text-zinc-300">
                
                {/* CV Header */}
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end border-b border-zinc-800 pb-8 gap-4">
                  <div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight font-display mb-2">Nikhil Bhadauriya</h1>
                    <h2 className="text-lg font-bold text-primary-light font-display">Python Full-Stack Developer & SaaS Builder</h2>
                  </div>
                  <div className="text-xs space-y-1.5 font-semibold text-zinc-400">
                    <div className="flex items-center gap-2"><Mail size={12} /> nikhilbhadauriya@example.com</div>
                    <div className="flex items-center gap-2"><Phone size={12} /> +91 XXXXX XXXXX</div>
                    <div className="flex items-center gap-2"><MapPin size={12} /> India</div>
                  </div>
                </div>

                {/* CV Summary */}
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-zinc-900 pb-1.5">
                    <Award size={14} className="text-primary-light" /> Professional Summary
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Highly analytical and result-driven Python Full-Stack Developer with 5+ years of programming and software building experience. Specialized in architecting robust database schemas, clustered REST APIs, and responsive React frontend systems. Proven record of developing large institutional scale ERP platforms (VidyaSanchar) and building clean, modular SaaS solutions.
                  </p>
                </div>

                {/* CV Experience */}
                <div className="space-y-6">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-zinc-900 pb-1.5">
                    <Briefcase size={14} className="text-primary-light" /> Professional Work History
                  </h3>
                  
                  <div className="space-y-8">
                    {experience.map((exp, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-base font-bold text-white font-display">{exp.role}</h4>
                            <span className="text-xs text-zinc-500 font-semibold">{exp.company}</span>
                          </div>
                          <span className="text-xs font-bold font-mono text-primary-light bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-2 leading-relaxed">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CV Education */}
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-zinc-900 pb-1.5">
                    <GraduationCap size={14} className="text-primary-light" /> Education
                  </h3>
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">{edu.degree}</h4>
                        <span className="text-xs text-zinc-500 font-semibold">{edu.institution}</span>
                      </div>
                      <span className="text-xs font-semibold text-zinc-400">{edu.period}</span>
                    </div>
                  ))}
                </div>

                {/* CV Certifications */}
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-zinc-900 pb-1.5">
                    <Award size={14} className="text-primary-light" /> Key Accreditations
                  </h3>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1.5">
                    {certifications.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-bg-dark border-t border-white/5 p-4 flex justify-end gap-3 z-10">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-semibold transition-colors"
                >
                  Hire Nikhil
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

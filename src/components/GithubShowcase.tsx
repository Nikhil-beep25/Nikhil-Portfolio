import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { Terminal, GitPullRequest, Award, Activity } from 'lucide-react';

interface Repo {
  name: string;
  desc: string;
  stars: number;
  forks: number;
  language: string;
  langColor: string;
  url: string;
}

export default function GithubShowcase() {
  const [hoveredCell, setHoveredCell] = useState<{ count: number; date: string } | null>(null);

  const stats = [
    { label: "Total Contributions", value: "1,842", sub: "Past Year", icon: <Activity className="text-emerald-400" size={16} /> },
    { label: "Stars Earned", value: "86", sub: "All Repos", icon: <FaStar className="text-yellow-400" size={16} /> },
    { label: "Pull Requests", value: "142", sub: "Merged", icon: <GitPullRequest className="text-purple-400" size={16} /> },
    { label: "Repositories", value: "32", sub: "Public/Private", icon: <Award className="text-sky-400" size={16} /> },
  ];

  const featuredRepos: Repo[] = [
    {
      name: "vidyasanchar-core",
      desc: "Robust full-stack school ERP backend architecture featuring processes for role validation, attendance tracking, and fee transactions.",
      stars: 42,
      forks: 14,
      language: "TypeScript",
      langColor: "bg-blue-500",
      url: "https://github.com/nikhilbhadauriya"
    },
    {
      name: "saas-boilerplate-fastapi",
      desc: "Production-ready SaaS template incorporating multi-tenant database separation, Redis task queuing with Celery, and custom Stripe integrations.",
      stars: 28,
      forks: 6,
      language: "Python",
      langColor: "bg-yellow-500",
      url: "https://github.com/nikhilbhadauriya"
    }
  ];

  // Helper to generate contributions grid data (7 days x 24 weeks for a clean responsive subset)
  const generateGrid = () => {
    const grid = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Simulate realistic coding pattern (more contributions on weekdays, fewer on weekends)
    for (let day = 0; day < 7; day++) {
      const row = [];
      for (let week = 0; week < 24; week++) {
        // Pseudo-randomizing count based on patterns
        let count = 0;
        const rand = Math.random();
        if (day > 0 && day < 6) { // Weekdays
          if (rand > 0.85) count = Math.floor(Math.random() * 8) + 4; // heavy days
          else if (rand > 0.3) count = Math.floor(Math.random() * 4) + 1; // standard days
        } else { // Weekends
          if (rand > 0.8) count = Math.floor(Math.random() * 3) + 1;
        }
        
        // Format realistic date string
        const dateStr = `Week ${week + 1}, ${days[day]}`;
        row.push({ count, date: dateStr });
      }
      grid.push(row);
    }
    return { grid };
  };

  const { grid } = generateGrid();

  // Color mapping based on contribution count
  const getCellColor = (count: number) => {
    if (count === 0) return 'bg-[#161b22] border-transparent';
    if (count <= 2) return 'bg-[#0e4429] border-[#0e4429]/50';
    if (count <= 4) return 'bg-[#006d32] border-[#006d32]/50';
    if (count <= 6) return 'bg-[#26a641] border-[#26a641]/50';
    return 'bg-[#39d353] border-[#39d353]/50';
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-bg-darkest border-t border-white/5">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            GitHub Activity
          </motion.h3>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Coding Consistency & Repositories
          </motion.h2>
        </div>

        {/* GitHub Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stats and Repos */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-bg-card/40 border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{stat.label}</span>
                    {stat.icon}
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white font-display block">{stat.value}</span>
                    <span className="text-[10px] text-zinc-400">{stat.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Repos */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <Terminal size={18} className="text-primary-light" />
                Featured Repositories
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredRepos.map((repo, idx) => (
                  <a 
                    key={idx}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl border border-white/5 bg-bg-card/30 hover:border-primary/20 hover:bg-bg-card/60 transition-all duration-300 flex flex-col justify-between group h-full"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Terminal size={14} className="text-zinc-500 group-hover:text-primary-light transition-colors" />
                        <span className="text-sm font-bold text-white group-hover:text-primary-light transition-colors font-mono">{repo.name}</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-normal mb-6">
                        {repo.desc}
                      </p>
                    </div>

                    {/* Footer Stats */}
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 font-semibold mt-auto pt-3 border-t border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                        {repo.language}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 hover:text-white transition-colors">
                          <FaStar size={12} />
                          {repo.stars}
                        </span>
                        <span className="flex items-center gap-1 hover:text-white transition-colors">
                          <FaCodeBranch size={12} />
                          {repo.forks}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Custom Contribution Graph */}
          <div className="lg:col-span-5 h-full">
            <div className="p-6 rounded-2xl border border-white/5 bg-bg-card/30 flex flex-col justify-between h-full">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <FaGithub size={20} className="text-zinc-400" />
                  <span className="text-sm font-bold text-white font-display">github.com/nikhilbhadauriya</span>
                </div>
                <a 
                  href="https://github.com/nikhilbhadauriya"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <FaGithub size={16} />
                </a>
              </div>

              {/* Grid block info */}
              <div className="mb-4">
                <span className="text-xs text-zinc-400 leading-relaxed">
                  Real-time coding streaks, repository workflows, and daily commits in the past 24 weeks.
                </span>
              </div>

              {/* Interactive Contribution Grid */}
              <div className="relative p-3 rounded-xl bg-bg-darkest border border-white/5 flex flex-col gap-1.5 overflow-x-auto">
                
                {/* Month labels */}
                <div className="flex justify-between pl-6 text-[8px] font-bold text-zinc-600 uppercase tracking-widest font-mono">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>

                <div className="flex gap-1.5">
                  {/* Day labels */}
                  <div className="flex flex-col justify-between text-[8px] font-bold text-zinc-600 font-mono pr-1">
                    <span>S</span>
                    <span>M</span>
                    <span>W</span>
                    <span>F</span>
                    <span>S</span>
                  </div>

                  {/* Grid layout */}
                  <div className="flex flex-col gap-1 flex-grow">
                    {grid.map((row, rIdx) => (
                      <div key={rIdx} className="flex gap-1">
                        {row.map((cell, cIdx) => (
                          <div
                            key={cIdx}
                            className={`w-3.5 h-3.5 rounded-[2px] border ${getCellColor(cell.count)} transition-all duration-150 cursor-pointer hover:scale-110 hover:z-10`}
                            onMouseEnter={() => setHoveredCell({ count: cell.count, date: cell.date })}
                            onMouseLeave={() => setHoveredCell(null)}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tooltip Popup */}
                <div className="min-h-[20px] flex items-center justify-center mt-2.5">
                  <span className="text-[10px] text-zinc-500 font-bold font-mono uppercase tracking-wider">
                    {hoveredCell 
                      ? `${hoveredCell.count} contribution${hoveredCell.count !== 1 ? 's' : ''} on ${hoveredCell.date}`
                      : "Hover over cells to see commit counts"
                    }
                  </span>
                </div>

              </div>

              {/* Grid Legend */}
              <div className="flex items-center justify-between text-[9px] font-bold text-zinc-600 uppercase tracking-wider font-mono mt-4 pt-4 border-t border-white/5">
                <span>Less</span>
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-[#161b22]" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-[#0e4429]" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-[#006d32]" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-[#26a641]" />
                  <span className="w-2.5 h-2.5 rounded-[1px] bg-[#39d353]" />
                </div>
                <span>More</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

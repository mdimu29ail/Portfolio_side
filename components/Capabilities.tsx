import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layout,
  Layers,
} from 'lucide-react';
import { SectionHeading } from './Shared';

// Mock Services data with meaningful sentences
const CAPABILITIES = [
  {
    id: '01',
    title: 'Frontend Orchestration',
    desc: 'Crafting immersive, high-performance user interfaces using React.js and Tailwind CSS, focused on sub-second interactivity and pixel-perfect responsiveness.',
    icon: Layout,
    tags: ['React', 'Motion', 'Tailwind'],
  },
  {
    id: '02',
    title: 'Backend Engineering',
    desc: 'Architecting robust, scalable server-side systems with Node.js and Express, ensuring secure data flow, API integrity, and high-availability logic.',
    icon: Server,
    tags: ['Node.js', 'JWT', 'Rest API'],
  },
  {
    id: '03',
    title: 'Database Architecture',
    desc: 'Designing high-performance MongoDB schemas and real-time Firebase integrations optimized for complex data relationships and rapid retrieval.',
    icon: Layers,
    tags: ['MongoDB', 'Redis', 'Firebase'],
  },
];

export const Capabilities: React.FC<{ theme: 'dark' | 'light' }> = ({
  theme,
}) => {
  const isDark = theme === 'dark';

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8fafc]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    text: isDark ? 'text-slate-100' : 'text-slate-900',
    subText: isDark ? 'text-slate-500' : 'text-slate-600',
    border: isDark ? 'border-white/5' : 'border-slate-200',
    accent: '#53a7f5',
    gridColor: isDark ? 'rgba(83, 167, 245, 0.03)' : 'rgba(0,0,0,0.03)',
  };

  return (
    <section
      id="services"
      aria-labelledby="capabilities-title"
      className={`py-24 md:py-32 lg:py-44 px-6 relative overflow-hidden w-full transition-colors duration-700 ${styles.bg}`}
    >
      {/* --- BACKGROUND DOT MATRIX --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${styles.gridColor} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Brand Glow Spot */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#53a7f5]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* --- HEADER --- */}
        <div className="flex flex-col items-start gap-5 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#53a7f5]/20 bg-[#53a7f5]/5 backdrop-blur-md"
          >
            <Zap size={14} className="text-[#53a7f5]" />
            <span className="text-[#53a7f5] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              Service Expertise
            </span>
          </motion.div>
          <motion.h2
            id="capabilities-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${styles.text}`}
          >
            Specialized Expertise<span className="text-[#53a7f5]">.</span>
          </motion.h2>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {CAPABILITIES.map((cap, i) => (
            <motion.article
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`
                group relative flex flex-col justify-between p-10 md:p-12 min-h-[420px] rounded-[2.5rem] border transition-all duration-500
                ${styles.cardBg} ${styles.border} hover:border-[#53a7f5]/30 shadow-xl hover:shadow-[#53a7f5]/5
              `}
            >
              {/* Card Decoration */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight size={24} className="text-[#53a7f5]" />
              </div>

              {/* Top Section */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#53a7f5]/10 flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 border border-[#53a7f5]/10">
                  <cap.icon size={28} className="text-[#53a7f5]" />
                </div>

                <h3
                  className={`text-2xl font-black uppercase tracking-tighter leading-none mb-6 ${styles.text}`}
                >
                  {cap.title}
                </h3>

                <p
                  className={`text-lg font-medium leading-relaxed mb-8 ${styles.subText}`}
                >
                  {cap.desc}
                </p>
              </div>

              {/* Bottom Section: Tech Tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {cap.tags.map(tag => (
                  <span
                    key={tag}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${styles.border} ${styles.mutedBg} ${styles.subText} group-hover:border-[#53a7f5]/20 group-hover:text-[#53a7f5] transition-colors`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#53a7f5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* --- FOOTER: TRUST METRICS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-24 md:mt-32 pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-10 ${styles.border}`}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-[#53a7f5]" />
              <span
                className={`text-xs font-black uppercase tracking-widest ${styles.text}`}
              >
                Enterprise Security
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Code2 size={20} className="text-[#53a7f5]" />
              <span
                className={`text-xs font-black uppercase tracking-widest ${styles.text}`}
              >
                Scalable Codebase
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8 opacity-40">
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Global Standards
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              SLA Guaranteed
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

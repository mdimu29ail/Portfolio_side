import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Terminal,
  Activity,
  Server,
  Zap,
  Globe,
  BarChart3,
} from 'lucide-react';
import { SKILLS, STATS } from '../constants'; // Ensure these are defined in your constants
import { Counter } from './Shared'; // Assuming Counter is a separate component

export const Expertise: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8fafc]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    text: isDark ? 'text-slate-200' : 'text-slate-900',
    subText: isDark ? 'text-slate-500' : 'text-slate-600',
    border: isDark ? 'border-white/5' : 'border-slate-200',
    mutedBg: isDark ? 'bg-white/5' : 'bg-slate-100',
    accent: '#53a7f5',
    accentText: 'text-[#53a7f5]',
    barColor: 'bg-[#53a7f5]',
  };

  // Performance optimized visualizer animation
  const barVariants = {
    animate: (i: number) => ({
      height: [15, 45, 25, 75, 35, 85, 15],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut',
        delay: i * 0.08,
      },
    }),
  };

  return (
    <section
      id="expertise"
      role="region"
      aria-labelledby="expertise-title"
      className={`py-24 md:py-32 lg:py-44 relative w-full overflow-hidden transition-colors duration-700 ${styles.bg}`}
    >
      {/* --- BACKGROUND ACCENTS --- */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Soft Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#53a7f5] rounded-full blur-[130px] pointer-events-none opacity-[0.04]" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* --- FIXED SUBTITLE & HEADING --- */}
        <div className="flex flex-col items-start gap-5 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-5 py-2 rounded-full border border-[#53a7f5]/20 bg-[#53a7f5]/5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#53a7f5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#53a7f5]"></span>
            </span>
            <span className="text-[#53a7f5] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              Core Competencies
            </span>
          </motion.div>

          <motion.h2
            id="expertise-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none ${styles.heading}`}
          >
            Technical Arsenal<span className="text-[#53a7f5]">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* --- LEFT PANEL: ARCHITECTURE TERMINAL --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group"
          >
            <div
              className={`relative h-full border rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-between overflow-hidden transition-all duration-500 shadow-xl ${styles.cardBg} ${styles.border} hover:border-[#53a7f5]/30 group-hover:shadow-[#53a7f5]/5`}
            >
              <div className="flex justify-between items-start mb-16">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-4 rounded-2xl ${styles.mutedBg} ${styles.accentText} shadow-inner`}
                    >
                      <Server size={28} />
                    </div>
                    <span
                      className={`font-bold text-[11px] tracking-[0.3em] uppercase ${styles.subText}`}
                    >
                      Stack Architecture
                    </span>
                  </div>
                  <h3
                    className={`text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] ${styles.text}`}
                  >
                    Scalable <br />
                    <span className={styles.accentText}>MERN</span> Ecosystems
                  </h3>
                </div>
                <div className="hidden sm:block opacity-[0.03] absolute top-12 right-12 group-hover:opacity-[0.08] transition-opacity duration-700">
                  <Terminal size={140} />
                </div>
              </div>

              <div className="space-y-12">
                <p
                  className={`text-lg md:text-xl font-medium leading-relaxed max-w-xl border-l-4 pl-8 border-[#53a7f5] ${styles.subText}`}
                >
                  "I engineer robust backend foundations and fluid frontend
                  interfaces, focusing on **performance**, **clean
                  architecture**, and **secure deployments**."
                </p>

                <div className="flex flex-wrap gap-3">
                  {/* Assuming SKILLS[0].items is your array of technologies */}
                  {[
                    'React.js',
                    'Node.js',
                    'Express',
                    'Supabase',
                    'MongoDB',
                    'TypeScript',
                    'Next.js',
                    'Tailwind',
                  ].map(skill => (
                    <div
                      key={skill}
                      className={`flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest px-6 py-4 rounded-2xl border transition-all cursor-default ${styles.mutedBg} ${styles.border} hover:bg-[#53a7f5] hover:text-white hover:border-[#53a7f5] hover:-translate-y-1`}
                    >
                      <Zap size={14} className="opacity-50" /> {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT PANEL: PERFORMANCE MONITOR --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div
              className={`h-full border rounded-[2.5rem] p-10 md:p-16 flex flex-col relative overflow-hidden transition-all duration-500 shadow-xl ${styles.cardBg} ${styles.border}`}
            >
              {/* Status Badge */}
              <div
                className={`absolute top-10 right-10 flex items-center gap-3 px-5 py-2.5 rounded-full border shadow-sm ${isDark ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'}`}
              >
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">
                  Deployment Optimal
                </span>
              </div>

              <div className="mb-auto pt-4">
                <div
                  className={`p-4 w-fit rounded-2xl mb-10 ${styles.mutedBg} ${styles.accentText}`}
                >
                  <BarChart3 size={32} />
                </div>
                <div
                  className={`text-[11px] font-bold uppercase tracking-[0.3em] mb-4 ${styles.subText}`}
                >
                  Lighthouse Performance
                </div>
                <div
                  className={`text-7xl md:text-8xl font-black tracking-tighter tabular-nums ${styles.text}`}
                >
                  <Counter value={100} suffix="%" />
                </div>
              </div>

              {/* Animated Data Visualization */}
              <div className="mt-14 space-y-6">
                <div
                  className={`flex items-end gap-1.5 h-36 border-b-2 pb-4 overflow-hidden ${styles.border}`}
                >
                  {[...Array(18)].map((_, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={barVariants}
                      animate="animate"
                      className={`flex-1 opacity-90 rounded-t-xl shadow-lg ${styles.barColor}`}
                    />
                  ))}
                </div>
                <div
                  className={`flex justify-between font-black text-[9px] uppercase tracking-[0.3em] opacity-40 ${styles.text}`}
                >
                  <div className="flex items-center gap-2">
                    <Globe size={12} /> Edge Delivery
                  </div>
                  <span>Latency: 12ms</span>
                  <span>Auto-Scaling</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- BOTTOM ROW: TELEMETRY STATS --- */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {[
              { id: '1', label: 'Projects Completed', val: 25, suffix: '+' },
              { id: '2', label: 'Satisfied Clients', val: 15, suffix: '+' },
              { id: '3', label: 'Years Experience', val: 2, suffix: '+' },
              { id: '4', label: 'Open Source', val: 10, suffix: '+' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative border rounded-[2.5rem] p-12 flex flex-col items-start justify-between min-h-[200px] overflow-hidden transition-all duration-500 shadow-md ${styles.cardBg} ${styles.border} hover:border-[#53a7f5]/40 hover:shadow-2xl hover:shadow-[#53a7f5]/5`}
              >
                <div className="absolute top-10 right-10 p-3.5 rounded-2xl bg-slate-500/5 opacity-30 group-hover:opacity-100 group-hover:text-[#53a7f5] transition-all">
                  <Activity size={20} />
                </div>

                <span
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${styles.subText} group-hover:text-[#53a7f5]`}
                >
                  Tele_0{idx + 1} // {stat.label}
                </span>

                <div className="w-full">
                  <div
                    className={`text-6xl md:text-7xl font-black mb-4 tracking-tighter tabular-nums group-hover:translate-x-1 transition-transform duration-500 ${styles.text}`}
                  >
                    <Counter value={stat.val} suffix={stat.suffix} />
                  </div>
                  <div
                    className={`h-[4px] w-16 transition-all duration-700 group-hover:w-full rounded-full ${isDark ? 'bg-white/10 group-hover:bg-[#53a7f5]' : 'bg-slate-200 group-hover:bg-[#53a7f5]'}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

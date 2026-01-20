import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Terminal, Activity } from 'lucide-react';
import { SKILLS, STATS } from '../constants';
import { SectionHeading, Counter } from './Shared';

export const Expertise: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  // Theme-specific styles config
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    text: isDark ? 'text-white' : 'text-neutral-900',
    subText: isDark ? 'text-neutral-400' : 'text-neutral-500',
    border: isDark ? 'border-white/10' : 'border-black/10',
    mutedBg: isDark ? 'bg-white/5' : 'bg-black/5',
    gridColor: isDark ? '#202020' : '#d4d4d4',
    barColor: isDark ? 'bg-[#d9ff00]' : 'bg-neutral-900', // Neon on dark, Black on light
    accentText: isDark ? 'text-[#d9ff00]' : 'text-black',
  };

  // Animation for the "Live" bars
  const barVariants = {
    animate: (i: number) => ({
      height: [20, 50, 30, 80, 40, 90, 20],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "linear",
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section id="expertise" className={`py-24 relative w-full overflow-hidden transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      {/* Glow Orb - Fainter in light mode */}
      <div className={`absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#d9ff00] rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-5' : 'opacity-[0.02]'}`} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="System Modules" subtitle="Capabilities" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16">
          
          {/* --- LEFT PANEL: ENGINEERING (Terminal Style) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group"
          >
            {/* Hover Glow */}
            <div className={`absolute inset-0 blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-10 ${isDark ? 'bg-[#d9ff00]' : 'bg-black'}`} />
            
            <div className={`relative h-full border rounded-2xl p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-300 ${styles.cardBg} ${styles.border} hover:border-[#d9ff00]/30`}>
              
              {/* Header */}
              <div className="flex justify-between items-start mb-10">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg ${styles.mutedBg} ${isDark ? 'text-[#d9ff00]' : 'text-black'}`}>
                            <Terminal size={24} />
                        </div>
                        <span className={`font-mono text-xs tracking-widest uppercase ${styles.subText}`}>/Src/Engineering</span>
                    </div>
                    <h3 className={`text-4xl md:text-5xl font-bold tracking-tight ${styles.text}`}>Full-Stack<br />Architecture</h3>
                </div>
                <Code2 className={`transition-colors ${isDark ? 'text-white/10 group-hover:text-[#d9ff00]/20' : 'text-black/5 group-hover:text-black/10'}`} size={80} />
              </div>

              {/* Skills Grid */}
              <div className="space-y-6">
                <div className={`text-sm leading-relaxed max-w-lg border-l-2 pl-4 ${styles.subText} ${isDark ? 'border-[#d9ff00]' : 'border-black'}`}>
                  Deploying ultra-scalable MERN ecosystems. Focus on clean architecture and sub-second latency.
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {SKILLS[0].items.map((s, i) => (
                    <div key={s} className={`flex items-center gap-2 text-xs font-mono px-3 py-2 rounded border transition-colors cursor-crosshair ${styles.mutedBg} ${styles.border} ${isDark ? 'text-white/70 hover:bg-[#d9ff00]/10 hover:border-[#d9ff00]/30 hover:text-[#d9ff00]' : 'text-black/70 hover:bg-black/10 hover:border-black/30 hover:text-black'}`}>
                        <span className={`opacity-50 ${isDark ? 'text-[#d9ff00]' : 'text-black'}`}>{`>`}</span> {s}
                    </div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT PANEL: LIVE MONITOR (Dashboard Style) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
             <div className={`h-full border rounded-2xl p-8 md:p-12 flex flex-col relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0f0f0f]' : 'bg-white'} ${styles.border}`}>
                
                {/* Status Badge */}
                <div className={`absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full border ${isDark ? 'bg-green-500/10 border-green-500/20' : 'bg-green-100 border-green-200'}`}>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">System Optimal</span>
                </div>

                <div className="mb-auto">
                    <div className={`p-3 w-fit rounded-lg mb-6 ${styles.mutedBg} ${isDark ? 'text-[#d9ff00]' : 'text-black'}`}>
                        <Cpu size={24} />
                    </div>
                    <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${styles.subText}`}>Core Performance</div>
                    <div className={`text-6xl md:text-7xl font-mono font-bold tracking-tighter tabular-nums ${styles.text}`}>
                        <Counter value={99} suffix="%" />
                    </div>
                </div>

                {/* Animated Frequency Visualizer */}
                <div className="mt-10 relative">
                    <div className={`flex items-end gap-1 h-32 border-b pb-2 overflow-hidden px-1 ${styles.border}`}>
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={barVariants}
                                animate="animate"
                                className={`flex-1 opacity-80 rounded-t-sm ${styles.barColor}`}
                            />
                        ))}
                    </div>
                    <div className={`flex justify-between mt-2 font-mono text-[9px] uppercase ${styles.subText}`}>
                        <span>00:00:01</span>
                        <span>Realtime Buffer</span>
                        <span>Auto-Scale</span>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* --- BOTTOM ROW: TELEMETRY STATS --- */}
          <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={stat.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative border p-6 md:p-8 flex flex-col items-start justify-between min-h-[160px] overflow-hidden transition-all duration-300 ${styles.cardBg} ${styles.border} hover:border-[#d9ff00]/50`}
              >
                 {/* Corner Accents */}
                 <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Activity size={14} className={isDark ? "text-[#d9ff00]" : "text-black"} />
                 </div>

                 <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-colors ${styles.subText} ${isDark ? 'group-hover:text-[#d9ff00]' : 'group-hover:text-black'}`}>
                    0{idx + 1} // {stat.label}
                 </span>
                 
                 <div className="relative z-10">
                    <div className={`text-4xl md:text-5xl font-bold mb-1 tracking-tighter tabular-nums group-hover:scale-105 transition-transform origin-left ${styles.text}`}>
                        <Counter value={parseInt(stat.value)} suffix={stat.suffix} prefix={stat.id === 'st4' ? '#' : ''} />
                    </div>
                    {/* Progress Bar Line */}
                    <div className={`h-0.5 w-10 transition-all duration-500 group-hover:w-full ${isDark ? 'bg-[#d9ff00]/30 group-hover:bg-[#d9ff00]' : 'bg-black/20 group-hover:bg-black'}`} />
                 </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
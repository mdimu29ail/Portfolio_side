import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { SectionHeading } from './Shared';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

export const Legacy: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  // Theme-specific styles config
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    text: isDark ? 'text-white' : 'text-neutral-900',
    subText: isDark ? 'text-neutral-400' : 'text-neutral-600',
    metaText: isDark ? 'text-white/30' : 'text-black/40',
    border: isDark ? 'border-white/10' : 'border-black/10',
    mutedBg: isDark ? 'bg-white/5' : 'bg-black/5',
    gridColor: isDark ? '#202020' : '#d4d4d4',
  };

  return (
    <section id="experience" className={`py-32 md:py-40 px-6 relative overflow-hidden w-full transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <SectionHeading title="Work Legacy" subtitle="System Logs" centered />
        
        <div className="relative mt-24">
          {/* Central Spine (Gradient Line) */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d9ff00]/30 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {EXPERIENCE.map((exp, i) => {
              const isEven = i % 2 === 0;
              
              return (
                <motion.div 
                  key={exp.id} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col lg:flex-row items-start lg:items-center relative ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Node (The Dot) - bg matches section bg to look "cut out" */}
                  <div className={`absolute left-4 lg:left-1/2 top-0 lg:top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#d9ff00] z-20 shadow-[0_0_10px_#d9ff00] transition-colors duration-500 ${styles.bg}`}>
                    <div className="absolute inset-0 bg-[#d9ff00] animate-ping opacity-20 rounded-full" />
                  </div>

                  {/* Horizontal Connector Line (Desktop Only) */}
                  <div className={`hidden lg:block absolute top-1/2 w-12 h-px bg-[#d9ff00]/30 ${isEven ? 'left-1/2' : 'right-1/2'}`} />

                  {/* Date Block */}
                  <div className={`lg:w-1/2 pl-12 lg:pl-0 flex flex-col mb-4 lg:mb-0 ${isEven ? 'lg:items-end lg:pr-20' : 'lg:items-start lg:pl-20'}`}>
                     <div className={`flex items-center gap-2 px-3 py-1 rounded-full border w-fit mb-2 ${styles.mutedBg} ${styles.border}`}>
                        <Calendar size={12} className="text-[#d9ff00]" />
                        <span className={`font-mono text-[10px] font-bold tracking-widest uppercase ${isDark ? 'text-white/70' : 'text-black/70'}`}>{exp.period}</span>
                     </div>
                  </div>

                  {/* Card Block */}
                  <div className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${isEven ? 'lg:pl-20' : 'lg:pr-20'}`}>
                     <div className={`group relative border p-8 rounded-xl transition-all duration-300 overflow-hidden ${styles.cardBg} ${styles.border} hover:border-[#d9ff00]/50 hover:shadow-[0_0_30px_rgba(217,255,0,0.1)]`}>
                        
                        {/* Hover Glow Effect */}
                        <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#d9ff00]/10 rounded-full blur-3xl group-hover:bg-[#d9ff00]/20 transition-all" />

                        {/* Company Header */}
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                           <div className={`w-10 h-10 rounded-lg border flex items-center justify-center text-[#d9ff00] group-hover:scale-110 transition-transform ${styles.mutedBg} ${styles.border}`}>
                              <Building2 size={18} />
                           </div>
                           <div>
                              <span className={`text-[9px] font-mono uppercase tracking-widest block mb-1 ${styles.metaText}`}>Organization</span>
                              <h4 className={`text-lg font-bold uppercase tracking-wider ${styles.text}`}>{exp.company}</h4>
                           </div>
                        </div>

                        {/* Role Title */}
                        <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors group-hover:text-[#d9ff00] ${styles.text}`}>
                           {exp.role}
                        </h3>

                        {/* Description */}
                        <p className={`text-sm mb-6 leading-relaxed border-l-2 pl-4 ${styles.subText} ${styles.border}`}>
                           {exp.description}
                        </p>

                        {/* Tech Highlights */}
                        <div className="flex flex-wrap gap-2">
                           {exp.highlights.map(h => (
                             <span key={h} className={`px-3 py-1 border rounded text-[9px] font-mono uppercase tracking-widest hover:text-[#d9ff00] hover:border-[#d9ff00]/30 transition-colors cursor-default ${styles.mutedBg} ${styles.border} ${isDark ? 'text-white/60' : 'text-neutral-500'}`}>
                                {h}
                             </span>
                           ))}
                        </div>

                        {/* Arrow Icon */}
                        <div className="absolute top-8 right-8 text-[#d9ff00]/20 group-hover:text-[#d9ff00] group-hover:translate-x-1 transition-all">
                            <ChevronRight size={20} />
                        </div>
                     </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
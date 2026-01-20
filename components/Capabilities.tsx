import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Rocket, ArrowRight, ShieldCheck, Cpu, Activity } from 'lucide-react';
// Assuming SERVICES is defined in your constants file
import { SERVICES } from '../constants'; 
import { SectionHeading } from './Shared';

export const Capabilities: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  // Theme-specific styles config
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    text: isDark ? 'text-white' : 'text-neutral-900',
    subText: isDark ? 'text-zinc-500' : 'text-neutral-600',
    border: isDark ? 'border-zinc-800' : 'border-black/10',
    iconBg: isDark ? 'bg-white/5' : 'bg-black/5',
    accent: isDark ? 'text-[#d9ff00]' : 'text-black', // Neon on dark, Black on light
    accentBorder: isDark ? 'group-hover:border-[#d9ff00]/50' : 'group-hover:border-black/30',
    gridColor: isDark ? '#202020' : '#d4d4d4',
    shadow: isDark ? 'shadow-none' : 'shadow-xl shadow-black/5',
    hoverShadow: isDark ? 'group-hover:shadow-[0_0_30px_rgba(217,255,0,0.1)]' : 'group-hover:shadow-2xl group-hover:shadow-black/10',
  };

  return (
    <section id="services" className={`py-24 md:py-32 xl:py-40 px-4 sm:px-6 relative overflow-hidden w-full transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle Gradient Spots */}
      <div className={`absolute top-0 right-0 w-1/3 h-full blur-[120px] pointer-events-none transition-opacity duration-500 ${isDark ? 'bg-[#d9ff00]/5' : 'bg-black/5'}`} />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <SectionHeading title="Strategic Core" subtitle="Solutions" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-16 md:mt-24">
          {SERVICES.map((s, i) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`
                group relative flex flex-col justify-between p-8 sm:p-10 md:p-12 min-h-[400px] md:min-h-[480px] rounded-2xl border transition-all duration-500
                ${styles.cardBg} ${styles.border} ${styles.accentBorder} ${styles.shadow} ${styles.hoverShadow}
              `}
            >
              {/* Top Section */}
              <div className="relative z-10">
                
                {/* Icon Container */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-8 md:mb-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${styles.iconBg} ${styles.accent}`}>
                  {i === 0 ? <Globe size={28} strokeWidth={1.5} className="md:w-8 md:h-8" /> : i === 1 ? <Layout size={28} strokeWidth={1.5} className="md:w-8 md:h-8" /> : <Rocket size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />}
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  {/* Meta Label */}
                  <div className="flex items-center gap-3">
                     <span className={`h-px w-6 md:w-8 transition-colors ${isDark ? 'bg-white/20 group-hover:bg-[#d9ff00]' : 'bg-black/20 group-hover:bg-black'}`} />
                     <span className={`text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.3em] transition-colors ${styles.subText} ${isDark ? 'group-hover:text-[#d9ff00]' : 'group-hover:text-black'}`}>
                       Protocol_0{i+1}
                     </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-[0.9] transition-colors ${styles.text}`}>
                    {s.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="relative z-10 mt-8 md:mt-10 space-y-6 md:space-y-8">
                <p className={`text-base md:text-lg font-light leading-relaxed ${styles.subText}`}>
                  {s.description}
                </p>
                
                <div className={`flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 md:translate-y-2 md:opacity-60 group-hover:opacity-100 group-hover:translate-y-0 ${styles.accent}`}>
                  <span>Initialize Scope</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* --- FOOTER: TRUST BADGE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mt-24 md:mt-32 pt-10 md:pt-12 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 ${styles.border}`}
        >
          {/* Compliance Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <ShieldCheck size={16} className={isDark ? "text-[#d9ff00]" : "text-black"} />
                <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] ${styles.text}`}>Security Standards</span>
            </div>
            <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] md:text-[10px] font-mono uppercase tracking-widest ${styles.subText}`}>
                <span>ISO/IEC 27001 Ready</span>
                <span className={`hidden md:block w-1 h-1 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />
                <span>AES-256 Encryption</span>
            </div>
          </div>

          {/* Status Indicators (Hidden on very small screens if needed, or wrap) */}
          <div className={`flex flex-wrap gap-x-8 gap-y-4 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40 ${styles.text}`}>
            <div className="flex items-center gap-2">
                <Activity size={12} /> Reliant
            </div>
            <div className="flex items-center gap-2">
                <ShieldCheck size={12} /> Secure
            </div>
            <div className="flex items-center gap-2">
                <Cpu size={12} /> Scaled
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
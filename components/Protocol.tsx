import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, CheckCircle, ArrowRight, GitCommit } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';
import { SectionHeading } from './Shared';

export const Protocol: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  // Theme-specific styles config
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    text: isDark ? 'text-white' : 'text-neutral-900',
    subText: isDark ? 'text-neutral-400' : 'text-neutral-600',
    border: isDark ? 'border-white/10' : 'border-black/10',
    iconBg: isDark ? 'bg-white/5' : 'bg-black/5',
    accent: isDark ? 'text-[#d9ff00]' : 'text-black', // Neon on dark, Black on light
    accentBg: isDark ? 'group-hover:bg-[#d9ff00]' : 'group-hover:bg-black',
    accentTextHover: isDark ? 'group-hover:text-black' : 'group-hover:text-white',
    borderHover: isDark ? 'group-hover:border-[#d9ff00]/50' : 'group-hover:border-black/30',
    gridColor: isDark ? '#202020' : '#d4d4d4',
    watermark: isDark ? 'text-white/[0.03]' : 'text-black/[0.03]',
    connector: isDark ? 'border-[#d9ff00]/20' : 'border-black/10',
  };

  return (
    <section id="protocol" className={`py-32 md:py-48 px-6 relative overflow-hidden w-full transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <SectionHeading title="Work Logic" subtitle="Execution Pipeline" centered />
        
        {/* Connection Line (Desktop) - Visualizes the flow */}
        <div className={`hidden lg:block absolute top-[55%] left-10 right-10 border-t border-dashed -z-10 ${styles.connector}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-20">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`
                p-8 md:p-10 border rounded-2xl group transition-all duration-500 relative overflow-hidden
                ${styles.cardBg} ${styles.border} ${styles.borderHover} hover:shadow-2xl
              `}
            >
              {/* Large Watermark Number */}
              <span className={`absolute -right-4 -bottom-8 text-[120px] font-black leading-none pointer-events-none transition-colors duration-500 ${styles.watermark}`}>
                0{i+1}
              </span>
              
              {/* Header Section */}
              <div className="flex justify-between items-start mb-16 relative z-10">
                 <div className="flex flex-col gap-2">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] ${styles.subText}`}>Step_0{i+1}</span>
                    <div className={`h-px w-8 transition-colors ${isDark ? 'bg-[#d9ff00]/50' : 'bg-black/50'}`} />
                 </div>
                 
                 {/* Icon Box */}
                 <div className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-300 ${styles.iconBg} ${styles.border} ${styles.accent} ${styles.accentBg} ${styles.accentTextHover}`}>
                    {i === 0 ? <Search size={22} /> : i === 1 ? <PenTool size={22} /> : i === 2 ? <Code size={22} /> : <CheckCircle size={22} />}
                 </div>
              </div>
              
              {/* Content Section */}
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold uppercase tracking-tight mb-4 transition-colors ${styles.text}`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed font-light transition-colors ${styles.subText}`}>
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (Mobile/Tablet only, or visual flare) */}
              {i < 3 && (
                <div className={`absolute -right-3 top-1/2 hidden lg:flex items-center justify-center w-8 h-8 rounded-full border bg-inherit z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 ${styles.border} ${styles.text}`}>
                  <ArrowRight size={14} />
                </div>
              )}
              
              {/* Bottom Progress Bar Effect */}
              <div className={`absolute bottom-0 left-0 h-1 transition-all duration-700 w-0 group-hover:w-full ${isDark ? 'bg-[#d9ff00]' : 'bg-black'}`} />
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER: FLOW INDICATOR --- */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`mt-20 flex justify-center items-center gap-4 text-[10px] font-mono uppercase tracking-widest ${styles.subText}`}
        >
            <GitCommit size={14} className={isDark ? "text-[#d9ff00]" : "text-black"} />
            <span>Workflow Initialized</span>
            <span className={`w-10 h-px ${styles.border.replace('border', 'bg')}`} />
            <span>Continuous Deployment</span>
        </motion.div>

      </div>
    </section>
  );
};
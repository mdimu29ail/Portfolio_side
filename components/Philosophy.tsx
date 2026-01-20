import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Wind } from 'lucide-react';

export const Philosophy: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  // Theme-specific styles config
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    text: isDark ? 'text-white' : 'text-neutral-900',
    subText: isDark ? 'text-neutral-400' : 'text-neutral-600',
    border: isDark ? 'border-white/10' : 'border-black/10',
    accent: isDark ? 'text-[#d9ff00]' : 'text-black', // Neon on dark, Black on light
    iconBg: isDark ? 'bg-white/5' : 'bg-black/5',
    // In dark mode, icon turns yellow on hover. In light mode, it turns black.
    iconHover: isDark ? 'group-hover:bg-[#d9ff00] group-hover:text-black' : 'group-hover:bg-black group-hover:text-white',
    gridColor: isDark ? '#202020' : '#d4d4d4',
    watermark: isDark ? 'text-white/[0.02]' : 'text-black/[0.02]',
    hoverBg: isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]',
    highlightLine: isDark ? 'bg-[#d9ff00]' : 'bg-black',
  };

  const items = [
    { 
      id: '01',
      icon: Atom,
      title: 'Atomic Architecture', 
      desc: 'Building complex systems from indestructible, reusable primitives for infinite scalability. Code that survives evolution.' 
    },
    { 
      id: '02',
      icon: Zap,
      title: 'Zero-Latency UX', 
      desc: 'Eliminating the distance between intent and action. Optimizing data flows to ensure interactions feel instantaneous.' 
    },
    { 
      id: '03',
      icon: Wind,
      title: 'Kinetic Narrative', 
      desc: 'Code should not just function; it should move, breathe, and react. Interfaces are living organisms, not static pages.' 
    }
  ];

  return (
    <section className={`py-24 md:py-40 px-6 relative w-full overflow-hidden transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
        <span className={`text-[20vw] font-black uppercase tracking-widest leading-none transition-colors duration-500 ${styles.watermark}`}>
          LOGIC
        </span>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className={`mb-24 border-b pb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 ${styles.border}`}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
               <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-[#d9ff00]' : 'bg-black'}`} />
               <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.3em] ${styles.accent}`}>Core_Value_System</span>
            </div>
            <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] ${styles.text}`}>
              Logic is <span className={`italic pr-2 ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#d9ff00] to-white/50' : 'text-black'}`}>Art.</span>
            </h2>
          </div>
          <p className={`text-sm font-mono uppercase tracking-widest max-w-xs text-right hidden md:block ${styles.subText}`}>
            Defining the principles<br/>of digital construction.
          </p>
        </div>

        {/* --- GRID CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`
                group relative flex flex-col gap-8 p-8 md:p-12 border-l transition-colors duration-500
                ${styles.border} ${styles.hoverBg}
                ${i === 2 ? 'border-r' : ''} /* Close right border on last item */
                ${i !== 0 ? 'md:border-l' : 'border-l'} /* Mobile borders */
              `}
            >
              {/* Hover Top Highlight Line */}
              <div className={`absolute top-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${styles.highlightLine}`} />

              {/* Number & Icon */}
              <div className="flex justify-between items-start">
                 <span className={`text-5xl font-black font-mono transition-colors ${isDark ? 'text-white/5 group-hover:text-white/10' : 'text-black/5 group-hover:text-black/10'}`}>
                   {p.id}
                 </span>
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${styles.iconBg} ${styles.accent} ${styles.iconHover}`}>
                    <p.icon size={20} />
                 </div>
              </div>

              {/* Text Content */}
              <div>
                <h4 className={`text-2xl font-bold uppercase tracking-tight mb-4 transition-colors ${styles.text} group-hover:${styles.accent}`}>
                  {p.title}
                </h4>
                <p className={`text-sm leading-relaxed font-light transition-colors ${styles.subText} ${isDark ? 'group-hover:text-white' : 'group-hover:text-black'}`}>
                  {p.desc}
                </p>
              </div>

              {/* Technical Footer */}
              <div className={`mt-auto pt-8 border-t flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity ${styles.border}`}>
                 <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-[#d9ff00]' : 'bg-black'}`} />
                 <span className={`text-[9px] font-mono uppercase tracking-widest ${styles.text}`}>Protocol Active</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
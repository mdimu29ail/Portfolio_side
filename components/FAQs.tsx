import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Terminal } from 'lucide-react';
import { FAQS } from '../constants';
import { SectionHeading } from './Shared';

export const FAQs: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [active, setActive] = useState<string | null>(null);
  const isDark = theme === 'dark';

  // Theme-specific styles config
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    activeCardBg: isDark ? 'bg-[#111]' : 'bg-white', // Slightly different on open?
    text: isDark ? 'text-white' : 'text-neutral-900',
    subText: isDark ? 'text-neutral-400' : 'text-neutral-600',
    border: isDark ? 'border-white/10' : 'border-black/10',
    activeBorder: isDark ? 'border-[#d9ff00]/50' : 'border-black/40',
    iconBg: isDark ? 'bg-white/5' : 'bg-black/5',
    activeIconBg: isDark ? 'bg-[#d9ff00] text-black' : 'bg-black text-white',
    accent: isDark ? 'text-[#d9ff00]' : 'text-black', // Neon on dark, Black on light
    gridColor: isDark ? '#202020' : '#d4d4d4',
  };

  return (
    <section id="faq" className={`py-24 md:py-48 px-6 relative overflow-hidden w-full transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />

      <div className="container max-w-4xl mx-auto relative z-10">
        <SectionHeading title="Rapid Queries" subtitle="System F.A.Q" centered />
        
        <div className="space-y-4 mt-16">
          {FAQS.map((faq, i) => {
            const isOpen = active === faq.id;

            return (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`
                  border rounded-xl overflow-hidden transition-all duration-300 group
                  ${styles.cardBg}
                  ${isOpen ? styles.activeBorder : styles.border}
                  ${isOpen ? 'shadow-lg' : 'hover:border-opacity-50'}
                `}
              >
                {/* --- ACCORDION HEADER --- */}
                <button 
                  onClick={() => setActive(isOpen ? null : faq.id)}
                  className="w-full p-6 md:p-8 flex items-start md:items-center justify-between text-left gap-6 relative"
                >
                  {/* Active Indicator Line (Left) */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${isOpen ? (isDark ? 'bg-[#d9ff00]' : 'bg-black') : 'bg-transparent'}`} />

                  <div className="flex items-start gap-4 md:gap-6">
                    <span className={`text-xs font-mono font-bold uppercase tracking-widest mt-1.5 md:mt-0 transition-colors ${isOpen ? styles.accent : styles.subText}`}>
                      0{i+1}
                    </span>
                    <h4 className={`text-lg md:text-xl font-bold uppercase tracking-tight transition-colors ${styles.text} ${isOpen ? '' : 'group-hover:opacity-80'}`}>
                      {faq.question}
                    </h4>
                  </div>

                  {/* Toggle Icon */}
                  <div className={`
                    shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500
                    ${isOpen ? styles.activeIconBg : `${styles.iconBg} ${styles.border} ${styles.text}`}
                  `}>
                    <div className="relative w-full h-full flex items-center justify-center">
                       <Plus size={18} className={`absolute transition-all duration-500 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                       <Minus size={18} className={`absolute transition-all duration-500 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                    </div>
                  </div>
                </button>

                {/* --- ACCORDION BODY --- */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className={`px-6 md:px-8 pb-8 pl-14 md:pl-20 border-t ${styles.border} ${isDark ? 'border-dashed' : ''}`}>
                         {/* Answer Content */}
                         <div className="pt-6 relative">
                            {/* Decorative Terminal Icon */}
                            <div className={`absolute top-6 -left-8 md:-left-10 opacity-30 ${styles.accent}`}>
                                <Terminal size={16} />
                            </div>
                            
                            <p className={`text-base md:text-lg leading-relaxed font-light ${styles.subText}`}>
                              {faq.answer}
                            </p>
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* --- BOTTOM HELP TEXT --- */}
        <div className={`mt-12 text-center flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity ${styles.text}`}>
           <HelpCircle size={20} />
           <p className="text-xs font-mono uppercase tracking-widest">
             Additional queries? Signal the <a href="#contact" className="underline underline-offset-4 font-bold">Communications Link</a>.
           </p>
        </div>
      </div>
    </section>
  );
};
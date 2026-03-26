import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';
import { FAQS } from '../constants';

export const FAQs: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [active, setActive] = useState<string | null>(null);
  const isDark = theme === 'dark';

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8fafc]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    text: isDark ? 'text-slate-100' : 'text-slate-900',
    subText: isDark ? 'text-slate-500' : 'text-slate-600',
    border: isDark ? 'border-white/5' : 'border-slate-200',
    accent: '#53a7f5',
    gridColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className={`py-24 md:py-40 px-6 relative overflow-hidden w-full transition-colors duration-700 ${styles.bg}`}
    >
      {/* --- SUBTLE BACKGROUND GRID --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center text-center gap-5 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-5 py-2 rounded-full border border-[#53a7f5]/20 bg-[#53a7f5]/5 backdrop-blur-md"
          >
            <HelpCircle size={14} className="text-[#53a7f5]" />
            <span className="text-[#53a7f5] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              Common Inquiries
            </span>
          </motion.div>
          <motion.h2
            id="faq-title"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black uppercase tracking-tighter ${styles.text}`}
          >
            Expert Insights<span className="text-[#53a7f5]">.</span>
          </motion.h2>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = active === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`
                  border rounded-[2rem] overflow-hidden transition-all duration-500
                  ${isOpen ? `border-[#53a7f5]/30 shadow-2xl shadow-[#53a7f5]/5 ${isDark ? 'bg-[#0f0f0f]' : 'bg-white'}` : `${styles.cardBg} ${styles.border}`}
                `}
              >
                <button
                  onClick={() => setActive(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-6 md:p-10 flex items-center justify-between text-left gap-6 group"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span
                      className={`text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${isOpen ? 'text-[#53a7f5]' : 'opacity-20'}`}
                    >
                      0{i + 1}
                    </span>
                    <h4
                      className={`text-lg md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? styles.text : 'opacity-60 group-hover:opacity-100'}`}
                    >
                      {faq.question}
                    </h4>
                  </div>

                  {/* Dynamic Toggle Icon */}
                  <div
                    className={`
                    shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500
                    ${isOpen ? 'bg-[#53a7f5] border-[#53a7f5] text-white shadow-lg' : `${styles.border} ${styles.text} opacity-40 group-hover:opacity-100`}
                  `}
                  >
                    {isOpen ? (
                      <Minus size={20} strokeWidth={3} />
                    ) : (
                      <Plus size={20} strokeWidth={3} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-10 pb-10 pl-20 md:pl-32">
                        <div
                          className={`pt-6 border-t ${styles.border} relative`}
                        >
                          <p
                            className={`text-base md:text-xl leading-relaxed font-medium ${styles.subText}`}
                          >
                            {faq.answer}
                          </p>

                          {/* Call to Action Inside FAQ */}
                          <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#53a7f5] opacity-0 animate-in fade-in slide-in-from-left-2 duration-700 delay-300 fill-mode-forwards">
                            <span>Learn more about this protocol</span>
                            <ChevronRight size={14} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* --- FOOTER CALL TO ACTION --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mt-16 text-center flex flex-col items-center gap-4 py-8 rounded-[2.5rem] border border-dashed ${styles.border}`}
        >
          <div className="w-12 h-12 rounded-2xl bg-[#53a7f5]/10 flex items-center justify-center text-[#53a7f5]">
            <MessageCircle size={24} />
          </div>
          <p
            className={`text-[11px] font-bold uppercase tracking-[0.2em] ${styles.text} opacity-60`}
          >
            Still have questions?{' '}
            <a
              href="#contact"
              className="text-[#53a7f5] underline underline-offset-8 hover:opacity-80 transition-opacity"
            >
              Contact the Inquiry Desk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

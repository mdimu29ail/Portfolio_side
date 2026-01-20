import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { SectionHeading } from './Shared';
import { Quote, MessageSquare } from 'lucide-react';

export const Testimonials: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
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
    accentBorder: isDark ? 'group-hover:border-[#d9ff00]/50' : 'group-hover:border-black/30',
    gridColor: isDark ? '#202020' : '#d4d4d4',
    quoteIcon: isDark ? 'text-white/5' : 'text-black/5',
    ratingDot: isDark ? 'bg-[#d9ff00] shadow-[#d9ff00]' : 'bg-black shadow-black/20',
  };

  // Triple the items for smooth infinite loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className={`py-24 md:py-40 relative overflow-hidden w-full transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      {/* Side Vignettes to fade marquee in/out */}
      <div className={`absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r ${isDark ? 'from-[#050505] to-transparent' : 'from-[#f0f0f0] to-transparent'}`} />
      <div className={`absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l ${isDark ? 'from-[#050505] to-transparent' : 'from-[#f0f0f0] to-transparent'}`} />

      <div className="container max-w-7xl mx-auto mb-16 relative z-10 px-6">
        <SectionHeading title="System Feedback" subtitle="User Sync" centered />
      </div>

      <div className="relative flex overflow-hidden w-full z-0">
        {/* The Marquee Container */}
        <div className="flex animate-marquee gap-6 md:gap-8 py-4 px-4">
          {marqueeItems.map((t, i) => (
            <div 
              key={`${t.id}-${i}`}
              className={`
                relative flex flex-col justify-between p-8 md:p-10 
                min-h-[350px] w-[350px] md:w-[450px] shrink-0 
                rounded-2xl border transition-all duration-300 group
                ${styles.cardBg} ${styles.border} ${styles.accentBorder} hover:shadow-xl
              `}
            >
              {/* Background Quote Icon */}
              <div className={`absolute top-6 right-8 transition-colors ${styles.quoteIcon} group-hover:opacity-20`}>
                <Quote size={60} fill="currentColor" />
              </div>

              {/* Header: Avatar & Info */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                 <div className={`w-14 h-14 rounded-xl overflow-hidden border p-1 transition-colors ${styles.border} ${isDark ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                   <img 
                     src={t.avatar} 
                     className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500" 
                     alt={t.name} 
                   />
                 </div>
                 <div>
                    <h4 className={`text-lg font-bold uppercase tracking-tight ${styles.text}`}>{t.name}</h4>
                    <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-green-500' : 'bg-green-600'}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${styles.accent}`}>
                            {t.role}
                        </span>
                    </div>
                 </div>
              </div>

              {/* Content */}
              <p className={`text-lg md:text-xl font-medium leading-relaxed italic relative z-10 mb-8 ${styles.subText} group-hover:${styles.text} transition-colors`}>
                "{t.content}"
              </p>

              {/* Footer: Rating "Status Lights" */}
              <div className={`mt-auto pt-6 border-t flex items-center justify-between ${styles.border}`}>
                <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map(star => (
                    <div key={star} className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)] ${styles.ratingDot}`} />
                    ))}
                </div>
                <div className={`flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-40 ${styles.text}`}>
                    <MessageSquare size={12} />
                    <span>Verified Log</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};
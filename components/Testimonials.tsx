import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import {
  Quote,
  Star,
  CheckCircle2,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface MarqueeRowProps {
  items: typeof TESTIMONIALS;
  direction: 'left' | 'right';
  speed: number;
  themeStyles: any;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction,
  speed,
  themeStyles,
}) => {
  const tripleItems = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden w-full py-4 select-none">
      <motion.div
        initial={{ x: direction === 'right' ? '-50%' : '0%' }}
        animate={{ x: direction === 'right' ? '0%' : '-50%' }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        className="flex gap-6 px-3"
      >
        {tripleItems.map((t, i) => (
          <div
            key={`${t.id}-${i}`}
            className={`
              relative flex flex-col justify-between p-8 md:p-10 
              min-h-[320px] w-[350px] md:w-[450px] shrink-0 
              rounded-[2.5rem] border transition-all duration-500 group
              ${themeStyles.cardBg} ${themeStyles.border} hover:border-[#53a7f5]/40 hover:shadow-2xl hover:shadow-[#53a7f5]/5
            `}
          >
            {/* Context Header */}
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#53a7f5]/20 p-0.5 bg-white/5">
                <img
                  src={t.avatar}
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt={t.name}
                />
              </div>
              <div className="flex flex-col">
                <h4
                  className={`text-base font-black uppercase tracking-tight ${themeStyles.text}`}
                >
                  {t.name}
                </h4>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={10} className="text-emerald-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#53a7f5]">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial Text */}
            <p
              className={`text-base md:text-lg leading-relaxed font-medium italic mb-8 whitespace-normal ${themeStyles.subText}`}
            >
              "{t.content}"
            </p>

            {/* Quality Logic Footer */}
            <div
              className={`mt-auto pt-6 border-t border-dashed ${themeStyles.border} flex items-center justify-between`}
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    size={12}
                    fill="#53a7f5"
                    className="text-[#53a7f5]"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 opacity-30">
                <Sparkles size={10} className="text-[#53a7f5]" />
                <span className="text-[8px] font-black uppercase tracking-[0.2em]">
                  Verified Feedback
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials: React.FC<{ theme: 'dark' | 'light' }> = ({
  theme,
}) => {
  const isDark = theme === 'dark';

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8fafc]',
    cardBg: isDark ? 'bg-[#0a0a0a]/60 backdrop-blur-xl' : 'bg-white',
    text: isDark ? 'text-slate-100' : 'text-slate-900',
    subText: isDark ? 'text-slate-500' : 'text-slate-600',
    border: isDark ? 'border-white/5' : 'border-slate-200',
  };

  // Divide testimonials for variety across rows if you have many, or use same list
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={`py-24 md:py-40 relative overflow-hidden w-full transition-colors duration-700 ${styles.bg}`}
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#53a7f5]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Header Block */}
      <div className="container max-w-7xl mx-auto px-6 relative z-10 mb-20 text-center">
        <div className="flex flex-col items-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-5 py-2 rounded-full border border-[#53a7f5]/20 bg-[#53a7f5]/5 backdrop-blur-md"
          >
            <MessageSquare size={14} className="text-[#53a7f5]" />
            <span className="text-[#53a7f5] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              Trusted Partnerships
            </span>
          </motion.div>
          <h2
            id="testimonials-heading"
            className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${styles.text}`}
          >
            Client Insights<span className="text-[#53a7f5]">.</span>
          </h2>
        </div>
      </div>

      {/* --- TRIPLE ROW MARQUEE --- */}
      <div className="relative flex flex-col gap-2 w-full group">
        {/* Row 1: Left to Right */}
        <MarqueeRow
          items={TESTIMONIALS}
          direction="right"
          speed={50}
          themeStyles={styles}
        />

        {/* Row 2: Right to Left */}
        <MarqueeRow
          items={TESTIMONIALS}
          direction="left"
          speed={40}
          themeStyles={styles}
        />

        {/* Row 3: Left to Right */}
        <MarqueeRow
          items={TESTIMONIALS}
          direction="right"
          speed={60}
          themeStyles={styles}
        />

        {/* Cinematic Side Vignettes */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-24 md:w-64 z-10 pointer-events-none bg-gradient-to-r ${isDark ? 'from-[#050505] to-transparent' : 'from-[#f8fafc] to-transparent'}`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-24 md:w-64 z-10 pointer-events-none bg-gradient-to-l ${isDark ? 'from-[#050505] to-transparent' : 'from-[#f8fafc] to-transparent'}`}
        />
      </div>

      {/* Standard Pause on Hover */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .group:hover .flex { animation-play-state: paused !important; }
      `,
        }}
      />
    </section>
  );
};

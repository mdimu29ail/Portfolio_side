import React from 'react';
import { motion } from 'framer-motion';

const TECH_STACK = [
  'React.js',
  'Node.js',
  'MongoDB',
  'Express',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Firebase',
  'Framer Motion',
  'PostgreSQL',
  'Supabase',
];

const SPECIALTIES = [
  'Full-Stack',
  'UI/UX Design',
  'API Architecture',
  'Scalable Apps',
  'Performance Opt',
  'Clean Code',
  'MERN Stack',
  'Backend Systems',
];

interface MarqueeRowProps {
  items: string[];
  direction: 'left' | 'right';
  speed: number;
  isDark: boolean;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction,
  speed,
  isDark,
}) => {
  const scrollTransition = {
    ease: 'linear',
    duration: speed,
    repeat: Infinity,
  };

  return (
    <div className="flex overflow-hidden whitespace-nowrap py-2 sm:py-4">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={scrollTransition}
        className="flex gap-8 md:gap-16 items-center px-4"
      >
        {/* Render items twice for a perfect loop */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8 md:gap-16 group">
            <span
              aria-hidden={index >= items.length}
              className={`text-[8vw] md:text-[5vw] font-black uppercase tracking-tighter transition-all duration-500
                ${
                  index % 2 === 0
                    ? isDark
                      ? 'text-white/10 hover:text-[#53a7f5]'
                      : 'text-black/5 hover:text-[#53a7f5]'
                    : 'text-transparent border-text'
                }
              `}
              style={{
                WebkitTextStroke: `1px ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              }}
            >
              {item}
            </span>
            <div
              className={`w-2 h-2 rounded-full ${isDark ? 'bg-[#53a7f5]/20' : 'bg-black/5'}`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TechMarquee: React.FC<{ theme: 'dark' | 'light' }> = ({
  theme,
}) => {
  const isDark = theme === 'dark';

  return (
    <section
      className={`relative py-10 md:py-20 overflow-hidden border-y transition-colors duration-700
        ${isDark ? 'bg-[#050505] border-white/5' : 'bg-white border-slate-100'}
      `}
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#53a7f5]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Row 1: Left Movement */}
      <MarqueeRow
        items={TECH_STACK}
        direction="left"
        speed={30}
        isDark={isDark}
      />

      {/* Row 2: Right Movement */}
      <MarqueeRow
        items={SPECIALTIES}
        direction="right"
        speed={25}
        isDark={isDark}
      />

      <style jsx global>{`
        .border-text:hover {
          -webkit-text-stroke: 1px #53a7f5 !important;
          color: #53a7f5 !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

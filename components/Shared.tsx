import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// --- TEXT REVEAL ANIMATION ---
export const RevealText: React.FC<{ children: string; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => (
  <div className={`overflow-hidden inline-block align-bottom ${className}`}>
    <motion.span
      initial={{ y: "110%", rotate: 2 }}
      whileInView={{ y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay }}
      className="block will-change-transform"
    >
      {children}
    </motion.span>
  </div>
);

// --- ANIMATED COUNTER ---
export const Counter: React.FC<{ value: number; suffix?: string; prefix?: string }> = ({ value, suffix = "", prefix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  );
};

// --- MAGNETIC BUTTON WRAPPER ---
export const Magnetic: React.FC<{ children: React.ReactNode; strength?: number }> = ({ children, strength = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPos({ x: (e.clientX - (left + width/2)) * strength, y: (e.clientY - (top + height/2)) * strength });
  };

  return (
    <motion.div 
      ref={ref} 
      onMouseMove={move} 
      onMouseLeave={() => setPos({x:0, y:0})} 
      animate={{ x: pos.x, y: pos.y }} 
      transition={{ type: 'spring', damping: 15, stiffness: 150, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

// --- SECTION HEADING (THEMED) ---
export const SectionHeading: React.FC<{ title: string; subtitle: string; centered?: boolean; theme?: 'dark' | 'light' }> = ({ title, subtitle, centered, theme = 'dark' }) => {
  const isDark = theme === 'dark';
  
  return (
    <div className={`container max-w-7xl mx-auto mb-16 md:mb-24 ${centered ? 'flex flex-col items-center text-center' : 'text-left'}`}>
      
      {/* Subtitle / Tagline */}
      <div className={`flex items-center gap-4 mb-6 md:mb-8 ${centered ? 'justify-center' : ''}`}>
        <div className="w-8 md:w-12 h-px bg-[#d9ff00] shadow-[0_0_8px_#d9ff00]" />
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#d9ff00] drop-shadow-sm">
          {subtitle}
        </span>
      </div>

      {/* Main Title */}
      <h2 className={`text-[1.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.5vw] font-black uppercase leading-[0.9] tracking-tight break-words max-w-full ${isDark ? 'text-white' : 'text-neutral-900'}`}>
        {title.split(' ').map((word, i) => (
          <span key={i} className={`inline-block mr-3 md:mr-6 ${i % 2 !== 0 ? 'text-[#d9ff00]' : ''}`}>
            {/* We apply italic style to the highlighted word for that "Editorial" feel */}
            <span className={i % 2 !== 0 ? 'italic font-serif font-light' : ''}>
               <RevealText delay={i * 0.1}>{word}</RevealText>
            </span>
          </span>
        ))}
      </h2>
    </div>
  );
};
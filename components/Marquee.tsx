import React from 'react';

const TECH = ['MongoDB', 'Express', 'React', 'Node.js', 'Next.js', 'Typescript', 'Framer Motion', 'PostgreSQL', 'Tailwind', 'Docker', 'AWS', 'Redis'];

export const TechMarquee: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`py-12 sm:py-16 md:py-24 border-y relative overflow-hidden w-full transition-colors duration-500 ${isDark ? 'bg-[#050505] border-white/5' : 'bg-[#f0f0f0] border-black/5'}`}>
      
      {/* --- BACKGROUND --- */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${isDark ? '#202020' : '#d4d4d4'} 1px, transparent 1px), linear-gradient(to bottom, ${isDark ? '#202020' : '#d4d4d4'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />

      {/* --- MARQUEE CONTENT --- */}
      <div className="relative z-10 flex whitespace-nowrap overflow-hidden select-none">
        <div className="flex animate-marquee items-center min-w-full">
          
          {/* List rendered 3 times for seamless looping */}
          {[...TECH, ...TECH, ...TECH].map((item, j) => (
            <div key={j} className="flex items-center gap-6 sm:gap-8 md:gap-16 lg:gap-20 mx-2 sm:mx-4 md:mx-10 group">
              
              {/* Text Item - Responsive Text Sizes */}
              <span 
                className={`text-[14vw] sm:text-[12vw] md:text-[8vw] xl:text-[6vw] font-black uppercase italic tracking-tighter transition-all duration-300 cursor-default
                ${isDark 
                  ? 'text-white/5 hover:text-[#d9ff00] hover:shadow-[0_0_40px_rgba(217,255,0,0.3)]' 
                  : 'text-black/5 hover:text-black hover:scale-105'
                }`}
                style={{ WebkitTextStroke: isDark ? '0px' : '0px' }}
              >
                {item}
              </span>
              
              {/* Separator - Responsive Sizes */}
              <div 
                className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rotate-45 border transition-colors duration-300
                ${isDark ? 'border-[#d9ff00]/20 group-hover:bg-[#d9ff00]' : 'border-black/10 group-hover:bg-black'}`} 
              />
            </div>
          ))}

        </div>
      </div>
      
      {/* --- CSS ANIMATION --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 20s; /* Faster on mobile */
          }
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};
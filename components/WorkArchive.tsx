import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';
// Assuming PROJECTS is defined in your constants file
import { PROJECTS } from '../constants'; 
import { SectionHeading, Magnetic } from './Shared';

export const WorkArchive: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  // Theme-specific styles config matching the Archive Protocol
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    text: isDark ? 'text-zinc-200' : 'text-neutral-900',
    heading: isDark ? 'text-white' : 'text-black',
    subText: isDark ? 'text-zinc-500' : 'text-neutral-600',
    border: isDark ? 'border-zinc-800' : 'border-black/10',
    cardBg: isDark ? 'bg-[#111]' : 'bg-white',
    tagBg: isDark ? 'bg-zinc-900/50' : 'bg-black/5',
    accent: '#d9ff00', 
    highlight: isDark ? 'text-[#d9ff00]' : 'text-black',
    gridColor: isDark ? '#202020' : '#d4d4d4',
  };

  return (
    <section id="work" className={`py-24 md:py-32 xl:py-48 px-4 sm:px-6 relative overflow-hidden w-full transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <SectionHeading title="Selected Creations" subtitle="Project Archive" />
        
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-40 mt-16 md:mt-24">
          {PROJECTS.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              // Alternate Layout: Image Left / Text Right vs Image Right / Text Left
              className={`flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-28 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* --- IMAGE BLOCK --- */}
              <div className="lg:w-3/5 w-full relative group perspective-1000">
                {/* Decorative Frame Elements */}
                <div className={`absolute -inset-2 md:-inset-3 border ${styles.border} rounded-[1.5rem] z-0 group-hover:border-[#d9ff00]/50 transition-colors duration-500`} />
                <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-[#d9ff00]/50 -translate-x-1 -translate-y-1 z-20" />
                <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-[#d9ff00]/50 translate-x-1 translate-y-1 z-20" />

                {/* Main Image Container */}
                <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl ${styles.cardBg} border ${styles.border} shadow-2xl group-hover:shadow-[0_0_40px_rgba(217,255,0,0.15)] transition-all duration-500 z-10`}>
                  
                  {/* Status Overlay */}
                  <div className={`absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 backdrop-blur-md border rounded-full shadow-lg ${isDark ? 'bg-black/80 border-white/10' : 'bg-white/90 border-black/10'}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-black'}`}>System Online</span>
                  </div>

                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    src={p.image} 
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isDark ? 'opacity-80 group-hover:opacity-100' : 'opacity-90 group-hover:opacity-100'}`}
                    alt={p.title} 
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t opacity-60 pointer-events-none ${isDark ? 'from-black/80 via-transparent' : 'from-white/60 via-transparent'}`} />
                </div>
              </div>

              {/* --- TEXT BLOCK --- */}
              <div className="lg:w-2/5 flex flex-col items-start w-full">
                 
                 {/* Index Number */}
                 <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <span className="text-[#d9ff00] text-xs font-mono font-bold tracking-widest">
                        0{i+1} <span className="opacity-50 mx-1">//</span> PROJECT
                    </span>
                    <div className="h-px w-12 bg-[#d9ff00]/40" />
                 </div>
                 
                 {/* Title - Responsive Typography */}
                 <h3 className={`text-[1.3rem] sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 md:mb-6 leading-[0.95] ${styles.heading}`}>
                   {p.title}
                 </h3>
                 
                 {/* Description */}
                 <p className={`text-base sm:text-lg mb-8 md:mb-10 leading-relaxed font-light ${styles.subText}`}>
                   {p.description}
                 </p>

                 {/* Tech Stack Tags */}
                 <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
                    {p.tech.map(t => (
                      <span key={t} className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 ${styles.tagBg} border ${styles.border} rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest hover:border-[#d9ff00]/50 hover:text-[#d9ff00] transition-colors cursor-default ${isDark ? 'text-zinc-400' : 'text-neutral-600'}`}>
                         <Code size={10} className="opacity-50" /> {t}
                      </span>
                    ))}
                 </div>

                 {/* Action Buttons */}
                 <div className="flex flex-wrap gap-4 sm:gap-6">
                    <Magnetic strength={0.3}>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 sm:gap-4 cursor-pointer">
                        {/* Live Demo Button */}
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-transform duration-300 shadow-[0_0_20px_rgba(217,255,0,0.3)] group-hover:scale-110 ${isDark ? 'bg-[#d9ff00] text-black' : 'bg-black text-[#d9ff00]'}`}>
                           <ExternalLink size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xs font-bold uppercase tracking-widest group-hover:text-[#d9ff00] transition-colors ${styles.text}`}>Live Demo</span>
                            <span className={`text-[9px] font-mono uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-neutral-400'}`}>Deploy_v1.0</span>
                        </div>
                      </a>
                    </Magnetic>

                    <Magnetic strength={0.3}>
                      <a href="#" className="group flex items-center gap-3 sm:gap-4 cursor-pointer">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${isDark ? 'border-zinc-700 bg-zinc-900 text-white group-hover:bg-white group-hover:text-black' : 'border-zinc-300 bg-zinc-100 text-black group-hover:bg-black group-hover:text-white'}`}>
                           <Github size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xs font-bold uppercase tracking-widest group-hover:text-[#d9ff00] transition-colors ${styles.text}`}>Source</span>
                            <span className={`text-[9px] font-mono uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-neutral-400'}`}>Repository</span>
                        </div>
                      </a>
                    </Magnetic>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
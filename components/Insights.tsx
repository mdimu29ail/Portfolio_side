import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag, ChevronRight } from 'lucide-react';
// Assuming BLOG_POSTS is defined in your constants file
import { BLOG_POSTS } from '../constants';
import { SectionHeading } from './Shared';

export const Insights: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const isDark = theme === 'dark';

  // Theme-specific styles config
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    cardHover: isDark ? 'hover:bg-[#0a0a0a]' : 'hover:bg-white',
    text: isDark ? 'text-zinc-200' : 'text-neutral-900',
    subText: isDark ? 'text-zinc-500' : 'text-neutral-600',
    border: isDark ? 'border-zinc-800' : 'border-black/10',
    accent: isDark ? 'text-[#d9ff00]' : 'text-black', // Neon on dark, Black on light
    buttonGroup: isDark ? 'group-hover:bg-[#d9ff00] group-hover:text-black' : 'group-hover:bg-black group-hover:text-white',
    gridColor: isDark ? '#202020' : '#d4d4d4',
  };

  return (
    <section id="journal" className={`py-24 md:py-32 xl:py-48 px-4 sm:px-6 relative overflow-hidden w-full transition-colors duration-500 ${styles.bg}`}>
      
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
        <SectionHeading title="Knowledge Stream" subtitle="System Logs" />
        
        <div className={`flex flex-col border-t mt-16 md:mt-24 ${styles.border}`}>
          {BLOG_POSTS.map((post, i) => (
            <motion.a
              key={post.id} 
              href="#"
              onMouseEnter={() => setHovered(post.id)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`
                relative py-10 sm:py-12 md:py-16 border-b flex flex-col md:flex-row justify-between items-start md:items-center group transition-all duration-500 cursor-pointer
                ${styles.border} ${styles.cardHover} md:hover:px-10
              `}
            >
              
              {/* --- FLOATING PREVIEW IMAGE (Desktop Only) --- */}
              <AnimatePresence>
                {hovered === post.id && (
                  <motion.div 
                    initial={{ opacity: 0, x: 50, scale: 0.9, rotate: 2 }}
                    animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, x: 20, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="absolute right-20 xl:right-32 top-1/2 -translate-y-1/2 w-[280px] h-[180px] xl:w-[350px] xl:h-[220px] pointer-events-none z-20 hidden lg:block"
                  >
                     <div className={`w-full h-full p-2 border bg-black/50 backdrop-blur-md rounded-xl ${styles.border} shadow-2xl`}>
                        <div className="w-full h-full overflow-hidden rounded-lg relative">
                            <img src={post.image} className="w-full h-full object-cover grayscale" alt="Preview" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                            <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#d9ff00] animate-pulse" />
                                PREVIEW_MODE
                            </div>
                        </div>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* --- LEFT CONTENT --- */}
              <div className="flex items-start gap-6 md:gap-12 relative z-10 w-full md:w-auto">
                 
                 {/* Index Number */}
                 <span className={`text-lg md:text-xl font-mono font-bold opacity-30 transition-colors group-hover:opacity-100 mt-1 md:mt-2 ${styles.accent}`}>
                    0{i+1}
                 </span>
                 
                 <div className="flex flex-col gap-3 md:gap-4 flex-1">
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6">
                       <div className={`flex items-center gap-2 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-colors ${styles.accent}`}>
                          <Tag size={12} />
                          <span>{post.category}</span>
                       </div>
                       <div className={`flex items-center gap-2 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.2em] ${styles.subText}`}>
                          <Calendar size={12} />
                          <span>{post.date}</span>
                       </div>
                    </div>

                    {/* Title */}
                    <h4 className={`text-[1.3rem] sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.95] md:leading-[0.9] transition-transform duration-500 group-hover:translate-x-2 ${styles.text}`}>
                      {post.title}
                    </h4>
                 </div>
              </div>

              {/* --- RIGHT ACTION --- */}
              <div className="mt-6 md:mt-0 relative z-10 self-end md:self-center ml-auto md:ml-0">
                 <div className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-500
                    ${styles.border} ${styles.buttonGroup}
                 `}>
                    <ArrowUpRight size={20} className="md:w-7 md:h-7 transition-transform duration-500 group-hover:rotate-45" />
                 </div>
              </div>

            </motion.a>
          ))}
        </div>

        {/* --- FOOTER LINK --- */}
        <div className="mt-16 md:mt-24 text-center">
            <a href="#" className={`inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest hover:underline underline-offset-4 decoration-[#d9ff00] ${styles.text}`}>
                Access Full Archive <ChevronRight size={14} className={isDark ? "text-[#d9ff00]" : "text-black"} />
            </a>
        </div>
      </div>
    </section>
  );
};
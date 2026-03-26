import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, ArrowUpRight, Server } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Magnetic } from './Shared';

export const WorkArchive: React.FC<{ theme: 'dark' | 'light' }> = ({
  theme,
}) => {
  const isDark = theme === 'dark';

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8fafc]',
    text: isDark ? 'text-slate-100' : 'text-slate-900',
    subText: isDark ? 'text-slate-400' : 'text-slate-600',
    border: isDark ? 'border-white/5' : 'border-slate-200',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    tagBg: isDark ? 'bg-white/5' : 'bg-slate-100',
    accent: '#53a7f5',
    gridColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className={`py-24 md:py-32 lg:py-48 px-6 relative overflow-hidden w-full transition-colors duration-700 ${styles.bg}`}
    >
      {/* --- BACKGROUND PATTERN --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-start gap-4 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#53a7f5]/20 bg-[#53a7f5]/5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#53a7f5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#53a7f5]"></span>
            </span>
            <span className="text-[#53a7f5] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              Selected Creations
            </span>
          </motion.div>

          <motion.h2
            id="work-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${styles.text}`}
          >
            Engineered Solutions<span className="text-[#53a7f5]">.</span>
          </motion.h2>
        </div>

        {/* --- PROJECTS LIST --- */}
        <div className="flex flex-col gap-32 lg:gap-52">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* --- VISUAL DISPLAY BLOCK --- */}
              <div className="lg:w-3/5 w-full relative group">
                <div className="absolute -inset-4 border border-[#53a7f5]/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 pointer-events-none" />
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-[2rem] ${styles.cardBg} border ${styles.border} shadow-2xl z-10`}
                >
                  <div className="absolute top-6 left-6 z-30 flex items-center gap-3 px-4 py-2 backdrop-blur-xl border border-white/10 rounded-2xl bg-black/40">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">
                      Production Ready
                    </span>
                  </div>

                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={p.image}
                    className="w-full h-full object-cover transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0"
                    alt={`${p.title} Preview`}
                  />

                  <div className="absolute inset-0 bg-[#53a7f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[3px]">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-8 py-3 rounded-full font-black uppercase text-[11px] tracking-widest shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      Explore Case Study <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* --- CONTENT INFORMATION BLOCK --- */}
              <div className="lg:w-2/5 flex flex-col items-start w-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#53a7f5] text-[10px] font-black tracking-[0.4em] uppercase">
                    0{i + 1} // ARCHIVE
                  </span>
                  <div className="h-px w-12 bg-[#53a7f5]/30" />
                </div>

                <h3
                  className={`text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 leading-none break-words w-full ${styles.text}`}
                >
                  {p.title.replace(/_/g, ' ')}
                </h3>

                <p className="text-[#53a7f5] text-sm md:text-base font-bold uppercase tracking-[0.1em] mb-6">
                  {p.subtitle}
                </p>

                <p
                  className={`text-lg md:text-xl mb-10 leading-relaxed font-medium ${styles.subText}`}
                >
                  {p.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2.5 mb-12">
                  {p.tech.map(tech => (
                    <span
                      key={tech}
                      className={`flex items-center gap-2 px-4 py-2 ${styles.tagBg} border ${styles.border} rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-[#53a7f5] hover:text-white hover:border-[#53a7f5] cursor-default ${styles.text}`}
                    >
                      <div className="w-1 h-1 rounded-full bg-[#53a7f5]" />{' '}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Hub */}
                <div className="flex flex-wrap gap-x-8 gap-y-6">
                  {/* Live Demo Button */}
                  <Magnetic strength={0.3}>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live site"
                      className="group flex items-center gap-4 cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl shadow-[#53a7f5]/20 bg-[#53a7f5] text-white group-hover:scale-110 group-hover:rotate-6">
                        <Globe size={22} />
                      </div>
                      <div className="flex flex-col">
                        <span
                          className={`text-[11px] font-black uppercase tracking-widest group-hover:text-[#53a7f5] transition-colors ${styles.text}`}
                        >
                          Interface
                        </span>
                        <span className="text-[9px] font-bold uppercase opacity-40">
                          Live Demo
                        </span>
                      </div>
                    </a>
                  </Magnetic>

                  {/* Client Repo Button */}
                  <Magnetic strength={0.3}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View frontend code"
                      className="group flex items-center gap-4 cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500 ${styles.border} ${styles.cardBg} group-hover:bg-slate-900 group-hover:text-white`}
                      >
                        <Github size={22} />
                      </div>
                      <div className="flex flex-col">
                        <span
                          className={`text-[11px] font-black uppercase tracking-widest group-hover:text-[#53a7f5] transition-colors ${styles.text}`}
                        >
                          Frontend
                        </span>
                        <span className="text-[9px] font-bold uppercase opacity-40">
                          Source Code
                        </span>
                      </div>
                    </a>
                  </Magnetic>

                  {/* Server Repo Button (Conditional: Only for Pet Adoption or projects with githubServer key) */}
                  {p.githubServer && (
                    <Magnetic strength={0.3}>
                      <a
                        href={p.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View backend code"
                        className="group flex items-center gap-4 cursor-pointer"
                      >
                        <div
                          className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500 ${styles.border} ${styles.cardBg} group-hover:bg-slate-900 group-hover:text-white`}
                        >
                          <Server
                            size={20}
                            className={
                              isDark ? 'text-[#53a7f5]' : 'text-slate-900'
                            }
                          />
                        </div>
                        <div className="flex flex-col">
                          <span
                            className={`text-[11px] font-black uppercase tracking-widest group-hover:text-[#53a7f5] transition-colors ${styles.text}`}
                          >
                            Backend
                          </span>
                          <span className="text-[9px] font-bold uppercase opacity-40">
                            Server Code
                          </span>
                        </div>
                      </a>
                    </Magnetic>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#53a7f5]/20 to-transparent" />
    </section>
  );
};

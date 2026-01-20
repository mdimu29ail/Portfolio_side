import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './Shared';
import { Shield, Target, Zap, Download, MapPin, Wifi, Cpu } from 'lucide-react';

export const About: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    text: isDark ? 'text-zinc-200' : 'text-neutral-900',
    heading: isDark ? 'text-white' : 'text-black',
    subText: isDark ? 'text-zinc-500' : 'text-neutral-600',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    border: isDark ? 'border-zinc-800' : 'border-black/10',
    mutedBg: isDark ? 'bg-zinc-900/50' : 'bg-black/5',
    accentBg: isDark ? 'bg-[#d9ff00]' : 'bg-neutral-900', 
    accentText: isDark ? 'text-black' : 'text-white', 
    highlight: isDark ? 'text-[#d9ff00]' : 'text-black',
    gridColor: isDark ? '#202020' : '#d4d4d4',
  };

  return (
    <section id="about" className={`py-16 sm:py-24 md:py-32 xl:py-48 px-4 sm:px-6 relative overflow-hidden w-full transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />

      <div className="container max-w-7xl mx-auto relative z-10">
        <SectionHeading title="Identity Core" subtitle="Biographical Data" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start mt-12 sm:mt-16 md:mt-24">
          
          {/* --- LEFT: NARRATIVE --- */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 md:space-y-12">
            
            {/* RESPONSIVE HEADLINE */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] md:leading-[0.9] tracking-tight ${styles.heading}`}
            >
              Weaving <span className={styles.highlight}>Complexity</span> into <span className="italic font-serif font-light text-zinc-400">Seamless</span> Experience.
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl ${styles.subText}`}
            >
              Operating from the digital frontier of Bangladesh, I architect MERN ecosystems that prioritize human-centric interaction and technical resilience. My approach is rooted in the "Atomic Engineering" philosophy—where every single pixel and line of code serves a strategic purpose.
            </motion.p>
            
            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
              {[
                { icon: Shield, title: 'Security First', desc: 'Implementing bulletproof encryption and multi-tier authentication layers.' },
                { icon: Target, title: 'Result Oriented', desc: 'Focusing on KPIs that matter: conversion, speed, and absolute uptime.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className={`p-6 sm:p-8 border rounded-2xl transition-all duration-300 group hover:-translate-y-1 ${styles.cardBg} ${styles.border} hover:border-[#d9ff00]/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-colors ${styles.mutedBg} ${isDark ? 'text-[#d9ff00] group-hover:bg-[#d9ff00] group-hover:text-black' : 'text-black'}`}>
                    <item.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h4 className={`text-base sm:text-lg font-black uppercase tracking-wide mb-2 sm:mb-3 ${styles.text}`}>{item.title}</h4>
                  <p className={`text-sm leading-relaxed ${styles.subText}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: ID MODULE --- */}
          <div className="lg:col-span-5 relative space-y-6 lg:mt-8">
            
            {/* The ID Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-1 border rounded-[1.5rem] sm:rounded-[2rem] relative overflow-hidden ${styles.border} ${styles.cardBg}`}
            >
              <div className={`p-6 sm:p-8 md:p-10 rounded-[1.3rem] sm:rounded-[1.8rem] relative overflow-hidden ${styles.mutedBg}`}>
                
                {/* ID Holographic Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {/* Header */}
                <div className={`flex justify-between items-start mb-8 sm:mb-10 border-b pb-4 sm:pb-6 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
                    <div className={styles.text}>
                        <div className="text-[10px] font-mono uppercase tracking-widest mb-1 opacity-50">ID_Designation</div>
                        <div className="text-lg sm:text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                            <Cpu size={18} className={styles.highlight} /> Architect
                        </div>
                    </div>
                    <Zap size={24} className={isDark ? 'text-zinc-600' : 'text-zinc-400'} />
                </div>

                {/* Main Info */}
                <div className="space-y-4 mb-8 sm:mb-10">
                  <h4 className={`text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter ${styles.heading}`}>Imamul Molla</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${styles.accentBg} ${styles.accentText} shadow-lg shadow-[#d9ff00]/20`}>Level 3 Core</span>
                    <span className={`px-3 sm:px-4 py-1.5 border rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${styles.text} ${styles.border}`}>MERN Specialist</span>
                  </div>
                </div>

                {/* Data Table */}
                <div className={`space-y-3 sm:space-y-4 border-t pt-6 sm:pt-8 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
                  {[
                    { label: 'Deployment Hub', val: 'Khulna, BD', icon: MapPin },
                    { label: 'Uplink Ready', val: 'Remote / Hybrid', icon: Wifi },
                    { label: 'System Status', val: 'Operational', accent: true },
                    { label: 'Neural ID', val: '0x2911_IMAMUL' }
                  ].map((row, idx) => (
                    <div key={idx} className="flex justify-between items-center group">
                      <div className="flex items-center gap-2 sm:gap-3">
                         {row.icon && <row.icon size={12} className={styles.subText} />}
                         <span className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest ${styles.subText}`}>{row.label}</span>
                      </div>
                      <span className={`text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider ${row.accent ? (isDark ? 'text-[#d9ff00] animate-pulse drop-shadow-[0_0_5px_rgba(217,255,0,0.5)]' : 'text-green-600') : styles.text}`}>
                          {row.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Footer */}
                <div className="mt-6 sm:mt-8 pt-4 flex items-end justify-between opacity-40">
                    <div className={`h-4 sm:h-6 w-16 sm:w-24 ${isDark ? 'bg-zinc-700' : 'bg-zinc-400'}`} style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }} />
                    <span className={`text-[9px] font-mono uppercase tracking-widest ${styles.text}`}>Auth_Verified</span>
                </div>
              </div>
            </motion.div>

            {/* Download Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full p-5 sm:p-6 rounded-2xl flex items-center justify-between group transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#d9ff00]/10 ${styles.accentBg} ${styles.accentText}`}
            >
              <div className="text-left">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] block mb-1 opacity-60">Initialize Download</span>
                <h4 className="text-base sm:text-lg font-black uppercase tracking-widest">Executive CV</h4>
              </div>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-180 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <Download size={18} className="sm:w-5 sm:h-5" />
              </div>
            </motion.button>

          </div>
        </div>
      </div>
    </section>
  );
};
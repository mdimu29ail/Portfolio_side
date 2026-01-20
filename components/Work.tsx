
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { SectionHeading, Magnetic } from './Shared';

export const WorkArchive: React.FC = () => (
  <section id="work" className="py-60 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeading title="Visual Archive" subtitle="Engineering" centered />
      <div className="space-y-40">
        {PROJECTS.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group flex flex-col lg:flex-row gap-12 md:gap-24 items-stretch ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="lg:w-3/5 relative overflow-hidden rounded-[4rem] shadow-2xl bg-gray-900 group aspect-[16/10]">
               <motion.img 
                 whileHover={{ scale: 1.05 }} transition={{ duration: 1.5 }} 
                 src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt={p.title} 
               />
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full glass flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={32} />
                  </div>
               </div>
            </div>
            <div className="lg:w-2/5 flex flex-col justify-center">
               <span className="text-[12px] font-black uppercase tracking-[0.8em] text-cyan-400 mb-8 block">Project 0{i+1}</span>
               <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none stylish-font text-white break-words">{p.title}</h3>
               <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">{p.description}</p>
               <div className="flex flex-wrap gap-3 mb-16">
                  {p.tech.map(t => <span key={t} className="px-4 py-2 glass rounded-xl text-[10px] font-black uppercase tracking-widest">{t}</span>)}
               </div>
               <Magnetic strength={0.2}>
                 <button className="flex items-center gap-6 text-white font-black uppercase tracking-[0.4em] text-xs group">
                   Access Protocol <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500"><ArrowRight size={20} /></div>
                 </button>
               </Magnetic>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

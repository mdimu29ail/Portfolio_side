
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Magnetic } from './Shared';

export const Terminal: React.FC = () => (
  <section id="contact" className="py-60 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        className="p-16 md:p-32 bg-[#080808] border border-white/5 rounded-[5rem] md:rounded-[8rem] flex flex-col items-center text-center group relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none tech-grid" />
        <span className="text-[12px] font-black uppercase tracking-[1em] mb-12 block text-cyan-400 stylish-font">Initiate Global Protocol</span>
        <h2 className="text-[14vw] font-black leading-[0.75] uppercase tracking-tighter mb-32 stylish-font text-white break-words max-w-full">
          Build the<br /><span className="text-cyan-400 italic">Future</span>.
        </h2>
        <div className="flex flex-col items-center gap-20">
          <Magnetic strength={0.2}>
            <a href="mailto:imamul.islam2911@gmail.com" className="text-3xl md:text-6xl font-black tracking-tighter hover:text-cyan-400 transition-all border-b-[8px] border-cyan-400/20 pb-6 stylish-font break-all">
              imamul.islam2911@gmail.com
            </a>
          </Magnetic>
          <div className="flex gap-12 mt-12">
            {[Github, Linkedin, Instagram].map((Icon, i) => (
              <Magnetic key={i} strength={0.5}>
                <motion.a href="#" className="w-20 h-20 bg-white/5 border border-white/10 text-white rounded-3xl flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all">
                  <Icon size={28} />
                </motion.a>
              </Magnetic>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);


import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Rocket } from 'lucide-react';
import { SERVICES } from '../constants';
import { SectionHeading } from './Shared';

export const Capabilities: React.FC = () => (
  <section id="services" className="py-60 px-6 bg-white text-black rounded-[5rem] md:rounded-[8rem] -mx-4 md:-mx-10 relative overflow-hidden shadow-2xl">
    <div className="max-w-7xl mx-auto relative z-10">
      <SectionHeading title="Strategic Core" subtitle="Solutions" />
      <div className="grid md:grid-cols-3 gap-10 mt-20">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={s.id} whileHover={{ y: -20 }} 
            className="p-12 border-2 border-black/5 rounded-[4rem] flex flex-col justify-between min-h-[500px] group hover:bg-black hover:text-white transition-all duration-700 bg-white/50"
          >
            <div className="w-20 h-20 bg-black text-white rounded-[2rem] flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all mb-12 shadow-xl">
              {i === 0 ? <Globe size={40} /> : i === 1 ? <Layout size={40} /> : <Rocket size={40} />}
            </div>
            <div>
               <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.85] stylish-font">{s.title}</h3>
               <p className="text-xl font-bold opacity-50 leading-relaxed group-hover:opacity-100 transition-opacity">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';
import { SectionHeading } from './Shared';

export const Protocol: React.FC = () => (
  <section id="process" className="py-60 px-6 bg-[#050505] relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <SectionHeading title="Work Protocol" subtitle="Execution" centered />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROCESS_STEPS.map((step, i) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 glass rounded-[3rem] group hover:border-cyan-400/20 transition-all bg-white/[0.01]"
          >
            <div className="w-20 h-20 rounded-2xl bg-black border border-white/5 flex items-center justify-center text-cyan-400 mb-10 group-hover:scale-110 transition-transform">
               {i === 0 ? <Search size={28} /> : i === 1 ? <PenTool size={28} /> : i === 2 ? <Code size={28} /> : <CheckCircle size={28} />}
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-black text-white/10 stylish-font">0{i+1}</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 stylish-font text-white">{step.title}</h3>
            <p className="text-gray-500 font-medium leading-relaxed italic">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

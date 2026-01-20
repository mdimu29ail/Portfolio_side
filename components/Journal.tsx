
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { SectionHeading } from './Shared';

export const Insights: React.FC = () => (
  <section id="journal" className="py-60 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeading title="Knowledge Base" subtitle="Journal" />
      <div className="flex flex-col border-t border-white/5">
        {BLOG_POSTS.map((post, i) => (
          <motion.a
            key={post.id} href="#"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="py-16 md:py-24 border-b border-white/5 flex flex-col md:flex-row justify-between items-center group relative overflow-hidden transition-all hover:px-10"
          >
            <div className="flex items-center gap-10 md:gap-20 z-10 w-full md:w-auto">
              <span className="text-xl font-black text-white/10 stylish-font tabular-nums">0{i+1}</span>
              <h4 className="text-3xl md:text-7xl font-black uppercase tracking-tighter group-hover:text-cyan-400 transition-all duration-700 stylish-font leading-none">{post.title}</h4>
            </div>
            <div className="flex items-center gap-12 z-10 mt-10 md:mt-0 opacity-40 group-hover:opacity-100 transition-opacity">
               <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 italic stylish-font flex items-center gap-2">
                 <Calendar size={12} /> {post.date}
               </span>
               <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <ArrowUpRight size={24} />
               </div>
            </div>
            <div className="absolute inset-y-0 right-0 w-1/3 h-full opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none -z-10">
               <img src={post.image} className="w-full h-full object-cover grayscale" alt="Preview" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

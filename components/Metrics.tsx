import React from 'react';
import { motion } from 'framer-motion';
import { Counter, SectionHeading } from './Shared';
import { Activity, Database, Zap, Globe, Radio } from 'lucide-react';

export const Metrics: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  // Theme-specific styles config
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    text: isDark ? 'text-white' : 'text-neutral-900',
    subText: isDark ? 'text-white/40' : 'text-neutral-500',
    accentText: isDark ? 'text-[#d9ff00]' : 'text-black', // Neon for dark, Black for light (contrast)
    border: isDark ? 'border-white/10' : 'border-black/10',
    mutedBg: isDark ? 'bg-white/5' : 'bg-black/5',
    gridColor: isDark ? '#202020' : '#d4d4d4',
    visualizerBase: isDark ? 'bg-white/20' : 'bg-black/10',
    svgTrack: isDark ? 'stroke-white/5' : 'stroke-black/5',
  };

  // Animation for the circular progress
  const circleVariants = {
    hidden: { strokeDashoffset: 283 },
    visible: { 
      strokeDashoffset: 283 - (283 * 0.99),
      transition: { duration: 2, ease: "easeOut" }
    }
  };

  return (
    <section className={`py-32 md:py-40 px-6 relative overflow-hidden w-full transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      {/* Glow Orb - Adjusted opacity for light mode */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d9ff00] rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 ${isDark ? 'opacity-5' : 'opacity-[0.03]'}`} />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <SectionHeading title="Performance Hub" subtitle="Real-time Diagnostics" centered />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mt-16">
          
          {/* --- LEFT COLUMN: MODULAR STATS --- */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {[
              { label: 'Total Deployments', value: 45, suffix: '+', icon: Database, sub: 'Architecture units delivered' },
              { label: 'Client Retention', value: 100, suffix: '%', icon: Globe, sub: 'Ecosystem satisfaction' }
            ].map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 md:p-8 border rounded-xl group transition-all duration-300 ${styles.cardBg} ${styles.border} hover:border-[#d9ff00]/30 hover:shadow-lg`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-lg transition-colors group-hover:bg-[#d9ff00] group-hover:text-black ${styles.mutedBg} ${isDark ? 'text-[#d9ff00]' : 'text-black'}`}>
                    <m.icon size={20} />
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${styles.subText}`}>Node_0{i+1}</span>
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 tracking-tighter ${styles.text}`}>
                  <Counter value={m.value} suffix={m.suffix} />
                </div>
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-1 ${styles.accentText}`}>{m.label}</h4>
                <p className={`text-[10px] uppercase tracking-widest leading-tight ${styles.subText}`}>{m.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* --- CENTER: THE CORE METER --- */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 py-12 lg:py-0">
            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
              
              {/* Outer Spinning Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-[#d9ff00]/20 rounded-full"
              />
              
              {/* Inner Counter-Spinning Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-dotted border-[#d9ff00]/20 rounded-full"
              />
              
              {/* SVG Progress Circle */}
              <svg className="absolute inset-0 w-full h-full rotate-[-90deg] p-4">
                {/* Background Track */}
                <circle
                  cx="50%" cy="50%" r="48%"
                  className={`fill-none transition-colors duration-500 ${styles.svgTrack}`}
                  strokeWidth="2"
                />
                {/* Progress Bar */}
                <motion.circle
                  cx="50%" cy="50%" r="48%"
                  className="stroke-[#d9ff00] fill-none drop-shadow-[0_0_10px_rgba(217,255,0,0.5)]"
                  strokeWidth="4"
                  strokeDasharray="283" // Approx circumference
                  variants={circleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  strokeLinecap="round"
                />
              </svg>

              {/* Central Data */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                <div className={`flex items-center gap-2 mb-4 px-3 py-1 rounded-full border backdrop-blur-sm ${styles.mutedBg} ${isDark ? 'border-[#d9ff00]/20' : 'border-black/10'}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d9ff00] animate-pulse shadow-[0_0_8px_#d9ff00]" />
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${isDark ? 'text-[#d9ff00]' : 'text-black'}`}>Online</span>
                </div>
                
                <span className={`text-7xl md:text-8xl font-bold tracking-tighter tabular-nums leading-none ${styles.text}`}>
                  <Counter value={99} suffix="%" />
                </span>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.3em] mt-4 ${styles.subText}`}>System Reliability</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: TECHNICAL METRICS --- */}
          <div className="lg:col-span-4 space-y-6 order-3">
             
            {/* Card 1: Request Velocity */}
             <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-8 border rounded-xl relative overflow-hidden group transition-all duration-300 ${styles.cardBg} ${styles.border} hover:border-[#d9ff00]/30`}
            >
              <div className="flex justify-between items-end mb-8 relative z-10">
                 <div>
                   <h4 className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${styles.accentText}`}>Request Velocity</h4>
                   <div className={`text-4xl font-bold tracking-tighter tabular-nums ${styles.text}`}>
                     <Counter value={1200} suffix="req/s" />
                   </div>
                 </div>
                 <div className={`p-2 rounded-lg ${styles.mutedBg} ${isDark ? 'text-[#d9ff00]' : 'text-black'}`}>
                    <Zap size={20} />
                 </div>
              </div>
              
              {/* Audio Visualizer Effect */}
              <div className={`h-12 flex items-end gap-1 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity`}>
                {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60, 75, 55, 45, 60, 30].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: "10%" }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className={`flex-1 transition-colors rounded-t-[1px] ${styles.visualizerBase} group-hover:bg-[#d9ff00]`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Card 2: Network Table */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`p-8 border rounded-xl relative overflow-hidden group transition-all duration-300 ${styles.cardBg} ${styles.border} hover:border-[#d9ff00]/30`}
            >
               <div className="flex items-center gap-4 mb-6">
                 <Radio className={isDark ? "text-[#d9ff00]" : "text-black"} size={20} />
                 <h4 className={`text-sm font-bold uppercase tracking-widest ${styles.text}`}>Network Load</h4>
               </div>
               <div className="space-y-3">
                 {[
                   { label: 'Latency', val: '24ms', color: 'text-green-500' },
                   { label: 'Error Rate', val: '0.001%', color: 'text-blue-500' },
                   { label: 'Uptime', val: '365d', color: isDark ? 'text-[#d9ff00]' : 'text-black' }
                 ].map((row, i) => (
                   <div key={i} className={`flex justify-between text-xs font-mono uppercase tracking-widest border-b pb-2 last:border-0 ${styles.border}`}>
                     <span className={styles.subText}>{row.label}</span>
                     <span className={`${row.color} font-bold`}>{row.val}</span>
                   </div>
                 ))}
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
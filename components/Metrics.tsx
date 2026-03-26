import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from './Shared';
import {
  Activity,
  Layout,
  Zap,
  Globe,
  ShieldCheck,
  Cpu,
  TrendingUp,
} from 'lucide-react';

export const Metrics: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8fafc]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    text: isDark ? 'text-slate-100' : 'text-slate-900',
    subText: isDark ? 'text-slate-500' : 'text-slate-600',
    accentText: 'text-[#53a7f5]',
    border: isDark ? 'border-white/5' : 'border-slate-200',
    mutedBg: isDark ? 'bg-white/5' : 'bg-slate-100',
    gridColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
  };

  return (
    <section
      id="metrics"
      className={`py-24 md:py-32 lg:py-48 px-6 relative overflow-hidden w-full transition-colors duration-700 ${styles.bg}`}
    >
      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* --- HEADER MOVED TO LEFT --- */}
        <div className="flex flex-col items-start text-left gap-5 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-5 py-2 rounded-full border border-[#53a7f5]/20 bg-[#53a7f5]/5 backdrop-blur-md"
          >
            <Activity size={14} className="text-[#53a7f5]" />
            <span className="text-[#53a7f5] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              Real-time Performance
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${styles.text}`}
          >
            System Reliability<span className="text-[#53a7f5]">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: MODULAR STATS */}
          <div className="lg:col-span-4 space-y-6">
            {[
              {
                label: 'Enterprise Systems',
                value: 45,
                suffix: '+',
                icon: Layout,
                sub: 'Solutions Architecture',
              },
              {
                label: 'Uptime Reliability',
                value: 100,
                suffix: '%',
                icon: ShieldCheck,
                sub: 'Global Standard Ready',
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`p-10 border rounded-[2.5rem] group transition-all duration-500 shadow-xl ${styles.cardBg} ${styles.border} hover:border-[#53a7f5]/40`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:bg-[#53a7f5] group-hover:text-white ${styles.mutedBg} ${styles.accentText}`}
                  >
                    <m.icon size={22} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-20">
                    MTR_{i + 1}
                  </span>
                </div>
                <div
                  className={`text-5xl md:text-6xl font-black mb-3 tracking-tighter tabular-nums ${styles.text}`}
                >
                  <Counter value={m.value} suffix={m.suffix} />
                </div>
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] opacity-40`}
                >
                  {m.sub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CENTER: CORE METER */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-12 lg:py-0">
            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full rotate-[-90deg] p-4">
                <circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  className="fill-none stroke-current opacity-5"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  className="stroke-[#53a7f5] fill-none"
                  strokeWidth="5"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  whileInView={{ strokeDashoffset: 283 - 283 * 0.99 }}
                  transition={{ duration: 2, ease: 'circOut' }}
                  viewport={{ once: true }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="text-center z-10">
                <div className="text-7xl md:text-8xl font-black tracking-tighter tabular-nums leading-none ${styles.text}">
                  <Counter value={99} suffix="%" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] mt-6 opacity-30 block">
                  Reliability
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: UPDATED CHART UI (RESPONSE VELOCITY) */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-10 border rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 shadow-2xl ${styles.cardBg} ${styles.border} hover:border-[#53a7f5]/40`}
            >
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div>
                  <h4
                    className={`text-[10px] font-black uppercase tracking-[0.3em] mb-3 ${styles.accentText}`}
                  >
                    Response Velocity
                  </h4>
                  <div
                    className={`text-6xl font-black tracking-tighter tabular-nums ${styles.text}`}
                  >
                    <Counter value={1200} suffix="ms" />
                  </div>
                </div>
                <div
                  className={`p-4 rounded-2xl bg-[#53a7f5]/10 ${styles.accentText}`}
                >
                  <Zap size={24} fill="currentColor" />
                </div>
              </div>

              {/* --- NEW MODERN CHART UI (Spline Area Chart) --- */}
              <div className="relative h-24 w-full mt-4">
                <svg
                  viewBox="0 0 200 60"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#53a7f5" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#53a7f5" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  {[0, 20, 40, 60].map(y => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="200"
                      y2={y}
                      stroke="currentColor"
                      strokeOpacity="0.05"
                      strokeWidth="0.5"
                    />
                  ))}

                  {/* Area Path */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    d="M0 50 Q 25 45, 50 20 T 100 35 T 150 10 T 200 25 V 60 H 0 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Line Path */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                    d="M0 50 Q 25 45, 50 20 T 100 35 T 150 10 T 200 25"
                    fill="none"
                    stroke="#53a7f5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Pulsing Point */}
                  <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    cx="200"
                    cy="25"
                    r="3"
                    fill="#53a7f5"
                  />
                </svg>
                <div className="flex justify-between mt-4 text-[8px] font-bold uppercase tracking-widest opacity-30">
                  <span>Input_Lag</span>
                  <span>Processing</span>
                  <span className="text-[#53a7f5]">Optimal</span>
                </div>
              </div>
            </motion.div>

            {/* Network Overview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`p-10 border rounded-[2.5rem] transition-all duration-500 shadow-xl ${styles.cardBg} ${styles.border} hover:border-[#53a7f5]/40`}
            >
              <div className="flex items-center gap-4 mb-8">
                <Globe className={styles.accentText} size={20} />
                <h4
                  className={`text-[10px] font-black uppercase tracking-[0.2em] ${styles.text}`}
                >
                  Global Node Status
                </h4>
              </div>
              <div className="space-y-4">
                {[
                  {
                    label: 'Edge Latency',
                    val: '14ms',
                    color: 'text-[#53a7f5]',
                  },
                  {
                    label: 'System Load',
                    val: '0.04%',
                    color: 'text-emerald-500',
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-[11px] font-bold uppercase border-b pb-3 border-current border-opacity-5 last:border-0"
                  >
                    <span className="opacity-30 tracking-widest">
                      {row.label}
                    </span>
                    <span className={`${row.color} tracking-tighter`}>
                      {row.val}
                    </span>
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

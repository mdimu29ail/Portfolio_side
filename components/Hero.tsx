import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Database,
  Cpu,
  Zap,
  Terminal,
  Activity,
  Code2,
  Layers,
  Globe,
} from 'lucide-react';
import { RevealText, Magnetic } from './Shared';

export const Hero: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const { scrollY } = useScroll();
  const isDark = theme === 'dark';

  // Parallax effects optimized for 60fps
  const bgY = useTransform(scrollY, [0, 1000], [0, 250]);
  const textY = useTransform(scrollY, [0, 500], [0, -40]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const widgetVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8fafc]',
    text: isDark ? 'text-white' : 'text-slate-900',
    subText: isDark ? 'text-slate-400' : 'text-slate-600',
    cardBg: isDark ? 'bg-black/40' : 'bg-white/40',
    border: isDark ? 'border-white/10' : 'border-slate-200',
  };

  return (
    <section
      className={`relative min-h-screen w-full flex items-center overflow-hidden transition-colors duration-700 ${styles.bg}`}
    >
      {/* --- DYNAMIC BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 h-[120%] w-full pointer-events-none">
        <motion.img
          style={{ y: bgY }}
          src="https://i.ibb.co.com/PscWzg4f/Gemini-Generated-Image-y5en9my5en9my5en.png"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isDark ? 'opacity-30 grayscale-[0.4]' : 'opacity-10 grayscale-[0.2]'}`}
          alt="Engineering Background"
          loading="eager"
        />
        {/* Cinematic Overlays that adapt to theme */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#050505] via-[#050505]/60' : 'from-[#f8fafc] via-[#f8fafc]/60'} to-transparent`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-[#050505]/80' : 'from-[#f8fafc]/80'} via-transparent to-transparent`}
        />

        {/* Brand Glow (Matches #53a7f5) */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#53a7f5]/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full pt-32 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* --- LEFT CONTENT: PROFESSIONAL NARRATIVE --- */}
          <motion.div
            style={{ y: textY }}
            className="flex flex-col items-start text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-3 mb-8 px-4 py-2 border rounded-full backdrop-blur-md ${isDark ? 'border-[#53a7f5]/20 bg-[#53a7f5]/5' : 'border-[#53a7f5]/30 bg-white'}`}
            >
              <span className="w-2 h-2 bg-[#53a7f5] rounded-full animate-pulse shadow-[0_0_10px_#53a7f5]" />
              <span
                className={`font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase ${isDark ? 'text-[#53a7f5]' : 'text-[#3b82f6]'}`}
              >
                MERN Stack Specialist
              </span>
            </motion.div>

            <h1
              className={`text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] font-black tracking-tighter leading-[0.85] mb-8 font-['Plus_Jakarta_Sans'] ${styles.text}`}
            >
              <RevealText>Engineering</RevealText> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#53a7f5] via-blue-400 to-cyan-300">
                <RevealText delay={0.15}>Next-Gen</RevealText>
              </span>{' '}
              <br />
              <RevealText delay={0.3}>Web Realities.</RevealText>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium ${styles.subText}`}
            >
              Hi, I'm{' '}
              <span
                className={`${isDark ? 'text-white' : 'text-black'} font-bold`}
              >
                Imamul Molla
              </span>
              . I architect high-performance digital products, merging scalable
              backend logic with fluid, user-centric frontend experiences.
            </motion.p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-5">
              <Magnetic strength={0.2}>
                <button
                  aria-label="View My Portfolio"
                  className="group relative px-10 py-5 bg-[#53a7f5] text-white text-sm font-black uppercase tracking-widest rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(83,167,245,0.3)] transition-all duration-500"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Launch Work
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>
              </Magnetic>

              <button
                aria-label="Contact Me"
                className={`px-10 py-5 border backdrop-blur-md text-sm font-black uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-3 ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-900 hover:bg-slate-50'}`}
              >
                <Terminal size={18} /> Get In Touch
              </button>
            </div>
          </motion.div>

          {/* --- RIGHT CONTENT: INTERACTIVE DASHBOARD --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="hidden lg:flex relative h-[700px] w-full items-center justify-center"
          >
            {/* Glass UI Card */}
            <motion.div
              variants={widgetVariants}
              className={`relative z-10 w-full max-w-[440px] rounded-[3rem] border backdrop-blur-3xl shadow-2xl overflow-hidden p-1 ${styles.border} ${styles.cardBg}`}
            >
              <div
                className={`rounded-[2.8rem] overflow-hidden border ${isDark ? 'bg-[#0c0c0c] border-white/5' : 'bg-white border-slate-100'}`}
              >
                {/* Header bar */}
                <div
                  className={`h-14 border-b flex items-center px-8 justify-between ${isDark ? 'border-white/5 bg-white/5' : 'border-slate-100 bg-slate-50'}`}
                >
                  <div className="flex gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#53a7f5]/40" />
                    <div className="w-3 h-3 rounded-full bg-[#53a7f5]/20" />
                    <div className="w-3 h-3 rounded-full bg-[#53a7f5]/10" />
                  </div>
                  <div className="text-[9px] font-black text-slate-500 tracking-[0.3em] uppercase">
                    System.Status_v4.2
                  </div>
                </div>

                <div className="p-10">
                  <div className="flex justify-between items-center mb-12">
                    <div>
                      <p className="text-[10px] text-[#53a7f5] font-black uppercase tracking-widest mb-2">
                        Build_Stability
                      </p>
                      <h3
                        className={`text-6xl font-black tracking-tighter ${styles.text}`}
                      >
                        99%
                      </h3>
                    </div>
                    <div
                      className={`w-16 h-16 rounded-3xl flex items-center justify-center border ${isDark ? 'bg-[#53a7f5]/10 border-[#53a7f5]/20' : 'bg-blue-50 border-blue-100'}`}
                    >
                      <Activity
                        className="text-[#53a7f5] animate-pulse"
                        size={32}
                      />
                    </div>
                  </div>

                  {/* Tech Showcase */}
                  <div className="grid grid-cols-2 gap-5">
                    <div
                      className={`p-6 rounded-[2rem] border transition-colors group ${isDark ? 'bg-white/5 border-white/5 hover:border-[#53a7f5]/30' : 'bg-slate-50 border-slate-100 hover:border-[#53a7f5]/30'}`}
                    >
                      <Database className="text-[#53a7f5] mb-3" size={20} />
                      <p className={`text-lg font-bold ${styles.text}`}>
                        Supabase
                      </p>
                      <p className="text-[9px] text-slate-500 uppercase font-black">
                        Backend
                      </p>
                    </div>
                    <div
                      className={`p-6 rounded-[2rem] border transition-colors group ${isDark ? 'bg-white/5 border-white/5 hover:border-[#53a7f5]/30' : 'bg-slate-50 border-slate-100 hover:border-[#53a7f5]/30'}`}
                    >
                      <Layers className="text-[#53a7f5] mb-3" size={20} />
                      <p className={`text-lg font-bold ${styles.text}`}>
                        React.js
                      </p>
                      <p className="text-[9px] text-slate-500 uppercase font-black">
                        Frontend
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Lighthouse Badge */}
            <motion.div
              variants={widgetVariants}
              className={`absolute top-20 -right-4 border p-6 rounded-[2rem] shadow-2xl backdrop-blur-2xl w-48 z-20 ${isDark ? 'bg-[#0a0a0a]/90 border-[#53a7f5]/30' : 'bg-white border-blue-100'}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Zap size={18} className="text-[#53a7f5]" fill="currentColor" />
                <span className="text-[10px] font-black text-[#53a7f5] uppercase tracking-widest">
                  Performance
                </span>
              </div>
              <p className={`text-2xl font-black ${styles.text}`}>100/100</p>
            </motion.div>

            {/* Floating Deployment Badge */}
            <motion.div
              variants={widgetVariants}
              className={`absolute bottom-28 -left-12 border p-6 rounded-[2rem] shadow-2xl backdrop-blur-2xl w-52 z-20 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[9px] font-black text-slate-500 uppercase">
                  Live Edge
                </span>
              </div>
              <p className={`text-xl font-bold tracking-tight ${styles.text}`}>
                Optimized SEO
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Brand Line */}
      <div
        className={`absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#53a7f5]/40 to-transparent`}
      />
    </section>
  );
};

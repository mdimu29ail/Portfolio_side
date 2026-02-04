import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Database,
  Cpu,
  Zap,
  Terminal,
  Activity,
} from 'lucide-react';
// Assuming these are in the same directory, if not adjust path
import { RevealText, Magnetic } from './Shared';

export const Hero: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4 } },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-black">
      {/* --- BACKGROUND IMAGE SECTION --- */}
      <div className="absolute inset-0 z-0 h-[120%] w-full">
        <motion.img
          style={{ y: bgY }}
          src="https://i.ibb.co.com/PscWzg4f/Gemini-Generated-Image-y5en9my5en9my5en.png"
          className="w-full h-full object-cover opacity-60"
          alt="Background"
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-[url('https://i.ibb.co.com/PscWzg4f/Gemini-Generated-Image-y5en9my5en9my5en.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10 w-full h-full pt-20 pb-12 lg:pt-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)]">
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="flex flex-col items-start text-left justify-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6 md:mb-8"
            >
              <span className="w-2 h-2 bg-[#d9ff00] rounded-full animate-pulse shadow-[0_0_12px_#d9ff00]" />
              <span className="px-3 py-1 border border-[#d9ff00]/30 rounded-full bg-[#d9ff00]/10 text-[#d9ff00] font-mono text-[10px] md:text-xs tracking-widest uppercase backdrop-blur-md">
                System Architecture v3.2
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] md:leading-[0.9] mb-6 md:mb-8 font-sans">
              <RevealText>Build</RevealText> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">
                <RevealText delay={0.1}>Beyond</RevealText>
              </span>{' '}
              <br />
              <RevealText delay={0.2} className="text-[#d9ff00]">
                Limits.
              </RevealText>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-lg mb-8 md:mb-10 leading-relaxed font-light"
            >
              Architecting ultra-low latency ecosystems. We bridge the gap
              between complex backend infrastructure and fluid frontend
              experiences.
            </motion.p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4">
              <Magnetic strength={0.2}>
                <button className="group relative w-full sm:w-auto px-8 py-4 bg-[#d9ff00] text-black text-xs sm:text-sm font-black uppercase tracking-widest overflow-hidden hover:scale-105 transition-transform duration-300">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Initialize{' '}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>
              </Magnetic>

              <button className="w-full sm:w-auto px-8 py-4 border border-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Terminal size={14} /> Documentation
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: GLASS CARDS (Hidden on Mobile/Small Tablet, Visible on Large Screens) --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="hidden lg:flex relative h-[600px] w-full items-center justify-center perspective-1000"
          >
            {/* Main Glass Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-[400px] h-[520px] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              {/* Header of the card */}
              <div className="h-10 border-b border-white/10 flex items-center px-4 justify-between bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono text-white/30">
                  DASHBOARD.EXE
                </span>
              </div>

              {/* Body of the card - Abstract Data Visualization */}
              <div className="p-6 relative h-full flex flex-col">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <div className="text-[10px] text-[#d9ff00] font-mono mb-1">
                      CURRENT_LOAD
                    </div>
                    <div className="text-4xl font-bold text-white">
                      84<span className="text-lg text-white/50">%</span>
                    </div>
                  </div>
                  <Activity className="text-[#d9ff00] animate-pulse" />
                </div>

                {/* Fake Code Lines */}
                <div className="space-y-3 opacity-60 mb-auto">
                  <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                  <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                  <div className="h-2 w-5/6 bg-white/20 rounded-full" />
                  <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                </div>

                {/* Inner Image Area */}
                <div className="mt-8 rounded-lg overflow-hidden border border-white/10 h-40 relative group">
                  <img
                    src="https://i.ibb.co.com/PscWzg4f/Gemini-Generated-Image-y5en9my5en9my5en.png"
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-110 transition-transform duration-700"
                    alt="Code"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#d9ff00]/20 flex items-center justify-center backdrop-blur-sm border border-[#d9ff00]">
                      <Zap size={20} className="text-[#d9ff00]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Widget 1: Database */}
            <motion.div
              variants={cardVariants}
              className="absolute top-20 -right-4 xl:right-0 bg-black/80 border border-white/10 p-5 rounded-xl shadow-2xl backdrop-blur-md w-48 z-20"
            >
              <div className="flex items-start justify-between mb-2">
                <Database className="text-[#d9ff00]" size={20} />
                <span className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />{' '}
                  LIVE
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">24ms</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">
                Latency
              </div>
            </motion.div>

            {/* Floating Widget 2: CPU */}
            <motion.div
              variants={cardVariants}
              className="absolute bottom-32 -left-4 xl:-left-10 bg-black/80 border border-white/10 p-5 rounded-xl shadow-2xl backdrop-blur-md w-44 z-20"
            >
              <div className="flex items-start justify-between mb-2">
                <Cpu className="text-[#d9ff00]" size={20} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Neural</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">
                Engine v9
              </div>
            </motion.div>
          </motion.div>

          {/* --- MOBILE VISUAL (Alternative to glass cards for small screens) --- */}
          <div className="lg:hidden w-full h-64 sm:h-80 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d9ff00]/10 to-black z-10" />
            <img
              src="https://i.ibb.co.com/DfPcstkw/1711445414023.jpg"
              className="w-full h-full object-cover opacity-60 grayscale"
              alt="Mobile Visual"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <div className="flex items-center gap-2 text-[#d9ff00]">
                <Activity size={20} />
                <span className="font-mono text-sm font-bold">
                  SYSTEM_READY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line at bottom */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d9ff00]/50 to-transparent" />
    </section>
  );
};

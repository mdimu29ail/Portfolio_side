import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  Download,
  MapPin,
  Globe,
  Code2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const About: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const isDark = theme === 'dark';

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8fafc]',
    text: isDark ? 'text-slate-300' : 'text-slate-700',
    heading: isDark ? 'text-white' : 'text-slate-900',
    subText: isDark ? 'text-slate-500' : 'text-slate-600',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    border: isDark ? 'border-white/5' : 'border-slate-200',
    mutedBg: isDark ? 'bg-white/5' : 'bg-slate-100',
    accent: '#53a7f5',
    accentBg: 'bg-[#53a7f5]',
    highlight: 'text-[#53a7f5]',
    gridColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
  };

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className={`py-24 md:py-32 lg:py-48 px-6 relative overflow-hidden w-full transition-colors duration-700 ${styles.bg}`}
    >
      {/* --- BACKGROUND PATTERN --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* --- CUSTOM SECTION HEADING --- */}
        <div className="flex flex-col items-start gap-4 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#53a7f5]/20 bg-[#53a7f5]/5 backdrop-blur-md"
          >
            {/* Animated Pulse Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#53a7f5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#53a7f5]"></span>
            </span>
            <span className="text-[#53a7f5] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              My Professional Journey
            </span>
          </motion.div>

          <motion.h2
            id="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${styles.heading}`}
          >
            Strategic Architect<span className={styles.highlight}>.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          {/* --- LEFT: STORY NARRATIVE --- */}
          <div className="lg:col-span-7 space-y-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl sm:text-5xl font-extrabold uppercase leading-[1.1] tracking-tight ${styles.heading}`}
            >
              Solving <span className={styles.highlight}>Complex</span> Logic
              with{' '}
              <span className="italic font-light opacity-60">Clean Code</span>.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-lg md:text-xl font-medium leading-relaxed max-w-2xl ${styles.subText}`}
            >
              I am a specialized{' '}
              <span className="text-white font-bold underline decoration-[#53a7f5] decoration-2 underline-offset-8">
                Full-Stack Developer
              </span>{' '}
              focused on the MERN ecosystem. Based in Bangladesh, I bridge the
              gap between heavy backend architecture and fluid frontend
              interfaces, ensuring every deployment is scalable, secure, and
              ready for global traffic.
            </motion.p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                {
                  icon: Shield,
                  title: 'Secure by Design',
                  desc: 'Hardening applications with multi-layer authentication and data encryption.',
                },
                {
                  icon: Zap,
                  title: 'Speed Optimized',
                  desc: 'Sub-second load times achieved through server-side optimization and clean UI.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 border rounded-[2rem] transition-all duration-500 group ${styles.cardBg} ${styles.border} hover:border-[#53a7f5]/40 hover:shadow-2xl hover:shadow-[#53a7f5]/5`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all ${styles.mutedBg} ${styles.highlight} group-hover:bg-[#53a7f5] group-hover:text-white`}
                  >
                    <item.icon size={24} />
                  </div>
                  <h4
                    className={`text-lg font-bold uppercase tracking-wide mb-3 ${styles.heading}`}
                  >
                    {item.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${styles.subText}`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: THE ARCHITECT ID CARD --- */}
          <div className="lg:col-span-5 relative lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-2 border rounded-[3rem] relative overflow-hidden shadow-2xl ${styles.border} ${styles.cardBg}`}
            >
              <div
                className={`p-8 md:p-12 rounded-[2.8rem] relative overflow-hidden ${styles.mutedBg}`}
              >
                {/* Visual Accent Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#53a7f5]/10 blur-3xl rounded-full" />

                {/* Profile Header */}
                <div
                  className={`flex justify-between items-start mb-12 border-b pb-8 ${isDark ? 'border-white/5' : 'border-slate-200'}`}
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-[#53a7f5]">
                      Engine Status: Active
                    </div>
                    <div className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
                      <Code2 size={22} className={styles.highlight} /> Lead
                      Engineer
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl border border-[#53a7f5]/20 flex items-center justify-center bg-[#53a7f5]/5">
                    <CheckCircle2 className="text-[#53a7f5]" size={24} />
                  </div>
                </div>

                {/* Identity Information */}
                <div className="space-y-4 mb-12">
                  <h4
                    className={`text-4xl md:text-5xl font-black uppercase tracking-tighter ${styles.heading}`}
                  >
                    Imamul Molla
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${styles.accentBg} text-white shadow-lg shadow-[#53a7f5]/20`}
                    >
                      MERN Specialist
                    </span>
                    <span
                      className={`px-4 py-1.5 border rounded-full text-[10px] font-black uppercase tracking-widest ${styles.text} ${styles.border}`}
                    >
                      Full-Stack
                    </span>
                  </div>
                </div>

                {/* Technical Meta Data */}
                <div className="space-y-6">
                  {[
                    { label: 'Primary Hub', val: 'Khulna, BD', icon: MapPin },
                    { label: 'Work Mode', val: 'Remote / Global', icon: Globe },
                    {
                      label: 'Availability',
                      val: 'Ready for Intake',
                      icon: Zap,
                      accent: true,
                    },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center group"
                    >
                      <div className="flex items-center gap-4">
                        <row.icon
                          size={18}
                          className={
                            row.accent ? styles.highlight : styles.subText
                          }
                        />
                        <span
                          className={`text-[11px] font-bold uppercase tracking-[0.2em] ${styles.subText}`}
                        >
                          {row.label}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-black uppercase ${row.accent ? styles.highlight : styles.text}`}
                      >
                        {row.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer Deco */}
                <div className="mt-12 flex items-center justify-between opacity-30">
                  <div className="h-px w-32 bg-current" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.5em]">
                    Verified Developer
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="https://drive.google.com/file/d/1VxjVJ3u7TwxLOTCGGGkFG6I8MP6GqH-P/view?usp=sharing" // Public folder-e thaka file-er name
              download="Imamul_Molla_Resume.pdf" // Download houar somoy file-er name ja hobe
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Download Imamul Molla's Professional CV"
              className={`mt-10 w-full p-7 rounded-[2rem] flex items-center justify-between group transition-all duration-500 shadow-xl hover:shadow-[#53a7f5]/30 ${styles.accentBg} text-white cursor-pointer`}
            >
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] block mb-1 opacity-70">
                  Get Full Credentials
                </span>
                <h4 className="text-xl font-black uppercase tracking-widest flex items-center gap-2">
                  Download Resume{' '}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </h4>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#53a7f5]">
                <Download size={24} />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

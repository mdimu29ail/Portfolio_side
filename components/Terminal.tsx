import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Send,
  Copy,
  Check,
  Mail,
  Globe,
  MessageSquare,
} from 'lucide-react';
import { Magnetic } from './Shared';
// import { BsWhatsapp } from 'react-icons/bs';

export const Terminal: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [copied, setCopied] = useState(false);
  const isDark = theme === 'dark';
  const email = 'mdimu29@gmail.com';

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8fafc]',
    cardBg: isDark ? 'bg-[#0a0a0a]/60 backdrop-blur-3xl' : 'bg-white',
    text: isDark ? 'text-slate-100' : 'text-slate-900',
    subText: isDark ? 'text-slate-500' : 'text-slate-600',
    border: isDark ? 'border-white/5' : 'border-slate-200',
    accent: '#53a7f5',
    accentBg: 'bg-[#53a7f5]',
    gridColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className={`py-24 md:py-40 px-6 relative overflow-hidden w-full transition-colors duration-700 ${styles.bg}`}
    >
      {/* --- OPTIMIZED BACKGROUND --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${styles.gridColor} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`
            relative p-12 md:p-28 rounded-[3.5rem] border overflow-hidden text-center flex flex-col items-center
            ${styles.cardBg} ${styles.border} shadow-2xl
          `}
        >
          {/* Visual Accent Glow */}
          <div
            className={`absolute -top-60 -left-60 w-[800px] h-[800px] blur-[140px] pointer-events-none opacity-[0.03] transition-colors duration-700 ${isDark ? 'bg-[#53a7f5]' : 'bg-slate-400'}`}
          />

          {/* Badge Indicator */}
          <div
            className={`relative z-10 inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-14 ${styles.border} ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <span
              className={`text-[11px] font-black uppercase tracking-[0.2em] ${styles.text}`}
            >
              Available for Collaboration
            </span>
          </div>

          {/* Meaningful Headline */}
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-16 ${styles.text}`}
          >
            Let’s build your next
            <br />
            <span className="text-[#53a7f5]">Digital Product.</span>
          </h2>

          {/* Email Action Area */}
          <div className="flex flex-col items-center gap-10 w-full relative z-10 max-w-4xl mx-auto">
            <Magnetic strength={0.15}>
              <div className="group relative w-full ">
                {/* --- Added padding-right (pr-16 & md:pr-32) for gap --- */}
                <a
                  href={`mailto:${email}`}
                  aria-label="Send an email to Imamul Molla"
                  className={`
                    block w-full px-6 pr-16 md:px-14 md:pr-36 py-8 md:py-12 rounded-3xl border text-center transition-all duration-500
                    text-2xl md:text-5xl lg:text-6xl font-black tracking-tighter break-all
                    ${styles.border} ${isDark ? 'bg-white/5 hover:bg-white/[0.08] hover:border-[#53a7f5]/30' : 'bg-slate-50 hover:bg-slate-100 hover:border-slate-300'} ${styles.text}
                  `}
                >
                  {email}
                </a>

                {/* Interactive Copy Tool - Positioned with better margin */}
                <button
                  onClick={handleCopy}
                  aria-label="Copy email to clipboard"
                  className={`
                    absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-2xl border transition-all duration-300
                    ${isDark ? 'bg-[#0f0f0f] border-white/10 hover:border-[#53a7f5] text-[#53a7f5]' : 'bg-white border-slate-200 hover:border-[#53a7f5] text-[#53a7f5]'}
                    shadow-xl hidden md:flex active:scale-90
                  `}
                >
                  {copied ? (
                    <Check size={22} strokeWidth={3} />
                  ) : (
                    <Copy size={22} strokeWidth={3} />
                  )}
                </button>
              </div>
            </Magnetic>

            <div
              className={`flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 ${styles.text}`}
            >
              <MessageSquare size={14} className="text-[#53a7f5]" />
              <span>Average Response: Under 12 Hours</span>
            </div>

            {/* Social Presence */}
            <div className="flex flex-wrap justify-center gap-5 mt-10">
              {[
                {
                  Icon: Linkedin,
                  href: 'https://www.linkedin.com/in/imamul-molla',
                  label: 'LinkedIn',
                },
                {
                  Icon: Github,
                  href: 'https://github.https://github.com/mdimu29ail',
                  label: 'GitHub',
                },
                // { I: BsWhatsapp, h: 'https://wa.me/8801401519086' },
              ].map((item, i) => (
                <Magnetic key={i} strength={0.3}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${item.label}`}
                    className={`
                      w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] border flex items-center justify-center transition-all duration-500
                      ${styles.border} ${isDark ? 'bg-white/5 text-white hover:bg-[#53a7f5] hover:text-white' : 'bg-slate-50 text-slate-700 hover:bg-[#53a7f5] hover:text-white'}
                      hover:shadow-2xl hover:shadow-[#53a7f5]/20 hover:-translate-y-2
                    `}
                  >
                    <item.Icon size={24} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Footer Metadata */}
          <div
            className={`mt-32 pt-10 border-t w-full flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[10px] font-bold uppercase tracking-[0.3em] ${styles.border} ${styles.text}`}
          >
            <div className="flex items-center gap-2">
              <Globe size={12} /> Global Dispatch // {new Date().getFullYear()}
            </div>
            <span>Imamul Molla &copy; Software Engineer</span>
            <span>Khulna, BD</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

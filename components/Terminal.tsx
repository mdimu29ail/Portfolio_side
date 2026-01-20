import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Send, Copy, Check } from 'lucide-react';
import { Magnetic } from './Shared';

export const Terminal: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const [copied, setCopied] = useState(false);
  const isDark = theme === 'dark';
  const email = "imamul.islam2911@gmail.com";

  // Theme-specific styles config
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    text: isDark ? 'text-white' : 'text-neutral-900',
    subText: isDark ? 'text-neutral-400' : 'text-neutral-600',
    border: isDark ? 'border-white/10' : 'border-black/10',
    accent: isDark ? 'text-[#d9ff00]' : 'text-black', // Neon on dark, Black on light
    accentBg: isDark ? 'bg-[#d9ff00]' : 'bg-black',
    accentHover: isDark ? 'hover:text-[#d9ff00]' : 'hover:text-black',
    buttonHover: isDark ? 'hover:bg-[#d9ff00] hover:text-black' : 'hover:bg-black hover:text-white',
    gridColor: isDark ? '#202020' : '#d4d4d4',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={`py-24 md:py-40 px-6 relative overflow-hidden w-full transition-colors duration-500 ${styles.bg}`}>
      
      {/* --- BACKGROUND --- */}
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
            backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`
            relative p-10 md:p-24 rounded-[3rem] border overflow-hidden text-center flex flex-col items-center
            ${styles.cardBg} ${styles.border} shadow-2xl
          `}
        >
            {/* Background Decor */}
            <div className={`absolute -top-40 -left-40 w-[600px] h-[600px] blur-[120px] pointer-events-none opacity-10 transition-colors duration-500 ${isDark ? 'bg-[#d9ff00]' : 'bg-black'}`} />
            
            {/* Status Badge */}
            <div className={`relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-12 ${styles.border} ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-[#d9ff00]' : 'bg-green-500'}`} />
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${styles.text}`}>Uplink Active</span>
            </div>
            
            {/* Main Title */}
            <h2 className={`text-2xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.8] mb-16 ${styles.text}`}>
              Secure the<br />
              <span className={`italic transition-colors duration-500 ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#d9ff00] to-white' : 'text-black'}`}>
                Connection.
              </span>
            </h2>

            {/* Email Interaction */}
            <div className="flex flex-col items-center gap-8 w-full relative z-10 max-w-4xl mx-auto">
                <Magnetic strength={0.2}>
                    <div className="group relative w-full">
                        <a 
                            href={`mailto:${email}`}
                            className={`
                                block w-full px-4 md:px-12 py-6 md:py-8 rounded-2xl border text-center transition-all duration-300
                                text-2xl md:text-5xl lg:text-6xl font-black tracking-tighter break-all text-[#d9ff00]
                                ${styles.border} ${isDark ? 'bg-[white]/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'} ${styles.text}
                            `}
                        >
                            {email}
                        </a>
                        
                        {/* Copy Button (Absolute) */}
                        <button 
                            onClick={(e) => { e.preventDefault(); handleCopy(); }}
                            className={`
                                absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl border transition-all duration-300
                                ${styles.cardBg} ${styles.border} ${styles.buttonHover} shadow-lg hidden md:flex
                            `}
                        >
                            {copied ? <Check size={20} /> : <Copy size={20} />}
                        </button>
                    </div>
                </Magnetic>

                <div className={`flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 ${styles.text}`}>
                    <span>Handshake Protocol</span> <Send size={12} /> <span>Ready</span>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                    {[
                        { Icon: Github, href: "#" },
                        { Icon: Linkedin, href: "#" },
                        { Icon: Twitter, href: "#" }
                    ].map((item, i) => (
                    <Magnetic key={i} strength={0.4}>
                        <a 
                        href={item.href} 
                        className={`
                            w-16 h-16 md:w-20 md:h-20 rounded-2xl border flex items-center justify-center transition-all duration-300
                            ${styles.border} ${isDark ? 'bg-white/5 text-white' : 'bg-black/5 text-black'} ${styles.buttonHover}
                        `}
                        >
                            <item.Icon size={24} />
                        </a>
                    </Magnetic>
                    ))}
                </div>
            </div>

            {/* Footer / Copyright within the terminal */}
            <div className={`mt-24 pt-8 border-t w-full flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 text-[10px] font-mono uppercase tracking-widest ${styles.border} ${styles.text}`}>
                <span>&copy; {new Date().getFullYear()} Imamul Molla.</span>
                <span>All Systems Nominal</span>
                <span>Dhaka, Bangladesh</span>
            </div>

        </motion.div>
      </div>
    </section>
  );
};
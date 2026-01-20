import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Zap, Terminal } from 'lucide-react';
import { Magnetic } from './Shared';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  setPage: (page: any) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, setPage, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isDark = theme === 'dark';
  
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Expertise', id: 'skills' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' }
  ];

  // Theme Config
  const styles = {
    // Glass effect on scroll
    nav: scrolled 
      ? (isDark ? 'bg-[#050505]/80 border-b border-white/10 backdrop-blur-md py-4' : 'bg-white/80 border-b border-black/5 backdrop-blur-md py-4') 
      : 'bg-transparent py-8',
    text: isDark ? 'text-white' : 'text-neutral-900',
    mobileBg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    accent: isDark ? 'text-[#d9ff00]' : 'text-black', // Neon on dark, Black on light
    accentBg: isDark ? 'bg-[#d9ff00]' : 'bg-black',
    accentText: isDark ? 'text-black' : 'text-white',
    gridColor: isDark ? '#202020' : '#d4d4d4',
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 w-full ${styles.nav}`}>
        <div className="max-w-[95rem] mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Logo Area */}
          <Magnetic strength={0.2}>
            <button onClick={() => { setPage('home'); setOpen(false); }} className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 ${styles.accentBg} ${styles.accentText}`}>
                <Terminal size={20} />
              </div>
              <div className="flex flex-col items-start">
                <span className={`text-lg font-bold uppercase tracking-tight leading-none ${styles.text}`}>IMAMUL<span className={styles.accent}>.</span></span>
                <span className={`text-[9px] font-mono uppercase tracking-widest opacity-50 ${styles.text}`}>Dev_Console</span>
              </div>
            </button>
          </Magnetic>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => setPage(link.id)}
                className={`
                  relative text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300
                  ${currentPage === link.id ? styles.accent : `${styles.text} opacity-50 hover:opacity-100`}
                `}
              >
                {link.name}
                {currentPage === link.id && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDark ? 'bg-[#d9ff00]' : 'bg-black'}`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className={`p-2.5 rounded-full border transition-colors ${styles.text} ${isDark ? 'border-white/10 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button 
              onClick={() => setOpen(!open)} 
              className={`lg:hidden p-2 transition-colors ${styles.accent}`}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
            
            <button className={`hidden lg:block px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg ${styles.accentBg} ${styles.accentText}`}>
              Initialize
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed inset-0 z-[1001] flex flex-col items-center justify-center p-6 lg:hidden ${styles.mobileBg}`}
          >
             {/* Background Grid */}
             <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, ${styles.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${styles.gridColor} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
             />

             <button onClick={() => setOpen(false)} className={`absolute top-8 right-8 p-4 ${styles.accent}`}><X size={32} /></button>
             
             <div className="flex flex-col items-center gap-10 relative z-10">
               {navLinks.map((link, idx) => (
                 <motion.button 
                   key={link.id} 
                   initial={{ y: 20, opacity: 0 }} 
                   animate={{ y: 0, opacity: 1 }} 
                   transition={{ delay: idx * 0.1 }}
                   onClick={() => { setPage(link.id); setOpen(false); }}
                   className={`text-5xl font-black uppercase tracking-tighter transition-all ${currentPage === link.id ? styles.accent : `${styles.text} opacity-30`}`}
                 >
                   {link.name}
                 </motion.button>
               ))}
             </div>

             <div className={`absolute bottom-12 text-[10px] font-mono uppercase tracking-widest opacity-40 ${styles.text}`}>
                System Navigation v4.0
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';
import { Magnetic } from './Shared';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  setPage: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  setPage,
  currentPage,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Expertise', id: 'skills' },
    { name: 'Projects', id: 'work' },
    { name: 'Contact', id: 'contact' },
  ];

  const styles = {
    // Full width background with glass effect
    navWrapper: `fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
      scrolled
        ? isDark
          ? 'bg-[#0a0a0a]/80 border-b border-white/5 backdrop-blur-md py-3'
          : 'bg-white/80 border-b border-black/5 backdrop-blur-md py-3'
        : 'bg-transparent py-6'
    }`,
    text: isDark ? 'text-slate-100' : 'text-slate-900',
    accent: 'text-[#53a7f5]',
    accentBg: 'bg-[#53a7f5]',
    accentText: 'text-white',
  };

  return (
    <>
      <header role="banner" className={styles.navWrapper}>
        {/* === CONTAINER START === */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Magnetic strength={0.2}>
              <button
                onClick={() => {
                  setPage('home');
                  setOpen(false);
                }}
                className="flex items-center gap-3 group outline-none"
                aria-label="Portfolio Home"
              >
                <div
                  className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(83,167,245,0.4)] ${styles.accentBg} ${styles.accentText}`}
                >
                  <Code2 size={22} />
                </div>
                <div className="hidden sm:flex flex-col items-start leading-none">
                  <span
                    className={`text-lg md:text-xl font-black uppercase tracking-tighter ${styles.text}`}
                  >
                    IMAMUL<span className={styles.accent}>.</span>
                  </span>
                  <span
                    className={`text-[9px] font-bold uppercase tracking-[0.2em] opacity-50 ${styles.text}`}
                  >
                    MERN Developer
                  </span>
                </div>
              </button>
            </Magnetic>

            {/* Desktop Links */}
            <nav
              className="hidden lg:flex items-center gap-8 xl:gap-12"
              aria-label="Desktop Navigation"
            >
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => setPage(link.id)}
                  className={`relative text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    currentPage === link.id
                      ? styles.accent
                      : `${styles.text} opacity-50 hover:opacity-100`
                  }`}
                >
                  {link.name}
                  {currentPage === link.id && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#53a7f5]"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`p-2.5 rounded-full border transition-all ${styles.text} ${isDark ? 'border-white/10 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'}`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                className={`hidden md:block px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#53a7f5]/20 hover:scale-105 active:scale-95 transition-all ${styles.accentBg} ${styles.accentText}`}
              >
                Hire Me
              </button>

              <button
                onClick={() => setOpen(!open)}
                className={`lg:hidden p-2 ${styles.accent}`}
                aria-label="Menu"
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {/* === CONTAINER END === */}
      </header>

      {/* Mobile Menu (Full Screen) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className={`fixed inset-0 z-[1001] flex flex-col items-center justify-center ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}
          >
            <button
              onClick={() => setOpen(false)}
              className={`absolute top-8 right-8 p-4 ${styles.accent}`}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => {
                    setPage(link.id);
                    setOpen(false);
                  }}
                  className={`text-4xl font-black uppercase tracking-tighter ${currentPage === link.id ? styles.accent : `${styles.text} opacity-30`}`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

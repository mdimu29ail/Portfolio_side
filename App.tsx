import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/Marquee';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Metrics } from './components/Metrics';
import { WorkArchive } from './components/WorkArchive';
import { GitHubContributions } from './components/GitHubContributions';
import { Capabilities } from './components/Capabilities';
import { Terminal } from './components/Terminal';
import {
  Github,
  Linkedin,
  Instagram,
  ArrowUp,
  Send,
  MapPin,
  Mail,
  Twitter,
  ChevronRight,
} from 'lucide-react';
import { Magnetic } from './components/Shared';
import { BsWhatsapp } from 'react-icons/bs';
import { FAQs } from './components/FAQs';
import { Testimonials } from './components/Testimonials';

type Page = 'home' | 'work' | 'skills' | 'contact';

// 100% Performance Loading Manager
const LoadingManager: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setProg(p => (p >= 100 ? 100 : p + 5)), 20);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (prog === 100) setTimeout(onComplete, 500);
  }, [prog, onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-sm text-center">
        <div className="flex justify-between items-end mb-3 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#53a7f5]">
            Optimizing Experience
          </span>
          <span className="text-5xl font-black text-[#53a7f5] font-mono">
            {prog}%
          </span>
        </div>
        <div className="h-1 w-full bg-white/5 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#53a7f5]"
            initial={{ width: 0 }}
            animate={{ width: `${prog}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const isDark = theme === 'dark';

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8fafc]',
    text: isDark ? 'text-slate-200' : 'text-slate-900',
    border: isDark ? 'border-white/10' : 'border-slate-200',
    accent: '#53a7f5',
    selection: isDark
      ? 'selection:bg-[#53a7f5] selection:text-white'
      : 'selection:bg-[#53a7f5] selection:text-white',
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'work':
        return <WorkArchive theme={theme} />;
      case 'skills':
        return <Expertise theme={theme} />;
      case 'contact':
        return <Terminal theme={theme} />;
      default:
        return (
          <div className="flex flex-col">
            <Hero theme={theme} />
            <TechMarquee theme={theme} />
            <div className="container mx-auto px-4 md:px-8">
              <About theme={theme} />
              <Expertise theme={theme} />
              <Metrics theme={theme} />
              <WorkArchive theme={theme} />
              <GitHubContributions theme={theme} />
              <Testimonials theme={theme} />
              <Capabilities theme={theme} />
              <FAQs theme={theme} />

              <Terminal theme={theme} />
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`transition-colors duration-700 min-h-screen ${styles.bg} ${styles.text} ${styles.selection}`}
    >
      {/* 100% Performance Scroll Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#53a7f5] z-[10001] origin-left"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {!isLoaded && (
          <LoadingManager key="loader" onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      {isLoaded && (
        <div className="relative w-full">
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            setPage={setCurrentPage}
            currentPage={currentPage}
          />

          <main id="main-content" className="relative z-10 w-full pt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: 'circOut' }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* --- MODERN FOOTER --- */}
          <footer
            className={`pt-32 pb-12 mt-20 relative overflow-hidden border-t ${styles.border}`}
          >
            {/* Background Branding (SEO neutral) */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[20vw] font-black uppercase pointer-events-none select-none leading-none tracking-tighter opacity-[0.03] whitespace-nowrap">
              IMAMUL
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                {/* Brand Section */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#53a7f5] flex items-center justify-center text-white shadow-lg shadow-[#53a7f5]/20">
                      <Send size={24} />
                    </div>
                    <h2 className="text-3xl font-black tracking-tighter uppercase">
                      Let's <span className="text-[#53a7f5]">Build_</span>
                    </h2>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-10 text-sm leading-relaxed">
                    MERN Stack developer focused on building scalable,
                    accessible, and high-performance web applications.
                  </p>
                  <div className="flex flex-col gap-6">
                    <a
                      href="mailto:imamul.islam2911@gmail.com"
                      className="group flex items-center gap-4 outline-none"
                    >
                      <div
                        className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${styles.border} group-hover:bg-[#53a7f5] group-hover:text-white group-focus:ring-2 ring-[#53a7f5]`}
                      >
                        <Mail size={18} />
                      </div>
                      <span className="text-lg font-bold tracking-tight">
                        mdimu@gmail.com
                      </span>
                    </a>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40">
                      <MapPin size={16} className="text-[#53a7f5]" /> Dhaka,
                      Bangladesh
                    </div>
                  </div>
                </div>

                {/* Nav Links */}
                <div className="lg:col-span-3">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-[#53a7f5]">
                    Sitemap
                  </h4>
                  <nav className="flex flex-col gap-4">
                    {[
                      { n: 'Home', id: 'home' },
                      { n: 'Portfolio', id: 'work' },
                      { n: 'Skills', id: 'skills' },
                      { n: 'Contact', id: 'contact' },
                    ].map(link => (
                      <button
                        key={link.id}
                        onClick={() => setCurrentPage(link.id as Page)}
                        className="text-sm font-bold uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-[#53a7f5] transition-all text-left flex items-center gap-2 group"
                      >
                        <ChevronRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                        />
                        {link.n}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Social Presence */}
                <div className="lg:col-span-4 flex flex-col lg:items-end gap-12">
                  <div className="flex gap-3">
                    {[
                      { I: Github, h: 'https://github.com/mdimu29ail' },
                      {
                        I: Linkedin,
                        h: 'https://www.linkedin.com/in/imamul-molla',
                      },
                      { I: BsWhatsapp, h: 'https://wa.me/8801401519086' },
                    ].map(({ I, h }, i) => (
                      <a
                        key={i}
                        href={h}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link"
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 ${styles.border} hover:bg-[#53a7f5] hover:text-white hover:-translate-y-1`}
                      >
                        <I size={18} />
                      </a>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    className={`group flex items-center gap-4 px-6 py-4 border rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${styles.border} hover:border-[#53a7f5] hover:text-[#53a7f5]`}
                  >
                    Back to top{' '}
                    <ArrowUp
                      size={14}
                      className="group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </div>
              </div>

              {/* Copyright Bar */}
              <div
                className={`pt-10 border-t flex flex-col md:flex-row items-center justify-between gap-6 ${styles.border}`}
              >
                <div className="text-center md:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-30">
                    &copy; {new Date().getFullYear()} Imamul Molla. All Rights
                    Reserved.
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#53a7f5]/40 mt-1">
                    Built with MERN Stack & Framer Motion
                  </p>
                </div>
                <div className="flex gap-6 text-[9px] font-bold uppercase tracking-widest opacity-30">
                  <a
                    href="#"
                    className="hover:text-[#53a7f5] transition-colors"
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#53a7f5] transition-colors"
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;

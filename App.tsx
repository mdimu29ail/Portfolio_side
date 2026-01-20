import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/Marquee';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Metrics } from './components/Metrics';
import { Legacy } from './components/Legacy';
import { WorkArchive } from './components/WorkArchive';
import { GitHubContributions } from './components/GitHubContributions';
import { Capabilities } from './components/Capabilities';
import { Protocol } from './components/Protocol';
import { Testimonials } from './components/Testimonials';
import { FAQs } from './components/FAQs';
import { Insights } from './components/Insights';
import { Terminal } from './components/Terminal';
import { Github, Linkedin, Instagram, ArrowUp, Send, MapPin, Mail, Twitter } from 'lucide-react';
import { Magnetic } from './components/Shared';

type Page = 'home' | 'work' | 'skills' | 'contact';

const LoadingManager: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setProg(p => (p >= 100 ? 100 : p + 4)), 15);
    return () => clearInterval(t);
  }, []);
  useEffect(() => { if (prog === 100) setTimeout(onComplete, 600); }, [prog, onComplete]);

  return (
    <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-end mb-4 text-white">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d9ff00]">System Syncing</span>
           <span className="text-6xl font-black text-[#d9ff00] font-mono">{prog}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 relative overflow-hidden rounded-full">
           <motion.div className="absolute inset-y-0 left-0 bg-[#d9ff00]" initial={{ width: 0 }} animate={{ width: `${prog}%` }} />
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
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const isDark = theme === 'dark';

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Styles for the main container
  const styles = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f0f0f0]',
    text: isDark ? 'text-white' : 'text-neutral-900',
    border: isDark ? 'border-white/10' : 'border-black/10',
    accent: '#d9ff00', // Neon yellow is our signature
    cardBg: isDark ? 'bg-[#0a0a0a]' : 'bg-white',
    selection: isDark ? 'selection:bg-[#d9ff00] selection:text-black' : 'selection:bg-black selection:text-white',
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'work':
        return <div className="space-y-0"><WorkArchive theme={theme} /></div>;
      case 'skills':
        return <div className="space-y-0"><Expertise theme={theme} /></div>;
      case 'contact':
        return <div className="space-y-0"><Terminal theme={theme} /></div>;
      default:
        return (
          <div className="space-y-0">
            <Hero theme={theme} />
            <TechMarquee theme={theme} />
            <About theme={theme} />
            <Expertise theme={theme} />
            <Metrics theme={theme} />
            <Legacy theme={theme} />
            <WorkArchive theme={theme} />
            <GitHubContributions theme={theme} />
            <Capabilities theme={theme} />
            <Protocol theme={theme} />
            <Testimonials theme={theme} />
            <FAQs theme={theme} />
            <Insights theme={theme} />
            <Terminal theme={theme} />
          </div>
        );
    }
  };

  return (
    <div className={`transition-colors duration-1000 min-h-screen ${styles.bg} ${styles.text} ${styles.selection}`}>
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#d9ff00] z-[10001] origin-left" style={{ scaleX }} />
      
      <AnimatePresence mode="wait">
        {!isLoaded && <LoadingManager key="loader" onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>

      {isLoaded && (
        <div className="relative w-full overflow-x-hidden">
          <Navbar theme={theme} toggleTheme={toggleTheme} setPage={setCurrentPage} currentPage={currentPage} />
          
          <main className="relative z-10 w-full pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>
          
          {/* --- FOOTER --- */}
          <footer className={`pt-40 md:pt-60 pb-20 px-6 relative overflow-hidden border-t transition-colors duration-700 ${styles.bg} ${styles.text} ${styles.border}`}>
             
             {/* The Monolith Background Text */}
             <div className={`absolute top-40 left-1/2 -translate-x-1/2 text-[25vw] font-black uppercase pointer-events-none select-none leading-none tracking-tighter whitespace-nowrap opacity-5 ${isDark ? 'text-[#d9ff00]' : 'text-black'}`}>
                IMAMUL
             </div>

             <div className="container max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8 mb-40">
                   
                   {/* Col 1: Brand & CTA */}
                   <div className="lg:col-span-6 flex flex-col items-start">
                      <div className="flex items-center gap-6 mb-16">
                         <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-black shadow-2xl ${isDark ? 'bg-[#d9ff00] shadow-[#d9ff00]/20' : 'bg-black text-white shadow-black/20'}`}>
                            <Send size={28} />
                         </div>
                         <h2 className="text-[2rem] md:text-[4rem] font-black uppercase tracking-tighter leading-none">
                            Let's <br /><span className={isDark ? "text-[#d9ff00]" : "text-black"}>Sync_</span>
                         </h2>
                      </div>
                      <div className="flex flex-col gap-10">
                         <Magnetic strength={0.1}>
                            <a href="mailto:imamul.islam2911@gmail.com" className="group block">
                               <div className="flex items-center gap-6">
                                  <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 ${styles.border} ${isDark ? 'group-hover:bg-[#d9ff00] group-hover:text-black' : 'group-hover:bg-black group-hover:text-white'}`}>
                                     <Mail size={20} />
                                  </div>
                                  <span className={`text-xl md:text-3xl font-bold tracking-tighter transition-colors ${isDark ? 'group-hover:text-[#d9ff00]' : 'group-hover:text-neutral-500'}`}>IMAMUL.CORE</span>
                               </div>
                            </a>
                         </Magnetic>
                         <div className={`flex items-center gap-6 text-[10px] font-mono font-bold uppercase tracking-[0.4em] opacity-40`}>
                            <MapPin size={18} className={isDark ? "text-[#d9ff00]" : "text-black"} /> DHAKA // KHULNA // GLOBAL
                         </div>
                      </div>
                   </div>

                   {/* Col 2: Navigation Links */}
                   <div className="lg:col-span-3">
                      <h4 className={`text-[10px] font-black uppercase tracking-[0.8em] mb-12 ${isDark ? 'text-[#d9ff00]' : 'text-black'}`}>System_Map</h4>
                      <div className="flex flex-col gap-6">
                        {['Core_Index', 'Project_Archive', 'Skill_Matrix', 'Knowledge_Base'].map((link, i) => (
                          <button 
                            key={link} 
                            onClick={() => setCurrentPage(i === 0 ? 'home' : i === 1 ? 'work' : 'skills')}
                            className={`text-xl md:text-2xl font-bold uppercase tracking-tighter opacity-40 hover:opacity-100 hover:translate-x-4 transition-all duration-500 text-left ${isDark ? 'hover:text-[#d9ff00]' : 'hover:text-black'}`}
                          >
                            {link}
                          </button>
                        ))}
                      </div>
                   </div>

                   {/* Col 3: Social & Utility */}
                   <div className="lg:col-span-3 flex flex-col items-end gap-20">
                      <div className="flex gap-4">
                        {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                          <a key={i} href="#" className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-500 shadow-lg ${styles.border} ${styles.cardBg} ${isDark ? 'hover:bg-[#d9ff00] hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <Icon size={20} />
                          </a>
                        ))}
                      </div>
                      <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className={`group flex items-center gap-6 px-8 py-6 border rounded-xl text-[10px] font-black uppercase tracking-[0.5em] transition-all duration-700 ${styles.border} ${isDark ? 'hover:bg-[#d9ff00] hover:text-black hover:border-[#d9ff00]' : 'hover:bg-black hover:text-white hover:border-black'}`}
                      >
                         Return_Top <ArrowUp size={16} className="group-hover:-translate-y-2 transition-transform" />
                      </button>
                   </div>
                </div>

                {/* Bottom Bar */}
                <div className={`pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-12 ${styles.border}`}>
                   <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.6em] opacity-30">&copy; 2024 Protocols Reserved</span>
                      <p className={`text-[9px] font-black uppercase tracking-[0.4em] ${isDark ? 'text-[#d9ff00]/30' : 'text-black/30'}`}>Engine v4.8.0 // Full Fidelity Deployment</p>
                   </div>
                   <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
                      <a href="#" className="hover:opacity-100 transition-opacity">Privacy_Vault</a>
                      <a href="#" className="hover:opacity-100 transition-opacity">Legal_Notice</a>
                      <a href="#" className="hover:opacity-100 transition-opacity">Terms_Protocol</a>
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
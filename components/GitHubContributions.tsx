import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Code2,
  GitBranch,
  Flame,
  Calendar,
  Globe2,
  Activity,
  Zap,
  Minus,
  UserCheck,
} from 'lucide-react';
import { Week, GithubEvent, ActivityItem } from '../types';

const USERNAME = 'mdimu29ail';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GitHubContributions: React.FC<{ theme: 'dark' | 'light' }> = ({
  theme,
}) => {
  // Theme Toggle Logic
  const isDark = theme === 'dark';
  const currentMonthName = new Date().toLocaleString('default', {
    month: 'short',
  });
  const currentYear = new Date().getFullYear();

  // Dynamic Styles for Light/Dark Mode
  const styles = useMemo(
    () => ({
      text: isDark ? 'text-slate-100' : 'text-slate-900',
      subText: isDark ? 'text-slate-500' : 'text-slate-600', // Higher contrast for light mode
      border: isDark ? 'border-white/5' : 'border-slate-200',
      cardBg: isDark
        ? 'bg-[#0a0a0a]/40 backdrop-blur-3xl'
        : 'bg-white/90 backdrop-blur-xl shadow-xl shadow-blue-900/5',
      accent: '#53a7f5',
      // Heatmap Levels optimized for both modes
      levels: {
        l0: isDark ? 'bg-white/[0.04]' : 'bg-slate-100',
        l1: isDark
          ? 'bg-blue-900/30 text-blue-400'
          : 'bg-blue-100 text-blue-500',
        l2: isDark
          ? 'bg-blue-700/50 text-blue-200'
          : 'bg-blue-200 text-blue-600',
        l3: isDark
          ? 'bg-[#53a7f5] text-white shadow-[0_0_15px_rgba(83,167,245,0.4)]'
          : 'bg-[#53a7f5] text-white shadow-lg shadow-blue-400/30',
      },
    }),
    [isDark],
  );

  const [weeks, setWeeks] = useState<Week[]>([]);
  const [visibleWeeksCount, setVisibleWeeksCount] = useState<number>(53);
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [yearsList, setYearsList] = useState<number[]>([]);
  const [isCalendarLoading, setIsCalendarLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 500) setVisibleWeeksCount(16);
      else if (width < 800) setVisibleWeeksCount(28);
      else if (width < 1200) setVisibleWeeksCount(42);
      else setVisibleWeeksCount(53);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const years = Array.from(
      { length: currentYear - 2020 + 1 },
      (_, i) => currentYear - i,
    );
    setYearsList(years);
  }, [currentYear]);

  const fetchCalendar = useCallback(async () => {
    setIsCalendarLoading(true);
    const query = `query { user(login: "${USERNAME}") { contributionsCollection(from: "${selectedYear}-01-01T00:00:00Z", to: "${selectedYear}-12-31T23:59:59Z") { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } } } } }`;
    try {
      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });
      const json = await res.json();
      if (json.data?.user) {
        const calendar =
          json.data.user.contributionsCollection.contributionCalendar;
        setWeeks(calendar.weeks);
        setTotalContributions(calendar.totalContributions);
      }
    } catch (e) {
      console.error('API Error');
    } finally {
      setIsCalendarLoading(false);
    }
  }, [selectedYear]);

  useEffect(() => {
    fetchCalendar();
  }, [fetchCalendar]);

  const displayWeeks = useMemo(() => {
    const start = Math.max(0, weeks.length - visibleWeeksCount);
    return weeks.slice(start);
  }, [weeks, visibleWeeksCount]);

  const monthLabels = useMemo(() => {
    const labels: { label: string; index: number }[] = [];
    displayWeeks.forEach((week, i) => {
      const date = new Date(week.contributionDays[0].date);
      if (
        i === 0 ||
        date.getMonth() !==
          new Date(displayWeeks[i - 1].contributionDays[0].date).getMonth()
      ) {
        labels.push({
          label: date.toLocaleString('default', { month: 'short' }),
          index: i,
        });
      }
    });
    return labels;
  }, [displayWeeks]);

  return (
    <section
      className={`relative flex flex-col items-center gap-12 w-full py-24 px-6 overflow-hidden transition-colors duration-700 ${isDark ? 'bg-[#050505]' : 'bg-slate-50'}`}
    >
      {/* DOT MATRIX BACKGROUND - ADAPTS TO THEME */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${isDark ? 'rgba(83, 167, 245, 0.15)' : 'rgba(83, 167, 245, 0.25)'} 1.5px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[140px] rounded-full ${isDark ? 'bg-[#53a7f5]/10' : 'bg-[#53a7f5]/5'}`}
        />
      </div>

      {/* HEADER */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="p-3 bg-[#53a7f5] rounded-2xl text-white shadow-xl"
            >
              <GitBranch size={24} />
            </motion.div>
            <span
              className={`text-[10px] font-black uppercase tracking-[0.4em] text-[#53a7f5]`}
            >
              Engineering Activity
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none ${styles.text}`}
          >
            Developer <span className="text-[#53a7f5]">Workflow.</span>
          </h2>
        </div>

        <div
          className={`flex items-center gap-10 p-8 md:p-12 rounded-[2.5rem] border ${styles.cardBg} ${styles.border}`}
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Globe2
                size={16}
                className="mx-auto mb-3 text-[#53a7f5] opacity-50"
              />
            </motion.div>
            <p
              className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${styles.subText}`}
            >
              Total Output
            </p>
            <p className={`text-4xl font-black tabular-nums ${styles.text}`}>
              {totalContributions.toLocaleString()}
            </p>
          </div>
          <div
            className={`w-px h-16 ${isDark ? 'bg-white/5' : 'bg-slate-200'}`}
          />
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Calendar
                size={16}
                className="mx-auto mb-3 text-[#53a7f5] opacity-50"
              />
            </motion.div>
            <p
              className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${styles.subText}`}
            >
              Active Year
            </p>
            <p className={`text-4xl font-black tabular-nums ${styles.text}`}>
              {selectedYear}
            </p>
          </div>
        </div>
      </div>

      {/* HEATMAP CARD */}
      <div
        className={`relative z-10 w-full max-w-7xl p-10 md:p-14 border rounded-[3rem] ${styles.cardBg} ${styles.border}`}
      >
        {/* YEAR NAV + USERNAME + SMILE */}
        <div className="flex flex-col items-center mb-16 relative">
          <div
            className={`flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border bg-[#53a7f5]/10 border-[#53a7f5]/20`}
          >
            <UserCheck size={14} className="text-[#53a7f5]" />
            <span className="text-[10px] font-black tracking-widest uppercase text-[#53a7f5]">
              @{USERNAME}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {yearsList.map(y => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all 
                ${selectedYear === y ? 'bg-[#53a7f5] text-white shadow-lg' : isDark ? 'bg-white/5 text-slate-500 hover:text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                {y}
              </button>
            ))}
          </div>

          <div
            className={`absolute -bottom-6 w-32 h-4 border-b-2 rounded-[50%] pointer-events-none ${isDark ? 'border-[#53a7f5]/30' : 'border-[#53a7f5]/20'}`}
          />
        </div>

        {/* Heatmap Grid */}
        <div className="flex flex-col items-center w-full">
          <div
            className={`flex w-full mb-6 h-6 relative font-black text-[10px] uppercase tracking-[0.2em] ${styles.subText}`}
          >
            {monthLabels.map((m, idx) => {
              const isCurrentMonth =
                m.label === currentMonthName && selectedYear === currentYear;
              return (
                <span
                  key={idx}
                  className={`absolute flex items-center gap-1.5 transition-all duration-500 ${isCurrentMonth ? 'text-[#53a7f5] opacity-100 scale-110' : 'opacity-40'}`}
                  style={{ left: `${(m.index / displayWeeks.length) * 100}%` }}
                >
                  {isCurrentMonth && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#53a7f5] animate-pulse" />
                  )}
                  {m.label}
                </span>
              );
            })}
          </div>

          <div className="flex gap-[5px] w-full justify-between">
            {displayWeeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[5px] flex-1">
                {week.contributionDays.map(day => (
                  <div
                    key={day.date}
                    onMouseEnter={() => setHoveredDate(day.date)}
                    onMouseLeave={() => setHoveredDate(null)}
                    className={`aspect-square w-full rounded-[3px] transition-all duration-300 cursor-pointer flex items-center justify-center relative 
                    ${day.contributionCount === 0 ? styles.levels.l0 : day.contributionCount < 3 ? styles.levels.l1 : day.contributionCount < 6 ? styles.levels.l2 : styles.levels.l3} 
                    ${hoveredDate === day.date ? 'ring-2 ring-[#53a7f5] scale-150 z-20 shadow-xl' : ''}`}
                  >
                    {day.contributionCount >= 6 && (
                      <Zap size={6} fill="currentColor" />
                    )}
                    {day.contributionCount > 0 && day.contributionCount < 3 && (
                      <Minus size={6} strokeWidth={4} className="opacity-40" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div
          className={`mt-16 pt-10 border-t flex flex-col md:flex-row items-center justify-between gap-10 ${isDark ? 'border-white/5' : 'border-slate-200'}`}
        >
          <div className="flex items-center gap-6">
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-[2rem] bg-[#53a7f5] flex items-center justify-center text-white shadow-2xl"
            >
              <Flame size={28} fill="currentColor" />
            </motion.div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[#53a7f5]"
                >
                  <Activity size={24} strokeWidth={3} />
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#53a7f5]">
                  {hoveredDate
                    ? weeks
                        .flatMap(w => w.contributionDays)
                        .find(d => d.date === hoveredDate)?.contributionCount ||
                      0
                    : (totalContributions / 365).toFixed(1)}
                  <span className="text-xl opacity-60 ml-2">Avg.</span>
                </h3>
              </div>
              <p
                className={`text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 ${styles.text}`}
              >
                {hoveredDate
                  ? new Date(hoveredDate).toLocaleDateString(undefined, {
                      month: 'long',
                      day: 'numeric',
                    })
                  : 'Daily Momentum'}
              </p>
            </div>
          </div>

          <div
            className={`flex items-center gap-4 px-6 py-3 rounded-full border ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-100 border-slate-200'}`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-[2px] flex items-center justify-center ${styles.levels.l1}`}
              >
                <Minus size={6} strokeWidth={4} />
              </div>
              <span
                className={`text-[9px] font-black uppercase opacity-60 ${styles.text}`}
              >
                Low
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-[2px] flex items-center justify-center ${styles.levels.l3}`}
              >
                <Zap size={6} fill="currentColor" />
              </div>
              <span
                className={`text-[9px] font-black uppercase opacity-60 ${styles.text}`}
              >
                Peak
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

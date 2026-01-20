import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { X, Github, Terminal, Dumbbell } from 'lucide-react';
import { Week, RepoData, GithubEvent, ActivityItem } from '../types';
import { ContributionSquare } from './ContributionSquare';

const USERNAME = 'mdimu29ail';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GitHubContributions: React.FC<{ theme: 'dark' | 'light' }> = ({
  theme,
}) => {
  const isDark = theme === 'dark' || true;

  const styles = useMemo(
    () => ({
      text: isDark ? 'text-zinc-100' : 'text-zinc-900',
      subText: isDark ? 'text-zinc-500' : 'text-zinc-400',
      border: isDark ? 'border-zinc-800' : 'border-zinc-200',
      cardBg: isDark ? 'bg-[#0d0d0d]/90 backdrop-blur-xl' : 'bg-white',
      emptySquare: isDark ? 'bg-[#161b22]/60' : 'bg-zinc-200',
      levels: {
        l1: isDark ? 'bg-zinc-800' : 'bg-zinc-200',
        l2: isDark ? 'bg-zinc-600' : 'bg-zinc-300',
        l3: isDark ? 'bg-zinc-400' : 'bg-zinc-400',
      },
      topDay:
        'bg-[#d9ff00] shadow-[0_0_25px_rgba(217,255,0,0.6)] animate-pulse',
      accent: '#d9ff00',
    }),
    [isDark],
  );

  const [weeks, setWeeks] = useState<Week[]>([]);
  // State to track how many weeks to show based on screen width
  const [visibleWeeksCount, setVisibleWeeksCount] = useState<number>(53);

  const [hoveredDate, setHoveredDate] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [eventsCache, setEventsCache] = useState<Record<string, RepoData[]>>(
    {},
  );
  const [loadingDates, setLoadingDates] = useState<Set<string>>(new Set());
  const [topDaysSet, setTopDaysSet] = useState<Set<string>>(new Set());
  const [globalMaxDate, setGlobalMaxDate] = useState<string | null>(null);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [yearsList, setYearsList] = useState<number[]>([]);
  const [isCalendarLoading, setIsCalendarLoading] = useState<boolean>(false);

  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // --- RESIZE HANDLER ---
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setVisibleWeeksCount(18); // Show ~4 months on small mobile
      } else if (width < 768) {
        setVisibleWeeksCount(28); // Show ~6 months on large mobile
      } else if (width < 1024) {
        setVisibleWeeksCount(40); // Show ~9 months on tablet
      } else {
        setVisibleWeeksCount(53); // Show full year on desktop
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const years = Array.from(
      { length: new Date().getFullYear() - 2018 + 1 },
      (_, i) => new Date().getFullYear() - i,
    );
    setYearsList(years);
  }, []);

  // --- FETCH DATA LOGIC ---
  const fetchEventsForDate = useCallback(
    async (date: string) => {
      if (eventsCache[date]) return;
      setLoadingDates(prev => new Set(prev).add(date));

      try {
        const res = await fetch(
          `https://api.github.com/users/${USERNAME}/events?per_page=100`,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              Accept: 'application/vnd.github.v3+json',
            },
          },
        );
        if (!res.ok) throw new Error('API Error');
        const events: GithubEvent[] = await res.json();

        const dayEvents = events.filter(e => e.created_at.startsWith(date));
        const repoMap: Record<string, ActivityItem[]> = {};

        dayEvents.forEach(e => {
          const name = e.repo.name;
          if (!repoMap[name]) repoMap[name] = [];

          if (e.type === 'PushEvent') {
            e.payload.commits?.forEach(c => {
              repoMap[name].push({ type: 'commit', text: c.message });
            });
          } else if (e.type === 'PullRequestEvent') {
            repoMap[name].push({
              type: 'pr',
              text: `${e.payload.action === 'opened' ? 'Opened' : 'Closed'} PR #${e.payload.pull_request?.number}: ${e.payload.pull_request?.title}`,
            });
          } else if (e.type === 'IssuesEvent') {
            repoMap[name].push({
              type: 'issue',
              text: `${e.payload.action === 'opened' ? 'Opened' : 'Closed'} Issue #${e.payload.issue?.number}: ${e.payload.issue?.title}`,
            });
          } else if (e.type === 'CreateEvent') {
            repoMap[name].push({
              type: 'generic',
              text: `Created ${e.payload.ref_type}: ${e.repo.name}`,
            });
          }
        });

        const repoData: RepoData[] = Object.entries(repoMap).map(
          ([repo, activities]) => ({
            repo,
            activities,
          }),
        );

        setEventsCache(prev => ({ ...prev, [date]: repoData }));
      } catch (error) {
        setEventsCache(prev => ({ ...prev, [date]: [] }));
      } finally {
        setLoadingDates(prev => {
          const next = new Set(prev);
          next.delete(date);
          return next;
        });
      }
    },
    [eventsCache],
  );

  const generateMockData = useCallback((year: number) => {
    const mockWeeks: Week[] = [];
    let total = 0;
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);
    let current = new Date(start);
    while (current <= end) {
      const week: Week = { contributionDays: [] };
      for (let i = 0; i < 7 && current <= end; i++) {
        const dateStr = current.toISOString().split('T')[0];
        const count = Math.random() > 0.4 ? Math.floor(Math.random() * 8) : 0;
        week.contributionDays.push({ date: dateStr, contributionCount: count });
        total += count;
        current.setDate(current.getDate() + 1);
      }
      mockWeeks.push(week);
    }
    setWeeks(mockWeeks);
    setTotalContributions(total);
  }, []);

  const fetchCalendar = useCallback(async () => {
    setIsCalendarLoading(true);
    const fromDate = `${selectedYear}-01-01T00:00:00Z`;
    const toDate = `${selectedYear}-12-31T23:59:59Z`;
    const query = `query { user(login: "${USERNAME}") { contributionsCollection(from: "${fromDate}", to: "${toDate}") { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } } } } }`;

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

        const monthlyMaxMap: Record<string, { count: number; date: string }> =
          {};
        let gMaxCount = -1;
        let gMaxDate: string | null = null;

        calendar.weeks.forEach((week: Week) => {
          week.contributionDays.forEach(day => {
            const { contributionCount: count, date } = day;
            if (count === 0) return;
            if (count > gMaxCount) {
              gMaxCount = count;
              gMaxDate = date;
            }
            const monthKey = date.substring(0, 7);
            if (
              !monthlyMaxMap[monthKey] ||
              count > monthlyMaxMap[monthKey].count
            ) {
              monthlyMaxMap[monthKey] = { count, date };
            }
          });
        });
        setTopDaysSet(new Set(Object.values(monthlyMaxMap).map(o => o.date)));
        setGlobalMaxDate(gMaxDate);
      } else {
        generateMockData(selectedYear);
      }
    } catch (e) {
      generateMockData(selectedYear);
    } finally {
      setIsCalendarLoading(false);
    }
  }, [selectedYear, generateMockData]);

  useEffect(() => {
    fetchCalendar();
  }, [fetchCalendar]);

  const handleHover = (date: string | null) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredDate(date);
    if (date) {
      hoverTimeoutRef.current = setTimeout(() => fetchEventsForDate(date), 250);
    }
  };

  const currentDisplayDate = hoveredDate || selectedDate;

  // --- DERIVE VISIBLE WEEKS ---
  // Slice the array to only show the most recent 'visibleWeeksCount' weeks
  const displayWeeks = useMemo(() => {
    if (weeks.length === 0) return [];
    // If visibleWeeksCount is less than total, we slice from the end
    const start = Math.max(0, weeks.length - visibleWeeksCount);
    return weeks.slice(start);
  }, [weeks, visibleWeeksCount]);

  const monthLabels = useMemo(() => {
    const labels: { label: string; index: number }[] = [];
    displayWeeks.forEach((week, i) => {
      const firstDay = week.contributionDays[0];
      if (firstDay) {
        const date = new Date(firstDay.date);
        const prevWeek = displayWeeks[i - 1];
        const prevDate = prevWeek
          ? new Date(prevWeek.contributionDays[0].date)
          : null;

        if (!prevDate || date.getMonth() !== prevDate.getMonth()) {
          labels.push({
            label: date.toLocaleString('default', { month: 'short' }),
            index: i,
          });
        }
      }
    });
    return labels;
  }, [displayWeeks]);

  const currentDayStats = useMemo(() => {
    if (!currentDisplayDate) return null;
    return weeks
      .flatMap(w => w.contributionDays)
      .find(d => d.date === currentDisplayDate);
  }, [currentDisplayDate, weeks]);

  const formattedDate = useMemo(() => {
    if (!currentDisplayDate) return '---';
    return new Date(currentDisplayDate).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }, [currentDisplayDate]);

  return (
    <div
      className={`relative flex flex-col items-center gap-12 w-full max-w-[1500px] mx-auto py-16 sm:py-24 px-4 sm:px-6 overflow-hidden font-sans min-h-screen ${isDark ? 'bg-[#050505]' : 'bg-gray-50'}`}
    >
      {/* --- ANIMATED GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage:
              'radial-gradient(circle at center, black 40%, transparent 100%)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d9ff00]/10 to-transparent h-[200%] w-full animate-scan" />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        .animate-scan {
            animation: scan 8s linear infinite;
        }
      `,
        }}
      />

      {/* Identity Section */}
      <div className="relative z-10 w-full flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12 animate-in slide-in-from-top-10 fade-in duration-1000">
        <div className="flex flex-col gap-2 items-center xl:items-start text-center xl:text-left">
          <div className="flex items-center gap-3">
            <a
              href={`https://github.com/mdimu29ail`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#d9ff00] p-2.5 rounded-xl text-black shadow-[0_0_20px_rgba(217,255,0,0.4)] transition-all hover:scale-110 hover:rotate-3"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#d9ff00] font-black drop-shadow-[0_0_10px_rgba(217,255,0,0.5)]">
              Archive Protocol v4.0
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter ${styles.text} drop-shadow-2xl`}
          >
            @{USERNAME}{' '}
            <span className="text-zinc-800 block sm:inline">Visualizer</span>
          </h2>
        </div>

        <div
          className={`w-full xl:w-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 p-6 sm:p-8 rounded-[2rem] border ${styles.cardBg} ${styles.border} shadow-2xl group transition-all hover:border-[#d9ff00]/30 hover:shadow-[0_0_30px_rgba(217,255,0,0.1)] backdrop-blur-md`}
        >
          <div className="flex flex-col items-center">
            <span className="text-[9px] sm:text-[10px] uppercase font-black text-[#d9ff00] tracking-[0.3em] mb-2 opacity-70">
              Global Impact
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-zinc-100">
              {totalContributions.toLocaleString()}
            </span>
          </div>
          <div className="w-16 h-px sm:w-px sm:h-16 bg-zinc-800/50"></div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] sm:text-[10px] uppercase font-black text-[#d9ff00] tracking-[0.3em] mb-2 opacity-70">
              Focus Year
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-zinc-100">
              {selectedYear}
            </span>
          </div>
        </div>
      </div>

      {/* Main Heatmap Card */}
      <div
        className={`relative z-10 w-full p-4 sm:p-6 md:p-10 border rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl transition-all ${styles.cardBg} ${styles.border} flex flex-col items-center overflow-hidden group/card animate-in zoom-in-95 fade-in duration-1000 delay-200`}
      >
        {isCalendarLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-xl bg-black/60 rounded-[4rem]">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#d9ff00] border-t-transparent rounded-full animate-spin mb-4 sm:mb-6"></div>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[#d9ff00] animate-pulse">
              Reconstructing Matrix...
            </span>
          </div>
        )}

        {/* Year Navigation */}
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16 overflow-x-auto no-scrollbar scroll-smooth pb-2 w-full max-w-full justify-start md:justify-center px-2">
          {yearsList.map((y, i) => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`px-6 py-2 sm:px-8 sm:py-2.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] transition-all flex-shrink-0 animate-in fade-in slide-in-from-right-4 duration-500 whitespace-nowrap
                ${selectedYear === y ? 'bg-[#d9ff00] text-black shadow-[0_0_20px_rgba(217,255,0,0.5)] scale-110' : 'bg-zinc-900/50 text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600'}`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* The Grid - Center Aligned & NO SCROLL */}
        <div className="relative w-full flex flex-col items-center">
          {/* Month Labels */}
          <div className="flex w-full mb-2 h-6 sm:h-8 relative font-mono text-zinc-500 select-none">
            <div className="w-full flex justify-center">
              <div
                className="relative flex"
                style={{ width: `${displayWeeks.length * 26}px` }}
              >
                {' '}
                {/* Dynamic width based on visible squares */}
                {monthLabels.map((m, idx) => (
                  <div
                    key={idx}
                    className="absolute text-[10px] sm:text-sm font-bold uppercase tracking-wider opacity-60 hover:opacity-100 hover:text-[#d9ff00] transition-all duration-300"
                    style={{ left: `${m.index * 26}px` }}
                  >
                    {m.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Container - Fitted to Screen, No Scroll */}
          <div className="flex justify-center w-full">
            <div className="flex gap-[6px]">
              {displayWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[6px]">
                  {week.contributionDays.map((day, dIdx) => (
                    <ContributionSquare
                      key={day.date}
                      day={day}
                      isTopDay={topDaysSet.has(day.date)}
                      isGlobalMax={day.date === globalMaxDate}
                      isHovered={hoveredDate === day.date}
                      isSelected={selectedDate === day.date}
                      onHover={handleHover}
                      onClick={() =>
                        setSelectedDate(
                          selectedDate === day.date ? null : day.date,
                        )
                      }
                      themeStyles={styles}
                      delay={wIdx * 5 + dIdx * 5}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Impact Zone */}
          <div className="mt-10 sm:mt-16 w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 text-center sm:text-left">
            <div className="text-black bg-[#d9ff00] p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-[0_0_30px_rgba(217,255,0,0.4)] transition-transform hover:scale-110 group cursor-default">
              <Dumbbell
                size={32}
                strokeWidth={2.5}
                className="sm:w-12 sm:h-12 group-hover:rotate-12 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-x-6 gap-y-1 font-mono">
              <span className="text-4xl sm:text-5xl md:text-7xl font-black text-[#d9ff00] tracking-tighter drop-shadow-[0_0_15px_rgba(217,255,0,0.5)]">
                {currentDayStats?.contributionCount || 0} Contributions
              </span>
              <span className="text-xl sm:text-3xl md:text-4xl text-zinc-600 font-black tracking-tighter opacity-80 block sm:inline">
                on {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Activity Panel */}
      {selectedDate && (
        <div className="relative z-20 w-full max-w-5xl flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-20 duration-700 mt-10 pb-20">
          <div className="flex items-center justify-between px-4 sm:px-10">
            <h3 className="font-black flex items-center gap-3 sm:gap-4 text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.4em] text-[#d9ff00] uppercase">
              <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d9ff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-[#d9ff00]"></span>
              </span>
              Detailed Neural Audit Log
            </h3>
            <button
              onClick={() => setSelectedDate(null)}
              className="p-2 sm:p-3 hover:bg-zinc-800 rounded-full transition-all hover:rotate-180 bg-zinc-900 border border-zinc-800"
            >
              <X size={16} className="sm:w-5 sm:h-5 text-zinc-500" />
            </button>
          </div>
          <div
            className={`p-8 sm:p-16 border rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl ${styles.cardBg} ${styles.border} relative overflow-hidden group/log backdrop-blur-2xl`}
          >
            <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover/log:opacity-10 transition-all duration-700 group-hover/log:scale-150 rotate-12">
              <Terminal size={80} className="sm:w-32 sm:h-32" />
            </div>
            <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">
              <div className="space-y-2">
                <span className="text-[10px] sm:text-xs font-mono text-[#d9ff00] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                  Status: Scanning Matrix
                </span>
                <div className="text-xl sm:text-3xl font-black tracking-tighter text-zinc-400">
                  Synthesizing activity stream for {selectedDate}...
                </div>
              </div>
              {/* Advanced Loading Bar */}
              <div className="w-32 sm:w-48 h-1 bg-zinc-900 rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d9ff00] to-transparent w-full animate-[shimmer_1.5s_infinite]" />
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                `,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

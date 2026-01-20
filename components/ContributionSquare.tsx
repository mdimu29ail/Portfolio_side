
import React, { useMemo } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { ContributionDay } from "../types";

interface Props {
  day: ContributionDay;
  isTopDay: boolean;
  isGlobalMax: boolean;
  isHovered: boolean;
  isSelected: boolean;
  onHover: (date: string | null) => void;
  onClick: () => void;
  themeStyles: any;
  delay: number;
}

export const ContributionSquare: React.FC<Props> = ({ 
  day, 
  isTopDay, 
  isGlobalMax, 
  isHovered, 
  isSelected, 
  onHover, 
  onClick,
  themeStyles,
  delay
}) => {
  const count = day.contributionCount;
  
  const color = useMemo(() => {
    if (isTopDay) return themeStyles.topDay;
    if (count === 0) return themeStyles.emptySquare;
    if (count < 3) return themeStyles.levels.l1;
    if (count < 6) return themeStyles.levels.l2;
    return themeStyles.levels.l3;
  }, [count, isTopDay, themeStyles]);

  // Determine glow color based on activity level
  const glowClass = useMemo(() => {
    if (isTopDay) return "shadow-[0_0_25px_rgba(217,255,0,0.6)]";
    if (count >= 6) return "shadow-[0_0_15px_rgba(255,255,255,0.1)]";
    return "";
  }, [count, isTopDay]);

  return (
    <div
      onMouseEnter={() => onHover(day.date)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      style={{ 
        animationDelay: `${delay}ms`,
      }}
      className={`
        w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] rounded-[5px] 
        transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer flex items-center justify-center relative
        animate-in fade-in zoom-in-50 duration-700 fill-mode-both
        ${color}
        ${isHovered ? `z-30 scale-[1.5] ${glowClass} ring-2 ring-white/60 rotate-6` : ''}
        ${isSelected ? `z-40 ring-3 ring-[#d9ff00] ring-offset-4 ring-offset-black scale-[1.2]` : ''}
        ${(count >= 6 && !isHovered) ? 'after:absolute after:inset-0 after:bg-gradient-to-tr after:from-transparent after:via-white/10 after:to-transparent after:animate-[shimmer_4s_infinite]' : ''}
      `}
    >
      {(isTopDay || isGlobalMax) && (
        <div className={`transition-all duration-500 ${isHovered ? 'scale-125' : 'scale-100'} ${isGlobalMax ? 'animate-pulse' : ''} text-black`}>
          <TbTargetArrow size={14} strokeWidth={3} />
        </div>
      )}
      
      {/* Visual glint for high activity dots */}
      {count >= 6 && !isTopDay && (
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white/30 rounded-full blur-[1px] group-hover/card:bg-white/50" />
      )}
    </div>
  );
};

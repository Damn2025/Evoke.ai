import { useMemo } from 'react';
import { MILESTONES } from '../data/constants';

const ProgressSidebar = ({ scrollPercent, jumpTo }) => {
  // Memoize milestone calculations
  const milestoneStates = useMemo(() => {
    return MILESTONES.map(m => ({
      ...m,
      isActive: Math.abs(scrollPercent - m.t) < 0.07
    }));
  }, [scrollPercent]);
  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-[250]">
      {milestoneStates.map((m, idx) => (
        <div key={idx} className="group relative flex items-center justify-end">
          <span className={`mr-4 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 pointer-events-none ${m.isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            {m.label}
          </span>
          <button 
            onClick={() => jumpTo(m.t)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${m.isActive ? 'bg-emerald-500 border-emerald-500 scale-150 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-transparent border-gray-500 hover:border-emerald-500'}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressSidebar;







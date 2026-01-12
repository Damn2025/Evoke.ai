import { Sun, Moon } from 'lucide-react';
import { MILESTONES } from '../data/constants';
import evokeLogo from '../assets/evoke.png';

const Navigation = ({ theme, setTheme, jumpTo }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-[200] px-6 py-5 flex justify-between items-center backdrop-blur-xl border-b transition-all duration-500 ${theme === 'dark' ? 'bg-black/40 border-white/5' : 'bg-white/40 border-black/5'}`}>
      <div className="flex items-center group cursor-pointer" onClick={() => jumpTo(0)}>
        <img 
          src={evokeLogo} 
          alt="Evoke AI Logo" 
          className="w-16 h-16 object-contain transition-transform group-hover:scale-110 translate-y-1"
        />
        <span className={`font-black text-lg tracking-tighter uppercase ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Evoke AI</span>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        {MILESTONES.map((m) => (
          <button 
            key={m.id}
            onClick={() => jumpTo(m.t)}
            className={`nav-item-shiny text-sm font-bold tracking-[0.15em] uppercase relative overflow-hidden px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 group ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            {/* Shiny overlay effect on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/40' : 'via-black/20'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-lg`}></div>
            
            {/* Background on hover */}
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
            
            <span className="relative z-10">
              {m.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`nav-item-shiny w-10 h-10 rounded-full flex items-center justify-center border relative overflow-hidden transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-white/30' : 'bg-black/5 border-black/10 hover:border-black/30'}`}
        >
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full`}></div>
          <div className={`relative z-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </div>
        </button>
        <button 
          onClick={() => jumpTo(0.85)}
          className="nav-item-shiny bg-gradient-to-r from-[#0e99c8] to-[#1dc393] text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-cyan-500/20 hover:scale-105 transition-transform relative overflow-hidden"
        >
          <span className="relative z-10">Connect to Evoke </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;


import { useState, useEffect } from 'react';
import evokeLogo from '../../assets/evoke.png';
import astroremedisLogo from '../../assets/Astroremedis.png';
import meddevicesLogo from '../../assets/meddevices.png';
import eduonixLogo from '../../assets/eduonix.png';
import grnataLogo from '../../assets/Grnata.png';
import itcLogo from '../../assets/itc.png';
import sipconLogo from '../../assets/Sipcon.jpg';
import sustainableLogo from '../../assets/Sustainable.jpg';
import eurocert from '../../assets/eurocert.webp';

const PartnersSection = ({ milestone, theme }) => {
  const isDark = theme === 'dark';
  const [isLoaded, setIsLoaded] = useState(false);

  const colors = {
    primary: '#0eaac8',
    secondary: '#1dc393',
    accent1: '#27bce2',
    accent2: '#7fe7ce',
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

//   const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
const brandGradient = "bg-white";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";

  // Partners Data with 8 companies positioned in a radial orbit
  const partners = [
    { name: 'Astroremedis', logo: astroremedisLogo, x: 25, y: 20, color: colors.primary, delay: 0.2 },
    { name: 'Med Devices', logo: meddevicesLogo, x: 50, y: 12, color: colors.secondary, delay: 0.3 },
    { name: 'Eduonix', logo: eduonixLogo, x: 75, y: 20, color: colors.accent1, delay: 0.4 },
    { name: 'Eurocert', logo: eurocert, x: 88, y: 50, color: colors.accent2, delay: 0.5 },
    { name: 'Grnata', logo: grnataLogo, x: 75, y: 80, color: colors.primary, delay: 0.6 },
    { name: 'ITC India', logo: itcLogo, x: 50, y: 88, color: colors.secondary, delay: 0.7 },
    { name: 'Sipcon', logo: sipconLogo, x: 25, y: 80, color: colors.accent1, delay: 0.8 },
    { name: 'Sustainable Futures Trainings', logo: sustainableLogo, x: 12, y: 50, color: colors.accent2, delay: 0.9 },
  ];

  // Function to create a curved path from center (50, 50) to target
  const getPath = (tx, ty) => {
    const cx = 50 + (tx - 50) * 0.3;
    const cy = 50 + (ty - 50) * 0.7; 
    return `M 50 50 Q ${cx} ${cy} ${tx} ${ty}`;
  };

  return (
    <div className={`relative w-full min-h-0 py-10 sm:py-16 lg:py-20 px-3 sm:px-6 transition-colors duration-1000 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 sm:mb-6 lg:mb-8 relative overflow-hidden group shiny-badge">
            {/* Gradient background */}
            <div className={`absolute inset-0 ${brandGradient} opacity-30 rounded-full`}></div>
            
            {/* Shiny overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-full"></div>
            
            {/* Pulsing dot */}
            <span className="relative z-10 w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse shadow-lg shadow-[#00d2ff]/60"></span>
            
            {/* Category text with gradient */}
            <span 
              className={`relative z-10 ${textGradient} text-xs sm:text-sm font-bold tracking-[0.15em] uppercase`}
              style={{ fontFamily: '"Poppins", "Montserrat", "Inter", sans-serif' }}
            >
              {milestone.category}
            </span>
            
            {/* Glowing border */}
            <div className="absolute inset-0 rounded-full border-2 border-[#00d2ff]/40 group-hover:border-[#27bce2]/60 transition-all duration-300 shadow-lg shadow-[#00d2ff]/20"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 lg:mb-8 uppercase tracking-tighter italic ${isDark ? 'text-white' : 'text-black'}`}>
            Trusted by <span className={textGradient}>Growing</span> Businesses
          </h2>
          
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-white/80' : 'text-black/70'}`}>
          Companies across industries rely on EVOKE AI to build high-performance, scalable AI systems with confidence.
          </p>
        </div>

        {/* Mobile Grid Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {partners.map((partner, i) => (
              <div
                key={i}
                className={`transition-all duration-1000 ease-out flex flex-col items-center group
                  ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{ transitionDelay: `${partner.delay * 0.5}s` }}
              >
                {/* Partner Card */}
                <div 
                  className={`relative w-full p-3 sm:p-4 rounded-xl sm:rounded-[1.5rem] shadow-lg border transition-all duration-500 flex flex-col items-center justify-center
                    ${isDark 
                      ? 'bg-white border-zinc-800 group-active:border-white/50 backdrop-blur-md' 
                      : 'bg-white border-slate-100 group-active:border-black/20'
                    }
                    group-active:scale-95`}
                >
                  <div 
                    className="w-full h-16 sm:h-20 rounded-lg sm:rounded-xl mb-2 transition-all duration-300 shadow-inner flex items-center justify-center p-2" 
                    style={{ backgroundColor: 'white' }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Partner Name */}
                  <div className={`text-[8px] sm:text-[9px] font-black tracking-[0.1em] uppercase text-center ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Radial Orbit Layout */}
        <div className="hidden lg:block relative w-full max-w-6xl mx-auto cursor-default overflow-hidden min-h-[700px] md:min-h-[800px]">
          
          {/* Connection System (Curves + Flow Particles) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {partners.map((partner, i) => {
              const path = getPath(partner.x, partner.y);
              return (
                <g key={`path-group-${i}`}>
                  {/* Static Shadow Path */}
                  <path
                    d={path}
                    fill="none"
                    stroke={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'}
                    strokeWidth="0.4"
                  />
                  
                  {/* Animated Growing Path */}
                  <path
                    d={path}
                    fill="none"
                    stroke={partner.color}
                    strokeWidth="0.3"
                    strokeDasharray="100"
                    strokeDashoffset={isLoaded ? "0" : "100"}
                    className="transition-all duration-1000 ease-in-out"
                    style={{ 
                      transitionDelay: `${partner.delay}s`,
                      opacity: isLoaded ? (isDark ? 0.5 : 0.7) : 0
                    }}
                  />

                  {/* Data Flow Particle */}
                  {isLoaded && (
                    <circle r="0.4" fill={partner.color} className="filter blur-[0.2px]">
                      <animateMotion 
                        dur={`${2.2 + Math.random() * 1.8}s`} 
                        repeatCount="indefinite" 
                        path={path}
                        begin={`${partner.delay}s`}
                      />
                      <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Central EVOKE AI Logo Hub */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-1000 ease-out
              ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
          >
            <div 
              className="w-28 h-28 md:w-36 md:h-36 rounded-[2.5rem] flex items-center justify-center relative group overflow-hidden p-4"
            >
              <img 
                src={evokeLogo} 
                alt="EVOKE AI" 
                className="w-full h-full object-contain relative z-10 drop-shadow-xl"
              />
            </div>
          </div>

          {/* Partner Orbit Nodes (8 Total) */}
          {partners.map((partner, i) => (
            <div
              key={i}
              className={`absolute z-20 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col items-center group`}
              style={{
                left: `${partner.x}%`,
                top: `${partner.y}%`,
                transform: `translate(-50%, -50%) ${isLoaded ? 'scale(1)' : 'scale(0)'}`,
                transitionDelay: `${partner.delay}s`,
                opacity: isLoaded ? 1 : 0
              }}
            >
              {/* Partner Card */}
              <div 
                className={`relative p-3 md:p-4 rounded-[1.5rem] shadow-xl border transition-all duration-500 flex flex-col items-center justify-center
                  ${isDark 
                    ? 'bg-zinc-900/90 border-zinc-800 group-hover:border-white/50 backdrop-blur-md' 
                    : 'bg-white border-slate-100 group-hover:border-black/20'
                  }
                  group-hover:-translate-y-3 group-hover:shadow-2xl w-20 md:w-32`}
              >
                <div 
                  className="w-full h-20 md:h-28 rounded-xl mb-2 transition-all duration-700 group-hover:rotate-[360deg] shadow-inner flex items-center justify-center p-2" 
                  style={{ backgroundColor: 'white' }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Partner Name */}
                <div className={`text-[9px] md:text-[10px] font-black tracking-[0.1em] uppercase text-center transition-all duration-300 ${isDark ? 'opacity-60 group-hover:opacity-100 text-white' : 'opacity-70 group-hover:opacity-100 text-black'}`}>
                  {partner.name}
                </div>
                
                
              </div>

              {/* Pulsing Aura */}
              <div 
                className="absolute inset-0 rounded-full -z-10 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
                style={{ backgroundColor: partner.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PartnersSection;

import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { MILESTONES } from '../data/constants';
import evokeLogo from '../assets/evoke.png';

const Navigation = ({ theme, setTheme, jumpTo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAgentsDropdownOpen, setIsAgentsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Agent links mapping
  const agentLinks = {
    'AEON': 'http://evokeai.in/aeon/',
    'NOVA': 'https://nova-message-crafter.netlify.app/',
    'CIPHER': 'https://www.cyber.evokeai.info/',
    'ORION': null // No link - opens modal in section
  };

  // Agent colors for styling
  const agentColors = {
    'NOVA': '#12B9A7',
    'AEON': '#FED335',
    'ORION': '#7EC650',
    'CIPHER': '#dc2626'
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAgentsDropdownOpen(false);
      }
    };

    if (isAgentsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAgentsDropdownOpen]);

  const handleNavClick = (sectionId) => {
    jumpTo(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[200] px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center backdrop-blur-xl border-b transition-all duration-500 ${theme === 'dark' ? 'bg-black/40 border-white/5' : 'bg-white/40 border-black/5'}`}>
        <div className="flex items-center group cursor-pointer" onClick={() => handleNavClick('hero')}>
        <img 
          src={evokeLogo} 
          alt="Evoke AI Logo" 
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform group-hover:scale-110 translate-y-1"
        />
          <div className="flex flex-col">
            <span className={`font-black text-base sm:text-lg tracking-tighter uppercase ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Evoke AI</span>
            <span className={`text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wide ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
              Enterprise AI Platform
            </span>
          </div>
      </div>

        {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        {MILESTONES.map((m) => {
          // Special handling for Agents dropdown
          if (m.id === 'agents') {
            return (
              <div key={m.id} className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsAgentsDropdownOpen(!isAgentsDropdownOpen)}
                  className={`nav-item-shiny text-sm font-bold tracking-[0.15em] uppercase relative overflow-hidden px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 group flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                >
                  {/* Shiny overlay effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/40' : 'via-black/20'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-lg`}></div>
                  
                  {/* Background on hover */}
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
                  
                  <span className="relative z-10">
                    {m.label}
                  </span>
                  <ChevronDown 
                    size={14} 
                    className={`relative z-10 transition-transform duration-300 ${isAgentsDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Agents Dropdown Menu */}
                {isAgentsDropdownOpen && (
                  <div className={`absolute top-full left-0 mt-2 w-56 rounded-xl shadow-2xl overflow-hidden z-[250] ${theme === 'dark' ? 'bg-black/95 border border-white/10' : 'bg-white/95 border border-black/10'} backdrop-blur-xl`}>
                    {Object.entries(agentLinks).map(([agentName, link]) => (
                      link ? (
                        <a
                          key={agentName}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block px-4 py-3 transition-all duration-300 hover:scale-[1.02] ${
                            theme === 'dark' 
                              ? 'hover:bg-white/10 text-white' 
                              : 'hover:bg-black/10 text-black'
                          }`}
                          style={{
                            borderLeft: `3px solid ${agentColors[agentName]}`
                          }}
                        >
                          <div className="font-bold text-sm">{agentName}</div>
                          <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                            {agentName === 'AEON' && 'ChatBot Builder'}
                            {agentName === 'NOVA' && 'Email Marketer'}
                            {agentName === 'CIPHER' && 'Cyber Security'}
                          </div>
                        </a>
                      ) : (
                        <button
                          key={agentName}
                          onClick={() => {
                            setIsAgentsDropdownOpen(false);
                            jumpTo('agents');
                          }}
                          className={`block w-full text-left px-4 py-3 transition-all duration-300 hover:scale-[1.02] ${
                            theme === 'dark' 
                              ? 'hover:bg-white/10 text-white' 
                              : 'hover:bg-black/10 text-black'
                          }`}
                          style={{
                            borderLeft: `3px solid ${agentColors[agentName]}`
                          }}
                        >
                          <div className="font-bold text-sm">{agentName}</div>
                          <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                            Course Creator
                          </div>
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
            );
          }

          // Regular navigation items
          return (
            <button 
              key={m.id}
              onClick={() => jumpTo(m.id)}
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
          );
        })}
      </div>

        {/* Right Side - Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle - Always Visible */}
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`nav-item-shiny w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border relative overflow-hidden transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-white/30' : 'bg-black/5 border-black/10 hover:border-black/30'}`}
        >
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full`}></div>
          <div className={`relative z-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              {theme === 'dark' ? <Sun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />}
          </div>
        </button>

          {/* Desktop - Connect Button (Hidden on Mobile) */}
          <button 
            onClick={() => jumpTo('contact')}
            className="hidden lg:flex nav-item-shiny bg-gradient-to-r from-[#0e99c8] to-[#1dc393] text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-cyan-500/20 hover:scale-105 transition-transform relative overflow-hidden"
          >
          <span className="relative z-10">Connect to Evoke </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </button>

          {/* Mobile Menu Toggle Button - Visible on Mobile Only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border-2 transition-all duration-300 cursor-pointer ${theme === 'dark' ? 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 text-white' : 'bg-black/10 border-black/20 hover:bg-black/20 hover:border-black/40 text-black'}`}
            aria-label="Toggle menu"
            style={{ zIndex: 201 }}
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[199] bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-[73px] left-0 right-0 z-[201] transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        } ${theme === 'dark' ? 'bg-black/95 border-b border-white/10' : 'bg-white/95 border-b border-black/10'} backdrop-blur-xl`}
      >
        <div className="px-4 py-6 space-y-2">
          {MILESTONES.map((m) => {
            // Special handling for Agents dropdown in mobile
            if (m.id === 'agents') {
              return (
                <div key={m.id}>
                  <button
                    onClick={() => setIsAgentsDropdownOpen(!isAgentsDropdownOpen)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-bold text-sm tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-between ${
                      theme === 'dark' 
                        ? 'text-white hover:bg-white/10 active:bg-white/20' 
                        : 'text-black hover:bg-black/10 active:bg-black/20'
                    }`}
                  >
                    {m.label}
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${isAgentsDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {/* Mobile Agents Dropdown */}
                  {isAgentsDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-1">
                      {Object.entries(agentLinks).map(([agentName, link]) => (
                        link ? (
                          <a
                            key={agentName}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                              theme === 'dark' 
                                ? 'text-white/80 hover:bg-white/10 hover:text-white' 
                                : 'text-black/80 hover:bg-black/10 hover:text-black'
                            }`}
                            style={{
                              borderLeft: `3px solid ${agentColors[agentName]}`
                            }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {agentName}
                          </a>
                        ) : (
                          <button
                            key={agentName}
                            onClick={() => {
                              setIsAgentsDropdownOpen(false);
                              handleNavClick('agents');
                            }}
                            className={`block w-full text-left px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                              theme === 'dark' 
                                ? 'text-white/80 hover:bg-white/10 hover:text-white' 
                                : 'text-black/80 hover:bg-black/10 hover:text-black'
                            }`}
                            style={{
                              borderLeft: `3px solid ${agentColors[agentName]}`
                            }}
                          >
                            {agentName}
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Regular navigation items
            return (
              <button
                key={m.id}
                onClick={() => handleNavClick(m.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-bold text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'text-white hover:bg-white/10 active:bg-white/20' 
                    : 'text-black hover:bg-black/10 active:bg-black/20'
                }`}
              >
                {m.label}
              </button>
            );
          })}
          {/* Mobile Connect Button */}
          <button 
            onClick={() => handleNavClick('contact')}
            className="w-full mt-4 bg-gradient-to-r from-[#0e99c8] to-[#1dc393] text-white px-4 py-3 rounded-lg text-xs font-black uppercase tracking-widest shadow-xl shadow-cyan-500/20 transition-transform active:scale-95"
          >
            Connect to Evoke
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;


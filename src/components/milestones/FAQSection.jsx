import { useState, useRef, useMemo } from 'react';
import { Plus, Minus, HelpCircle, Search } from 'lucide-react';
import { FAQ_DATA, FAQ_CATEGORIES } from '../../data/constants';
import Footer from '../Footer';

const FAQItem = ({ item, isOpen, onClick, theme }) => {
  return (
    <div 
      className={`relative mb-4 group transition-all duration-500 ease-out ${
        isOpen ? 'scale-[1.02]' : 'hover:scale-[1.01]'
      }`}
      style={{
        transformStyle: 'preserve-3d',
        transform: `translateZ(${isOpen ? '20px' : '0px'})`
      }}
    >
      <div 
        className={`absolute inset-0 rounded-2xl transition-opacity duration-500 -z-10 ${
          isOpen ? 'opacity-20' : 'opacity-0'
        }`}
        style={{ 
          backgroundColor: item.color,
          filter: 'blur(20px)',
          transform: 'translateY(10px) translateZ(-10px)'
        }}
      />

      <div 
        className={`rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
          theme === 'dark' 
            ? 'bg-black/40 border-white/10 group-hover:border-white/20' 
            : 'bg-white/80 border-black/5 group-hover:border-black/10 shadow-lg shadow-black/5'
        }`}
      >
        <button
          onClick={onClick}
          className="w-full px-3 py-3 sm:px-6 sm:py-5 flex items-center justify-between text-left focus:outline-none"
        >
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <div 
              className="p-1.5 sm:p-2 rounded-xl transition-colors duration-300 hidden sm:block flex-shrink-0"
              style={{ backgroundColor: `${item.color}20`, color: item.color }}
            >
              <HelpCircle size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <span className={`font-semibold text-sm sm:text-lg leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                {item.question}
              </span>
            </div>
          </div>
          <div className={`transition-transform duration-500 flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            {isOpen ? (
              <Minus size={18} className="sm:w-5 sm:h-5" style={{ color: item.color }} />
            ) : (
              <Plus size={18} className={`sm:w-5 sm:h-5 ${theme === 'dark' ? 'text-white/50' : 'text-slate-400'}`} />
            )}
      </div>
        </button>

        <div 
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 sm:max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`px-3 pb-4 sm:px-6 sm:pb-6 pt-0 sm:ml-14 text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            <div className={`h-px w-full mb-3 sm:mb-4 bg-gradient-to-r from-transparent ${
              theme === 'dark' ? 'via-white/10' : 'via-black/10'
            } to-transparent`} />
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = ({ milestone, theme, setShowPrivacyPolicy }) => {
  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";
  
  const [activeCategory, setActiveCategory] = useState("General");
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(-1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Filter Logic
  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter(faq => {
      const matchesCategory = faq.category === activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const isDark = theme === 'dark';

  return (
    <>
      {/* FAQ Content Section - Scrollable */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6 pb-20">
        <div className="text-center mb-8 sm:mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 sm:mb-8 relative overflow-hidden group shiny-badge">
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
          <h2 className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none italic mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            {milestone.title.split(' ').map((word, index) => {
              if (index === 4) {
                // Last word "Know" with gradient
                return (
                  <h2 
                    key={index}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]"
                  >
                    {index > 0 ? ' ' : ''}{word}  {' '}
                  </h2>
                );
              }
              return <span key={index}>{index > 0 ? ' ' : ''}{word}</span>;
            }) 
            }
          </h2>
          
          {/* Search Bar */}
          <div className="relative max-w-full sm:max-w-xl mx-auto mb-6 sm:mb-10 group">
            <div className={`absolute inset-0 bg-gradient-to-r from-[#00d2ff] to-[#1dc393] opacity-20 blur-xl group-focus-within:opacity-40 transition-opacity rounded-full`} />
            <div className={`relative flex items-center rounded-full border transition-all duration-300 ${
              isDark ? 'bg-black/40 border-white/10 focus-within:border-white/30' : 'bg-white/80 border-black/10 focus-within:border-black/30'
            }`}>
              <Search className="ml-3 sm:ml-5 text-slate-400" size={18} />
              <input 
                type="text"
                placeholder="Search questions..."
                className={`w-full bg-transparent border-none focus:ring-0 py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-lg outline-none ${
                  isDark ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'
                }`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(-1); }}
                className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-[#00d2ff] to-[#1dc393] text-white border-transparent shadow-lg shadow-[#00d2ff]40'
                    : isDark 
                      ? 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10' 
                      : 'bg-white border-black/10 text-slate-500 hover:border-black/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D FAQ Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: '1500px',
            transition: 'all 0.1s ease'
          }}
          className="relative z-10"
        >
          <div 
            className="sm:[transform:rotateX(var(--rotate-x))_rotateY(var(--rotate-y))]"
            style={{
              '--rotate-x': `${mousePos.y * -3}deg`,
              '--rotate-y': `${mousePos.x * 3}deg`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
              transform: `rotateX(${mousePos.y * -3}deg) rotateY(${mousePos.x * 3}deg)`
            }}
          >
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <FAQItem 
                  key={`${faq.question}-${index}`}
                  item={faq}
                  theme={theme}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))
            ) : (
              <div className={`text-center py-12 sm:py-20 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <p className="text-base sm:text-xl mb-4 px-4">No results found{searchTerm && ` for "${searchTerm}"`} in {activeCategory}</p>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")} 
                    className="text-[#00d2ff] hover:text-[#1dc393] underline transition-colors text-sm sm:text-base"
                  >
                    Clear search
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section - Separate Fixed Section */}
      <div className="relative z-50 mt-20">
        <Footer theme={theme} onPrivacyClick={() => setShowPrivacyPolicy(true)} />
      </div>
    </>
  );
};

export default FAQSection;

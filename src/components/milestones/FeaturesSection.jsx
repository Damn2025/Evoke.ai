import { useState, useEffect, useRef } from 'react';
import { BrainCircuit, Network, ShieldCheck, Zap, Database, Code2 } from 'lucide-react';
import aboutImage from '../../assets/About.png';
import evokeLogo from '../../assets/evoke.png';

const FeaturesSection = ({ milestone, theme }) => {
  const isDark = theme === 'dark';
  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";
  
  const features = [
    { 
      title: "AEON, take control of customer engagement.", 
      desc: "Automate your customer engagement with AI. Design, deploy, and manage intelligent conversations effortlessly across every channel.",
      icon: BrainCircuit,
      number: "01",
      image: aboutImage,
      gradient: "from-[#00d2ff] to-[#27bce2]"
    },
    { 
      title: "NOVA, create high-performing email campaigns with AI-driven insights and automation.", 
      desc: "Design, automate, and optimize intelligent email campaigns across every audience segment—powered by AI.",
      icon: Network,
      number: "02",
      image: evokeLogo,
      gradient: "from-[#27bce2] to-[#1dc393]"
    },
    { 
      title: "ORION, transform content into intelligent learning experiences.", 
      desc: "Automate course creation with AI. Convert content into structured, interactive learning paths with assessments, analytics, and scalable delivery—effortlessly.",
      icon: ShieldCheck,
      number: "03",
      image: aboutImage,
      gradient: "from-[#1dc393] to-[#92fe9d]"
    },
    { 
      title: "Low Latency", 
      desc: "Edge deployment ensures your agents respond in milliseconds. We utilize a global CDN for model inference, reducing round-trip times for end-users anywhere.",
      icon: Zap,
      number: "04",
      image: evokeLogo,
      gradient: "from-[#00d2ff] to-[#1dc393]"
    },
    { 
      title: "Persistent Memory", 
      desc: "Agents remember past interactions and preferences, building context over time. This long-term memory allows for personalized experiences that improve with every session.",
      icon: Database,
      number: "05",
      image: aboutImage,
      gradient: "from-[#27bce2] to-[#7fe7ce]"
    },
    { 
      title: "Custom Logic", 
      desc: "Inject custom Python or JavaScript logic directly into agent workflows. Our sandboxed execution environment allows you to extend agent capabilities safely.",
      icon: Code2,
      number: "06",
      image: evokeLogo,
      gradient: "from-[#1dc393] to-[#00d2ff]"
    }
  ];

  return (
    <div className={`relative py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Decorative background elements */}
      <div className="absolute left-0 top-0 w-1/3 h-96 bg-[#27bce2]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-1/3 h-96 bg-[#1dc393]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-9xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-32 max-w-3xl mx-auto mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 relative overflow-hidden group shiny-badge">
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
          <h2 className={`text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase ${isDark ? 'text-white' : 'text-black'}`}>
            {milestone.title.split(' ').map((word, index) => {
              if (index === 1) {
                return (
                  <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#27bce2] to-[#1dc393] pr-5">
                    {index > 0 ? ' ' : ''}{word}
                  </span>
                );
              }
              return <span key={index}>{index > 0 ? ' ' : ''}{word}</span>;
            })}
          </h2>
        </div>

        {/* Stacking Cards Container */}
        <div className="stack-container flex flex-col" style={{ paddingBottom: '150vh' }}>
          {features.map((feat, index) => (
            <StackCard 
              key={index}
              feature={feat}
              index={index}
              totalCards={features.length}
              isDark={isDark}
            />
          ))}
        </div>
      </div>

      {/* CSS for sticky stacking and effects */}
      <style>{`
        .stack-container {
          position: relative;
        }

        .stack-card {
          position: sticky;
          will-change: transform;
          contain: layout style paint;
          ${isDark 
            ? 'background: rgba(0, 0, 0, 0.95); border: 1px solid rgba(255, 255, 255, 0.1);' 
            : 'background: rgba(255, 255, 255, 0.95); border: 1px solid rgba(0, 0, 0, 0.1);'
          }
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                      box-shadow 0.3s ease, 
                      border-color 0.3s ease;
          transform-origin: center top;
          overflow: hidden;
          box-shadow: 0 -10px 40px -10px rgba(0,0,0,0.5);
        }

        .stack-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(
            800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(0, 210, 255, 0.08),
            transparent 40%
          );
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }

        .stack-card:hover::before {
          opacity: 1;
        }

        .stack-card:hover {
          transform: translateY(-5px) translateZ(0);
          border-color: rgba(0, 210, 255, 0.5);
          /* Don't change z-index on hover - keep stacking order intact */
        }

        .stack-card:hover .icon-box {
          transform: scale(1.1) rotate(5deg);
          background: rgba(0, 210, 255, 0.2);
          color: #00d2ff;
        }
      `}</style>
    </div>
  );
};

const StackCard = ({ feature, index, totalCards, isDark }) => {
  const cardRef = useRef(null);
  const Icon = feature.icon;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate offset for stacked look - each card is offset by 60px from previous
  // First card at 8rem, each subsequent card offset by 60px
  const topOffset = 8 * 16 + (index * 60); // 8rem (128px) + 60px per card

  return (
    <div 
      ref={cardRef}
      className="stack-card p-6 sm:p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-6 md:gap-8"
      style={{
        zIndex: index + 1, // Higher index = higher z-index (4th card z-index 4, 3rd card z-index 3, etc.)
        top: `${topOffset}px`,
        marginBottom: '60vh',
        transform: 'translateZ(0)' // Force GPU acceleration
      }}
    >
      {/* Content Section - Left Side */}
      <div className="flex-1 w-3/4 md:w-1/2 flex flex-col md:flex-row items-start gap-4 md:gap-6">
        <div className="text-center md:text-left flex-1">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className={`text-5xl sm:text-6xl font-black select-none opacity-50 ${
              isDark ? 'text-slate-800' : 'text-slate-200'
            }`}>
              {feature.number}
            </span>
            <h4 className={`text-2xl sm:text-3xl font-bold ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {feature.title}
            </h4>
          </div>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {feature.desc}
          </p>
        </div>
      </div>

      {/* Image Section - Right Side */}
      <div className="flex-shrink-0 w-full md:w-1/2 relative">
        <div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${feature.gradient} p-1`}>
          <div className={`rounded-xl overflow-hidden ${
            isDark ? 'bg-black/40' : 'bg-white/40'
          } backdrop-blur-sm`}>
            <img 
              src={feature.image} 
              alt={feature.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 mix-blend-overlay pointer-events-none`}></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

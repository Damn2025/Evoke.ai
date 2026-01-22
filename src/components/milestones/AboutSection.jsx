import { useState, useEffect, useRef } from 'react';
import { AGENTS } from '../../data/constants';
import aeonVideo from '../../assets/AEON_V.mp4';
import novaVideo from '../../assets/NOVA_V.mp4';
import orionVideo from '../../assets/ORION_V.mp4';
import cipherVideo from '../../assets/CIPHER_VI.mp4';
import AgentVideoPlayer from '../AgentVideoPlayer';
import chatbotBuilderImage from '../../assets/ChatBot.png';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';

const AboutSection = ({ milestone, theme }) => {
  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";
  const isDark = theme === 'dark';

  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 md:mb-8 relative overflow-hidden group shiny-badge">
        {/* Gradient background */}
        <div className={`absolute inset-0 ${brandGradient} opacity-30 rounded-full`}></div>
        
        {/* Shiny overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-full"></div>
        
        {/* Pulsing dot */}
        <span className="relative z-10 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00d2ff] animate-pulse shadow-lg shadow-[#00d2ff]/60"></span>
        
        {/* Category text with gradient */}
        <span 
          className={`relative z-10 ${isDark ? 'text-white' : textGradient} text-[10px] xs:text-xs sm:text-sm font-bold tracking-[0.15em] uppercase`}
          style={{ fontFamily: '"Poppins", "Montserrat", "Inter", sans-serif' }}
        >
          {milestone.category}
        </span>
        
        {/* Glowing border */}
        <div className="absolute inset-0 rounded-full border-2 border-[#00d2ff]/40 group-hover:border-[#27bce2]/60 transition-all duration-300 shadow-lg shadow-[#00d2ff]/20"></div>
      </div>
      <h2 className={`text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-8 sm:mb-12 md:mb-16 uppercase tracking-tighter italic px-4 ${isDark ? 'text-white' : 'text-black'}`}>
        {milestone.title.split(' ').map((word, index) => {
          if (index === 1) {
            // Second word "Us" with gradient
            return (
              <span 
                key={index}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]"
              >
                {index > 0 ? ' ' : ''}{word}
              </span>
            );
          }
          return <span key={index}>{index > 0 ? ' ' : ''}{word}</span>;
        })}
      </h2>
      
      {/* Agents Video Grid Section */}
      <div className="relative px-3 sm:px-4 md:px-6 pb-0 z-10">
        <div className="w-full mx-auto relative">
          <AgentsVideoGrid isDark={isDark} />
        </div>
      </div>

      {/* About Text Section - Starts from gradient area */}
      {/* <div className={`max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-12 relative z-10 ${
        isDark ? 'mt-4 sm:-mt-24 md:-mt-30' : 'mt-8 sm:mt-4 md:mt-8'
      }`}>
        <p 
          className={`font-semibold leading-relaxed text-center ${isDark ? 'text-white' : 'text-gray-700'} text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px]`}
          style={{
            fontFamily: '"Poppins", "Montserrat", "Raleway", sans-serif',
            lineHeight: '1.4'
          }}
        >
        <span className={textGradient}>EVOKE AI</span> is a comprehensive enterprise AI platform empowering businesses to adopt intelligent automation, transform workflows, and scale operations with efficiency and confidence.
        </p>
      </div> */}

      {/* FAQ Cards Section - Long Flex Row */}
      <FAQCardsSection isDark={isDark} />

      {/* Images Section - First Three Images from Agents Section */}
      <ImagesSection isDark={isDark} />
    </div>
  );
};

// Component that displays the agents video grid
const AgentsVideoGrid = ({ isDark }) => {
  const [isOrionModalOpen, setIsOrionModalOpen] = useState(false);
  
  // Map agent videos
  const agentVideos = {
    'AEON': aeonVideo,
    'NOVA': novaVideo,
    'ORION': orionVideo,
    'CIPHER': cipherVideo
  };

  // Map agent links
  const agentLinks = {
    'AEON': 'http://evokeai.in/aeon/',
    'NOVA': 'https://nova-message-crafter.netlify.app/',
    'CIPHER': 'https://www.cyber.evokeai.info/',
    'ORION': null // No link provided
  };

  // Map agent capabilities
  const agentCapabilities = {
    'NOVA': [
      { text: 'Create campaigns', icon: '📧' },
      { text: 'Personalize messages', icon: '✨' },
      { text: 'Track performance', icon: '📊' }
    ],
    'AEON': [
      { text: 'Build chatbots', icon: '💬' },
      { text: 'Design flows', icon: '🔄' },
      { text: 'Handle queries', icon: '🤖' }
    ],
    'ORION': [
      { text: 'Create courses', icon: '📚' },
      { text: 'Structure content', icon: '📝' },
      { text: 'Publish modules', icon: '🚀' }
    ],
    'CIPHER': [
      { text: 'Scan vulnerabilities', icon: '🔍' },
      { text: 'Analyze threats', icon: '🛡️' },
      { text: 'Generate reports', icon: '📋' }
    ]
  };

  // Color configuration for each agent
  const agentColors = [
    { 
      primary: '#12B9A7', // NOVA - Teal
      textColor: isDark ? '#FFFFFF' : '#000000'
    },
    { 
      primary: '#FED335', // AEON - Yellow
      textColor: isDark ? '#FFFFFF' : '#000000'
    },
    { 
      primary: '#7EC650', // ORION - Emerald
      textColor: isDark ? '#FFFFFF' : '#000000'
    },
    { 
      primary: '#dc2626', // CIPHER - Red
      textColor: isDark ? '#FFFFFF' : '#000000'
    }
  ];

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideIn {
          from { 
            opacity: 0;
            transform: scale(0.7) translateY(-50px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {AGENTS.map((agent, index) => {
          const agentColor = agentColors[index];
          const agentVideo = agentVideos[agent.name];
          const agentLink = agentLinks[agent.name];

          const CardContent = (
            <div className="flip-card h-full min-h-[500px] sm:min-h-[550px]">
              <div className="flip-card-inner h-full">
                {/* Front of Card */}
                <div className="flip-card-front">
                  <div
                    className={`group relative rounded-2xl sm:rounded-3xl border transition-all duration-500 h-full ${
                      isDark 
                        ? 'bg-black/50 border-white/10 hover:border-emerald-500/50' 
                        : 'bg-white/80 border-black/5 shadow-2xl shadow-black/5'
                    } ${agentLink || agent.name === 'ORION' ? 'cursor-pointer' : ''}`}
                    style={{
                      background: isDark
                        ? `linear-gradient(135deg, ${agentColor.primary}15, ${agentColor.primary}10)`
                        : `linear-gradient(135deg, ${agentColor.primary}08, ${agentColor.primary}05)`
                    }}
                  >
                    {/* Gradient Border Effect on Hover */}
                    <div
                      className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden"
                      style={{
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 2.5s ease-in-out infinite'
                      }}
                    >
                      <div className={`absolute inset-[1px] rounded-3xl ${
                        isDark ? 'bg-black/50' : 'bg-white/80'
                      }`}></div>
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Agent Video Container */}
                      <div
                        className="w-full rounded-t-2xl sm:rounded-t-3xl relative overflow-hidden"
                        style={{
                          boxShadow: `0 10px 40px ${agentColor.primary}40`,
                          aspectRatio: '16 / 9'
                        }}
                      >
                        <AgentVideoPlayer
                          src={agentVideo}
                          className="w-full h-full object-contain"
                          alt={`${agent.name} agent video`}
                        />
                      </div>

                      {/* Content Section */}
                      <div className="w-full p-4 sm:p-6 md:p-8 lg:p-10 text-center flex-1 flex flex-col justify-center">
                        {/* Agent Name */}
                        <h3
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black italic mb-2 sm:mb-3"
                          style={{
                            color: agentColor.textColor
                          }}
                        >
                          {agent.name}
                        </h3>

                        {/* Agent Role */}
                        <p
                          className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 lg:mb-8"
                          style={{
                            color: agentColor.primary
                          }}
                        >
                          {agent.role}
                        </p>

                        {/* Agent Description */}
                        <p 
                          className="text-sm sm:text-base lg:text-lg leading-relaxed"
                          style={{
                            color: agentColor.textColor,
                            opacity: isDark ? 0.9 : 0.7
                          }}
                        >
                          {agent.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card - What I can do */}
                <div className="flip-card-back">
                  <div
                    className={`relative rounded-2xl sm:rounded-3xl border h-full ${
                      isDark 
                        ? 'bg-black/50 border-white/10' 
                        : 'bg-white/80 border-black/5 shadow-2xl shadow-black/5'
                    }`}
                    style={{
                      background: isDark
                        ? `linear-gradient(135deg, ${agentColor.primary}15, ${agentColor.primary}10)`
                        : `linear-gradient(135deg, ${agentColor.primary}08, ${agentColor.primary}05)`
                    }}
                  >
                    <div className="relative z-10 flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-10">
                      {/* What I can do Section */}
                       {/* Content Section */}
                       <div className="w-full p-4 sm:p-6 md:p-8 lg:p-10 text-center flex-1 flex flex-col justify-center">
                        {/* Agent Name */}
                        <h3
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black italic mb-2 sm:mb-3"
                          style={{
                            color: agentColor.textColor
                          }}
                        >
                          {agent.name}
                        </h3>

                        {/* Agent Role */}
                        <p
                          className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 lg:mb-8"
                          style={{
                            color: agentColor.primary
                          }}
                        >
                          {agent.role}
                        </p>

                   
                      
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 
                          className="text-xs sm:text-sm font-bold text-center uppercase tracking-wider mb-4 sm:mb-6"
                          style={{
                            color: agentColor.primary
                          }}
                        >
                          What I can do...
                        </h4>
                        <ul className="space-y-3 sm:space-y-4">
                          {agentCapabilities[agent.name]?.map((capability, capIndex) => (
                            <li 
                              key={capIndex}
                              className="flex items-center gap-2 sm:gap-3 font-semibold text-xs sm:text-sm border p-3 sm:p-4 rounded-lg"
                              style={{
                                color: agentColor.textColor,
                                opacity: isDark ? 0.85 : 0.75,
                                border: `1px solid ${agentColor.primary}`,
                                borderRadius: '10px'
                              }}
                            >
                              <span className="text-base sm:text-lg">{capability.icon}</span>
                              <span>{capability.text}</span>
                            </li>
                          ))}
                        </ul>
                        <p 
                          className="text-xs sm:text-sm mt-4 sm:mt-6 italic text-center"
                          style={{
                            color: agentColor.textColor,
                            opacity: isDark ? 0.7 : 0.6
                          }}
                        >
                          And many more...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );

          return agentLink ? (
            <a
              key={index}
              href={agentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {CardContent}
            </a>
          ) : agent.name === 'ORION' ? (
            <div 
              key={index}
              onClick={() => setIsOrionModalOpen(true)}
              className="cursor-pointer"
            >
              {CardContent}
            </div>
          ) : (
            <div key={index}>
              {CardContent}
            </div>
          );
        })}
      </div>

      {/* ORION Modal */}
      {isOrionModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOrionModalOpen(false)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div 
            className="relative bg-black border-2 border-emerald-500/50 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'modalSlideIn 0.4s ease-out' }}
          >
            {/* Animated Border Glow */}
            <div 
              className="absolute -inset-[2px] rounded-2xl opacity-75 pointer-events-none"
              style={{
                background: 'linear-gradient(45deg, #7EC650, #1dc393, #7EC650)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 3s ease-in-out infinite',
                filter: 'blur(8px)'
              }}
            />
            
            {/* Close Button */}
            <button
              onClick={() => setIsOrionModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-emerald-500/20 hover:bg-emerald-500/40 border border-emerald-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Close modal"
            >
              <svg 
                className="w-6 h-6 text-emerald-400" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-emerald-400 mb-4">Coming Soon</h2>
              <p className="text-white/80 text-lg">
                ORION is currently under development. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Enterprise AI Section Component
const FAQCardsSection = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 mt-10 sm:mt-16 md:mt-20 transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-20 scale-95'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
        {/* Image Section - Left Side */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img 
            src={chatbotBuilderImage} 
            alt="Enterprise AI"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content Section - Right Side */}
        <div className="flex-1 w-full md:w-1/2 text-left ">
          {/* Heading - Enterprise AI */}
          <h3
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{
              fontFamily: '"Poppins", "Montserrat", sans-serif'
            }}
          >
            <span className={textGradient}>Enterprise AI</span>  <br/>for smarter, scalable business automation.
          </h3>
          
          {/* Unordered List - Small Font */}
          <ul className="space-y-3 sm:space-y-4 list-disc pl-5 sm:pl-6" >
            <li
              className={`text-xs sm:text-sm md:text-base leading-relaxed ${
                isDark ? 'text-white/80' : 'text-gray-700'
              }`}
              style={{
                fontFamily: '"GT Walsheim Pro", "Inter", sans-serif'
              }}
            >
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}><span className={textGradient}>Enterprise</span> AI</strong>  involves using artificial intelligence across business operations to improve efficiency, decision-making, and customer experiences. It supports use cases like support automation, compliance, training, and document workflows at scale.
            </li>
            
            <li
              className={`text-xs sm:text-sm md:text-base leading-relaxed ${
                isDark ? 'text-white/80' : 'text-gray-700'
              }`}
              style={{
                fontFamily: '"GT Walsheim Pro", "Inter", sans-serif'
              }}
            >
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}><span className={textGradient}>Business</span> Benefits.</strong> It helps reduce costs, automate repetitive tasks, and improve accuracy. It also enables smarter decisions through data insights and enhances customer engagement with personalized interactions.
            </li>
            
            <li
              className={`text-xs sm:text-sm md:text-base leading-relaxed ${
                isDark ? 'text-white/80' : 'text-gray-700'
              }`}
              style={{
                fontFamily: '"GT Walsheim Pro", "Inter", sans-serif'
              }}
            >
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}><span className={textGradient}>Key</span> Use Cases.</strong> Common use cases include AI chatbots for customer support, fraud detection, predictive maintenance, personalized marketing, and supply chain optimization across industries.
            </li>
            
            <li
              className={`text-xs sm:text-sm md:text-base leading-relaxed ${
                isDark ? 'text-white/80' : 'text-gray-700'
              }`}
              style={{
                fontFamily: '"GT Walsheim Pro", "Inter", sans-serif'
              }}
            >
              <strong className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}> <span className={textGradient}>EVOKE AI </span> Platform.</strong> It offers a no-code orchestration platform that lets enterprises build and deploy AI agents easily. It simplifies adoption, enabling faster implementation without deep technical expertise.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Images Section Component - First Three Images from Agents Section
const ImagesSection = ({ isDark }) => {
  const images = [image1, image2, image3];
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";

  return (
    <div className="mt-16 sm:mt-20 lg:mt-24 w-full mx-auto px-4 sm:px-6">
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24">
        {images.map((img, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <div
            key={index}
              className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20 sm:gap-8 md:gap-12`}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl w-full md:w-1/2 lg:w-3/5">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Text Section */}
              <div className={`w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center text-left`}>
                <h3 className={`text-4xl sm:text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  {index === 0 && (
                    <>
                      AI That Works Like <span className={textGradient}>Your Team</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className={textGradient}>One Platform</span><br />
                      Multiple Ventures
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className={textGradient}>Enterprise</span> Excellence
                    </>
                  )}
                </h3>
                {index === 1 ? (
                  <div className={`space-y-4 ${isDark ? 'text-white/80' : 'text-black/70'}`}>
                    <p className={`text-sm sm:text-base md:text-lg leading-relaxed mb-6 ${isDark ? 'text-white/90' : 'text-black/80'}`}>
                      Manage distinct brands or projects without the chaos.
                    </p>
                    <div className="space-y-4 max-w-xl">
                      <div>
                        <h4 className={`text-base sm:text-lg md:text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                          Custom Business Profiles (Up to 4)
                        </h4>
                        <p className="text-sm sm:text-base leading-relaxed" style={{ fontFamily: '"GT Walsheim Pro", "Inter", sans-serif' }}>
                          Don't mix your real estate leads with your e-commerce support. Create up to 5 dedicated workspaces, each staffed with AI employees trained for that specific business model.
                        </p>
                      </div>
                      <div>
                        <h4 className={`text-base sm:text-lg md:text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                          Seamless Team Collaboration
                        </h4>
                        <p className="text-sm sm:text-base leading-relaxed" style={{ fontFamily: '"GT Walsheim Pro", "Inter", sans-serif' }}>
                          Bring your human team into the loop. Share workspace access in real-time, ensuring everyone—from stakeholders to interns—has visibility into your AI's performance and insights.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className={`text-sm sm:text-base font-medium md:text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-black/70'}`}>
                    {index === 0 && 'EVOKE AI understands your business from the ground up. It adapts to your workflows, brand voice, and goals by learning from your data, documents, and digital presence. Share your guidelines, assets, and instructions to unlock smarter, more accurate outcomes. By taking care of repetitive and operational tasks, EVOKE AI empowers your team to focus on strategy, creativity, and growth—working alongside humans, not replacing them.'}
                    {index === 2 && 'Join leading enterprises that trust EVOKE AI to deliver exceptional results and transform their digital infrastructure.Engineered to meet enterprise-grade standards for reliability, compliance, and long-term growth.'}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSection;


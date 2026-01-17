import { AGENTS } from '../../data/constants';
import aeonVideo from '../../assets/AEON_V.mp4';
import novaVideo from '../../assets/NOVA_V.mp4';
import orionVideo from '../../assets/ORION_V.mp4';
import cipherVideo from '../../assets/CIPHER_VI.mp4';
import AgentVideoPlayer from '../AgentVideoPlayer';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.jpeg';
import image5 from '../../assets/images/image5.jpg';


/**
 * AgentsSection Component
 * Simple display of all agents with gradient styling
 * @param {Object} milestone - Milestone data object
 * @param {string} theme - Current theme ('dark' or 'light')
 */
const AgentsSection = ({ milestone, theme }) => {
  const isDark = theme === 'dark';
  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";
  
  // Images from images folder
  const images = [image1, image2, image3, image4, image5];
  
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

  // Color configuration for each agent
  const agentColors = [
    { 
      primary: '#12B9A7', // NOVA - Teal
      textColor: isDark ? '#FFFFFF' : '#000000' // White (Dark) / Black (Light)
    },
    { 
      primary: '#FED335', // AEON - Yellow
      textColor: isDark ? '#FFFFFF' : '#000000' // White (Dark) / Black (Light)
    },
  
    { 
      primary: '#7EC650', // ORION - Emerald (keeping original)
      textColor: isDark ? '#FFFFFF' : '#000000'
    },
    { 
      primary: '#dc2626', // CIPHER - Red
      textColor: isDark ? '#FFFFFF' : '#000000' // White (Dark) / Black (Light)
    }
  ];

  return (
    <div className="relative w-full py-10 sm:py-16 lg:py-20 px-3 sm:px-6">
      <div className="mx-auto ">
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
            {milestone.title.split(' ').map((word, index) => {
              if (index === 0) {
                // First word "AI" with gradient
                return (
                  <span 
                    key={index}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]"
                  >
                    {word}
                  </span>
                );
              }
              return <span key={index}> {word}</span>;
            })}
          </h2>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {AGENTS.map((agent, index) => {
            const Icon = agent.icon;
            const agentColor = agentColors[index];
            const agentVideo = agentVideos[agent.name];

            const agentLink = agentLinks[agent.name];
            const CardContent = (
              <div
                className={`group relative rounded-2xl sm:rounded-3xl border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${
                  isDark 
                    ? 'bg-black/50 border-white/10 hover:border-emerald-500/50' 
                    : 'bg-white/80 border-black/5 shadow-2xl shadow-black/5'
                } ${agentLink ? 'cursor-pointer' : ''}`}
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
                    // background: `linear-gradient(90deg, ${gradient.start}, ${gradient.end}, ${gradient.start})`,
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2.5s ease-in-out infinite'
                  }}
                >
                  <div className={`absolute inset-[1px] rounded-3xl ${
                    isDark ? 'bg-black/50' : 'bg-white/80'
                  }`}></div>
                </div>

                <div className="relative z-10 flex flex-col">
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
                  <div className="w-full p-4 sm:p-6 md:p-8 lg:p-10 text-center">
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
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Images Section - Bottom with Alternating Layout */}
        <div className="mt-16 sm:mt-20 lg:mt-24 w-full  mx-auto">
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
                    <h3 className={`text-6xl sm:text-3xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                      {index === 0 && 'Innovative Solutions'}
                      {index === 1 && (
                        <>
                          One Platform<br />
                          Multiple Ventures
                        </>
                      )}
                      {index === 2 && 'Enterprise Excellence'}
                      {index === 3 && (
                        <>
                       Grow Revenue with an <br/> AI-powered Email Marketer
            </>)}
                      {index === 4 &&  (
                        <>
                          Convert and sell with a <br />
                          data-driven Al chatbot
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
                      <p className={`text-sm sm:text-base font-semibold md:text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-black/70'}`}>
                        {index === 0 && 'Discover how EVOKE AI revolutionizes business operations with intelligent automation and seamless integration across all platforms.'}
                        {index === 2 && 'Join leading enterprises that trust EVOKE AI to deliver exceptional results and transform their digital infrastructure.'}
                        {index === 3 && 'Connect, automate, and sell your vision to the world . Craft Perfect Campaign  Messages in SecondsExperience the email and automation solution that takes your business to the next level'}
                        {index === 4 && 'AEON is a single platform for creating and launching chatbots of any complexity without programming'}
                      </p>
                    )}
                    {/* GET NOVA Button for 3rd image */}
                    {index === 3 && (
                      <div className="mt-6">
                        <a
                          href="https://nova-message-crafter.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2 bg-teal-300 hover:bg-yellow-400 text-black font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                        >
                          GET NOVA
                        </a>
                      </div>
                    )}
                    {/* GET AEON Button for last image */}
                    {index === 4 && (
                        <div className="mt-6">
                          <a
                            href="http://evokeai.in/aeon/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2 bg-yellow-300 hover:bg-yellow-350 text-black font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                          >
                            GET AEON
                          </a>
                        </div>
                      )}
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS Animation for Shimmer Effect */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default AgentsSection;

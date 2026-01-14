import { AGENTS } from '../../data/constants';
import aeonVideo from '../../assets/AEON_V.mp4';
import novaVideo from '../../assets/NOVA_V.mp4';
import orionVideo from '../../assets/ORION_V.mp4';
import cipherVideo from '../../assets/CIPHER_VI.mp4';
import AgentVideoPlayer from '../AgentVideoPlayer';


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
  
  // Map agent videos
  const agentVideos = {
    'AEON': aeonVideo,
    'NOVA': novaVideo,
    'ORION': orionVideo,
    'CIPHER': cipherVideo
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
            {milestone.title}
          </h2>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {AGENTS.map((agent, index) => {
            const Icon = agent.icon;
            const agentColor = agentColors[index];
            const agentVideo = agentVideos[agent.name];

            return (
              <div
                key={index}
                className={`group relative rounded-2xl sm:rounded-3xl border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${
                  isDark 
                    ? 'bg-black/50 border-white/10 hover:border-emerald-500/50' 
                    : 'bg-white/80 border-black/5 shadow-2xl shadow-black/5'
                }`}
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
          })}
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

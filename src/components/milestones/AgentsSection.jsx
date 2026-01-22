import { useState } from 'react';
import { AGENTS } from '../../data/constants';
import aeonVideo from '../../assets/AEON_V.mp4';
import novaVideo from '../../assets/NOVA_V.mp4';
import orionVideo from '../../assets/ORION_V.mp4';
import cipherVideo from '../../assets/CIPHER_VI.mp4';
import AgentVideoPlayer from '../AgentVideoPlayer';
import image4 from '../../assets/images/image4.jpeg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.png';


/**
 * AgentsSection Component
 * Simple display of all agents with gradient styling
 * @param {Object} milestone - Milestone data object
 * @param {string} theme - Current theme ('dark' or 'light')
 */
const AgentsSection = ({ milestone, theme }) => {
  const isDark = theme === 'dark';
  const [isOrionModalOpen, setIsOrionModalOpen] = useState(false);
  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";
  
  // Images from images folder
  const images = [image4, image5, image6, image7];
  
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
                    {word}{' '}
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
                      {index === 0 && (
                        <>
                       Grow Revenue with an <br/> AI-powered Email Marketer
            </>)}
                      {index === 1 &&  (
                        <>
                          Convert and sell with a <br />
                          data-driven Al chatbot
                        </> 
            )}
                      {index === 2 && (
                        <>
                          Generate interactive <br />
                          e-learning content in minutes
                        </> 
            )}
                      {index === 3 && (
                        <>
                          Discover the most <br />
                          dangerous threats.
                        </> 
            )}
                    </h3>
                    
                    <p className={`text-sm sm:text-base font-semibold md:text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-black/70'}`}>
                      {index === 0 && 'Connect, automate, and sell your vision to the world . Craft Perfect Campaign  Messages in SecondsExperience the email and automation solution that takes your business to the next level'}
                      {index === 1 && 'AEON is a single platform for creating and launching chatbots of any complexity without programming'}
                      {index === 2 && 'Create engaging and interactive e-learning content quickly and efficiently with AI-powered tools that transform your educational materials into dynamic learning experiences.'}
                      {index === 3 && 'CIPHER scans web and mobile applications to identify vulnerabilities and security threats, helping teams prioritize real risks and strengthen their cybersecurity posture.'}
                    </p>
                    {/* GET NOVA Button for first image */}
                    {index === 0 && (
                      <div className="mt-6">
                        <a
                          href="https://nova-message-crafter.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2 bg-teal-300 hover:bg-teal-400 text-black font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                        >
                          GET NOVA
                        </a>
                      </div>
                    )}
                    {/* GET AEON Button for last image */}
                    {index === 1 && (
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
                    {/* GET ORION Button for image6 */}
                    {index === 2 && (
                      <div className="mt-6">
                        <button
                          onClick={() => setIsOrionModalOpen(true)}
                          className="inline-block px-6 py-2 bg-[#7EC650] hover:bg-[#6db340] text-black font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                          GET ORION
                        </button>
                      </div>
                    )}
                    {/* GET CIPHER Button for image7 */}
                    {index === 3 && (
                      <div className="mt-6">
                        <a
                          href="https://www.cyber.evokeai.info/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                        >
                          GET CIPHER
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
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-modalSlideIn {
          animation: modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>

      {/* ORION Modal */}
      {isOrionModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsOrionModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"></div>
          
          {/* Modal Content */}
          <div 
            className={`relative z-10 w-full max-w-2xl rounded-3xl shadow-2xl transform transition-all duration-500 ease-out animate-modalSlideIn ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Border Glow */}
            <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
              isDark ? 'bg-gradient-to-r from-[#7EC650]/20 via-[#7EC650]/10 to-[#7EC650]/20' : 'bg-gradient-to-r from-[#7EC650]/10 via-[#7EC650]/5 to-[#7EC650]/10'
            } animate-pulse`}></div>
            
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOrionModalOpen(false);
              }}
              className={`absolute top-6 right-6 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 cursor-pointer ${
                isDark ? 'hover:bg-gray-800 text-white bg-gray-800/50' : 'hover:bg-gray-100 text-gray-600 bg-white/50'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Body */}
            <div className="relative p-10 sm:p-16 text-center">
              <div className="mb-8 animate-bounceIn">
                <div className={`inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-6 animate-pulse ${
                  isDark ? 'bg-[#7EC650]/20' : 'bg-[#7EC650]/10'
                }`}>
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#7EC650] animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Coming Soon
              </h2>
              
              <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 animate-fadeInUp delay-200 ${
                isDark ? 'text-white/70' : 'text-gray-600'
              }`}>
                ORION is currently under development. We're working hard to bring you an amazing e-learning experience. Stay tuned!
              </p>

              {/* Animated Loading Dots */}
              <div className="flex justify-center gap-2 animate-fadeInUp delay-300">
                <div className="w-3 h-3 bg-[#7EC650] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-3 h-3 bg-[#7EC650] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-[#7EC650] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentsSection;

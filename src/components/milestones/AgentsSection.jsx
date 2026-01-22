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
                    {word} {' '}
                  </span>
                );
              }
              return <span key={index}> {word}</span>;
            })}
          </h2>
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
                    {/* Name and Job Capsules */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {index === 0 && (
                        <>
                          <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider ${isDark ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' : 'bg-teal-100 text-teal-700 border border-teal-300'}`}>
                            NOVA: Email Marketer
                          </span>

                          
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider ${isDark ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-yellow-100 text-yellow-700 border border-yellow-300'}`}>
                            AEON: ChatBot Builder
                          </span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider ${isDark ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border border-emerald-300'}`}>
                            ORION: Course Creator
                          
                      
                          </span>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider ${isDark ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-red-100 text-red-700 border border-red-300'}`}>
                            CIPHER: Cyber Security
                          </span>
                        </>
                      )}
                    </div>
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

import { useState, useEffect, useRef } from 'react';
import aboutImage from '../../assets/Aboutus.png';

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
                {index > 0 ? ' ' : ''}{word}{' '}
              </span>
            );
          }
          return <span key={index}>{index > 0 ? ' ' : ''}{word}</span>;
        })}
      </h2>
      
      {/* 3D Motion Section */}
      <div className="relative px-3 sm:px-4 md:px-6 perspective-1000 pb-0 z-10">
        <div className="w-full mx-auto relative">
          <ThreeDImageCard isDark={isDark} />
          
          {/* Black Gradient Light Effect Below Image - Only for Dark Mode */}
          {isDark && (
            <div 
              className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 md:h-40 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 80%, rgba(0,0,0,1) 100%)'
              }}
            />
          )}
        </div>
      </div>

      {/* About Text Section - Starts from gradient area */}
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-12 relative z-10 ${
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
      </div>

      {/* FAQ Cards Section - Long Flex Row */}
      <FAQCardsSection isDark={isDark} />

      {/* Images Section - First Three Images from Agents Section */}
      <ImagesSection isDark={isDark} />
    </div>
  );
};

// Component that displays the static image
const ThreeDImageCard = ({ isDark }) => {
  return (
    <div className="relative w-full group">
      {/* Static Image Container */}
      <div className={`w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden ${isDark ? 'shadow-2xl' : ''}`}>
        {/* Main Image - Using About.png */}
        <img 
          src={aboutImage} 
          alt="About Evoke AI" 
          className="w-full h-auto object-contain transition-transform duration-[2s] group-hover:scale-105"
        />
      </div>
    </div>
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


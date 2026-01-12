import { useState, useEffect, useRef } from 'react';
import aboutImage from '../../assets/About.png';
import evokeLogo from '../../assets/evoke.png';

const AboutSection = ({ milestone, theme, scrollPercent }) => {
  const gradientBg = "bg-gradient-to-br from-[#1dc393] via-[#27bce2] to-[#7fe7ce]";
  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";
  const isDark = theme === 'dark';

  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 relative overflow-hidden group shiny-badge">
        {/* Gradient background */}
        <div className={`absolute inset-0 ${brandGradient} opacity-30 rounded-full`}></div>
        
        {/* Shiny overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-full"></div>
        
        {/* Pulsing dot */}
        <span className="relative z-10 w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse shadow-lg shadow-[#00d2ff]/60"></span>
        
        {/* Category text with gradient */}
        <span 
          className={`relative z-10 ${isDark ? 'text-white' : textGradient} text-xs sm:text-sm font-bold tracking-[0.15em] uppercase`}
          style={{ fontFamily: '"Poppins", "Montserrat", "Inter", sans-serif' }}
        >
          {milestone.category}
        </span>
        
        {/* Glowing border */}
        <div className="absolute inset-0 rounded-full border-2 border-[#00d2ff]/40 group-hover:border-[#27bce2]/60 transition-all duration-300 shadow-lg shadow-[#00d2ff]/20"></div>
      </div>
      <h2 className={`text-6xl md:text-8xl font-black mb-16 uppercase tracking-tighter italic ${isDark ? 'text-white' : 'text-black'}`}>
        {milestone.title.split(' ').map((word, index) => {
          if (index === 1) {
            // Second word with gradient
            return (
              <span 
                key={index}
                className="bg-gradient-to-r from-[#1dc393] via-[#27bce2] to-[#7fe7ce] bg-clip-text text-transparent pr-5"
              >
                {index > 0 ? ' ' : ''}{word}
              </span>
            );
          }
          return <span key={index}>{index > 0 ? ' ' : ''}{word}</span>;
        })}
      </h2>
      
      {/* 3D Motion Section */}
      <div className="relative px-6 perspective-1000 pb-0 z-10">
        <div className="w-full mx-auto relative">
          <ThreeDImageCard scrollPercent={scrollPercent} isDark={isDark} gradientBg={gradientBg} />
          
          {/* Black Gradient Light Effect Below Image - Only for Dark Mode */}
          {isDark && (
            <div 
              className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 80%, rgba(0,0,0,1) 100%)'
              }}
            />
          )}
        </div>
      </div>

      {/* About Text Section - Starts from gradient area */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-12 -mt-30 relative z-10">
        <p 
          className={`font-semibold leading-relaxed ${isDark ? 'text-[white]' : 'text-gray-700'}`}
          style={{
            fontSize: '48px',
            fontFamily: '"Poppins", "Montserrat", "Raleway", sans-serif',
            lineHeight: '1.4'
          }}
        >
      
        EVOKE AI is a comprehensive enterprise AI platform empowering businesses to adopt intelligent automation, transform workflows, and scale operations with efficiency and confidence.
        </p>
      </div>

      {/* FAQ Cards Section - Long Flex Row */}
      <FAQCardsSection isDark={isDark} />
    </div>
  );
};

// Component that displays the static image
const ThreeDImageCard = ({ scrollPercent, isDark, gradientBg }) => {
  return (
    <div className="relative w-full group">
      {/* Static Image Container */}
      <div className={`w-full rounded-2xl overflow-hidden ${isDark ? 'shadow-2xl' : ''}`}>
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

// FAQ Data
const faqData = [
  {
    question: "What is Enterprise AI?",
    answer: "Enterprise AI refers to the integration of artificial intelligence technologies into business operations to enhance efficiency, decision-making, and customer experiences. It encompasses a wide range of applications, including support desk, compliance, training, document drafting, among others, tailored to the specific needs of large organizations."
  },
  {
    question: "How does Enterprise AI benefit businesses?",
    answer: "Enterprise AI can streamline processes, reduce operational costs, improve accuracy in data handling, and enable better decision-making through advanced analytics. It also enhances customer engagement by personalizing interactions and automating responses."
  },
  {
    question: "What are common use cases for Enterprise AI?",
    answer: "Common use cases include customer service automation (such as chatbots), predictive maintenance in manufacturing, fraud detection in finance, personalized marketing strategies, and supply chain optimization."
  },
  {
    question: "How does EVOKE AI fit into the Enterprise AI landscape?",
    answer: "EVOKE AI provides an orchestration platform that allows companies to build AI Agents without requiring deep technical expertise. Its SaaS tools simplify the workflow, making it accessible for enterprises to implement AI solutions quickly and effectively."
  }
];

// Individual FAQ Card Component with Image
const FAQCard = ({ question, answer, index, isDark, imagePosition }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, index * 200); // Stagger animation
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  const isLeft = imagePosition === 'left';

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-20 scale-95'
      }`}
    >
      <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 mb-16`}>
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="w-full h-64 md:h-80 bg-gradient-to-br from-[#1dc393] via-[#27bce2] to-[#7fe7ce] flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, rgba(29,195,147,0.8) 0%, rgba(39,188,226,0.8) 50%, rgba(127,231,206,0.8) 100%)`
              }}
            >
              <img 
                src={index % 2 === 0 ? aboutImage : evokeLogo} 
                alt={`FAQ ${index + 1}`}
                className="w-full h-full object-cover opacity-90 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1dc393]/20 via-[#27bce2]/20 to-[#7fe7ce]/20"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`flex-1 w-full md:w-2/3 ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
          <div
            className={`p-8 md:p-10 rounded-2xl backdrop-blur-xl  transition-all duration-300 hover:scale-[1.02] ${
              isDark
                ? 'bg-black/40  hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(29,195,147,0.2)]'
                : 'bg-white/60  hover:border-emerald-500/40 hover:shadow-lg'
            }`}
          >
            <h3
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              } ${isLeft ? 'md:text-right' : 'md:text-left'}`}
              style={{
                fontFamily: '"Poppins", "Montserrat", sans-serif'
              }}
            >
              <span className="bg-gradient-to-r from-[#1dc393] via-[#27bce2] to-[#7fe7ce] bg-clip-text text-transparent">
                {question}
              </span>
            </h3>
            <p
              className={`text-lg md:text-xl leading-relaxed ${
                isDark ? 'text-[white]' : 'text-gray-700'
              } ${isLeft ? 'md:text-right' : 'md:text-left'}`}
              style={{
                fontFamily: '"GT Walsheim Pro", "Inter", sans-serif'
              }}
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Cards Section Component
const FAQCardsSection = ({ isDark }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 mt-20">
      <div className="flex flex-col">
        {faqData.map((faq, index) => (
          <FAQCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
            isDark={isDark}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;


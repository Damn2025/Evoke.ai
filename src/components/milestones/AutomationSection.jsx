import aeonImage from '../../assets/AEON.jpg';
import novaImage from '../../assets/NOVA.jpg';
import cipherImage from '../../assets/CIPHER.jpg';
import orionImage from '../../assets/O.jpg';

const AutomationSection = ({ milestone, theme }) => {
  const isDark = theme === 'dark';
  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";

  const images = [aeonImage, novaImage, cipherImage, orionImage];

  return (
    <div className="relative w-full py-10 sm:py-16 lg:py-20 px-3 sm:px-6">
      <div className="mx-auto max-w-7xl">
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
            Build Once.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]">Automate </span> Everything.
          </h2>
          
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-white/80' : 'text-black/70'}`}>
            With AI at the core. EVOKE AI delivers enterprise-grade automation for workflows, communication, and learning—driving growth without added complexity.
          </p>
        </div>

        {/* Images - Vertically Stacked */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Automation ${index + 1}`}
              className="w-full h-auto object-contain rounded-lg sm:rounded-xl md:rounded-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomationSection;

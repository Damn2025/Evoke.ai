import TestimonialCard from '../TestimonialCard';
import { TESTIMONIALS } from '../../data/constants';

const SocialSection = ({ milestone, theme }) => {
  // Split testimonials into two groups for different marquees
  const firstHalf = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const secondHalf = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

  return (
    <div className="px-3 sm:px-6">
      <div className="text-center mb-10 sm:mb-16">
        <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-6 sm:mb-8">{milestone.category}</span>
        <h2 className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none italic ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{milestone.title}</h2>
      </div>
      <div className="space-y-4 sm:space-y-8">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...firstHalf, ...firstHalf].map((t, i) => (
              <TestimonialCard key={`forward-${i}`} t={t} theme={theme} />
            ))}
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee-content-rev">
            {[...secondHalf, ...secondHalf].map((t, i) => (
              <TestimonialCard key={`reverse-${i}`} t={t} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;








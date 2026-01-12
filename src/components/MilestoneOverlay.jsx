import { MILESTONES } from '../data/constants';
import AboutSection from './milestones/AboutSection';
import FeaturesSection from './milestones/FeaturesSection';
import AgentsSection from './milestones/AgentsSection';
import SocialSection from './milestones/SocialSection';
import ContactSection from './milestones/ContactSection';
import FAQSection from './milestones/FAQSection';

const MilestoneOverlay = ({ scrollPercent, theme }) => {
  const renderSection = (milestone) => {
    switch (milestone.id) {
      case 'about':
        return <AboutSection milestone={milestone} theme={theme} />;
      case 'agents':
        return <AgentsSection milestone={milestone} theme={theme} />;
       case 'features':
        return <FeaturesSection milestone={milestone} theme={theme} />;
      case 'social':
        return <SocialSection milestone={milestone} theme={theme} />;
      case 'contact':
        return <ContactSection milestone={milestone} theme={theme} />;
      case 'faq':
        return <FAQSection milestone={milestone} theme={theme} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative z-50">
      {MILESTONES.map((m) => {
        const isActive = Math.abs(scrollPercent - m.t) < 0.08;
        // Performance optimization: Only render active section
        if (!isActive) {
          return (
            <section 
              key={m.id}
              className="fixed inset-0 opacity-0 translate-y-20 pointer-events-none bg-transparent"
            />
          );
        }
        return (
          <section 
            key={m.id}
            className={`fixed inset-0 flex items-center justify-center p-6 transition-all duration-1000 opacity-100 translate-y-0 pointer-events-auto ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
          >
            <div className="w-full mx-auto overflow-y-auto max-h-screen pt-32 no-scrollbar">
              {renderSection(m)}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MilestoneOverlay;


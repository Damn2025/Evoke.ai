import { MILESTONES } from '../data/constants';
import AboutSection from './milestones/AboutSection';
import AgentsSection from './milestones/AgentsSection';
import AutomationSection from './milestones/AutomationSection';
import PartnersSection from './milestones/PartnersSection';
import SocialSection from './milestones/SocialSection';
import ContactSection from './milestones/ContactSection';
import FAQSection from './milestones/FAQSection';

const MilestoneOverlay = ({ theme, setShowPrivacyPolicy }) => {
  const renderSection = (milestone) => {
    switch (milestone.id) {
      case 'about':
        return <AboutSection milestone={milestone} theme={theme} />;
      case 'agents':
        return <AgentsSection milestone={milestone} theme={theme} />;
      case 'automation':
        return <AutomationSection milestone={milestone} theme={theme} />;
      case 'partners':
        return <PartnersSection milestone={milestone} theme={theme} />;
      case 'social':
        return <SocialSection milestone={milestone} theme={theme} />;
      case 'contact':
        return <ContactSection milestone={milestone} theme={theme} />;
      case 'faq':
        return <FAQSection milestone={milestone} theme={theme} setShowPrivacyPolicy={setShowPrivacyPolicy} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative z-50">
      {MILESTONES.map((m) => (
        <section 
          key={m.id}
          id={m.id}
          className={`relative min-h-screen flex items-center justify-center p-6 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
        >
          <div className="w-full mx-auto">
            {renderSection(m)}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MilestoneOverlay;


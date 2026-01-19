import { useEffect, useRef } from 'react';
import { MILESTONES } from '../data/constants';
import AboutSection from './milestones/AboutSection';
import AgentsSection from './milestones/AgentsSection';
import AutomationSection from './milestones/AutomationSection';
import PartnersSection from './milestones/PartnersSection';
import SocialSection from './milestones/SocialSection';
import ContactSection from './milestones/ContactSection';
import FAQSection from './milestones/FAQSection';

const MilestoneOverlay = ({ scrollPercent, theme, setShowPrivacyPolicy }) => {
  const sectionRefs = useRef({});
  const scrollHandlers = useRef({});

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

  // Handle section scroll and convert to main page scroll
  useEffect(() => {
    const handleSectionScroll = (e, milestone) => {
      const scrollContainer = e.currentTarget;
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      
      if (scrollHeight <= 0) return;
      
      const sectionScrollPercent = scrollTop / scrollHeight;
      
      // Map section scroll (0-1) to a range around the milestone threshold
      // This creates a scrollable window of ~0.15 (15%) around each milestone
      const scrollWindow = 0.15;
      const minScroll = Math.max(0, milestone.t - scrollWindow / 2);
      const maxScroll = Math.min(1, milestone.t + scrollWindow / 2);
      
      const newMainScrollPercent = minScroll + (sectionScrollPercent * (maxScroll - minScroll));
      
      // Update main page scroll
      const h = document.documentElement;
      const mainScrollHeight = h.scrollHeight - h.clientHeight;
      const targetScrollTop = newMainScrollPercent * mainScrollHeight;
      
      window.scrollTo({
        top: targetScrollTop,
        behavior: 'auto' // Instant scroll to avoid conflicts
      });
    };

    // Attach scroll listeners to active sections
    Object.keys(sectionRefs.current).forEach((id) => {
      const ref = sectionRefs.current[id];
      if (ref && !scrollHandlers.current[id]) {
        const milestone = MILESTONES.find(m => m.id === id);
        if (milestone) {
          const handler = (e) => handleSectionScroll(e, milestone);
          scrollHandlers.current[id] = handler;
          ref.addEventListener('scroll', handler, { passive: true });
        }
      }
    });

    return () => {
      Object.keys(sectionRefs.current).forEach((id) => {
        const ref = sectionRefs.current[id];
        const handler = scrollHandlers.current[id];
        if (ref && handler) {
          ref.removeEventListener('scroll', handler);
          delete scrollHandlers.current[id];
        }
      });
    };
  }, [scrollPercent]);

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
            <div 
              ref={(el) => {
                if (el) sectionRefs.current[m.id] = el;
                else delete sectionRefs.current[m.id];
              }}
              className="w-full mx-auto overflow-y-auto max-h-screen pt-32 no-scrollbar"
            >
              {renderSection(m)}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MilestoneOverlay;


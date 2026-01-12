import { useState, useEffect } from 'react';
import { useThreeScene } from './hooks/useThreeScene';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProgressSidebar from './components/ProgressSidebar';
import MilestoneOverlay from './components/MilestoneOverlay';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [scrollPercent, setScrollPercent] = useState(0);
  const [targetScrollPercent, setTargetScrollPercent] = useState(0);
  const canvasRef = useThreeScene(theme, scrollPercent);

  // Scroll logic - Optimized with throttling
  useEffect(() => {
    let lastScrollTime = 0;
    const throttleDelay = 16; // ~60fps max
    
    const handleScroll = () => {
      const now = performance.now();
      if (now - lastScrollTime < throttleDelay) return;
      lastScrollTime = now;
      
      const h = document.documentElement;
      const scrollHeight = h.scrollHeight - h.clientHeight;
      const scrollPercent = scrollHeight > 0 ? h.scrollTop / scrollHeight : 0;
      setTargetScrollPercent(scrollPercent);
    };
    
    // Initial calculation
    handleScroll();
    
    // Add scroll listener with throttling
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    let animationId;
    let isRunning = true;
    
    const animate = () => {
      if (!isRunning) return;
      
      setScrollPercent(prev => {
        const next = prev + (targetScrollPercent - prev) * 0.05;
        return next;
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      isRunning = false;
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [targetScrollPercent]);

  const jumpTo = (percent) => {
    window.scrollTo({
      top: percent * (document.documentElement.scrollHeight - window.innerHeight),
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-700 `}>
      {/* Fixed 3D Canvas */}
      <div 
        ref={canvasRef} 
        className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${
          scrollPercent > 0.05 ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <Navigation theme={theme} setTheme={setTheme} jumpTo={jumpTo} />
      <Hero theme={theme} scrollPercent={scrollPercent} jumpTo={jumpTo}/>
      <ProgressSidebar scrollPercent={scrollPercent} jumpTo={jumpTo} />
      <MilestoneOverlay scrollPercent={scrollPercent} theme={theme} />

      <div className="h-[2000vh] pointer-events-none" />
    </div>
  );
}

import { useState, useRef, useEffect } from 'react';

/**
 * AgentVideoPlayer Component
 * A simple video player component with lazy loading for performance
 * @param {string} src - Video source URL
 * @param {string} className - Additional CSS classes
 * @param {string} alt - Alt text for accessibility
 * @param {boolean} autoPlay - Whether to autoplay the video (default: true)
 */
const AgentVideoPlayer = ({ src, className, alt, autoPlay = true }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before visible
        threshold: 0.1
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          className={`${className} w-full h-full`}
          autoPlay={autoPlay}
          loop={autoPlay}
          muted
          playsInline
          aria-label={alt}
          preload="metadata"
          style={{ 
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
            width: '100%',
            height: '100%'
          }}
        />
      ) : (
        <div className={`${className} bg-gray-900/20 flex items-center justify-center w-full h-full`}>
          <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default AgentVideoPlayer;


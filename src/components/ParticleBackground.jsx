import { useEffect, useRef } from 'react';

const ParticleBackground = ({ theme }) => {
  const canvasRef = useRef(null);
  const isDark = theme === 'dark';
  
  // We use refs for values accessed inside the animation loop to avoid stale closures
  const themeRef = useRef({
    baseColor: '#115e59',      
    highlightColor: '#2dd4bf', 
    lineBase: '17, 94, 89',    
    lineActive: '45, 212, 191' 
  });

  const mouseRef = useRef({
    x: null,
    y: null,
    radius: 150
  });

  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  // Update the theme ref whenever theme changes
  useEffect(() => {
    if (isDark) {
      themeRef.current = {
        baseColor: '#0eaac8',      // Bright Cyan
        highlightColor: '#1dc393', // Bright Green
        lineBase: '14, 170, 200',    // Passive lines - brighter
        lineActive: '29, 195, 147' // Active lines - brighter
      };
    } else {
      themeRef.current = {
        baseColor: '#0eaac8',      // Bright Cyan
        highlightColor: '#1dc393', // Bright Green
        lineBase: '14, 170, 200', // Passive lines
        lineActive: '29, 195, 147' // Active lines
      };
    }
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    class Particle {
      constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
      }

      draw(color) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.fill();
      }

      update() {
        // Boundary checks
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse interaction
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRef.current.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouseRef.current.radius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * 3;
            const directionY = forceDirectionY * force * 3;

            this.x += directionX;
            this.y += directionY;

            // Draw active particle
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2, false);
            ctx.fillStyle = themeRef.current.highlightColor;
            ctx.fill();
          } else {
            this.x += this.directionX;
            this.y += this.directionY;
            // Draw passive particle
            this.draw(themeRef.current.baseColor);
          }
        } else {
          this.x += this.directionX;
          this.y += this.directionY;
          // Draw passive particle
          this.draw(themeRef.current.baseColor);
        }
      }
    }

    const init = () => {
      particlesRef.current = [];
      // Adjust density: approx 1 particle per 9000px sq
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2.5) + 1.5; // Slightly larger particles
        const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * 2) - 1;
        const directionY = (Math.random() * 2) - 1;

        particlesRef.current.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      const particles = particlesRef.current;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = 
            ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) + 
            ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));

          // Connect distance based on screen size
          const connectDistance = (canvas.width / 7) * (canvas.height / 7);

          if (distance < connectDistance) {
            opacityValue = 1 - (distance / 20000);

            if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
              const dx = mouseRef.current.x - particles[a].x;
              const dy = mouseRef.current.y - particles[a].y;
              const mouseDist = Math.sqrt(dx * dx + dy * dy);

              if (mouseDist < mouseRef.current.radius + 50) {
                ctx.strokeStyle = `rgba(${themeRef.current.lineActive}, ${opacityValue * 0.8})`;
                ctx.lineWidth = 1.5;
              } else {
                ctx.strokeStyle = `rgba(${themeRef.current.lineBase}, ${opacityValue * 0.4})`;
                ctx.lineWidth = 0.8;
              }
            } else {
              ctx.strokeStyle = `rgba(${themeRef.current.lineBase}, ${opacityValue * 0.4})`;
              ctx.lineWidth = 0.8;
            }

            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update();
      }
      connect();
    };

    // Event Listeners
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.x;
      mouseRef.current.y = e.y;
    };

    const handleMouseOut = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: isDark ? 0.8 : 0.6 }}
    />
  );
};

export default ParticleBackground;

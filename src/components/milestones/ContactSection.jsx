import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Building2, 
  User, 
  MessageSquare,
  Globe,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs.config.js';

const ContactSection = ({ milestone, theme }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);
  const isDark = theme === 'dark';
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  // --- Three.js 3D Background Logic ---
  useEffect(() => {
    let scene, camera, renderer, particles;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Load Three.js dynamically
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.onload = () => {
      initThree();
    };
    document.head.appendChild(script);

    const initThree = () => {
      const THREE = window.THREE;
      if (!THREE) return;
      
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Create particles (AI Network effect)
      const geometry = new THREE.BufferGeometry();
      const count = 2000;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      const brandColors = [
        new THREE.Color('#0eaac8'),
        new THREE.Color('#1dc393'),
        new THREE.Color('#27bce2'),
        new THREE.Color('#7fe7ce')
      ];

      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10;
        positions[i + 1] = (Math.random() - 0.5) * 10;
        positions[i + 2] = (Math.random() - 0.5) * 10;

        const color = brandColors[Math.floor(Math.random() * brandColors.length)];
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.015,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      camera.position.z = 3;

      // Mouse Interaction
      let mouseX = 0;
      let mouseY = 0;
      const onMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
      };
      window.addEventListener('mousemove', onMouseMove);

      const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.001;
        particles.rotation.x += 0.0005;
        
        // Smooth follow mouse
        particles.position.x += (mouseX - particles.position.x) * 0.05;
        particles.position.y += (-mouseY - particles.position.y) * 0.05;

        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    };

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_CONFIG.PUBLIC_KEY) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Check if EmailJS is configured
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      setError('Email service is not configured. Please contact the administrator.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        message: formData.message,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        time: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
      };

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      // Success - reset form and show success message
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ 
        name: '', 
        company: '', 
        email: '', 
        phone: '', 
        location: '', 
        message: '' 
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (err) {
      console.error('EmailJS Error:', err);
      setIsSubmitting(false);
      setError(
        err.text || 
        'Failed to send message. Please try again or contact us directly at hello@evoke-ai.com'
      );
    }
  };

  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'} overflow-hidden`}>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 relative overflow-hidden group shiny-badge">
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
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            {milestone.title.split(' ').map((word, index) => {
              if (index === 0) {
                return (
                  <span key={index} className={textGradient}>
                    {word}
                  </span>
                );
              }
              return <span key={index}> {word}</span>;
            })}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Join the AI revolution. Whether you're a startup or an enterprise, Evoke AI provides the tools to build what's next.
          </p>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 p-6 lg:p-0">
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email us', val: 'hello@evoke-ai.com', color: '#0eaac8' },
                { icon: Phone, label: 'Call us', val: '+1 (555) 012-3456', color: '#1dc393' },
                { icon: MapPin, label: 'Visit us', val: 'Palo Alto, California', color: '#27bce2' }
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center space-x-4 p-4 rounded-2xl   transition-colors cursor-pointer group `}>
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-white/5' : 'bg-slate-100'}  transition-transform shadow-sm`} style={{ color: item.color }}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{item.label}</p>
                    <p className={`text-md font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 perspective-1000">
            <div className={`${isDark ? 'bg-[#0a0a0a]/80' : 'bg-white/70'} backdrop-blur-2xl p-8 lg:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border ${isDark ? 'border-white/10' : 'border-slate-200'} relative overflow-hidden transform-gpu transition-all hover:rotate-x-1 hover:rotate-y-1`}>
              
              {submitted && (
                <div className={`absolute inset-0 ${isDark ? 'bg-black/95' : 'bg-white/95'} flex flex-col items-center justify-center z-20 animate-in zoom-in-95 duration-500`}>
                  <div className={`p-5 rounded-full ${brandGradient} text-white mb-6 animate-bounce shadow-2xl`}>
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-center max-w-xs">
                    The Evoke team will contact you shortly to begin our journey.
                  </p>
                </div>
              )}

              {error && (
                <div className={`mb-5 p-4 rounded-2xl ${isDark ? 'bg-red-500/10 border-red-500/30' : 'bg-red-50 border-red-200'} border flex items-start gap-3 animate-in`}>
                  <AlertCircle className={`flex-shrink-0 ${isDark ? 'text-red-400' : 'text-red-600'}`} size={20} />
                  <p className={`text-sm ${isDark ? 'text-red-300' : 'text-red-700'}`}>
                    {error}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
                    <div className="relative group">
                      <User className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0eaac8] transition-colors`} size={16} />
                      <input required type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange}
                        className={`w-full ${isDark ? 'bg-white/5 border-white/5 focus:bg-black focus:border-[#0eaac8]/50' : 'bg-slate-100/50 border-transparent focus:bg-white focus:border-[#0eaac8]/50'} border rounded-2xl pl-12 pr-4 py-4 outline-none transition-all shadow-inner`} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Company</label>
                    <div className="relative group">
                      <Building2 className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1dc393] transition-colors`} size={16} />
                      <input required type="text" name="company" placeholder="Evoke AI" value={formData.company} onChange={handleChange}
                        className={`w-full ${isDark ? 'bg-white/5 border-white/5 focus:bg-black focus:border-[#1dc393]/50' : 'bg-slate-100/50 border-transparent focus:bg-white focus:border-[#1dc393]/50'} border rounded-2xl pl-12 pr-4 py-4 outline-none transition-all shadow-inner`} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Email</label>
                    <div className="relative group">
                      <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#27bce2] transition-colors`} size={16} />
                      <input required type="email" name="email" placeholder="john@evoke.ai" value={formData.email} onChange={handleChange}
                        className={`w-full ${isDark ? 'bg-white/5 border-white/5 focus:bg-black focus:border-[#27bce2]/50' : 'bg-slate-100/50 border-transparent focus:bg-white focus:border-[#27bce2]/50'} border rounded-2xl pl-12 pr-4 py-4 outline-none transition-all shadow-inner`} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Phone</label>
                    <div className="relative group">
                      <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#7fe7ce] transition-colors`} size={16} />
                      <input required type="tel" name="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange}
                        className={`w-full ${isDark ? 'bg-white/5 border-white/5 focus:bg-black focus:border-[#7fe7ce]/50' : 'bg-slate-100/50 border-transparent focus:bg-white focus:border-[#7fe7ce]/50'} border rounded-2xl pl-12 pr-4 py-4 outline-none transition-all shadow-inner`} />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Location</label>
                  <div className="relative group">
                    <Globe className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0eaac8] transition-colors`} size={16} />
                    <input required type="text" name="location" placeholder="Global" value={formData.location} onChange={handleChange}
                      className={`w-full ${isDark ? 'bg-white/5 border-white/5 focus:bg-black focus:border-[#0eaac8]/50' : 'bg-slate-100/50 border-transparent focus:bg-white focus:border-[#0eaac8]/50'} border rounded-2xl pl-12 pr-4 py-4 outline-none transition-all shadow-inner`} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">The Vision </label>
                  <div className="relative group">
                    <MessageSquare className={`absolute left-4 top-6 text-slate-400 group-focus-within:text-[#1dc393] transition-colors`} size={16} />
                    <textarea required rows="3" name="message" placeholder="Describe your project's vision..." value={formData.message} onChange={handleChange}
                      className={`w-full ${isDark ? 'bg-white/5 border-white/5 focus:bg-black focus:border-[#1dc393]/50' : 'bg-slate-100/50 border-transparent focus:bg-white focus:border-[#1dc393]/50'} border rounded-2xl pl-12 pr-4 py-4 outline-none transition-all shadow-inner resize-none`} />
                  </div>
                </div>

                <button
                  disabled={isSubmitting}
                  className={`w-full group relative overflow-hidden ${brandGradient} text-white font-bold py-5 rounded-[1.25rem] shadow-[0_10px_30px_rgba(14,170,200,0.3)] hover:shadow-[0_15px_40px_rgba(14,170,200,0.5)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center space-x-3`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span className="relative z-10">Launch Request</span>
                      <Send className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0eaac8] opacity-10 dark:opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#1dc393] opacity-10 dark:opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes zoomIn95 { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .perspective-1000 { perspective: 1000px; }
        .rotate-x-1 { transform: rotateX(2deg); }
        .rotate-y-1 { transform: rotateY(2deg); }
        .animate-in { animation: fadeIn 0.5s ease-out; }
        .zoom-in-95 { animation: zoomIn95 0.5s ease-out; }
      `}} />
    </div>
  );
};

export default ContactSection;


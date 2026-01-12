import { Zap, ShieldCheck } from 'lucide-react';

const VisionSection = ({ milestone, theme }) => {
  return (
    <div className="text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-8">{milestone.category}</span>
      <h2 className={`text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter italic ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{milestone.title}</h2>
      <div className="grid md:grid-cols-2 gap-12 text-left">
        <div className={`p-8 rounded-3xl border ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'}`}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <Zap className="text-emerald-500" /> Neural Mesh
          </h3>
          <p className="text-sm opacity-60 leading-relaxed">Evoke AI anchors the digital world in a distributed neural backbone, merging cognitive assets with resilient, decentralized infrastructure.</p>
        </div>
        <div className={`p-8 rounded-3xl border ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'}`}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <ShieldCheck className="text-emerald-500" /> Semantic Signals
          </h3>
          <p className="text-sm opacity-60 leading-relaxed">Our proprietary protocol translates complex semantic signals into actionable intelligence, distributed across a global mesh of verifyable nodes.</p>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;







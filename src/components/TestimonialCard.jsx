const TestimonialCard = ({ t, theme }) => {
  const avatarUrl = `https://api.dicebear.com/7.x/shapes/svg?seed=${t.username.replace('@', '')}`;
  
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] px-2 sm:px-4">
      <div className={`group p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl relative h-full flex flex-col transition-all duration-500 hover:scale-[1.02] border ${theme === 'dark' ? 'bg-black border-white/10' : 'bg-white border-black/5'} hover:border-[#1dc393]/70`}>
        <div className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden" 
             style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(29,195,147,0.2) 30%, rgba(127,231,206,0.5) 50%, rgba(29,195,147,0.2) 70%, transparent 100%)', backgroundSize: '200% 100%', animation: 'shimmer 2.5s ease-in-out infinite' }}>
          <div className={`absolute inset-[1px] rounded-2xl sm:rounded-3xl ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}></div>
        </div>
        
        <div className="relative z-10 flex flex-col h-full">
          <p className={`text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>"{t.quote}"</p>
          <div className={`flex items-center gap-3 sm:gap-4 mt-auto pt-4 sm:pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/5'}`}>
            <img src={avatarUrl} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/10 p-1" />
            <div>
              <h4 className={`font-bold text-xs sm:text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.name}</h4>
              <p className="text-[10px] sm:text-xs text-emerald-500 font-medium">{t.username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;








import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Star, Circle, Triangle } from 'lucide-react';

interface ImageCardProps {
  item: typeof GALLERY_ITEMS[0];
  onClick: () => void;
  priority?: boolean;
  borderColor: string;
  delay: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick, priority = false, borderColor, delay }) => (
  <div 
    onClick={onClick}
    style={{ animationDelay: delay }}
    className={`relative flex-shrink-0 w-64 h-44 md:w-96 md:h-64 rounded-3xl overflow-hidden cursor-pointer border-[6px] ${borderColor} mx-3 md:mx-6 group/card shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform-gpu hover:scale-110 hover:-rotate-2 hover:z-20 bg-slate-800 animate-wiggle`}
  >
    <img 
      src={item.url} 
      alt={item.title} 
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      decoding="async"
      referrerPolicy="no-referrer"
      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-95 group-hover/card:opacity-100"
    />
    
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/card:opacity-30 transition-opacity duration-300"></div>

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
       <div className="bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/30 transform scale-50 group-hover/card:scale-100 transition-transform duration-500">
          <ZoomIn className="text-white w-8 h-8 md:w-12 md:h-12 drop-shadow-lg" />
       </div>
    </div>
    
    <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
      <p className="text-white font-black text-sm md:text-lg drop-shadow-lg uppercase tracking-wider bg-black/20 backdrop-blur-sm px-3 py-1 rounded-lg inline-block">
        {item.title}
      </p>
    </div>
  </div>
);

export const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const colors = [
    'border-pink-500 shadow-pink-500/30',
    'border-orange-500 shadow-orange-500/30',
    'border-church-cyan shadow-cyan-500/30',
    'border-lime-500 shadow-lime-500/30',
    'border-purple-500 shadow-purple-500/30',
    'border-yellow-400 shadow-yellow-400/30'
  ];

  const half = Math.ceil(GALLERY_ITEMS.length / 2);
  const row1 = GALLERY_ITEMS.slice(0, half);
  const row2 = GALLERY_ITEMS.slice(half);

  const openModal = (originalIndex: number) => {
    setSelectedImageIndex(originalIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1;
    });
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev, closeModal]);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-church-dark relative overflow-hidden transition-colors duration-300">
      
      {/* Animated Confetti/Shapes Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 dark:opacity-30">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 20 + 10;
          const left = Math.random() * 100;
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 5;
          const color = ['text-pink-500', 'text-orange-500', 'text-cyan-500', 'text-yellow-500', 'text-purple-500'][i % 5];
          
          return (
            <div 
              key={i}
              className={`absolute animate-float-slow ${color}`}
              style={{
                left: `${left}%`,
                top: `-10%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              {i % 3 === 0 ? <Star size={size} fill="currentColor" /> : i % 3 === 1 ? <Circle size={size} fill="currentColor" /> : <Triangle size={size} fill="currentColor" />}
            </div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-20 mb-12 md:mb-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3 mb-4 animate-bounce-subtle">
             <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-pink-500 animate-pulse" />
             <h2 className="text-xs md:text-sm font-black text-pink-500 uppercase tracking-[0.4em] drop-shadow-sm">A Alegria de ser Criança</h2>
             <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-orange-500 animate-pulse" />
          </div>
          
          <h3 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white mb-6 italic tracking-tighter leading-none py-4 overflow-visible">
            CULTO <br className="md:hidden" />
            <span className="inline-block relative">
               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 via-yellow-500 via-cyan-500 to-pink-500 bg-[length:200%_auto] animate-rainbow-text px-4">
                 KIDS
               </span>
               <span className="absolute -inset-2 bg-white/5 blur-2xl rounded-full z-0"></span>
            </span>
          </h3>

          <div className="flex gap-4 mb-10">
            <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce [animation-duration:0.6s]"></div>
            <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce [animation-delay:0.2s] [animation-duration:0.6s]"></div>
            <div className="w-4 h-4 bg-church-cyan rounded-full animate-bounce [animation-delay:0.4s] [animation-duration:0.6s]"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.6s] [animation-duration:0.6s]"></div>
          </div>

          <p className="text-slate-600 dark:text-gray-300 max-w-2xl font-bold text-lg md:text-2xl leading-relaxed animate-fade-in px-4">
            "Ensina a criança no caminho em que deve andar..." <br />
            <span className="text-church-cyan">Momentos que ficam para sempre no coração!</span>
          </p>
        </div>
      </div>

      {/* Infinite Scroll Rows with extra padding for mobile bounce */}
      <div className="flex flex-col gap-8 md:gap-16 overflow-hidden relative pb-16 touch-pan-y">
        
        {/* Row 1 - Left Direction */}
        <div className="relative w-full">
          <div className="flex w-max animate-scroll hover:pause-on-hover py-8">
            {row1.map((item, index) => (
              <ImageCard 
                key={`r1-${index}`} 
                item={item} 
                onClick={() => openModal(index)}
                priority={index < 3}
                borderColor={colors[index % colors.length]}
                delay={`${index * 0.2}s`}
              />
            ))}
            {row1.map((item, index) => (
              <ImageCard 
                key={`r1-dup-${index}`} 
                item={item} 
                onClick={() => openModal(index)} 
                borderColor={colors[index % colors.length]}
                delay={`${(index + half) * 0.2}s`}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Right Direction */}
        <div className="relative w-full">
           <div className="flex w-max animate-scroll-reverse hover:pause-on-hover py-8">
            {row2.map((item, index) => (
              <ImageCard 
                key={`r2-${index}`} 
                item={item} 
                onClick={() => openModal(index + half)} 
                borderColor={colors[(index + half) % colors.length]}
                delay={`${index * 0.25}s`}
              />
            ))}
            {row2.map((item, index) => (
              <ImageCard 
                key={`r2-dup-${index}`} 
                item={item} 
                onClick={() => openModal(index + half)} 
                borderColor={colors[(index + half) % colors.length]}
                delay={`${(index + half) * 0.25}s`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-pink-500 transition-all z-50 p-4 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md active:scale-90"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="hidden md:flex">
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 text-white hover:text-orange-500 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm transition-all z-50"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 text-white hover:text-church-cyan bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm transition-all z-50"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>

          <div 
            className="relative w-full max-h-[95vh] flex flex-col items-center justify-center gap-6 px-6" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              key={selectedImageIndex}
              src={GALLERY_ITEMS[selectedImageIndex].url} 
              alt={GALLERY_ITEMS[selectedImageIndex].title}
              referrerPolicy="no-referrer"
              className={`max-h-[75vh] w-auto max-w-full object-contain rounded-3xl shadow-2xl border-[10px] ${colors[selectedImageIndex % colors.length].split(' ')[0]} animate-in zoom-in-95 duration-300`}
            />
            
            <div className="text-center animate-in slide-in-from-bottom-6 duration-500">
              <h3 className="text-white text-3xl md:text-5xl font-black italic tracking-tighter drop-shadow-2xl mb-2">
                {GALLERY_ITEMS[selectedImageIndex].title}
              </h3>
              <div className="flex items-center justify-center gap-3">
                 <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-sm">
                    {GALLERY_ITEMS[selectedImageIndex].category}
                 </div>
              </div>
              
              {/* Mobile Navigation Arrows inside modal info */}
              <div className="flex md:hidden items-center justify-center gap-10 mt-8">
                 <button onClick={handlePrev} className="p-3 bg-white/10 rounded-full text-white"><ChevronLeft size={30} /></button>
                 <button onClick={handleNext} className="p-3 bg-white/10 rounded-full text-white"><ChevronRight size={30} /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes rainbow-text {
          to { background-position: 200% center; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-scroll { animation: scroll 40s linear infinite; }
        .animate-scroll-reverse { animation: scroll-reverse 40s linear infinite; }
        .animate-rainbow-text { animation: rainbow-text 4s linear infinite; }
        .animate-wiggle { animation: wiggle 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow linear infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        
        @media (max-width: 768px) {
          .animate-scroll { animation-duration: 25s; }
          .animate-scroll-reverse { animation-duration: 25s; }
        }
      `}} />
    </section>
  );
};
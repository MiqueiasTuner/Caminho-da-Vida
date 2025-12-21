import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface ImageCardProps {
  item: typeof GALLERY_ITEMS[0];
  onClick: () => void;
  priority?: boolean;
  borderColor: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick, priority = false, borderColor }) => (
  <div 
    onClick={onClick}
    className={`relative flex-shrink-0 w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden cursor-pointer border-4 ${borderColor} mx-4 group/card shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform-gpu hover:scale-105 hover:-translate-y-2 hover:z-10 bg-slate-800`}
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
    {/* Permanent subtle gradient for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-300"></div>

    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
       <ZoomIn className="text-white w-12 h-12 drop-shadow-lg transform scale-50 group-hover/card:scale-100 transition-transform duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)" />
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out">
      <p className="text-white font-black text-base md:text-lg drop-shadow-lg uppercase tracking-wide">
        {item.title}
      </p>
    </div>
  </div>
);

export const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Colors for borders: Pink, Orange, Cyan, Lime
  const colors = [
    'border-pink-500 shadow-pink-500/20',
    'border-orange-500 shadow-orange-500/20',
    'border-church-cyan shadow-cyan-500/20',
    'border-lime-500 shadow-lime-500/20',
    'border-purple-500 shadow-purple-500/20',
    'border-yellow-400 shadow-yellow-400/20'
  ];

  // Divide images for two rows
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

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1;
    });
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
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
      
      {/* Playful Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-20 mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-2 animate-fade-in-up">
             <Sparkles className="w-8 h-8 text-pink-500" />
             <h2 className="text-sm font-black text-pink-500 uppercase tracking-[0.3em]">Momentos Especiais</h2>
             <Sparkles className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-4 animate-fade-in-up delay-100 italic tracking-tighter">
            CULTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">KIDS</span>
          </h3>
          <div className="flex gap-2 mb-8">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-3 h-3 bg-church-cyan rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl font-medium animate-fade-in-up delay-200 text-lg">
            Deixai vir a mim as crianças, pois delas é o Reino de Deus. Confira como foi nosso último culto especial!
          </p>
        </div>
      </div>

      {/* Infinite Scroll Rows */}
      <div className="flex flex-col gap-10 md:gap-16 overflow-hidden relative pb-10">
        
        {/* Row 1 - Left Direction */}
        <div className="relative w-full">
          <div className="flex w-max animate-scroll hover:pause-on-hover py-6">
            {row1.map((item, index) => (
              <ImageCard 
                key={`r1-${index}`} 
                item={item} 
                onClick={() => openModal(index)}
                priority={index < 3}
                borderColor={colors[index % colors.length]}
              />
            ))}
            {row1.map((item, index) => (
              <ImageCard 
                key={`r1-dup-${index}`} 
                item={item} 
                onClick={() => openModal(index)} 
                borderColor={colors[index % colors.length]}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Right Direction */}
        <div className="relative w-full">
           <div className="flex w-max animate-scroll-reverse hover:pause-on-hover py-6">
            {row2.map((item, index) => (
              <ImageCard 
                key={`r2-${index}`} 
                item={item} 
                onClick={() => openModal(index + half)} 
                borderColor={colors[(index + half) % colors.length]}
              />
            ))}
            {row2.map((item, index) => (
              <ImageCard 
                key={`r2-dup-${index}`} 
                item={item} 
                onClick={() => openModal(index + half)} 
                priority={index < 3}
                borderColor={colors[(index + half) % colors.length]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center animate-in fade-in duration-300 group/modal"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-pink-500 transition-colors z-50 p-4 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md"
            aria-label="Fechar galeria"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 text-white hover:text-orange-500 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm transition-all z-50 group-hover/modal:opacity-100 md:opacity-0 md:group-hover/modal:opacity-100"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 text-white hover:text-church-cyan bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm transition-all z-50 group-hover/modal:opacity-100 md:opacity-0 md:group-hover/modal:opacity-100"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div 
            className="relative max-w-7xl w-full max-h-[95vh] flex flex-col items-center justify-center gap-6 px-14" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              key={selectedImageIndex}
              src={GALLERY_ITEMS[selectedImageIndex].url} 
              alt={GALLERY_ITEMS[selectedImageIndex].title}
              referrerPolicy="no-referrer"
              className={`max-h-[80vh] w-auto max-w-full object-contain rounded-3xl shadow-2xl border-8 ${colors[selectedImageIndex % colors.length].split(' ')[0]} animate-in zoom-in-90 duration-300`}
            />
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-white text-3xl font-black italic tracking-tighter drop-shadow-2xl">{GALLERY_ITEMS[selectedImageIndex].title}</h3>
              <div className="flex items-center justify-center gap-2 mt-3">
                 <span className="h-1 w-10 bg-pink-500 rounded-full"></span>
                 <span className="text-church-cyan text-sm font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    {GALLERY_ITEMS[selectedImageIndex].category}
                 </span>
                 <span className="h-1 w-10 bg-orange-500 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
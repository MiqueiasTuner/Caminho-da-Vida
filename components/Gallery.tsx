import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCardProps {
  item: typeof GALLERY_ITEMS[0];
  onClick: () => void;
  priority?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick, priority = false }) => (
  <div 
    onClick={onClick}
    className="relative flex-shrink-0 w-72 h-48 md:w-96 md:h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10 mx-4 group/card shadow-lg hover:shadow-church-cyan/40 transition-all duration-500 ease-out transform-gpu hover:scale-105 hover:-translate-y-1 hover:z-10 bg-slate-800"
  >
    <img 
      src={item.url} 
      alt={item.title} 
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      decoding="async"
      referrerPolicy="no-referrer"
      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-90 group-hover/card:opacity-100"
    />
    {/* Overlay de gradiente sutil permanente para profundidade */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-300"></div>

    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
       <ZoomIn className="text-white w-10 h-10 drop-shadow-lg transform scale-50 group-hover/card:scale-100 transition-transform duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)" />
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out">
      <p className="text-white font-bold text-sm drop-shadow-md border-l-2 border-church-cyan pl-3">
        {item.title}
      </p>
    </div>
  </div>
);

export const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Dividir as imagens em 2 linhas para o carrossel
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

  // Keyboard navigation support
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
    <section id="gallery" className="py-24 bg-slate-100 dark:bg-church-navy relative overflow-hidden transition-colors duration-300">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/50 via-transparent to-transparent dark:from-church-blue/10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-20 mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-2 animate-fade-in-up">
             <Camera className="w-6 h-6 text-church-cyan" />
             <h2 className="text-sm font-bold text-church-cyan uppercase tracking-[0.2em]">Momentos</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 animate-fade-in-up delay-100">GALERIA VIVA</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-church-cyan to-transparent rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl animate-fade-in-up delay-200">
            Um registro visual da nossa jornada de fé, comunhão e adoração.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Rows Container */}
      <div className="flex flex-col gap-10 md:gap-14 overflow-hidden relative pb-10">
        
        {/* Máscaras de Gradiente Lateral para efeito "infinito" suave */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-100 dark:from-church-navy to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-100 dark:from-church-navy to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 - Left Direction (Starts at 0) */}
        <div className="relative w-full">
          <div className="flex w-max animate-scroll hover:pause-on-hover py-4">
            {/* Original Set - First items visible immediately */}
            {row1.map((item, index) => (
              <ImageCard 
                key={`r1-${index}`} 
                item={item} 
                onClick={() => openModal(index)}
                priority={index < 4} // Eager load first 4
              />
            ))}
            {/* Duplicate Set for Loop - Not visible immediately */}
            {row1.map((item, index) => (
              <ImageCard 
                key={`r1-dup-${index}`} 
                item={item} 
                onClick={() => openModal(index)} 
                priority={false}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Right Direction (Starts at -50%) */}
        <div className="relative w-full">
           <div className="flex w-max animate-scroll-reverse hover:pause-on-hover py-4">
            {/* Original Set - Not visible immediately (starts offscreen to the left) */}
            {row2.map((item, index) => (
              <ImageCard 
                key={`r2-${index}`} 
                item={item} 
                onClick={() => openModal(index + half)} 
                priority={false}
              />
            ))}
             {/* Duplicate Set for Loop - Visible immediately due to -50% start */}
            {row2.map((item, index) => (
              <ImageCard 
                key={`r2-dup-${index}`} 
                item={item} 
                onClick={() => openModal(index + half)} 
                priority={index < 4} // Eager load first 4 of duplicate set
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300 group/modal"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-church-cyan transition-colors z-50 p-3 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-church-cyan bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transition-all z-50 group-hover/modal:opacity-100 md:opacity-0 md:group-hover/modal:opacity-100"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-church-cyan bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transition-all z-50 group-hover/modal:opacity-100 md:opacity-0 md:group-hover/modal:opacity-100"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl w-full max-h-[95vh] flex flex-col items-center justify-center gap-4 px-12 md:px-20" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              key={selectedImageIndex} // Key forces re-render for animation
              src={GALLERY_ITEMS[selectedImageIndex].url} 
              alt={GALLERY_ITEMS[selectedImageIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] md:max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300 slide-in-from-bottom-2"
            />
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <h3 className="text-white text-xl font-bold tracking-wide drop-shadow-lg">{GALLERY_ITEMS[selectedImageIndex].title}</h3>
              <span className="text-church-cyan text-sm uppercase tracking-widest bg-church-cyan/10 px-3 py-1 rounded-full mt-2 inline-block backdrop-blur-md border border-church-cyan/20">
                {GALLERY_ITEMS[selectedImageIndex].category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
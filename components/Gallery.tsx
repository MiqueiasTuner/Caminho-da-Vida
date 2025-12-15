import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Camera, X, ZoomIn } from 'lucide-react';

interface ImageCardProps {
  item: typeof GALLERY_ITEMS[0];
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => (
  <div 
    onClick={onClick}
    className="relative flex-shrink-0 w-72 h-48 md:w-96 md:h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10 mx-3 group shadow-lg hover:shadow-church-cyan/30 transition-all duration-300"
  >
    <img 
      src={item.url} 
      alt={item.title} 
      loading="lazy"
      referrerPolicy="no-referrer"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
       <ZoomIn className="text-white w-8 h-8" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white font-bold text-sm">{item.title}</p>
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

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-24 bg-slate-100 dark:bg-church-navy relative overflow-hidden transition-colors duration-300">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-100 dark:from-church-navy to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-100 dark:from-church-navy to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-20 mb-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-2">
             <Camera className="w-6 h-6 text-church-cyan" />
             <h2 className="text-sm font-bold text-church-cyan uppercase tracking-[0.2em]">Momentos</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">GALERIA VIVA</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-church-cyan to-transparent rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl">
            Um registro visual da nossa jornada de fé, comunhão e adoração.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Rows */}
      <div className="flex flex-col gap-6 md:gap-8">
        
        {/* Row 1 - Left Direction */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll hover:pause-on-hover">
            {/* Original Set */}
            {row1.map((item, index) => (
              <ImageCard 
                key={`r1-${index}`} 
                item={item} 
                onClick={() => openModal(index)} 
              />
            ))}
            {/* Duplicate Set for Loop */}
            {row1.map((item, index) => (
              <ImageCard 
                key={`r1-dup-${index}`} 
                item={item} 
                onClick={() => openModal(index)} 
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Right Direction */}
        <div className="relative w-full overflow-hidden">
           <div className="flex w-max animate-scroll-reverse hover:pause-on-hover">
            {/* Original Set */}
            {row2.map((item, index) => (
              <ImageCard 
                key={`r2-${index}`} 
                item={item} 
                onClick={() => openModal(index + half)} 
              />
            ))}
             {/* Duplicate Set for Loop */}
            {row2.map((item, index) => (
              <ImageCard 
                key={`r2-dup-${index}`} 
                item={item} 
                onClick={() => openModal(index + half)} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/70 hover:text-red-500 transition-colors z-50 p-2 bg-black/50 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>

          <div 
            className="relative max-w-7xl w-full max-h-[95vh] flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={GALLERY_ITEMS[selectedImageIndex].url} 
              alt={GALLERY_ITEMS[selectedImageIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[85vh] md:max-h-[90vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};
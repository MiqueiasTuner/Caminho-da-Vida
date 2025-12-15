import React from 'react';
import { X, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { SPECIAL_EVENTS } from '../constants';

interface NoticesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NoticesModal: React.FC<NoticesModalProps> = ({ isOpen, onClose }) => {
  // Pega o próximo evento
  const upcomingEvents = SPECIAL_EVENTS
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const nextEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;

  if (!nextEvent) return null;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
    }).format(date);
  };

  // Classes para controlar a visibilidade e animação (Slide in from right)
  const visibilityClass = isOpen 
    ? "translate-x-0 opacity-100 pointer-events-auto" 
    : "translate-x-[120%] opacity-0 pointer-events-none";

  return (
    <div className={`fixed bottom-24 right-4 md:right-6 z-40 w-[calc(100%-2rem)] md:w-[350px] transition-all duration-500 ease-in-out transform ${visibilityClass}`}>
      
      {/* Card Container */}
      <div className="bg-white dark:bg-church-surface rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col relative group">
        
        {/* Botão Fechar - Flutuante sobre a imagem ou canto */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-1.5 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-colors"
          aria-label="Fechar aviso"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Imagem de Cabeçalho */}
        <div className="h-32 w-full relative overflow-hidden bg-slate-900">
          <div className="absolute top-3 left-3 z-10 bg-church-cyan text-church-dark text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">
            Destaque
          </div>
          <img 
            src={nextEvent.imageUrl} 
            alt={nextEvent.title}
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
          
          {/* Título sobre a imagem (opcional, ou no corpo) */}
          <div className="absolute bottom-3 left-4 right-4">
             <div className="flex items-center gap-1.5 text-church-cyan text-xs font-bold uppercase tracking-wider mb-1">
                <Calendar className="w-3 h-3" />
                <span>{formatDate(nextEvent.date)}</span>
             </div>
             <h3 className="text-white font-bold text-lg leading-tight shadow-black drop-shadow-md">
               {nextEvent.title}
             </h3>
          </div>
        </div>

        {/* Corpo do Card */}
        <div className="p-5">
           <p className="text-slate-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
             {nextEvent.description}
           </p>

           {/* Botões de Ação */}
           <div className="flex items-center gap-2">
              {nextEvent.buttonLink ? (
                <a 
                  href={nextEvent.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-church-cyan hover:bg-cyan-500 text-church-dark font-bold py-2.5 px-4 rounded-lg text-sm text-center transition-colors shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  Participar <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <button className="flex-1 bg-gray-100 dark:bg-white/10 cursor-default text-gray-400 font-bold py-2 px-4 rounded-lg text-sm">
                  Em breve
                </button>
              )}
              
              {/* Botão secundário para ver detalhes/calendário */}
              <a href="#events" onClick={onClose} className="p-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg text-slate-600 dark:text-gray-300 transition-colors" title="Ver no Calendário">
                <ChevronRight className="w-4 h-4" />
              </a>
           </div>
        </div>

        {/* Barra de Progresso/Decorativa inferior */}
        <div className="h-1 w-full bg-slate-100 dark:bg-white/5">
          <div className="h-full bg-church-cyan w-1/3"></div>
        </div>
      </div>
    </div>
  );
};
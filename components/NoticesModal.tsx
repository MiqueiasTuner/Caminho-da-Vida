import React from 'react';
import { X, Calendar, MapPin, Bell } from 'lucide-react';
import { SPECIAL_EVENTS } from '../constants';

interface NoticesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NoticesModal: React.FC<NoticesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Pega o próximo evento
  const upcomingEvents = SPECIAL_EVENTS
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const nextEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
    }).format(date);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-church-surface w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 relative border border-gray-200 dark:border-white/10 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Botão Fechar Mobile (fica em cima da imagem) */}
        <button 
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Lado Esquerdo: Imagem */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto bg-slate-900">
          {nextEvent ? (
            <img 
              src={nextEvent.imageUrl} 
              alt={nextEvent.title}
              className="w-full h-full object-cover opacity-90"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-church-blue/20">
               <Bell className="w-20 h-20 text-church-cyan opacity-50" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-church-surface/50"></div>
          
          {/* Tag de Destaque */}
          <div className="absolute top-4 left-4 bg-church-cyan text-church-dark font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest shadow-lg">
            Aviso Importante
          </div>
        </div>

        {/* Lado Direito: Conteúdo */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col relative bg-white dark:bg-church-surface overflow-y-auto">
           {/* Botão Fechar Desktop */}
           <button 
            onClick={onClose}
            className="hidden md:block absolute top-4 right-4 p-2 text-slate-400 hover:text-church-cyan transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {nextEvent ? (
            <div className="flex flex-col h-full justify-center">
              <div className="flex items-center gap-2 mb-2 text-church-cyan font-bold uppercase tracking-wider text-sm">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(nextEvent.date)}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
                {nextEvent.title}
              </h2>
              
              <div className="w-12 h-1 bg-church-cyan rounded-full mb-6"></div>

              <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {nextEvent.description}
              </p>

              <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm mb-8">
                <MapPin className="w-4 h-4" />
                <span>{nextEvent.location}</span>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                 {nextEvent.buttonLink && (
                   <a 
                     href={nextEvent.buttonLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full bg-church-cyan hover:bg-cyan-500 text-church-dark font-bold py-3 px-6 rounded-xl text-center transition-colors shadow-lg shadow-cyan-500/20"
                   >
                     Confirmar Presença
                   </a>
                 )}
                 <button 
                   onClick={onClose}
                   className="w-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-gray-300 font-medium py-3 px-6 rounded-xl transition-colors"
                 >
                   Fechar Aviso
                 </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
               <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">
                 <Bell className="w-8 h-8 text-slate-400" />
               </div>
               <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Sem avisos no momento</h3>
               <p className="text-slate-500 dark:text-gray-400 mb-6">Fique atento, novidades aparecerão aqui!</p>
               <button 
                 onClick={onClose}
                 className="px-6 py-2 bg-slate-200 dark:bg-white/10 rounded-lg hover:bg-slate-300 transition-colors"
               >
                 Fechar
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
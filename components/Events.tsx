import React, { useState } from 'react';
import { Calendar, X, MapPin, CalendarDays, AlertCircle } from 'lucide-react';
import { SPECIAL_EVENTS } from '../constants';

export const Events: React.FC = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Filtrar eventos futuros e ordenar por data
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

  // Define o tipo de elemento wrapper: 'a' se tiver link, 'div' caso contrário
  const BannerWrapper = nextEvent?.buttonLink ? 'a' : 'div';
  const bannerProps = nextEvent?.buttonLink 
    ? {
        href: nextEvent.buttonLink,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "w-full md:w-1/2 relative bg-slate-800 overflow-hidden group cursor-pointer block"
      }
    : {
        className: "w-full md:w-1/2 relative bg-slate-800 overflow-hidden group"
      };

  return (
    <section id="events" className="py-16 bg-white dark:bg-church-dark border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <CalendarDays className="w-6 h-6 text-church-cyan" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white uppercase tracking-wide">
            Eventos da Igreja
          </h2>
        </div>

        {/* Main Card */}
        <div className="max-w-5xl mx-auto bg-slate-100 dark:bg-church-surface rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-white/10 flex flex-col md:flex-row min-h-[300px]">
          
          {/* Left Side: Visual / Countdown */}
          <BannerWrapper {...bannerProps}>
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/30 transition-colors duration-300"></div>
            <img 
              src={nextEvent?.imageUrl || "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=2090&auto=format&fit=crop"} 
              alt="Evento" 
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${nextEvent ? 'group-hover:scale-110' : 'grayscale opacity-50'}`}
            />
            
            <div className="relative z-20 h-full flex flex-col items-center justify-center p-8 text-center">
              {nextEvent ? (
                <>
                  <span className="text-church-cyan font-bold tracking-widest uppercase mb-2 animate-pulse">Próximo Evento</span>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight drop-shadow-md">{nextEvent.title}</h3>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 group-hover:bg-white/20 transition-colors">
                     <Calendar className="w-4 h-4 text-church-cyan" />
                     <span className="text-white font-mono">{formatDate(nextEvent.date)}</span>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">Tempo até o próximo Evento</h3>
                  <div className="w-16 h-1 bg-church-cyan rounded-full mt-2"></div>
                </>
              )}
            </div>
          </BannerWrapper>

          {/* Right Side: Details / Empty State */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start bg-slate-100 dark:bg-church-surface transition-colors">
             
             <div className="flex-1 flex flex-col justify-center w-full">
                {nextEvent ? (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                    <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
                      {nextEvent.description}
                    </p>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400">
                      <MapPin className="w-5 h-5 text-church-cyan" />
                      <span>{nextEvent.location}</span>
                    </div>
                    {nextEvent.buttonLink && (
                      <a href={nextEvent.buttonLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-church-cyan font-bold hover:underline">
                        Inscreva-se agora &rarr;
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-4 text-slate-500 dark:text-gray-400 py-6">
                    <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-xl">
                       <Calendar className="w-8 h-8" />
                       <div className="absolute top-0 right-0">
                         <X className="w-4 h-4 text-red-500 translate-x-1 -translate-y-1" />
                       </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-700 dark:text-gray-200">Sem eventos agendados</h4>
                      <p className="text-sm">Não há eventos futuros no momento.</p>
                    </div>
                  </div>
                )}
             </div>

             <div className="w-full mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
                <button 
                  onClick={() => setIsCalendarOpen(true)}
                  className="w-full bg-church-cyan hover:bg-cyan-500 text-church-dark font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  VER TODO O CALENDÁRIO
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-church-surface w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative border border-gray-200 dark:border-white/10">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-slate-50 dark:bg-black/20">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-church-cyan" />
                Calendário de Eventos
              </h3>
              <button 
                onClick={() => setIsCalendarOpen(false)}
                className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-colors text-slate-500 dark:text-gray-400"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {upcomingEvents.length > 0 ? (
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-black/20 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border border-gray-100 dark:border-white/5">
                      <div className="flex-shrink-0 flex flex-col items-center justify-center bg-church-blue/10 dark:bg-church-blue/20 text-church-blue dark:text-blue-300 rounded-lg w-16 h-16">
                        <span className="text-xs font-bold uppercase">{new Date(event.date).toLocaleDateString('pt-BR', { month: 'short' })}</span>
                        <span className="text-2xl font-bold">{new Date(event.date).getDate()}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white text-lg">{event.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" /> {event.location}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-gray-300 mt-2">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center text-slate-500 dark:text-gray-400">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle className="w-8 h-8 opacity-50" />
                  </div>
                  <p className="text-lg font-medium">Nenhum evento futuro encontrado.</p>
                  <p className="text-sm opacity-70">Fique atento às nossas redes sociais para novidades!</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 dark:bg-black/20 border-t border-gray-200 dark:border-white/10 text-center">
              <button 
                onClick={() => setIsCalendarOpen(false)}
                className="text-sm text-slate-500 dark:text-gray-400 hover:text-church-cyan transition-colors"
              >
                Fechar janela
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
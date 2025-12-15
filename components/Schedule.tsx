import React from 'react';
import { WEEKLY_SCHEDULE, SOCIAL_LINKS } from '../constants';
import { CalendarClock, ArrowRight } from 'lucide-react';

export const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-slate-50 dark:bg-church-dark relative overflow-hidden transition-colors duration-300">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-church-blue/10 dark:bg-church-blue/20 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-church-cyan uppercase tracking-[0.2em] mb-3">Agenda Semanal</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">CULTOS</h3>
          <div className="w-16 h-1 bg-church-cyan mx-auto rounded-full"></div>
        </div>

        {/* Youtube Banner - Redesigned */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in-up">
           <a 
             href={SOCIAL_LINKS.youtube}
             target="_blank"
             rel="noreferrer"
             className="block group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl transition-all transform hover:-translate-y-1 hover:shadow-red-900/20"
            >
              {/* Backgrounds */}
              <div className="absolute inset-0 bg-[#0f0f0f] z-0"></div> {/* Youtube Black */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-transparent opacity-60 z-0"></div>
              
              {/* Glow Effect */}
              <div className="absolute -left-20 top-0 bottom-0 w-80 bg-red-600/20 blur-[80px] z-0 group-hover:bg-red-600/30 transition-all duration-500"></div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  
                  <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                      {/* CSS-Only Youtube Logo */}
                      <div className="relative w-24 h-16 bg-[#FF0000] rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform duration-300">
                          {/* White Triangle */}
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>

                      <div>
                          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                              <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Nosso Canal</h4>
                              {/* Live Pulse Indicator */}
                              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-950/50 border border-red-500/30">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Ao Vivo</span>
                              </div>
                          </div>
                          <p className="text-gray-400 text-sm md:text-base max-w-md font-medium">
                              Acompanhe transmissões ao vivo, pregações e louvores. Inscreva-se e ative o sininho!
                          </p>
                      </div>
                  </div>

                  <div className="flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                      ACESSAR AGORA
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
              </div>
           </a>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {WEEKLY_SCHEDULE.map((event, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#111827] dark:glass-card rounded-2xl shadow-sm hover:shadow-xl dark:shadow-none dark:hover:bg-[#1f2937] transition-all duration-300 group hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-white/5"
            >
               {/* Card Header with Day */}
               <div className="bg-slate-50 dark:bg-white/5 p-6 border-b border-gray-100 dark:border-white/5 flex justify-between items-center relative overflow-hidden">
                    {/* Decorative color strip based on index to differentiate days visually */}
                    <div className={`absolute top-0 left-0 w-1 h-full ${index % 2 === 0 ? 'bg-church-blue' : 'bg-church-cyan'}`}></div>
                    
                    <div className="flex items-center gap-3">
                        <CalendarClock className={`w-5 h-5 ${index % 2 === 0 ? 'text-church-blue dark:text-blue-400' : 'text-church-cyan'}`} />
                        <h4 className="text-lg font-bold text-slate-700 dark:text-gray-100 group-hover:text-church-blue dark:group-hover:text-church-cyan transition-colors">
                            {event.day}
                        </h4>
                    </div>
               </div>

               {/* Card Body */}
               <div className="p-8">
                  <div className="flex items-start gap-5 mb-5">
                      <div className={`mt-1 p-3 rounded-xl shadow-sm flex-shrink-0 ${
                          index % 2 === 0 
                          ? 'bg-blue-50 text-church-blue dark:bg-blue-900/20 dark:text-blue-400' 
                          : 'bg-cyan-50 text-church-cyan dark:bg-cyan-900/20 dark:text-church-cyan'
                      }`}>
                        {event.icon}
                      </div>
                      <div className="flex-1">
                          <h5 className="text-xl font-bold text-slate-800 dark:text-white mb-2 leading-tight">{event.title}</h5>
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-white/10">
                              {event.time} Hrs
                          </div>
                      </div>
                  </div>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4 mt-2">
                      {event.description}
                  </p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-px rounded-2xl bg-gradient-to-r from-church-blue/50 to-church-cyan/50 max-w-4xl mx-auto shadow-2xl shadow-church-blue/10 dark:shadow-church-blue/20">
            <div className="bg-white dark:bg-church-dark rounded-2xl p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-church-blue/5 dark:bg-church-blue/10"></div>
                <h4 className="text-2xl md:text-3xl font-bold mb-3 relative z-10 text-slate-800 dark:text-white">Alimentando vidas com a palavra</h4>
                <p className="text-slate-600 dark:text-gray-400 relative z-10">Há 14 anos transformando histórias através do Evangelho.</p>
            </div>
        </div>
      </div>
    </section>
  );
};
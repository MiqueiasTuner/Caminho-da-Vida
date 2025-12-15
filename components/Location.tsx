import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { ADDRESS, MAP_LINK } from '../constants';

export const Location: React.FC = () => {
  return (
    <section id="location" className="relative py-32 bg-slate-100 dark:bg-church-dark text-slate-900 dark:text-white border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <img 
            src="https://picsum.photos/id/1015/1920/600" 
            alt="Location Map Background" 
            className="w-full h-full object-cover grayscale dark:invert"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent dark:from-church-dark dark:via-church-dark/90 dark:to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white dark:bg-church-surface border border-church-cyan/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                <MapPin className="w-8 h-8 text-church-cyan" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-slate-900 dark:text-white">Onde Estamos</h2>
            
            <address className="not-italic text-2xl text-slate-600 dark:text-gray-400 mb-12 font-light tracking-wide border-b border-gray-300 dark:border-white/10 pb-12 inline-block">
                {ADDRESS}
            </address>

            <div className="block">
                <a 
                    href={MAP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 bg-church-blue hover:bg-church-cyan text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
                >
                    <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    ABRIR NO GOOGLE MAPS
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Eye, Target, Heart } from 'lucide-react';
import { TAGLINE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[110vh] flex flex-col items-center justify-start pt-40 lg:pt-52 overflow-hidden bg-slate-900 dark:bg-church-dark transition-colors duration-500">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
          alt="Worship Background" 
          className="w-full h-full object-cover opacity-30 dark:opacity-40 mix-blend-overlay"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-church-blue/30 to-slate-50 dark:from-church-navy/90 dark:via-church-blue/40 dark:to-church-dark"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-church-blue rounded-full filter blur-[120px] opacity-20 dark:opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-church-cyan rounded-full filter blur-[120px] opacity-20 dark:opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center mb-24">
        
        <h2 className="text-church-cyan font-semibold tracking-widest uppercase mb-4 text-sm md:text-base animate-fade-in-up drop-shadow-md">
          Caminho da Vida Igreja em Células
        </h2>

        {/* Título restaurado para o estilo da imagem: Sans-serif, Bold, Sem itálico */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
          DISCIPULADO COM<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-church-blue drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            EXCELÊNCIA
          </span>
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-church-cyan to-transparent my-8 rounded-full opacity-70"></div>

        <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-2xl mb-12 font-light leading-relaxed drop-shadow-md">
          {TAGLINE}
        </p>

        <a href="#schedule" className="px-10 py-4 bg-church-cyan hover:bg-cyan-400 text-church-dark font-bold rounded-sm uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300">
          Nossa Programação
        </a>
      </div>

      {/* Cards Overlay - 3 Pillars */}
      <div className="container mx-auto px-4 z-20 pb-20 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          
          {/* Card 1: Vision */}
          <div className="bg-white/95 dark:bg-church-navy/80 backdrop-blur-md p-10 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-church-navy transition-colors duration-300 group">
            <Eye className="w-10 h-10 text-church-blue dark:text-church-cyan mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 font-serif">Nossa Visão</h3>
            <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed font-light">
              Expandir o Reino de Deus pela pregação do evangelho, mantendo bons relacionamentos, cultivando amizades e fazendo novos discípulos de Jesus.
            </p>
          </div>

          {/* Card 2: Mission (Highlighted) */}
          <div className="bg-gradient-to-br from-church-cyan to-church-blue p-10 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Target className="w-10 h-10 text-white mb-6 group-hover:rotate-12 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">Nossa Missão</h3>
            <p className="text-white/95 text-base leading-relaxed font-light">
              Glorificar a Deus e fazer discípulos de Cristo em todas as nações.
            </p>
          </div>

          {/* Card 3: Values */}
          <div className="bg-white/95 dark:bg-church-navy/80 backdrop-blur-md p-10 flex flex-col items-center text-center md:border-l border-gray-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-church-navy transition-colors duration-300 group">
            <Heart className="w-10 h-10 text-church-blue dark:text-church-cyan mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 font-serif">Nossos Valores</h3>
            <ul className="text-slate-600 dark:text-gray-300 text-base leading-relaxed text-left space-y-2 font-light">
              <li className="flex items-start gap-3"><span className="text-church-cyan font-bold">•</span> Amar a Deus em primeiro lugar</li>
              <li className="flex items-start gap-3"><span className="text-church-cyan font-bold">•</span> Amar ao próximo</li>
              <li className="flex items-start gap-3"><span className="text-church-cyan font-bold">•</span> Viver em santidade</li>
              <li className="flex items-start gap-3"><span className="text-church-cyan font-bold">•</span> Zelar pela comunhão</li>
              <li className="flex items-start gap-3"><span className="text-church-cyan font-bold">•</span> Fazer novos discípulos</li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
};
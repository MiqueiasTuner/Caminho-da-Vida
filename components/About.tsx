import React from 'react';
import { VERSES, LEADERS } from '../constants';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-church-navy relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative bg elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-5 mix-blend-multiply dark:mix-blend-normal"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Verses Column */}
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-1 bg-church-cyan"></div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Fundamentos da Fé</h2>
            </div>
            
            <div className="grid gap-6">
              {VERSES.map((verse, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-church-dark/50 border border-gray-200 dark:border-white/5 p-8 rounded-xl relative hover:border-church-cyan/30 transition-colors duration-300 shadow-sm">
                  <Quote className="absolute top-6 left-6 text-church-blue/10 dark:text-church-cyan/20 w-10 h-10 transform -scale-x-100" />
                  <p className="text-lg text-slate-700 dark:text-gray-300 italic mb-6 relative z-10 pl-8 leading-relaxed">
                    "{verse.text}"
                  </p>
                  <div className="flex items-center justify-end gap-3">
                      <div className="h-px w-10 bg-church-cyan"></div>
                      <p className="text-church-cyan font-bold text-sm tracking-widest uppercase">
                        {verse.reference}
                      </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Column */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-1 bg-church-cyan"></div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Liderança</h2>
            </div>

            <div className="bg-gradient-to-b from-slate-200 to-white dark:from-church-surface dark:to-church-dark rounded-2xl p-1 border border-gray-200 dark:border-white/10 shadow-2xl">
              <div className="bg-white dark:bg-church-dark/50 rounded-xl p-8 text-center h-full">
                <div className="w-32 h-32 bg-gradient-to-br from-church-blue to-church-cyan rounded-full mx-auto mb-8 flex items-center justify-center p-1 shadow-lg shadow-cyan-500/20">
                   <div className="w-full h-full bg-slate-50 dark:bg-church-navy rounded-full flex items-center justify-center border-4 border-transparent">
                        <span className="text-5xl">✝</span>
                   </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 uppercase tracking-widest">
                  Ministério Apostólico
                </h3>
                <div className="w-10 h-1 bg-church-cyan mx-auto mb-8"></div>
                
                <div className="space-y-6">
                  {LEADERS.map((leader, idx) => (
                    <div key={idx} className="group">
                      <p className="text-xl font-bold text-slate-700 dark:text-white group-hover:text-church-cyan transition-colors">{leader.name}</p>
                      <p className="text-sm text-slate-500 dark:text-gray-500 uppercase tracking-wider">{leader.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
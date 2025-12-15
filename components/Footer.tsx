import React from 'react';
import { CHURCH_NAME, SOCIAL_LINKS, ADDRESS, MAP_LINK, EMAIL } from '../constants';
import { Facebook, Instagram, Youtube, Code, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#020617] text-slate-600 dark:text-slate-400 py-16 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Identity */}
          <div className="flex flex-col items-start">
            <a 
              href="#home" 
              onClick={scrollToTop} 
              className="group cursor-pointer block"
              aria-label="Voltar ao topo"
            >
              <h3 className="text-slate-900 dark:text-white font-bold text-2xl mb-2 tracking-wider group-hover:text-church-cyan transition-colors">{CHURCH_NAME}</h3>
            </a>
            <p className="text-sm text-church-cyan font-light uppercase tracking-widest">Igreja em Células</p>
            <p className="mt-4 text-sm leading-relaxed">Uma família apostólica vivendo o propósito de Deus através do discipulado e comunhão.</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
             <h4 className="text-slate-900 dark:text-white font-bold uppercase text-sm tracking-wider mb-6">Contato</h4>
             <div className="flex flex-col gap-4 text-sm w-full">
                <a 
                  href={MAP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-church-cyan transition-colors group"
                >
                   <MapPin className="w-5 h-5 text-church-cyan shrink-0 group-hover:animate-bounce mt-0.5" />
                   <span className="max-w-[200px]">{ADDRESS}</span>
                </a>
                <a 
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 hover:text-church-cyan transition-colors group"
                >
                   <Mail className="w-5 h-5 text-church-cyan shrink-0" />
                   <span>{EMAIL}</span>
                </a>
             </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end">
             <h4 className="text-slate-900 dark:text-white font-bold uppercase text-sm tracking-wider mb-6">Redes Sociais</h4>
             <div className="flex gap-4">
                <a 
                  href={SOCIAL_LINKS.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-church-surface shadow-sm flex items-center justify-center text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-church-cyan dark:hover:text-church-dark transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={SOCIAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-church-surface shadow-sm flex items-center justify-center text-pink-600 dark:text-white hover:bg-pink-600 hover:text-white dark:hover:bg-church-cyan dark:hover:text-church-dark transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={SOCIAL_LINKS.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-church-surface shadow-sm flex items-center justify-center text-red-600 dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-church-cyan dark:hover:text-church-dark transition-all duration-300"
                  aria-label="Youtube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} {CHURCH_NAME}. Todos os direitos reservados.</p>
          </div>
          
          <a 
            href="https://www.instagram.com/miqueias_dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-church-cyan bg-cyan-50 dark:bg-church-cyan/5 px-4 py-2 rounded-full hover:bg-cyan-100 dark:hover:bg-church-cyan/10 transition-colors cursor-pointer"
            aria-label="Instagram do Desenvolvedor Miqueias"
          >
            <Code className="w-3 h-3" />
            <p>Desenvolvido por <span className="font-bold underline decoration-1 underline-offset-2">Miqueias</span></p>
          </a>
        </div>
      </div>
    </footer>
  );
};
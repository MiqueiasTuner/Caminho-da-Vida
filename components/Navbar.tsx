import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Calendar, MapPin, Users, Camera, Sun, Moon, CalendarDays } from 'lucide-react';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Altura aproximada do menu fixo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#home', icon: <Home className="w-4 h-4" /> },
    { name: 'Programação', href: '#schedule', icon: <Calendar className="w-4 h-4" /> },
    { name: 'Galeria', href: '#gallery', icon: <Camera className="w-4 h-4" /> },
    { name: 'Sobre Nós', href: '#about', icon: <Users className="w-4 h-4" /> },
    { name: 'Eventos', href: '#events', icon: <CalendarDays className="w-4 h-4" /> },
    { name: 'Localização', href: '#location', icon: <MapPin className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled 
        ? 'bg-white/95 dark:bg-church-dark/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-white/10 py-3' 
        : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center text-slate-800 dark:text-white">
        
        {/* LOGO AREA - IMAGE */}
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={(e) => scrollToSection(e, '#home')}
        >
          {/* Circular Container for Logo */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white shadow-lg group-hover:scale-105 transition-all duration-300 border-2 border-white/20 flex items-center justify-center">
             <img 
               src={LOGO_URL} 
               alt="Logo Caminho da Vida" 
               referrerPolicy="no-referrer"
               className="w-full h-full object-cover" 
             />
          </div>
          
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-baseline gap-1 leading-none">
                <span className={`font-sans font-medium text-lg tracking-wide ${scrolled ? 'text-slate-700 dark:text-gray-200' : 'text-gray-100 dark:text-gray-200'}`}>CAMINHO</span>
                <span className={`font-serif italic text-sm ${scrolled ? 'text-slate-500 dark:text-gray-400' : 'text-gray-300 dark:text-gray-400'}`}>da</span>
            </div>
            <span className={`font-serif italic text-3xl leading-none -mt-1 ml-4 ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`} style={{ fontFamily: 'Times New Roman, serif' }}>Vida</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative group flex items-center gap-2 text-sm font-medium uppercase tracking-widest transition-colors duration-300
                ${scrolled ? 'text-slate-600 hover:text-church-blue dark:text-gray-300 dark:hover:text-white' : 'text-gray-300 hover:text-white'}
              `}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-church-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20' : 'bg-white/10 hover:bg-white/20 text-white'}`}
            title="Alternar Tema"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-church-blue" />}
          </button>

          <a 
            href="#location" 
            onClick={(e) => scrollToSection(e, '#location')}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-church-blue to-church-cyan text-white text-sm font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
          >
            ONDE ESTAMOS
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-slate-100 dark:bg-white/10' : 'bg-white/10 text-white'}`}
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-church-blue" />}
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-slate-800 dark:text-white' : 'text-white'} focus:outline-none`}>
            {isOpen ? <X className="w-8 h-8 text-church-cyan" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-church-navy/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 shadow-xl transition-all">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="flex items-center gap-3 text-slate-700 dark:text-white py-3 border-b border-gray-200 dark:border-white/5 last:border-0 hover:text-church-cyan dark:hover:text-church-cyan px-2 font-medium"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
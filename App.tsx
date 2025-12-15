import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { NoticesModal } from './components/NoticesModal';

const App: React.FC = () => {
  // Initialize theme state (default to dark)
  const [isDark, setIsDark] = useState(true);
  const [isNoticesOpen, setIsNoticesOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Auto-open notices modal on first load (opcional: usando timeout para não ser imediato demais)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNoticesOpen(true);
    }, 1500); // Abre após 1.5 segundos
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const openNotices = () => setIsNoticesOpen(true);
  const closeNotices = () => setIsNoticesOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-church-dark transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} openNotices={openNotices} />
      <main className="flex-grow">
        <Hero openNotices={openNotices} />
        <Schedule />
        <Gallery />
        <About />
        <Events />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <NoticesModal isOpen={isNoticesOpen} onClose={closeNotices} />
    </div>
  );
};

export default App;
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

const App: React.FC = () => {
  // Initialize theme state (default to dark)
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-church-dark transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <main className="flex-grow">
        <Hero />
        <Schedule />
        <Gallery />
        <About />
        <Events />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
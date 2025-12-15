import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="20" y1="180" x2="180" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a8a" />   {/* church-blue */}
          <stop offset="100%" stopColor="#06b6d4" /> {/* church-cyan */}
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Círculo de Fundo (opcional, para dar corpo) */}
      <circle cx="100" cy="100" r="90" fill="url(#logoGradient)" fillOpacity="0.05" />

      {/* A Cruz estilizada */}
      <path 
        d="M100 35 V 135" 
        stroke="url(#logoGradient)" 
        strokeWidth="16" 
        strokeLinecap="round" 
        className="drop-shadow-sm"
      />
      <path 
        d="M70 75 H 130" 
        stroke="url(#logoGradient)" 
        strokeWidth="16" 
        strokeLinecap="round" 
        className="drop-shadow-sm"
      />

      {/* O Caminho (Estrada curva levando à base da cruz) */}
      <path 
        d="M45 165 C 45 165, 80 155, 100 135 C 120 155, 155 165, 155 165" 
        stroke="url(#logoGradient)" 
        strokeWidth="10" 
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      
      {/* Símbolo de Luz/Espírito no topo */}
      <circle cx="100" cy="35" r="5" fill="#06b6d4" filter="url(#glow)" opacity="0.8" />
    </svg>
  );
};
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 300 300" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      className={className}
    >
      {/* Moldura da Casa (House Frame) */}
      {/* Stroke muda de cor baseado no tema: church-blue no claro, branco no escuro */}
      <path 
        d="M 150 40 L 260 120 V 270 H 40 V 120 L 150 40 Z" 
        className="stroke-[#1e3a8a] dark:stroke-white transition-colors duration-300"
        strokeWidth="25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Cruz / Caminho (Cross / Path) */}
      {/* A parte vertical da cruz se transforma no caminho curvado */}
      <path 
        d="M 135 80 H 165 V 120 H 205 V 150 H 165 C 165 200 210 250 220 270 H 80 C 90 250 135 200 135 150 H 95 V 120 H 135 V 80 Z" 
        fill="#DC2626" 
        className="drop-shadow-sm"
      />
    </svg>
  );
};
import React from 'react';

interface B2LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const B2LogoEmblem: React.FC<B2LogoProps> = ({
  className = '',
  size = 40,
  showText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Circular Glowing Purple Emblem */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Outer ambient glow */}
        <div className="absolute inset-0 rounded-full bg-[#7B2CBF]/30 blur-md group-hover:bg-[#9D4EDD]/50 transition-all duration-300" />
        
        {/* Outer rim SVG with neon gradient */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(157,78,221,0.6)]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="emblemBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C77DFF" />
              <stop offset="50%" stopColor="#7B2CBF" />
              <stop offset="100%" stopColor="#9D4EDD" />
            </linearGradient>
            
            <linearGradient id="discGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B0A33" />
              <stop offset="60%" stopColor="#0B0318" />
              <stop offset="100%" stopColor="#05010C" />
            </linearGradient>

            <linearGradient id="innerGlowGrad" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#E0AAFF" />
              <stop offset="45%" stopColor="#9D4EDD" />
              <stop offset="100%" stopColor="#5A189A" />
            </linearGradient>

            <radialGradient id="highlightGrad" cx="35%" cy="30%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="50%" stopColor="rgba(199, 125, 255, 0.1)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Obsidian glass disc background */}
          <circle cx="50" cy="50" r="46" fill="url(#discGrad)" stroke="url(#emblemBorderGrad)" strokeWidth="2.5" />
          
          {/* Specular glass reflection */}
          <circle cx="50" cy="50" r="45" fill="url(#highlightGrad)" />

          {/* Thin concentric inner tech ring */}
          <circle cx="50" cy="50" r="40" stroke="rgba(199, 125, 255, 0.25)" strokeWidth="1" strokeDasharray="4 2" />

          {/* Stylized 'B2' Monogram */}
          <g transform="translate(23, 26)">
            {/* The B letterform */}
            <path
              d="M3 4 C3 2.5 4.5 1.5 6.5 1.5 L18 1.5 C24 1.5 28 4.5 28 9.5 C28 13.5 25 16 21.5 17 C26.5 18 30 21.5 30 27 C30 33.5 24.5 37.5 17.5 37.5 L6.5 37.5 C4.5 37.5 3 36.5 3 35 Z"
              fill="url(#innerGlowGrad)"
            />
            {/* Cutouts for 'B' inner windows */}
            <path
              d="M10.5 7 L16.5 7 C19.5 7 21.5 8.5 21.5 11 C21.5 13.5 19.5 15 16.5 15 L10.5 15 Z"
              fill="#0B0318"
            />
            <path
              d="M10.5 22 L17.5 22 C21 22 23.5 24 23.5 27 C23.5 30 21 32 17.5 32 L10.5 32 Z"
              fill="#0B0318"
            />

            {/* The superscribed '2' glyph */}
            <path
              d="M33 5 C33 2.5 35 1 38.5 1 C42.5 1 45 3.2 45 6.5 C45 10 42 12.5 38 16.5 L33.5 21 L45.5 21 L45.5 24.5 L31.5 24.5 L31.5 21.5 L38.5 14.5 C41.5 11.5 42.5 9.5 42.5 7 C42.5 4.8 41 3.5 38.5 3.5 C36 3.5 34.8 4.8 34.8 6.5 Z"
              fill="#FFFFFF"
              filter="drop-shadow(0 0 4px #C77DFF)"
            />
          </g>
        </svg>
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display font-extrabold tracking-wider text-white text-base leading-none group-hover:text-[#E0AAFF] transition-colors">
            B2 <span className="text-[#C77DFF]">TECHNOLOGIES</span>
          </span>
          <span className="text-[9px] font-mono tracking-widest text-[#B8A9C9]/80 uppercase mt-1">
            IDEAS · WEBSITES · SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
};

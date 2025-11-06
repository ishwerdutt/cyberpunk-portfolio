'use client';

import { useState } from 'react';

interface NavbarProps {
  currentSection: number;
  onNavigate: (index: number) => void;
}

export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', index: 0 },
    { name: 'ABOUT', index: 1 },
    { name: 'PROJECTS', index: 2 },
    { name: 'SKILLS', index: 3 },
    { name: 'CONTACT', index: 4 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-green-500/30 holographic">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 border-2 border-cyan-400 rounded flex items-center justify-center animate-[neonFlicker_8s_ease-in-out_infinite]">
              <span className="text-cyan-400 font-['Orbitron'] font-bold text-xl">ID</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-green-400 font-['Orbitron'] font-bold text-lg animate-[glowIntensify_2s_ease-in-out_infinite]">
                ISHWER DUTT
              </h1>
              <p className="text-cyan-400 text-xs font-['Space_Mono']">&gt; AI Engineer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            {navItems.map((item) => (
              <button
                key={item.index}
                onClick={() => onNavigate(item.index)}
                className={`
                  px-6 py-2 font-['Orbitron'] text-sm transition-all duration-300
                  ${currentSection === item.index
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400 neon-border'
                    : 'text-green-400 hover:text-cyan-400 hover:bg-green-400/5 border border-transparent'
                  }
                `}
              >
                &gt; {item.name}_
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 border border-green-500 flex flex-col items-center justify-center space-y-1 hover:border-cyan-400 transition-colors"
          >
            <span className={`w-6 h-0.5 bg-green-400 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-6 h-0.5 bg-green-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-green-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>

          {/* Status Indicator */}
          <div className="hidden xl:flex items-center space-x-2 border-l border-green-500/30 pl-4 ml-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs font-['Space_Mono']">ONLINE</span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-green-500/30 space-y-3 animate-[fadeInScale_0.3s_ease-out]">
            {navItems.map((item) => (
              <button
                key={item.index}
                onClick={() => {
                  onNavigate(item.index);
                  setIsMenuOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-3 font-['Orbitron'] text-sm transition-all duration-300
                  ${currentSection === item.index
                    ? 'text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400'
                    : 'text-green-400 hover:text-cyan-400 hover:bg-green-400/5 border-l-2 border-transparent'
                  }
                `}
              >
                &gt; {item.name}_
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-px bg-cyan-400 w-full animate-[slideInRight_2s_ease-in-out_infinite]" />
      </div>
    </nav>
  );
}

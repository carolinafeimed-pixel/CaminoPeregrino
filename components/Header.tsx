
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center gap-3 text-2xl font-bold text-azul">
              <Logo className="h-8 w-8 text-amarillo" />
              <span className="font-bold tracking-wide">CAMINO PEREGRINO</span>
            </a>
          </div>
          <nav className="hidden md:block">
             <a href="#contact" className="ml-8 inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-azul bg-amarillo hover:bg-yellow-400 transition-colors">
                Diseña tu Camino
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';

interface HeaderProps {
  onDownload: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownload }) => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://i.imgur.com/T2jVNRX.png" 
            alt="Diretamente da Fronteira Logo" 
            className="h-12 md:h-16 w-auto object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
        <nav className="hidden md:flex space-x-6 text-xs font-bold text-blue-900 uppercase tracking-widest items-center">
          <a href="#" className="hover:text-blue-500 transition">Início</a>
          <a href="#features" className="hover:text-blue-500 transition">O Guia</a>
          <button 
            onClick={onDownload}
            className="bg-yellow-400 px-5 py-2.5 rounded-full hover:bg-yellow-300 transition shadow-sm border border-yellow-500 font-black"
          >
            DOWNLOAD GRÁTIS
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

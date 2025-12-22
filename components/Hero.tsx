
import React from 'react';

interface HeroProps {
  onDownload: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDownload }) => {
  return (
    <section className="gradient-bg text-white py-16 md:py-28 px-4 overflow-hidden relative border-b-8 border-yellow-400">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <div className="inline-block bg-yellow-400 text-blue-950 px-4 py-1.5 rounded-full text-xs font-black mb-6 tracking-widest uppercase shadow-[0_0_20px_rgba(234,179,8,0.4)]">
            🔥 GUIA DEFINITIVO 2025
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-6 uppercase tracking-tighter text-shadow-lg">
            COMPRE NO <br/>
            <span className="text-yellow-400">PARAGUAI</span> <br/>
            COM <span className="underline decoration-blue-500">SEGURANÇA!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-lg leading-relaxed font-bold opacity-95">
            O manual que os golpistas de rua não querem que você leia. Baixe agora e economize milhares de reais.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button 
              onClick={onDownload}
              className="bg-yellow-400 text-blue-950 px-10 py-6 rounded-2xl font-black text-2xl shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:bg-yellow-300 transition-all transform hover:-translate-y-2 flex items-center justify-center border-b-8 border-yellow-600 active:border-b-0 active:translate-y-1 group"
            >
              RESGATAR E-BOOK GRÁTIS
              <i className="fas fa-download ml-4 animate-bounce"></i>
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start space-x-4">
             <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-2 border-blue-900 shadow-lg" src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Seguidor" />
                ))}
             </div>
             <p className="text-sm font-black text-blue-100 uppercase tracking-tight">
               <span className="text-yellow-400 text-lg">+18 MIL</span> PESSOAS JÁ BAIXARAM
             </p>
          </div>
        </div>
        
        <div className="md:w-1/2 relative flex justify-center items-center">
          <div className="relative z-10 w-72 md:w-96 p-4 floating">
             <div className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-4 border-yellow-400 overflow-hidden">
                <div className="bg-blue-900 p-8 text-center border-b-4 border-yellow-400">
                   <img src="https://i.imgur.com/T2jVNRX.png" alt="Logo" className="h-20 mx-auto mb-4 brightness-110" />
                   <h2 className="text-yellow-400 text-2xl font-black italic">GUIA SEGURO</h2>
                   <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Ciudad del Este</p>
                </div>
                <div className="p-8 space-y-4 bg-gray-50">
                   <div className="flex items-center text-blue-900 font-black text-sm uppercase">
                      <i className="fas fa-check-circle text-green-500 mr-3 text-lg"></i> Lojas Oficiais
                   </div>
                   <div className="flex items-center text-blue-900 font-black text-sm uppercase">
                      <i className="fas fa-check-circle text-green-500 mr-3 text-lg"></i> Câmbio sem Taxas
                   </div>
                   <div className="flex items-center text-blue-900 font-black text-sm uppercase">
                      <i className="fas fa-check-circle text-green-500 mr-3 text-lg"></i> Fuja dos Golpes
                   </div>
                   <div className="mt-8 pt-4 border-t border-gray-200">
                      <p className="text-blue-900/40 text-[9px] font-bold text-center uppercase tracking-widest">Acesso Vitalício e Gratuito</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

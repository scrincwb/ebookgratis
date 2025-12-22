
import React from 'react';

interface HeroProps {
  onDownload: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDownload }) => {
  return (
    <section className="gradient-bg text-white py-16 md:py-28 px-4 overflow-hidden relative border-b-8 border-yellow-400">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 -mr-20 -mt-20"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <div className="inline-block bg-yellow-400 text-blue-950 px-4 py-1.5 rounded-full text-[10px] font-black mb-6 tracking-widest uppercase shadow-lg border-2 border-white/20">
            CONFIRMADO: GUIA ATUALIZADO 2025
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black leading-[1] mb-6 uppercase tracking-tighter italic">
            NÃO SEJA <span className="text-yellow-400 underline decoration-blue-500">ENGANADO</span> <br/>
            NO PARAGUAI!
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-lg leading-relaxed font-medium">
            Aprenda a encontrar as melhores lojas, fuja dos golpistas de rua e economize até <span className="text-yellow-400 font-bold">70% comparado ao Brasil</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button 
              onClick={onDownload}
              className="bg-yellow-400 text-blue-950 px-8 py-5 rounded-2xl font-black text-xl btn-shadow hover:bg-yellow-300 transition-all transform hover:-translate-y-2 flex items-center justify-center border-b-8 border-yellow-600 active:border-b-0 active:translate-y-1 group"
            >
              BAIXAR E-BOOK GRÁTIS
              <i className="fas fa-arrow-right ml-3 transition-transform group-hover:translate-x-2"></i>
            </button>
          </div>
          
          <div className="mt-10 flex items-center justify-center md:justify-start space-x-3">
             <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-blue-900" src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Seguidor" />
                ))}
             </div>
             <p className="text-sm font-bold text-blue-200">
               <span className="text-white">+18.400</span> inscritos já garantiram o deles
             </p>
          </div>
        </div>
        
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* Mockup do Ebook */}
          <div className="relative z-10 w-64 md:w-80 h-[450px] md:h-[550px] bg-white rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] p-4 floating border-4 border-yellow-400 overflow-hidden">
            <div className="h-full bg-gradient-to-b from-blue-50 to-white rounded-[1.5rem] flex flex-col items-center justify-center text-center p-6 border border-gray-100">
               <div className="bg-blue-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <i className="fas fa-shopping-bag text-yellow-400 text-3xl"></i>
               </div>
               <h3 className="text-blue-900 text-xl font-black leading-tight uppercase mb-2">GUIA DE COMPRAS<br/>CDE 2025</h3>
               <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] mb-6">DIRETAMENTE DA FRONTEIRA</p>
               <div className="w-12 h-1.5 bg-yellow-400 rounded-full mb-6"></div>
               <div className="space-y-2 text-left w-full px-2">
                  <div className="flex items-center text-[10px] font-bold text-blue-900/60 uppercase">
                     <i className="fas fa-check text-green-500 mr-2"></i> Lista de Lojas VIP
                  </div>
                  <div className="flex items-center text-[10px] font-bold text-blue-900/60 uppercase">
                     <i className="fas fa-check text-green-500 mr-2"></i> Mapas de Segurança
                  </div>
                  <div className="flex items-center text-[10px] font-bold text-blue-900/60 uppercase">
                     <i className="fas fa-check text-green-500 mr-2"></i> Dicas de Câmbio
                  </div>
               </div>
               <div className="mt-auto pt-4 border-t border-gray-100 w-full text-[10px] font-black text-red-600 animate-pulse">
                  CONTEÚDO EXCLUSIVO
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

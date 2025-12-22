
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ShoppingAssistant from './components/ShoppingAssistant';
import Footer from './components/Footer';

const EBOOK_URL = "https://www.diretamentedafronteira.com.br/ebook-guia-completo.pdf";

const App: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  const handleDownload = () => {
    window.open(EBOOK_URL, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onDownload={handleDownload} />
      
      <main className="flex-grow">
        <Hero onDownload={handleDownload} />
        
        <section id="features">
          <Features />
        </section>

        {/* Seção Informativa Rápida */}
        <div className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-blue-100 transform hover:scale-105 transition">
              <h3 className="font-black text-blue-900 mb-2 uppercase tracking-tighter">Cota Terrestre</h3>
              <p className="text-4xl font-black text-blue-600">US$ 500</p>
              <p className="text-xs text-gray-500 mt-2 uppercase font-bold">Livre de impostos a cada 30 dias</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-green-100 transform hover:scale-105 transition">
              <h3 className="font-black text-green-900 mb-2 uppercase tracking-tighter">Cota Aérea</h3>
              <p className="text-4xl font-black text-green-600">US$ 1.000</p>
              <p className="text-xs text-gray-500 mt-2 uppercase font-bold">Para voos internacionais</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <section className="py-24 text-center px-4 bg-white">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-8 uppercase tracking-tighter">
            Pronto para economizar no Paraguai?
          </h2>
          <button 
            onClick={handleDownload}
            className="bg-blue-900 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-blue-800 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
          >
            BAIXAR MEU GUIA GRÁTIS <i className="fas fa-arrow-right ml-3"></i>
          </button>
        </section>
      </main>

      <Footer />

      {/* Botão Flutuante do Chat */}
      {!showChat && (
        <button 
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 bg-blue-900 text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all border-4 border-yellow-400 z-50 flex items-center justify-center"
        >
          <i className="fas fa-comment-dots text-2xl"></i>
          <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">1</span>
        </button>
      )}

      {showChat && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 z-50 animate-fade-in">
          <div className="relative h-full md:h-auto">
            <ShoppingAssistant />
            <button 
              onClick={() => setShowChat(false)}
              className="absolute top-4 right-4 text-white md:text-white/50 hover:text-white transition"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

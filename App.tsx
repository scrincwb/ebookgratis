
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ShoppingAssistant from './components/ShoppingAssistant';
import Footer from './components/Footer';
import LeadForm from './components/LeadForm';
import DownloadPage from './components/DownloadPage';
import { UserLead } from './types';

const App: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [viewState, setViewState] = useState<'LANDING' | 'FORM' | 'DOWNLOAD'>('LANDING');
  const [userData, setUserData] = useState<UserLead | null>(null);

  const openForm = () => {
    setViewState('FORM');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLeadSubmit = (data: UserLead) => {
    setUserData(data);
    setViewState('DOWNLOAD');
  };

  if (viewState === 'DOWNLOAD' && userData) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header onDownload={() => {}} />
        <main className="flex-grow">
          <DownloadPage userName={userData.name} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onDownload={openForm} />
      
      <main className="flex-grow">
        {viewState === 'FORM' ? (
          <section className="py-20 px-4 animate-fade-in">
            <div className="max-w-xl mx-auto bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border-t-8 border-yellow-400 text-center">
              <h2 className="text-3xl font-black text-blue-900 mb-2 uppercase italic">Quase lá! 🚀</h2>
              <p className="text-gray-500 mb-8 font-medium">Preencha abaixo para receber o acesso instantâneo ao seu Guia VIP.</p>
              <LeadForm onSubmit={handleLeadSubmit} />
              <button 
                onClick={() => setViewState('LANDING')}
                className="mt-6 text-xs text-gray-400 font-bold hover:text-blue-500 uppercase tracking-widest"
              >
                ← Voltar para a página inicial
              </button>
            </div>
          </section>
        ) : (
          <>
            <Hero onDownload={openForm} />
            
            <section id="features">
              <Features />
            </section>

            {/* Seção de Prova Social e Números */}
            <div className="py-16 bg-blue-900 text-white border-y-4 border-yellow-400">
              <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-black text-yellow-400">100%</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Gratuito</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-yellow-400">50+</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Lojas Seguras</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-yellow-400">2025</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Atualizado</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-yellow-400">18k</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Downloads</p>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <section className="py-24 text-center px-4 bg-white relative overflow-hidden">
               <div className="absolute inset-0 bg-blue-50/30 -skew-y-3 transform origin-bottom-right"></div>
               <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-blue-900 mb-8 uppercase tracking-tighter max-w-3xl mx-auto italic">
                  Pronto para economizar de verdade?
                </h2>
                <button 
                  onClick={openForm}
                  className="bg-yellow-400 text-blue-900 px-12 py-7 rounded-2xl font-black text-2xl hover:bg-yellow-300 transition-all shadow-[0_20px_50px_rgba(234,179,8,0.4)] hover:-translate-y-2 active:translate-y-0 border-b-8 border-yellow-600"
                >
                  SIM! QUERO O GUIA AGORA <i className="fas fa-bolt ml-3"></i>
                </button>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />

      {/* Botão Flutuante do Chat */}
      {!showChat && viewState === 'LANDING' && (
        <button 
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all border-4 border-white z-50 flex items-center justify-center animate-bounce"
        >
          <i className="fas fa-comment-dots text-2xl"></i>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white">IA</span>
        </button>
      )}

      {showChat && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 z-50 animate-fade-in flex flex-col items-end">
          <div className="relative w-full max-w-lg">
            <ShoppingAssistant />
            <button 
              onClick={() => setShowChat(false)}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition bg-blue-950/50 w-8 h-8 rounded-full flex items-center justify-center"
            >
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

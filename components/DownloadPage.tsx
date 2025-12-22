
import React from 'react';

interface DownloadPageProps {
  userName: string;
}

const EBOOK_URL = "https://www.diretamentedafronteira.com.br/ebook-guia-completo.pdf";

const DownloadPage: React.FC<DownloadPageProps> = ({ userName }) => {
  return (
    <div className="py-20 px-4 animate-fade-in bg-gradient-to-b from-blue-50 to-white min-h-[80vh] flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-8 md:p-16 text-center border border-gray-100 relative overflow-hidden">
        {/* Confetes ou Decoração */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full -ml-16 -mt-16"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full -mr-16 -mt-16"></div>

        <div className="relative z-10">
          <div className="mb-8 inline-flex bg-green-500 text-white w-24 h-24 rounded-full items-center justify-center text-5xl shadow-xl animate-bounce">
            <i className="fas fa-check"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-4 uppercase tracking-tighter italic">
            PARABÉNS, {userName.split(' ')[0].toUpperCase()}!
          </h2>
          <p className="text-xl text-gray-500 mb-12 font-medium max-w-xl mx-auto">
            Sua jornada para compras seguras no Paraguai começa agora. Seu guia exclusivo já está disponível.
          </p>
          
          <div className="bg-blue-50 rounded-[2rem] p-8 md:p-12 mb-12 border-2 border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="text-left">
              <span className="bg-blue-900 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">PDF DISPONÍVEL</span>
              <h3 className="font-black text-2xl text-blue-900 uppercase">Guia Oficial 2025</h3>
              <p className="text-sm text-blue-800/60 font-bold uppercase tracking-tight">Conteúdo Completo • 52 Páginas</p>
            </div>
            <a 
              href={EBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border-b-8 border-green-700 active:border-b-0 active:translate-y-1"
            >
              <i className="fas fa-cloud-download-alt mr-4 text-2xl"></i>
              BAIXAR AGORA
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h4 className="font-black text-blue-900 mb-2 flex items-center uppercase italic">
                <i className="fas fa-star text-yellow-400 mr-3"></i> O QUE FAZER AGORA?
              </h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Leia a seção de <strong>"Lojas de Confiança"</strong> antes de atravessar a ponte. É ela que vai garantir que você não caia em golpes.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h4 className="font-black text-blue-900 mb-2 flex items-center uppercase italic">
                <i className="fab fa-whatsapp text-green-500 mr-3"></i> GRUPO NO WHATSAPP
              </h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Fique por dentro do dólar do dia e promoções relâmpago diretamente no seu celular. 
                <a href="#" className="text-green-600 font-bold block mt-2 hover:underline">Entrar no Grupo VIP →</a>
              </p>
            </div>
          </div>

          <button 
            onClick={() => window.location.reload()}
            className="mt-16 text-[10px] text-gray-400 hover:text-blue-900 font-black uppercase tracking-[0.3em] transition"
          >
            ← Voltar para a página inicial
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;

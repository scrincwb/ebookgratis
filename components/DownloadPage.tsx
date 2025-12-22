
import React from 'react';

interface DownloadPageProps {
  userName: string;
}

const DownloadPage: React.FC<DownloadPageProps> = ({ userName }) => {
  return (
    <div className="py-20 px-4 animate-fade-in">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border-t-8 border-yellow-400">
        <div className="mb-6 inline-flex bg-green-100 text-green-600 w-20 h-20 rounded-full items-center justify-center text-4xl">
          <i className="fas fa-check-circle"></i>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">
          Boa, {userName.split(' ')[0]}!
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Seu acesso VIP ao <strong>Guia Diretamente da Fronteira</strong> foi liberado.
        </p>
        
        <div className="bg-gray-50 rounded-2xl p-8 mb-10 border border-dashed border-gray-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-left mb-6 md:mb-0">
              <h3 className="font-bold text-lg text-gray-800">Diretamente da Fronteira (PDF)</h3>
              <p className="text-sm text-gray-500">Versão Atualizada • 52 Páginas</p>
            </div>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert('Iniciando download do seu guia...'); }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center shadow-lg transition transform hover:-translate-y-1"
            >
              <i className="fas fa-file-download mr-3 text-xl"></i>
              BAIXAR AGORA
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-blue-50 p-6 rounded-2xl">
            <h4 className="font-bold text-blue-900 mb-2 flex items-center">
              <i className="fas fa-envelope mr-2"></i> Backup no E-mail
            </h4>
            <p className="text-sm text-blue-800 opacity-80">Uma cópia foi enviada para garantir que você tenha o guia sempre à mão.</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-2xl">
            <h4 className="font-bold text-yellow-900 mb-2 flex items-center">
              <i className="fas fa-users mr-2"></i> Comunidade VIP
            </h4>
            <p className="text-sm text-yellow-800 opacity-80">Entre no nosso grupo e receba a cotação do dólar em tempo real todos os dias.</p>
          </div>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="mt-12 text-gray-400 hover:text-gray-600 font-medium transition"
        >
          Voltar para o site
        </button>
      </div>
    </div>
  );
};

export default DownloadPage;

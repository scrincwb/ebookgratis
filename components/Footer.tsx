
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-800 pb-8 mb-8">
          <div className="flex flex-col items-center md:items-start space-y-4 mb-6 md:mb-0">
            <img 
              src="https://i.imgur.com/T2jVNRX.png" 
              alt="Diretamente da Fronteira Logo" 
              className="h-24 w-auto brightness-110 drop-shadow-xl"
            />
            <span className="text-sm font-bold tracking-widest text-blue-200 uppercase">
              Diretamente da Fronteira
            </span>
          </div>
          <div className="flex space-x-6 text-2xl">
            <a 
              href="https://instagram.com/diretamentedafronteira" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Siga no Instagram"
              className="hover:text-yellow-400 transition transform hover:scale-110"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="https://youtube.com/@diretamentedafronteira" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Inscreva-se no YouTube"
              className="hover:text-yellow-400 transition transform hover:scale-110"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a 
              href="https://tiktok.com/@diretamentedafronteira" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Siga no TikTok"
              className="hover:text-yellow-400 transition transform hover:scale-110"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
          <p>© 2025 Diretamente da Fronteira. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
            <a href="#" className="hover:text-white transition">Parcerias</a>
          </div>
        </div>
        <p className="mt-8 text-center text-[10px] text-blue-400 uppercase tracking-widest font-semibold opacity-60">
          Dicas de quem vive e respira a fronteira todos os dias • @diretamentedafronteira
        </p>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Segurança Total",
      desc: "Aprenda a identificar os 'pirañitas' e evite ser levado para lojas falsas ou perigosas.",
      icon: "fa-user-shield",
      color: "bg-red-500"
    },
    {
      title: "Melhores Lojas",
      desc: "Nissei, Cellshop, Shopping China. Onde comprar eletrônicos e perfumes originais.",
      icon: "fa-store",
      color: "bg-blue-600"
    },
    {
      title: "Como Pagar",
      desc: "PIX, Dinheiro ou Cartão? Saiba como economizar até 6% em taxas bancárias e câmbio.",
      icon: "fa-wallet",
      color: "bg-green-600"
    },
    {
      title: "A Cota de US$ 500",
      desc: "Tudo sobre impostos e fiscalização para você passar pela ponte sem preocupação.",
      icon: "fa-passport",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-4 uppercase italic">O que você vai aprender:</h2>
          <div className="w-24 h-2 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all border border-gray-100">
              <div className={`${f.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                <i className={`fas ${f.icon}`}></i>
              </div>
              <h3 className="text-xl font-black text-blue-950 mb-3 uppercase tracking-tight">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
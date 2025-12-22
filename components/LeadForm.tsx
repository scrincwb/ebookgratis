
import React, { useState } from 'react';
import { UserLead } from '../types';

interface LeadFormProps {
  onSubmit: (data: UserLead) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserLead>({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onSubmit(formData);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div className="text-left">
        <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Seu Nome</label>
        <input
          required
          type="text"
          placeholder="Ex: João Silva"
          className="w-full px-5 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 outline-none transition"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="text-left">
        <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Seu melhor E-mail</label>
        <input
          required
          type="email"
          placeholder="exemplo@email.com"
          className="w-full px-5 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 outline-none transition"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="text-left">
        <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">WhatsApp (com DDD)</label>
        <input
          required
          type="tel"
          placeholder="(00) 00000-0000"
          className="w-full px-5 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 outline-none transition"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-4 rounded-xl font-black text-white text-lg shadow-lg transition-all ${
          isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        } flex items-center justify-center`}
      >
        {isLoading ? (
          <><i className="fas fa-circle-notch fa-spin mr-2"></i> PROCESSANDO...</>
        ) : (
          'QUERO MEU ACESSO GRÁTIS'
        )}
      </button>
      <p className="text-xs text-gray-400 mt-4">
        <i className="fas fa-lock mr-1"></i> Seus dados estão 100% seguros conosco.
      </p>
    </form>
  );
};

export default LeadForm;

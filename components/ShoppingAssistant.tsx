
import React, { useState, useRef, useEffect } from 'react';
import { getShoppingAdvice } from '../services/gemini';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const ShoppingAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Eu sou seu assistente virtual do Paraguai. Qual sua dúvida sobre compras hoje?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setIsTyping(true);

    const aiResponse = await getShoppingAdvice(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[600px] max-w-2xl mx-auto">
      <div className="bg-blue-900 p-6 text-white flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-400 text-blue-900 w-10 h-10 rounded-full flex items-center justify-center">
            <i className="fas fa-robot"></i>
          </div>
          <div>
            <h3 className="font-bold">IA Especialista CDE</h3>
            <p className="text-xs text-blue-200">Online agora</p>
          </div>
        </div>
        <i className="fas fa-ellipsis-v opacity-50"></i>
      </div>

      <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-gray-50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
              m.sender === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none flex space-x-1">
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Ex: Qual a melhor loja de celulares?"
          className="flex-grow px-5 py-3 bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button 
          onClick={handleSend}
          className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition transform hover:scale-105"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default ShoppingAssistant;

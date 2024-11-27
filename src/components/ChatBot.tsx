'use client';
import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const initialMessages = [
  {
    id: 1,
    text: "Olá! Sou o assistente virtual da TechSolutions. Como posso ajudar você hoje?",
    isBot: true,
  }
];

const predefinedResponses = {
  default: "Desculpe, não entendi. Pode reformular sua pergunta?",
  greeting: [
    "Olá! Como posso ajudar você hoje?",
    "Oi! Em que posso ser útil?",
    "Bem-vindo! Como posso auxiliar?"
  ],
  pricing: "Nossos preços variam de acordo com o sistema e suas necessidades específicas. Posso conectar você com nossa equipe comercial?",
  contact: "Você pode nos contatar pelo telefone (44) 98435-5545 ou email contato@techsolutions.com.br",
  systems: "Oferecemos diversos sistemas, incluindo:\n- Sistema de Agendamento\n- PDV\n- CRM\nQual deles te interessa?",
  schedule: "Nosso sistema de agendamento é perfeito para clínicas, salões e profissionais autônomos. Deseja mais informações?",
  pdv: "Nosso PDV é completo, com controle de estoque, relatórios e integração fiscal. Quer saber mais?",
  crm: "O CRM ajuda a gerenciar seus clientes e aumentar suas vendas. Posso mostrar mais detalhes?",
  location: "Estamos localizados em Maria Helena - PR, mas atendemos todo o Brasil remotamente!",
  support: "Oferecemos suporte técnico 24/7 para todos os nossos sistemas. Precisa de ajuda?"
};

const findBestResponse = (input: string): string => {
  const normalizedInput = input.toLowerCase();
  
  if (normalizedInput.match(/(\boi\b|\bolá\b|boa|bem.vindo)/))
    return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
  
  if (normalizedInput.match(/preço|valor|custo|pagamento/))
    return predefinedResponses.pricing;
  
  if (normalizedInput.match(/contato|telefone|email|falar/))
    return predefinedResponses.contact;
  
  if (normalizedInput.match(/sistemas|produtos|serviços/))
    return predefinedResponses.systems;
  
  if (normalizedInput.match(/agendamento|agenda|marcar/))
    return predefinedResponses.schedule;
  
  if (normalizedInput.match(/pdv|venda|caixa/))
    return predefinedResponses.pdv;
  
  if (normalizedInput.match(/crm|cliente|relacionamento/))
    return predefinedResponses.crm;
  
  if (normalizedInput.match(/local|cidade|endereço/))
    return predefinedResponses.location;
  
  if (normalizedInput.match(/suporte|ajuda|problema/))
    return predefinedResponses.support;
  
  return predefinedResponses.default;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Simula tempo de resposta do bot
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findBestResponse(inputText),
        isBot: true,
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botão do chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Janela do chat */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">Atendente Virtual</h3>
              <p className="text-sm opacity-90">TechSolutions</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.isBot ? "flex" : "flex justify-end"
                }`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                )}
                <div
                  className={`px-4 py-2 rounded-lg max-w-[75%] ${
                    message.isBot
                      ? "bg-gray-100"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

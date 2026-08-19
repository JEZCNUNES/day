import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, MessageCircle, Mail, Phone, Calendar } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formType, setFormType] = useState('palestra');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message to official number 5562999958502
    const formattedMsg = `Olá Day! Meu nome é ${name}.%0A*Tipo de Contato:* ${formType.toUpperCase()}%0A*E-mail:* ${email}%0A*Empresa/Evento:* ${company || 'Não informado'}%0A*Mensagem:* ${message}`;
    const waUrl = `https://wa.me/5562999958502?text=${formattedMsg}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#180408] rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#dcbb9d] shadow-2xl relative text-left text-white overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#dcbb9d] mb-1">
                <Sparkles className="w-4 h-4 text-[#dcbb9d]" />
                <span>Vamos Transformar Juntos</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Solicitar Palestra ou Mentoria
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light mt-1">
                Preencha as informações abaixo para alinharmos agenda e proposta personalizada.
              </p>
            </div>

            {/* Type Switcher */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-2xl border border-white/10">
              <button
                type="button"
                onClick={() => setFormType('palestra')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  formType === 'palestra'
                    ? 'bg-[#dcbb9d] text-[#520012] shadow-md'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                Solicitar Palestra
              </button>

              <button
                type="button"
                onClick={() => setFormType('mentoria')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  formType === 'mentoria'
                    ? 'bg-[#dcbb9d] text-[#520012] shadow-md'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                Agendar Mentoria
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">Seu Nome Completo *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Ana Silva"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">WhatsApp / Celular *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(62) 99995-8502"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">Empresa / Nome do Evento</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Ex: Empresa X / Convenção de Vendas 2026"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">Mensagem / Detalhes</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte um pouco sobre o tema de interesse ou data prevista..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] py-3.5 rounded-xl font-bold text-sm shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Solicitação via WhatsApp ((62) 99995-8502)</span>
              </button>
            </form>

          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#dcbb9d] text-[#520012] flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-white">
              Solicitação Direcionada!
            </h3>

            <p className="text-xs sm:text-sm text-white/80 max-w-sm mx-auto font-light">
              Estamos te redirecionando para a conversa oficial no WhatsApp da Daylene Costa ((62) 99995-8502). Caso a aba não tenha aberto automaticamente, clique no botão abaixo.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#dcbb9d] text-[#520012] px-6 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
            >
              Fechar Janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

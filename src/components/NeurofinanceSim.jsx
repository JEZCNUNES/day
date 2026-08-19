import React, { useState } from 'react';
import { Brain, MessageCircle, Send, CheckCircle2, Sparkles, SlidersHorizontal, Radio } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function NeurofinanceSim() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Olá! Sou seu assistente de Neurofinanças. Qual é a sua principal meta financeira ou dúvida hoje?',
      time: '10:00',
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  const quickOptions = [
    'Quero acabar com compras por impulso',
    'Como organizar minhas 3 gavetas?',
    'Quero guardar dinheiro para emergência',
  ];

  const handleSend = (userText) => {
    const textToSend = userText || inputVal;
    if (!textToSend.trim()) return;

    const userMsg = { sender: 'user', text: textToSend, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, userMsg]);

    if (!userText) setInputVal('');

    setTimeout(() => {
      let botReply = 'Perfeito! No método de Neurofinanças da Daylene Costa, interceptamos o impulso de compra usando a Regra das 72h e organizamos seu orçamento diretamente pelo WhatsApp sem planilhas estressantes.';
      
      if (textToSend.includes('impulso')) {
        botReply = 'Excelente escolha! Para barrar compras impulsivas, aplicamos o filtro da dopamina: espere 72h antes de comprar itens não essenciais. Em 70% dos casos, a vontade passa!';
      } else if (textToSend.includes('gavetas')) {
        botReply = 'As 3 Gavetas dividem seu saldo em: 1) Sobrevivência (50%), 2) Futuro (20%) e 3) Estilo de Vida (30%). Tudo controlado via mensagens automáticas no WhatsApp!';
      } else if (textToSend.includes('emergência')) {
        botReply = 'Para criar sua reserva sem sofrer, começamos destando pequenos valores diários automáticos, criando o hábito sem pesar no orçamento mensal.';
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ]);
    }, 600);
  };

  return (
    <section id="neurofinancas" className="py-24 bg-gradient-to-b from-[#180408] via-[#29030b] to-[#180408] text-white relative border-t border-[#dcbb9d]/20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#520012]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal delay={100} className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-semibold uppercase tracking-wider">
            <Brain className="w-4 h-4 text-[#dcbb9d]" />
            <span>Simulação Interativa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Neurofinanças Sem Planilhas no WhatsApp
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
            Experimente como funciona a organização de finanças baseada na psicologia comportamental com respostas instantâneas no seu celular.
          </p>
        </ScrollReveal>

        {/* WhatsApp Chat Interactive Showcase Box */}
        <ScrollReveal delay={250} className="w-full max-w-2xl mx-auto">
          <div className="rounded-3xl border-2 border-[#dcbb9d]/50 bg-[#180408] shadow-2xl overflow-hidden text-left">
            
            {/* Header Chat Bar */}
            <div className="p-4 bg-[#520012] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#dcbb9d] text-[#520012] flex items-center justify-center font-bold font-serif shadow-md">
                  DC
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Robô de Neurofinanças Day Costa</span>
                  <span className="text-[10px] text-[#dcbb9d] flex items-center gap-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Online • Resposta Instantânea
                  </span>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-white/10 text-[10px] text-[#dcbb9d] font-bold uppercase tracking-wider">
                WhatsApp Oficial
              </div>
            </div>

            {/* Chat Body Messages Window */}
            <div className="p-6 space-y-4 min-h-[320px] max-h-[400px] overflow-y-auto bg-gradient-to-b from-[#180408] to-[#29030b]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  <div
                    className={`max-w-[82%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-lg ${
                      msg.sender === 'user'
                        ? 'bg-[#dcbb9d] text-[#520012] font-semibold rounded-br-none'
                        : 'bg-[#520012] text-white border border-[#dcbb9d]/30 rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className={`text-[9px] block text-right mt-1.5 opacity-70 ${msg.sender === 'user' ? 'text-[#520012]' : 'text-[#dcbb9d]'}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Option Buttons */}
            <div className="p-3 bg-[#180408] border-t border-white/10 flex flex-wrap gap-2">
              {quickOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(opt)}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#dcbb9d] text-white hover:text-[#520012] text-[11px] font-semibold transition-all cursor-pointer border border-white/10"
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-4 bg-[#520012]/80 border-t border-white/10 flex items-center gap-3">
              <input
                type="text"
                placeholder="Digite sua dúvida ou escolha uma opção acima..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-grow bg-white/10 border border-[#dcbb9d]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#dcbb9d]"
              />
              <button
                onClick={() => handleSend()}
                className="bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] p-3 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4 fill-[#520012]" />
              </button>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

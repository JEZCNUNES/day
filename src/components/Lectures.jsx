import React from 'react';
import { Mic, Building, CheckCircle2, ArrowRight, Sparkles, Users, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Lectures({ onOpenContact }) {
  const WA_LECTURE_URL = "https://wa.me/5562999958502?text=Ol%C3%A1%20Day!%20Gostaria%20de%20solicitar%20uma%20palestra%20para%20minha%20empresa%20ou%20evento.";

  const lectureTopics = [
    {
      title: 'Alma de Líder: Autoliderança Executiva em Tempos de Mudança',
      description: 'Como preparar gestores para tomarem decisões rápidas sem sobrecarga, delegarem com eficácia e criarem equipes engajadas.',
      tag: 'Liderança & Gestão',
    },
    {
      title: 'Neurofinanças: Como o Cérebro Decide o Dinheiro',
      description: 'Uma imersão comportamental na psicologia do consumo, saúde financeira corporativa e tomada de decisão racional para executivos.',
      tag: 'Finanças Comportamentais',
    },
    {
      title: 'Conexão Mulher: Protagonismo & Autonomia nos Negócios',
      description: 'Palestra motivacional e estratégica voltada para mulheres empreendedoras e executivas que buscam acelerar resultados.',
      tag: 'Desenvolvimento Feminino',
    },
    {
      title: 'Gestão Financeira no Agronegócio: Decisão & Margem no Campo',
      description: 'Palestra customizada para cooperativas e produtores rurais, abordando gestão de risco, safra e inteligência financeira.',
      tag: 'Agronegócio & B2B',
    },
  ];

  return (
    <section id="palestras" className="py-24 bg-[#180408] text-white relative border-t border-[#dcbb9d]/20">
      
      {/* Glow Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#520012]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal delay={100} className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-semibold uppercase tracking-wider">
            <Mic className="w-4 h-4 text-[#dcbb9d]" />
            <span>Eventos & Palestras Corporativas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Palestras Que <span className="font-script text-4xl sm:text-5xl lg:text-6xl font-normal text-[#dcbb9d]">Transformam</span> Equipes
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
            Apresentações de alto impacto presenciais ou online para empresas, convenções de vendas, agronegócio e eventos no Brasil inteiro.
          </p>
        </ScrollReveal>

        {/* 4 Lecture Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lectureTopics.map((topic, idx) => (
            <ScrollReveal key={idx} delay={150 * (idx + 1)}>
              <a
                href={WA_LECTURE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-wine rounded-3xl p-8 border border-[#dcbb9d]/35 hover:border-[#dcbb9d] hover:-translate-y-1.5 transition-all duration-300 shadow-2xl flex flex-col justify-between group text-left h-full cursor-pointer block"
              >
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#dcbb9d]/15 border border-[#dcbb9d]/30 text-[#dcbb9d] text-[10px] font-bold uppercase tracking-wider">
                    {topic.tag}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors leading-snug">
                    {topic.title}
                  </h3>

                  <p className="text-xs text-white/80 font-light leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#dcbb9d] group-hover:text-white transition-colors">
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    <span>Solicitar Esta Palestra via WhatsApp</span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Corporate Callout Banner */}
        <ScrollReveal delay={300} className="w-full">
          <div className="rounded-3xl glass-card-dark p-8 sm:p-12 border border-[#dcbb9d]/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#dcbb9d] uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Formatos Adaptáveis para Sua Empresa</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Precisa de um formato personalizado de 1h a 4h para a sua convenção?
              </h3>

              <p className="text-sm text-white/80 font-light leading-relaxed">
                Entre em contato com nossa equipe para alinhar a pauta exata do seu evento corporativo com Daylene Costa.
              </p>
            </div>

            <a
              href={WA_LECTURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] px-8 py-4 rounded-xl font-bold text-sm shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Orçamento via WhatsApp</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

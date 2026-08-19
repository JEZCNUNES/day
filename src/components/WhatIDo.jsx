import React from 'react';
import { UserCheck, Brain, Mic, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function WhatIDo({ onOpenContact }) {
  const services = [
    {
      id: 'mentoria',
      badge: 'MENTORIA INDIVIDUAL & EXECUTIVA',
      title: 'Alma de Líder',
      subtitle: 'Programa Intensivo de Autoliderança & Gestão Comportamental',
      description: 'Estruturado para gestores, executivos e empreendedoras que sentem a sobrecarga da liderança e desejam alinhar autoridade, tomada de decisão e equilíbrio pessoal.',
      features: [
        '8 Encontros Individuais e Personalizados (Online ou Presencial)',
        'Construção de Plano de Desenvolvimento Individual (PDI)',
        'Desenvolvimento de Comunicação Assertiva & Gestão de Conflitos',
        'Mapeamento de Perfil Comportamental & Neurociência da Liderança',
      ],
      icon: UserCheck,
      waText: 'Ol%C3%A1%20Day!%20Gostaria%20de%20saber%20mais%20e%20agendar%20a%20Mentoria%20Alma%20de%20L%C3%ADder.',
      ctaText: 'Saber Mais / Agendar',
      popular: true,
    },
    {
      id: 'neurofinancas',
      badge: 'FINANÇAS COMPORTAMENTAIS',
      title: 'Método Neurofinanças',
      subtitle: 'Organização Financeira Sem Planilhas no WhatsApp',
      description: 'Uma metodologia disruptiva focada na psicologia dos hábitos financeiros. Chega de sofrer com planilhas que geram ansiedade e nunca são atualizadas.',
      features: [
        'Método de Engenharia das 3 Gavetas (Sobrevivência, Futuro, Estilo de Vida)',
        'Robô de Automação de Gastos direto no seu WhatsApp',
        'Sessões de Alinhamento e Diagnóstico de Traumas Financeiros',
        'Planejamento de Curto, Médio e Longo Prazo sem Privação',
      ],
      icon: Brain,
      waText: 'Ol%C3%A1%20Day!%20Gostaria%20de%20saber%20mais%20e%20organizar%20minhas%20finan%C3%A7as%20com%20o%20M%C3%A9todo%20Neurofinan%C3%A7as.',
      ctaText: 'Saber Mais / Agendar',
      popular: false,
    },
    {
      id: 'palestras',
      badge: 'CORPORATIVO & AGROBUSINESS',
      title: 'Palestras & Eventos B2B',
      subtitle: 'Conteúdo de Alto Impacto para Empresas, Agronegócio e Convenções',
      description: 'Apresentações dinâmicas e transformadoras que conectam neurociência, finanças e liderança com a realidade da sua equipe.',
      features: [
        'Palestra "Alma de Líder": Autoliderança em Tempos de Mudança',
        'Palestra "Neurofinanças": Como a Mente Decide o Dinheiro',
        'Palestra "Conexão Mulher": Protagonismo e Autonomia Feminina',
        'Formatos adaptáveis: 1h a 4h (Presencial em todo o Brasil)',
      ],
      icon: Mic,
      waText: 'Ol%C3%A1%20Day!%20Gostaria%20de%20saber%20mais%20e%20solicitar%20uma%20proposta%20de%20palestra%20B2B.',
      ctaText: 'Saber Mais / Agendar',
      popular: false,
    },
  ];

  return (
    <section id="oque-faco" className="py-24 bg-[#180408] text-white relative border-t border-[#dcbb9d]/20 pt-28 md:pt-36 mt-8">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#520012]/40 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal delay={100} className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-semibold uppercase tracking-wider">
            <span>Soluções sob Medida</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Como Posso Te <span className="font-script text-4xl sm:text-5xl lg:text-6xl font-normal text-[#dcbb9d]">Transformar</span> Hoje
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
            Metodologias validadas pela neurociência e por mais de uma década de atuação prática no mercado financeiro.
          </p>
        </ScrollReveal>

        {/* 3 Core Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const waUrl = `https://wa.me/5562999958502?text=${service.waText}`;

            return (
              <ScrollReveal key={service.id} delay={150 * (idx + 1)}>
                <div
                  className={`rounded-3xl p-8 transition-all duration-500 shadow-2xl flex flex-col justify-between relative group text-left h-full cursor-pointer hover:-translate-y-2 ${
                    service.popular
                      ? 'glass-card-wine border-2 border-[#dcbb9d] shadow-[0_20px_50px_rgba(82,0,18,0.7)]'
                      : 'glass-card-wine border border-[#dcbb9d]/35 hover:border-[#dcbb9d]'
                  }`}
                >
                  {/* Highlight Pill for Popular Service */}
                  {service.popular && (
                    <div className="absolute -top-3.5 right-6 bg-[#dcbb9d] text-[#520012] text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                      MAIS PROCURADA
                    </div>
                  )}

                  <div className="space-y-6">
                    
                    {/* Card Header Icon & Badge */}
                    <div className="space-y-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#dcbb9d]/15 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] group-hover:bg-[#dcbb9d] group-hover:text-[#520012] transition-all duration-300 shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>

                      <span className="text-[10px] font-bold tracking-widest text-[#dcbb9d] uppercase block">
                        {service.badge}
                      </span>

                      <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#dcbb9d]">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-white/80 font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-2 border-t border-white/10">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white/90 font-light">
                          <CheckCircle2 className="w-4 h-4 text-[#dcbb9d] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* CTA Button pointing directly to WhatsApp */}
                  <div className="pt-8 mt-6 border-t border-white/10">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 cursor-pointer shadow-lg ${
                        service.popular
                          ? 'bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012]'
                          : 'bg-white/10 hover:bg-[#dcbb9d] text-white hover:text-[#520012] border border-[#dcbb9d]/40'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

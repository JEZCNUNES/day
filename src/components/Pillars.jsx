import React, { useState } from 'react';
import { Brain, Heart, Sprout, Crown, ShieldCheck, Check, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Pillars({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(0);
  const INSTAGRAM_URL = "https://www.instagram.com/daylene.costa/";

  const pillars = [
    {
      id: 'lideranca',
      title: '1. Alma de Líder & Autoliderança',
      shortLabel: 'Alma de Líder',
      icon: Crown,
      subtitle: 'Mentoria individual de 8 encontros para transitar da operação para a gestão de alta performance.',
      description: 'Liderar exige clareza interior antes de orientar uma equipe. Desenvolvemos o Plano de Desenvolvimento Individual (PDI), delegando tarefas com acompanhamento e reduzindo a ansiedade da tomada de decisão.',
      points: [
        'Diagnóstico de perfil comportamental e mapa de competências',
        'Criação de PDI estruturado para metas de curto e longo prazo',
        'Técnicas de comunicação assertiva e gestão de conflitos',
        'Redução da sobrecarga através da delegação com checkpoints',
      ],
      target: 'Gestores, executivos e empreendedoras com equipes',
      waText: 'Ol%C3%A1%20Day!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Pilar%201%20-%20Alma%20de%20L%C3%ADder.',
      ctaText: 'Saber Mais / Agendar no WhatsApp',
      isInsta: false,
    },
    {
      id: 'neurofinancas',
      title: '2. Neurofinanças & Psicologia dos Hábitos',
      shortLabel: 'Neurofinanças',
      icon: Brain,
      subtitle: 'Organização financeira inteligente no WhatsApp sem planilhas estressantes.',
      description: 'O cérebro busca recompensa imediata. Através da neurociência, estruturamos a Engenharia das 3 Gavetas (Sobrevivência, Futuro, Estilo de Vida) com automação no WhatsApp para acabar com a culpa e a desorganização.',
      points: [
        'Análise da psicologia do consumo e gatilhos de impulso',
        'Implantação do método das 3 gavetas financeiras',
        'Automação de registros diários direto no WhatsApp',
        'Planejamento de reservas de emergência e investimentos',
      ],
      target: 'Pessoas e profissionais que buscam paz financeira sem burocracia',
      waText: 'Ol%C3%A1%20Day!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Pilar%202%20-%20Neurofinan%C3%A7as.',
      ctaText: 'Saber Mais / Agendar no WhatsApp',
      isInsta: false,
    },
    {
      id: 'palestras',
      title: '3. Palestras Corporativas & Agronegócio',
      shortLabel: 'Palestras B2B',
      icon: ShieldCheck,
      subtitle: 'Eventos de alto impacto para convenções, empresas e setor agro no Brasil inteiro.',
      description: 'Leve para a sua convenção de vendas, cooperativa ou empresa palestras dinâmicas sobre autoliderança, neurofinanças e inteligência comportamental com o carisma e a autoridade da ex-Gerente Geral de Banco.',
      points: [
        'Temas customizados para os objetivos estratégicos do evento',
        'Linguagem acessível, prática e sem termos burocráticos',
        'Formatos dinâmicos de 1h a 4h com interação do público',
        'Emissão de material complementar para participantes',
      ],
      target: 'Empresas, cooperativas, agronegócio e organizadores de eventos',
      waText: 'Ol%C3%A1%20Day!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Pilar%203%20-%20Palestras%20B2B.',
      ctaText: 'Saber Mais / Agendar no WhatsApp',
      isInsta: false,
    },
    {
      id: 'conexao-mulher',
      title: '4. Conexão Mulher',
      shortLabel: 'Conexão Mulher',
      icon: Heart,
      subtitle: 'Videocast, Histórias Inspiradoras & Networking Estratégico',
      description: 'Plataforma de conteúdo semanal entrevistando mulheres empreendedoras e líderes, gerando conexões reais, autoridade de mercado e oportunidades de parcerias.',
      points: [
        'Videocast semanal com entrevistas inspiradoras',
        'Coluna semanal sobre liderança e empreendedorismo',
        'Eventos abertos de networking e encontros presenciais',
        'Comunidade de fortalecimento e apoio mútuo',
      ],
      target: 'Mulheres empreendedoras e líderes que constroem a própria prosperidade',
      waText: 'Ol%C3%A1%20Day!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Projeto%20Conex%C3%A3o%20Mulher.',
      ctaText: 'Acompanhar Episódios no Instagram',
      isInsta: true,
    },
    {
      id: 'b2b',
      title: '5. Gestão de Pessoas & Cultura Organizacional',
      shortLabel: 'Gestão de Pessoas',
      icon: Sprout,
      subtitle: 'Consultoria comportamental para alinhar equipes e aumentar a retenção de talentos.',
      description: 'Empresas são feitas de pessoas. Alinhamos a cultura de liderança, reduzimos a rotatividade de funcionários (turnover) e capacitamos os líderes da sua empresa para gerarem resultados consistentes.',
      points: [
        'Treinamento de lideranças intermediárias e diretoria',
        'Mapeamento de clima organizacional e pontos de atrito',
        'Implementação de rotinas de feedback e avaliação de desempenho',
        'Fortalecimento do sentimento de dono e pertencimento',
      ],
      target: 'Diretores de RH, empresários e gestores corporativos',
      waText: 'Ol%C3%A1%20Day!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Pilar%205%20-%20Gest%C3%A3o%20de%20Pessoas.',
      ctaText: 'Saber Mais / Agendar no WhatsApp',
      isInsta: false,
    },
  ];

  const currentPillar = pillars[activeTab];
  const Icon = currentPillar.icon;
  const destinationUrl = currentPillar.isInsta
    ? INSTAGRAM_URL
    : `https://wa.me/5562999958502?text=${currentPillar.waText}`;

  return (
    <section id="pilares" className="py-24 bg-[#180408] text-white relative border-t border-[#dcbb9d]/20">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#520012]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <ScrollReveal delay={100} className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-semibold uppercase tracking-wider">
            <span>Metodologia Comprovada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
            Os 5 Pilares de Atuação da Day Costa
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
            Clique nos pilares abaixo para explorar detalhadamente como cada solução é aplicada na prática.
          </p>
        </ScrollReveal>

        {/* Interactive Pillars Navigation Tabs (Single Horizontal Row with Icons and Short Labels) */}
        <ScrollReveal delay={200} className="w-full">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 sm:gap-3">
            {pillars.map((pillar, idx) => {
              const TabIcon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 ${
                    activeTab === idx
                      ? 'bg-[#dcbb9d] text-[#520012] shadow-[0_10px_25px_rgba(220,187,157,0.4)] scale-105 border-2 border-[#dcbb9d]'
                      : 'glass-card-wine text-white/80 hover:text-white border border-[#dcbb9d]/30 hover:border-[#dcbb9d]'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 shrink-0 ${activeTab === idx ? 'text-[#520012]' : 'text-[#dcbb9d]'}`} />
                  <span>{pillar.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Selected Pillar Content Showcase Card */}
        <ScrollReveal delay={300} className="w-full">
          <div className="rounded-3xl glass-card-wine border-2 border-[#dcbb9d]/50 p-8 sm:p-12 shadow-2xl space-y-8 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#dcbb9d] text-[#520012] flex items-center justify-center font-bold shadow-lg shrink-0">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    {currentPillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#dcbb9d] font-semibold mt-1">
                    {currentPillar.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={destinationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] px-6 py-3.5 rounded-xl font-bold text-xs shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                >
                  {currentPillar.isInsta ? <ExternalLink className="w-4 h-4 text-[#520012]" /> : <MessageCircle className="w-4 h-4 text-[#520012]" />}
                  <span>{currentPillar.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#520012]" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Description & Target */}
              <div className="lg:col-span-6 space-y-6">
                <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                  {currentPillar.description}
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#dcbb9d] tracking-wider block">
                    PÚBLICO-ALVO IDEAL
                  </span>
                  <p className="text-xs text-white/90 font-medium">
                    {currentPillar.target}
                  </p>
                </div>
              </div>

              {/* Key Deliverables / Points */}
              <div className="lg:col-span-6 space-y-3 bg-white/5 p-6 rounded-2xl border border-white/10">
                <span className="text-xs font-bold text-[#dcbb9d] uppercase tracking-wider block mb-2">
                  O QUE ESTÁ INCLUSO NA ENTREGA
                </span>
                {currentPillar.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-white/90 font-light">
                    <Check className="w-4 h-4 text-[#dcbb9d] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

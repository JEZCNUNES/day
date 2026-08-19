import React from 'react';
import { Award, Briefcase, Heart, Sprout, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About({ onOpenContact }) {
  const WA_DAY_URL = "https://wa.me/5562999958502?text=Ol%C3%A1%20Day!%20Li%20sua%20hist%C3%B3ria%20no%20site%20e%20gostaria%20de%20falar%20diretamente%20com%20voc%C3%AA.";

  const highlights = [
    {
      title: '11+ Anos de Experiência Bancária',
      description: 'Carreira construída na linha de frente como Gerente Geral de Banco, decidindo sobre crédito, investimentos e gestão de pessoas.',
      icon: Briefcase,
    },
    {
      title: 'Neurociência Financeira sem Culpa',
      description: 'Abordagem focada no cérebro e na psicologia dos hábitos. Chega de sofrer com planilhas que geram ansiedade.',
      icon: Heart,
    },
    {
      title: 'Mentoria & Escuta Ativa',
      description: 'Metodologias personalizadas sob medida a partir das dores reais da mentorada ou da empresa contratante.',
      icon: Sprout,
    },
    {
      title: 'Formação em Gestão & Coaching',
      description: 'Pós-graduada em Gestão de Pessoas, certificada CPA-20 e Master Coach focada em autoliderança executiva.',
      icon: Award,
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-[#180408] via-[#29030b] to-[#180408] text-white relative border-t border-[#dcbb9d]/20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#520012]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#dcbb9d]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Grid: Single Clean Photo Showcase vs Text Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Tightly & Perfectly Framed Single Photo Showcase (daypc.jpeg) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={150}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Framed Photo with daypc.jpeg */}
                <div className="rounded-3xl overflow-hidden border-2 border-[#dcbb9d]/50 shadow-2xl bg-[#180408] group relative">
                  <img
                    src="/images/daypc-framed.webp"
                    alt="Daylene Costa - Mentora Executiva"
                    className="w-full h-[540px] object-cover object-[center_10%] group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "/images/daypc.webp";
                    }}
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 glass-card-wine p-3 rounded-2xl border border-[#dcbb9d]/50 shadow-xl backdrop-blur-xl z-20">
                    <div className="text-xs font-serif font-bold text-[#dcbb9d] uppercase tracking-wider">
                      Liderança & Finanças
                    </div>
                    <div className="text-[10px] text-white/80 font-light">
                      Transformação Comportamental
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Text Bio & Path */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            <ScrollReveal delay={200} className="w-full">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-semibold uppercase tracking-wider">
                  <span>Quem É Daylene Costa</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                  Uma Trajetória de <span className="font-script text-4xl sm:text-5xl lg:text-6xl font-normal text-[#dcbb9d]">Autoridade</span> e Decisão na Linha de Frente.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="w-full">
              <div className="space-y-4 text-base sm:text-lg text-white/90 font-light leading-relaxed">
                <p>
                  Por mais de 11 anos, atuei no coração do mercado financeiro como <strong className="font-semibold text-[#dcbb9d]">Gerente Geral de Banco</strong>. Diariamente, gerenciei equipes, aprovei operações de crédito complexas, orientei estratégias de investimento e enfrentei os reais desafios da gestão de pessoas e de empresas.
                </p>

                <p className="text-sm sm:text-base text-white/80">
                  Percebi que o maior gargalo das organizações e das pessoas não é a falta de números em planilhas, mas sim a <strong className="text-[#dcbb9d] font-semibold">falta de inteligência emocional, autoliderança e clareza comportamental</strong> para tomar decisões sem sobrecarga nem culpa.
                </p>

                <blockquote className="p-4 rounded-2xl glass-card-wine border-l-4 border-[#dcbb9d] italic text-white/95 text-sm sm:text-base">
                  "Minha missão é simplificar o mercado financeiro e a liderança executiva, oferecendo um espaço seguro de mentoria onde você domina sua carreira e seu dinheiro com paz de espírito."
                </blockquote>
              </div>
            </ScrollReveal>

          </div>

        </div>

        {/* Highlights: 4 Cards in 1 Single Horizontal Row across 4 Columns with ScrollReveal */}
        <div className="pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={100 * (idx + 1)}>
                  <a
                    href={WA_DAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl glass-card-wine border border-[#dcbb9d]/30 hover:border-[#dcbb9d] hover:-translate-y-1.5 transition-all duration-300 shadow-xl group text-left h-full flex flex-col justify-between cursor-pointer block"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-[#dcbb9d]/15 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] group-hover:bg-[#dcbb9d] group-hover:text-[#520012] transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-base font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-white/80 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Centered CTA Button Direct to WhatsApp */}
        <ScrollReveal delay={450} className="w-full flex justify-center pt-4">
          <a
            href={WA_DAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] px-8 py-4 rounded-xl text-sm font-bold shadow-2xl hover:shadow-[0_10px_25px_rgba(220,187,157,0.5)] transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-[#520012]" />
            <span>Falar Diretamente com a Day no WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#520012] group-hover:translate-x-1 transition-transform" />
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
}

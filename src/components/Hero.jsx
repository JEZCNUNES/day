import React from 'react';
import { ArrowRight, Award, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import StatsBar from './StatsBar';

export default function Hero({ onOpenContact }) {
  const WA_MENTORIA_URL = "https://wa.me/5562999958502?text=Ol%C3%A1%20Day!%20Gostaria%20de%20agendar%20uma%20Mentoria%20ou%20Palestra.";
  const WA_INFO_URL = "https://wa.me/5562999958502?text=Ol%C3%A1%20Day!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais.";

  return (
    <section id="inicio" className="relative pt-32 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-gradient-to-b from-[#180408] via-[#520012] to-[#180408] text-white">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-radial from-[#7c0a22]/50 via-[#520012]/30 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#dcbb9d]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#520012]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Copy & Value Proposition with Scroll Reveal */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Pill Badge */}
            <ScrollReveal delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dcbb9d]/15 border border-[#dcbb9d]/35 text-[#dcbb9d] text-xs font-semibold tracking-wide uppercase shadow-lg hover:scale-105 transition-transform duration-300">
                <Award className="w-4 h-4 text-[#dcbb9d]" />
                <span>Mentoria Executiva em Liderança & Finanças Comportamentais</span>
              </div>
            </ScrollReveal>

            {/* Requested Main Headline - Standardized Calligraphy Cursive Font matching Attachment 2 */}
            <ScrollReveal delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18]">
                Transformo a <span className="font-script text-5xl sm:text-6xl lg:text-7xl font-normal text-[#dcbb9d] inline-block px-1">complexidade</span> do mercado financeiro em <span className="font-script text-5xl sm:text-6xl lg:text-7xl font-normal text-[#dcbb9d] inline-block px-1">decisões</span> que mudam vidas.
              </h1>
            </ScrollReveal>

            {/* Subheadline / Positioning */}
            <ScrollReveal delay={300}>
              <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl">
                Com mais de <strong className="font-semibold text-[#dcbb9d]">11 anos de experiência como Gerente Geral no mercado financeiro</strong>, ajudo você e sua empresa a superar a sobrecarga da gestão de pessoas, dominar a autoliderança e organizar finanças sem burocracia através da neurociência.
              </p>
            </ScrollReveal>

            {/* Clear "O Que a Day Costa Faz" Box */}
            <ScrollReveal delay={400} className="w-full">
              <div className="w-full max-w-xl p-5 rounded-2xl glass-card-wine border border-[#dcbb9d]/40 space-y-3 shadow-xl">
                <div className="text-xs uppercase tracking-widest font-bold text-[#dcbb9d] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Como Posso Te Transformar Hoje:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/90">
                  <a href={WA_INFO_URL} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1 hover:border-[#dcbb9d]/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <span className="font-bold text-[#dcbb9d]">1. Alma de Líder</span>
                    <span className="text-[11px] text-white/70">Mentoria individual (8 encontros) para autoliderança e PDI.</span>
                  </a>
                  <a href={WA_INFO_URL} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1 hover:border-[#dcbb9d]/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <span className="font-bold text-[#dcbb9d]">2. Neurofinanças</span>
                    <span className="text-[11px] text-white/70">Organização financeira via robô no WhatsApp (sem planilhas).</span>
                  </a>
                  <a href={WA_INFO_URL} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1 hover:border-[#dcbb9d]/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <span className="font-bold text-[#dcbb9d]">3. Palestras B2B</span>
                    <span className="text-[11px] text-white/70">Eventos para empresas, agronegócio e convenções.</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Photo + Floating Cards + Action Buttons Aligned Exactly with Left Box Bottom */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-start pt-0 space-y-0">
            
            {/* Main Portrait Container */}
            <ScrollReveal delay={250} className="w-full">
              <div className="relative w-full flex justify-center items-start pt-0">
                
                {/* Background Halo Glow */}
                <div className="absolute top-0 inset-x-0 h-[480px] bg-radial from-[#dcbb9d]/25 via-[#520012]/40 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

                {/* Main Transparent PNG Photo of Day Costa */}
                <img
                  src="/images/foto-day.webp"
                  alt="Daylene Costa"
                  className="w-full max-w-[440px] h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] hover:scale-[1.02] transition-transform duration-700 pointer-events-none mt-0"
                  onError={(e) => {
                    e.target.src = "/images/foto-day.webp";
                  }}
                />

                {/* Floating Card 1: Top Right "100% PRÁTICO" */}
                <div className="absolute top-12 right-0 sm:-right-4 glass-card-wine p-3.5 rounded-2xl text-white border border-[#dcbb9d]/50 shadow-2xl max-w-[180px] z-20 animate-float">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#dcbb9d]" />
                    <span className="text-[11px] font-bold tracking-wide uppercase text-[#dcbb9d]">100% PRÁTICO</span>
                  </div>
                  <div className="text-[11px] text-white/90 leading-tight font-light">
                    Resultados reais e aplicáveis no seu dia a dia.
                  </div>
                </div>

                {/* Floating Card 2: Left Side "11+ ANOS NO MERCADO" */}
                <div className="absolute top-[48%] -left-4 sm:-left-8 -translate-y-1/2 glass-card-wine p-3.5 rounded-2xl text-white border border-[#dcbb9d] shadow-2xl max-w-[210px] z-20 flex items-center gap-3 animate-float-reverse">
                  <div className="w-10 h-10 rounded-xl bg-[#dcbb9d] text-[#520012] flex items-center justify-center font-bold text-lg font-serif shrink-0 shadow-md">
                    11+
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white">Anos no Mercado</span>
                    <span className="text-[10px] text-[#dcbb9d] font-light">Experiência Executiva</span>
                  </div>
                </div>

                {/* Raised Quote Card for Daylene Costa */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[92%] sm:w-full max-w-md glass-card-wine p-4 rounded-2xl border border-[#dcbb9d]/60 shadow-2xl text-left z-20 backdrop-blur-2xl hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-[10px] uppercase tracking-widest text-[#dcbb9d] font-bold mb-0.5">
                    ESPECIALISTA EM LIDERANÇA & FINANÇAS
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                    Daylene Costa
                  </div>
                  <div className="text-xs text-white/90 font-light italic mt-1 leading-snug">
                    "Sem burocracia, com neurociência e escuta ativa para o seu crescimento."
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* Action Buttons Container Aligned 100% Horizontally with Bottom Edge of Left Card */}
            <ScrollReveal delay={500} className="w-full max-w-md -mt-6 z-30">
              <div className="w-full flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={WA_MENTORIA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] px-6 py-3.5 rounded-xl text-sm font-bold shadow-2xl hover:shadow-[0_10px_25px_rgba(220,187,157,0.5)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#520012]" />
                  <span>Agendar Mentoria / Palestra</span>
                  <ArrowRight className="w-4 h-4 text-[#520012] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={WA_INFO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-[#dcbb9d] border border-[#dcbb9d]/40 px-5 py-3.5 rounded-xl text-xs font-semibold shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#dcbb9d]" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>

          </div>

        </div>

        {/* STATS BAR INTEGRATED DIRECTLY AT THE BOTTOM OF THE 1st SCREEN / HERO SECTION */}
        <StatsBar />

      </div>
    </section>
  );
}

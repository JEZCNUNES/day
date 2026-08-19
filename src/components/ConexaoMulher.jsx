import React from 'react';
import { Play, ArrowRight, ExternalLink, Calendar, Video, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ConexaoMulher() {
  const INSTAGRAM_URL = "https://www.instagram.com/daylene.costa/";

  return (
    <section id="conexao-mulher" className="py-20 bg-gradient-to-b from-[#180408] via-[#24030a] to-[#180408] text-white relative border-t border-[#dcbb9d]/20 overflow-hidden">
      
      {/* Background Decor Ambient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#520012]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#dcbb9d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Grid: Left Column Text Copy vs Right Column Instagram Video Card Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Official Project Copy & Manifesto */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <ScrollReveal delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-semibold uppercase tracking-wider">
                <Video className="w-4 h-4 text-[#dcbb9d]" />
                <span>Rede de Negócios & Coluna Semanal</span>
              </div>
            </ScrollReveal>

            {/* Requested Main Headline */}
            <ScrollReveal delay={200}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Fortalecendo o protagonismo de mulheres que <span className="font-script text-4xl sm:text-5xl lg:text-6xl font-normal text-[#dcbb9d]">constroem a própria prosperidade.</span>
              </h2>
            </ScrollReveal>

            {/* Block 1: Clean Standardized Quote Box */}
            <ScrollReveal delay={300}>
              <div className="p-6 rounded-2xl glass-card-wine border-l-4 border-[#dcbb9d] shadow-xl">
                <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
                  "O Conexão Mulher nasce para criar uma rede de mulheres de negócios que compartilham experiências, conhecimentos e ideias para fortalecer o crescimento de outras mulheres."
                </p>
              </div>
            </ScrollReveal>

            {/* Block 2: Clean Standardized Callout Box (Fonts 100% Unified) */}
            <ScrollReveal delay={450}>
              <div className="p-6 rounded-2xl glass-card-dark border border-[#dcbb9d]/40 space-y-3 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[#dcbb9d] uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-[#dcbb9d]" />
                  <span>Encontro Marcado Toda Semana</span>
                </div>
                <p className="text-base sm:text-lg text-white/95 font-normal leading-relaxed">
                  "Eu sou Day Costa e, todas as quartas-feiras, um novo episódio espera por você. <span className="text-[#dcbb9d] font-semibold">Seja bem-vinda ao Conexão Mulher!</span>"
                </p>
              </div>
            </ScrollReveal>

            {/* Feature Pills */}
            <ScrollReveal delay={500}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#dcbb9d]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>2 a 5 Minutos</span>
                  </div>
                  <p className="text-[11px] text-white/70">Pílulas semanais com conteúdo direto e prático.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#dcbb9d]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Toda Quarta-Feira</span>
                  </div>
                  <p className="text-[11px] text-white/70">Novo episódio disponível no Instagram e redes.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#dcbb9d]">
                    <Video className="w-3.5 h-3.5" />
                    <span>Rede de Negócios</span>
                  </div>
                  <p className="text-[11px] text-white/70">Troca estratégica e fortalecimento feminino.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Interactive Instagram Reel / Post Mockup with perfil-day.webp in Avatar Circle */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal delay={350} className="w-full max-w-md">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl glass-card-wine border-2 border-[#dcbb9d]/50 p-4 sm:p-5 shadow-[0_20px_50px_rgba(82,0,18,0.7)] hover:border-[#dcbb9d] hover:scale-[1.02] transition-all duration-500 cursor-pointer text-left relative overflow-hidden"
              >
                
                {/* Instagram Post Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-3">
                    
                    {/* User Profile Avatar Circle (perfil-day.webp) */}
                    <div className="w-10 h-10 rounded-full border-2 border-[#dcbb9d] overflow-hidden bg-[#520012] shrink-0 shadow-md">
                      <img
                        src="/images/perfil-day.webp"
                        alt="Daylene Costa Profile"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.src = "/images/perfil-day.webp";
                        }}
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white group-hover:text-[#dcbb9d] transition-colors">
                          daylene.costa
                        </span>
                        <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <span className="text-[10px] text-[#dcbb9d]">Conexão Mulher • Episódio Semanal</span>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold text-[#dcbb9d] bg-[#dcbb9d]/20 px-2.5 py-1 rounded-full border border-[#dcbb9d]/30">
                    SEGUIR
                  </span>
                </div>

                {/* Video / Reel Preview Canvas */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#29030b] border border-[#dcbb9d]/30 flex items-center justify-center group/vid">
                  
                  {/* Conexão Mulher Logo inside Video */}
                  <img
                    src="/images/logo-conexao-mulher.webp"
                    alt="Logo Conexão Mulher"
                    className="w-4/5 h-auto object-contain opacity-80 group-hover/vid:opacity-100 transition-opacity duration-300 drop-shadow-2xl"
                    onError={(e) => {
                      e.target.src = "/images/logo-conexao-mulher.webp";
                    }}
                  />

                  {/* Dark Overlay with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180408] via-transparent to-black/40 opacity-70 group-hover/vid:opacity-50 transition-opacity" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                    <div className="w-16 h-16 rounded-full bg-[#dcbb9d] text-[#520012] flex items-center justify-center shadow-2xl group-hover/vid:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                    <span className="bg-[#520012]/90 backdrop-blur-md text-[#dcbb9d] text-xs font-bold px-4 py-1.5 rounded-full border border-[#dcbb9d]/40 shadow-lg">
                      Assistir no Instagram
                    </span>
                  </div>

                  {/* Live Badge */}
                  <div className="absolute top-3 left-3 bg-[#520012] text-[#dcbb9d] text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-[#dcbb9d]/40 flex items-center gap-1 z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>QUARTAS-FEIRAS</span>
                  </div>
                </div>

                {/* Instagram Post Footer */}
                <div className="pt-3 space-y-2 text-left">
                  <div className="flex items-center justify-between text-white/80">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-rose-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                      </svg>
                      <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </div>
                    <svg className="w-5 h-5 text-[#dcbb9d]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                    </svg>
                  </div>

                  <div className="text-[11px] text-white/90">
                    <span className="font-bold text-[#dcbb9d]">Curtido por centenas de mulheres de negócios</span>
                  </div>

                  <p className="text-[11px] text-white/80 line-clamp-2">
                    <strong className="font-bold text-white">daylene.costa</strong> Toda quarta-feira um novo episódio da coluna Conexão Mulher! 🎙️✨ Liderança, finanças e desenvolvimento sem burocracia.
                  </p>

                  <div className="pt-1 flex items-center justify-between text-xs font-bold text-[#dcbb9d] group-hover:text-white transition-colors">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 fill-current text-[#dcbb9d]" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Ver perfil no Instagram</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

              </a>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}

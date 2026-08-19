import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Users,
  Briefcase,
  Award,
  Video,
  Wine,
  Mic,
  Tv,
  Star,
  Lock,
  Heart,
  Compass,
  ExternalLink,
  MessageSquare,
  Lightbulb,
  KeyRound,
  Handshake,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function EventLandingPage({ onNavigate }) {
  const KIWIFY_URL = "https://pay.kiwify.com.br/lJ9F0Gc";

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    window.open(KIWIFY_URL, '_blank', 'noopener,noreferrer');
  };

  const faqList = [
    {
      q: "Onde será o evento?",
      a: "O evento será realizado no requintado Hotel Bom Fim, localizado em Silvânia/GO, com estrutura confortável e climatizada.",
    },
    {
      q: "Quando acontece?",
      a: "No dia 24 de Outubro, quinta-feira, às 19 horas.",
    },
    {
      q: "Para quem é o evento?",
      a: "O Encontro Conexão Mulher é exclusivo para empreendedoras, empresárias, líderes, gestoras e profissionais que buscam acelerar seus negócios e construir redes estratégicas.",
    },
    {
      q: "O evento terá coquetel?",
      a: "Sim! A programação inclui um coquetel especial com espaço reservado para networking e celebração no encerramento.",
    },
    {
      q: "Onde compro meu ingresso?",
      a: "A compra é realizada de forma 100% segura e online através da plataforma Kiwify com acesso instantâneo.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#180408] text-white font-sans selection:bg-[#dcbb9d] selection:text-[#520012] relative overflow-x-hidden text-left">
      
      {/* ---------------------------------------------------- */}
      {/* MINIMALIST LANDING PAGE HEADER (Logo + CTA only)     */}
      {/* ---------------------------------------------------- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 pb-2 transition-all">
        <div className="max-w-7xl mx-auto rounded-2xl bg-[#180408]/95 backdrop-blur-xl border border-[#dcbb9d]/30 px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl">
          
          {/* Logo Brand */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/images/logo-dc.webp"
              alt="Logo DC Conexão Mulher"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-serif text-sm sm:text-base font-bold text-white tracking-tight leading-none group-hover:text-[#dcbb9d] transition-colors">
                CONEXÃO MULHER
              </span>
              <span className="text-[9px] text-[#dcbb9d] tracking-widest uppercase font-semibold">
                1º Encontro Empresarial
              </span>
            </div>
          </a>

          {/* Direct CTA Header Button */}
          <a
            href={KIWIFY_URL}
            onClick={handleCtaClick}
            className="bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#520012]" />
            <span>Garantir Ingresso</span>
          </a>

        </div>
      </header>

      {/* ---------------------------------------------------- */}
      {/* 1. HERO — PRIMEIRA DOBRA                             */}
      {/* ---------------------------------------------------- */}
      <section className="pt-32 pb-20 sm:pb-28 relative overflow-hidden bg-gradient-to-b from-[#180408] via-[#24030a] to-[#180408]">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#520012]/60 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[#dcbb9d]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Column: Headline & Direct Conversion CTA */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              <ScrollReveal delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dcbb9d]/15 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-bold uppercase tracking-wider shadow-md">
                  <Sparkles className="w-4 h-4 text-[#dcbb9d]" />
                  <span>Vem aí o maior evento feminino da região da Estrada de Ferro</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <img
                  src="/images/1encontro.webp?v=4"
                  alt="1º Encontro Conexão Mulher Logo"
                  className="w-full max-w-xl h-auto object-contain drop-shadow-[0_10px_30px_rgba(220,187,157,0.3)]"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = "/images/logo-conexao-mulher.webp";
                  }}
                />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                  Conhecimento, negócios e conexões para mulheres que querem ir além.
                </p>
              </ScrollReveal>

              {/* Event Info Chips (Visual badges) */}
              <ScrollReveal delay={400}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl glass-card-wine border border-[#dcbb9d]/30 text-left space-y-1">
                    <Calendar className="w-4 h-4 text-[#dcbb9d]" />
                    <span className="text-xs font-bold text-white block">24 OUT</span>
                    <span className="text-[10px] text-[#dcbb9d]">Quinta-Feira</span>
                  </div>

                  <div className="p-3.5 rounded-2xl glass-card-wine border border-[#dcbb9d]/30 text-left space-y-1">
                    <Clock className="w-4 h-4 text-[#dcbb9d]" />
                    <span className="text-xs font-bold text-white block">19H</span>
                    <span className="text-[10px] text-[#dcbb9d]">Início Pontual</span>
                  </div>

                  <div className="p-3.5 rounded-2xl glass-card-wine border border-[#dcbb9d]/30 text-left space-y-1">
                    <MapPin className="w-4 h-4 text-[#dcbb9d]" />
                    <span className="text-xs font-bold text-white block">HOTEL BOM FIM</span>
                    <span className="text-[10px] text-[#dcbb9d]">Estrutura VIP</span>
                  </div>

                  <div className="p-3.5 rounded-2xl glass-card-wine border border-[#dcbb9d]/30 text-left space-y-1">
                    <Compass className="w-4 h-4 text-[#dcbb9d]" />
                    <span className="text-xs font-bold text-white block">SILVÂNIA / GO</span>
                    <span className="text-[10px] text-[#dcbb9d]">Estrada de Ferro</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Outstanding Primary CTA Button */}
              <ScrollReveal delay={500}>
                <div className="pt-4 space-y-3">
                  <a
                    href={KIWIFY_URL}
                    onClick={handleCtaClick}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] font-extrabold text-base sm:text-lg px-8 py-5 rounded-2xl shadow-[0_15px_40px_rgba(220,187,157,0.35)] hover:shadow-[0_20px_50px_rgba(220,187,157,0.5)] transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 text-center"
                  >
                    <span>GARANTIR MEU INGRESSO</span>
                    <ArrowRight className="w-5 h-5 text-[#520012]" />
                  </a>

                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Compra segura via Kiwify • Vagas Limitadas</span>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Hero Right Column: Daylene Costa Portrait Showcase */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={350}>
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#dcbb9d]/40 shadow-[0_25px_60px_rgba(82,0,18,0.8)] aspect-[4/5] bg-[#520012] group">
                  <img
                    src="/images/day-pink-suit.webp"
                    alt="Daylene Costa — 1º Encontro Conexão Mulher"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      e.target.src = "/images/perfil-day.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180408] via-transparent to-black/30 opacity-80" />
                  
                  {/* Floating Badge on Media */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-card-wine border border-[#dcbb9d]/50 space-y-2 text-left shadow-2xl">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#dcbb9d]">
                      <Sparkles className="w-4 h-4 text-[#dcbb9d]" />
                      <span>Com Daylene Costa</span>
                    </div>
                    <p className="text-sm text-white font-serif font-bold leading-snug">
                      Palestrante & Organizadora • Mentoria em Liderança & Finanças Empresariais
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. PROVA VISUAL / EXPERIÊNCIA                        */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-[#180408] relative border-t border-[#dcbb9d]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <ScrollReveal delay={100} className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Uma noite. Novas ideias. Novas conexões.
            </h2>
            <p className="text-base text-white/80 font-light">
              Quatro pilares fundamentais reunidos em uma única experiência transformadora.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <ScrollReveal delay={150}>
              <div className="p-6 rounded-3xl glass-card-wine border border-[#dcbb9d]/35 hover:border-[#dcbb9d] transition-all duration-300 space-y-4 text-center group hover:-translate-y-2 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] mx-auto group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors">
                  CONHECIMENTO
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="p-6 rounded-3xl glass-card-wine border border-[#dcbb9d]/35 hover:border-[#dcbb9d] transition-all duration-300 space-y-4 text-center group hover:-translate-y-2 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] mx-auto group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors">
                  NEGÓCIOS
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="p-6 rounded-3xl glass-card-wine border border-[#dcbb9d]/35 hover:border-[#dcbb9d] transition-all duration-300 space-y-4 text-center group hover:-translate-y-2 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] mx-auto group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors">
                  LIDERANÇA
                </h3>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <div className="p-6 rounded-3xl glass-card-wine border border-[#dcbb9d]/35 hover:border-[#dcbb9d] transition-all duration-300 space-y-4 text-center group hover:-translate-y-2 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] mx-auto group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors">
                  NETWORKING
                </h3>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. VOCÊ PRECISA ESTAR NESSA SALA                     */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-b from-[#180408] via-[#29030b] to-[#180408] relative border-t border-[#dcbb9d]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Composition */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal delay={200}>
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#dcbb9d]/40 shadow-2xl aspect-[16/10] bg-[#520012]">
                  <img
                    src="/images/sala.webp?v=10"
                    alt="Mulheres na sala de palestra do evento Conexão Mulher"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.src = "/images/sala.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180408] via-transparent to-transparent opacity-70" />
                </div>
              </ScrollReveal>
            </div>

            {/* Text Copy & Conversion CTA */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <ScrollReveal delay={100}>
                <span className="text-xs uppercase font-bold tracking-widest text-[#dcbb9d]">
                  AMBIENTE ESTRATÉGICO
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mt-2">
                  Você precisa estar nessa sala.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <p className="text-lg text-white/90 font-light leading-relaxed">
                  Um ambiente criado para aproximar mulheres que empreendem, lideram, tomam decisões e querem crescer.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <div className="pt-2">
                  <a
                    href={KIWIFY_URL}
                    onClick={handleCtaClick}
                    className="inline-flex items-center gap-3 bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <span>QUERO ESTAR LÁ</span>
                    <ArrowRight className="w-5 h-5 text-[#520012]" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. O QUE VOCÊ VAI VIVER (4 Cards Premium)            */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-[#180408] relative border-t border-[#dcbb9d]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          
          <ScrollReveal delay={100} className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#dcbb9d] uppercase tracking-widest">
              PROGRAMAÇÃO COMPLETA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              O que você vai viver
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            {/* Card 1 */}
            <ScrollReveal delay={150}>
              <div className="p-8 rounded-3xl glass-card-wine border border-[#dcbb9d]/40 shadow-xl space-y-4 hover:border-[#dcbb9d] transition-all group h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d]">
                    <Mic className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors">
                    PALESTRA
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    Negócios, liderança e desenvolvimento empresarial.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={250}>
              <div className="p-8 rounded-3xl glass-card-wine border border-[#dcbb9d]/40 shadow-xl space-y-4 hover:border-[#dcbb9d] transition-all group h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d]">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors">
                    NETWORKING
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    Conecte-se com mulheres que também estão construindo seus negócios.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={350}>
              <div className="p-8 rounded-3xl glass-card-wine border border-[#dcbb9d]/40 shadow-xl space-y-4 hover:border-[#dcbb9d] transition-all group h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors">
                    CONEXÕES
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    Troque experiências estratégicas e amplie sua rede de contatos.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4 */}
            <ScrollReveal delay={450}>
              <div className="p-8 rounded-3xl glass-card-wine border border-[#dcbb9d]/40 shadow-xl space-y-4 hover:border-[#dcbb9d] transition-all group h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d]">
                    <Wine className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors">
                    COQUETEL
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    Uma experiência especial e gastronômica para encerrar a noite.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. ESTRUTURA DO EVENTO                               */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-b from-[#180408] via-[#24030a] to-[#180408] relative border-t border-[#dcbb9d]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          
          <ScrollReveal delay={100} className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-bold uppercase tracking-wider">
              <span>ESTRUTURA VIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Uma estrutura preparada para uma grande experiência.
            </h2>
            <div className="pt-2">
              <span className="inline-block bg-[#520012] text-[#dcbb9d] border border-[#dcbb9d]/40 text-sm font-extrabold px-5 py-2 rounded-full shadow-lg">
                AUDITÓRIO PARA ATÉ 150 PESSOAS
              </span>
            </div>
          </ScrollReveal>

          {/* Visual Elements Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { icon: Mic, name: "Palco Moderno" },
              { icon: Tv, name: "Telões de Led" },
              { icon: Sparkles, name: "Audiovisual VIP" },
              { icon: CheckCircle2, name: "Recepção" },
              { icon: Heart, name: "Ambiente Climatizado" },
              { icon: Users, name: "Espaço Networking" },
              { icon: Wine, name: "Coquetel" },
            ].map((item, i) => {
              const IconComp = item.icon;
              return (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2 hover:border-[#dcbb9d]/50 transition-all">
                  <IconComp className="w-5 h-5 text-[#dcbb9d] mx-auto" />
                  <span className="text-xs font-semibold text-white block">{item.name}</span>
                </div>
              );
            })}
          </div>

          <ScrollReveal delay={300} className="pt-4">
            <a
              href={KIWIFY_URL}
              onClick={handleCtaClick}
              className="inline-flex items-center gap-3 bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>GARANTIR MINHA VAGA</span>
              <ArrowRight className="w-5 h-5 text-[#520012]" />
            </a>
          </ScrollReveal>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. PARA QUEM É?                                      */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-[#180408] relative border-t border-[#dcbb9d]/20 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <ScrollReveal delay={100} className="space-y-4">
            <span className="text-xs font-bold text-[#dcbb9d] uppercase tracking-widest">PÚBLICO-ALVO</span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-white tracking-tight">
              Esse encontro é para você.
            </h2>
          </ScrollReveal>

          {/* Big Dynamic Typography Badges (Single Row Fit) */}
          <ScrollReveal delay={250}>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 max-w-full overflow-x-auto py-1 whitespace-nowrap">
              {['EMPREENDEDORA', 'EMPRESÁRIA', 'LÍDER', 'GESTORA', 'PROFISSIONAL'].map((role, idx) => (
                <span
                  key={idx}
                  className="px-3.5 sm:px-4 lg:px-6 py-2.5 sm:py-3.5 rounded-2xl bg-[#520012] text-[#dcbb9d] border-2 border-[#dcbb9d]/50 text-xs sm:text-sm lg:text-base xl:text-lg font-serif font-bold shadow-xl whitespace-nowrap shrink-0 hover:scale-105 transition-transform"
                >
                  {role}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/90 max-w-5xl mx-auto leading-relaxed whitespace-nowrap">
              Se você quer crescer, liderar melhor e construir novas conexões, o seu lugar é aqui.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. DAI COSTA (SEÇÃO DE AUTORIDADE)                   */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-b from-[#180408] via-[#24030a] to-[#180408] relative border-t border-[#dcbb9d]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Photo Column */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={200}>
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#dcbb9d]/40 shadow-2xl aspect-[4/5] bg-[#520012]">
                  <img
                    src="/images/perfil-day.webp"
                    alt="Daylene Costa"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.src = "/images/daypc-framed.webp";
                    }}
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Authority Text Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <ScrollReveal delay={100}>
                <span className="text-xs uppercase font-bold text-[#dcbb9d] tracking-widest">
                  ORGANIZADORA & PALESTRANTE
                </span>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                    Com Day Costa
                  </h2>
                  <a
                    href="https://www.instagram.com/daylene.costa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#dcbb9d]/20 hover:bg-[#dcbb9d] text-[#dcbb9d] hover:text-[#520012] border border-[#dcbb9d]/40 text-xs font-bold transition-all cursor-pointer shadow-md group shrink-0"
                    title="Ver perfil no Instagram @daylene.costa"
                  >
                    <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>@daylene.costa</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                  </a>
                </div>
                <p className="text-base text-[#dcbb9d] font-semibold mt-1">
                  Organizadora e palestrante do 1º Encontro Conexão Mulher
                </p>
              </ScrollReveal>

              {/* Chips */}
              <ScrollReveal delay={250}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['GESTÃO ESTRATÉGICA', 'LIDERANÇA', 'NEGÓCIOS', 'DESENVOLVIMENTO EMPRESARIAL'].map((chip, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full bg-white/10 border border-[#dcbb9d]/40 text-xs font-bold text-white">
                      {chip}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <div className="p-6 rounded-2xl glass-card-wine border-l-4 border-[#dcbb9d] shadow-xl">
                  <p className="text-base text-white/95 font-light leading-relaxed">
                    "Conteúdo baseado na realidade de quem vive os desafios de gerir, liderar e fazer um negócio crescer."
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. BLOCO EMOCIONAL (SCROLL SEQUENCE DE ALTO IMPACTO)  */}
      {/* ---------------------------------------------------- */}
      <section className="py-28 bg-gradient-to-b from-[#180408] via-[#24030a] to-[#180408] relative border-t border-[#dcbb9d]/20 overflow-hidden">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#520012]/30 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10 text-left">
          
          {/* Card 1 */}
          <ScrollReveal delay={100}>
            <div className="p-6 sm:p-8 rounded-3xl glass-card-wine border-l-8 border-l-[#dcbb9d] border-t border-r border-b border-[#dcbb9d]/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-[#dcbb9d] transition-all duration-500 group flex items-center gap-5 sm:gap-7">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] shrink-0 group-hover:scale-110 group-hover:bg-[#dcbb9d] group-hover:text-[#520012] transition-all duration-300 shadow-lg">
                <MessageSquare className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest text-[#dcbb9d] uppercase">01 • PODER DA CONVERSA</span>
                <p className="text-xl sm:text-2xl font-serif text-white/95 font-light leading-snug">
                  Uma <span className="font-bold text-[#dcbb9d]">conversa</span> pode gerar uma <span className="font-bold text-white">parceria extraordinária</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={250}>
            <div className="p-6 sm:p-8 rounded-3xl glass-card-wine border-l-8 border-l-[#dcbb9d] border-t border-r border-b border-[#dcbb9d]/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-[#dcbb9d] transition-all duration-500 group flex items-center gap-5 sm:gap-7">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] shrink-0 group-hover:scale-110 group-hover:bg-[#dcbb9d] group-hover:text-[#520012] transition-all duration-300 shadow-lg">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest text-[#dcbb9d] uppercase">02 • VISÃO ESTRATÉGICA</span>
                <p className="text-xl sm:text-2xl font-serif text-white/95 font-light leading-snug">
                  Uma <span className="font-bold text-[#dcbb9d]">ideia</span> pode mudar uma <span className="font-bold text-white">decisão de negócios</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal delay={350}>
            <div className="p-6 sm:p-8 rounded-3xl glass-card-wine border-l-8 border-l-[#dcbb9d] border-t border-r border-b border-[#dcbb9d]/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-[#dcbb9d] transition-all duration-500 group flex items-center gap-5 sm:gap-7">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] shrink-0 group-hover:scale-110 group-hover:bg-[#dcbb9d] group-hover:text-[#520012] transition-all duration-300 shadow-lg">
                <KeyRound className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest text-[#dcbb9d] uppercase">03 • REDE ESTRATÉGICA</span>
                <p className="text-xl sm:text-2xl font-serif text-white/95 font-light leading-snug">
                  Uma <span className="font-bold text-[#dcbb9d]">conexão</span> pode abrir uma <span className="font-bold text-white">nova porta no mercado</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Grand Climax Card */}
          <ScrollReveal delay={450}>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#520012] via-[#7c0a22] to-[#520012] border-2 border-[#dcbb9d] shadow-[0_20px_60px_rgba(82,0,18,0.8)] space-y-8 text-center relative overflow-hidden group">
              <div className="w-16 h-16 rounded-2xl bg-[#dcbb9d] text-[#520012] flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 fill-current" />
              </div>

              <h3 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#dcbb9d] tracking-tight leading-tight">
                Tudo pode começar em uma única noite.
              </h3>

              <div className="pt-2">
                <a
                  href={KIWIFY_URL}
                  onClick={handleCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] font-extrabold text-base sm:text-lg px-9 py-5 rounded-2xl shadow-[0_15px_40px_rgba(220,187,157,0.4)] hover:shadow-[0_20px_50px_rgba(220,187,157,0.6)] transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 text-center"
                >
                  <span>EU QUERO VIVER ESSA EXPERIÊNCIA</span>
                  <ArrowRight className="w-5 h-5 text-[#520012]" />
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 9. EXPERIÊNCIA DO EVENTO (TIMELINE)                  */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-b from-[#180408] via-[#24030a] to-[#180408] relative border-t border-[#dcbb9d]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal delay={100} className="space-y-3">
            <span className="text-xs font-bold text-[#dcbb9d] uppercase tracking-widest">CRONOGRAMA DA NOITE</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Experiência do Evento
            </h2>
          </ScrollReveal>

          {/* Timeline Grid with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-5 text-center">
            {[
              { step: "01", title: "RECEPÇÃO", icon: CheckCircle2 },
              { step: "02", title: "CONEXÕES", icon: Handshake },
              { step: "03", title: "PALESTRA", icon: Mic },
              { step: "04", title: "NETWORKING", icon: Users },
              { step: "05", title: "COQUETEL", icon: Wine },
            ].map((item, i) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal key={i} delay={150 + i * 100}>
                  <div className="p-6 rounded-3xl glass-card-wine border border-[#dcbb9d]/40 shadow-xl space-y-4 relative group hover:border-[#dcbb9d] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] group-hover:scale-110 group-hover:bg-[#dcbb9d] group-hover:text-[#520012] transition-all duration-300 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-2xl font-serif font-extrabold text-[#dcbb9d] block">
                        {item.step}
                      </span>
                      <h4 className="text-sm font-bold tracking-wider text-white group-hover:text-[#dcbb9d] transition-colors uppercase">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 10. BLOCO FORTE DE VENDA (ESCASSEZ & CONTRASTE)       */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-[#520012] relative border-t-2 border-b-2 border-[#dcbb9d] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <ScrollReveal delay={100} className="space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#dcbb9d] text-[#520012] font-extrabold text-xs uppercase tracking-wider inline-block">
              VAGAS ESTRITAMENTE LIMITADAS
            </span>
            <h2 className="text-5xl sm:text-7xl font-serif font-extrabold text-white tracking-tight">
              150 lugares.
            </h2>
            <p className="text-lg sm:text-xl text-[#dcbb9d] font-light max-w-2xl mx-auto">
              Uma noite que pode gerar conexões para muito além dela.
            </p>
          </ScrollReveal>

          {/* Venue Photo Showcase (Hotel Bom Fim Facade + Auditorium) */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto pt-2 text-left">
              
              {/* Photo 1: Hotel Bom Fim Facade */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#dcbb9d]/50 shadow-2xl aspect-[16/10] bg-[#180408] group">
                <img
                  src="/images/hotel-bomfim-fachada.webp?v=2"
                  alt="Fachada do Hotel Bom Fim em Silvânia/GO"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = "/images/hotel-bomfim-fachada.webp";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180408] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-bold text-[#dcbb9d]">
                  <span>🏨 FACHADA HOTEL BOM FIM</span>
                  <span className="text-[10px] bg-[#520012]/90 px-2 py-0.5 rounded border border-[#dcbb9d]/40 text-white">SILVÂNIA / GO</span>
                </div>
              </div>

              {/* Photo 2: Climatized Auditorium */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#dcbb9d]/50 shadow-2xl aspect-[16/10] bg-[#180408] group">
                <img
                  src="/images/auditorio-bomfim.webp?v=2"
                  alt="Auditório Climatizado do Hotel Bom Fim"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = "/images/auditorio-bomfim.webp";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180408] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-bold text-[#dcbb9d]">
                  <span>🎙️ AUDITÓRIO PARA 150 PESSOAS</span>
                  <span className="text-[10px] bg-[#520012]/90 px-2 py-0.5 rounded border border-[#dcbb9d]/40 text-white">ESTRUTURA VIP</span>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Event Details Summary */}
          <ScrollReveal delay={250}>
            <div className="p-6 rounded-2xl bg-[#180408]/80 border border-[#dcbb9d]/40 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-white">
              <span>📅 24 DE OUTUBRO</span>
              <span>•</span>
              <span>⏰ 19 HORAS</span>
              <span>•</span>
              <span>📍 HOTEL BOM FIM (SILVÂNIA — GO)</span>
            </div>
          </ScrollReveal>

          {/* Big CTA */}
          <ScrollReveal delay={350} className="space-y-3 pt-2">
            <a
              href={KIWIFY_URL}
              onClick={handleCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] font-extrabold text-lg sm:text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>GARANTIR MEU INGRESSO</span>
              <ArrowRight className="w-6 h-6 text-[#520012]" />
            </a>

            <p className="text-xs text-[#dcbb9d] flex items-center justify-center gap-1.5 pt-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Compra realizada com segurança pela Kiwify.</span>
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 11. FAQ (PERGUNTAS FREQUENTES COMPACTAS)              */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 bg-[#180408] relative border-t border-[#dcbb9d]/20 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <ScrollReveal delay={100} className="text-center space-y-3">
            <span className="text-xs font-bold text-[#dcbb9d] uppercase tracking-widest">TIRA-DÚVIDAS</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Perguntas Frequentes
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <ScrollReveal key={idx} delay={150 + idx * 50}>
                <div className="rounded-2xl glass-card-wine border border-[#dcbb9d]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 cursor-pointer hover:text-[#dcbb9d] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#dcbb9d] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/80 leading-relaxed border-t border-white/10 space-y-3">
                      <p>{faq.a}</p>
                      <div>
                        <a
                          href={KIWIFY_URL}
                          onClick={handleCtaClick}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#dcbb9d] hover:underline"
                        >
                          <span>GARANTIR INGRESSO</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 12. SEÇÃO FINAL (GRAND FINALE)                       */}
      {/* ---------------------------------------------------- */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#180408] to-[#29030b] text-center border-t border-[#dcbb9d]/20">
        
        {/* Background Visual (Toast / Cocktail Photo with low opacity) */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img
            src="/images/coquetel-cheers.webp"
            alt="Brinde Conexão Mulher"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#180408] via-[#180408]/80 to-[#180408]/90" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <ScrollReveal delay={100} className="space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
              O próximo contato importante para o seu negócio pode estar nessa sala.
            </h2>

            <div className="pt-2">
              <span className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#dcbb9d] bg-[#520012] px-6 py-2 rounded-full border border-[#dcbb9d]/40 inline-block shadow-lg">
                1º ENCONTRO CONEXÃO MULHER • 24 OUT • 19H • SILVÂNIA
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250} className="pt-4">
            <a
              href={KIWIFY_URL}
              onClick={handleCtaClick}
              className="inline-flex items-center gap-3 bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] font-extrabold text-lg sm:text-xl px-10 py-5 rounded-2xl shadow-[0_20px_50px_rgba(220,187,157,0.4)] transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>QUERO GARANTIR MINHA PARTICIPAÇÃO</span>
              <ArrowRight className="w-6 h-6 text-[#520012]" />
            </a>
          </ScrollReveal>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* STICKY FLOATING MOBILE CTA BAR                       */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#180408]/95 backdrop-blur-xl border-t border-[#dcbb9d]/40 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <a
          href={KIWIFY_URL}
          onClick={handleCtaClick}
          className="w-full bg-[#dcbb9d] text-[#520012] font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-[#520012]" />
          <span>GARANTIR MEU INGRESSO</span>
        </a>
      </div>

    </div>
  );
}

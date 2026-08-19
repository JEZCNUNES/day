import React from 'react';
import { Star, Quote, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mariana Silveira',
      role: 'Gerente Regional & Mentorada Alma de Líder',
      content: 'A mentoria com a Day mudou completamente minha forma de gerenciar conflitos na equipe. Ela fala a língua de quem vive a pressão do mercado financeiro e corporativo no dia a dia.',
      stars: 5,
    },
    {
      name: 'Carlos Eduardo Mendes',
      role: 'Empresário do Setor de Logística',
      content: 'As Neurofinanças aplicadas pela Day organizaram o caixa da minha empresa e minha vida pessoal sem precisar ficar horas alimentando planilhas complexas. Método prático e libertador.',
      stars: 5,
    },
    {
      name: 'Patrícia Alcantara',
      role: 'Diretora de RH & Contratante de Palestra B2B',
      content: 'Levar a Daylene para a nossa convenção de liderança foi a melhor decisão. O carisma dela e o domínio sobre neurociência e gestão impactaram profundamente nossos diretores e gerentes.',
      stars: 5,
    },
    {
      name: 'Juliana Costa e Silva',
      role: 'Empreendedora da Rede Conexão Mulher',
      content: 'Os episódios do Conexão Mulher e a mentoria da Day me deram a clareza que eu precisava para delegar com segurança e focar na expansão do meu negócio familiar.',
      stars: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#180408] text-white relative border-t border-[#dcbb9d]/20">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#520012]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header - Enforced Single Line on Desktop */}
        <ScrollReveal delay={100} className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-semibold uppercase tracking-wider">
            <Quote className="w-4 h-4 text-[#dcbb9d]" />
            <span>Depoimentos & Casos Reais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
            O que dizem sobre a experiência com a Day
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
            Relatos de executivos, mentoradas e diretores que transformaram sua liderança e vida financeira.
          </p>
        </ScrollReveal>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <ScrollReveal key={idx} delay={150 * (idx + 1)}>
              <div
                className="glass-card-wine rounded-3xl p-6 border border-[#dcbb9d]/35 hover:border-[#dcbb9d] hover:-translate-y-1.5 transition-all duration-300 shadow-2xl flex flex-col justify-between group text-left h-full cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Stars Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#dcbb9d] text-[#dcbb9d]" />
                    ))}
                  </div>

                  <p className="text-xs text-white/90 font-light leading-relaxed italic">
                    "{item.content}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] font-bold text-xs font-serif shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white group-hover:text-[#dcbb9d] transition-colors">{item.name}</span>
                    <span className="text-[10px] text-[#dcbb9d] line-clamp-1">{item.role}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

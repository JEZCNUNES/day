import React from 'react';
import { Briefcase, Building, Award, GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function StatsBar() {
  const credentials = [
    {
      icon: Briefcase,
      stat: '11+ Anos',
      label: 'Experiência de Mercado',
      subtext: 'Linha de frente em Gestão Bancária',
    },
    {
      icon: Building,
      stat: 'Ex-Gerente',
      label: 'Geral de Instituição',
      subtext: 'Liderança de equipes & Operações',
    },
    {
      icon: Award,
      stat: 'CPA-20',
      label: 'Certificação ANBIMA',
      subtext: 'Especialista em Mercado Financeiro',
    },
    {
      icon: GraduationCap,
      stat: 'Pós & Coach',
      label: 'Gestão de Pessoas & Coaching',
      subtext: 'Especialista em Autoliderança Executiva',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <ScrollReveal delay={550}>
        <div className="p-6 sm:p-8 rounded-3xl glass-card-wine border-2 border-[#dcbb9d]/50 shadow-2xl bg-[#3b000d]/90 backdrop-blur-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 divide-y sm:divide-y-0 lg:divide-x divide-white/15">
            {credentials.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`pt-4 sm:pt-0 ${idx !== 0 ? 'lg:pl-6' : ''} flex items-center gap-4 text-left group hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
                >
                  <div className="w-13 h-13 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] shrink-0 group-hover:bg-[#dcbb9d] group-hover:text-[#520012] transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors leading-tight">
                      {item.stat}
                    </div>
                    <div className="text-xs font-bold text-[#dcbb9d] leading-tight">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-white/80 font-light leading-tight">
                      {item.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

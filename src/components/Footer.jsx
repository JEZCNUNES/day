import React from 'react';
import { Sparkles, MessageCircle, Mail, MapPin, ArrowUp, Heart, BookOpen } from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer({ onOpenContact, onNavigate }) {
  const WA_URL = "https://wa.me/5562999958502?text=Ol%C3%A1%20Day!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais.";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href === '/blog') {
      if (onNavigate) onNavigate('/blog');
      else window.location.href = '/blog';
      return;
    }
    if (href === '/') {
      if (onNavigate) onNavigate('/');
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (onNavigate) onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <footer className="bg-[#180408] text-white pt-20 pb-12 border-t border-[#dcbb9d]/30 relative text-left">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#520012]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo-dc.webp" 
                alt="Logo Daylene Costa - DC" 
                className="h-12 w-auto object-contain drop-shadow-md"
                onError={(e) => {
                  e.target.src = "/images/logo-dc.webp";
                }}
              />
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl font-bold text-white tracking-tight">DAYLENE COSTA</span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#dcbb9d]">Liderança & Finanças Comportamentais</span>
              </div>
            </div>

            <p className="text-sm text-white/80 font-light leading-relaxed max-w-md">
              Transformando a complexidade do mercado financeiro em decisões práticas que geram prosperidade, autoliderança e resultados executivos reais.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/daylene.costa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#dcbb9d] hover:text-[#520012] text-[#dcbb9d] flex items-center justify-center transition-all duration-300 border border-white/10 cursor-pointer"
                title="Instagram @daylene.costa"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#dcbb9d] hover:text-[#520012] text-[#dcbb9d] flex items-center justify-center transition-all duration-300 border border-white/10 cursor-pointer"
                title="WhatsApp Oficial (62) 99995-8502"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-bold text-[#dcbb9d] uppercase tracking-wider">Navegação Principal</h4>
            <ul className="space-y-2 text-xs text-white/80 font-light">
              <li>
                <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="hover:text-[#dcbb9d] transition-colors cursor-pointer">Início</a>
              </li>
              <li>
                <a href="/#conexao-mulher" onClick={(e) => handleLinkClick(e, '/#conexao-mulher')} className="hover:text-[#dcbb9d] transition-colors cursor-pointer">Conexão Mulher</a>
              </li>
              <li>
                <a href="/#oque-faco" onClick={(e) => handleLinkClick(e, '/#oque-faco')} className="hover:text-[#dcbb9d] transition-colors cursor-pointer">O Que Eu Faço</a>
              </li>
              <li>
                <a href="/#sobre" onClick={(e) => handleLinkClick(e, '/#sobre')} className="hover:text-[#dcbb9d] transition-colors cursor-pointer">Sobre Mim</a>
              </li>
              <li>
                <a href="/#pilares" onClick={(e) => handleLinkClick(e, '/#pilares')} className="hover:text-[#dcbb9d] transition-colors cursor-pointer">Os 5 Pilares de Atuação</a>
              </li>
              <li>
                <a href="/blog" onClick={(e) => handleLinkClick(e, '/blog')} className="hover:text-[#dcbb9d] transition-colors font-bold text-[#dcbb9d] cursor-pointer flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Blog & Artigos (/blog)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-serif font-bold text-[#dcbb9d] uppercase tracking-wider">Contato & Atendimento</h4>
            <div className="space-y-3 text-xs text-white/80 font-light">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#dcbb9d] shrink-0 mt-0.5" />
                <span>daylenefinancas@gmail.com</span>
              </div>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#dcbb9d] transition-colors cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 text-[#dcbb9d] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>(62) 99995-8502 • Atendimento via WhatsApp</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#dcbb9d] shrink-0 mt-0.5" />
                <span>Atendimento Online em Todo o Brasil & Palestras Presenciais</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] py-3 rounded-xl font-bold text-xs shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar Palestra ou Mentoria</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-light">
          <p>© {new Date().getFullYear()} Daylene Costa. Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#dcbb9d] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 text-[#dcbb9d]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

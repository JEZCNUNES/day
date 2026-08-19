import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MessageCircle, ChevronRight, BookOpen } from 'lucide-react';

export default function Navbar({ onOpenContact, onNavigate, currentPath = '/' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const WA_URL = "https://wa.me/5562999958502?text=Ol%C3%A1%20Day!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais.";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Conexão Mulher', href: '/#conexao-mulher' },
    { name: '5 Pilares', href: '/#pilares' },
    { name: 'Sobre Mim', href: '/#sobre' },
    { name: 'Palestras', href: '/#palestras' },
    { name: 'Blog', href: '/blog', isSpecial: true },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '/blog') {
      onNavigate('/blog');
      return;
    }

    if (href === '/') {
      if (currentPath !== '/') {
        onNavigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 transition-all duration-300">
      <nav className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border overflow-hidden ${
        scrolled 
          ? 'bg-[#520012]/95 backdrop-blur-xl shadow-2xl border-[#dcbb9d]/40 py-2.5 px-4 sm:px-6 text-white' 
          : 'bg-[#180408]/90 backdrop-blur-md border-[#dcbb9d]/25 py-3 px-4 sm:px-6 text-white'
      }`}>
        <div className="flex items-center justify-between gap-2 xl:gap-4">
          
          {/* Official DC Logo Image & Name */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2.5 group cursor-pointer shrink-0 whitespace-nowrap"
          >
            <img 
              src="/images/logo-dc.webp" 
              alt="Logo Daylene Costa - DC" 
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              onError={(e) => {
                e.target.src = "/images/logo-dc.webp";
              }}
            />
            <div className="flex flex-col text-left">
              <span className="font-serif text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-[#dcbb9d] transition-colors leading-tight whitespace-nowrap">
                DAYLENE COSTA
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-widest uppercase font-semibold text-[#dcbb9d] whitespace-nowrap hidden sm:inline">
                Liderança & Finanças Comportamentais
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-3 xl:gap-4 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs font-semibold transition-all duration-200 cursor-pointer relative py-1 whitespace-nowrap shrink-0 ${
                  link.isSpecial
                    ? 'px-3 py-1.5 rounded-full bg-[#dcbb9d] text-[#520012] font-bold hover:bg-[#e4c9b0] shadow-md flex items-center gap-1.5'
                    : 'text-white/90 hover:text-[#dcbb9d] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#dcbb9d] hover:after:w-full after:transition-all'
                }`}
              >
                {link.isSpecial && <BookOpen className="w-3.5 h-3.5 text-[#520012]" />}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-[#dcbb9d]/40 text-[#dcbb9d] hover:bg-[#dcbb9d]/15 transition-all duration-200 flex items-center justify-center shrink-0 cursor-pointer"
              title="Falar no WhatsApp (62) 99995-8502"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenContact}
              className="bg-[#520012] hover:bg-[#7c0a22] text-[#dcbb9d] border border-[#dcbb9d]/50 font-bold text-xs px-3.5 py-2 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex items-center gap-1.5 group hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#dcbb9d] group-hover:rotate-12 transition-transform shrink-0" />
              <span className="whitespace-nowrap">Solicitar Palestra</span>
            </button>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-[#dcbb9d] hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
            aria-label="Alternar menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#dcbb9d]" />
            ) : (
              <Menu className="w-6 h-6 text-[#dcbb9d]" />
            )}
          </button>
        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-[#dcbb9d]/30 flex flex-col gap-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium py-2 px-3 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center justify-between whitespace-nowrap"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#dcbb9d]" />
              </a>
            ))}
            <div className="pt-2 border-t border-[#dcbb9d]/20 flex flex-col gap-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#dcbb9d]/20 text-[#dcbb9d] font-bold text-sm py-2.5 rounded-xl border border-[#dcbb9d]/40 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: (62) 99995-8502</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-[#520012] text-[#dcbb9d] font-bold text-sm py-2.5 rounded-xl border border-[#dcbb9d]/40 shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar Palestra</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

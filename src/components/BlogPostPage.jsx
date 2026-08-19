import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Share2, MessageCircle, Copy, Check, Sparkles, User, BookOpen, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage({ slug, onNavigate, onOpenContact }) {
  const [copied, setCopied] = useState(false);

  const WA_ARTICLE_URL = "https://wa.me/5562999958502?text=Ol%C3%A1%20Day!%20Li%20seu%20artigo%20no%20blog%20e%20gostaria%20de%20agendar%20uma%20mentoria%20ou%20palestra.";

  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  const relatedPosts = blogPosts.filter((p) => post.relatedSlugs?.includes(p.slug) || p.slug !== post.slug).slice(0, 2);

  const shareUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`Confira este artigo incrível da Daylene Costa: "${post.title}"\n${shareUrl}`);
    window.open(`https://api.whatsapp.com/send/?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-24 bg-[#180408] text-white min-h-screen text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#dcbb9d]">
          <button onClick={() => onNavigate('/')} className="hover:underline cursor-pointer">
            Início
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('/blog')} className="hover:underline cursor-pointer">
            Blog
          </button>
          <span>/</span>
          <span className="text-white font-bold truncate max-w-xs">{post.title}</span>
        </div>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-bold uppercase tracking-wider">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author & Date Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl glass-card-wine border border-[#dcbb9d]/30">
            <div className="flex items-center gap-3">
              <img src="/images/perfil-day.webp" alt="Daylene Costa" className="w-11 h-11 rounded-full object-cover bg-[#180408] border border-[#dcbb9d]" onError={(e) => { e.target.src = "/images/perfil-day.webp"; }} />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">{post.author?.name || 'Daylene Costa'}</span>
                <span className="text-xs text-[#dcbb9d]">{post.author?.role || 'Mentora Executiva'}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#dcbb9d]" />
                <span>{post.publishedAt}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#dcbb9d]" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </header>

        {/* Cover Image with Dynamic Framing Fit (Foco no Rosto / Sem Corte) */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#dcbb9d]/40 shadow-2xl aspect-[16/9] bg-[#520012] relative">
          {post.coverFit === 'object-contain' && (
            <img src={post.coverImage} alt="Blur Fill" className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40" />
          )}
          <img
            src={post.coverImage}
            alt={post.title}
            className={`w-full h-full relative z-10 ${
              post.coverFit === 'object-contain'
                ? 'object-contain'
                : post.coverFit === 'object-center'
                ? 'object-cover object-center'
                : 'object-cover object-top'
            }`}
          />
        </div>

        {/* TL;DR Direct Answer Block */}
        {post.tldr && (
          <div className="p-6 rounded-2xl glass-card-wine border-l-4 border-[#dcbb9d] space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#dcbb9d] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#dcbb9d]" />
              <span>Resumo Executivo (TL;DR)</span>
            </div>
            <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed italic">
              "{post.tldr}"
            </p>
          </div>
        )}

        {/* Article Body Content */}
        <article
          className="prose prose-invert max-w-none space-y-6 text-base text-white/90 font-light leading-relaxed border-b border-white/10 pb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Social Share Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-xs font-bold text-[#dcbb9d] uppercase tracking-wider flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            <span>Compartilhar este artigo:</span>
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShareWhatsApp}
              className="px-4 py-2 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 text-white border border-emerald-500/40 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#dcbb9d]" />}
              <span>{copied ? 'Link Copiado!' : 'Copiar Link'}</span>
            </button>
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card-wine border border-[#dcbb9d]/50 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
          <img src="/images/perfil-day.webp" alt="Daylene Costa" className="w-24 h-24 rounded-full object-cover border-2 border-[#dcbb9d] shadow-lg shrink-0" onError={(e) => { e.target.src = "/images/perfil-day.webp"; }} />
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold text-[#dcbb9d] uppercase tracking-wider">Sobre a Autora</span>
            <h3 className="text-xl font-serif font-bold text-white">Daylene Costa</h3>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              Especialista no mercado financeiro com 11+ anos de experiência como Gerente Geral de Banco, pós-graduada em Gestão de Pessoas, certificada CPA-20 e Master Coach de Autoliderança Executiva.
            </p>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6">
            <h3 className="text-2xl font-serif font-bold text-white">Recomendados para Você</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onNavigate(`/blog/${rel.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="glass-card-wine p-6 rounded-2xl border border-[#dcbb9d]/35 hover:border-[#dcbb9d] transition-all cursor-pointer space-y-3 group text-left"
                >
                  <span className="text-[10px] uppercase font-bold text-[#dcbb9d] tracking-wider">{rel.category}</span>
                  <h4 className="text-lg font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors leading-snug line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-2">{rel.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA to Schedule Mentorship directly via WhatsApp */}
        <div className="rounded-3xl glass-card-dark p-8 border border-[#dcbb9d]/50 text-center space-y-4 shadow-2xl">
          <h3 className="text-2xl font-serif font-bold text-white">Pronta para transformar sua gestão e finanças?</h3>
          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Agende uma sessão estratégica de mentoria individual ou solicite uma palestra para sua empresa diretamente no WhatsApp.
          </p>
          <a
            href={WA_ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#dcbb9d] text-[#520012] hover:bg-[#e4c9b0] px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all cursor-pointer hover:scale-105 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#520012]" />
            <span>Agendar Mentoria / Palestra no WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#520012]" />
          </a>
        </div>

      </div>
    </div>
  );
}

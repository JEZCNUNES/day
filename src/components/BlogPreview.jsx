import React from 'react';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import ScrollReveal from './ScrollReveal';

export default function BlogPreview({ onNavigate }) {
  const posts = blogPosts.slice(0, 3);

  return (
    <section id="blog-preview" className="py-24 bg-gradient-to-b from-[#180408] via-[#29030b] to-[#180408] text-white relative border-t border-[#dcbb9d]/20 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#520012]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal delay={100} className="w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-white/10 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#dcbb9d]" />
                <span>Artigos & Conteúdo Estratégico</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                Blog da Daylene Costa
              </h2>

              <p className="text-base text-white/80 font-light leading-relaxed">
                Reflexões sobre autoliderança, neurofinanças, gestão de pessoas e inteligência comportamental escritas por quem viveu 11+ anos na linha de frente do mercado financeiro.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/blog')}
              className="self-start md:self-auto bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 shrink-0"
            >
              <span>Ver Todos os Artigos (/blog)</span>
              <ArrowRight className="w-4 h-4 text-[#520012]" />
            </button>
          </div>
        </ScrollReveal>

        {/* 3 Featured Blog Cards Grid with ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {posts.map((post, idx) => (
            <ScrollReveal key={post.id} delay={150 * (idx + 1)}>
              <article
                onClick={() => onNavigate(`/blog/${post.slug}`)}
                className="glass-card-wine rounded-3xl overflow-hidden border border-[#dcbb9d]/35 shadow-2xl flex flex-col justify-between group hover:border-[#dcbb9d] hover:-translate-y-2 transition-all duration-500 cursor-pointer text-left h-full"
              >
                <div>
                  {/* Image Cover */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#520012]">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#520012]/90 backdrop-blur-md text-[#dcbb9d] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#dcbb9d]/40">
                      {post.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-[#dcbb9d]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.publishedAt}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-white/80 font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between text-xs font-bold text-[#dcbb9d] group-hover:text-white transition-colors">
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

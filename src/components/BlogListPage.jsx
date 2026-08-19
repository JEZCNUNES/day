import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Clock, Calendar, ArrowRight, ArrowLeft, Filter, Sparkles, User, Tag, MessageCircle } from 'lucide-react';
import { blogPosts as localBlogPosts } from '../data/blogPosts';
import { isSupabaseConfigured, fetchBlogPostsFromSupabase } from '../lib/supabaseClient';

export default function BlogListPage({ onNavigate, onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('day_blog_posts');
    return saved ? JSON.parse(saved) : localBlogPosts;
  });

  const WA_BLOG_URL = "https://wa.me/5562999958502?text=Ol%C3%A1%20Day!%20Li%20seu%20blog%20e%20gostaria%20de%20agendar%20uma%20mentoria%20ou%20palestra.";
  const categories = ['Todos', 'Liderança', 'Neurofinanças', 'Conexão Mulher', 'Carreira Executiva'];

  useEffect(() => {
    if (isSupabaseConfigured) {
      fetchBlogPostsFromSupabase().then((remotePosts) => {
        if (remotePosts && remotePosts.length > 0) {
          const formatted = remotePosts.map((p) => ({
            id: p.id,
            slug: p.slug,
            title: p.title,
            category: p.category,
            readTime: p.read_time || '5 min de leitura',
            coverImage: p.cover_image,
            coverFit: p.cover_fit || 'object-top',
            excerpt: p.excerpt,
            tldr: p.tldr,
            content: p.content,
            author: p.author || {
              name: 'Daylene Costa',
              role: 'Mentora Executiva',
              avatar: '/images/perfil-day.webp',
            },
            publishedAt: p.published_at || new Date(p.created_at).toLocaleDateString('pt-BR'),
          }));
          setPosts(formatted);
          localStorage.setItem('day_blog_posts', JSON.stringify(formatted));
        }
      });
    }
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts[0];

  return (
    <div className="pt-28 pb-24 bg-[#180408] text-white min-h-screen text-left">
      
      {/* Top Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 text-xs text-[#dcbb9d]">
          <button onClick={() => onNavigate('/')} className="hover:underline flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para o Site Principal</span>
          </button>
          <span>/</span>
          <span className="text-white font-bold">Blog da Day Costa (/blog)</span>
        </div>

        {/* Page Title & Subtitle */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 text-[#dcbb9d] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#dcbb9d]" />
            <span>Hub de Conteúdo & Artigos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Artigos, Neurofinanças & <span className="font-script text-5xl sm:text-6xl text-[#dcbb9d] inline-block -rotate-2">Autoliderança</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
            Conteúdos práticos produzidos por <strong className="text-[#dcbb9d] font-semibold">Daylene Costa</strong>. Estratégias reais para quem deseja evoluir na carreira executiva, controlar finanças sem estresse e liderar com inteligência comportamental.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-white/10 pb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#dcbb9d] text-[#520012] shadow-lg scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#dcbb9d]" />
            <input
              type="text"
              placeholder="Buscar por tema ou palavra..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-[#dcbb9d]/40 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#dcbb9d] transition-colors"
            />
          </div>

        </div>

        {/* Featured Hero Article (Visible when no search active and "Todos" selected) */}
        {selectedCategory === 'Todos' && !searchQuery && featuredPost && (
          <div className="pt-4">
            <div className="text-xs uppercase tracking-widest text-[#dcbb9d] font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Artigo em Destaque</span>
            </div>

            <article
              onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
              className="glass-card-wine rounded-3xl border border-[#dcbb9d]/50 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-[#dcbb9d] transition-all duration-500 cursor-pointer"
            >
              <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px] bg-[#520012]">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${
                    featuredPost.coverFit === 'object-contain'
                      ? 'object-contain'
                      : featuredPost.coverFit === 'object-center'
                      ? 'object-cover object-center'
                      : 'object-cover object-top'
                  }`}
                />
                <div className="absolute top-4 left-4 bg-[#520012]/90 backdrop-blur-md text-[#dcbb9d] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#dcbb9d]/40">
                  {featuredPost.category}
                </div>
              </div>

              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#dcbb9d]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.publishedAt}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src="/images/perfil-day.webp" alt={featuredPost.author?.name} className="w-9 h-9 rounded-full object-cover bg-[#180408] border border-[#dcbb9d]" onError={(e) => { e.target.src = "/images/perfil-day.webp"; }} />
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-white">{featuredPost.author?.name || 'Daylene Costa'}</span>
                      <span className="text-[10px] text-[#dcbb9d]">{featuredPost.author?.role || 'Mentora Executiva'}</span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#dcbb9d] group-hover:text-white flex items-center gap-1 transition-colors">
                    <span>Ler Artigo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Article Grid */}
        <div className="pt-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-serif font-bold text-white">
              {selectedCategory === 'Todos' ? 'Todos os Artigos' : `Artigos em ${selectedCategory}`}
            </h3>
            <span className="text-xs text-[#dcbb9d]">
              Exibindo {filteredPosts.length} artigo(s)
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="p-12 text-center glass-card-wine rounded-3xl border border-white/10 space-y-3">
              <p className="text-base text-white/80">Nenhum artigo encontrado para a busca especificada.</p>
              <button
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchQuery('');
                }}
                className="text-xs text-[#dcbb9d] font-bold underline"
              >
                Limpar filtros e ver todos os artigos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                  className="glass-card-wine rounded-3xl overflow-hidden border border-[#dcbb9d]/35 shadow-2xl flex flex-col justify-between group hover:border-[#dcbb9d] hover:-translate-y-2 transition-all duration-500 cursor-pointer text-left"
                >
                  <div>
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#520012]">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className={`w-full h-full group-hover:scale-108 transition-transform duration-700 ${
                          post.coverFit === 'object-contain'
                            ? 'object-contain'
                            : post.coverFit === 'object-center'
                            ? 'object-cover object-center'
                            : 'object-cover object-top'
                        }`}
                      />
                      <div className="absolute top-3 left-3 bg-[#520012]/90 backdrop-blur-md text-[#dcbb9d] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#dcbb9d]/40">
                        {post.category}
                      </div>
                    </div>

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

                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#dcbb9d] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-white/80 font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between text-xs font-bold text-[#dcbb9d] group-hover:text-white transition-colors">
                    <span>Ler Artigo Completo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter / WhatsApp CTA Box */}
        <div className="mt-16 rounded-3xl glass-card-dark p-8 sm:p-12 border border-[#dcbb9d]/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#dcbb9d] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Acelere Sua Carreira & Finanças</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Deseja aplicar esses conteúdos na prática com mentoria exclusiva?
            </h3>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              Fale diretamente no WhatsApp de Daylene Costa para mentoria individual ou palestras corporativas.
            </p>
          </div>

          <a
            href={WA_BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] px-8 py-4 rounded-xl font-bold text-sm shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#520012]" />
            <span>Falar com Daylene Costa no WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#520012]" />
          </a>
        </div>

      </div>
    </div>
  );
}

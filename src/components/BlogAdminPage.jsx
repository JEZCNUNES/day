import React, { useState, useEffect } from 'react';
import { Lock, Plus, Edit3, Trash2, Save, Download, Eye, ArrowLeft, Image as ImageIcon, Sparkles, Check, FileText, Upload, Database, RefreshCw, Maximize2, Crop, Focus } from 'lucide-react';
import { blogPosts as initialPosts } from '../data/blogPosts';
import {
  isSupabaseConfigured,
  fetchBlogPostsFromSupabase,
  saveBlogPostToSupabase,
  deleteBlogPostFromSupabase,
  uploadBlogImageToSupabase,
} from '../lib/supabaseClient';
import { compressAndConvertToWebP } from '../lib/imageCompressor';

export default function BlogAdminPage({ onNavigate }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('day_blog_posts');
    return saved ? JSON.parse(saved) : initialPosts;
  });

  const [editingPost, setEditingPost] = useState(null);
  const [isNew, setIsNew] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Liderança');
  const [readTime, setReadTime] = useState('5 min de leitura');
  const [coverImage, setCoverImage] = useState('/images/day-photo-2-framed.webp');
  const [coverFit, setCoverFit] = useState('object-top'); // 'object-top', 'object-center', 'object-contain'
  const [excerpt, setExcerpt] = useState('');
  const [tldr, setTldr] = useState('');
  const [content, setContent] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Load posts from Supabase on mount if configured
  useEffect(() => {
    if (isSupabaseConfigured) {
      loadSupabasePosts();
    }
  }, []);

  const loadSupabasePosts = async () => {
    setIsLoading(true);
    const remotePosts = await fetchBlogPostsFromSupabase();
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
    setIsLoading(false);
  };

  useEffect(() => {
    localStorage.setItem('day_blog_posts', JSON.stringify(posts));
  }, [posts]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'day2026' || passwordInput === 'daylene') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Senha incorreta. Tente novamente.');
    }
  };

  const handleImageFileUpload = async (e) => {
    const originalFile = e.target.files[0];
    if (!originalFile) return;

    try {
      setUploadingImage(true);
      // Auto-compress and convert to WebP in browser Canvas before upload
      const compressedWebpFile = await compressAndConvertToWebP(originalFile);

      if (!isSupabaseConfigured) {
        const localUrl = URL.createObjectURL(compressedWebpFile);
        setCoverImage(localUrl);
        setCoverFit('object-top');
        alert('Foto convertida para WebP e salva em rascunho local!');
        return;
      }

      const publicUrl = await uploadBlogImageToSupabase(compressedWebpFile);
      if (publicUrl) {
        setCoverImage(publicUrl);
        setCoverFit('object-top');
        alert('Foto convertida para WebP e enviada com sucesso para o Supabase!');
      }
    } catch (err) {
      alert('Erro ao processar/enviar imagem: ' + err.message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleCreateNew = () => {
    setEditingPost({
      id: Date.now().toString(),
      slug: 'novo-artigo-' + Date.now(),
      title: '',
      category: 'Liderança',
      author: {
        name: 'Daylene Costa',
        role: 'Mentora Executiva',
        avatar: '/images/perfil-day.webp',
      },
      publishedAt: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
      readTime: '5 min de leitura',
      coverImage: '/images/day-photo-2-framed.webp',
      coverFit: 'object-top',
      excerpt: '',
      tldr: '',
      content: '<h2>Novo Título de Seção</h2>\n<p>Escreva aqui o conteúdo do seu artigo...</p>',
    });
    setIsNew(true);

    setTitle('');
    setCategory('Liderança');
    setReadTime('5 min de leitura');
    setCoverImage('/images/day-photo-2-framed.webp');
    setCoverFit('object-top');
    setExcerpt('');
    setTldr('');
    setContent('<h2>Novo Título de Seção</h2>\n<p>Escreva aqui o conteúdo do seu artigo...</p>');
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setIsNew(false);

    setTitle(post.title);
    setCategory(post.category);
    setReadTime(post.readTime);
    setCoverImage(post.coverImage);
    setCoverFit(post.coverFit || 'object-top');
    setExcerpt(post.excerpt);
    setTldr(post.tldr || '');
    setContent(post.content);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const updatedPost = {
      ...(editingPost || {}),
      id: editingPost?.id || Date.now().toString(),
      slug: slug || 'artigo-' + Date.now(),
      title,
      category,
      readTime,
      coverImage,
      coverFit,
      excerpt,
      tldr,
      content,
      author: editingPost?.author || {
        name: 'Daylene Costa',
        role: 'Mentora Executiva',
        avatar: '/images/perfil-day.webp',
      },
      publishedAt: editingPost?.publishedAt || new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
    };

    // Save locally first
    let newPostsList = [];
    if (isNew) {
      newPostsList = [updatedPost, ...posts];
    } else {
      newPostsList = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
    }
    setPosts(newPostsList);

    // Save to Supabase if configured
    if (isSupabaseConfigured) {
      try {
        await saveBlogPostToSupabase(updatedPost);
      } catch (err) {
        alert('Aviso: Salvo localmente, mas ocorreu um erro no Supabase: ' + err.message);
      }
    }

    setEditingPost(null);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este artigo?')) {
      setPosts(posts.filter((p) => p.id !== id));
      if (isSupabaseConfigured) {
        await deleteBlogPostFromSupabase(id);
      }
      if (editingPost?.id === id) setEditingPost(null);
    }
  };

  const handleExportJSON = () => {
    const jsonString = `export const blogPosts = ${JSON.stringify(posts, null, 2)};`;
    const blob = new Blob([jsonString], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blogPosts.js';
    a.click();
  };

  // Password Lock Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-[#180408] text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full glass-card-wine rounded-3xl p-8 border-2 border-[#dcbb9d]/50 shadow-2xl space-y-6 text-left">
          <div className="w-14 h-14 rounded-2xl bg-[#dcbb9d]/20 border border-[#dcbb9d]/40 flex items-center justify-center text-[#dcbb9d] mx-auto shadow-md">
            <Lock className="w-7 h-7" />
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-serif font-bold text-white">Painel do Editor (`/blogedit`)</h2>
            <p className="text-xs text-white/70">
              Digite a senha de autora para gerenciar, editar e publicar matérias no blog da Daylene Costa.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">Senha de Acesso</label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Digite sua senha..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
              />
              {authError && <p className="text-xs text-rose-400 mt-1">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all cursor-pointer"
            >
              Entrar no Editor
            </button>
          </form>

          <div className="pt-2 text-center">
            <button onClick={() => onNavigate('/blog')} className="text-xs text-[#dcbb9d] underline cursor-pointer">
              ← Voltar para o Blog público
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-[#180408] text-white min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header & Connection Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3 text-xs text-[#dcbb9d]">
              <button onClick={() => onNavigate('/blog')} className="hover:underline flex items-center gap-1 cursor-pointer">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Ver Blog Público (/blog)</span>
              </button>

              {/* Supabase Status Pill */}
              <div className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border ${
                isSupabaseConfigured 
                  ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300' 
                  : 'bg-amber-950/60 border-amber-500/50 text-amber-300'
              }`}>
                <Database className="w-3 h-3" />
                <span>{isSupabaseConfigured ? 'Supabase Conectado Ao Vivo' : 'Modo Rascunho Local'}</span>
              </div>
            </div>

            <h1 className="text-3xl font-serif font-bold text-white">
              Painel do Blog (`/blogedit`)
            </h1>
            <p className="text-xs text-white/70">
              Crie, edite, enquadre capas sem corte e publique matérias com salvamento instantâneo.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {isSupabaseConfigured && (
              <button
                onClick={loadSupabasePosts}
                disabled={isLoading}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#dcbb9d] border border-white/20 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                title="Sincronizar dados do Supabase"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            )}

            <button
              onClick={handleExportJSON}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
              title="Baixar arquivo blogPosts.js atualizado"
            >
              <Download className="w-4 h-4 text-[#dcbb9d]" />
              <span>Exportar `blogPosts.js`</span>
            </button>

            <button
              onClick={handleCreateNew}
              className="px-5 py-2.5 rounded-xl bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-[#520012]" />
              <span>Nova Matéria</span>
            </button>
          </div>
        </div>

        {savedSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 text-xs font-bold flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Matéria salva e sincronizada com sucesso!</span>
          </div>
        )}

        {/* Workspace: Article List vs Rich Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Posts List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-white">Matérias Cadastradas ({posts.length})</h3>
              {isLoading && <span className="text-xs text-[#dcbb9d] animate-pulse">Carregando...</span>}
            </div>

            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex items-center justify-between gap-3 ${
                    editingPost?.id === post.id
                      ? 'bg-[#520012] border-[#dcbb9d] shadow-lg'
                      : 'glass-card-wine border-white/10 hover:border-[#dcbb9d]/50'
                  }`}
                >
                  <div className="space-y-1 flex-1 min-w-0" onClick={() => handleEdit(post)}>
                    <span className="text-[10px] uppercase font-bold text-[#dcbb9d] tracking-wider">{post.category}</span>
                    <h4 className="text-sm font-bold text-white truncate">{post.title}</h4>
                    <span className="text-[10px] text-white/60 block">{post.publishedAt} • {post.readTime}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleEdit(post)}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#dcbb9d] transition-colors"
                      title="Editar"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 rounded-lg bg-rose-950/40 hover:bg-rose-800 text-rose-300 transition-colors"
                      title="Excluir"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Rich Form Editor with Live Cover Framing Control */}
          <div className="lg:col-span-7">
            {editingPost ? (
              <form onSubmit={handleSave} className="glass-card-wine rounded-3xl p-6 sm:p-8 border-2 border-[#dcbb9d]/50 shadow-2xl space-y-6 text-left">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#dcbb9d]" />
                    <span>{isNew ? 'Criar Nova Matéria' : 'Editar Matéria'}</span>
                  </h3>

                  <button
                    type="button"
                    onClick={() => onNavigate(`/blog/${editingPost.slug}`)}
                    className="text-xs text-[#dcbb9d] hover:underline flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Pré-visualizar</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">Título da Matéria *</label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Ex: Como Superar a Sobrecarga da Liderança Executiva"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">Categoria *</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#520012] border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                      >
                        <option value="Liderança">Liderança</option>
                        <option value="Neurofinanças">Neurofinanças</option>
                        <option value="Conexão Mulher">Conexão Mulher</option>
                        <option value="Carreira Executiva">Carreira Executiva</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">Tempo de Leitura</label>
                      <input
                        type="text"
                        value={readTime}
                        onChange={(e) => setReadTime(e.target.value)}
                        placeholder="Ex: 5 min de leitura"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                      />
                    </div>
                  </div>

                  {/* Foto de Capa + Controles de Enquadramento Sem Corte */}
                  <div className="space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <label className="block text-xs font-semibold text-[#dcbb9d]">Foto de Capa & Enquadramento *</label>
                    
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        required
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                        placeholder="/images/day-photo-2-framed.webp ou URL Supabase"
                        className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                      />

                      <label className="px-4 py-2.5 rounded-xl bg-[#dcbb9d]/20 hover:bg-[#dcbb9d]/30 text-[#dcbb9d] border border-[#dcbb9d]/40 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0">
                        <Upload className="w-4 h-4" />
                        <span>{uploadingImage ? 'Enviando...' : 'Upload Foto'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageFileUpload}
                          disabled={uploadingImage}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Selector for Cover Framing Mode */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-[11px] text-white/80 font-bold flex items-center gap-1.5">
                        <Focus className="w-3.5 h-3.5 text-[#dcbb9d]" />
                        <span>Encaixar / Alinhar Capa:</span>
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setCoverFit('object-top')}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                            coverFit === 'object-top'
                              ? 'bg-[#dcbb9d] text-[#520012] border-[#dcbb9d] shadow-md'
                              : 'bg-white/10 text-white/80 border-white/10 hover:border-[#dcbb9d]'
                          }`}
                          title="Alinha o topo da foto (evita cortar rosto/cabeça)"
                        >
                          👤 Foco no Rosto (Topo)
                        </button>

                        <button
                          type="button"
                          onClick={() => setCoverFit('object-center')}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                            coverFit === 'object-center'
                              ? 'bg-[#dcbb9d] text-[#520012] border-[#dcbb9d] shadow-md'
                              : 'bg-white/10 text-white/80 border-white/10 hover:border-[#dcbb9d]'
                          }`}
                          title="Centraliza a imagem no meio"
                        >
                          🎯 Centralizar
                        </button>

                        <button
                          type="button"
                          onClick={() => setCoverFit('object-contain')}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                            coverFit === 'object-contain'
                              ? 'bg-[#dcbb9d] text-[#520012] border-[#dcbb9d] shadow-md'
                              : 'bg-white/10 text-white/80 border-white/10 hover:border-[#dcbb9d]'
                          }`}
                          title="Mostra a foto inteira sem cortar nada (com fundo suave)"
                        >
                          🖼️ Ajustar Sem Cortes (Inteira)
                        </button>
                      </div>
                    </div>

                    {/* Live Preview Box of Cover Framing */}
                    {coverImage && (
                      <div className="pt-2">
                        <span className="text-[10px] uppercase font-bold text-[#dcbb9d] tracking-wider block mb-1.5">
                          Pré-visualização do Enquadramento da Capa:
                        </span>
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#520012] border-2 border-[#dcbb9d]/40 shadow-inner">
                          {/* Background Blur Fill if Contain selected */}
                          {coverFit === 'object-contain' && (
                            <img
                              src={coverImage}
                              alt="Blur Background"
                              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40"
                            />
                          )}
                          <img
                            src={coverImage}
                            alt="Pré-visualização da Capa"
                            className={`w-full h-full relative z-10 transition-all duration-300 ${
                              coverFit === 'object-contain'
                                ? 'object-contain'
                                : coverFit === 'object-center'
                                ? 'object-cover object-center'
                                : 'object-cover object-top'
                            }`}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">Resumo Executivo (TL;DR para SEO & IA) *</label>
                    <textarea
                      rows={2}
                      required
                      value={tldr}
                      onChange={(e) => setTldr(e.target.value)}
                      placeholder="Resposta direta de 2 frases sobre o tema da matéria..."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">Resumo Curto (Para os Cartões) *</label>
                    <textarea
                      rows={2}
                      required
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      placeholder="Breve descrição em 2 linhas..."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#dcbb9d] mb-1">Conteúdo da Matéria (Formatado em HTML) *</label>
                    <textarea
                      rows={10}
                      required
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="<h2>Título de Seção</h2><p>Parágrafo...</p>"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#dcbb9d]/40 text-xs text-white font-mono focus:outline-none focus:ring-2 focus:ring-[#dcbb9d]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#dcbb9d] hover:bg-[#e4c9b0] text-[#520012] py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4 text-[#520012]" />
                    <span>Salvar e Publicar Matéria</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEditingPost(null)}
                    className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
                  >
                    Cancelar
                  </button>
                </div>

              </form>
            ) : (
              <div className="glass-card-wine rounded-3xl p-12 border border-white/10 text-center space-y-4">
                <FileText className="w-12 h-12 text-[#dcbb9d] mx-auto opacity-60" />
                <h3 className="text-xl font-serif font-bold text-white">Nenhuma matéria selecionada</h3>
                <p className="text-xs text-white/70 max-w-sm mx-auto">
                  Selecione uma matéria da lista à esquerda para editar ou clique no botão acima para criar uma nova.
                </p>
                <button
                  onClick={handleCreateNew}
                  className="px-6 py-3 rounded-xl bg-[#dcbb9d] text-[#520012] font-bold text-xs shadow-md cursor-pointer hover:scale-105 transition-transform inline-flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Criar Nova Matéria Agora</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

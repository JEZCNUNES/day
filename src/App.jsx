import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConexaoMulher from './components/ConexaoMulher';
import Pillars from './components/Pillars';
import WhatIDo from './components/WhatIDo';
import About from './components/About';
import NeurofinanceSim from './components/NeurofinanceSim';
import Lectures from './components/Lectures';
import BlogPreview from './components/BlogPreview';
import Testimonials from './components/Testimonials';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

// Pages
import BlogListPage from './components/BlogListPage';
import BlogPostPage from './components/BlogPostPage';
import BlogAdminPage from './components/BlogAdminPage';
import EventLandingPage from './components/EventLandingPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  // Route Resolution (Supports both custom domains and GitHub Pages subpaths)
  const isConexaoEvent = currentPath.endsWith('/conexaomulher') || currentPath.endsWith('/conexaomulher/');
  const isBlogAdmin = currentPath.endsWith('/blogedit') || currentPath.endsWith('/blogedit/') || currentPath.endsWith('/admin') || currentPath.endsWith('/admin/');
  const isBlogList = currentPath.endsWith('/blog') || currentPath.endsWith('/blog/');
  const isBlogPost = currentPath.includes('/blog/') && currentPath.length > 6 && !isBlogAdmin;
  const blogSlug = isBlogPost ? currentPath.split('/blog/')[1]?.replace('/', '') : null;

  return (
    <div className="min-h-screen bg-[#180408] text-white flex flex-col font-sans selection:bg-[#dcbb9d] selection:text-[#520012]">
      
      {/* Floating Navigation (Hidden on exclusive Event Landing Page /conexaomulher for zero distraction) */}
      {!isConexaoEvent && (
        <Navbar onOpenContact={handleOpenContact} onNavigate={navigate} currentPath={currentPath} />
      )}

      {/* Main Content View based on URL Path */}
      <main className="flex-grow">
        {isConexaoEvent ? (
          <EventLandingPage onNavigate={navigate} />
        ) : isBlogAdmin ? (
          <BlogAdminPage onNavigate={navigate} />
        ) : isBlogList ? (
          <BlogListPage onNavigate={navigate} onOpenContact={handleOpenContact} />
        ) : isBlogPost && blogSlug ? (
          <BlogPostPage slug={blogSlug} onNavigate={navigate} onOpenContact={handleOpenContact} />
        ) : (
          /* Main Landing Page Order: 1. Hero -> 2. ConexaoMulher -> 3. Pillars -> 4. WhatIDo -> 5. About -> ... */
          <>
            <Hero onOpenContact={handleOpenContact} />
            <ConexaoMulher />
            <Pillars onOpenContact={handleOpenContact} />
            <WhatIDo onOpenContact={handleOpenContact} />
            <About onOpenContact={handleOpenContact} />
            <NeurofinanceSim />
            <Lectures onOpenContact={handleOpenContact} />
            <BlogPreview onNavigate={navigate} />
            <Testimonials />
          </>
        )}
      </main>

      {/* Footer (Hidden on /conexaomulher to keep visitor focused on ticket purchase) */}
      {!isConexaoEvent && (
        <Footer onOpenContact={handleOpenContact} onNavigate={navigate} />
      )}

      {/* Contact & Inquiry Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />

      {/* Floating Scroll to Top Button for Mobile & Desktop */}
      <ScrollToTop />

    </div>
  );
}

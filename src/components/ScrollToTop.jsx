import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-5 sm:right-6 z-50 w-12 h-12 rounded-full bg-[#dcbb9d] text-[#520012] shadow-[0_10px_25px_rgba(0,0,0,0.6)] border-2 border-[#520012] flex items-center justify-center cursor-pointer hover:bg-[#e4c9b0] hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
      <ChevronUp className="w-6 h-6 text-[#520012] group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}

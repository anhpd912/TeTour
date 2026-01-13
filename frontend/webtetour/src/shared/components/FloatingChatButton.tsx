'use client';

import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingChatButtonProps {
  readonly onClick: () => void;
}

export default function FloatingChatButton({ onClick }: FloatingChatButtonProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate position based on scroll with parallax effect
  const translateY = Math.min(scrollY * 0.1, 100);

  return (
    <button
      onClick={onClick}
      className='fixed right-8 bottom-8 z-50 rounded-full bg-cyan-400 p-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-cyan-500'
      style={{
        transform: `translateY(-${translateY}px)`,
      }}
      aria-label='Open AI Chatbot'>
      <MessageCircle className='h-8 w-8 text-white' />

      {/* Pulse animation ring */}
      <span className='absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-20' />
    </button>
  );
}

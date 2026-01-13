'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  readonly showAuthButton?: 'login' | 'register' | 'none';
}

export default function Header({ showAuthButton = 'none' }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-6 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <Link href='/' className='flex items-center gap-2'>
        <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400'>
          <svg className='h-5 w-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M10 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-7-5z' />
          </svg>
        </div>
        <span className='text-xl font-semibold'>Vietnam Travel</span>
      </Link>

      <nav className='hidden items-center gap-8 md:flex'>
        <Link href='/' className='text-gray-600 hover:text-gray-900'>
          Home
        </Link>
        <Link href='/tours' className='text-gray-600 hover:text-gray-900'>
          Tours
        </Link>
        <Link href='/destinations' className='text-gray-600 hover:text-gray-900'>
          Destinations
        </Link>
        <Link href='/chatbot' className='flex items-center gap-2 text-gray-600 hover:text-gray-900'>
          <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
            <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
          </svg>
          AI Chatbot
        </Link>

        {showAuthButton === 'login' && (
          <Link href='/login' className='rounded-full bg-cyan-400 px-6 py-2 text-white hover:bg-cyan-500'>
            Login
          </Link>
        )}

        {showAuthButton === 'register' && (
          <Link href='/register' className='rounded-full bg-cyan-400 px-6 py-2 text-white hover:bg-cyan-500'>
            Register
          </Link>
        )}
      </nav>
    </header>
  );
}

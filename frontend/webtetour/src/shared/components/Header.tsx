'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUserProfileQuery } from 'src/shared/services/api/queries/useUserProfile.query';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  readonly showAuthButton?: 'login' | 'register' | 'none';
}

export default function Header({ showAuthButton = 'none' }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();

  // Kiểm tra token khi component mount và khi localStorage thay đổi
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('accessToken');
      setHasToken(!!token);
    };

    checkToken();

    // Listen for storage changes (khi login ở tab khác)
    window.addEventListener('storage', checkToken);

    // Custom event để trigger khi login thành công
    window.addEventListener('login', checkToken);

    return () => {
      window.removeEventListener('storage', checkToken);
      window.removeEventListener('login', checkToken);
    };
  }, []);

  // Kiểm tra trạng thái đăng nhập
  const { data: userProfile, isLoading } = useUserProfileQuery({
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 phút
    enabled: hasToken,
  } as any);

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

  const handleLogout = () => {
    // Xóa token
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Redirect về trang login
    router.push('/login');
    router.refresh();
  };

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
        <span className='text-xl font-semibold'>TeTour Travel</span>
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

        {/* Hiển thị avatar nếu đã đăng nhập, ngược lại hiển thị button login/register */}
        {userProfile ? (
          <div className='relative'>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className='flex items-center gap-2 rounded-full hover:opacity-80 focus:outline-none'>
              {userProfile.avatar ? (
                <img
                  src={userProfile.avatar}
                  alt={userProfile.username}
                  className='h-10 w-10 rounded-full object-cover ring-2 ring-cyan-400'
                />
              ) : (
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-white ring-2 ring-cyan-400'>
                  <span className='text-sm font-semibold'>
                    {userProfile.firstName?.[0]?.toUpperCase() || userProfile.username?.[0]?.toUpperCase() || 'U'}
                  </span>
                </div>
              )}
            </button>

            {/* Dropdown menu */}
            {showDropdown && (
              <>
                <div className='fixed inset-0 z-10' onClick={() => setShowDropdown(false)} />
                <div className='ring-opacity-5 absolute right-0 z-20 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black'>
                  <div className='border-b border-gray-100 px-4 py-2'>
                    <p className='text-sm font-semibold text-gray-900'>
                      {userProfile.firstName} {userProfile.lastName}
                    </p>
                    <p className='text-xs text-gray-500'>{userProfile.email}</p>
                  </div>
                  <Link
                    href='/profile'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    onClick={() => setShowDropdown(false)}>
                    Profile
                  </Link>
                  <Link
                    href='/bookings'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    onClick={() => setShowDropdown(false)}>
                    My Bookings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className='block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100'>
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        ) : !isLoading ? (
          <>
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
          </>
        ) : null}
      </nav>
    </header>
  );
}

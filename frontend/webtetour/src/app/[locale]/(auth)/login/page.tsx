'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  return (
    <div>
      <Header showAuthButton='register' />
      <div className='flex min-h-screen'>
        {/* Left Side - Form */}
        <div className='flex w-full flex-col lg:w-1/2'>
          {/* <Header showAuthButton="register" /> */}

          {/* Form Content */}
          <div className='flex flex-1 items-center justify-center px-8 py-12'>
            <div className='w-full max-w-md'>
              {/* Title */}
              <h2 className='mb-2 text-3xl font-bold'>Welcome Back</h2>
              <p className='mb-8 text-gray-600'>Log in to manage your bookings and chat with our AI guide.</p>

              {/* Form */}
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700'>Email Address</label>
                  <input
                    type='email'
                    placeholder='traveler@example.com'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                  />
                </div>

                <div>
                  <div className='mb-2 flex items-center justify-between'>
                    <label className='block text-sm font-medium text-gray-700'>Password</label>
                    <Link href='/forgot-password' className='text-sm text-cyan-400 hover:underline'>
                      Forgot password?
                    </Link>
                  </div>
                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Enter your password'
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600'>
                      {showPassword ? (
                        <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                          />
                        </svg>
                      ) : (
                        <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type='submit'
                  className='flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 py-3 font-medium text-white transition-colors hover:bg-cyan-500'>
                  Sign In
                  <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </button>

                {/* Divider */}
                <div className='relative'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-200'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='bg-white px-4 text-gray-500'>Or continue with</span>
                  </div>
                </div>

                {/* Google Login */}
                <button
                  type='button'
                  onClick={handleGoogleLogin}
                  className='flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 px-4 py-3 transition-colors hover:bg-gray-50'>
                  <svg className='h-5 w-5' viewBox='0 0 24 24'>
                    <path
                      fill='#4285F4'
                      d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                    />
                    <path
                      fill='#34A853'
                      d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                    />
                    <path
                      fill='#FBBC05'
                      d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                    />
                    <path
                      fill='#EA4335'
                      d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                    />
                  </svg>
                  <span className='text-sm font-medium text-gray-700'>Continue with Google</span>
                </button>

                <p className='text-center text-sm text-gray-600'>
                  New here?{' '}
                  <Link href='/register' className='font-medium text-cyan-400 hover:underline'>
                    Create an account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Image with Benefits */}
        <div className='relative hidden lg:block lg:w-1/2'>
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(2, 62, 138, 0.55), rgba(8, 145, 178, 0.4)), url('/bg.jpg')",
              backgroundBlendMode: 'overlay',
            }}>
            <div className='absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/60'></div>
          </div>

          <div className='relative flex h-full flex-col justify-center px-12 text-white'>
            <h2 className='mb-8 text-4xl font-bold'>Your Journey Awaits</h2>

            <div className='mb-12 space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/20'>
                  <svg className='h-6 w-6 text-cyan-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <p className='text-lg font-medium'>Manage all your bookings in one place</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/20'>
                  <svg className='h-6 w-6 text-cyan-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
                    <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
                  </svg>
                </div>
                <div>
                  <p className='text-lg font-medium'>Chat with AI for instant travel advice</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/20'>
                  <svg className='h-6 w-6 text-cyan-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                </div>
                <div>
                  <p className='text-lg font-medium'>Access exclusive member-only deals</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className='rounded-2xl bg-white/10 p-6 backdrop-blur-md'>
              <div className='mb-4 flex gap-1'>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className='h-5 w-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <p className='mb-4 text-lg italic'>
                "The AI assistant planned my whole Hue trip in seconds! I found hidden gems I would have never seen on a
                typical tour."
              </p>
              <div className='flex items-center gap-3'>
                <div className='h-12 w-12 overflow-hidden rounded-full bg-white'>
                  <img
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                    alt='Sarah Jenkins'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div>
                  <p className='font-semibold'>Sarah Jenkins</p>
                  <p className='text-sm text-cyan-200'>Adventure Enthusiast</p>
                </div>
              </div>
            </div>

            <div className='mt-8 flex items-center gap-2 text-cyan-300'>
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' />
              </svg>
              <span className='font-medium'>Our AI bot is ready to chat after login</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

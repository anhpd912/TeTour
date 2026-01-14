'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';
import ApiTestButton from 'src/shared/components/ApiTestButton';
import { useRegisterMutation } from 'src/shared/services/api/mutations/useRegister.mutation';
import type { RegisterRequest } from 'src/shared/types/auth.types';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    address: '',
    dateOfBirth: '',
    gender: true, // true = male, false = female
    password: '',
    agreeToTerms: false,
    isActive: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const registerMutation = useRegisterMutation({
    onSuccess: (data) => {
      console.log('Registration successful:', data);
      // Show success message
      alert('Registration successful! Please login.');
      // Redirect to login page
      router.push('/login');
    },
    onError: (error) => {
      console.error('Registration failed:', error);
      console.error('Error details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message,
      });

      // Handle validation errors
      if (error.response?.data?.errors) {
        const apiErrors: Record<string, string> = {};
        Object.entries(error.response.data.errors).forEach(([key, messages]) => {
          if (Array.isArray(messages) && messages.length > 0) {
            apiErrors[key] = String(messages[0]);
          }
        });
        console.log('Validation errors:', apiErrors);
        setErrors(apiErrors);
      } else {
        // Show general error message
        alert(error.response?.data?.message || 'Registration failed. Please try again.');
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate form
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare data for API
    const registerData: RegisterRequest = {
      username: formData.username.trim(),
      password: formData.password,
      email: formData.email.trim(),
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      address: formData.address.trim(),
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      isActive: formData.isActive,
    };

    console.log('Sending register request:', { ...registerData, password: '***' });

    // Call API
    registerMutation.mutate(registerData);
  };

  const handleGoogleSignup = () => {
    console.log('Google signup');
  };

  return (
    <div>
      <Header showAuthButton='login' />
      <div className='flex min-h-screen'>
        {/* Left Side - Form */}
        <div className='flex w-full flex-col lg:w-1/2'>
          {/* Form Content */}
          <div className='flex flex-1 items-center justify-center px-8 py-12'>
            <div className='w-full max-w-md'>
              {/* Title */}
              <h2 className='mb-2 text-3xl font-bold'>Join the Adventure</h2>
              <p className='mb-8 text-gray-600'>
                Start planning your dream Vietnam trip with our AI assistant and expert guides.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700'>Username *</label>
                  <input
                    type='text'
                    placeholder='username'
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className={`w-full rounded-lg border ${errors.username ? 'border-red-500' : 'border-gray-200'} px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none`}
                  />
                  {errors.username && <p className='mt-1 text-sm text-red-500'>{errors.username}</p>}
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700'>Email *</label>
                  <input
                    type='email'
                    placeholder='email@example.com'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none`}
                  />
                  {errors.email && <p className='mt-1 text-sm text-red-500'>{errors.email}</p>}
                </div>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <label className='mb-2 block text-sm font-medium text-gray-700'>First Name *</label>
                    <input
                      type='text'
                      placeholder='Nguyen'
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={`w-full rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none`}
                    />
                    {errors.firstName && <p className='mt-1 text-sm text-red-500'>{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className='mb-2 block text-sm font-medium text-gray-700'>Last Name *</label>
                    <input
                      type='text'
                      placeholder='Van A'
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={`w-full rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none`}
                    />
                    {errors.lastName && <p className='mt-1 text-sm text-red-500'>{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700'>Phone Number</label>
                  <input
                    type='tel'
                    placeholder='+84 123 456 789'
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                  />
                  {errors.phoneNumber && <p className='mt-1 text-sm text-red-500'>{errors.phoneNumber}</p>}
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700'>Address</label>
                  <input
                    type='text'
                    placeholder='123 Street, District, City'
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                  />
                  {errors.address && <p className='mt-1 text-sm text-red-500'>{errors.address}</p>}
                </div>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <label className='mb-2 block text-sm font-medium text-gray-700'>Date of Birth</label>
                    <input
                      type='date'
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                    />
                    {errors.dateOfBirth && <p className='mt-1 text-sm text-red-500'>{errors.dateOfBirth}</p>}
                  </div>

                  <div>
                    <label className='mb-2 block text-sm font-medium text-gray-700'>Gender</label>
                    <select
                      value={formData.gender ? 'male' : 'female'}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value === 'male' })}
                      className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700'>Password *</label>
                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Min. 8 characters'
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={`w-full rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-200'} px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none`}
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
                  {errors.password && <p className='mt-1 text-sm text-red-500'>{errors.password}</p>}
                </div>

                <div>
                  <div className='flex items-start gap-2'>
                    <input
                      type='checkbox'
                      id='terms'
                      checked={formData.agreeToTerms}
                      onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                      className='mt-1 h-4 w-4 rounded border-gray-300 text-cyan-400 focus:ring-cyan-400'
                    />
                    <label htmlFor='terms' className='text-sm text-gray-600'>
                      I agree to the{' '}
                      <Link href='/terms' className='text-cyan-400 hover:underline'>
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href='/privacy' className='text-cyan-400 hover:underline'>
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  {errors.agreeToTerms && <p className='mt-1 text-sm text-red-500'>{errors.agreeToTerms}</p>}
                </div>

                <button
                  type='submit'
                  disabled={registerMutation.isPending}
                  className='flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 py-3 font-medium text-white transition-colors hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50'>
                  {registerMutation.isPending ? (
                    <>
                      <svg className='h-5 w-5 animate-spin' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        />
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 7l5 5m0 0l-5 5m5-5H6'
                        />
                      </svg>
                    </>
                  )}
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

                {/* Google Sign Up */}
                <button
                  type='button'
                  onClick={handleGoogleSignup}
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
                  Already have an account?{' '}
                  <Link href='/login' className='font-medium text-cyan-400 hover:underline'>
                    Log In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Image with Perks */}
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

          <div className='relative flex h-full flex-col justify-center px-12 py-12 text-white'>
            <h2 className='mb-4 text-2xl font-bold'>Exclusive Member Perks</h2>

            <div className='mb-6 space-y-3'>
              <div className='flex items-start gap-3'>
                <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/20'>
                  <svg className='h-5 w-5 text-cyan-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                </div>
                <div>
                  <p className='text-sm font-medium'>Get 10% off your first tour booking</p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/20'>
                  <svg className='h-5 w-5 text-cyan-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
                    <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
                  </svg>
                </div>
                <div>
                  <p className='text-sm font-medium'>24/7 AI-powered itinerary assistant</p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/20'>
                  <svg className='h-5 w-5 text-cyan-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <p className='text-sm font-medium'>Priority booking for seasonal highlights</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className='rounded-xl bg-white/10 p-4 backdrop-blur-md'>
              <div className='mb-2 flex gap-1'>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className='h-3.5 w-3.5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <p className='mb-2 text-sm italic'>
                "The AI assistant planned my whole Hue trip in seconds! I found hidden gems I would have never seen on a
                typical tour."
              </p>
              <div className='flex items-center gap-2'>
                <div className='h-8 w-8 overflow-hidden rounded-full bg-white'>
                  <img
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                    alt='Sarah Jenkins'
                    className='h-full w-full object-cover'
                  />
                </div>
                <div>
                  <p className='text-sm font-semibold'>Sarah Jenkins</p>
                  <p className='text-xs text-cyan-200'>Adventure Enthusiast</p>
                </div>
              </div>
            </div>

            <div className='mt-4 flex items-center gap-2 text-sm text-cyan-300'>
              <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' />
              </svg>
              <span className='font-medium'>Our AI bot is ready to chat after signup</span>
            </div>
          </div>
        </div>
      </div>

      {/* API Test Button - Only in development */}
      {process.env.NODE_ENV === 'development' && <ApiTestButton />}

      <Footer />
    </div>
  );
}

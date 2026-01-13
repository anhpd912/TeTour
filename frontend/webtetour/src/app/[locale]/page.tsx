'use client';

import { Search, MapPin, Calendar, ChevronLeft, ChevronRight, Heart, Star, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';
import FloatingChatButton from 'src/shared/components/FloatingChatButton';
import ChatbotModal from 'src/shared/components/ChatbotModal';

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const categories = [
    { icon: '🏖️', name: 'Beach & Island', id: 'beach' },
    { icon: '⛰️', name: 'Mountain Trek', id: 'mountain' },
    { icon: '🏛️', name: 'Cultural Heritage', id: 'cultural' },
    { icon: '🍜', name: 'Foodie Tours', id: 'foodie' },
    { icon: '🌃', name: 'Urban Nightlife', id: 'urban' },
  ];

  const tours = [
    {
      id: 1,
      image: '/halong-bay.jpg',
      badge: 'Best Seller',
      location: 'DA NANG - HOI AN',
      title: 'Ancient Towns & Golden Peaks',
      rating: 4.8,
      reviews: 1240,
      duration: '5 Days',
      price: 499,
    },
    {
      id: 2,
      image: '/halong-bay.jpg',
      badge: 'Eco-Friendly',
      location: 'SAPA (HMONG - DZAO)',
      title: 'Trekking the Clouds of Sapa',
      rating: 4.8,
      reviews: 856,
      duration: '4 Days',
      price: 240,
    },
    {
      id: 3,
      image: '/halong-bay.jpg',
      location: 'QUANG NINH',
      title: 'Ha Long Bay on Land',
      rating: 5.0,
      reviews: 2156,
      duration: '3 Days',
      price: 85,
    },
  ];

  return (
    <>
      <Header showAuthButton='login' />

      <main className='min-h-screen'>
        {/* Hero Section */}
        <section className='relative mx-4 mt-8 h-[500px] overflow-hidden rounded-3xl md:mx-8'>
          <Image
            src='/halong-bay.jpg'
            alt='Ha Long Bay - Vietnam landscape with limestone karsts'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40' />

          <div className='relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white'>
            <h1 className='mb-4 text-4xl font-bold md:text-6xl'>
              Discover the Soul of
              <br />
              Vietnam
            </h1>
            <p className='mb-8 text-lg opacity-90 md:text-xl'>
              Experience personalized travel planning with our AI-powered consultation
            </p>

            {/* Search Bar */}
            <div className='w-full max-w-4xl rounded-2xl bg-white p-4 shadow-2xl'>
              <div className='flex flex-col items-center gap-4 md:flex-row'>
                <div className='flex flex-1 items-center gap-3 px-4'>
                  <Search className='h-5 w-5 text-gray-400' />
                  <input
                    type='text'
                    placeholder='Where do you want to go?'
                    className='w-full border-none text-gray-900 placeholder-gray-400 focus:outline-none'
                  />
                </div>

                <div className='hidden h-8 w-px bg-gray-200 md:block' />

                <div className='flex flex-1 items-center gap-3 px-4'>
                  <MapPin className='h-5 w-5 text-cyan-400' />
                  <div className='flex-1'>
                    <div className='text-xs text-gray-500'>Budget</div>
                    <div className='text-sm font-medium text-gray-900'>$100 - $5,000</div>
                  </div>
                </div>

                <div className='hidden h-8 w-px bg-gray-200 md:block' />

                <div className='flex flex-1 items-center gap-3 px-4'>
                  <Calendar className='h-5 w-5 text-cyan-400' />
                  <div className='flex-1'>
                    <div className='text-xs text-gray-500'>Duration</div>
                    <div className='text-sm font-medium text-gray-900'>Any length</div>
                  </div>
                </div>

                <button className='w-full rounded-full bg-cyan-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-cyan-500 md:w-auto'>
                  Search Tours
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Explore by Category */}
        <section className='mx-4 my-16 md:mx-8'>
          <div className='mb-8 flex items-center justify-between'>
            <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>Explore by Category</h2>
            <div className='flex gap-2'>
              <button className='rounded-full border border-gray-300 p-2 hover:bg-gray-50'>
                <ChevronLeft className='h-5 w-5' />
              </button>
              <button className='rounded-full border border-gray-300 p-2 hover:bg-gray-50'>
                <ChevronRight className='h-5 w-5' />
              </button>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/tours?category=${category.id}`}
                className='flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-cyan-400 hover:shadow-lg'>
                <div className='mb-3 text-4xl'>{category.icon}</div>
                <div className='text-center text-sm font-medium text-gray-900'>{category.name}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Trending Tours */}
        <section className='mx-4 my-16 md:mx-8'>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>Top Trending Tours</h2>
            <p className='text-gray-600'>Our most booked experiences this month</p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {tours.map((tour) => (
              <div
                key={tour.id}
                className='group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-xl'>
                <div className='relative h-64 overflow-hidden'>
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  {tour.badge && (
                    <div className='absolute top-4 left-4 rounded-full bg-cyan-400 px-4 py-1 text-sm font-semibold text-white'>
                      {tour.badge}
                    </div>
                  )}
                  <button className='absolute top-4 right-4 rounded-full bg-white p-2 transition-colors hover:bg-red-50'>
                    <Heart className='h-5 w-5 text-gray-600' />
                  </button>
                </div>

                <div className='p-6'>
                  <div className='mb-2 flex items-center gap-2 text-sm text-cyan-600'>
                    <MapPin className='h-4 w-4' />
                    <span className='font-medium'>{tour.location}</span>
                  </div>

                  <h3 className='mb-3 text-xl font-bold text-gray-900'>{tour.title}</h3>

                  <div className='mb-4 flex items-center gap-4 text-sm'>
                    <div className='flex items-center gap-1'>
                      <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                      <span className='font-semibold'>{tour.rating}</span>
                      <span className='text-gray-500'>({tour.reviews})</span>
                    </div>
                    <div className='flex items-center gap-1 text-gray-600'>
                      <Calendar className='h-4 w-4' />
                      <span>{tour.duration}</span>
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div>
                      <div className='text-sm text-gray-500'>Starting from</div>
                      <div className='text-2xl font-bold text-cyan-600'>${tour.price}</div>
                    </div>
                    <Link
                      href={`/tours/${tour.id}`}
                      className='rounded-full bg-gray-900 px-6 py-2 font-semibold text-white transition-colors hover:bg-gray-800'>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-8 text-center'>
            <Link
              href='/tours'
              className='inline-flex items-center gap-2 font-semibold text-cyan-600 hover:text-cyan-700'>
              View all tours
              <ChevronRight className='h-5 w-5' />
            </Link>
          </div>
        </section>

        {/* AI Travel Agent Section */}
        <section className='mx-4 my-16 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 p-8 md:mx-8 md:p-12'>
          <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
            <div>
              <div className='mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-white'>
                <MessageCircle className='h-4 w-4' />
                AI-POWERED TRAVEL ASSISTANT
              </div>

              <h2 className='mb-6 text-3xl font-bold text-gray-900 md:text-5xl'>
                Your Personal Travel Agent, Reimagined.
              </h2>

              <p className='mb-8 text-lg text-gray-600'>
                Stop spending hours researching. Our AI understands your preferences, budget, and travel style to
                generate the perfect itinerary across Vietnam in seconds.
              </p>

              <div className='mb-8 space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='mt-1 rounded-full bg-cyan-400 p-1'>
                    <svg className='h-4 w-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>Instant custom itineraries</div>
                    <div className='text-gray-600'>Tailored to your preferences in seconds</div>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='mt-1 rounded-full bg-cyan-400 p-1'>
                    <svg className='h-4 w-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>Real-time booking assistance</div>
                    <div className='text-gray-600'>Book tours and hotels instantly</div>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='mt-1 rounded-full bg-cyan-400 p-1'>
                    <svg className='h-4 w-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>24/7 localized travel support</div>
                    <div className='text-gray-600'>Get help anytime, anywhere</div>
                  </div>
                </div>
              </div>

              <Link
                href='/chatbot'
                className='inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-white transition-colors hover:bg-cyan-500'>
                Start Planning Now
                <ChevronRight className='h-5 w-5' />
              </Link>
            </div>

            <div className='relative'>
              <div className='rounded-3xl bg-white p-6 shadow-2xl'>
                <div className='mb-4 flex items-center gap-3'>
                  <div className='rounded-full bg-cyan-400 p-3'>
                    <MessageCircle className='h-6 w-6 text-white' />
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>Vietnam Travel AI</div>
                    <div className='text-sm text-gray-500'>Your personal assistant</div>
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='rounded-2xl bg-gray-100 p-4'>
                    <p className='text-gray-700'>
                      Hello! I can help you plan your Vietnam adventure. Where would you like to go?
                    </p>
                  </div>

                  <div className='ml-8 rounded-2xl bg-cyan-400 p-4 text-white'>
                    <p>I want a 7-day trip exploring historical sites and local food. Budget around $1,500.</p>
                  </div>

                  <div className='rounded-2xl bg-gray-100 p-4'>
                    <p className='mb-3 text-gray-700'>
                      Perfect! Based on your request, I recommend a 7-day journey through Hanoi and Hoi An:
                    </p>
                    <div className='space-y-2 text-sm'>
                      <div className='flex items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-cyan-400' />
                        <span className='text-gray-600'>Day 1-3: Hanoi Old Quarter & street food</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-cyan-400' />
                        <span className='text-gray-600'>Day 4-7: Hoi An ancient town & cooking class</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-4 flex items-center gap-2'>
                  <input
                    type='text'
                    placeholder='Type your message...'
                    className='flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:border-cyan-400 focus:outline-none'
                    disabled
                  />
                  <button className='rounded-full bg-cyan-400 p-2 text-white'>
                    <ChevronRight className='h-5 w-5' />
                  </button>
                </div>
              </div>

              {/* Static chat preview - removed, using floating button instead */}
            </div>
          </div>
        </section>
      </main>

      <FloatingChatButton onClick={() => setIsChatOpen(true)} />
      <ChatbotModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <Footer />
    </>
  );
}

import Link from 'next/link';
import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';

const helpCategories = [
  {
    title: 'Getting Started',
    icon: (
      <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
      </svg>
    ),
    articles: [
      { title: 'How to create an account', link: '#' },
      { title: 'Booking your first tour', link: '#' },
      { title: 'Using the AI chatbot', link: '#' },
      { title: 'Payment methods', link: '#' },
    ],
  },
  {
    title: 'Booking & Reservations',
    icon: (
      <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        />
      </svg>
    ),
    articles: [
      { title: 'How to book a tour', link: '#' },
      { title: 'Modifying your booking', link: '#' },
      { title: 'Group bookings', link: '#' },
      { title: 'Booking confirmation', link: '#' },
    ],
  },
  {
    title: 'Payments & Refunds',
    icon: (
      <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
        />
      </svg>
    ),
    articles: [
      { title: 'Payment options', link: '#' },
      { title: 'Refund policy', link: '#' },
      { title: 'Payment security', link: '#' },
      { title: 'Currency conversion', link: '#' },
    ],
  },
  {
    title: 'Travel Information',
    icon: (
      <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    articles: [
      { title: 'Visa requirements', link: '#' },
      { title: 'Travel insurance', link: '#' },
      { title: 'Best time to visit', link: '#' },
      { title: 'Packing tips', link: '#' },
    ],
  },
  {
    title: 'Account & Profile',
    icon: (
      <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
        />
      </svg>
    ),
    articles: [
      { title: 'Update profile information', link: '#' },
      { title: 'Change password', link: '#' },
      { title: 'Email preferences', link: '#' },
      { title: 'Delete account', link: '#' },
    ],
  },
  {
    title: 'AI Chatbot',
    icon: (
      <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 20 20'>
        <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
        <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
      </svg>
    ),
    articles: [
      { title: 'How to use the AI chatbot', link: '#' },
      { title: 'Getting personalized recommendations', link: '#' },
      { title: 'Chatbot limitations', link: '#' },
      { title: 'Saving chat history', link: '#' },
    ],
  },
];

export default function HelpPage() {
  return (
    <div>
      <Header />
      <div className='mx-auto max-w-6xl px-8 py-16'>
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold'>Help Center</h1>
          <p className='text-gray-600'>Find guides, tutorials, and answers to your questions</p>
        </div>

        {/* Search Bar */}
        <div className='mx-auto mb-12 max-w-2xl'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search for help articles...'
              className='w-full rounded-full border border-gray-200 py-4 pr-4 pl-12 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
            />
            <svg
              className='absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
        </div>

        {/* Help Categories */}
        <div className='mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {helpCategories.map((category, index) => (
            <div
              key={index}
              className='rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600'>
                {category.icon}
              </div>
              <h3 className='mb-4 text-lg font-semibold text-gray-900'>{category.title}</h3>
              <ul className='space-y-2'>
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <a href={article.link} className='text-sm text-gray-600 hover:text-cyan-400'>
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className='grid gap-6 md:grid-cols-3'>
          <Link
            href='/faq'
            className='flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg'>
            <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-100'>
              <svg className='h-6 w-6 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900'>FAQ</h3>
              <p className='text-sm text-gray-600'>Common questions</p>
            </div>
          </Link>

          <Link
            href='/contact'
            className='flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg'>
            <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-100'>
              <svg className='h-6 w-6 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900'>Contact Us</h3>
              <p className='text-sm text-gray-600'>Get in touch</p>
            </div>
          </Link>

          <Link
            href='/chatbot'
            className='flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg'>
            <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-100'>
              <svg className='h-6 w-6 text-cyan-600' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
                <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
              </svg>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900'>AI Chatbot</h3>
              <p className='text-sm text-gray-600'>Instant help 24/7</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

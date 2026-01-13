import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';
import Link from 'next/link';

const destinations = [
  {
    name: 'Hanoi',
    region: 'Northern Vietnam',
    description: 'The capital city blending ancient traditions with modern life',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
    tours: 24,
    highlights: ['Old Quarter', 'Hoan Kiem Lake', 'Temple of Literature'],
  },
  {
    name: 'Ha Long Bay',
    region: 'Northern Vietnam',
    description: 'UNESCO World Heritage site with stunning limestone karsts',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800',
    tours: 18,
    highlights: ['Cruise Tours', 'Kayaking', 'Cave Exploration'],
  },
  {
    name: 'Sapa',
    region: 'Northern Vietnam',
    description: 'Mountain town famous for terraced rice fields',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
    tours: 15,
    highlights: ['Trekking', 'Ethnic Villages', 'Fansipan Peak'],
  },
  {
    name: 'Hue',
    region: 'Central Vietnam',
    description: 'Ancient imperial capital with rich history',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
    tours: 12,
    highlights: ['Imperial City', 'Royal Tombs', 'Perfume River'],
  },
  {
    name: 'Hoi An',
    region: 'Central Vietnam',
    description: 'Charming ancient town with lantern-lit streets',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
    tours: 21,
    highlights: ['Ancient Town', 'Japanese Bridge', 'Tailor Shops'],
  },
  {
    name: 'Da Nang',
    region: 'Central Vietnam',
    description: 'Modern coastal city with beautiful beaches',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800',
    tours: 16,
    highlights: ['My Khe Beach', 'Marble Mountains', 'Dragon Bridge'],
  },
  {
    name: 'Ho Chi Minh City',
    region: 'Southern Vietnam',
    description: 'Vibrant metropolis with French colonial architecture',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
    tours: 28,
    highlights: ['Ben Thanh Market', 'War Museum', 'Notre Dame Cathedral'],
  },
  {
    name: 'Mekong Delta',
    region: 'Southern Vietnam',
    description: 'Lush river delta with floating markets',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
    tours: 14,
    highlights: ['Floating Markets', 'River Cruises', 'Fruit Orchards'],
  },
  {
    name: 'Phu Quoc',
    region: 'Southern Vietnam',
    description: 'Tropical island paradise with pristine beaches',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800',
    tours: 19,
    highlights: ['Beach Resorts', 'Snorkeling', 'Night Market'],
  },
];

export default function DestinationsPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className='relative h-96 overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1528127269322-539801943592?w=1920)' }}>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/70'></div>
        </div>
        <div className='relative flex h-full items-center justify-center px-8 text-center text-white'>
          <div>
            <h1 className='mb-4 text-5xl font-bold'>Discover Vietnam</h1>
            <p className='text-xl'>From bustling cities to serene landscapes, explore the best destinations</p>
          </div>
        </div>
      </div>

      {/* Regions Filter */}
      <div className='border-b border-gray-200 bg-white px-8 py-6'>
        <div className='mx-auto flex max-w-6xl gap-4'>
          <button className='rounded-full bg-cyan-400 px-6 py-2 font-medium text-white'>All Regions</button>
          <button className='rounded-full border border-gray-200 px-6 py-2 font-medium text-gray-700 transition-colors hover:border-cyan-400 hover:text-cyan-400'>
            Northern Vietnam
          </button>
          <button className='rounded-full border border-gray-200 px-6 py-2 font-medium text-gray-700 transition-colors hover:border-cyan-400 hover:text-cyan-400'>
            Central Vietnam
          </button>
          <button className='rounded-full border border-gray-200 px-6 py-2 font-medium text-gray-700 transition-colors hover:border-cyan-400 hover:text-cyan-400'>
            Southern Vietnam
          </button>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className='mx-auto max-w-6xl px-8 py-12'>
        <div className='mb-8'>
          <h2 className='mb-2 text-3xl font-bold'>Popular Destinations</h2>
          <p className='text-gray-600'>Explore the most visited places in Vietnam</p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {destinations.map((destination, index) => (
            <div
              key={index}
              className='group overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-xl'>
              <div className='relative h-56 overflow-hidden'>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                <div className='absolute bottom-4 left-4 text-white'>
                  <h3 className='mb-1 text-2xl font-bold'>{destination.name}</h3>
                  <p className='text-sm'>{destination.region}</p>
                </div>
                <div className='absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-900'>
                  {destination.tours} tours
                </div>
              </div>

              <div className='p-5'>
                <p className='mb-4 text-gray-600'>{destination.description}</p>

                <div className='mb-4'>
                  <p className='mb-2 text-sm font-semibold text-gray-700'>Top Highlights:</p>
                  <div className='flex flex-wrap gap-2'>
                    {destination.highlights.map((highlight, idx) => (
                      <span key={idx} className='rounded-full bg-cyan-50 px-3 py-1 text-xs text-cyan-700'>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className='block w-full rounded-full border border-cyan-400 py-2 text-center font-medium text-cyan-400 transition-colors hover:bg-cyan-400 hover:text-white'>
                  Explore {destination.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Tips Section */}
      <div className='bg-gray-50 px-8 py-16'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-8 text-center text-3xl font-bold'>Travel Tips for Vietnam</h2>
          <div className='grid gap-6 md:grid-cols-3'>
            <div className='rounded-lg bg-white p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100'>
                <svg className='h-6 w-6 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-lg font-semibold'>Best Time to Visit</h3>
              <p className='text-sm text-gray-600'>
                November to April offers the best weather across most regions, with dry conditions and comfortable
                temperatures.
              </p>
            </div>

            <div className='rounded-lg bg-white p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100'>
                <svg className='h-6 w-6 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-lg font-semibold'>Currency</h3>
              <p className='text-sm text-gray-600'>
                Vietnamese Dong (VND) is the local currency. USD is widely accepted in tourist areas. ATMs are readily
                available.
              </p>
            </div>

            <div className='rounded-lg bg-white p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100'>
                <svg className='h-6 w-6 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-lg font-semibold'>Stay Connected</h3>
              <p className='text-sm text-gray-600'>
                Purchase a local SIM card at the airport for affordable data. WiFi is available in most hotels and
                cafes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-16 text-white'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mb-4 text-3xl font-bold'>Ready to Plan Your Vietnam Adventure?</h2>
          <p className='mb-8 text-lg'>
            Let our AI assistant help you create the perfect itinerary based on your interests
          </p>
          <div className='flex justify-center gap-4'>
            <Link
              href='/chatbot'
              className='rounded-full bg-white px-8 py-3 font-medium text-cyan-600 transition-colors hover:bg-gray-100'>
              Chat with AI
            </Link>
            <Link
              href='/tours'
              className='rounded-full border-2 border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-cyan-600'>
              Browse Tours
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

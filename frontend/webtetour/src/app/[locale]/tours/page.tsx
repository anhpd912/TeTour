import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';
import Link from 'next/link';

const tours = [
  {
    id: 1,
    title: 'Ha Long Bay Cruise',
    location: 'Ha Long Bay',
    duration: '2 Days 1 Night',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
    rating: 4.8,
    reviews: 245,
    description: 'Explore the stunning limestone karsts and emerald waters',
  },
  {
    id: 2,
    title: 'Hoi An Ancient Town',
    location: 'Hoi An',
    duration: '1 Day',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
    rating: 4.9,
    reviews: 312,
    description: 'Walk through the charming streets of this UNESCO World Heritage site',
  },
  {
    id: 3,
    title: 'Mekong Delta Adventure',
    location: 'Mekong Delta',
    duration: '3 Days 2 Nights',
    price: '$249',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800',
    rating: 4.7,
    reviews: 189,
    description: 'Experience the vibrant floating markets and river life',
  },
  {
    id: 4,
    title: 'Sapa Trekking',
    location: 'Sapa',
    duration: '3 Days 2 Nights',
    price: '$279',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
    rating: 4.8,
    reviews: 156,
    description: 'Trek through terraced rice fields and ethnic minority villages',
  },
  {
    id: 5,
    title: 'Hue Imperial City',
    location: 'Hue',
    duration: '1 Day',
    price: '$79',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800',
    rating: 4.6,
    reviews: 198,
    description: 'Discover the ancient capital and royal tombs',
  },
  {
    id: 6,
    title: 'Phong Nha Cave Exploration',
    location: 'Phong Nha',
    duration: '2 Days 1 Night',
    price: '$189',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
    rating: 4.9,
    reviews: 223,
    description: "Explore the world's largest cave systems",
  },
];

export default function ToursPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className='bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-16 text-white'>
        <div className='mx-auto max-w-6xl'>
          <h1 className='mb-4 text-5xl font-bold'>Explore Vietnam Tours</h1>
          <p className='mb-8 text-xl'>Discover unforgettable experiences across Vietnam</p>

          {/* Search Bar */}
          <div className='flex gap-4'>
            <input
              type='text'
              placeholder='Search destinations...'
              className='flex-1 rounded-full px-6 py-3 text-gray-900 focus:ring-2 focus:ring-white focus:outline-none'
            />
            <button className='rounded-full bg-white px-8 py-3 font-medium text-cyan-600 transition-colors hover:bg-gray-100'>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className='border-b border-gray-200 bg-white px-8 py-4'>
        <div className='mx-auto flex max-w-6xl gap-4'>
          <select className='rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none'>
            <option>All Durations</option>
            <option>1 Day</option>
            <option>2-3 Days</option>
            <option>4+ Days</option>
          </select>
          <select className='rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none'>
            <option>All Prices</option>
            <option>Under $100</option>
            <option>$100 - $200</option>
            <option>$200+</option>
          </select>
          <select className='rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none'>
            <option>Sort by: Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      {/* Tours Grid */}
      <div className='mx-auto max-w-6xl px-8 py-12'>
        <div className='mb-8 flex items-center justify-between'>
          <h2 className='text-2xl font-bold'>Available Tours</h2>
          <p className='text-gray-600'>{tours.length} tours found</p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {tours.map((tour) => (
            <div
              key={tour.id}
              className='overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg'>
              <div className='relative h-48 overflow-hidden'>
                <img src={tour.image} alt={tour.title} className='h-full w-full object-cover' />
                <div className='absolute top-3 right-3 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-900'>
                  {tour.price}
                </div>
              </div>

              <div className='p-5'>
                <div className='mb-2 flex items-center gap-2 text-sm text-gray-600'>
                  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  {tour.location}
                  <span className='mx-2'>•</span>
                  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  {tour.duration}
                </div>

                <h3 className='mb-2 text-lg font-semibold text-gray-900'>{tour.title}</h3>
                <p className='mb-3 text-sm text-gray-600'>{tour.description}</p>

                <div className='mb-4 flex items-center gap-2'>
                  <div className='flex items-center gap-1'>
                    <svg className='h-4 w-4 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <span className='text-sm font-semibold'>{tour.rating}</span>
                  </div>
                  <span className='text-sm text-gray-500'>({tour.reviews} reviews)</span>
                </div>

                <Link
                  href={`/tours/${tour.id}`}
                  className='block w-full rounded-full bg-cyan-400 py-2 text-center font-medium text-white transition-colors hover:bg-cyan-500'>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-gray-50 px-8 py-16'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mb-4 text-3xl font-bold'>Can't Find What You're Looking For?</h2>
          <p className='mb-8 text-gray-600'>
            Let our AI chatbot help you create a personalized itinerary based on your preferences
          </p>
          <Link
            href='/chatbot'
            className='inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3 font-medium text-white transition-colors hover:bg-cyan-500'>
            <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
              <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
            </svg>
            Chat with AI Assistant
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

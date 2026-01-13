'use client';

import { useState } from 'react';
import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div>
      <Header />
      <div className='mx-auto max-w-6xl px-8 py-16'>
        <h1 className='mb-4 text-4xl font-bold'>Contact Us</h1>
        <p className='mb-12 text-gray-600'>Get in touch with our team. We're here to help!</p>

        <div className='grid gap-8 lg:grid-cols-2'>
          {/* Contact Form */}
          <div className='rounded-lg border border-gray-200 bg-white p-8'>
            <h2 className='mb-6 text-2xl font-semibold'>Send us a message</h2>
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-700'>Full Name</label>
                <input
                  type='text'
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-gray-700'>Email Address</label>
                <input
                  type='email'
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                  placeholder='your@email.com'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-gray-700'>Phone Number</label>
                <input
                  type='tel'
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                  placeholder='+84 000 000 000'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-gray-700'>Subject</label>
                <input
                  type='text'
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                  placeholder='How can we help?'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-gray-700'>Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                  placeholder='Tell us more about your inquiry...'
                />
              </div>

              <button
                type='submit'
                className='w-full rounded-full bg-cyan-400 py-3 font-medium text-white transition-colors hover:bg-cyan-500'>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-6'>
            <div className='rounded-lg border border-gray-200 bg-white p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100'>
                <svg className='h-6 w-6 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-lg font-semibold'>Email</h3>
              <p className='text-gray-600'>support@vietnamtravel.com</p>
              <p className='text-gray-600'>booking@vietnamtravel.com</p>
            </div>

            <div className='rounded-lg border border-gray-200 bg-white p-6'>
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
              <h3 className='mb-2 text-lg font-semibold'>Phone</h3>
              <p className='text-gray-600'>+84 (0) 123 456 789</p>
              <p className='text-sm text-gray-500'>Mon-Fri: 8:00 AM - 8:00 PM</p>
            </div>

            <div className='rounded-lg border border-gray-200 bg-white p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100'>
                <svg className='h-6 w-6 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
              </div>
              <h3 className='mb-2 text-lg font-semibold'>Office</h3>
              <p className='text-gray-600'>123 Nguyen Hue Street</p>
              <p className='text-gray-600'>District 1, Ho Chi Minh City</p>
              <p className='text-gray-600'>Vietnam</p>
            </div>

            <div className='rounded-lg border border-gray-200 bg-white p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100'>
                <svg className='h-6 w-6 text-cyan-600' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
                  <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
                </svg>
              </div>
              <h3 className='mb-2 text-lg font-semibold'>AI Chatbot</h3>
              <p className='mb-3 text-gray-600'>Get instant answers 24/7</p>
              <a
                href='/chatbot'
                className='inline-block rounded-full bg-cyan-400 px-6 py-2 text-sm text-white transition-colors hover:bg-cyan-500'>
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

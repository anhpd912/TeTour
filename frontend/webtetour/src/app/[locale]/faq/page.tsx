'use client';

import { useState } from 'react';
import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';

const faqs = [
  {
    category: 'Booking & Payment',
    questions: [
      {
        q: 'How do I book a tour?',
        a: 'You can book a tour through our website by selecting your desired tour, choosing dates, and completing the payment process. Our AI chatbot can also help you find and book the perfect tour.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All payments are processed securely.',
      },
      {
        q: 'When will I receive my booking confirmation?',
        a: "You will receive an email confirmation immediately after your payment is processed. If you don't receive it within 24 hours, please check your spam folder or contact us.",
      },
    ],
  },
  {
    category: 'Cancellation & Refunds',
    questions: [
      {
        q: 'What is your cancellation policy?',
        a: 'Cancellations made 30+ days before departure receive a full refund minus processing fee. 15-29 days: 50% refund. Less than 14 days: no refund. Some tours may have different policies.',
      },
      {
        q: 'How long does it take to process a refund?',
        a: 'Refunds are typically processed within 7-10 business days after cancellation approval. The time it takes to appear in your account depends on your payment provider.',
      },
    ],
  },
  {
    category: 'Travel Information',
    questions: [
      {
        q: 'Do I need a visa to visit Vietnam?',
        a: 'Visa requirements vary by nationality. Many countries can enter Vietnam visa-free for 15-30 days. Check with your local Vietnamese embassy or consulate for specific requirements.',
      },
      {
        q: 'What is the best time to visit Vietnam?',
        a: 'Vietnam can be visited year-round, but the best time depends on the region. North Vietnam: September-November and March-May. Central Vietnam: February-May. South Vietnam: December-April.',
      },
      {
        q: 'Is travel insurance required?',
        a: 'While not mandatory, we strongly recommend purchasing comprehensive travel insurance covering medical expenses, trip cancellation, and lost luggage.',
      },
    ],
  },
  {
    category: 'AI Chatbot',
    questions: [
      {
        q: 'How does the AI chatbot work?',
        a: 'Our AI chatbot uses advanced algorithms to understand your preferences and recommend personalized itineraries. Simply chat with it about your interests, budget, and travel dates.',
      },
      {
        q: 'Is the AI chatbot available 24/7?',
        a: 'Yes! Our AI chatbot is available 24/7 to help you plan your trip, answer questions, and provide recommendations.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div>
      <Header />
      <div className='mx-auto max-w-4xl px-8 py-16'>
        <h1 className='mb-4 text-4xl font-bold'>Frequently Asked Questions</h1>
        <p className='mb-12 text-gray-600'>Find answers to common questions about our services</p>

        <div className='space-y-8'>
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className='mb-4 text-2xl font-semibold text-gray-900'>{category.category}</h2>
              <div className='space-y-3'>
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div key={questionIndex} className='rounded-lg border border-gray-200 bg-white'>
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className='flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-gray-50'>
                        <span className='font-medium text-gray-900'>{faq.q}</span>
                        <svg
                          className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className='border-t border-gray-200 bg-gray-50 p-5'>
                          <p className='text-gray-700'>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 rounded-lg bg-cyan-50 p-6'>
          <h3 className='mb-2 text-lg font-semibold text-gray-900'>Still have questions?</h3>
          <p className='mb-4 text-gray-700'>
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <a
            href='/contact'
            className='inline-block rounded-full bg-cyan-400 px-6 py-2 text-white transition-colors hover:bg-cyan-500'>
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

'use client';

import { useState } from 'react';
import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI travel assistant for Vietnam. I can help you plan your perfect trip, recommend destinations, and answer questions about tours. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: 'Thank you for your message! This is a demo chatbot. In the full version, I would provide personalized recommendations based on your preferences. Would you like to explore our tours or learn more about Vietnam destinations?',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const quickQuestions = [
    'Best time to visit Vietnam?',
    'Recommend 7-day itinerary',
    'Budget-friendly tours',
    'Family-friendly activities',
  ];

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='flex flex-1 flex-col bg-gray-50'>
        <div className='mx-auto w-full max-w-5xl flex-1 px-4 py-8'>
          {/* Header */}
          <div className='mb-6 text-center'>
            <h1 className='mb-2 text-3xl font-bold'>AI Travel Assistant</h1>
            <p className='text-gray-600'>Get personalized recommendations for your Vietnam adventure</p>
          </div>

          {/* Chat Container */}
          <div
            className='mb-4 flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm'
            style={{ height: '500px' }}>
            {/* Messages */}
            <div className='flex-1 space-y-4 overflow-y-auto p-6'>
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`flex max-w-[70%] gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                        message.sender === 'bot' ? 'bg-cyan-100' : 'bg-gray-200'
                      }`}>
                      {message.sender === 'bot' ? (
                        <svg className='h-5 w-5 text-cyan-600' fill='currentColor' viewBox='0 0 20 20'>
                          <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
                          <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
                        </svg>
                      ) : (
                        <svg className='h-5 w-5 text-gray-600' fill='currentColor' viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                            clipRule='evenodd'
                          />
                        </svg>
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`rounded-lg px-4 py-3 ${
                        message.sender === 'bot' ? 'bg-gray-100 text-gray-800' : 'bg-cyan-400 text-white'
                      }`}>
                      <p className='text-sm'>{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className='border-t border-gray-200 p-4'>
              <form onSubmit={handleSendMessage} className='flex gap-2'>
                <input
                  type='text'
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder='Type your message...'
                  className='flex-1 rounded-full border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none'
                />
                <button
                  type='submit'
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-white transition-colors hover:bg-cyan-500'>
                  <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Quick Questions */}
          <div className='mb-6'>
            <p className='mb-3 text-sm font-medium text-gray-700'>Quick questions:</p>
            <div className='flex flex-wrap gap-2'>
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className='rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:border-cyan-400 hover:bg-cyan-50'>
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className='grid gap-4 md:grid-cols-3'>
            <div className='rounded-lg border border-gray-200 bg-white p-4'>
              <div className='mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100'>
                <svg className='h-5 w-5 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
              </div>
              <h3 className='mb-1 font-semibold'>Instant Responses</h3>
              <p className='text-sm text-gray-600'>Get answers to your questions 24/7</p>
            </div>

            <div className='rounded-lg border border-gray-200 bg-white p-4'>
              <div className='mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100'>
                <svg className='h-5 w-5 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-1 font-semibold'>Personalized</h3>
              <p className='text-sm text-gray-600'>Recommendations based on your preferences</p>
            </div>

            <div className='rounded-lg border border-gray-200 bg-white p-4'>
              <div className='mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100'>
                <svg className='h-5 w-5 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                  />
                </svg>
              </div>
              <h3 className='mb-1 font-semibold'>Expert Knowledge</h3>
              <p className='text-sm text-gray-600'>Trained on Vietnam travel expertise</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

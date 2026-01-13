'use client';

import { MessageCircle, X, Send } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export default function ChatbotModal({ isOpen, onClose }: ChatbotModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I can help you plan your Vietnam adventure. Where would you like to go?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: 'Thank you for your message! Our AI is processing your request. This is a demo response.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity' onClick={onClose} />

      {/* Modal */}
      <div className='fixed right-0 bottom-0 z-50 m-4 flex h-[600px] w-full max-w-md flex-col rounded-3xl bg-white shadow-2xl md:right-4 md:bottom-4'>
        {/* Header */}
        <div className='flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-cyan-400 to-blue-500 p-6 text-white'>
          <div className='flex items-center gap-3'>
            <div className='rounded-full bg-white/20 p-2'>
              <MessageCircle className='h-6 w-6' />
            </div>
            <div>
              <h3 className='font-semibold'>Vietnam Travel AI</h3>
              <p className='text-sm opacity-90'>Your personal assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className='rounded-full p-2 transition-colors hover:bg-white/20'
            aria-label='Close chat'>
            <X className='h-6 w-6' />
          </button>
        </div>

        {/* Messages */}
        <div className='flex-1 space-y-4 overflow-y-auto p-6'>
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === 'user' ? 'bg-cyan-400 text-white' : 'bg-gray-100 text-gray-900'
                }`}>
                <p className='text-sm'>{message.text}</p>
                <p className={`mt-1 text-xs ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className='border-t border-gray-200 px-6 py-3'>
          <div className='flex gap-2 overflow-x-auto'>
            <button
              onClick={() => setInputValue('Show me tours in Hanoi')}
              className='rounded-full border border-gray-300 px-4 py-2 text-sm whitespace-nowrap text-gray-700 transition-colors hover:border-cyan-400 hover:bg-cyan-50'>
              Tours in Hanoi
            </button>
            <button
              onClick={() => setInputValue('Beach destinations')}
              className='rounded-full border border-gray-300 px-4 py-2 text-sm whitespace-nowrap text-gray-700 transition-colors hover:border-cyan-400 hover:bg-cyan-50'>
              Beach destinations
            </button>
            <button
              onClick={() => setInputValue('7-day itinerary')}
              className='rounded-full border border-gray-300 px-4 py-2 text-sm whitespace-nowrap text-gray-700 transition-colors hover:border-cyan-400 hover:bg-cyan-50'>
              7-day itinerary
            </button>
          </div>
        </div>

        {/* Input */}
        <div className='border-t border-gray-200 p-4'>
          <div className='flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 focus-within:border-cyan-400 focus-within:bg-white'>
            <input
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder='Type your message...'
              className='flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none'
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className='rounded-full bg-cyan-400 p-2 text-white transition-colors hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50'
              aria-label='Send message'>
              <Send className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { ReactQueryProvider } from 'src/shared/providers/ReactQueryProvider';
import StructuredData from 'src/shared/components/StructuredData';

export const metadata: Metadata = {
  title: {
    default: 'Vietnam Travel - Discover the Soul of Vietnam | AI-Powered Travel Planning',
    template: '%s | Vietnam Travel',
  },
  description:
    "Experience personalized travel planning with our AI-powered consultation. Explore Vietnam's best tours, destinations, and cultural experiences. Book your dream vacation today with instant custom itineraries and 24/7 travel support.",
  keywords: [
    'Vietnam travel',
    'Vietnam tours',
    'AI travel planner',
    'Vietnam vacation',
    'Halong Bay',
    'Sapa trekking',
    'Hoi An tours',
    'Vietnam destinations',
    'travel booking',
    'personalized itinerary',
  ],
  authors: [{ name: 'Vietnam Travel' }],
  creator: 'Vietnam Travel',
  publisher: 'Vietnam Travel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vietnamtravel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vietnam Travel - Discover the Soul of Vietnam',
    description:
      "Experience personalized travel planning with our AI-powered consultation. Explore Vietnam's best tours and destinations.",
    url: 'https://vietnamtravel.com',
    siteName: 'Vietnam Travel',
    images: [
      {
        url: '/halong-bay.jpg',
        width: 1200,
        height: 630,
        alt: 'Ha Long Bay - Vietnam beautiful limestone karsts and emerald waters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vietnam Travel - Discover the Soul of Vietnam',
    description:
      "Experience personalized travel planning with our AI-powered consultation. Explore Vietnam's best tours and destinations.",
    images: ['/halong-bay.jpg'],
    creator: '@vietnamtravel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <StructuredData />
      </head>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}

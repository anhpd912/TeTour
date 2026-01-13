export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Vietnam Travel',
    description: 'AI-powered travel planning for Vietnam tours and destinations',
    url: 'https://vietnamtravel.com',
    logo: 'https://vietnamtravel.com/logo.png',
    sameAs: [
      'https://facebook.com/vietnamtravel',
      'https://twitter.com/vietnamtravel',
      'https://instagram.com/vietnamtravel',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-xxx-xxx-xxx',
      contactType: 'customer service',
      availableLanguage: ['English', 'Vietnamese'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vietnam Travel',
    url: 'https://vietnamtravel.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vietnamtravel.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}

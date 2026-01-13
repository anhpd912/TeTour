import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';

export default function PrivacyPage() {
  return (
    <div>
      <Header />
      <div className='mx-auto max-w-4xl px-8 py-16'>
        <h1 className='mb-8 text-4xl font-bold'>Privacy Policy</h1>
        <div className='space-y-6 text-gray-700'>
          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className='mt-2 ml-6 list-disc space-y-1'>
              <li>Personal information (name, email, phone number)</li>
              <li>Payment information for booking transactions</li>
              <li>Travel preferences and history</li>
              <li>Communications with our AI chatbot and customer service</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className='mt-2 ml-6 list-disc space-y-1'>
              <li>Process your bookings and provide travel services</li>
              <li>Communicate with you about your trips and our services</li>
              <li>Improve our AI chatbot recommendations</li>
              <li>Send promotional materials (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>3. Information Sharing</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className='mt-2 ml-6 list-disc space-y-1'>
              <li>Tour operators and service providers necessary to fulfill your bookings</li>
              <li>Payment processors for transaction processing</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is
              completely secure.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className='mt-2 ml-6 list-disc space-y-1'>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience. See our{' '}
              <a href='/cookie-policy' className='text-cyan-400 hover:underline'>
                Cookie Policy
              </a>{' '}
              for more details.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>7. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal information from
              children under 13.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>8. Contact Us</h2>
            <p>
              For privacy-related questions, contact us at{' '}
              <a href='mailto:privacy@vietnamtravel.com' className='text-cyan-400 hover:underline'>
                privacy@vietnamtravel.com
              </a>
            </p>
          </section>

          <p className='mt-8 text-sm text-gray-500'>Last updated: January 13, 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

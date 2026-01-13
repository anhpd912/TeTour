import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';

export default function TermsPage() {
  return (
    <div>
      <Header />
      <div className='mx-auto max-w-4xl px-8 py-16'>
        <h1 className='mb-8 text-4xl font-bold'>Terms of Service</h1>
        <div className='space-y-6 text-gray-700'>
          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Vietnam Travel's services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>2. Use of Services</h2>
            <p>
              Our services are provided for personal, non-commercial use. You agree to use our platform only for lawful
              purposes and in accordance with these Terms of Service.
            </p>
            <ul className='mt-2 ml-6 list-disc space-y-1'>
              <li>You must be at least 18 years old to book tours</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree to provide accurate and complete information</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>3. Booking and Payment</h2>
            <p>
              All bookings are subject to availability and confirmation. Payment must be made in full at the time of
              booking unless otherwise specified. We accept various payment methods including credit cards and bank
              transfers.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>4. Cancellation Policy</h2>
            <p>Cancellation policies vary by tour and service provider:</p>
            <ul className='mt-2 ml-6 list-disc space-y-1'>
              <li>Cancellations made 30+ days before departure: Full refund minus processing fee</li>
              <li>Cancellations made 15-29 days before: 50% refund</li>
              <li>Cancellations made less than 14 days before: No refund</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>5. AI Chatbot Service</h2>
            <p>
              Our AI-powered chatbot provides travel recommendations and assistance. While we strive for accuracy, the
              information provided is for guidance only and should not be considered as professional travel advice.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>6. Limitation of Liability</h2>
            <p>
              Vietnam Travel acts as an intermediary between travelers and service providers. We are not liable for any
              injuries, damages, or losses incurred during your travel. Travel insurance is strongly recommended.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
              to our website. Your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>8. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href='mailto:legal@vietnamtravel.com' className='text-cyan-400 hover:underline'>
                legal@vietnamtravel.com
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

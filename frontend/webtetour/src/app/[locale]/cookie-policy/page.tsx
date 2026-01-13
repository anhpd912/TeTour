import Header from 'src/shared/components/Header';
import Footer from 'src/shared/components/Footer';

export default function CookiePolicyPage() {
  return (
    <div>
      <Header />
      <div className='mx-auto max-w-4xl px-8 py-16'>
        <h1 className='mb-8 text-4xl font-bold'>Cookie Policy</h1>
        <div className='space-y-6 text-gray-700'>
          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and understanding how you use our
              site.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>Types of Cookies We Use</h2>

            <div className='mt-4 space-y-4'>
              <div>
                <h3 className='mb-2 text-lg font-semibold text-gray-800'>Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable core functionality such
                  as security, network management, and accessibility.
                </p>
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold text-gray-800'>Performance Cookies</h3>
                <p>
                  These cookies collect information about how visitors use our website, such as which pages are visited
                  most often. This helps us improve our website's performance.
                </p>
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold text-gray-800'>Functionality Cookies</h3>
                <p>
                  These cookies allow our website to remember choices you make (such as language preferences) and
                  provide enhanced, personalized features.
                </p>
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold text-gray-800'>Targeting/Advertising Cookies</h3>
                <p>
                  These cookies are used to deliver advertisements more relevant to you and your interests. They also
                  help limit the number of times you see an advertisement.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>Third-Party Cookies</h2>
            <p>We may use third-party services that set cookies on our behalf, including:</p>
            <ul className='mt-2 ml-6 list-disc space-y-1'>
              <li>Google Analytics for website analytics</li>
              <li>Payment processors for secure transactions</li>
              <li>Social media platforms for sharing features</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies.
              Please note that if you disable cookies, some features of our website may not function properly.
            </p>
            <p className='mt-2'>To manage cookies in your browser:</p>
            <ul className='mt-2 ml-6 list-disc space-y-1'>
              <li>Chrome: Settings → Privacy and security → Cookies</li>
              <li>Firefox: Options → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Privacy → Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
              updated revision date.
            </p>
          </section>

          <section>
            <h2 className='mb-3 text-2xl font-semibold text-gray-900'>Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at{' '}
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

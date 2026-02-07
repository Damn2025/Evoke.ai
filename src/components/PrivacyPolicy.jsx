import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import evokeLogo from '../assets/evoke.png';

const PrivacyPolicy = ({ theme, onBack }) => {
  const navigate = useNavigate();
  const handleBack = onBack ?? (() => navigate('/'));
  const isDark = theme === 'dark';

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-700`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={handleBack}
            className={`mb-6 flex items-center gap-2 text-sm sm:text-base font-medium hover:opacity-70 transition-opacity ${
              isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          
          <div className="flex items-center gap-3 mb-6">
            <img src={evokeLogo} className="w-10 h-10 object-contain rounded-full" alt="Evoke AI" />
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
              Privacy Policy
            </h1>
          </div>
          
          <p className={`text-sm sm:text-base ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className={`space-y-6 sm:space-y-8 ${isDark ? 'text-white/90' : 'text-black/90'}`}>
          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              1. Introduction
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Welcome to EVOKE AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://evokeai.in" className="underline hover:opacity-70">evokeai.in</a> and use our services.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  2.1 Information You Provide
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  We may collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm sm:text-base ml-4">
                  <li>Contact us through our contact form</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Request information about our products or services</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>
                <p className="text-sm sm:text-base leading-relaxed mt-4">
                  This information may include your name, email address, phone number, company name, and any other information you choose to provide.
                </p>
              </div>
              
              <div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  2.2 Automatically Collected Information
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm sm:text-base ml-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages you visit and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Date and time of your visit</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              3. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base ml-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base ml-4">
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as email delivery, analytics, and hosting services.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>With Your Consent:</strong> We may share your information with your explicit consent.</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              5. Data Security
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              6. Your Rights
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base ml-4">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              8. Third-Party Links
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              9. Children's Privacy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              11. Contact Us
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className={`p-4 sm:p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
              <p className="text-sm sm:text-base font-semibold mb-2">EVOKE AI</p>
              <p className="text-sm sm:text-base">
                Email: <a href="mailto:info@evokeai.in" className="underline hover:opacity-70">info@evokeai.in</a>
              </p>
              <p className="text-sm sm:text-base mt-2">
                Website: <a href="https://evokeai.in" className="underline hover:opacity-70" target="_blank" rel="noopener noreferrer">evokeai.in</a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className={`mt-12 sm:mt-16 pt-8 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <p className={`text-xs sm:text-sm text-center ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            © 2026 EVOKE AI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

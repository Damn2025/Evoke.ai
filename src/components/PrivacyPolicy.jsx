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
              Welcome to EVOKE AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://evokeai.in" className="underline hover:opacity-70">evokeai.in</a>, including when you reach us through our LinkedIn ads, campaigns, or other marketing channels, and when you use our services or submit the contact form on this landing page.
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
                  <li>Submit our contact form (name, email, phone, company, location, message)</li>
                  <li>Contact us through our contact form or other channels</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Request information about our products or services</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>
                <p className="text-sm sm:text-base leading-relaxed mt-4">
                  This information may include your name, email address, phone number, company name, job title, location, and any other information you choose to provide. By submitting our contact form, you consent to us processing your data to respond to your inquiry and, where permitted, to send you marketing communications about our products and services.
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
                  <li>Referring website addresses (including that you came from LinkedIn or other ad platforms)</li>
                  <li>Date and time of your visit</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              3. Marketing, Advertising & How You May Reach Us
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              You may reach this website through our advertising on LinkedIn or other platforms. When you click on our ads or sponsored content:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base ml-4 mb-4">
              <li><strong>LinkedIn Ads:</strong> We may use LinkedIn's advertising platform, including the LinkedIn Insight Tag and conversion tracking, to measure ad performance and attribute conversions. LinkedIn may collect and share with us aggregated data about ad interactions (e.g., that you clicked our ad, your profile data if you are a LinkedIn member). LinkedIn's privacy policy applies to its data practices: <a href="https://www.linkedin.com/legal/privacy-policy" className="underline hover:opacity-70" target="_blank" rel="noopener noreferrer">LinkedIn Privacy Policy</a>.</li>
              <li><strong>Conversion Tracking:</strong> We may use pixels, tags, or similar technologies to track when visitors reach our landing page from ads and when they complete actions (e.g., form submissions).</li>
              <li><strong>Retargeting:</strong> We may use your visit data to show you relevant ads on LinkedIn or other platforms.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed">
              By using this site after clicking our ads, you acknowledge that we and our advertising partners may collect and use data as described in this policy and in the applicable platform policies.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              4. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base ml-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To measure and optimize the effectiveness of our advertising and landing pages</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              5. Information Sharing and Disclosure
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base ml-4">
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as email delivery (e.g., EmailJS), analytics, hosting, and advertising platforms (e.g., LinkedIn).</li>
              <li><strong>Advertising Platforms:</strong> When you interact with our ads or reach us via LinkedIn, we may share data with LinkedIn and other ad platforms for measurement, optimization, and reporting.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>With Your Consent:</strong> We may share your information with your explicit consent.</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              6. Data Security
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              7. Your Rights
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
              <li>The right to opt out of marketing communications</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below. You can also manage your LinkedIn ad preferences in your LinkedIn settings.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We may use cookies and similar tracking technologies to track activity on our website and store certain information. Third-party advertising platforms (including LinkedIn) may also place cookies or similar technologies when you visit our site after clicking our ads. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              9. Third-Party Links
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              10. Children's Privacy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              12. Contact Us
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

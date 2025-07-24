import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - StackSolutions',
  description: 'Learn about how StackSolutions uses cookies and similar technologies.',
  robots: 'index, follow',
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">We use cookies for several purposes:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Track visitors across websites for advertising</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-2">These cookies are necessary for the website to function properly:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Load balancing</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 mb-2">We use Google Analytics to understand site usage:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Page views and user sessions</li>
                  <li>Traffic sources and user behavior</li>
                  <li>Site performance metrics</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                <p className="text-gray-700 mb-2">These enhance your experience:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Language preferences</li>
                  <li>Theme settings</li>
                  <li>Form data retention</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that set their own cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> Website analytics and reporting</li>
                <li><strong>Google Fonts:</strong> Web font delivery</li>
                <li><strong>Social Media:</strong> Social sharing buttons and widgets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in several ways:
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
                <p className="text-gray-700 mb-2">Most browsers allow you to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>View and delete cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when closing the browser</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Opt-Out Links</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                  <li><a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a></li>
                  <li><a href="http://www.youronlinechoices.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices (EU)</a></li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie Consent</h2>
              <p className="text-gray-700 mb-4">
                By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Email: privacy@stacksolutions.dev<br />
                  Address: [Your Business Address]<br />
                  Phone: [Your Phone Number]
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
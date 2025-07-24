import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - StackSolutions',
  description: 'Read the terms and conditions for using StackSolutions services.',
  robots: 'index, follow',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using StackSolutions services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">
                StackSolutions provides professional development services including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Full-stack web development</li>
                <li>Mobile application development</li>
                <li>AI automation solutions</li>
                <li>SEO optimization services</li>
                <li>Technical consulting and support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Make payments according to agreed terms</li>
                <li>Respect intellectual property rights</li>
                <li>Use services in compliance with applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to project-specific terms</li>
                <li>All prices are exclusive of applicable taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Upon full payment, clients receive ownership of custom-developed code and assets. However:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>StackSolutions retains rights to general methodologies and frameworks</li>
                <li>Third-party components remain subject to their respective licenses</li>
                <li>StackSolutions may showcase work in portfolios with client consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                StackSolutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All outstanding invoices become immediately due</li>
                <li>Work completed to date will be delivered upon payment</li>
                <li>Confidentiality obligations continue indefinitely</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Email: legal@stacksolutions.dev<br />
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
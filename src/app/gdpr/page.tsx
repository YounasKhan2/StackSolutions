import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GDPR Compliance - StackSolutions',
  description: 'Learn about StackSolutions GDPR compliance and your data protection rights.',
  robots: 'index, follow',
}

export default function GDPRCompliance() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Compliance</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Our Commitment to GDPR</h2>
              <p className="text-gray-700 mb-4">
                StackSolutions is committed to protecting your personal data and respecting your privacy rights under the General Data Protection Regulation (GDPR). This page outlines how we comply with GDPR requirements and your rights as a data subject.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Legal Basis for Processing</h2>
              <p className="text-gray-700 mb-4">We process your personal data based on the following legal grounds:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Consent:</strong> When you explicitly agree to data processing</li>
                <li><strong>Contract:</strong> To fulfill our contractual obligations</li>
                <li><strong>Legitimate Interest:</strong> For business operations and improvements</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Your GDPR Rights</h2>
              <p className="text-gray-700 mb-4">Under GDPR, you have the following rights:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Right to Information</h3>
                  <p className="text-gray-700">Be informed about how your data is collected and used</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Right of Access</h3>
                  <p className="text-gray-700">Request copies of your personal data</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Right to Rectification</h3>
                  <p className="text-gray-700">Request correction of inaccurate personal data</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Right to Erasure</h3>
                  <p className="text-gray-700">Request deletion of your personal data ("right to be forgotten")</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Right to Restrict Processing</h3>
                  <p className="text-gray-700">Request limitation of data processing</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Right to Data Portability</h3>
                  <p className="text-gray-700">Request transfer of your data to another service</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Right to Object</h3>
                  <p className="text-gray-700">Object to processing based on legitimate interests</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Rights Related to Automated Decision Making</h3>
                  <p className="text-gray-700">Protection against automated profiling and decision-making</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Protection Measures</h2>
              <p className="text-gray-700 mb-4">We implement comprehensive security measures:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication systems</li>
                <li>Staff training on data protection principles</li>
                <li>Data minimization and purpose limitation</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
              <p className="text-gray-700 mb-4">We retain personal data only as long as necessary:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Contact inquiries:</strong> 2 years from last contact</li>
                <li><strong>Client data:</strong> 7 years after project completion (legal requirement)</li>
                <li><strong>Marketing data:</strong> Until consent is withdrawn</li>
                <li><strong>Analytics data:</strong> 26 months (Google Analytics default)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                When we transfer data outside the EU/EEA, we ensure adequate protection through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Adequacy decisions by the European Commission</li>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Binding Corporate Rules where applicable</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Breach Procedures</h2>
              <p className="text-gray-700 mb-4">In case of a data breach, we will:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Notify supervisory authorities within 72 hours</li>
                <li>Inform affected individuals without undue delay</li>
                <li>Document the breach and response measures</li>
                <li>Implement additional security measures as needed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Exercising Your Rights</h2>
              <p className="text-gray-700 mb-4">
                To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within one month.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Data Protection Contact</h3>
                <p className="text-blue-800">
                  Email: dpo@stacksolutions.dev<br />
                  Subject: GDPR Request - [Type of Request]<br />
                  Address: [Your Business Address]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Complaints</h2>
              <p className="text-gray-700 mb-4">
                If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with your local supervisory authority.
              </p>
              <p className="text-gray-700 mb-4">
                For EU residents, you can find your local authority at: 
                <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  European Data Protection Board
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this GDPR compliance information from time to time. We will notify you of any significant changes and update the "last updated" date at the top of this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}